import * as THREE from "three";
import type { ModelKind } from "./types";
import {
  finish,
  geometry,
  leaf,
  material,
  merge,
  mesh,
  sphere,
  stalkPiece,
  tube,
  type Piece,
  type V3,
} from "./model-kit";

/** Original, jointed bird and aquatic sculptures. All face local -Z; source
 * geometry/materials remain shared when a creature leaves the streamed world. */
export const AQUATIC_AVIAN_BOUNDS: Partial<
  Record<ModelKind, { radius: number; height: number }>
> = {
  "canopy-swift": { radius: 1.05, height: 0.65 },
  "suncrest-bird": { radius: 0.9, height: 0.85 },
  "reed-heron": { radius: 1.7, height: 1.85 },
  "ribbon-fish": { radius: 0.65, height: 0.5 },
  "glass-koi": { radius: 0.9, height: 0.7 },
  "lantern-eel": { radius: 0.85, height: 0.5 },
};

export interface AquaticAvianAnimation {
  type: "bird" | "swim";
  speed: number;
  radius: number;
  hoverHeight: number;
  amplitude: number;
  swimDepth?: number;
  bodyCenterY?: number;
}

const black = material("#102c30", 0.15, 0.2);
const ivory = material("#eee4c8", 0.79);
const teal = material("#355f67", 0.74);
const blue = material("#477f99", 0.66);
const copper = material("#d69858", 0.76);
const coral = material("#c77d60", 0.76);
const mint = material("#c0dfd0", 0.5, 0.11);
const feather = material("#a9bdad", 0.85);
const legColor = material("#978a68", 0.8);
const finBlue = material("#88dbce", 0.37, 0.15, "#52c6c3", 0.12);
const finRose = material("#e2bea9", 0.49, 0.12);
const fishBlue = material("#62a9ae", 0.36, 0.32);
const fishSilver = material("#bdd6c6", 0.31, 0.25);
const fishPearl = material("#e5e5c4", 0.47, 0.22);
const fishOrange = material("#d59a60", 0.5, 0.16);
const eelSkin = material("#457a79", 0.6, 0.13);
const eelGlow = material("#b9e3bf", 0.38, 0.08, "#8bdca2", 0.6);

function ball(position: V3, scale: V3, rotation: V3 = [0, 0, 0]): Piece {
  return { geometry: sphere(), position, scale, rotation };
}
function sculpt(
  group: THREE.Group,
  key: string,
  pieces: Piece[],
  m: THREE.Material,
  name: string,
  pivot: V3 = [0, 0, 0],
): THREE.Mesh {
  const object = mesh(group, merge(`avian-aquatic:${key}`, pieces), m, pivot);
  object.name = name;
  return object;
}
function eyePair(
  group: THREE.Group,
  key: string,
  locations: V3[],
  radius: number,
): void {
  sculpt(
    group,
    `${key}:eyes`,
    locations.map((p) => ball(p, [radius, radius, radius])),
    black,
    "eyes",
  );
}
function complete(
  group: THREE.Group,
  kind: ModelKind,
  animation: AquaticAvianAnimation,
): THREE.Group {
  finish(group, kind);
  const body = group.getObjectByName("body")!;
  group.userData.animation = {
    ...animation,
    ...(animation.type === "swim"
      ? {
          bodyCenterY: new THREE.Box3()
            .setFromObject(body)
            .getCenter(new THREE.Vector3()).y,
        }
      : {}),
  };
  for (const part of group.children) {
    part.userData.restPosition = part.position.toArray();
    part.userData.restRotation = [
      part.rotation.x,
      part.rotation.y,
      part.rotation.z,
    ];
  }
  return group;
}

/** Closed lenticular primary feathers retain thickness and outward normals.
 * A merged shoulder/forearm and overlapping feathers form each entire wing. */
function featherWing(
  key: string,
  side: number,
  span: number,
  chord: number,
  slender = false,
): THREE.BufferGeometry {
  const pieces: Piece[] = [
    ball([side * span * 0.23, 0, 0], [span * 0.31, 0.06, chord * 0.3]),
    stalkPiece([0, 0, -0.025], [side * span * 0.7, 0.025, chord * 0.1], 0.025),
  ];
  for (let i = 0; i < 10; i++) {
    const t = i / 9;
    pieces.push({
      geometry: leaf(),
      position: [
        side * span * (0.08 + t * 0.83),
        0.01 + Math.sin(t * Math.PI) * 0.025,
        -chord * 0.1 + chord * t * 0.3,
      ],
      scale: [slender ? 0.21 : 0.33, chord * (0.7 + t * 0.42), 0.65],
      rotation: [
        Math.PI / 2,
        side * (slender ? 0.28 + t * 0.35 : 0.03 + t * 0.42),
        0,
      ],
      rotationOrder: "YXZ",
    });
  }
  return merge(`avian-aquatic:${key}`, pieces);
}

