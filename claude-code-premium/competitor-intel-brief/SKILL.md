---
name: competitor-intel-brief
version: "1.0.0"
price: "$12"
author: "@BrianRWagner"
platform: claude-code
slug: "brw-competitor-intel-brief"
description: "Run a structured competitive teardown in 20 minutes. Covers positioning, ICP, offer analysis, moat assessment (Helmer 7 Powers), vulnerability mapping, and a direct attack brief. Every finding needs a specific signal."
---

> **Optimized for Claude Code, Cursor, GitHub Copilot, and any AI that accepts markdown instructions.**
> Paste this SKILL.md into your AI's context or project instructions and run it immediately.

---

# Competitor Intel Brief

Most competitive research is vague, slow, and useless in a meeting. "They're strong in content" is not intelligence. This skill runs a structured teardown — positioning, ICP, offer gaps, moat assessment using Helmer's 7 Powers, vulnerability mapping, and a direct attack brief. Every finding needs a specific signal. Output is pitch-deck ready without editing.

**Time to complete:** 20 minutes with a clear target.

---

## Context Loading Gates

**The AI must confirm all gates before proceeding.**

```
GATE CHECK — Required Before Starting
======================================
[ ] Competitor name provided
[ ] Competitor website URL provided
[ ] Your own positioning provided (optional but improves output significantly)
[ ] Decision context stated: enter market / differentiate / pitch / pricing / all

If competitor URL is inaccessible: note it and proceed with inferred data.
Flag clearly where live data is missing. Do not assert unverified claims.
```

---

## Phase 1: Context Intake

Collect all inputs in a single message:

```
To run this competitive teardown, give me the following in one message:

1. Competitor name — the company or person you want analyzed
2. Website URL — homepage is enough; add pricing/about pages if you have them
3. Your own positioning — optional but significant improvement. One sentence: who you serve, what you do, how you're different.
4. What decision is this intel for?
   - Enter market (deciding whether/how to compete)
   - Differentiate (sharpen your positioning against them)
   - Pitch (competitive slide, investor question prep)
   - Pricing (benchmarking, anchoring, undercutting)
   - All of the above
```

---

## Phase 2: Analysis — Live Research Protocol

Before writing any output, fetch and research:

1. **Homepage** — capture hero headline, subheadline, and primary CTA verbatim
2. **About page** — capture how they describe origin, mission, team
3. **Pricing page** (if public) — capture tier names, prices, features
4. **Web search** for `[competitor] reviews`, `[competitor] vs`, `[competitor] complaints` — capture patterns, not individual reviews
5. **LinkedIn, Twitter/X** — activity and engagement signals

