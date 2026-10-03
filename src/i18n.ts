import { UI_ZH } from "./ui-translations";
import { CONTENT_ZH } from "./content-translations";
import { SCAN_ZH } from "./scan-translations";

export type Language = "en" | "zh-CN";
export const LANGUAGE_KEY = "vesper-language";
export const LANGUAGE_EVENT = "vesper-languagechange";

export function readLanguagePreference(): Language | null {
  try {
    const value = globalThis.localStorage?.getItem(LANGUAGE_KEY);
    return value === "en" || value === "zh-CN" ? value : null;
  } catch {
    return null;
  }
}
let language: Language = readLanguagePreference() ?? "en";
export function getLanguage(): Language {
  return language;
}
export function setLanguage(next: Language): void {
  if (next !== "en" && next !== "zh-CN") return;
  const changed = next !== language;
  language = next;
  cache.clear();
  try {
    globalThis.localStorage?.setItem(LANGUAGE_KEY, next);
  } catch {
    // Language selection remains usable if browser storage is denied.
  }
  if (typeof document !== "undefined") {
    document.documentElement.lang = next;
    document.title =
      next === "zh-CN"
        ? "Vesper — 异星探索图鉴"
        : "Vesper — An Atlas of Elsewhere";
    const world = document.querySelector("#world");
    world?.setAttribute(
      "aria-label",
      next === "zh-CN"
        ? "Vesper 三维异星世界"
        : "Vesper, a three-dimensional alien landscape",
    );
    if (changed) document.dispatchEvent(new Event(LANGUAGE_EVENT));
  }
}