function wings(
  group: THREE.Group,
  kind: string,
  span: number,
  chord: number,
  skin: THREE.Material,
  pivotY: number,
  slender = false,
): void {
  for (const side of [-1, 1]) {
    const wing = mesh(
      group,
      featherWing(`${kind}:wing:${side}`, side, span, chord, slender),
      skin,
      [side * 0.08, pivotY, 0],
    );
    wing.name = side < 0 ? "wing-left" : "wing-right";
  }
}

function swift(seed: number): THREE.Group {
  const group = new THREE.Group();
  const skin =
    seed % 3 === 0 ? teal : seed % 3 === 1 ? blue : material("#526d75", 0.77);
  sculpt(
    group,
    "swift:body",
    [ball([0, 0.25, 0.04], [0.13, 0.145, 0.33])],
    skin,
    "body",
  );
  sculpt(
    group,
    "swift:head",
    [ball([0, 0, -0.055], [0.11, 0.105, 0.15])],
    skin,
    "head",
    [0, 0.31, -0.28],
  );
  sculpt(
    group,
    "swift:throat",
    [
      ball([0, 0.23, -0.325], [0.088, 0.08, 0.055]),
      ball([0, 0.15, -0.03], [0.092, 0.047, 0.22]),
    ],
    ivory,
    "throat",
  );
  sculpt(
    group,
    "swift:beak",
    [ball([0, 0.29, -0.475], [0.028, 0.026, 0.065])],
    black,
    "beak",
  );
  wings(group, "swift", 0.67, 0.36, skin, 0.28, true);
  sculpt(
    group,
    "swift:forked-tail",
    [-1, 1].map((side) => ({
      geometry: leaf(),
      position: [side * 0.025, 0, 0],
      scale: [0.2, 0.36, 0.7],
      rotation: [Math.PI / 2, side * 0.32, 0],
      rotationOrder: "YXZ",
    })),
    skin,
    "tail",
    [0, 0.25, 0.28],
  );
  eyePair(
    group,
    "swift",
    [
      [-0.092, 0.34, -0.365],
      [0.092, 0.34, -0.365],
    ],
    0.023,
  );
  return complete(group, "canopy-swift", {
    type: "bird",
    speed: 1.5,
    radius: 11,
    hoverHeight: 6.4,
    amplitude: 0.42,
  });
}

function suncrest(seed: number): THREE.Group {
  const group = new THREE.Group();
  const skin = seed % 2 ? blue : material("#68998b", 0.74);
  sculpt(
    group,
    "suncrest:body",
    [ball([0, 0.27, 0.015], [0.18, 0.19, 0.24])],
    skin,
    "body",
  );
  sculpt(
    group,
    "suncrest:head",
    [ball([0, 0, -0.025], [0.14, 0.14, 0.16])],
    skin,
    "head",
    [0, 0.45, -0.19],
  );
  sculpt(
    group,
    "suncrest:breast",
    [ball([0, 0.26, -0.168], [0.132, 0.14, 0.085])],
    copper,
    "breast",
  );
  const crest: Piece[] = [];
  for (let i = 0; i < 4; i++)
    crest.push({
      geometry: leaf(),
      position: [0, 0.52, -0.18 + i * 0.035],
      scale: [0.18, 0.24 - i * 0.025, 0.65],
      rotation: [0.4, 0, 0],
    });
  sculpt(group, "suncrest:crest", crest, coral, "crest");
  sculpt(
    group,
    "suncrest:beak",
    [ball([0, 0.43, -0.36], [0.037, 0.039, 0.065])],
    copper,
    "beak",
  );
  wings(group, "suncrest", 0.48, 0.38, skin, 0.33);
  const tail: Piece[] = [];
  for (let i = -2; i <= 2; i++)
    tail.push({
      geometry: leaf(),
      position: [i * 0.025, 0, 0],
      scale: [0.2, 0.27, 0.65],
      rotation: [1.35, i * 0.13, 0],
      rotationOrder: "YXZ",
    });
  sculpt(group, "suncrest:tail", tail, copper, "tail", [0, 0.29, 0.19]);
  for (let i = 0; i < 2; i++)
    sculpt(
      group,
      "suncrest:leg",
      [
        stalkPiece([0, 0, 0], [0, -0.06, 0.045], 0.019),
        stalkPiece([0, -0.06, 0.045], [0, -0.1, -0.015], 0.014),
        ball([0, -0.1, -0.034], [0.027, 0.018, 0.044]),
      ],
      legColor,
      `leg-${i}`,
      [i ? 0.075 : -0.075, 0.17, 0.07],
    );
  eyePair(
    group,
    "suncrest",
    [
      [-0.117, 0.47, -0.255],
      [0.117, 0.47, -0.255],
    ],
    0.027,
  );
  return complete(group, "suncrest-bird", {
    type: "bird",
    speed: 0.95,
    radius: 7,
    hoverHeight: 3.4,
    amplitude: 0.56,
  });
}