**Flag every data point with source.** Do not assert things you cannot verify. If a section needs data you don't have: write `[DATA NEEDED: describe what's missing and how to get it]`

---

## Phase 3: Generate — Six-Section Teardown

### SECTION 1: Positioning Snapshot

**1a. How they describe themselves**
Quote their hero copy verbatim:
```
Headline: "[verbatim]"
Subheadline: "[verbatim]"
Source: [URL]
```

**1b. Actual ICP vs. Implied ICP**
- Implied ICP: who they say they're for (marketing copy)
- Actual ICP: who their pricing, case studies, and features are optimized for

These often differ. A company saying "for all teams" but pricing at $500/month minimum has an actual ICP of mid-market+. Name the gap explicitly.

**1c. Primary message and what it's optimized for**
- Acquisition / Retention / Trust-building / Category creation

**1d. Tone fingerprint**
Five words describing how they actually communicate. Pull from copy, not claims.
```
Tone fingerprint: [word], [word], [word], [word], [word]
Evidence: "[verbatim quote that demonstrates this]"
```

---

### SECTION 2: Offer & Pricing Analysis

**2a. Offer structure**
Map: product/service names, tier structure, bundles, free trial model (yes/no), any services wrapped around core product.

**2b. What pricing signals about their customer**
Pricing is positioning. Interpret it:
- Under $50/mo → self-serve, price-sensitive, high volume
- $100-500/mo → SMB, features-led
- $500-2K/mo → mid-market, relationship expected
- $2K+/mo or custom → enterprise, ROI-justified, long cycles

**2c. What's conspicuously absent**
- Audience segments not served
- Price points with nothing available
- Features mentioned in reviews but missing from product
- Integrations or use cases unaddressed

Format:
```
Gap: [description]
Signal: [what they said/showed/priced that reveals this]
```

---

### SECTION 3: Content & Channel Fingerprint

**3a. Where they publish and how often**
List every content channel: blog frequency, email/newsletter, LinkedIn, X, YouTube/podcast, community, paid media signals.

**3b. Topics they consistently own**
3-5 topics appearing repeatedly. These are their content moats.
```
Topic: [description]
Evidence: [where/how often it appears]
AI search signal: [do they appear in AI search for it?]
```

**3c. Topics they avoid or handle poorly**
Content gaps = market gaps. Pain points their customers mention in reviews that don't appear in content. Questions their audience would logically have that they never address.
```
Gap: [topic]
Why it matters: [audience need]
Opportunity: [how to own this gap]
```

**3d. AI Search Presence**
Search their core terms in ChatGPT or Perplexity. Do they appear in AI answers?
```
AI Search Signal: [appear? what context? what does AI say about them?]
Implication: [what this means for competing in AI search]
```

---

### SECTION 4: Moat Assessment (Helmer 7 Powers)

**The 7 Powers:**

| Power | Definition |
|-------|-----------|
| Scale Economies | Advantages from producing at scale that reduce per-unit cost |
| Network Effects | Value increases as more users join |
| Switching Costs | Cost to leave their product/service |
| Cornered Resources | Exclusive access to a valuable input |
| Process Power | Operational capabilities that can't be copied |
| Branding Power | Earned trust commanding a price premium |
| Counter-Positioning | A model incumbents can't copy without cannibalizing themselves |

For each power:
```
[Power Name]
Assessment: [Have it / Weak version / Doesn't have it]
Evidence: [specific signal]
```

**Overall Moat Durability Score:**
- **Fragile** — 0-1 real powers. Copyable in 12-24 months.
- **Moderate** — 2-3 real powers. Winnable with the right approach.
- **Strong** — 4+ real powers. Hard to displace without a fundamentally different model.

Reasoning (2-4 sentences): What's protecting them? What's their biggest structural vulnerability?

---

### SECTION 5: Vulnerability Map

Three specific, exploitable gaps — not vague weaknesses.

**Vulnerability [1/2/3]:**

**The gap:** One specific, concrete description. Not "weak support" — instead: "They don't serve sub-10-person teams: $199/month minimum pricing assumes a dedicated ops person most small teams don't have."

**The signal:**
```
Signal: "[specific quote or data point]"
Source: [where this came from]
```

**The language to exploit it:**
```
Exploit language: "[specific copy — headline or sales pitch — that names the gap and claims ownership]"
```

---

### SECTION 6: Attack Brief

If you were launching against this competitor tomorrow:

**Positioning:**
```
Positioning statement: "[audience + differentiated outcome + why you, not them]"
Why they can't say this: [structural reason]
```

**Channel:**
```
Primary channel: [specific platform + format]
Rationale: [why this channel, against this competitor specifically]
Expected time to signal: [realistic estimate]
```

**Message:**
```
Core message: "[one sentence — true about you, false or unavailable for them]"
Why it's asymmetric: [what prevents them from claiming this]
```

**First action:**
```
First action: [specific, time-bound, measurable action]
Success signal: [how you'd know it's working in 30 days]
```

---

## Phase 4: Self-Critique

After generating all six sections, run this mandatory review:

```
SELF-CRITIQUE — Teardown Quality Check
=======================================
Evidence density (1-10): ___
- Are claims backed by specific signals or still vague?
- How many [DATA NEEDED] flags remain?

Moat accuracy (1-10): ___
- Is the durability score honest, or is it generous?
- Did I name the correct binding advantage?

Vulnerability specificity (1-10): ___
- Are the 3 vulnerabilities exploitable, or just weaknesses?
- Does each have language ready to use?

Attack brief usefulness (1-10): ___
- Could someone take this to a sales call or a deck tomorrow?
- Or is it still strategic direction without executable moves?

If any score < 7: revise that section.
Improvements needed: [specific]

Overall: [one sentence on the teardown's readiness]
```

---

## Phase 5: Final Output + Iteration Menu

Present the refined teardown. Then close with:

```
That's your full competitive teardown on [competitor name].

What's next?

A) Go deeper on a section — I'll expand Moat Assessment, Vulnerabilities, or ICP
B) Compare to another competitor — I'll run the same 6-section framework on Competitor 2 + side-by-side table
C) Build the counter-strategy — I'll structure your positioning response in Brand Positioning Audit format
D) Done — you have what you need

Which one?
```

**If B — Compare:**
Run same framework on Competitor 2. Then add side-by-side table:

| Dimension | [Competitor 1] | [Competitor 2] | You (if positioning provided) |
|-----------|----------------|----------------|-------------------------------|
| Target ICP | — | — | — |
| Primary message | — | — | — |
| Price point | — | — | — |
| Top content channel | — | — | — |
| Strongest moat | — | — | — |
| Primary vulnerability | — | — | — |
| AI search presence | — | — | — |

Include a 2-sentence "so what" under the table.

---

## Guardrails

**Evidence mandate:** "They're strong in content marketing" is not an output. "They publish 3x/week on LinkedIn and rank #2 for 'project management for agencies' (blog post dates confirm this)" is an output.

**No fabrication:** If data is missing, write `[DATA NEEDED]` with specific instructions. Never invent signals.

**Pitch-deck ready:** Every section usable as a slide without editing. Precise, direct language. No hedging.

**Flag the unknown:** If the competitor is small with limited presence, say so upfront. Adjust section depth accordingly.

---

*Competitor Intel Brief v1.0.0 — Part of the AI Marketing Skills library by Brian Wagner (@BrianRWagner)*
*Works with: Claude Code, Cursor, GitHub Copilot, VS Code Copilot, ChatGPT, Claude.ai*
