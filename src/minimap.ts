import { HABITATS } from "./data";
import { t } from "./i18n";
import { CHUNK_SIZE, getHabitat } from "./systems/worldgen";
import { waterAt } from "./systems/waters";
import type { FieldMarker, Position, UISnapshot } from "./types";

export const FIELD_MARKER_COLORS: Record<FieldMarker["kind"], string> = {
  cache: "#ecd09d",
  resin: "#acd896",
  crystal: "#b1cfee",
  probe: "#f2b391",
  beacon: "#f0efda",
};

export function drawFieldMarker(
  context: CanvasRenderingContext2D,
  kind: FieldMarker["kind"],
  x: number,
  y: number,
  size = 4,
) {
  context.save();
  context.translate(x, y);
  context.fillStyle = FIELD_MARKER_COLORS[kind];
  context.strokeStyle = FIELD_MARKER_COLORS[kind];
  context.lineWidth = 1.5;
  if (kind === "beacon") {
    context.beginPath();
    context.arc(0, 0, size + 2, 0, Math.PI * 2);
    context.stroke();
    context.beginPath();
    context.moveTo(0, -size);
    context.lineTo(0, size);
    context.moveTo(-size, 0);
    context.lineTo(size, 0);
    context.stroke();
  } else if (kind === "probe" || kind === "crystal") {
    context.rotate(Math.PI / 4);
    if (kind === "probe") context.strokeRect(-size, -size, size * 2, size * 2);
    else context.fillRect(-size * 0.7, -size * 0.7, size * 1.4, size * 1.4);
  } else if (kind === "cache") {
    context.fillRect(-size, -size, size * 2, size * 2);
  } else {
    context.beginPath();
    context.arc(0, 0, size, 0, Math.PI * 2);
    context.fill();
  }
  context.restore();
}

