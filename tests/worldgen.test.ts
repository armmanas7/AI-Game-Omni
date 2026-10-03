import test from "node:test";
import assert from "node:assert/strict";
import { HABITATS, LEGACY_SPECIES, SPECIES, SPECIES_BY_ID } from "../src/data";
import { waterAt, waterFieldAt, getHomeLake } from "../src/systems/waters";
import { generateLegacyChunk } from "../src/systems/terrain";
import {
  CHUNK_SIZE,
  generateChunk,
  getBiome,
  getHabitat,
  getRegionName,
  heightAt,
} from "../src/systems/worldgen";

test("expanded catalog retains all original discoveries and adds distinct habitat ecology", () => {
  assert.equal(new Set(SPECIES.map((s) => s.id)).size, 60);
  assert.equal(LEGACY_SPECIES.length, 21);
  assert.equal(SPECIES.filter((s) => s.category === "fauna").length, 17);
  for (const biome of ["forest", "desert", "caves"]) {
    assert.equal(LEGACY_SPECIES.filter((s) => s.biome === biome).length, 7);
    assert.ok(SPECIES.filter((s) => s.biome === biome).length >= 12);
    assert.equal(
      SPECIES.filter((s) => s.biome === biome && s.rarity === "rare").length,
      1,
    );
  }
});

test("chunks regenerate deterministically, including negative world coordinates", () => {
  for (const [cx, cz] of [
    [0, -1],
    [-8, 7],
    [12, -14],
    [-3, -5],
  ]) {
    const chunk = generateChunk("First expedition", cx, cz);
    assert.deepEqual(chunk, generateChunk("First expedition", cx, cz));
    assert.equal(chunk.key, `${cx},${cz}`);
    for (const entity of chunk.entities) {
      assert.equal(Math.floor(entity.x / CHUNK_SIZE), cx);
      assert.equal(Math.floor(entity.z / CHUNK_SIZE), cz);
    }
  }
  assert.notDeepEqual(generateChunk("one", 3, 4), generateChunk("two", 3, 4));
});

test("terrain is continuous at boundaries and has a flat safe landing area", () => {
  for (const seed of ["Vesper", "other", "长旅"]) {
    for (const x of [-17, 0, 12])
      for (const z of [-5, 0, 3])
        if (Math.hypot(x, z) <= 18) assert.equal(heightAt(seed, x, z), 0);
    for (const boundary of [-128, -64, 0, 64, 128]) {
      assert.ok(
        Math.abs(
          heightAt(seed, boundary - 0.001, 97) -
            heightAt(seed, boundary + 0.001, 97),
        ) < 0.01,
      );
      assert.ok(
        Math.abs(
          heightAt(seed, -83, boundary - 0.001) -
            heightAt(seed, -83, boundary + 0.001),
        ) < 0.01,
      );
    }
    assert.ok(Math.abs(heightAt(seed, 18.001, 0)) < 0.001);
  }
});

test("all biomes are reachable within160metres for every tested seed", () => {
  for (let i = 0; i < 80; i++) {
    const seed = `journey-${i}`;
    assert.equal(getBiome(seed, 0, 0), "forest");
    assert.equal(getBiome(seed, 160, 0), "desert");
    assert.equal(getBiome(seed, 0, 160), "caves");
    assert.equal(getRegionName(seed, 0, 0), "Firstlight Grove");
  }
});

