---
name: social-card-gen
description: Generate platform-specific social post variants (Twitter/X, LinkedIn, Reddit) from one source input. Works with or without Node.js script. Includes platform reasoning, quality review, and guardrails against cross-posting spam.
---

**Platform:** OpenClaw (token-optimized)

## Required Intake (4 questions — ask before writing)

1. **Source message** — core idea, update, or story (paste raw text or describe it)
2. **Tone goal** — Informative / Provocative / Humble brag / Conversational / Educational
3. **Audience** — who needs to see this? (Founders, marketers, developers, etc.)
4. **CTA** — what should readers do? (Visit link, reply, follow, share, start conversation)

## Mode

| Mode | Output | Use when |
|------|--------|----------|
| `quick` | 1 platform (user picks) | Testing single channel |
| `standard` | All 3 platforms: Twitter + LinkedIn + Reddit | Default cross-platform |
| `deep` | All platforms + 3 variants each + A/B guidance | Campaign testing |

## Platform Rules

**Twitter/X (280 chars):**
- Lead with most surprising or specific claim — no warm-up
- Max 1–2 hashtags, directly relevant
- Short CTA embedded in copy
- ❌ Long intros, passive voice, hashtag walls

**LinkedIn (3,000 chars, first 2 lines critical):**
- First line: bold truth or curiosity hook (NOT "excited to share")
- Short paragraphs (1–2 lines), lots of whitespace
- 3–5 hashtags at end only, never in body
- Discussion CTA: "What's your experience with this?"
- ❌ "I'm humbled to announce," excessive hashtags, no line breaks

**Reddit:**
- Frame as experience, question, or lesson — community-first
- Title: specific and searchable, not clickbaity
- End with open question inviting community input
- ❌ Never hashtags. Never "check out my [thing]" openers

## Generation Template

**Twitter:**
```
[Bold claim or surprising fact]

[1-2 sentences supporting context]

[Engaging question or CTA]

[1-2 hashtags max]
```

**LinkedIn:**
```
[First line hook — curiosity, not announcement]

[1-2 line context]

[Core insight — 2-4 short paragraphs]

[Personal angle or reflection]

[Discussion CTA question]

[3-5 hashtags at end]
```

**Reddit:**
```
Title: [specific, searchable]

[Opening: experience/question/lesson — community-first]

[Body: genuine story with specifics]

[Closing question for community]
```

## With Node.js (automated path)

```bash
npm install
node generate.js --text "source message" --stdout
node generate.js --file input.md --outdir output/
```

## Quality Review (required before delivering)

- [ ] Twitter: under 280 chars? Starts with strongest point?
- [ ] LinkedIn: first line works before "see more"? No "I'm excited"?
- [ ] Reddit: would feel native in target subreddit? Zero hashtags?
- [ ] All: unique to platform — not the same post copy-pasted?
- [ ] All: CTA matches stated goal?

---
*Skill by Brian Wagner | AI Marketing Architect*
