/** Deterministic lake basins and a connected meandering river. This module only
 * depends on the preserved terrain layer; it never imports layered worldgen. */
import type { Position, WaterSample } from "../types";
import {
  baseHeightAt,
  generateLegacyChunk,
  getBiome,
  hash,
  hashSeed,
  MAX_CHUNK_COORDINATE,
} from "./terrain";
export type { WaterSample } from "../types";

export const WATER_HOME: Readonly<Position> = Object.freeze({ x: 45, z: 38 });
const BANK_WIDTH = 8;
const POOL_GRID = 208;
const clamp = (v: number, lo = 0, hi = 1) => Math.max(lo, Math.min(hi, v));
const smooth = (v: number) => {
  const t = clamp(v);
  return t * t * (3 - 2 * t);
};
const seedCache = new Map<string, number>();
const lakeCache = new Map<string, LakeBody>();
const siteCache = new Map<string, Position[]>();
const poolCache = new Map<string, LakeBody | null>();
const nearSitesCache = new Map<string, Position[]>();
interface RiverPlan {
  start: number;
  step: number;
  values: number[];
  /** A rare blocked outlet leaves the lake and regional pools intact. */
  disabled?: boolean;
}
const riverCache = new Map<string, RiverPlan>();
const hSeed = (seed: string) => {
  let h = seedCache.get(seed);
  if (h === undefined) {
    h = hashSeed(seed);
    seedCache.set(seed, h);
    if (seedCache.size > 24) seedCache.delete(seedCache.keys().next().value!);
  }
  return h;
};
function boundedSet<T>(
  cache: Map<string, T>,
  key: string,
  value: T,
  size: number,
) {
  cache.set(key, value);
  if (cache.size > size) cache.delete(cache.keys().next().value!);
}
export interface LakeBody extends Position {
  id: string;
  name: string;
  kind: "lake";
  level: number;
  radius: number;
  radiusX: number;
  radiusZ: number;
  maximumDepth: number;
  phase: number;
}
export interface WaterField extends WaterSample {
  /** Signed shoreline distance: >0 wet; <=0 dry. Units are approximately metres. */
  mask: number;
}
function sitesNear(seed: string, x: number, z: number, radius = 1): Position[] {
  const cx = Math.floor(x / 64),
    cz = Math.floor(z / 64),
    nearKey = `${seed}\0${cx},${cz},${radius}`;
  const cached = nearSitesCache.get(nearKey);
  if (cached) return cached;
  const result: Position[] = [];
  for (let dx = -radius; dx <= radius; dx++)
    for (let dz = -radius; dz <= radius; dz++) {
      const ax = cx + dx,
        az = cz + dz,
        key = `${seed}\0${ax},${az}`;
      if (
        Math.abs(ax) > MAX_CHUNK_COORDINATE ||
        Math.abs(az) > MAX_CHUNK_COORDINATE
      )
        continue;
      let sites = siteCache.get(key);
      if (!sites) {
        sites = generateLegacyChunk(seed, ax, az).sites.map((site) => ({
          x: site.x,
          z: site.z,
        }));
        boundedSet(siteCache, key, sites, 1024);
      }
      result.push(...sites);
    }
  boundedSet(nearSitesCache, nearKey, result, 1024);
  return result;
}
/** The first lake can shift a little when an original investigation occupies
 * its planned centre, retaining a full dry clue site instead of flooding it. */
