/**
 * Music Producer Lab - Lesson Configuration
 * Lesson: Drums 2 - Adding the Snare (Backbeat)
 */

import { applyMessagePreset, buildHeroEyebrow } from "./config-presets.js";

export const lessonConfig = {
  lessonKey: "mpl-lesson2-progress",
  lessonNumber: 2,
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
  
  nextLessonUrl: "lesson-drums-3.html",
  prevLessonUrl: "lesson-drums-1.html",
  overviewUrl: "labs.html",
  
  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 2, categoryLabel: "Drum pattern" }),
    title: "The backbeat:",
    titleHighlight: "adding the snare",
    subtitle: "Learn about the <strong>backbeat</strong> - one of the most important concepts in popular music. The snare on beats 2 and 4 defines the groove."
  },
  
  sequencer: {
    tempo: 120,
    stepCount: 16,
    swing: 0,
    requiredTempo: 120
  },
  
  exercise: {
    title: "Add the Backbeat Snare Pattern",
    description: "The <strong>backbeat</strong> is the snare hitting on beats 2 and 4. Combined with the kick on 1, 2, 3, 4, this creates the foundation of rock, pop, and most modern music.",
    tip: "The backbeat creates a call-and-response between kick and snare. Kick pushes forward, snare answers back!",
    steps: [
      { text: "<strong>Set the tempo to 120 BPM</strong> using the Tempo slider." },
      { text: "<strong>Kick row:</strong> Keep the 4-on-the-floor pattern (steps 1, 5, 9, 13)." },
      { text: "<strong>Snare row:</strong> Add snare on steps <strong>5 and 13</strong> (beats 2 and 4)." },
      { text: "Notice how the snare \"answers\" the kick on beats 2 and 4." },
      { text: "Press <strong>Play</strong> to hear the classic kick-snare groove." }
    ]
  },
  
  instruments: [
    {
      id: "kick",
      label: "Kick",
      color: "linear-gradient(135deg,#ff5a3d,#ffb28a)",
      targetSteps: [0, 4, 8, 12],
      instructionText: "Kick: Keep the 4-on-the-floor pattern from Lesson 1.",
      patternHint: { label: "Kick" }
    },
    {
      id: "snare",
      label: "Snare",
      color: "linear-gradient(135deg,#5f4dff,#8a9bff)",
      targetSteps: [4, 12],
      instructionText: "Snare: Add the backbeat on beats 2 and 4 (steps 5 and 13).",
      patternHint: { label: "Snare" }
    }
  ],
  
  patternHint: {
    enabled: true,
    note: "Kick on every beat, Snare on beats 2 and 4"
  },
  
  messages: applyMessagePreset("drums", {
    initial: "Add the snare backbeat to unlock the next lesson.",
    success: "Correct! You've mastered the backbeat. Proceed to the next lesson.",
    error: "Not quite right. Check both the kick (1, 5, 9, 13) and snare (5, 13) patterns!"
  }),
  
  mode: {
    sandbox: false,
    showTargetHint: true,
    enablePresets: false,
    enableExport: false
  },

  learningObjectives: [
    "Understand the role of the backbeat in modern grooves",
    "Program snare hits on beats 2 and 4 in a 16-step sequencer",
    "Recognize kick/snare interplay as groove foundation"
  ],

  theory: {
    sections: [
      {
        title: "Backbeat Fundamentals",
        content: `
The backbeat places snare accents on beats 2 and 4, creating tension and release against the kick pulse.
This pattern is central to pop, rock, hip-hop, and electronic production because it gives listeners a stable
reference point for head nodding and dance movement.

In a 16-step grid, beats 2 and 4 correspond to steps 5 and 13 (1-indexed), or 4 and 12 (0-indexed).
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
