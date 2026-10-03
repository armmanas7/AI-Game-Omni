import { chromium } from "@playwright/test";
import { readFile, writeFile } from "node:fs/promises";

// Verify the compiled release through its visible controls, with no developer API.
const browser = await chromium.launch({
  headless: true,
  args: ["--enable-webgl", "--use-angle=metal"],
});
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
const errors = [],
  failedRequests = [],
  externalRequests = [];
page.on("pageerror", (error) => errors.push(error.message));
page.on("console", (message) => {
  if (message.type() === "error") errors.push(message.text());
});
page.on("requestfailed", (request) => failedRequests.push(request.url()));
await page.route("**/*", (route) => {
  const url = route.request().url();
  if (url.startsWith("http://127.0.0.1:4174/") || /^(blob:|data:)/.test(url))
    return route.continue();
  externalRequests.push(url);
  return route.abort();
});
await page.goto("http://127.0.0.1:4174/");
await page.getByRole("button", { name: /Begin expedition/ }).waitFor();
await page.waitForTimeout(1600);
await page.screenshot({ path: "screenshots/01-title.png" });
if (await page.evaluate(() => typeof window.__VESPER__ !== "undefined"))
  throw new Error("Developer diagnostics leaked into release.");
await page.locator("#expedition-seed").fill("VESPER-01");
await page.getByRole("button", { name: /Begin expedition/ }).click();
await page.waitForTimeout(1500);
await page.screenshot({ path: "screenshots/02-arrival.png" });
await page.keyboard.down("KeyE");
await page.waitForTimeout(1800);
await page.keyboard.up("KeyE");
if ((await page.locator("#hud-discovered").textContent()) !== "1")
  throw new Error("Initial scan failed in release.");
await page.screenshot({ path: "screenshots/03-first-discovery.png" });
await page.keyboard.press("KeyJ");
await page.getByRole("heading", { name: "Field atlas", exact: true }).waitFor();
await page.screenshot({ path: "screenshots/04-atlas.png" });

// Verify the compiled Chinese interface using visible settings, preserving the scan.
await page.keyboard.press("Escape");
await page.keyboard.press("Escape");
await page.locator('.pause-screen [data-open="settings"]').click();
await page.locator("#language").selectOption("zh-CN");
if ((await page.locator("html").getAttribute("lang")) !== "zh-CN")
  throw new Error("Compiled language selection failed.");
await page.locator(".close-overlay").click();
const chineseCopyAudits = [];
for (const screen of ["journal", "backpack", "map", "help", "settings"]) {
  await page.locator('.hud-nav [data-open="pause"]').click();
  await page
    .locator(`section[data-screen="pause"] [data-open="${screen}"]`)
    .click();
  await page.waitForTimeout(250);
  const untranslated = await page.evaluate(() => {
    const walker = document.createTreeWalker(
      document.querySelector("#app"),
      NodeFilter.SHOW_TEXT,
    );
    const remaining = [];
    while (walker.nextNode()) {
      const node = walker.currentNode;
      const parent = node.parentElement;
      if (
        !parent ||
        parent.closest("[hidden],script,style,kbd,code,[data-no-translate]") ||
        !parent.getClientRects().length
      )
        continue;
      const text = node.textContent.trim();
      const rest = text.replace(
        /\b(?:VESPER|English|WASD|Esc|Home|Shift|Space)\b/gi,
        "",
      );
      if (/[A-Za-z]{3,}/.test(rest)) remaining.push(text);
    }
    return [...new Set(remaining)];
  });
  if (untranslated.length)
    throw new Error(
      `Chinese ${screen} has English copy: ${untranslated.join(" | ")}`,
    );
  chineseCopyAudits.push(screen);
  if (screen === "journal") {
    if ((await page.locator(".species-detail h2").textContent()) !== "珍珠灯花")
      throw new Error("Chinese atlas record failed.");
    await page.screenshot({
      path: "screenshots/23-chinese-atlas.png",
      animations: "disabled",
    });
  }
  if (screen === "backpack")
    await page.screenshot({
      path: "screenshots/25-chinese-backpack.png",
      animations: "disabled",
    });
  if (screen === "help")
    await page.screenshot({
      path: "screenshots/26-chinese-guide.png",
      animations: "disabled",
    });
  await page.locator(".close-overlay").click();
}
await page.locator('.hud-nav [data-open="pause"]').click();
await page
  .locator('section[data-screen="pause"] [data-open="settings"]')
  .click();