const RUNTIME_ZH: Record<string, string> = {
  "Your expedition could not be saved": "探索进度未能保存",
  "Browser storage is unavailable or full. Export your expedition from the pause menu to keep a backup.":
    "浏览器存储不可用或空间已满。请在暂停菜单中导出存档，保留探索进度。",
  "Expedition active": "继续探索",
  "Your field atlas is ready. Continue where you left off.":
    "图鉴已载入，可以从上次的位置继续探索。",
  "Follow the green signal ahead. Aim and hold Scan to make your first observation.":
    "沿着前方绿色标记，瞄准标本并长按“扫描”，完成第一次观察。",
  "Follow the green signal ahead. Hold E to make your first observation.":
    "沿着前方绿色标记，瞄准标本并按住 E，完成第一次观察。",
  "Field photograph saved": "照片已保存",
  "A clean image of the current landscape.": "已保存当前景色的无界面照片。",
  "No item to discard": "没有可丢弃的物品",
  "Your bag is empty.": "背包里没有物品。",
  "One item discarded": "已丢弃一件物品",
  "Waypoint placed": "已设置路标",
  "Your compass will guide you there.": "跟随罗盘指引前往目标位置。",
  "Atlas exported": "存档已导出",
  "Keep this file as a backup or import it on another browser.":
    "请保留文件作为备份，也可以在其他浏览器中导入。",
  "Save file is too large.": "存档文件过大，请选择有效的 Vesper 导出存档。",
  "Expedition restored": "存档已载入",
  "Could not restore this atlas": "无法载入存档",
  "Please choose a valid Vesper save file.": "请选择有效的 Vesper 导出存档。",
  "Returned to the landing site": "已返回着陆点",
  "Your discoveries and research are preserved.": "图鉴和研究进度已保留。",
  "Your research is preserved.": "研究进度已保留。",
  "Choose open ground": "请选择空地",
  "That spot is occupied by scenery. Try nearby ground.":
    "这个位置有障碍物，请选择附近的空地。",
  "Survey pulse": "勘测脉冲",
  "Nearby specimens are marked. Check the map for field supplies and damaged probes.":
    "已标出附近的标本。补给和受损探针的位置可在地图上查看。",
  "Field action unavailable": "暂时无法操作",
  "Try again.": "请调整位置后重试。",
  "Nothing in reach": "附近没有可操作的物品",
  "Move within 5 metres of a field supply or damaged probe and face it.":
    "靠近补给或受损探针至 5 米以内，并面向它。",
  "Move around the obstacle": "请绕开障碍物",
  "You need a clear view of this field supply or probe.":
    "需要看到补给或探针，中间不能有障碍物。",
  "A supply cache has been marked on your map.": "已在地图上标出一处补给箱。",
  "Keep exploring for new field supplies.": "继续探索，寻找更多补给。",
  "Supplies added to backpack": "补给已放入背包",
  "Cannot craft yet": "暂时无法制作",
  "Gather supplies.": "请先收集所需材料。",
  "Available in your backpack.": "可以在背包中查看和使用。",
  "No pulse cell available": "没有可用的脉冲电池",
  "Craft one first.": "请先在背包中制作。",
  "Find clear dry ground": "请寻找干燥的空地",
  "Face an open patch of land before deploying your beacon.":
    "面向一片干燥、没有障碍物的空地，再部署信标。",
  "Beacon unavailable": "暂时无法部署信标",
  "Return beacon deployed": "勘测信标已部署",
  "It is marked on the map. Return to it from your backpack.":
    "信标已标在地图上，可以从背包返回该位置。",
  "Returned to your survey beacon": "已返回勘测信标",
  "Your field camp is ready for another expedition.": "从这里继续探索吧。",
  "Move closer to your beacon": "请靠近信标",
  "Return to it before packing it into your backpack.":
    "先返回信标附近，再将它收回背包。",
  "Cannot pack beacon": "暂时无法收回信标",
  "Beacon packed": "信标已收回",
  "You can deploy it again in another location.": "可以在其他位置重新部署。",
  "A first observation": "第一次观察",
  "Find the luminous specimen ahead. Aim at it and hold E.":
    "找到前方发光的标本，瞄准它并按住 E。",
  "The listening grove": "倾听林地",
  "Return to the central landmark. Hold E to reveal its finding.":
    "返回中央遗迹，按住 E 揭开它的秘密。",
  "Follow the path north. Record three clues around the grove, then activate its landmark.":
    "沿小路向北，扫描林地周围的三条线索，再调查中央遗迹。",
  "Beyond the canopy": "走出森林",
  "Desert lies east; luminous caverns lie south. Use M to place a waypoint.":
    "沙漠在东，发光洞窟在南。按 M 打开地图并设置路标。",
  "Three ecological signatures": "三处生态印记",
  "Investigate one landmark in each biome. Their findings are related.":
    "分别调查三个生态区域的遗迹，发现它们之间的联系。",
  "An atlas of elsewhere": "异星探索图鉴",
  "Seek new habitats and complete the planet’s field catalogue.":
    "寻找新的栖息地，完善这颗星球的图鉴。",
  "The horizon remains open": "地平线之外",
  "Your catalogue is complete. Keep exploring new regions and recording observations.":
    "图鉴已经收集完成。仍然可以探索新区域，记录更多观察。",
  "Follow the surrounding clues": "先调查周围的线索",
  "Observation recorded": "观察已记录",
  "Observation unavailable": "暂时无法扫描",
  "A new ecological region": "发现新的生态区域",
  "A clear place to continue": "已移至安全位置",
  "Your saved position was inside scenery. You have been moved to nearby open ground.":
    "存档位置被障碍物占据，已将你移到附近的空地。",
  "Vesper needs a 3D-capable browser.": "Vesper 需要支持三维图形的浏览器。",
  "Enable hardware acceleration and open this page in a current desktop browser.":
    "请开启硬件加速，并使用较新版本的浏览器打开游戏。",
  "Your expedition save will stay on this device.":
    "你的探索存档仍保留在本设备上。",
};
const dictionary = { ...RUNTIME_ZH, ...CONTENT_ZH, ...UI_ZH, ...SCAN_ZH };
const normalize = (text: string) => text.trim().replace(/\s+/g, " ");
const lowerDictionary = new Map(
  Object.entries(dictionary).map(([key, value]) => [
    normalize(key).toLowerCase(),
    value,
  ]),
);
const cache = new Map<string, string>();

