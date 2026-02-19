#!/usr/bin/env node

/**
 * Cross-check lesson quality against the canonical source policy.
 *
 * This script does not validate factual correctness automatically (that still
 * requires editorial review), but it enforces structural guardrails so every
 * lesson stays reviewable against AES / Ableton / Wikipedia references.
 */

const fs = require('fs');
const path = require('path');

const root = process.cwd();
const configDir = path.join(root, 'public', 'configs');

const files = fs
  .readdirSync(configDir)
  .filter((name) => /^lesson-.*\.config\.js$/.test(name))
  .sort();

const warnings = [];

for (const fileName of files) {
  const filePath = path.join(configDir, fileName);
  const raw = fs.readFileSync(filePath, 'utf8');

  const hasTheory = /theory\s*:\s*\{[\s\S]*sections\s*:\s*\[/m.test(raw);
  if (!hasTheory) {
    warnings.push({ file: fileName, issue: 'Missing theory.sections block' });
  }

  const hasLearningObjectives = /learningObjectives\s*:\s*\[/m.test(raw);
  if (!hasLearningObjectives) {
    warnings.push({ file: fileName, issue: 'Missing learningObjectives block' });
  }

  const hasReviewMetadata = /reviewMetadata\s*:\s*\{/m.test(raw);
  if (!hasReviewMetadata) {
    warnings.push({ file: fileName, issue: 'Missing reviewMetadata block' });
  }

  const hasSourceReferences = /sourceReferences\s*:\s*\[/m.test(raw);
  if (!hasSourceReferences) {
    warnings.push({ file: fileName, issue: 'Missing sourceReferences block' });
  }

  const hasAssessmentRubric = /assessmentRubric\s*:\s*\{/m.test(raw);
  if (!hasAssessmentRubric) {
    warnings.push({ file: fileName, issue: 'Missing assessmentRubric block' });
  }

  const placeholders = [
    /TODO/,
    /lorem ipsum/i,
    /coming soon/i,
    /to be added/i,
    /placeholder/i
  ];

  for (const placeholder of placeholders) {
    if (placeholder.test(raw)) {
      warnings.push({ file: fileName, issue: `Contains placeholder marker: ${placeholder}` });
      break;
    }
  }
}

console.log(`Cross-check scanned ${files.length} lesson config files.`);

if (warnings.length === 0) {
  console.log('No structural source-alignment warnings found.');
  process.exit(0);
}

console.log(`Found ${warnings.length} warning(s):`);
for (const warning of warnings) {
  console.log(`- ${warning.file}: ${warning.issue}`);
}

const coverage = {
  reviewMetadata: files.length - warnings.filter((warning) => warning.issue === 'Missing reviewMetadata block').length,
  sourceReferences: files.length - warnings.filter((warning) => warning.issue === 'Missing sourceReferences block').length,
  assessmentRubric: files.length - warnings.filter((warning) => warning.issue === 'Missing assessmentRubric block').length
};

const reportPath = path.join(root, 'docs', 'qa', 'content-source-crosscheck-report.json');
fs.writeFileSync(reportPath, JSON.stringify({ scanned: files.length, coverage, warnings }, null, 2));
console.log(`Saved warning report to ${path.relative(root, reportPath)}`);

const strict = process.argv.includes("--strict");
if (strict) {
  process.exit(1);
}

process.exit(0);
