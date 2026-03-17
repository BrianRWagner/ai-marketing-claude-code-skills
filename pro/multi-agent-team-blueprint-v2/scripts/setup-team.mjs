#!/usr/bin/env node
/**
 * Multi-Agent Team Blueprint v3 — Team Setup Script
 * Creates workspace structure, queue files, and validates folder layout
 * Usage: node setup-team.mjs [workspace_dir] [--starter=A|B|C|full]
 */

import { mkdirSync, writeFileSync, existsSync, readFileSync } from 'fs';
import { join } from 'path';

const args = process.argv.slice(2);
const workspace = args.find(a => !a.startsWith('--')) || process.cwd();
const starterArg = args.find(a => a.startsWith('--starter='));
const starter = starterArg ? starterArg.split('=')[1].toUpperCase() : null;

console.log('\n🔱 Multi-Agent Team Blueprint v3 — Setup');
console.log('==========================================');
console.log(`Workspace: ${workspace}`);
console.log(`Starter kit: ${starter || 'interactive'}`);
console.log('');

// ── Starter Kit Selection ──────────────────────────────────────────────────

const STARTER_KITS = {
  A: { name: 'Content Machine', agents: ['Chief of Staff', 'Scribe', 'Proof'] },
  B: { name: 'Research Engine', agents: ['Chief of Staff', 'Radar', 'Neptune'] },
  C: { name: 'Operations Hub', agents: ['Chief of Staff', 'Watch', 'Atlas'] },
  FULL: { name: 'Full Team (10 agents)', agents: ['Chief of Staff', 'Scribe', 'Forge', 'Proof', 'Radar', 'Neptune', 'Apollo', 'Atlas', 'Watch', 'Iris'] }
};

let selectedKit = null;
if (starter && STARTER_KITS[starter]) {
  selectedKit = STARTER_KITS[starter];
} else {
  console.log('Available starter kits:');
  for (const [key, kit] of Object.entries(STARTER_KITS)) {
    console.log(`  ${key}: ${kit.name} (${kit.agents.join(', ')})`);
  }
  console.log('');
  console.log('Run with --starter=A, B, C, or FULL');
  console.log('Defaulting to Kit A (Content Machine)...');
  selectedKit = STARTER_KITS.A;
}

console.log(`📋 Selected: ${selectedKit.name}`);
console.log(`👥 Agents: ${selectedKit.agents.join(', ')}`);
console.log('');

// ── Directory Structure ────────────────────────────────────────────────────

const dirs = [
  'memory',
  'memory/archive',
  'memory/meetings',
  'drafts',
  'ready-to-post/linkedin',
  'ready-to-post/x',
  'queues',
  'research',
  'pipeline',
  'workspace',
];

console.log('── Creating directory structure ──────────────────────────────');
for (const dir of dirs) {
  const fullPath = join(workspace, dir);
  if (!existsSync(fullPath)) {
    mkdirSync(fullPath, { recursive: true });
    console.log(`  📁 ${dir}/`);
  } else {
    console.log(`  ⏭️  ${dir}/ exists`);
  }
}

// ── Queue Files ────────────────────────────────────────────────────────────

const TODAY = new Date().toISOString().split('T')[0];

const QUEUE_TEMPLATES = {
  'queues/content.json': {
    description: 'Content ideas for Scribe to draft',
    items: [
      {
        id: 'content-001',
        priority: 'high',
        task: 'LinkedIn post: [Your first content idea here]',
        context: 'Based on recent work or insight',
        platform: 'linkedin',
        assignee: 'scribe',
        status: 'pending',
        createdAt: `${TODAY}T10:00:00Z`
      }
    ]
  },
  'queues/build.json': {
    description: 'Build tasks for Forge',
    items: []
  },
  'queues/review.json': {
    description: 'Items awaiting Proof review',
    items: []
  },
  'queues/intel.json': {
    description: 'Research requests for Radar/Neptune',
    items: []
  }
};

console.log('');
console.log('── Creating queue files ──────────────────────────────────────');
for (const [file, data] of Object.entries(QUEUE_TEMPLATES)) {
  const fullPath = join(workspace, file);
  if (!existsSync(fullPath)) {
    writeFileSync(fullPath, JSON.stringify(data, null, 2));
    console.log(`  📄 ${file}`);
  } else {
    console.log(`  ⏭️  ${file} exists`);
  }
}

// ── ORG-STRUCTURE.md ───────────────────────────────────────────────────────

