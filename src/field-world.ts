import * as THREE from "three";
import type {
  ChunkData,
  FieldKitSave,
  FieldMarker,
  FieldNode,
  ModelKind,
  Position,
  Settings,
} from "./types";
import { SPECIES_BY_ID } from "./data";
import { MODEL_BOUNDS } from "./models";
import {
  createFieldModel,
  FIELD_ACTIVE_MATERIAL,
  FIELD_MODEL_BOUNDS,
  type FieldModelKind,
} from "./field-models";
import { CHUNK_SIZE, generateChunk, heightAt } from "./systems/worldgen";
import { hash, hashSeed, random } from "./systems/terrain";
import { waterAt } from "./systems/waters";
import { createFieldKit } from "./systems/fieldcraft";

const kindToModel: Record<FieldNode["kind"], FieldModelKind> = {
  cache: "field-cache",
  resin: "field-resin",
  crystal: "field-crystal",
  probe: "field-probe",
};
const starterPlan: { kind: FieldNode["kind"]; x: number; z: number }[] = [
  { kind: "cache", x: -10, z: 6 },
  { kind: "resin", x: 12, z: 7 },
  { kind: "crystal", x: -17, z: -8 },
  { kind: "probe", x: 21, z: -18 },
];
const nodeCache = new Map<string, FieldNode[]>();
const blockRadius: Partial<Record<ModelKind, number>> = {
  "canopy-tree": 0.65,
  "ribbon-tree": 0.48,
  "desert-spire": 0.72,
  "dune-rock": 0.95,
  "crystal-cluster": 0.5,
  "cave-column": 0.95,
  "ruin-ring": 0.6,
  "spire-pine": 0.42,
  "silver-birch": 0.45,
  "veil-willow": 0.55,
  "coral-tree": 0.55,
  "baobab-tree": 1.15,
  "spiral-tree": 0.5,
  "tree-fern": 0.4,
  "fan-palm": 0.4,
  "boulder-stack": 0.85,
  "fallen-log": 0.55,
  "barrel-cactus": 0.4,
};
const distance = (a: Position, b: Position) => Math.hypot(a.x - b.x, a.z - b.z);
const inChunk = (p: Position, cx: number, cz: number) =>
  Math.floor(p.x / CHUNK_SIZE) === cx && Math.floor(p.z / CHUNK_SIZE) === cz;
function safePlacement(
  seed: string,
  p: Position,
  chunk: ChunkData,
  existing: FieldNode[],
): boolean {
  if (Math.hypot(p.x, p.z) < 7 || (Math.abs(p.x) < 14 && p.z < 0 && p.z > -55))
    return false;
  if (
    chunk.sites.some((site) => distance(site, p) < 14) ||
    existing.some((node) => distance(node, p) < 7)
  )
    return false;
  if (
    chunk.entities.some(
      (entity) =>
        distance(entity, p) <
        (SPECIES_BY_ID[entity.speciesId].category === "fauna" ? 4 : 3.5),
    )
  )
    return false;
  if (
    chunk.props.some(
      (prop) =>
        distance(prop, p) < (blockRadius[prop.kind] ?? 0) * prop.scale + 1.7,
    )
  )
    return false;
  // Four corners plus centre keep the whole model and its interaction approach dry.
  for (const dx of [-1.4, 0, 1.4])
    for (const dz of [-1.4, 0, 1.4])
      if (waterAt(seed, p.x + dx, p.z + dz)) return false;
  const y = heightAt(seed, p.x, p.z);
  return [
    [-1.2, 0],
    [1.2, 0],
    [0, -1.2],
    [0, 1.2],
  ].every(
    ([dx, dz]) => Math.abs(heightAt(seed, p.x + dx, p.z + dz) - y) < 0.65,
  );
}
function makeNode(
  seed: string,
  kind: FieldNode["kind"],
  p: Position,
  namespace: string,
): FieldNode {
  const h = hashSeed(seed);
  return {
    ...p,
    kind,
    id: `field:${h.toString(16)}:${namespace}:${kind}`,
    seed: hash(h, Math.round(p.x * 100), Math.round(p.z * 100), 503),
    rewards:
      kind === "cache"
        ? { alloy: 3 }
        : kind === "resin"
          ? { "lumen-resin": 3 }
          : kind === "crystal"
            ? { crystal: 3 }
            : {},
  };
}
/** Independent random stream: new field supplies do not change old world IDs. */
export function generateFieldNodes(
  seed: string,
  cx: number,
  cz: number,
): FieldNode[] {
  const key = `${seed}\0${cx},${cz}`;
  const cached = nodeCache.get(key);
  if (cached) return cached;
  const chunk = generateChunk(seed, cx, cz),
    nodes: FieldNode[] = [];
  for (const starter of starterPlan) {
    if (!inChunk(starter, cx, cz)) continue;
    let chosen: Position | null = null;
    for (let i = 0; i < 96; i++) {
      const angle = i * 2.399963229728653;
      const radius = i === 0 ? 0 : 0.6 * Math.sqrt(i);
      const point = {
        x: starter.x + Math.cos(angle) * radius,
        z: starter.z + Math.sin(angle) * radius,
      };
      if (inChunk(point, cx, cz) && safePlacement(seed, point, chunk, nodes)) {
        chosen = point;
        break;
      }
    }
    // The landing clearing keeps these compact models approachable. A wider
    // deterministic search handles seeds with dense scenery at the first spot.
    for (let i = 0; !chosen && i < 100; i++) {
      const rng = random(hash(hashSeed(seed), cx, cz, 509 + i));
      const point = {
        x: cx * CHUNK_SIZE + 3 + rng() * 58,
        z: cz * CHUNK_SIZE + 3 + rng() * 58,
      };
      if (safePlacement(seed, point, chunk, nodes)) chosen = point;
    }
    if (chosen) nodes.push(makeNode(seed, starter.kind, chosen, `starter`));
  }
  const h = hashSeed(seed),
    rng = random(hash(h, cx, cz, 521));
  const resources: FieldNode["kind"][] = ["cache", "resin", "crystal"];
  // Starter chunks already contain useful supplies; add only the remaining
  // resource slots, rather than surrounding the player with duplicate loot.
  const remaining = resources.filter(
    (kind) => !nodes.some((node) => node.kind === kind),
  );
  if (
    !nodes.some((node) => node.kind === "probe") &&
    hash(h, cx, cz, 523) % 6 === 0
  )
    remaining.push("probe");
  for (let slot = 0; slot < remaining.length; slot++) {
    const kind = remaining[slot];
    for (let attempt = 0; attempt < 64; attempt++) {
      const point = {
        x: cx * CHUNK_SIZE + 3 + rng() * 58,
        z: cz * CHUNK_SIZE + 3 + rng() * 58,
      };
      if (!safePlacement(seed, point, chunk, nodes)) continue;
      nodes.push(makeNode(seed, kind, point, `${cx}:${cz}:${slot}`));
      break;
    }
  }
  nodeCache.set(key, nodes);
  if (nodeCache.size > 256) nodeCache.delete(nodeCache.keys().next().value!);
  return nodes;
}
interface FieldChunk {
  nodes: FieldNode[];
  objects: Map<string, THREE.Group>;
}

