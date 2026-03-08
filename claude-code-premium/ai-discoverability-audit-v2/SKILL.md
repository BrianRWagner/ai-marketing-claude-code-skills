---
name: ai-discoverability-audit-v2
version: "2.0.0"
price: "$19"
author: "@BrianRWagner"
platform: claude-code
slug: "brw-ai-discoverability-audit"
description: "Full audit of your brand's visibility to AI search engines — ChatGPT, Perplexity, Claude, Gemini, Google AI Overviews. Get a score, specific gaps, and a 30-day fix plan."
---

> **Optimized for Claude Code, Cursor, GitHub Copilot, and any AI that accepts markdown instructions.**
> Paste this SKILL.md into your AI's context or project instructions and run it immediately.

---

# AI Discoverability Audit v2 — The Signal Audit

> "Find out if AI can find you — and fix it before your competitors do."

**AI traffic converts better than Google traffic.** Airbnb CEO Brian Chesky confirmed that visitors arriving through ChatGPT, Gemini, or Claude convert at higher rates than Google search traffic. Why? Users asking AI are further along in their decision-making than someone typing broad queries into search.

If you're not showing up in AI answers, you're missing the highest-intent traffic on the internet.

---

## Context Loading Gates

**The AI must confirm all gates before starting the audit.**

```
GATE CHECK — Required Before Starting
======================================
[ ] Brand/company name provided
[ ] Website URL provided
[ ] Primary ICP defined (one sentence — who they sell to)
[ ] Top 3 use cases or problems they solve identified
[ ] Closest competitors named (optional but significantly improves benchmark)

If ANY required gate is unchecked: request the missing input.
Do not run an audit without a URL and ICP. The results will be meaningless.
```

---

## What This Audit Covers vs. Does NOT Cover

**Covers:**
- How AI systems currently describe your brand
- Whether you appear in AI answers for your core use cases
- Entity clarity — can an LLM summarize you accurately in one sentence?
- Content signal strength — do you publish what AI can extract and cite?
- Schema and structured data assessment
- Third-party validation signals
- 30-day prioritized fix plan

**Does NOT cover:**
- Traditional Google SEO rankings
- Content writing or copywriting
- Social media performance metrics

---

## Phase 1: Context Intake

Confirm all inputs are received. State:
```
Audit ready to begin for: [brand name]
URL: [website URL]
ICP: [one sentence]
Use cases: [list]
Competitors: [list or "none provided"]
Prior audit: [yes — load it / no — this is a baseline]
```

If a prior audit exists, note:
- This is a re-audit session
- After scoring each section: show [Prior Score] → [New Score] = [Delta]
- Highlight biggest improvements, regressions, and new risks

---

## Phase 2: Analysis — Research Protocol

Before scoring any section, research the brand:

1. **Fetch homepage** — capture what the brand says it does, who it serves, core messaging
2. **Search in AI systems** — query the brand in the 5 scenarios below (use ChatGPT, Perplexity, or simulate based on available information)
3. **Fetch robots.txt and check for schema** — look for `<script type="application/ld+json">` blocks in page source
4. **Search for third-party mentions** — LinkedIn, G2, Capterra, press coverage, directories

Flag each data point with source. If a section requires live AI query results you can't run: write `[DATA NEEDED: Run "[query]" in Perplexity/ChatGPT and paste results here]`

---

## Phase 3: Generate — Six-Section Audit

### SECTION 1: AI Presence Score (0-100)

Query the brand in 5 AI search scenarios. Simulate real user queries:

1. "best [category] tool for [ICP]"
2. "[problem] solution for [industry]"
3. "alternative to [top competitor]"
4. "[brand name] reviews"
5. "how to [core use case they solve]"

**Scoring per query:**
- Appears in top answer: 20 points
- Mentioned anywhere in response: 10 points
- Not found: 0 points

Run across ChatGPT, Perplexity, Claude, and Google AI Overviews. Average across platforms.

