---
name: social-card-gen
description: Generate platform-specific social post variants (Twitter, LinkedIn, Reddit) from one source input using a local Node.js script with no API dependency.
---

# Social Card Generator Skill

Use this skill when a user needs one source message transformed into platform-ready social copy for Twitter, LinkedIn, and Reddit.

## Mode

Detect from context or ask: *"One platform, all platforms, or all platforms with variants?"*

| Mode | What you get | Best for |
|------|-------------|----------|
| `quick` | 1 platform (user picks), optimized variant | Testing a single channel |
| `standard` | All 3 platforms: Twitter, LinkedIn, Reddit | Standard cross-platform post |
| `deep` | All platforms + 3 variants each + A/B test guidance | Campaign testing, maximizing reach |

**Default: `standard`** — use `quick` if they specify a platform. Use `deep` if they're running a content campaign and want options.

---

## What it does

- Converts one source input into 3 platform variants.
- Enforces platform limits:
  - Twitter: 280 chars
  - LinkedIn: 3000 chars
  - Reddit: no hard limit in this tool
- Applies platform style:
  - Twitter: punchy + compact hashtags
  - LinkedIn: professional + business framing
  - Reddit: authentic + discussion-oriented
- Runs entirely offline for text/file workflows (no API required).

## Files

- `generate.js`: CLI generator.
- `templates.js`: platform rules, tone guidance, hashtag strategy, and CTA formats.
- `examples/`: sample input and output.

## Usage

```bash
npm install

# text input
node generate.js --text "We reduced onboarding time by 35% with a checklist." --stdout

# file input
node generate.js --file examples/input-example.md --outdir examples

# URL input (when network is available)
node generate.js --url https://example.com/post --platforms twitter,linkedin --stdout
```

## Why this vs ChatGPT?

- Deterministic output shape: same rules every run.
- Zero prompt iteration for routine adaptation.
- Works without external AI APIs.
- Easy to automate in CI or content pipelines.

## Before / After

Before (single source):

```text
We shipped a new onboarding flow that cut setup time and improved week-1 activation.
```

After (platform-ready):

- Twitter: short hook, concise body, tight hashtags, direct CTA.
- LinkedIn: professional framing with practical outcome and discussion CTA.
- Reddit: conversational framing with an open-ended question.

## Case study (real workflow)

A two-person SaaS team publishes one product update weekly. They previously rewrote each update manually for Twitter, LinkedIn, and Reddit (about 20-30 minutes total). With this skill they write one source update, run `node generate.js --file update.md --outdir posts`, and review 3 drafts in under 5 minutes before publishing.
