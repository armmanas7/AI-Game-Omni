import { BIODIVERSITY_SPECIES, WATER_SKY_SPECIES } from "../data";
import type {
  BiomeId,
  HabitatId,
  ChunkData,
  ModelKind,
  Position,
} from "../types";
import {
  CHUNK_SIZE,
  MAX_CHUNK_COORDINATE,
  hash,
  hashSeed,
  random,
  getBiome,
  getRegionName,
  generateLegacyChunk,
  baseHeightAt,
} from "./terrain";
import { carveHeightAt, waterAt, waterFieldAt, getHomeLake } from "./waters";
export {
  CHUNK_SIZE,
  MAX_CHUNK_COORDINATE,
  getBiome,
  getRegionName,
  baseHeightAt,
} from "./terrain";
export const heightAt = (seed: string, x: number, z: number): number =>
  carveHeightAt(seed, x, z);

type WeightedKinds = readonly [ModelKind, number][];
interface HabitatScenery {
  canopy: WeightedKinds;
  shrubs: WeightedKinds;
  ground: WeightedKinds;
  rocks: WeightedKinds;
  canopyCount: number;
  shrubCount: number;
  groundCount: number;
}
const HABITAT_SCENERY: Record<HabitatId, HabitatScenery> = {
  "wildflower-meadow": {
    canopy: [
      ["silver-birch", 4],
      ["coral-tree", 3],
      ["spiral-tree", 2],
      ["baobab-tree", 1],
      ["canopy-tree", 1],
      ["fan-palm", 1],
    ],
    shrubs: [
      ["berry-bush", 4],
      ["foxglove", 2],
      ["starflower", 3],
      ["bellflower", 2],
    ],
    ground: [
      ["flower-carpet", 6],
      ["starflower", 3],
      ["grass-tuft", 4],
      ["bellflower", 2],
      ["sunburst-flower", 1],
    ],
    rocks: [
      ["dune-rock", 1],
      ["fallen-log", 1],
    ],
    canopyCount: 7,
    shrubCount: 20,
    groundCount: 60,
  },
  fernwood: {
    canopy: [
      ["spire-pine", 4],
      ["tree-fern", 4],
      ["ribbon-tree", 2],
      ["canopy-tree", 1],
      ["coral-tree", 1],
    ],
    shrubs: [
      ["fan-fern", 4],
      ["berry-bush", 3],
      ["orchid", 2],
      ["cycad", 2],
      ["shelf-fungus", 1],
    ],
    ground: [
      ["grass-tuft", 4],
      ["fan-fern", 3],
      ["orchid", 2],
      ["puffball", 2],
      ["foxglove", 1],
    ],
    rocks: [
      ["fallen-log", 4],
      ["dune-rock", 1],
    ],
    canopyCount: 12,
    shrubCount: 25,
    groundCount: 48,
  },
  "willow-grove": {
    canopy: [
      ["veil-willow", 5],
      ["silver-birch", 3],
      ["spiral-tree", 2],
      ["baobab-tree", 1],
      ["canopy-tree", 1],
      ["fan-palm", 1],
    ],
    shrubs: [
      ["lotus", 4],
      ["bellflower", 3],
      ["reed", 2],
      ["berry-bush", 1],
      ["orchid", 2],
    ],
    ground: [
      ["lily-pad", 4],
      ["grass-tuft", 3],
      ["bellflower", 3],
      ["flower-carpet", 2],
    ],
    rocks: [
      ["fallen-log", 2],
      ["dune-rock", 1],
    ],
    canopyCount: 9,
    shrubCount: 22,
    groundCount: 48,
  },
  "spore-wetland": {
    canopy: [
      ["veil-willow", 3],
      ["ribbon-tree", 3],
      ["tree-fern", 3],
      ["baobab-tree", 2],
      ["coral-tree", 1],
    ],
    shrubs: [
      ["reed", 4],
      ["lotus", 3],
      ["fan-fern", 2],
      ["spore-crown", 2],
      ["puffball", 2],
    ],
    ground: [
      ["lily-pad", 4],
      ["grass-tuft", 3],
      ["puffball", 3],
      ["glowcap", 1],
      ["reed", 2],
    ],
    rocks: [
      ["fallen-log", 3],
      ["dune-rock", 1],
    ],
    canopyCount: 8,
    shrubCount: 25,
    groundCount: 52,
  },
  "sun-oasis": {
    canopy: [
      ["fan-palm", 7],
      ["baobab-tree", 1],
      ["desert-spire", 1],
    ],
    shrubs: [
      ["cycad", 4],
      ["aloe", 3],
      ["sunburst-flower", 4],
      ["glass-cactus", 1],
      ["prickly-pear", 2],
    ],
    ground: [
      ["grass-tuft", 3],
      ["sunburst-flower", 4],
      ["aloe", 2],
      ["sand-rose", 2],
    ],
    rocks: [
      ["dune-rock", 3],
      ["boulder-stack", 1],
    ],
    canopyCount: 8,
    shrubCount: 21,
    groundCount: 34,
  },
  "cactus-garden": {
    canopy: [
      ["glass-cactus", 5],
      ["prickly-pear", 4],
      ["desert-spire", 1],
      ["barrel-cactus", 4],
    ],
    shrubs: [
      ["barrel-cactus", 4],
      ["prickly-pear", 3],
      ["aloe", 3],
      ["sand-rose", 2],
    ],
    ground: [
      ["aloe", 4],
      ["sand-rose", 3],
      ["sunburst-flower", 1],
      ["grass-tuft", 1],
    ],
    rocks: [
      ["dune-rock", 5],
      ["boulder-stack", 2],
      ["desert-spire", 1],
    ],
    canopyCount: 8,
    shrubCount: 18,
    groundCount: 26,
  },
  "stone-badlands": {
    canopy: [
      ["desert-spire", 3],
      ["boulder-stack", 4],
      ["dune-rock", 6],
      ["arch-rock", 1],
    ],
    shrubs: [
      ["aloe", 3],
      ["barrel-cactus", 2],
      ["prickly-pear", 1],
      ["sand-rose", 2],
    ],
    ground: [
      ["sand-rose", 4],
      ["aloe", 3],
      ["grass-tuft", 1],
    ],
    rocks: [
      ["dune-rock", 5],
      ["boulder-stack", 4],
    ],
    canopyCount: 7,
    shrubCount: 9,
    groundCount: 17,
  },
  "crystal-garden": {
    canopy: [
      ["crystal-cluster", 5],
      ["echo-crystal", 3],
      ["cave-column", 1],
      ["boulder-stack", 1],
    ],
    shrubs: [
      ["cave-coral", 4],
      ["shelf-fungus", 3],
      ["glowcap", 2],
      ["crystal-cluster", 2],
    ],
    ground: [
      ["cave-coral", 3],
      ["glowcap", 2],
      ["puffball", 2],
      ["crystal-cluster", 3],
    ],
    rocks: [
      ["boulder-stack", 3],
      ["dune-rock", 1],
    ],
    canopyCount: 9,
    shrubCount: 20,
    groundCount: 40,
  },
  "fungal-hollow": {
    canopy: [
      ["glowcap", 5],
      ["shelf-fungus", 3],
      ["cave-column", 1],
      ["puffball", 2],
    ],
    shrubs: [
      ["puffball", 5],
      ["shelf-fungus", 4],
      ["glowcap", 3],
      ["cave-coral", 2],
    ],
    ground: [
      ["puffball", 5],
      ["glowcap", 4],
      ["shelf-fungus", 2],
      ["cave-coral", 1],
    ],
    rocks: [
      ["boulder-stack", 3],
      ["dune-rock", 1],
    ],
    canopyCount: 8,
    shrubCount: 24,
    groundCount: 44,
  },
  "echo-vault": {
    canopy: [
      ["cave-column", 5],
      ["echo-crystal", 3],
      ["boulder-stack", 3],
      ["crystal-cluster", 2],
    ],
    shrubs: [
      ["crystal-cluster", 4],
      ["cave-coral", 2],
      ["glowcap", 1],
    ],
    ground: [
      ["crystal-cluster", 3],
      ["cave-coral", 2],
      ["glowcap", 1],
    ],
    rocks: [
      ["boulder-stack", 4],
      ["dune-rock", 1],
    ],
    canopyCount: 8,
    shrubCount: 10,
    groundCount: 24,
  },
};
const TREE_KINDS = new Set<ModelKind>([
  "canopy-tree",
  "ribbon-tree",
  "spire-pine",
  "silver-birch",
  "veil-willow",
  "coral-tree",
  "baobab-tree",
  "spiral-tree",
  "tree-fern",
  "fan-palm",
]);
function weightedKind(kinds: WeightedKinds, rng: () => number): ModelKind {
  let value = rng() * kinds.reduce((sum, [, weight]) => sum + weight, 0);
  for (const [kind, weight] of kinds) {
    value -= weight;
    if (value < 0) return kind;
  }
  return kinds[kinds.length - 1][0];
}

