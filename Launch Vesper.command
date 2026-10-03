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
[[ -n "$NODE_BIN" ]] || fail "Node.js is required to launch Vesper. Install Node.js 22.12 or newer, then open this launcher again."
[[ -f dist/index.html ]] || fail "The compiled game is missing. From this project folder, run npm ci and npm run build, then launch again."
export PATH="$(dirname -- "$NODE_BIN"):$PATH"
printf '\nStarting Vesper locally. No internet or package installation is needed.\nKeep this terminal open while playing. Press Control+C to stop.\n'
exec "$NODE_BIN" tools/serve.mjs dist --open
