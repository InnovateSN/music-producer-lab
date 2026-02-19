/**
 * Music Producer Lab - Lesson Configuration
 * Lesson: Drums 3 - Hi-hats in 1/8 (Feel Subdivisions)
 */

import { applyMessagePreset, buildHeroEyebrow } from "./config-presets.js";

export const lessonConfig = {
  // ====================
  // LESSON METADATA
  // ====================
  lessonKey: "mpl-lesson3-progress",
  lessonNumber: 3,
  lessonCategory: "Drum pattern",


  reviewMetadata: {
    lastReviewed: "2026-02-19",
    reviewVersion: "didactic-audit-v4-rollout-phase-1",
    reviewedAgainst: ["AES", "Wikipedia", "Ableton"],
    sources: {
      wikipedia: [
        "https://en.wikipedia.org/wiki/Digital_audio_workstation",
        "https://en.wikipedia.org/wiki/Rhythm",
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
  nextLessonUrl: "lesson-drums-4.html",
  prevLessonUrl: "lesson-drums-2.html",
  overviewUrl: "labs.html",
  
  // ====================
  // HERO SECTION
  // ====================
  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 3, categoryLabel: "Drum pattern" }),
    title: "Hi-hats in 1/8:",
    titleHighlight: "feel subdivisions",
    subtitle: "Program hi-hats on every eighth note to hear the & subdivisions (<span class=\"nowrap\">1 & 2 & 3 & 4 &</span>)."
  },
  
  // ====================
  // SEQUENCER SETTINGS
  // ====================
  sequencer: {
    tempo: 120,
    stepCount: 16,
    swing: 0,
    enableVelocity: true, // Enable velocity control for practice
    requiredTempo: 120
  },
  
  // ====================
  // EXERCISE INFO
  // ====================
  exercise: {
    title: "Add Hi-Hats on Eighth Notes",
    description: "Time to add <strong>hi-hats</strong> playing eighth notes (1 & 2 & 3 & 4 &). This fills in the space between kicks and makes the groove feel more energetic.",
    tip: "Count '1 & 2 & 3 & 4 &' - the hi-hat plays on every number AND every '&'!",
    steps: [
      { text: "<strong>Set the tempo to 120 BPM</strong> using the Tempo slider." },
      { text: "<strong>Kick row:</strong> Steps <strong>1, 5, 9, 13</strong> (quarter notes)." },
      { text: "<strong>Snare row:</strong> Steps <strong>5 and 13</strong> (backbeat)." },
      { text: "<strong>Hi-Hat row:</strong> Click <strong>every odd step: 1, 3, 5, 7, 9, 11, 13, 15</strong>." },
      { text: "The hi-hats play twice as fast as the kick, creating the \"pulse\" of the beat." }
    ]
  },
  
  // ====================
  // INSTRUMENTS CONFIG
  // ====================
  instruments: [
    {
      id: "kick",
      label: "Kick",
      color: "linear-gradient(135deg,#ff5a3d,#ffb28a)",
      targetSteps: [0, 4, 8, 12],
      instructionText: "Kick: 4 on the floor pattern (locked from L2).",
      patternHint: { label: "Kick" }
    },
    {
      id: "snare",
      label: "Snare",
      color: "linear-gradient(135deg,#5f4dff,#8a9bff)",
      targetSteps: [4, 12],
      instructionText: "Snare: Backbeat on 2 and 4 (locked from L2).",
      patternHint: { label: "Snare" }
    },
    {
      id: "hihat",
      label: "Hi-Hat",
      color: "linear-gradient(135deg,#00d4ff,#b8ffdd)",
      targetSteps: [0, 2, 4, 6, 8, 10, 12, 14],
      instructionText: "Hi-Hat: Program the eighth-note pattern (1 & 2 & 3 & 4 &). It should hit every odd step.",
      patternHint: { label: "Hi-Hat" }
    }
  ],
  
  // ====================
  // PATTERN HINT CONFIG
  // ====================
  patternHint: {
    enabled: true,
    note: "Hi-hat on every eighth note: steps 1, 3, 5, 7, 9, 11, 13, 15"
  },
  
  // ====================
  // COMPLETION MESSAGES
  // ====================
  messages: applyMessagePreset("drums", {
    initial: "Add hi-hats on eighth notes to unlock the next lesson.",
    success: "Correct! You've mastered eighth-note hi-hats. Proceed to the next lesson.",
    error: "Not quite right. Check that hi-hats are on all odd steps (1, 3, 5, 7, 9, 11, 13, 15)!"
  }),
  
  // ====================
  // MODE FLAGS
  // ====================
  mode: {
    sandbox: false,
    showTargetHint: true,
    enablePresets: false,
    enableExport: false
  },

  learningObjectives: [
    "Program straight eighth-note hi-hats across a 4/4 bar",
    "Differentiate kick, snare, and hi-hat rhythmic roles",
    "Build a complete beginner drum groove with three voices"
  ],

  theory: {
    sections: [
      {
        title: "Why Eighth-Note Hi-Hats Matter",
        content: `
Straight eighth-note hi-hats add continuity between kick and snare accents.
Even when the pattern is simple, this constant subdivision helps listeners feel forward motion and timing stability.

In a 16-step sequencer, eighth notes are every two steps (1, 3, 5, 7, 9, 11, 13, 15 in 1-indexed display).
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
