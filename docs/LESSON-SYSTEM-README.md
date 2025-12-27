# Music Producer Lab - Modular Lesson System

This document explains how to create new lessons using the modular lesson system.

## Overview

The modular lesson system allows you to generate hundreds of interactive music lessons by simply creating configuration files. Each lesson is defined by:

1. **A config file** (`configs/lesson-xxx.config.js`) - Contains all lesson parameters
2. **The template HTML** (`lesson-template.html`) - Universal template with placeholders
3. **The lesson engine** (`lesson-engine.js`) - Populates the page from config
4. **The sequencer** (`sequencer.js`) - Handles audio and interaction

## Quick Start

### Method 1: Inline Config (Recommended for Simple Lessons)

Copy `lesson-drums-5-modular.html` and modify the inline config:

```html
<script type="module">
  import { initDrumSequencer } from './sequencer.js';

  const LESSON_CONFIG = {
    lessonKey: "mpl-lesson6-progress",
    nextLessonUrl: "lesson-drums-7.html",
    // ... more config
  };

  const instruments = [
    {
      id: "kick",
      label: "Kick",
      color: "linear-gradient(135deg,#ff5a3d,#ffb28a)",
      target: [0, 4, 8, 12],
      instructions: "Program the kick pattern..."
    }
    // ... more instruments
  ];

  initDrumSequencer(instruments, LESSON_CONFIG.lessonKey, LESSON_CONFIG.nextLessonUrl);
</script>
```

### Method 2: External Config File (Recommended for Large Projects)

1. Create a config file in `configs/`:

```javascript
// configs/lesson-drums-6.config.js
export const lessonConfig = {
  lessonKey: "mpl-lesson6-progress",
  lessonNumber: 6,
  // ... full config
};
```

2. Use the lesson template with the engine:

```html
<script type="module">
  import { lessonConfig } from './configs/lesson-drums-6.config.js';
  import { initLessonFromConfig } from './lesson-engine.js';
  initLessonFromConfig(lessonConfig);
</script>
```

## Configuration Reference

### Required Fields

| Field | Type | Description |
|-------|------|-------------|
| `lessonKey` | string | Unique localStorage key for progress tracking |
| `nextLessonUrl` | string | URL to the next lesson (or null if last) |
| `instruments` | array | Array of instrument definitions |

### Optional Fields

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `lessonNumber` | number | - | Lesson number for display |
| `prevLessonUrl` | string | - | URL to previous lesson |
| `overviewUrl` | string | "labs.html" | URL to lessons overview |
| `sequencer.tempo` | number | 120 | Tempo in BPM |
| `sequencer.stepCount` | number | 16 | Steps (8, 16, or 32) |
| `sequencer.swing` | number | 0 | Swing amount (0-100) |
| `mode.sandbox` | boolean | false | Sandbox mode (no validation) |

### Instrument Definition

```javascript
{
  id: "kick",           // Unique identifier, maps to sound
  label: "Kick",        // Display label
  color: "linear-gradient(135deg,#ff5a3d,#ffb28a)",  // Active step color
  targetSteps: [0, 4, 8, 12],  // Correct pattern (0-indexed)
  instructionText: "...",      // Help text
  patternHint: {
    label: "Kick",
    highlightSteps: [],  // Steps to highlight as special
    fillZoneSteps: []    // Steps to mark as "fill zone"
  }
}
```

### Available Sound IDs

- `kick` - Bass drum
- `snare` - Snare drum
- `hihat` - Hi-hat cymbal
- `clap` - Handclap
- `tom` - Tom drum
- `rim` - Rim shot

## Step Indexing

Steps are **0-indexed** in the config but displayed as **1-indexed** to users:

| Config Index | Display | Beat |
|--------------|---------|------|
| 0 | Step 1 | Beat 1 |
| 4 | Step 5 | Beat 2 |
| 8 | Step 9 | Beat 3 |
| 12 | Step 13 | Beat 4 |

## Files Structure

```
/webapp
├── lesson-template.html      # Universal template
├── lesson-engine.js          # Page population engine
├── sequencer.js              # Audio/interaction handler
├── styles.css                # All styles
├── sandbox.html              # Free practice mode
├── configs/
│   ├── lesson-drums-1.config.js
│   ├── lesson-drums-2.config.js
│   ├── lesson-drums-5.config.js
│   └── ...
├── lesson-drums-5-modular.html  # Example using inline config
└── LESSON-SYSTEM-README.md      # This file
```

## Sandbox Mode

To create a sandbox/playground without exercise validation:

```javascript
{
  mode: {
    sandbox: true,
    enablePresets: true,  // Allow saving/loading
    enableExport: true    // Allow JSON export
  }
}
```

See `sandbox.html` for a complete example.

## Responsive Design

The system is fully responsive and works on:
- Mobile (360px+)
- Tablet (768px+)
- Desktop (1024px+)
- Ultra-wide (1920px+)

The sequencer automatically:
- Scrolls horizontally on small screens
- Adjusts button sizes for touch
- Scales step numbers for 32-step mode

## Custom Messages

Override default messages for each lesson:

```javascript
messages: {
  initial: "Create the pattern to continue...",
  success: "🎉 Perfect! You nailed it!",
  error: "Try again! Check the pattern hint.",
  alreadyCompleted: "Already done! Move to next lesson."
}
```

## Pattern Hint Visualization

The pattern hint shows users the target pattern:

```javascript
patternHint: {
  enabled: true,
  note: "Steps 12-16 are the fill zone"
}
```

In instruments, you can mark special steps:

```javascript
patternHint: {
  label: "Hi-Hat",
  highlightSteps: [14, 15],  // Highlight as special
  fillZoneSteps: [11, 12, 13, 14, 15]  // Mark as fill zone
}
```

## Vercel Deployment

All files are static and deploy directly to Vercel:

```bash
# No build step required!
vercel --prod
```

The system uses:
- ES modules (native browser support)
- Web Audio API (no external libraries)
- LocalStorage (no backend required)

## Creating 100+ Lessons

1. Define your lesson curriculum
2. Create config files programmatically or manually
3. Use the inline config method for simple lessons
4. Test each lesson on all screen sizes
5. Deploy to Vercel

Example batch creation (Node.js script):

```javascript
// generate-lessons.js
const lessons = [
  { name: "Basic 4/4", kick: [0,4,8,12], snare: [] },
  { name: "Backbeat", kick: [0,4,8,12], snare: [4,12] },
  // ... more patterns
];

lessons.forEach((lesson, i) => {
  const config = generateConfig(lesson, i + 1);
  fs.writeFileSync(`configs/lesson-drums-${i+1}.config.js`, config);
});
```

## Troubleshooting

**Audio not playing?**
- User must interact with page first (browser security)
- Check console for Web Audio API errors

**Progress not saving?**
- localStorage might be full or disabled
- Check lessonKey uniqueness

**Steps not highlighting?**
- Verify targetSteps uses 0-indexed values
- Check instrument id matches sound name

---

Created for Music Producer Lab
https://music-producer-lab.vercel.app
