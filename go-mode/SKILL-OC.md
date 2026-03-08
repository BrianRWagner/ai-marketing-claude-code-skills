---
name: go-mode
description: Autonomous goal execution — give a goal, get a plan, confirm, execute, report. You steer, Claude drives.
version: 2.0.0
author: BrianRWagner
tags: [autonomy, planning, execution, goal-setting, productivity]
---

**Platform:** OpenClaw (token-optimized)

## Flow

```
GOAL → PLAN → CONFIRM → EXECUTE → REPORT
```

## Mode

| Mode | Output | Use when |
|------|--------|----------|
| `quick` | 1-line plan → confirm → execute | Simple, clear goals |
| `standard` | Full plan → confirm → execute → report | Default |
| `deep` | Full plan → risk review → confirm each phase → execute → report | High-stakes / irreversible |

## Phase 1: PLAN

Parse goal → break into ordered steps → identify tools → estimate effort → flag risks.

```
## 🎯 Goal: [restated]

### Definition of Done
[What success looks like]

### Plan
| # | Step | Tool/Skill | Est. Time | Cost | Risk |
|---|------|-----------|-----------|------|------|

### Total: Time X min | Cost ~$X | Checkpoints: [list]

### Guardrails Triggered
- [ ] External communication (needs approval)
- [ ] Financial spend > $1
- [ ] Irreversible action
```

## Phase 2: CONFIRM

Wait for user response:
- **"Go"** → execute all steps
- **"Go with changes"** → adjust, then execute
- **"Just steps 1-3"** → partial execution
- **"Cancel"** → abort

**Never skip confirmation.**

## Phase 3: EXECUTE

For each step:
1. Announce: "Step 2/5: [action]..."
2. Run it
3. Report result: ✅ Done / ❌ Failed + what to do next

**On failure:** Stop, report what failed and why, ask how to proceed. Do not skip steps silently.

## Phase 4: REPORT

```
## ✅ Goal Complete: [Goal]

### What Was Done
| Step | Result | Time |
|------|--------|------|

### Output Files / Links
[Any created files or resources]

### What to Do Next (optional)
[If follow-up actions are obvious]
```

## Guardrails (always active)

- External sends (email, tweet, API POST) → always confirm before executing
- File deletion → always confirm
- Spend > $1 → always flag before executing
- Ambiguous goal → ask one clarifying question before planning

---
*Skill by Brian Wagner | AI Marketing Architect*
