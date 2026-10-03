import * as THREE from "three";

/** Original, code-authored sculpture. These GPU resources belong to the model
 * library, not individual world chunks: removing an instance must not dispose them. */
export const geometryCache = new Map<string, THREE.BufferGeometry>();
export const materialCache = new Map<string, THREE.MeshStandardMaterial>();
export const UP = new THREE.Vector3(0, 1, 0);
export const TAU = Math.PI * 2;
export type V3 = [number, number, number];
export type Piece = {
  geometry: THREE.BufferGeometry;
  position?: V3;
  rotation?: V3;
  rotationOrder?: THREE.EulerOrder;
  scale?: V3;
};

export function geometry(
  key: string,
  make: () => THREE.BufferGeometry,
): THREE.BufferGeometry {
  let result = geometryCache.get(key);
  if (!result) {
    result = make();
    result.computeBoundingBox();
    result.computeBoundingSphere();
    geometryCache.set(key, result);
  }
  return result;
}

export function material(
  color: string,
  roughness = 0.72,
  metalness = 0.04,
  glow?: string,
  intensity = 0,
): THREE.MeshStandardMaterial {
  const key = `${color}:${roughness}:${metalness}:${glow}:${intensity}`;
  let result = materialCache.get(key);
  if (!result) {
    result = new THREE.MeshStandardMaterial({
      color,
      roughness,
      metalness,
      emissive: glow ?? "#000000",
      emissiveIntensity: intensity,
    });
    result.name = `Vesper / ${color}`;
    materialCache.set(key, result);
  }
  return result;
}

export const M = {
  bark: material("#4b7166", 0.93),
  barkDark: material("#344d47", 0.95),
  root: material("#69785d", 0.94),
  canopy: material("#779b7c", 0.84),
  canopyLight: material("#a5b79a", 0.85),
  leaf: material("#538c7a", 0.75),
  leafLight: material("#84b79e", 0.7),
  reed: material("#92b899", 0.8),
  pearl: material("#eee2bd", 0.45, 0.12),
  bloom: material("#efc48e", 0.45, 0.08, "#ffc16c", 0.12),
  heart: material("#d7a564", 0.35, 0.14, "#f1ac55", 0.27),
  sandstone: material("#b9825c", 0.96),
  sandLight: material("#d0a780", 0.93),
  sandDark: material("#805b49", 0.94),
  amber: material("#cf9858", 0.24, 0.24, "#b17226", 0.11),
  amberLight: material("#ead4a1", 0.3, 0.12),
  rose: material("#e2b8a0", 0.68),
  roseDark: material("#ba7c69", 0.77),
  cave: material("#3f6571", 0.91),
  caveDark: material("#263f4c", 0.97),
  frost: material("#9dbbc5", 0.65),
  crystal: material("#71c5d0", 0.25, 0.2, "#259dab", 0.18),
  crystalLight: material("#c9e9df", 0.3, 0.1, "#77e8df", 0.17),
  cyan: material("#71d8d4", 0.28, 0.22, "#3fe0cd", 0.47),
  ceramic: material("#dbd8bc", 0.71, 0.12),
  ceramicDark: material("#828e82", 0.81, 0.08),
  metal: material("#354b4e", 0.44, 0.58),
  metalLight: material("#a1b1aa", 0.35, 0.66),
  black: material("#1b3033", 0.34, 0.15),
  glass: material("#304f59", 0.18, 0.62),
  wing: material("#d2c3a0", 0.72, 0.1),
  wingDark: material("#819889", 0.71),
};

export const sphere = () =>
  geometry("sphere-12", () => new THREE.SphereGeometry(1, 12, 8));
export const facet = () =>
  geometry("icosahedron", () => new THREE.IcosahedronGeometry(1, 0));
export const box = () => geometry("box", () => new THREE.BoxGeometry(1, 1, 1));
export const cylinder = (sides = 12) =>
  geometry(
    `cylinder-${sides}`,
    () => new THREE.CylinderGeometry(1, 1, 1, sides),
  );
export const taper = () =>
  geometry("taper", () => new THREE.CylinderGeometry(0.45, 1, 1, 10, 2));
