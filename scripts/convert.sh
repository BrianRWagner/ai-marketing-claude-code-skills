#!/usr/bin/env bash
# convert.sh — Convert SKILL.md files to platform-specific formats
#
# Usage:
#   ./scripts/convert.sh --platform=cursor [--output-dir=./output] [--include-pro] [--dry-run]
#   ./scripts/convert.sh --platform=windsurf
#   ./scripts/convert.sh --platform=claude   # copies as-is
#   ./scripts/convert.sh --platform=openclaw # copies as-is
#   ./scripts/convert.sh --all               # all platforms into ./converted/

set -euo pipefail

REPO_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

# Colors
BOLD='\033[1m'
GREEN='\033[0;32m'
YELLOW='\033[0;33m'
CYAN='\033[0;36m'
RED='\033[0;31m'
DIM='\033[2m'
RESET='\033[0m'

# Defaults
PLATFORM=""
OUTPUT_DIR=""
INCLUDE_PRO=false
DRY_RUN=false
CONVERT_ALL=false

usage() {
  echo ""
  echo -e "${BOLD}convert.sh${RESET} — Convert SKILL.md files to platform-specific formats"
  echo ""
  echo "Usage:"
  echo "  ./scripts/convert.sh --platform=<platform> [options]"
  echo ""
  echo "Platforms:"
  echo "  claude    — Copy as-is (.md, no conversion needed)"
  echo "  openclaw  — Copy as-is (.md, no conversion needed)"
  echo "  cursor    — Convert to .mdc with Cursor rule frontmatter"
  echo "  windsurf  — Convert to .md with Windsurf rule frontmatter"
  echo ""
  echo "Options:"
  echo "  --output-dir=PATH   Output directory (default: ./converted/<platform>)"
  echo "  --include-pro       Include pro/ skills"
  echo "  --all               Convert for all platforms"
  echo "  --dry-run           Preview without writing files"
  echo ""
  exit 0
}

# Parse args
for arg in "$@"; do
  case "$arg" in
    --platform=*) PLATFORM="${arg#--platform=}" ;;
    --output-dir=*) OUTPUT_DIR="${arg#--output-dir=}" ;;
    --include-pro) INCLUDE_PRO=true ;;
    --dry-run) DRY_RUN=true ;;
    --all) CONVERT_ALL=true ;;
    --help|-h) usage ;;
  esac
done

if [ -z "$PLATFORM" ] && [ "$CONVERT_ALL" = false ]; then
  echo -e "${RED}Error:${RESET} --platform=<platform> or --all required"
  usage
fi

# Parse YAML frontmatter field (handles inline, quoted, and block scalars | >)
get_field() {
  local file="$1"
  local field="$2"
  awk -v field="$field" '
    BEGIN { in_front=0; collecting=0; buf="" }
    /^---/ { in_front++; next }
    in_front == 1 {
      if (collecting) {
        if ($0 ~ /^[[:space:]]/) {
          gsub(/^[[:space:]]+/, "")
          buf = (buf == "") ? $0 : buf " " $0
        } else {
          collecting=0; print buf; exit
        }
      } else if ($0 ~ "^" field ":") {
        sub("^" field ":[[:space:]]*", "")
        gsub(/^["\x27]|["\x27]$/, "")
        if ($0 == "|" || $0 == ">") {
          collecting=1; buf=""
        } else {
          print; exit
        }
      }
    }
    END { if (collecting && buf != "") print buf }
  ' "$file"
}

# Strip YAML frontmatter from a file, return body only
get_body() {
  local file="$1"
  awk '
    BEGIN { in_front=0; past=0 }
    /^---/ {
      in_front++
      if (in_front == 2) { past=1; next }
      next
    }
    past { print }
  ' "$file"
}

