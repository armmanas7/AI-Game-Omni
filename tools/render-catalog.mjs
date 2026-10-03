/** Rebuild the field-atlas artwork from the original Three.js models.
 * Start Vite, then run `node tools/render-catalog.mjs [http://127.0.0.1:4173]`.
 * Uses the browser configured by Playwright; PLAYWRIGHT_BROWSERS_PATH is honored.
 * Outputs 384px transparent PNGs and a provenance manifest. No external images. */
import { chromium } from "@playwright/test";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { createHash } from "node:crypto";
import { fileURLToPath } from "node:url";
import path from "node:path";

const server = new URL(process.argv[2] ?? "http://127.0.0.1:4173");
if (!["127.0.0.1", "localhost", "[::1]"].includes(server.hostname)) {
  throw new Error(
    "The catalog renderer expects a local Vite development server.",
  );
}
const destination = fileURLToPath(
  new URL("../public/specimens/", import.meta.url),
);
await mkdir(destination, { recursive: true });
const browser = await chromium.launch({
  headless: true,
  args: ["--enable-webgl", "--use-angle=metal"],
});
const page = await browser.newPage({
  viewport: { width: 384, height: 384 },
  deviceScaleFactor: 1,
});
const diagnostics = [];
page.on("pageerror", (error) => diagnostics.push(error.message));
page.on("console", (message) => {
  if (message.type() === "error") diagnostics.push(message.text());
});

try {
  await page.goto(new URL("/tools/catalog-preview.html", server).href, {
    waitUntil: "networkidle",
  });
  await page.waitForFunction(() => Boolean(window.__catalog), {
    timeout: 30_000,
  });
  const catalog = await page.evaluate(() => window.__catalog.species);
  const manifest = {
    name: "Vesper field-atlas specimen portraits",
    provenance:
      "Rendered from original code-authored models in src/models.ts, src/flora-models.ts, src/fauna-models.ts and src/aquatic-avian-models.ts. No third-party imagery.",
    width: 384,
    height: 384,
    background: "transparent",
    camera:
      "consistent orthographic three-quarter view; creatures face local -Z",
    modelSeed: 8,
    count: catalog.length,
    totalBytes: 0,
    sourceFiles: await Promise.all(
      [
        "src/models.ts",
        "src/model-kit.ts",
        "src/flora-models.ts",
        "src/fauna-models.ts",
        "src/aquatic-avian-models.ts",
        "src/data.ts",
        "tools/catalog-preview.html",
      ].map(async (file) => ({
        file,
        sha256: createHash("sha256")
          .update(await readFile(new URL(`../${file}`, import.meta.url)))
          .digest("hex"),
      })),
    ),
    entries: [],
  };
  for (const species of catalog) {
    if (!/^[a-z0-9-]+$/.test(species.id))
      throw new Error(`Unsafe species id: ${species.id}`);
    let rendered;
    for (let attempt = 0; attempt < 3; attempt++) {
      try {
        rendered = await page.evaluate(
          (id) => window.__catalog.render(id),
          species.id,
        );
        await page.locator("canvas").screenshot({
          path: path.join(destination, `${species.id}.png`),
          omitBackground: true,
        });
        break;
      } catch (error) {
        if (attempt === 2) throw error;
        // A concurrent source edit can trigger a Vite page reload. Recover once
        // it settles, without restarting or interacting with the live game.
        await page.goto(new URL("/tools/catalog-preview.html", server).href, {
          waitUntil: "networkidle",
        });
        await page.waitForFunction(() => Boolean(window.__catalog), {
          timeout: 30_000,
        });
      }
    }
    const raster = await readFile(path.join(destination, `${species.id}.png`));
    manifest.totalBytes += raster.byteLength;
    manifest.entries.push({
      ...species,
      file: `${species.id}.png`,
      ...rendered,
      bytes: raster.byteLength,
      sha256: createHash("sha256").update(raster).digest("hex"),
    });
    console.log(`${manifest.entries.length}/${catalog.length} ${species.id}`);
  }
  await writeFile(
    path.join(destination, "manifest.json"),
    `${JSON.stringify(manifest, null, 2)}\n`,
  );
  if (diagnostics.length)
    throw new Error(
      `Render diagnostics: ${[...new Set(diagnostics)].join("; ")}`,
    );
  console.log(
    `Rendered ${catalog.length} transparent portraits to public/specimens.`,
  );
} finally {
  await browser.close();
}
