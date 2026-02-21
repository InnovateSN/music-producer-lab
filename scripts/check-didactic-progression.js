#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const dbPath = path.join(__dirname, '..', 'lib', 'lessons-db.json');
const lessons = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

const issues = [];

for (const lesson of lessons) {
  const difficulty = lesson.difficulty || 'unknown';
  const prerequisites = Array.isArray(lesson.prerequisites) ? lesson.prerequisites : [];

  if ((difficulty === 'advanced' || difficulty === 'expert') && prerequisites.length === 0) {
    issues.push(`Didactic jump: ${lesson.slug} is ${difficulty} but has no prerequisites declared.`);
  }

  const match = lesson.slug.match(/^(.*)-(\d+)$/);
  if (!match) continue;

  const category = match[1];
  const number = Number(match[2]);
  if (number >= 10 && !prerequisites.some((item) => item.startsWith(`${category}-${number - 2}`))) {
    issues.push(`Potential jump: ${lesson.slug} should usually include ${category}-${number - 2} as a bridging prerequisite.`);
  }
}

if (issues.length > 0) {
  console.error('[QA] Didactic progression issues found:');
  for (const issue of issues) {
    console.error(` - ${issue}`);
  }
  process.exit(1);
}

console.log('[QA] Didactic progression check passed with no jumps detected.');
