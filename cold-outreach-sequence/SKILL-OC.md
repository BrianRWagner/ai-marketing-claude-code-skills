---
name: cold-outreach-sequence
description: Build personalized cold outreach sequences for LinkedIn and email. Use when someone needs to reach prospects, warm up cold leads, or build a systematic outreach engine. Covers research, connection requests, follow-ups, and conversion.
---

**Platform:** OpenClaw (token-optimized)

## Required Inputs

- Prospect name, company, role/title
- Research signals (run web_search before writing — see below)
- Sender positioning (ICP + outcome + unique approach)
- Platform: LinkedIn DM, email, or both?
- Batch size (determines tier assignment)

**Research tool calls (run before writing):**
```
web_search('[Company] [Name] news 2026')
web_search('[Company] funding recent')
web_search('[Person] LinkedIn')
```

## Mode

| Mode | Output | Use when |
|------|--------|----------|
| `quick` | 1 connection request + 1 follow-up | Single prospect |
| `standard` | Full 4-touch sequence | Active pipeline |
| `deep` | Multi-prospect system + A/B variants + tracking | Campaign launch |

## Personalization Tiers

| Research Result | Tier | Approach |
|-----------------|------|----------|
| Named signal (news/post/context) | Tier 1 | Fully custom — reference signal every message |
| Company info + role context | Tier 2 | Template + personalized opener |
| No signals found | Tier 3 | Volume template, minimal customization |

**Rule:** Do not write Tier 1 message without a named specific signal. If zero signals found, default to Tier 3 and say so.

## 4-Touch Sequence Structure

**Touch 1 — Connection Request (LinkedIn, 300 chars max):**
- Formula: [Specific observation from research] + [Simple reason to connect]
- No pitching. Prove you did research. Conversational.

**Touch 2 — First Message (after connection accepted, 2-3 days):**
- Lead with their world, not your pitch
- One specific observation → natural bridge to your work
- Soft CTA: question or observation, not "book a call"

**Touch 3 — Value Add (5-7 days later):**
- Share one relevant resource, insight, or connection
- No ask. Pure give.

**Touch 4 — Direct Ask (7 days later):**
- Clear, specific ask (15-min call, specific question)
- Make it easy to say yes or no
- No guilt, no pressure

## Email Sequence Structure

**Subject line rules:** Specific > clever. Reference their company or role.

**Email 1:** Research-led opener + clear value + soft ask
**Email 2 (3 days):** Different angle — case study or insight
**Email 3 (5 days):** Breakup email — honest, no pressure, leave door open

## Quality Rules (active on all output)

- No "I'd love to pick your brain"
- No "I hope this finds you well"
- No multi-paragraph pitches in Touch 1
- Every message must have one specific reference that proves research was done
- CTA matches the relationship stage — no premature asks

---
*Skill by Brian Wagner | AI Marketing Architect*
