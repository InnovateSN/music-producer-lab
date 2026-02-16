#!/usr/bin/env node
/**
 * Generate sample library JSON from samples folder
 * Scans samples/drums/ and creates a JSON file with all available samples
 */

const fs = require('fs');
const path = require('path');

const SAMPLES_DIR = './samples/drums';
const OUTPUT_FILE = './sample-library.json';

const INSTRUMENTS = ['kick', 'snare', 'hihat', 'clap', 'tom', 'rim'];
const AUDIO_EXTENSIONS = ['.wav', '.mp3', '.ogg'];

function scanSamples() {
  const library = {};

  INSTRUMENTS.forEach(instrument => {
    const instrumentDir = path.join(SAMPLES_DIR, instrument);
    
    if (!fs.existsSync(instrumentDir)) {
      console.warn(`⚠️  Folder not found: ${instrumentDir}`);
      library[instrument] = [];
      return;
    }

    const files = fs.readdirSync(instrumentDir);
    const samples = files
      .filter(file => {
        const ext = path.extname(file).toLowerCase();
        return AUDIO_EXTENSIONS.includes(ext) && !file.startsWith('.');
      })
      .map(file => {
        const name = path.basename(file, path.extname(file));
        const displayName = name
          .replace(/Ghosthack-AC23_/g, '')
          .replace(/_/g, ' ')
          .trim();
        
        return {
          name: displayName,
          file: file,
          path: `samples/drums/${instrument}/${file}`
        };
      })
      .sort((a, b) => a.name.localeCompare(b.name));

    library[instrument] = samples;
    console.log(`✓ Found ${samples.length} samples for ${instrument}`);
  });

  return library;
}

// Generate the library
console.log('🔍 Scanning samples folder...\n');
const library = scanSamples();

// Write to JSON
fs.writeFileSync(OUTPUT_FILE, JSON.stringify(library, null, 2));

console.log(`\n✅ Sample library generated: ${OUTPUT_FILE}`);
console.log(`\nTotal samples: ${Object.values(library).reduce((sum, arr) => sum + arr.length, 0)}`);