await page.locator("#language").selectOption("en");
await page.locator(".close-overlay").click();
await page.keyboard.press("KeyJ");
await page.getByRole("heading", { name: "Field atlas", exact: true }).waitFor();
if (
  (await page.locator(".species-detail h2").textContent()) !== "Pearl Lantern"
)
  throw new Error("English atlas round-trip failed.");
await page.keyboard.press("Escape");
await page.waitForTimeout(350);
await page.keyboard.press("Escape");
await page.getByRole("heading", { name: "Expedition paused" }).waitFor();
const exportEvent = page.waitForEvent("download");
await page.locator('[data-action="export"]').first().click();
const saveDownload = await exportEvent;
const save = JSON.parse(await readFile(await saveDownload.path(), "utf8"));
const regions = [];
for (const [x, z, biome, habitat] of [
  [0, 15, "forest", "Starpetal Meadows"],
  [-48, -12, "forest", "The Fernwood"],
  [48, -12, "forest", "Veilwillow Grove"],
  [0, -65, "forest", "Sporelight Wetlands"],
  [-32, -96, "desert", "Sunwell Oasis"],
  [112, 0, "desert", "The Cactus Garden"],
  [48, -168, "desert", "Ochre Badlands"],
  [-48, 112, "caves", "Prism Gardens"],
  [0, 112, "caves", "The Fungal Hollow"],
  [0, 176, "caves", "Echo Vaults"],
  [65, 12, "forest", "Firstlight Lake · Swimming"],
  [145, 48.28125, "desert", "The Willowrun · Swimming"],
]) {
  const regionSave = { ...save, position: { x, z }, heading: 0, pitch: 0 };
  await page.locator(".import-file").setInputFiles({
    name: "release-check.json",
    mimeType: "application/json",
    buffer: Buffer.from(JSON.stringify(regionSave)),
  });
  await page.waitForTimeout(350);
  await page.getByRole("button", { name: /Resume expedition/ }).click();
  await page.waitForTimeout(2600);
  if ((await page.locator("#hud-habitat").textContent()) !== habitat)
    throw new Error(`Expected ${habitat} at (${x},${z}).`);
  await page.screenshot({
    path: `screenshots/habitat-${habitat.toLowerCase().replaceAll(" ", "-").replace("·", "at")}.png`,
  });
  const fps = await page.evaluate(async () => {
    const times = [];
    let previous;
    await new Promise((resolve) => {
      function sample(now) {
        if (previous) times.push(now - previous);
        previous = now;
        if (times.length < 120) requestAnimationFrame(sample);
        else resolve();
      }
      requestAnimationFrame(sample);
    });
    times.sort((a, b) => a - b);
    return {
      mean: Math.round(
        1000 / (times.reduce((a, b) => a + b, 0) / times.length),
      ),
      slowFrameMs: Number(times[Math.floor(times.length * 0.95)].toFixed(2)),
    };
  });
  regions.push({
    biome,
    habitat,
    position: { x, z },
    region: await page.locator("#hud-region").textContent(),
    fps,
  });
  await page.keyboard.press("Escape");
  await page.getByRole("heading", { name: "Expedition paused" }).waitFor();
}
// The game still boots and resumes with all network requests restricted to localhost.
await page.reload();
await page.getByRole("button", { name: /Continue expedition/ }).click();
await page.waitForTimeout(1000);
if ((await page.locator("#hud-discovered").textContent()) !== "1")
  throw new Error("Release save did not resume.");
const report = {
  version: JSON.parse(await readFile("package.json", "utf8")).version,
  browser: await browser.version(),
  viewport: "1440 × 900",
  quality: "balanced",
  developerAPIAbsent: true,
  bilingualSelectionAndRoundTrip: true,
  chineseVisibleCopyAudits: chineseCopyAudits,
  firstScan: true,
  exportImport: true,
  saveResume: true,
  externalRequests,
  failedRequests,
  errors,
  regions,
};
await writeFile(
  "docs/release-check.json",
  JSON.stringify(report, null, 2) + "\n",
);
console.log(JSON.stringify(report, null, 2));
await browser.close();
if (errors.length || failedRequests.length || externalRequests.length)
  process.exit(1);
