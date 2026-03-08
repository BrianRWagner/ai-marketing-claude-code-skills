---
name: brand-voice-extractor
version: "2.0.0"
price: "$9"
author: "@BrianRWagner"
platform: claude-code
slug: "brw-brand-voice-extractor"
description: "Extract or build a distinct brand voice profile that any AI can use to produce on-brand content every time. Two modes: Extract (analyze content you love) or Build (start from scratch). Outputs a complete, reusable voice profile."
---

> **Optimized for Claude Code, Cursor, GitHub Copilot, and any AI that accepts markdown instructions.**
> Paste this SKILL.md into your AI's context or project instructions and run it immediately.

---

# Brand Voice Extractor

Generic copy converts worse. Not because the words are different — because readers feel a *person*, not a marketing team.

This skill defines that voice. Either by extracting it from content you're already proud of, or building it strategically from the ground up. The output is a reusable voice profile that every content task can reference — so your AI never sounds like everyone else's AI.

---

## Context Loading Gates

**The AI must confirm all gates before proceeding.**

```
GATE CHECK — Required Before Starting
======================================
[ ] Mode selected: Extract OR Build
[ ] If Extract: at least 3 samples of content provided (min 500 words total)
[ ] If Build: user ready to answer 10-15 questions
[ ] Brand/person name confirmed
[ ] Primary content channels identified (blog? social? email?)

If ANY gate is unchecked: request the missing input before proceeding.
Do not generate a voice profile with incomplete context.
```

---

## Two Modes

### Mode 1: Extract
Use when you have existing content that already sounds right.

Feed this skill 3-5 pieces of content you're proud of — website copy, emails, posts, newsletter editions, anything where you thought *"yes, this is me."*

**Best inputs:** About page, top-performing social posts, emails you nailed, newsletter editions you felt good about, video or podcast transcripts.

**Minimum bar:** If total sample content < 500 words, request more before proceeding.

**Corporate voice detection:** If samples read as committee-written (passive voice >30%, no personal opinions, heavy hedging throughout), flag this: *"These samples may reflect a corporate/edited voice rather than your authentic voice. Share something you wrote quickly — an email, Slack message, or quick post."*

### Mode 2: Build
Use when starting fresh, existing content is generic, or you want to evolve strategically.

Ask 10-15 targeted questions about personality, audience, positioning, and aspirations — then construct a voice aligned with who you are and who you're talking to.

**How to choose:**
- "Do you have existing content that represents how you want to sound?"
  - Yes → Extract mode
  - No / Not sure → Build mode

---

## Phase 1: Context Intake

**For Extract mode — confirm inputs:**

```
Confirm before proceeding:
- Content samples received: [count] pieces, [word count] total words
- Brand name: [name]
- Primary channels: [list]
- This is a [first run / refinement / re-audit] session

If prior voice profile exists: load it and note — "This is a refinement session. I'll compare new samples to the existing profile and flag any evolution."
```

**For Build mode — collect in 3 batches:**

Batch 1 — Identity:
1. What are 3-5 words that describe your personality?
2. What do you stand for? What's your core belief about your industry?
3. What's your background? What shaped how you see things?
4. What makes you genuinely different from others in your space?

Batch 2 — Audience:
5. Who are you talking to? (Be specific — not "entrepreneurs")
6. What tone resonates with them? What do they respond to?
7. What would make them trust you? What would turn them off?

Batch 3 — Positioning & Aspiration:
8. Are you the expert, the peer, the rebel, the guide, the insider?
9. Name 2-3 people or brands whose voice you admire. What specifically?
10. What do you NOT want to sound like?
11. Any signature words or phrases that feel like "you"?
12. Any words you hate or want to avoid?
13. How do you feel about humor? Profanity? Hot takes?

---

## Phase 2: Analysis

**For Extract mode — analyze samples across 6 dimensions:**

**1. Tone patterns**
- Formal ↔ Casual (contractions? fragments? slang?)
- Serious ↔ Playful (humor? gravity?)
- Reserved ↔ Bold (strong claims vs. hedging?)
- Distant ↔ Intimate (I/you vs. we/they?)

**2. Vocabulary patterns**
- Jargon level (heavy, translated, or light)
- Signature words and phrases
- Words you seem to avoid
- Everyday vs. formal vocabulary

**3. Rhythm patterns**
Count average words per sentence. Measure length variance (do sentences cluster at similar lengths or vary widely?). Flag if >40% of sentences are similar length — may signal monotone rhythm.

**4. Transition patterns**
Scan for bridge phrases appearing 3+ times. Extract the exact wording (not paraphrases — literal phrases). These become the transition fingerprints.

**5. Structural patterns**
- How you open (story? question? bold claim?)
- How you transition between ideas
- How you close (CTA? summary? open loop?)
- Headers, formatting, whitespace use

**6. Conflict resolution**
When patterns contradict across samples:
1. Weight the 3 most recent samples 2x in your analysis
2. Flag explicitly: *"Voice is inconsistent across [dimension] — recent samples lean [X]. Profile reflects recent direction."*
3. Ask: "I'm seeing tension in [dimension]. Which direction is closer to where you want to go?"

**For Build mode:** Synthesize answers into voice dimensions. Map stated preferences to concrete writing patterns. Identify any internal contradictions in stated preferences and resolve them by asking one clarifying question.

---

## Phase 3: Generate

Output the complete voice profile using this exact format:

