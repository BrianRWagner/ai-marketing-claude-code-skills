---
name: youtube-summarizer
description: Automatically fetch YouTube video transcripts, generate structured summaries, and send full transcripts to messaging platforms. Detects YouTube URLs and provides metadata, key insights, and downloadable transcripts.
version: 2.0.0
author: abe238
tags: [youtube, transcription, summarization, video, telegram]
---

**Platform:** OpenClaw (token-optimized)

## When to Activate

User shares a YouTube URL (youtube.com/watch, youtu.be, youtube.com/shorts) or asks to summarize/transcribe a YouTube video.

## Mode

| Mode | Output | Use when |
|------|--------|----------|
| `quick` | 3-bullet TL;DR + single key takeaway | Fast consumption |
| `standard` | Full summary: thesis + insights + takeaway | Learning, research |
| `deep` | Full summary + chapter breakdown + content repurposing opportunities | Turn video into content asset |

## Dependency

MCP YouTube Transcript server at `/root/clawd/mcp-server-youtube-transcript`

Install if missing:
```bash
cd /root/clawd && git clone https://github.com/kimtaeyoon83/mcp-server-youtube-transcript.git
cd mcp-server-youtube-transcript && npm install && npm run build
```

## Workflow

**1. Extract video ID** from URL patterns:
- `youtube.com/watch?v=VIDEO_ID`
- `youtu.be/VIDEO_ID`
- `youtube.com/shorts/VIDEO_ID`

**2. Fetch transcript:**
```bash
cd /root/clawd/mcp-server-youtube-transcript && node --input-type=module -e "
import { getSubtitles } from './dist/youtube-fetcher.js';
const result = await getSubtitles({ videoID: 'VIDEO_ID', lang: 'en' });
console.log(JSON.stringify(result, null, 2));
" > /tmp/yt-transcript.json
```

**3. Parse JSON:**
- `result.metadata.title` — video title
- `result.metadata.author` — channel name
- `result.metadata.viewCount` — view count
- `result.metadata.publishDate` — publish date
- `result.lines` — transcript segments array
- Full text: `result.lines.map(l => l.text).join(' ')`

**4. Generate summary:**

```markdown
📹 **Video:** [title]
📺 **Channel:** [author] | 👁 [viewCount] views | 📅 [publishDate]

**In one sentence:** [thesis]

**Key Insights:**
1. [Insight with timestamp reference]
2. [Insight]
3. [Insight]

**Main Takeaway:** [single most important point]

**Content Angles** (deep mode only):
- [Repurposing opportunity]
```

**5. Save transcript** to `/tmp/[video-id]-transcript.md` (timestamped)

**6. Telegram delivery** (if in OpenClaw context):
```bash
curl -s -X POST "https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendDocument" \
  -F "chat_id=${CHAT_ID}" \
  -F "document=@/tmp/[video-id]-transcript.md"
```

---
*Skill by abe238 | AI Marketing Skills*
