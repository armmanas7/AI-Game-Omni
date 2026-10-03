import test from "node:test";
import assert from "node:assert/strict";
import {
  ExpeditionState,
  parseSave,
  SAVE_KEY,
  MAX_WORLD_COORDINATE,
} from "../src/systems/state";
import { generateChunk, CHUNK_SIZE } from "../src/systems/worldgen";

const onboarding = () => generateChunk("research", 0, -1);

test("only distinct entity scans earn XP or increment specimen count", () => {
  const state = new ExpeditionState("research"),
    specimen = onboarding().entities.find((e) => e.role === "specimen")!;
  const first = state.recordScan(specimen, 5),
    xp = state.data.xp;
  assert.equal(first.isNew, true);
  assert.equal(first.newSpecies, true);
  assert.equal(first.record.count, 1);
  const repeat = state.recordScan(specimen, 8);
  assert.equal(repeat.xp, 0);
  assert.equal(repeat.isNew, false);
  assert.equal(repeat.newSpecies, false);
  assert.equal(state.data.xp, xp);
  assert.equal(repeat.record.count, 1);
  assert.equal(repeat.record.firstTime, 5);
  const second = state.recordScan(
    { ...specimen, id: `${specimen.id}:other`, x: 15 },
    9,
  );
  assert.equal(second.newSpecies, false);
  assert.equal(second.record.count, 2);
  assert.equal(Object.keys(state.data.scanned).length, 2);
});

test("two new common specimens grant the first research upgrade", () => {
  const state = new ExpeditionState("research"),
    chunk = onboarding();
  assert.equal(state.getLevel(), 1);
  state.recordScan(
    chunk.entities.find((e) => e.speciesId === "pearl-lantern")!,
    1,
  );
  state.recordScan(
    chunk.entities.find((e) => e.speciesId === "whisper-reed")!,
    2,
  );
  assert.equal(state.getLevel(), 2);
});

test("partial site cannot complete; third clue enables one-time completion and landmark scan", () => {
  const state = new ExpeditionState("research"),
    chunk = onboarding(),
    site = chunk.sites[0];
  const clues = site.clueIds.map((id) =>
    chunk.entities.find((e) => e.id === id)!,
  );
  const landmark = chunk.entities.find((e) => e.id === site.landmarkId)!;
  assert.throws(() => state.recordScan(landmark, 1), /three clues/);
  state.recordScan(clues[0], 2);
  state.recordScan(clues[1], 3);
  assert.equal(state.getSiteProgress(site), 2);
  assert.equal(state.completeSite(site), false);
  state.recordScan(clues[2], 4);
  const xp = state.data.xp;
  assert.equal(state.completeSite(site), true);
  assert.equal(state.data.xp, xp + 60);
  assert.equal(state.completeSite(site), false);
  assert.equal(state.data.xp, xp + 60);
  assert.equal(state.recordScan(landmark, 5).newSpecies, true);
});

test("export/import preserves partial and completed investigations, settings and location", () => {
  const state = new ExpeditionState("research"),
    chunk = onboarding(),
    site = chunk.sites[0];
  const clues = site.clueIds.map((id) =>
    chunk.entities.find((e) => e.id === id)!,
  );
  state.recordScan(clues[0], 5);
  state.data.position = { x: -71.25, z: 82.8 };
  state.data.heading = 2.3;
  state.data.pitch = -0.2;
  state.data.visitedChunks = ["0,-1", "-2,1"];
  state.data.visitedBiomes = ["forest", "caves"];
  state.data.settings = {
    ...state.data.settings,
    volume: 0.2,
    sensitivity: 1.4,
    quality: "low",
    invertY: true,
    reducedMotion: true,
  };
  const partial = new ExpeditionState("ignored", parseSave(state.export()));
  assert.equal(partial.data.seed, "research");
  assert.equal(partial.getSiteProgress(site), 1);
  assert.deepEqual(partial.data.settings, state.data.settings);
  assert.deepEqual(partial.data.position, state.data.position);
  partial.recordScan(clues[1], 6);
  partial.recordScan(clues[2], 7);
  partial.completeSite(site);
  const completed = parseSave(partial.export());
  assert.deepEqual(completed.completedSites, [site.id]);
  assert.equal(completed.xp, partial.data.xp);
});

