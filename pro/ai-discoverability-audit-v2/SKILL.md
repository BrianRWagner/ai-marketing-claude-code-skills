# AI Discoverability Audit v2 — The Signal Audit

**Price:** $19  
**Author:** Brian Wagner (@BrianRWagner)  
**Category:** Marketing  

> "Find out if AI can find you — and fix it before your competitors do."

---

## Runtime Context
**Platform:** Claude Code / OpenClaw  
**File system:** Available. Read prior outputs before starting. Save all outputs to the paths specified in Memory Protocol.  
**Cross-skill dependencies:**
- Upstream: Brand Positioning Audit (entity confusion is a positioning problem first)
- Downstream: Content Idea Generator (topic gaps), Competitor Intel Brief (competitive AI search gaps)

---

## Memory Protocol

**Save output to:** `audits/ai-discoverability-[brand]-YYYY-MM-DD.md`

**At session start:** Check if a prior audit file exists for this brand. If yes — this is a quarterly re-audit. Follow this flow:

1. Load the prior audit into context
2. Run the new audit fresh
3. For each of the 6 sections: show `[Prior Score] → [New Score] = [Delta]`
4. Highlight: biggest improvements, biggest regressions, any new risks
5. Update the 30-day action plan based on what did and didn't get implemented since the last audit

**Cross-session rule:** Never treat a re-audit as a cold start. The delta is the value — show what moved.

---

## Ecosystem Connections

Route findings to other skills based on scores:

- **Entity clarity score < 3 (Section 2 FAIL):** Feed into Brand Positioning Audit — entity/positioning confusion is a positioning problem that needs to be solved there first before AI signals will improve
- **Content signal score = MISSING or WEAK (Section 3):** Feed topic gaps into Content Idea Generator with specific questions the ICP asks AI that the brand doesn't answer
- **Competitor benchmark shows a gap (Section 1):** Feed into Competitor Intel Brief for that specific competitor — understand their AI signal strategy before trying to close the gap

---

### Why This Matters Now

**AI traffic converts better than Google traffic.**

Airbnb CEO Brian Chesky confirmed that visitors arriving through ChatGPT, Gemini, or Claude convert at higher rates than Google search traffic. Why? Users asking AI are further along in their decision-making than someone typing broad queries into search.

If you're not showing up in AI answers, you're missing the highest-intent traffic on the internet.

---

## Description

Use when a founder, marketer, or consultant wants to audit how visible their brand or website is to AI search engines and LLMs. Also use when the user mentions "AI SEO," "GEO," "AEO," "AI discoverability," "ChatGPT can't find me," "Perplexity results," "AI search visibility," or "how do I show up in AI answers."

This is a full audit of your brand's visibility to AI systems — ChatGPT, Perplexity, Claude, Gemini, Google AI Overviews. Not traditional SEO. AI-specific discoverability. You'll get a score, specific gaps, and a 30-day action plan to fix it.

---

## What This Audit Covers

✅ How AI systems currently describe your brand  
✅ Whether you show up in AI answers for your core use cases  
✅ Entity clarity — can an LLM summarize you accurately in one sentence?  
✅ Content signal strength — do you publish what AI can extract and cite?  
✅ Schema and structured data audit  
✅ Third-party validation signals  
✅ 30-day prioritized fix plan  

## What This Audit Does NOT Cover

❌ Traditional Google SEO rankings  
❌ Content writing or copywriting  
❌ Social media performance  

---

## Inputs Required

Before starting, gather:

1. **Brand/company name**
2. **Website URL**
3. **Primary ICP** — who you sell to (1 sentence)
4. **Top 3 use cases** — problems you solve
5. **2-3 closest competitors** (optional but recommended)

---

## The 6-Section Audit Framework

### Section 1: AI Presence Score (0-100)

Query your brand in 5 AI search scenarios. Simulate real user queries:

- "best [category] tool for [ICP]"
- "[problem] solution for [industry]"
- "alternative to [competitor]"
- "[brand name] reviews"
- "how to [use case your product solves]"

**Scoring:**
- Appears in top answer: 20 points each
- Mentioned anywhere in response: 10 points each
- Not found: 0 points

