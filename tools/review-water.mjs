/** Independent QA only. Run with:
 * PLAYWRIGHT_BROWSERS_PATH=/private/tmp/vesper-playwright node --import tsx tools/review-water.mjs
 * Uses a disposable browser scene; never changes gameplay, saves or release files.
 * Screenshots and machine-readable observations go to /private/tmp/vesper-water-review.
 */
import { createServer } from "node:http";
import { mkdir, writeFile } from "node:fs/promises";
import { performance } from "node:perf_hooks";
import { chromium } from "@playwright/test";
import { getHomeLake, waterAt, carveHeightAt } from "../src/systems/waters.ts";
import { createWaterSurface } from "../src/water-surface.ts";

const seed = "VESPER-01";
const folder = "/private/tmp/vesper-water-review";
await mkdir(folder, { recursive: true });
const home = getHomeLake(seed);
const profiles = [];
for (const [label, x, z] of [
  ["lake", home.x, home.z],
  ["dry origin", 0, 0],
  ["far dry", 1200, 1200],
]) {
  for (const [api, sample] of [
    ["waterAt", waterAt],
    ["carveHeightAt", carveHeightAt],
  ]) {
    const start = performance.now();
    for (let i = 0; i < 10000; i++) sample(seed, x + (i % 100) * 0.01, z);
    profiles.push({ label, api, calls: 10000, ms: performance.now() - start });
  }
}
for (const [cx, cz] of [
  [0, 0],
  [1, 0],
  [2, 0],
  [8, 8],
]) {
  const start = performance.now(),
    surface = createWaterSurface(seed, cx, cz);
  profiles.push({
    label: `chunk ${cx},${cz}`,
    api: "createWaterSurface",
    ms: performance.now() - start,
    triangles: surface ? surface.geometry.attributes.position.count / 3 : 0,
  });
  surface?.geometry.dispose();
}

// Reproduce the exact NW/SW/NE + SW/SE/NE triangle topology of the current
// 24-segment PlaneGeometry, measuring where analytical wet ground is hidden
// by its rendered linear interpolation. This is a numerical bank diagnostic,
// not a claim that every hidden fringe is a visually objectionable hole.
const grid = 64 / 24,
  cache = new Map();
const terrainVertex = (x, z) => {
  const key = `${x},${z}`;
  let h = cache.get(key);
  if (h === undefined) {
    h = carveHeightAt(seed, x, z);
    cache.set(key, h);
  }
  return h;
};
function interpolatedTerrain(x, z) {
  const cx = Math.floor(x / 64),
    cz = Math.floor(z / 64),
    gx = Math.floor((x - cx * 64) / grid),
    gz = Math.floor((z - cz * 64) / grid);
  const x0 = cx * 64 + gx * grid,
    z0 = cz * 64 + gz * grid,
    u = (x - x0) / grid,
    v = (z - z0) / grid;
  const nw = terrainVertex(x0, z0),
    ne = terrainVertex(x0 + grid, z0),
    sw = terrainVertex(x0, z0 + grid),
    se = terrainVertex(x0 + grid, z0 + grid);
  return u + v <= 1
    ? nw * (1 - u - v) + ne * u + sw * v
    : ne * (1 - v) + sw * (1 - u) + se * (u + v - 1);
}
let wet = 0,
  hidden = 0,
  deepWet = 0,
  hiddenDeep = 0,
  maxBias = -Infinity,
  worst = null;
for (
  let x = home.x - home.radiusX - 4;
  x <= home.x + home.radiusX + 4;
  x += 0.6
)
  for (
    let z = home.z - home.radiusZ - 4;
    z <= home.z + home.radiusZ + 4;
    z += 0.6
  ) {
    const sample = waterAt(seed, x, z);
    if (!sample || sample.depth < 0.025) continue;
    wet++;
    if (sample.depth > 0.5) deepWet++;
    const bias = interpolatedTerrain(x, z) - sample.level - 0.012;
    if (bias > 0) {
      hidden++;
      if (sample.depth > 0.5) hiddenDeep++;
    }
    if (bias > maxBias) {
      maxBias = bias;
      worst = { x, z, depth: sample.depth, bias };
    }
  }
const bankNumerics = {
  wetSamples: wet,
  hiddenByTerrainSamples: hidden,
  hiddenPercent: (100 * hidden) / Math.max(1, wet),
  deepSamples: deepWet,
  hiddenDeepSamples: hiddenDeep,
  maxTerrainAboveSurface: maxBias,
  worst,
};