convert_for_platform() {
  local platform="$1"
  local out_dir="$2"
  local converted=0
  local skipped=0

  echo ""
  echo -e "${BOLD}Converting for: ${CYAN}${platform}${RESET}"
  echo -e "${DIM}Output: ${out_dir}${RESET}"
  echo ""

  if [ "$DRY_RUN" = false ]; then
    mkdir -p "$out_dir"
  fi

  convert_skill() {
    local skill_file="$1"
    local skill_dir
    skill_dir="$(dirname "$skill_file")"
    local skill_name
    skill_name="$(basename "$skill_dir")"
    local is_pro="$2"

    local name
    name="$(get_field "$skill_file" "name")"
    [ -z "$name" ] && name="$skill_name"

    local description
    description="$(get_field "$skill_file" "description")"

    local dest_subdir="$out_dir"
    if [ "$is_pro" = true ]; then
      dest_subdir="$out_dir/pro"
    fi

    case "$platform" in
      claude|openclaw)
        local dest_file="$dest_subdir/$skill_name/SKILL.md"
        if [ "$DRY_RUN" = true ]; then
          echo -e "  ${DIM}[dry-run]${RESET} ${skill_name} → ${dest_file}"
        else
          mkdir -p "$(dirname "$dest_file")"
          cp "$skill_file" "$dest_file"
          echo -e "  ${GREEN}✓${RESET} $skill_name"
        fi
        ;;

      cursor)
        local dest_file="$dest_subdir/${skill_name}.mdc"
        local frontmatter
        frontmatter="---
description: ${description}
globs:
alwaysApply: false
---"
        local body
        body="$(get_body "$skill_file")"
        if [ "$DRY_RUN" = true ]; then
          echo -e "  ${DIM}[dry-run]${RESET} ${skill_name}.mdc → ${dest_file}"
        else
          mkdir -p "$dest_subdir"
          printf '%s\n%s' "$frontmatter" "$body" > "$dest_file"
          echo -e "  ${GREEN}✓${RESET} ${skill_name}.mdc"
        fi
        ;;

      windsurf)
        local dest_file="$dest_subdir/${skill_name}.md"
        local frontmatter
        frontmatter="---
trigger: always_on
description: ${description}
---"
        local body
        body="$(get_body "$skill_file")"
        if [ "$DRY_RUN" = true ]; then
          echo -e "  ${DIM}[dry-run]${RESET} ${skill_name}.md → ${dest_file}"
        else
          mkdir -p "$dest_subdir"
          printf '%s\n%s' "$frontmatter" "$body" > "$dest_file"
          echo -e "  ${GREEN}✓${RESET} ${skill_name}.md"
        fi
        ;;

      *)
        echo -e "${RED}Unknown platform:${RESET} $platform"
        return 1
        ;;
    esac

    (( converted++ )) || true
  }

  # Free skills
  for skill_file in "$REPO_DIR"/*/SKILL.md; do
    [ -f "$skill_file" ] || continue
    local skill_dir
    skill_dir="$(dirname "$skill_file")"
    local skill_name
    skill_name="$(basename "$skill_dir")"
    [[ "$skill_name" == "scripts" || "$skill_name" == "pro" ]] && continue
    convert_skill "$skill_file" false
  done

  # Pro skills
  if [ "$INCLUDE_PRO" = true ] && [ -d "$REPO_DIR/pro" ]; then
    for skill_file in "$REPO_DIR"/pro/*/SKILL.md; do
      [ -f "$skill_file" ] || continue
      convert_skill "$skill_file" true
    done
  fi

  echo ""
  echo -e "  ${GREEN}${converted} files converted${RESET}"
}

PLATFORMS_TO_CONVERT=()
if [ "$CONVERT_ALL" = true ]; then
  PLATFORMS_TO_CONVERT=(claude openclaw cursor windsurf)
else
  PLATFORMS_TO_CONVERT=("$PLATFORM")
fi

for p in "${PLATFORMS_TO_CONVERT[@]}"; do
  if [ -z "$OUTPUT_DIR" ]; then
    out_dir="$REPO_DIR/converted/$p"
  else
    out_dir="$OUTPUT_DIR/$p"
  fi
  convert_for_platform "$p" "$out_dir"
done

echo -e "${BOLD}${CYAN}Done.${RESET}"
echo ""
