# Original Vesper models

This directory contains 74 self-contained binary glTF models: 67 world-model types, one field scanner, one landing pod and five field supply/tool models. Every GLB contains actual 3D mesh geometry and PBR material values. No textures or external assets are required.

These assets are original, programmatically authored in `src/models.ts`, `src/flora-models.ts`, `src/fauna-models.ts`, `src/aquatic-avian-models.ts`, `src/field-models.ts` and `src/model-kit.ts`. The runtime uses cached code-authored geometry; these GLB files are reusable exports for inspection, editing and import into other tools. Consult `manifest.json` for provenance, bounds, SHA-256 checksums and round-trip verification.

Regenerate from the project root:

```sh
node --import tsx tools/export-models.ts
```

Coordinates are right-handed, +Y up, in metres. World models rest at y=0. Scanner aperture faces -Z; landing pod door faces +Z. Full visible bounds are not collision shapes. Reuse and redistribution follow the project owner's licensing terms.
