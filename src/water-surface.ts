import * as THREE from "three";
import { waterAt } from "./systems/waters";

const CHUNK_SIZE = 64;
const SEGMENTS = 32;
const GRID_STEP = CHUNK_SIZE / SEGMENTS;
const MIN_DEPTH = 0.025;
const SURFACE_LIFT = 0.012;
type WaterSample = NonNullable<ReturnType<typeof waterAt>>;
interface WaterVertex {
  x: number;
  z: number;
  sample: WaterSample | null;
}

/** One GPU material for every lake and river. Chunks own only their geometry;
 * never dispose this material as part of chunk or expedition removal. */
let sharedMaterial: THREE.MeshStandardMaterial | undefined;
function waterMaterial(): THREE.MeshStandardMaterial {
  if (sharedMaterial) return sharedMaterial;
  const material = new THREE.MeshStandardMaterial({
    name: "Vesper / clear flowing water",
    color: "#ffffff",
    vertexColors: true,
    roughness: 0.24,
    metalness: 0.11,
    transparent: true,
    opacity: 0.54,
    depthWrite: false,
    side: THREE.DoubleSide,
  });
  const time = { value: 0 };
  material.userData.waterTime = time;
  material.userData.sharedResources = true;
  material.onBeforeCompile = (shader) => {
    shader.uniforms.waterTime = time;
    shader.vertexShader =
      `
attribute float waterDepth;
attribute vec2 waterFlow;
varying vec3 vWaterSurface;
varying float vWaterDepth;
varying vec2 vWaterFlow;
` + shader.vertexShader;
    shader.vertexShader = shader.vertexShader.replace(
      "#include <begin_vertex>",
      `#include <begin_vertex>
vWaterSurface = (modelMatrix * vec4(position, 1.)).xyz;
vWaterDepth = waterDepth;
vWaterFlow = waterFlow;
`,
    );
    shader.fragmentShader =
      `
uniform float waterTime;
varying vec3 vWaterSurface;
varying float vWaterDepth;
varying vec2 vWaterFlow;
` + shader.fragmentShader;
    shader.fragmentShader = shader.fragmentShader.replace(
      "#include <color_fragment>",
      `#include <color_fragment>
float flowStrength = length(vWaterFlow);
vec2 flowDirection = flowStrength > .001 ? vWaterFlow / flowStrength : vec2(.62, .78);
vec2 crossDirection = vec2(-flowDirection.y, flowDirection.x);
float alongFlow = dot(vWaterSurface.xz, flowDirection);
float acrossFlow = dot(vWaterSurface.xz, crossDirection);
float waterPhase = alongFlow * .91 - waterTime * (.32 + flowStrength * .45);
float ripplePhase = acrossFlow * 1.43 + alongFlow * .24 + waterTime * .29;
float shallowEdge = 1. - smoothstep(.025, .25, vWaterDepth);
float fineWave = pow(.5 + .5 * sin(waterPhase + sin(ripplePhase) * .4), 10.);
diffuseColor.rgb *= .965 + fineWave * .14;
diffuseColor.rgb += vec3(.03, .046, .052) * fineWave * smoothstep(.06, .45, vWaterDepth);
diffuseColor.rgb = mix(diffuseColor.rgb, vec3(.72, .86, .77), shallowEdge * .08);
diffuseColor.a *= .5 + .5 * smoothstep(.025, .7, vWaterDepth);
`,
    );
    shader.fragmentShader = shader.fragmentShader.replace(
      "#include <normal_fragment_begin>",
      `#include <normal_fragment_begin>
float rippleAmplitude = .026 * smoothstep(.025, .28, vWaterDepth);
vec2 waterSlope = flowDirection * cos(waterPhase) * rippleAmplitude
  + crossDirection * cos(ripplePhase) * rippleAmplitude * .6;
normal = normalize(normal + mat3(viewMatrix) * vec3(waterSlope.x, 0., waterSlope.y));
float waterFresnel = pow(1. - abs(dot(normal, normalize(vViewPosition))), 3.);
diffuseColor.rgb = mix(diffuseColor.rgb, vec3(.54, .77, .86), waterFresnel * .28);
`,
    );
  };
  material.customProgramCacheKey = () => "vesper / clipped flowing water / 1";
  sharedMaterial = material;
  return material;
}

function wet(vertex: WaterVertex): boolean {
  return !!vertex.sample && vertex.sample.depth >= MIN_DEPTH;
}

/** Bisect the actual continuous water field instead of leaving square grid
 * cells at the bank. The last inside point avoids placing water over dry land. */
function bankIntersection(
  seed: string,
  inside: WaterVertex,
  outside: WaterVertex,
): WaterVertex {
  let low = inside,
    high = outside;
  for (let i = 0; i < 8; i++) {
    const x = (low.x + high.x) * 0.5,
      z = (low.z + high.z) * 0.5;
    const middle: WaterVertex = { x, z, sample: waterAt(seed, x, z) };
    if (wet(middle)) low = middle;
    else high = middle;
  }
  return low;
}

