import * as THREE from "three";
import type { ModelKind } from "./types";
import {
  geometry,
  material,
  facet,
  sphere,
  cone,
  cylinder,
  taper,
  box,
  merge,
  mesh,
  tube,
  stalkPiece,
  rng,
  finish,
  TAU,
  type Piece,
  type V3,
} from "./model-kit";

/** Code-authored botany: real closed volume, shared GPU resources and no
 * texture/asset requests. A family has three stable sculptures, not one new
 * geometry per placement. Each material is merged into a direct child mesh. */
export const FLORA_BOUNDS: Partial<
  Record<ModelKind, { radius: number; height: number }>
> = {
  "spire-pine": { radius: 3.5, height: 12 },
  "silver-birch": { radius: 5.8, height: 11.5 },
  "veil-willow": { radius: 6.2, height: 10 },
  "coral-tree": { radius: 4.8, height: 9.2 },
  "baobab-tree": { radius: 6, height: 11 },
  "spiral-tree": { radius: 3.5, height: 11.5 },
  "tree-fern": { radius: 4.2, height: 7.4 },
  "fan-palm": { radius: 4.2, height: 10.4 },
  starflower: { radius: 1.1, height: 1.8 },
  bellflower: { radius: 1.2, height: 2.4 },
  orchid: { radius: 1.1, height: 2.1 },
  "sunburst-flower": { radius: 1.3, height: 2.6 },
  lotus: { radius: 1.4, height: 1.35 },
  foxglove: { radius: 1.05, height: 2.8 },
  "berry-bush": { radius: 1.9, height: 2.4 },
  cycad: { radius: 2.2, height: 2.5 },
  aloe: { radius: 1.6, height: 2.2 },
  "barrel-cactus": { radius: 1.45, height: 2.5 },
  "prickly-pear": { radius: 1.7, height: 3 },
  puffball: { radius: 1.2, height: 1.3 },
  "shelf-fungus": { radius: 1.7, height: 2.6 },
  glowcap: { radius: 1.6, height: 2.8 },
  "grass-tuft": { radius: 1, height: 1.15 },
  "flower-carpet": { radius: 2.2, height: 0.8 },
  "fallen-log": { radius: 3.3, height: 1.9 },
  "lily-pad": { radius: 1.5, height: 0.65 },
  "boulder-stack": { radius: 2.5, height: 4.8 },
};

const C = {
  timber: material("#755644", 0.96),
  timberDark: material("#514738", 0.97),
  birch: material("#d5d0b6", 0.94),
  scars: material("#544e49", 0.94),
  pine: material("#416d59", 0.91),
  pineLight: material("#709479", 0.88),
  green: material("#5d936d", 0.88),
  lime: material("#a5bb7e", 0.86),
  fern: material("#48866b", 0.87),
  fernLight: material("#87b894", 0.82),
  willow: material("#86988e", 0.83),
  willowTip: material("#cab7cd", 0.75),
  coral: material("#a36955", 0.9),
  blush: material("#e5a39e", 0.7),
  teal: material("#64a695", 0.83),
  sage: material("#93ad88", 0.9),
  pink: material("#e6a1b2", 0.74),
  violet: material("#a088c8", 0.7),
  blue: material("#90b9d2", 0.74),
  white: material("#efe3ce", 0.8),
  gold: material("#e0b45e", 0.82),
  saffron: material("#c98446", 0.84),
  center: material("#805d43", 0.9),
  berry: material("#987797", 0.64),
  berryLight: material("#c489a0", 0.59),
  cactus: material("#719b83", 0.85),
  cactusLight: material("#a4b799", 0.81),
  cap: material("#ae837c", 0.85),
  capDark: material("#866579", 0.9),
  gills: material("#d2baa2", 0.9),
  glow: material("#81c7b6", 0.68, 0.04, "#46b69c", 0.33),
  glowWhite: material("#bddbd0", 0.76, 0.02, "#7fbda9", 0.15),
  moss: material("#8a9c73", 0.97),
  rock: material("#8f9286", 0.98),
  rockLight: material("#b2afa0", 0.96),
};

/** Low-poly closed leaf, gently cupped along its length. Far cheaper than
 * detailed hero petals, so pinnate fronds and trailing curtains stay light. */
function blade(): THREE.BufferGeometry {
  return geometry("flora / blade", () => {
    const positions: number[] = [],
      indices: number[] = [];
    const rows = 6,
      sides = 4;
    for (let i = 0; i <= rows; i++) {
      const t = i / rows,
        width = Math.max(0.002, Math.sin(t * Math.PI) * 0.32);
      for (let j = 0; j < sides; j++) {
        const a = (j * TAU) / sides;
        positions.push(
          Math.cos(a) * width,
          t,
          t * t * 0.18 + Math.sin(a) * width * 0.12,
        );
      }
    }
    for (let i = 0; i < rows; i++)
      for (let j = 0; j < sides; j++) {
        const a = i * sides + j,
          b = i * sides + ((j + 1) % sides);
        indices.push(a, a + sides, b, b, a + sides, b + sides);
      }
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
    g.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
    g.setIndex(indices);
    g.computeVertexNormals();
    return g;
  });
}

/** Eight-triangle closed diamond blade for abundant groundcover and pinnate
 * leaflets. It retains a raised midrib and bent tip without large leaf meshes. */
function tinyBlade(): THREE.BufferGeometry {
  return geometry("flora / eight-triangle leaf", () => {
    const g = new THREE.BufferGeometry();
    g.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(
        [
          0, 0, 0, 0, 1, 0.18, -0.28, 0.48, 0.045, 0.28, 0.48, 0.045, 0, 0.48,
          0.08, 0, 0.48, 0.015,
        ],
        3,
      ),
    );
    g.setIndex([
      0, 4, 2, 2, 4, 1, 1, 4, 3, 3, 4, 0, 0, 2, 5, 2, 1, 5, 1, 3, 5, 3, 0, 5,
    ]);
    g.computeVertexNormals();
    return g;
  });
}