function translated(text: string): string {
  const direct =
    dictionary[text] ?? lowerDictionary.get(normalize(text).toLowerCase());
  if (direct) return direct;
  let m: RegExpMatchArray | null;
  const term = (value: string) => translated(value.trim());
  if ((m = text.match(/^([+-]\d+) research XP$/))) return `${m[1]} 研究经验`;
  if ((m = text.match(/^(-?\d+) E$/))) return `东 ${m[1]}`;
  if ((m = text.match(/^(-?\d+) N$/))) return `北 ${m[1]}`;
  if (
    (m = text.match(
      /^(\d+) of (\d+) specimens catalogued · (\d+) research sites resolved$/,
    ))
  )
    return `已收录 ${m[1]} / ${m[2]} 种标本 · 已完成 ${m[3]} 处调查`;
  if ((m = text.match(/^\/?\s*(\d+) specimens$/)))
    return `${text.startsWith("/") ? "/ " : ""}${m[1]} 种标本`;
  if ((m = text.match(/^(\d+) survey probes? restored(.*)$/)))
    return `已修复 ${m[1]} 个勘测探针${m[2] ? " · 继续探索，寻找更多补给" : ""}`;
  if ((m = text.match(/^(\d+) probes? restored$/)))
    return `已修复 ${m[1]} 个探针`;
  if ((m = text.match(/^Backpack · (\d+) \/ (\d+)$/)))
    return `背包 · ${m[1]} / ${m[2]}`;
  if ((m = text.match(/^World seed · (.+)$/))) return `世界种子 · ${m[1]}`;
  if ((m = text.match(/^Level (\d+) · (.+)$/)))
    return `等级 ${m[1]} · ${term(m[2])}`;
  if ((m = text.match(/^Research level (\d+)$/))) return `研究等级 ${m[1]}`;
  if ((m = text.match(/^Scanner reach increased to ([\d.]+) metres\.$/)))
    return `扫描范围已提升至 ${m[1]} 米。`;
  if ((m = text.match(/^(\d+) findings restored to your field atlas\.$/)))
    return `已载入 ${m[1]} 项图鉴发现。`;
  if ((m = text.match(/^Waypoint · ([\d.]+) m$/))) return `路标 · ${m[1]} 米`;
  if ((m = text.match(/^Scan range · ([\d.]+) m$/)))
    return `扫描范围 · ${m[1]} 米`;
  if ((m = text.match(/^Recharging · ([\d.]+)s$/)))
    return `充能中 · ${m[1]} 秒`;
  if ((m = text.match(/^([\d.]+) m span$/))) return `${m[1]} 米范围`;
  if ((m = text.match(/^([\d.]+) m view$/))) return `${m[1]} 米视野`;
  if ((m = text.match(/^([\d.]+) m away$/))) return `距离 ${m[1]} 米`;
  if ((m = text.match(/^([\d.]+) m$/))) return `${m[1]} 米`;
  if ((m = text.match(/^(.+) · (\d+) carried$/)))
    return `${term(m[1])} · 持有 ${m[2]} 件`;
  if ((m = text.match(/^(\d+) items?$/))) return `${m[1]} 件物品`;
  if ((m = text.match(/^Discard 1 (.+)$/))) return `丢弃 1 件${term(m[1])}`;
  if ((m = text.match(/^(\d+) carried · (\d+) required$/)))
    return `持有 ${m[1]} · 需要 ${m[2]}`;
  if ((m = text.match(/^Need (.+)$/)))
    return `还需要 ${m[1].split(/ and /).map(term).join("、")}`;
  if (
    (m = text.match(/^(\d+) (salvaged alloy|lumen resin|conductive crystal)$/i))
  )
    return `${m[1]} 个${term(m[2])}`;
  if ((m = text.match(/^(\d+) × (.+)$/))) return `${m[1]} × ${term(m[2])}`;
  if ((m = text.match(/^(.+) crafted$/))) return `已制作${term(m[1])}`;
  if ((m = text.match(/^(.+) · backpack space freed\.$/)))
    return `已丢弃${term(m[1])}，腾出背包空间。`;
  if ((m = text.match(/^(.+) · another habitat added to your atlas\.$/)))
    return `已记录${term(m[1])}在另一处栖息地的观察。`;
  if ((m = text.match(/^(.+) — rendered field specimen$/)))
    return `${term(m[1])} — 标本模型图像`;
  if ((m = text.match(/^(.+) \/ (.+) · (\d+) observations?$/)))
    return `${term(m[1])} / ${term(m[2])} · ${m[3]} 次观察`;
  if (
    (m = text.match(
      /^Explore (.+) and follow the survey pulse to find new specimens\.$/,
    ))
  )
    return `探索${term(m[1])}，跟随勘测脉冲寻找新的标本。`;
  if ((m = text.match(/^([\d-]+) E · ([\d-]+) N$/)))
    return `东 ${m[1]} · 北 ${m[2]}`;
  if ((m = text.match(/^(\d{2}) · (.+)$/))) return `${m[1]} · ${term(m[2])}`;
  if (
    text.startsWith("Invalid expedition save:") ||
    text.startsWith("Unexpected") ||
    text.includes("is not valid JSON") ||
    text.startsWith("Expected property name")
  )
    return "存档格式不正确或内容不完整。请选择有效的 Vesper 导出存档。";
  if (text.includes(" · ")) return text.split(" · ").map(term).join(" · ");
  if (text.includes(" / ")) return text.split(" / ").map(term).join(" / ");
  return text;
}

