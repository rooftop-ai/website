#!/usr/bin/env bash
# Check every link in the built site, including in-page #anchors.
# Absolute URLs on our own domain (canonical, og:image) resolve to dist/,
# so they're verified before the domain serves this build.
set -euo pipefail
cd "$(dirname "$0")/.."

root="$PWD/dist"
if [[ ! -f "$root/index.html" ]]; then
  echo "dist/ is missing; run npm run build first." >&2
  exit 1
fi

lychee --config lychee.toml --root-dir "$root" --remap "^https://rooftoplabs\.ai/(.*)$ file://$root/\$1" dist
