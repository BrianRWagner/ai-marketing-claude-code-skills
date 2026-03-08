---
name: vault-cleanup-auditor
description: Audit your Obsidian vault in Claude Code — finds stale drafts, empty folders, duplicate filenames, and incomplete files. Saves a dated report.
---

**Platform:** OpenClaw (token-optimized)

## Required Input

- `vault_path` — absolute path to Obsidian vault root

Ask if missing. Do not proceed without it.

## 4 Checks (run all, capture output before formatting)

**Check 1 — Stale drafts (unposted, 30+ days old):**
```bash
VAULT="VAULT_PATH_HERE"
find "$VAULT/content/ready-to-post" -name "*.md" -mtime +30 2>/dev/null | while read f; do
  if grep -q '\*\*Posted:\*\* ❌' "$f" 2>/dev/null; then
    days=$(( ($(date +%s) - $(stat -c %Y "$f")) / 86400 ))
    echo "${days}d|${f##$VAULT/}"
  fi
done
```

**Check 2 — Incomplete files (no headings, 5+ lines):**
```bash
VAULT="VAULT_PATH_HERE"
find "$VAULT" -name "*.md" -not -path "*/.git/*" -not -path "*/.obsidian/*" -not -path "*/.openclaw/*" | while read f; do
  if ! grep -qE '^#{1,6} ' "$f" 2>/dev/null; then
    lines=$(wc -l < "$f")
    [ "$lines" -gt 5 ] && echo "${lines}lines|${f##$VAULT/}"
  fi
done
```

**Check 3 — Duplicate filenames:**
```bash
VAULT="VAULT_PATH_HERE"
find "$VAULT" -name "*.md" -not -path "*/.git/*" -not -path "*/.obsidian/*" \
  -printf "%f\n" | sort | uniq -d | while read name; do
  echo "DUPE:$name"
  find "$VAULT" -name "$name" -not -path "*/.git/*" | while read f; do
    echo "  PATH:${f##$VAULT/}"
  done
done
```

**Check 4 — Empty folders:**
```bash
VAULT="VAULT_PATH_HERE"
find "$VAULT" -type d -empty -not -path "*/.git/*" -not -path "*/.obsidian/*" | while read d; do
  echo "EMPTY:${d##$VAULT/}"
done
```

## Output Format

Save to: `vault-audit/YYYY-MM-DD-audit.md`

```markdown
# Vault Audit — [YYYY-MM-DD]
**Vault:** [path]

## Summary
| Check | Count | Priority |
|-------|-------|----------|
| Stale drafts | X | High |
| Incomplete files | X | Medium |
| Duplicate filenames | X | High |
| Empty folders | X | Low |

## Check 1: Stale Drafts ([count])
[List with days old + path]
**Action:** Review each — post, archive, or delete.

## Check 2: Incomplete Files ([count])
[List with line count + path]
**Action:** Finish or delete.

## Check 3: Duplicate Filenames ([count])
[Grouped by filename with all paths]
**Action:** Consolidate or rename.

## Check 4: Empty Folders ([count])
[List paths]
**Action:** Delete empty folders.

## Recommended Actions
1. [Highest priority, most impactful]
2. [Next]
```

---
*Skill by Brian Wagner | AI Marketing Architect*