export function t(text: string): string {
  if (language === "en" || !text.trim()) return text;
  const existing = cache.get(text);
  if (existing !== undefined) return existing;
  const trimmed = normalize(text);
  const result = translated(trimmed);
  const value = text.replace(text.trim(), result);
  if (cache.size > 3000) cache.clear();
  cache.set(text, value);
  return value;
}

interface SourceText {
  source: string;
  rendered: string;
}
const textSources = new WeakMap<Text, SourceText>();
const attributeSources = new WeakMap<Element, Map<string, SourceText>>();
const attributes = ["aria-label", "title", "placeholder", "alt"] as const;

/** Records source text separately so repeated language switches never translate a translation. */
export function setLocalizedText(
  element: Element | null,
  value: string | number,
): void {
  if (!element) return;
  const source = String(value);
  const rendered = t(source);
  if (element.textContent !== rendered) element.textContent = rendered;
  const child = element.firstChild;
  if (child?.nodeType === 3)
    textSources.set(child as Text, { source, rendered });
}

export function localizeElement(element: Element): void {
  const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT);
  while (walker.nextNode()) {
    const node = walker.currentNode as Text;
    if (node.parentElement?.closest("script,style,code,[data-no-translate]"))
      continue;
    if (
      node.parentElement?.closest("kbd") &&
      !node.parentElement.closest("[data-translatable]")
    )
      continue;
    const previous = textSources.get(node);
    const source =
      previous && node.data === previous.rendered ? previous.source : node.data;
    const rendered = t(source);
    if (node.data !== rendered) node.data = rendered;
    textSources.set(node, { source, rendered });
  }
  for (const node of [
    element,
    ...element.querySelectorAll("[aria-label],[title],[placeholder],[alt]"),
  ]) {
    let saved = attributeSources.get(node);
    if (!saved) {
      saved = new Map();
      attributeSources.set(node, saved);
    }
    for (const attribute of attributes) {
      const current = node.getAttribute(attribute);
      if (current === null) continue;
      const previous = saved.get(attribute);
      const source =
        previous && current === previous.rendered ? previous.source : current;
      const rendered = t(source);
      if (current !== rendered) node.setAttribute(attribute, rendered);
      saved.set(attribute, { source, rendered });
    }
  }
}

export function setLocalizedHTML(element: Element, markup: string): void {
  element.innerHTML = markup;
  localizeElement(element);
}

/** Test/audit helper: dictionary availability is independent of the selected language. */
export function hasTranslation(text: string): boolean {
  return translated(normalize(text)) !== normalize(text);
}
