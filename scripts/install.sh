#!/usr/bin/env bash
# install.sh — Multi-platform installer for AI Marketing Skills
#
# Dual-file system:
#   SKILL.md    → Claude Code, Cursor, Windsurf (full detail, all phases)
#   SKILL-OC.md → OpenClaw (token-efficient, ~200 lines) — falls back to SKILL.md if not yet available
#
# Usage:
#   ./scripts/install.sh                         # auto-detect + interactive
#   ./scripts/install.sh --all                   # install to all detected platforms
#   ./scripts/install.sh --platform=claude       # specific platform
#   ./scripts/install.sh --platform=openclaw
#   ./scripts/install.sh --platform=cursor
#   ./scripts/install.sh --platform=windsurf
#   ./scripts/install.sh --platform=generic
#   ./scripts/install.sh --include-pro           # also install pro/ skills (if present locally)
#   ./scripts/install.sh --dry-run               # preview without writing files

set -euo pipefail

REPO_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# ── Colors ────────────────────────────────────────────────────────────────────
BOLD='\033[1m'
GREEN='\033[0;32m'
YELLOW='\033[0;33m'
CYAN='\033[0;36m'
RED='\033[0;31m'
DIM='\033[2m'
RESET='\033[0m'

# ── Defaults ──────────────────────────────────────────────────────────────────
PLATFORM_ARG=""
INCLUDE_PRO=false
DRY_RUN=false
INSTALL_ALL=false

# ── Parse flags ───────────────────────────────────────────────────────────────
for arg in "$@"; do
  case "$arg" in
    --platform=*) PLATFORM_ARG="${arg#--platform=}" ;;
    --include-pro) INCLUDE_PRO=true ;;
    --dry-run) DRY_RUN=true ;;
    --all) INSTALL_ALL=true ;;
    --help|-h)
      echo ""
      echo -e "${BOLD}AI Marketing Skills — Installer${RESET}"
      echo ""
      echo "Usage: ./scripts/install.sh [options]"
      echo ""
      echo "Options:"
      echo "  --platform=<name>  Target platform: claude | openclaw | cursor | windsurf | generic"
      echo "  --all              Install to all detected platforms"
      echo "  --include-pro      Include pro/ skills (requires local copies from Gumroad)"
      echo "  --dry-run          Preview installs without writing files"
      echo "  --help             Show this help"
      echo ""
      exit 0
      ;;
  esac
done

# ── Platform detection ────────────────────────────────────────────────────────
detect_platforms() {
  DETECTED=()

  # Claude Code: binary on PATH or ~/.claude/ dir exists
  if command -v claude &>/dev/null || [ -d "$HOME/.claude" ]; then
    DETECTED+=("claude")
  fi

  # OpenClaw: ~/.openclaw/ dir exists
  if [ -d "$HOME/.openclaw" ]; then
    DETECTED+=("openclaw")
  fi

  # Cursor: .cursor/ in current working directory
  if [ -d "$(pwd)/.cursor" ]; then
    DETECTED+=("cursor")
  fi

  # Windsurf: .windsurf/ in current working directory
  if [ -d "$(pwd)/.windsurf" ]; then
    DETECTED+=("windsurf")
  fi
}

# ── Install destination for each platform ─────────────────────────────────────
platform_dest() {
  local platform="$1"
  case "$platform" in
    claude)
      # Prefer ~/.claude/skills/, fall back to ~/.claude/agents/
      if [ -d "$HOME/.claude/skills" ]; then
        echo "$HOME/.claude/skills"
      elif [ -d "$HOME/.claude/agents" ]; then
        echo "$HOME/.claude/agents"
      else
        echo "$HOME/.claude/skills"
      fi
      ;;
    openclaw)  echo "$HOME/.openclaw/skills" ;;
    cursor)    echo "$(pwd)/.cursor/rules" ;;
    windsurf)  echo "$(pwd)/.windsurf/rules" ;;
    generic)   echo "$(pwd)/ai-marketing-skills" ;;
  esac
}

# ── Source file selection (dual-file system) ──────────────────────────────────
# Claude Code / Cursor / Windsurf / generic → SKILL.md
# OpenClaw → SKILL-OC.md (fallback to SKILL.md if SKILL-OC.md not present)
select_source() {
  local skill_dir="$1"
  local platform="$2"

  if [ "$platform" = "openclaw" ]; then
    if [ -f "$skill_dir/SKILL-OC.md" ]; then
      echo "$skill_dir/SKILL-OC.md"
    else
      echo "$skill_dir/SKILL.md"
    fi
  else
    echo "$skill_dir/SKILL.md"
  fi
}

