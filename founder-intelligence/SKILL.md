---
name: founder-intelligence
description: Use when the user wants high-judgment business advice on a strategic decision, tradeoff, or constraint and needs it routed through specific founder/operator lenses with a concrete recommendation. NOT for motivational pep talks, generic startup quotes, or broad business education without a live decision.
version: 3.0.0
updated: 2026-03-22
changelog: "v3 — Thariq standard: scripts, gotchas, references, dual-mode"
author: "@BrianRWagner"
platform: claude-code
slug: "brw-founder-intelligence"
---

# Founder Intelligence

This skill is for decision quality. It should sound like an operator who has to live with the consequences, not a content account summarizing founders.

## Outcome
- Route a real decision through the right strategic lenses.
- Expose the central tradeoff, biggest assumption, and first move.
- Deliver a recommendation with teeth, not a buffet of options.

## Inputs
- Required: what the business sells, to whom, and at what rough price point
- Required: business stage
- Required: the specific decision or obstacle to resolve
- Required: time horizon
- Optional: revenue range, team size, decisions already ruled out, competitive context

Ask for missing inputs in one message. If there is no live decision, do not run the skill.

## Mode
| Mode | Use when | Output |
|------|----------|--------|
| `quick` | fast directional call | top 1-2 lenses and direct recommendation |
| `standard` | default | routed analysis, integrated recommendation, risk, first step |
| `deep` | high-stakes bet | full analysis plus 90-day roadmap and assumption test plan |

## Strategic Lenses
- Buffett/Munger: moat, durability, pricing power
- Bezos: customer-backwards decisions
- Jobs: simplicity and product focus
- Drucker: what business are you really in
- Godin: smallest viable audience
- Horowitz: wartime vs peacetime execution
- Thiel: non-consensus and category logic
- Dalio: principles and repeatable decision systems
- Hamilton Helmer: 7 Powers and structural advantage

## Workflow
1. Confirm the actual decision in one sentence.
2. Run `node scripts/lens-router.mjs "decision statement"` for a fast initial routing pass.
3. Choose the top 3 lenses for `standard`; use more only if `deep` requires it.
4. Analyze what each chosen lens reveals.
5. Integrate the analysis into one recommendation.
6. State the biggest risk and one 48-hour first move.

## Config Pattern
If `config.json` exists, load standing business defaults first.

Expected keys:
```json
{
  "default_stage": "early_revenue",
  "risk_tolerance": "medium",
  "decision_horizon": "90_days",
  "bias": "clarity_over_optionality"
}
```

If absent, ask once for stable preferences and store them in `${CLAUDE_PLUGIN_DATA}/founder-intelligence/config.json`.

## Output Format
```markdown
# Founder Intelligence — [Decision Topic]

## Decision
[restated decision]

## Situation Snapshot
- Business: [one line]
- Stage: [one line]
- Time horizon: [one line]

## Lens Routing
1. [lens] — why it applies
2. [lens] — why it applies
3. [lens] — why it applies

## Analysis
### [Lens]
[what it reveals]

## Integrated Recommendation
[clear recommendation]

## Biggest Risk
[assumption that could break the plan]

## 48-Hour First Step
[specific next move]

## If This Is Wrong, It Will Be Because
[falsifiable condition]
```

## KPIs
- Recommendation is clear enough to act on immediately.
- Top 3 lenses are justified, not decorative.
- A real tradeoff is named.
- First step can start within 48 hours.

## Constraints
- No motivational language.
- No quote-dumping.
- Do not cover all 9 lenses unless the user needs deep mode.
- If two options are truly close, explain the deciding variable.

## Decision Logic
- If the problem is really positioning, route toward Drucker and Godin before finance lenses.
- If the decision is pricing, include Helmer or Buffett to avoid shallow price math.
- If the issue is execution under pressure, Horowitz outranks inspirational founder lore.
- If the user wants certainty where evidence is thin, say which assumptions need testing.

## Gotchas
1. Users often ask for strategy when the real issue is commitment. Name the choice they are avoiding.
2. Nine lenses applied equally creates mush. Route hard.
3. Founder quotes are not analysis. Translate them into operating logic.
4. Advice that ignores stage is usually wrong.
5. A recommendation without an assumption test is just confidence theater.
6. If the user already ruled out a path, do not quietly reintroduce it without saying why.
7. "Both could work" is usually laziness unless the deciding variable is explicit.
8. The first step should reduce uncertainty, not just feel productive.

## Quality Gate
Check: trigger clarity, bounded inputs, outcome orientation, format lock, examples, frameworks, constraints, taste, decision logic, and post-use refinement.

## References
- Concrete decision examples live in `references/examples.md`.
- Use `scripts/lens-router.mjs` for deterministic lens routing before writing the analysis.