function heron(seed: number): THREE.Group {
  const group = new THREE.Group();
  const skin = seed % 2 ? feather : mint;
  sculpt(
    group,
    "heron:body",
    [ball([0, 0.6, 0.09], [0.23, 0.24, 0.46])],
    skin,
    "body",
  );
  const neck = mesh(
    group,
    tube(
      "avian-aquatic:heron:neck",
      [
        [0, 0.65, -0.2],
        [0, 0.83, -0.39],
        [0, 1.02, -0.26],
        [0, 1.23, -0.4],
      ],
      0.073,
      9,
    ),
    skin,
  );
  neck.name = "neck";
  sculpt(
    group,
    "heron:head",
    [ball([0, 0, -0.025], [0.108, 0.12, 0.18])],
    skin,
    "head",
    [0, 1.26, -0.45],
  );
  sculpt(
    group,
    "heron:beak",
    [ball([0, 1.23, -0.725], [0.037, 0.039, 0.195])],
    copper,
    "beak",
  );
  wings(group, "heron", 1.1, 0.65, skin, 0.67);
  sculpt(
    group,
    "heron:tail",
    [-1, 0, 1].map((i) => ({
      geometry: leaf(),
      position: [i * 0.034, 0, 0],
      scale: [0.26, 0.34, 0.75],
      rotation: [1.35, i * 0.16, 0],
      rotationOrder: "YXZ",
    })),
    teal,
    "tail",
    [0, 0.63, 0.48],
  );
  for (let i = 0; i < 2; i++) {
    const legs: Piece[] = [
      stalkPiece([0, 0, 0], [0, -0.31, 0.25], 0.025),
      stalkPiece([0, -0.31, 0.25], [0, -0.38, 0.58], 0.019),
    ];
    for (let j = -1; j <= 1; j++)
      legs.push(stalkPiece([0, -0.38, 0.58], [j * 0.036, -0.4, 0.68], 0.012));
    sculpt(group, "heron:leg", legs, legColor, `leg-${i}`, [
      i ? 0.09 : -0.09,
      0.42,
      0.2,
    ]);
  }
  sculpt(
    group,
    "heron:face-stripe",
    [
      ball([-0.094, 1.28, -0.48], [0.013, 0.022, 0.13]),
      ball([0.094, 1.28, -0.48], [0.013, 0.022, 0.13]),
    ],
    teal,
    "face-stripe",
  );
  eyePair(
    group,
    "heron",
    [
      [-0.104, 1.29, -0.52],
      [0.104, 1.29, -0.52],
    ],
    0.02,
  );
  return complete(group, "reed-heron", {
    type: "bird",
    speed: 0.85,
    radius: 12,
    hoverHeight: 2.6,
    amplitude: 0.22,
  });
}

function forkFin(
  key: string,
  length: number,
  spread: number,
): THREE.BufferGeometry {
  return merge(
    `avian-aquatic:${key}`,
    [-1, 1].map((side) => ({
      geometry: leaf(),
      position: [0, 0, 0],
      scale: [0.18, length, 0.7],
      rotation: [Math.PI / 2 + side * spread, 0, 0],
    })),
  );
}

