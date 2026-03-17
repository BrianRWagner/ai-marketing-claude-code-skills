---
name: brand-positioning-audit
version: "3.0.0"
updated: 2026-03-17
platform: openclaw
description: "Use when: user wants to diagnose brand messaging, score positioning, find root positioning failure, or get headline/CTA rewrites. NOT for: writing copy from scratch, content strategy, voice/tone issues."
---

# Brand Positioning Audit v3 — OpenClaw (Condensed)

## Pre-Flight Script
```bash
node scripts/audit-prep.mjs <brand_url> [competitor_url]
# Fetches verbatim copy, structures it for scoring
# Output: structured extract → Claude scores from evidence
```

## Input Requirements
Confirm before starting:
- [ ] Brand URL OR pasted homepage copy
- [ ] ICP (optional but improves accuracy)
- [ ] Top competitors (optional but improves competitive separation score)

If URL unavailable: ask for homepage copy + about page copy pasted directly.

## Three Modes

| Mode | Output | Use when |
|------|--------|---------|
| `quick` | Root failure + top 2 fixes | Fast gut-check |
| `standard` | 6-dimension scorecard + root cause + fixes | Full audit |
| `deep` | Full audit + 3 complete rewrite sets + competitor benchmark | GTM, rebrand, investor pitch |

## The 6 Dimensions (Score 1-10 Each)

**1. ICP Clarity** — Can someone name 5 real people who fit?
- 10 = specific ICP with context. 1 = anyone could be the customer.

**2. Value Clarity** — Specific outcome + mechanism?
- 10 = "Cut response time in half by routing tickets automatically"
- 1 = "The better way to work"

**3. Differentiation** — Could a competitor say this exact thing?
- 10 = position so specific competitor can't claim it without changing their business
- 1 = interchangeable with every competitor

**4. Proof Credibility** — Earned or asserted?
- 10 = specific numbers, named clients, before/after results
- 1 = "trusted by satisfied customers"

**5. Message-Market Fit** — ICP's language or inside-out language?
- 10 = exact phrases ICP uses to describe their problem
- 1 = entirely internal language ("platform", "capabilities", "solution")

**6. Competitive Separation** — Clear reason to choose you vs. alternatives?
- 10 = creates comparison frame that makes competitors look wrong for the buyer
- 1 = no competitive framing at all

## Output Format
```markdown
## Scorecard
| Dimension | Score | Evidence (verbatim) |
| ICP Clarity | X | "[quote]" |
| Value Clarity | X | "[quote]" |
| Differentiation | X | "[quote]" |
| Proof Credibility | X | "[quote]" |
| Message-Market Fit | X | "[quote]" |
| Competitive Separation | X | "[quote]" |
| **Overall** | **X** | |

## Root Failure: [type]
[1-2 sentences: what's broken and why fixing others won't help until this is fixed]

## Priority Fixes
Fix 1 (root): [specific action] — Why: [one sentence]
Fix 2: [specific action]
Fix 3: [specific action]

## Rewrite Pack
Option A — Benefit-forward: Headline | Sub | CTA
Option B — ICP-specific: Headline | Sub | CTA
Option C — Differentiation-led: Headline | Sub | CTA

## Strategic Risks if Unchanged
1. [specific consequence]
2. [second risk]
3. [competitor who could take your category position]
```

## Root Failure Types
- **Clarity failure** — Can't tell what this is or who it's for. Fix everything here first.
- **Audience failure** — ICP too broad or wrong. All messaging aimed at no one.
- **Differentiation failure** — Position real but not owned. Any competitor can claim it.
- **Proof failure** — Claims not earned. Needs proof that doesn't exist yet.
- **Language failure** — Insight right, words wrong. Rewrites will fix it.

## After Audit — Next Options
A) More rewrites — 5 more headline options for strongest angle
B) Competitor benchmark — same scorecard on competitor, side-by-side
C) Decision mode — evaluating 2 positioning directions
D) Done

## ⚠️ Common Failures
- A/B test variant scored instead of real homepage → confirm verbatim copy with user first
- Rewrite options all sound the same → generate each independently from its frame (outcome / ICP / differentiation)
- Self-critique always scores 8+ → cite specific evidence for any score above 7 or the critique is invalid
- Wrong ICP → wrong audit → ask "tell me about a customer who churned in first 90 days"
- Rewrites don't match voice → ask for voice profile or 2 example sentences before writing rewrites

## Files
- `scripts/audit-prep.mjs` — fetches and structures brand page copy
- `references/examples.md` — full audit example + before/after for each root failure type
