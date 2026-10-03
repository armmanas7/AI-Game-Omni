import type { ItemId, RecipeId } from "./types";

export const BAG_CAPACITY = 60;
export const FIELD_RECORD_LIMIT = 25_000;
export const ITEM_IDS: readonly ItemId[] = [
  "alloy",
  "lumen-resin",
  "crystal",
  "pulse-cell",
  "survey-beacon",
];
export interface FieldItem {
  id: ItemId;
  name: string;
  description: string;
  icon: string;
  color: string;
  usable: boolean;
}
export const ITEMS: Record<ItemId, FieldItem> = {
  alloy: {
    id: "alloy",
    name: "Salvaged alloy",
    description:
      "Recovered from supply caches. Use it to repair survey probes or build a beacon.",
    icon: "cube",
    color: "#c5d0ca",
    usable: false,
  },
  "lumen-resin": {
    id: "lumen-resin",
    name: "Lumen resin",
    description:
      "A renewable-looking amber deposit. Binds pulse cells and survey beacons together.",
    icon: "drop",
    color: "#edbb71",
    usable: false,
  },
  crystal: {
    id: "crystal",
    name: "Conductive crystal",
    description:
      "Small charged fragments. Used in probe repairs, pulse cells and beacons.",
    icon: "diamond",
    color: "#86d7dd",
    usable: false,
  },
  "pulse-cell": {
    id: "pulse-cell",
    name: "Pulse cell",
    description:
      "Consume to recharge your survey pulse immediately and reveal nearby specimens. Field supplies are shown on your map.",
    icon: "lightning",
    color: "#bce6a9",
    usable: true,
  },
  "survey-beacon": {
    id: "survey-beacon",
    name: "Survey beacon",
    description:
      "Deploy on clear dry ground. Return to this field camp from your backpack; one beacon can be active at a time.",
    icon: "broadcast",
    color: "#8dcfd3",
    usable: true,
  },
};
export interface FieldRecipe {
  id: RecipeId;
  name: string;
  description: string;
  cost: Partial<Record<ItemId, number>>;
  output: ItemId;
}
export const RECIPES: Record<RecipeId, FieldRecipe> = {
  "pulse-cell": {
    id: "pulse-cell",
    name: "Pulse cell",
    description:
      "An extra survey pulse for when you want to search again without waiting.",
    cost: { crystal: 2, "lumen-resin": 1 },
    output: "pulse-cell",
  },
  "survey-beacon": {
    id: "survey-beacon",
    name: "Survey beacon",
    description: "A reusable return point for longer expeditions.",
    cost: { alloy: 2, crystal: 1, "lumen-resin": 1 },
    output: "survey-beacon",
  },
};
export const PROBE_REPAIR_COST: Partial<Record<ItemId, number>> = {
  alloy: 2,
  crystal: 1,
};
export const FIELD_NODE_NAMES = {
  cache: "Supply cache",
  resin: "Lumen resin deposit",
  crystal: "Conductive crystal deposit",
  probe: "Survey probe",
} as const;
