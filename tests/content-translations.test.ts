import test from "node:test";
import assert from "node:assert/strict";
import { SPECIES, BIOMES, HABITATS } from "../src/data";
import { CONTENT_ZH } from "../src/content-translations";
import { ITEMS, RECIPES, FIELD_NODE_NAMES } from "../src/field-data";
import { generateChunk, getRegionName } from "../src/systems/worldgen";
import { getHomeLake, getWaterBodies } from "../src/systems/waters";

function translated(text: string) {
  const result = CONTENT_ZH[text];
  assert.equal(typeof result, "string", `Missing Chinese copy: ${text}`);
  assert.ok(result.trim().length > 0, text);
  assert.match(result, /[\u4e00-\u9fff]/u, text);
  assert.notEqual(result, text);
}

test("all 60 specimens have Chinese names, subtitles, descriptions and field insights", () => {
  assert.equal(SPECIES.length, 60);
  const names = new Set<string>();
  for (const species of SPECIES) {
    for (const field of ["name", "subtitle", "description", "insight"] as const)
      translated(species[field]);
    const name = CONTENT_ZH[species.name];
    assert.equal(
      names.has(name),
      false,
      `Two species share the Chinese name ${name}`,
    );
    names.add(name);
  }
});
test("biomes, habitats, supply items, recipes and interaction target names all have Chinese content", () => {
  for (const biome of Object.values(BIOMES)) {
    for (const field of ["name", "subtitle", "hint"] as const)
      translated(biome[field]);
  }
  for (const habitat of Object.values(HABITATS)) {
    translated(habitat.name);
    translated(habitat.description);
  }
  for (const item of Object.values(ITEMS)) {
    translated(item.name);
    translated(item.description);
  }
  for (const recipe of Object.values(RECIPES)) {
    translated(recipe.name);
    translated(recipe.description);
  }
  for (const name of Object.values(FIELD_NODE_NAMES)) translated(name);
});
test("procedural regions, investigation names and water habitats resolve without changing source world data", () => {
  for (const seed of ["VESPER-01", "中文探索", "locale-audit"]) {
    translated(getHomeLake(seed).name);
    for (const [cx, cz] of [
      [0, -1],
      [0, 0],
      [-2, 1],
      [2, 0],
      [0, 2],
      [7, -8],
      [-17, 12],
    ]) {
      const chunk = generateChunk(seed, cx, cz),
        original = JSON.stringify(chunk);
      translated(getRegionName(seed, cx * 64 + 10, cz * 64 + 10));
      for (const site of chunk.sites) {
        translated(site.name);
        translated(site.hint);
      }
      for (const water of getWaterBodies(seed, cx * 64 + 10, cz * 64 + 10, 128))
        translated(water.name);
      assert.equal(JSON.stringify(chunk), original);
    }
  }
});
test("touch controls and fieldcraft failures have human-readable Chinese copy", () => {
  for (const text of [
    "Touch exploration controls",
    "Movement joystick",
    "MOVE",
    "Scan",
    "hold",
    "Hold to scan",
    "Use nearby item",
    "Use",
    "Jump",
    "Pulse",
    "Run",
    "Bag",
    "Map",
    "Pause",
    "Swipe the world to look",
    "Repair needs 2 salvaged alloy and 1 conductive crystal.",
    "Backpack full. Make room before packing the beacon.",
    "There are none in your backpack.",
    "Already collected.",
  ])
    translated(text);
});
