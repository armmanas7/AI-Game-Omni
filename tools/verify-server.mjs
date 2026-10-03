import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { mkdtemp, writeFile, symlink, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const fixture = await mkdtemp(join(tmpdir(), "vesper-server-check-"));
const serverPath = fileURLToPath(new URL("./serve.mjs", import.meta.url));
const checks = [];
await writeFile(
  join(fixture, "index.html"),
  "<!doctype html><title>Vesper fixture</title>",
);
await writeFile(join(fixture, "model.glb"), Buffer.from("glTF"));
await writeFile(join(fixture, "font.woff2"), Buffer.from("wOF2"));
await symlink("/etc/hosts", join(fixture, "escape.txt"));
async function run(lan, port) {
  const child = spawn(
    process.execPath,
    [serverPath, fixture, ...(lan ? ["--lan"] : [])],
    {
      env: { ...process.env, PORT: String(port) },
      stdio: ["ignore", "pipe", "pipe"],
    },
  );
  let log = "";
  await new Promise((resolve, reject) => {
    const timer = setTimeout(
      () => reject(new Error("Server did not start")),
      5000,
    );
    child.stdout.on("data", (chunk) => {
      log += chunk;
      if (log.includes("Vesper is ready")) {
        clearTimeout(timer);
        resolve();
      }
    });
    child.stderr.on("data", (chunk) => {
      log += chunk;
    });
    child.on("exit", (code) => {
      clearTimeout(timer);
      reject(new Error(`Server exited ${code}: ${log}`));
    });
  });
  try {
    const base = `http://127.0.0.1:${port}`;
    for (const [path, method, expected] of [
      ["/", "GET", 200],
      ["/map", "GET", 200],
      ["/missing.js", "GET", 404],
      ["/", "HEAD", 200],
      ["/", "POST", 405],
      ["/%2e%2e%2fetc/hosts", "GET", 403],
      ["/%00", "GET", 400],
      ["/%zz", "GET", 400],
      ["/.env", "GET", 403],
      ["/escape.txt", "GET", 403],
      ["/model.glb", "GET", 200],
      ["/font.woff2", "GET", 200],
    ]) {
      const response = await fetch(base + path, { method });
      assert.equal(response.status, expected, `${method} ${path}`);
      if (path === "/model.glb")
        assert.equal(response.headers.get("content-type"), "model/gltf-binary");
      if (path === "/font.woff2")
        assert.equal(response.headers.get("content-type"), "font/woff2");
      if (method === "HEAD") assert.equal((await response.text()).length, 0);
      else await response.arrayBuffer();
      checks.push({
        mode: lan ? "lan" : "localhost",
        path,
        method,
        status: expected,
      });
    }
    assert.equal(log.includes("Phone preview:"), lan);
    checks.push({ mode: lan ? "lan" : "localhost", startupMessage: "passed" });
  } finally {
    child.kill("SIGTERM");
    await new Promise((resolve) => child.once("exit", resolve));
    checks.push({ mode: lan ? "lan" : "localhost", shutdown: "passed" });
  }
}
try {
  await run(false, 4187);
  await run(true, 4188);
  const report = { status: "passed", checks: checks.length, results: checks };
  await writeFile(
    new URL("../docs/server-check.json", import.meta.url),
    JSON.stringify(report, null, 2) + "\n",
  );
  console.log(JSON.stringify({ status: report.status, checks: report.checks }));
} finally {
  await rm(fixture, { recursive: true, force: true });
}
