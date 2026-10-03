import { SPECIES_BY_ID } from "../data";
import { CHUNK_SIZE, MAX_CHUNK_COORDINATE } from "./worldgen";
import { BAG_CAPACITY, FIELD_RECORD_LIMIT, ITEM_IDS } from "../field-data";
import { createFieldKit, inventoryTotal } from "./fieldcraft";
import type {
  BiomeId,
  DiscoveryRecord,
  FieldKitSave,
  ItemId,
  Position,
  SaveData,
  ScanRecord,
  Settings,
  SiteData,
  WorldEntity,
} from "../types";

export const DEFAULT_SETTINGS: Settings = {
  language: "en",
  volume: 0.55,
  sensitivity: 1,
  quality: "balanced",
  invertY: false,
  reducedMotion: false,
  controlScheme: "auto",
  movementMode: "keyboard",
  mouseLook: "pointer-lock",
  touchSensitivity: 1,
  touchScale: 1,
  joystickSide: "left",
  showMinimap: true,
  minimapRotate: false,
};
export const LEVEL_THRESHOLDS = [
  0, 60, 160, 320, 550, 850, 1250, 1800,
] as const;
export const SAVE_KEY = "vesper-expedition-v1";
// Preserve five chunks of streaming margin, including the highest quality
// setting, and reject imports beyond a practical ten-million-metre world.
export const MAX_WORLD_COORDINATE = Math.min(
  10_000_000,
  (MAX_CHUNK_COORDINATE - 5) * CHUNK_SIZE,
);
const BACKUP_KEY = `${SAVE_KEY}-backup`;
const MAX_RECORDS = 25_000;
const MAX_TEXT = 8_000_000;
const BIOMES: BiomeId[] = ["forest", "desert", "caves"];

function failure(message: string): never {
  throw new Error(`Invalid expedition save: ${message}`);
}
function object(value: unknown, label: string): Record<string, unknown> {
  if (!value || typeof value !== "object" || Array.isArray(value))
    return failure(`${label} must be an object.`);
  return value as Record<string, unknown>;
}
function number(
  value: unknown,
  label: string,
  min: number,
  max: number,
  integral = false,
): number {
  if (
    typeof value !== "number" ||
    !Number.isFinite(value) ||
    value < min ||
    value > max ||
    (integral && !Number.isSafeInteger(value))
  )
    return failure(`${label} is outside its allowed range.`);
  return value;
}
function id(value: unknown, label: string): string {
  if (
    typeof value !== "string" ||
    !/^[a-zA-Z0-9_:.,-]{1,140}$/.test(value) ||
    ["__proto__", "prototype", "constructor"].includes(value)
  )
    return failure(`${label} is not a valid identifier.`);
  return value;
}
function seedValue(value: unknown): string {
  if (
    typeof value !== "string" ||
    value.length < 1 ||
    value.length > 96 ||
    value.trim().length < 1 ||
    /[\u0000-\u001f<>]/.test(value)
  )
    return failure("seed must contain 1–96 printable characters.");
  return value;
}
function position(value: unknown, label: string): Position {
  const p = object(value, label);
  return {
    x: number(p.x, `${label}.x`, -MAX_WORLD_COORDINATE, MAX_WORLD_COORDINATE),
    z: number(p.z, `${label}.z`, -MAX_WORLD_COORDINATE, MAX_WORLD_COORDINATE),
  };
}
function strings(value: unknown, label: string, maximum: number): string[] {
  if (!Array.isArray(value) || value.length > maximum)
    return failure(`${label} is too large or not an array.`);
  const parsed = value.map((item) => id(item, label));
  if (new Set(parsed).size !== parsed.length)
    return failure(`${label} contains duplicates.`);
  return parsed;
}
function settingsValue(value: unknown): Settings {
  const s = object(value, "settings");
  if (!["low", "balanced", "high"].includes(s.quality as string))
    return failure("unknown quality setting.");
  if (typeof s.invertY !== "boolean" || typeof s.reducedMotion !== "boolean")
    return failure("settings switches must be boolean.");
  const choice = <T extends string>(
    key: keyof Settings,
    allowed: readonly T[],
    fallback: T,
  ): T => {
    const candidate = s[key];
    if (candidate === undefined) return fallback;
    if (typeof candidate !== "string" || !allowed.includes(candidate as T))
      return failure(`unknown ${key} setting.`);
    return candidate as T;
  };
  const toggle = (key: keyof Settings, fallback: boolean): boolean => {
    if (s[key] === undefined) return fallback;
    if (typeof s[key] !== "boolean") return failure(`${key} must be boolean.`);
    return s[key] as boolean;
  };
  return {
    language: choice(
      "language",
      ["en", "zh-CN"] as const,
      DEFAULT_SETTINGS.language,
    ),
    volume: number(s.volume, "volume", 0, 1),
    sensitivity: number(s.sensitivity, "sensitivity", 0.05, 5),
    quality: s.quality as Settings["quality"],
    invertY: s.invertY,
    reducedMotion: s.reducedMotion,
    controlScheme: choice(
      "controlScheme",
      ["auto", "desktop", "touch"] as const,
      DEFAULT_SETTINGS.controlScheme,
    ),
    movementMode: choice(
      "movementMode",
      ["keyboard", "mouse"] as const,
      DEFAULT_SETTINGS.movementMode,
    ),
    mouseLook: choice(
      "mouseLook",
      ["pointer-lock", "drag", "arrows"] as const,
      DEFAULT_SETTINGS.mouseLook,
    ),
    touchSensitivity:
      s.touchSensitivity === undefined
        ? DEFAULT_SETTINGS.touchSensitivity
        : number(s.touchSensitivity, "touch sensitivity", 0.25, 3),
    touchScale:
      s.touchScale === undefined
        ? DEFAULT_SETTINGS.touchScale
        : number(s.touchScale, "touch scale", 0.8, 1.4),
    joystickSide: choice(
      "joystickSide",
      ["left", "right"] as const,
      DEFAULT_SETTINGS.joystickSide,
    ),
    showMinimap: toggle("showMinimap", DEFAULT_SETTINGS.showMinimap),
    minimapRotate: toggle("minimapRotate", DEFAULT_SETTINGS.minimapRotate),
  };
}

