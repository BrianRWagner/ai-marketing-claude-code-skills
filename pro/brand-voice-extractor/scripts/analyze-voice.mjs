#!/usr/bin/env node
/**
 * Brand Voice Extractor v3 — Voice Sample Analyzer
 * Pre-processes content samples before Claude extracts the voice profile.
 * Outputs a structured analysis report so Claude focuses on what matters.
 * 
 * Usage: node analyze-voice.mjs <file_or_dir> [file2] [file3] ...
 * Or:    node analyze-voice.mjs --stdin (pipe content directly)
 */

import { readFileSync, existsSync, readdirSync, statSync } from 'fs';
import { join, extname, basename } from 'path';
import { createInterface } from 'readline';

// ── Text Analysis Functions ────────────────────────────────────────────────

function getSentences(text) {
  return text.split(/(?<=[.!?])\s+/).filter(s => s.trim().length > 10);
}

function getWords(text) {
  return text.match(/\b\w+\b/g) || [];
}

function avgWordsPerSentence(text) {
  const sentences = getSentences(text);
  if (sentences.length === 0) return 0;
  const lengths = sentences.map(s => getWords(s).length);
  return Math.round(lengths.reduce((a, b) => a + b, 0) / lengths.length);
}

function sentenceLengthVariation(text) {
  const sentences = getSentences(text);
  if (sentences.length < 3) return null;
  const lengths = sentences.map(s => getWords(s).length);
  const avg = lengths.reduce((a, b) => a + b, 0) / lengths.length;
  const variance = lengths.reduce((s, l) => s + Math.pow(l - avg, 2), 0) / lengths.length;
  const cv = Math.sqrt(variance) / avg;
  return Math.round(cv * 100) / 100;
}

