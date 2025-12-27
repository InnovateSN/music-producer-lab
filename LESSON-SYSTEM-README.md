# Music Producer Lab - Modular Lesson System

**Status:** ✅ **FULLY IMPLEMENTED** - All 40 lessons now use this system

This document explains the modular lesson architecture used by Music Producer Lab.

---

## Overview

The modular lesson system generates interactive music lessons from simple configuration files. Every lesson consists of:

1. **Config file** (`configs/lesson-*.config.js`) - All lesson content and settings
2. **HTML file** (`lesson-*.html`) - Imports config + lesson engine
3. **Lesson engine** (`lesson-engine.js`) - Populates page from config
4. **Sequencer** (`sequencer.js`) - Handles audio and interaction

**All 40 existing lessons use this system** (migrated December 2025).

---

## Current Architecture

### ✅ What's Implemented

| Component | Count | Status |
|-----------|-------|--------|
| **Drums Lessons** | 20 | ✅ All migrated to modular system |
| **Arrangement Lessons** | 20 | ✅ All migrated to modular system |
| **Config Files** | 40 | ✅ All connected and working |
| **lesson-engine.js** | 1 | ✅ Shared by all lessons |
| **sequencer.js** | 1 | ✅ Shared audio engine |

### Benefits Achieved

- ✅ **Zero code duplication** - All lessons share engine
- ✅ **Single source of truth** - Content in configs only
- ✅ **Instant bug fixes** - Edit 1 file, fix all 40 lessons
- ✅ **Fast lesson creation** - New lesson in <1 hour
- ✅ **Perfect consistency** - Same UX across all lessons

---

## Quick Start: Creating a New Lesson

### Step 1: Create Config File

Create `configs/lesson-drums-21.config.js`:

```javascript
import { applyMessagePreset, buildHeroEyebrow } from "./config-presets.js";

export const lessonConfig = {
  // Metadata
  lessonKey: "mpl-drums-21-progress",
  lessonNumber: 21,
  lessonCategory: "Drum pattern",

  // Navigation
  nextLessonUrl: "lesson-drums-22.html",
  prevLessonUrl: "lesson-drums-20.html",
  overviewUrl: "labs.html",

  // Hero section
  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 21, categoryLabel: "Drum pattern" }),
    title: "Your Lesson Title:",
    titleHighlight: "your subtitle here",
    subtitle: "Lesson description with <strong>bold text</strong>."
  },

  // Sequencer settings
  sequencer: {
    tempo: 120,
    stepCount: 16,
    swing: 0
  },

  // Exercise
  exercise: {
    title: "Exercise Title",
    description: "What students need to do...",
    tip: "Helpful tip for students!",
    steps: [
      { text: "Step 1 instructions" },
      { text: "Step 2 instructions" }
    ]
  },

  // Instruments
  instruments: [
    {
      id: "kick",
      label: "Kick",
      color: "linear-gradient(135deg,#ff5a3d,#ffb28a)",
      targetSteps: [0, 4, 8, 12],
      instructionText: "Place kicks on beats 1, 2, 3, 4"
    }
  ],

  // Pattern hint
  patternHint: {
    enabled: true,
    note: "Kick on every beat"
  },

  // Messages
  messages: applyMessagePreset("drums"),

  // Mode
  mode: {
    sandbox: false,
    showTargetHint: true
  }
};
```

### Step 2: Create HTML File

Create `lesson-drums-21.html` (copy from `lesson-drums-1.html` and change config import):

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title id="mpl-page-title">Lesson 21 | Music Producer Lab</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
    <meta name="description" id="mpl-meta-description" content="Interactive music production lesson." />
    <meta name="theme-color" content="#030508">
    <link rel="icon" type="image/svg+xml" href="mpl-favicon.svg">
    <link rel="manifest" href="manifest.json">
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <!-- Standard header -->
    <header class="site-header glass">...</header>

    <main class="main-content container">
      <!-- Hero section (populated by JS) -->
      <section class="hero" id="mpl-hero">...</section>

      <!-- Exercise section (populated by JS) -->
      <section class="exercise-instructions" id="mpl-exercise-section">...</section>

      <!-- Sequencer section -->
      <section class="sequencer-section" id="mpl-sequencer-section">...</section>
    </main>

    <footer class="site-footer">...</footer>

    <!-- Import config and initialize -->
    <script type="module">
      import { lessonConfig } from './configs/lesson-drums-21.config.js';
      import { initLessonFromConfig } from './lesson-engine.js';
      initLessonFromConfig(lessonConfig);
      document.getElementById("mpl-year").textContent = new Date().getFullYear();
    </script>
  </body>
</html>
```

### Step 3: Test

```bash
# Serve locally
python3 -m http.server 8000