function fieldKitValue(value: unknown): FieldKitSave {
  // v1.0–v1.2 saves did not contain a backpack. Keep their research progress.
  if (value === undefined) return createFieldKit();
  const field = object(value, "field kit");
  const inventoryRaw = object(field.inventory, "inventory");
  if (
    Object.keys(inventoryRaw).some((key) => !ITEM_IDS.includes(key as ItemId))
  )
    return failure("unknown backpack item.");
  const kit = createFieldKit();
  for (const item of ITEM_IDS)
    kit.inventory[item] = number(
      inventoryRaw[item],
      `inventory.${item}`,
      0,
      BAG_CAPACITY,
      true,
    );
  if (inventoryTotal(kit) > BAG_CAPACITY)
    return failure("backpack exceeds its capacity.");
  kit.collected = strings(
    field.collected,
    "collected field supplies",
    FIELD_RECORD_LIMIT,
  );
  kit.repaired = strings(field.repaired, "repaired probes", FIELD_RECORD_LIMIT);
  const collected = new Set(kit.collected);
  if (kit.repaired.some((key) => collected.has(key)))
    return failure("a field object cannot be both collected and repaired.");
  kit.beacon =
    field.beacon === null ? null : position(field.beacon, "beacon position");
  return kit;
}

/** Reject malformed imports; copy only known fields and rebuild safe record dictionaries. */
export function parseSave(text: string): SaveData {
  if (typeof text !== "string" || text.length > MAX_TEXT)
    return failure("file is too large.");
  let parsed: unknown;
  try {
    parsed = JSON.parse(text);
  } catch {
    return failure("file is not valid JSON.");
  }
  const raw = object(parsed, "save");
  if (raw.version !== 1) return failure("unsupported save version.");
  const time = number(raw.time, "time", 0, 315_360_000);
  const scannedRaw = object(raw.scanned, "scanned"),
    discoveriesRaw = object(raw.discoveries, "discoveries");
  if (
    Object.keys(scannedRaw).length > MAX_RECORDS ||
    Object.keys(discoveriesRaw).length > Object.keys(SPECIES_BY_ID).length
  )
    return failure("too many records.");
  const scanned: Record<string, ScanRecord> = Object.create(null);
  const countBySpecies: Record<string, number> = Object.create(null);
  for (const [key, value] of Object.entries(scannedRaw)) {
    id(key, "scan key");
    const record = object(value, "scan"),
      speciesId = id(record.speciesId, "scan species");
    if (!Object.hasOwn(SPECIES_BY_ID, speciesId))
      return failure("unknown scan species.");
    if (id(record.id, "scan id") !== key)
      return failure("scan key does not match its id.");
    const point = position(record, "scan position");
    const scan: ScanRecord = {
      ...point,
      id: key,
      speciesId,
      time: number(record.time, "scan time", 0, time),
    };
    if (record.siteId !== undefined)
      scan.siteId = id(record.siteId, "scan site");
    scanned[key] = scan;
    countBySpecies[speciesId] = (countBySpecies[speciesId] ?? 0) + 1;
  }
  const discoveries: Record<string, DiscoveryRecord> = Object.create(null);
  for (const [key, value] of Object.entries(discoveriesRaw)) {
    if (!Object.hasOwn(SPECIES_BY_ID, key))
      return failure("unknown discovery species.");
    const record = object(value, "discovery");
    if (id(record.speciesId, "discovery species") !== key)
      return failure("discovery key does not match its species.");
    const count = number(record.count, "discovery count", 1, MAX_RECORDS, true);
    if (countBySpecies[key] !== count)
      return failure("discovery count does not match distinct scans.");
    const firstFound = position(record.firstFound, "first discovery position");
    const firstTime = number(record.firstTime, "first discovery time", 0, time);
    const firstScan = Object.values(scanned).find(
      (scan) =>
        scan.speciesId === key &&
        scan.time === firstTime &&
        scan.x === firstFound.x &&
        scan.z === firstFound.z,
    );
    if (!firstScan) return failure("first discovery does not match a scan.");
    discoveries[key] = { speciesId: key, firstFound, firstTime, count };
  }
  if (
    Object.keys(countBySpecies).some((key) => !Object.hasOwn(discoveries, key))
  )
    return failure("scan has no discovery record.");
  const completedSites = strings(raw.completedSites, "completed sites", 8_000);
  for (const siteId of completedSites) {
    if (
      ![0, 1, 2].every((i) => scanned[`${siteId}:clue:${i}`]?.siteId === siteId)
    )
      return failure("completed site is missing its three clue scans.");
  }
  const visitedChunks = strings(
    raw.visitedChunks,
    "visited chunks",
    MAX_RECORDS,
  );
  if (visitedChunks.some((key) => !/^-?\d{1,8},-?\d{1,8}$/.test(key)))
    return failure("invalid visited chunk coordinates.");
  const visitedBiomes = strings(raw.visitedBiomes, "visited biomes", 3);
  if (visitedBiomes.some((biome) => !BIOMES.includes(biome as BiomeId)))
    return failure("unknown visited biome.");
  return {
    version: 1,
    seed: seedValue(raw.seed),
    position: position(raw.position, "position"),
    heading: number(raw.heading, "heading", -1e6, 1e6),
    pitch: number(raw.pitch, "pitch", -Math.PI / 2, Math.PI / 2),
    time,
    xp: number(raw.xp, "xp", 0, 100_000_000, true),
    scanned,
    discoveries,
    completedSites,
    visitedChunks,
    visitedBiomes: visitedBiomes as BiomeId[],
    settings: settingsValue(raw.settings),
    fieldKit: fieldKitValue(raw.fieldKit),
  };
}

