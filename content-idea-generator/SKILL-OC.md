---
name: content-idea-generator
description: Generate content ideas rooted in positioning. Use when someone needs "content ideas," "what should I post," "blog topics," "LinkedIn ideas," or is stuck on what to create.
---

**Platform:** OpenClaw (token-optimized)

## Required Inputs

- Positioning statement: "I help [specific audience] achieve [specific outcome] through [unique approach]"
- ICP top 3 frustrations or questions right now
- Recent wins or proof points (last 30 days)
- Content formats available (LinkedIn / Twitter / Newsletter / Video)
- Existing pillars from `linkedin-authority-builder` (if any — stay within them)

**Positioning gate:** If user can't complete the positioning sentence with specifics → stop. Run `positioning-basics` first.

## Mode

| Mode | Output | Use when |
|------|--------|----------|
| `quick` | 5 ideas, immediate | Breaking a block |
| `standard` | 10–15 positioned ideas with formats + rationale | Regular planning |
| `deep` | Full content calendar: pillars, formats, cadence, 30-day plan | Launch or overhaul |

## Workflow

**1. Context analysis**
Assess positioning strength → audit proof points → check platform match → identify content gap.

Output: "You're creating content for [audience] as a [role]. Strongest proof point: [X]. Biggest gap: [Y]."

**2. Freshness check (run before generating):**
```
web_search('[Topic] trending [Month Year]')
web_search('[ICP role] biggest challenges [Year]')
```
Include ≥1 current-moment hook in the batch.

**3. Generate ideas using 6 frameworks:**

| Framework | Template |
|-----------|----------|
| Problem Call-Out | "The #1 mistake [audience] makes with [topic]" |
| Here's What Works | Teach a specific process you've actually used |
| Contrarian Take | Challenge a common belief in your space |
| Before/After | "We went from [X] to [Y] by doing [Z]" |
| Curation/Synthesis | "5 things I learned from [experience/source]" |
| Prediction/Trend | "What [topic] will look like in [timeframe]" |

**4. Quality filter — reject any idea that:**
- Could be written by someone with zero experience in the space
- Doesn't connect to the stated positioning
- Is a generic "tips" list without specific proof

**5. Format tagging**
Tag each idea with: Platform | Format (Story/Framework/Hot Take/Case Study) | Funnel stage (Awareness/Trust/Conversion)

## Output Format

```
## Content Ideas: [Name] — [Date]

### Strategy Note
[Positioning + biggest gap to fill]

### Idea Batch
1. **[Hook/Title]**
   Platform: | Format: | Stage:
   Angle: [1 sentence on the specific take]
   Proof point to use: [What real experience grounds this]

[repeat x10-15]

### Recommended First Post
[The one to write today — and why]
```

---
*Skill by Brian Wagner | AI Marketing Architect*
