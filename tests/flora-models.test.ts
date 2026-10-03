import test from "node:test";
import assert from "node:assert/strict";
import * as THREE from "three";
import type { ModelKind } from "../src/types";
import { createFloraModel, FLORA_BOUNDS } from "../src/flora-models";

const kinds = Object.keys(FLORA_BOUNDS) as ModelKind[];
const trees = new Set([
  "spire-pine",
  "silver-birch",
  "veil-willow",
  "coral-tree",
  "baobab-tree",
  "spiral-tree",
  "tree-fern",
  "fan-palm",
]);
function triangles(group: THREE.Group): number {
  return group.children.reduce((total, child) => {
    const mesh = child as THREE.Mesh;
    return (
      total +
      (mesh.geometry.index?.count ??
        mesh.geometry.getAttribute("position").count) /
        3
    );
  }, 0);
}

test("all27 original flora models have finite normalized geometry and conservative bounds", () => {
  assert.equal(kinds.length, 27);
  const p = new THREE.Vector3();
  for (const kind of kinds)
    for (let variant = 0; variant < 3; variant++) {
      const group = createFloraModel(kind, variant)!;
      const envelope = FLORA_BOUNDS[kind]!;
      const bounds = new THREE.Box3().setFromObject(group);
      assert.ok(Math.abs(bounds.min.y) < 0.00001, `${kind}: ground origin`);
      assert.ok(bounds.max.y <= envelope.height, `${kind}: height envelope`);
      assert.ok(
        group.children.length >= 2 && group.children.length <= 4,
        `${kind}: material batching`,
      );
      for (const child of group.children) {
        assert.ok(
          child instanceof THREE.Mesh,
          `${kind}: directly instanceable mesh`,
        );
        const positions = child.geometry.getAttribute("position");
        const normals = child.geometry.getAttribute("normal");
        assert.equal(positions.count, normals.count);
        assert.ok(child.geometry.boundingBox && child.geometry.boundingSphere);
        for (let i = 0; i < positions.count; i++) {
          p.set(
            positions.getX(i),
            positions.getY(i),
            positions.getZ(i),
          ).applyMatrix4(child.matrixWorld);
          assert.ok(
            Number.isFinite(p.x) &&
              Number.isFinite(p.y) &&
              Number.isFinite(p.z),
            `${kind}: finite vertex`,
          );
          assert.ok(
            Math.hypot(p.x, p.z) <= envelope.radius + 0.00001,
            `${kind}: radius envelope`,
          );
          assert.ok(
            Number.isFinite(normals.getX(i)) &&
              Number.isFinite(normals.getY(i)) &&
              Number.isFinite(normals.getZ(i)),
            `${kind}: finite normal`,
          );
        }
      }
    }
});

test("abundant flora respects its GPU triangle budget", () => {
  for (const kind of kinds)
    for (let variant = 0; variant < 3; variant++) {
      const count = triangles(createFloraModel(kind, variant)!);
      const budget =
        kind === "grass-tuft"
          ? 150
          : kind === "flower-carpet"
            ? 900
            : trees.has(kind)
              ? 4500
              : 1800;
      assert.ok(
        count <= budget,
        `${kind} uses ${count} triangles; budget ${budget}`,
      );
    }
});

test("placements reuse at most three sculpted geometry variants per flora kind", () => {
  for (const kind of kinds) {
    const a = createFloraModel(kind, 1)!;
    const same = createFloraModel(kind, 301)!;
    assert.notEqual(a, same);
    assert.equal(a.children.length, same.children.length);
    a.children.forEach((child, i) => {
      assert.equal(
        (child as THREE.Mesh).geometry,
        (same.children[i] as THREE.Mesh).geometry,
        `${kind}: shared geometry`,
      );
      assert.equal(
        (child as THREE.Mesh).material,
        (same.children[i] as THREE.Mesh).material,
        `${kind}: shared material`,
      );
    });
    const geometrySets = new Set<string>();
    for (let seed = -10; seed < 90; seed++)
      geometrySets.add(
        createFloraModel(kind, seed)!
          .children.map((child) => (child as THREE.Mesh).geometry.uuid)
          .join(","),
      );
    assert.equal(geometrySets.size, 3);
  }
  assert.equal(createFloraModel("moth", 0), null);
});

test("closed groundcover leaves face outward so lighting and backface culling remain correct", () => {
  const a = new THREE.Vector3(),
    b = new THREE.Vector3(),
    c = new THREE.Vector3();
  for (const kind of ["grass-tuft", "starflower"] as ModelKind[]) {
    const group = createFloraModel(kind, 0)!;
    for (const child of group.children) {
      const positions = (child as THREE.Mesh).geometry.getAttribute("position");
      let signedVolume = 0;
      for (let i = 0; i < positions.count; i += 3) {
        a.fromBufferAttribute(positions, i);
        b.fromBufferAttribute(positions, i + 1);
        c.fromBufferAttribute(positions, i + 2);
        signedVolume += a.dot(b.cross(c)) / 6;
      }
      assert.ok(signedVolume > 0, `${kind}: outward leaf face winding`);
    }
  }
});