function clippedTriangle(seed: string, vertices: WaterVertex[]): WaterVertex[] {
  const result: WaterVertex[] = [];
  for (let i = 0; i < vertices.length; i++) {
    const current = vertices[i],
      next = vertices[(i + 1) % vertices.length];
    if (wet(current)) {
      if (wet(next)) result.push(next);
      else result.push(bankIntersection(seed, current, next));
    } else if (wet(next)) {
      result.push(bankIntersection(seed, next, current), next);
    }
  }
  return result;
}

/** A globally aligned 2-metre grid with clipped shoreline triangles. Surface
 * levels and bank intersections use world coordinates on both sides of seams.
 * No per-water-body lights, textures, render targets or runtime downloads. */
export function createWaterSurface(
  seed: string,
  cx: number,
  cz: number,
): THREE.Mesh | null {
  if (!Number.isSafeInteger(cx) || !Number.isSafeInteger(cz))
    throw new Error("Invalid water chunk coordinates.");
  const startX = cx * CHUNK_SIZE,
    startZ = cz * CHUNK_SIZE;
  const grid: WaterVertex[] = [];
  for (let z = 0; z <= SEGMENTS; z++)
    for (let x = 0; x <= SEGMENTS; x++) {
      const wx = startX + x * GRID_STEP,
        wz = startZ + z * GRID_STEP;
      grid.push({ x: wx, z: wz, sample: waterAt(seed, wx, wz) });
    }
  if (!grid.some(wet)) return null;
  const positions: number[] = [],
    colors: number[] = [],
    depths: number[] = [],
    flows: number[] = [];
  const shallow = new THREE.Color("#79bdbe"),
    deep = new THREE.Color("#397c96"),
    color = new THREE.Color();
  const emit = (vertex: WaterVertex) => {
    const sample = vertex.sample!;
    const depth = Math.max(0, Math.min(8, sample.depth));
    color.copy(shallow).lerp(deep, THREE.MathUtils.smoothstep(depth, 0.2, 2.8));
    positions.push(vertex.x, sample.level + SURFACE_LIFT, vertex.z);
    colors.push(color.r, color.g, color.b);
    depths.push(depth);
    flows.push(sample.flow.x, sample.flow.z);
  };
  for (let z = 0; z < SEGMENTS; z++)
    for (let x = 0; x < SEGMENTS; x++) {
      const a = grid[z * (SEGMENTS + 1) + x],
        b = grid[z * (SEGMENTS + 1) + x + 1];
      const d = grid[(z + 1) * (SEGMENTS + 1) + x],
        c = grid[(z + 1) * (SEGMENTS + 1) + x + 1];
      for (const triangle of [
        [a, d, c],
        [a, c, b],
      ]) {
        const clipped = clippedTriangle(seed, triangle);
        for (let i = 1; i + 1 < clipped.length; i++) {
          const p = clipped[0],
            q = clipped[i],
            r = clipped[i + 1];
          const area = (q.z - p.z) * (r.x - p.x) - (q.x - p.x) * (r.z - p.z);
          if (area > 0.000001) {
            emit(p);
            emit(q);
            emit(r);
          }
        }
      }
    }
  if (!positions.length) return null;
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute(
    "position",
    new THREE.Float32BufferAttribute(positions, 3),
  );
  geometry.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));
  geometry.setAttribute(
    "waterDepth",
    new THREE.Float32BufferAttribute(depths, 1),
  );
  geometry.setAttribute(
    "waterFlow",
    new THREE.Float32BufferAttribute(flows, 2),
  );
  geometry.computeVertexNormals();
  geometry.computeBoundingBox();
  geometry.computeBoundingSphere();
  const mesh = new THREE.Mesh(geometry, waterMaterial());
  mesh.name = `Vesper / water / ${cx},${cz}`;
  mesh.receiveShadow = true;
  mesh.castShadow = false;
  mesh.renderOrder = 2;
  mesh.userData.chunkOwnedGeometry = true;
  mesh.userData.sharedMaterial = true;
  return mesh;
}

/** The caller supplies expedition time, so pausing naturally freezes ripples.
 * Reduced motion fixes the pattern at its resting state rather than removing
 * the functional water surface. Safe to call repeatedly for shared materials. */
export function updateWaterMaterial(
  material: THREE.Material | THREE.Material[],
  time: number,
  reducedMotion: boolean,
): void {
  for (const item of Array.isArray(material) ? material : [material]) {
    const uniform = item.userData.waterTime as { value: number } | undefined;
    if (uniform)
      uniform.value =
        reducedMotion || !Number.isFinite(time) ? 0 : Math.max(0, time);
  }
}
