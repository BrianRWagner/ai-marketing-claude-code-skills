---
name: tweet-draft-reviewer
description: Review tweet drafts in Claude Code against 8 voice rules. Scores 1-10, breaks down every rule, and rewrites anything that scores below 7.
---

**Platform:** OpenClaw (token-optimized)

## How to Use

Single draft: `Review this tweet draft: [paste tweet]`
Batch scan: `Review all drafts in content/tweet-drafts/`

## Intake

**Mode A — Direct paste:** Proceed to scoring.
**Mode B — Folder scan:**
```bash
find "${VAULT_PATH:-$(pwd)}/content/tweet-drafts" -name "*.md" 2>/dev/null | while read f; do
  grep -q 'reviewed: true' "$f" 2>/dev/null || echo "UNREVIEWED:$f"
done
```
**Mode C — Ambiguous:** Ask for draft or folder path.

## 8 Scoring Rules (✅ PASS / ❌ FAIL)

| # | Rule | Fail Condition |
|---|------|----------------|
| 1 | No "I" opener | First word is exactly "I" |
| 2 | Strong opener | First sentence is a question (ends ?) or starts with "Have/Do/Are/What if you" |
| 3 | No AI tells | Contains: delve, certainly, game-changing, game changer, it's worth noting, invaluable, unleash, revolutionize, transformative |
| 4 | No generic closers | Ends with: "what do you think," "drop a comment," "thoughts?," "let me know in the comments," "agree?," "sound familiar?" |
| 5 | Corey Test (specificity) | Vague language with no numbers, names, or concrete outcomes |
| 6 | Character count | >280 chars with no thread formatting (numbered sections = PASS) |
| 7 | Single point | Makes 3+ distinct unrelated claims with no through-line |
| 8 | Punchy rhythm | >3 consecutive sentences of similar length (monotonous) |

## Scoring

| Score | Rating | Action |
|-------|--------|--------|
| 8–10 | Strong | Ready to post |
| 6–7 | Good | Light edit — flag specific issue |
| 4–5 | Weak | Rewrite required |
| 1–3 | Poor | Full rewrite + explanation |

**Rule:** Score <7 → always provide a rewrite. Score ≥7 → note what's working, flag any minor issues.

## Output Format

```
## Tweet Review

**Score: X/10** — [Strong/Good/Weak/Poor]

**Rule Breakdown:**
1. No "I" opener: ✅/❌ [reason]
2. Strong opener: ✅/❌ [reason]
3. No AI tells: ✅/❌ [words flagged if any]
4. No generic closer: ✅/❌ [reason]
5. Corey Test: ✅/❌ [specific vague language if any]
6. Character count: ✅/❌ [count]
7. Single point: ✅/❌ [reason]
8. Punchy rhythm: ✅/❌ [reason]

**What's Working:** [if score ≥7]

**Rewrite:** [if score <7 — full rewrite applying all rules]
```

**For folder scans:** Output results as a table with filename + score, then show full review for each failed draft.

---
*Skill by Brian Wagner | AI Marketing Architect*