/** Chunk-bounded field supplies, rendered only within a short mobile-friendly reach. */
export class FieldWorld {
  readonly group = new THREE.Group();
  private chunks = new Map<string, FieldChunk>();
  private pending: [number, number][] = [];
  private kit = createFieldKit();
  private centre = "";
  private allNodes: FieldNode[] = [];
  private beacon: THREE.Group | null = null;
  private beaconKey = "";
  private direction = new THREE.Vector3();
  private delta = new THREE.Vector3();
  private collectedIds = new Set<string>();
  private repairedIds = new Set<string>();
  private collectedRef: string[] | null = null;
  private repairedRef: string[] | null = null;
  private collectedLength = -1;
  private repairedLength = -1;

  constructor(readonly seed: string) {
    this.group.name = "Vesper / field supplies";
    // The four starter chunks are available immediately, before background streaming.
    for (const [cx, cz] of [
      [-1, -1],
      [-1, 0],
      [0, -1],
      [0, 0],
    ])
      this.addChunk(cx, cz);
  }
  private addChunk(cx: number, cz: number) {
    this.chunks.set(`${cx},${cz}`, {
      nodes: generateFieldNodes(this.seed, cx, cz),
      objects: new Map(),
    });
    this.allNodes = [...this.chunks.values()].flatMap((chunk) => chunk.nodes);
  }
  private refreshHistory() {
    if (
      this.collectedRef !== this.kit.collected ||
      this.collectedLength !== this.kit.collected.length
    ) {
      this.collectedIds = new Set(this.kit.collected);
      this.collectedRef = this.kit.collected;
      this.collectedLength = this.kit.collected.length;
    }
    if (
      this.repairedRef !== this.kit.repaired ||
      this.repairedLength !== this.kit.repaired.length
    ) {
      this.repairedIds = new Set(this.kit.repaired);
      this.repairedRef = this.kit.repaired;
      this.repairedLength = this.kit.repaired.length;
    }
  }
  update(
    position: Position,
    kit: FieldKitSave,
    time: number,
    settings: Settings,
  ): void {
    this.kit = kit;
    const cx = Math.floor(position.x / CHUNK_SIZE),
      cz = Math.floor(position.z / CHUNK_SIZE);
    const radius =
      settings.quality === "low" ? 2 : settings.quality === "high" ? 4 : 3;
    const centre = `${cx},${cz}:${radius}`;
    if (centre !== this.centre) {
      this.centre = centre;
      const wanted = new Set<string>(),
        pending: [number, number][] = [];
      for (let dx = -radius; dx <= radius; dx++)
        for (let dz = -radius; dz <= radius; dz++) {
          const x = cx + dx,
            z = cz + dz,
            key = `${x},${z}`;
          wanted.add(key);
          if (!this.chunks.has(key)) pending.push([x, z]);
        }
      for (const [key, chunk] of this.chunks)
        if (!wanted.has(key)) {
          for (const object of chunk.objects.values())
            this.group.remove(object);
          this.chunks.delete(key);
        }
      pending.sort(
        (a, b) =>
          Math.hypot(a[0] - cx, a[1] - cz) - Math.hypot(b[0] - cx, b[1] - cz),
      );
      this.pending = pending;
      this.allNodes = [...this.chunks.values()].flatMap((chunk) => chunk.nodes);
    }
    const next = this.pending.shift();
    if (next) this.addChunk(...next);
    this.refreshHistory();
    for (const chunk of this.chunks.values())
      for (const node of chunk.nodes) {
        const visible =
          !this.collectedIds.has(node.id) && distance(node, position) < 45;
        let object = chunk.objects.get(node.id);
        if (!visible) {
          if (object) {
            this.group.remove(object);
            chunk.objects.delete(node.id);
          }
          continue;
        }
        if (!object) {
          object = createFieldModel(kindToModel[node.kind], node.seed);
          object.position.set(
            node.x,
            heightAt(this.seed, node.x, node.z),
            node.z,
          );
          object.rotation.y = (node.seed % 628) / 100;
          object.userData.fieldId = node.id;
          chunk.objects.set(node.id, object);
          this.group.add(object);
        }
        if (node.kind === "probe") {
          const indicator = object.getObjectByName("indicator") as THREE.Mesh;
          const active = this.repairedIds.has(node.id);
          if (active) indicator.material = FIELD_ACTIVE_MATERIAL;
          if (!indicator.userData.baseScale)
            indicator.userData.baseScale = indicator.scale.clone();
          indicator.scale
            .copy(indicator.userData.baseScale)
            .multiplyScalar(
              active && !settings.reducedMotion
                ? 1 + Math.sin(time * 1.4) * 0.04
                : 1,
            );
        }
      }
    const beaconKey = kit.beacon ? `${kit.beacon.x},${kit.beacon.z}` : "";
    if (beaconKey !== this.beaconKey) {
      if (this.beacon) this.group.remove(this.beacon);
      this.beacon = kit.beacon ? createFieldModel("field-beacon") : null;
      this.beaconKey = beaconKey;
      if (this.beacon && kit.beacon) {
        this.beacon.position.set(
          kit.beacon.x,
          heightAt(this.seed, kit.beacon.x, kit.beacon.z),
          kit.beacon.z,
        );
        this.group.add(this.beacon);
      }
    }
    if (this.beacon)
      this.beacon.visible = !!kit.beacon && distance(kit.beacon, position) < 80;
  }
  getNodes(): FieldNode[] {
    return this.allNodes;
  }
  getPosition(node: FieldNode): THREE.Vector3 {
    return new THREE.Vector3(
      node.x,
      heightAt(this.seed, node.x, node.z) +
        FIELD_MODEL_BOUNDS[kindToModel[node.kind]].height * 0.55,
      node.z,
    );
  }
  nearestTarget(
    camera: THREE.Camera,
    player: Position,
    maxReach = 5,
  ): FieldNode | null {
    this.refreshHistory();
    camera.getWorldDirection(this.direction);
    let best: FieldNode | null = null,
      bestScore = -Infinity;
    for (const node of this.allNodes) {
      if (this.collectedIds.has(node.id) || this.repairedIds.has(node.id))
        continue;
      const reach = distance(node, player);
      if (reach > maxReach) continue;
      this.delta.copy(this.getPosition(node)).sub(camera.position);
      const facing = this.delta.normalize().dot(this.direction);
      if (facing < (reach < 2.2 ? -0.1 : 0.42)) continue;
      const score = facing * 3 - reach * 0.35;
      if (score > bestScore) {
        bestScore = score;
        best = node;
      }
    }
    return best;
  }
  getMarkers(position: Position, radius = 80): FieldMarker[] {
    this.refreshHistory();
    const markers: FieldMarker[] = this.allNodes
      .filter(
        (node) =>
          !this.collectedIds.has(node.id) &&
          !this.repairedIds.has(node.id) &&
          distance(node, position) <= radius,
      )
      .map(({ id, kind, x, z }) => ({ id, kind, x, z }));
    if (this.kit.beacon)
      markers.push({
        ...this.kit.beacon,
        id: "field:active-beacon",
        kind: "beacon",
      });
    return markers;
  }
  dispose(): void {
    this.group.clear();
    this.chunks.clear();
    this.allNodes = [];
    this.pending = [];
    this.beacon = null;
  }
}