test("parser rejects malformed, impossible or unsafe save structures", () => {
  const raw = JSON.parse(new ExpeditionState("research").export());
  for (const text of ["no json", "null", "[]", "{}"])
    assert.throws(() => parseSave(text), /Invalid expedition save/);
  const invalid = [
    { ...raw, version: 2 },
    { ...raw, seed: "<script>" },
    { ...raw, xp: -1 },
    { ...raw, xp: 2.4 },
    { ...raw, position: { x: "5", z: 2 } },
    { ...raw, position: { x: null, z: 2 } },
    { ...raw, visitedChunks: ["not-a-chunk"] },
    { ...raw, visitedBiomes: ["ocean"] },
    { ...raw, completedSites: ["unfinished-site"] },
    { ...raw, settings: { ...raw.settings, volume: 2 } },
    { ...raw, settings: { ...raw.settings, quality: "ultra" } },
    {
      ...raw,
      scanned: {
        __bad: { id: "__bad", speciesId: "unknown", x: 0, z: 0, time: 0 },
      },
    },
  ];
  for (const value of invalid)
    assert.throws(
      () => parseSave(JSON.stringify(value)),
      /Invalid expedition save/,
    );
  assert.throws(
    () =>
      parseSave(
        new ExpeditionState("research")
          .export()
          .replace('"scanned": {}', '"scanned":{"__proto__":{}}'),
      ),
    /identifier/,
  );
});

test("parser validates discovery counts against distinct scans", () => {
  const state = new ExpeditionState("research");
  state.recordScan(
    onboarding().entities.find((e) => e.role === "specimen")!,
    4,
  );
  const raw = JSON.parse(state.export());
  raw.discoveries["pearl-lantern"].count = 5;
  assert.throws(() => parseSave(JSON.stringify(raw)), /count/);
});

test("imported coordinates stay within terrain generation bounds with streaming margin", () => {
  const raw = JSON.parse(new ExpeditionState("coordinate-review").export());
  for (const value of [
    MAX_WORLD_COORDINATE + 1,
    -MAX_WORLD_COORDINATE - 1,
    1e9,
  ]) {
    assert.throws(
      () => parseSave(JSON.stringify({ ...raw, position: { x: value, z: 0 } })),
      /outside its allowed range/,
    );
    assert.throws(
      () => parseSave(JSON.stringify({ ...raw, position: { x: 0, z: value } })),
      /outside its allowed range/,
    );
  }
  for (const sx of [-1, 1])
    for (const sz of [-1, 1]) {
      const saved = parseSave(
        JSON.stringify({
          ...raw,
          position: {
            x: sx * MAX_WORLD_COORDINATE,
            z: sz * MAX_WORLD_COORDINATE,
          },
        }),
      );
      const cx = Math.floor(saved.position.x / CHUNK_SIZE),
        cz = Math.floor(saved.position.z / CHUNK_SIZE);
      for (const dx of [-4, 4])
        for (const dz of [-4, 4]) {
          const chunk = generateChunk(saved.seed, cx + dx, cz + dz);
          assert.equal(chunk.cx, cx + dx);
          assert.equal(chunk.cz, cz + dz);
          assert.ok(chunk.entities.length > 0);
        }
    }
});

test("local save loads the validated backup after corruption and handles storage denial", () => {
  const old = Object.getOwnPropertyDescriptor(globalThis, "localStorage");
  const memory = new Map<string, string>();
  Object.defineProperty(globalThis, "localStorage", {
    configurable: true,
    value: {
      getItem: (key: string) => memory.get(key) ?? null,
      setItem: (key: string, value: string) => memory.set(key, value),
    },
  });
  try {
    const state = new ExpeditionState("research");
    assert.equal(state.save(), true);
    state.recordScan(
      onboarding().entities.find((e) => e.role === "specimen")!,
      3,
    );
    assert.equal(state.save(), true);
    assert.equal(ExpeditionState.load()?.xp, state.data.xp);
    memory.set(SAVE_KEY, "corrupt");
    assert.equal(ExpeditionState.load()?.xp, 0);
    Object.defineProperty(globalThis, "localStorage", {
      configurable: true,
      get: () => {
        throw new Error("Denied");
      },
    });
    assert.equal(ExpeditionState.load(), null);
    assert.equal(state.save(), false);
  } finally {
    if (old) Object.defineProperty(globalThis, "localStorage", old);
    else Reflect.deleteProperty(globalThis, "localStorage");
  }
});
