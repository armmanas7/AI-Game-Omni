/** Preserved v1 terrain and discovery placement. Water and later content layer
 * onto this module without changing original IDs, coordinates or random streams. */
import { LEGACY_SPECIES } from "../data";
import type {
  BiomeId,
  ChunkData,
  Position,
  SiteData,
  WorldEntity,
} from "../types";

export const CHUNK_SIZE = 64;
export const MAX_CHUNK_COORDINATE = 10_000_000;
const REGION_SIZE = 160;
const BIOME_IDS: BiomeId[] = ["forest", "desert", "caves"];
const RARE: Record<BiomeId, string> = {
  forest: "heartwood-archive",
  desert: "heliograph-dial",
  caves: "harmonic-heart",
};
const REGION_WORDS: Record<BiomeId, [string[], string[]]> = {
  forest: [
    ["Pearl", "Sage", "Dew", "Ribbon", "Quiet", "Moss"],
    ["Canopy", "Grove", "Garden", "Reach", "Thicket", "Vale"],
  ],
  desert: [
    ["Amber", "Glass", "Ochre", "Copper", "Still", "Saffron"],
    ["Dunes", "Basin", "Expanse", "Ridge", "Horizon", "Wastes"],
  ],
  caves: [
    ["Blue", "Echo", "Opal", "Lunar", "Silver", "Deep"],
    ["Hollow", "Vault", "Gallery", "Sanctum", "Chamber", "Passage"],
  ],
};

export function hashSeed(seed: string): number {
  let h = 2166136261;
  for (let i = 0; i < seed.length; i++)
    h = Math.imul(h ^ seed.charCodeAt(i), 16777619);
  return h >>> 0;
}

export function hash(h: number, x: number, z: number, salt = 0): number {
  let n =
    (h ^
      Math.imul(x, 374761393) ^
      Math.imul(z, 668265263) ^
      Math.imul(salt, 1274126177)) >>>
    0;
  n = Math.imul(n ^ (n >>> 16), 2246822507);
  n = Math.imul(n ^ (n >>> 13), 3266489909);
  return (n ^ (n >>> 16)) >>> 0;
}

export function random(seed: number): () => number {
  let state = seed || 0x9e3779b9;
  return () => {
    state ^= state << 13;
    state ^= state >>> 17;
    state ^= state << 5;
    return (state >>> 0) / 4294967296;
  };
}

function regionAnchor(
  h: number,
  rx: number,
  rz: number,
): Position & { biome: BiomeId; rx: number; rz: number } {
  const fixed =
    (rx === 0 && rz === 0) || (rx === 1 && rz === 0) || (rx === 0 && rz === 1);
  const biome: BiomeId =
    rx === 0 && rz === 0
      ? "forest"
      : rx === 1 && rz === 0
        ? "desert"
        : rx === 0 && rz === 1
          ? "caves"
          : BIOME_IDS[hash(h, rx, rz, 13) % 3];
  return {
    x:
      rx * REGION_SIZE +
      (fixed ? 0 : (hash(h, rx, rz, 19) / 4294967296 - 0.5) * 54),
    z:
      rz * REGION_SIZE +
      (fixed ? 0 : (hash(h, rx, rz, 23) / 4294967296 - 0.5) * 54),
    biome,
    rx,
    rz,
  };
}

function nearestRegion(seed: string, x: number, z: number) {
  const h = hashSeed(seed),
    rx = Math.round(x / REGION_SIZE),
    rz = Math.round(z / REGION_SIZE);
  let nearest = regionAnchor(h, rx, rz),
    distance = Infinity;
  for (let dx = -1; dx <= 1; dx++)
    for (let dz = -1; dz <= 1; dz++) {
      const point = regionAnchor(h, rx + dx, rz + dz);
      const d = (point.x - x) ** 2 + (point.z - z) ** 2;
      if (d < distance) {
        nearest = point;
        distance = d;
      }
    }
  return nearest;
}

