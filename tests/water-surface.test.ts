import test from "node:test";
import assert from "node:assert/strict";
import * as THREE from "three";
import { createWaterSurface, updateWaterMaterial } from "../src/water-surface";
import { waterAt } from "../src/systems/waters";

const seed = "VESPER-01";
function nearbySurfaces() {
  const result: THREE.Mesh[] = [];
  for (let x = -2; x <= 2; x++)
    for (let z = -2; z <= 2; z++) {
      const surface = createWaterSurface(seed, x, z);
      if (surface) result.push(surface);
    }
  return result;
}

test("water meshes clip to real banks, retain upward winding and finite depth/flow attributes", () => {
  const surfaces = nearbySurfaces();
  assert.ok(
    surfaces.length >= 2,
    "the landing region has connected bodies of water",
  );
  let clippedVertices = 0;
  const a = new THREE.Vector3(),
    b = new THREE.Vector3(),
    c = new THREE.Vector3();
  for (const surface of surfaces) {
    const p = surface.geometry.getAttribute("position");
    const depth = surface.geometry.getAttribute("waterDepth");
    const flow = surface.geometry.getAttribute("waterFlow");
    assert.equal(depth.count, p.count);
    assert.equal(flow.count, p.count);
    assert.ok(
      p.count / 3 <= 4096,
      "single-chunk water triangles remain lightweight",
    );
    for (let i = 0; i < p.count; i++) {
      const x = p.getX(i),
        y = p.getY(i),
        z = p.getZ(i);
      assert.ok(Number.isFinite(x) && Number.isFinite(y) && Number.isFinite(z));
      const sample = waterAt(seed, x, z);
      assert.ok(
        sample && sample.depth >= 0.024,
        "no vertex is placed over dry ground",
      );
      assert.ok(
        Math.abs(y - sample.level - 0.012) < 0.00002,
        "surface follows the water field",
      );
      assert.ok(
        Number.isFinite(depth.getX(i)) &&
          Number.isFinite(flow.getX(i)) &&
          Number.isFinite(flow.getY(i)),
      );
      if (
        Math.abs(x / 2 - Math.round(x / 2)) > 0.0001 ||
        Math.abs(z / 2 - Math.round(z / 2)) > 0.0001
      )
        clippedVertices++;
    }
    for (let i = 0; i < p.count; i += 3) {
      a.fromBufferAttribute(p, i);
      b.fromBufferAttribute(p, i + 1);
      c.fromBufferAttribute(p, i + 2);
      assert.ok(
        b.sub(a).cross(c.sub(a)).y > 0,
        "visible top faces point upward",
      );
    }
    surface.geometry.dispose();
  }
  assert.ok(
    clippedVertices > 20,
    "shorelines are interpolated rather than square-cell boundaries",
  );
});

test("water surface levels and clipped bank vertices match across chunk seams", () => {
  const surfaces = new Map<string, THREE.Mesh>();
  for (let x = -2; x <= 2; x++)
    for (let z = -2; z <= 2; z++) {
      const surface = createWaterSurface(seed, x, z);
      if (surface) surfaces.set(`${x},${z}`, surface);
    }
  let matchedSeams = 0;
  for (const [key, surface] of surfaces) {
    const [x, z] = key.split(",").map(Number);
    for (const [neighborKey, axis, boundary] of [
      [`${x + 1},${z}`, "x", (x + 1) * 64],
      [`${x},${z + 1}`, "z", (z + 1) * 64],
    ] as const) {
      const neighbor = surfaces.get(neighborKey);
      if (!neighbor) continue;
      const edge = (mesh: THREE.Mesh) => {
        const positions = mesh.geometry.getAttribute("position"),
          points = new Set<string>();
        for (let i = 0; i < positions.count; i++) {
          const perpendicular =
            axis === "x" ? positions.getX(i) : positions.getZ(i);
          if (Math.abs(perpendicular - boundary) > 0.000001) continue;
          const along = axis === "x" ? positions.getZ(i) : positions.getX(i);
          points.add(`${along.toFixed(5)}:${positions.getY(i).toFixed(5)}`);
        }
        return points;
      };
      const left = edge(surface),
        right = edge(neighbor);
      if (!left.size && !right.size) continue;
      assert.deepEqual(
        left,
        right,
        `continuous bank and water level at ${key} → ${neighborKey}`,
      );
      matchedSeams++;
    }
  }
  assert.ok(
    matchedSeams > 0,
    "at least one real lake/river crosses a loaded chunk boundary",
  );
  for (const surface of surfaces.values()) surface.geometry.dispose();
});

test("chunks share fish-visible water material and reduced motion freezes its shader clock", () => {
  const surfaces = nearbySurfaces();
  assert.ok(surfaces.length >= 2);
  const material = surfaces[0].material as THREE.MeshStandardMaterial;
  for (const surface of surfaces) assert.equal(surface.material, material);
  assert.equal(material.transparent, true);
  assert.equal(material.depthWrite, false);
  assert.ok(material.opacity >= 0.45 && material.opacity <= 0.6);
  updateWaterMaterial(material, 12.5, false);
  assert.equal(material.userData.waterTime.value, 12.5);
  updateWaterMaterial(material, 24, true);
  assert.equal(material.userData.waterTime.value, 0);
  updateWaterMaterial(material, 24, false);
  assert.equal(material.userData.waterTime.value, 24);
  for (const surface of surfaces) surface.geometry.dispose();
});
