# Brand Voice Extractor — Reference Examples

## Example: Complete Voice Profile (Extract Mode)

**Source content:** 5 LinkedIn posts + 2 newsletter editions from a B2B consultant

---

### Brian Wagner Voice Profile
*Extracted: 2026-03-17 | Version 1.0*

**Voice Summary:** Direct and slightly irreverent. Teaches without condescending. Brings marketing strategy frameworks to founders who are doing this for the first time. Writes like he talks — concrete, fast, opinionated. Never hides behind jargon.

**Core Role:** Challenger / Insider

**Default Energy:** Confident calm. Not hyped. Not corporate.

---

#### Tone Spectrum

| Dimension | Position | Notes |
|-----------|----------|-------|
| Formal ↔ Casual | 35% casual | Contractions, fragments OK. No slang. |
| Serious ↔ Playful | 75% serious | Occasional dry humor. Never silly. |
| Reserved ↔ Bold | 80% bold | Strong claims. Backed by specifics. |
| Simple ↔ Sophisticated | 60% simple | Plain language for complex ideas. |
| Warm ↔ Direct | 65% direct | Respectful, not cold. Gets to the point. |

---

#### Vocabulary Guide

**USE:**
- "most" instead of "many" or "numerous"
- "builds" instead of "drives" or "enables"
- "use" instead of "leverage" or "utilize"
- "try" instead of "attempt" or "endeavor"
- Specific numbers over vague claims
- Named examples (Salesforce, HubSpot) over "companies"

**AVOID:**
- Buzzwords: leverage, utilize, synergize, holistic, robust
- AI clichés: game-changer, transformative, paradigm shift
- Hedging: "it's important to note," "one might argue," "potentially"
- Corporate speak: circle back, move the needle, best-in-class

**Jargon level:** Light. Defined on first use if unavoidable.

---

#### Rhythm & Structure

**Sentences:** Mix of 5-8 word punchy and 15-25 word explanatory. Never monotone.

**Paragraphs:** Short. 2-4 sentences. White space is intentional.

**Openings:** Data point → question → bold claim → short scene. Never "In today's..."

**Closers:** Direct reframe, open loop question, or one-line takeaway. No "In conclusion."

---

#### Signature Phrases

**Transitions:**
- "Here's the thing..."
- "The reality is..."
- "But here's what most people miss:"

**Emphasis:**
- "Full stop."
- "That's it. That's the whole thing."
- "Not complicated. Just ignored."

**Closers:**
- "Start there."
- "The rest follows."
- "Worth thinking about."

---

#### Do's and Don'ts

**DO:**
- Open with a specific number, not a vague claim
- Use one concrete example before making a general point
- Write the way you'd explain it to a smart friend over coffee
- End with something worth sharing

**DON'T:**
- Use more than 2 bullet points in a row without breaking with prose
- Write rhetorical questions you don't actually answer
- Pad with throat-clearing ("Today we're going to explore...")
- Sound like a press release

---

#### AI Prompt Template

```
Write in Brian Wagner's voice. He's a B2B marketing consultant who 
teaches AI-era marketing to founders. His voice: direct, slightly 
irreverent, concrete. 

Always: use specific numbers and named examples. Short sentences mixed 
with longer explanatory ones. Strong claims backed by evidence.

Never: leverage, utilize, transformative, game-changer. No hedging. 
No "it's important to note." No "in today's X landscape."

Example of on-brand: "73% of AI tools are abandoned in 90 days. Not 
because the tools are bad. Because companies bought before they built."

Example of off-brand: "In today's rapidly evolving AI landscape, it's 
crucial to understand how to leverage these transformative tools."
```

---

#### Validation

✅ On-brand: "Most AI audits miss the obvious. They score tools, not adoption. Fix adoption, the tools follow."

❌ Off-brand: "It's important to note that leveraging AI effectively requires a holistic approach to organizational change management."

---

## Example: Build Mode Output (Starting Fresh)

**Answers provided:**
- Personality: "direct, honest, a little edgy, not corporate"
- Audience: "early-stage founders, not marketing people"
- Admires: Paul Graham's clarity, Morgan Housel's simplicity
- Avoids: thought leadership fluff, fake enthusiasm

**Resulting profile summary:**
- Anti-guru voice — shares what he actually knows, not what sounds impressive
- Founder-peer, not expert talking down
- Short and dense — no paragraph longer than 4 sentences
- Specific over general at all times

---

## Common Extraction Mistakes and Fixes

| Mistake | Fix |
|---------|-----|
| Extracting from website copy | Ask for emails, Slack messages, newsletter editions instead |
| Building from vague answers | Ask: "Give me one sentence that sounds exactly like you" |
| Ignoring inconsistency | Flag it to user: "Your recent posts are casual, old ones are formal. Which direction?" |
| Profile too generic | Deepen specificity: extract 3 verbatim phrases from samples |
| Not running validation | Always generate on-brand + off-brand example, ask user to confirm |

---

## Sample Input Quality Ranking

Best → Worst for accurate extraction:
1. Newsletter editions written quickly and unedited
2. Long-form LinkedIn posts (personal take)
3. Email newsletters (curated but personal)
4. Podcast/talk transcripts
5. Short social posts (too little signal)
6. Website copy (often committee-written) ← Start here only if nothing else exists
