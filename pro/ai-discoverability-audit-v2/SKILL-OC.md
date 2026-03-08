---
name: ai-discoverability-audit-v2
description: "Find out if AI can find you — and fix it before your competitors do. 6-dimension scored audit with cross-skill routing, re-audit comparison, and 30-day action plan."
version: "2.0"
price: "$19"
author: "@BrianRWagner"
---

**Platform:** OpenClaw (token-optimized)

## Required Inputs

- Brand name + website URL
- Primary product/service in plain English
- Target customer (specific role/situation)
- Top 3 competitors (real names)
- Prior audit file path (triggers re-audit mode)

## Mode

| Mode | Output | Use when |
|------|--------|----------|
| `quick` | Phase 1 only + top 3 priority fixes | Fast visibility check |
| `standard` | All 6 sections + scored report + 30-day plan | Default quarterly audit |
| `deep` | Full + quarterly comparison + competitive benchmarking + 90-day roadmap | Full overhaul |

## Memory Protocol

**Save to:** `audits/ai-discoverability-[brand]-YYYY-MM-DD.md`

**Re-audit mode:** If prior audit file exists → load it first → show `[Prior Score] → [New Score] = [Delta]` per section → highlight biggest improvements/regressions → update action plan based on what was implemented.

## 6 Audit Sections (score each 1–5)

**Section 1: Direct Brand Queries**
Run on ChatGPT + Perplexity + Claude:
- "What is [Brand]?" / "What does [Brand] do?" / "Is [Brand] any good?" / "What do people say about [Brand]?"
- Score: Brand known? Description accurate? Sentiment? Misattribution detected?

**Section 2: Entity Clarity**
- Is brand name distinctive or easily confused?
- First 50 words contain: name + specific role + specific audience?
- Niche claim specific enough? (audience + method + outcome)

**Section 3: Content Signal Strength**
- Does brand have content answering questions ICP asks AI?
- Direct-answer language present ("[Brand] helps [audience] with...")?
- Recency signals (recent posts, current dates)?

**Section 4: Category Presence**
- Appears when category queries run? ("Best [category] for [audience]")
- Appears in competitor alternatives queries?

**Section 5: Third-Party Authority**
- External mentions: media, press, podcasts, named clients, publications?
- Cross-platform footprint (website + X + LinkedIn consistent)?

**Section 6: Competitive Gap**
- Same queries run for top 3 competitors
- Where do they appear that brand doesn't?

## Ecosystem Routing

| Score | Route to |
|-------|----------|
| Section 2 FAIL (Entity < 3) | Brand Positioning Audit |
| Section 3 MISSING/WEAK | Content Idea Generator |
| Section 6 gap found | Competitor Intel Brief |

## Output Format

```
## AI Discoverability Audit v2: [Brand] — [Date]

### Section Scores
| Section | Score /5 | Status | Delta (if re-audit) |

### Overall: X/30 — [Rating]

### Priority Action Plan
**Do This Week:** (score < 2)
**This Month:** (score 2–3)
**Long-term:** (score 4, structural)

### Cross-Skill Routes
[Any routing recommendations]

### Re-audit: [Date + 90 days]
```

---
*Skill by Brian Wagner | AI Marketing Architect | $19*
