/** Verify public model/portrait manifests, decoded PNG data and compiled copies.
 * Run after building: node --import tsx tools/verify-assets.mjs
 */
import assert from "node:assert/strict";
import { readFile, readdir } from "node:fs/promises";
import { createHash } from "node:crypto";
import { inflateSync } from "node:zlib";
import { fileURLToPath } from "node:url";
import { SPECIES } from "../src/data.ts";
import { MODEL_BOUNDS } from "../src/models.ts";
import { FIELD_MODEL_KINDS } from "../src/field-models.ts";
const root = fileURLToPath(new URL("../", import.meta.url));
const sha = (b) => createHash("sha256").update(b).digest("hex");
const models = JSON.parse(
  await readFile(`${root}/public/models/manifest.json`, "utf8"),
);
const atlas = JSON.parse(
  await readFile(`${root}/public/specimens/manifest.json`, "utf8"),
);
const crcTable = Array.from({ length: 256 }, (_, n) => {
  let c = n;
  for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
  return c >>> 0;
});
const crc = (b) => {
  let c = 0xffffffff;
  for (const v of b) c = crcTable[(c ^ v) & 255] ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
};
let sources = 0,
  glbBytes = 0,
  pngBytes = 0,
  rgbaFiles = 0;
const sourceNames = new Set();
for (const source of [...models.provenance.sources, ...atlas.sourceFiles]) {
  assert.equal(
    sha(await readFile(`${root}/${source.file}`)),
    source.sha256,
    `${source.file} source hash`,
  );
  sources++;
  sourceNames.add(source.file);
}
assert(sourceNames.has("src/aquatic-avian-models.ts"));
assert(sourceNames.has("src/field-models.ts"));
const glbFiles = (await readdir(`${root}/public/models`)).filter((f) =>
  f.endsWith(".glb"),
);
assert.equal(glbFiles.length, 74);
assert.equal(models.count, 74);
assert.equal(models.assets.length, 74);
assert.equal(FIELD_MODEL_KINDS.length, 5);
for (const kind of FIELD_MODEL_KINDS)
  assert(
    models.assets.some((a) => a.id === kind && a.category === "field-tool"),
  );
