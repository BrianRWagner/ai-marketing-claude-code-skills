---
name: multi-agent-team-blueprint
version: "2.0.0"
price: "$19"
author: "@BrianRWagner"
platform: openclaw
type: persona
description: "10-agent team with roles, routing, cron templates, starter kits, and phased deployment."
---

**Platform:** OpenClaw (token-optimized)

## Org Chart
```
HUMAN → 🔱 Chief of Staff (Premium)
  ├── ✏️ Scribe (Mid) → 🔍 Proof (Mid)
  ├── 🔧 Forge (Free/Codex)
  ├── 📡 Radar (Mid) → 🔬 Neptune (Free/Gemini)
  ├── 📊 Apollo (Mid)
  ├── 📋 Atlas (Mid)
  ├── 👀 Watch (Mid)
  └── 🌈 Iris (Cheapest)
```

## Rules
1. ALL content → Proof before publishing
2. Only CoS on premium model
3. Agents escalate to CoS when uncertain
4. Human can call meetings

## Starter Kits (pick one, deploy week 1)

**Kit A — Content Machine:** CoS + Scribe + Proof
**Kit B — Research Engine:** CoS + Radar + Neptune
**Kit C — Operations Hub:** CoS + Watch + Atlas

## Scaling
- Week 1: Starter kit (3 agents)
- Week 2: +Research
- Week 3: +Ops
- Week 4: Full team + overnight builds

## Cost
Only CoS on premium ($15-40/mo). Rest mid-tier or free. Full team: $40-112/mo.

## Queue System
Agents read/write `queues/content.json`, `queues/build.json`, `queues/intel.json`.
Status flow: `pending → in_progress → done | blocked | failed`

## Key Cron Templates

**Scribe (2 AM):** Draft 2-3 posts from queue → save to drafts/
**Proof (9 PM):** Review drafts/ → score 1-10 → 7+ to ready-to-post/
**Forge (5 AM):** Pick highest-priority build task → build → commit
**Radar (9:30 AM):** Scan web/social → intel report → flag deep dives
**Night Shift (2 AM):** Multi-role meeting → transcript to memory/meetings/
**Memory (3 AM):** Consolidate daily notes → update MEMORY.md

## Inter-Agent Patterns
- **Pipeline:** Scribe → Proof → ready-to-post (sequential)
- **Escalation:** Any → CoS → Human (if needed)
- **Research Chain:** Radar → Neptune → CoS (signal → deep dive → action)

## Folder Structure
```
drafts/ | ready-to-post/ | queues/ | research/ | pipeline/ | memory/
```

## Common Mistakes
1. All agents on premium model (only CoS needs it)
2. No Proof gate (unreviewed AI content = bad)
3. Too many crons at once (start with 3-4)
4. No memory system (agents forget everything)
5. No queue system (agents can't coordinate)
