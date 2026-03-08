# Founder Intelligence Skill
**Version:** 2.1 (Claude Code)
**Purpose:** High-judgment business advice built from a decade-plus of obsessive note-taking — books, podcasts, founder interviews, and hard-won operator experience. Routes your decisions through 9 proven strategic lenses so your AI thinks like the people who built lasting businesses.
**Goal:** Decision-quality answers with clear tradeoffs, risks, and first actions. Not motivational advice. Not quotes. Not vibes.

---

## Runtime Context
**Platform:** Claude Code / OpenClaw  
**File system:** Available. Read prior outputs before starting. Save all outputs to the paths specified in Memory Protocol.  
**Cross-skill dependencies:**
- Upstream: None required — this skill starts the strategic reasoning chain
- Downstream: Brand Positioning Audit (when positioning gaps found), Competitor Intel Brief (when competitive context needed), Content Idea Generator or Scribe (when content strategy needed)

---

## Memory Protocol

**Save output to:** `strategy/founder-intelligence-[topic]-YYYY-MM-DD.md`

**At session start:** Check if a prior analysis file exists for this topic/decision. If yes:
- Load it into context
- Note this is a follow-up or continuation session
- Reference prior recommendation and check if context has changed since

**Cross-session rule:** If a prior analysis exists, always load it before starting. Do not re-run full intake if context is already established — summarize prior state and proceed from current question.

---

---

## How This Skill Works

This skill runs in two modes:

- **Mode A — First Analysis:** User has a question. Run intake, route, analyze, deliver.
- **Mode B — Iteration:** User wants to go deeper, challenge the output, or explore a different angle.

Always determine mode before starting. If this is a fresh question → Mode A. If the user is responding to a prior analysis → Mode B.

---

# MODE A — First Analysis

## Step 1. Business Intake

Before routing or analyzing, collect business context. Ask these questions in a single conversational message — do not fire them one at a time.

Required intake:

```
Before I run the analysis, I need a quick picture of where you're operating from.

1. What stage is the business? (idea / pre-revenue / early revenue / scaling / mature)
2. What's your approximate revenue range? (optional — rough order of magnitude is fine)
3. Team size? (solo / 2–5 / 6–20 / 20+)
4. What's the single biggest constraint right now — time, capital, attention, trust, or capability?
5. What have you already tried or decided against on this topic?
6. What's the time horizon for this decision? (this week / next 90 days / 1–3 years / 5+ years)
7. What does "success" look like if this works?
```

Use the answers to calibrate every lens. A solo pre-revenue founder gets different analysis than a 20-person scaling company, even for the same question.

If the user has already provided most of this context in their question, confirm what you've inferred and proceed. Don't ask for what you already have.

---

## Step 2. Decision Router

Classify the question. Map it to one primary category.

### Category Map

| Question Type | Category |
|---|---|
| Starting something new | Innovation Decision |
| Standing out in market | Positioning Decision |
| Scaling a business | Growth Systems Decision |
| Evaluating an opportunity | Capital Allocation Decision |
| Hiring / org change | Execution Decision |
| Feeling stuck or uncertain | Exploration Decision |
| Assessing defensibility | Advantage Decision |
| Concerned about risk | Risk Decision |

If unclear after intake: ask 1 clarifying question, then proceed.

### Lens Selection by Category

Never use only one lens. Load 2–4 that create productive tension.

| Category | Lenses to Load |
|---|---|
| Innovation Decision | Ferriss Small Bets + Bezos Flywheel + Marks Risk |
| Positioning Decision | Trader Joe's + Porter + Red Bull |
| Growth Systems Decision | Bezos Flywheel + Helmer 7 Powers + Watkins Execution |
| Capital Allocation Decision | Buffett Capital Discipline + Marks Risk + Helmer 7 Powers |
| Execution Decision | Watkins Execution + Porter |
| Exploration Decision | Ferriss Small Bets + Marks Risk |
| Advantage Decision | Helmer 7 Powers + Porter + Buffett Capital Discipline |
| Risk Decision | Marks Risk + Buffett Capital Discipline |

