---
name: voice-extractor
description: Extract and document someone's authentic writing voice from samples. Use when someone needs a "voice guide," wants to capture their writing DNA, or needs to train AI to write in their style. Also useful for ghostwriting, brand voice documentation, or onboarding writers.
---

**Platform:** OpenClaw (token-optimized)

## Required Inputs

- Writing samples — **minimum 3 samples OR 500 total words**
- Purpose — AI training / ghostwriter onboarding / team alignment
- Confidence zones (optional) — topics where they want more/less authority
- Known anti-patterns (optional) — words/phrases they already want to avoid

**Sample priority (most → least authentic):**
1. Casual Slack or email (raw, unedited)
2. Podcast or call transcript
3. LinkedIn posts or articles
4. Website copy (often edited, least authentic)

**Minimum gate:** Under 500 words → stop: "Too short. Add 2–3 more samples — emails, Slack messages, or transcripts work best."

## Mode

| Mode | Output | Use when |
|------|--------|----------|
| `quick` | Top 5 voice traits + 3 do/don't rules | Fast reference |
| `standard` | Full Voice Guide: tone, vocabulary, rhythm, structure | AI training, ghostwriting |
| `deep` | Full guide + 10 sample rewrites + rules checklist + AI training examples | Onboarding writers, content team |

## Phase 1: Sample Assessment

Assess: authenticity (polished vs. raw), variety (contexts covered), exclusions (platform tics, typos, borrowed phrases).

Output: "I have [X samples / Y words]. Quality: [high/medium]. Using [full/quick] mode. Excluding: [what and why]."

## Phase 2: Extract Core Energy

**Role:** Teacher / Challenger / Cheerleader / Straight-shooter
**Default energy:** Calm authority / High enthusiasm / Understated confidence
**Recurring themes:** Topics appearing unprompted across samples

## Phase 3: Phrase Extraction

Extract from samples (quote exact examples):
- **Transition phrases** — how they shift topics
- **Emphasis phrases** — how they land a point
- **Closers** — how they wrap up

## Phase 4: Confidence Zone Map

| Zone | Description | Language Markers |
|------|-------------|------------------|
| Full authority | Expert topics | No hedging, definitive, "here's what works" |
| Earned perspective | Experienced but not mastery | "In my experience..." |
| Active exploration | Currently learning | "I'm testing this..." |

## Phase 5: Anti-Pattern List

What they'd NEVER say — sourced from sample evidence:
"You never used [word] across [X samples] — it doesn't fit your voice."

## Phase 6: Validation Test (required)

Generate 2 sentences on the same topic:
- **Version A:** Using extracted voice profile
- **Version B:** Wrong voice (contrasting example)

Ask: "Does Version A actually sound like you when you're not overthinking it?"

## Output Format

```markdown
# Voice Guide: [Name/Brand]

**Voice Summary:** [2-3 sentences capturing the essence]
**Core Role:** [Teacher/Challenger/Cheerleader/Straight-shooter]
**Default Energy:** [Calm authority/High enthusiasm/Understated confidence]

## Vocabulary Guide
Use: [words/phrases from samples]
Avoid: [anti-patterns]

## Rhythm Patterns
[Sentence length patterns, paragraph style, structural habits]

## Confidence Zones
[Mapped topics to zones]

## Transition Phrases
[Quoted from samples]

## Emphasis Phrases
[Quoted from samples]

## Closers
[Quoted from samples]

## Validation Examples
A (correct): "[sentence]"
B (wrong): "[sentence]"
```

---
*Skill by Brian Wagner | AI Marketing Architect*