```markdown
# [Name] Voice Profile
*Generated: [Date] | Mode: [Extract/Build]*

## Voice Summary
[2-3 sentences. What does this voice FEEL like to encounter? Lead with the dominant energy.]

## Core Personality Traits
- **[Trait]:** [What this means in practice — give a concrete writing implication]
- **[Trait]:** [What this means in practice]
- **[Trait]:** [What this means in practice]
(3-5 traits minimum)

## Tone Spectrum
| Dimension | Position | Notes |
|-----------|----------|-------|
| Formal ↔ Casual | [position] | [specific evidence from samples or stated preference] |
| Serious ↔ Playful | [position] | [specifics] |
| Reserved ↔ Bold | [position] | [specifics] |
| Simple ↔ Sophisticated | [position] | [specifics] |
| Warm ↔ Direct | [position] | [specifics] |

## Vocabulary
**USE:** [words, phrases, signature openers — be specific, 8-12 items]
**AVOID:** [words, corporate-speak, AI-sounding phrases — be specific, 8-12 items]
**Jargon level:** [Heavy / Translated / Light] — [one sentence on when/how jargon is used]
**Profanity/edge:** [stance on hot takes, directness level, any language notes]

## Rhythm & Structure
**Average sentence length:** [short <12 words / medium 12-20 / long 20+ / mixed]
**Paragraph style:** [1-2 sentences / 2-4 sentences / longer / varies]
**Opening moves:** [2-3 signature opening patterns with examples]
**Transitions:** [signature bridge phrases — extract verbatim]
**Closings:** [how content typically lands — CTA? summary? challenge?]
**Formatting:** [use of headers, bullets, whitespace, bold — specific patterns]

## Example Phrases
**On-brand (sounds like you):**
- "[example 1]"
- "[example 2]"
- "[example 3]"

**Off-brand (doesn't sound like you):**
- "[example 1]" — [why it's wrong]
- "[example 2]" — [why it's wrong]
- "[example 3]" — [why it's wrong]

## Do's and Don'ts
**DO:**
- [rule 1]
- [rule 2]
- [rule 3]
- [rule 4]

**DON'T:**
- [rule 1]
- [rule 2]
- [rule 3]
- [rule 4]

## Voice Check (before publishing)
1. **Energy test:** Does this feel electric or flat?
2. **Authority test:** Writing from confidence or hedging?
3. **Simplicity test:** Would a smart 12-year-old understand this?
4. **Landing test:** Did I land the plane or keep circling?
5. **Proof test:** Is there a real number, real client, or real result?
6. **Recognition test:** Could someone identify this as yours without a byline?
```

---

## Phase 4: Self-Critique

After generating the voice profile, run this mandatory review before presenting:

```
SELF-CRITIQUE — Voice Profile Quality Check
===========================================
Recognizable (1-10): ___
- Could someone identify content as "theirs" without a byline?
- Is each trait specific enough to create distinct writing, or just generic adjectives?

Actionable (1-10): ___
- Could a writer (human or AI) produce on-brand content using only this profile?
- Are the vocabulary lists specific enough to be useful?
- Are the rhythm patterns described precisely enough to replicate?

Differentiated (1-10): ___
- Does this sound different from generic professional voice?
- Is there anything in this profile that couldn't apply to 100 other people?

Authentic (1-10): ___
- Does it feel true to the actual samples/answers provided?
- Were there any patterns I missed or overweighted?

If any score < 7: revise that section before presenting.
Specific improvements needed:
- [list any]

Overall assessment: [one sentence on the profile's readiness]
```

---

## Phase 5: Final Output + Iteration Menu

Present the refined voice profile. Then close with:

```
Your voice profile is complete.

Save this to: brand/VOICE-PROFILE.md (or wherever your content files live)
Reference it in every future content task: "Write using my voice profile: [paste profile]"

What's next?

A) Test it — I'll generate 3 sample sentences in this voice so you can validate it feels right
B) Refine it — Tell me what's off; I'll diagnose which specific pattern needs adjustment
C) Strengthen it — I'll identify the weakest dimension and deepen it with more analysis
D) Done — Profile is ready for use
```

**If A — Test:**
Generate 3 diverse samples: a 1-sentence hook, a 3-sentence explanation, and a closing CTA. All using the profile. Ask: "Does this feel like you? What's off?"

**If B — Refine:**
Ask what feels wrong. Diagnose: is it tone, vocabulary, rhythm, or structure? Offer 2 revised options for the problematic pattern. Explain what changed and why.

**If C — Strengthen:**
Identify the lowest-scoring dimension from the self-critique. Run a deeper extraction pass on that dimension. Offer 3 specific ways to make it more distinctive.

---

## Quality Bar

✅ **Recognizable** — Someone could identify content as "yours" without a byline
✅ **Actionable** — Any AI can produce on-brand content using only this profile
✅ **Differentiated** — Sounds distinctly different from competitors
✅ **Authentic** — Feels true to who you actually are
✅ **Consistent** — Applies across formats (social, email, long-form)

If any answer is no, the profile needs more specificity.

---

## How This Connects to Other Skills

This skill produces a complete VOICE-PROFILE.md ready for use in any content workflow.

- Voice profile → **competitor-intel-brief:** Understand competitive voice gaps
- Voice profile → **content writing:** "Write this post using my voice profile: [paste]"
- Voice profile → **email sequences:** "Draft this sequence. Match my voice profile."
- Voice profile → **landing pages:** "Rewrite this page to match my voice."

**The workflow:** Run Brand Voice Extractor first → Save the profile → Reference it in everything else.

---

*Brand Voice Extractor v2.0.0 — Part of the AI Marketing Skills library by Brian Wagner (@BrianRWagner)*
*Works with: Claude Code, Cursor, GitHub Copilot, VS Code Copilot, ChatGPT, Claude.ai*