export function getBiome(seed: string, x: number, z: number): BiomeId {
  return nearestRegion(seed, x, z).biome;
}

export function getRegionName(seed: string, x: number, z: number): string {
  const region = nearestRegion(seed, x, z);
  if (region.rx === 0 && region.rz === 0) return "Firstlight Grove";
  const words = REGION_WORDS[region.biome],
    n = hash(hashSeed(seed), region.rx, region.rz, 47);
  return `${words[0][n % words[0].length]} ${words[1][Math.floor(n / 7) % words[1].length]}`;
}

const smooth = (t: number) => t * t * t * (t * (t * 6 - 15) + 10);
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
function noise(h: number, x: number, z: number, salt: number): number {
  const ix = Math.floor(x),
    iz = Math.floor(z),
    fx = smooth(x - ix),
    fz = smooth(z - iz);
  const sample = (dx: number, dz: number) =>
    hash(h, ix + dx, iz + dz, salt) / 2147483648 - 1;
  return lerp(
    lerp(sample(0, 0), sample(1, 0), fx),
    lerp(sample(0, 1), sample(1, 1), fx),
    fz,
  );
}

/** Global-coordinate terrain: adjacent chunks sample exactly the same surface. */
export function baseHeightAt(seed: string, x: number, z: number): number {
  const distance = Math.hypot(x, z);
  if (distance <= 18) return 0;
  const h = hashSeed(seed);
  const value =
    noise(h, x / 145, z / 145, 3) * 3.2 +
    noise(h, x / 54, z / 54, 5) * 1.4 +
    noise(h, x / 19, z / 19, 7) * 0.23;
  return value * smooth(Math.min(1, (distance - 18) / 34));
}

function withinChunk(x: number, z: number, cx: number, cz: number): boolean {
  return Math.floor(x / CHUNK_SIZE) === cx && Math.floor(z / CHUNK_SIZE) === cz;
}
const separation = (a: Position, b: Position) =>
  Math.hypot(a.x - b.x, a.z - b.z);

function createSite(
  seed: string,
  cx: number,
  cz: number,
  centre: Position,
  biome: BiomeId,
  introductory: boolean,
  n: number,
): { site: SiteData; entities: WorldEntity[] } {
  const id = `site:${hashSeed(seed).toString(16)}:${cx}:${cz}`;
  const species = LEGACY_SPECIES.filter(
    (s) => s.biome === biome && s.rarity !== "rare",
  );
  const clueIds = [0, 1, 2].map((i) => `${id}:clue:${i}`);
  const choices = introductory
    ? ["whisper-reed", "prism-frond", "crownspore"]
    : [0, 1, 2].map((i) => species[(n + i * 2) % species.length].id);
  const entities: WorldEntity[] = choices.map((speciesId, i) => {
    const angle = introductory
      ? -Math.PI / 3 + (i * Math.PI) / 3
      : (n / 4294967296) * Math.PI * 2 + (i * Math.PI * 2) / 3;
    const radius = introductory ? 9 : 7 + (hash(n, i, 0, 53) % 4);
    return {
      id: clueIds[i],
      speciesId,
      x: centre.x + Math.cos(angle) * radius,
      z: centre.z + Math.sin(angle) * radius,
      seed: hash(n, i, 0, 59),
      rotation: angle,
      scale: 1,
      role: "clue",
      siteId: id,
      clueIndex: i,
    };
  });
  const names: Record<BiomeId, string> = {
    forest: "Root Confluence",
    desert: "Horizon Observatory",
    caves: "Resonance Well",
  };
  const hints: Record<BiomeId, string> = {
    forest:
      "Scan the three root-linked specimens, then investigate the Heartwood Archive.",
    desert:
      "Scan the three wind-worn specimens, then investigate the Heliograph Dial.",
    caves:
      "Scan the three resonant specimens, then investigate the Harmonic Heart.",
  };
  const landmarkId = `${id}:landmark`;
  entities.push({
    ...centre,
    id: landmarkId,
    speciesId: RARE[biome],
    seed: n,
    scale: 1.1,
    rotation: (n / 4294967296) * Math.PI * 2,
    role: "landmark",
    siteId: id,
  });
  return {
    site: {
      ...centre,
      id,
      biome,
      clueIds,
      landmarkId,
      rareSpeciesId: RARE[biome],
      name: introductory
        ? "Firstlight Root Confluence"
        : `${getRegionName(seed, centre.x, centre.z)} · ${names[biome]}`,
      hint: hints[biome],
    },
    entities,
  };
}