# ── Parse YAML frontmatter field (handles inline, quoted, and block scalars | >) ──
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

# Strip YAML frontmatter, return body only
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

# ── Install one skill to a platform ──────────────────────────────────────────
install_skill() {
  local skill_dir="$1"
  local platform="$2"
  local dest_base="$3"
  local is_pro="${4:-false}"

  local skill_name
  skill_name="$(basename "$skill_dir")"

  # Get correct source file for this platform
  local source_file
  source_file="$(select_source "$skill_dir" "$platform")"

  [ -f "$source_file" ] || return 0  # skip if no SKILL.md at all

  local source_variant
  source_variant="$(basename "$source_file")"

  # Pro skills go in a sub-folder
  local install_base="$dest_base"
  if [ "$is_pro" = true ]; then
    install_base="$dest_base/pro"
  fi

  local fallback_note=""
  if [ "$platform" = "openclaw" ] && [ "$source_variant" = "SKILL.md" ]; then
    fallback_note="${DIM} (SKILL-OC.md not found, using SKILL.md)${RESET}"
  fi

  case "$platform" in
    claude|openclaw|generic)
      local dest_dir="$install_base/$skill_name"
      local dest_file="$dest_dir/SKILL.md"
      if [ "$DRY_RUN" = true ]; then
        echo -e "  ${DIM}[dry-run]${RESET} $skill_name → $dest_file${fallback_note}"
      else
        mkdir -p "$dest_dir"
        cp "$source_file" "$dest_file"
        echo -e "  ${GREEN}✓${RESET} $skill_name${fallback_note}"
      fi
      ;;

    cursor)
      local description
      description="$(get_field "$source_file" "description")"
      local frontmatter="---
description: ${description}
globs:
alwaysApply: false
---"
      local body
      body="$(get_body "$source_file")"
      local dest_file="$install_base/${skill_name}.mdc"
      if [ "$DRY_RUN" = true ]; then
        echo -e "  ${DIM}[dry-run]${RESET} ${skill_name}.mdc → $dest_file"
      else
        mkdir -p "$install_base"
        printf '%s\n%s' "$frontmatter" "$body" > "$dest_file"
        echo -e "  ${GREEN}✓${RESET} ${skill_name}.mdc"
      fi
      ;;

    windsurf)
      local description
      description="$(get_field "$source_file" "description")"
      local frontmatter="---
trigger: always_on
description: ${description}
---"
      local body
      body="$(get_body "$source_file")"
      local dest_file="$install_base/${skill_name}.md"
      if [ "$DRY_RUN" = true ]; then
        echo -e "  ${DIM}[dry-run]${RESET} ${skill_name}.md → $dest_file"
      else
        mkdir -p "$install_base"
        printf '%s\n%s' "$frontmatter" "$body" > "$dest_file"
        echo -e "  ${GREEN}✓${RESET} ${skill_name}.md"
      fi
      ;;
  esac
}

# ── Install all skills to a single platform ───────────────────────────────────
install_to_platform() {
  local platform="$1"
  local dest
  dest="$(platform_dest "$platform")"

  local count=0
  local pro_count=0

  echo ""
  echo -e "${BOLD}Installing → ${CYAN}${platform}${RESET}"
  echo -e "${DIM}Destination: ${dest}${RESET}"
  echo ""

  if [ "$DRY_RUN" = false ]; then
    mkdir -p "$dest"
  fi

  # Free skills
  for skill_dir in "$REPO_DIR"/*/; do
    [ -d "$skill_dir" ] || continue
    local skill_name
    skill_name="$(basename "$skill_dir")"
    # Skip non-skill dirs
    [[ "$skill_name" == "scripts" || "$skill_name" == "pro" || "$skill_name" == "converted" ]] && continue
    [ -f "$skill_dir/SKILL.md" ] || continue

    install_skill "$skill_dir" "$platform" "$dest" false
    (( count++ )) || true
  done

  # Pro skills
  if [ "$INCLUDE_PRO" = true ]; then
    if [ -d "$REPO_DIR/pro" ]; then
      local pro_dest="$dest/pro"
      for skill_dir in "$REPO_DIR"/pro/*/; do
        [ -d "$skill_dir" ] || continue
        [ -f "$skill_dir/SKILL.md" ] || continue
        install_skill "$skill_dir" "$platform" "$dest" true
        (( pro_count++ )) || true
      done
    else
      echo -e "  ${YELLOW}⚠${RESET}  No pro/ directory found. Purchase from brianrwagner.gumroad.com first."
    fi
  fi

  echo ""
  local summary="${GREEN}${count} free skills${RESET}"
  if [ "$INCLUDE_PRO" = true ] && [ "$pro_count" -gt 0 ]; then
    summary="$summary + ${YELLOW}${pro_count} pro skills${RESET}"
  fi
  echo -e "  Installed: $summary"
  echo -e "  ${DIM}Path: ${dest}${RESET}"
}

