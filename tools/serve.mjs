#!/usr/bin/env node
/** Dependency-free release server. Localhost by default; --lan enables a local phone preview. */
import { createServer } from "node:http";
import { createReadStream } from "node:fs";
import { realpath, stat } from "node:fs/promises";
import {
  dirname,
  extname,
  isAbsolute,
  relative,
  resolve,
  sep,
} from "node:path";
import { fileURLToPath } from "node:url";
import { spawn } from "node:child_process";
import { networkInterfaces } from "node:os";

const args = process.argv.slice(2);
const lan = args.includes("--lan");
const directory =
  args.find((arg) => !arg.startsWith("--")) ??
  resolve(dirname(fileURLToPath(import.meta.url)), "../dist");
const portText = process.env.PORT ?? "4174";
if (
  !/^\d+$/.test(portText) ||
  Number(portText) < 1 ||
  Number(portText) > 65535
) {
  console.error("PORT must be an integer between 1 and 65535.");
  process.exit(1);
}
const port = Number(portText);
let root;
try {
  root = await realpath(resolve(directory));
  if (!(await stat(resolve(root, "index.html"))).isFile())
    throw new Error("index.html is missing");
} catch (error) {
  console.error(`Vesper build is unavailable at ${resolve(directory)}.`);
  console.error(
    "From the project directory, run npm ci and npm run build first.",
  );
  console.error(error.message);
  process.exit(1);
}

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
  ".md": "text/plain; charset=utf-8",
  ".glb": "model/gltf-binary",
  ".gltf": "model/gltf+json",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".ttf": "font/ttf",
  ".otf": "font/otf",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".wasm": "application/wasm",
  ".wav": "audio/wav",
  ".mp3": "audio/mpeg",
  ".ogg": "audio/ogg",
};
const inside = (path) => {
  const fromRoot = relative(root, path);
  return (
    fromRoot !== ".." &&
    !fromRoot.startsWith(`..${sep}`) &&
    !isAbsolute(fromRoot)
  );
};
function reply(response, status, body, extra = {}) {
  response.writeHead(status, {
    "Content-Type": "text/plain; charset=utf-8",
    "X-Content-Type-Options": "nosniff",
    ...extra,
  });
  response.end(body);
}
async function existingFile(candidate) {
  const resolved = await realpath(candidate);
  if (!inside(resolved)) return { forbidden: true };
  const details = await stat(resolved);
  if (details.isDirectory())
    return existingFile(resolve(resolved, "index.html"));
  return details.isFile() ? { path: resolved, size: details.size } : null;
}

const server = createServer(async (request, response) => {
  if (request.method !== "GET" && request.method !== "HEAD")
    return reply(response, 405, "Method not allowed.\n", {
      Allow: "GET, HEAD",
    });
  let path;
  try {
    path = decodeURIComponent((request.url ?? "/").split("?")[0]);
  } catch {
    return reply(response, 400, "Invalid path encoding.\n");
  }
  if (!path.startsWith("/") || path.includes("\0") || path.includes("\\"))
    return reply(response, 400, "Invalid request path.\n");
  const segments = path.split("/").filter(Boolean);
  if (segments.some((segment) => segment === ".." || segment.startsWith(".")))
    return reply(response, 403, "Path is not available.\n");
  const candidate = resolve(root, ...segments);
  if (!inside(candidate))
    return reply(response, 403, "Path is not available.\n");
  try {
    let file;
    try {
      file = await existingFile(candidate);
    } catch (error) {
      if (error.code !== "ENOENT" && error.code !== "ENOTDIR") throw error;
      // Browser routes may use the app shell; missing asset filenames stay 404.
      file = extname(path)
        ? null
        : await existingFile(resolve(root, "index.html"));
    }
    if (file?.forbidden)
      return reply(response, 403, "Path is not available.\n");
    if (!file) return reply(response, 404, "File not found.\n");
    response.writeHead(200, {
      "Content-Type":
        MIME[extname(file.path).toLowerCase()] ?? "application/octet-stream",
      "Content-Length": file.size,
      "Cache-Control": "no-cache",
      "X-Content-Type-Options": "nosniff",
    });
    if (request.method === "HEAD") return response.end();
    const stream = createReadStream(file.path);
    stream.on("error", () => response.destroy());
    response.on("close", () => stream.destroy());
    stream.pipe(response);
  } catch (error) {
    console.error(`Could not serve ${path}: ${error.message}`);
    if (!response.headersSent)
      reply(response, 500, "Could not read this file.\n");
    else response.destroy();
  }
});
server.requestTimeout = 15_000;
server.headersTimeout = 10_000;
server.on("error", (error) => {
  console.error(
    error.code === "EADDRINUSE"
      ? `Port ${port} is already in use. Stop the other server or launch with PORT=4175.`
      : error.message,
  );
  process.exit(1);
});
let closing = false;
function shutdown() {
  if (closing) return;
  closing = true;
  console.log("\nClosing Vesper. Your browser save stays on this device.");
  server.close(() => process.exit(0));
  server.closeIdleConnections?.();
  const timer = setTimeout(() => {
    server.closeAllConnections?.();
    process.exit(0);
  }, 2_000);
  timer.unref();
}
process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);
server.listen(port, lan ? "0.0.0.0" : "127.0.0.1", () => {
  const url = `http://127.0.0.1:${port}/`;
  console.log(
    `\nVesper is ready at ${url}\nServing ${root}\nKeep this terminal open. Press Control+C to stop.\n`,
  );
  if (lan) {
    const addresses = Object.values(networkInterfaces())
      .flat()
      .filter(
        (address) => address && address.family === "IPv4" && !address.internal,
      );
    console.log(
      "Phone preview: connect your phone to the same Wi-Fi, then open one of these addresses in Chrome:",
    );
    for (const address of addresses)
      console.log(`http://${address.address}:${port}/`);
    if (!addresses.length)
      console.log(
        "No network address found. Connect this computer to Wi-Fi and try again.",
      );
    console.log(
      "This server serves only the compiled game folder. Stop it with Control+C when finished.\n",
    );
  }
  if (args.includes("--open") && process.platform === "darwin") {
    const browser = spawn("/usr/bin/open", [url], { stdio: "ignore" });
    browser.on("error", () => console.error(`Open ${url} in your browser.`));
  }
});
