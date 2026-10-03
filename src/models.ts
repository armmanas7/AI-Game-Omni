import * as THREE from "three";
import type { ModelKind } from "./types";
import { createFloraModel, FLORA_BOUNDS } from "./flora-models";
import { createFaunaModel, FAUNA_BOUNDS } from "./fauna-models";
import {
  createAquaticAvianModel,
  AQUATIC_AVIAN_BOUNDS,
} from "./aquatic-avian-models";

import {
  M,
  geometry,
  material,
  sphere,
  facet,
  box,
  cylinder,
  taper,
  cone,
  ring,
  merge,
  mesh,
  tube,
  stalkPiece,
  leaf,
  petalRosette,
  crystal,
  umbrella,
  branchedRoot,
  rng,
  finish,
  TAU,
  UP,
  type Piece,
  type V3,
} from "./model-kit";

/** Conservative whole-sculpture envelopes; trees' canopy radius is not their
 * ground collision radius. See docs/MODELS.md for suggested collider sizes. */
export const MODEL_BOUNDS: Record<
  ModelKind,
  { radius: number; height: number }
> = {
  "canopy-tree": { radius: 4.9, height: 13.2 },
  "ribbon-tree": { radius: 4.3, height: 13.4 },
  "fan-fern": { radius: 1.7, height: 2.4 },
  reed: { radius: 1.0, height: 3.4 },
  "desert-spire": { radius: 1.5, height: 8.8 },
  "arch-rock": { radius: 3.9, height: 5.2 },
  "dune-rock": { radius: 2.4, height: 2.2 },
  "crystal-cluster": { radius: 1.8, height: 4.4 },
  "cave-column": { radius: 1.6, height: 10.1 },
  "ruin-arch": { radius: 2.3, height: 3.9 },
  "ruin-ring": { radius: 2.2, height: 4.2 },
  "lantern-bloom": { radius: 1.1, height: 2.7 },
  "spore-crown": { radius: 1.2, height: 2.8 },
  "prism-fern": { radius: 1.2, height: 2.6 },
  "glass-cactus": { radius: 1.1, height: 3 },
  "sun-stone": { radius: 1.0, height: 2.0 },
  "sand-rose": { radius: 1.3, height: 1.5 },
  "echo-crystal": { radius: 1.0, height: 2.9 },
  "cave-coral": { radius: 1.2, height: 2.7 },
  "memory-shard": { radius: 0.8, height: 2.9 },
  moth: { radius: 0.9, height: 1.4 },
  "survey-monolith": { radius: 1.2, height: 3.4 },
  heartwood: { radius: 1.4, height: 3.1 },
  "sun-dial": { radius: 1.6, height: 2.9 },
  "harmonic-core": { radius: 1.5, height: 3.2 },
  ...FLORA_BOUNDS,
  ...FAUNA_BOUNDS,
  ...AQUATIC_AVIAN_BOUNDS,
} as Record<ModelKind, { radius: number; height: number }>;

