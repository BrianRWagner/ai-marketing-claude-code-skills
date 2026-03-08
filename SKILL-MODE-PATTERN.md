# SKILL_MODE Pattern — v1.0
**Stolen from:** everything-claude-code (ECC) runtime profile system
**Applied to:** AI marketing skills

---

## What This Is

Every skill now supports three execution depths. Users get the right output for their situation without the agent guessing.

| Mode | Output depth | Time expectation |
|------|-------------|-----------------|
| `quick` | Minimum viable output — single pass, no deep research, no scoring | < 15 min |
| `standard` | Full process — all phases, scoring where relevant, priority output | 30–45 min |
| `deep` | Extended research + iteration + frameworks for ongoing use | 60–90 min |

---

## How to Add This to Any Skill

**Step 1: Add the Mode section** immediately after the intro, before "Before You Begin" or Phase 1.

```markdown
## Mode

Detect from context or ask: *"[One-line question specific to this skill]"*

| Mode | What you get | Best for |
|------|-------------|----------|
| `quick` | [Describe the minimum useful output] | [When to use] |
| `standard` | [Full current skill behavior] | [When to use] |
| `deep` | [Extended output with extras] | [When to use] |

**Default: `standard`** — [one line on when quick or deep is appropriate]
```

**Step 2: Tag phases/sections** that only run in certain modes.

- No tag = runs in all modes
- `[standard+]` = runs in standard and deep only
- `[deep only]` = deep mode only

**Step 3: Update Output Format section** to describe what each mode delivers.

---

## Skills Updated (v2.1)

- [x] `ai-discoverability-audit` — quick (Phase 1 only) / standard (full) / deep (+ 90-day plan)
- [x] `cold-outreach-sequence` — quick (1 message) / standard (4-touch) / deep (campaign system)
- [x] `de-ai-ify` — quick (fast pass) / standard (full scan) / deep (+ voice calibration)

## Skills To Update (Next)

- [ ] `linkedin-authority-builder`
- [ ] `linkedin-profile-optimizer`
- [ ] `content-idea-generator`
- [ ] `homepage-audit`
- [ ] `reddit-insights`
- [ ] `last30days`
- [ ] `positioning-basics`
- [ ] `marketing-principles`

---

## Design Principles

1. **quick is not worse — it's appropriate for different jobs.** Don't frame quick as a degraded mode.
2. **Don't change the skill's core logic.** The mode gate is additive — standard mode = current behavior.
3. **Detect from context first.** If the user says "quick" or "fast" or gives you one name — infer quick. If they say "full audit" or "system" — infer deep. Only ask if genuinely ambiguous.
4. **deep should earn its time.** If deep mode doesn't produce something a consultant would charge for, it's not deep enough.

---

*Pattern introduced: March 8, 2026*
*Inspired by: ECC's `ECC_HOOK_PROFILE=minimal|standard|strict`*
