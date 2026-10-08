import { chromium, webkit, devices } from "@playwright/test";
import { writeFile } from "node:fs/promises";
const url = process.env.VESPER_TEST_URL || "http://127.0.0.1:4174/";
const results = [];
const assert = (condition, message) => {
  if (!condition) throw new Error(message);
};
for (const [engine, type] of [
  ["chromium", chromium],
  ["webkit", webkit],
]) {
  const browser = await type.launch({
    headless: true,
    ...(engine === "chromium"
      ? { args: ["--enable-webgl", "--use-angle=metal"] }
      : {}),
  });
  try {
    for (const language of ["en", "zh-CN"]) {
      const context = await browser.newContext({
        ...devices["iPhone 13"],
        viewport: { width: 390, height: 844 },
      });
      const page = await context.newPage();
      const errors = [];
      page.on("pageerror", (e) => errors.push(e.message));
      try {
        await page.goto(url, { waitUntil: "networkidle" });
        await page.locator(`button[data-language="${language}"]`).tap();
        await page.locator("#expedition-seed").fill("VESPER-01");
        await page.locator('[data-action="start"]').tap();
        await page.locator(".game-hud").waitFor({ state: "visible" });
        await page.waitForTimeout(1200);
        assert(
          await page.locator("#touch-controls").isVisible(),
          "Automatic touch controls absent",
        );
        const scan = page.locator('[data-touch-action="scan"]');
        const event = {
          pointerId: 71,
          pointerType: "touch",
          isPrimary: true,
          button: 0,
          buttons: 1,
          bubbles: true,
        };
        await scan.dispatchEvent("pointerdown", event);
        try {
          await page.waitForFunction(
            () =>
              Number(document.querySelector("#hud-discovered")?.textContent) >=
              1,
            null,
            { timeout: 12000 },
          );
        } finally {
          await scan.dispatchEvent("pointerup", { ...event, buttons: 0 });
        }
        await page.locator(".discovery-card").waitFor({ state: "visible" });
        const realCard = await page.locator(".discovery-card").boundingBox();
        assert(
          realCard.height <= 90,
          `Discovery notification too tall: ${realCard.height}`,
        );
        await page.screenshot({
          path: `screenshots/mobile-hud-${engine}-${language}-discovery-portrait.png`,
          animations: "disabled",
        });
        await page.locator('[data-action="discovery-journal"]').tap();
        await page.locator(".specimen-portrait").waitFor({ state: "visible" });
        assert(
          !(await page.locator(".discovery-card").isVisible()),
          "Discovery banner covers an open menu",
        );
        assert(
          await page.locator(".overlay-panel").isVisible(),
          "Full discovery record unavailable",
        );
        await page.locator(".close-overlay").tap();
        await page.locator('[data-action="dismiss-discovery"]').tap();
        // Use frozen copies of the real HUD/control markup for deterministic worst-case layout states.
        // This avoids relying on a particular procedural encounter to exercise long dependencies and simultaneous panels.
        await page.evaluate(() => {
          const original = document.querySelector("#app");
          const fixture = original.cloneNode(true);
          fixture.id = "mobile-layout-fixture";
          original.style.visibility = "hidden";
          document.body.append(fixture);
          [...fixture.querySelectorAll("canvas")].forEach((canvas, index) => {
            const source = original.querySelectorAll("canvas")[index];
            if (source) canvas.getContext("2d").drawImage(source, 0, 0);
          });
          const controls = document.querySelector("#touch-controls");
          const copiedControls = controls.cloneNode(true);
          controls.id = "touch-controls-runtime";
          controls.style.visibility = "hidden";
          document.body.append(copiedControls);
        });
        for (const viewport of [
          { width: 320, height: 568 },
          { width: 375, height: 594 },
          { width: 360, height: 740 },
          { width: 390, height: 844 },
          { width: 844, height: 390 },
          { width: 568, height: 320 },
        ]) {
          await page.setViewportSize(viewport);
          for (const scale of [0.8, 1, 1.4])
            for (const side of ["left", "right"]) {
              for (const state of [
                "exploring",
                "specimen",
                "discovery",
                "field-and-specimen",
                "discovery-and-field",
                "next-target-after-discovery",
              ]) {
                await page.evaluate(
                  ({ scale, side, state, language }) => {
                    const root = document.querySelector(
                      "#mobile-layout-fixture",
                    );
                    root.dataset.touch = "true";
                    root.dataset.screen = "playing";
                    root.dataset.joystickSide = side;
                    root.style.setProperty("--touch-scale", scale);
                    root.classList.toggle(
                      "has-field-target",
                      [
                        "field-and-specimen",
                        "discovery-and-field",
                        "next-target-after-discovery",
                      ].includes(state),
                    );
                    root.classList.toggle(
                      "has-discovery",
                      [
                        "discovery",
                        "discovery-and-field",
                        "next-target-after-discovery",
                      ].includes(state),
                    );
                    root.querySelector(".game-hud").hidden = false;
                    const target = root.querySelector(".target-instrument");
                    target.hidden = false;
                    target.classList.toggle(
                      "is-scanned",
                      state !== "next-target-after-discovery",
                    );
                    target.querySelector("h2").textContent =
                      language === "en" ? "Heartwood Archive" : "心木档案";
                    target.querySelector("#target-prompt").textContent =
                      language === "en"
                        ? "Record all 3 surrounding clues first · 1/3"
                        : "先扫描周围的全部 3 条线索 · 1/3";
                    const field = root.querySelector(".field-instrument");
                    field.hidden = ![
                      "field-and-specimen",
                      "discovery-and-field",
                      "next-target-after-discovery",
                    ].includes(state);
                    field.querySelector("h2").textContent =
                      language === "en"
                        ? "Damaged Survey Probe"
                        : "损坏的勘测探针";
                    field.querySelector("#field-prompt").textContent =
                      language === "en"
                        ? "Needs 2 alloy + 1 crystal · collect supplies first"
                        : "需要 2 份合金和 1 份晶体 · 请先收集材料";
                    field.querySelector(".field-action").disabled = true;
                    const card = root.querySelector(".discovery-card");
                    card.hidden = ![
                      "discovery",
                      "discovery-and-field",
                      "next-target-after-discovery",
                    ].includes(state);
                    card.classList.remove("temporarily-hidden");
                    if (state === "exploring")
                      target.querySelector("#target-prompt").textContent =
                        language === "en"
                          ? "Hold Scan to record"
                          : "长按扫描以收录";
                    const stack = root.querySelector(".toast-stack");
                    stack.innerHTML =
                      '<div class="toast toast-error"><div><strong></strong><p></p></div><button aria-label="Dismiss notification">×</button></div>';
                    stack.querySelector("strong").textContent =
                      language === "en" ? "Landmark locked" : "遗迹尚未解锁";
                    stack.querySelector("p").textContent =
                      language === "en"
                        ? "Record all 3 surrounding clues first. The map and survey pulse can help you locate them."
                        : "请先扫描周围的全部 3 条线索。你可以借助地图和勘测脉冲寻找线索。";
                    const controls = document.querySelector("#touch-controls");
                    if (state === "exploring") stack.replaceChildren();
                    controls.dataset.side = side;
                    controls.style.setProperty("--touch-scale", scale);
                  },
                  { scale, side, state, language },
                );
                await page.waitForTimeout(35);
                const layout = await page.evaluate(() => {
                  const root = document.querySelector("#mobile-layout-fixture");
                  const rect = (node) => {
                    const r = node.getBoundingClientRect();
                    return {
                      left: r.left,
                      top: r.top,
                      right: r.right,
                      bottom: r.bottom,
                      width: r.width,
                      height: r.height,
                    };
                  };
                  const visible = (node) =>
                    !!node.getClientRects().length &&
                    getComputedStyle(node).display !== "none" &&
                    getComputedStyle(node).visibility !== "hidden";
                  const panels = [
                    ...root.querySelectorAll(
                      ".location-instrument,.hud-nav,.objective-instrument,.minimap-instrument,.target-instrument,.field-instrument,.discovery-card,.toast-stack",
                    ),
                  ]
                    .filter(visible)
                    .map((node) => ({ name: node.className, ...rect(node) }));
                  const controls = [
                    ...document
                      .querySelector("#touch-controls")
                      .querySelectorAll(".touch-joystick,.touch-actions"),
                  ]
                    .filter(visible)
                    .map((node) => ({ name: node.className, ...rect(node) }));
                  const buttons = [
                    ...root.querySelectorAll(
                      ".hud-nav button,.discovery-card button,.field-action",
                    ),
                    ...document
                      .querySelector("#touch-controls")
                      .querySelectorAll(".touch-action"),
                  ]
                    .filter(visible)
                    .map((node) => ({
                      name: node.textContent.trim(),
                      ...rect(node),
                    }));
                  const aim = {
                    left: innerWidth / 2 - 20,
                    right: innerWidth / 2 + 20,
                    top: innerHeight / 2 - 20,
                    bottom: innerHeight / 2 + 20,
                  };
                  return {
                    panels,
                    controls,
                    buttons,
                    aim,
                    visibleActions: [
                      ...document.querySelectorAll(
                        "#touch-controls .touch-action",
                      ),
                    ].filter(visible).length,
                    area:
                      panels
                        .concat(controls)
                        .reduce((sum, r) => sum + r.width * r.height, 0) /
                      (innerWidth * innerHeight),
                  };
                });
                const name = `${engine} ${language} ${viewport.width}x${viewport.height} ${scale} ${side} ${state}`;
                assert(
                  layout.visibleActions === 5,
                  `${name}: duplicated menu controls`,
                );
                const areaBudget = state === "exploring" ? 0.45 : 0.65;
                if (layout.area >= areaBudget) {
                  console.log(
                    JSON.stringify({
                      name,
                      panels: layout.panels,
                      controls: layout.controls,
                    }),
                  );
                  await page.screenshot({
                    path: "screenshots/mobile-hud-layout-failure.png",
                    animations: "disabled",
                  });
                }
                assert(
                  layout.area < areaBudget,
                  `${name}: HUD occupies ${(layout.area * 100).toFixed(1)}%`,
                );
                for (const box of [...layout.panels, ...layout.controls]) {
                  assert(
                    box.left >= -0.5 &&
                      box.right <= viewport.width + 0.5 &&
                      box.top >= -0.5 &&
                      box.bottom <= viewport.height + 0.5,
                    `${name}: ${box.name} outside viewport`,
                  );
                  const a = layout.aim;
                  assert(
                    box.right <= a.left ||
                      box.left >= a.right ||
                      box.bottom <= a.top ||
                      box.top >= a.bottom,
                    `${name}: ${box.name} blocks aiming area`,
                  );
                }
                for (const button of layout.buttons)
                  assert(
                    button.width >= 43.9 && button.height >= 43.9,
                    `${name}: ${button.name} hit target too small`,
                  );
                for (const panel of layout.panels.filter((p) =>
                  /target-instrument|field-instrument|discovery-card/.test(
                    p.name,
                  ),
                ))
                  for (const control of layout.controls) {
                    assert(
                      panel.right <= control.left ||
                        panel.left >= control.right ||
                        panel.bottom <= control.top ||
                        panel.top >= control.bottom,
                      `${name}: ${panel.name} overlaps ${control.name}`,
                    );
                  }
                results.push({
                  engine,
                  language,
                  viewport,
                  scale,
                  side,
                  state,
                  occupiedFraction: Number(layout.area.toFixed(3)),
                  aimingAreaClear: true,
                  touchTargetsValid: true,
                });
                if (
                  viewport.width === 844 &&
                  scale === 1 &&
                  side === "left" &&
                  [
                    "discovery",
                    "discovery-and-field",
                    "next-target-after-discovery",
                  ].includes(state)
                )
                  await page.screenshot({
                    path: `screenshots/mobile-hud-${engine}-${language}-discovery-landscape.png`,
                    animations: "disabled",
                  });
              }
            }
        }
        assert(errors.length === 0, `${engine}: ${errors.join("; ")}`);
        console.log(
          `PASS ${engine} ${language}: 216 HUD states + real discovery/Atlas`,
        );
      } finally {
        await context.close();
      }
    }
  } finally {
    await browser.close();
  }
}
await writeFile(
  process.env.VESPER_TEST_REPORT || "docs/mobile-hud-check.json",
  JSON.stringify(
    {
      url,
      verifiedAt: new Date().toISOString(),
      realDiscoveryAndAtlasCases: 4,
      layoutCases: results.length,
      results,
      note: "Phone browser emulations. Worst-case HUD combinations use frozen real UI markup. Physical phones remain untested.",
    },
    null,
    2,
  ) + "\n",
);