export function createModel(kind: ModelKind, seed = 0): THREE.Group {
  const extended =
    createFloraModel(kind, seed) ??
    createFaunaModel(kind, seed) ??
    createAquaticAvianModel(kind, seed);
  if (extended) return extended;
  const group = new THREE.Group();
  const random = rng(seed);
  const variation = 0.94 + random() * 0.12;
  switch (kind) {
    case "canopy-tree": {
      const h = 9.4 * variation;
      mesh(group, branchedRoot(), M.root);
      mesh(
        group,
        tube(
          "canopy-trunk",
          [
            [0, 0, 0],
            [0.12, 3, 0.08],
            [-0.15, 6, 0.2],
            [0.35, 9.2, 0],
          ],
          0.36,
        ),
        M.bark,
        [0, 0.2, 0],
        [1, variation, 1],
      );
      mesh(group, umbrella(), M.canopy, [0.3, h, 0], [variation, 1, variation]);
      mesh(
        group,
        umbrella(),
        M.canopyLight,
        [-1.35, h * 0.71, 0.48],
        [0.48, 0.65, 0.48],
      );
      mesh(
        group,
        merge("canopy-branches", [
          stalkPiece([0, 5.5, 0], [-1.3, 7.2, 0.5], 0.2),
          stalkPiece([0, 7, 0], [1.5, 9.6, 0], 0.17),
        ]),
        M.bark,
      );
      mesh(
        group,
        ring(),
        M.bloom,
        [0.22, h + 0.34, 0],
        [0.85, 0.85, 0.85],
        [Math.PI / 2, 0, 0],
      );
      break;
    }
    case "ribbon-tree": {
      mesh(group, branchedRoot(), M.barkDark, [0, 0, 0], [0.7, 0.8, 0.7]);
      mesh(
        group,
        tube(
          "ribbon-tree-spine",
          [
            [0, 0, 0],
            [-0.45, 2, 0.2],
            [0.2, 5.6, -0.1],
            [-0.4, 8, 0.1],
            [0, 10.1, 0],
          ],
          0.28,
        ),
        M.barkDark,
        [0, 0, 0],
        [1, variation, 1],
      );
      const pieces: Piece[] = [];
      for (let i = 0; i < 5; i++)
        pieces.push({
          geometry: leaf(),
          position: [0, 8.3 + i * 0.16, 0],
          scale: [1.5, 3.8, 2.2],
          rotation: [0.66, (TAU * i) / 5, 0],
          rotationOrder: "YXZ",
        });
      mesh(
        group,
        merge("ribbon-tree-crown", pieces),
        M.leafLight,
        [0, 0, 0],
        [1, variation, 1],
      );
      mesh(
        group,
        tube(
          "ribbon-branch-left",
          [
            [0, 5.5, 0],
            [-1.8, 7.2, 0],
            [-2.2, 7.7, 0.15],
          ],
          0.11,
        ),
        M.bark,
      );
      mesh(
        group,
        leaf(),
        M.leaf,
        [-2.1, 7.6, 0.1],
        [1.3, 2.9, 1.6],
        [0.5, -1.1, 1.35],
      );
      mesh(group, sphere(), M.pearl, [0, 9.9 * variation, 0], [0.2, 0.25, 0.2]);
      break;
    }
    case "fan-fern": {
      mesh(group, sphere(), M.root, [0, 0.2, 0], [0.25, 0.3, 0.25]);
      mesh(group, petalRosette("fern-blades", 7, 2.0, 1.0, 0.2), M.leaf);
      mesh(
        group,
        petalRosette("fern-young-blades", 4, 1.2, 0.65, 0.38, 0.3),
        M.leafLight,
      );
      mesh(group, crystal(), M.bloom, [0, 0.4, 0], [0.13, 1.2, 0.13]);
      break;
    }
    case "reed": {
      const stems: Piece[] = [],
        pods: Piece[] = [],
        blades: Piece[] = [];
      for (let i = 0; i < 5; i++) {
        const a = i * 2.4,
          x = Math.cos(a) * 0.22,
          z = Math.sin(a) * 0.22,
          h = 1.8 + i * 0.19;
        stems.push(stalkPiece([x, 0, z], [x + 0.16, h, z], 0.045));
        pods.push({
          geometry: sphere(),
          position: [x + 0.16, h, z],
          scale: [0.085, 0.32, 0.085],
        });
        blades.push({
          geometry: leaf(),
          position: [x, 0.3, z],
          scale: [0.36, 1.6, 0.6],
          rotation: [0.38, a, 0],
        });
      }
      mesh(group, merge("reed-stems", stems), M.reed);
      mesh(group, merge("reed-pods", pods), M.bloom);
      mesh(group, merge("reed-blades", blades), M.leafLight);
      break;
    }
    case "desert-spire": {
      mesh(group, facet(), M.sandDark, [0, 0.38, 0], [1.05, 0.55, 0.85]);
      mesh(
        group,
        tube(
          "wind-spire",
          [
            [0, 0.5, 0],
            [0.3, 2, 0],
            [-0.4, 4.4, 0.12],
            [-0.1, 6.5, 0],
            [0.35, 7.3, -0.1],
          ],
          0.55,
          6,
        ),
        M.sandstone,
        [0, 0, 0],
        [1, variation, 0.8],
      );
      mesh(
        group,
        crystal(),
        M.amber,
        [0.35, 6.5, -0.1],
        [0.37, 1.55, 0.3],
        [0, 0, -0.18],
      );
      mesh(
        group,
        crystal(),
        M.amberLight,
        [-0.3, 4.5, 0.05],
        [0.24, 1.2, 0.23],
        [0, 0, 0.4],
      );
      break;
    }
    case "arch-rock": {
      mesh(
        group,
        tube(
          "wind-carved-arch",
          [
            [-2.55, 0.75, 0],
            [-2.45, 2.1, 0.2],
            [-1.3, 3.8, 0.1],
            [0.3, 4.15, 0],
            [1.9, 3.2, -0.2],
            [2.8, 0.85, 0],
          ],
          0.62,
          8,
        ),
        M.sandstone,
      );
      mesh(
        group,
        merge("arch-feet", [
          {
            geometry: facet(),
            position: [-2.55, 0.35, 0],
            scale: [0.9, 0.6, 1.0],
          },
          {
            geometry: facet(),
            position: [2.8, 0.4, 0],
            scale: [0.8, 0.65, 0.9],
          },
        ]),
        M.sandDark,
      );
      mesh(
        group,
        tube(
          "arch-strata",
          [
            [-2.9, 0.8, 0.2],
            [-2.8, 2.3, 0.3],
            [-1.5, 4, 0.2],
            [0.2, 4.52, 0.05],
            [1.9, 3.7, -0.15],
          ],
          0.1,
          5,
        ),
        M.sandLight,
      );
      break;
    }
    case "dune-rock": {
      mesh(
        group,
        facet(),
        M.sandstone,
        [0, 0.65, 0],
        [1.7, 0.8, 1.1],
        [0.15, 0.3, 0.1],
      );
      mesh(group, facet(), M.sandLight, [-1.0, 0.3, 0.65], [0.65, 0.4, 0.65]);
      mesh(group, facet(), M.sandDark, [0.95, 0.27, -0.35], [0.64, 0.32, 0.55]);
      break;
    }
    case "crystal-cluster": {
      mesh(group, facet(), M.cave, [0, 0.22, 0], [1.12, 0.38, 0.9]);
      mesh(
        group,
        crystal(),
        M.crystal,
        [0, 0.14, 0],
        [0.47, 3.8, 0.47],
        [0.04, 0.2, -0.12],
      );
      mesh(
        group,
        merge("cluster-side-crystals", [
          {
            geometry: crystal(),
            position: [-0.7, 0.13, 0.3],
            scale: [0.32, 2.5, 0.34],
            rotation: [0.12, 0.4, 0.28],
          },
          {
            geometry: crystal(),
            position: [0.6, 0.09, -0.35],
            scale: [0.35, 2, 0.35],
            rotation: [-0.25, 0, -0.35],
          },
        ]),
        M.crystalLight,
      );
      mesh(
        group,
        crystal(),
        M.cyan,
        [0.3, 0.08, 0.55],
        [0.18, 1.05, 0.19],
        [0.15, 0, -0.45],
      );
      break;
    }
    case "cave-column": {
      mesh(group, facet(), M.caveDark, [0, 0.55, 0], [1.25, 0.8, 1.1]);
      mesh(
        group,
        tube(
          "cave-column-body",
          [
            [0, 0.4, 0],
            [0.2, 2, 0],
            [-0.15, 4.5, 0.1],
            [0.12, 6.5, 0.05],
            [0, 8.4, 0],
          ],
          0.57,
          7,
        ),
        M.cave,
        [0, 0, 0],
        [1, variation, 1],
      );
      mesh(group, cone(), M.cave, [0, 8.0 * variation, 0], [0.75, 1.8, 0.73]);
      mesh(
        group,
        tube(
          "column-luminous-vein",
          [
            [-0.37, 1, 0.44],
            [-0.43, 2.7, 0.42],
            [0.15, 4.2, 0.53],
            [0.33, 5.5, 0.45],
            [-0.1, 6.8, 0.5],
          ],
          0.045,
          5,
        ),
        M.crystal,
      );
      mesh(
        group,
        crystal(),
        M.crystalLight,
        [0.58, 2.6, 0],
        [0.23, 1.4, 0.3],
        [0, 0, -0.52],
      );
      break;
    }
    case "ruin-arch": {
      const legs: Piece[] = [
        {
          geometry: taper(),
          position: [-1.5, 1.4, 0],
          scale: [0.28, 2.8, 0.48],
        },
        {
          geometry: taper(),
          position: [1.5, 1.4, 0],
          scale: [0.28, 2.8, 0.48],
        },
      ];
      mesh(group, merge("relic-arch-legs", legs), M.ceramicDark);
      mesh(
        group,
        tube(
          "relic-arch-crown",
          [
            [-1.5, 2.6, 0],
            [-1.0, 3.1, 0],
            [0, 3.35, 0],
            [1, 3.1, 0],
            [1.5, 2.6, 0],
          ],
          0.29,
          6,
        ),
        M.ceramic,
      );
      mesh(
        group,
        tube(
          "relic-arch-inlay",
          [
            [-1.37, 1.7, 0.38],
            [-1.36, 2.55, 0.26],
            [-0.7, 3.05, 0.26],
            [0.6, 3.12, 0.26],
            [1.3, 2.6, 0.26],
          ],
          0.035,
          5,
        ),
        M.cyan,
      );
      mesh(
        group,
        merge("ruin-bases", [
          {
            geometry: facet(),
            position: [-1.5, 0.14, 0],
            scale: [0.57, 0.2, 0.7],
          },
          {
            geometry: facet(),
            position: [1.5, 0.16, 0],
            scale: [0.57, 0.21, 0.7],
          },
        ]),
        M.cave,
      );
      break;
    }
    case "ruin-ring": {
      mesh(group, cylinder(), M.caveDark, [0, 0.19, 0], [1.05, 0.38, 0.7]);
      mesh(
        group,
        geometry(
          "broken-ring-a",
          () => new THREE.TorusGeometry(1.35, 0.23, 6, 28, 4.55),
        ),
        M.ceramic,
        [0, 2.0, 0],
        [1, 1, 0.85],
        [0.06, 0.1, 0.2],
      );
      mesh(
        group,
        geometry(
          "broken-ring-b",
          () => new THREE.TorusGeometry(1.35, 0.23, 6, 9, 1.0),
        ),
        M.ceramicDark,
        [0, 2.0, 0],
        [1, 1, 0.85],
        [0.06, 0.1, 5.0],
      );
      mesh(
        group,
        ring(),
        M.cyan,
        [0, 2.0, 0.08],
        [1.08, 1.08, 0.7],
        [0.06, 0.1, 0.2],
      );
      mesh(group, taper(), M.metal, [0, 0.55, 0], [0.18, 1.1, 0.17]);
      break;
    }
    case "lantern-bloom": {
      mesh(
        group,
        petalRosette("lantern-root-leaves", 4, 0.8, 0.8, 0.1),
        M.leaf,
      );
      mesh(
        group,
        tube(
          "lantern-stem",
          [
            [0, 0, 0],
            [0.15, 0.8, 0],
            [-0.13, 1.5, 0],
            [0, 1.75, 0],
          ],
          0.065,
        ),
        M.bark,
      );
      mesh(
        group,
        petalRosette("lantern-petals", 5, 0.83, 1.6, 1.7, 0.2),
        M.pearl,
      );
      mesh(group, sphere(), M.bloom, [0, 2.03, 0], [0.27, 0.4, 0.27]);
      mesh(
        group,
        ring(),
        M.heart,
        [0, 1.91, 0],
        [0.41, 0.41, 0.41],
        [Math.PI / 2, 0, 0],
      );
      break;
    }
    case "spore-crown": {
      mesh(group, taper(), M.root, [0, 0.9, 0], [0.18, 1.8, 0.18]);
      mesh(group, umbrella(), M.bloom, [0, 1.68, 0], [0.21, 0.4, 0.21]);
      mesh(
        group,
        ring(),
        M.pearl,
        [0, 1.72, 0],
        [0.76, 0.76, 0.76],
        [Math.PI / 2, 0, 0],
      );
      const hanging: Piece[] = [];
      for (let i = 0; i < 7; i++)
        hanging.push({
          geometry: sphere(),
          position: [
            Math.cos((i * TAU) / 7) * 0.52,
            1.53,
            Math.sin((i * TAU) / 7) * 0.52,
          ],
          scale: [0.045, 0.24, 0.045],
        });
      mesh(group, merge("spore-fringe", hanging), M.pearl);
      mesh(group, facet(), M.barkDark, [0, 0.1, 0], [0.3, 0.2, 0.3]);
      break;
    }
    case "prism-fern": {
      mesh(group, facet(), M.cave, [0, 0.12, 0], [0.4, 0.23, 0.4]);
      const pieces: Piece[] = [];
      for (let i = 0; i < 6; i++)
        pieces.push({
          geometry: crystal(),
          position: [0, 0.12, 0],
          scale: [0.12, 1.75 + (i % 2) * 0.35, 0.19],
          rotation: [0.38, (i * TAU) / 6, 0],
          rotationOrder: "YXZ",
        });
      mesh(group, merge("prism-fern-blades", pieces), M.crystalLight);
      mesh(group, crystal(), M.cyan, [0, 0.18, 0], [0.15, 2.15, 0.15]);
      mesh(
        group,
        ring(),
        M.frost,
        [0, 0.45, 0],
        [0.34, 0.34, 0.34],
        [Math.PI / 2, 0, 0],
      );
      break;
    }
    case "glass-cactus": {
      mesh(group, taper(), M.amber, [0, 1.2, 0], [0.22, 2.4, 0.24]);
      mesh(
        group,
        merge("cactus-arms", [
          stalkPiece([0, 0.95, 0], [-0.6, 1.3, 0], 0.12),
          stalkPiece([-0.6, 1.3, 0], [-0.6, 1.95, 0], 0.13),
          stalkPiece([0, 1.25, 0], [0.57, 1.6, 0], 0.1),
          stalkPiece([0.57, 1.6, 0], [0.57, 2.2, 0], 0.1),
        ]),
        M.amber,
      );
      mesh(
        group,
        merge("cactus-caps", [
          {
            geometry: sphere(),
            position: [0, 2.4, 0],
            scale: [0.12, 0.2, 0.12],
          },
          {
            geometry: sphere(),
            position: [-0.6, 2, 0],
            scale: [0.13, 0.18, 0.13],
          },
          {
            geometry: sphere(),
            position: [0.57, 2.22, 0],
            scale: [0.11, 0.15, 0.11],
          },
        ]),
        M.amberLight,
      );
      mesh(
        group,
        merge(
          "cactus-bands",
          [0.6, 1.15, 1.7, 2.1].map((y) => ({
            geometry: ring(),
            position: [0, y, 0] as V3,
            scale: [0.2, 0.2, 0.2] as V3,
            rotation: [Math.PI / 2, 0, 0] as V3,
          })),
        ),
        M.sandDark,
      );
      mesh(group, facet(), M.sandstone, [0, 0.08, 0], [0.4, 0.17, 0.38]);
      break;
    }
    case "sun-stone": {
      mesh(group, facet(), M.sandDark, [0, 0.18, 0], [0.65, 0.25, 0.62]);
      mesh(
        group,
        facet(),
        M.amber,
        [0, 0.83, 0],
        [0.62, 0.72, 0.6],
        [0.05, 0.42, 0],
      );
      mesh(
        group,
        ring(),
        M.amberLight,
        [0, 0.87, 0],
        [0.62, 0.62, 0.62],
        [0.25, 0, -0.5],
      );
      mesh(
        group,
        crystal(),
        M.bloom,
        [0.13, 1.2, 0.12],
        [0.12, 0.35, 0.12],
        [0, 0, -0.15],
      );
      break;
    }
    case "sand-rose": {
      mesh(group, cylinder(), M.sandDark, [0, 0.07, 0], [0.36, 0.14, 0.36]);
      mesh(
        group,
        petalRosette("sand-rose-outer", 9, 1.1, 1.25, 0.13),
        M.roseDark,
        [0, 0, 0],
        [1, 0.65, 1],
      );
      mesh(
        group,
        petalRosette("sand-rose-inner", 7, 0.85, 1.15, 0.24, 0.35),
        M.rose,
      );
      mesh(
        group,
        petalRosette("sand-rose-heart", 5, 0.48, 0.65, 0.45),
        M.amberLight,
      );
      mesh(group, sphere(), M.heart, [0, 0.78, 0], [0.13, 0.14, 0.13]);
      break;
    }
    case "echo-crystal": {
      mesh(group, facet(), M.caveDark, [0, 0.13, 0], [0.55, 0.25, 0.5]);
      mesh(
        group,
        crystal(),
        M.crystal,
        [0, 0.13, 0],
        [0.3, 2.4, 0.3],
        [0.06, 0.15, -0.04],
      );
      mesh(
        group,
        ring(),
        M.frost,
        [0, 1.28, 0],
        [0.5, 0.5, 0.5],
        [Math.PI / 2, 0.1, 0.2],
      );
      mesh(
        group,
        ring(),
        M.cyan,
        [0, 1.58, 0],
        [0.38, 0.38, 0.38],
        [Math.PI / 2, -0.1, 0.2],
      );
      mesh(
        group,
        crystal(),
        M.crystalLight,
        [-0.32, 0.15, 0.1],
        [0.15, 0.9, 0.16],
        [0, 0, 0.32],
      );
      break;
    }
    case "cave-coral": {
      const branches: Piece[] = [],
        tips: Piece[] = [];
      for (let i = 0; i < 5; i++) {
        const a = (i * TAU) / 5,
          x = Math.cos(a) * 0.7,
          z = Math.sin(a) * 0.7,
          h = 1.3 + (i % 3) * 0.28;
        branches.push(
          stalkPiece([0, 0.15, 0], [x * 0.65, 0.9, z * 0.65], 0.07),
          stalkPiece([x * 0.65, 0.9, z * 0.65], [x, h, z], 0.055),
        );
        tips.push({
          geometry: sphere(),
          position: [x, h, z],
          scale: [0.19, 0.28, 0.19],
        });
      }
      mesh(group, merge("coral-branches", branches), M.crystal);
      mesh(group, merge("coral-polyp-tips", tips), M.cyan);
      mesh(group, sphere(), M.cave, [0, 0.15, 0], [0.42, 0.24, 0.42]);
      mesh(
        group,
        leaf(),
        M.crystalLight,
        [0, 0.3, 0],
        [0.6, 1.9, 0.9],
        [0.1, 0.6, 0],
      );
      break;
    }
    case "memory-shard": {
      mesh(group, cylinder(6), M.cave, [0, 0.15, 0], [0.48, 0.3, 0.48]);
      mesh(
        group,
        crystal(),
        M.ceramic,
        [0, 0.38, 0],
        [0.22, 2.25, 0.1],
        [0, 0.26, -0.12],
      );
      mesh(
        group,
        box(),
        M.cyan,
        [0, 1.38, 0.15],
        [0.028, 1.3, 0.022],
        [0, 0.26, -0.12],
      );
      mesh(
        group,
        ring(),
        M.metalLight,
        [0, 0.43, 0],
        [0.35, 0.35, 0.35],
        [Math.PI / 2, 0, 0],
      );
      break;
    }
    case "moth": {
      mesh(group, sphere(), M.barkDark, [0, 0.7, 0], [0.055, 0.21, 0.08]);
      const left = mesh(
        group,
        leaf(),
        M.wing,
        [-0.05, 0.72, 0],
        [1.6, 0.78, 2.2],
        [0.23, 0.18, -1.2],
      );
      const right = mesh(
        group,
        leaf(),
        M.wing,
        [0.05, 0.72, 0],
        [1.6, 0.78, 2.2],
        [0.23, -0.18, 1.2],
      );
      left.name = "wing-left";
      right.name = "wing-right";
      mesh(
        group,
        merge("moth-ocelli", [
          {
            geometry: sphere(),
            position: [-0.48, 0.94, 0.13],
            scale: [0.1, 0.025, 0.07],
            rotation: [0, 0, 0.25],
          },
          {
            geometry: sphere(),
            position: [0.48, 0.94, 0.13],
            scale: [0.1, 0.025, 0.07],
            rotation: [0, 0, -0.25],
          },
        ]),
        M.bloom,
      );
      mesh(
        group,
        merge("moth-antennae", [
          stalkPiece([-0.03, 0.9, 0], [-0.13, 1.05, 0.06], 0.009),
          stalkPiece([0.03, 0.9, 0], [0.13, 1.05, 0.06], 0.009),
        ]),
        M.wingDark,
      );
      group.userData.animation = { type: "moth", hover: 0.15, frequency: 1.7 };
      break;
    }
    case "survey-monolith": {
      mesh(group, cylinder(6), M.caveDark, [0, 0.18, 0], [0.78, 0.36, 0.7]);
      mesh(group, taper(), M.ceramicDark, [0, 1.6, 0], [0.39, 2.8, 0.3]);
      mesh(group, box(), M.ceramic, [0, 1.55, 0.28], [0.4, 2.25, 0.07]);
      mesh(group, box(), M.cyan, [0, 1.7, 0.33], [0.035, 1.25, 0.02]);
      mesh(group, ring(), M.metalLight, [0, 2.88, 0], [0.38, 0.38, 0.38]);
      mesh(group, sphere(), M.cyan, [0, 2.9, 0], [0.1, 0.1, 0.1]);
      break;
    }
    case "heartwood": {
      mesh(group, branchedRoot(), M.barkDark, [0, 0, 0], [0.68, 0.6, 0.68]);
      const ribs: Piece[] = [];
      const rib = tube(
        "heartwood-rib",
        [
          [0.1, 0.1, 0],
          [0.75, 0.65, 0],
          [0.85, 1.6, 0],
          [0.48, 2.3, 0],
          [0, 2.65, 0],
        ],
        0.095,
      );
      for (let i = 0; i < 6; i++)
        ribs.push({ geometry: rib, rotation: [0, (i * TAU) / 6, 0] });
      mesh(group, merge("heartwood-cage", ribs), M.bark);
      mesh(group, sphere(), M.heart, [0, 1.45, 0], [0.45, 0.65, 0.45]);
      mesh(group, petalRosette("heartwood-crown", 5, 0.45, 0.7, 2.45), M.pearl);
      mesh(
        group,
        ring(),
        M.bloom,
        [0, 1.45, 0],
        [0.54, 0.54, 0.54],
        [Math.PI / 2, 0, 0],
      );
      break;
    }
    case "sun-dial": {
      mesh(group, cylinder(12), M.sandstone, [0, 0.15, 0], [1.18, 0.3, 1.18]);
      mesh(group, cylinder(12), M.amberLight, [0, 0.36, 0], [1.1, 0.12, 1.1]);
      mesh(
        group,
        crystal(),
        M.amber,
        [0, 0.42, 0],
        [0.24, 2.12, 0.24],
        [0, 0.2, -0.22],
      );
      mesh(
        group,
        ring(),
        M.heart,
        [0, 1.35, 0],
        [0.72, 0.72, 0.72],
        [0.2, 0, 0.3],
      );
      const markers: Piece[] = [];
      for (let i = 0; i < 12; i++)
        markers.push({
          geometry: box(),
          position: [
            Math.cos((i * TAU) / 12) * 0.92,
            0.44,
            Math.sin((i * TAU) / 12) * 0.92,
          ],
          scale: [0.055, 0.035, 0.12],
          rotation: [0, (-i * TAU) / 12, 0],
        });
      mesh(group, merge("sun-dial-hour-marks", markers), M.sandDark);
      break;
    }
    case "harmonic-core": {
      mesh(group, cylinder(6), M.caveDark, [0, 0.18, 0], [0.82, 0.36, 0.82]);
      mesh(group, taper(), M.ceramic, [0, 0.52, 0], [0.3, 0.7, 0.3]);
      mesh(
        group,
        geometry(
          "harmonic-octahedron",
          () => new THREE.OctahedronGeometry(0.58),
        ),
        M.cyan,
        [0, 1.65, 0],
        [1, 1.45, 1],
        [0, 0.3, 0],
      );
      mesh(
        group,
        ring(),
        M.crystalLight,
        [0, 1.65, 0],
        [1, 1, 1],
        [0.22, 0.05, 0],
      );
      mesh(
        group,
        ring(),
        M.metalLight,
        [0, 1.65, 0],
        [1.18, 1.18, 1.18],
        [Math.PI / 2, 0.35, 0],
      );
      mesh(
        group,
        ring(),
        M.crystal,
        [0, 1.65, 0],
        [0.8, 0.8, 0.8],
        [0.6, Math.PI / 2, 0.5],
      );
      group.userData.animation = {
        type: "resonance",
        frequency: 0.4,
        amplitude: 0.04,
      };
      break;
    }
    default: {
      throw new Error(`Unknown model kind: ${String(kind)}`);
    }
  }
  return finish(group, kind);
}

