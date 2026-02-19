#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const repoRoot = process.cwd();
const configDir = path.join(repoRoot, 'public', 'configs');

const sourceBlock = `
  // ====================
  // REFERENCE SOURCES
  // ====================
  sourceReferences: [
    {
      name: 'AES (Audio Engineering Society)',
      url: 'https://www.aes.org/',
      usage: 'Audio engineering standards, terminology, and critical-listening best practices'
    },
    {
      name: 'Ableton Live Documentation',
      url: 'https://www.ableton.com/en/manual/',
      usage: 'DAW workflows, production techniques, and practical implementation steps'
    },
    {
      name: 'Wikipedia',
      url: 'https://www.wikipedia.org/',
      usage: 'Historical context, genre evolution, and foundational music theory references'
    }
  ],
`;

const files = fs
  .readdirSync(configDir)
  .filter((name) => /^lesson-.*\.config\.js$/.test(name))
  .map((name) => path.join(configDir, name));

let updated = 0;
let skipped = 0;

for (const file of files) {
  const original = fs.readFileSync(file, 'utf8');

  if (original.includes('sourceReferences:')) {
    skipped += 1;
    continue;
  }

  const lastClose = original.lastIndexOf('};');
  if (lastClose === -1) {
    console.warn(`Skipping malformed file: ${path.relative(repoRoot, file)}`);
    skipped += 1;
    continue;
  }

  const prefix = original.slice(0, lastClose).trimEnd();
  const next = `${prefix},\n${sourceBlock}\n};\n`;

  fs.writeFileSync(file, next, 'utf8');
  updated += 1;
}

console.log(`Processed ${files.length} lesson config files.`);
console.log(`Updated: ${updated}`);
console.log(`Skipped: ${skipped}`);