**Competitor benchmark** (if provided): "You scored [X]/100. Competitor A scored [Y]/100. Competitor B scored [Z]/100."

---

### SECTION 2: Entity Clarity [Pass / Fail]

**The test:** Can an LLM summarize this brand accurately in one sentence?

Test query: "What does [brand] do?" — compare AI response to what the brand actually does.

**Common failures:**
- Too many offerings, no single clear position
- Outdated information from old press or directories
- Confusion with similarly-named companies
- Generic category placement ("a software company")

**Score:**
- **Pass** — AI gets it right in one sentence
- **Fail** — AI is vague, wrong, or confused → identify exactly what's causing confusion + specific fix

---

### SECTION 3: Content Signal Strength [Strong / Weak / Missing]

Does the brand publish content AI systems can extract and cite?

**Check:**
- Does the site have a clear /blog or /resources section?
- Do posts answer specific questions the ICP would ask an AI?
- Are there data points, stats, or original research AI can reference?
- Is content structured with clear headings, summaries, and takeaways?

**Score:**
- **Strong** — Regular publishing, structured content, citable data
- **Weak** — Content exists but unstructured or generic
- **Missing** — No blog, no resources, nothing for AI to cite

Identify specific content gaps: "Your blog has [X] posts but none answer the top 5 questions your ICP asks AI. Here are those questions: [list based on ICP + use cases]"

---

### SECTION 4: Schema & Structured Data [X/3 key schemas]

**Key schemas to check:**
- Organization ✓/✗
- Product (if applicable) ✓/✗
- FAQ (on key pages) ✓/✗
- Article (on blog posts) ✓/✗

**Score:**
- Implemented correctly
- Missing
- Present but incorrect

**If schemas are missing, provide ready-to-implement templates:**

Organization Schema (add to homepage `<head>`):
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "[Brand Name]",
  "url": "[https://yourdomain.com]",
  "logo": "[https://yourdomain.com/logo.png]",
  "description": "[One-sentence description of what you do and who you serve]",
  "sameAs": [
    "[https://linkedin.com/company/yourcompany]",
    "[https://twitter.com/yourhandle]"
  ]
}
```

Person Schema (for personal brands):
```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "[Full Name]",
  "url": "[https://yourdomain.com]",
  "jobTitle": "[Your Title]",
  "description": "[What you do and who you help — one sentence]",
  "sameAs": [
    "[https://linkedin.com/in/yourprofile]",
    "[https://twitter.com/yourhandle]"
  ]
}
```

---

### SECTION 5: Third-Party Validation [Strong / Weak / Missing]

AI systems trust external sources. Are there signals outside the website that validate this brand?

**Check for:**
- LinkedIn company page (complete and active)
- G2/Capterra reviews (if B2B SaaS)
- Industry directory listings
- Press mentions or guest posts
- Partner pages that mention the brand
- Case studies on client websites

**Score:**
- **Strong** — Multiple external signals, consistent information
- **Weak** — Few external mentions, inconsistent data
- **Missing** — Brand exists almost entirely on its own website

Identify highest-impact validation signals to pursue.

---

### SECTION 6: 30-Day Signal Fix

Based on gaps found in Sections 1-5, create a prioritized action plan:

**Week 1: Foundation (Quick Wins)**
- Fix entity clarity issues (homepage H1, about page)
- Implement missing schema markup
- Clean up inconsistent directory listings
- Update LinkedIn company page

**Week 2: Content Signal**
- Publish 1 cornerstone piece answering the ICP's top AI query
- Structure existing content with clear summaries and data points
- Add FAQ schema to high-value pages

**Week 3: Distribution**
- Get cornerstone content cited by 2-3 external sources
- Pursue 1-2 high-authority directory listings
- Request client case study mention or testimonial

**Week 4: Re-Audit**
- Run the AI Presence Score again
- Measure delta from baseline
- Identify next priority gaps

---

## Phase 4: Self-Critique

After generating all six sections, run this mandatory review:

```
SELF-CRITIQUE — Audit Quality Check
=====================================
AI Presence accuracy (1-10): ___
- Are queries realistic to how actual users search?
- Did I benchmark against real competitors (if provided)?

