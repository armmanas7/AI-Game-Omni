#!/bin/bash
set -euo pipefail
cd -- "$(dirname -- "${BASH_SOURCE[0]}")"

fail() {
  printf '\n%s\n' "$1"
  read -r -p "Press Return to close this window. " _
  exit 1
}
NODE_BIN="$(command -v node || true)"
if [[ -z "$NODE_BIN" || ! -x "$NODE_BIN" ]]; then
  NODE_BIN=""
  for candidate in /usr/local/bin/node /opt/homebrew/bin/node "$HOME/.nvm/versions/node/v22.22.1/bin/node" "$HOME/.volta/bin/node" "$HOME"/.nvm/versions/node/*/bin/node; do
    if [[ -x "$candidate" ]]; then NODE_BIN="$candidate"; break; fi
  done
fi
[[ -n "$NODE_BIN" ]] || fail "Node.js 22.12 or newer is required for development. Install it, then open this launcher again."
export PATH="$(dirname -- "$NODE_BIN"):$PATH"
NPM_BIN="$(command -v npm || true)"
[[ -n "$NPM_BIN" ]] || fail "npm is required for development. Install the standard Node.js distribution with npm."
[[ -f node_modules/vite/bin/vite.js ]] || fail "Development dependencies are missing. Run npm ci in this project folder first. Use Launch Vesper.command to play an existing release."
printf '\nStarting the development server. Source edits reload automatically.\nKeep this terminal open. Press Control+C to stop.\n'
exec "$NPM_BIN" run dev -- --port 5173 --strictPort --open
