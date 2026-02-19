/**
 * Music Producer Lab - Lesson Configuration
 * Lesson: Harmony 2 - Flip the Emotion: Major vs Minor
 */

import { applyMessagePreset, buildHeroEyebrow } from "./config-presets.js";

export const lessonConfig = {
  // ====================
  // LESSON METADATA
  // ====================
  lessonKey: "mpl-harmony-2-progress",
  lessonNumber: 2,
  lessonCategory: "Chord Fundamentals",

  // ====================
  // NAVIGATION
  // ====================
  nextLessonUrl: "lesson-harmony-3.html",
  prevLessonUrl: "lesson-harmony-1.html",
  overviewUrl: "labs.html",

  // ====================
  // HERO SECTION
  // ====================
  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 2, categoryLabel: "Harmony & Melody" }),
    title: "Flip the Emotion:",
    titleHighlight: "Major vs Minor",
    subtitle: "Change just one note in a chord and completely transform its emotional color. You'll build C major (bright, happy) and C minor (darker, melancholic) side by side, hearing how a single note shift changes everything. This teaches you the most powerful variable in chord construction."
  },

  // ====================
  // SEQUENCER SETTINGS
  // ====================
  sequencer: {
    tempo: 90,
    key: "C",
    scale: "Major",
    stepCount: 16,
    bars: 1,
    pitchRange: {
      low: 48,  // C3
      high: 72  // C5
    }
  },

  // ====================
  // EXERCISE INFO
  // ====================
  exercise: {
    title: "Build C Major and C Minor",
    description: "The difference between major (bright) and minor (dark) is just <strong>one semitone in the third</strong>. C major uses E (major third), C minor uses E♭ (minor third). The root (C) and fifth (G) stay the same. This single-note difference is what separates uplifting pop chords from moody hip-hop progressions.",
    tip: "Create two MIDI clips side by side - one with C major, one with C minor. Play them back-to-back to clearly hear the emotional shift.",
    steps: [
      { text: "Build <strong>C major</strong> first: C4, E4, G4 on the same beat" },
      { text: "Listen and notice the <strong>bright, stable</strong> sound" },
      { text: "Now change E to <strong>E♭</strong> (move it down one semitone/piano key)" },
      { text: "Listen to <strong>C minor</strong> and notice the darker, more introspective sound" },
      { text: "<strong>A/B between them</strong> several times to really hear the difference" },
      { text: "Experiment: Try building G major (G-B-D) then G minor (G-B♭-D)" }
    ]
  },

  // ====================
  // VALIDATION CONFIG
  // ====================
  validation: {
    type: "chord_comparison",
    requiredChords: [
      {
        name: "C Major",
        pitches: [60, 64, 67],  // C4, E4, G4
        time: 0
      },
      {
        name: "C Minor",
        pitches: [60, 63, 67],  // C4, Eb4, G4
        time: 4  // Or in a separate clip
      }
    ],
    allowInversions: false,
    allowExtraNotes: false
  },

  // ====================
  // COMPLETION MESSAGES
  // ====================
  messages: applyMessagePreset("harmony", {
    initial: "Build both C major (C-E-G) and C minor (C-Eb-G) to hear the difference.",
    success: "Perfect! You can now hear and build the difference between major and minor chords. This unlocks all chord construction.",
    error: "Make sure you have C major (C-E-G) and C minor (C-Eb-G). The only difference should be E vs Eb."
  }),

  // ====================
  // MODE FLAGS
  // ====================
  mode: {
    sandbox: false,
    showTargetHint: true,
    enablePresets: false,
    enableExport: false,
    sequencerType: "piano-roll"
  },


  learningObjectives: [
    "Understand core concepts in harmony 2",
    "Program the target pattern with timing accuracy",
    "Apply this pattern in a full track context"
  ],


  theory: {
    sections: [
      {
        title: "Core Theory: Harmony 2",
        content: `
This lesson focuses on practical workflow and musical intent.
Use the target pattern as a repeatable building block, then adapt it to your genre and arrangement needs.

When practicing, prioritize timing consistency first, then refine tone, dynamics, and variation.
        `
      }
    ]
  },

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

};
