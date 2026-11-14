---
name: competitor-intel-brief
description: Use when the user wants a structured teardown of a real competitor to find positioning gaps, pricing signals, channel patterns, vulnerabilities, and a clear angle of attack. NOT for broad market overviews without named competitors, vanity benchmarking, or unsupported speculation.
version: 3.0.0
updated: 2026-03-22
changelog: "v3 — Thariq standard: scripts, gotchas, references, dual-mode"
author: "@BrianRWagner"
platform: claude-code
slug: "brw-competitor-intel-brief"
---

# Competitor Intel Brief

This skill turns a named competitor into an actionable attack brief. Every claim needs a source or an explicit `[DATA NEEDED]` tag.

## Outcome
- Explain how the competitor positions, packages, and distributes.
- Identify the gaps they leave exposed.
- Give the user one separation angle they can actually use.

## Inputs
- Required: competitor name
- Required: competitor URL
- Optional: your own positioning
- Optional: reason for analysis: pitch, GTM, pricing, repositioning, market entry
- Optional: prior teardown for delta analysis

If there is no named competitor and URL, ask for both before proceeding.

## Mode
| Mode | Use when | Output |
|------|----------|--------|
| `quick` | fast pre-call prep | positioning snapshot + top 3 vulnerabilities |
| `standard` | default | full teardown + vulnerability map |
| `deep` | active competitive strategy | full teardown + attack brief + re-audit delta |

## Workflow
1. Confirm target competitor and analysis objective.
2. Run `node scripts/intel-checklist.mjs path/to/competitor.json` if you have structured context.
3. Research in this order:
   - homepage
   - pricing page
   - about page
   - reviews / complaints / alternatives
   - public content channels
4. Build the brief in six sections:
   1. positioning snapshot
   2. offer and pricing analysis
   3. content and channel fingerprint
   4. moat assessment
   5. vulnerability map
   6. attack brief
5. Pass the final separation angle forward to positioning or founder strategy work when relevant.

## Config Pattern
If `config.json` exists, load default teardown preferences first.

Expected keys:
```json
{
  "default_objective": "differentiate",
  "primary_channel_bias": "linkedin",
  "recheck_days": 90
}
```

If absent, ask once and store stable defaults in `${CLAUDE_PLUGIN_DATA}/competitor-intel-brief/config.json`.

## Output Format
```markdown
# Competitor Intel Brief — [Competitor]

## Positioning Snapshot
- Verbatim hero:
- Implied ICP:
- Actual ICP:
- Core message:

## Offer and Pricing Signals
- Tiers:
- Pricing interpretation:
- Missing tier or offer gap:

## Content and Channel Fingerprint
- Active channels:
- Topics they own:
- Topics they avoid:

## Moat Assessment
- Structural advantages:
- Durability score:

## Vulnerability Map
| Vulnerability | Evidence | Your Opportunity |

## Recommended Separation Angle
[one sentence]

## Attack Brief
- Messaging to use:
- Content to publish:
- Sales objection to train:
```

## KPIs
- Every major claim has evidence.
- At least 3 real vulnerabilities are named.
- One recommended separation angle is specific enough to use in copy or sales.
- The brief can feed a positioning or GTM decision immediately.

## Constraints
- No generic "they're strong on content" statements without examples.
- Do not invent pricing if it is hidden.
- Distinguish stated ICP from actual ICP.
- Do not confuse channel activity with channel effectiveness.

## Decision Logic
- If pricing is hidden, interpret that as a signal, not a dead end.
- If the competitor's message is broad, look to packaging and case studies for actual ICP.
- If content is sparse, lean harder on reviews, alternatives pages, and sales friction signals.
- If the user provides their own positioning, always convert the vulnerabilities into separation language.

## Gotchas
1. Homepage ICP and actual buyer are often different. Check packaging and proof.
2. Hidden pricing is a strategy signal, not missing data to ignore.
3. Reviews reveal implementation pain better than polished site copy.
4. A competitor posting often does not mean they own a topic.
5. Broad messaging can hide a narrow sales reality.
6. "Weakness" should be framed as exploitable gap, not insult.
7. One-off complaints are noise unless repeated across sources.
8. The final output is not the teardown itself; it is the angle you can attack.

## Quality Gate
Especially check trigger clarity, fixed output structure, proof orientation, frameworks, examples, and decision logic.

## References
- See `references/examples.md` for concrete teardown patterns.
- Use `scripts/intel-checklist.mjs` to verify required inputs before analysis.
