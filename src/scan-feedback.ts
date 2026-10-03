import * as THREE from "three";

export type ScanStatus =
  "ready" | "out-of-range" | "occluded" | "locked" | "recorded";

export interface ScanSelection<T> {
  entry: T;
  point: THREE.Vector3;
  distance: number;
  visible: boolean;
}

/** A centred point remains forgiving for small flowers and moving animals.
 * A bounded mesh raycast also accepts the visible canopy, leaves or body of a
 * larger specimen, instead of requiring an invisible point near its base. */
export function selectScanTarget<T>(
  entries: T[],
  options: {
    origin: THREE.Vector3;
    direction: THREE.Vector3;
    range: number;
    object: (entry: T) => THREE.Object3D;
    point: (entry: T) => THREE.Vector3;
    radius: (entry: T) => number;
    height: (entry: T) => number;
    recorded: (entry: T) => boolean;
    canObserve: (point: THREE.Vector3) => boolean;
  },
): ScanSelection<T> | null {
  const maxDistance = options.range + 12;
  const raycaster = new THREE.Raycaster(
    options.origin,
    options.direction,
    0.08,
    maxDistance,
  );
  const sphere = new THREE.Sphere();
  const delta = new THREE.Vector3();
  const hits: THREE.Intersection[] = [];
  let best: ScanSelection<T> | null = null;
  let bestScore = Infinity;
  for (const entry of entries) {
    const object = options.object(entry);
    if (!object.visible) continue;
    let point = options.point(entry);
    delta.copy(point).sub(options.origin);
    let distance = delta.length();
    let exactHit = false;
    const radius = options.radius(entry);
    const height = options.height(entry);
    if (distance > maxDistance + height + radius) continue;
    let dot = distance > 0 ? delta.dot(options.direction) / distance : -1;
    const pointAligned =
      distance >= 0.3 && dot >= (distance < 4 ? 0.91 : 0.976);

    sphere.center.copy(object.position);
    sphere.center.y += height * 0.5;
    sphere.radius = Math.hypot(radius, height * 0.5);
    if (raycaster.ray.intersectsSphere(sphere)) {
      object.updateWorldMatrix(true, true);
      hits.length = 0;
      raycaster.intersectObject(object, true, hits);
      const hit = hits[0];
      if (hit) {
        point = hit.point.clone();
        distance = hit.distance;
        dot = 1;
        exactHit = true;
      } else if (!pointAligned) continue;
    } else if (!pointAligned) continue;
    if (distance > maxDistance || distance < 0.08) continue;
    const visible = options.canObserve(point);
    // The first visible mesh under the crosshair takes precedence, even when
    // it has been recorded. Otherwise a new specimen behind an old one could
    // be scanned through its body. The point fallback still favours new
    // observations when several small silhouettes are close to the reticle.
    const score = exactHit
      ? distance * 0.024
      : 1 +
        (1 - dot) * 150 +
        distance * 0.024 +
        (options.recorded(entry) ? 1.1 : 0) +
        (!visible || distance > options.range ? 0.2 : 0);
    if (score < bestScore) {
      bestScore = score;
      best = { entry, point, distance, visible };
    }
  }
  return best;
}

export function getScanStatus(
  target: {
    distance: number;
    visible: boolean;
    scanned: boolean;
    locked: boolean;
  },
  range: number,
): ScanStatus {
  if (target.distance > range) return "out-of-range";
  if (!target.visible) return "occluded";
  if (target.scanned) return "recorded";
  if (target.locked) return "locked";
  return "ready";
}

export function adaptScanText(text: string, touch: boolean) {
  return touch
    ? text
        .replace(/\bhold E\b/gi, (value) =>
          value[0] === "H" ? "Hold Scan" : "hold Scan",
        )
        .replace(/\bQ\b/g, "Pulse")
    : text;
}

export function scanFeedback(status: ScanStatus, landmark = false) {
  switch (status) {
    case "out-of-range":
      return {
        title: "Specimen outside scanner range",
        detail:
          "Move closer until the target card says Hold E. Your current scanner range is shown beside the survey sensor.",
        prompt: "Move closer · outside scanner range",
      };
    case "occluded":
      return {
        title: "Clear view required",
        detail:
          "Move around the ridge or foliage blocking the specimen. Keep it centred in the crosshair.",
        prompt: "Move around the obstacle · clear view needed",
      };
    case "recorded":
      return {
        title: "This observation is already recorded",
        detail:
          "This individual specimen is already in your atlas. Explore for another specimen or use Q to highlight unrecorded discoveries.",
        prompt: "Recorded · seek another specimen",
      };
    case "locked":
      return {
        title: "Three clues unlock this landmark",
        detail:
          "Hold E to record each of the three distinct clues around this site, then return and hold E on the landmark. Q helps locate unrecorded clues.",
        prompt: "Record all 3 surrounding clues first",
      };
    default:
      return {
        title: "Hold the scanner until the bar fills",
        detail:
          "Keep the specimen centred and hold E for about one second. Landmarks take a little longer.",
        prompt: landmark
          ? "Hold E · reveal finding"
          : "Hold E · record observation",
      };
  }
}

export function fieldScanFeedback(touch: boolean) {
  return {
    title: "Field supplies use a different action",
    detail: touch
      ? "Move within 5 metres, face the supply or probe, and tap Use. Scan records catalogue specimens and investigation clues."
      : "Move within 5 metres, face the supply or probe, and press F. Hold E records catalogue specimens and investigation clues.",
  };
}

export function noScanTargetFeedback(touch: boolean) {
  return {
    title: "No catalogue specimen selected",
    detail: touch
      ? "Aim at a specimen and hold Scan until the bar fills. Pulse marks unrecorded specimens; some trees, rocks and plants are scenery."
      : "Aim at a specimen and hold E until the bar fills. Q marks unrecorded specimens; some trees, rocks and plants are scenery.",
  };
}