const HABITAT_IDS: Record<BiomeId, HabitatId[]> = {
  forest: ["wildflower-meadow", "fernwood", "willow-grove", "spore-wetland"],
  desert: ["sun-oasis", "cactus-garden", "stone-badlands"],
  caves: ["crystal-garden", "fungal-hollow", "echo-vault"],
};
const FIRSTLIGHT_HABITATS: { x: number; z: number; habitat: HabitatId }[] = [
  { x: 0, z: 15, habitat: "wildflower-meadow" },
  { x: -48, z: -12, habitat: "fernwood" },
  { x: 48, z: -12, habitat: "willow-grove" },
  { x: 0, z: -65, habitat: "spore-wetland" },
];
/** Habitat patches use shared world-space Voronoi anchors, never per-chunk random rolls. */
export function getHabitat(seed: string, x: number, z: number): HabitatId {
  const biome = getBiome(seed, x, z);
  if (biome === "forest" && Math.hypot(x, z) < 102) {
    let nearest = FIRSTLIGHT_HABITATS[0],
      distance = Infinity;
    for (const anchor of FIRSTLIGHT_HABITATS) {
      const d = (x - anchor.x) ** 2 + (z - anchor.z) ** 2;
      if (d < distance) {
        nearest = anchor;
        distance = d;
      }
    }
    return nearest.habitat;
  }
  const h = hashSeed(seed),
    size = 64;
  const gx = Math.round(x / size),
    gz = Math.round(z / size);
  let nearestX = gx,
    nearestZ = gz,
    distance = Infinity;
  for (let dx = -1; dx <= 1; dx++)
    for (let dz = -1; dz <= 1; dz++) {
      const ax = gx + dx,
        az = gz + dz;
      const px = ax * size + (hash(h, ax, az, 101) / 4294967296 - 0.5) * 22;
      const pz = az * size + (hash(h, ax, az, 103) / 4294967296 - 0.5) * 22;
      const d = (x - px) ** 2 + (z - pz) ** 2;
      if (d < distance) {
        nearestX = ax;
        nearestZ = az;
        distance = d;
      }
    }
  const choices = HABITAT_IDS[biome];
  return choices[hash(h, nearestX, nearestZ, 107) % choices.length];
}