function fish(kind: "ribbon-fish" | "glass-koi", seed: number): THREE.Group {
  const group = new THREE.Group();
  const koi = kind === "glass-koi";
  const skin = koi ? fishPearl : seed % 2 ? fishBlue : fishSilver;
  const centreY = koi ? 0.26 : 0.18;
  const bodyLength = koi ? 0.39 : 0.29;
  const bodyWidth = koi ? 0.145 : 0.077;
  const bodyHeight = koi ? 0.21 : 0.105;
  sculpt(
    group,
    `${kind}:body`,
    [ball([0, centreY, 0], [bodyWidth, bodyHeight, bodyLength])],
    skin,
    "body",
  );
  sculpt(
    group,
    `${kind}:head`,
    [
      ball(
        [0, 0, -0.018],
        [bodyWidth * 0.83, bodyHeight * 0.78, bodyLength * 0.35],
      ),
    ],
    skin,
    "head",
    [0, centreY, -bodyLength * 0.8],
  );
  const tail = mesh(
    group,
    forkFin(`${kind}:tail`, koi ? 0.3 : 0.24, koi ? 0.73 : 0.58),
    koi ? finRose : finBlue,
    [0, centreY, bodyLength * 0.82],
  );
  tail.name = "tail";
  for (const side of [-1, 1])
    sculpt(
      group,
      `${kind}:pectoral-fin:${side}`,
      [
        {
          geometry: leaf(),
          position: [0, 0, 0],
          scale: [0.26, koi ? 0.24 : 0.17, 0.75],
          rotation: [0.4, side * 0.35, -side * 1.3],
          rotationOrder: "YXZ",
        },
      ],
      koi ? finRose : finBlue,
      side < 0 ? "fin-left" : "fin-right",
      [side * bodyWidth * 0.7, centreY * 0.83, -bodyLength * 0.22],
    );
  sculpt(
    group,
    `${kind}:dorsal-fin`,
    [
      {
        geometry: leaf(),
        position: [0, centreY + bodyHeight * 0.63, -bodyLength * 0.02],
        scale: [0.15, koi ? 0.22 : 0.17, 1.3],
        rotation: [0.5, Math.PI / 2, 0],
        rotationOrder: "YXZ",
      },
    ],
    koi ? fishOrange : finBlue,
    "dorsal-fin",
  );
  sculpt(
    group,
    `${kind}:ventral-fin`,
    [
      {
        geometry: leaf(),
        position: [0, centreY - bodyHeight * 0.5, bodyLength * 0.28],
        scale: [0.17, koi ? 0.19 : 0.12, 0.8],
        rotation: [Math.PI - 0.45, Math.PI / 2, 0],
        rotationOrder: "YXZ",
      },
    ],
    koi ? finRose : finBlue,
    "ventral-fin",
  );
  if (koi) {
    const patches: Piece[] = [];
    for (const side of [-1, 1]) {
      patches.push(
        ball([side * 0.131, centreY + 0.016, -0.08], [0.018, 0.095, 0.12]),
      );
      patches.push(
        ball([side * 0.09, centreY + 0.045, 0.23], [0.022, 0.067, 0.067]),
      );
    }
    patches.push(ball([0, centreY + 0.185, 0.03], [0.075, 0.027, 0.092]));
    sculpt(
      group,
      "koi:color-patches",
      patches,
      seed % 2 ? fishOrange : coral,
      "markings",
    );
    sculpt(
      group,
      "koi:barbels",
      [-1, 1].map((side) =>
        stalkPiece(
          [side * 0.04, centreY - 0.045, -0.465],
          [side * 0.065, centreY - 0.08, -0.52],
          0.006,
        ),
      ),
      ivory,
      "barbels",
    );
  } else {
    sculpt(
      group,
      "ribbon:stripe",
      [-1, 1].map((side) =>
        ball([side * 0.074, centreY, 0], [0.01, 0.017, 0.225]),
      ),
      ivory,
      "markings",
    );
  }
  eyePair(
    group,
    kind,
    [
      [-bodyWidth * 0.79, centreY + bodyHeight * 0.28, -bodyLength * 0.9],
      [bodyWidth * 0.79, centreY + bodyHeight * 0.28, -bodyLength * 0.9],
    ],
    koi ? 0.028 : 0.021,
  );
  return complete(group, kind, {
    type: "swim",
    speed: koi ? 0.42 : 0.82,
    radius: koi ? 5 : 4,
    hoverHeight: 0,
    amplitude: koi ? 0.19 : 0.32,
    swimDepth: koi ? 0.42 : 0.35,
  });
}

/** Closed, smoothly tapering eel body, including end caps. Radius follows the
 * original authored spine rather than stretching one generic cylinder. */