/** Small closed bell. Rim rolls outward; darker stamen gives its throat depth. */
function bell(): THREE.BufferGeometry {
  return geometry(
    "flora / flower bell",
    () =>
      new THREE.LatheGeometry(
        [
          new THREE.Vector2(0, 0),
          new THREE.Vector2(0.055, 0.035),
          new THREE.Vector2(0.1, 0.15),
          new THREE.Vector2(0.18, 0.3),
          new THREE.Vector2(0.25, 0.43),
          new THREE.Vector2(0.22, 0.46),
          new THREE.Vector2(0.16, 0.39),
          new THREE.Vector2(0.105, 0.25),
          new THREE.Vector2(0.045, 0.15),
          new THREE.Vector2(0, 0.11),
        ],
        8,
      ),
  );
}

function mushroomCap(): THREE.BufferGeometry {
  return geometry(
    "flora / convex fungus cap",
    () =>
      new THREE.LatheGeometry(
        [
          new THREE.Vector2(0, 0.08),
          new THREE.Vector2(0.45, 0),
          new THREE.Vector2(0.95, 0.08),
          new THREE.Vector2(1, 0.17),
          new THREE.Vector2(0.83, 0.43),
          new THREE.Vector2(0.46, 0.64),
          new THREE.Vector2(0, 0.73),
        ],
        12,
      ),
  );
}

function flowers(
  pieces: Piece[],
  center: V3,
  petals: number,
  length: number,
  width: number,
  yaw = 0,
  tilt = 1.18,
  shape = blade(),
): void {
  for (let i = 0; i < petals; i++)
    pieces.push({
      geometry: shape,
      position: center,
      scale: [width, length, width],
      rotation: [tilt, yaw + (i * TAU) / petals, 0],
      rotationOrder: "YXZ",
    });
}

function crown(pieces: Piece[], p: V3, scale: V3, yaw = 0): void {
  pieces.push({
    geometry: facet(),
    position: p,
    scale,
    rotation: [0.06, yaw, 0.12],
  });
}

function roots(pieces: Piece[], radius: number, count = 5): void {
  for (let i = 0; i < count; i++) {
    const a = (i * TAU) / count;
    pieces.push(
      stalkPiece(
        [0, radius * 0.65, 0],
        [Math.cos(a) * radius * 2.2, 0.04, Math.sin(a) * radius * 2.2],
        radius * 0.2,
        taper(),
      ),
    );
  }
}

function rosette(
  pieces: Piece[],
  count: number,
  length: number,
  width: number,
  lift: number,
  tilt: number,
  yaw = 0,
): void {
  for (let i = 0; i < count; i++)
    pieces.push({
      geometry: blade(),
      position: [0, lift, 0],
      scale: [width, length, width],
      rotation: [tilt, yaw + (i * TAU) / count, 0],
      rotationOrder: "YXZ",
    });
}