export function generateChunk(seed: string, cx: number, cz: number): ChunkData {
  const chunk = generateLegacyChunk(seed, cx, cz);
  const h = hashSeed(seed),
    n = hash(h, cx, cz, 61);
  addBiodiversity(chunk, seed, h, n);
  addWaterAndSky(chunk, seed, h, n);
  addHabitatScenery(chunk, seed, n);
  addBankPlants(chunk, seed, n);
  return chunk;
}

function withinChunk(x: number, z: number, cx: number, cz: number): boolean {
  return Math.floor(x / CHUNK_SIZE) === cx && Math.floor(z / CHUNK_SIZE) === cz;
}
const separation = (a: Position, b: Position) =>
  Math.hypot(a.x - b.x, a.z - b.z);

/** A separate random stream and namespace keep original v1 specimens unchanged. */
function addBiodiversity(chunk: ChunkData, seed: string, h: number, n: number) {
  const rng = random(hash(n, chunk.cx, chunk.cz, 113));
  const originX = chunk.cx * CHUNK_SIZE,
    originZ = chunk.cz * CHUNK_SIZE;
  const add = (
    speciesId: string,
    point: Position,
    index: number,
    scale: number,
  ) => {
    chunk.entities.push({
      ...point,
      speciesId,
      id: `biodiversity:${h.toString(16)}:${chunk.cx}:${chunk.cz}:${index}`,
      seed: hash(n, index, 0, 127),
      scale,
      rotation: rng() * Math.PI * 2,
      role: "specimen",
    });
  };
  const introductory = chunk.cx === 0 && chunk.cz === -1;
  if (introductory) {
    add("moss-grazer", { x: 8, z: -16 }, 0, 1);
  }
  const firstFlower = chunk.cx === -1 && chunk.cz === -1;
  if (firstFlower) add("starpetal", { x: -7, z: -15 }, 1, 1.2);
  const count = 3 + (n % 4 === 0 ? 1 : 0);
  for (let index = introductory ? 1 : 0; index < count; index++) {
    if (firstFlower && index === 1) continue;
    for (let attempt = 0; attempt < 48; attempt++) {
      const point = {
        x: originX + 5 + rng() * 54,
        z: originZ + 5 + rng() * 54,
      };
      if (
        Math.hypot(point.x, point.z) < 11 ||
        waterAt(seed, point.x, point.z) ||
        chunk.entities.some(
          (e) => separation(e, point) < (e.role === "landmark" ? 7 : 4.5),
        )
      )
        continue;
      const habitat = getHabitat(seed, point.x, point.z);
      const wantedFauna = index === 0 || index === 3;
      const choices = BIODIVERSITY_SPECIES.filter(
        (s) =>
          s.biome === getBiome(seed, point.x, point.z) &&
          (s.category === "fauna") === wantedFauna &&
          s.habitats?.includes(habitat),
      );
      if (!choices.length) continue;
      const species = choices[Math.floor(rng() * choices.length)];
      add(species.id, point, index, 0.87 + rng() * 0.28);
      break;
    }
  }
}

