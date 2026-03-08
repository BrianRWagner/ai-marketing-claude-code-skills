---
name: competitor-intel-brief
description: Run a structured competitive teardown in 20 minutes. Covers positioning, ICP, offer analysis, moat assessment, vulnerability mapping, and a direct attack brief. Use when someone says "analyze my competitor," "competitive research," "how do I differentiate from X," or "what are my competitor's weaknesses."
---

**Platform:** OpenClaw (token-optimized)

## Required Input

- Competitor name + website URL
- Optional: your own positioning (for gap analysis)
- Optional: prior analysis file (triggers re-audit mode)

## Memory Protocol

**Save to:** `research/competitor-[name]-YYYY-MM-DD.md`

**Re-audit:** If prior file exists → load it → after each section add "Change since last audit: [improved/declined/stable] — [what changed]"

## Mode

| Mode | Output | Use when |
|------|--------|----------|
| `quick` | Positioning snapshot + top 3 vulnerabilities | Pre-call competitive context |
| `standard` | Full 4-step teardown + vulnerability map | GTM planning, repositioning |
| `deep` | Full teardown + direct attack brief + quarterly comparison | Sustained competitive strategy |

## Step 1: Web Research

```
web_fetch([competitor URL])
web_search('[Competitor] pricing 2026')
web_search('[Competitor] reviews complaints')
web_search('[Competitor] vs alternatives')
web_search('[Competitor] customers case studies')
```

## Step 2: 4-Part Teardown

**Section 1 — Positioning**
- Headline + subheadline (exact copy)
- What category do they claim?
- Who is the stated audience?
- Key differentiator claim

**Section 2 — ICP Profile**
- Who they're actually built for (evidence from copy + case studies)
- Company size, stage, industry focus
- Buyer persona (based on language used)

**Section 3 — Offer Analysis**
- Pricing model (freemium / trial / paid / enterprise)
- Key features emphasized
- What's buried or missing?
- Onboarding friction signals

**Section 4 — Moat Assessment**
- Distribution advantage (where do they get customers?)
- Data advantage (network effects, proprietary data?)
- Brand authority (publications, podcasts, following?)
- Technical moat (switching costs, integrations?)

## Step 3: Vulnerability Map

| Vulnerability | Evidence | Your Opportunity |
|---------------|----------|-----------------|
| [Gap in their ICP coverage] | [proof] | [specific angle] |
| [Pricing/offer weakness] | [proof] | [specific angle] |
| [Messaging gap] | [proof] | [specific angle] |

## Step 4: Direct Attack Brief (deep mode)

```
## Attack Strategy: [Competitor]

Their primary position: [1 sentence]
Their ICP sweet spot: [who they serve best]
Where they're weakest: [specific gap]

Our angle: [specific positioning to own the gap]
Messaging to use: "[specific line that creates separation]"
Content to create: [topics they're not covering]
Sales objection to train for: "Why you over [Competitor]?"
  → "[Specific answer referencing the gap]"
```

## Ecosystem Routing

- Feeds **Brand Positioning Audit** → pass competitive landscape summary
- Feeds **Founder Intelligence** → pass competitive context for lens application

---
*Skill by Brian Wagner | AI Marketing Architect | Pro*
