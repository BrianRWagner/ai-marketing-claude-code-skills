---
name: brand-voice-extractor
version: "3.0.0"
updated: 2026-03-17
platform: openclaw
description: "Use when: user wants to define brand voice, extract voice from existing content, or create a voice profile for consistent AI content. Run before any content creation skill. NOT for: editing content, writing content, or positioning diagnosis."
---

# Brand Voice Extractor v3 — OpenClaw (Condensed)

## Pre-Analysis Script
```bash
node scripts/analyze-voice.mjs sample1.md sample2.md sample3.md
# Outputs quantitative analysis → Claude reads it → extraction begins
```

## Two Modes

**Extract** — user has existing content they love
**Build** — starting fresh, no strong existing content

Ask: "Do you have existing content you're proud of, or are we building from scratch?"

## Mode A: Extract

**Step 1: Assess samples**
- Get minimum 3 samples OR 500+ words total
- Best sources: emails, newsletters, quick posts (NOT website copy — committee-written)
- Run `scripts/analyze-voice.mjs` on all samples

**Step 2: Extract (in this order)**
1. Core role: Teacher / Challenger / Cheerleader / Straight-shooter
2. Default energy: Calm authority / High enthusiasm / Understated confidence
3. Tone spectrum across 5 dimensions (formal↔casual, serious↔playful, reserved↔bold, simple↔sophisticated, warm↔direct)
4. Signature transitions (verbatim — don't paraphrase): "Here's the thing...", "The reality is..."
5. Vocabulary: USE list + AVOID list from actual samples
6. Rhythm: avg sentence length, variation, fragment use

**Step 3: Conflict resolution**
If patterns contradict: weight 3 most recent samples 2x. Flag to user. Ask for direction.

**Step 4: Validation (mandatory)**
Generate: one on-brand sentence + one off-brand sentence
Ask: "Does the on-brand one sound like you?"

## Mode B: Build

Ask these 5 questions:
1. 3-5 words describing your personality
2. Who are you talking to? (specific, not "entrepreneurs")
3. Teachers you admire and why / voices you DON'T want to sound like
4. One sentence you wrote that felt exactly right
5. One you hated — why?

Then: draft profile → generate 3 sample sentences → user reacts → refine → finalize

## Output Format
```markdown
# [Name] Voice Profile — [Date]

**Voice Summary:** [2-3 sentences capturing the essence]
**Core Role:** [Teacher/Challenger/Cheerleader/Straight-shooter]
**Default Energy:** [type]

## Vocabulary Guide
Use: [words/phrases from samples]
Avoid: [anti-patterns with evidence]

## Rhythm Patterns
[Sentence length, paragraph style, structural habits]

## Signature Phrases
Transitions: | Emphasis: | Closers:

## AI Prompt Template
"Write in [Name]'s voice. Always: [rules]. Never: [anti-patterns]."

## Validation
✅ "[on-brand sentence]"
❌ "[off-brand sentence]"
```

## Save Protocol
Save to: `voice/[name]-voice-profile-YYYY-MM-DD.md`

On re-run: load prior profile first. Compare. Flag if voice has evolved.

## Modes

| Mode | Output | Use when |
|------|--------|----------|
| `quick` | Top 5 traits + 3 do/don't rules | Fast reference |
| `standard` | Full Voice Guide | AI training, ghostwriting |
| `deep` | Guide + 10 before/after rewrites + AI prompt template | Content team handoff |

## ⚠️ Common Failures
- Website copy → generic profile → ask for emails/quick posts instead
- Vague answers in Build mode → "Give me one sentence that felt right" unsticks it
- Profile drift → old content captures old voice → ask when content was written, weight recent 2x
- Validation skipped → 1 in 3 profiles has errors that only show in output → never skip it
- Profile not saved → ask "Save to voice/[name]-profile.md?" at end of every session

## Files
- `scripts/analyze-voice.mjs` — quantitative pre-analysis
- `references/examples.md` — complete profile example + build mode example