test("introductory specimen and three-clue site are guaranteed and locally reachable", () => {
  for (let i = 0; i < 10; i++) {
    const chunk = generateChunk(`onboarding-${i}`, 0, -1);
    assert.ok(
      chunk.entities.some(
        (e) => e.role === "specimen" && e.x === 0 && e.z === -7,
      ),
    );
    const site = chunk.sites[0];
    assert.deepEqual({ x: site.x, z: site.z }, { x: 0, z: -35 });
    assert.equal(site.biome, "forest");
    assert.equal(site.clueIds.length, 3);
    assert.equal(new Set(site.clueIds).size, 3);
    assert.ok(
      chunk.entities.some(
        (e) =>
          e.id === site.landmarkId &&
          e.role === "landmark" &&
          e.speciesId === site.rareSpeciesId,
      ),
    );
    for (const id of site.clueIds) {
      const clue = chunk.entities.find((e) => e.id === id)!;
      assert.equal(clue.role, "clue");
      assert.equal(clue.siteId, site.id);
      assert.ok(Math.hypot(clue.x - site.x, clue.z - site.z) >= 5);
      assert.ok(Math.hypot(clue.x - site.x, clue.z - site.z) <= 12);
    }
  }
});

test("sites and entities have globally unique stable IDs across neighboring chunks", () => {
  const ids = new Set<string>(),
    sites = new Set<string>();
  for (let x = -5; x <= 5; x++)
    for (let z = -5; z <= 5; z++) {
      const chunk = generateChunk("atlas", x, z);
      const specimens = chunk.entities.filter((e) => e.role === "specimen");
      const original = specimens.filter((e) => e.id.startsWith("specimen:"));
      const biodiversity = specimens.filter((e) =>
        e.id.startsWith("biodiversity:"),
      );
      const waterAndSky = specimens.filter((e) =>
        e.id.startsWith("waterlife:"),
      );
      assert.ok(original.length >= 1 && original.length <= 3);
      assert.ok(biodiversity.length >= 3 && biodiversity.length <= 4);
      assert.ok(waterAndSky.length <= 12);
      assert.equal(
        specimens.length,
        original.length + biodiversity.length + waterAndSky.length,
      );
      for (const entity of chunk.entities) {
        assert.ok(!ids.has(entity.id));
        ids.add(entity.id);
      }
      for (const site of chunk.sites) {
        assert.ok(!sites.has(site.id));
        sites.add(site.id);
        const clues = site.clueIds.map((id) =>
          chunk.entities.find((e) => e.id === id)!,
        );
        assert.ok(clues.every((e) => e.siteId === site.id));
        assert.ok(
          clues.every((e) => getBiome("atlas", e.x, e.z) === site.biome),
        );
      }
    }
  assert.ok(sites.size > 18 && sites.size < 48);
});

test("habitats form coherent patches, respect biomes and guarantee four local forest environments", () => {
  for (const seed of ["VESPER-01", "one", "journey-4", "长旅"]) {
    assert.equal(getHabitat(seed, 0, 15), "wildflower-meadow");
    assert.equal(getHabitat(seed, -48, -12), "fernwood");
    assert.equal(getHabitat(seed, 48, -12), "willow-grove");
    assert.equal(getHabitat(seed, 0, -65), "spore-wetland");
    const habitats = new Set<string>();
    let neighboringMatches = 0,
      samples = 0;
    for (let x = -360; x <= 360; x += 18)
      for (let z = -360; z <= 360; z += 18) {
        const habitat = getHabitat(seed, x, z);
        habitats.add(habitat);
        assert.equal(HABITATS[habitat].biome, getBiome(seed, x, z));
        assert.equal(habitat, getHabitat(seed, x, z));
        if (habitat === getHabitat(seed, x + 2, z + 2)) neighboringMatches++;
        samples++;
      }
    assert.equal(habitats.size, 10);
    assert.ok(
      neighboringMatches / samples > 0.86,
      "habitat identity must persist across nearby samples",
    );
  }
});

