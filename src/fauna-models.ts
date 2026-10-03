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

/** Code-authored wildlife. These are actual, closed-volume animal sculptures;
 * their joints remain separate so the runtime can animate the creatures. All
 * geometry and materials belong to the shared model library. */
export const FAUNA_BOUNDS: Partial<
  Record<ModelKind, { radius: number; height: number }>
> = {
  "moss-grazer": { radius: 1.35, height: 1.85 },
  "fern-hopper": { radius: 1.05, height: 1.6 },
  shellback: { radius: 1.45, height: 1.15 },
  "glass-stag": { radius: 1.6, height: 3.65 },
  "dune-runner": { radius: 1.9, height: 2.25 },
  "sand-beetle": { radius: 1.15, height: 0.7 },
  "crystal-beetle": { radius: 1.15, height: 0.8 },
  "cave-ray": { radius: 2.65, height: 0.8 },
  "sky-ray": { radius: 3.8, height: 1.15 },
};

export interface FaunaAnimation {
  type: "walk" | "hop" | "crawl" | "fly";
  speed: number;
  radius: number;
  hoverHeight: number;
  amplitude: number;
}

const eyes = material("#142b2c", 0.12, 0.22);
const hoof = material("#3b4942", 0.8);
const cream = material("#e9dfbd", 0.78);
const sage = material("#839982", 0.87);
const moss = material("#4e7761", 0.94);
const blossom = material("#eac0a1", 0.64);
const amber = material("#bd8857", 0.85);
const cobalt = material("#5b93a3", 0.5, 0.22);
const frost = material("#c4e5da", 0.32, 0.17, "#70bec5", 0.12);
const shell = material("#658271", 0.75, 0.1);
const shellLight = material("#b5b898", 0.85);
const shellDark = material("#395346", 0.82);
const sand = material("#d7ba83", 0.87);
const terracotta = material("#b67652", 0.77);
const beetleGold = material("#bc9b53", 0.35, 0.55);
const beetleCopper = material("#936749", 0.42, 0.55);
const beetleCyan = material("#50919c", 0.3, 0.58, "#3a9c9a", 0.12);
const beetleFrost = material("#b7e0d0", 0.36, 0.45);
const rayDark = material("#47677d", 0.66, 0.16);
const rayBlue = material("#729fab", 0.61, 0.14);
const rayPink = material("#d4b59f", 0.72, 0.08);
const rayIvory = material("#e1d6b5", 0.71, 0.06);
const glow = material("#badac9", 0.35, 0.15, "#7adcc2", 0.45);

function ball(position: V3, scale: V3, rotation: V3 = [0, 0, 0]): Piece {
  return { geometry: sphere(), position, scale, rotation };
}

function sculpture(
  group: THREE.Group,
  key: string,
  pieces: Piece[],
  m: THREE.Material,
  name?: string,
): THREE.Mesh {
  const result = mesh(group, merge(`fauna:${key}`, pieces), m);
  if (name) result.name = name;
  return result;
}

function articulated(
  group: THREE.Group,
  key: string,
  pieces: Piece[],
  m: THREE.Material,
  pivot: V3,
  name: string,
): THREE.Mesh {
  const result = mesh(group, merge(`fauna:${key}`, pieces), m, pivot);
  result.name = name;
  return result;
}

function eyePair(
  group: THREE.Group,
  key: string,
  positions: V3[],
  size = 0.043,
): void {
  sculpture(
    group,
    `${key}:eyes`,
    positions.map((p) => ball(p, [size, size * 1.12, size])),
    eyes,
    "eyes",
  );
}

