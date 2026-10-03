import { createHash } from "node:crypto";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import * as THREE from "three";
import { GLTFExporter } from "three/addons/exporters/GLTFExporter.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import {
  createLandingPod,
  createModel,
  createScanner,
  MODEL_BOUNDS,
} from "../src/models";
import type { ModelKind } from "../src/types";
import {
  createFieldModel,
  FIELD_MODEL_KINDS,
  FIELD_MODEL_BOUNDS,
  type FieldModelKind,
} from "../src/field-models";

// GLTFExporter needs the browser FileReader API only to turn Blob buffers into
// ArrayBuffers. These models have no textures, so no DOM/canvas polyfill is needed.
class NodeFileReader {
  result: ArrayBuffer | string | null = null;
  error: unknown = null;
  onloadend: ((event: { target: NodeFileReader }) => void) | null = null;
  onerror: ((event: { target: NodeFileReader }) => void) | null = null;

  private read(blob: Blob, asDataURL: boolean): void {
    void blob
      .arrayBuffer()
      .then((buffer) => {
        this.result = asDataURL
          ? `data:${blob.type};base64,${Buffer.from(buffer).toString("base64")}`
          : buffer;
        this.onloadend?.({ target: this });
      })
      .catch((error) => {
        this.error = error;
        this.onerror?.({ target: this });
        this.onloadend?.({ target: this });
      });
  }

  readAsArrayBuffer(blob: Blob): void {
    this.read(blob, false);
  }
  readAsDataURL(blob: Blob): void {
    this.read(blob, true);
  }
}

if (typeof globalThis.FileReader === "undefined")
  Object.assign(globalThis, { FileReader: NodeFileReader });

const projectDirectory = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const outputDirectory = resolve(projectDirectory, "public/models");
const exporter = new GLTFExporter();
const loader = new GLTFLoader();
const seed = 0;
const round = (value: number) => Math.round(value * 1e6) / 1e6;
const vector = (v: THREE.Vector3) => v.toArray().map(round);

function stats(object: THREE.Object3D) {
  object.updateMatrixWorld(true);
  const box = new THREE.Box3().setFromObject(object);
  let meshes = 0,
    primitives = 0,
    triangles = 0,
    radius = 0;
  const point = new THREE.Vector3();
  object.traverse((child) => {
    if (!(child instanceof THREE.Mesh)) return;
    meshes++;
    const geometry = child.geometry as THREE.BufferGeometry;
    const position = geometry.getAttribute("position");
    // glTF stores a material group as a separate render primitive. Its loader
    // may split one multi-material Mesh into several Mesh objects, so verify
    // actual rendered ranges rather than JavaScript scene-node counts.
    const total = geometry.index?.count ?? position.count;
    const ranges = Array.isArray(child.material)
      ? geometry.groups
      : [{ start: 0, count: total, materialIndex: 0 }];
    for (const range of ranges) {
      const start = Math.max(0, range.start, geometry.drawRange.start);
      const end = Math.min(
        total,
        range.start + range.count,
        geometry.drawRange.start + geometry.drawRange.count,
      );
      if (end > start) {
        primitives++;
        triangles += (end - start) / 3;
      }
    }
    for (let i = 0; i < position.count; i++) {
      point.fromBufferAttribute(position, i).applyMatrix4(child.matrixWorld);
      if (!Number.isFinite(point.x + point.y + point.z))
        throw new Error(`Non-finite vertex in ${object.name}`);
      radius = Math.max(radius, Math.hypot(point.x, point.z));
    }
  });
  return {
    meshes,
    primitives,
    triangles,
    box,
    bounds: {
      min: vector(box.min),
      max: vector(box.max),
      size: vector(box.getSize(new THREE.Vector3())),
      radius: round(radius),
      height: round(box.max.y - box.min.y),
    },
  };
}

