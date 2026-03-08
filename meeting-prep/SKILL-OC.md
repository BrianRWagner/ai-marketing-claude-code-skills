---
name: meeting-prep-cc
description: Generate a pre-meeting prep brief in Claude Code. Researches participants, pulls vault context, builds agenda, surfaces sharp questions. Use when user says "prep for this meeting," "I have a call with," "meeting tomorrow with," or "prep brief for [name/company]."
---

**Platform:** OpenClaw (token-optimized)

## Required Inputs

- Participant name(s) and company
- Meeting type (WRS / Sales / Strategy / Partnership / Interview / Other)
- Meeting time/date
- Optional: prior notes, last meeting summary

If meeting type missing, ask before proceeding.

## Workflow

**Step 1 — Vault search:**
```bash
VAULT="${VAULT_PATH:-/root/obsidian-vault}"
grep -rl "$NAME\|$COMPANY" "$VAULT" --include="*.md" \
  -not -path "*/.git/*" -not -path "*/.obsidian/*" \
  | head -10 | while read f; do
    echo "--- ${f##$VAULT/} ---"
    grep -n "$NAME\|$COMPANY" "$f" | head -5
  done
```

**Step 2 — Prior meeting notes:**
```bash
find "$VAULT/bambf/meeting-prep" -name "*.md" 2>/dev/null \
  | xargs grep -l "$NAME\|$COMPANY" 2>/dev/null | sort -r | head -3
```

**Step 3 — Open commitments check:**
```bash
grep -rn "TODO\|action item\|follow up\|promised" "$VAULT" --include="*.md" -l \
  | xargs grep -l "$NAME\|$COMPANY" 2>/dev/null | head -5
```

## Output Format

```
# Meeting Prep: [Name] | [Date] [Time]

Meeting type: [type]
Their role: [role at company]
Relationship stage: [new / existing / lapsed]

---

WHY THIS MEETING MATTERS
[1-2 sentences on stakes + desired outcome]

3 PRIORITIES FOR THIS CALL
1. [Priority 1]
2. [Priority 2]
3. [Priority 3]

CONTEXT FROM VAULT
[Pulled notes, open items, prior commitments — or "No prior history found"]

QUESTIONS TO ASK
1. [Research-referencing question]
2–5. [Additional questions]

WATCH FOR
[Known objections, sensitivities, open loops]

DESIRED OUTCOME
[What success looks like in one sentence]

NEXT STEP TO PROPOSE
[Specific: "schedule X," "send Y," "agree on Z"]
```

**Then:** Save to `bambf/meeting-prep/YYYY-MM-DD-[lastname]-prep.md`

**Then:** Print 3-line summary:
```
WHO: [Name], [role] at [company]
WHY IT MATTERS: [1 sentence]
TOP QUESTION: [Sharpest question to ask]
```

## Reference Files
- `references/brief-template.md` — full format
- `references/meeting-types.md` — agenda by type
- `references/question-banks.md` — question sets

---
*Skill by Brian Wagner | AI Marketing Architect*
