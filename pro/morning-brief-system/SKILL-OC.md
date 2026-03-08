---
name: morning-brief-system
version: "2.0.0"
price: "$14"
author: "@BrianRWagner"
platform: claude-code
slug: "brw-morning-brief-system"
description: "Generate a daily founder briefing that turns scattered context into clear execution priorities. Action-first format. Never lets high-leverage work get buried under low-leverage noise."
---

**Platform:** OpenClaw (token-optimized)

## Gate Check (required before generating brief)

```
[ ] Today's fixed commitments (calls, meetings, hard deadlines)
[ ] Top 3 priorities for the day
[ ] Known blockers or dependencies
[ ] Time available for focused work (hours)
[ ] Optional: key metrics/signals to watch, overnight context, travel/disruptions
```

If fixed commitments and priorities NOT provided → ask. A brief without context is just a template.

## Two Operating Modes

**Mode A — Daily Brief:** User provides today's context → generate fresh brief
**Mode B — Carry-Forward:** Yesterday's brief available → load prior unfinished items → integrate into today → show what's rolling over explicitly

## Mode

| Mode | Output | Use when |
|------|--------|----------|
| `quick` | Top 3 priorities + 2 watch-outs | Rushed morning |
| `standard` | Full brief: locked + priorities + blockers + decisions | Default daily planning |
| `deep` | Full brief + weekly arc + energy allocation + EOD success criteria | High-stakes week |

## Brief Generation Logic

**Priority ranking (use this order):**
1. Hard deadlines today (non-negotiable)
2. High-leverage work that moves the business (creator, not caretaker)
3. Commitments to others (external-facing)
4. Inbox/admin (last — not first)

**Energy allocation:**
- Morning peak → #1 priority (deep/creative work)
- Mid-morning → #2 priority or important calls
- Afternoon → #3 priority or reactive work
- End of day → admin, planning tomorrow

**Watch-out criteria:** Flag if:
- A dependency hasn't responded yet
- A hard deadline is <4 hours away
- A commitment is blocking someone else

## Output Format

```
# 🌅 Morning Brief — [Day], [Date]

## 🔒 Locked Commitments
[Time] — [Meeting/call/deadline]
[Time] — ...

## 🎯 Today's 3 Priorities
1. [Priority] — [Why it matters today] — [Est. time]
2. [Priority] — [Why it matters] — [Est. time]
3. [Priority] — [Why it matters] — [Est. time]

## ⚠️ Watch-Outs
- [Blocker/dependency/risk]
- [Blocker/dependency/risk]

## 🚦 Decisions Needed Today
- [Decision] — [Context] — [Who/what is needed]

## 📊 Focus Time Available
After locked commitments: [X hours]
Suggested allocation: [Priority 1: Xh | Priority 2: Xh | Admin: Xh]

## ✅ EOD Success Criteria (deep mode)
"Today was a win if: [specific completion criteria]"

## 🔄 Carrying Forward (Mode B only)
From yesterday: [item] → [status]
```

---
*Skill by Brian Wagner | AI Marketing Architect | $14*
