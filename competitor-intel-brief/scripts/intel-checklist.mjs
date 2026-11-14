#!/usr/bin/env node

import fs from "node:fs";

const file = process.argv[2];
if (!file) {
  console.error("Usage: node scripts/intel-checklist.mjs path/to/competitor.json");
  process.exit(1);
}

const data = JSON.parse(fs.readFileSync(file, "utf8"));
const required = ["name", "url"];
const missing = required.filter((key) => !data[key]);

if (missing.length) {
  console.log(`Missing: ${missing.join(", ")}`);
  process.exit(2);
}

console.log(`# Competitor Intel Checklist`);
console.log(`Competitor: ${data.name}`);
console.log(`URL: ${data.url}`);
console.log(`Objective: ${data.objective || "differentiate"}`);
console.log(`Own positioning supplied: ${data.ownPositioning ? "yes" : "no"}`);
console.log(`Prior teardown supplied: ${data.priorAudit ? "yes" : "no"}`);
console.log(`Research order: homepage -> pricing -> about -> reviews -> channels`);