export const cone = () =>
  geometry("cone", () => new THREE.ConeGeometry(1, 1, 7));
export const ring = () =>
  geometry("ring", () => new THREE.TorusGeometry(1, 0.075, 6, 32));

/** Merge transformed pieces into one draw-ready mesh, retaining normals. All
 * temporary clones are disposable; the source geometries stay shared. */
export function merge(key: string, pieces: Piece[]): THREE.BufferGeometry {
  return geometry(key, () => {
    const positions: number[] = [],
      normals: number[] = [],
      uvs: number[] = [];
    for (const p of pieces) {
      const copy = p.geometry.clone();
      const transform = new THREE.Matrix4().compose(
        new THREE.Vector3(...(p.position ?? [0, 0, 0])),
        new THREE.Quaternion().setFromEuler(
          new THREE.Euler(
            ...(p.rotation ?? [0, 0, 0]),
            p.rotationOrder ?? "XYZ",
          ),
        ),
        new THREE.Vector3(...(p.scale ?? [1, 1, 1])),
      );
      copy.applyMatrix4(transform);
      const flat = copy.index ? copy.toNonIndexed() : copy;
      const a = flat.getAttribute("position");
      const n = flat.getAttribute("normal");
      const uv = flat.getAttribute("uv");
      for (let i = 0; i < a.count; i++) {
        positions.push(a.getX(i), a.getY(i), a.getZ(i));
        normals.push(n.getX(i), n.getY(i), n.getZ(i));
        uvs.push(uv ? uv.getX(i) : 0, uv ? uv.getY(i) : 0);
      }
      if (flat !== copy) flat.dispose();
      copy.dispose();
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
    g.setAttribute("normal", new THREE.Float32BufferAttribute(normals, 3));
    g.setAttribute("uv", new THREE.Float32BufferAttribute(uvs, 2));
    return g;
  });
}

export function mesh(
  group: THREE.Group,
  g: THREE.BufferGeometry,
  m: THREE.Material,
  position: V3 = [0, 0, 0],
  scale: V3 = [1, 1, 1],
  rotation: V3 = [0, 0, 0],
): THREE.Mesh {
  const object = new THREE.Mesh(g, m);
  object.position.set(...position);
  object.scale.set(...scale);
  object.rotation.set(...rotation);
  object.castShadow = true;
  object.receiveShadow = true;
  group.add(object);
  return object;
}

export function tube(
  key: string,
  points: V3[],
  radius: number,
  radial = 7,
): THREE.BufferGeometry {
  return geometry(
    key,
    () =>
      new THREE.TubeGeometry(
        new THREE.CatmullRomCurve3(points.map((p) => new THREE.Vector3(...p))),
        18,
        radius,
        radial,
        false,
      ),
  );
}

export function stalkPiece(
  a: V3,
  b: V3,
  radius: number,
  g = cylinder(8),
): Piece {
  const start = new THREE.Vector3(...a),
    end = new THREE.Vector3(...b);
  const direction = end.clone().sub(start);
  const q = new THREE.Quaternion().setFromUnitVectors(
    UP,
    direction.clone().normalize(),
  );
  const e = new THREE.Euler().setFromQuaternion(q);
  return {
    geometry: g,
    position: start.add(end).multiplyScalar(0.5).toArray() as V3,
    scale: [radius, direction.length(), radius],
    rotation: [e.x, e.y, e.z],
  };
}

/** A closed, bent lenticular leaf: actual volume, not a plane/billboard. */
export function leaf(): THREE.BufferGeometry {
  return geometry("lenticular-leaf", () => {
    const vertices: number[] = [],
      indices: number[] = [];
    const rows = 12,
      sides = 8;
    for (let i = 0; i <= rows; i++) {
      const t = i / rows,
        span = Math.max(0.002, Math.pow(Math.sin(Math.PI * t), 0.78));
      for (let j = 0; j < sides; j++) {
        const angle = (TAU * j) / sides;
        vertices.push(
          Math.cos(angle) * 0.33 * span,
          t,
          0.22 * t * t + Math.sin(angle) * 0.035 * span,
        );
      }
    }
    for (let i = 0; i < rows; i++)
      for (let j = 0; j < sides; j++) {
        const a = i * sides + j,
          b = i * sides + ((j + 1) % sides),
          c = a + sides,
          d = b + sides;
        indices.push(a, c, b, b, c, d);
      }
    // End caps also close the tiny tip rings.
    for (let j = 1; j < sides - 1; j++)
      indices.push(
        0,
        j,
        j + 1,
        rows * sides,
        rows * sides + j + 1,
        rows * sides + j,
      );
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.Float32BufferAttribute(vertices, 3));
    g.setIndex(indices);
    g.computeVertexNormals();
    return g;
  });
}

