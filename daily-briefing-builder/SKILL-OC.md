---
name: daily-briefing-builder
description: Generate a clean morning brief in Claude Code — pulls today's priorities, unposted content, and weather from your vault.
---

**Platform:** OpenClaw (token-optimized)

## Required Inputs

- `vault_path` — absolute path to Obsidian vault
- `city` — city name for weather (wttr.in format, spaces as `+`)

If either missing, ask before proceeding.

## Workflow

**Step 1 — Today's actions:**
```bash
TODAY=$(date +%Y-%m-%d)
VAULT="VAULT_PATH_HERE"
ACTIONS_FILE="$VAULT/bambf/tracking/daily-actions/${TODAY}.md"
if [ -f "$ACTIONS_FILE" ]; then
  awk '/## Today.s 3 Actions/{found=1; next} found && /^[0-9]/{print} found && /^##/{exit}' "$ACTIONS_FILE"
else
  echo "FILE_MISSING:$ACTIONS_FILE"
fi
```

**Step 2 — Unposted content scan:**
```bash
find "$VAULT/content/ready-to-post" -name "*.md" | while read f; do
  if grep -q '\*\*Posted:\*\* ❌' "$f" 2>/dev/null; then
    echo "UNPOSTED:${f##$VAULT/}"
  fi
done
```

**Step 3 — Weather:**
```bash
curl -s "https://wttr.in/CITY?format=3"
```

## Output Format

```
# 🌅 Morning Brief — [Day], [Date]

## ☀️ Weather
[wttr.in output]

## 🎯 Today's 3 Actions
[From daily actions file, or "No actions file found for today — add to $ACTIONS_FILE"]

## 📝 Ready to Post ([count] items)
[List of unposted content with filenames]

## 🔥 Recommended First Action
[Highest-priority item based on what was found]
```

If no actions file: "No actions file found. Create it at `bambf/tracking/daily-actions/YYYY-MM-DD.md` with your Top 3."

If no unposted content: "No unposted drafts found."

---
*Skill by Brian Wagner | AI Marketing Architect*
