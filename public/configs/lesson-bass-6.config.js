/**
 * Music Producer Lab - Lesson Configuration
 * Lesson: Bass 6 - Walking Basslines
 */

import { applyMessagePreset, buildHeroEyebrow, buildLessonQualityPreset } from "./config-presets.js";

const lessonQualityPreset = buildLessonQualityPreset({
  lessonCategory: "Bass & Low End",
  lessonNumber: 6
});

export const lessonConfig = {
  // ====================
  // LESSON METADATA
  // ====================
  lessonKey: "mpl-bass-6-progress",
  lessonNumber: 6,
  lessonCategory: "Bass & Low End",


  reviewMetadata: {
    lastReviewed: "2026-02-19",
    reviewVersion: "didactic-audit-v4-rollout-phase-1",
    reviewedAgainst: ["AES", "Wikipedia", "Ableton"],
    sources: {
      wikipedia: [
        "https://en.wikipedia.org/wiki/Digital_audio_workstation",
        "https://en.wikipedia.org/wiki/Bass_(sound)",
      ],
      ableton: [
        "https://www.ableton.com/en/live-manual/",
        "https://help.ableton.com/",
      ],
      aes: [
        "https://aes2.org/publications/standards/",
      ]
    }
  }},

  // ====================
  // NAVIGATION
  // ====================
  nextLessonUrl: "lesson-bass-7.html",
  prevLessonUrl: "lesson-bass-5.html",
  overviewUrl: "labs.html",

  // ====================
  // HERO SECTION
  // ====================
  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 6, categoryLabel: "Bass & Low End" }),
    title: "Walking Basslines",
    titleHighlight: "",
    subtitle: "Build smooth, walking basslines that move through chord changes. Use passing tones to connect chords musically and create elegant, flowing bass movement."
  },

  // ====================
  // SEQUENCER SETTINGS
  // ====================
  sequencer: {
    tempo: 120,
    stepCount: 16,
    bars: 1,
    noteRange: { min: 36, max: 60 }, // C2 to C4 (bass range)
  },

  // ====================
  // EXERCISE INFO
  // ====================
  exercise: {
    title: "Create a Walking Bass Line",
    description: "Walking bass creates smooth connection between chords by using scale tones and chromatic passing notes. It's the foundation of jazz, blues, and many pop styles.",
    tip: "Think of walking bass as a smooth path between destinations (chord roots). You're creating a journey, not teleporting.",
    steps: ['Start with <strong>C3 on step 1</strong> (root of C chord).', 'Add <strong>D3 on step 5</strong> (passing tone).', 'Add <strong>E3 on step 9</strong> (passing tone).', 'Add <strong>G3 on step 13</strong> (arrival at G chord root).', 'Listen to the smooth walk from C to G.']
  },

  // ====================
  // THEORY SECTIONS
  // ====================
  theory: {
    sections: [{'title': 'Walking Bass Principles', 'content': '**Goal:** Smooth connection between chord roots\n\n**Techniques:**\n1. Stepwise motion (C→D→E)\n2. Arpeggios (C→E→G from C chord)\n3. Chromatic passing (C→C#→D)\n4. Approach tones (leading tone before target)\n\n**Common pattern:** Root → Scale tone → Passing tone → Next root'}]
  },

  // ====================
  // PIANO ROLL CONFIG
  // ====================
  pianoRoll: {
    targetNotes: [{'pitch': 48, 'step': 0, 'duration': 1}, {'pitch': 50, 'step': 4, 'duration': 1}, {'pitch': 52, 'step': 8, 'duration': 1}, {'pitch': 55, 'step': 12, 'duration': 1}],
    highlightScale: [48, 50, 52, 53, 55, 57, 59, 60], // C major scale in bass range
    showChordDetection: false,
    allowPolyphony: false,
    bassMode: true,
    waveform: 'sawtooth'
  },

  // ====================
  // COMPLETION MESSAGES
  // ====================
  messages: applyMessagePreset("default", {
    initial: "Complete the bass pattern exercise.",
    success: "Excellent! You've mastered this bass technique.",
    error: "Not quite. Check the target pattern and try again."
  }),

  // ====================
  // MODE FLAGS
  // ====================
  mode: {
    sandbox: false,
    sequencerType: 'piano-roll',
    showTargetHint: true,
    enablePresets: false,
    enableExport: false
  },


  learningObjectives: [
    "Understand core concepts in bass 6",
    "Program the target pattern with timing accuracy",
    "Apply this pattern in a full track context"
  ],


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