test("nearby exploration has ten tree silhouettes, varied groundcover and visible animals", () => {
  const treeKinds = new Set([
    "canopy-tree",
    "ribbon-tree",
    "spire-pine",
    "silver-birch",
    "veil-willow",
    "coral-tree",
    "baobab-tree",
    "spiral-tree",
    "tree-fern",
    "fan-palm",
  ]);
  for (const seed of ["VESPER-01", "one", "journey-4"]) {
    const seenTrees = new Set<string>(),
      groundcover = new Set<string>();
    for (let cx = -2; cx <= 2; cx++)
      for (let cz = -2; cz <= 2; cz++) {
        const chunk = generateChunk(seed, cx, cz);
        assert.ok(chunk.props.length >= 16 && chunk.props.length <= 140);
        for (const prop of chunk.props) {
          assert.ok(
            Number.isFinite(prop.x) &&
              Number.isFinite(prop.z) &&
              prop.scale > 0,
          );
          assert.equal(Math.floor(prop.x / CHUNK_SIZE), cx);
          assert.equal(Math.floor(prop.z / CHUNK_SIZE), cz);
          if (getBiome(seed, prop.x, prop.z) !== "forest") continue;
          if (treeKinds.has(prop.kind)) seenTrees.add(prop.kind);
          else groundcover.add(prop.kind);
        }
        const animals = chunk.entities.filter(
          (e) => SPECIES_BY_ID[e.speciesId].category === "fauna",
        );
        assert.ok(
          animals.length >= 1,
          "every chunk should offer living discoveries",
        );
      }
    assert.equal(seenTrees.size, 10);
    assert.ok(groundcover.size >= 15);
    const intro = generateChunk(seed, 0, -1);
    assert.ok(
      intro.entities.some(
        (e) => e.speciesId === "moss-grazer" && e.x === 8 && e.z === -16,
      ),
    );
    assert.ok(
      generateChunk(seed, -1, -1).entities.some(
        (e) => e.speciesId === "starpetal" && e.x === -7 && e.z === -15,
      ),
    );
  }
});

test("all 60 discoveries are reachable in seeded generation, including all nine new animal forms", () => {
  const found = new Set<string>(),
    models = new Set<string>();
  for (let cx = -8; cx <= 8; cx++)
    for (let cz = -8; cz <= 8; cz++) {
      for (const entity of generateChunk("diversity-survey", cx, cz).entities) {
        const species = SPECIES_BY_ID[entity.speciesId];
        assert.ok(species, `unknown species ${entity.speciesId}`);
        found.add(species.id);
        models.add(species.model);
        if (entity.id.startsWith("biodiversity:") && !(cx === 0 && cz === -1)) {
          assert.equal(
            species.biome,
            getBiome("diversity-survey", entity.x, entity.z),
          );
          assert.ok(
            species.habitats?.includes(
              getHabitat("diversity-survey", entity.x, entity.z),
            ),
          );
        }
      }
    }
  assert.deepEqual(
    SPECIES.filter((s) => !found.has(s.id)).map((s) => s.id),
    [],
  );
  for (const kind of [
    "moss-grazer",
    "fern-hopper",
    "shellback",
    "glass-stag",
    "dune-runner",
    "sand-beetle",
    "crystal-beetle",
    "cave-ray",
    "sky-ray",
  ])
    assert.ok(models.has(kind));
});

test("v1 original specimen and clue generation remains exactly compatible", () => {
  const samples = [
    {
      chunk: [0, -1],
      id: "specimen:77bfb320:0:-1:0",
      species: "lumen-moth",
      x: 11.876333892345428,
      z: -22.53463615849614,
    },
    {
      chunk: [0, 0],
      id: "specimen:77bfb320:0:0:2",
      species: "prism-frond",
      x: 32.9167052321136,
      z: 11.351880693808198,
    },
    {
      chunk: [-2, 1],
      id: "specimen:77bfb320:-2:1:0",
      species: "ochre-geode",
      x: -115.36168601177633,
      z: 85.31284043379128,
    },
    {
      chunk: [3, 0],
      id: "specimen:77bfb320:3:0:1",
      species: "dune-memory",
      x: 200.43355667963624,
      z: 7.61079940572381,
    },
    {
      chunk: [0, 2],
      id: "specimen:77bfb320:0:2:1",
      species: "glimmer-moth",
      x: 38.44385230727494,
      z: 132.15122949704528,
    },
    {
      chunk: [5, -4],
      id: "specimen:77bfb320:5:-4:0",
      species: "copperfan",
      x: 333.9055194873363,
      z: -214.44866479933262,
    },
  ];
  for (const sample of samples) {
    const entity = generateChunk(
      "VESPER-01",
      sample.chunk[0],
      sample.chunk[1],
    ).entities.find((e) => e.id === sample.id)!;
    assert.ok(entity);
    assert.equal(entity.speciesId, sample.species);
    assert.equal(entity.x, sample.x);
    assert.equal(entity.z, sample.z);
  }
  const site = generateChunk("VESPER-01", 0, 0);
  assert.deepEqual(
    site.entities.filter((e) => e.role === "clue").map((e) => e.speciesId),
    ["prism-frond", "copperfan", "pearl-lantern"],
  );
});

