/**
 * Music Producer Lab - Lesson Configuration
 * Lesson: Harmony 12 - Motif Magic: Repeat with Variation
 */

import { applyMessagePreset, buildHeroEyebrow } from "./config-presets.js";

export const lessonConfig = {
  lessonKey: "mpl-harmony-12-progress",
  lessonNumber: 12,
  lessonCategory: "Melody Writing",


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

  nextLessonUrl: "lesson-harmony-13.html",
  prevLessonUrl: "lesson-harmony-11.html",
  overviewUrl: "labs.html",

  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 12, categoryLabel: "Harmony & Melody" }),
    title: "Motif Magic:",
    titleHighlight: "Repeat with Variation",
    subtitle: "Write memorable melodies by repeating a short musical phrase (motif) and varying one element each time. This is the foundation of hooks, riffs, and catchy toplines. Learn the technique behind every viral melody from Daft Punk to Drake."
  },

  sequencer: {
    tempo: 115,
    key: "C",
    scale: "Major",
    stepCount: 64,
    bars: 4,
    pitchRange: {
      low: 60,
      high: 84
    }
  },

  exercise: {
    title: "Create a 4-Bar Melody Using Motif Development",
    description: "Write a short 2-3 note motif, then repeat it 3 times with variations. Each repetition should change <strong>one element</strong>: pitch (higher/lower), rhythm (timing), or contour (direction). This creates memorable, cohesive melodies that stick in listeners' heads.",
    tip: "Great melodies are built on repetition + variation. Create a simple 2-3 note phrase (your motif), then repeat it with small changes. Think 'same but different' - enough repetition for memorability, enough variation for interest. This is how Daft Punk, Avicii, and The Weeknd write hooks.",
    steps: [
      { text: "Bar 1: Create a short motif (2-3 notes, simple rhythm)" },
      { text: "Bar 2: Repeat the motif but <strong>change the pitch</strong> (transpose up or down)" },
      { text: "Bar 3: Repeat again but <strong>change the rhythm</strong> (same notes, different timing)" },
      { text: "Bar 4: Final variation - combine changes or return to original" },
      { text: "Use chord tones from C-G-Am-F progression as anchor points" },
      { text: "Listen for how repetition creates familiarity while variation adds interest" }
    ]
  },

  validation: {
    type: "motif_development",
    progression: [
      { time: 0, chord: "C", pitches: [60, 64, 67] },
      { time: 16, chord: "G", pitches: [67, 71, 74] },
      { time: 32, chord: "Am", pitches: [69, 72, 76] },
      { time: 48, chord: "F", pitches: [65, 69, 72] }
    ],
    melody: {
      minNotes: 10,
      maxNotes: 16,
      requireMotificRepetition: true,
      minRepetitions: 2  // Motif should appear at least 2-3 times
    }
  },

  messages: applyMessagePreset("harmony", {
    initial: "Create a short motif and repeat it 3 times with variations. Change pitch, rhythm, or contour each time while keeping it recognizable.",
    success: "Brilliant! You've mastered motif development - the secret to memorable melodies. Notice how repetition makes it catchy while variation keeps it interesting!",
    error: "Create a clear 2-3 note pattern in bar 1, then repeat it with variations in bars 2-4. Use chord tones (C-E-G, G-B-D, A-C-E, F-A-C) as anchor points."
  }),

  mode: {
    sandbox: false,
    showTargetHint: true,
    enablePresets: false,
    enableExport: false,
    sequencerType: "piano-roll"
  },


  learningObjectives: [
    "Understand core concepts in harmony 12",
    "Program the target pattern with timing accuracy",
    "Apply this pattern in a full track context"
  ],


  theory: {
    sections: [
      {
        title: "Core Theory: Harmony 12",
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
