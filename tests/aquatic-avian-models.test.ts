import test from "node:test";
import assert from "node:assert/strict";
import * as THREE from "three";
import {
  AQUATIC_AVIAN_BOUNDS,
  createAquaticAvianModel,
} from "../src/aquatic-avian-models";
import { geometryCache, materialCache } from "../src/model-kit";
import type { ModelKind } from "../src/types";

const kinds = Object.keys(AQUATIC_AVIAN_BOUNDS) as ModelKind[];
const birds = ["canopy-swift", "suncrest-bird", "reed-heron"] as ModelKind[];
const fish = ["ribbon-fish", "glass-koi", "lantern-eel"] as ModelKind[];

function signedVolume(g: THREE.BufferGeometry): number {
  const vertices = g.getAttribute("position"),
    index = g.getIndex();
  const count = index?.count ?? vertices.count;
  const a = new THREE.Vector3(),
    b = new THREE.Vector3(),
    c = new THREE.Vector3();
  let volume = 0;
  for (let i = 0; i < count; i += 3) {
    a.fromBufferAttribute(vertices, index ? index.getX(i) : i);
    b.fromBufferAttribute(vertices, index ? index.getX(i + 1) : i + 1);
    c.fromBufferAttribute(vertices, index ? index.getX(i + 2) : i + 2);
    volume += a.dot(b.cross(c)) / 6;
  }
  return volume;
}