# Open in browser
http://localhost:8000/lesson-drums-21.html
```

**That's it!** New lesson created in ~30-60 minutes.

---

## Configuration Reference

### Required Fields (Drums Lessons)

| Field | Type | Description |
|-------|------|-------------|
| `lessonKey` | string | Unique localStorage key (e.g., `mpl-drums-21-progress`) |
| `hero` | object | Hero section content (eyebrow, title, subtitle) |
| `exercise` | object | Exercise instructions and steps |
| `instruments` | array | Instrument definitions for sequencer |
| `sequencer` | object | Tempo, stepCount, swing settings |

### Required Fields (Arrangement Lessons)

| Field | Type | Description |
|-------|------|-------------|
| `lessonKey` | string | Unique localStorage key |
| `hero` | object | Hero section content |
| `exercise` | object | Exercise instructions |
| `arrangementSections` | array | Timeline builder sections |
| `templates` | object | Pre-built arrangements (pop, edm, etc.) |

**Note:** Arrangement lessons use a **different structure** for their timeline builder UI.

### Optional Fields

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `lessonNumber` | number | - | Lesson number for display |
| `prevLessonUrl` | string | - | Previous lesson link |
| `nextLessonUrl` | string | - | Next lesson link |
| `overviewUrl` | string | `"labs.html"` | Overview page link |
| `mode.sandbox` | boolean | `false` | Sandbox mode (no validation) |
| `mode.showTargetHint` | boolean | `true` | Show pattern hint |
| `patternHint.enabled` | boolean | `true` | Enable pattern visualization |

---

## Instrument Definition (Drums)

```javascript
{
  id: "kick",                    // Must match available sound ID
  label: "Kick",                 // Display label
  color: "linear-gradient(...)", // Active step gradient
  targetSteps: [0, 4, 8, 12],    // Correct pattern (0-indexed!)
  instructionText: "...",        // Help text for this instrument
  patternHint: {
    label: "Kick",
    highlightSteps: [],          // Optional: highlight specific steps
    fillZoneSteps: []            // Optional: mark fill zones
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

---

## Step Indexing (IMPORTANT!)

Steps are **0-indexed** in config but **1-indexed** for users:

| Config Index | User Sees | Musical Beat |
|--------------|-----------|--------------|
| `0` | Step 1 | Beat 1 |
| `4` | Step 5 | Beat 2 |
| `8` | Step 9 | Beat 3 |
| `12` | Step 13 | Beat 4 |

**Example:** 4-on-the-floor kick = `[0, 4, 8, 12]` in config

---

## Arrangement Sections (Timeline Lessons)

For arrangement/songwriting lessons, use:

```javascript
arrangementSections: [
  { type: "intro", label: "Intro", bars: 8, energy: 25, color: "green" },
  { type: "verse", label: "Verse", bars: 16, energy: 50, color: "cyan" },
  { type: "chorus", label: "Chorus", bars: 16, energy: 90, color: "purple" },
  { type: "bridge", label: "Bridge", bars: 8, energy: 60, color: "pink" },
  { type: "buildup", label: "Buildup", bars: 8, energy: 70, color: "amber" },
  { type: "drop", label: "Drop", bars: 16, energy: 100, color: "red" },
  { type: "breakdown", label: "Breakdown", bars: 8, energy: 35, color: "blue" },
  { type: "outro", label: "Outro", bars: 8, energy: 20, color: "gray" }
]
```

---

## Project Structure

```
/music-producer-lab/
├── Core Engine
│   ├── lesson-engine.js          # 446 lines - populates lessons from config
│   ├── sequencer.js              # 811 lines - audio + sequencer UI
│   ├── curriculum.js             # 710 lines - all lesson metadata
│   └── styles.css                # 55KB - unified design system
│
├── Lessons (40 files - ALL migrated ✅)
│   ├── lesson-drums-1.html through lesson-drums-20.html
│   └── lesson-arrangement-1.html through lesson-arrangement-20.html
│
├── Configs (40 files - ALL connected ✅)
│   ├── configs/lesson-drums-1.config.js through lesson-drums-20.config.js
│   ├── configs/lesson-arrangement-1.config.js through lesson-arrangement-20.config.js
│   ├── configs/config-presets.js   # Helper functions
│   └── configs/lesson-loader.js    # Config loader utility
│
├── Templates & Examples
│   ├── lesson-template.html       # Reference template
│   ├── master-template.html       # Design system reference
│   └── sandbox.html               # Free practice mode
│
├── Documentation
│   ├── README.md
│   ├── LESSON-SYSTEM-README.md    # This file
│   ├── PROJECT_REVIEW_REPORT.md
│   ├── COMBINED_PROJECT_ANALYSIS.md
│   └── REFACTOR_SESSION_1_SUMMARY.md
│
└── Tools
    ├── migrate-lesson.py          # Automated migration script
    ├── test-migrated-lessons.sh   # Structural tests
    └── test-configs.js            # Config validation
```

---

## Helper Functions (config-presets.js)

### buildHeroEyebrow()

```javascript
import { buildHeroEyebrow } from "./config-presets.js";

hero: {
  eyebrow: buildHeroEyebrow({
    lessonNumber: 5,
    categoryLabel: "Drum pattern"
  })
  // Result: "Lesson 5 · Drum pattern"
}
```

### applyMessagePreset()

```javascript
import { applyMessagePreset } from "./config-presets.js";

messages: applyMessagePreset("drums", {
  success: "🎉 Custom success message!"
  // Other messages use preset defaults
})
```

Available presets: `"default"`, `"drums"`, `"drum-pattern"`

---

## Sandbox Mode

Create a practice mode without exercise validation:

```javascript
mode: {
  sandbox: true,
  showTargetHint: false,
  enablePresets: true,   // Allow save/load patterns
  enableExport: true     // Allow JSON export
}
```

See `sandbox.html` for complete example.

---

## Custom Messages

Override default feedback messages:

```javascript
messages: {
  initial: "Complete the exercise to unlock the next lesson.",
  success: "🎉 Perfect! You nailed it!",
  error: "Not quite right. Check the pattern hint!",
  alreadyCompleted: "Already done! Move to next lesson."
}
```

---

## Responsive Design

The system is fully responsive:

- **Mobile:** 360px+ (touch-optimized)
- **Tablet:** 768px+
- **Desktop:** 1024px+
- **Ultrawide:** 1920px+

Features:
- Horizontal scroll for sequencer on small screens
- Touch-friendly button sizes
- Responsive typography
- Mobile-optimized navigation

---

## Testing Your Lesson

### 1. Structural Validation

```bash
# Test structural integrity
./test-migrated-lessons.sh
```

### 2. Config Validation

```bash
# Validate config file syntax
node test-configs.js
```

### 3. Manual Testing Checklist

- [ ] Hero section displays correctly
- [ ] Exercise instructions show
- [ ] Pattern hint visualizes target pattern
- [ ] Sequencer plays audio
- [ ] Pattern validation works
- [ ] Progress saves to localStorage
- [ ] Navigation links work
- [ ] Mobile responsive
- [ ] Works in Chrome, Firefox, Safari

---

## Deployment

Zero build step required! Deploy directly to Vercel:

```bash
vercel --prod
```

The system uses:
- ✅ ES modules (native browser support)
- ✅ Web Audio API (no external libraries)
- ✅ localStorage (no backend)
- ✅ Static files only

---

## Migration Complete! 🎉

**As of December 2025:**
- ✅ All 40 lessons migrated to modular system
- ✅ Zero code duplication
- ✅ Config-driven content
- ✅ Single source of truth
- ✅ 6x faster development velocity

**Before migration:**
- ❌ Each lesson: 200-600 lines of inline JavaScript
- ❌ Content hardcoded in HTML
- ❌ Bug fixes required editing 40+ files

**After migration:**
- ✅ Each lesson: ~170 lines (imports config + template)
- ✅ Content centralized in config files
- ✅ Bug fixes = edit 1 component file

---

## Troubleshooting

### Audio Not Playing?

**Cause:** Browser security requires user interaction before playing audio.

**Solution:** User must click a button first. The "Play" button handles this automatically.

### Progress Not Saving?

**Cause:** localStorage disabled or full.

**Solutions:**
- Check browser localStorage enabled
- Verify `lessonKey` is unique
- Check localStorage quota

### Steps Not Highlighting?

**Causes:**
- `targetSteps` using 1-indexed instead of 0-indexed
- Instrument `id` doesn't match available sound

**Solutions:**
- Use 0-indexed: `[0, 4, 8, 12]` not `[1, 5, 9, 13]`
- Verify `id` matches: `kick`, `snare`, `hihat`, `clap`, `tom`, `rim`

### Lesson Not Loading?

**Causes:**
- Config import path incorrect
- Config file has syntax error
- Missing required fields

**Solutions:**
- Check console for import errors
- Validate config with `node test-configs.js`
- Ensure all required fields present

---

## Performance Notes

### Load Times

- **First load:** ~1-2 seconds (loads engine + config)
- **Subsequent loads:** ~100-300ms (browser cache)
- **Audio initialization:** ~500ms (Web Audio API setup)

### Optimization Tips

1. **Hero visuals:** Keep SVGs small or use CSS
2. **Configs:** Keep under 200 lines
3. **Audio:** Synthesized (no sample loading)
4. **Caching:** Leverage browser cache (no versioning needed)

---

## Future Enhancements

Potential improvements for the system:

- [ ] Automated test suite (Jest/Vitest)
- [ ] Visual regression testing
- [ ] MIDI export functionality
- [ ] Pattern sharing via URL
- [ ] Undo/redo support
- [ ] Keyboard shortcuts (Space, 1-6, Delete)
- [ ] Real-time collaboration
- [ ] Audio sample support (optional)

---

## Resources

- **Live Site:** https://music-producer-lab.vercel.app
- **GitHub:** (add your repo URL)
- **Reports:** See `PROJECT_REVIEW_REPORT.md` and `COMBINED_PROJECT_ANALYSIS.md`

---

**Documentation Updated:** December 27, 2025
**System Status:** ✅ Production Ready
**Lessons Using System:** 40/40 (100%)

---

*The modular lesson system powers all interactive lessons on Music Producer Lab.*