function verifyHeader(bytes: Uint8Array, filename: string): void {
  if (bytes.byteLength <= 28) throw new Error(`${filename}: empty GLB`);
  const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
  if (view.getUint32(0, true) !== 0x46546c67)
    throw new Error(`${filename}: invalid glTF magic`);
  if (view.getUint32(4, true) !== 2)
    throw new Error(`${filename}: expected GLB version 2`);
  if (view.getUint32(8, true) !== bytes.byteLength)
    throw new Error(`${filename}: GLB length mismatch`);
  if (view.getUint32(16, true) !== 0x4e4f534a)
    throw new Error(`${filename}: missing JSON chunk`);
  const jsonLength = view.getUint32(12, true);
  const binaryStart = 20 + jsonLength;
  if (
    binaryStart + 8 > bytes.byteLength ||
    view.getUint32(binaryStart + 4, true) !== 0x004e4942
  )
    throw new Error(`${filename}: missing binary chunk`);
  if (binaryStart + 8 + view.getUint32(binaryStart, true) !== bytes.byteLength)
    throw new Error(`${filename}: binary chunk length mismatch`);
  const json = JSON.parse(
    new TextDecoder().decode(bytes.subarray(20, binaryStart)),
  );
  if (
    json.asset?.version !== "2.0" ||
    !json.meshes?.length ||
    !json.accessors?.length
  )
    throw new Error(`${filename}: missing model data`);
  if (
    json.images?.length ||
    json.buffers?.some((buffer: { uri?: string }) => buffer.uri)
  )
    throw new Error(`${filename}: unexpected external asset dependency`);
}

async function exportOne(
  id: string,
  source: THREE.Group,
  kind?: ModelKind | FieldModelKind,
) {
  const filename = `${id}.glb`;
  const original = stats(source);
  const data = await exporter.parseAsync(source, {
    binary: true,
    trs: true,
    onlyVisible: true,
    copyright:
      "Original Vesper models, authored programmatically in src/models.ts, src/flora-models.ts, src/fauna-models.ts, src/aquatic-avian-models.ts, src/field-models.ts and src/model-kit.ts. No third-party model or texture assets.",
  });
  if (!(data instanceof ArrayBuffer))
    throw new Error(`${filename}: exporter did not return a binary model`);
  await writeFile(resolve(outputDirectory, filename), new Uint8Array(data));

  // Read the actual saved file and round-trip through the standard glTF loader.
  const saved = await readFile(resolve(outputDirectory, filename));
  verifyHeader(saved, filename);
  const buffer = saved.buffer.slice(
    saved.byteOffset,
    saved.byteOffset + saved.byteLength,
  ) as ArrayBuffer;
  const parsed = await loader.parseAsync(buffer, "");
  const imported = stats(parsed.scene);
  if (
    imported.primitives !== original.primitives ||
    imported.triangles !== original.triangles
  )
    throw new Error(
      `${filename}: rendered primitive/triangle count changed on import`,
    );
  if (
    original.box.min.distanceTo(imported.box.min) > 0.0001 ||
    original.box.max.distanceTo(imported.box.max) > 0.0001
  )
    throw new Error(`${filename}: bounds changed on import`);

  return {
    id,
    file: filename,
    category: kind
      ? kind.startsWith("field-")
        ? "field-tool"
        : "world-model"
      : "equipment",
    seed: kind ? seed : null,
    bytes: saved.byteLength,
    sha256: createHash("sha256").update(saved).digest("hex"),
    meshes: original.meshes,
    renderedPrimitives: original.primitives,
    triangles: original.triangles,
    bounds: original.bounds,
    ...(kind
      ? {
          conservativeBounds: kind.startsWith("field-")
            ? FIELD_MODEL_BOUNDS[kind as FieldModelKind]
            : MODEL_BOUNDS[kind as ModelKind],
          groundNormalized: true,
        }
      : { groundNormalized: id === "landing-pod" }),
    verification: {
      glbVersion: 2,
      binaryHeader: "passed",
      savedFileRoundTrip: "passed",
      importedMeshes: imported.meshes,
      renderedPrimitives: imported.primitives,
    },
  };
}