function addHabitatScenery(chunk: ChunkData, seed: string, n: number) {
  const rng = random(hash(n, chunk.cx, chunk.cz, 131));
  const originX = chunk.cx * CHUNK_SIZE,
    originZ = chunk.cz * CHUNK_SIZE;
  const point = (): Position => ({
    x: originX + 2 + rng() * 60,
    z: originZ + 2 + rng() * 60,
  });
  const central = HABITAT_SCENERY[getHabitat(seed, originX + 32, originZ + 32)];
  const clearFor = (p: Position, kind: ModelKind) => {
    const tall =
      TREE_KINDS.has(kind) ||
      ["cave-column", "arch-rock", "desert-spire", "boulder-stack"].includes(
        kind,
      );
    const water = waterAt(seed, p.x, p.z);
    if (water && kind !== "lily-pad") return false;
    if (tall && waterFieldAt(seed, p.x, p.z)) return false;
    if (Math.hypot(p.x, p.z) < (tall ? 14 : 8)) return false;
    // Keep the direct path to the first investigation readable and walkable.
    if (tall && Math.abs(p.x) < 4 && p.z > -48 && p.z < 4) return false;
    if (
      chunk.entities.some(
        (e) =>
          separation(e, p) <
          (e.role === "landmark" ? (tall ? 8 : 3.5) : tall ? 4 : 1.8),
      )
    )
      return false;
    if (
      tall &&
      chunk.props.some(
        (other) => TREE_KINDS.has(other.kind) && separation(other, p) < 5.6,
      )
    )
      return false;
    return true;
  };
  const add = (p: Position, kind: ModelKind, scale: number, index: number) => {
    if (!withinChunk(p.x, p.z, chunk.cx, chunk.cz) || !clearFor(p, kind))
      return false;
    chunk.props.push({
      ...p,
      kind,
      scale,
      rotation: rng() * Math.PI * 2,
      seed: hash(n, index, 0, 137),
    });
    return true;
  };
  let serial = 0;
  // The first grove is art-directed to reveal contrasting silhouettes immediately.
  // Farther scenery remains entirely seeded and follows its habitat composition.
  const firstlightTrees: [ModelKind, number, number][] = [
    ["spire-pine", -28, -10],
    ["tree-fern", -34, -23],
    ["ribbon-tree", -42, -8],
    ["canopy-tree", -19, -24],
    ["silver-birch", 24, -9],
    ["veil-willow", 37, -15],
    ["spiral-tree", 29, -30],
    ["coral-tree", -27, 13],
    ["baobab-tree", -14, 25],
    ["fan-palm", -34, 28],
  ];
  for (const [kind, x, z] of firstlightTrees) {
    if (!withinChunk(x, z, chunk.cx, chunk.cz)) continue;
    for (let attempt = 0; attempt < 12; attempt++) {
      const p =
        attempt === 0
          ? { x, z }
          : { x: x + (rng() - 0.5) * 8, z: z + (rng() - 0.5) * 8 };
      if (add(p, kind, 0.82 + rng() * 0.24, serial++)) break;
    }
  }
  // Each point follows its local habitat rather than the chunk centre: patches cross seams.
  for (const layer of ["canopy", "shrubs", "rocks"] as const) {
    const count =
      layer === "canopy"
        ? Math.round(central.canopyCount * 1.08)
        : layer === "shrubs"
          ? Math.round(central.shrubCount * 1.15)
          : 4;
    let placed = 0;
    for (let attempt = 0; placed < count && attempt < count * 8; attempt++) {
      const p = point(),
        habitat = HABITAT_SCENERY[getHabitat(seed, p.x, p.z)];
      const kind = weightedKind(habitat[layer], rng);
      const scale =
        layer === "canopy"
          ? TREE_KINDS.has(kind)
            ? 0.72 + rng() * 0.7
            : 0.85 + rng() * 0.7
          : layer === "shrubs"
            ? 0.75 + rng() * 0.65
            : 0.5 + rng() * 0.45;
      if (add(p, kind, scale, serial++)) placed++;
    }
  }
  // Groundcover is planted in mixed small colonies, leaving open routes between them.
  const groundTarget = Math.round(central.groundCount * 1.15);
  const colonyCount = Math.ceil(groundTarget / 7);
  let groundPlaced = 0;
  for (let colony = 0; colony < colonyCount; colony++) {
    const centre = point(),
      habitat = HABITAT_SCENERY[getHabitat(seed, centre.x, centre.z)];
    const dominant = weightedKind(habitat.ground, rng),
      secondary = weightedKind(habitat.ground, rng);
    for (
      let attempt = 0;
      attempt < 18 && groundPlaced < groundTarget;
      attempt++
    ) {
      const angle = rng() * Math.PI * 2,
        radius = Math.sqrt(rng()) * 7.5;
      const p = {
        x: centre.x + Math.cos(angle) * radius,
        z: centre.z + Math.sin(angle) * radius,
      };
      // A colony can cross a habitat boundary without abruptly changing its own flowers.
      const kind = rng() < 0.72 ? dominant : secondary;
      if (add(p, kind, 0.6 + rng() * 0.65, serial++)) groundPlaced++;
      if (attempt >= 6 + (colony % 3)) break;
    }
  }
}

