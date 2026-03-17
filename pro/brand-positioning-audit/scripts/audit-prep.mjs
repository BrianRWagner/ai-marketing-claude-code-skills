#!/usr/bin/env node
/**
 * Brand Positioning Audit v3 — Pre-flight Prep Script
 * Fetches a brand's homepage copy and prepares it for scoring.
 * Extracts key positioning elements so Claude can score accurately.
 * 
 * Usage: node audit-prep.mjs <url> [competitor_url]
 * Output: Structured text extract ready for Claude's 6-dimension scoring
 */

import { createRequire } from 'module';

const require = createRequire(import.meta.url);

// Try to use built-in fetch (Node 18+) or fall back to guidance
const hasFetch = typeof fetch !== 'undefined';

async function fetchPage(url) {
  if (!hasFetch) {
    throw new Error('Node 18+ required for built-in fetch. Run: node --version to check.');
  }
  
  // Normalize URL
  if (!url.startsWith('http')) url = `https://${url}`;
  
  const response = await fetch(url, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (compatible; BrandAuditBot/3.0)',
      'Accept': 'text/html,application/xhtml+xml',
    },
    signal: AbortSignal.timeout(10000),
  });
  
  if (!response.ok) {
    throw new Error(`HTTP ${response.status}: ${response.statusText}`);
  }
  
  return response.text();
}

function extractTextContent(html) {
  // Remove scripts, styles, nav, footer
  let clean = html
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, ' ')
    .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, ' ')
    .replace(/<nav\b[^<]*(?:(?!<\/nav>)<[^<]*)*<\/nav>/gi, ' ')
    .replace(/<footer\b[^<]*(?:(?!<\/footer>)<[^<]*)*<\/footer>/gi, ' ')
    .replace(/<header\b[^<]*(?:(?!<\/header>)<[^<]*)*<\/header>/gi, ' ');
  
  // Extract text from remaining HTML
  clean = clean
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, ' ')
    .trim();
  
  return clean;
}

function extractHeroSection(html) {
  // Look for common hero patterns
  const heroPatterns = [
    /<h1[^>]*>(.*?)<\/h1>/is,
    /class="[^"]*hero[^"]*"[^>]*>.*?<h[12][^>]*>(.*?)<\/h[12]>/is,
    /class="[^"]*headline[^"]*"[^>]*>(.*?)<\/[^>]+>/is,
  ];
  
  for (const pattern of heroPatterns) {
    const match = html.match(pattern);
    if (match) {
      const text = match[1].replace(/<[^>]+>/g, '').trim();
      if (text.length > 5 && text.length < 200) return text;
    }
  }
  return null;
}

function extractSubheadline(html) {
  const patterns = [
    /<h2[^>]*class="[^"]*hero[^"]*"[^>]*>(.*?)<\/h2>/is,
    /<p[^>]*class="[^"]*subtitle[^"]*"[^>]*>(.*?)<\/p>/is,
    /<p[^>]*class="[^"]*subhead[^"]*"[^>]*>(.*?)<\/p>/is,
    /<p[^>]*class="[^"]*tagline[^"]*"[^>]*>(.*?)<\/p>/is,
  ];
  
  for (const pattern of patterns) {
    const match = html.match(pattern);
    if (match) {
      const text = match[1].replace(/<[^>]+>/g, '').trim();
      if (text.length > 10 && text.length < 300) return text;
    }
  }
  return null;
}

function extractCTAText(html) {
  const ctaPatterns = [
    /<a[^>]*class="[^"]*cta[^"]*"[^>]*>(.*?)<\/a>/gi,
    /<button[^>]*class="[^"]*cta[^"]*"[^>]*>(.*?)<\/button>/gi,
    /<a[^>]*class="[^"]*btn[^"]*primary[^"]*"[^>]*>(.*?)<\/a>/gi,
    /<button[^>]*class="[^"]*primary[^"]*"[^>]*>(.*?)<\/button>/gi,
  ];
  
  const ctas = [];
  for (const pattern of ctaPatterns) {
    let match;
    while ((match = pattern.exec(html)) !== null) {
      const text = match[1].replace(/<[^>]+>/g, '').trim();
      if (text.length > 1 && text.length < 80) ctas.push(text);
    }
  }
  return [...new Set(ctas)].slice(0, 5);
}

