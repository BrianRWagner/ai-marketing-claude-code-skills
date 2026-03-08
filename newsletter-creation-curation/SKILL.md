---
name: newsletter-creation-curation
description: Industry-adaptive B2B newsletter creation with stage, role, and geography-aware workflows
metadata: {"clawdbot":{"emoji":"📧","homepage":"https://github.com/shashwatgtm","always":true}}
---

# Newsletter Creation & Curation Skill

Use this skill to create B2B newsletters that match business context, not generic content templates.

Deep strategic guidance is in `PLAYBOOK.md`.
Use this file as the executable operating manual.

## Mode

Detect from context or ask: *"Outline only, full edition, or full edition + calendar?"*

| Mode | What you get | Best for |
|------|-------------|----------|
| `quick` | Edition outline + 3 lead story angles, no writing | Planning, editorial direction |
| `standard` | Full newsletter edition, all sections written | Publishing this week |
| `deep` | Full edition + 4-week content calendar + audience segmentation recommendations | Launching or systematizing a newsletter |

**Default: `standard`** — use `quick` if they're still deciding what to write. Use `deep` if they're building a newsletter from scratch or scaling.

---

## Quick Decision Tree (5 Dimensions)

Answer these in order before writing anything.

### 1) Goal
- `Lead Generation`: newsletter should drive pipeline and SQLs.
- `Thought Leadership`: newsletter should build trust and category authority.
- `Personal Brand`: newsletter should establish individual POV and visibility.
- `Category Ownership`: newsletter should define market narrative at scale.

### 2) Industry
- `Sales Tech`: tactical, data-heavy, ROI-forward.
- `HR Tech`: research-led, professional, trust-first.
- `Fintech`: compliance-aware, conservative claims.
- `Operations Tech`: domain-specific, practical playbooks.

### 3) Company Stage
- `Series A`: founder-led, lean, weekly or bi-weekly.
- `Series B`: team-led, stronger editorial process, analytics discipline.
- `Series C+`: media-grade quality, original research, category narrative.

### 4) Role
- `Founder`: highest autonomy, fastest execution.
- `VP/Director`: medium autonomy, stakeholder review expected.
- `PMM/Content`: structured approvals, brand constraints.
- `Enterprise employee`: PR/legal gatekeeping likely required.

### 5) Geography
- `India-first`: IST timing, local examples/channels.
- `US-first`: EST/PST timing, US benchmarks/channels.

## Template Selector

Pick exactly one base template first:
- Sales Tech: `templates/sales-tech-template.md`
- HR Tech: `templates/hr-tech-template.md`
- Fintech: `templates/fintech-template.md`
- Operations Tech: `templates/ops-tech-template.md`

Then adapt cadence and tone using Stage + Role + Geography.

## Execution Workflow (Do This Every Time)

### Step 1: Assess Context
Collect and confirm:
- Product category and ICP.
- Primary goal for the next 90 days.
- Stage, role, approval constraints.
- Geography and timezone.
- Available production bandwidth (hours/week, team, budget).

Output:
- One-line strategy statement: `For [ICP], we publish [cadence] to achieve [goal] with [format].`

### Step 2: Select and Adapt Template
Actions:
- Load one industry template from `templates/`.
- Set cadence:
  - Series A: weekly/bi-weekly (execution simplicity).
  - Series B: weekly or bi-weekly (team process).
  - Series C+: weekly with recurring pillars (media-quality).
- Apply role constraints:
  - Founder: direct POV is allowed.
  - Employee: insert approval checkpoint before final draft.
- Apply geography settings:
  - India-first: schedule in IST and local references.
  - US-first: schedule in EST/PST and US references.

Output:
- Final issue blueprint with section headings + target word count per section.

### Step 3: Generate Content
Use the blueprint to draft issue content.

Required structure:
- Subject line options (3)
- Hook (problem + stakes)
- Core insight (data, framework, or pattern)
- Actionable playbook (steps/checklist)
- CTA (reply, share, demo, resource)

Generation rules:
- Prefer specific numbers, examples, and named scenarios.
- Remove generic filler.
- Keep one primary takeaway per issue.
- Keep CTA singular and measurable.

Output:
- Draft issue in publish-ready markdown.

