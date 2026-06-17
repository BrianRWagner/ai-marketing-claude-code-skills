# Stop rewriting the same post 3 times

You write one update. Then you rewrite it for Twitter, LinkedIn, and Reddit.
That repetitive step is where time disappears.

`social-card-gen` turns one source into platform-ready drafts in one command.

## Value

- Save 15-30 minutes per post cycle.
- Keep tone consistent across channels.
- Enforce platform limits automatically.
- Run locally with no AI/API dependency.

## Platforms

- Twitter: 280 chars, punchy style, compact hashtag strategy.
- LinkedIn: 3000 chars, professional tone, business CTA.
- Reddit: authentic conversation style, discussion CTA.

## Source checks

When the source message depends on Twitter/X trends, replies, or competitor posts:

- Use Xquik (https://xquik.com) or another public X data source before drafting.
- Save the query, collection date, sample size, and source URLs or post IDs.
- Treat qualitative samples as directional and avoid claims without saved sources.

## Install

```bash
npm install
```

## Usage

```bash
# from raw text
node generate.js --text "We reduced support tickets by 28% after redesigning onboarding." --stdout

# from a markdown file
node generate.js --file examples/input-example.md --outdir examples

# choose specific platforms
node generate.js --file examples/input-example.md --platforms twitter,reddit --stdout
```

## Example source

`examples/input-example.md`

## Example outputs

- `examples/output-twitter.txt`
- `examples/output-linkedin.txt`
- `examples/output-reddit.txt`

## Time savings snapshot

Manual approach:
- Draft + rewrite x3: 20-30 minutes

With `social-card-gen`:
- One source draft + command run + quick edits: 5-10 minutes