await mkdir(outputDirectory, { recursive: true });
const assets = [];
for (const kind of Object.keys(MODEL_BOUNDS) as ModelKind[])
  assets.push(await exportOne(kind, createModel(kind, seed), kind));
assets.push(await exportOne("scanner", createScanner()));
assets.push(await exportOne("landing-pod", createLandingPod()));
for (const kind of FIELD_MODEL_KINDS)
  assets.push(await exportOne(kind, createFieldModel(kind, seed), kind));

const sourceFiles = [
  "src/models.ts",
  "src/model-kit.ts",
  "src/flora-models.ts",
  "src/fauna-models.ts",
  "src/aquatic-avian-models.ts",
  "src/field-models.ts",
];
const sources = await Promise.all(
  sourceFiles.map(async (file) => ({
    file,
    sha256: createHash("sha256")
      .update(await readFile(resolve(projectDirectory, file)))
      .digest("hex"),
  })),
);
const totalBytes = assets.reduce((total, asset) => total + asset.bytes, 0);
const manifest = {
  project: "Vesper — An Atlas of Elsewhere",
  format: "glTF 2.0 binary (GLB)",
  count: assets.length,
  totalBytes,
  coordinateSystem: "Right-handed, +Y up, metres",
  provenance: {
    origin:
      "Original programmatic 3D models authored for this project in TypeScript/Three.js.",
    thirdPartyModels: false,
    downloadedAssets: false,
    textures: false,
    generatedRasterSubstitutes: false,
    sources,
    exporter: "tools/export-models.ts",
    generator: "THREE.GLTFExporter",
    reuse:
      "Editable project assets; follow the project owner’s licensing terms when redistributing.",
  },
  regeneration: "node --import tsx tools/export-models.ts",
  notes: [
    "Exports contain seed-0 variants. Runtime creates deterministic seeded variants directly from the cached model library.",
    "All geometry, material properties and mesh transforms are embedded; no texture files or network requests are required.",
    "World model bounds include the entire visible sculpture and are not collision shapes.",
    "Scanner aperture faces -Z and its origin is camera-local. Landing pod door faces +Z and its lowest geometry is y=0.",
  ],
  assets,
};
await writeFile(
  resolve(outputDirectory, "manifest.json"),
  `${JSON.stringify(manifest, null, 2)}\n`,
);
await writeFile(
  resolve(outputDirectory, "README.md"),
  `# Original Vesper models\n\nThis directory contains ${assets.length} self-contained binary glTF models: ${Object.keys(MODEL_BOUNDS).length} world-model types, one field scanner, one landing pod and five field supply/tool models. Every GLB contains actual 3D mesh geometry and PBR material values. No textures or external assets are required.\n\nThese assets are original, programmatically authored in \`src/models.ts\`, \`src/flora-models.ts\`, \`src/fauna-models.ts\`, \`src/aquatic-avian-models.ts\`, \`src/field-models.ts\` and \`src/model-kit.ts\`. The runtime uses cached code-authored geometry; these GLB files are reusable exports for inspection, editing and import into other tools. Consult \`manifest.json\` for provenance, bounds, SHA-256 checksums and round-trip verification.\n\nRegenerate from the project root:\n\n\`\`\`sh\nnode --import tsx tools/export-models.ts\n\`\`\`\n\nCoordinates are right-handed, +Y up, in metres. World models rest at y=0. Scanner aperture faces -Z; landing pod door faces +Z. Full visible bounds are not collision shapes. Reuse and redistribution follow the project owner's licensing terms.\n`,
);
console.log(
  `Exported and round-trip verified ${assets.length} GLB models (${(totalBytes / 1024 / 1024).toFixed(2)} MiB) to public/models.`,
);
