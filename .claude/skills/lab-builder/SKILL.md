---
name: lab-builder
description: Creates a new interactive lesson with proper structure, Web Audio setup, and consistent UI
allowed-tools: Read, Write, Edit, Bash(npm:*), Glob, Grep
---

# Lab Builder Skill

When creating a new lesson for Music Producer Lab, follow this process exactly.

## Architecture

Each lesson consists of TWO files:
1. **HTML page:** `/public/lesson-{category}-{number}.html`
2. **Config file:** `/public/configs/lesson-{category}-{number}.config.js`

Categories: `drums`, `harmony`, `bass`, `arrangement`, `mixing`, `mastering`, `sound-design`, `ear`, `theory`, `vocals`

## Step 1: Determine Lesson Parameters

- Which category?
- What lesson number? (Check existing files to find next available)
- Sequencer type: `'drums'` (step sequencer) or `'piano-roll'` (piano-roll-sequencer)
- What's the topic, tempo, instruments needed?

## Step 2: Create the Config File

Path: `/public/configs/lesson-{category}-{number}.config.js`

Required imports:
```javascript
import { applyMessagePreset, buildHeroEyebrow } from "./config-presets.js";
```

Required export structure:
```javascript
export const lessonConfig = {
  // LESSON METADATA
  lessonKey: "mpl-lesson{category}{n}-progress",
  lessonNumber: N,
  lessonCategory: "Category Name",

  // NAVIGATION
  nextLessonUrl: "lesson-{category}-{n+1}.html",
  prevLessonUrl: "lesson-{category}-{n-1}.html",
  overviewUrl: "labs.html",

  // HERO SECTION
  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: N, categoryLabel: "Category Name" }),
    title: "Lesson Title:",
    titleHighlight: "Subtitle Highlight",
    subtitle: "Description paragraph..."
  },

  // SEQUENCER SETTINGS
  sequencer: {
    tempo: 120,
    stepCount: 16,
    swing: 0,
    requiredTempo: 120
  },

  // EXERCISE INFO
  exercise: {
    title: "Exercise Title",
    description: "HTML-formatted description...",
    tip: "Helpful tip for the student",
    steps: [
      { text: "<strong>Step description</strong> with details." }
    ]
  },

  // INSTRUMENTS CONFIG
  instruments: [
    {
      id: "kick",       // One of: kick, snare, hihat, clap, tom, rim
      label: "Kick",
      color: "linear-gradient(135deg,#ff5a3d,#ffb28a)",
      targetSteps: [0, 4, 8, 12],  // 0-indexed!
      instructionText: "Detailed instruction for this instrument...",
      patternHint: { label: "Kick" }
    }
  ],

  // PATTERN HINT (optional)
  patternHint: {
    enabled: true,
    note: "Description of the target pattern"
  },

  // COMPLETION MESSAGES
  messages: applyMessagePreset("category", {
    initial: "Complete the exercise to unlock the next lesson.",
    success: "Correct! Great job!",
    error: "Not quite right. Check the instructions and try again."
  }),

  // VALIDATION RULES
  validation: {
    type: "drum_pattern",
    requiredInstruments: [
      {
        id: "kick",
        targetSteps: [0, 4, 8, 12],
        tolerance: 0,
        minHitsRequired: 4
      }
    ],
    requiredTempo: 120,
    tempoTolerance: 0
  },

  // THEORY CONTENT
  theory: {
    sections: [
      {
        title: "Section Title",
        content: `Detailed theory content in markdown-like format...`
      }
    ]
  },

  // LEARNING OBJECTIVES
  learningObjectives: [
    "Objective 1",
    "Objective 2"
  ],

  // MODE FLAGS
  mode: {
    sandbox: false,
    showTargetHint: true,
    enablePresets: false,
    enableExport: false,
    sequencerType: 'drums'  // or 'piano-roll'
  }
};

if (typeof window !== 'undefined') {
  window.LESSON_CONFIG = lessonConfig;
}
```

## Step 3: Create the HTML File

Path: `/public/lesson-{category}-{number}.html`

Must include these sections IN ORDER:
1. `<!DOCTYPE html>` with standard head (link to `styles.css`, favicon `mpl-favicon.svg`)
2. Navbar placeholder: `<div id="mpl-navbar-placeholder"></div>`
3. Hero section with IDs: `mpl-hero-eyebrow`, `mpl-hero-title`, `mpl-hero-subtitle` (populated by JS)
4. **Educational content section (MINIMUM 250 lines):**
   - "What You'll Learn" introduction
   - Key Concepts grid (4+ cards with `border-left` accent colors)
   - Each card links technical terms to `glossary.html#{term}`
   - Visual examples / pattern diagrams where relevant
   - "Common Mistakes" section (3+ items minimum)
   - "Why This Matters" section with benefits
   - DAW-specific instructions (Ableton, FL Studio, Logic)
   - "What's Next" preview of the next lesson
5. Exercise section (populated by `lesson-engine.js`)
6. Script module block:
```html
<script type="module">
  import { lessonConfig } from './configs/lesson-{category}-{number}.config.js';
  import { initLessonFromConfig } from './lesson-engine.js';
  initLessonFromConfig(lessonConfig);
</script>
```

## Step 4: Update Curriculum Registry

File: `/public/curriculum.js`
- Add the new lesson entry to the appropriate category array
- Ensure `lessonKey` matches the config

## Step 5: Update Navigation

- Update `prevLessonUrl` in the NEXT lesson's config (if it exists)
- Update `nextLessonUrl` in the PREVIOUS lesson's config (if it exists)

## Step 6: Quality Checklist (MANDATORY)

Apply every rule from `QUALITY_CHECKLIST.md`:
- [ ] NO emoji — use PNG images from `/images/`
- [ ] NO SVG icons — use PNG assets
- [ ] All technical terms hyperlinked to `glossary.html#{term-id}`
- [ ] Educational content is beginner-friendly and detailed (250+ lines)
- [ ] Steps are 0-indexed in config, 1-indexed in display text
- [ ] Content justifies subscription cost ("Would a beginner pay for this?")
- [ ] Exercise matches the lesson topic
- [ ] Pass/fail validation works correctly
- [ ] Helpful hints/tips included

## Reference Files
- **Complete lesson example:** `/public/lesson-drums-1.html`
- **Complete config example:** `/public/configs/lesson-drums-1.config.js`
- **Config presets:** `/public/configs/config-presets.js`
- **Lesson engine:** `/public/lesson-engine.js`
- **Sequencer:** `/public/sequencer.js`
- **Quality standards:** `/QUALITY_CHECKLIST.md`
- **Lesson system docs:** `/docs/LESSON-SYSTEM-README.md`

## Instrument Color Palette
| Instrument | Color Gradient |
|---|---|
| Kick | `linear-gradient(135deg,#ff5a3d,#ffb28a)` |
| Snare | `linear-gradient(135deg,#36d1dc,#5b86e5)` |
| Hi-hat | `linear-gradient(135deg,#f7971e,#ffd200)` |
| Clap | `linear-gradient(135deg,#a18cd1,#fbc2eb)` |
| Tom | `linear-gradient(135deg,#11998e,#38ef7d)` |
| Rim | `linear-gradient(135deg,#ee9ca7,#ffdde1)` |

## CSS Accent Colors for Content Cards
- `var(--accent-cyan)` — primary accent
- `var(--accent-purple)` — secondary accent
- `var(--accent-green)`, `var(--accent-orange)` — tertiary accents