export function petalRosette(
  key: string,
  count: number,
  length: number,
  spread: number,
  lift: number,
  twist = 0,
): THREE.BufferGeometry {
  const pieces: Piece[] = [];
  for (let i = 0; i < count; i++) {
    const angle = (TAU * i) / count + twist;
    pieces.push({
      geometry: leaf(),
      position: [0, lift, 0],
      scale: [spread, length, spread],
      rotation: [0.82, angle, 0],
      rotationOrder: "YXZ",
    });
  }
  return merge(key, pieces);
}

export function crystal(): THREE.BufferGeometry {
  return geometry("quartz-prism", () => {
    const positions: number[] = [],
      indices: number[] = [];
    const levels = [
      { y: 0, r: 0.76 },
      { y: 0.78, r: 1 },
      { y: 1, r: 0.015 },
    ];
    for (const l of levels)
      for (let i = 0; i < 6; i++)
        positions.push(
          Math.cos((i * TAU) / 6) * l.r,
          l.y,
          Math.sin((i * TAU) / 6) * l.r,
        );
    for (let level = 0; level < 2; level++)
      for (let i = 0; i < 6; i++) {
        const a = level * 6 + i,
          b = level * 6 + ((i + 1) % 6);
        indices.push(a, a + 6, b, b, a + 6, b + 6);
      }
    for (let i = 1; i < 5; i++)
      indices.push(0, i, i + 1, 12, 12 + i + 1, 12 + i);
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
    g.setIndex(indices);
    const flat = g.toNonIndexed();
    flat.computeVertexNormals();
    g.dispose();
    return flat;
  });
}

export function umbrella(): THREE.BufferGeometry {
  return geometry(
    "umbrella-canopy",
    () =>
      new THREE.LatheGeometry(
        [
          new THREE.Vector2(0, 0.12),
          new THREE.Vector2(1.9, 0),
          new THREE.Vector2(3.7, 0.16),
          new THREE.Vector2(4.15, 0.42),
          new THREE.Vector2(3.7, 0.77),
          new THREE.Vector2(2.5, 1.2),
          new THREE.Vector2(1.1, 1.47),
          new THREE.Vector2(0, 1.54),
        ],
        18,
      ),
  );
}

export function branchedRoot(): THREE.BufferGeometry {
  const pieces: Piece[] = [];
  for (let i = 0; i < 5; i++) {
    const a = (TAU * i) / 5;
    pieces.push(
      stalkPiece(
        [0, 0.7, 0],
        [Math.cos(a) * 1.3, 0.13, Math.sin(a) * 1.3],
        0.17,
        taper(),
      ),
    );
  }
  return merge("buttress-roots", pieces);
}

export function rng(seed: number): () => number {
  let value = seed >>> 0;
  return () => {
    value += 0x6d2b79f5;
    let t = value;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function finish(group: THREE.Group, kind: string): THREE.Group {
  group.name = `Vesper / ${kind}`;
  group.updateMatrixWorld(true);
  const bounds = new THREE.Box3().setFromObject(group);
  // Keep direct children, so world integration can instance every mesh directly.
  if (Number.isFinite(bounds.min.y))
    for (const child of group.children) child.position.y -= bounds.min.y;
  group.updateMatrixWorld(true);
  group.userData.modelKind = kind;
  group.userData.sharedResources = true;
  return group;
}