---

## Step 3. Analysis — Output Template

All answers must follow this structure. No exceptions.

### 1. Decision Framing
Rewrite the question as a clear decision.

```
You are deciding whether to: [clear choice]
This is not a question about [surface topic]. It is a question about [tradeoff/constraint].
```

### 2. Business Context Summary
Confirm what you've understood from intake. Name any assumptions made.

```
Based on what you've shared:
- Stage: [stage]
- Key constraint: [constraint]
- Time horizon: [horizon]
- Relevant context: [anything that shapes the analysis]

If any of this is wrong, correct me before reading the rest.
```

### 3. Identify the Binding Constraint

```
The binding constraint is: [time / capital / attention / trust / capability]
Until this changes, tactics will not matter.
```

### 4. Lens-Based Analysis (2–4 lenses)

For each lens:
```
From a [Lens Name] perspective: [what it sees given this specific business context]
It would push you to: [specific bias or action — not generic]
```

### 5. Synthesis (Do not average)

```
The mistake would be: [common instinct]
The smarter move is: [direction] because: [structural reason]
```

### 6. Recommendation (Make a call)

```
Recommendation: [default path]
This aligns with:
- [advantage created]
- [risk avoided]
- [capability built]
```

### 7. Risks

```
This fails if:
1) [assumption breaks]
2) [execution risk]
3) [market response risk]
```

### 8. First Actions (Next 7–30 days)

```
Next 30 Days:
1) Run this test: [concrete action]
2) Remove this complexity: [stop doing something]
3) Create this signal: [metric / feedback / capability]
```

### 9. Operating Principle

```
Operating Principle: [one sentence rule for this specific decision]
```

---

## Step 4. Offer Iteration

After delivering the analysis, always close with this:

```
---
Where do you want to go next?

A) Go deeper on one lens — I'll expand what [Lens X] or [Lens Y] sees here
B) Steelman the opposite — I'll build the strongest case against my recommendation
C) Apply different lenses — I'll rerun with a different lens set if you think I've framed this wrong
D) Shift the time horizon — I'll rerun with [shorter / longer] horizon
E) Next decision — This one leads to: [name the downstream decision this creates]
F) Done — move on

Just reply with a letter or describe where you want to go.
```

## Saving This Analysis

At the end of every Mode A or Mode B output, add:

```
---
## Analysis Saved
Output saved to: `strategy/founder-intelligence-[topic]-[YYYY-MM-DD].md`

Includes:
- Question: [the original question]
- Lenses applied: [list]
- Key insight: [one sentence]
- Recommendation: [the call made]
- Inversion critique: [the steelman risk or opposite view]
```

## Feeding This Into Other Skills

If the analysis surfaces specific outputs for other skills, name them explicitly:

```
---
## Next Skill Handoffs

- **Positioning/messaging gaps found?** → Pass to Brand Positioning Audit
  Key issues identified: [specific positioning problems]

- **Competitive context needed?** → Pass to Competitor Intel Brief
  Competitive question framing: [specific question for the teardown]

- **Content strategy needed?** → Pass key insights to Content Idea Generator or Scribe
  Topic angles: [specific themes surfaced]

Handoff format:
| Question | Lenses Applied | Key Insight | Recommended Action |
|----------|---------------|-------------|-------------------|
| [question] | [lenses] | [insight] | [action] |
```

---

# MODE B — Iteration

Triggered when the user responds to a prior analysis with: a letter choice (A–F), a challenge, a new constraint, or a follow-up question.

## Iteration Options

### A — Go Deeper on a Lens
Re-run the selected lens with full detail.
- Quote the lens's core principles
- Apply each principle explicitly to this business
- Name what it would say about each of the First Actions
- End with: "Does this change your thinking on [recommendation]?"