const orgPath = join(workspace, 'ORG-STRUCTURE.md');
if (!existsSync(orgPath)) {
  const orgContent = `# Team Org Structure

**Starter Kit:** ${selectedKit.name}
**Active Agents:** ${selectedKit.agents.join(', ')}
**Set up:** ${TODAY}

## Org Chart

\`\`\`
HUMAN (CEO)
  └── 🔱 Chief of Staff (Main Agent) — Premium model
${selectedKit.agents.filter(a => a !== 'Chief of Staff').map(a => `        ├── ${a}`).join('\n')}
\`\`\`

## Communication Rules
1. ALL content goes through Proof before publishing (if Proof is in your kit)
2. Agents escalate to Chief of Staff when uncertain
3. Chief of Staff delegates, human only sees summaries
4. Queue files are shared state — only assigned agent changes status

## Quality Gates
- Proof score < 7 → rejected back to Scribe with specific feedback
- Forge output → must commit to git and include README
- Radar → flag anything needing deep research to Neptune

## Model Routing
| Agent | Model Tier | Why |
|-------|-----------|-----|
| Chief of Staff | Premium | Strategy, judgment |
| Scribe | Mid-tier | Creative but structured |
| Forge | Free (Codex) | Use ChatGPT Pro / free tier |
| Proof | Mid-tier | QA needs judgment |
| Radar | Mid-tier | Research + synthesis |
| Neptune | Free (Gemini) | Deep research — use free quota |
| Apollo | Mid-tier | Structured sales tasks |
| Atlas | Mid-tier | Ops, dashboards |
| Watch | Mid-tier | Email reading |
| Iris | Cheapest | Simple classification |
`;
  writeFileSync(orgPath, orgContent);
  console.log('');
  console.log('── Team configuration ────────────────────────────────────────');
  console.log(`  📄 ORG-STRUCTURE.md`);
}

// ── heartbeat-state.json ───────────────────────────────────────────────────

const heartbeatPath = join(workspace, 'memory/heartbeat-state.json');
if (!existsSync(heartbeatPath)) {
  writeFileSync(heartbeatPath, JSON.stringify({
    lastChecks: { email: null, calendar: null, weather: null, projects: null }
  }, null, 2));
  console.log(`  📄 memory/heartbeat-state.json`);
}

// ── Cost Estimate ──────────────────────────────────────────────────────────

const COST_ESTIMATES = {
  'Chief of Staff': { low: 15, high: 40 },
  'Scribe': { low: 5, high: 15 },
  'Forge': { low: 0, high: 5 },
  'Proof': { low: 3, high: 8 },
  'Radar': { low: 5, high: 12 },
  'Neptune': { low: 0, high: 3 },
  'Apollo': { low: 3, high: 8 },
  'Atlas': { low: 3, high: 8 },
  'Watch': { low: 5, high: 10 },
  'Iris': { low: 1, high: 3 }
};

let totalLow = 0;
let totalHigh = 0;
for (const agent of selectedKit.agents) {
  const cost = COST_ESTIMATES[agent];
  if (cost) {
    totalLow += cost.low;
    totalHigh += cost.high;
  }
}

console.log('');
console.log('── Cost Estimate ─────────────────────────────────────────────');
for (const agent of selectedKit.agents) {
  const cost = COST_ESTIMATES[agent];
  if (cost) {
    console.log(`  ${agent}: $${cost.low}-${cost.high}/month`);
  }
}
console.log(`  ─────────────────────────────`);
console.log(`  Total: $${totalLow}-${totalHigh}/month`);

// ── Validation ─────────────────────────────────────────────────────────────

console.log('');
console.log('── Validation ────────────────────────────────────────────────');
const required = ['queues/content.json', 'queues/build.json', 'memory', 'drafts', 'ready-to-post'];
let pass = 0;
let fail = 0;
for (const item of required) {
  if (existsSync(join(workspace, item))) {
    console.log(`  ✅ ${item}`);
    pass++;
  } else {
    console.log(`  ❌ ${item} MISSING`);
    fail++;
  }
}

console.log('');
if (fail === 0) {
  console.log('✅ Team workspace ready!');
  console.log('');
  console.log('Next steps:');
  console.log('  1. Copy cron templates from SKILL.md into your cron config');
  console.log('  2. Update queues/content.json with your first content ideas');
  console.log('  3. Deploy Week 1 agents — start with your starter kit');
  console.log('  4. Milestone: first autonomous output within 24h');
} else {
  console.log(`❌ ${fail} items missing. Re-run this script.`);
}
console.log('');