/** Camera-local instrument, aperture facing -Z. Attach at approximately
 * (0.34, -0.28, -0.53). Camera near plane must be <=0.05. */
export function createScanner(): THREE.Group {
  const group = new THREE.Group();
  group.name = "Vesper / Lumen field scanner";
  mesh(group, box(), M.metal, [0, 0, 0], [0.14, 0.095, 0.23]);
  mesh(group, box(), M.ceramic, [0, 0.038, 0.014], [0.142, 0.027, 0.19]);
  mesh(
    group,
    cylinder(16),
    M.metalLight,
    [0, 0, -0.14],
    [0.055, 0.053, 0.055],
    [Math.PI / 2, 0, 0],
  );
  mesh(
    group,
    cylinder(16),
    M.black,
    [0, 0, -0.169],
    [0.042, 0.006, 0.042],
    [Math.PI / 2, 0, 0],
  );
  const aperture = mesh(
    group,
    ring(),
    M.cyan,
    [0, 0, -0.176],
    [0.035, 0.035, 0.035],
  );
  aperture.name = "sensor-aperture";
  mesh(group, sphere(), M.glass, [0, 0, -0.173], [0.023, 0.023, 0.008]);
  mesh(
    group,
    box(),
    M.black,
    [0, 0.056, 0.03],
    [0.085, 0.005, 0.085],
    [0.14, 0, 0],
  );
  mesh(
    group,
    box(),
    M.cyan,
    [0, 0.06, 0.016],
    [0.047, 0.003, 0.007],
    [0.14, 0, 0],
  );
  mesh(
    group,
    box(),
    M.barkDark,
    [0.01, -0.072, 0.065],
    [0.067, 0.14, 0.06],
    [-0.18, 0, 0],
  );
  mesh(
    group,
    merge(
      "scanner-ribs",
      [-0.05, -0.027, -0.004, 0.019].map((z) => ({
        geometry: box(),
        position: [0.073, 0.005, z] as V3,
        scale: [0.004, 0.044, 0.007] as V3,
      })),
    ),
    M.black,
  );
  mesh(group, sphere(), M.bloom, [0.05, 0.053, 0.067], [0.008, 0.004, 0.008]);
  group.rotation.set(-0.07, -0.16, -0.06);
  group.userData.sharedResources = true;
  group.userData.aperture = "sensor-aperture";
  return group;
}