### Step 4: Refine and Ship
Run this checklist:
- `Clarity`: can a busy reader extract value in 60 seconds?
- `Specificity`: does each section include concrete guidance or evidence?
- `Relevance`: does tone match industry and role constraints?
- `Compliance`: for fintech/employee-led, ensure legal/manager review step exists.
- `Consistency`: voice aligns with prior issues.

Finalize:
- Choose one subject line.
- Add final send time.
- Add amplification plan (LinkedIn + one secondary channel).

Output:
- Final issue + distribution notes + KPI targets.

## Role-Based Approval Workflow

Use this enforcement logic before publishing:
- Founder-led:
  - No formal approval required.
  - Optional peer review for quality.
- VP/Director-led:
  - Manager or leadership review required.
  - High-impact claims should be validated.
- PMM/Content-led:
  - Brand + stakeholder review required.
  - Keep documented source notes for claims.
- Enterprise employee:
  - PR/legal review required before distribution.

If unsure, default to stricter review.

## KPI Defaults by Goal

- Lead Generation:
  - Open rate, CTR, demo requests, SQL mentions in CRM.
- Thought Leadership:
  - Open rate trend, replies, shares, speaking invites, inbound references.
- Personal Brand:
  - Subscriber growth, profile visits, inbound opportunities.
- Category Ownership:
  - Share of voice, citations, partnerships, executive visibility.

## Playbook Map (Deep Dives)

Use these sections in `PLAYBOOK.md` when deeper strategy is needed:
- Sales Tech strategy: `SECTION A`
- HR Tech strategy: `SECTION B`
- Fintech strategy: `SECTION C`
- Operations Tech strategy: `SECTION D`
- Role approvals and geography tactics: `CROSS-CUTTING: UNIVERSAL FRAMEWORKS`
- Mistakes, prompts, tool matrix, quick-reference matrix: bottom sections of `PLAYBOOK.md`

## Why This vs Generic ChatGPT Prompting?

This skill adds structured context control that generic prompting usually misses:
- Matches content to `industry + stage + role + geography` before drafting.
- Forces approval logic for employee-led and fintech scenarios.
- Uses proven templates tied to B2B newsletter outcomes.
- Produces repeatable workflows, not one-off writing outputs.
- Keeps strategic depth in `PLAYBOOK.md` for escalation without bloating execution steps.

## Fictional Case Study (Realistic)

### Context
- Company: `SignalPilot` (Sales Tech)
- Stage: Series A, $4M ARR
- Role: Founder-led
- Market: US-first
- Goal: 12 SQLs/month from newsletter in 6 months
- Bandwidth: 4 hours/week, no designer

### What They Did
- Selected `templates/sales-tech-template.md`.
- Published weekly on Tuesday 9 AM EST.
- Issue mix:
  - 50% data-backed sales observations
  - 30% tactical playbooks
  - 20% contrarian POV
- Reused each issue for one LinkedIn post + one short thread.

### Outcome (6 Months)
- 1,350 subscribers.
- Average 42% open rate, 8.1% CTR.
- 14 monthly SQLs tagged as newsletter-influenced.
- Sales team started using issues as pre-demo credibility assets.

## Usage Examples

### Example A: Founder, Sales Tech, Series A
Prompt:
```text
Use newsletter-creation-curation.
Context: Sales tech founder, Series A, US market, lead generation goal.
Create next week's issue using the sales-tech template, with 3 subject lines,
700-900 words, and a Tuesday 9 AM EST send plan.
```

### Example B: VP Marketing, HR Tech, Series B
Prompt:
```text
Use newsletter-creation-curation.
Context: HR tech VP Marketing, Series B, US-first, thought-leadership goal.
Create a bi-weekly issue outline and full draft with approval checkpoints and
source-backed claims only.
```

### Example C: PMM, Fintech, Series B, India
Prompt:
```text
Use newsletter-creation-curation.
Context: Fintech PMM, Series B, India-first, trust-building goal.
Build issue draft with compliance-safe language, IST send timing, and
manager/legal review checklist.
```

## Fast Start (Agent Checklist)

1. Ask 5 decision-tree questions.
2. Select one industry template from `templates/`.
3. Produce issue blueprint (sections + word counts).
4. Draft issue using the workflow.
5. Apply role/compliance review.
6. Finalize send-time, amplification, and KPI targets.
7. If deeper strategy is needed, consult `PLAYBOOK.md`.
