---
name: multi-agent-team-blueprint
version: "3.0.0"
updated: 2026-03-17
platform: openclaw
description: "Use when: user wants to deploy multiple coordinated AI agents, build a content pipeline, or set up overnight autonomous operations. NOT for: single-agent setup, simple automation, users who haven't deployed any agent yet."
---

# Multi-Agent Team Blueprint v3 — OpenClaw (Condensed)

## Setup
```bash
node scripts/setup-team.mjs [workspace] --starter=A   # Content Machine
node scripts/setup-team.mjs [workspace] --starter=B   # Research Engine
node scripts/setup-team.mjs [workspace] --starter=C   # Operations Hub
node scripts/setup-team.mjs [workspace] --starter=FULL # All 10 agents
```

## Starter Kits (Start Here, Not Full Team)

| Kit | Agents | Monthly Cost | Best For |
|-----|--------|-------------|---------|
| A | CoS + Scribe + Proof | $25-65 | Content output |
| B | CoS + Radar + Neptune | $20-55 | Research/intel |
| C | CoS + Watch + Atlas | $25-60 | Ops/projects |

## The Org Chart
```
HUMAN → Chief of Staff (Premium)
           ├── Scribe (Content, Mid-tier)
           ├── Proof (QA/Editor, Mid-tier)
           ├── Forge (Builder, Free/Codex)
           ├── Radar (Intel, Mid-tier)
           ├── Neptune (Deep Research, Free/Gemini)
           ├── Apollo (Sales, Mid-tier)
           ├── Atlas (Ops/PM, Mid-tier)
           ├── Watch (Inbox, Mid-tier)
           └── Iris (Triage, Cheapest)
```

**Hard rules:**
1. ALL content through Proof before publishing
2. Escalate uncertainty to Chief of Staff
3. Chief of Staff delegates — human sees summaries only
4. Queue files = shared state. Only assigned agent changes status.

## Queue System
```json
{
  "items": [{
    "id": "content-001",
    "priority": "high",
    "task": "LinkedIn post: [topic]",
    "assignee": "scribe",
    "status": "pending",
    "createdAt": "2026-03-17T10:00:00Z"
  }]
}
```
Status: `pending → in_progress → done | blocked | failed`

## Content Pipeline (Kit A)
```
Chief of Staff sets direction
  → Scribe drafts (2 AM cron) → saves to drafts/
  → Proof reviews (6 AM cron) → score 1-10
    → 7+ approved → ready-to-post/[platform]/
    → <7 rejected → feedback written to draft file → Scribe retries
```

## Cron Schedule Template (Kit A)
| Job | Time | Model |
|-----|------|-------|
| Scribe Daily | 2 AM | claude-sonnet-4 |
| Proof Evening | 6 AM | claude-sonnet-4 |
| Memory Consolidation | 5:30 AM | sonnet or haiku |

## Folder Structure
```
drafts/          ← Scribe writes here
ready-to-post/   ← Proof approves to here
  linkedin/ | x/
queues/          ← Shared state
  content.json | build.json | review.json | intel.json
memory/          ← Agent logs
research/        ← Radar + Neptune output
```

## Deployment Guide (4 Weeks)
- **Week 1:** Deploy starter kit. First autonomous output = milestone.
- **Week 2:** Add Radar + Neptune (if not in kit).
- **Week 3:** Add Apollo + Atlas + Watch.
- **Week 4:** Full team. Night shift meetings running.

## ⚠️ Common Failures
- Queue JSON corrupted by simultaneous writes → agents update ONLY their item atomically
- Proof runs before Scribe → schedule Scribe 2 AM, Proof 6 AM
- Night shift "meeting" = one agent playing all roles, not real coordination
- Timezone mismatch on cron → all templates use `"tz": "America/New_York"` — adjust yours
- Agent escalation with no timeout → add `timeout` field to queue items

## Failure Recovery
```
Queue corrupted → git checkout queues/content.json
Agent stuck >30min → kill session, restart with simpler task
Proof before Scribe → swap cron schedule
Memory incomplete → run consolidation after all overnight jobs (5:30+ AM)
```

## Files
- `scripts/setup-team.mjs` — workspace + queues + cost estimate
- `references/examples.md` — queue examples, night shift transcript, failure recovery