const html = `<!doctype html><html><head><meta charset="utf-8"><style>body{margin:0;background:#b6c7b3}canvas{display:block}aside{position:absolute;top:16px;left:16px;background:#faf3dccc;padding:12px;color:#243b32;font:14px Arial;pointer-events:none}</style></head><body><canvas></canvas><aside>Independent water integration review · actual terrain and fish models</aside><script type="module">
import * as THREE from 'http://127.0.0.1:4173/node_modules/three/build/three.module.js';
import {createWaterSurface,updateWaterMaterial} from 'http://127.0.0.1:4173/src/water-surface.ts';
import {waterAt,carveHeightAt,getHomeLake} from 'http://127.0.0.1:4173/src/systems/waters.ts';
import {createModel} from 'http://127.0.0.1:4173/src/models.ts';
import {createAtmosphere} from 'http://127.0.0.1:4173/src/world.ts';
import {animateWildlife} from 'http://127.0.0.1:4173/src/wildlife.ts';
import {getBiome,getHabitat} from 'http://127.0.0.1:4173/src/systems/worldgen.ts';
import {HABITATS} from 'http://127.0.0.1:4173/src/data.ts';
const seed='VESPER-01',lake=getHomeLake(seed),scene=new THREE.Scene(),camera=new THREE.PerspectiveCamera(60,1440/900,.05,510);
scene.fog=new THREE.Fog('#b6c7b3',80,230);const atmosphere=createAtmosphere(scene);
const renderer=new THREE.WebGLRenderer({canvas:document.querySelector('canvas'),antialias:true,preserveDrawingBuffer:true});renderer.setSize(1440,900);renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.18;
scene.add(new THREE.HemisphereLight('#d9eadf','#587466',1.9));const sun=new THREE.DirectionalLight('#ffdfad',2.6);sun.position.set(lake.x-60,90,lake.z-50);scene.add(sun);
const groundColors={forest:new THREE.Color('#71927b'),desert:new THREE.Color('#bd8c68'),caves:new THREE.Color('#354852')};
const terrainMaterial=new THREE.MeshStandardMaterial({vertexColors:true,roughness:.94,metalness:.02});const surfaces=[];
const ccx=Math.floor(lake.x/64),ccz=Math.floor(lake.z/64);
for(let cx=ccx-1;cx<=ccx+1;cx++)for(let cz=ccz-1;cz<=ccz+1;cz++){
 const g=new THREE.PlaneGeometry(64,64,24,24);g.rotateX(-Math.PI/2);g.translate(cx*64+32,0,cz*64+32);const p=g.attributes.position,colors=[],color=new THREE.Color();
 for(let i=0;i<p.count;i++){const x=p.getX(i),z=p.getZ(i);p.setY(i,carveHeightAt(seed,x,z));color.set(HABITATS[getHabitat(seed,x,z)].ground);color.lerp(groundColors[getBiome(seed,x+6,z)],.16);color.lerp(groundColors[getBiome(seed,x-6,z)],.16);color.multiplyScalar(.9+.11*Math.sin(x*.16+Math.cos(z*.19))*Math.sin(z*.15));colors.push(color.r,color.g,color.b);}
 g.setAttribute('color',new THREE.Float32BufferAttribute(colors,3));g.computeVertexNormals();scene.add(new THREE.Mesh(g,terrainMaterial));const surface=createWaterSurface(seed,cx,cz);if(surface){scene.add(surface);surfaces.push(surface);}
}
const fish=[];
for(let i=0;i<6;i++){
 const kind=['ribbon-fish','glass-koi','lantern-eel'][i%3],object=createModel(kind,i);const x=lake.x-4+i*1.5,z=lake.z+Math.sin(i*2.1)*2,water=waterAt(seed,x,z),anim=object.userData.animation;
 object.position.set(x,water.level-(anim.swimDepth??.5)-(anim.bodyCenterY??.25),z);object.rotation.y=i*1.2;scene.add(object);fish.push({object,data:{id:'review-'+i,speciesId:kind,x,z,seed:i*741,scale:1,rotation:i*1.2,role:'specimen'}});
}
let elapsed=0,last=performance.now(),reduced=false,paused=false;const frameTimes=[];const settings={volume:0,sensitivity:1,quality:'balanced',invertY:false,reducedMotion:false};
function setCamera(view){
 if(view==='overview'){camera.position.set(lake.x-22,lake.level+15,lake.z+30);camera.lookAt(lake.x,lake.level-.6,lake.z);}
 if(view==='bank'){camera.position.set(lake.x-lake.radiusX+1,lake.level+2,lake.z+7);camera.lookAt(lake.x,lake.level-.4,lake.z);}
 if(view==='fish'){camera.position.set(lake.x-8,lake.level+1.4,lake.z+7);camera.lookAt(lake.x-1,lake.level-.5,lake.z);}
}
setCamera('overview');const environment={height:(x,z)=>carveHeightAt(seed,x,z),biome:(x,z)=>getBiome(seed,x,z),blocked:()=>false,water:(x,z)=>waterAt(seed,x,z)};
function render(now){const dt=Math.min(.045,(now-last)/1000);if(now-last<100)frameTimes.push(now-last);last=now;if(!paused)elapsed+=dt;settings.reducedMotion=reduced;
 for(const f of fish)animateWildlife(f.object,f.data,elapsed,paused?0:dt,{x:camera.position.x,z:camera.position.z},settings,false,environment);
 for(const s of surfaces)updateWaterMaterial(s.material,elapsed,reduced);atmosphere.material.uniforms.time.value=reduced?0:elapsed;atmosphere.sky.position.copy(camera.position);atmosphere.moon.position.copy(camera.position).add(new THREE.Vector3(-170,118,-330));atmosphere.halo.position.copy(atmosphere.moon.position);renderer.render(scene,camera);
 window.__WATER_REVIEW__={view:setCamera,pause:v=>paused=v,reduced:v=>reduced=v,stats:()=>({calls:renderer.info.render.calls,triangles:renderer.info.render.triangles,geometries:renderer.info.memory.geometries,waterSurfaces:surfaces.length,sharedMaterial:surfaces.every(s=>s.material===surfaces[0].material),clock:surfaces[0]?.material.userData.waterTime.value,meanFrameMs:frameTimes.reduce((s,v)=>s+v,0)/Math.max(1,frameTimes.length),fishKinds:fish.map(f=>f.data.speciesId),fishPositions:fish.map(f=>f.object.position.toArray())})};requestAnimationFrame(render);
}requestAnimationFrame(render);
</script></body></html>`;
const server = createServer((_request, response) => {
  response.setHeader("Content-Type", "text/html; charset=utf-8");
  response.end(html);
});
await new Promise((resolve) => server.listen(4194, "127.0.0.1", resolve));
let browser;
try {
  browser = await chromium.launch({
    headless: true,
    args: ["--enable-webgl", "--use-angle=metal"],
  });
  const page = await browser.newPage({
    viewport: { width: 1440, height: 900 },
  });
  const errors = [];
  page.on("pageerror", (error) => errors.push(error.message));
  page.on("console", (message) => {
    if (message.type() === "error") errors.push(message.text());
  });
  await page.goto("http://127.0.0.1:4194/");
  try {
    await page.waitForFunction(() => window.__WATER_REVIEW__, null, {
      timeout: 10000,
    });
  } catch (error) {
    console.error(JSON.stringify({ errors }, null, 2));
    throw error;
  }
  await page.waitForTimeout(1500);
  for (const view of ["overview", "bank", "fish"]) {
    await page.evaluate((view) => window.__WATER_REVIEW__.view(view), view);
    await page.waitForTimeout(450);
    await page.screenshot({ path: `${folder}/${view}.png` });
  }
  const active = await page.evaluate(() => window.__WATER_REVIEW__.stats());
  await page.evaluate(() => window.__WATER_REVIEW__.pause(true));
  await page.waitForTimeout(150);
  const pausedBefore = await page.evaluate(() =>
    window.__WATER_REVIEW__.stats(),
  );
  await page.waitForTimeout(450);
  const pausedAfter = await page.evaluate(() =>
    window.__WATER_REVIEW__.stats(),
  );
  await page.evaluate(() => window.__WATER_REVIEW__.reduced(true));
  await page.waitForTimeout(150);
  const reduced = await page.evaluate(() => window.__WATER_REVIEW__.stats());
  const report = {
    profiles,
    bankNumerics,
    browser: {
      errors,
      active,
      pauseClockUnchanged: pausedBefore.clock === pausedAfter.clock,
      pauseFishUnchanged:
        JSON.stringify(pausedBefore.fishPositions) ===
        JSON.stringify(pausedAfter.fishPositions),
      reducedClock: reduced.clock,
    },
    screenshots: folder,
  };
  await writeFile(`${folder}/report.json`, JSON.stringify(report, null, 2));
  console.log(JSON.stringify(report, null, 2));
} finally {
  await browser?.close();
  server.close();
}
