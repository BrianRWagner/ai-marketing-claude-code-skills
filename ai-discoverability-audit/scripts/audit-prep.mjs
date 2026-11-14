#!/usr/bin/env node

/**
 * audit-prep.mjs — AI Discoverability Audit Prerequisite Checker
 * 
 * Validates inputs, checks environment, and preps audit context
 * before running the full Signal Audit v3.
 * 
 * Usage:
 *   node audit-prep.mjs --brand "Acme Corp" --url "https://acme.com" --icp "SaaS founders"
 *   node audit-prep.mjs --check-urls ["https://acme.com", "https://competitor1.com"]
 */

import fs from 'fs';
import path from 'path';

// Colors for CLI output
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
};

function log(msg, color = 'reset') {
  console.log(`${colors[color]}${msg}${colors.reset}`);
}

/**
 * Parse CLI arguments
 */
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
 * Validate URL format and accessibility
 */
async function validateURL(url) {
  try {
    const urlObj = new URL(url);
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
      return { valid: false, reason: 'URL must start with http:// or https://' };
    }
    return { valid: true };
  } catch (e) {
    return { valid: false, reason: `Invalid URL format: ${e.message}` };
  }
}

/**
 * Check for prior audit files
 */
function checkPriorAudits(brand) {
  const auditsDir = './audits';
  if (!fs.existsSync(auditsDir)) {
    return { prior: null, message: 'No prior audit history found.' };
  }

  const files = fs.readdirSync(auditsDir);
  const pattern = new RegExp(`ai-discoverability-${brand.replace(/\s/g, '-')}`);
  const prior = files.filter(f => pattern.test(f)).sort().reverse()[0];

  if (prior) {
    const path = `./audits/${prior}`;
    const content = fs.readFileSync(path, 'utf8');
    const scoreMatch = content.match(/Overall Signal Score: (\d+)\/100/);
    return {
      prior: prior,
      path: path,
      score: scoreMatch ? scoreMatch[1] : 'unknown',
      message: `Prior audit found: ${prior} (Score: ${scoreMatch ? scoreMatch[1] + '/100' : 'unknown'})`
    };
  }

  return { prior: null, message: 'This is a fresh audit (no prior history found).' };
}

/**
 * Validate core inputs
 */
function validateInputs(opts) {
  const errors = [];
  const warnings = [];

  // Required fields
  if (!opts.brand) {
    errors.push('Brand name is required (--brand "Brand Name")');
  }
  if (!opts.url) {
    errors.push('Website URL is required (--url "https://example.com")');
  }

  // ICP is optional but recommended
  if (!opts.icp) {
    warnings.push('ICP not provided. Audit will be less precise without audience context.');
  }

  // Competitors optional but recommended
  if (!opts.competitors) {
    warnings.push('No competitors listed. Consider adding --competitors for benchmarking.');
  }

  // Validate URL if provided
  if (opts.url) {
    const urlCheck = validateURL(opts.url);
    if (!urlCheck.valid) {
      errors.push(`URL validation failed: ${urlCheck.reason}`);
    }
  }

  return { errors, warnings };
}

/**
 * Generate audit context file
 */
function generateContext(opts) {
  const timestamp = new Date().toISOString().split('T')[0];
  const contextFile = {
    brand: opts.brand,
    url: opts.url,
    icp: opts.icp || 'Not specified',
    competitors: opts.competitors ? opts.competitors.split(',').map(c => c.trim()) : [],
    mode: opts.mode || 'standard',
    timestamp: timestamp,
    auditId: `audit-${opts.brand.replace(/\s/g, '-')}-${timestamp}`,
  };

  return contextFile;
}

/**
 * Main function
 */
async function main() {
  const args = parseArgs(process.argv.slice(2));

  log('\n🔍 AI Discoverability Audit v3 — Prerequisite Checker\n', 'blue');

  // Validate inputs
  const validation = validateInputs(args);

  if (validation.errors.length > 0) {
    log('❌ Validation Errors:', 'red');
    validation.errors.forEach(e => log(`   • ${e}`, 'red'));
    log('', 'reset');
    process.exit(1);
  }

  if (validation.warnings.length > 0) {
    log('⚠️  Warnings (audit will still run):', 'yellow');
    validation.warnings.forEach(w => log(`   • ${w}`, 'yellow'));
    log('', 'reset');
  }

  // Check prior audits
  const priorCheck = checkPriorAudits(args.brand);
  log(`✓ Audit History: ${priorCheck.message}`, priorCheck.prior ? 'blue' : 'green');

  // Generate context
  const context = generateContext(args);
  log(`✓ Audit Context Generated: ${context.auditId}`, 'green');

  // Output summary
  log('\n📋 Ready to Start Audit', 'green');
  log(`   Brand: ${context.brand}`);
  log(`   URL: ${context.url}`);
  log(`   ICP: ${context.icp}`);
  log(`   Mode: ${context.mode}`);
  if (context.competitors.length > 0) {
    log(`   Competitors: ${context.competitors.join(', ')}`);
  }

  // Check for re-audit
  if (priorCheck.prior) {
    log(`\n🔄 Re-Audit Detected`, 'blue');
    log(`   This audit will compare against: ${priorCheck.prior}`);
    log(`   Prior score: ${priorCheck.score}/100`);
  }

  log('\n✅ All prerequisites met. Ready to run audit.\n', 'green');

  // Output context as JSON for downstream consumption
  console.log(JSON.stringify(context, null, 2));
}

main().catch(err => {
  log(`\n❌ Error: ${err.message}\n`, 'red');
  process.exit(1);
});