test("six avian/aquatic sculptures have finite, shared geometry and conservative ground-normalized bounds", () => {
  assert.equal(kinds.length, 6);
  const vertex = new THREE.Vector3();
  for (const kind of kinds)
    for (let seed = 0; seed < 8; seed++) {
      const model = createAquaticAvianModel(kind, seed)!;
      assert.equal(model.userData.modelKind, kind);
      assert.equal(model.userData.sharedResources, true);
      assert.ok(model.children.length >= 6 && model.children.length <= 12);
      const box = new THREE.Box3().setFromObject(model);
      assert.ok(Math.abs(box.min.y) < 0.00001);
      assert.ok(box.max.y <= AQUATIC_AVIAN_BOUNDS[kind]!.height);
      for (const part of model.children) {
        assert.ok(part instanceof THREE.Mesh);
        const positions = (part as THREE.Mesh).geometry.getAttribute(
          "position",
        );
        const normals = (part as THREE.Mesh).geometry.getAttribute("normal");
        assert.equal(positions.count, normals.count);
        for (let i = 0; i < positions.count; i++) {
          vertex
            .fromBufferAttribute(positions, i)
            .applyMatrix4(part.matrixWorld);
          assert.ok(vertex.toArray().every(Number.isFinite));
          assert.ok(
            Math.hypot(vertex.x, vertex.z) <=
              AQUATIC_AVIAN_BOUNDS[kind]!.radius + 0.00001,
            `${kind} exceeds declared radius`,
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
      assert.ok(
        new THREE.Box3().setFromObject(model.getObjectByName("eyes")!).max.z <
          0,
        `${kind} faces -Z`,
      );
    }
});

test("birds expose articulated feathered wings and distinct swift, crest and heron anatomy", () => {
  for (const kind of birds) {
    const model = createAquaticAvianModel(kind, 4)!;
    assert.equal(model.userData.animation.type, "bird");
    assert.ok(model.userData.animation.hoverHeight >= 2);
    assert.ok(model.getObjectByName("head") && model.getObjectByName("tail"));
    for (const name of ["wing-left", "wing-right"]) {
      const wing = model.getObjectByName(name) as THREE.Mesh;
      assert.ok(
        wing.geometry.getAttribute("position").count > 4000,
        "wings contain actual overlapping primary feathers",
      );
      assert.ok(
        signedVolume(wing.geometry) > 0,
        "feather topology is outward-facing closed volume",
      );
    }
  }
  const swift = createAquaticAvianModel("canopy-swift", 0)!;
  assert.ok(
    new THREE.Box3()
      .setFromObject(swift.getObjectByName("tail")!)
      .getSize(new THREE.Vector3()).x > 0.2,
  );
  assert.ok(
    createAquaticAvianModel("suncrest-bird", 0)!.getObjectByName("crest"),
  );
  const heron = createAquaticAvianModel("reed-heron", 0)!;
  assert.ok(
    heron.getObjectByName("neck") &&
      heron.getObjectByName("leg-0") &&
      heron.getObjectByName("leg-1"),
  );
  assert.ok(
    new THREE.Box3().setFromObject(heron).getSize(new THREE.Vector3()).x > 2.7,
  );
});

test("fish carry underwater placement hints and correctly centered bodies, fins, tails and luminous eel nodes", () => {
  for (const kind of fish) {
    const model = createAquaticAvianModel(kind, 3)!;
    const animation = model.userData.animation;
    assert.equal(animation.type, "swim");
    assert.ok(animation.swimDepth > 0 && animation.bodyCenterY > 0);
    assert.ok(
      animation.speed > 0 && animation.radius > 0 && animation.amplitude > 0,
    );
    assert.ok(
      model.getObjectByName("tail") && model.getObjectByName("dorsal-fin"),
    );
    model.position.y = -animation.swimDepth - animation.bodyCenterY;
    model.updateMatrixWorld(true);
    const centre = new THREE.Box3()
      .setFromObject(model.getObjectByName("body")!)
      .getCenter(new THREE.Vector3());
    assert.ok(Math.abs(centre.y + animation.swimDepth) < 0.00001);
    assert.ok(
      new THREE.Box3().setFromObject(model).max.y < 0,
      `${kind} remains entirely underwater at its preferred depth`,
    );
  }
  const koi = createAquaticAvianModel("glass-koi", 0)!;
  assert.ok(
    koi.getObjectByName("barbels") &&
      koi.getObjectByName("fin-left") &&
      koi.getObjectByName("fin-right"),
  );
  const eel = createAquaticAvianModel("lantern-eel", 0)!;
  const nodes = eel.getObjectByName("lantern-nodes") as THREE.Mesh;
  assert.ok(
    (nodes.material as THREE.MeshStandardMaterial).emissiveIntensity > 0.5,
  );
});

test("eel spine is a closed, tapered volume with outward topology", () => {
  const model = createAquaticAvianModel("lantern-eel", 0)!;
  const body = model.getObjectByName("body") as THREE.Mesh;
  const g = body.geometry,
    index = g.getIndex()!;
  const edges = new Map<string, number>();
  for (let i = 0; i < index.count; i += 3) {
    const t = [index.getX(i), index.getX(i + 1), index.getX(i + 2)];
    for (let j = 0; j < 3; j++) {
      const a = t[j],
        b = t[(j + 1) % 3],
        key = a < b ? `${a}:${b}` : `${b}:${a}`;
      edges.set(key, (edges.get(key) ?? 0) + 1);
    }
  }
  assert.ok([...edges.values()].every((count) => count === 2));
  assert.ok(signedVolume(g) > 0);
  const p = g.getAttribute("position"),
    start = new THREE.Vector3(),
    end = new THREE.Vector3();
  start
    .fromBufferAttribute(p, 0)
    .sub(new THREE.Vector3().fromBufferAttribute(p, 5));
  end
    .fromBufferAttribute(p, 280)
    .sub(new THREE.Vector3().fromBufferAttribute(p, 285));
  assert.ok(start.length() > end.length() * 4, "body narrows toward the tail");
});

test("additional model instances and seed variants reuse cached GPU resources", () => {
  for (const kind of kinds)
    for (let seed = 0; seed < 6; seed++) createAquaticAvianModel(kind, seed);
  const counts = [geometryCache.size, materialCache.size];
  for (const kind of kinds)
    for (let seed = 1000; seed < 1030; seed++)
      createAquaticAvianModel(kind, seed);
  assert.deepEqual([geometryCache.size, materialCache.size], counts);
  assert.equal(createAquaticAvianModel("fan-fern", 0), null);
});
