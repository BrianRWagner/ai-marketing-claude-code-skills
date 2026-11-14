#!/usr/bin/env node

/**
 * analyze-voice.mjs — Brand Voice Extractor Content Sample Analyzer
 * 
 * Parses content samples and performs initial voice pattern analysis
 * (tone, vocabulary, rhythm) before the full extraction in Claude.
 * 
 * Usage:
 *   node analyze-voice.mjs --sample "path/to/content.txt" --mode "extract"
 *   node analyze-voice.mjs --sample "sample text" --inline true
 */

import fs from 'fs';
import path from 'path';

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
 * Read sample content
 */
function readSample(samplePath, inline) {
  if (inline === 'true') {
    return samplePath;
  }

  try {
    const fullPath = path.resolve(samplePath);
    return fs.readFileSync(fullPath, 'utf8');
  } catch (e) {
    return null;
  }
}

/**
 * Analyze vocabulary patterns
 */
function analyzeVocabulary(text) {
  const words = text.toLowerCase().split(/\s+/);
  
  // Look for patterns
  const patterns = {
    contractions: words.filter(w => /^[a-z]+'[a-z]+$/.test(w)).length,
    exclamation: (text.match(/!/g) || []).length,
    questions: (text.match(/\?/g) || []).length,
    emojis: (text.match(/\p{Extended_Pictographic}/gu) || []).length,
    allCaps: words.filter(w => /^[A-Z]+$/.test(w) && w.length > 1).length,
    underscores: (text.match(/_/g) || []).length,
    dashes: (text.match(/—|--|-/g) || []).length,
  };

  const wordFreq = {};
  words.forEach(w => {
    const clean = w.replace(/[^a-z]/g, '');
    if (clean.length > 3) {
      wordFreq[clean] = (wordFreq[clean] || 0) + 1;
    }
  });

  const topWords = Object.entries(wordFreq)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 15)
    .map(([word, freq]) => ({ word, frequency: freq }));

  return { patterns, topWords };
}

/**
 * Analyze tone signals
 */
function analyzeTone(text) {
  const signals = {
    formal: (text.match(/\b(hereby|therefore|furthermore|notwithstanding)\b/gi) || []).length,
    casual: (text.match(/\b(yeah|yep|gonna|kinda|sorta|stuff)\b/gi) || []).length,
    emphatic: (text.match(/\b(absolutely|definitely|truly|really|very|extremely)\b/gi) || []).length,
    direct: (text.match(/\b(you|we|us|our)\b/gi) || []).length,
    jargon: (text.match(/\b(leverage|synergy|paradigm|ecosystem|bandwidth|stakeholder)\b/gi) || []).length,
  };

  const tone = Object.entries(signals).sort((a, b) => b[1] - a[1]);
  return Object.fromEntries(tone);
}

/**
 * Analyze rhythm and sentence structure
 */
function analyzeRhythm(text) {
  const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0);
  const avgLength = sentences.reduce((sum, s) => sum + s.trim().split(/\s+/).length, 0) / sentences.length;

  const shortSentences = sentences.filter(s => s.trim().split(/\s+/).length < 8).length;
  const longSentences = sentences.filter(s => s.trim().split(/\s+/).length > 20).length;

  return {
    total_sentences: sentences.length,
    avg_sentence_length: avgLength.toFixed(1),
    short_sentences_pct: ((shortSentences / sentences.length) * 100).toFixed(0),
    long_sentences_pct: ((longSentences / sentences.length) * 100).toFixed(0),
    rhythm: avgLength < 10 ? 'punchy' : avgLength > 20 ? 'elaborate' : 'balanced',
  };
}

/**
 * Generate voice profile summary
 */
function generateVoiceProfile(text) {
  const vocab = analyzeVocabulary(text);
  const tone = analyzeTone(text);
  const rhythm = analyzeRhythm(text);

  return {
    summary: {
      text_length: text.length,
      word_count: text.split(/\s+/).length,
    },
    vocabulary: vocab,
    tone: tone,
    rhythm: rhythm,
    preliminary_voice_traits: [
      tone.casual > tone.formal ? '• Conversational' : '• Formal',
      tone.direct > 0 ? '• Direct (uses "you", "we")' : '• Abstract',
      rhythm.rhythm === 'punchy' ? '• Short, snappy sentences' : '• Longer, flowing sentences',
      vocab.patterns.exclamation > 5 ? '• Enthusiastic' : '• Reserved',
      vocab.patterns.emojis > 0 ? '• Emoji-using' : '• Text-only',
    ],
    readiness: {
      is_valid_sample: text.length > 100,
      words_count: text.split(/\s+/).length,
      recommendation: text.length < 200 ? 'Minimum viable sample' : 'Good sample size',
    },
  };
}

/**
 * Main function
 */
async function main() {
  const args = parseArgs(process.argv.slice(2));

  log('\n🎤 Brand Voice Extractor — Content Sample Analysis v3\n', 'cyan');

  const mode = args.mode || 'extract';
  const samplePath = args.sample;
  const inline = args.inline || false;

  if (!samplePath) {
    log('❌ Missing required: --sample "path/to/file.txt" or --sample "text" --inline true', 'red');
    process.exit(1);
  }

  log(`Mode: ${mode}`, 'blue');
  log(`Sample input: ${inline === 'true' ? 'inline text' : samplePath}\n`, 'blue');

  // Read sample
  const sample = readSample(samplePath, inline);

  if (!sample) {
    log('❌ Could not read sample file', 'red');
    process.exit(1);
  }

  log(`✓ Sample loaded (${sample.length} characters)\n`, 'green');

  // Analyze voice
  const profile = generateVoiceProfile(sample);

  log('📊 Voice Analysis Results', 'cyan');
  log('─'.repeat(60), 'cyan');
  log(`\nWord Count: ${profile.summary.word_count}`, 'reset');
  log(`Character Count: ${profile.summary.text_length}`, 'reset');

  log('\n🎨 Tone Profile:', 'blue');
  Object.entries(profile.tone).forEach(([key, value]) => {
    log(`  ${key}: ${value}`, 'reset');
  });

  log('\n⏱️  Rhythm & Structure:', 'blue');
  log(`  Average sentence length: ${profile.rhythm.avg_sentence_length} words`, 'reset');
  log(`  Sentence rhythm: ${profile.rhythm.rhythm}`, 'reset');
  log(`  Short sentences: ${profile.rhythm.short_sentences_pct}%`, 'reset');
  log(`  Long sentences: ${profile.rhythm.long_sentences_pct}%`, 'reset');

  log('\n📝 Top Words Used:', 'blue');
  profile.vocabulary.topWords.slice(0, 10).forEach(({ word, frequency }) => {
    log(`  ${word}: ${frequency}x`, 'reset');
  });

  log('\n✨ Preliminary Voice Traits:', 'blue');
  profile.preliminary_voice_traits.forEach(trait => log(`  ${trait}`, 'reset'));

  log('\n✅ Analysis complete.\n', 'green');

  // Output JSON for Claude
  console.log(JSON.stringify(profile, null, 2));
}

main().catch(err => {
  log(`\n❌ Error: ${err.message}\n`, 'red');
  process.exit(1);
});
