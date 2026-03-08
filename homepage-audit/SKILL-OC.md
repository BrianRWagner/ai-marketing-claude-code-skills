---
name: homepage-audit
description: Audit a homepage for conversion, clarity, and positioning. Use when someone says "audit my homepage," "why isn't my site converting," "review my landing page," or shares a URL for feedback.
---

**Platform:** OpenClaw (token-optimized)

## Required Inputs

- Homepage URL (or pasted copy)
- ICP (specific role/situation)
- Primary conversion goal (sign up / book call / buy / contact)
- Top 3 competitors (for positioning comparison)

**If URL provided:** `web_fetch(URL)` to extract content before auditing.

## Mode

| Mode | Output | Use when |
|------|--------|----------|
| `quick` | Headline + CTA audit, top 3 fixes | Pre-meeting fast check |
| `standard` | Full 6-section scored audit + priority roadmap | Default |
| `deep` | Full audit + rewrite-level copy fixes + A/B test recommendations | Full CRO overhaul |

## 6 Audit Sections (score each 1–10)

**1. Headline & Subheadline**
- Does it pass the 5-second test? (Can a stranger state what you do in 5 sec?)
- ICP-specific language vs. generic?
- Outcome-first or feature-first?

**2. Value Proposition**
- Is there a clear "only we" claim?
- Would a competitor say the exact same thing?
- Is it specific or generic?

**3. Social Proof**
- Named companies, logos, or testimonials above the fold?
- Do testimonials have specific outcomes (numbers, named results)?
- Quantity + quality of proof signals

**4. CTA**
- Single primary CTA or competing CTAs?
- Action-specific ("Start free trial") vs. vague ("Learn more")?
- Friction level (form fields, steps required)

**5. Clarity & Friction**
- Navigation competing with the CTA?
- Mobile readability?
- Page load / visual clutter?

**6. Positioning Differentiation**
- Could this homepage belong to a competitor?
- Does the messaging own a specific category/claim?
- ICP would feel "this is for me" — yes or no?

## Scoring Guide

| Score | Meaning |
|-------|---------|
| 1–3 | Actively hurting conversions |
| 4–6 | Neutral — present but forgettable |
| 7–8 | Functional — minor sharpening needed |
| 9–10 | Exceptional (rare — reserve for truly remarkable copy) |

## Output Format

```
## Homepage Audit: [Domain] — [Date]

### Section Scores
| Section | Score /10 | Key Issue |
|---------|-----------|-----------|

### Total: X/60

### Priority Fixes (in order of leverage)
1. [Section] — [Specific fix, not "improve your headline"]
2. ...

### Quick Wins (do this week)
[1-2 highest-impact, lowest-effort changes]

### Rewrite Recommendations
[If deep mode: actual copy rewrites for headline, subheadline, CTA]
```

---
*Skill by Brian Wagner | AI Marketing Architect*
