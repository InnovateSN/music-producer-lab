/**
 * Music Producer Lab - Lesson Configuration
 * Lesson: Harmony 17 - Dorian Mode: The Cool Minor Sound
 */

import { applyMessagePreset, buildHeroEyebrow } from "./config-presets.js";

export const lessonConfig = {
  lessonKey: "mpl-harmony-17-progress",
  lessonNumber: 17,
  lessonCategory: "Modal Harmony",

  nextLessonUrl: "lesson-harmony-18.html",
  prevLessonUrl: "lesson-harmony-16.html",
  overviewUrl: "labs.html",

  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 17, categoryLabel: "Harmony & Melody" }),
    title: "Dorian Mode:",
    titleHighlight: "The Cool Minor Sound",
    subtitle: "Write groove-based progressions using Dorian mode for modern funk, house, and R&B. Dorian is a minor scale with a raised 6th - creating a brighter, cooler minor sound than natural minor. This is the mode behind Daft Punk, Thundercat, and Miles Davis."
  },

  sequencer: {
    tempo: 110,
    key: "D",
    scale: "Dorian",
    stepCount: 64,
    bars: 4,
    pitchRange: {
      low: 48,
      high: 84
    }
  },

  exercise: {
    title: "Build a Dorian Vamp",
    description: "Create a modal progression in <strong>D Dorian</strong> using <strong>Dm7 → Em7 → Dm7 → Cmaj7</strong>. Dorian mode has a natural 6th (B natural in D Dorian) instead of the flat 6th in natural minor. This creates that funky, sophisticated minor sound.",
    tip: "Dorian mode = minor scale with raised 6th. D Dorian: D-E-F-G-A-B-C (compare to D natural minor: D-E-F-G-A-Bb-C). That B natural instead of Bb creates the 'cool minor' sound. Use i-ii vamps (Dm7-Em7) and emphasize the 6th (B) in your melody. Think So What by Miles Davis!",
    steps: [
      { text: "Bar 1-2: <strong>Dm7</strong> (D-F-A-C) - the home chord" },
      { text: "Bar 3: <strong>Em7</strong> (E-G-B-D) - the ii chord in Dorian" },
      { text: "Bar 4: <strong>Dm7 → Cmaj7</strong> back to tonic" },
      { text: "Add melody using <strong>D Dorian scale: D-E-F-G-A-B-C</strong>" },
      { text: "Emphasize the <strong>B natural</strong> (6th) - this is what makes it Dorian!" },
      { text: "Listen for the funky, modal vibe - not major, not natural minor" }
    ]
  },

  validation: {
    type: "modal_progression",
    mode: "Dorian",
    root: "D",
    requiredChords: [
      { time: 0, pitches: [62, 65, 69, 72], chordName: "Dm7", minDuration: 32 },
      { time: 32, pitches: [64, 67, 71, 74], chordName: "Em7" },
      { time: 48, pitches: [62, 65, 69, 72], chordName: "Dm7" },
      { time: 56, pitches: [60, 64, 67, 71], chordName: "Cmaj7" }
    ],
    melody: {
      scale: [62, 64, 65, 67, 69, 71, 72, 74, 76, 77, 79, 81, 83],  // D Dorian
      minNotes: 8,
      emphasizeCharacteristicNote: 71  // B natural (the 6th)
    }
  },

  messages: applyMessagePreset("harmony", {
    initial: "Build Dm7 → Em7 → Dm7 → Cmaj7 in D Dorian. Use D-E-F-G-A-B-C scale, emphasizing the B natural (6th degree).",
    success: "Excellent! You've mastered Dorian mode - that cool, funky minor sound. Notice how the raised 6th (B) creates brightness while keeping the minor vibe!",
    error: "Check: Dm7 = D-F-A-C, Em7 = E-G-B-D, Cmaj7 = C-E-G-B. Melody uses D Dorian scale (D-E-F-G-A-B-C) with B natural, not Bb!"
  }),

  mode: {
    sandbox: false,
    showTargetHint: true,
    enablePresets: false,
    enableExport: false,
    sequencerType: "piano-roll"
  },


  learningObjectives: [
    "Understand core concepts in harmony 17",
    "Program the target pattern with timing accuracy",
    "Apply this pattern in a full track context"
  ],


  theory: {
    sections: [
      {
        title: "Core Theory: Harmony 17",
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
