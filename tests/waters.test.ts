import test from "node:test";
import assert from "node:assert/strict";
import { baseHeightAt, generateLegacyChunk } from "../src/systems/terrain";
import { generateChunk } from "../src/systems/worldgen";
import {
  waterAt,
  waterFieldAt,
  carveHeightAt,
  getHomeLake,
  riverCentreAt,
  getWaterBodies,
  findDryBank,
} from "../src/systems/waters";

// These checks verify the shared field used by terrain, rendering, movement and fauna.
test("home lakes regenerate with real positive water depth and gently sloped edges", () => {
  for (let i = 0; i < 20; i++) {
    const seed = `shore-${i}`,
      lake = getHomeLake(seed),
      water = waterAt(seed, lake.x, lake.z)!;
    assert.deepEqual(lake, getHomeLake(seed));
    assert.ok(
      water && water.kind === "lake" && water.depth > 1.5 && water.depth <= 3,
    );
    assert.equal(
      water.level - carveHeightAt(seed, lake.x, lake.z),
      water.depth,
    );
    let shallow = false,
      dry = false;
    for (let distance = 0; distance < lake.radiusX + 12; distance += 0.2) {
      const x = lake.x - distance,
        z = lake.z;
      const value = waterAt(seed, x, z);
      if (value && value.depth < 0.2) shallow = true;
      if (!value) dry = true;
      assert.ok(
        Math.abs(
          carveHeightAt(seed, x, z) - carveHeightAt(seed, x + 0.001, z),
        ) < 0.01,
      );
    }
    assert.ok(
      shallow && dry,
      "every shore must transition through shallow water to dry ground",
    );
  }
});

test("rivers remain continuously wet across chunk seams and preserved investigation routes", () => {
  for (let i = 0; i < 30; i++) {
    const seed = `water-${i}`,
      lake = getHomeLake(seed);
    for (let x = lake.x + 24; x < lake.x + 410; x += 2) {
      const point = riverCentreAt(seed, x),
        water = waterAt(seed, point.x, point.z)!;
      assert.ok(water, `${seed} river gap at ${x}`);
      assert.ok(water.depth > 0.1 && water.depth <= 3);
      assert.ok(Math.abs(Math.hypot(water.flow.x, water.flow.z) - 1) < 0.00001);
      assert.ok(
        Math.abs(
          carveHeightAt(seed, x - 0.001, point.z) -
            carveHeightAt(seed, x + 0.001, point.z),
        ) < 0.015,
      );
      assert.deepEqual(water, waterAt(seed, point.x, point.z));
    }
    for (
      let seam = Math.ceil((lake.x + 24) / 64) * 64;
      seam < lake.x + 410;
      seam += 64
    ) {
      const point = riverCentreAt(seed, seam);
      assert.ok(
        waterAt(seed, seam - 0.001, point.z) &&
          waterAt(seed, seam + 0.001, point.z),
      );
    }
  }
});

test("onboarding terrain and complete original investigation areas stay dry", () => {
  for (const seed of ["VESPER-01", "one", "water-41", "journey-4"]) {
    for (let x = -14; x <= 14; x += 7)
      for (let z = -55; z <= 0; z += 5) {
        assert.equal(waterAt(seed, x, z), null);
        assert.equal(carveHeightAt(seed, x, z), baseHeightAt(seed, x, z));
      }
    for (let cx = -3; cx <= 3; cx++)
      for (let cz = -3; cz <= 3; cz++) {
        for (const site of generateLegacyChunk(seed, cx, cz).sites)
          for (let angle = 0; angle < Math.PI * 2; angle += Math.PI / 4)
            for (const radius of [0, 8, 14]) {
              const x = site.x + Math.cos(angle) * radius,
                z = site.z + Math.sin(angle) * radius;
              assert.equal(waterAt(seed, x, z), null);
              assert.equal(carveHeightAt(seed, x, z), baseHeightAt(seed, x, z));
            }
      }
  }
});

