import * as THREE from "three";
import { createModel, createLandingPod, MODEL_BOUNDS } from "./models";
import { SPECIES_BY_ID, HABITATS } from "./data";
import { animateWildlife } from "./wildlife";
import { createWaterSurface, updateWaterMaterial } from "./water-surface";
import { findDryBank, waterAt } from "./systems/waters";
import {
  CHUNK_SIZE,
  generateChunk,
  heightAt,
  getBiome,
  getHabitat,
} from "./systems/worldgen";
import type {
  WorldEntity,
  ChunkData,
  PropPlacement,
  SiteData,
  ModelKind,
  Position,
  Settings,
  SaveData,
} from "./types";

interface RenderEntity {
  data: WorldEntity;
  object: THREE.Group;
  marker: THREE.Mesh;
  baseY: number;
  phase: number;
}
interface RenderChunk {
  data: ChunkData;
  terrain: THREE.Mesh;
  roof: THREE.Mesh | null;
  water: THREE.Mesh | null;
  entities: RenderEntity[];
}
const GROUND = {
  forest: new THREE.Color("#71927b"),
  desert: new THREE.Color("#bd8c68"),
  caves: new THREE.Color("#354852"),
};
const HABITAT_GROUND = Object.fromEntries(
  Object.values(HABITATS).map((h) => [h.id, new THREE.Color(h.ground)]),
);
const COLLISION: Partial<Record<ModelKind, number>> = {
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

export class PlanetWorld {
  readonly group = new THREE.Group();
  readonly chunks = new Map<string, RenderChunk>();
  private pending: [number, number][] = [];
  private instanced: THREE.InstancedMesh[] = [];
  private templates = new Map<string, THREE.Group>();
  private collision: {
    x: number;
    z: number;
    r: number;
    y: number;
    h: number;
  }[] = [];
  private lastCenter = "";
  private dirty = false;
  private frame = 0;
  private radius = 3;
  private pulseTime = -100;
  private pulseOrigin = new THREE.Vector3();
  private pulseRing: THREE.Mesh;
  private halo: THREE.Mesh;
  private activeTarget = "";
  private terrainMaterial = new THREE.MeshStandardMaterial({
    vertexColors: true,
    roughness: 0.94,
    metalness: 0.02,
    flatShading: false,
  });
  private roofMaterial = new THREE.MeshStandardMaterial({
    color: "#25353e",
    roughness: 0.96,
    side: THREE.DoubleSide,
    flatShading: true,
  });
  private markerMaterial = new THREE.MeshBasicMaterial({
    color: "#c3eee2",
    transparent: true,
    opacity: 0.9,
    depthTest: false,
    side: THREE.DoubleSide,
  });
  private markerGeometry = new THREE.RingGeometry(0.13, 0.18, 24);
  private pod: THREE.Group;
  private entityCache: RenderEntity[] = [];
  private propAnchor = new THREE.Vector2(Infinity, Infinity);
  private currentPosition: Position = { x: 0, z: 0 };
  private wildlifeEnvironment = {
    height: (x: number, z: number) => heightAt(this.seed, x, z),
    biome: (x: number, z: number) => getBiome(this.seed, x, z),
    blocked: (x: number, z: number) => this.isBlocked(x, z),
    water: (x: number, z: number) => waterAt(this.seed, x, z),
  };
  constructor(
    private scene: THREE.Scene,
    readonly seed: string,
    settings: Settings,
  ) {
    this.radius =
      settings.quality === "low" ? 2 : settings.quality === "high" ? 4 : 3;
    this.group.name = "Seeded planet";
    scene.add(this.group);
    // World-space grain and flowing strata add detail without texture downloads.
    // Matching coordinates on both sides of a chunk preserve continuous detail.
    this.terrainMaterial.onBeforeCompile = (shader) => {
      shader.vertexShader = "varying vec3 vSurface;\n" + shader.vertexShader;
      shader.vertexShader = shader.vertexShader.replace(
        "#include <begin_vertex>",
        "#include <begin_vertex>\nvSurface = position;",
      );
      shader.fragmentShader =
        `varying vec3 vSurface;
float groundHash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
float groundNoise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(groundHash(i),groundHash(i+vec2(1.,0.)),f.x),mix(groundHash(i+vec2(0.,1.)),groundHash(i+1.),f.x),f.y);}
` + shader.fragmentShader;
      shader.fragmentShader = shader.fragmentShader.replace(
        "#include <color_fragment>",
        `#include <color_fragment>
float nearDetail=1.-smoothstep(15.,65.,distance(vSurface,cameraPosition));
float grain=groundNoise(vSurface.xz*5.2)*.065+groundNoise(vSurface.xz*.45)*.10;
float strata=sin(vSurface.x*.8+vSurface.z*.32+groundNoise(vSurface.xz*.035)*9.)*.018;
diffuseColor.rgb*=.94+(grain+strata)*nearDetail;
`,
      );
    };
    this.terrainMaterial.customProgramCacheKey = () => "vesper-ground-1";
    this.pod = createLandingPod();
    this.pod.position.set(-8, heightAt(seed, -8, 5), 5);
    this.pod.rotation.y = 0.5;
    this.group.add(this.pod);
    this.pulseRing = new THREE.Mesh(
      new THREE.RingGeometry(0.96, 1, 96),
      new THREE.MeshBasicMaterial({
        color: "#9ed9c3",
        transparent: true,
        opacity: 0,
        side: THREE.DoubleSide,
        depthWrite: false,
      }),
    );
    this.pulseRing.rotation.x = -Math.PI / 2;
    this.group.add(this.pulseRing);
    this.halo = new THREE.Mesh(
      new THREE.RingGeometry(0.42, 0.445, 64),
      new THREE.MeshBasicMaterial({
        color: "#dbe9cf",
        transparent: true,
        opacity: 0.6,
        side: THREE.DoubleSide,
        depthTest: false,
        depthWrite: false,
      }),
    );
    this.halo.renderOrder = 9;
    this.halo.visible = false;
    this.group.add(this.halo);
    this.updateRegion({ x: 0, z: 0 });
    // Build the immediate nine chunks before the first frame; stream the horizon thereafter.
    for (let i = 0; i < 9; i++) this.buildNext();
    this.rebuildProps();
  }
  setQuality(settings: Settings) {
    const radius =
      settings.quality === "low" ? 2 : settings.quality === "high" ? 4 : 3;
    if (radius !== this.radius) {
      this.radius = radius;
      this.lastCenter = "";
    }
  }
  private updateRegion(position: Position) {
    const cx = Math.floor(position.x / CHUNK_SIZE),
      cz = Math.floor(position.z / CHUNK_SIZE),
      center = `${cx},${cz}:${this.radius}`;
    if (center === this.lastCenter) return;
    this.lastCenter = center;
    const wanted = new Set<string>();
    const pending: [number, number][] = [];
    for (let x = cx - this.radius; x <= cx + this.radius; x++)
      for (let z = cz - this.radius; z <= cz + this.radius; z++) {
        const key = `${x},${z}`;
        wanted.add(key);
        if (!this.chunks.has(key)) pending.push([x, z]);
      }
    pending.sort(
      (a, b) =>
        Math.hypot(a[0] - cx, a[1] - cz) - Math.hypot(b[0] - cx, b[1] - cz),
    );
    this.pending = pending;
    for (const [key, chunk] of this.chunks)
      if (!wanted.has(key)) {
        this.removeChunk(chunk);
        this.chunks.delete(key);
        this.dirty = true;
      }
  }
  private makeTerrain(data: ChunkData) {
    const segments = 24,
      size = CHUNK_SIZE;
    const geometry = new THREE.PlaneGeometry(size, size, segments, segments);
    geometry.rotateX(-Math.PI / 2);
    geometry.translate(data.cx * size + size / 2, 0, data.cz * size + size / 2);
    const position = geometry.attributes.position;
    const colors = new Float32Array(position.count * 3);
    const color = new THREE.Color();
    for (let i = 0; i < position.count; i++) {
      const x = position.getX(i),
        z = position.getZ(i),
        y = heightAt(this.seed, x, z);
      position.setY(i, y);
      const biome = getBiome(this.seed, x, z);
      color.copy(HABITAT_GROUND[getHabitat(this.seed, x, z)] ?? GROUND[biome]);
      // Gently blend neighboring ground hues at ecological boundaries.
      color.lerp(GROUND[getBiome(this.seed, x + 6, z)], 0.16);
      color.lerp(GROUND[getBiome(this.seed, x - 6, z)], 0.16);
      const variation =
        0.9 +
        0.11 * Math.sin(x * 0.16 + Math.cos(z * 0.19)) * Math.sin(z * 0.15);
      color.multiplyScalar(variation);
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    geometry.computeVertexNormals();
    geometry.computeBoundingSphere();
    const terrain = new THREE.Mesh(geometry, this.terrainMaterial);
    terrain.receiveShadow = true;
    this.group.add(terrain);
    const water = createWaterSurface(this.seed, data.cx, data.cz);
    if (water) this.group.add(water);
    let roof: THREE.Mesh | null = null;
    const roofPositions: number[] = [];
    const indices = geometry.index!;
    for (let i = 0; i < indices.count; i += 3) {
      const a = indices.getX(i),
        b = indices.getX(i + 1),
        c = indices.getX(i + 2);
      if (
        [a, b, c].every(
          (v) =>
            getBiome(this.seed, position.getX(v), position.getZ(v)) === "caves",
        )
      ) {
        for (const v of [a, c, b]) {
          const x = position.getX(v),
            z = position.getZ(v);
          roofPositions.push(
            x,
            position.getY(v) +
              18 +
              Math.sin(x * 0.07) * 2.1 +
              Math.cos(z * 0.06) * 1.8,
            z,
          );
        }
      }
    }
    if (roofPositions.length) {
      const g = new THREE.BufferGeometry();
      g.setAttribute(
        "position",
        new THREE.Float32BufferAttribute(roofPositions, 3),
      );
      g.computeVertexNormals();
      roof = new THREE.Mesh(g, this.roofMaterial);
      roof.receiveShadow = true;
      this.group.add(roof);
    }
    return { terrain, water, roof };
  }
  private buildNext() {
    const next = this.pending.shift();
    if (!next) return;
    const [cx, cz] = next,
      data = generateChunk(this.seed, cx, cz);
    if (this.chunks.has(data.key)) return;
    const surfaces = this.makeTerrain(data);
    const entities: RenderEntity[] = data.entities.map((entity) => {
      const species = SPECIES_BY_ID[entity.speciesId];
      const object = createModel(species.model, entity.seed);
      object.scale.setScalar(entity.scale);
      object.userData.modelHeight =
        MODEL_BOUNDS[species.model].height * entity.scale;
      object.rotation.y = entity.rotation;
      const point =
        species.category !== "fauna" &&
        entity.role === "specimen" &&
        waterAt(this.seed, entity.x, entity.z)
          ? (findDryBank(this.seed, entity.x, entity.z) ?? entity)
          : entity;
      const baseY = heightAt(this.seed, point.x, point.z);
      object.position.set(point.x, baseY, point.z);
      object.name = species.name;
      this.group.add(object);
      const marker = new THREE.Mesh(this.markerGeometry, this.markerMaterial);
      marker.visible = false;
      marker.renderOrder = 10;
      this.group.add(marker);
      return {
        data: entity,
        object,
        marker,
        baseY,
        phase: (entity.seed % 1000) / 100,
      };
    });
    this.chunks.set(data.key, { data, ...surfaces, entities });
    this.entityCache.push(...entities);
    this.dirty = true;
  }
  private template(kind: ModelKind, variant: number) {
    const key = `${kind}:${variant}`;
    let group = this.templates.get(key);
    if (!group) {
      group = createModel(kind, variant * 7919 + 17);
      group.updateMatrixWorld(true);
      this.templates.set(key, group);
    }
    return group;
  }
  private rebuildProps() {
    for (const mesh of this.instanced) {
      this.group.remove(mesh);
      mesh.dispose();
    }
    this.instanced = [];
    this.collision = [];
    const batches = new Map<
      string,
      {
        geometry: THREE.BufferGeometry;
        material: THREE.Material | THREE.Material[];
        matrices: THREE.Matrix4[];
        shadow: boolean;
      }
    >();
    const matrix = new THREE.Matrix4(),
      rotation = new THREE.Quaternion(),
      scale = new THREE.Vector3(),
      position = new THREE.Vector3(),
      childMatrix = new THREE.Matrix4();
    const relocated = this.entityCache.filter(
      (entry) =>
        SPECIES_BY_ID[entry.data.speciesId].category !== "fauna" &&
        Math.hypot(
          entry.object.position.x - entry.data.x,
          entry.object.position.z - entry.data.z,
        ) > 0.1,
    );
    for (const chunk of this.chunks.values())
      for (const prop of chunk.data.props) {
        if (this.propsTooClose(prop, chunk.data)) continue;
        const clearance =
          MODEL_BOUNDS[prop.kind].height * prop.scale > 4.5 ? 4 : 1.8;
        if (
          relocated.some(
            (entry) =>
              Math.hypot(
                prop.x - entry.object.position.x,
                prop.z - entry.object.position.z,
              ) < clearance,
          )
        )
          continue;
        const distance = Math.hypot(
          prop.x - this.currentPosition.x,
          prop.z - this.currentPosition.z,
        );
        const tall = MODEL_BOUNDS[prop.kind].height * prop.scale > 4.5;
        // Preserve tree silhouettes on the horizon; concentrate detailed
        // flowers and undergrowth around the explorer instead of the far grid.
        const reach = tall
          ? this.radius === 2
            ? 135
            : 175
          : this.radius === 2
            ? 65
            : 95;
        if (distance > reach) continue;
        position.set(prop.x, heightAt(this.seed, prop.x, prop.z), prop.z);
        rotation.setFromAxisAngle(THREE.Object3D.DEFAULT_UP, prop.rotation);
        scale.setScalar(prop.scale);
        matrix.compose(position, rotation, scale);
        const template = this.template(prop.kind, Math.abs(prop.seed) % 3);
        template.traverse((child) => {
          if (!(child instanceof THREE.Mesh)) return;
          const materials = Array.isArray(child.material)
            ? child.material
            : [child.material];
          const key =
            child.geometry.uuid + materials.map((m) => m.uuid).join(":");
          let batch = batches.get(key);
          if (!batch) {
            batch = {
              geometry: child.geometry,
              material: child.material,
              matrices: [],
              shadow: !materials.some((m) => m.transparent),
            };
            batches.set(key, batch);
          }
          childMatrix.multiplyMatrices(matrix, child.matrixWorld);
          batch.matrices.push(childMatrix.clone());
        });
        const r = COLLISION[prop.kind];
        if (r)
          this.collision.push({
            x: prop.x,
            z: prop.z,
            r: r * prop.scale,
            y: position.y,
            h: MODEL_BOUNDS[prop.kind].height * prop.scale,
          });
      }
    for (const batch of batches.values()) {
      const mesh = new THREE.InstancedMesh(
        batch.geometry,
        batch.material,
        batch.matrices.length,
      );
      batch.matrices.forEach((matrix, index) =>
        mesh.setMatrixAt(index, matrix),
      );
      mesh.instanceMatrix.needsUpdate = true;
      mesh.computeBoundingSphere();
      mesh.castShadow = batch.shadow;
      mesh.receiveShadow = true;
      this.group.add(mesh);
      this.instanced.push(mesh);
    }
    this.dirty = false;
    this.propAnchor.set(this.currentPosition.x, this.currentPosition.z);
  }
  private propsTooClose(prop: PropPlacement, data: ChunkData) {
    const height = MODEL_BOUNDS[prop.kind].height * prop.scale;
    const tall = height > 4.5,
      medium = height > 1.5;
    if (Math.hypot(prop.x, prop.z) < (tall ? 14 : medium ? 8 : 3)) return true;
    if (
      Math.abs(prop.x) < (tall ? 3.8 : medium ? 1.6 : 0.65) &&
      prop.z < 0 &&
      prop.z > -48
    )
      return true;
    if (
      data.sites.some(
        (s) =>
          Math.hypot(prop.x - s.x, prop.z - s.z) <
          (tall ? 14 : medium ? 3 : 1.3),
      )
    )
      return true;
    return data.entities.some(
      (e) =>
        Math.hypot(prop.x - e.x, prop.z - e.z) <
        (tall ? 4 : medium ? 1.8 : 0.9),
    );
  }
  isBlocked(x: number, z: number) {
    if (Math.hypot(x + 8, z - 5) < 2.8) return true;
    for (const entry of this.entityCache) {
      const kind = SPECIES_BY_ID[entry.data.speciesId].model;
      const radius = entry.data.role === "landmark" ? 1.1 : COLLISION[kind];
      if (
        radius &&
        Math.hypot(x - entry.object.position.x, z - entry.object.position.z) <
          radius * entry.data.scale + 0.25
      )
        return true;
    }
    for (const c of this.collision)
      if (
        Math.abs(x - c.x) < c.r + 0.38 &&
        Math.abs(z - c.z) < c.r + 0.38 &&
        Math.hypot(x - c.x, z - c.z) < c.r + 0.38
      )
        return true;
    return false;
  }
  /** The scanner needs line of sight, rather than a signal behind a ridge or trunk. */
  canObserve(from: THREE.Vector3, to: THREE.Vector3) {
    const dx = to.x - from.x,
      dz = to.z - from.z,
      dy = to.y - from.y,
      lengthSq = dx * dx + dz * dz;
    for (let t = 0.12; t < 0.92; t += 0.08)
      if (
        heightAt(this.seed, from.x + dx * t, from.z + dz * t) >
        from.y + dy * t - 0.08
      )
        return false;
    if (lengthSq > 0.01)
      for (const c of this.collision) {
        const t = Math.max(
          0,
          Math.min(1, ((c.x - from.x) * dx + (c.z - from.z) * dz) / lengthSq),
        );
        if (t < 0.04 || t > 0.92) continue;
        const y = from.y + dy * t;
        if (
          y > c.y &&
          y < c.y + c.h &&
          Math.hypot(from.x + dx * t - c.x, from.z + dz * t - c.z) < c.r
        )
          return false;
      }
    return true;
  }
  getEntities() {
    return this.entityCache;
  }
  get settled() {
    return this.pending.length === 0 && !this.dirty;
  }
  /** Updated scenery may surround an old saved position. Find a nearby open
   * spot once its chunks and colliders are loaded, preserving the expedition. */
  nearbyClearPosition(position: Position): Position {
    if (!this.isBlocked(position.x, position.z)) return position;
    for (let radius = 1; radius <= 12; radius++) {
      for (let i = 0; i < 24; i++) {
        const angle = (i * Math.PI) / 12;
        const candidate = {
          x: position.x + Math.cos(angle) * radius,
          z: position.z + Math.sin(angle) * radius,
        };
        if (!this.isBlocked(candidate.x, candidate.z)) return candidate;
      }
    }
    return { x: 0, z: 0 };
  }
  getSites() {
    return Array.from(this.chunks.values()).flatMap((c) => c.data.sites);
  }
  getSite(id: string | undefined): SiteData | undefined {
    return id ? this.getSites().find((s) => s.id === id) : undefined;
  }
  getEntityPosition(entity: RenderEntity) {
    const species = SPECIES_BY_ID[entity.data.speciesId];
    return new THREE.Vector3(
      entity.object.position.x,
      entity.object.position.y +
        Math.min(
          2.3,
          MODEL_BOUNDS[species.model].height * 0.52 * entity.data.scale,
        ),
      entity.object.position.z,
    );
  }
  getTerrainMeshes(): THREE.Mesh[] {
    return [...this.chunks.values()].map((chunk) => chunk.terrain);
  }
  pulse(time: number, position: THREE.Vector3) {
    this.pulseTime = time;
    this.pulseOrigin.copy(position);
  }
  focus(id: string) {
    this.activeTarget = id;
  }
  update(
    dt: number,
    time: number,
    position: Position,
    camera: THREE.Camera,
    save: SaveData,
    range: number,
  ) {
    this.frame++;
    this.currentPosition = position;
    if (
      Math.hypot(
        this.propAnchor.x - position.x,
        this.propAnchor.y - position.z,
      ) > 18
    )
      this.dirty = true;
    this.updateRegion(position);
    if (this.pending.length) this.buildNext();
    if (this.dirty && (this.pending.length === 0 || this.frame % 5 === 0))
      this.rebuildProps();
    const age = time - this.pulseTime;
    this.pulseRing.visible = age >= 0 && age < 2;
    if (this.pulseRing.visible) {
      const radius = Math.max(1, age * range * 0.9);
      this.pulseRing.position.set(
        this.pulseOrigin.x,
        Math.max(
          heightAt(this.seed, this.pulseOrigin.x, this.pulseOrigin.z),
          waterAt(this.seed, this.pulseOrigin.x, this.pulseOrigin.z)?.level ??
            -Infinity,
        ) + 0.2,
        this.pulseOrigin.z,
      );
      this.pulseRing.scale.setScalar(radius);
      (this.pulseRing.material as THREE.MeshBasicMaterial).opacity =
        (1 - age / 2) * 0.34;
    }
    this.halo.visible = false;
    for (const chunk of this.chunks.values()) {
      if (chunk.water)
        updateWaterMaterial(
          chunk.water.material as THREE.MeshStandardMaterial,
          time,
          save.settings.reducedMotion,
        );
      for (const entry of chunk.entities) {
        const { data, object, phase, baseY } = entry,
          species = SPECIES_BY_ID[data.speciesId];
        const visitorDistance = Math.hypot(
          object.position.x - position.x,
          object.position.z - position.z,
        );
        object.visible =
          visitorDistance < (species.category === "fauna" ? 80 : 125);
        if (species.category === "fauna") {
          if (object.visible)
            animateWildlife(
              object,
              data,
              time,
              dt,
              position,
              save.settings,
              data.id === this.activeTarget,
              this.wildlifeEnvironment,
            );
        } else if (species.category === "flora") {
          object.rotation.z = save.settings.reducedMotion
            ? 0
            : Math.sin(time * 0.65 + phase) * 0.012;
        }
        const distance = Math.hypot(
          object.position.x - this.pulseOrigin.x,
          object.position.z - this.pulseOrigin.z,
        );
        entry.marker.visible =
          object.visible &&
          age > distance / (range * 0.9) &&
          age < 7 &&
          distance < range * 1.6 &&
          !save.scanned[data.id];
        if (entry.marker.visible) {
          entry.marker.position.copy(this.getEntityPosition(entry));
          entry.marker.position.y +=
            0.9 +
            (save.settings.reducedMotion
              ? 0
              : Math.sin(time * 2 + phase) * 0.07);
          entry.marker.quaternion.copy(camera.quaternion);
          const s = 0.7 + distance * 0.018;
          entry.marker.scale.setScalar(s);
        }
        if (data.id === this.activeTarget && object.visible) {
          this.halo.visible = true;
          this.halo.position.copy(this.getEntityPosition(entry));
          this.halo.quaternion.copy(camera.quaternion);
          const s = data.role === "landmark" ? 1.8 : 1;
          this.halo.scale.setScalar(s);
        }
        if (
          data.role === "landmark" &&
          data.siteId &&
          save.completedSites.includes(data.siteId)
        ) {
          object.rotation.y =
            data.rotation + (save.settings.reducedMotion ? 0 : time * 0.06);
          object.position.y =
            baseY +
            0.3 +
            (save.settings.reducedMotion ? 0 : Math.sin(time * 0.6) * 0.08);
        }
      }
    }
  }
  private removeChunk(chunk: RenderChunk) {
    this.group.remove(chunk.terrain);
    chunk.terrain.geometry.dispose();
    if (chunk.roof) {
      this.group.remove(chunk.roof);
      chunk.roof.geometry.dispose();
    }
    if (chunk.water) {
      this.group.remove(chunk.water);
      chunk.water.geometry.dispose();
    }
    for (const entity of chunk.entities) {
      this.group.remove(entity.object, entity.marker);
    }
    const removed = new Set(chunk.entities);
    this.entityCache = this.entityCache.filter(
      (entity) => !removed.has(entity),
    );
  }
  dispose() {
    for (const chunk of this.chunks.values()) this.removeChunk(chunk);
    for (const mesh of this.instanced) mesh.dispose();
    this.terrainMaterial.dispose();
    this.roofMaterial.dispose();
    this.markerGeometry.dispose();
    this.markerMaterial.dispose();
    this.pulseRing.geometry.dispose();
    (this.pulseRing.material as THREE.Material).dispose();
    this.halo.geometry.dispose();
    (this.halo.material as THREE.Material).dispose();
    this.scene.remove(this.group);
    this.chunks.clear();
  }
}

export function createAtmosphere(scene: THREE.Scene) {
  const material = new THREE.ShaderMaterial({
    side: THREE.BackSide,
    depthWrite: false,
    uniforms: {
      zenith: { value: new THREE.Color("#557780") },
      horizon: { value: new THREE.Color("#ebcfa2") },
      time: { value: 0 },
    },
    vertexShader: `varying vec3 vDirection; void main(){vDirection=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}`,
    fragmentShader: `varying vec3 vDirection; uniform vec3 zenith;uniform vec3 horizon;uniform float time;float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}void main(){vec3 d=normalize(vDirection);float h=pow(max(0.,d.y),.55);vec3 c=mix(horizon,zenith,h);float w=sin(d.x*17.+d.z*12.+time*.015)*sin(d.z*23.-d.x*5.+time*.01);float band=exp(-pow((d.y-.27)*5.,2.));float clouds=smoothstep(.28,.95,w)*band*.13;c=mix(c,vec3(.91,.91,.83),clouds);float sun=pow(max(0.,dot(d,normalize(vec3(-.55,.28,-.7)))),120.);c+=vec3(1.,.61,.24)*sun*.65;gl_FragColor=vec4(c,1.);
#include <tonemapping_fragment>
#include <colorspace_fragment>
}`,
  });
  const sky = new THREE.Mesh(new THREE.SphereGeometry(450, 32, 16), material);
  sky.frustumCulled = false;
  sky.renderOrder = -1;
  scene.add(sky);
  const moon = new THREE.Mesh(
    new THREE.SphereGeometry(15, 32, 24),
    new THREE.MeshBasicMaterial({ color: "#c9d4cb", fog: false }),
  );
  scene.add(moon);
  const halo = new THREE.Mesh(
    new THREE.SphereGeometry(15.4, 32, 24),
    new THREE.MeshBasicMaterial({
      color: "#d4e3d6",
      transparent: true,
      opacity: 0.08,
      fog: false,
    }),
  );
  scene.add(halo);
  return { sky, material, moon, halo };
}