/** Riverbank plants form an extra narrow ribbon without filling walking routes. */
function addBankPlants(chunk: ChunkData, seed: string, n: number) {
  const rng = random(hash(n, chunk.cx, chunk.cz, 239));
  const originX = chunk.cx * CHUNK_SIZE,
    originZ = chunk.cz * CHUNK_SIZE;
  let placed = 0;
  for (let attempt = 0; attempt < 70 && placed < 10; attempt++) {
    const p = { x: originX + 2 + rng() * 60, z: originZ + 2 + rng() * 60 };
    const field = waterFieldAt(seed, p.x, p.z);
    if (!field || field.mask < -5 || field.mask > 1.3) continue;
    if (
      Math.hypot(p.x, p.z) < 18 ||
      (Math.abs(p.x) < 14 && p.z >= -55 && p.z <= 0)
    )
      continue;
    if (
      chunk.entities.some(
        (e) => separation(e, p) < (e.role === "landmark" ? 5 : 2),
      )
    )
      continue;
    const kind: ModelKind =
      field.mask > 0
        ? "lily-pad"
        : rng() < 0.45
          ? "reed"
          : rng() < 0.55
            ? "fan-fern"
            : "grass-tuft";
    chunk.props.push({
      ...p,
      kind,
      scale: 0.7 + rng() * 0.35,
      rotation: rng() * Math.PI * 2,
      seed: hash(n, placed++, 0, 241),
    });
  }
}