export function createFloraModel(
  kind: ModelKind,
  seed: number,
): THREE.Group | null {
  if (!FLORA_BOUNDS[kind]) return null;
  const group = new THREE.Group();
  const variant = ((Math.floor(Number.isFinite(seed) ? seed : 0) % 3) + 3) % 3;
  const random = rng(variant * 7141 + 931);
  const size = [0.94, 1, 1.06][variant];
  const key = `flora / ${kind} / ${variant}`;
  const draw = (suffix: string, pieces: Piece[], m: THREE.Material) => {
    if (pieces.length) mesh(group, merge(`${key} / ${suffix}`, pieces), m);
  };
  const wood: Piece[] = [],
    leaves: Piece[] = [],
    light: Piece[] = [],
    accents: Piece[] = [],
    details: Piece[] = [];

  switch (kind) {
    case "spire-pine": {
      const h = 9.5 * size;
      wood.push({
        geometry: taper(),
        position: [0, h * 0.45, 0],
        scale: [0.36, h * 0.9, 0.36],
      });
      roots(wood, 0.5);
      for (let level = 0; level < 7; level++) {
        const y = 2.8 + level * 1.06 * size,
          radius = 2.55 - level * 0.31;
        (level % 2 ? light : leaves).push({
          geometry: cone(),
          position: [0, y, 0],
          scale: [radius, 2.9 - level * 0.16, radius],
          rotation: [0.015, level * 0.43, 0.02],
        });
        for (let i = 0; i < 4; i++) {
          const a = (i * TAU) / 4 + level * 0.55;
          wood.push(
            stalkPiece(
              [0, y - 0.75, 0],
              [
                Math.cos(a) * radius * 0.82,
                y - 0.56,
                Math.sin(a) * radius * 0.82,
              ],
              0.035,
            ),
          );
        }
      }
      draw("wood", wood, C.timberDark);
      draw("needles", leaves, C.pine);
      draw("new growth", light, C.pineLight);
      break;
    }
    case "silver-birch": {
      const h = 8.7 * size;
      wood.push({
        geometry: tube(
          `${key} / pale trunk`,
          [
            [0, 0, 0],
            [0.1, 2.2, 0.14],
            [-0.2, 5.2, 0],
            [0.1, h, 0.08],
          ],
          0.23,
          7,
        ),
      });
      roots(wood, 0.34);
      for (let i = 0; i < 8; i++) {
        const a = i * 2.399,
          y = 3.5 + i * 0.46 * size;
        const r = 2.8 - Math.abs(i - 3.5) * 0.17,
          x = Math.cos(a) * r,
          z = Math.sin(a) * r;
        const elbow: V3 = [x * 0.55, y + 0.8, z * 0.55],
          tip: V3 = [x, y + 1.4, z];
        wood.push(
          stalkPiece([0, y, 0], elbow, 0.09),
          stalkPiece(elbow, tip, 0.055),
        );
        crown(i % 2 ? light : leaves, tip, [1.45, 0.86, 1.4], a);
        crown(
          leaves,
          [x * 0.78, y + 1.14, z * 0.78],
          [1.23, 0.9, 1.15],
          a + 0.3,
        );
      }
      crown(light, [0.1, h + 0.15, 0], [1.25, 0.92, 1.25]);
      for (let i = 0; i < 12; i++) {
        const a = i * 2.1,
          y = 0.5 + i * 0.48;
        details.push({
          geometry: box(),
          position: [Math.cos(a) * 0.218, y, Math.sin(a) * 0.218],
          scale: [0.22 + random() * 0.09, 0.044, 0.018],
          rotation: [0, -a + Math.PI / 2, 0.08],
        });
      }
      draw("pale bark", wood, C.birch);
      draw("bark eyes", details, C.scars);
      draw("leaves", leaves, C.green);
      draw("new leaves", light, C.lime);
      break;
    }
    case "veil-willow": {
      wood.push({
        geometry: tube(
          `${key} / leaning trunk`,
          [
            [0, 0, 0],
            [-0.35, 2.5, 0.15],
            [0.1, 5.2, 0.2],
            [0, 6.8 * size, 0],
          ],
          0.37,
          8,
        ),
      });
      roots(wood, 0.6);
      for (let i = 0; i < 7; i++) {
        const a = (i * TAU) / 7 + variant * 0.2,
          r = 3.1 + random() * 0.5;
        const x = Math.cos(a) * r,
          z = Math.sin(a) * r;
        wood.push({
          geometry: tube(
            `${key} / bough ${i}`,
            [
              [0, 4.5, 0],
              [x * 0.42, 6.8, z * 0.42],
              [x * 0.85, 6.6, z * 0.85],
              [x, 5.6, z],
            ],
            0.09,
            5,
          ),
        });
        crown(leaves, [x * 0.78, 6.15, z * 0.78], [1.45, 0.65, 1.25], a);
        for (let curtain = 0; curtain < 3; curtain++) {
          const da = a + (curtain - 1) * 0.27,
            xx = Math.cos(da) * (r + 0.4),
            zz = Math.sin(da) * (r + 0.4);
          const bottom = 1.9 + random() * 0.7;
          details.push(
            stalkPiece(
              [xx, 5.9, zz],
              [xx + 0.16, bottom, zz + 0.15],
              0.015,
              cylinder(5),
            ),
          );
          for (let j = 0; j < 6; j++) {
            const y = 5.85 - (j * (5.8 - bottom)) / 6;
            (j > 3 ? light : leaves).push({
              geometry: tinyBlade(),
              position: [xx + j * 0.02, y, zz],
              scale: [0.75, 0.9, 0.9],
              rotation: [2.6, da + j * 0.7, 0.2],
              rotationOrder: "YXZ",
            });
          }
        }
      }
      draw("boughs", wood, C.timber);
      draw("curtain stems", details, C.willow);
      draw("silver leaves", leaves, C.willow);
      draw("lavender tips", light, C.willowTip);
      break;
    }
    case "coral-tree": {
      roots(wood, 0.5);
      wood.push({
        geometry: taper(),
        position: [0, 2.1, 0],
        scale: [0.4, 4.2, 0.35],
      });
      for (let i = 0; i < 6; i++) {
        const a = (i * TAU) / 6 + 0.25,
          r = 2.2 + random() * 0.5;
        const fork: V3 = [
          Math.cos(a) * r * 0.5,
          4.1 + (i % 2) * 0.5,
          Math.sin(a) * r * 0.5,
        ];
        const tip: V3 = [
          Math.cos(a) * r,
          6.1 + (i % 3) * 0.25,
          Math.sin(a) * r,
        ];
        wood.push(
          stalkPiece([0, 2.5, 0], fork, 0.2, taper()),
          stalkPiece(fork, tip, 0.13, taper()),
        );
        for (let j = 0; j < 2; j++) {
          const da = a + (j ? 0.3 : -0.3),
            p: V3 = [
              Math.cos(da) * (r + 0.4),
              tip[1] + 0.5,
              Math.sin(da) * (r + 0.4),
            ];
          wood.push(stalkPiece(tip, p, 0.075));
          flowers(accents, p, 5, 0.79, 1.42, da, 1.0, tinyBlade());
          accents.push({
            geometry: facet(),
            position: p,
            scale: [0.35, 0.25, 0.35],
          });
          light.push({
            geometry: facet(),
            position: [p[0], p[1] + 0.14, p[2]],
            scale: [0.14, 0.19, 0.14],
          });
        }
      }
      draw("coral wood", wood, C.coral);
      draw("blossoms", accents, C.blush);
      draw("pollen", light, C.gold);
      break;
    }
    case "baobab-tree": {
      roots(wood, 1.25, 7);
      wood.push({
        geometry: sphere(),
        position: [0, 2.5, 0],
        scale: [1.5, 2.7, 1.24],
        rotation: [0, 0.2, 0.03],
      });
      wood.push({
        geometry: taper(),
        position: [0.15, 4.9, 0],
        scale: [1, 4.2, 0.89],
      });
      for (let i = 0; i < 5; i++) {
        const a = (i * TAU) / 5 + 0.15,
          r = 3.0 + random() * 0.4;
        const p: V3 = [Math.cos(a) * r, 7.6 + (i % 2) * 0.6, Math.sin(a) * r];
        wood.push(
          stalkPiece(
            [0, 4.5, 0],
            [p[0] * 0.64, p[1] - 1.1, p[2] * 0.64],
            0.38,
            taper(),
          ),
        );
        wood.push(
          stalkPiece([p[0] * 0.64, p[1] - 1.1, p[2] * 0.64], p, 0.2, taper()),
        );
        crown(i % 2 ? leaves : light, p, [2.1, 0.78, 1.9], a);
        details.push({
          geometry: sphere(),
          position: [p[0] * 0.88, p[1] - 0.95, p[2] * 0.88],
          scale: [0.17, 0.38, 0.17],
        });
      }
      crown(leaves, [0, 8.4, 0], [2.2, 0.83, 2.1]);
      draw("swollen trunk", wood, C.timber);
      draw("canopy", leaves, C.green);
      draw("pale canopy", light, C.sage);
      draw("hanging fruit", details, C.saffron);
      break;
    }
    case "spiral-tree": {
      roots(wood, 0.52);
      for (let strand = 0; strand < 2; strand++) {
        const points: V3[] = [];
        for (let i = 0; i <= 19; i++) {
          const t = i / 19,
            a = t * TAU * 1.5 + strand * Math.PI;
          points.push([
            Math.cos(a) * (0.42 + t * 0.09),
            t * 8.1 * size,
            Math.sin(a) * (0.42 + t * 0.09),
          ]);
        }
        wood.push({
          geometry: tube(`${key} / helix ${strand}`, points, 0.18, 6),
        });
      }
      for (let level = 0; level < 3; level++) {
        const y = 4.3 + level * 1.7;
        for (let i = 0; i < 7; i++) {
          const a = (i * TAU) / 7 + level * 0.41;
          (level % 2 ? light : leaves).push({
            geometry: blade(),
            position: [Math.cos(a) * 0.5, y, Math.sin(a) * 0.5],
            scale: [2.4, 2.5 - level * 0.34, 2],
            rotation: [0.95, a, 0],
            rotationOrder: "YXZ",
          });
        }
      }
      for (let i = 0; i < 4; i++)
        accents.push({
          geometry: sphere(),
          position: [
            Math.cos(i * 2.4) * 0.44,
            7 + i * 0.53,
            Math.sin(i * 2.4) * 0.44,
          ],
          scale: [0.17, 0.26, 0.17],
        });
      draw("braided trunk", wood, C.timberDark);
      draw("spiral leaves", leaves, C.teal);
      draw("upper leaves", light, C.sage);
      draw("blue seedpods", accents, C.blue);
      break;
    }
    case "tree-fern": {
      const h = 4.3 * size;
      wood.push({
        geometry: taper(),
        position: [0, h * 0.5, 0],
        scale: [0.28, h, 0.27],
      });
      roots(wood, 0.38);
      for (let i = 0; i < 10; i++)
        details.push({
          geometry: cylinder(7),
          position: [0, 0.4 + i * h * 0.085, 0],
          scale: [0.285 - i * 0.01, 0.11, 0.275 - i * 0.01],
          rotation: [0, i * 0.4, 0],
        });
      for (let i = 0; i < 8; i++) {
        const a = (i * TAU) / 8,
          end: V3 = [Math.cos(a) * 3.1, h + 0.35, Math.sin(a) * 3.1];
        wood.push({
          geometry: tube(
            `${key} / frond ${i}`,
            [
              [0, h, 0],
              [end[0] * 0.4, h + 1.2, end[2] * 0.4],
              [end[0] * 0.75, h + 1, end[2] * 0.75],
              end,
            ],
            0.035,
            4,
          ),
        });
        for (let j = 1; j <= 7; j++)
          for (const side of [-1, 1]) {
            const t = j / 8,
              r = t * 3.1,
              y = h + Math.sin(t * Math.PI) * 0.95 + t * 0.35;
            (i % 2 ? light : leaves).push({
              geometry: tinyBlade(),
              position: [Math.cos(a) * r, y, Math.sin(a) * r],
              scale: [0.86, 0.9 - t * 0.43, 0.8],
              rotation: [1.58, Math.PI / 2 - a + side * 1.1, side * 0.05],
              rotationOrder: "YXZ",
            });
          }
      }
      draw("frond stems", wood, C.timberDark);
      draw("trunk scales", details, C.timber);
      draw("fern leaflets", leaves, C.fern);
      draw("young leaflets", light, C.fernLight);
      break;
    }
    case "fan-palm": {
      const h = 7.4 * size;
      wood.push({
        geometry: tube(
          `${key} / bent palm trunk`,
          [
            [0, 0, 0],
            [0.2, 2.2, 0],
            [0.6, 4.5, 0.12],
            [0.75, h, 0.12],
          ],
          0.25,
          8,
        ),
      });
      for (let i = 0; i < 12; i++)
        details.push({
          geometry: cylinder(8),
          position: [Math.min(0.75, i * 0.075), 0.45 + (i * h) / 13, 0.1],
          scale: [0.27, 0.045, 0.27],
        });
      for (let i = 0; i < 6; i++) {
        const a = (i * TAU) / 6,
          px = 0.75 + Math.cos(a) * 1.15,
          pz = 0.12 + Math.sin(a) * 1.15;
        wood.push(stalkPiece([0.75, h, 0.12], [px, h + 0.68, pz], 0.055));
        for (let j = 0; j < 7; j++) {
          const splay = (j - 3) * 0.24;
          (i % 2 ? light : leaves).push({
            geometry: blade(),
            position: [px, h + 0.68, pz],
            scale: [1.1, 2.02, 1.3],
            rotation: [
              1.08 + Math.abs(splay) * 0.16,
              Math.PI / 2 - a + splay,
              0,
            ],
            rotationOrder: "YXZ",
          });
        }
        accents.push({
          geometry: sphere(),
          position: [
            0.75 + Math.cos(a) * 0.35,
            h - 0.2,
            0.12 + Math.sin(a) * 0.35,
          ],
          scale: [0.21, 0.28, 0.21],
        });
      }
      draw("palm wood and bark rings", [...wood, ...details], C.timber);
      draw("fans", leaves, C.sage);
      draw("light fans", light, C.lime);
      draw("fruit", accents, C.saffron);
      break;
    }
    case "starflower": {
      rosette(leaves, 5, 0.56, 0.83, 0.08, 1.13);
      const y = 1.08 + variant * 0.08;
      wood.push(stalkPiece([0, 0, 0], [0.1, y, 0], 0.035, cylinder(5)));
      flowers(accents, [0.1, y, 0], 6, 0.65, 1.06, variant * 0.14, 1.12);
      light.push({
        geometry: sphere(),
        position: [0.1, y + 0.09, 0],
        scale: [0.13, 0.13, 0.13],
      });
      draw("stalk", wood, C.fern);
      draw("leaves", leaves, C.green);
      draw("star petals", accents, [C.pink, C.blue, C.white][variant]);
      draw("pollen", light, C.gold);
      break;
    }
    case "bellflower": {
      rosette(leaves, 4, 0.82, 0.75, 0.05, 0.96);
      const y = 1.8 * size;
      wood.push({
        geometry: tube(
          `${key} / bell stalk`,
          [
            [0, 0, 0],
            [0.05, 0.8, 0],
            [-0.12, y - 0.2, 0],
            [0.2, y, 0],
          ],
          0.04,
          5,
        ),
      });
      for (let i = 0; i < 3; i++) {
        const a = i * 2.5,
          x = Math.cos(a) * 0.47,
          z = Math.sin(a) * 0.47;
        const top = y - i * 0.35;
        wood.push(
          stalkPiece([0, top - 0.13, 0], [x, top + 0.03, z], 0.02, cylinder(5)),
        );
        accents.push({
          geometry: bell(),
          position: [x, top + 0.04, z],
          scale: [1.2, 1.2, 1.2],
          rotation: [Math.PI, a, 0.14],
        });
        light.push({
          geometry: sphere(),
          position: [x, top - 0.37, z],
          scale: [0.04, 0.12, 0.04],
        });
      }
      draw("stems", wood, C.fern);
      draw("leaves", leaves, C.green);
      draw("bells", accents, [C.blue, C.violet, C.white][variant]);
      draw("stamens", light, C.gold);
      break;
    }
    case "orchid": {
      rosette(leaves, 3, 0.93, 1.3, 0.05, 0.72);
      wood.push({
        geometry: tube(
          `${key} / orchid stem`,
          [
            [0, 0, 0],
            [-0.05, 0.65, 0],
            [0.15, 1.25, 0],
            [0.4, 1.55, 0.12],
          ],
          0.045,
          5,
        ),
      });
      for (let j = 0; j < 2; j++) {
        const p: V3 = [j ? 0.4 : -0.19, j ? 1.55 : 1.23, j ? 0.12 : 0.18];
        for (let i = 0; i < 5; i++) {
          const a = (i * TAU) / 5;
          accents.push({
            geometry: blade(),
            position: p,
            scale: [1.25, i === 2 ? 0.59 : 0.45, 1.25],
            rotation: [Math.cos(a) * 1.15, 0, Math.sin(a) * 1.15],
            rotationOrder: "YXZ",
          });
        }
        light.push({
          geometry: sphere(),
          position: [p[0], p[1], p[2] + 0.15],
          scale: [0.12, 0.15, 0.18],
        });
        details.push({
          geometry: blade(),
          position: [p[0], p[1] - 0.07, p[2] + 0.15],
          scale: [1.3, 0.32, 1.3],
          rotation: [1.9, 0, 0],
        });
      }
      draw("stem and broad leaves", [...wood, ...leaves], C.teal);
      draw("orchid petals", accents, [C.pink, C.violet, C.white][variant]);
      draw("throat", light, C.gold);
      draw("lip", details, C.berry);
      break;
    }
    case "sunburst-flower": {
      const h = 1.8 * size;
      wood.push(stalkPiece([0, 0, 0], [0.05, h, 0], 0.05, cylinder(6)));
      for (let i = 0; i < 3; i++)
        leaves.push({
          geometry: blade(),
          position: [0, 0.18 + i * 0.4, 0],
          scale: [1.3, 0.78, 1.4],
          rotation: [0.84, i * 2.7, 0],
          rotationOrder: "YXZ",
        });
      flowers(accents, [0.05, h, 0], 11, 0.78, 0.64, 0, 1.35);
      flowers(light, [0.05, h + 0.05, 0], 11, 0.49, 0.66, 0.16, 1.25);
      details.push({
        geometry: sphere(),
        position: [0.05, h + 0.05, 0],
        scale: [0.31, 0.17, 0.31],
      });
      draw("stalk and leaves", [...wood, ...leaves], C.green);
      draw("rays", accents, C.gold);
      draw("inner rays", light, C.saffron);
      draw("seed head", details, C.center);
      break;
    }
    case "lotus": {
      leaves.push({
        geometry: sphere(),
        position: [0, 0.11, 0],
        scale: [1.0, 0.1, 0.9],
      });
      flowers(accents, [0, 0.24, 0], 8, 0.86, 1.8, 0, 1.2);
      flowers(light, [0, 0.28, 0], 6, 0.68, 1.52, 0.3, 0.82);
      flowers(details, [0, 0.38, 0], 4, 0.52, 1.2, 0.1, 0.48);
      wood.push({
        geometry: sphere(),
        position: [0, 0.67, 0],
        scale: [0.18, 0.17, 0.18],
      });
      draw("pad", leaves, C.teal);
      draw("outer petals", accents, C.pink);
      draw("inner and heart petals", [...light, ...details], C.white);
      draw("pollen", wood, C.gold);
      break;
    }
    case "foxglove": {
      for (let i = 0; i < 6; i++)
        leaves.push({
          geometry: tinyBlade(),
          position: [0, 0.02, 0],
          scale: [0.9, 0.85, 0.9],
          rotation: [0.92, (i * TAU) / 6, 0],
          rotationOrder: "YXZ",
        });
      const h = 2.35 * size;
      wood.push(stalkPiece([0, 0, 0], [0.1, h, 0], 0.055, cylinder(6)));
      for (let i = 0; i < 8; i++) {
        const a = i * 2.38,
          y = 0.95 + i * 0.17,
          r = 0.15 + (7 - i) * 0.02;
        accents.push({
          geometry: bell(),
          position: [Math.cos(a) * r, y, Math.sin(a) * r],
          scale: [1 - i * 0.046, 0.91 - i * 0.027, 1 - i * 0.046],
          rotation: [Math.PI * 0.74, a, 0],
          rotationOrder: "YXZ",
        });
        light.push({
          geometry: facet(),
          position: [
            Math.cos(a) * (r + 0.18),
            y - 0.12,
            Math.sin(a) * (r + 0.18),
          ],
          scale: [0.025, 0.035, 0.025],
        });
      }
      accents.push({
        geometry: sphere(),
        position: [0.1, h, 0],
        scale: [0.08, 0.14, 0.08],
      });
      draw("stem", wood, C.fern);
      draw("basal leaves", leaves, C.green);
      draw("flower spike", accents, [C.violet, C.pink, C.white][variant]);
      draw("freckles", light, C.berry);
      break;
    }
    case "berry-bush": {
      for (let i = 0; i < 8; i++) {
        const a = i * 2.399,
          r = 0.45 + random() * 0.55,
          h = 0.85 + random() * 0.65;
        wood.push(
          stalkPiece(
            [0, 0, 0],
            [Math.cos(a) * r, h, Math.sin(a) * r],
            0.055,
            taper(),
          ),
        );
        crown(
          i % 2 ? leaves : light,
          [Math.cos(a) * r, h, Math.sin(a) * r],
          [0.64, 0.47, 0.62],
          a,
        );
        for (let j = 0; j < 3; j++)
          accents.push({
            geometry: facet(),
            position: [
              Math.cos(a) * (r + 0.25) + j * 0.08,
              h + 0.12 - j * 0.06,
              Math.sin(a) * (r + 0.25),
            ],
            scale: [0.09, 0.105, 0.09],
          });
      }
      draw("twig network", wood, C.timber);
      draw("foliage", leaves, C.green);
      draw("light foliage", light, C.sage);
      draw("berries", accents, variant === 1 ? C.berryLight : C.berry);
      break;
    }
    case "cycad": {
      wood.push({
        geometry: facet(),
        position: [0, 0.48, 0],
        scale: [0.43, 0.58, 0.41],
      });
      for (let i = 0; i < 8; i++) {
        const a = (i * TAU) / 8;
        for (let j = 1; j <= 5; j++)
          for (const side of [-1, 1]) {
            const t = j / 6,
              r = t * 1.6,
              y = 0.72 + Math.sin(t * Math.PI) * 0.83;
            (i % 2 ? light : leaves).push({
              geometry: tinyBlade(),
              position: [Math.cos(a) * r, y, Math.sin(a) * r],
              scale: [0.65, 0.46 - t * 0.12, 0.8],
              rotation: [1.6, Math.PI / 2 - a + side * 1.12, 0],
              rotationOrder: "YXZ",
            });
          }
        details.push({
          geometry: tube(
            `${key} / cycad frond ${i}`,
            [
              [0, 0.6, 0],
              [Math.cos(a) * 0.75, 1.55, Math.sin(a) * 0.75],
              [Math.cos(a) * 1.7, 0.92, Math.sin(a) * 1.7],
            ],
            0.025,
            3,
          ),
        });
      }
      accents.push({
        geometry: cone(),
        position: [0, 1.18, 0],
        scale: [0.2, 0.79, 0.2],
      });
      draw("scaly bulb", wood, C.timber);
      draw("frond stems and leaves", [...details, ...leaves], C.fern);
      draw("bright leaves", light, C.fernLight);
      draw("cone", accents, C.saffron);
      break;
    }
    case "aloe": {
      rosette(leaves, 8, 1.58, 1.08, 0.03, 0.73, variant * 0.2);
      rosette(light, 5, 1.28, 0.85, 0.08, 0.34, 0.33);
      if (variant !== 1) {
        wood.push(stalkPiece([0, 0, 0], [0.14, 1.92, 0], 0.027, cylinder(5)));
        for (let i = 0; i < 5; i++)
          accents.push({
            geometry: bell(),
            position: [
              0.14 + Math.cos(i * 2.4) * 0.12,
              1.56 + i * 0.07,
              Math.sin(i * 2.4) * 0.12,
            ],
            scale: [0.4, 0.65, 0.4],
            rotation: [0.65, i * 2.4, 0],
          });
      }
      draw("thick leaves", leaves, C.cactus);
      draw("young leaves", light, C.cactusLight);
      draw("stalk", wood, C.fern);
      draw("orange bells", accents, C.saffron);
      break;
    }
    case "barrel-cactus": {
      const h = 1.68 * size;
      leaves.push({
        geometry: sphere(),
        position: [0, h * 0.5, 0],
        scale: [0.76, h * 0.59, 0.76],
      });
      for (let i = 0; i < 10; i++) {
        const a = (i * TAU) / 10;
        const points = [
          [Math.cos(a) * 0.15, h * 0.97, Math.sin(a) * 0.15],
          [Math.cos(a) * 0.69, h * 0.79, Math.sin(a) * 0.69],
          [Math.cos(a) * 0.79, h * 0.45, Math.sin(a) * 0.79],
          [Math.cos(a) * 0.58, h * 0.13, Math.sin(a) * 0.58],
        ];
        light.push({
          geometry: geometry(
            `${key} / rib ${i}`,
            () =>
              new THREE.TubeGeometry(
                new THREE.CatmullRomCurve3(
                  points.map((p) => new THREE.Vector3(...p)),
                ),
                8,
                0.035,
                4,
                false,
              ),
          ),
        });
        for (let j = 0; j < 4; j++) {
          const y = 0.34 + j * 0.32,
            r = 0.72;
          details.push(
            stalkPiece(
              [Math.cos(a) * r, y, Math.sin(a) * r],
              [Math.cos(a) * (r + 0.14), y + 0.055, Math.sin(a) * (r + 0.14)],
              0.008,
              geometry(
                "flora / fine spine",
                () => new THREE.ConeGeometry(1, 1, 4),
              ),
            ),
          );
        }
      }
      flowers(accents, [0, h * 1.05, 0], 7, 0.33, 0.88, 0, 1.02);
      draw("barrel", leaves, C.cactus);
      draw("ribs", light, C.cactusLight);
      draw("fine spines", details, C.white);
      draw("crown flower", accents, C.pink);
      break;
    }
    case "prickly-pear": {
      const pads = [
        [0, 0.56, 0, 0],
        [-0.43, 1.34, 0.04, 0.38],
        [0.48, 1.4, 0, -0.3],
        [0.72, 2.11, 0.08, -0.13],
        [-0.8, 1.96, 0.05, 0.5],
      ];
      for (let i = 0; i < pads.length; i++) {
        const [x, y, z, tilt] = pads[i];
        (i % 2 ? light : leaves).push({
          geometry: sphere(),
          position: [x, y, z],
          scale: [0.43, 0.62, 0.15],
          rotation: [0, 0.12, tilt],
        });
        for (let j = 0; j < 5; j++)
          details.push({
            geometry: cone(),
            position: [
              x - 0.17 + (j % 3) * 0.16,
              y - 0.29 + Math.floor(j / 3) * 0.33,
              z + 0.145,
            ],
            scale: [0.015, 0.085, 0.015],
            rotation: [Math.PI / 2, 0, tilt],
          });
      }
      accents.push(
        {
          geometry: sphere(),
          position: [0.74, 2.72, 0.08],
          scale: [0.13, 0.18, 0.13],
        },
        {
          geometry: sphere(),
          position: [-0.91, 2.53, 0.05],
          scale: [0.12, 0.17, 0.12],
        },
      );
      draw("flat pads", leaves, C.cactus);
      draw("light pads", light, C.cactusLight);
      draw("spines", details, C.white);
      draw("red fruit", accents, C.berryLight);
      break;
    }
    case "puffball": {
      for (let i = 0; i < 4; i++) {
        const a = i * 2.39,
          r = i ? 0.55 : 0,
          s = i ? 0.25 + random() * 0.12 : 0.48;
        wood.push({
          geometry: cylinder(6),
          position: [Math.cos(a) * r, 0.16, Math.sin(a) * r],
          scale: [s * 0.5, 0.3, s * 0.5],
        });
        accents.push({
          geometry: sphere(),
          position: [Math.cos(a) * r, 0.2 + s * 0.7, Math.sin(a) * r],
          scale: [s, s * 0.88, s],
        });
        details.push({
          geometry: sphere(),
          position: [Math.cos(a) * r, 0.25 + s * 1.54, Math.sin(a) * r],
          scale: [s * 0.1, s * 0.055, s * 0.1],
        });
      }
      draw("stems", wood, C.gills);
      draw("pearly balls", accents, C.white);
      draw("spore pores", details, C.capDark);
      break;
    }
    case "shelf-fungus": {
      wood.push({
        geometry: taper(),
        position: [0, 0.89, 0],
        scale: [0.27, 1.78, 0.3],
      });
      for (let i = 0; i < 5; i++) {
        const a = i * 2.1,
          y = 0.35 + i * 0.34,
          s = 0.66 - i * 0.035;
        accents.push({
          geometry: mushroomCap(),
          position: [Math.cos(a) * 0.38, y, Math.sin(a) * 0.38],
          scale: [s, 0.19, s],
          rotation: [0.1, a, 0.08],
        });
        light.push({
          geometry: cylinder(12),
          position: [Math.cos(a) * 0.38, y + 0.025, Math.sin(a) * 0.38],
          scale: [s * 0.96, 0.025, s * 0.96],
          rotation: [0.1, a, 0.08],
        });
      }
      draw("old wood", wood, C.timberDark);
      draw("rust shelves", accents, C.cap);
      draw("cream rims", light, C.gills);
      break;
    }
    case "glowcap": {
      for (let i = 0; i < 3; i++) {
        const a = i * 2.5,
          x = i ? Math.cos(a) * 0.61 : 0,
          z = i ? Math.sin(a) * 0.61 : 0;
        const h = i ? 0.8 + i * 0.13 : 1.7,
          r = i ? 0.45 : 0.76;
        wood.push({
          geometry: taper(),
          position: [x, h * 0.5, z],
          scale: [0.13, h, 0.12],
        });
        accents.push({
          geometry: mushroomCap(),
          position: [x, h - 0.11, z],
          scale: [r, r * 0.78, r],
        });
        light.push({
          geometry: cylinder(12),
          position: [x, h - 0.11, z],
          scale: [r * 0.87, 0.035, r * 0.87],
        });
        for (let j = 0; j < 5; j++) {
          const aa = (j * TAU) / 5 + i;
          details.push({
            geometry: facet(),
            position: [
              x + Math.cos(aa) * r * 0.46,
              h + r * 0.36,
              z + Math.sin(aa) * r * 0.46,
            ],
            scale: [0.065, 0.025, 0.065],
          });
        }
      }
      draw("stems", wood, C.gills);
      draw("glowing caps", accents, C.glow);
      draw("gills", light, C.glowWhite);
      draw("cap freckles", details, C.glowWhite);
      break;
    }
    case "grass-tuft": {
      for (let i = 0; i < 11; i++) {
        const a = i * 2.4,
          r = random() * 0.35;
        (i % 3 ? leaves : light).push({
          geometry: tinyBlade(),
          position: [Math.cos(a) * r, 0, Math.sin(a) * r],
          scale: [0.15, 0.45 + random() * 0.56, 0.22],
          rotation: [0.22 + random() * 0.33, a, 0],
          rotationOrder: "YXZ",
        });
      }
      draw("grass blades", leaves, C.fern);
      draw("sunlit blades", light, C.lime);
      break;
    }
    case "flower-carpet": {
      for (let i = 0; i < 9; i++) {
        const a = i * 2.399,
          r = Math.sqrt(i / 9) * 1.4,
          x = Math.cos(a) * r,
          z = Math.sin(a) * r,
          h = 0.23 + random() * 0.2;
        wood.push(stalkPiece([x, 0, z], [x, h, z], 0.016, cylinder(4)));
        wood.push({
          geometry: tinyBlade(),
          position: [x, 0.04, z],
          scale: [0.52, 0.43, 0.52],
          rotation: [1.18, a, 0],
          rotationOrder: "YXZ",
        });
        flowers(
          i % 3 ? accents : light,
          [x, h, z],
          5,
          0.18 + random() * 0.08,
          0.75,
          a,
          1.36,
          tinyBlade(),
        );
      }
      draw("groundcover", wood, C.fern);
      draw("many petals", accents, [C.pink, C.white, C.blue][variant]);
      draw("accent flowers", light, C.gold);
      break;
    }
    case "fallen-log": {
      wood.push({
        geometry: cylinder(9),
        position: [0, 0.59, 0],
        scale: [0.54, 4.8, 0.59],
        rotation: [0, 0, Math.PI / 2],
      });
      details.push({
        geometry: cylinder(9),
        position: [-2.41, 0.59, 0],
        scale: [0.48, 0.024, 0.48],
        rotation: [0, 0, Math.PI / 2],
      });
      details.push({
        geometry: cylinder(9),
        position: [2.41, 0.59, 0],
        scale: [0.48, 0.024, 0.48],
        rotation: [0, 0, Math.PI / 2],
      });
      wood.push(
        stalkPiece([-0.58, 0.62, 0], [-0.87, 1.25, 0.63], 0.17, taper()),
      );
      for (let i = 0; i < 5; i++)
        crown(
          leaves,
          [-1.5 + i * 0.65, 1.03, -0.13 + random() * 0.22],
          [0.5, 0.11, 0.33],
          i * 0.7,
        );
      for (let i = 0; i < 3; i++) {
        wood.push({
          geometry: cylinder(5),
          position: [0.7 + i * 0.24, 1.18, 0.15],
          scale: [0.035, 0.29 + i * 0.05, 0.035],
        });
        accents.push({
          geometry: mushroomCap(),
          position: [0.7 + i * 0.24, 1.29 + i * 0.05, 0.15],
          scale: [0.16, 0.12, 0.16],
        });
      }
      draw("fallen timber", wood, C.timberDark);
      draw("cut grain", details, C.timber);
      draw("moss", leaves, C.moss);
      draw("small fungi", accents, C.cap);
      break;
    }
    case "lily-pad": {
      const g = geometry("flora / notched lily", () => {
        const g = new THREE.CylinderGeometry(
          1,
          1,
          0.075,
          18,
          1,
          false,
          0.18,
          TAU - 0.36,
        );
        // CylinderGeometry omits radial closing faces for a partial circle.
        const cut: Piece[] = [{ geometry: g }];
        for (const a of [0.18, TAU - 0.18])
          cut.push({
            geometry: box(),
            position: [Math.sin(a) * 0.5, 0, Math.cos(a) * 0.5],
            scale: [0.008, 0.075, 1],
            rotation: [0, a, 0],
          });
        const result = merge("flora / closed lily", cut);
        g.dispose();
        return result.clone();
      });
      leaves.push({
        geometry: g,
        position: [0, 0.05, 0],
        scale: [1.12, 1, 0.96],
        rotation: [0, 0.27 * variant, 0],
      });
      for (let i = 0; i < 7; i++) {
        const a = 0.45 + (i * (TAU - 0.9)) / 7;
        light.push(
          stalkPiece(
            [0, 0.09, 0],
            [Math.sin(a) * 0.86, 0.09, Math.cos(a) * 0.78],
            0.009,
            cylinder(4),
          ),
        );
      }
      flowers(accents, [-0.2, 0.16, -0.14], 6, 0.32, 1.1, 0, 0.99);
      details.push({
        geometry: sphere(),
        position: [-0.2, 0.3, -0.14],
        scale: [0.075, 0.09, 0.075],
      });
      draw("pad", leaves, C.teal);
      draw("veins", light, C.fernLight);
      draw("flower", accents, C.white);
      draw("pollen", details, C.gold);
      break;
    }
    case "boulder-stack": {
      for (let i = 0; i < 4; i++) {
        const s = 1.45 - i * 0.24,
          y = 0.69 + i * 0.6;
        (i % 2 ? light : wood).push({
          geometry: facet(),
          position: [Math.sin(i * 1.7) * 0.28, y, Math.cos(i * 1.7) * 0.22],
          scale: [s, 0.62 - i * 0.05, s * 0.8],
          rotation: [0.05, i * 1.9 + variant * 0.16, 0.1],
        });
      }
      for (let i = 0; i < 3; i++)
        crown(
          leaves,
          [-0.5 + i * 0.5, 0.42 + i * 0.09, 0.83],
          [0.3, 0.12, 0.2],
          i,
        );
      draw("stone", wood, C.rock);
      draw("pale strata", light, C.rockLight);
      draw("lichen", leaves, C.moss);
      break;
    }
  }
  return finish(group, kind);
}
