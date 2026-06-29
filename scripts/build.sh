#!/bin/bash
NODE="/Users/Admin/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node"
PNPM="/Users/Admin/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/pnpm/bin/pnpm.cjs"
ROOT="/Users/Admin/Desktop/墨-workspace/projects/p005-海外工具站/mahjong-website"

cd "$ROOT"
# Install dependencies
"$NODE" "$PNPM" install --no-frozen-lockfile
# Build
"$NODE" "$PNPM" run build
