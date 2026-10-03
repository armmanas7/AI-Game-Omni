import * as THREE from "three";
import type {
  BiomeId,
  Position,
  Settings,
  WorldEntity,
  WaterSample,
} from "./types";

export interface WildlifeEnvironment {
  height: (x: number, z: number) => number;
  biome: (x: number, z: number) => BiomeId;
  blocked: (x: number, z: number) => boolean;
  water?: (x: number, z: number) => WaterSample | null;
}

interface AquaticBounds {
  height: number;
  bottom: number;
  top: number;
  radius: number;
  bodyCentre: number;
  clearance: number;
  scale: string;
}
interface WaterEnvelope {
  sample: WaterSample;
  minimumY: number;
  maximumY: number;
}

/** Measure the actual sculpture once; registry bounds are deliberately larger
 * and shouldn't force small fish into unnecessarily deep water. */
function aquaticBounds(object: THREE.Group): AquaticBounds {
  const scale = object.scale.toArray().join(",");
  const cached = object.userData.aquaticBounds as AquaticBounds | undefined;
  if (cached?.scale === scale) return cached;
  object.updateWorldMatrix(true, true);
  const box = new THREE.Box3().setFromObject(object);
  const bottom = box.min.y - object.position.y;
  const top = box.max.y - object.position.y;
  const radius = Math.hypot(
    Math.max(
      Math.abs(box.min.x - object.position.x),
      Math.abs(box.max.x - object.position.x),
    ),
    Math.max(
      Math.abs(box.min.z - object.position.z),
      Math.abs(box.max.z - object.position.z),
    ),
  );
  const body = object.userData.animation.bodyCenterY;
  const result: AquaticBounds = {
    height: top - bottom,
    bottom,
    top,
    radius,
    bodyCentre: Number.isFinite(body)
      ? body * Math.abs(object.scale.y)
      : (bottom + top) / 2,
    // Fin/head articulation can extend beyond the static mesh's vertical box.
    clearance:
      0.07 +
      0.05 *
        Math.max(
          Math.abs(object.scale.x),
          Math.abs(object.scale.y),
          Math.abs(object.scale.z),
        ),
    scale,
  };
  object.userData.aquaticBounds = result;
  object.userData.modelHeight = result.height;
  return result;
}

/** Fit the entire fish, rather than just its centre point, between a bed and
 * surface. Sampling its conservative footprint prevents fins crossing banks. */
function waterEnvelope(
  x: number,
  z: number,
  waterId: string | undefined,
  bounds: AquaticBounds,
  environment: WildlifeEnvironment,
): WaterEnvelope | null {
  const sample = environment.water?.(x, z);
  if (!sample || sample.id !== waterId) return null;
  let minimumY = -Infinity,
    maximumY = Infinity;
  for (let i = -1; i < 8; i++) {
    const angle = (Math.PI * i) / 4;
    const px = x + (i < 0 ? 0 : Math.cos(angle) * bounds.radius);
    const pz = z + (i < 0 ? 0 : Math.sin(angle) * bounds.radius);
    const water = environment.water?.(px, pz);
    const terrain = environment.height(px, pz);
    if (
      !water ||
      water.id !== waterId ||
      !Number.isFinite(water.level) ||
      !Number.isFinite(water.depth) ||
      !Number.isFinite(terrain) ||
      water.depth <= 0
    )
      return null;
    const bed = Math.max(terrain, water.level - water.depth);
    minimumY = Math.max(minimumY, bed + bounds.clearance - bounds.bottom);
    maximumY = Math.min(maximumY, water.level - bounds.clearance - bounds.top);
  }
  if (minimumY > maximumY) return null;
  return { sample, minimumY, maximumY };
}

