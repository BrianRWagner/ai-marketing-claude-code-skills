# AI Marketing Skills for Claude Code

**Marketing frameworks that Claude Code actually executes.**

Not guides. Not courses. *Skills* — packaged expertise your AI coding agent loads and follows.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Skills](https://img.shields.io/badge/Skills-16%20Free%20%2B%2010%20Pro-green.svg)](#available-skills)
[![Claude Code](https://img.shields.io/badge/Claude%20Code-Native-blueviolet.svg)](#installation)
[![Also Works](https://img.shields.io/badge/Also%20Works-Codex%20%7C%20ChatGPT%20%7C%20Meta%20Muse%20%7C%20Grok%20%7C%20Cursor-gray.svg)](#compatibility)
[![Updated](https://img.shields.io/badge/Updated-Mar%2014%202026-brightgreen.svg)](./CHANGELOG.md)

> **March 2026 — v3.1:** All 16 free skills support `quick|standard|deep` execution modes. Get fast answers or deep audits from the same skill — no extra prompting. [See what changed →](./CHANGELOG.md)

---

## What Are Agent Skills?

Agent Skills are an [open standard](https://agentskills.ai) for packaging expertise as instructions that AI agents can follow.

**Traditional content:** You read it → You apply it → You forget half of it.

**Agent Skills:** Your agent reads it → Your agent applies it → Every time. Perfectly.

Think of it like giving Claude Code a playbook written by an expert. Instead of prompting from scratch every time, the skill provides the framework, questions, and output format automatically.

---

## Quick Install (Claude Code)

```bash
# Clone the repo
git clone https://github.com/BrianRWagner/ai-marketing-claude-code-skills.git

# Copy skills to Claude Code's skills folder
mkdir -p ~/.claude/skills
cp -r ai-marketing-claude-code-skills/* ~/.claude/skills/
```

That's it. Claude Code will now automatically use these skills when you mention related topics.

---

## Available Skills

### Strategy & Positioning

#### 🎯 Positioning Basics
Core positioning framework for founders and marketers. Clarify who you're for, what you do, and why you're different.

**Use when:** "Help me with positioning", "Who is this for?", "What makes us different?"

→ [positioning-basics/SKILL.md](./positioning-basics/SKILL.md)

---

#### 🔍 AI Discoverability Audit
Audit how a brand appears in AI-powered search and recommendation systems (ChatGPT, Perplexity, Claude, Gemini).

**Use when:** "How do I show up in ChatGPT?", "AI search visibility", "AEO audit"

→ [ai-discoverability-audit/SKILL.md](./ai-discoverability-audit/SKILL.md)

---

#### 📚 Marketing Principles
Apply timeless marketing and business principles from the masters (Drucker, Ogilvy, Godin, Buffett, Munger, Bezos, Jobs).

**Use when:** "First principles thinking", "Should I do X?", "What would work here?", strategic decisions

→ [marketing-principles/SKILL.md](./marketing-principles/SKILL.md)

---

### Content & Authority

#### 💼 LinkedIn Authority Builder
Build a LinkedIn content system for thought leadership. Positioning, content pillars, formats, and posting rhythm.

**Use when:** "LinkedIn strategy", "Build my presence", "Content system", "Thought leadership"

→ [linkedin-authority-builder/SKILL.md](./linkedin-authority-builder/SKILL.md)

---

#### 💡 Content Idea Generator
Generate content ideas based on your positioning and ICP. Multiple frameworks for different content types.

**Use when:** "What should I post?", "Content ideas", "Blog topics", "LinkedIn content"

→ [content-idea-generator/SKILL.md](./content-idea-generator/SKILL.md)

---

#### 🎙️ Voice Extractor
Extract and document someone's authentic writing voice from samples. Create voice guides for AI training or ghostwriting.

**Use when:** "Capture my voice", "Voice guide", "Write like me", "Train AI on my style"

→ [voice-extractor/SKILL.md](./voice-extractor/SKILL.md)

---

#### 📱 Social Card Generator
Generate platform-specific social post variants (Twitter, LinkedIn, Reddit) from one source input. No API dependency.

**Use when:** "Turn this into social posts", "Repurpose for Twitter/LinkedIn", "Create social variants"

→ [social-card-gen/SKILL.md](./social-card-gen/SKILL.md)

---

### Research & Intelligence

#### 🔗 LinkedIn Profile Optimizer
Audit and rewrite your LinkedIn profile to attract the right people. Scores each section, rewrites headline and about copy, and includes an AI visibility checklist for ChatGPT/Perplexity/Claude search.

**Use when:** "Optimize my LinkedIn", "Rewrite my about section", "LinkedIn profile help", "AI search visibility"

→ [linkedin-profile-optimizer/SKILL.md](./linkedin-profile-optimizer/SKILL.md)

---

### Conversion & Sales

#### 📄 Homepage Audit
Quick conversion audit for any homepage or landing page. Get actionable feedback in minutes.

**Use when:** "Review my homepage", "Why isn't my page converting?", "Audit my landing page"

→ [homepage-audit/SKILL.md](./homepage-audit/SKILL.md)

---

#### 📧 Cold Outreach Sequence
Build personalized cold outreach sequences for LinkedIn and email. Research, connection requests, follow-ups, and conversion.

**Use when:** "Cold outreach", "LinkedIn messages", "Prospecting sequence", "Sales emails"

→ [cold-outreach-sequence/SKILL.md](./cold-outreach-sequence/SKILL.md)

---

#### 📊 Case Study Builder
Turn client wins into formatted case studies for proposals, social proof, and sales conversations.

**Use when:** "Write a case study", "Document results", "Client success story", "Build social proof"

→ [case-study-builder/SKILL.md](./case-study-builder/SKILL.md)

---

#### ⭐ Testimonial Collector
Systematically gather and format client testimonials for social proof.

**Use when:** "Get testimonials", "Social proof", "Client quotes", "Build credibility"

→ [testimonial-collector/SKILL.md](./testimonial-collector/SKILL.md)

---

### Productivity & Operations

### Quick Install (any platform)

```bash
git clone https://github.com/BrianRWagner/ai-marketing-claude-code-skills.git
cd ai-marketing-claude-code-skills
bash scripts/install.sh
```

Auto-detects Claude Code, Cursor, and Windsurf. Walks you through the rest.

**Flags:**
```bash
bash scripts/install.sh --all              # install to every detected platform
bash scripts/install.sh --platform=cursor  # specific platform only
bash scripts/install.sh --include-pro      # include pro/ skills (if purchased)
bash scripts/install.sh --dry-run          # preview without writing files
```

### Platform Support

| Platform | Install Location | File Used | Notes |
|----------|-----------------|-----------|-------|
| **Claude Code** | `~/.claude/skills/` | `SKILL.md` | Full detail, all phases |
| **Cursor** | `.cursor/rules/` (project) | `SKILL.md` → `.mdc` | Converted with rule frontmatter |
| **Windsurf** | `.windsurf/rules/` (project) | `SKILL.md` → `.md` | Converted with rule frontmatter |
| **Generic** | `./ai-marketing-skills/` | `SKILL.md` | Plain copy, any tool |


### List Available Skills

```bash
bash scripts/list-skills.sh
```

### Convert to Platform Format

```bash
bash scripts/convert.sh --platform=cursor --output-dir=./.cursor/rules
bash scripts/convert.sh --all   # convert for all platforms into ./converted/
```

---

## Compatibility

| Platform | Status | Notes |
|----------|--------|-------|
| **Claude Code** | ✅ Native | Primary target |
| **OpenAI Codex** | ✅ Compatible | Copy the skill folder into Codex's skills directory (e.g. `~/.agents/skills/`) |
| **GitHub Copilot** | ✅ Compatible | Via .github/skills |
| **Cursor** | ✅ Compatible | Via rules/context |
| **Claude.ai** | ⚠️ Manual | Upload as a skill, or paste SKILL.md |
| **ChatGPT (incl. Dots)** | ⚠️ Manual | Upload or paste SKILL.md into a Project or custom GPT |
| **Meta Muse** | ⚠️ Manual | Paste SKILL.md as the instructions |
| **Grok** | ⚠️ Manual | Paste or upload SKILL.md as the instructions |

> Every skill is plain markdown instructions, so any assistant that can follow a written brief can run it. Claude Code is the native target; the others work by giving the assistant the SKILL.md.

---

## 🔥 Premium Skills (Gumroad)

Full Claude Code editions with structured reasoning phases, self-critique loops, and output precision.

→ [Browse all on Gumroad](https://brianrwagner.gumroad.com)

| Skill | Price | Link |
|-------|-------|------|
| AI Marketing Bundle (all 7) | $49 | [Buy →](https://brianrwagner.gumroad.com/l/brw-cc-marketing-bundle) |
| AI Discoverability Audit v2 | $19 | [Buy →](https://brianrwagner.gumroad.com/l/ai-discoverability-audit) |
| Founder Intelligence | $15 | [Buy →](https://brianrwagner.gumroad.com/l/brw-founder-intelligence) |
| Competitor Intel Brief | $12 | [Buy →](https://brianrwagner.gumroad.com/l/brw-competitor-intel-brief) |
| Morning Brief System | $14 | [Buy →](https://brianrwagner.gumroad.com/l/brw-morning-brief-system) |
| Brand Voice Extractor | $9 | [Buy →](https://brianrwagner.gumroad.com/l/brand-voice-extractor) |
| AI Employee Onboarding | $9 | [Buy →](https://brianrwagner.gumroad.com/l/brw-ai-employee-onboarding) |
| Brand Positioning Audit | $9 | [Buy →](https://brianrwagner.gumroad.com/l/brw-brand-positioning-audit) |
## About

Created by **Brian Wagner** — AI Marketing Architect

15+ years building marketing systems for Fortune 500s and startups. Now packaging that expertise for the AI era.

- 🌐 [brianrwagner.com](https://brianrwagner.com)
- 🐦 [@BrianRWagner](https://twitter.com/BrianRWagner)
- 💼 [LinkedIn](https://linkedin.com/in/brianrwagner)

---

## Contributing

Found an issue? Have an improvement?

1. Fork the repo
2. Make your changes
3. Submit a PR

All contributions welcome. Let's make these skills better together.

---

## License

MIT — Use freely. Attribution appreciated.

---

*Marketing frameworks that Claude Code actually executes.* 🔱