function findPositioningLanguage(text) {
  // Extract sentences that contain key positioning signals
  const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 20 && s.trim().length < 200);
  
  const positioningKeywords = [
    'only', 'first', 'fastest', 'best', 'unlike', 'without', 'instead',
    'for (teams|companies|founders|developers|marketers)',
    'designed for', 'built for', 'made for',
    'platform', 'tool', 'solution', 'software',
    'helps you', 'lets you', 'enables you', 'allows you',
    'more than', 'better than', 'vs\\.',
  ];
  
  const pattern = new RegExp(positioningKeywords.join('|'), 'i');
  return sentences.filter(s => pattern.test(s)).slice(0, 8);
}

function extractProofElements(text) {
  const proof = {
    statistics: [],
    socialProof: [],
    logos: false,
    testimonials: false,
  };
  
  // Numbers with context
  const numberPattern = /\b(\d[\d,]*[\d])\s*([\+%]?\s*(?:users?|customers?|companies|teams|people|clients|subscribers|downloads|reviews?|stars?|out of 5|\+))/gi;
  let match;
  while ((match = numberPattern.exec(text)) !== null) {
    proof.statistics.push(`${match[1]}${match[2]}`);
  }
  
  // Social proof language
  if (text.match(/trusted by|used by|loved by|rated \d/i)) {
    proof.socialProof.push('Social proof language present');
  }
  if (text.match(/testimonial|says|said|according to|quote/i)) {
    proof.testimonials = true;
  }
  if (text.match(/logos?|customers include|join .{1,50} companies/i)) {
    proof.logos = true;
  }
  
  return proof;
}

function scorePositioningHints(data) {
  // Pre-score hints (not final Claude scores — these are signals)
  const hints = {};
  
  // ICP Clarity
  if (data.icpLanguage.length > 0) {
    hints.icpClarity = 'Has targeting language — Claude: check specificity';
  } else {
    hints.icpClarity = '⚠️ No "for [specific audience]" language found — likely weak ICP score';
  }
  
  // Value Clarity
  if (data.heroHeadline) {
    const hasOutcome = /\b(save|reduce|increase|grow|cut|eliminate|double|triple|automate|stop|never)\b/i.test(data.heroHeadline);
    hints.valueClarity = hasOutcome 
      ? 'Hero headline contains outcome verb — Claude: check specificity'
      : '⚠️ Hero headline may lack concrete outcome — check carefully';
  }
  
  // Differentiation
  const hasDiff = data.positioningLanguage.some(s => /only|unlike|instead|without|vs\./i.test(s));
  hints.differentiation = hasDiff
    ? 'Differentiation language found — Claude: test if competitor could say the same'
    : '⚠️ No competitive differentiation language found — likely weak differentiation score';
  
  // Proof
  if (data.proof.statistics.length > 0) {
    hints.proofCredibility = `${data.proof.statistics.length} specific numbers found — Claude: rate specificity`;
  } else {
    hints.proofCredibility = '⚠️ No specific numbers found — likely assertion-only positioning';
  }
  
  return hints;
}

async function analyzeUrl(url, label) {
  console.error(`Fetching: ${url}...`);
  
  try {
    const html = await fetchPage(url);
    const text = extractTextContent(html);
    
    const heroHeadline = extractHeroSection(html);
    const subheadline = extractSubheadline(html);
    const ctas = extractCTAText(html);
    const positioningLanguage = findPositioningLanguage(text);
    const proof = extractProofElements(text);
    
    // Extract "for X" language
    const icpPattern = /\bfor\s+([\w\s,]{2,40}(?:teams?|companies|businesses|founders?|developers?|marketers?|agencies|startups?|enterprises?))/gi;
    const icpLanguage = [];
    let m;
    while ((m = icpPattern.exec(text)) !== null) {
      icpLanguage.push(m[0].trim());
    }
    
    const data = {
      url,
      label,
      heroHeadline: heroHeadline || '(not detected — paste manually)',
      subheadline: subheadline || '(not detected — paste manually)',
      ctas: ctas.length > 0 ? ctas : ['(not detected)'],
      icpLanguage: [...new Set(icpLanguage)].slice(0, 5),
      positioningLanguage: positioningLanguage.slice(0, 8),
      proof,
      wordCount: text.split(/\s+/).length,
    };
    
    data.hints = scorePositioningHints(data);
    
    return data;
  } catch (err) {
    return { url, label, error: err.message };
  }
}

