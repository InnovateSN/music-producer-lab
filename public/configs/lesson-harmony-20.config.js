/**
 * Music Producer Lab - Lesson Configuration
 * Lesson: Harmony 20 - Pro Voicing Pack: Spread, Stack, and Control
 */

import { applyMessagePreset, buildHeroEyebrow } from "./config-presets.js";

export const lessonConfig = {
  lessonKey: "mpl-harmony-20-progress",
  lessonNumber: 20,
  lessonCategory: "Expert Techniques",

  nextLessonUrl: "harmony-playground.html",
  prevLessonUrl: "lesson-harmony-19.html",
  overviewUrl: "labs.html",

  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 20, categoryLabel: "Harmony & Melody" }),
    title: "Pro Voicing Pack:",
    titleHighlight: "Spread, Stack, and Control",
    subtitle: "Build professional chord voicings with controlled top notes and counter-melodies. You'll learn how to voice chords across multiple octaves, create smooth top-line motion, and layer harmony like a pro. This final lesson brings together everything for record-ready harmony."
  },

  sequencer: {
    tempo: 92,
    key: "F",
    scale: "Major",
    stepCount: 64,
    bars: 4,
    pitchRange: {
      low: 36,
      high: 84
    }
  },

  exercise: {
    title: "Voice a Progression with Top-Note Control",
    description: "Create a <strong>Fmaj9 → Gm7 → Cmaj9 → Am7</strong> progression with professional voicing: bass in low register, chord tones in mid register, and a <strong>controlled top note melody</strong> (9th and 7th) that moves smoothly. This is how session players and arrangers voice chords.",
    tip: "Pro voicing separates registers: bass (root), body (3rd, 5th, 7th in middle octaves), and top voice (melody/color tone like 9th). The top note creates a counter-melody while lower notes provide harmonic support. Spread chords wide - low bass, mid harmony, high melody. This creates clarity, space, and professional sound!",
    steps: [
      { text: "Bar 1: <strong>Fmaj9</strong> - Bass F2, Body A3-C4-E4, Top G4 (9th)" },
      { text: "Bar 2: <strong>Gm7</strong> - Bass G2, Body Bb3-D4-F4, Top F4 (7th)" },
      { text: "Bar 3: <strong>Cmaj9</strong> - Bass C2, Body E3-G3-B3, Top D4 (9th)" },
      { text: "Bar 4: <strong>Am7</strong> - Bass A1, Body C3-E3-G3, Top C4 (3rd)" },
      { text: "Notice: Top notes (G-F-D-C) create a descending melody!" },
      { text: "This is professional voicing - separation, space, and top-line control" }
    ]
  },

  validation: {
    type: "professional_voicing",
    requiredChords: [
      {
        time: 0,
        chordName: "Fmaj9",
        voicing: {
          bass: [41],  // F2
          body: [57, 60, 64],  // A3, C4, E4
          top: [67]  // G4 (9th)
        }
      },
      {
        time: 16,
        chordName: "Gm7",
        voicing: {
          bass: [43],  // G2
          body: [58, 62, 65],  // Bb3, D4, F4
          top: [65]  // F4 (7th)
        }
      },
      {
        time: 32,
        chordName: "Cmaj9",
        voicing: {
          bass: [48],  // C3
          body: [52, 55, 59],  // E3, G3, B3
          top: [62]  // D4 (9th)
        }
      },
      {
        time: 48,
        chordName: "Am7",
        voicing: {
          bass: [45],  // A2
          body: [48, 52, 55],  // C3, E3, G3
          top: [60]  // C4 (3rd)
        }
      }
    ],
    topNoteMotion: {
      pitches: [67, 65, 62, 60],  // G-F-D-C descending
      mustMoveSmooth: true
    }
  },

  messages: applyMessagePreset("harmony", {
    initial: "Voice Fmaj9 → Gm7 → Cmaj9 → Am7 with separated registers: low bass, mid body, high melody. Top notes should move smoothly: G→F→D→C.",
    success: "Congratulations! You've completed the Harmony & Melody curriculum and mastered professional voicing! You now have the harmonic skills of a professional producer and arranger. Ready to explore the Harmony Playground!",
    error: "Separate registers: Bass in low octave (roots), body in middle (3rd/5th/7th), top voice high (9th or color tone). Top notes create melody: G→F→D→C."
  }),

  mode: {
    sandbox: false,
    showTargetHint: true,
    enablePresets: false,
    enableExport: false,
    sequencerType: "piano-roll"
  },


  learningObjectives: [
    "Understand core concepts in harmony 20",
    "Program the target pattern with timing accuracy",
    "Apply this pattern in a full track context"
  ],


  theory: {
    sections: [
      {
        title: "Core Theory: Harmony 20",
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