function setAnimation(
  group: THREE.Group,
  kind: ModelKind,
  animation: FaunaAnimation,
): THREE.Group {
  finish(group, kind);
  group.userData.animation = animation;
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

function grazer(seed: number): THREE.Group {
  const group = new THREE.Group();
  const skin =
    seed % 3 === 0 ? sage : seed % 3 === 1 ? cream : material("#adb59a", 0.86);
  sculpture(
    group,
    "grazer:body",
    [
      ball([0, 0.98, 0.06], [0.36, 0.39, 0.69]),
      ball([0, 1.2, -0.4], [0.22, 0.49, 0.25], [-0.25, 0, 0]),
      ball([0, 0.99, 0.71], [0.09, 0.13, 0.29], [-0.45, 0, 0]),
    ],
    skin,
    "body",
  );
  articulated(
    group,
    "grazer:head",
    [
      ball([0, 0, -0.04], [0.2, 0.19, 0.31]),
      ball([0, -0.06, -0.25], [0.13, 0.095, 0.18]),
      {
        geometry: leaf(),
        position: [-0.14, 0.06, -0.02],
        scale: [0.42, 0.3, 0.8],
        rotation: [0.18, 0.1, 0.8],
      },
      {
        geometry: leaf(),
        position: [0.14, 0.06, -0.02],
        scale: [0.42, 0.3, 0.8],
        rotation: [0.18, -0.1, -0.8],
      },
    ],
    skin,
    [0, 1.52, -0.58],
    "head",
  );
  const ruff: Piece[] = [];
  for (let i = 0; i < 10; i++) {
    const angle = (i / 10) * Math.PI * 2;
    ruff.push({
      geometry: leaf(),
      position: [Math.cos(angle) * 0.22, 1.22, -0.38 + Math.sin(angle) * 0.19],
      scale: [0.65, 0.48, 1],
      rotation: [0.8, angle, 0],
      rotationOrder: "YXZ",
    });
  }
  sculpture(group, "grazer:foliage-ruff", ruff, moss, "ruff");
  sculpture(
    group,
    "grazer:spots",
    [
      ball([-0.345, 1.1, 0.12], [0.014, 0.065, 0.08]),
      ball([0.345, 1.1, 0.12], [0.014, 0.065, 0.08]),
      ball([-0.29, 1.21, 0.36], [0.018, 0.05, 0.06]),
      ball([0.29, 1.21, 0.36], [0.018, 0.05, 0.06]),
    ],
    cream,
    "markings",
  );
  for (let i = 0; i < 6; i++) {
    const side = i % 2 === 0 ? -1 : 1;
    const row = Math.floor(i / 2);
    articulated(
      group,
      "grazer:leg",
      [
        stalkPiece([0, 0, 0], [0, -0.36, 0.04], 0.068),
        stalkPiece([0, -0.36, 0.04], [0, -0.73, -0.04], 0.041),
        ball([0, -0.73, -0.06], [0.073, 0.04, 0.11]),
      ],
      hoof,
      [side * 0.25, 0.75, -0.34 + row * 0.35],
      `leg-${i}`,
    );
  }
  eyePair(
    group,
    "grazer",
    [
      [-0.176, 1.56, -0.72],
      [0.176, 1.56, -0.72],
    ],
    0.035,
  );
  return setAnimation(group, "moss-grazer", {
    type: "walk",
    speed: 0.62,
    radius: 6,
    hoverHeight: 0,
    amplitude: 0.17,
  });
}

function hopper(seed: number): THREE.Group {
  const group = new THREE.Group();
  const fur = seed % 2 ? material("#adae8c", 0.93) : material("#c4c4a6", 0.93);
  sculpture(
    group,
    "hopper:body",
    [
      ball([0, 0.47, 0.13], [0.28, 0.32, 0.46]),
      ball([0, 0.53, 0.53], [0.16, 0.16, 0.17]),
    ],
    fur,
    "body",
  );
  articulated(
    group,
    "hopper:head",
    [
      ball([0, 0, -0.035], [0.225, 0.235, 0.28]),
      ball([0, -0.06, -0.26], [0.14, 0.095, 0.14]),
      ball([-0.12, 0.43, 0.02], [0.08, 0.43, 0.085], [0.12, 0, 0.18]),
      ball([0.12, 0.43, 0.02], [0.08, 0.43, 0.085], [0.12, 0, -0.18]),
    ],
    fur,
    [0, 0.72, -0.24],
    "head",
  );
  sculpture(
    group,
    "hopper:ear-inside",
    [
      ball([-0.16, 1.14, -0.306], [0.041, 0.29, 0.016], [0.12, 0, 0.18]),
      ball([0.16, 1.14, -0.306], [0.041, 0.29, 0.016], [0.12, 0, -0.18]),
      ball([0, 0.64, -0.594], [0.046, 0.037, 0.016]),
    ],
    blossom,
    "ear-markings",
  );
  for (let i = 0; i < 4; i++) {
    const side = i % 2 === 0 ? -1 : 1;
    const rear = i >= 2;
    articulated(
      group,
      rear ? "hopper:hindleg" : "hopper:foreleg",
      rear
        ? [
            ball([0, -0.03, 0.03], [0.16, 0.22, 0.24]),
            stalkPiece([0, -0.08, 0.04], [0, -0.24, -0.13], 0.08),
            ball([0, -0.27, -0.19], [0.1, 0.07, 0.25]),
          ]
        : [
            stalkPiece([0, 0, 0], [0, -0.22, 0], 0.04),
            ball([0, -0.24, -0.05], [0.058, 0.048, 0.13]),
          ],
      fur,
      [side * (rear ? 0.23 : 0.16), rear ? 0.34 : 0.29, rear ? 0.35 : -0.2],
      `leg-${i}`,
    );
  }
  sculpture(
    group,
    "hopper:shoulder-leaves",
    [-1, 1].map((s) => ({
      geometry: leaf(),
      position: [s * 0.23, 0.67, 0.1],
      scale: [0.4, 0.28, 1],
      rotation: [0.9, s * 0.6, -s * 0.7],
    })),
    moss,
    "ruff",
  );
  eyePair(
    group,
    "hopper",
    [
      [-0.192, 0.77, -0.37],
      [0.192, 0.77, -0.37],
    ],
    0.045,
  );
  return setAnimation(group, "fern-hopper", {
    type: "hop",
    speed: 0.95,
    radius: 7,
    hoverHeight: 0,
    amplitude: 0.14,
  });
}

function tortoise(seed: number): THREE.Group {
  const group = new THREE.Group();
  const shellMaterial = seed % 2 ? shell : material("#858c69", 0.78, 0.09);
  sculpture(
    group,
    "shellback:carapace",
    [ball([0, 0.49, 0.1], [0.65, 0.43, 0.83])],
    shellMaterial,
    "body",
  );
  sculpture(
    group,
    "shellback:rim",
    [ball([0, 0.26, 0.1], [0.69, 0.14, 0.87])],
    shellLight,
    "shell-rim",
  );
  const plates: Piece[] = [];
  for (const [x, y, z] of [
    [0, 0.9, 0.1],
    [-0.39, 0.77, -0.17],
    [0.39, 0.77, -0.17],
    [-0.39, 0.77, 0.36],
    [0.39, 0.77, 0.36],
    [0, 0.76, -0.48],
    [0, 0.76, 0.68],
  ]) {
    plates.push(ball([x, y, z], [0.24, 0.052, 0.23]));
  }
  sculpture(group, "shellback:plates", plates, shellDark, "shell-plates");
  articulated(
    group,
    "shellback:head",
    [
      ball([0, 0, -0.2], [0.18, 0.15, 0.29]),
      ball([0, -0.055, -0.36], [0.14, 0.085, 0.14]),
    ],
    shellLight,
    [0, 0.32, -0.73],
    "head",
  );
  for (let i = 0; i < 4; i++) {
    const side = i % 2 === 0 ? -1 : 1;
    articulated(
      group,
      "shellback:leg",
      [
        ball([0, -0.08, 0], [0.18, 0.15, 0.2]),
        ball([0, -0.19, -0.05], [0.13, 0.05, 0.18]),
      ],
      shellLight,
      [side * 0.53, 0.23, i < 2 ? -0.35 : 0.61],
      `leg-${i}`,
    );
  }
  sculpture(
    group,
    "shellback:tail",
    [ball([0, 0.22, 1], [0.075, 0.063, 0.18])],
    shellLight,
    "tail",
  );
  eyePair(
    group,
    "shellback",
    [
      [-0.151, 0.38, -1.02],
      [0.151, 0.38, -1.02],
    ],
    0.033,
  );
  return setAnimation(group, "shellback", {
    type: "crawl",
    speed: 0.19,
    radius: 4.5,
    hoverHeight: 0,
    amplitude: 0.11,
  });
}

function stag(seed: number): THREE.Group {
  const group = new THREE.Group();
  const skin = seed % 2 ? cobalt : material("#81a5a4", 0.64, 0.12);
  sculpture(
    group,
    "stag:body",
    [
      ball([0, 1.58, 0.13], [0.35, 0.46, 0.73]),
      ball([0, 1.95, -0.46], [0.22, 0.57, 0.25], [-0.32, 0, 0]),
      ball([0, 1.65, 0.9], [0.08, 0.09, 0.28], [-0.38, 0, 0]),
    ],
    skin,
    "body",
  );
  articulated(
    group,
    "stag:head",
    [
      ball([0, 0, -0.03], [0.21, 0.22, 0.31]),
      ball([0, -0.07, -0.32], [0.13, 0.095, 0.2]),
      ball([-0.23, 0.14, 0.01], [0.21, 0.07, 0.11], [0, 0, 0.35]),
      ball([0.23, 0.14, 0.01], [0.21, 0.07, 0.11], [0, 0, -0.35]),
    ],
    skin,
    [0, 2.39, -0.76],
    "head",
  );
  const antlers: Piece[] = [];
  for (const side of [-1, 1]) {
    const p = (x: number, y: number, z: number): V3 => [x * side, y, z];
    antlers.push(
      stalkPiece(p(0.11, 2.54, -0.66), p(0.23, 2.82, -0.54), 0.056),
      stalkPiece(p(0.23, 2.82, -0.54), p(0.51, 3.1, -0.51), 0.045),
      stalkPiece(p(0.51, 3.1, -0.51), p(0.77, 3.35, -0.31), 0.03),
      stalkPiece(p(0.3, 2.9, -0.53), p(0.35, 3.2, -0.86), 0.035),
      stalkPiece(p(0.51, 3.1, -0.51), p(0.62, 3.43, -0.6), 0.027),
      stalkPiece(p(0.68, 3.25, -0.4), p(0.98, 3.34, -0.52), 0.022),
    );
  }
  sculpture(group, "stag:antlers", antlers, frost, "antlers");
  sculpture(
    group,
    "stag:breast",
    [
      ball([0, 1.75, -0.65], [0.14, 0.45, 0.07], [-0.22, 0, 0]),
      ball([0, 1.22, 0.08], [0.28, 0.13, 0.52]),
    ],
    cream,
    "markings",
  );
  for (let i = 0; i < 4; i++) {
    const side = i % 2 === 0 ? -1 : 1;
    const rear = i >= 2;
    articulated(
      group,
      rear ? "stag:hindleg" : "stag:foreleg",
      [
        stalkPiece([0, 0, 0], [0, -0.62, rear ? 0.14 : 0.03], 0.068),
        stalkPiece([0, -0.62, rear ? 0.14 : 0.03], [0, -1.13, -0.045], 0.037),
        ball([0, -1.14, -0.08], [0.074, 0.06, 0.115]),
      ],
      hoof,
      [side * 0.27, 1.2, rear ? 0.58 : -0.4],
      `leg-${i}`,
    );
  }
  eyePair(
    group,
    "stag",
    [
      [-0.18, 2.43, -0.9],
      [0.18, 2.43, -0.9],
    ],
    0.038,
  );
  return setAnimation(group, "glass-stag", {
    type: "walk",
    speed: 0.73,
    radius: 8,
    hoverHeight: 0,
    amplitude: 0.2,
  });
}

function runner(seed: number): THREE.Group {
  const group = new THREE.Group();
  const feathers = seed % 2 ? sand : material("#c8c4a5", 0.85);
  sculpture(
    group,
    "runner:body",
    [
      ball([0, 1.12, 0.08], [0.32, 0.37, 0.53]),
      ball([0, 1.42, -0.34], [0.135, 0.49, 0.15], [-0.28, 0, 0]),
    ],
    feathers,
    "body",
  );
  articulated(
    group,
    "runner:head",
    [
      ball([0, 0, -0.04], [0.16, 0.18, 0.23]),
      ball([0, -0.02, -0.28], [0.075, 0.052, 0.2]),
    ],
    feathers,
    [0, 1.9, -0.55],
    "head",
  );
  const crest: Piece[] = [];
  for (let i = 0; i < 3; i++)
    crest.push({
      geometry: leaf(),
      position: [0, 1.99, -0.46 + i * 0.05],
      scale: [0.22, 0.3 - i * 0.05, 1],
      rotation: [0.35, 0, 0],
    });
  sculpture(group, "runner:crest", crest, terracotta, "crest");
  const tail = articulated(
    group,
    "runner:tail",
    [
      {
        geometry: leaf(),
        position: [0, 0, 0],
        scale: [0.65, 1.1, 1],
        rotation: [1.4, 0, 0],
      },
      {
        geometry: leaf(),
        position: [-0.09, 0, 0],
        scale: [0.55, 0.98, 1],
        rotation: [1.45, -0.18, 0],
        rotationOrder: "YXZ",
      },
      {
        geometry: leaf(),
        position: [0.09, 0, 0],
        scale: [0.55, 0.98, 1],
        rotation: [1.45, 0.18, 0],
        rotationOrder: "YXZ",
      },
    ],
    terracotta,
    [0, 1.18, 0.46],
    "tail",
  );
  tail.rotation.x = -0.15;
  for (const side of [-1, 1])
    articulated(
      group,
      "runner:wing",
      [ball([0, 0, 0.05], [0.07, 0.16, 0.33], [-0.4, 0, 0])],
      amber,
      [side * 0.31, 1.15, 0.02],
      side < 0 ? "wing-left" : "wing-right",
    );
  for (let i = 0; i < 2; i++) {
    const foot: Piece[] = [
      stalkPiece([0, 0, 0], [0, -0.43, 0.15], 0.045),
      stalkPiece([0, -0.43, 0.15], [0, -0.9, -0.04], 0.029),
    ];
    for (let j = -1; j <= 1; j++)
      foot.push(stalkPiece([0, -0.89, -0.03], [j * 0.08, -0.93, -0.21], 0.022));
    articulated(
      group,
      "runner:leg",
      foot,
      terracotta,
      [i === 0 ? -0.15 : 0.15, 0.96, 0.08],
      `leg-${i}`,
    );
  }
  eyePair(
    group,
    "runner",
    [
      [-0.14, 1.93, -0.69],
      [0.14, 1.93, -0.69],
    ],
    0.036,
  );
  return setAnimation(group, "dune-runner", {
    type: "walk",
    speed: 1.2,
    radius: 9,
    hoverHeight: 0,
    amplitude: 0.3,
  });
}

function beetle(
  kind: "sand-beetle" | "crystal-beetle",
  seed: number,
): THREE.Group {
  const group = new THREE.Group();
  const isCrystal = kind === "crystal-beetle";
  const armor = isCrystal ? beetleCyan : seed % 2 ? beetleGold : beetleCopper;
  const seams = isCrystal ? beetleFrost : terracotta;
  sculpture(
    group,
    `${kind}:abdomen`,
    [
      ball([0, 0.33, 0.12], [0.34, 0.23, 0.49]),
      ball([0, 0.3, -0.35], [0.27, 0.16, 0.2]),
    ],
    armor,
    "body",
  );
  const plates: Piece[] = [];
  for (const side of [-1, 1])
    plates.push(ball([side * 0.155, 0.48, 0.13], [0.14, 0.075, 0.4]));
  if (isCrystal)
    for (let i = -1; i <= 1; i++)
      plates.push(
        ball(
          [i * 0.16, 0.57, 0.16],
          [0.055, 0.1 + (i === 0 ? 0.065 : 0), 0.055],
        ),
      );
  sculpture(group, `${kind}:back-plates`, plates, seams, "back-plates");
  articulated(
    group,
    `${kind}:head`,
    [ball([0, 0, -0.06], [0.205, 0.12, 0.2])],
    armor,
    [0, 0.32, -0.52],
    "head",
  );
  const feelers: Piece[] = [];
  for (const side of [-1, 1]) {
    feelers.push(
      stalkPiece([side * 0.12, 0.34, -0.66], [side * 0.21, 0.45, -0.83], 0.015),
      stalkPiece([side * 0.21, 0.45, -0.83], [side * 0.27, 0.45, -0.98], 0.012),
    );
    feelers.push(
      stalkPiece([side * 0.12, 0.22, -0.68], [side * 0.16, 0.18, -0.84], 0.03),
      stalkPiece([side * 0.16, 0.18, -0.84], [side * 0.08, 0.17, -0.88], 0.023),
    );
  }
  sculpture(group, `${kind}:antennae-mandibles`, feelers, seams, "antennae");
  for (let i = 0; i < 6; i++) {
    const side = i % 2 === 0 ? -1 : 1;
    const row = Math.floor(i / 2);
    articulated(
      group,
      `${kind}:leg:${side}`,
      [
        stalkPiece([0, 0, 0], [side * 0.23, -0.04, 0.04], 0.033),
        stalkPiece(
          [side * 0.23, -0.04, 0.04],
          [side * 0.42, -0.26, -0.03],
          0.022,
        ),
        ball([side * 0.42, -0.26, -0.06], [0.034, 0.026, 0.065]),
      ],
      seams,
      [side * 0.24, 0.29, -0.33 + row * 0.33],
      `leg-${i}`,
    );
  }
  eyePair(
    group,
    kind,
    [
      [-0.18, 0.35, -0.58],
      [0.18, 0.35, -0.58],
    ],
    0.036,
  );
  return setAnimation(group, kind, {
    type: "crawl",
    speed: isCrystal ? 0.38 : 0.5,
    radius: 5,
    hoverHeight: 0,
    amplitude: 0.2,
  });
}

/** Thick, swept manta wings. Shared indexed geometry encloses upper/lower
 * surfaces and edges, so neither wing vanishes when viewed from beneath. */
function rayWing(
  key: string,
  span: number,
  chord: number,
  side: number,
): THREE.BufferGeometry {
  return geometry(`fauna:${key}`, () => {
    const p: number[] = [],
      indices: number[] = [];
    const rows = 12,
      columns = 6;
    for (let surface = 0; surface < 2; surface++)
      for (let i = 0; i <= rows; i++) {
        const t = i / rows;
        const width = Math.max(
          0.025,
          Math.pow(1 - t, 0.6) * (0.82 + Math.sin(t * Math.PI) * 0.7),
        );
        const leading = -chord * 0.5 + t * chord * 0.82;
        for (let j = 0; j <= columns; j++) {
          const f = j / columns;
          p.push(
            side * span * t,
            0.14 * Math.sin(t * Math.PI) +
              0.13 * Math.sin(f * Math.PI) * (1 - t) +
              (surface ? -0.024 : 0.024) * (1 - t * 0.8),
            leading + f * chord * width,
          );
        }
      }
    const stride = columns + 1,
      surfaceSize = (rows + 1) * stride;
    for (let surface = 0; surface < 2; surface++)
      for (let i = 0; i < rows; i++)
        for (let j = 0; j < columns; j++) {
          const a = surface * surfaceSize + i * stride + j,
            b = a + 1,
            c = a + stride,
            d = c + 1;
          if ((surface === 0) === side > 0) indices.push(a, b, c, b, d, c);
          else indices.push(a, c, b, b, c, d);
        }
    const join = (a: number, b: number) =>
      indices.push(a, a + surfaceSize, b, b, a + surfaceSize, b + surfaceSize);
    for (let i = 0; i < rows; i++) {
      join(i * stride, (i + 1) * stride);
      join(i * stride + columns, (i + 1) * stride + columns);
    }
    for (let j = 0; j < columns; j++) {
      join(j, j + 1);
      join(rows * stride + j, rows * stride + j + 1);
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.Float32BufferAttribute(p, 3));
    g.setIndex(indices);
    g.computeVertexNormals();
    return g;
  });
}

function patternedRayWing(
  key: string,
  span: number,
  chord: number,
  side: number,
): THREE.BufferGeometry {
  return geometry(`fauna:${key}:patterned`, () => {
    const surface = rayWing(key, span, chord, side);
    const marks: Piece[] = [];
    for (let i = 0; i < 5; i++) {
      const t = 0.22 + i * 0.145;
      const f = 0.38;
      const width = Math.pow(1 - t, 0.6) * (0.82 + Math.sin(t * Math.PI) * 0.7);
      const leading = -chord * 0.5 + t * chord * 0.82;
      const top =
        0.14 * Math.sin(t * Math.PI) +
        0.13 * Math.sin(f * Math.PI) * (1 - t) +
        0.024 * (1 - t * 0.8);
      marks.push(
        ball(
          [side * span * t, top + 0.005, leading + f * chord * width],
          [0.038, 0.014, chord * 0.11 * (1 - t)],
        ),
      );
    }
    const pattern = merge(`fauna:${key}:dorsal-pattern`, marks);
    const vertices = surface.getAttribute("position").count;
    const positions = new Float32Array([
      ...surface.getAttribute("position").array,
      ...pattern.getAttribute("position").array,
    ]);
    const normals = new Float32Array([
      ...surface.getAttribute("normal").array,
      ...pattern.getAttribute("normal").array,
    ]);
    const baseIndices = [...surface.getIndex()!.array];
    const indices = baseIndices.concat(
      Array.from(
        { length: pattern.getAttribute("position").count },
        (_, i) => vertices + i,
      ),
    );
    const result = new THREE.BufferGeometry();
    result.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    result.setAttribute("normal", new THREE.BufferAttribute(normals, 3));
    result.setIndex(indices);
    result.addGroup(0, baseIndices.length, 0);
    result.addGroup(baseIndices.length, indices.length - baseIndices.length, 1);
    return result;
  });
}

function ray(kind: "cave-ray" | "sky-ray", seed: number): THREE.Group {
  const group = new THREE.Group();
  const sky = kind === "sky-ray";
  const span = sky ? 3.15 : 2.05;
  const chord = sky ? 2.0 : 1.35;
  const skin = sky
    ? seed % 2
      ? rayIvory
      : rayPink
    : seed % 2
      ? rayDark
      : rayBlue;
  const highlights = sky ? terracotta : glow;
  sculpture(
    group,
    `${kind}:body`,
    [
      ball(
        [0, 0.17, 0],
        [sky ? 0.4 : 0.29, sky ? 0.19 : 0.15, sky ? 1.0 : 0.67],
      ),
      ball([0, 0.12, sky ? -0.77 : -0.5], [sky ? 0.32 : 0.23, 0.11, 0.34]),
    ],
    skin,
    "body",
  );
  for (const side of [-1, 1]) {
    const wing = new THREE.Mesh(
      patternedRayWing(`${kind}:wing:${side}`, span, chord, side),
      [skin, highlights],
    );
    wing.position.set(side * 0.13, 0.2, 0);
    wing.castShadow = true;
    wing.receiveShadow = true;
    group.add(wing);
    wing.name = side < 0 ? "wing-left" : "wing-right";
  }
  // A tapering curved tail and paired cephalic lobes distinguish these from birds.
  const tailLength = sky ? 2.65 : 1.8;
  const tail = mesh(
    group,
    tube(
      `fauna:${kind}:tail`,
      [
        [0, 0, 0],
        [0, 0.03, tailLength * 0.3],
        [0.12, 0.14, tailLength * 0.68],
        [0.25, 0.28, tailLength],
      ],
      sky ? 0.033 : 0.023,
      6,
    ),
    highlights,
    [0, 0.16, sky ? 0.68 : 0.4],
  );
  tail.name = "tail";
  const markings: Piece[] = [];
  for (const side of [-1, 1]) {
    markings.push({
      geometry: tube(
        `fauna:${kind}:lobe:${side}`,
        [
          [side * 0.2, 0.13, sky ? -0.7 : -0.48],
          [side * 0.32, 0.23, sky ? -1.0 : -0.79],
          [side * 0.22, 0.33, sky ? -1.25 : -0.95],
        ],
        sky ? 0.045 : 0.032,
        6,
      ),
    });
    for (let i = 0; i < 4; i++)
      markings.push(
        ball(
          [side * (0.36 + i * 0.12), 0.28, (sky ? 0.33 : 0.16) - i * 0.035],
          [0.021, 0.019, sky ? 0.17 : 0.1],
          [0, side * 0.3, 0],
        ),
      );
  }
  sculpture(group, `${kind}:gills-lobes`, markings, highlights, "markings");
  sculpture(
    group,
    `${kind}:belly`,
    [ball([0, 0.046, 0], [sky ? 0.28 : 0.21, 0.055, sky ? 0.8 : 0.53])],
    cream,
    "belly",
  );
  eyePair(
    group,
    kind,
    [
      [sky ? -0.275 : -0.205, 0.24, sky ? -0.68 : -0.46],
      [sky ? 0.275 : 0.205, 0.24, sky ? -0.68 : -0.46],
    ],
    sky ? 0.052 : 0.037,
  );
  return setAnimation(group, kind, {
    type: "fly",
    speed: sky ? 0.65 : 0.42,
    radius: sky ? 10 : 6,
    hoverHeight: sky ? 5.5 : 2.8,
    amplitude: sky ? 0.12 : 0.18,
  });
}

export function createFaunaModel(
  kind: ModelKind,
  seed: number,
): THREE.Group | null {
  switch (kind) {
    case "moss-grazer":
      return grazer(seed);
    case "fern-hopper":
      return hopper(seed);
    case "shellback":
      return tortoise(seed);
    case "glass-stag":
      return stag(seed);
    case "dune-runner":
      return runner(seed);
    case "sand-beetle":
    case "crystal-beetle":
      return beetle(kind, seed);
    case "cave-ray":
    case "sky-ray":
      return ray(kind, seed);
    default:
      return null;
  }
}
