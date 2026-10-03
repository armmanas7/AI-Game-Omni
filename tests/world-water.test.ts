import test from "node:test";
import assert from "node:assert/strict";
import * as THREE from "three";
import { PlanetWorld } from "../src/world";
import { ExpeditionState } from "../src/systems/state";
import { SPECIES_BY_ID } from "../src/data";
import { waterAt } from "../src/systems/waters";
import { generateLegacyChunk } from "../src/systems/terrain";

test("water additions keep original grounded research subjects accessible on dry banks without changing their identities", () => {
  const state = new ExpeditionState("VESPER-01");
  state.data.settings.quality = "balanced";
  const world = new PlanetWorld(
    new THREE.Scene(),
    state.data.seed,
    state.data.settings,
  );
  const camera = new THREE.PerspectiveCamera();
  for (let frame = 0; frame < 48; frame++)
    world.update(1 / 60, frame / 60, { x: 128, z: 32 }, camera, state.data, 30);
  let relocated = 0;
  for (const entry of world.getEntities()) {
    if (
      entry.data.role !== "specimen" ||
      SPECIES_BY_ID[entry.data.speciesId].category === "fauna"
    )
      continue;
    assert.equal(
      waterAt(
        state.data.seed,
        entry.object.position.x,
        entry.object.position.z,
      ),
      null,
      entry.data.id,
    );
    if (
      Math.hypot(
        entry.data.x - entry.object.position.x,
        entry.data.z - entry.object.position.z,
      ) > 0.1
    ) {
      relocated++;
      const original = generateLegacyChunk(
        state.data.seed,
        Math.floor(entry.data.x / 64),
        Math.floor(entry.data.z / 64),
      ).entities.find((e) => e.id === entry.data.id);
      assert.ok(original);
      assert.deepEqual(entry.data, original);
      assert.ok(
        world.getEntityPosition(entry).distanceTo(entry.object.position) < 3,
      );
    }
  }
  assert.ok(
    relocated > 0,
    "test region must exercise a flooded original anchor",
  );
  world.dispose();
});
