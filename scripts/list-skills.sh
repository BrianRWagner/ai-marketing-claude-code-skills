#!/usr/bin/env bash
# list-skills.sh — List all available AI Marketing Skills with name, description, and tier

set -euo pipefail

REPO_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

# Colors
BOLD='\033[1m'
GREEN='\033[0;32m'
YELLOW='\033[0;33m'
CYAN='\033[0;36m'
DIM='\033[2m'
RESET='\033[0m'

# Parse YAML frontmatter field from a SKILL.md file
# Handles inline values, quoted values, and block scalars (|, >)
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

print_skill() {
  local skill_file="$1"
  local tier="$2"
  local skill_dir
  skill_dir="$(dirname "$skill_file")"
  local skill_name
  skill_name="$(basename "$skill_dir")"

  local name
  name="$(get_field "$skill_file" "name")"
  [ -z "$name" ] && name="$skill_name"

  local description
  description="$(get_field "$skill_file" "description")"
  [ -z "$description" ] && description="(no description)"

  if [ "$tier" = "PRO" ]; then
    local price
    price="$(get_field "$skill_file" "price")"
    local tier_label
    if [ -n "$price" ]; then
      tier_label="${YELLOW}PRO ${price}${RESET}"
    else
      tier_label="${YELLOW}PRO${RESET}"
    fi
  else
    tier_label="${GREEN}FREE${RESET}"
  fi

  echo -e "  ${BOLD}${name}${RESET}  [${tier_label}]"
  echo -e "  ${DIM}${description:0:120}${RESET}"
  echo ""
}

echo ""
echo -e "${BOLD}${CYAN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${RESET}"
echo -e "${BOLD}  AI Marketing Skills${RESET}"
echo -e "${DIM}  github.com/BrianRWagner/ai-marketing-claude-code-skills${RESET}"
echo -e "${BOLD}${CYAN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${RESET}"
echo ""

# Free skills
echo -e "${BOLD}FREE SKILLS${RESET}"
echo -e "${DIM}─────────────────────────────────────────────────────────${RESET}"

free_count=0
for skill_file in "$REPO_DIR"/*/SKILL.md; do
  [ -f "$skill_file" ] || continue
  skill_dir="$(dirname "$skill_file")"
  skill_name="$(basename "$skill_dir")"
  # Skip non-skill directories
  [[ "$skill_name" == "scripts" || "$skill_name" == "pro" ]] && continue
  print_skill "$skill_file" "FREE"
  (( free_count++ )) || true
done

# Pro skills
echo -e "${BOLD}PRO SKILLS${RESET}  ${DIM}(Gumroad — brianrwagner.gumroad.com)${RESET}"
echo -e "${DIM}─────────────────────────────────────────────────────────${RESET}"

pro_count=0
if [ -d "$REPO_DIR/pro" ]; then
  for skill_file in "$REPO_DIR"/pro/*/SKILL.md; do
    [ -f "$skill_file" ] || continue
    print_skill "$skill_file" "PRO"
    (( pro_count++ )) || true
  done
fi

echo -e "${BOLD}${CYAN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${RESET}"
echo -e "  ${GREEN}${free_count} free${RESET}  •  ${YELLOW}${pro_count} pro${RESET}  •  $((free_count + pro_count)) total"
echo -e "${BOLD}${CYAN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${RESET}"
echo ""