/** Fish and birds use their own placement namespace and ecological constraints. */
function addWaterAndSky(chunk: ChunkData, seed: string, h: number, n: number) {
  const rng = random(hash(n, chunk.cx, chunk.cz, 251));
  const add = (
    speciesId: string,
    p: Position,
    id: string,
    index: number,
    scale = 1,
  ) => {
    if (!withinChunk(p.x, p.z, chunk.cx, chunk.cz)) return;
    chunk.entities.push({
      ...p,
      speciesId,
      id: `waterlife:${h.toString(16)}:${id}`,
      seed: hash(h, index, 0, 257),
      scale,
      rotation: rng() * Math.PI * 2,
      role: "specimen",
    });
  };
  const home = getHomeLake(seed);
  const fishKinds = ["ribbon-fish", "glass-koi", "lantern-eel"];
  const fishSafe = (p: Position) => {
    const water = waterAt(seed, p.x, p.z);
    if (!water || water.depth < 1.05) return false;
    return [
      [0.9, 0],
      [-0.9, 0],
      [0, 0.9],
      [0, -0.9],
    ].every(([dx, dz]) => {
      const edge = waterAt(seed, p.x + dx, p.z + dz);
      return edge && edge.id === water.id && edge.depth > 0.75;
    });
  };
  const offsets: Position[] = [
    { x: -7, z: -2 },
    { x: -4, z: 3 },
    { x: 2, z: -4 },
    { x: 4, z: 1 },
    { x: -1, z: 5 },
    { x: 5, z: 6 },
  ];
  for (let index = 0; index < offsets.length; index++) {
    let p = { x: home.x + offsets[index].x, z: home.z + offsets[index].z };
    if (!fishSafe(p))
      p = {
        x: home.x + Math.cos(index * 1.9) * 3,
        z: home.z + Math.sin(index * 1.9) * 3,
      };
    if (fishSafe(p))
      add(
        fishKinds[Math.floor(index / 2)],
        p,
        `home:${fishKinds[Math.floor(index / 2)]}:${index % 2}`,
        index,
        0.9 + (index % 2) * 0.12,
      );
  }
  const homeBirds: [string, Position][] = [
    ["canopy-swift", { x: home.x - 14, z: home.z - 9 }],
    ["suncrest-bird", { x: home.x + 11, z: home.z - 20 }],
    ["reed-heron", { x: home.x - home.radiusX - 3, z: home.z + 3 }],
  ];
  homeBirds.forEach(([speciesId, p], i) =>
    add(speciesId, p, `home:${speciesId}`, 30 + i),
  );
  // Additional water specimens are sparse: at most two per wet chunk.
  let fish = 0;
  for (let attempt = 0; attempt < 32 && fish < 2; attempt++) {
    const p = {
      x: chunk.cx * CHUNK_SIZE + 5 + rng() * 54,
      z: chunk.cz * CHUNK_SIZE + 5 + rng() * 54,
    };
    const water = waterAt(seed, p.x, p.z);
    if (
      !water ||
      !fishSafe(p) ||
      Math.hypot(p.x - home.x, p.z - home.z) < home.radiusX + 10 ||
      chunk.entities.some((e) => separation(e, p) < 3)
    )
      continue;
    add(
      fishKinds[hash(n, fish, 0, 263) % fishKinds.length],
      p,
      `${chunk.cx}:${chunk.cz}:fish:${fish}`,
      40 + fish,
      0.9 + rng() * 0.18,
    );
    fish++;
  }
  if (n % 3 === 0) {
    for (let attempt = 0; attempt < 18; attempt++) {
      const p = {
        x: chunk.cx * CHUNK_SIZE + 7 + rng() * 50,
        z: chunk.cz * CHUNK_SIZE + 7 + rng() * 50,
      };
      if (
        Math.hypot(p.x, p.z) < 18 ||
        getBiome(seed, p.x, p.z) !== "forest" ||
        chunk.entities.some((e) => separation(e, p) < 5)
      )
        continue;
      const habitat = getHabitat(seed, p.x, p.z);
      const choices = WATER_SKY_SPECIES.filter((s) =>
        s.habitats?.includes(habitat),
      );
      if (!choices.length) continue;
      const species = choices[Math.floor(rng() * choices.length)];
      add(
        species.id,
        p,
        `${chunk.cx}:${chunk.cz}:bird:0`,
        50,
        0.88 + rng() * 0.22,
      );
      break;
    }
  }
}
