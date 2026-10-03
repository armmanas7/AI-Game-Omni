import test from "node:test";
import assert from "node:assert/strict";
import * as THREE from "three";
import { createFaunaModel, FAUNA_BOUNDS } from "../src/fauna-models";
import { geometryCache, materialCache } from "../src/model-kit";
import type { ModelKind } from "../src/types";

const kinds = Object.keys(FAUNA_BOUNDS) as ModelKind[];

test("nine original creatures have finite geometry, normalized ground contact and conservative bounds", () => {
  assert.equal(kinds.length, 9);
  const point = new THREE.Vector3();
  for (const kind of kinds) {
    for (let seed = 0; seed < 12; seed++) {
      const animal = createFaunaModel(kind, seed)!;
      assert.ok(animal instanceof THREE.Group);
      assert.equal(animal.userData.modelKind, kind);
      assert.equal(animal.userData.sharedResources, true);
      assert.ok(animal.children.length >= 7 && animal.children.length <= 14);
      const bounds = new THREE.Box3().setFromObject(animal);
      assert.ok(Math.abs(bounds.min.y) < 0.00001, `${kind} should rest at y=0`);
      assert.ok(
        bounds.max.y <= FAUNA_BOUNDS[kind]!.height,
        `${kind} height should fit declared bounds`,
      );
      for (const part of animal.children) {
        assert.ok(part instanceof THREE.Mesh);
        const g = (part as THREE.Mesh).geometry;
        const positions = g.getAttribute("position");
        const normals = g.getAttribute("normal");
        assert.ok(positions.count > 20 && normals.count === positions.count);
        for (let i = 0; i < positions.count; i++) {
          point
            .fromBufferAttribute(positions, i)
            .applyMatrix4(part.matrixWorld);
          assert.ok(point.toArray().every(Number.isFinite));
          assert.ok(
            Math.hypot(point.x, point.z) <=
              FAUNA_BOUNDS[kind]!.radius + 0.00001,
            `${kind} vertex exceeds radius`,
          );
          assert.ok(
            Number.isFinite(normals.getX(i)) &&
              Number.isFinite(normals.getY(i)) &&
              Number.isFinite(normals.getZ(i)),
          );
        }
        assert.deepEqual(part.userData.restPosition, part.position.toArray());
        assert.deepEqual(part.userData.restRotation, [
          part.rotation.x,
          part.rotation.y,
          part.rotation.z,
        ]);
      }
      const anim = animal.userData.animation;
      assert.ok(["walk", "hop", "crawl", "fly"].includes(anim.type));
      assert.ok(anim.speed > 0 && anim.radius > 0 && anim.amplitude > 0);
      assert.ok(anim.hoverHeight >= 0);
    }
  }
});

test("animal anatomy exposes independent hip/wing pivots, instead of generic floating primitives", () => {
  const expectedLegs: Partial<Record<ModelKind, number>> = {
    "moss-grazer": 6,
    "fern-hopper": 4,
    shellback: 4,
    "glass-stag": 4,
    "dune-runner": 2,
    "sand-beetle": 6,
    "crystal-beetle": 6,
  };
  for (const [kind, count] of Object.entries(expectedLegs)) {
    const model = createFaunaModel(kind as ModelKind, 77)!;
    assert.equal(
      model.children.filter((p) => p.name.startsWith("leg-")).length,
      count,
    );
    assert.ok(model.getObjectByName("head"));
    assert.ok(model.getObjectByName("eyes"));
    const eyesBounds = new THREE.Box3().setFromObject(
      model.getObjectByName("eyes")!,
    );
    assert.ok(eyesBounds.max.z < 0, `${kind} should face -Z`);
  }
  const stag = createFaunaModel("glass-stag", 1)!;
  assert.ok(stag.getObjectByName("antlers"));
  assert.ok(new THREE.Box3().setFromObject(stag).max.y > 3.3);
  const hopper = createFaunaModel("fern-hopper", 1)!;
  assert.equal(hopper.userData.animation.type, "hop");
  for (const kind of ["cave-ray", "sky-ray"] as ModelKind[]) {
    const ray = createFaunaModel(kind, 1)!;
    assert.ok(ray.getObjectByName("wing-left"));
    assert.ok(ray.getObjectByName("wing-right"));
    assert.ok(ray.getObjectByName("tail"));
    assert.equal(ray.userData.animation.type, "fly");
    assert.ok(ray.userData.animation.hoverHeight > 2);
  }
});

test("ray wings have closed volume, correct upper-surface normals, and mirrored anatomy", () => {
  for (const kind of ["cave-ray", "sky-ray"] as ModelKind[]) {
    const ray = createFaunaModel(kind, 23)!;
    const left = ray.getObjectByName("wing-left") as THREE.Mesh;
    const right = ray.getObjectByName("wing-right") as THREE.Mesh;
    const leftBox = new THREE.Box3().setFromObject(left);
    const rightBox = new THREE.Box3().setFromObject(right);
    assert.ok(Math.abs(leftBox.min.x + rightBox.max.x) < 0.00001);
    assert.ok(Math.abs(leftBox.max.x + rightBox.min.x) < 0.00001);
    for (const wing of [left, right]) {
      const index = wing.geometry.getIndex()!;
      const edges = new Map<string, number>();
      // The first material group is the closed wing. The second holds the
      // small dorsal markings, which follow the same animated shoulder joint.
      const wingIndexCount = wing.geometry.groups[0].count;
      assert.ok(wing.geometry.groups[1].count > 0);
      for (let i = 0; i < wingIndexCount; i += 3) {
        const triangle = [index.getX(i), index.getX(i + 1), index.getX(i + 2)];
        for (let e = 0; e < 3; e++) {
          const a = triangle[e],
            b = triangle[(e + 1) % 3];
          const key = a < b ? `${a},${b}` : `${b},${a}`;
          edges.set(key, (edges.get(key) ?? 0) + 1);
        }
      }
      assert.ok([...edges.values()].every((count) => count === 2));
      const normals = wing.geometry.getAttribute("normal");
      assert.ok(
        normals.getY(7 * 6 + 3) > 0.8,
        "upper wing normals should face upward",
      );
    }
  }
});

test("creatures reuse GPU geometry/material resources across arbitrarily many seeds", () => {
  for (const kind of kinds)
    for (let seed = 0; seed < 6; seed++) createFaunaModel(kind, seed);
  const geometryCount = geometryCache.size,
    materialCount = materialCache.size;
  for (const kind of kinds)
    for (let seed = 10000; seed < 10040; seed++) createFaunaModel(kind, seed);
  assert.equal(geometryCache.size, geometryCount);
  assert.equal(materialCache.size, materialCount);
  const first = createFaunaModel("moss-grazer", 2)!;
  const second = createFaunaModel("moss-grazer", 101)!;
  assert.notEqual(first, second);
  assert.equal(
    (first.getObjectByName("body") as THREE.Mesh).geometry,
    (second.getObjectByName("body") as THREE.Mesh).geometry,
  );
  assert.equal(createFaunaModel("fan-fern", 1), null);
});
