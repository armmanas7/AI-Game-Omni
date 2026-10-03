export type BiomeId = "forest" | "desert" | "caves";
export type Category = "flora" | "mineral" | "relic" | "fauna";
export type Rarity = "common" | "uncommon" | "rare";
export type ModelKind =
  | "canopy-tree"
  | "ribbon-tree"
  | "fan-fern"
  | "reed"
  | "desert-spire"
  | "arch-rock"
  | "dune-rock"
  | "crystal-cluster"
  | "cave-column"
  | "ruin-arch"
  | "ruin-ring"
  | "lantern-bloom"
  | "spore-crown"
  | "prism-fern"
  | "glass-cactus"
  | "sun-stone"
  | "sand-rose"
  | "echo-crystal"
  | "cave-coral"
  | "memory-shard"
  | "moth"
  | "survey-monolith"
  | "heartwood"
  | "sun-dial"
  | "harmonic-core"
  | "spire-pine"
  | "silver-birch"
  | "veil-willow"
  | "coral-tree"
  | "baobab-tree"
  | "spiral-tree"
  | "tree-fern"
  | "fan-palm"
  | "starflower"
  | "bellflower"
  | "orchid"
  | "sunburst-flower"
  | "lotus"
  | "foxglove"
  | "berry-bush"
  | "cycad"
  | "aloe"
  | "barrel-cactus"
  | "prickly-pear"
  | "puffball"
  | "shelf-fungus"
  | "glowcap"
  | "grass-tuft"
  | "flower-carpet"
  | "fallen-log"
  | "lily-pad"
  | "boulder-stack"
  | "moss-grazer"
  | "fern-hopper"
  | "shellback"
  | "glass-stag"
  | "dune-runner"
  | "sand-beetle"
  | "crystal-beetle"
  | "cave-ray"
  | "sky-ray"
  | "canopy-swift"
  | "suncrest-bird"
  | "reed-heron"
  | "ribbon-fish"
  | "glass-koi"
  | "lantern-eel";
export type HabitatId =
  | "wildflower-meadow"
  | "fernwood"
  | "willow-grove"
  | "spore-wetland"
  | "sun-oasis"
  | "cactus-garden"
  | "stone-badlands"
  | "crystal-garden"
  | "fungal-hollow"
  | "echo-vault";
export interface HabitatDef {
  id: HabitatId;
  name: string;
  biome: BiomeId;
  ground: string;
  accent: string;
  description: string;
}
export interface Position {
  x: number;
  z: number;
}
export interface WaterSample {
  id: string;
  name: string;
  kind: "lake" | "river";
  level: number;
  depth: number;
  flow: Position;
}
export interface SpeciesDef {
  id: string;
  name: string;
  subtitle: string;
  biome: BiomeId;
  category: Category;
  rarity: Rarity;
  description: string;
  insight: string;
  model: ModelKind;
  color: string;
  xp: number;
  habitats?: HabitatId[];
}
export interface WorldEntity extends Position {
  id: string;
  speciesId: string;
  seed: number;
  scale: number;
  rotation: number;
  role: "specimen" | "clue" | "landmark";
  siteId?: string;
  clueIndex?: number;
}
export interface PropPlacement extends Position {
  kind: ModelKind;
  scale: number;
  rotation: number;
  seed: number;
}
export interface SiteData extends Position {
  id: string;
  biome: BiomeId;
  clueIds: string[];
  landmarkId: string;
  rareSpeciesId: string;
  name: string;
  hint: string;
}
export interface ChunkData {
  key: string;
  cx: number;
  cz: number;
  props: PropPlacement[];
  entities: WorldEntity[];
  sites: SiteData[];
}
export interface ScanRecord extends Position {
  id: string;
  speciesId: string;
  time: number;
  siteId?: string;
}
export interface DiscoveryRecord {
  speciesId: string;
  firstFound: Position;
  firstTime: number;
  count: number;
}
export interface Settings {
  language: "en" | "zh-CN";
  volume: number;
  sensitivity: number;
  quality: "low" | "balanced" | "high";
  invertY: boolean;
  reducedMotion: boolean;
  controlScheme: "auto" | "desktop" | "touch";
  movementMode: "keyboard" | "mouse";
  mouseLook: "pointer-lock" | "drag" | "arrows";
  touchSensitivity: number;
  touchScale: number;
  joystickSide: "left" | "right";
  showMinimap: boolean;
  minimapRotate: boolean;
}
export type ItemId =
  "alloy" | "lumen-resin" | "crystal" | "pulse-cell" | "survey-beacon";