const eelSpine = new THREE.CatmullRomCurve3([
  new THREE.Vector3(0, 0.16, -0.47),
  new THREE.Vector3(0.06, 0.17, -0.15),
  new THREE.Vector3(-0.035, 0.16, 0.2),
  new THREE.Vector3(0.05, 0.16, 0.57),
]);

function eelBody(): THREE.BufferGeometry {
  return geometry("avian-aquatic:eel:body", () => {
    const curve = eelSpine;
    const rings = 28,
      sides = 10;
    const frames = curve.computeFrenetFrames(rings, false);
    const vertices: number[] = [],
      indices: number[] = [];
    for (let i = 0; i <= rings; i++) {
      const t = i / rings,
        centre = curve.getPointAt(t),
        radius = 0.1 * (1 - t * 0.76);
      for (let j = 0; j < sides; j++) {
        const angle = (Math.PI * 2 * j) / sides;
        const vertex = centre
          .clone()
          .addScaledVector(frames.normals[i], Math.cos(angle) * radius)
          .addScaledVector(frames.binormals[i], Math.sin(angle) * radius);
        vertices.push(vertex.x, vertex.y, vertex.z);
      }
    }
    for (let i = 0; i < rings; i++)
      for (let j = 0; j < sides; j++) {
        const a = i * sides + j,
          b = i * sides + ((j + 1) % sides),
          c = a + sides,
          d = b + sides;
        indices.push(a, b, c, b, d, c);
      }
    for (let j = 1; j < sides - 1; j++)
      indices.push(
        0,
        j + 1,
        j,
        rings * sides,
        rings * sides + j,
        rings * sides + j + 1,
      );
    const result = new THREE.BufferGeometry();
    result.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(vertices, 3),
    );
    result.setIndex(indices);
    result.computeVertexNormals();
    return result;
  });
}

function eel(seed: number): THREE.Group {
  const group = new THREE.Group();
  const skin = seed % 2 ? eelSkin : material("#628d83", 0.58, 0.13);
  const body = mesh(group, eelBody(), skin);
  body.name = "body";
  sculpt(
    group,
    "eel:head",
    [ball([0, 0, -0.025], [0.096, 0.091, 0.145])],
    skin,
    "head",
    [0, 0.16, -0.46],
  );
  const crest: Piece[] = [];
  for (let i = 0; i < 8; i++) {
    const t = 0.14 + i * 0.11;
    const p = eelSpine.getPointAt(t);
    const radius = 0.1 * (1 - t * 0.76);
    crest.push({
      geometry: leaf(),
      position: [p.x, p.y + radius * 0.82, p.z],
      scale: [0.1, 0.09 - i * 0.004, 0.18],
      rotation: [0.4, Math.PI / 2, 0],
      rotationOrder: "YXZ",
    });
  }
  sculpt(group, "eel:crest", crest, finBlue, "dorsal-fin");
  const tail = mesh(
    group,
    forkFin("eel:tail", 0.16, 0.4),
    finBlue,
    [0.05, 0.16, 0.54],
  );
  tail.name = "tail";
  const nodes: Piece[] = [];
  for (let i = 0; i < 7; i++) {
    const t = 0.12 + i * 0.11;
    const p = eelSpine.getPointAt(t);
    const radius = 0.1 * (1 - t * 0.76);
    for (const side of [-1, 1])
      nodes.push(
        ball(
          [p.x + side * radius * 0.98, p.y + 0.014, p.z],
          [0.013, 0.016, 0.017],
        ),
      );
  }
  sculpt(group, "eel:lantern-nodes", nodes, eelGlow, "lantern-nodes");
  eyePair(
    group,
    "eel",
    [
      [-0.076, 0.187, -0.5],
      [0.076, 0.187, -0.5],
    ],
    0.018,
  );
  return complete(group, "lantern-eel", {
    type: "swim",
    speed: 0.46,
    radius: 5.5,
    hoverHeight: 0,
    amplitude: 0.28,
    swimDepth: 0.55,
  });
}

export function createAquaticAvianModel(
  kind: ModelKind,
  seed = 0,
): THREE.Group | null {
  switch (kind) {
    case "canopy-swift":
      return swift(seed);
    case "suncrest-bird":
      return suncrest(seed);
    case "reed-heron":
      return heron(seed);
    case "ribbon-fish":
    case "glass-koi":
      return fish(kind, seed);
    case "lantern-eel":
      return eel(seed);
    default:
      return null;
  }
}
