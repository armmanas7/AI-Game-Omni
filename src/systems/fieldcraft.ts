import type {
  FieldKitSave,
  FieldNode,
  ItemId,
  Position,
  RecipeId,
} from "../types";
import {
  BAG_CAPACITY,
  FIELD_RECORD_LIMIT,
  ITEM_IDS,
  PROBE_REPAIR_COST,
  RECIPES,
} from "../field-data";

export interface FieldResult {
  ok: boolean;
  reason?: string;
}
const fail = (reason: string): FieldResult => ({ ok: false, reason });
const success = (): FieldResult => ({ ok: true });
export function createFieldKit(): FieldKitSave {
  return {
    inventory: {
      alloy: 0,
      "lumen-resin": 0,
      crystal: 0,
      "pulse-cell": 0,
      "survey-beacon": 0,
    },
    collected: [],
    repaired: [],
    beacon: null,
  };
}
export function inventoryTotal(kit: FieldKitSave): number {
  return ITEM_IDS.reduce((total, item) => total + kit.inventory[item], 0);
}
function validInventory(kit: FieldKitSave): boolean {
  return (
    ITEM_IDS.every(
      (item) =>
        Number.isSafeInteger(kit.inventory[item]) &&
        kit.inventory[item] >= 0 &&
        kit.inventory[item] <= BAG_CAPACITY,
    ) && inventoryTotal(kit) <= BAG_CAPACITY
  );
}
function hasCost(
  kit: FieldKitSave,
  cost: Partial<Record<ItemId, number>>,
): boolean {
  return Object.entries(cost).every(
    ([item, amount]) => kit.inventory[item as ItemId] >= amount!,
  );
}
function subtract(kit: FieldKitSave, cost: Partial<Record<ItemId, number>>) {
  for (const [item, amount] of Object.entries(cost))
    kit.inventory[item as ItemId] -= amount!;
}
export function canCraft(kit: FieldKitSave, recipe: RecipeId): boolean {
  return (
    Object.hasOwn(RECIPES, recipe) &&
    validInventory(kit) &&
    hasCost(kit, RECIPES[recipe].cost)
  );
}
/** No partial harvest: a full backpack leaves the deposit available. */
export function collectNode(kit: FieldKitSave, node: FieldNode): FieldResult {
  if (node.kind === "probe")
    return fail("Repair the survey probe instead of collecting it.");
  if (kit.collected.includes(node.id)) return fail("Already collected.");
  if (kit.collected.length >= FIELD_RECORD_LIMIT)
    return fail("This expedition has reached its field record limit.");
  const rewards = Object.entries(node.rewards);
  if (
    !validInventory(kit) ||
    rewards.length === 0 ||
    rewards.some(
      ([item, amount]) =>
        !ITEM_IDS.includes(item as ItemId) ||
        !Number.isSafeInteger(amount) ||
        amount! < 1 ||
        amount! > BAG_CAPACITY,
    )
  )
    return fail("This deposit has no valid supplies.");
  const gained = rewards.reduce((sum, [, amount]) => sum + amount!, 0);
  if (inventoryTotal(kit) + gained > BAG_CAPACITY)
    return fail("Backpack full. Craft or use supplies to make room.");
  for (const [item, amount] of rewards)
    kit.inventory[item as ItemId] += amount!;
  kit.collected.push(node.id);
  return success();
}
/** Ingredient subtraction and output creation commit together. */
export function craftItem(kit: FieldKitSave, recipe: RecipeId): FieldResult {
  if (!Object.hasOwn(RECIPES, recipe)) return fail("Unknown recipe.");
  if (!validInventory(kit)) return fail("Backpack supplies are invalid.");
  const definition = RECIPES[recipe];
  if (!hasCost(kit, definition.cost))
    return fail("Gather the required supplies first.");
  const used = Object.values(definition.cost).reduce(
    (sum, amount) => sum + amount!,
    0,
  );
  if (inventoryTotal(kit) - used + 1 > BAG_CAPACITY)
    return fail("Backpack full.");
  subtract(kit, definition.cost);
  kit.inventory[definition.output]++;
  return success();
}
export function consumeItem(kit: FieldKitSave, item: ItemId): FieldResult {
  if (!ITEM_IDS.includes(item) || !validInventory(kit))
    return fail("Unknown or invalid supply.");
  if (kit.inventory[item] < 1) return fail("There are none in your backpack.");
  kit.inventory[item]--;
  return success();
}
/** Root grants research XP and reveals a nearby cache only after ok:true. */
export function repairProbe(kit: FieldKitSave, node: FieldNode): FieldResult {
  if (node.kind !== "probe") return fail("This object is not a survey probe.");
  if (kit.repaired.includes(node.id))
    return fail("This probe is already repaired.");
  if (kit.repaired.length >= FIELD_RECORD_LIMIT)
    return fail("This expedition has reached its field record limit.");
  if (!validInventory(kit) || !hasCost(kit, PROBE_REPAIR_COST))
    return fail("Repair needs 2 salvaged alloy and 1 conductive crystal.");
  subtract(kit, PROBE_REPAIR_COST);
  kit.repaired.push(node.id);
  return success();
}
/** Caller first verifies that the position is dry, clear and within the world. */
export function placeBeacon(
  kit: FieldKitSave,
  position: Position,
): FieldResult {
  if (kit.beacon)
    return fail("A beacon is already active. Return to it from your backpack.");
  if (
    !Number.isFinite(position.x) ||
    !Number.isFinite(position.z) ||
    Math.abs(position.x) > 10_000_000 ||
    Math.abs(position.z) > 10_000_000
  )
    return fail("Choose a valid place for the beacon.");
  const result = consumeItem(kit, "survey-beacon");
  if (!result.ok) return result;
  kit.beacon = { x: position.x, z: position.z };
  return success();
}
/** Caller should require the player to be at the beacon before packing it. */
export function packBeacon(kit: FieldKitSave): FieldResult {
  if (!kit.beacon) return fail("No beacon is deployed.");
  if (!validInventory(kit) || inventoryTotal(kit) >= BAG_CAPACITY)
    return fail("Backpack full. Make room before packing the beacon.");
  kit.inventory["survey-beacon"]++;
  kit.beacon = null;
  return success();
}