Entity Clarity specificity (1-10): ___
- Did I identify the exact cause of confusion, not just label it?
- Is the fix specific enough to implement tomorrow?

Content gap quality (1-10): ___
- Are the content gaps specific questions the ICP would actually ask?
- Or are they generic topic suggestions?

30-Day Plan specificity (1-10): ___
- Is each action specific enough to assign to a person?
- Or is it still general direction?

If any score < 7: revise that section.
Improvements: [specific]

Overall: [one sentence — is this audit decision-quality?]
```

---

## Phase 5: Final Output + Iteration Menu

### Complete Audit Output Format

```markdown
# AI Discoverability Audit — [Brand Name]
*Audited: [Date] | Framework: Signal Audit v2*

## Overall Signal Score: [X]/100

### Section 1: AI Presence [X/100]
[Detailed findings per query, competitor benchmark]

### Section 2: Entity Clarity [Pass/Fail]
[What AI says vs. reality, specific fix]

### Section 3: Content Signals [Strong/Weak/Missing]
[Assessment, specific gaps, top 5 questions to answer]

### Section 4: Schema & Structure [X/3 key schemas]
[Which schemas present/missing, code snippets if needed]

### Section 5: Third-Party Validation [Strong/Weak/Missing]
[External signal inventory, gaps, highest-impact actions]

---

## 30-Day Signal Fix

### Week 1: Foundation
- [ ] [Specific action]
- [ ] [Specific action]

### Week 2: Content Signal
- [ ] [Specific action]

### Week 3: Distribution
- [ ] [Specific action]

### Week 4: Re-Audit
- [ ] Re-run AI Presence Score
- [ ] Measure improvement
- [ ] Plan next phase

---

*Built with the Signal System by Brian Wagner — AI Marketing Architect*
```

### Decision Logic for Findings

- **Score > 70:** Focus on competitor gap analysis and maintaining position. Visible — now own the category.
- **Score 40-70:** Prioritize entity clarity and content signals. Foundation exists but AI isn't citing you.
- **Score < 40:** Start with entity clarity and schema. No point building content before the foundation is right.

### Iteration Menu

```
That's your AI Discoverability Audit for [Brand Name]. Overall score: [X]/100.

What's next?

A) Deep dive — I'll run a second-pass diagnosis on the lowest-scoring section: specific cause, 3 fixes with implementation detail
B) 30-day implementation plan — I'll expand with owners, tools, checkpoints, and priority rank
C) Competitor benchmark — I'll query AI systems for [top competitor] and compare their visibility to yours
D) Set quarterly baseline — I'll save this as your benchmark and tell you what to check next time

Which one?
```

**If A — Deep Section Dive:**
Identify lowest-scoring section. Run second-pass diagnosis:
- What specifically causes the low score (exact cause, not category-level)
- 3 specific fixes: what to do, how to do it, how long it takes, how to verify it worked

**If B — Implementation Plan:**
Expand Signal Fix plan with: Owner (founder/dev/content), Specific tool (name the tool, not the category), Checkpoint (how to verify completion), Priority rank (which 3 actions move the score most in 2 weeks)

**If C — Competitor Benchmark:**
Query competitor in AI systems. Compare: AI Presence Score, entity clarity, content signal strength, gap analysis.

---

## Constraints (Non-Negotiable)

- No generic SEO advice — this is AI-specific only
- No "just create more content" — every recommendation must be specific and actionable
- Call out the exact gap, not just the category
- Every fix must have a verification method
- Tone: Direct, confident, no fluff

---

*AI Discoverability Audit v2 — The Signal Audit*
*Part of the AI Marketing Skills library by Brian Wagner (@BrianRWagner)*
*Works with: Claude Code, Cursor, GitHub Copilot, VS Code Copilot, ChatGPT, Claude.ai*