export function getHomeLake(seed: string): LakeBody {
  let lake = lakeCache.get(seed);
  if (lake) return lake;
  const candidates: Position[] = [
    WATER_HOME,
    { x: 61, z: 27 },
    { x: 52, z: 61 },
    { x: 65, z: 12 },
    { x: -45, z: 38 },
  ];
  const sites = sitesNear(seed, 30, 25, 2);
  const clearance = (point: Position) =>
    sites.reduce(
      (distance, site) =>
        Math.min(distance, Math.hypot(point.x - site.x, point.z - site.z)),
      Infinity,
    );
  const point =
    candidates.find((candidate) => clearance(candidate) >= 34) ??
    candidates.reduce((a, b) => (clearance(a) > clearance(b) ? a : b));
  const h = hSeed(seed),
    variation = hash(h, 0, 0, 191) / 4294967296;
  lake = {
    ...point,
    id: `water:${h.toString(16)}:firstlight`,
    name: "Firstlight Lake",
    kind: "lake",
    level: baseHeightAt(seed, point.x, point.z) - 0.45,
    radius: 21,
    radiusX: 22 + variation * 2,
    radiusZ: 17 + variation,
    maximumDepth: 2.55,
    phase: variation * Math.PI * 2,
  };
  boundedSet(lakeCache, seed, lake, 24);
  return lake;
}
function riverBaseZ(x: number, lake: LakeBody) {
  const t = x - lake.x;
  return (
    lake.z +
    t * 0.24 +
    (Math.sin(t / 35 + lake.phase) - Math.sin(lake.phase)) * 8 +
    Math.sin(t / 79) * 4
  );
}
/** A clearance-aware centreline is planned once per seed. Its samples avoid
 * expanded legacy-site circles; interpolation keeps the river continuous while
 * water queries only perform an indexed lookup instead of generating sites. */