export function createLandingPod(): THREE.Group {
  const group = new THREE.Group();
  mesh(group, cylinder(20), M.ceramic, [0, 1.95, 0], [1.22, 2.1, 1.22]);
  mesh(group, sphere(), M.ceramic, [0, 2.96, 0], [1.22, 0.74, 1.22]);
  mesh(group, cylinder(20), M.metal, [0, 0.92, 0], [1.22, 0.23, 1.22]);
  mesh(group, cylinder(20), M.metalLight, [0, 3.08, 0], [1.13, 0.055, 1.13]);
  mesh(group, box(), M.metal, [0, 1.8, 1.18], [0.75, 1.75, 0.12]);
  mesh(group, box(), M.ceramicDark, [0, 1.83, 1.26], [0.64, 1.56, 0.025]);
  mesh(group, box(), M.glass, [0, 2.35, 1.29], [0.46, 0.4, 0.04]);
  mesh(group, box(), M.cyan, [0, 1.3, 1.3], [0.36, 0.035, 0.028]);
  const legs: Piece[] = [],
    shoes: Piece[] = [],
    panels: Piece[] = [];
  for (let i = 0; i < 4; i++) {
    const a = Math.PI / 4 + (i * Math.PI) / 2,
      x = Math.cos(a),
      z = Math.sin(a);
    legs.push(
      stalkPiece([x * 0.97, 1.26, z * 0.97], [x * 1.93, 0.23, z * 1.93], 0.1),
    );
    shoes.push({
      geometry: cylinder(8),
      position: [x * 1.93, 0.11, z * 1.93],
      scale: [0.32, 0.22, 0.32],
    });
    panels.push({
      geometry: box(),
      position: [x * 1.21, 2.0, z * 1.21],
      scale: [0.28, 0.9, 0.07],
      rotation: [0, a, 0],
    });
  }
  mesh(group, merge("pod-outriggers", legs), M.metalLight);
  mesh(group, merge("pod-landing-shoes", shoes), M.metal);
  mesh(group, merge("pod-exterior-panels", panels), M.metal);
  mesh(group, cylinder(8), M.metalLight, [0, 3.83, 0], [0.035, 0.45, 0.035]);
  const beacon = mesh(
    group,
    sphere(),
    M.bloom,
    [0, 4.1, 0],
    [0.095, 0.13, 0.095],
  );
  beacon.name = "beacon";
  mesh(group, box(), M.metal, [0, 0.35, 1.46], [0.9, 0.13, 0.7]);
  mesh(group, box(), M.metalLight, [0, 0.58, 1.25], [0.82, 0.13, 0.45]);
  return finish(group, "landing-pod");
}