function aquaticPathClear(
  from: Position,
  to: Position,
  waterId: string | undefined,
  bounds: AquaticBounds,
  environment: WildlifeEnvironment,
): boolean {
  const steps = Math.max(
    1,
    Math.ceil(Math.hypot(to.x - from.x, to.z - from.z) / 0.2),
  );
  for (let i = 1; i <= steps; i++) {
    const t = i / steps;
    if (
      !waterEnvelope(
        THREE.MathUtils.lerp(from.x, to.x, t),
        THREE.MathUtils.lerp(from.z, to.z, t),
        waterId,
        bounds,
        environment,
      )
    )
      return false;
  }
  return true;
}

/** Local, deterministic animal behavior. Wildlife wanders between grazing pauses,
 * watches a nearby visitor, and stays still enough to make field observations. */
export function animateWildlife(
  object: THREE.Group,
  entity: WorldEntity,
  time: number,
  dt: number,
  observer: Position,
  settings: Settings,
  focused: boolean,
  environment: WildlifeEnvironment,
): void {
  const animation = object.userData.animation ?? {};
  const flying = ["fly", "moth", "bird"].includes(animation.type);
  const swimming = animation.type === "swim";
  const initialized = object.userData.wildlifeInitialized === true;
  // The world passes dt=0 while paused. Keep both pose and position exact,
  // even if a caller advances the clock or changes observer position.
  if (initialized && dt <= 0) {
    if (swimming && object.userData.aquaticUnavailable) object.visible = false;
    return;
  }
  dt = THREE.MathUtils.clamp(dt, 0, 0.1);
  const aquatic = swimming ? aquaticBounds(object) : null;
  const homeWater = swimming ? environment.water?.(entity.x, entity.z) : null;
  let envelope = aquatic
    ? waterEnvelope(
        object.position.x,
        object.position.z,
        homeWater?.id,
        aquatic,
        environment,
      )
    : null;
  if (aquatic && !envelope) {
    // A corrupt/obsolete placement can recover only within its original water
    // body. Never fall back to terrestrial height or an inverted clamp range.
    const home = waterEnvelope(
      entity.x,
      entity.z,
      homeWater?.id,
      aquatic,
      environment,
    );
    if (!home) {
      object.visible = false;
      object.userData.aquaticUnavailable = true;
      object.userData.behavior = "Outside suitable water";
      object.userData.wildlifeInitialized = true;
      return;
    }
    object.position.x = entity.x;
    object.position.z = entity.z;
    envelope = home;
  }
  object.userData.aquaticUnavailable = false;
  const phase = (entity.seed % 997) * 0.031;
  const radius = animation.radius ?? (flying ? 2.2 : 2.8);
  const speed = animation.speed ?? (flying ? 0.65 : 0.32);
  const distance = Math.hypot(
    object.position.x - observer.x,
    object.position.z - observer.z,
  );
  const watch =
    focused || (animation.type !== "bird" && distance < (swimming ? 4 : 9));
  const grazing = !flying && !swimming && Math.sin(time * 0.12 + phase) > 0.48;
  const moving = !watch && !grazing && !settings.reducedMotion;
  if (moving) {
    const angle = (time * speed) / Math.max(1, radius) + phase;
    const x = entity.x + Math.cos(angle) * radius;
    const z = entity.z + Math.sin(angle) * radius * 0.7;
    const dx = x - object.position.x,
      dz = z - object.position.z;
    const amount = 1 - Math.exp(-dt * 0.7);
    const nextX = object.position.x + dx * amount,
      nextZ = object.position.z + dz * amount;
    const nextWater = environment.water?.(nextX, nextZ);
    const allowed = swimming
      ? aquaticPathClear(
          { x: object.position.x, z: object.position.z },
          { x: nextX, z: nextZ },
          homeWater?.id,
          aquatic!,
          environment,
        )
      : environment.biome(nextX, nextZ) ===
          environment.biome(entity.x, entity.z) &&
        (flying || (!environment.blocked(nextX, nextZ) && !nextWater));
    if (allowed) {
      object.position.x = nextX;
      object.position.z = nextZ;
      if (aquatic)
        envelope = waterEnvelope(
          nextX,
          nextZ,
          homeWater?.id,
          aquatic,
          environment,
        );
      if (Math.hypot(dx, dz) > 0.02)
        turnTowards(object, Math.atan2(-dx, -dz), dt * 1.8);
    }
  } else if (watch && !settings.reducedMotion) {
    turnTowards(
      object,
      Math.atan2(
        object.position.x - observer.x,
        object.position.z - observer.z,
      ),
      dt * 0.65,
    );
  }
  const terrain = environment.height(object.position.x, object.position.z);
  const surface = flying
    ? environment.water?.(object.position.x, object.position.z)
    : null;
  const floor = surface ? Math.max(terrain, surface.level) : terrain;
  const beat = time * (animation.type === "crawl" ? 4 : 3.4) + phase;
  const bob = settings.reducedMotion
    ? 0
    : Math.sin(time * 1.2 + phase) * (flying ? 0.22 : moving ? 0.025 : 0.009);
  const hop =
    animation.type === "hop" && moving ? Math.max(0, Math.sin(beat)) * 0.24 : 0;
  if (aquatic && envelope) {
    const hold = initialized && (watch || settings.reducedMotion || dt === 0);
    const desired = hold
      ? object.position.y
      : envelope.sample.level -
        (animation.swimDepth ?? 0.7) -
        aquatic.bodyCentre +
        (settings.reducedMotion || watch
          ? 0
          : Math.sin(time * 0.7 + phase) * 0.06);
    object.position.y = THREE.MathUtils.clamp(
      desired,
      envelope.minimumY,
      envelope.maximumY,
    );
  } else if (flying && initialized && watch && !settings.reducedMotion) {
    object.position.y = Math.max(object.position.y, floor + 0.2);
  } else
    object.position.y =
      floor + (flying ? (animation.hoverHeight ?? 1.7) : 0) + bob + hop;
  object.userData.behavior = settings.reducedMotion
    ? "Resting"
    : swimming
      ? watch
        ? "Holding in the current"
        : "Swimming"
      : flying
        ? watch
          ? "Hovering nearby"
          : "Gliding"
        : watch
          ? "Watching you"
          : grazing
            ? "Foraging"
            : "Wandering";

  for (const child of object.children) {
    const rest = (child.userData.restRotation ??= child.rotation
      .toArray()
      .slice(0, 3));
    child.rotation.set(rest[0], rest[1], rest[2]);
    if (settings.reducedMotion) continue;
    if (child.name.startsWith("leg-")) {
      const index = Number(child.name.slice(4));
      child.rotation.x += moving
        ? Math.sin(beat + (index % 2) * Math.PI + Math.floor(index / 2) * 0.5) *
          (animation.amplitude ?? 0.3)
        : 0;
    } else if (child.name === "wing-left" || child.name === "wing-right") {
      const side = child.name === "wing-left" ? -1 : 1;
      child.rotation.z +=
        side *
        Math.sin(
          time *
            (animation.type === "moth"
              ? 10
              : animation.type === "bird"
                ? 3.8
                : 2.1) +
            phase,
        ) *
        (animation.amplitude ?? 0.2);
    } else if (child.name === "head") {
      child.rotation.x += grazing
        ? 0.26 + Math.sin(time * 1.1 + phase) * 0.06
        : Math.sin(time * 0.65 + phase) * 0.045;
    } else if (child.name === "tail") {
      child.rotation.y +=
        Math.sin(time * (swimming ? 4.8 : 1.4) + phase) *
        (swimming ? 0.3 : 0.12);
    } else if (child.name.startsWith("fin-")) {
      child.rotation.z +=
        Math.sin(time * 3.2 + phase) *
        0.14 *
        (child.name.endsWith("left") ? -1 : 1);
    }
  }
  object.userData.wildlifeInitialized = true;
}

function turnTowards(object: THREE.Object3D, angle: number, amount: number) {
  const difference = Math.atan2(
    Math.sin(angle - object.rotation.y),
    Math.cos(angle - object.rotation.y),
  );
  object.rotation.y += difference * Math.min(1, amount);
}