function riverPlan(seed: string) {
  const cached = riverCache.get(seed);
  if (cached) return cached;
  const lake = getHomeLake(seed),
    step = 4;
  const sites: Position[] = [];
  for (
    let cx = Math.floor((lake.x - 40) / 64);
    cx <= Math.ceil((lake.x + 470) / 64);
    cx++
  )
    for (
      let cz = Math.floor((lake.z - 240) / 64);
      cz <= Math.ceil((lake.z + 320) / 64);
      cz++
    ) {
      const key = `${seed}\0${cx},${cz}`;
      let points = siteCache.get(key);
      if (!points) {
        points = generateLegacyChunk(seed, cx, cz).sites.map((site) => ({
          x: site.x,
          z: site.z,
        }));
        boundedSet(siteCache, key, points, 1024);
      }
      sites.push(...points);
    }
  // Whole-route planning avoids a local nearest-shore trap. Wider retries
  // can begin within the lake, giving the outlet room to bend before a site.
  const attempts = [
    { offset: 7, low: -100, rows: 83, moves: 2, clearance: 34 },
    { offset: 0, low: -140, rows: 105, moves: 3, clearance: 33 },
    { offset: -14, low: -160, rows: 115, moves: 4, clearance: 32 },
    { offset: -18, low: -200, rows: 135, moves: 5, clearance: 30 },
  ];
  let plan: RiverPlan | null = null;
  for (const attempt of attempts) {
    const routeStart = lake.x + attempt.offset;
    const low = lake.z + attempt.low,
      rowStep = 4,
      rows = attempt.rows;
    const columns = Math.ceil((lake.x + 435 - routeStart) / step) + 1;
    const back = new Int16Array(rows * columns).fill(-1);
    let previous = new Float64Array(rows).fill(Infinity);
    const blocked = (x: number, z: number) =>
      Math.hypot(x, z) < 34 ||
      (Math.abs(x) < 26 && z > -68 && z < 12) ||
      sites.some(
        (site) => Math.hypot(x - site.x, z - site.z) < attempt.clearance,
      );
    for (let column = 0; column < columns; column++) {
      const x = routeStart + column * step,
        base = riverBaseZ(x, lake);
      const current = new Float64Array(rows).fill(Infinity);
      for (let row = 0; row < rows; row++) {
        const z = low + row * rowStep;
        if (blocked(x, z)) continue;
        const offsetCost = (z - base) ** 2 * 0.004;
        if (column === 0) {
          if (
            Math.abs(z - lake.z) < lake.radiusZ - 2 &&
            (lakeSample(lake, x, z)?.mask ?? -1) > 1
          )
            current[row] = offsetCost + (z - lake.z) ** 2 * 0.15;
          continue;
        }
        for (
          let prior = Math.max(0, row - attempt.moves);
          prior <= Math.min(rows - 1, row + attempt.moves);
          prior++
        ) {
          const cost =
            previous[prior] + offsetCost + ((row - prior) * rowStep) ** 2 * 0.1;
          if (cost < current[row]) {
            current[row] = cost;
            back[column * rows + row] = prior;
          }
        }
      }
      previous = current;
    }
    let row = 0;
    for (let index = 1; index < rows; index++)
      if (previous[index] < previous[row]) row = index;
    if (!Number.isFinite(previous[row])) continue;
    const values = new Array<number>(columns);
    for (let column = columns - 1; column >= 0; column--) {
      values[column] = low + row * rowStep;
      row = back[column * rows + row];
    }
    const candidate: RiverPlan = { start: routeStart, step, values };
    // Validate the interpolated curve as well as the grid samples. A fast bend
    // around a corner must not cut through the protected walking corridor.
    let clear = true;
    for (let x = routeStart; x < lake.x + 430; x += 0.5) {
      if (protectionMask(seed, x, riverZAt(candidate, x), 4) <= 1) {
        clear = false;
        break;
      }
    }
    if (clear) {
      plan = candidate;
      break;
    }
  }
  // No arbitrary custom seed may prevent the world from loading. The bounded
  // attempts above normally connect the full river; an enclosed outlet omits
  // only the river, rather than carving through a clue or emitting broken water.
  plan ??= { start: lake.x + 7, step, values: [lake.z], disabled: true };
  boundedSet(riverCache, seed, plan, 24);
  return plan;
}
function riverZAt(plan: RiverPlan, x: number) {
  const value = (x - plan.start) / plan.step,
    index = Math.floor(value),
    t = clamp(value - index);
  const at = (i: number) =>
    plan.values[Math.max(0, Math.min(plan.values.length - 1, i))];
  const a = at(index - 1),
    b = at(index),
    c = at(index + 1),
    d = at(index + 2);
  return (
    0.5 *
    (2 * b +
      (-a + c) * t +
      (2 * a - 5 * b + 4 * c - d) * t * t +
      (-a + 3 * b - 3 * c + d) * t * t * t)
  );
}
export function riverCentreAt(
  seed: string,
  x: number,
): Position & { width: number; level: number } {
  const lake = getHomeLake(seed),
    plan = riverPlan(seed),
    z = riverZAt(plan, x);
  return {
    x,
    z,
    width: 5.4 + Math.sin((x - lake.x) / 41 + lake.phase) * 0.85,
    level: lake.level - smooth((x - lake.x) / 420) * 0.4,
  };
}
function riverSample(seed: string, x: number, z: number): WaterField | null {
  const lake = getHomeLake(seed);
  if (x < lake.x - 18 - BANK_WIDTH || x > lake.x + 430 + BANK_WIDTH)
    return null;
  const plan = riverPlan(seed);
  if (plan.disabled) return null;
  if (x < plan.start - BANK_WIDTH) return null;
  const centre = riverCentreAt(seed, x);
  if (Math.abs(z - centre.z) > centre.width + BANK_WIDTH) return null;
  const mask = Math.min(
    centre.width - Math.abs(z - centre.z),
    x - plan.start,
    lake.x + 430 - x,
  );
  if (mask <= -BANK_WIDTH) return null;
  const next = riverCentreAt(seed, x + 0.2),
    dz = (next.z - centre.z) / 0.2,
    length = Math.hypot(1, dz);
  return {
    id: `water:${hSeed(seed).toString(16)}:firstlight-river`,
    name: "The Willowrun",
    kind: "river",
    level: centre.level,
    depth: 1.5 * smooth(mask / Math.max(3.6, centre.width)),
    flow: { x: 1 / length, z: dz / length },
    mask,
  };
}
function regionalLake(seed: string, gx: number, gz: number): LakeBody | null {
  const key = `${seed}\0${gx},${gz}`;
  if (poolCache.has(key)) return poolCache.get(key)!;
  const h = hSeed(seed),
    n = hash(h, gx, gz, 199);
  if (n % 5 === 0) {
    boundedSet(poolCache, key, null, 256);
    return null;
  }
  const point = {
    x: gx * POOL_GRID + (hash(h, gx, gz, 211) / 4294967296 - 0.5) * 92,
    z: gz * POOL_GRID + (hash(h, gx, gz, 223) / 4294967296 - 0.5) * 92,
  };
  if (Math.hypot(point.x, point.z) < 145) {
    boundedSet(poolCache, key, null, 256);
    return null;
  }
  const home = getHomeLake(seed),
    inRiverRange = point.x > home.x - 15 && point.x < home.x + 455;
  if (
    inRiverRange &&
    !riverPlan(seed).disabled &&
    Math.abs(point.z - riverCentreAt(seed, point.x).z) < 75
  ) {
    boundedSet(poolCache, key, null, 256);
    return null;
  }
  if (
    sitesNear(seed, point.x, point.z).some(
      (site) => Math.hypot(site.x - point.x, site.z - point.z) < 36,
    )
  ) {
    boundedSet(poolCache, key, null, 256);
    return null;
  }
  const biome = getBiome(seed, point.x, point.z),
    radius = biome === "desert" ? 10 + (n % 5) : 14 + (n % 9);
  const lake: LakeBody = {
    ...point,
    id: `water:${h.toString(16)}:pool:${gx},${gz}`,
    name:
      biome === "desert"
        ? "Saffron Oasis"
        : biome === "caves"
          ? "Opal Pool"
          : "Willow Basin",
    kind: "lake",
    level: baseHeightAt(seed, point.x, point.z) - 0.35,
    radius,
    radiusX: radius * 1.12,
    radiusZ: radius * 0.84,
    maximumDepth: 1.45 + (n % 9) * 0.1,
    phase: (n / 4294967296) * Math.PI * 2,
  };
  boundedSet(poolCache, key, lake, 256);
  return lake;
}
export function getWaterBodies(
  seed: string,
  x: number,
  z: number,
  reach = 128,
): LakeBody[] {
  const result: LakeBody[] = [],
    home = getHomeLake(seed);
  if (Math.hypot(x - home.x, z - home.z) < reach + home.radiusX)
    result.push(home);
  const gx = Math.round(x / POOL_GRID),
    gz = Math.round(z / POOL_GRID),
    radius = Math.ceil((reach + 35) / POOL_GRID);
  for (let dx = -radius; dx <= radius; dx++)
    for (let dz = -radius; dz <= radius; dz++) {
      const lake = regionalLake(seed, gx + dx, gz + dz);
      if (lake && Math.hypot(lake.x - x, lake.z - z) < reach + lake.radiusX)
        result.push(lake);
    }
  return result;
}
function lakeSample(lake: LakeBody, x: number, z: number): WaterField | null {
  const dx = x - lake.x,
    dz = z - lake.z;
  if (
    Math.abs(dx) > lake.radiusX + BANK_WIDTH + 2 ||
    Math.abs(dz) > lake.radiusZ + BANK_WIDTH + 2
  )
    return null;
  const r = Math.hypot(dx / lake.radiusX, dz / lake.radiusZ),
    angle = Math.atan2(dz, dx);
  const ripple =
    (Math.sin(angle * 3 + lake.phase) +
      Math.sin(angle * 5 - lake.phase) * 0.4) *
    0.6 *
    Math.min(1, r);
  const mask = (1 - r) * Math.min(lake.radiusX, lake.radiusZ) + ripple;
  if (mask <= -BANK_WIDTH) return null;
  return {
    id: lake.id,
    name: lake.name,
    kind: "lake",
    level: lake.level,
    depth: lake.maximumDepth * smooth(mask / 9),
    flow: { x: 0, z: 0 },
    mask,
  };
}
function protectionMask(seed: string, x: number, z: number, mask: number) {
  // A dry landing disk and the original walking/investigation corridor include
  // an eight-metre bank transition, so the original terrain stays untouched.
  mask = Math.min(mask, Math.hypot(x, z) - 26);
  const pathDistance = Math.max(Math.abs(x) - 14, z, -55 - z);
  mask = Math.min(mask, pathDistance - BANK_WIDTH);
  for (const site of sitesNear(seed, x, z))
    mask = Math.min(mask, Math.hypot(x - site.x, z - site.z) - 23);
  return mask;
}
/** Includes the dry bank transition. Consumers can use mask to interpolate an
 * exact shoreline; waterAt is the smaller public wet-only contract. */
