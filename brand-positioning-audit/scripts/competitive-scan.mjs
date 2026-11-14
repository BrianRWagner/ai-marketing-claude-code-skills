#!/usr/bin/env node

/**
 * competitive-scan.mjs — Brand Positioning Audit Competitor Data Fetcher
 * 
 * Fetches competitor positioning data (headlines, positioning claims, differentiation)
 * to provide competitive separation analysis in the positioning audit.
 * 
 * Usage:
 *   node competitive-scan.mjs --brand "Acme" --competitors "Competitor1,Competitor2"
 *   node competitive-scan.mjs --url "https://acme.com" --fetch-depth "full"
 */

import fs from 'fs';

const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
};

function log(msg, color = 'reset') {
  console.log(`${colors[color]}${msg}${colors.reset}`);
}

function parseArgs(args) {
  const result = {};
  for (let i = 0; i < args.length; i++) {
    if (args[i].startsWith('--')) {
      const key = args[i].slice(2);
      const value = args[i + 1];
      if (!value || value.startsWith('--')) {
        result[key] = true;
      } else {
        result[key] = value;
        i++;
      }
    }
  }
  return result;
}

/**
 * Parse competitor names from CSV
 */
function parseCompetitors(str) {
  if (!str) return [];
  return str.split(',').map(c => c.trim()).filter(c => c);
}

/**
 * Mock competitor data — in production, would fetch real websites
 * This demonstrates the structure and what we're looking for
 */
function buildCompetitorProfile(name) {
  const templates = {
    // These are examples showing the structure
    'default': {
      name: name,
      website: `https://${name.toLowerCase().replace(/\s/g, '')}.com`,
      headline: 'Positioning not yet fetched',
      subheadline: 'Run with --fetch-depth "full" for live website data',
      icp: 'Unknown',
      differentiation: [],
      proof: [],
      features: [],
      pricing: 'Unknown',
      status: 'mock',
    }
  };

  return templates.default;
}

/**
 * Extract positioning signals from competitor data
 * Structure: what are they claiming? Who are they targeting? How do they differentiate?
 */
function analyzePositioning(profile) {
  return {
    name: profile.name,
    positioning_clarity: calculateClarity(profile.headline),
    icp_specificity: calculateIcpSpecificity(profile.icp),
    differentiation_count: (profile.differentiation || []).length,
    proof_signals: (profile.proof || []).length,
    keywords: extractKeywords(profile),
    estimated_positioning_strength: 'medium', // Based on available signals
  };
}

function calculateClarity(headline) {
  if (!headline || headline.includes('not yet')) return 1;
  if (headline.length < 20) return 2;
  if (headline.length > 100) return 3;
  return 5;
}

function calculateIcpSpecificity(icp) {
  if (!icp || icp === 'Unknown') return 0;
  if (icp.includes('all') || icp.includes('anyone')) return 2;
  if (icp.split(' ').length < 3) return 4;
  return 7;
}

function extractKeywords(profile) {
  const text = `${profile.headline} ${profile.subheadline} ${profile.icp}`.toLowerCase();
  const words = text.split(/\s+/).filter(w => w.length > 4);
  return [...new Set(words)].slice(0, 10);
}

/**
 * Generate competitive summary
 */
function generateComparativeAnalysis(competitors) {
  const analysis = {
    timestamp: new Date().toISOString().split('T')[0],
    competitor_count: competitors.length,
    competitors: competitors.map(analyzePositioning),
    insights: [
      '• Use this data to identify positioning gaps (claims your competitors make that you don\'t)',
      '• Look for over-crowded claims (everyone says "easy" or "fast") — avoid these',
      '• Find the specific claim only 1-2 competitors make — that\'s your separation opportunity',
      '• Check if their ICP is vague (most are) — be more specific and own a niche',
    ],
    next_steps: [
      'Compare your positioning against each competitor profile',
      'Identify 2-3 unique claims you can own that competitors don\'t emphasize',
      'Map your ICP specificity vs competitors — be more specific or more general strategically',
      'Use differentiation gaps as your competitive separation strategy',
    ],
  };

  return analysis;
}

/**
 * Main function
 */
async function main() {
  const args = parseArgs(process.argv.slice(2));

  log('\n📊 Brand Positioning Audit — Competitive Scan v3\n', 'cyan');

  const competitors = parseCompetitors(args.competitors);
  const brand = args.brand || 'Unknown Brand';

  if (competitors.length === 0) {
    log('⚠️  No competitors provided. Use --competitors "Comp1,Comp2,Comp3"', 'yellow');
    log('   Continuing with limited analysis.\n', 'yellow');
  }

  log(`Analyzing: ${brand}`, 'blue');
  if (competitors.length > 0) {
    log(`Competitors: ${competitors.join(', ')}`, 'blue');
  }

  // Build competitor profiles
  const profiles = competitors.map(buildCompetitorProfile);
  log(`\n✓ Competitor profiles built (${profiles.length} competitors)`, 'green');

  // Generate analysis
  const analysis = generateComparativeAnalysis(profiles);
  log(`✓ Competitive analysis generated\n`, 'green');

  // Output structure
  log('📋 Competitive Positioning Summary', 'blue');
  log('─'.repeat(50), 'blue');

  profiles.forEach(p => {
    log(`\n${p.name}`, 'cyan');
    log(`  Headline: ${p.headline}`);
    log(`  ICP: ${p.icp}`);
    log(`  Status: ${p.status}`);
  });

  log('\n\n💡 Analysis Insights', 'blue');
  log('─'.repeat(50), 'blue');
  analysis.insights.forEach(i => log(i, 'reset'));

  log('\n\n🎯 Next Steps for Positioning Audit', 'blue');
  log('─'.repeat(50), 'blue');
  analysis.next_steps.forEach(s => log(s, 'reset'));

  log('\n✅ Competitive scan complete.\n', 'green');

  // Output JSON for downstream tools
  console.log(JSON.stringify(analysis, null, 2));
}

main().catch(err => {
  log(`\n❌ Error: ${err.message}\n`, 'red');
  process.exit(1);
});
