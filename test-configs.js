#!/usr/bin/env node
/**
 * Test config files for validity and consistency
 */

import { readFileSync } from 'fs';
import { pathToFileURL } from 'url';

const configs = [
  './configs/lesson-drums-1.config.js',
  './configs/lesson-drums-7.config.js',
  './configs/lesson-drums-15.config.js',
  './configs/lesson-arrangement-1.config.js',
  './configs/lesson-arrangement-10.config.js',
  './configs/lesson-arrangement-20.config.js',
];

console.log('🧪 Testing Config Files');
console.log('======================================\n');

let passed = 0;
let failed = 0;

for (const configPath of configs) {
  console.log(`Testing: ${configPath}`);
  console.log('-----------------------------------');

  try {
    // Read file content
    const content = readFileSync(configPath, 'utf8');

    // Check for required exports
    if (!content.includes('export const lessonConfig')) {
      console.log('  ❌ Missing lessonConfig export');
      failed++;
      continue;
    }
    console.log('  ✅ Has lessonConfig export');

    // Check for required fields (basic validation)
    const requiredFields = [
      'lessonKey',
      'hero',
      'exercise',
      'instruments',
      'sequencer'
    ];

    let missingFields = 0;
    for (const field of requiredFields) {
      if (!content.includes(field + ':')) {
        console.log(`  ⚠️  Missing field: ${field}`);
        missingFields++;
      }
    }

    if (missingFields === 0) {
      console.log('  ✅ All required fields present');
      passed++;
    } else {
      console.log(`  ❌ Missing ${missingFields} required fields`);
      failed++;
    }

  } catch (error) {
    console.log(`  ❌ Error reading file: ${error.message}`);
    failed++;
  }

  console.log('');
}

console.log('======================================');
console.log('📊 Config Test Results:');
console.log(`  ✅ Passed: ${passed} configs`);
console.log(`  ❌ Failed: ${failed} configs`);
console.log('======================================');

if (failed === 0) {
  console.log('🎉 All config tests passed!');
  process.exit(0);
} else {
  console.log('⚠️  Some config issues found');
  process.exit(1);
}