test("regional lakes and oasis pools are seeded, bounded and independent of chunk load order", () => {
  const seed = "regional-waters",
    lakes = getWaterBodies(seed, 0, 0, 950).filter(
      (l) => !l.id.endsWith(":firstlight"),
    );
  assert.ok(lakes.length > 10);
  assert.ok(lakes.some((l) => l.name === "Saffron Oasis"));
  assert.ok(lakes.some((l) => l.name === "Opal Pool"));
  for (const lake of lakes.slice(0, 24)) {
    const sample = waterAt(seed, lake.x, lake.z)!;
    assert.ok(sample && sample.id === lake.id && sample.depth > 1);
    assert.deepEqual(sample, waterAt(seed, lake.x, lake.z));
    assert.equal(
      sample.depth,
      sample.level - carveHeightAt(seed, lake.x, lake.z),
    );
    assert.equal(
      waterFieldAt(seed, lake.x + lake.radiusX + 20, lake.z)?.id === lake.id,
      false,
    );
  }
});

test("land subjects can be rescued to a nearby dry bank without changing their anchor", () => {
  for (const seed of ["VESPER-01", "one", "journey-4"]) {
    const lake = getHomeLake(seed),
      position = { x: lake.x, z: lake.z };
    const bank = findDryBank(seed, position.x, position.z)!;
    assert.ok(bank);
    assert.deepEqual(position, { x: lake.x, z: lake.z });
    assert.equal(waterAt(seed, bank.x, bank.z), null);
    assert.ok((waterFieldAt(seed, bank.x, bank.z)?.mask ?? -8) <= -2);
    assert.ok(Math.hypot(bank.x - position.x, bank.z - position.z) <= 48);
    for (const [dx, dz] of [
      [1.5, 0],
      [-1.5, 0],
      [0, 1.5],
      [0, -1.5],
    ])
      assert.equal(waterAt(seed, bank.x + dx, bank.z + dz), null);
  }
});

test("an enclosed original outlet retries from inside the lake without breaking its river", () => {
  const seed = "aquatic-audit-17",
    lake = getHomeLake(seed);
  assert.doesNotThrow(() => generateChunk(seed, 0, 0));
  for (let x = lake.x + 24; x < lake.x + 410; x += 1) {
    const point = riverCentreAt(seed, x),
      water = waterAt(seed, x, point.z);
    assert.ok(
      water && water.depth > 0.1,
      `previously blocked outlet gap at ${x}`,
    );
  }
  assert.equal(riverCentreAt("VESPER-01", 145).z, 48.28125);
});

test("custom seed rivers either remain connected or safely omit an obstructed outlet", () => {
  const seeds = [
    ...Array.from({ length: 200 }, (_, i) => `aquatic-audit-${i}`),
    ...[204, 289, 314, 333, 1040, 2692, 4223].map((i) => `aquatic-audit-${i}`),
  ];
  for (const seed of seeds) {
    const lake = getHomeLake(seed);
    assert.ok(
      waterAt(seed, lake.x, lake.z)?.depth! > 1.5,
      `${seed} must retain its lake`,
    );
    let samples = 0,
      wet = 0;
    for (let x = lake.x + 32; x < lake.x + 410; x += 2) {
      const point = riverCentreAt(seed, x),
        water = waterAt(seed, x, point.z);
      assert.ok(Number.isFinite(point.z) && Number.isFinite(point.level));
      samples++;
      if (water) wet++;
    }
    assert.ok(
      wet === 0 || wet === samples,
      `${seed}: partial river (${wet}/${samples})`,
    );
  }
  for (const seed of ["aquatic-audit-1040", "aquatic-audit-2692"]) {
    assert.doesNotThrow(() => generateChunk(seed, 0, 0));
    assert.ok(
      getWaterBodies(seed, 650, 650, 200).length > 0,
      "regional water remains available",
    );
  }
});
