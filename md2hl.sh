#!/usr/bin/env bash
set -euo pipefail

md2hl "$1" >"${1%.md}.html"
