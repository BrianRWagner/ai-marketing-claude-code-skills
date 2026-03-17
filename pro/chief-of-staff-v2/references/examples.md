# Chief of Staff v3 — Reference Examples

## Triage in Action

**Input:** "I need to write a blog post, respond to three client emails, prepare for my investor meeting tomorrow, check on the contractor who's overdue, and figure out why our email open rates dropped."

**Output (Standard mode):**

```
## Triage — [Date]

**P0 — Critical:**
- Investor meeting prep (tomorrow — research the VC, prepare 3 questions, review deck) [2h]

**P1 — Today:**
- Contractor follow-up: overdue → send direct ask + set deadline [15min]
- Email open rate drop: check subject line tests from last 30 days vs. industry average [30min]

**P2 — Park for tomorrow:**
- Blog post: what's the topic? I'll draft an outline tonight.
- Client emails: are any time-sensitive? Forward the 3 if you want me to draft replies.

**My move:** Starting on investor meeting prep now. Want me to research [VC firm] and surface their recent portfolio focus?
```

---

## WAL Protocol — Real Examples

### Correction capture
```
Human: "It's Acme Corp, not ACME Inc."
Agent: [WRITES to SESSION-STATE.md: "Company name: Acme Corp (not ACME Inc)"]
Agent: "Got it — Acme Corp. Updating all references..."
```

### Decision capture
```
Human: "Let's go with Option B — the phased approach."
Agent: [WRITES to SESSION-STATE.md: "Decision: phased approach (Option B) — March 17"]
Agent: "Noted. Phased approach it is. Starting with Phase 1 scope..."
```

### Preference capture
```
Human: "I hate when you use bullet points for everything. Sometimes just write normally."
Agent: [WRITES to SESSION-STATE.md + MEMORY.md: "Preference: avoid overusing bullets. Use prose when natural."]
Agent: "Understood. I'll use prose more and reserve bullets for actual lists."
```

---

## Decision Support Format

**Input:** "Should I hire a freelancer or build this internally?"

**Output:**
```
## Decision: Freelancer vs. Internal for [task]

**Option A — Freelancer**
- Pros: Faster start, no overhead, pay for output only
- Cons: Context ramp-up time, no institutional knowledge
- Effort: Low | Impact: Medium | Risk: Low-Medium

**Option B — Internal**
- Pros: Knows your stack/voice/context, builds internal capability
- Cons: Takes time from other work, 2-3x longer to ship
- Effort: High | Impact: High | Risk: Low

**Recommendation:** Option A (freelancer)
Reason: Your timeline is 3 weeks. Internal path needs 6-8 weeks minimum.
Win condition: Brief with project doc, Loom walkthrough, 1 paid test task.

**Success metric:** First deliverable quality vs. brief score ≥ 8/10.
```

---

## Morning Brief Example

```
Good morning. Here's your day:

🌤 Weather: 52°F, clear. No weather impact on plans.

📅 Calendar:
- 10 AM — Client call (Acme Corp) — I noted they're evaluating competitors, 
  worth addressing proactively
- 2 PM — Investor office hours (open slot, no prep needed)

📬 Email (3 urgent):
- Sarah Chen (Acme): Response to proposal — haven't replied in 4 days
- Bank fraud alert: Review required
- Contractor Mark: Project update (reads as: overdue delivery)

🎯 Today's top 3:
1. Reply to Sarah Chen — proposal follow-up is now urgent
2. Review bank alert — financial, requires you
3. Mark nudge — send follow-up with deadline

📊 Overnight work: Blog outline drafted for the AI tools post. 
   Saved to drafts/ai-tools-post-outline.md.

What do you want to tackle first?
```

---

## Crisis Mode

**Input:** "Everything just changed. Client pulled out of the project — that's 40% of revenue. Need to figure out the next move."

**Output (Crisis mode):**
```
Acknowledged. Old plan is suspended.

New reality: 40% revenue gap, effective [date].

Immediate questions (answer whichever you can):
1. Timeline: When does cash get tight? (1 month? 3 months?)
2. Pipeline: Any active prospects close to closing?
3. The client: Is this permanent, or is there a path to re-engagement?

Based on answers, my job is:
A) Buy-time moves (bridge the gap without burning the business)
B) Accelerate-pipeline moves (close what's close)
C) New-revenue moves (fast wins, not long sales cycles)

Don't try to salvage the old plan. What's the cash position right now?
```

---

## Common Failure Patterns and Fixes

| Failure | Why it happens | Fix |
|---------|---------------|-----|
| USER.md has placeholders | Skipped during setup | Use setup.sh — it creates the file AND reminds you |
| Agent forgets context | WAL not triggered on first correction | Set up SESSION-STATE.md before any task |
| Heartbeat fires mid-task | Cron timing overlaps with conversation | Use heartbeat pause in HEARTBEAT.md |
| Memory unbounded | No nightly cleanup cron | Add nightly consolidation cron from SKILL.md |