Run these queries in ChatGPT, Perplexity, Claude, and Google (check AI Overviews at the top of search results). Average the results across all platforms.

If competitors were provided, benchmark against them: "You scored 45. Competitor A scored 70. Competitor B scored 35."

---

### Section 2: Entity Clarity

**The test:** Can an LLM summarize your brand accurately in one sentence?

Ask ChatGPT/Perplexity: "What does [brand] do?"

Compare the response to what you actually do. 

**Common failures:**
- Too many offerings, no single clear position
- Outdated information from old press/directories
- Confusion with similarly-named companies
- Generic category placement ("a software company")

**Score:**
- **Clear** — AI gets it right in one sentence
- **Muddy** — AI is vague, wrong, or confused → specific fix required

If muddy, identify exactly what's causing the confusion and recommend the fix (homepage clarity, about page rewrite, directory cleanup).

---

### Section 3: Content Signal Strength

Does your brand publish content AI systems can extract and cite?

**Check:**
- Does the site have a clear /blog or /resources section?
- Do posts answer specific questions your ICP would ask an AI?
- Are there data points, stats, or original research AI can reference?
- Is content structured with clear headings, summaries, and takeaways?

**Score:**
- **Strong** — Regular publishing, structured content, citable data
- **Weak** — Content exists but unstructured or generic
- **Missing** — No blog, no resources, nothing for AI to cite

Identify specific gaps: "Your blog has 12 posts but none answer the top 5 questions your ICP asks AI. Here are those questions: [list]"

---

### Section 4: Structured Data & Schema

Does your site use schema markup that helps AI systems understand who you are?

**Key schemas to check:**
- Organization
- WebSite
- Product (if applicable)
- FAQ
- Article (on blog posts)

**How to check:** Fetch the page source and search for `<script type="application/ld+json">` blocks, then validate the JSON structure. No external tool needed for basic checks.

**Score:**
- **Implemented correctly** — Key schemas present and valid
- **Missing** — No schema markup
- **Incorrect** — Schema present but errors/warnings

Provide specific implementation recommendations. If schemas are missing, provide these ready-to-use templates:

**Organization Schema (add to homepage `<head>`):**
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
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "email": "[hello@yourdomain.com]"
  }
}
```

**Person Schema (for personal brands / founder sites, add to homepage or about page):**
```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "[Full Name]",
  "url": "[https://yourdomain.com]",
  "image": "[https://yourdomain.com/headshot.jpg]",
  "jobTitle": "[Your Title]",
  "description": "[One sentence — what you do and who you help]",
  "sameAs": [
    "[https://linkedin.com/in/yourprofile]",
    "[https://twitter.com/yourhandle]"
  ],
  "worksFor": {
    "@type": "Organization",
    "name": "[Company Name if applicable]"
  }
}
```

**Product Schema (add to product or pricing page):**
```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "[Product Name]",
  "description": "[What it does and who it's for — one sentence]",
  "brand": {
    "@type": "Brand",
    "name": "[Brand Name]"
  },
  "offers": {
    "@type": "Offer",
    "price": "[price]",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock",
    "url": "[https://yourdomain.com/pricing]"
  }
}
```

Replace all bracketed values. Add inside a `<script type="application/ld+json">` tag in the `<head>` of the relevant page.

---

### Section 5: Third-Party Validation

AI systems trust external sources. Are there signals outside your website that validate your brand?

**Check for:**
- LinkedIn company page (complete, active)
- G2/Capterra reviews (if B2B SaaS)
- Industry directory listings
- Press mentions or guest posts
- Partner pages that mention you
- Case studies on client websites

**Score:**
- **Strong** — Multiple external signals, consistent information
- **Weak** — Few external mentions, inconsistent data
- **Missing** — Brand exists only on its own website

Identify the highest-impact validation signals to pursue.

---

### Section 6: The 30-Day Signal Fix

Based on gaps found in Sections 1-5, create a prioritized action plan:

**Week 1: Foundation (Quick Wins)**
- Fix entity clarity issues (homepage, about page)
- Implement missing schema markup
- Clean up inconsistent directory listings
- Update LinkedIn company page

**Week 2: Content Signal**
- Publish 1 cornerstone piece answering your ICP's top AI query
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

**Recommended cadence:** Run this full audit quarterly. AI systems update their knowledge bases constantly — what worked in Q1 may need adjustment by Q2.

---

## Output Format

```markdown
# AI Discoverability Audit — [Brand Name]
*Audited: [Date] | Framework: Signal Audit v2*