function storage(): Storage | null {
  try {
    return typeof localStorage !== "undefined" ? localStorage : null;
  } catch {
    return null;
  }
}

export class ExpeditionState {
  public data: SaveData;

  constructor(seed: string, saved?: SaveData) {
    this.data = saved
      ? parseSave(JSON.stringify(saved))
      : {
          version: 1,
          seed: seedValue(seed),
          position: { x: 0, z: 0 },
          heading: 0,
          pitch: 0,
          time: 0,
          xp: 0,
          scanned: Object.create(null),
          discoveries: Object.create(null),
          completedSites: [],
          visitedChunks: [],
          visitedBiomes: [],
          settings: { ...DEFAULT_SETTINGS },
          fieldKit: createFieldKit(),
        };
  }

  static load(): SaveData | null {
    const target = storage();
    if (!target) return null;
    for (const key of [SAVE_KEY, BACKUP_KEY]) {
      try {
        const text = target.getItem(key);
        if (text) return parseSave(text);
      } catch {
        /* Try the last validated backup if the current save is unavailable or damaged. */
      }
    }
    return null;
  }

  recordScan(
    entity: WorldEntity,
    gameSeconds: number,
  ): {
    isNew: boolean;
    newSpecies: boolean;
    xp: number;
    record: DiscoveryRecord;
  } {
    const species = SPECIES_BY_ID[entity.speciesId];
    if (!species) throw new Error("Cannot scan an unknown specimen.");
    if (
      entity.role === "landmark" &&
      (!entity.siteId || !this.data.completedSites.includes(entity.siteId))
    )
      throw new Error(
        "Investigate the three clues before activating this landmark.",
      );
    const existing = this.data.scanned[entity.id];
    if (existing)
      return {
        isNew: false,
        newSpecies: false,
        xp: 0,
        record: this.data.discoveries[existing.speciesId],
      };
    const scanTime = number(gameSeconds, "game time", 0, 315_360_000);
    this.data.time = Math.max(this.data.time, scanTime);
    const newSpecies = !this.data.discoveries[species.id];
    const record: DiscoveryRecord = this.data.discoveries[species.id] ?? {
      speciesId: species.id,
      firstFound: { x: entity.x, z: entity.z },
      firstTime: scanTime,
      count: 0,
    };
    record.count++;
    this.data.discoveries[species.id] = record;
    const scan: ScanRecord = {
      id: entity.id,
      speciesId: species.id,
      x: entity.x,
      z: entity.z,
      time: scanTime,
    };
    if (entity.siteId) scan.siteId = entity.siteId;
    this.data.scanned[entity.id] = scan;
    const xp = species.xp + (newSpecies ? 12 : 0);
    this.data.xp += xp;
    return { isNew: true, newSpecies, xp, record };
  }

