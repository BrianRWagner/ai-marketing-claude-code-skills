---
name: ai-employee-onboarding-wizard
version: "2.0.0"
price: "$9"
author: "@BrianRWagner"
platform: claude-code
slug: "brw-ai-employee-onboarding"
description: "Stand up a production-ready AI employee operating system in one guided session. Outputs 7 ready-to-use files: IDENTITY.md, SOUL.md, AGENTS.md, USER.md, MEMORY.md, HEARTBEAT.md, TOOLS.md."
---

**Platform:** OpenClaw (token-optimized)

## Gate Check (confirm all before generating any files)

```
[ ] Human's role/job confirmed (day-to-day activities)
[ ] Agent's primary function defined (what is this AI's job?)
[ ] Timezone confirmed
[ ] Top 3–5 recurring tasks identified
[ ] Tools/integrations stack noted (Gmail, Notion, Slack, etc.)
```

**Do not generate files with placeholder content. Every field must be real.**

## Mode

| Mode | Output | Use when |
|------|--------|----------|
| `quick` | 3 core files: IDENTITY.md, AGENTS.md, USER.md | Fast single-agent setup |
| `standard` | All 7 files — full production-ready OS | Default — new agent deploy |
| `deep` | All 7 + role variations + team deployment guide | Multi-agent or team setup |

## 7 Files to Generate

| File | Purpose |
|------|---------|
| IDENTITY.md | Who the agent is (name, persona, emoji, vibe) |
| SOUL.md | Operating principles, communication style, anti-patterns |
| AGENTS.md | Memory protocol, tool routing, workspace structure |
| USER.md | Human profile (name, role, preferences, pet peeves) |
| MEMORY.md | Pre-seeded long-term memory (empty template with structure) |
| HEARTBEAT.md | Proactive check-in schedule and task queue |
| TOOLS.md | Integrations, credentials paths, model routing |

## Generation Rules

- **No placeholders** — "TBD" or "[fill this in]" means the file is not production-ready
- **Real tool paths** — actual credential paths, not generic examples
- **Specific recurring tasks** — not "help with work" but "draft LinkedIn posts on Tuesday, review inbox at 9am"
- **Pet peeves must be specific** — sourced from intake conversation
- **Voice must be distinct** — SOUL.md should sound like a real personality, not a corporate template

## Generation Order

1. Gather all gate check inputs
2. Generate IDENTITY.md first (establishes persona)
3. Generate SOUL.md (establishes operating principles based on persona)
4. Generate USER.md (human profile from intake)
5. Generate AGENTS.md (workspace rules referencing SOUL + USER)
6. Generate MEMORY.md (empty structure, seeded with 3–5 initial entries from intake)
7. Generate HEARTBEAT.md (schedule based on stated recurring tasks)
8. Generate TOOLS.md (tools from stated stack)

## Output

All 7 files as markdown code blocks, ready to copy.

After delivery: "Copy these to your agent's workspace directory. Start with IDENTITY.md + AGENTS.md and test before deploying all 7."

---
*Skill by Brian Wagner | AI Marketing Architect | $9*
