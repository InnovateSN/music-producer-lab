/**
 * Music Producer Lab - Lesson Configuration
 * Lesson: Harmony 11 - Smooth the Jumps: Chord Inversions
 */

import { applyMessagePreset, buildHeroEyebrow, buildLessonQualityPreset } from "./config-presets.js";

const lessonQualityPreset = buildLessonQualityPreset({
  lessonCategory: "Voice Leading",
  lessonNumber: 11
});

export const lessonConfig = {
  lessonKey: "mpl-harmony-11-progress",
  lessonNumber: 11,
  lessonCategory: "Voice Leading",


  reviewMetadata: {
    lastReviewed: "2026-02-19",
    reviewVersion: "didactic-audit-v4-rollout-phase-2",
    reviewedAgainst: ["AES", "Wikipedia", "Ableton"],
    sources: {
      wikipedia: [
        "https://en.wikipedia.org/wiki/Music_theory",
        "https://en.wikipedia.org/wiki/Ear_training",
      ],
      ableton: [
        "https://www.ableton.com/en/live-manual/",
        "https://help.ableton.com/",
      ],
      aes: [
        "https://aes2.org/publications/standards/",
      ]
    }
  },

  nextLessonUrl: "lesson-harmony-12.html",
  prevLessonUrl: "lesson-harmony-10.html",
  overviewUrl: "labs.html",

  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 11, categoryLabel: "Harmony & Melody" }),
    title: "Smooth the Jumps:",
    titleHighlight: "Chord Inversions",
    subtitle: "Re-voice chords so notes move by small steps instead of leaps. You'll learn inversions - playing the same chord with different notes on bottom. This creates smooth voice leading that makes progressions sound instantly more professional and connected."
  },

  sequencer: {
    tempo: 90,
    key: "C",
    scale: "Major",
    stepCount: 64,
    bars: 4,
    pitchRange: {
      low: 48,
      high: 84
    }
  },

  exercise: {
    title: "Use Inversions for Smooth Voice Leading",
    description: "Play the progression <strong>C → Am → F → G</strong> using inversions to minimize movement between chords. Instead of jumping around, keep notes as close together as possible. This teaches smooth voice leading - the secret to professional-sounding chord progressions.",
    tip: "Chord inversions mean playing the same notes but with a different note on the bottom. C major can be C-E-G (root position), E-G-C (1st inversion), or G-C-E (2nd inversion) - same notes, different order. Use inversions to keep the top note moving smoothly by step or staying the same.",
    steps: [
      { text: "Bar 1: <strong>C major</strong> root position (C-E-G) " },
      { text: "Bar 2: <strong>Am</strong> first inversion (C-E-A) - notice C and E stay!" },
      { text: "Bar 3: <strong>F major</strong> (C-F-A) - C stays, E moves to F" },
      { text: "Bar 4: <strong>G major</strong> first inversion (B-D-G)" },
      { text: "Compare to root position version - inversions sound much smoother!" },
      { text: "Keep chord tones in middle register (C4-C5) for best voice leading" }
    ]
  },

  validation: {
    type: "voice_leading_exercise",
    requiredChords: [
      { time: 0, pitches: [60, 64, 67], chordName: "C", allowInversions: true },
      { time: 16, pitches: [60, 64, 69], chordName: "Am", allowInversions: true },
      { time: 32, pitches: [60, 65, 69], chordName: "F", allowInversions: true },
      { time: 48, pitches: [59, 62, 67], chordName: "G", allowInversions: true }
    ],
    voiceLeading: {
      maxTotalMovement: 12,  // Maximum semitones of total voice movement
      preferSmallSteps: true
    }
  },

  messages: applyMessagePreset("harmony", {
    initial: "Build C → Am → F → G using inversions. Keep notes close together - minimize jumping between chords.",
    success: "Excellent! Notice how smooth the chord changes feel when notes move by small steps. This is voice leading - the foundation of professional harmony writing!",
    error: "Try to keep common tones between chords. Use inversions (different notes on bottom) to reduce large jumps. Goal is smooth, stepwise motion between chords."
  }),

  mode: {
    sandbox: false,
    showTargetHint: true,
    enablePresets: false,
    enableExport: false,
    sequencerType: "piano-roll"
  },


  learningObjectives: [
    "Understand core concepts in harmony 11",
    "Program the target pattern with timing accuracy",
    "Apply this pattern in a full track context"
  ],


  theory: {
    sections: [
      {
        title: "Core Theory: Harmony 11",
        content: `
This lesson focuses on practical workflow and musical intent.
Use the target pattern as a repeatable building block, then adapt it to your genre and arrangement needs.

When practicing, prioritize timing consistency first, then refine tone, dynamics, and variation.
        `
      }
    ]
  },

  assessmentRubric: {
    accuracy: {
      target: ">= 80%",
      evidence: "Quiz answers and concept checks inside the lesson"
    },
    timing: {
      target: "<= ±25 ms on guided rhythmic tasks",
      evidence: "Metronome-aligned exercise submissions"
    },
    mixClarity: {
      target: "No uncontrolled clipping and clear element separation",
      evidence: "A/B playback checks with level-matched references"
    },
    arrangementFlow: {
      target: "Transitions preserve groove and perceived energy",
      evidence: "Section-to-section transition checklist"
    }
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