export function generateLegacyChunk(
  seed: string,
  cx: number,
  cz: number,
): ChunkData {
  if (
    !Number.isSafeInteger(cx) ||
    !Number.isSafeInteger(cz) ||
    Math.abs(cx) > MAX_CHUNK_COORDINATE ||
    Math.abs(cz) > MAX_CHUNK_COORDINATE
  )
    throw new Error("Invalid chunk coordinates.");
  const h = hashSeed(seed),
    n = hash(h, cx, cz, 61),
    rng = random(n);
  const chunk: ChunkData = {
    key: `${cx},${cz}`,
    cx,
    cz,
    props: [],
    entities: [],
    sites: [],
  };
  const originX = cx * CHUNK_SIZE,
    originZ = cz * CHUNK_SIZE;
  const introductory = cx === 0 && cz === -1;
  if (introductory) {
    const result = createSite(
      seed,
      cx,
      cz,
      { x: 0, z: -35 },
      "forest",
      true,
      n,
    );
    chunk.sites.push(result.site);
    chunk.entities.push(...result.entities);
    chunk.entities.push({
      id: `specimen:${h.toString(16)}:firstlight`,
      speciesId: "pearl-lantern",
      x: 0,
      z: -7,
      seed: hash(h, 0, 0, 67),
      scale: 1.15,
      rotation: 0,
      role: "specimen",
    });
  } else if (n % 4 === 0) {
    for (let attempt = 0; attempt < 8; attempt++) {
      const centre = {
        x: originX + 14 + rng() * 36,
        z: originZ + 14 + rng() * 36,
      };
      if (Math.hypot(centre.x, centre.z) < 56) continue;
      const biome = getBiome(seed, centre.x, centre.z),
        result = createSite(seed, cx, cz, centre, biome, false, n);
      if (
        !result.entities.every(
          (e) =>
            withinChunk(e.x, e.z, cx, cz) && getBiome(seed, e.x, e.z) === biome,
        )
      )
        continue;
      chunk.sites.push(result.site);
      chunk.entities.push(...result.entities);
      break;
    }
  }
  const specimenCount = introductory ? n % 3 : 1 + (hash(h, cx, cz, 71) % 3);
  let placedSpecimens = 0;
  for (
    let attempt = 0;
    placedSpecimens < specimenCount && attempt < 60;
    attempt++
  ) {
    const point = { x: originX + 4 + rng() * 56, z: originZ + 4 + rng() * 56 };
    if (
      Math.hypot(point.x, point.z) < 14 ||
      chunk.entities.some((e) => separation(e, point) < 5)
    )
      continue;
    const list = LEGACY_SPECIES.filter(
      (s) =>
        s.biome === getBiome(seed, point.x, point.z) && s.rarity !== "rare",
    );
    const species = list[Math.floor(rng() * list.length)];
    chunk.entities.push({
      ...point,
      id: `specimen:${h.toString(16)}:${cx}:${cz}:${placedSpecimens}`,
      speciesId: species.id,
      seed: hash(n, placedSpecimens, 0, 73),
      scale: 0.88 + rng() * 0.34,
      rotation: rng() * Math.PI * 2,
      role: "specimen",
    });
    placedSpecimens++;
  }
  return chunk;
}