function formatReport(brands) {
  const lines = [
    '# Brand Positioning Audit — Pre-flight Report',
    `*Generated: ${new Date().toISOString().split('T')[0]}*`,
    '',
    '**Instructions for Claude:** Use this structured extract as your evidence base.',
    'Score each dimension 1-10 based on the evidence below.',
    'Quote verbatim copy as evidence — do not score from memory or assumptions.',
    '',
    '---',
    ''
  ];
  
  for (const brand of brands) {
    lines.push(`## ${brand.label || brand.url}`);
    lines.push(`**URL:** ${brand.url}`);
    lines.push('');
    
    if (brand.error) {
      lines.push(`❌ Error fetching page: ${brand.error}`);
      lines.push('**Manual fallback:** Ask user to paste homepage copy and About page copy.');
      lines.push('');
      continue;
    }
    
    lines.push(`**Page word count:** ~${brand.wordCount}`);
    lines.push('');
    
    lines.push('### Verbatim Positioning Copy');
    lines.push('');
    lines.push(`**Hero headline:** "${brand.heroHeadline}"`);
    lines.push(`**Subheadline:** "${brand.subheadline}"`);
    lines.push(`**Primary CTAs:** ${brand.ctas.map(c => `"${c}"`).join(', ')}`);
    
    if (brand.icpLanguage.length > 0) {
      lines.push('');
      lines.push('**ICP language found:**');
      for (const lang of brand.icpLanguage) lines.push(`- "${lang}"`);
    }
    
    if (brand.positioningLanguage.length > 0) {
      lines.push('');
      lines.push('**Positioning language (key sentences):**');
      for (const lang of brand.positioningLanguage) lines.push(`- "${lang.trim()}"`);
    }
    
    lines.push('');
    lines.push('### Proof Elements');
    if (brand.proof.statistics.length > 0) {
      lines.push(`- Specific numbers: ${brand.proof.statistics.slice(0, 6).join(', ')}`);
    } else {
      lines.push('- No specific numbers found on page');
    }
    lines.push(`- Social proof language: ${brand.proof.socialProof.length > 0 ? brand.proof.socialProof.join(', ') : 'None detected'}`);
    lines.push(`- Testimonials: ${brand.proof.testimonials ? 'Yes' : 'Not detected'}`);
    lines.push(`- Logo wall: ${brand.proof.logos ? 'Yes' : 'Not detected'}`);
    
    lines.push('');
    lines.push('### Pre-Score Signals');
    for (const [dim, hint] of Object.entries(brand.hints || {})) {
      lines.push(`- **${dim}:** ${hint}`);
    }
    
    lines.push('');
    lines.push('---');
    lines.push('');
  }
  
  lines.push('## Audit Instructions');
  lines.push('');
  lines.push('Score each dimension using the verbatim copy above as evidence.');
  lines.push('Cite the exact quote that justifies each score.');
  lines.push('Do not score from inference — only from what is present (or absent) above.');
  
  return lines.join('\n');
}

// ── Main ───────────────────────────────────────────────────────────────────

const args = process.argv.slice(2).filter(a => !a.startsWith('--'));

if (args.length === 0) {
  console.log(`
Brand Positioning Audit — Pre-flight Script

Usage:
  node audit-prep.mjs <brand_url> [competitor_url]

Examples:
  node audit-prep.mjs https://acme.com
  node audit-prep.mjs https://acme.com https://competitor.com

Output:
  Structured extract of positioning copy for Claude to score.
  Pipe to file: node audit-prep.mjs https://acme.com > audit-prep.md
  `);
  process.exit(0);
}

const urls = args.slice(0, 3); // Max 3 URLs
const labels = ['Brand', 'Competitor 1', 'Competitor 2'];

const results = [];
for (let i = 0; i < urls.length; i++) {
  results.push(await analyzeUrl(urls[i], labels[i]));
}

console.log(formatReport(results));
