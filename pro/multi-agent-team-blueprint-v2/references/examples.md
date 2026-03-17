# Multi-Agent Team Blueprint — Reference Examples

## Queue: Content in Practice

### Content queue populated by Chief of Staff
```json
{
  "items": [
    {
      "id": "content-023",
      "priority": "high",
      "task": "LinkedIn post: Why most AI tools fail in B2B (contrarian take)",
      "context": "Based on Brian's call with Acme Corp today — they bought 3 tools, none stuck. Use their story anonymized.",
      "platform": "linkedin",
      "hook_direction": "open with the statistic, not the take",
      "assignee": "scribe",
      "status": "pending",
      "createdAt": "2026-03-17T15:30:00Z"
    },
    {
      "id": "content-024",
      "priority": "medium",
      "task": "Twitter thread: 5 things I learned from 100 AI tool audits",
      "context": "Pull from recent LinkedIn post on tool fatigue. Thread format. 8-10 tweets.",
      "platform": "x",
      "assignee": "scribe",
      "status": "pending",
      "createdAt": "2026-03-17T15:31:00Z"
    }
  ]
}
```

---

## Scribe → Proof → Ready-to-Post Flow

### Step 1: Scribe produces a draft
```
drafts/
└── linkedin-ai-tools-fail-b2b-2026-03-17.md
```

Contents:
```markdown
---
id: content-023
platform: linkedin
status: draft
created: 2026-03-17
queue_item: content-023
---

# Draft: Why Most AI Tools Fail in B2B

73% of B2B AI tools are abandoned within 90 days.

Not because the tools are bad. Because companies buy tools before solving the problem.

[... rest of draft ...]
```

### Step 2: Proof reviews and scores
```
Proof Review — linkedin-ai-tools-fail-b2b-2026-03-17.md

Score: 7.8/10

Voice consistency: ✅ Matches established voice
Hook quality: ✅ Opens with data, creates tension
Specifics check: ✅ Uses % and timeframe, not vague
Platform format: ✅ LinkedIn-appropriate length
Factual check: ⚠️ "73%" — source needed

Decision: APPROVED (pending source attribution for 73% stat)

Feedback: Strong post. One flag: the 73% stat needs a source or 
should be softened to "most" if unverifiable. All else is solid.
```

### Step 3: Proof moves file
```
ready-to-post/linkedin/ai-tools-fail-b2b-2026-03-17.md
```

---

## Night Shift Meeting — Transcript Format

```
Night Shift Meeting — 2026-03-17 02:00 AM ET
Agenda: Daily standup + content planning

── RADAR REPORT ──────────────────────────────
Today's intel summary:
- Competitor X launched AI audit feature (directly overlaps with positioning)
- "AI tool fatigue" trending on LinkedIn (+340% this week)
- Three thought leaders published similar takes — opportunity to differentiate

Escalation: Recommend Neptune deep-dive on competitor X's new feature.

── SCRIBE STATUS ──────────────────────────────
Drafts produced today: 2
- linkedin-ai-tools-fail-b2b (queued for Proof)
- twitter-thread-100-audits (in progress, finishing now)

Content ideas for tomorrow:
- "The AI audit checklist no one talks about" (high relevance given trend)
- Case study thread: before/after for Tool X adoption

── APOLLO STATUS ──────────────────────────────
Pipeline: 4 active deals
- Acme Corp: proposal sent 3 days ago — STALE, follow-up needed
- Beta Client: contract review stage — waiting on their legal
- Prospect A: ghosted after demo — recommend break-up email
- Prospect B: new inquiry today, qualified

── PRIORITIES FOR MORNING ─────────────────────
1. Acme Corp follow-up (Brian to approve draft)
2. Competitor X brief (Neptune research request filed)
3. Content: publish linkedin-ai-tools-fail-b2b if Proof approves

Meeting end: 02:07 AM
Transcript saved: memory/meetings/night-shift-2026-03-17.md
```

---

## Failure Recovery — Common Scenarios

### Queue JSON corrupted
```bash
# Check and restore from git
cd workspace
git diff queues/content.json
git checkout queues/content.json  # restore last good version
```

### Agent stuck > 30 minutes
```bash
# In OpenClaw
openclaw sessions list
openclaw sessions kill <session_id>
# Restart with simpler task
```

### Proof running before Scribe finishes
```
Problem: Proof cron at 9 PM runs before Scribe cron at 2 AM.
Fix: Swap schedule. Scribe = 2 AM, Proof = 6 AM.
Or: Proof checks if drafts/ is empty and exits gracefully.
```

### Two agents write to same queue
```javascript
// Solution: Each agent reads queue, modifies ONLY their item, writes back
// Agent should update status atomically:
const queue = JSON.parse(readFileSync('queues/content.json'));
const myItem = queue.items.find(i => i.id === 'content-023');
myItem.status = 'in_progress';
writeFileSync('queues/content.json', JSON.stringify(queue, null, 2));
// Do work...
myItem.status = 'done';
writeFileSync('queues/content.json', JSON.stringify(queue, null, 2));
```

---

## Cost Tracking Template

Create `memory/cost-tracking.md` and update monthly:

```markdown
# Monthly Cost Tracking

## March 2026

| Agent | Model | Estimated | Actual | Value Delivered |
|-------|-------|-----------|--------|-----------------|
| Chief of Staff | claude-sonnet | $15-40 | $28 | Strategy, delegation |
| Scribe | claude-haiku | $5-15 | $9 | 45 posts drafted |
| Forge | codex-cli | $0-5 | $0 | 3 scripts built |
| Proof | claude-haiku | $3-8 | $5 | 45 reviews, 12 rejections |
| **Total** | | **$23-68** | **$42** | |

## Optimization Notes
- Scribe producing 3 posts/day — more than we need. Reduce to 1-2.
- Proof rejections dropping (12 → 5). Scribe is learning.
- Forge output: 3 scripts, all shipped. Good ROI on $0.
```
