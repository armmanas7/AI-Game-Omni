import test from "node:test";
import assert from "node:assert/strict";
import {
  getLanguage,
  setLanguage,
  t,
  readLanguagePreference,
  LANGUAGE_KEY,
} from "../src/i18n";
import { ExpeditionState, parseSave } from "../src/systems/state";

test("language is a validated save preference and legacy saves default to English", () => {
  const state = new ExpeditionState("language-check");
  state.data.settings.language = "zh-CN";
  assert.equal(parseSave(state.export()).settings.language, "zh-CN");
  const legacy = JSON.parse(state.export());
  delete legacy.settings.language;
  assert.equal(parseSave(JSON.stringify(legacy)).settings.language, "en");
  legacy.settings.language = "javascript:unsupported";
  assert.throws(() => parseSave(JSON.stringify(legacy)), /unknown language/);
});

test("English remains the exact source, Chinese preserves quantities and identifiers", () => {
  setLanguage("en");
  const sources = [
    "World seed · 自定义-Seed",
    "Research level 3",
    "Scan range · 19 m",
    "3 × Conductive crystal",
    "Waypoint · 15 m",
  ];
  for (const source of sources) assert.equal(t(source), source);
  setLanguage("zh-CN");
  assert.equal(t(sources[0]), "世界种子 · 自定义-Seed");
  assert.equal(t(sources[1]), "研究等级 3");
  assert.equal(t(sources[2]), "扫描范围 · 19 米");
  assert.equal(t(sources[4]), "路标 · 15 米");
  assert.equal(t("0 E · -3 N · 5 m away"), "东 0 · 北 -3 · 距离 5 米");
  assert.equal(t("Amber Dunes · +24 research XP"), "琥珀沙丘 · +24 研究经验");
  assert.match(t("Expedition active"), /继续探索/);
  assert.match(t("Invalid expedition save: seed is invalid."), /存档格式/);
  setLanguage("en");
});

test("title language preference survives reload and storage denial is tolerated", () => {
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
    setLanguage("zh-CN");
    assert.equal(memory.get(LANGUAGE_KEY), "zh-CN");
    assert.equal(readLanguagePreference(), "zh-CN");
    memory.set(LANGUAGE_KEY, "bad");
    assert.equal(readLanguagePreference(), null);
    Object.defineProperty(globalThis, "localStorage", {
      configurable: true,
      get: () => {
        throw new Error("Denied");
      },
    });
    assert.equal(readLanguagePreference(), null);
    assert.doesNotThrow(() => setLanguage("en"));
    assert.equal(getLanguage(), "en");
  } finally {
    if (old) Object.defineProperty(globalThis, "localStorage", old);
    else Reflect.deleteProperty(globalThis, "localStorage");
    setLanguage("en");
  }
});