## Overall Signal Score: [X]/100

### Section 1: AI Presence [X/100]
[Detailed findings per query, competitor benchmark if applicable]

### Section 2: Entity Clarity [Pass/Fail]
[What AI says vs reality, specific issues, fix]

### Section 3: Content Signals [Strong/Weak/Missing]
[Publishing assessment, structural issues, content gaps]

### Section 4: Schema & Structure [X/3 key schemas]
[Which schemas present/missing, validation results]

### Section 5: Third-Party Validation [Strong/Weak/Missing]
[External signal inventory, gaps identified]

---

## 30-Day Signal Fix

### Week 1: Foundation
- [ ] [Specific action]
- [ ] [Specific action]

### Week 2: Content Signal
- [ ] [Specific action]
- [ ] [Specific action]

### Week 3: Distribution
- [ ] [Specific action]
- [ ] [Specific action]

### Week 4: Re-Audit
- [ ] Re-run AI Presence Score
- [ ] Measure improvement
- [ ] Plan next phase

---

*Built with the Signal System by Brian Wagner — AI Marketing Architect*
```

---

## Example Output

Here's a complete audit for a fictional SaaS company:

---

# AI Discoverability Audit — Clearpath Analytics

*Audited: February 21, 2026 | Framework: Signal Audit v2*

## Overall Signal Score: 38/100

### Section 1: AI Presence [38/100]

| Query | ChatGPT | Perplexity | Claude | Score |
|-------|---------|------------|--------|-------|
| "best analytics tool for e-commerce" | Not mentioned | Not mentioned | Not mentioned | 0 |
| "Shopify analytics solution" | Mentioned in list | Top 3 answer | Not mentioned | 30 |
| "alternative to Triple Whale" | Not mentioned | Mentioned | Not mentioned | 10 |
| "Clearpath Analytics reviews" | Accurate summary | Accurate | Outdated info | 50 |
| "how to track e-commerce LTV" | Not mentioned | Not mentioned | Not mentioned | 0 |

**Competitor Benchmark:**
- Triple Whale: 72/100
- Northbeam: 65/100
- Clearpath: 38/100

**Gap:** You're invisible for category queries. AI only finds you when users already know your name.

---

### Section 2: Entity Clarity [FAIL]

**What ChatGPT says:** "Clearpath Analytics is a data analytics company that provides business intelligence solutions."

**What you actually do:** "E-commerce analytics platform that tracks customer LTV and attribution for Shopify brands."

**Problem:** Your positioning is too generic. AI sees "analytics company" — a category with 10,000 competitors. Your specific value prop (e-commerce, LTV, Shopify) isn't reaching AI systems.

**Fix:** Rewrite homepage H1 and about page to lead with "E-commerce LTV analytics for Shopify brands" — not "analytics platform."

---

### Section 3: Content Signals [WEAK]

- Blog exists: ✅ (14 posts)
- Answers ICP questions: ❌ (posts are product updates, not problem-solving)
- Citable data: ❌ (no original research, no benchmarks)
- Structure: ⚠️ (missing summaries, no FAQ schema)

**Gap:** Your blog talks about your product. AI needs content that answers questions your ICP asks. 

**Top 5 questions Shopify brand owners ask AI:**
1. "How do I calculate customer LTV?"
2. "What's a good LTV:CAC ratio for e-commerce?"
3. "How do I track attribution after iOS 14?"
4. "Triple Whale vs Northbeam comparison"
5. "Best analytics for Shopify Plus"

You have zero content ranking for these. That's your content roadmap.

---

### Section 4: Schema & Structure [1/3]

| Schema | Status |
|--------|--------|
| Organization | ✅ Present |
| Product | ❌ Missing |
| FAQ | ❌ Missing |
| Article | ❌ Missing on blog posts |

**Fix:** Add Product schema to pricing page. Add FAQ schema to homepage and feature pages. Add Article schema to all blog posts.

---

### Section 5: Third-Party Validation [WEAK]

| Signal | Status |
|--------|--------|
| LinkedIn | ⚠️ Incomplete (no description, 200 followers) |
| G2 | ❌ No listing |
| Capterra | ❌ No listing |
| Industry directories | ⚠️ Listed on 1 (Shopify App Store) |
| Press/guest posts | ❌ None found |
| Partner mentions | ❌ None found |

**Gap:** Clearpath exists almost entirely on its own website. AI has no external signals to validate your authority.

---

## 30-Day Signal Fix

### Week 1: Foundation
- [ ] Rewrite homepage H1: "E-commerce LTV Analytics for Shopify Brands"
- [ ] Update about page with specific positioning
- [ ] Complete LinkedIn company page (full description, logo, featured posts)
- [ ] Add Organization + Product schema

### Week 2: Content Signal
- [ ] Publish: "How to Calculate Customer LTV for Shopify (2026 Guide)" — comprehensive, data-rich
- [ ] Add FAQ schema to homepage (5 questions)
- [ ] Add Article schema to all blog posts

### Week 3: Distribution
- [ ] Create G2 listing (request 5 customer reviews)
- [ ] Create Capterra listing
- [ ] Pitch guest post to 1 e-commerce publication with LTV data

### Week 4: Re-Audit
- [ ] Re-run AI Presence Score
- [ ] Target: 38 → 55+ (17-point improvement)
- [ ] Identify remaining gaps for Month 2

---

*Built with the Signal System by Brian Wagner — AI Marketing Architect*

---

## Decision Logic

- **Score > 70:** Focus on competitor gap analysis and maintaining position. You're visible — now own the category.
- **Score 40-70:** Prioritize entity clarity and content signals. Foundation is there but AI isn't citing you.
- **Score < 40:** Start with entity clarity and schema. No point building content before the foundation is right.

---

## After Delivering the Audit

End every audit with this iteration menu:

```
That's your full AI Discoverability Audit for [Brand Name]. Overall score: [X]/100.