test("fish and birds have separate stable placements with usable aquatic clearance", () => {
  const fishIds = new Set(["ribbon-fish", "glass-koi", "lantern-eel"]);
  for (const seed of ["VESPER-01", "one", "journey-4", "water-7"]) {
    const home = getHomeLake(seed),
      seenFish = new Set<string>(),
      seenBirds = new Set<string>();
    let homeFish = 0;
    for (let cx = -3; cx <= 3; cx++)
      for (let cz = -3; cz <= 3; cz++) {
        const chunk = generateChunk(seed, cx, cz);
        for (const entity of chunk.entities) {
          if (!entity.id.startsWith("waterlife:")) continue;
          if (fishIds.has(entity.speciesId)) {
            const water = waterAt(seed, entity.x, entity.z)!;
            assert.ok(water && water.depth >= 1.05);
            for (const [dx, dz] of [
              [0.9, 0],
              [-0.9, 0],
              [0, 0.9],
              [0, -0.9],
            ]) {
              const edge = waterAt(seed, entity.x + dx, entity.z + dz)!;
              assert.ok(edge && edge.id === water.id && edge.depth > 0.75);
            }
            seenFish.add(entity.speciesId);
            if (entity.id.includes(":home:")) homeFish++;
          } else seenBirds.add(entity.speciesId);
        }
      }
    assert.equal(homeFish, 6);
    assert.equal(seenFish.size, 3);
    assert.ok(
      ["canopy-swift", "suncrest-bird", "reed-heron"].every((id) =>
        seenBirds.has(id),
      ),
    );
    assert.ok(
      Math.hypot(home.x, home.z) < 90,
      "home water must remain within a short walk",
    );
  }
});

test("new land scenery avoids open water and preserves all original subject data", () => {
  const tall = new Set([
    "canopy-tree",
    "ribbon-tree",
    "spire-pine",
    "silver-birch",
    "veil-willow",
    "coral-tree",
    "baobab-tree",
    "spiral-tree",
    "tree-fern",
    "fan-palm",
    "cave-column",
    "arch-rock",
    "desert-spire",
    "boulder-stack",
  ]);
  for (const seed of ["VESPER-01", "one", "journey-4"]) {
    for (let cx = -3; cx <= 3; cx++)
      for (let cz = -3; cz <= 3; cz++) {
        const chunk = generateChunk(seed, cx, cz),
          legacy = generateLegacyChunk(seed, cx, cz);
        assert.deepEqual(
          chunk.entities.filter(
            (e) =>
              !e.id.startsWith("biodiversity:") &&
              !e.id.startsWith("waterlife:"),
          ),
          legacy.entities,
        );
        assert.deepEqual(chunk.sites, legacy.sites);
        for (const prop of chunk.props) {
          if (prop.kind !== "lily-pad")
            assert.equal(
              waterAt(seed, prop.x, prop.z),
              null,
              `${prop.kind} must stand on land`,
            );
          if (tall.has(prop.kind))
            assert.equal(
              waterFieldAt(seed, prop.x, prop.z),
              null,
              "large canopies must leave banks open",
            );
        }
        for (const entity of chunk.entities.filter((e) =>
          e.id.startsWith("biodiversity:"),
        ))
          assert.equal(waterAt(seed, entity.x, entity.z), null);
      }
  }
});