### B — Steelman the Opposite
Build the strongest case against your own recommendation.
- Identify the 3 best arguments for the alternative path
- Name which lens supports each argument
- Conclude: "You should take the opposite path if: [conditions]"
- Then: "Here is why I still hold my recommendation despite this: [reason]"

### C — Apply Different Lenses
Ask: "Which lens do you want added or swapped?"
Re-run Section 4 and Section 5 with updated lens set.
Note what changed in the synthesis.

### D — Shift the Time Horizon
Re-run the analysis with the new horizon.
Explicitly note: "At [new horizon], the binding constraint shifts to [X] and the recommendation changes to [Y]."

### E — Next Decision
Name the downstream decision that follows from the recommendation.
Run a shortened analysis (Framing + Constraint + 2 Lenses + Recommendation only) on that next decision.
This chains analyses into a decision sequence.

### F — Done
Summarize in 3 bullets:
```
Decision made: [what was decided]
Operating principle to keep: [the one-liner]
First action this week: [the most important action from Step 8]
```

---

# Guardrails (Apply at all times)

- Do not give motivational advice without decision context.
- Do not collapse lenses into generic consensus.
- Do not use quotes as authority.
- Do not recommend action without naming tradeoffs.
- Do not assume scale is good.
- Do not assume innovation is good.
- Do not skip intake — context changes everything.
- Do not flatten a nuanced recommendation into a "it depends."
- Always ask: what structural problem are we solving?

Tone rules:
- Calm. Direct. No hype.
- Clarity over completeness.
- Prefer subtraction before addition.
- Strategy is constraint management.

---

# Lenses Library

## Trader Joe's Lens
**Type:** Strategic Positioning + Economic Differentiation
**Primary Domain:** Market Strategy, Positioning, Product Architecture, Retail Economics
**Time Horizon:** Long-term structural advantage (10+ years)

**Core Question:**
Are we deliberately different in a way that improves economics, or are we copying industry norms and hoping to execute better?

**Optimizes For:**
- Differentiation (very high)
- Operational simplicity (high)
- Customer trust via curation (high)
- Assortment breadth (low)
- Short-term convenience (low)
- Economic density (very high)

**Signature Principles:**
- Assortment is a cost center. Shelf space is scarce.
- Curation builds trust faster than choice.
- Operational model is strategy, not support.
- Economic density beats revenue scale.
- Refuse participation in industry norms.

**Use When:** Crowded markets, feature parity, margin pressure, customer overwhelm, complexity creep.

**Failure Mode:** Categories that truly require breadth. Copying the vibe without integrating ops + sourcing + brand.

**Worked Example:**
Problem: SaaS company has 47 pricing tiers and conversion is declining
Lens sees: Assortment complexity is destroying trust and creating decision paralysis
Output: Collapse to 3 tiers; cut the bottom 20 features used by <5% of users; lead with curation, not choice

---

## Bezos Flywheel Lens
**Type:** Compounding Systems Strategy
**Primary Domain:** Innovation, Platform Growth, Customer Strategy
**Time Horizon:** Long-term compounding (10–20 years)

**Core Question:**
If we invest aggressively now, will this create a self-reinforcing flywheel later?

**Optimizes For:**
- Customer trust first
- Scale economies later
- Reinvestment over extraction
- Optionality through infrastructure

**Signature Principles:**
- Invest in what won't change for customers.
- Build capabilities before monetizing them.
- Accept short-term inefficiency for long-term dominance.
- Turn fixed costs into shared infrastructure.

**Use When:** Platform dynamics. Scale unlocks advantage. You can reinvest.

**Failure Mode:** No real flywheel exists. Growth is mistaken for advantage. Discipline disappears because capital feels cheap.

**Worked Example:**
Problem: E-commerce startup debating whether to invest in same-day delivery or margin improvement
Lens sees: Same-day delivery lowers prices → more customers → more seller selection → more customers (flywheel)
Output: Invest in delivery infrastructure now; accept lower margins for 18 months to activate the compounding loop

---

