#!/usr/bin/env node

const input = process.argv.slice(2).join(" ").trim();

if (!input) {
  console.error('Usage: node scripts/lens-router.mjs "decision statement"');
  process.exit(1);
}

const routes = [
  { match: /\b(risk|downside|leverage|debt|bet the|all.in|cycle)/i, lenses: ["Howard Marks", "Buffett/Munger", "Dalio"] },
  { match: /\b(test|testing|experiment|pilot|unsure|stuck|try)\b/i, lenses: ["Ferriss", "Bezos", "Thiel"] },
  { match: /brand|belief|perception|culture shift|movement/i, lenses: ["Red Bull", "Godin", "Drucker"] },
  { match: /\b(new role|first 90|stalled|turnaround|momentum)/i, lenses: ["Watkins", "Horowitz", "Dalio"] },
  { match: /\b(margin|complex|simplif|assortment|skus?|offers|offerings)/i, lenses: ["Trader Joe's", "Jobs", "Buffett/Munger"] },
  { match: /\b(tradeoff|trade-off|parity|say no|focus)/i, lenses: ["Porter", "Jobs", "Helmer"] },
  { match: /price|pricing|packag|tier|monetiz/i, lenses: ["Helmer", "Buffett/Munger", "Drucker"] },
  { match: /position|message|category|niche|audience/i, lenses: ["Drucker", "Godin", "Jobs"] },
  { match: /hire|team|org|culture|manage/i, lenses: ["Horowitz", "Dalio", "Drucker"] },
  { match: /market|compet|enter|differentiat/i, lenses: ["Thiel", "Godin", "Helmer"] },
  { match: /product|roadmap|feature|scope/i, lenses: ["Jobs", "Bezos", "Thiel"] },
  { match: /process|repeat|mistake|system/i, lenses: ["Dalio", "Helmer", "Horowitz"] }
];

let picked = ["Drucker", "Godin", "Helmer"];
for (const route of routes) {
  if (route.match.test(input)) {
    picked = route.lenses;
    break;
  }
}

console.log(`# Lens Router`);
console.log(`Decision: ${input}`);
console.log(`Recommended lenses: ${picked.join(", ")}`);
console.log(`Full lens entries: references/lenses.md`);