# ── Main ──────────────────────────────────────────────────────────────────────
echo ""
echo -e "${BOLD}${CYAN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${RESET}"
echo -e "${BOLD}  AI Marketing Skills — Installer${RESET}"
[ "$DRY_RUN" = true ] && echo -e "${YELLOW}  DRY RUN — no files will be written${RESET}"
echo -e "${BOLD}${CYAN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${RESET}"

# ── Platform selection ────────────────────────────────────────────────────────
PLATFORMS_TO_INSTALL=()

if [ -n "$PLATFORM_ARG" ]; then
  # Explicit platform flag
  PLATFORMS_TO_INSTALL=("$PLATFORM_ARG")
elif [ "$INSTALL_ALL" = true ]; then
  detect_platforms
  PLATFORMS_TO_INSTALL=("${DETECTED[@]}")
  if [ "${#PLATFORMS_TO_INSTALL[@]}" -eq 0 ]; then
    echo -e "\n${YELLOW}No platforms detected. Running in generic mode.${RESET}"
    PLATFORMS_TO_INSTALL=("generic")
  fi
else
  # Interactive: detect and let user choose
  detect_platforms

  echo ""
  echo -e "${BOLD}Detected platforms:${RESET}"
  if [ "${#DETECTED[@]}" -eq 0 ]; then
    echo -e "  ${DIM}None detected. Will use generic install.${RESET}"
    DETECTED=("generic")
  else
    for p in "${DETECTED[@]}"; do
      echo -e "  ${GREEN}✓${RESET} $p  ${DIM}(→ $(platform_dest "$p"))${RESET}"
    done
  fi

  echo ""
  if [ "${#DETECTED[@]}" -gt 1 ]; then
    echo -e "${BOLD}Install to:${RESET} [all] / $(IFS='|'; echo "${DETECTED[*]}") / or enter a number"
    echo ""
    i=1
    for p in "${DETECTED[@]}"; do
      echo "  $i) $p"
      (( i++ )) || true
    done
    echo "  $i) all"
    echo ""
    read -rp "Choice [all]: " choice
    choice="${choice:-all}"

    if [[ "$choice" =~ ^[0-9]+$ ]]; then
      if [ "$choice" -le "${#DETECTED[@]}" ]; then
        PLATFORMS_TO_INSTALL=("${DETECTED[$((choice-1))]}")
      else
        PLATFORMS_TO_INSTALL=("${DETECTED[@]}")
      fi
    elif [ "$choice" = "all" ]; then
      PLATFORMS_TO_INSTALL=("${DETECTED[@]}")
    else
      PLATFORMS_TO_INSTALL=("$choice")
    fi
  else
    PLATFORMS_TO_INSTALL=("${DETECTED[@]}")
  fi

  # Pro skills prompt (only in interactive mode)
  if [ "$INCLUDE_PRO" = false ]; then
    echo ""
    if [ -d "$REPO_DIR/pro" ]; then
      echo -e "${YELLOW}Pro skills found locally.${RESET} Install pro/ skills too? [y/N]: "
      read -rp "" pro_choice
      pro_choice="${pro_choice:-N}"
      [[ "$pro_choice" =~ ^[Yy]$ ]] && INCLUDE_PRO=true
    else
      echo -e "${DIM}Pro skills: not found locally. Purchase at brianrwagner.gumroad.com${RESET}"
    fi
  fi
fi

# ── Run installs ──────────────────────────────────────────────────────────────
for platform in "${PLATFORMS_TO_INSTALL[@]}"; do
  install_to_platform "$platform"
done

# ── Final summary ─────────────────────────────────────────────────────────────
echo ""
echo -e "${BOLD}${CYAN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${RESET}"
echo -e "${BOLD}  Done!${RESET}"
echo -e "${DIM}  Tip: Re-run with --dry-run to preview changes anytime${RESET}"
echo -e "${BOLD}${CYAN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${RESET}"
echo ""