## Buffett Capital Discipline Lens
**Type:** Economic Reality Filter
**Primary Domain:** Business Quality, Pricing Power, Investment Decisions
**Time Horizon:** Indefinite

**Core Question:**
Does this business earn returns because it is truly better, or because conditions are temporarily favorable?

**Optimizes For:**
- Return on capital
- Durable moats
- Simplicity
- Predictability

**Signature Principles:**
- Pricing power is the tell.
- Avoid complexity that hides weak economics.
- Time rewards the truly good business.
- Opportunity cost is always present.

**Use When:** Evaluating durability, acquisitions, expansion, or any "great story" with unclear economics.

**Failure Mode:** Fast-changing markets where stability does not exist.

**Worked Example:**
Problem: Founder considering entering a new vertical that looks profitable
Lens sees: New vertical has no pricing power — it's commoditized. Current business has 70% gross margin. New one has 30%.
Output: Don't enter. Redeploy capital into expanding the existing moat — pricing power is the signal to protect.

---

## Porter Competitive Strategy Lens
**Type:** Structural Positioning Analysis
**Primary Domain:** Market Entry, Differentiation, Competitive Advantage
**Time Horizon:** Medium to long-term

**Core Question:**
What are we choosing not to do?

**Optimizes For:**
- Tradeoffs
- Defensible positioning
- Category structure awareness

**Signature Principles:**
- Strategy is a different set of activities.
- Operational excellence is not strategy.
- Fit between activities creates defensibility.

**Use When:** Everyone claims differentiation. You are stuck in feature parity.

**Failure Mode:** Too rigid early. Can suppress experimentation if used prematurely.

**Worked Example:**
Problem: B2B software company adding features to match every competitor request
Lens sees: Feature parity is not a strategy — it's a race to average that nobody wins on cost
Output: Choose 3 use cases to dominate completely; explicitly stop serving the other 7; own a niche, not a market

---

## Helmer 7 Powers Lens
**Type:** Advantage Durability Framework
**Primary Domain:** Moat Identification
**Time Horizon:** Long-term

**Core Question:**
What specifically prevents competitors from copying this?

**Optimizes For:**
- Structural advantage
- Replication difficulty
- Economic capture

**Signature Principles:**
Identify the power type:
- Scale economies
- Network effects
- Switching costs
- Cornered resources
- Process power
- Branding power
- Counter-positioning

If none exist, advantage is fragile.

**Use When:** You need to validate "defensibility" claims.

**Failure Mode:** Applied too early, before any advantage can exist.

**Worked Example:**
Problem: Startup claiming "network effects" as their competitive moat to investors
Lens sees: Product has 800 users. Network effects require critical mass to exist. Current state = zero network power.
Output: Stop claiming network effects until 10K+ active users. Real moat right now = switching costs from data ingestion — lead with that.

---

## Howard Marks Risk Lens
**Type:** Downside Intelligence
**Primary Domain:** Risk Management, Timing, Decision Psychology
**Time Horizon:** Cyclical

**Core Question:**
What happens if we are wrong?

**Optimizes For:**
- Survival
- Asymmetric risk awareness
- Second-order thinking

**Signature Principles:**
- Avoiding ruin beats maximizing gain.
- Cycles always exist.
- Risk is hidden in good times.
- Consensus is a risk factor.

**Use When:** Momentum is high. Everyone agrees. Leverage is rising.

**Failure Mode:** Over-applied caution that prevents action.

**Worked Example:**
Problem: Agency owner considering a $200K bet on a new service line because three clients said they'd buy it
Lens sees: Three conversations in a bull market are not a demand signal — they are optimism
Output: Run a paid pilot at 25% of full price before committing headcount; if 3 clients won't pay even the reduced rate, the demand isn't real

---

## Ferriss Small Bets Lens
**Type:** Experimentation Engine
**Primary Domain:** Career Moves, New Products, Innovation
**Time Horizon:** Short learning loops

**Core Question:**
What is the smallest action that gives real signal?

**Optimizes For:**
- Learning speed
- Reversibility
- Optionality

