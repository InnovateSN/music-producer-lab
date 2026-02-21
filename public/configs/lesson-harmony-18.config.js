/**
 * Music Producer Lab - Lesson Configuration
 * Lesson: Harmony 18 - Cinematic Lift: Pedal Tone + Chord Changes
 */

import { applyMessagePreset, buildHeroEyebrow, buildLessonQualityPreset } from "./config-presets.js";

const lessonQualityPreset = buildLessonQualityPreset({
  lessonCategory: "Advanced Techniques",
  lessonNumber: 18
});

export const lessonConfig = {
  lessonKey: "mpl-harmony-18-progress",
  lessonNumber: 18,
  lessonCategory: "Advanced Techniques",


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

  nextLessonUrl: "lesson-harmony-19.html",
  prevLessonUrl: "lesson-harmony-17.html",
  overviewUrl: "labs.html",

  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 18, categoryLabel: "Harmony & Melody" }),
    title: "Cinematic Lift:",
    titleHighlight: "Pedal Tone + Chord Changes",
    subtitle: "Create film-style emotion by holding one note (pedal tone) while chords shift above or below it. You'll learn how sustained bass notes or high drones create tension, atmosphere, and epic builds. This is the sound of Hans Zimmer, Inception, and ambient scoring."
  },

  sequencer: {
    tempo: 75,
    key: "C",
    scale: "Major",
    stepCount: 64,
    bars: 4,
    pitchRange: {
      low: 36,
      high: 84
    }
  },

  exercise: {
    title: "Build a Pedal Tone Progression",
    description: "Hold a <strong>C bass note pedal</strong> (sustained throughout all 4 bars) while chords change above it: <strong>C/C → F/C → Am/C → G/C</strong>. The unchanging bass creates a drone effect while harmony shifts above - generating tension and release.",
    tip: "A pedal tone (or pedal point) is a sustained note that continues while chords change. Usually in the bass (tonic pedal) or top voice (drone). It creates tension when the changing chords clash with the pedal, and release when they align. Film composers use this for emotional builds and atmosphere!",
    steps: [
      { text: "Low bass: Hold <strong>C (C2)</strong> for all 4 bars - this is the pedal tone" },
      { text: "Bar 1: <strong>C major</strong> (C-E-G) above the pedal - consonant" },
      { text: "Bar 2: <strong>F major</strong> (F-A-C) above the pedal - slight tension" },
      { text: "Bar 3: <strong>Am</strong> (A-C-E) above the pedal - dissonant, emotional" },
      { text: "Bar 4: <strong>G major</strong> (G-B-D) above the pedal - tension resolving" },
      { text: "Listen for how the sustained C creates atmosphere and the chords create motion" }
    ]
  },

  validation: {
    type: "pedal_tone_progression",
    pedalTone: {
      pitch: 48,  // C2
      sustainedThroughout: true,
      minDuration: 64  // All 4 bars
    },
    requiredChords: [
      { time: 0, pitches: [60, 64, 67], chordName: "C", overPedal: true },
      { time: 16, pitches: [65, 69, 72], chordName: "F", overPedal: true },
      { time: 32, pitches: [69, 72, 76], chordName: "Am", overPedal: true },
      { time: 48, pitches: [67, 71, 74], chordName: "G", overPedal: true }
    ],
    checkPedalContinuity: true
  },

  messages: applyMessagePreset("harmony", {
    initial: "Hold C bass pedal (C2) throughout. Play C → F → Am → G chords above it. The sustained bass creates cinematic atmosphere!",
    success: "Brilliant! You've mastered pedal tones - the secret to cinematic builds and ambient atmosphere. Notice how the unchanging bass creates tension as chords shift!",
    error: "Hold C (low C2) for all 4 bars. Above it: Bar 1 = C major (C-E-G), Bar 2 = F (F-A-C), Bar 3 = Am (A-C-E), Bar 4 = G (G-B-D)."
  }),

  mode: {
    sandbox: false,
    showTargetHint: true,
    enablePresets: false,
    enableExport: false,
    sequencerType: "piano-roll"
  },


  learningObjectives: [
    "Understand core concepts in harmony 18",
    "Program the target pattern with timing accuracy",
    "Apply this pattern in a full track context"
  ],


  theory: {
    sections: [
      {
        title: "Core Theory: Harmony 18",
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
