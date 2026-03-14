## [3.1.0] — March 8, 2026

### What Changed
`quick|standard|deep` execution mode added to all 19 free skills. Inspired by ECC's runtime profile system.

### Why
Skills were all-or-nothing. A user who needed a fast answer got the same full process as someone doing a deep audit. Mode switching gives users the right output depth without multiple skills.

### What's New
- **Mode table** in every skill — immediately after the intro, before Phase 1
- `quick` — minimum viable output, right answer for fast use cases (15 min or less)
- `standard` — full process, unchanged from prior behavior (default — no breaking changes)
- `deep` — extended research, iteration, and frameworks for serious projects
- `SKILL-MODE-PATTERN.md` — implementation guide for adding this pattern to any skill

### Skills Updated
All 19 free skills: ai-discoverability-audit, case-study-builder, cold-outreach-sequence, content-idea-generator, de-ai-ify, go-mode, homepage-audit, last30days, linkedin-authority-builder, linkedin-profile-optimizer, marketing-principles, newsletter-creation-curation, plan-my-day, positioning-basics, reddit-insights, social-card-gen, testimonial-collector, voice-extractor, youtube-summarizer

### Notes
Standard mode = identical to v3.0.0 behavior. Fully backward compatible.

---

## [3.0.0] — February 28, 2026

### What Changed
3-layer architecture refactor + new Meeting Prep skill.

### Why
Skills audit (Feb 28) found 3 CC free skills missing YAML front matter (invisible to trigger system). Meeting Prep was identified as the highest-value missing weekly recurring skill.

### What's New
- **Meeting Prep skill** — INTAKE→ANALYZE→OUTPUT format. Vault search + prior brief lookup + question generation. No autonomy.

### Front Matter Verified
- `daily-briefing-builder` — INTAKE→ANALYZE→OUTPUT format, confirmed good
- `tweet-draft-reviewer` — 8 voice rules fully documented, confirmed good
- `vault-cleanup-auditor` — shell commands complete, confirmed good

### Architecture
All skills follow INTAKE→ANALYZE→OUTPUT structure. No autonomy triggers. You run it, you get your output.

---

# Changelog

All notable changes to the AI Marketing Skills for Claude Code library.

---

## [2.0.0] — February 2026

### What Changed

Major upgrade across 12 skills. Every updated skill was graded against the [Claude Code Skill Effectiveness Rubric](https://brianrwagner.com) and rebuilt to score 85+/100.

### Added to all upgraded skills

- **Context Loading Gates** — explicit checklist before any output; skill refuses to proceed without required inputs (URL, positioning statement, writing samples, etc.)
- **Structured Reasoning Phases** — multi-step analysis before generating (Phase 1: intake → Phase 2: analysis → Phase 3: generate → Phase 4: critique → Phase 5: deliver)
- **Self-Critique Pass** — mandatory structured review checklist applied to output before delivery
- **Iteration Protocol** — defined process for refining weak output
- **Output Structure** — exact named markdown sections and formatting conventions per skill

### Skills Upgraded

| Skill | Before | After | Key Changes |
|-------|--------|-------|-------------|
| `marketing-principles` | 47 | 87 | Context intake, decision engine replacing philosophy list, inversion critique section, per-principle output templates |
| `social-card-gen` | 38 | 87 | Platform reasoning rules inline, intake gate, quality self-review pass, Node.js fallback path, guardrails |
| `testimonial-collector` | 52 | 87 | 5-question intake, quality assessment scoring, drafting framework, iteration loop, placement guide |
| `homepage-audit` | 58 | 88 | Mandatory URL/screenshot intake, page-type branching, scoring criteria per row, impact×effort matrix |
| `case-study-builder` | 60 | 88 | Structured 8-field intake form, outcome extraction protocol, self-critique pass, distribution plan, cross-link to testimonial-collector |
| `positioning-basics` | 64 | 88 | Competitive research tool calls, memory write, gate before output, iteration against checklist |
| `linkedin-authority-builder` | 63 | 88 | 5-question intake, content calendar output, cross-links to profile-optimizer + content-idea-generator |
| `content-idea-generator` | 61 | 88 | Context intake, freshness web search, quality filter per idea, cross-link to positioning-basics |
| `voice-extractor` | 61 | 88 | Constraint handling, failure modes, quick/full mode documentation, validation step |
| `cold-outreach-sequence` | 64 | 88 | Research tool calls wired in, personalization scoring, pipeline tracker output, post-breakup handling |
| `newsletter-creation-curation` | 74 | 89 | Execution output template, multi-agent handoff protocol |
| `ai-discoverability-audit` | 72 | 89 | Re-audit loop, baseline comparison, penalty guardrails |

### Skills Unchanged (already 85+)

`go-mode` (86), `de-ai-ify` (83), `last30days` (79), `reddit-insights` (80), `youtube-summarizer` (82), `plan-my-day` (81), `linkedin-profile-optimizer` (90)

---

## [1.0.0] — January 2026

### Initial Release

19 marketing skills covering strategy, content, research, conversion, and productivity. Based on the [AgentSkills.ai](https://agentskills.ai) open standard.

## v3.2.0 — March 14, 2026 (Night Sprint)

### Claw Mart v2 Updates
- **Chief of Staff v2**: Three operating modes (quick/standard/deep), WAL Protocol, working buffer for context survival, self-critique protocol, crisis mode, multi-model routing guide, group chat intelligence, lessons-learned system
- **Multi-Agent Team Blueprint v2**: Starter kits (Content Machine, Research Engine, Ops Hub), cost calculator, 4-week phased deployment guide, queue system with JSON templates, inter-agent communication patterns, failure recovery guide
- **Morning Brief System v2**: Quick/standard/deep modes, context loading gates, carry-forward and crisis modes, overload protocol, self-critique, weekly mode

### New Files
- Added SKILL-OC.md (OpenClaw-optimized) for Chief of Staff v2 and Multi-Agent Team Blueprint v2
