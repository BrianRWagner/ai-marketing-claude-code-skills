---
name: plan-my-day
description: Generate an energy-optimized, time-blocked daily plan based on circadian rhythm research and GTD principles
version: 2.0.0
author: theflohart
tags: [productivity, planning, time-blocking, energy-management, gtd]
---

**Platform:** OpenClaw (token-optimized)

## Mode

| Mode | Output | Use when |
|------|--------|----------|
| `quick` | Top 3 priorities + rough time blocks | Morning sprint, know the day |
| `standard` | Full hour-by-hour energy-optimized plan | Default daily planning |
| `deep` | Full plan + energy pattern analysis + weekly structure | Overhauling schedule |

## Energy Windows (defaults — customize with `--peak` flag)

| Window | Time | Task Type |
|--------|------|-----------|
| Peak 1 | 9:00–12:00 | Deep work, complex decisions, #1 priority |
| Secondary peak | 14:00–16:00 | Focused work, meetings with decisions |
| Admin | 16:00–18:00 | Email, light tasks, 1-on-1s |
| Recovery | 12:00–13:00, 18:00+ | Meals, walks, recharge |

## Workflow

**1. Gather context (30 sec):**
- Existing calendar events
- Yesterday's incomplete tasks
- Fixed commitments/deadlines
- Current project priorities

**2. Identify Top 3 priorities:**
Filter by: Impact × Urgency. Pick 3 highest-scoring.

**3. Build schedule:**
- Place fixed commitments first
- Priority #1 → longest peak block
- Priority #2 → secondary peak
- Priority #3 → remaining focused time
- Add 20-min buffers between major blocks
- Admin → low-energy windows
- Schedule only 80% of available time (buffer rule)

**Constraints:** No deep work blocks <90 min. Max 4h meetings/day. 15-min break every 90 min.

## Output Format

```markdown
# Daily Plan — [Day], [Date]

## Today's Mission
**Primary Goal:** [One outcome for the day]
**Top 3:** 1. [Priority] 2. [Priority] 3. [Priority]
**Success looks like:** [What "done" means]

---

## Schedule

### [Time block]: [Label]
**Focus:** [Task]
- [ ] [Subtask]
Energy: [Building/Peak/Declining]

[repeat for each block]

---

## Evening Reflection (fill at day's end)
- Completed: [what got done]
- Moved to tomorrow: [what didn't]
- Energy pattern note: [anything to adjust]
```

---
*Skill by theflohart | AI Marketing Skills*