assert.equal(Object.keys(MODEL_BOUNDS).length, 67);
assert.deepEqual(new Set(glbFiles), new Set(models.assets.map((a) => a.file)));
for (const a of models.assets) {
  const b = await readFile(`${root}/public/models/${a.file}`);
  glbBytes += b.length;
  assert.equal(b.length, a.bytes, a.id + " bytes");
  assert.equal(sha(b), a.sha256, a.id + " hash");
  assert.equal(b.readUInt32LE(0), 0x46546c67, a.id + " GLB magic");
  assert.equal(b.readUInt32LE(4), 2);
  assert.equal(b.readUInt32LE(8), b.length);
  const jsonLen = b.readUInt32LE(12);
  assert.equal(b.readUInt32LE(16), 0x4e4f534a);
  const gltf = JSON.parse(b.subarray(20, 20 + jsonLen).toString("utf8"));
  assert.equal(gltf.asset.version, "2.0");
  const binOffset = 20 + jsonLen;
  assert.equal(b.readUInt32LE(binOffset + 4), 0x004e4942);
  assert.equal(binOffset + 8 + b.readUInt32LE(binOffset), b.length);
  assert.equal(gltf.buffers.length, 1);
  assert(!gltf.buffers[0].uri);
  assert(!gltf.images?.length);
  assert(!gltf.textures?.length);
  assert(!gltf.extensionsRequired?.length);
  assert(gltf.meshes.length > 0);
  assert(gltf.materials.length > 0);
  assert.equal(a.verification.binaryHeader, "passed");
  assert.equal(a.verification.savedFileRoundTrip, "passed");
  for (let axis = 0; axis < 3; axis++) {
    assert(Number.isFinite(a.bounds.min[axis]));
    assert(Number.isFinite(a.bounds.max[axis]));
    assert(
      Math.abs(a.bounds.max[axis] - a.bounds.min[axis] - a.bounds.size[axis]) <
        2e-6,
    );
  }
  if (a.groundNormalized) assert(Math.abs(a.bounds.min[1]) < 1e-5);
  for (const accessor of gltf.accessors) {
    assert(accessor.count > 0);
    if (accessor.min) assert(accessor.min.every(Number.isFinite));
    if (accessor.max) assert(accessor.max.every(Number.isFinite));
  }
}
assert.equal(glbBytes, models.totalBytes);
const pngFiles = (await readdir(`${root}/public/specimens`)).filter((f) =>
  f.endsWith(".png"),
);
assert.equal(pngFiles.length, 60);
assert.equal(atlas.count, 60);
assert.equal(atlas.entries.length, 60);
assert.equal(SPECIES.length, 60);
assert.deepEqual(new Set(pngFiles), new Set(atlas.entries.map((a) => a.file)));
assert.deepEqual(
  new Set(SPECIES.map((s) => s.id)),
  new Set(atlas.entries.map((a) => a.id)),
);
for (const a of atlas.entries) {
  const b = await readFile(`${root}/public/specimens/${a.file}`);
  pngBytes += b.length;
  assert.equal(b.length, a.bytes);
  assert.equal(sha(b), a.sha256);
  assert.equal(b.subarray(0, 8).toString("hex"), "89504e470d0a1a0a");
  assert.equal(b.readUInt32BE(16), 384);
  assert.equal(b.readUInt32BE(20), 384);
  assert.equal(b[24], 8);
  assert.equal(b[25], 6);
  assert.equal(b[28], 0); // noninterlaced RGBA8
  const idat = [];
  let offset = 8,
    ended = false;
  while (offset < b.length) {
    const n = b.readUInt32BE(offset),
      type = b.subarray(offset + 4, offset + 8).toString("ascii");
    assert.equal(
      crc(b.subarray(offset + 4, offset + 8 + n)),
      b.readUInt32BE(offset + 8 + n),
      a.id + " PNG CRC",
    );
    if (type === "IDAT") idat.push(b.subarray(offset + 8, offset + 8 + n));
    offset += n + 12;
    if (type === "IEND") {
      ended = true;
      break;
    }
  }
  assert(ended);
  assert.equal(offset, b.length);
  const decoded = inflateSync(Buffer.concat(idat)),
    stride = 384 * 4;
  assert.equal(decoded.length, (stride + 1) * 384);
  let prev = Buffer.alloc(stride),
    transparent = 0,
    opaque = 0;
  const paeth = (l, u, ul) => {
    const p = l + u - ul,
      a = Math.abs(p - l),
      b = Math.abs(p - u),
      c = Math.abs(p - ul);
    return a <= b && a <= c ? l : b <= c ? u : ul;
  };
  for (let y = 0; y < 384; y++) {
    const base = y * (stride + 1),
      filter = decoded[base],
      line = Buffer.alloc(stride);
    assert(filter <= 4);
    for (let x = 0; x < stride; x++) {
      const l = x >= 4 ? line[x - 4] : 0,
        u = prev[x],
        ul = x >= 4 ? prev[x - 4] : 0;
      line[x] =
        (decoded[base + 1 + x] +
          (filter === 1
            ? l
            : filter === 2
              ? u
              : filter === 3
                ? Math.floor((l + u) / 2)
                : filter === 4
                  ? paeth(l, u, ul)
                  : 0)) &
        255;
    }
    for (let x = 3; x < stride; x += 4) {
      if (line[x] === 0) transparent++;
      if (line[x] === 255) opaque++;
    }
    prev = line;
  }
  assert(transparent > 0, a.id + " transparent background");
  assert(opaque > 0, a.id + " visible subject");
  rgbaFiles++;
  const species = SPECIES.find((s) => s.id === a.id);
  assert.equal(species.model, a.model);
  assert.equal(species.name, a.name);
  assert.equal(species.category, a.category);
}
assert.equal(pngBytes, atlas.totalBytes);
let compiledFiles = 0;
for (const folder of ["models", "specimens"]) {
  const publicFiles = await readdir(`${root}/public/${folder}`);
  assert.deepEqual(
    new Set(await readdir(`${root}/dist/${folder}`)),
    new Set(publicFiles),
  );
  for (const file of publicFiles) {
    assert.equal(
      sha(await readFile(`${root}/public/${folder}/${file}`)),
      sha(await readFile(`${root}/dist/${folder}/${file}`)),
      `${folder}/${file} compiled copy`,
    );
    compiledFiles++;
  }
}
const counts = {};
for (const s of SPECIES) counts[s.biome] = (counts[s.biome] ?? 0) + 1;
assert.deepEqual(counts, { forest: 32, desert: 16, caves: 12 });
console.log(
  JSON.stringify(
    {
      status: "passed",
      compiledFilesMatch: compiledFiles,
      glbs: glbFiles.length,
      glbBytes,
      pngs: pngFiles.length,
      pngBytes,
      rgbaTransparentPortraits: rgbaFiles,
      currentSourceHashChecks: sources,
      uniqueSourceFiles: sourceNames.size,
      worldModelFamilies: Object.keys(MODEL_BOUNDS).length,
      fieldModelFamilies: FIELD_MODEL_KINDS.length,
      catalogUniqueModels: new Set(SPECIES.map((s) => s.model)).size,
      biomeCounts: counts,
      faunaRecords: SPECIES.filter((s) => s.category === "fauna").length,
    },
    null,
    2,
  ),
);