export function waterFieldAt(
  seed: string,
  x: number,
  z: number,
): WaterField | null {
  if (!Number.isFinite(x) || !Number.isFinite(z)) return null;
  let field: WaterField | null = riverSample(seed, x, z);
  const home = lakeSample(getHomeLake(seed), x, z);
  if (home && (!field || home.mask > field.mask)) field = home;
  // Every regional basin and its bank fits inside its own 208 m anchor cell.
  // One cached candidate replaces nine pool queries for every terrain vertex.
  const lake = regionalLake(
    seed,
    Math.round(x / POOL_GRID),
    Math.round(z / POOL_GRID),
  );
  const candidate = lake ? lakeSample(lake, x, z) : null;
  if (candidate && (!field || candidate.mask > field.mask)) field = candidate;
  if (!field) return null;
  const mask = protectionMask(seed, x, z, field.mask);
  if (mask <= -BANK_WIDTH) return null;
  // Protection only changes rare shoreline fringes; the routed river stays open.
  const depth =
    field.depth * (field.mask > 0 ? smooth(mask / Math.min(6, field.mask)) : 1);
  return { ...field, mask, depth };
}
function heightFromField(base: number, field: WaterField | null) {
  if (!field) return base;
  if (field.mask > 0) return field.level - field.depth;
  const blend = smooth(1 + field.mask / BANK_WIDTH),
    shore = field.level - field.mask * 0.18;
  return base + (shore - base) * blend;
}
export function carveHeightAt(seed: string, x: number, z: number): number {
  return heightFromField(baseHeightAt(seed, x, z), waterFieldAt(seed, x, z));
}
export function waterAt(
  seed: string,
  x: number,
  z: number,
): WaterSample | null {
  const field = waterFieldAt(seed, x, z);
  if (!field || field.mask <= 0 || field.depth <= 0.000001) return null;
  return {
    id: field.id,
    name: field.name,
    kind: field.kind,
    level: field.level,
    depth: field.level - heightFromField(baseHeightAt(seed, x, z), field),
    flow: field.flow,
  };
}

/** Render-side rescue for preserved land-subject anchors that a new basin covers.
 * IDs and saved anchor records remain unchanged; the nearest dry bank is used
 * only for the model’s current visible position. */
export function findDryBank(
  seed: string,
  x: number,
  z: number,
): Position | null {
  const safe = (px: number, pz: number) => {
    const field = waterFieldAt(seed, px, pz);
    if (field && field.mask > -2) return false;
    const floor = carveHeightAt(seed, px, pz);
    for (const [dx, dz] of [
      [1.5, 0],
      [-1.5, 0],
      [0, 1.5],
      [0, -1.5],
    ])
      if (
        waterAt(seed, px + dx, pz + dz) ||
        Math.abs(carveHeightAt(seed, px + dx, pz + dz) - floor) > 0.85
      )
        return false;
    return true;
  };
  if (safe(x, z)) return { x, z };
  for (let radius = 2; radius <= 48; radius += 1.5)
    for (let index = 0; index < 32; index++) {
      const angle = (index * Math.PI * 2) / 32,
        px = x + Math.cos(angle) * radius,
        pz = z + Math.sin(angle) * radius;
      if (safe(px, pz)) return { x: px, z: pz };
    }
  return null;
}
