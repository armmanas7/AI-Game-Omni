import * as THREE from "three";
import {
  box,
  cone,
  crystal,
  cylinder,
  facet,
  finish,
  material,
  merge,
  mesh,
  ring,
  sphere,
  stalkPiece,
  type Piece,
} from "./model-kit";

export const FIELD_MODEL_KINDS = [
  "field-cache",
  "field-resin",
  "field-crystal",
  "field-probe",
  "field-beacon",
] as const;
export type FieldModelKind = (typeof FIELD_MODEL_KINDS)[number];
export const FIELD_MODEL_BOUNDS: Record<
  FieldModelKind,
  { radius: number; height: number }
> = {
  "field-cache": { radius: 0.85, height: 1.0 },
  "field-resin": { radius: 0.7, height: 1.8 },
  "field-crystal": { radius: 0.8, height: 1.3 },
  "field-probe": { radius: 0.85, height: 2.2 },
  "field-beacon": { radius: 0.85, height: 2.4 },
};
const metal = material("#374e51", 0.5, 0.45);
const shell = material("#ddd9c0", 0.73, 0.14);
const amber = material("#e7b16b", 0.3, 0.12, "#f7b86e", 0.22);
const resinBark = material("#705947", 0.95);
const resin = material("#e6a85b", 0.23, 0.16, "#efa958", 0.2);
const charged = material("#8acfd9", 0.3, 0.24, "#7dc2d6", 0.2);
export const FIELD_ACTIVE_MATERIAL = material(
  "#a9e5cf",
  0.28,
  0.1,
  "#7adbbb",
  0.62,
);
const stone = material("#596970", 0.93);

/** Five original, low-poly tool sculptures. GPU resources are library-owned. */
export function createFieldModel(kind: FieldModelKind, _seed = 0): THREE.Group {
  const group = new THREE.Group();
  switch (kind) {
    case "field-cache": {
      mesh(group, box(), metal, [0, 0.34, 0], [1.25, 0.63, 0.9]);
      mesh(
        group,
        merge("field-cache-shell", [
          {
            geometry: box(),
            position: [0, 0.75, 0],
            scale: [1.29, 0.15, 0.94],
          },
          {
            geometry: box(),
            position: [-0.51, 0.4, 0],
            scale: [0.09, 0.65, 0.94],
          },
          {
            geometry: box(),
            position: [0.51, 0.4, 0],
            scale: [0.09, 0.65, 0.94],
          },
        ]),
        shell,
      );
      mesh(
        group,
        merge("field-cache-hardware", [
          {
            geometry: box(),
            position: [0, 0.66, -0.48],
            scale: [0.27, 0.24, 0.055],
          },
          {
            geometry: ring(),
            position: [0, 0.88, 0],
            scale: [0.17, 0.085, 0.085],
          },
        ]),
        metal,
      );
      const light = mesh(
        group,
        box(),
        amber,
        [0, 0.34, -0.48],
        [0.65, 0.06, 0.035],
      );
      light.name = "indicator";
      break;
    }
    case "field-resin": {
      mesh(
        group,
        merge("field-resin-stems", [
          stalkPiece([0, 0.1, 0], [0.07, 1.3, 0.03], 0.13),
          stalkPiece([0.02, 0.62, 0], [-0.3, 1.02, 0.13], 0.09),
          stalkPiece([0.04, 0.8, 0], [0.35, 1.5, -0.12], 0.08),
        ]),
        resinBark,
      );
      mesh(
        group,
        merge("field-resin-nodules", [
          {
            geometry: sphere(),
            position: [-0.24, 0.94, 0.14],
            scale: [0.23, 0.32, 0.22],
          },
          {
            geometry: sphere(),
            position: [0.13, 0.6, -0.07],
            scale: [0.23, 0.28, 0.19],
          },
          {
            geometry: sphere(),
            position: [0.34, 1.42, -0.1],
            scale: [0.2, 0.26, 0.2],
          },
        ]),
        resin,
      );
      mesh(group, facet(), stone, [0, 0.05, 0], [0.49, 0.13, 0.37]);
      break;
    }
    case "field-crystal": {
      mesh(group, facet(), stone, [0, 0.12, 0], [0.67, 0.24, 0.5]);
      mesh(
        group,
        merge("field-conductive-cluster", [
          {
            geometry: crystal(),
            position: [-0.25, 0.13, 0.05],
            scale: [0.2, 0.8, 0.2],
            rotation: [0, 0, 0.2],
          },
          {
            geometry: crystal(),
            position: [0.11, 0.11, 0],
            scale: [0.26, 1.02, 0.26],
          },
          {
            geometry: crystal(),
            position: [0.32, 0.1, 0.07],
            scale: [0.15, 0.52, 0.15],
            rotation: [0, 0, -0.27],
          },
        ]),
        charged,
      );
      mesh(
        group,
        ring(),
        metal,
        [0.11, 0.48, 0],
        [0.28, 0.28, 0.28],
        [Math.PI / 2, 0, 0],
      );
      break;
    }
    case "field-probe": {
      const supports: Piece[] = [];
      for (let i = 0; i < 3; i++) {
        const angle = (i * Math.PI * 2) / 3;
        supports.push(
          stalkPiece(
            [0, 0.83, 0],
            [Math.cos(angle) * 0.66, 0.07, Math.sin(angle) * 0.66],
            0.06,
          ),
        );
      }
      supports.push(stalkPiece([0, 0.65, 0], [0, 1.38, 0], 0.08));
      mesh(group, merge("field-probe-tripod", supports), metal);
      mesh(
        group,
        box(),
        shell,
        [0, 1.47, 0],
        [0.74, 0.63, 0.4],
        [0.12, 0, -0.13],
      );
      mesh(
        group,
        merge("field-probe-antenna", [
          stalkPiece([0.13, 1.7, 0], [0.13, 2.02, 0], 0.035),
          {
            geometry: sphere(),
            position: [0.13, 2.06, 0],
            scale: [0.07, 0.07, 0.07],
          },
        ]),
        metal,
      );
      const indicator = mesh(
        group,
        cylinder(12),
        amber,
        [0, 1.49, -0.235],
        [0.21, 0.065, 0.21],
        [Math.PI / 2, 0, 0],
      );
      indicator.name = "indicator";
      break;
    }
    case "field-beacon": {
      const supports: Piece[] = [stalkPiece([0, 0.1, 0], [0, 1.8, 0], 0.075)];
      for (let i = 0; i < 3; i++) {
        const angle = (i * Math.PI * 2) / 3;
        supports.push(
          stalkPiece(
            [0, 0.57, 0],
            [Math.cos(angle) * 0.65, 0.06, Math.sin(angle) * 0.65],
            0.05,
          ),
        );
      }
      mesh(group, merge("field-beacon-supports", supports), metal);
      mesh(
        group,
        merge("field-beacon-casing", [
          {
            geometry: cylinder(10),
            position: [0, 1.04, 0],
            scale: [0.23, 0.44, 0.23],
          },
          {
            geometry: cone(),
            position: [0, 1.72, 0],
            scale: [0.29, 0.36, 0.29],
          },
        ]),
        shell,
      );
      mesh(
        group,
        merge("field-beacon-signal", [
          {
            geometry: sphere(),
            position: [0, 2.03, 0],
            scale: [0.2, 0.2, 0.2],
          },
          {
            geometry: ring(),
            position: [0, 2.03, 0],
            scale: [0.43, 0.43, 0.43],
            rotation: [Math.PI / 2, 0, 0],
          },
        ]),
        FIELD_ACTIVE_MATERIAL,
      );
      break;
    }
  }
  return finish(group, kind);
}