export type RecipeId = "pulse-cell" | "survey-beacon";
export interface FieldKitSave {
  inventory: Record<ItemId, number>;
  collected: string[];
  repaired: string[];
  beacon: Position | null;
}
export interface FieldNode extends Position {
  id: string;
  kind: "cache" | "resin" | "crystal" | "probe";
  seed: number;
  rewards: Partial<Record<ItemId, number>>;
}
export interface FieldTargetInfo {
  id: string;
  title: string;
  detail: string;
  distance: number;
  kind: FieldNode["kind"];
  available: boolean;
  prompt: string;
}
export interface FieldMarker extends Position {
  id: string;
  kind: FieldNode["kind"] | "beacon";
}
export interface SaveData {
  version: 1;
  seed: string;
  position: Position;
  heading: number;
  pitch: number;
  time: number;
  xp: number;
  scanned: Record<string, ScanRecord>;
  discoveries: Record<string, DiscoveryRecord>;
  completedSites: string[];
  visitedChunks: string[];
  visitedBiomes: BiomeId[];
  settings: Settings;
  fieldKit: FieldKitSave;
}
export interface TargetInfo {
  scanStatus?: "ready" | "out-of-range" | "occluded" | "locked" | "recorded";
  id: string;
  title: string;
  subtitle: string;
  detail: string;
  distance: number;
  progress: number;
  scanned: boolean;
  locked: boolean;
  clueCount: number;
  prompt: string;
  color: string;
}
export interface Objective {
  title: string;
  detail: string;
  progress: number;
  total: number;
}
export interface UISnapshot {
  seed: string;
  position: Position;
  heading: number;
  biome: BiomeId;
  region: string;
  habitat: HabitatId;
  waterName: string | null;
  swimming: boolean;
  time: number;
  xp: number;
  level: number;
  discoveries: Record<string, DiscoveryRecord>;
  scannedCount: number;
  sitesCompleted: number;
  visitedChunks: string[];
  visitedBiomes: BiomeId[];
  target: TargetInfo | null;
  objective: Objective;
  settings: Settings;
  saved: boolean;
  fps: number;
  waypoint: Position | null;
  scannerRange: number;
  pulseCooldown: number;
  hasSave: boolean;
  fieldKit: FieldKitSave;
  fieldTarget: FieldTargetInfo | null;
  fieldMarkers: FieldMarker[];
  touchControls: boolean;
  mobileDevice: boolean;
  mouseDestination: Position | null;
}
export type Screen =
  | "title"
  | "playing"
  | "pause"
  | "journal"
  | "map"
  | "settings"
  | "help"
  | "backpack"
  | "photo";
export interface UIHandlers {
  start: (seed?: string, newGame?: boolean) => void;
  resume: () => void;
  pause: () => void;
  scan: () => void;
  pulse: () => void;
  setWaypoint: (position: Position | null) => void;
  setSettings: (settings: Partial<Settings>) => void;
  exportSave: () => void;
  importSave: (file: File) => void;
  reset: () => void;
  recall: () => void;
  photo: () => void;
  capture: () => void;
  interact: () => void;
  craft: (recipe: RecipeId) => void;
  useItem: (item: ItemId) => void;
  discardItem: (item: ItemId) => void;
  recallBeacon: () => void;
  packBeacon: () => void;
}
export interface GameUI {
  update: (snapshot: UISnapshot) => void;
  setScreen: (screen: Screen) => void;
  notify: (
    title: string,
    body?: string,
    type?: "info" | "success" | "error",
  ) => void;
  showDiscovery: (species: SpeciesDef, record: DiscoveryRecord) => void;
  isOverlayOpen: () => boolean;
  getScreen: () => Screen;
}