/** Terrain samples are cached at most once a second; instruments animate cheaply. */
export function createMinimap(canvas: HTMLCanvasElement) {
  const context = canvas.getContext("2d");
  const terrain = document.createElement("canvas");
  terrain.width = terrain.height = 288;
  const terrainContext = terrain.getContext("2d");
  const span = 160;
  const cacheSpan = 256;
  let center: Position = { x: Infinity, z: Infinity };
  let seed = "";
  let visitedSignature = "";
  let lastTerrain = -Infinity;
  function cache(value: UISnapshot, now: number) {
    if (!terrainContext) return;
    const movement = Math.hypot(
      value.position.x - center.x,
      value.position.z - center.z,
    );
    const signature = value.visitedChunks.join(";");
    const changed =
      value.seed !== seed || signature !== visitedSignature || movement >= 8;
    if (
      !changed ||
      (now - lastTerrain < 1000 && movement < 60 && value.seed === seed)
    )
      return;
    lastTerrain = now;
    seed = value.seed;
    visitedSignature = signature;
    center = {
      x: Math.round(value.position.x / 8) * 8,
      z: Math.round(value.position.z / 8) * 8,
    };
    const visited = new Set(value.visitedChunks);
    const grid = 36;
    const cell = terrain.width / grid;
    for (let row = 0; row < grid; row++) {
      for (let column = 0; column < grid; column++) {
        const x = center.x + ((column + 0.5) / grid - 0.5) * cacheSpan;
        const z = center.z + ((row + 0.5) / grid - 0.5) * cacheSpan;
        const cx = Math.floor(x / CHUNK_SIZE);
        const cz = Math.floor(z / CHUNK_SIZE);
        const seen = visited.has(`${cx},${cz}`) || visited.has(`${cx}:${cz}`);
        terrainContext.fillStyle = waterAt(value.seed, x, z)
          ? "#7ba7b5"
          : HABITATS[getHabitat(value.seed, x, z)].ground;
        terrainContext.globalAlpha = 1;
        terrainContext.fillRect(column * cell, row * cell, cell + 1, cell + 1);
        terrainContext.fillStyle = "#112c29";
        terrainContext.globalAlpha = seen ? 0.18 : 0.66;
        terrainContext.fillRect(column * cell, row * cell, cell + 1, cell + 1);
      }
    }
    terrainContext.globalAlpha = 1;
  }
  return {
    draw(value: UISnapshot, now = performance.now()) {
      if (!context || !terrainContext) return;
      cache(value, now);
      const width = canvas.width;
      const height = canvas.height;
      const scale = width / span;
      const rotation = value.settings.minimapRotate ? value.heading : 0;
      context.clearRect(0, 0, width, height);
      context.fillStyle = "#142b28";
      context.fillRect(0, 0, width, height);
      context.save();
      context.translate(width / 2, height / 2);
      context.rotate(rotation);
      const mapX = (center.x - value.position.x - cacheSpan / 2) * scale;
      const mapZ = (center.z - value.position.z - cacheSpan / 2) * scale;
      context.imageSmoothingEnabled = false;
      context.drawImage(
        terrain,
        mapX,
        mapZ,
        cacheSpan * scale,
        cacheSpan * scale,
      );
      context.strokeStyle = "rgba(235,238,218,.12)";
      context.lineWidth = 1;
      const grid = CHUNK_SIZE * scale;
      const firstX = (((-value.position.x * scale) % grid) + grid) % grid;
      const firstZ = (((-value.position.z * scale) % grid) + grid) % grid;
      context.beginPath();
      for (let p = firstX - grid * 4; p < width; p += grid) {
        context.moveTo(p, -height);
        context.lineTo(p, height);
      }
      for (let p = firstZ - grid * 4; p < height; p += grid) {
        context.moveTo(-width, p);
        context.lineTo(width, p);
      }
      context.stroke();
      const point = (position: Position) => ({
        x: (position.x - value.position.x) * scale,
        y: (position.z - value.position.z) * scale,
      });
      const pod = point({ x: 0, z: 0 });
      context.strokeStyle = "#f2efda";
      context.lineWidth = 1.5;
      context.beginPath();
      context.arc(pod.x, pod.y, 4, 0, Math.PI * 2);
      context.stroke();
      for (const marker of value.fieldMarkers) {
        if (
          Math.hypot(marker.x - value.position.x, marker.z - value.position.z) >
            80 &&
          marker.kind !== "beacon"
        )
          continue;
        const p = point(marker);
        drawFieldMarker(context, marker.kind, p.x, p.y, 2.5);
      }
      if (value.waypoint) {
        const p = point(value.waypoint);
        context.strokeStyle = "#f2ce99";
        context.setLineDash([3, 5]);
        context.beginPath();
        context.moveTo(0, 0);
        context.lineTo(p.x, p.y);
        context.stroke();
        context.setLineDash([]);
        context.save();
        context.translate(p.x, p.y);
        context.rotate(Math.PI / 4);
        context.strokeRect(-4, -4, 8, 8);
        context.restore();
      }
      if (value.mouseDestination) {
        const p = point(value.mouseDestination);
        context.strokeStyle = "#e5eee0";
        context.beginPath();
        context.arc(p.x, p.y, 3, 0, Math.PI * 2);
        context.stroke();
      }
      context.restore();
      context.save();
      context.translate(width / 2, height / 2);
      context.fillStyle = "rgba(8,26,23,.45)";
      context.beginPath();
      context.arc(0, 0, 10, 0, Math.PI * 2);
      context.fill();
      context.rotate(rotation - value.heading);
      context.fillStyle = "#fbf7df";
      context.beginPath();
      context.moveTo(0, -8);
      context.lineTo(5, 6);
      context.lineTo(0, 3);
      context.lineTo(-5, 6);
      context.closePath();
      context.fill();
      context.restore();
      context.font =
        'bold 10px "Space Grotesk", "PingFang SC", "Microsoft YaHei", sans-serif';
      context.textAlign = "center";
      context.textBaseline = "middle";
      context.fillStyle = "#f7f0db";
      context.strokeStyle = "#13302b";
      context.lineWidth = 3;
      const northX = width / 2 + Math.sin(rotation) * (width / 2 - 12);
      const northY = height / 2 - Math.cos(rotation) * (height / 2 - 12);
      context.strokeText(t("N"), northX, northY);
      context.fillText(t("N"), northX, northY);
    },
  };
}
