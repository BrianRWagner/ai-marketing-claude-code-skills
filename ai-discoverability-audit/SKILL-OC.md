---
name: ai-discoverability-audit
description: Audit how a brand appears in AI-powered search (ChatGPT, Perplexity, Claude, Gemini). Use when user mentions "AI search," "how do I show up in ChatGPT," "AI discoverability," "AEO," "LLM visibility," or wants to understand their brand's AI presence.
---

**Platform:** OpenClaw (token-optimized)

## Required Inputs (collect before starting)

- Company name + website URL
- Primary product/service + category
- Target customer (specific role/situation)
- Geography
- Top 3 competitors (real names)
- Prior audit results (if any — triggers comparison mode)
- Current positioning statement (if available)

## Mode

| Mode | Output | Use when |
|------|--------|----------|
| `quick` | Phase 1 only + top 3 fixes | Fast check |
| `standard` | All 4 phases + scored report + roadmap | Default |
| `deep` | Full + competitive benchmarking + 90-day plan | Full overhaul |

## Workflow

**1. Pre-audit hypothesis**
State expected recognition level (strong/moderate/weak), main risk (misattribution / missing / weak authority), competitor most likely to dominate.

**2. Direct brand queries** — run on ChatGPT + Perplexity + Claude:
- "What is [Company]?"
- "What does [Company] do?"
- "Is [Company] any good?"
- "What do people say about [Company]?"

For each: AI knows brand? Description accurate? Sentiment? Sources cited? Misattribution detected?

**3. Category queries** — does brand appear when ICP asks category questions?
- "Best [category] tools for [audience]"
- "Alternatives to [Competitor A]"
- "[Category] recommendations"

**4. Competitive benchmarking** — run same queries for top 3 competitors. Score each: Mentioned / Not mentioned / Partially mentioned.

**5. Score each section 1–5:**
- Brand recognition (direct queries)
- Description accuracy (vs. stated positioning)
- Category presence (category queries)
- Sentiment quality
- Competitive gap

**6. Priority roadmap**
- Do This Week (score <3, quick wins)
- This Month (score 3–4, content/authority fixes)
- Long-term (structural positioning work)

## Output Structure

```
## AI Discoverability Audit: [Brand] — [Date]

### Pre-Audit Hypothesis
[Expected recognition + main risk]

### Query Results Summary
| Query | ChatGPT | Perplexity | Claude | Score |
|-------|---------|------------|-------|-------|

### Section Scores
| Section | Score /5 | Gap |
|---------|----------|-----|

### Overall Score: X/25 — [Rating]

### Priority Roadmap
**Do This Week:**
1. [Specific action]

**This Month:**
1. [Specific action]

### Re-audit Schedule: [Date + 90 days]
```

If prior audit exists: show `[Prior Score] → [New Score] = [Delta]` for each section.

---
*Skill by Brian Wagner | AI Marketing Architect*
