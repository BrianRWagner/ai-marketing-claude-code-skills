---
name: last30days
description: Research any topic across Reddit, X, and web from the last 30 days. Get current trends, real community sentiment, and actionable insights in 7 minutes vs 2 hours manual research.
version: 2.0.0
author: theflohart
tags: [research, trends, reddit, twitter, competitive-intel, content-research]
---

**Platform:** OpenClaw (token-optimized)

## Mode

| Mode | Output | Use when |
|------|--------|----------|
| `quick` | Reddit only, top 10 insights | Fast topic pulse |
| `standard` | Reddit + X + web, full synthesis | Default — content/market research |
| `deep` | Full + strategic brief + content angles + competitive intel | Product decisions, campaign strategy |

## Workflow

**Step 1 — Web search (freshness filter = past month):**
```
web_search: "[topic] 2026" + freshness=pm
web_search: "[topic] strategies trends current"
web_search: "[topic] what's working"
```

**Step 2 — Reddit search:**
If reddit-insights MCP configured:
```
reddit_search: "[topic] discussions techniques"
```
Otherwise:
```
web_search: "[topic] site:reddit.com" + freshness=pm
```

**Step 3 — X/Twitter search:**
```
bird search "[topic]" -n 10
bird search "[topic] 2026" -n 10
```

**Step 4 — Deep dive on top 2-3 sources:**
```
web_fetch: [article URL]
```

**Step 5 — Synthesize:**
- Identify patterns appearing 3+ times across sources
- Extract key quotes (most upvoted Reddit, retweeted takes)
- Assess sentiment (hype / adoption / skepticism / frustration)
- Create copy-paste prompts + action ideas

## Output Format

```
# 🔍 /last30days: [TOPIC]
*Sources: [N] | Period: Last 30 days | Date: [DATE]*

## 🔥 Top Patterns

### 1. [Pattern Name] — mentioned X times
[Description + key evidence]
- Reddit: "[Quote]"
- X: "[Quote]"
- Article: "[Key insight]"

## 📊 Sentiment Breakdown
[Platform | Volume | Sentiment | Key Insight]

## 🎯 Copy-Paste Prompt
[Ready-to-use prompt incorporating research findings]

## 💡 Action Ideas
1. [Opportunity + evidence + how]

## 📌 Sources
[Reddit threads, X threads, Articles with URLs]
```

## Quality Checklist

- [ ] 3–5 clear patterns (not random insights)
- [ ] Quotes from actual users
- [ ] Sentiment assessed
- [ ] Ready-to-use prompt (copy-paste quality)
- [ ] Specific action ideas (not vague suggestions)
- [ ] All sources from last 30 days

---
*Skill by theflohart | AI Marketing Skills*