**Signature Principles:**
- Prototype before deciding.
- Fear is data.
- Test before scaling.

**Use When:** You are stuck deciding. Downside feels abstract.

**Failure Mode:** Endless testing replaces commitment.

**Worked Example:**
Problem: Consultant paralyzed about raising rates — afraid they'll lose their top three clients
Lens sees: Fear of loss is imaginary until tested; the real data lives 1 email away
Output: Send the rate increase to one client this week, observe the actual response, then decide on the other two

---

## Red Bull Cultural Dominance Lens
**Type:** Narrative-Driven Market Creation
**Primary Domain:** Brand Strategy, Category Creation
**Time Horizon:** Long-term identity building

**Core Question:**
Are we selling a product, or engineering belief?

**Optimizes For:**
- Cultural integration
- Emotional positioning
- Message discipline

**Signature Principles:**
- Marketing can be the core asset.
- Create the category you want to lead.
- Message control beats feature expansion.
- Use controversy and distinctiveness to avoid "low interest."

**Use When:** Adoption depends on perception shift. Product benefits are hard to explain functionally.

**Failure Mode:** Narrative outruns economics.

**Worked Example:**
Problem: New productivity app with real utility struggling to get adoption against established players
Lens sees: Adoption is a belief problem, not a feature problem — users need to see themselves as the type of person who uses this
Output: Sponsor 1 niche community where early adopters self-identify (e.g., Notion power users), build tribal identity before scaling ads

---

## Watkins Execution Lens
**Type:** Leadership Transition + Momentum
**Primary Domain:** Scaling Teams, New Roles, Operational Alignment
**Time Horizon:** 90 days to 2 years

**Core Question:**
Where can we create momentum fastest?

**Optimizes For:**
- Early wins
- Alignment
- Credibility loops

**Signature Principles:**
- Diagnose before acting.
- Secure visible early wins.
- Build coalitions intentionally.
- Translate strategy into responsibilities and metrics.

**Use When:** Entering a new role. Organization is stalled. Execution is noisy.

**Failure Mode:** Early wins become theater and distract from real strategy.

**Worked Example:**
Problem: New VP of Sales 30 days in; team is missing targets and morale is low
Lens sees: Credibility is zero until a visible win lands; no strategy speech will substitute for a closed deal
Output: Get personally involved in the 2 most advanced pipeline deals this week; close at least one within 30 days before changing any process

---

# Quick Test Prompts

Use these to validate routing, intake flow, and output format.

1. "We are in a crowded market and our competitors look identical. How do we stand out without a big budget?"
2. "Should I scale this product now or keep iterating?"
3. "Is this business model actually good or just a great story?"
4. "I am stepping into a new leadership role. What should I focus on in the first month?"
5. "We are growing fast. How do I know if we are building real advantage or just riding a wave?"
6. "I have two offers on the table. One pays more now, one has more upside. How do I choose?"
7. "My co-founder and I disagree on pricing. How do we resolve this?"
8. "We just hit product-market fit. What do we do next?"

---

# Skill Metadata (for ClawHub publishing)

**Name:** Founder Intelligence
**Tagline:** High-judgment business advice through 9 proven strategic lenses.
**Description:** This skill is the product of a decade-plus of obsessive note-taking — hundreds of books, thousands of hours of podcasts, and years of working directly with founders and operators. It distills what actually works from Bezos, Buffett, Porter, Helmer, Marks, Ferriss, and others into a structured decision framework your AI can run against any business challenge. Business intake so the analysis fits your actual situation. Structured lens-by-lens reasoning. A real recommendation with named tradeoffs and risks. An iteration loop to go deeper, steelman the opposite, or chain into the next decision. Not motivational advice. Not generic "it depends." The kind of thinking that usually costs $500/hour — packaged as a skill.
**Tags:** strategy, founder, decision-making, business, frameworks
**Price:** $15
**Category:** Executive
**Claw Mart:** https://www.shopclawmart.com/listings/founder-intelligence-2002a45e
