---
name: reddit-insights
description: |
  Search and analyze Reddit content using semantic AI search via reddit-insights.com MCP server.
  Use when you need to: (1) Find user pain points and frustrations for product ideas, (2) Discover niche markets or underserved needs, (3) Research what people really think about products/topics, (4) Find content inspiration from real discussions, (5) Analyze sentiment and trends on Reddit, (6) Validate business ideas with real user feedback.
  Triggers: reddit search, find pain points, market research, user feedback, what do people think about, reddit trends, niche discovery, product validation.
---

**Platform:** OpenClaw (token-optimized)

## Setup

API key from reddit-insights.com → Settings → API

Add to mcporter.json:
```json
{
  "mcpServers": {
    "reddit-insights": {
      "command": "npx reddit-insights-mcp",
      "env": { "REDDIT_INSIGHTS_API_KEY": "your_key" }
    }
  }
}
```

## Mode

| Mode | Output | Use when |
|------|--------|----------|
| `quick` | 1 query, top 5 insights | Fast pain point check |
| `standard` | 3–5 queries, full synthesis | Product validation, content research |
| `deep` | Multi-angle + sentiment + content angles + competitive intel | Business decisions, campaign strategy |

## Available Tools

| Tool | Purpose |
|------|---------|
| `reddit_search` | Semantic search — natural language query, limit 1–100 |
| `reddit_list_subreddits` | Browse available communities |
| `reddit_get_subreddit` | Subreddit details + recent posts |
| `reddit_get_trends` | Trending topics (latest/today/week/month) |

Performance: 12–25 seconds response time. Best results: specific products, emotional language, comparison questions.

## Workflow

**1. Run queries** (start broad, then narrow):
```
reddit_search: "[topic] problems frustrations"
reddit_search: "[topic] recommendations what worked"
reddit_search: "[topic] vs alternatives"
```

**2. Analyze results:**
- Group by relevance score (0–1)
- Identify recurring themes (3+ mentions = pattern)
- Note highest-upvoted posts and comments
- Tag sentiment: frustration / excitement / skepticism / confusion

**3. Synthesize into output**

## Output Format

```
## Reddit Insights: [Topic] — [Date]

### Top Themes
1. [Theme] — appears in X posts
   Evidence: "[key quote]"
   Subreddits: r/X, r/Y

### Sentiment Analysis
Frustration: [%] | Excitement: [%] | Skepticism: [%]

### Top Pain Points
1. [Pain point + source post]

### Content Opportunities
1. [Angle from real community language]

### Business Insights
[Validated needs, underserved gaps, competitive angles]

### Sources
[Post titles + URLs]
```

---
*Skill by Brian Wagner | AI Marketing Architect*