What's next?

A) Go deeper on the lowest-scoring section — full diagnosis + 3 specific fixes with implementation detail
B) Build the 30-day implementation plan — detailed breakdown with owners, tools, and checkpoints for each action
C) Run the competitor benchmark — I'll query AI systems for [top competitor name] and compare their visibility to yours
D) Schedule quarterly re-audit — save this as the baseline and note what to check next time

Which one?
```

### If They Choose A — Deep Section Dive
Identify the lowest-scoring section. Run a second-pass diagnosis:
- What specifically is causing the low score (not category-level — exact cause)
- 3 specific fixes with: what to do, how to do it, how long it takes, how to verify it worked

### If They Choose B — 30-Day Implementation Plan
Expand the Signal Fix plan with:
- Owner for each action (founder / dev / content person)
- Specific tool for each action (no "use a schema plugin" — name the plugin)
- Checkpoint: how to verify completion
- Priority rank: which 3 actions will move the score most in the first 2 weeks

### If They Choose C — Competitor Benchmark
Query the competitor name in AI systems. Compare:
- Their AI Presence Score (run same 5 query types)
- Their entity clarity (what does AI say about them?)
- Their content signal strength (visible topics they rank for in AI answers)
- Gap analysis: where are they stronger? Where are you stronger?

### If They Choose D — Quarterly Re-Audit Setup
Save this audit as baseline. Note:
- Current score: [X]/100
- Lowest section: [section name]
- Priority actions committed to: [top 3 from 30-day plan]
- Re-audit trigger: 90 days OR after completing the 30-day plan — whichever comes first

---

## Constraints (Non-Negotiable)

- No generic SEO advice — this is AI-specific only
- No "just create more content" — every recommendation must be specific and actionable
- Call out the exact gap, not just the category
- Tone: Direct, confident, no fluff. See VOICE-PROFILE.md.

---

*© 2026 Brian Wagner. Available at shopclawmart.com*
