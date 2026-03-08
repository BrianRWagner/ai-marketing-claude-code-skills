---
name: de-ai-ify
description: Remove AI-generated jargon and restore human voice to text. Built from analyzing 1,000+ AI vs human content pieces.
version: 2.0.0
author: theflohart
tags: [writing, editing, voice, ai-detection, content-quality]
---

**Platform:** OpenClaw (token-optimized)

## Mode

| Mode | Output | Use when |
|------|--------|----------|
| `quick` | Remove obvious AI patterns, single pass | Fast social copy |
| `standard` | Full 47-pattern scan + human score (0–10) + change log | Default — any public content |
| `deep` | Full scan + voice calibration against writer's actual samples | Ghostwriting, brand-voice-matched content |

## Pattern Categories to Remove

**Overused transitions (remove/vary):**
Moreover, Furthermore, Additionally, Nevertheless, excessive "However" (>2/500 words), "While X, Y" openers (>3/page), "In conclusion," "To summarize"

**AI clichés (replace with specifics):**
"In today's fast-paced world," "Let's dive deep," "Unlock your potential," "Harness the power of," "It's no secret that," "The key takeaway is," "At the end of the day," "Game-changer," "Paradigm shift," "Delve," "Revolutionize," "Transformative"

**Hedging language (cut):**
"It's important to note," "It's worth mentioning," "One might argue," "As you might expect," "Needless to say"

**Sentence structure patterns (rewrite):**
- Every paragraph same length → vary
- Every sentence same structure → mix short + long
- Passive voice dominance → active
- Triple-adjective openers → cut to one

## Scoring Rubric (0–10)

| Score | Meaning |
|-------|---------|
| 0–3 | Clearly AI — obvious patterns throughout |
| 4–6 | Detectable — some patterns remain |
| 7–8 | Human-ish — minor polish needed |
| 9–10 | Genuinely human — distinct voice present |

Target: ≥8. If final score <7, run another pass.

## Workflow

1. Run pattern scan — flag every instance by category
2. Calculate pre-edit score
3. Apply rewrites — preserve facts, structure, key points
4. Calculate post-edit score
5. Produce change log: what changed + why
6. If deep mode: compare against voice sample, adjust tone to match

## Output Format

```
## De-AI-ify Results

**Pre-edit score:** X/10
**Post-edit score:** X/10
**Patterns removed:** [count by category]

### Cleaned Text
[Full rewritten content]

### Change Log
- [Original phrase] → [Replacement] (reason)
```

---
*Skill by theflohart | AI Marketing Skills*
