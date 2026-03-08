---
name: brand-positioning-audit
version: "2.0.0"
price: "$9"
author: "@BrianRWagner"
platform: claude-code
slug: "brw-brand-positioning-audit"
description: "Diagnose brand positioning with a 6-dimension scorecard, identify the root failure, and receive specific rewrite-level fixes — including headline, subheadline, and CTA rewrites ready to use."
---

**Platform:** OpenClaw (token-optimized)

## Gate Check (required before analysis)

```
[ ] Brand URL provided (minimum required)
[ ] OR current messaging pasted directly (if no website)
[ ] ICP defined (optional — improves diagnosis)
[ ] Top competitors identified (optional — improves competitive scoring)
[ ] Stated frustration with current positioning (optional)
```

If URL unavailable → ask for homepage copy + about page copy. Do not audit vague descriptions.

## Mode

| Mode | Output | Use when |
|------|--------|----------|
| `quick` | Root failure identified + top 2 fixes | Fast gut-check |
| `standard` | 6-dimension scorecard + root cause + specific fixes | Default |
| `deep` | Full audit + headline/subheadline/CTA rewrites + competitive separation | GTM launch, rebrand, investor pitch |

## Phase 1: Fetch Content

Run `web_fetch([URL])` to extract homepage + about copy before analyzing.

## Phase 2: 6-Dimension Scorecard (score each 1–5)

| Dimension | What to Assess |
|-----------|----------------|
| 1. ICP Clarity | Can a stranger identify exactly who this is for in 5 seconds? |
| 2. Problem Statement | Is there a specific pain named, or generic category language? |
| 3. Differentiation | Is there an "only we" claim? Could a competitor say the same? |
| 4. Proof & Credibility | Specific evidence — numbers, named clients, named outcomes? |
| 5. CTA Clarity | One clear action? Friction level? Specific or vague? |
| 6. Competitive Separation | Does it feel like it could belong to a competitor? |

Scoring: 1–2 = actively hurting | 3 = neutral/generic | 4–5 = functional/exceptional

## Phase 3: Root Failure Identification

After scoring, name ONE primary root failure from:
- ICP problem (too broad — trying to be for everyone)
- Category problem (undefined or wrong category)
- Differentiation problem (no "only we" claim)
- Proof problem (claims without evidence)
- Messaging problem (right strategy, wrong words)

State: "The root failure is [X]. Everything else is a symptom of this."

## Phase 4: Specific Fixes (not direction — actual copy)

For each dimension scored < 4:
```
Current: "[actual copy from their site]"
Problem: [one sentence — why this doesn't work]
Rewrite: "[specific replacement copy]"
```

In deep mode — also provide:
- **Headline rewrite** (3 variants)
- **Subheadline rewrite** (2 variants)
- **CTA rewrite** (2 variants)

## Output Format

```
## Brand Positioning Audit: [Brand] — [Date]

### Scorecard
| Dimension | Score /5 | Key Finding |

### Total: X/30

### Root Failure
[Single identified root cause — stated directly]

### Section Fixes
[Per-dimension: Current → Problem → Rewrite]

### Priority Order
1. [Fix this first — highest leverage]

### Next Steps
[Cross-skill routing if applicable]
```

---
*Skill by Brian Wagner | AI Marketing Architect | $9*