function detectContractions(text) {
  const contractions = text.match(/\b(it's|I'm|I've|I'll|I'd|you're|you've|you'll|don't|won't|can't|isn't|aren't|wasn't|weren't|hasn't|haven't|hadn't|didn't|doesn't|wouldn't|couldn't|shouldn't|we're|we've|we'll|they're|they've|they'll|that's|there's|here's|let's|who's|what's)\b/gi) || [];
  return contractions.length;
}

function detectFragments(text) {
  const sentences = getSentences(text);
  return sentences.filter(s => getWords(s).length <= 5).length;
}

function detectPersonalPronouns(text) {
  const firstPerson = (text.match(/\b(I|I've|I'm|I'll|I'd|my|me|we|we've|we're|our)\b/gi) || []).length;
  const secondPerson = (text.match(/\b(you|you've|you're|your|you'll)\b/gi) || []).length;
  return { firstPerson, secondPerson };
}

function extractTransitionPhrases(text) {
  const patterns = [
    /here'?s the thing[,.]?/gi,
    /the (reality|truth|thing) is[,:]?/gi,
    /what that means is[,:]?/gi,
    /but here'?s (the thing|what)[,:]?/gi,
    /so here'?s (the thing|what)[,:]?/gi,
    /the (bottom|key|real) (line|point|question)[,:]?/gi,
    /let me be (direct|honest|clear)[,:]?/gi,
    /the (honest|real) answer[,:]?/gi,
    /think about it[,:]?/gi,
    /here'?s (why|how|what)[,:]?/gi,
  ];
  
  const found = [];
  for (const pattern of patterns) {
    const matches = text.match(pattern) || [];
    if (matches.length > 0) {
      found.push(...[...new Set(matches.map(m => m.trim()))]);
    }
  }
  return found.slice(0, 10);
}

function detectFormalitySignals(text) {
  const formal = (text.match(/\b(moreover|furthermore|additionally|consequently|therefore|thus|hence|accordingly|subsequently|nevertheless|notwithstanding|herein|thereof)\b/gi) || []).length;
  const casual = (text.match(/\b(yeah|yep|nope|gonna|wanna|kinda|sorta|stuff|things|get|got|hey|ok|okay|right\?|cool)\b/gi) || []).length;
  const contractionCount = detectContractions(text);
  
  return { formal, casual, contractions: contractionCount };
}

function detectConfidenceLevel(text) {
  const hedging = (text.match(/\b(maybe|perhaps|might|could|possibly|arguably|seemingly|somewhat|relatively|fairly|rather|quite|sort of|kind of|it seems|it appears|one might|some would|arguably)\b/gi) || []).length;
  const assertive = (text.match(/\b(is|are|will|always|never|every|definitely|clearly|obviously|absolutely|exactly|precisely|certainly)\b/gi) || []).length;
  return { hedging, assertive, ratio: Math.round((assertive / (hedging + 1)) * 10) / 10 };
}

function detectListUsage(text) {
  const bulletLists = (text.match(/^[\s]*[-*•]\s/mg) || []).length;
  const numberedLists = (text.match(/^[\s]*\d+[.)]\s/mg) || []).length;
  return { bullets: bulletLists, numbered: numberedLists, total: bulletLists + numberedLists };
}

function detectQuestions(text) {
  const questions = text.match(/[^.!?]*\?/g) || [];
  const rhetorical = questions.filter(q => {
    // Check if answered in next 2 sentences
    const idx = text.indexOf(q);
    const after = text.slice(idx + q.length, idx + q.length + 200);
    return after.length > 0; // simplification — flag all questions for review
  });
  return { total: questions.length, examples: questions.slice(0, 3).map(q => q.trim()) };
}

function detectOpeningPatterns(text) {
  const sentences = getSentences(text);
  const openers = sentences.slice(0, Math.min(5, sentences.length)).map(s => {
    const words = getWords(s);
    return words.slice(0, Math.min(5, words.length)).join(' ');
  });
  return openers;
}

function detectVocabularyLevel(text) {
  const words = getWords(text.toLowerCase());
  const complexWords = words.filter(w => w.length > 8).length;
  const totalWords = words.length;
  const ratio = Math.round((complexWords / totalWords) * 100);
  
  let level;
  if (ratio < 15) level = 'Plain/Accessible';
  else if (ratio < 25) level = 'Moderate';
  else level = 'Complex/Technical';
  
  return { level, complexRatio: ratio };
}

// ── Corporate/Committee Voice Detection ───────────────────────────────────

function detectCorporateVoice(text) {
  const flags = [];
  
  const passive = (text.match(/\b(was|were|is|are|been) \w+ed\b/gi) || []).length;
  const passiveRate = Math.round((passive / getSentences(text).length) * 100);
  if (passiveRate > 30) flags.push(`High passive voice (${passiveRate}% of sentences)`);
  
  const hedging = detectConfidenceLevel(text).hedging;
  const hedgeRate = Math.round((hedging / (text.split(/\s+/).length)) * 100);
  if (hedgeRate > 5) flags.push(`Heavy hedging language (${hedgerate}% of words)`);
  
  const noOpinions = !text.match(/\b(I (think|believe|know|found|saw|learned)|in my (experience|opinion|view))\b/gi);
  if (noOpinions) flags.push('No personal opinions or first-person perspective');
  
  return flags;
}

// ── Main Analysis ─────────────────────────────────────────────────────────

async function analyzeText(text, label) {
  const wordCount = getWords(text).length;
  
  if (wordCount < 100) {
    return { label, wordCount, warning: 'Too short for reliable analysis (<100 words)' };
  }
  
  const avgSentLen = avgWordsPerSentence(text);
  const sentVariation = sentenceLengthVariation(text);
  const pronouns = detectPersonalPronouns(text);
  const formality = detectFormalitySignals(text);
  const confidence = detectConfidenceLevel(text);
  const lists = detectListUsage(text);
  const transitions = extractTransitionPhrases(text);
  const questions = detectQuestions(text);
  const openers = detectOpeningPatterns(text);
  const vocab = detectVocabularyLevel(text);
  const corporate = detectCorporateVoice(text);
  const fragments = detectFragments(text);
  
  // Formality score: 0 = very casual, 10 = very formal
  const formalityScore = Math.min(10, Math.max(0,
    5 
    + (formality.formal * 0.5) 
    - (formality.contractions * 0.3) 
    - (formality.casual * 0.4)
    + (vocab.complexRatio * 0.05)
  ));
  
  // Voice authenticity markers
  const authenticityScore = Math.min(10, Math.max(0,
    5
    + (pronouns.firstPerson > 5 ? 2 : 0)
    + (formality.contractions > 3 ? 1 : 0)
    + (transitions.length > 2 ? 1 : 0)
    + (fragments > 1 ? 0.5 : 0)
    - (corporate.length * 1.5)
  ));
  
  return {
    label,
    wordCount,
    metrics: {
      avgSentenceLength: avgSentLen,
      sentenceVariation: sentVariation,
      fragments,
      formalityScore: Math.round(formalityScore * 10) / 10,
      formalityLabel: formalityScore > 7 ? 'Formal' : formalityScore > 4 ? 'Moderate' : 'Casual',
      authenticityScore: Math.round(authenticityScore * 10) / 10,
      vocabularyLevel: vocab.level,
    },
    signals: {
      firstPersonCount: pronouns.firstPerson,
      secondPersonCount: pronouns.secondPerson,
      contractionCount: formality.contractions,
      hedgingCount: confidence.hedging,
      assertiveRatio: confidence.ratio,
      listUsage: lists,
      questionCount: questions.total,
      questionExamples: questions.examples,
    },
    patterns: {
      transitionPhrases: transitions,
      openingPatterns: openers,
    },
    warnings: [
      ...corporate,
      ...(wordCount < 300 ? ['Sample < 300 words — add more content for reliable profile'] : []),
      ...(sentVariation !== null && sentVariation < 0.2 ? ['Low sentence variation — monotone rhythm detected'] : []),
    ]
  };
}

function formatReport(analyses) {
  const lines = [
    '# Voice Sample Analysis Report',
    `*Generated: ${new Date().toISOString().split('T')[0]}*`,
    `*Samples analyzed: ${analyses.length}*`,
    ''
  ];
  
  const totalWords = analyses.reduce((s, a) => s + (a.wordCount || 0), 0);
  lines.push(`**Total content:** ${totalWords} words`);
  
  if (totalWords < 500) {
    lines.push('');
    lines.push('⚠️ **Warning:** Total content < 500 words. Voice profile may be too narrow.');
    lines.push('Request more samples before proceeding — at least 3 pieces, 500+ words total.');
  }
  
  lines.push('');
  
  for (const analysis of analyses) {
    lines.push(`## Sample: ${analysis.label}`);
    lines.push(`**Words:** ${analysis.wordCount}`);
    
    if (analysis.warning) {
      lines.push(`⚠️ ${analysis.warning}`);
      lines.push('');
      continue;
    }
    
    const m = analysis.metrics;
    const s = analysis.signals;
    const p = analysis.patterns;
    
    lines.push('');
    lines.push('### Metrics');
    lines.push(`- **Avg sentence length:** ${m.avgSentenceLength} words`);
    lines.push(`- **Sentence variation (CV):** ${m.sentenceVariation} ${m.sentenceVariation > 0.5 ? '(varied ✅)' : m.sentenceVariation > 0.3 ? '(moderate)' : '(monotone ⚠️)'}`);
    lines.push(`- **Fragments:** ${m.fragments} short sentences (≤5 words)`);
    lines.push(`- **Formality:** ${m.formalityScore}/10 — ${m.formalityLabel}`);
    lines.push(`- **Authenticity signals:** ${m.authenticityScore}/10`);
    lines.push(`- **Vocabulary:** ${m.vocabularyLevel}`);
    
    lines.push('');
    lines.push('### Voice Signals');
    lines.push(`- First person (I/we): ${s.firstPersonCount} uses`);
    lines.push(`- Second person (you/your): ${s.secondPersonCount} uses`);
    lines.push(`- Contractions: ${s.contractionCount}`);
    lines.push(`- Hedging language: ${s.hedgingCount} instances`);
    lines.push(`- Assertive ratio: ${s.assertiveRatio}x (assertive vs hedging)`);
    lines.push(`- Lists: ${s.listUsage.bullets} bullet + ${s.listUsage.numbered} numbered`);
    lines.push(`- Questions: ${s.questionCount}`);
    
    if (p.transitionPhrases.length > 0) {
      lines.push('');
      lines.push('### Signature Transitions (extract verbatim)');
      for (const phrase of p.transitionPhrases) {
        lines.push(`- "${phrase}"`);
      }
    }
    
    if (p.openingPatterns.length > 0) {
      lines.push('');
      lines.push('### Opening Patterns');
      for (const opener of p.openingPatterns) {
        lines.push(`- "${opener}..."`);
      }
    }
    
    if (analysis.warnings.length > 0) {
      lines.push('');
      lines.push('### ⚠️ Warnings');
      for (const warning of analysis.warnings) {
        lines.push(`- ${warning}`);
      }
    }
    
    lines.push('');
    lines.push('---');
    lines.push('');
  }
  
  // Cross-sample synthesis hints for Claude
  if (analyses.length > 1) {
    const validAnalyses = analyses.filter(a => !a.warning);
    if (validAnalyses.length > 1) {
      lines.push('## Cross-Sample Synthesis Notes (for Claude)');
      lines.push('');
      
      const formalityScores = validAnalyses.map(a => a.metrics.formalityScore);
      const fMax = Math.max(...formalityScores);
      const fMin = Math.min(...formalityScores);
      if (fMax - fMin > 3) {
        lines.push(`⚠️ **Formality inconsistency:** Range ${fMin}-${fMax}/10 across samples. Ask user which direction is correct.`);
      }
      
      const allTransitions = [...new Set(validAnalyses.flatMap(a => a.patterns.transitionPhrases))];
      if (allTransitions.length > 0) {
        lines.push('');
        lines.push(`**Consistent transitions across samples (strong signals):**`);
        for (const t of allTransitions) {
          lines.push(`- "${t}"`);
        }
      }
      
      lines.push('');
      lines.push('**Extraction instructions for Claude:**');
      lines.push('1. Use this data as quantitative foundation');
      lines.push('2. Weight the 3 most recent samples 2x when patterns conflict');
      lines.push('3. Extract verbatim phrases — do not paraphrase signature moves');
      lines.push('4. Flag inconsistencies to user before locking in the profile');
    }
  }
  
  return lines.join('\n');
}

// ── Entry Point ────────────────────────────────────────────────────────────

async function main() {
  const args = process.argv.slice(2);
  
  if (args.length === 0 || args[0] === '--help') {
    console.log(`
Brand Voice Extractor — Sample Analyzer

Usage:
  node analyze-voice.mjs <file1> [file2] [file3] ...
  node analyze-voice.mjs sample-posts/*.md

Supported formats: .md, .txt (any plain text)
Min recommended: 3 files or 500 total words

Output:
  Structured analysis report for Claude to use during extraction.
    `);
    process.exit(0);
  }
  
  const analyses = [];
  
  for (const arg of args) {
    if (!existsSync(arg)) {
      console.error(`⚠️  Not found: ${arg}`);
      continue;
    }
    
    const stat = statSync(arg);
    if (stat.isDirectory()) {
      // Read all text files in directory
      const files = readdirSync(arg).filter(f => ['.md', '.txt'].includes(extname(f)));
      for (const file of files) {
        const content = readFileSync(join(arg, file), 'utf8');
        analyses.push(await analyzeText(content, file));
      }
    } else {
      const content = readFileSync(arg, 'utf8');
      analyses.push(await analyzeText(content, basename(arg)));
    }
  }
  
  if (analyses.length === 0) {
    console.error('❌ No valid files found.');
    process.exit(1);
  }
  
  console.log(formatReport(analyses));
}

main().catch(console.error);
