---
name: brand-voice-extractor
description: "Extract or build a distinct brand voice profile that AI agents can use to produce on-brand content every time. Two modes: Extract (analyze content you're proud of) or Build (construct a voice from scratch). Outputs a complete voice profile with personality traits, tone spectrum, vocabulary guide, rhythm patterns, and example phrases."
version: "1.1.0"
price: "$9"
author: "@BrianRWagner"
slug: "brw-brand-voice-extractor"
---

**Platform:** OpenClaw (token-optimized)

## Two Operating Modes

**Extract mode:** Analyze content the user is proud of → surface underlying patterns
**Build mode:** Construct voice from scratch through strategic questions

Detect from context or ask: "Do you have existing content you love, or are we building from scratch?"

## Required Inputs

- **Extract:** Minimum 3 samples OR 500+ total words (raw > polished — Slack/emails beat website copy)
- **Build:** Role, target audience, competitors' voices to differentiate from, 5 words describing desired voice

## Memory Protocol

**Save to:** `voice/[name]-voice-profile-YYYY-MM-DD.md`

**Re-run:** If prior profile exists → load it → compare new samples → flag if voice has evolved or patterns conflict.

## Mode

| Mode | Output | Use when |
|------|--------|----------|
| `quick` | Top 5 traits + 3 do/don't rules | Fast reference |
| `standard` | Complete Voice Guide | AI training, ghostwriting, brand docs |
| `deep` | Full guide + 10 before/after rewrites + AI prompt template + onboarding guide | Content team handoff |

## Extract Workflow

**1. Sample assessment:**
Rate authenticity (raw vs. polished) + variety + flag exclusions (platform tics, borrowed phrases, typos).

**2. Core energy:** Role (Teacher/Challenger/Cheerleader/Straight-shooter) + Default energy (Calm authority/High enthusiasm/Understated confidence) + Recurring themes

**3. Phrase extraction (quote exact examples):**
- Transition phrases ("Here's the thing...")
- Emphasis phrases ("The reality is...")
- Closers ("Start there." / "That's the move.")

**4. Confidence zone mapping:**

| Zone | Topics | Language markers |
|------|--------|-----------------|
| Full authority | Expert areas | No hedging, definitive |
| Earned perspective | Experienced | "In my experience..." |
| Active exploration | Currently learning | "I'm testing this..." |

**5. Anti-patterns:** What they'd NEVER say — sourced from sample evidence

**6. Validation test (required):** Generate Version A (voice profile) + Version B (wrong voice). Ask: "Does A sound like you?"

## Build Workflow

1. Ask 5 strategic questions: desired personality, tone spectrum, vocabulary style, competitors to sound different from, example sentence that feels right
2. Draft profile based on answers
3. Generate 3 sample sentences — ask user to react and refine
4. Finalize profile

## Output Format

```markdown
# Voice Guide: [Name/Brand] — [Date]

**Voice Summary:** [2-3 sentences capturing essence]
**Core Role:** [Teacher/Challenger/Cheerleader/Straight-shooter]
**Default Energy:** [type]

## Vocabulary Guide
Use: [specific words/phrases from samples]
Avoid: [anti-patterns with evidence]

## Rhythm Patterns
[Sentence length, paragraph style, structural habits]

## Confidence Zones
[Topics mapped to zones]

## Signature Phrases
Transitions: | Emphasis: | Closers:

## AI Prompt Template
"Write in [Name]'s voice. Key characteristics: [X, Y, Z]. Always: [rules]. Never: [anti-patterns]."

## Validation
✅ "[sentence that sounds right]"
❌ "[sentence that sounds wrong]"
```

---
*Skill by Brian Wagner | AI Marketing Architect | $9*