  getSiteProgress(site: SiteData): number {
    return site.clueIds.filter(
      (clueId) => this.data.scanned[clueId]?.siteId === site.id,
    ).length;
  }

  completeSite(site: SiteData): boolean {
    if (
      this.data.completedSites.includes(site.id) ||
      site.clueIds.length !== 3 ||
      new Set(site.clueIds).size !== 3 ||
      this.getSiteProgress(site) !== 3
    )
      return false;
    this.data.completedSites.push(site.id);
    this.data.xp += 60;
    return true;
  }

  getLevel(): number {
    let level = 1;
    for (let i = 1; i < LEVEL_THRESHOLDS.length; i++)
      if (this.data.xp >= LEVEL_THRESHOLDS[i]) level = i + 1;
    return level;
  }

  save(): boolean {
    const target = storage();
    if (!target) return false;
    try {
      const text = this.export();
      parseSave(text);
      // Keep a previously valid save before replacing it. A failed backup write must not prevent a primary save.
      try {
        const previous = target.getItem(SAVE_KEY);
        if (previous) {
          parseSave(previous);
          target.setItem(BACKUP_KEY, previous);
        }
      } catch {
        /* Storage may be full or the old save invalid. */
      }
      target.setItem(SAVE_KEY, text);
      return true;
    } catch {
      return false;
    }
  }

  export(): string {
    return JSON.stringify(this.data, null, 2);
  }
}
