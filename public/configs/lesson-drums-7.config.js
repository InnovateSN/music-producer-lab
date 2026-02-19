/**
 * Music Producer Lab - Lesson Configuration
 * Lesson: Drums 7 - Ghost Notes & Dynamics
 * 
 * This lesson teaches velocity control, ghost notes, and dynamic expression
 * to transform robotic patterns into human-feeling grooves.
 */

import { applyMessagePreset, buildHeroEyebrow } from "./config-presets.js";

export const lessonConfig = {
  // ====================
  // LESSON METADATA
  // ====================
  lessonKey: "mpl-drums-7-progress",
  lessonNumber: 7,
  lessonCategory: "Drums & Rhythm",
  depthLevel: 4,
  
  // ====================
  // NAVIGATION
  // ====================
  nextLessonUrl: "lesson-drums-8.html",
  prevLessonUrl: "lesson-drums-6.html",
  overviewUrl: "labs.html",
  
  // ====================
  // HERO SECTION
  // ====================
  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 7, categoryLabel: "Drums & Rhythm" }),
    title: "Ghost Notes &",
    titleHighlight: "Dynamics",
    subtitle: "Add <strong>ghost notes</strong> (soft snare hits between main beats) and master <strong>velocity control</strong> to transform robotic patterns into grooves with human feel."
  },
  
  // ====================
  // SEQUENCER CONFIG
  // ====================
  sequencer: {
    tempo: 95,
    stepCount: 16,
    swing: 0,
    showBeatMarkers: true,
    showStepNumbers: true,
    autoSaveState: true,
    enableVelocity: true, // ENABLE VELOCITY LANES UI - Key feature for this lesson
    requiredTempo: 95
  },
  
  // ====================
  // EXERCISE
  // ====================
  exercise: {
    title: "Add Ghost Notes to a Backbeat",
    description: "Transform a basic kick-snare pattern into a professional groove by adding ghost notes (soft snare hits) on strategic positions.",
    tip: "Ghost notes should be FELT, not obviously heard. Use low velocity (25-35) for ghost notes, high velocity (100+) for accents.",
    steps: [
      { text: "<strong>Set the tempo to 95 BPM</strong> using the Tempo slider." },
      { text: "<strong>Foundation:</strong> Kick on steps 1 and 9 (beats 1 and 3 only)." },
      { text: "<strong>Backbeat snare:</strong> Place snare at HIGH velocity (100+) on steps 5 and 13 (beats 2 and 4)." },
      { text: "<strong>Ghost notes:</strong> Add soft snare hits (velocity 25-35) on steps 7 and 10." },
      { text: "<strong>Hi-hat pattern:</strong> Eighth notes on all steps (1, 3, 5, 7, 9, 11, 13, 15) with accent dynamics." }
    ]
  },
  
  // ====================
  // INSTRUMENTS
  // ====================
  instruments: [
    {
      id: "kick",
      label: "Kick",
      color: "linear-gradient(135deg, #ff6b6b, #ee5a24)",
      targetSteps: [0, 8],
      targetVelocity: [100, 100],
      instructionText: "Kick on beats 1 and 3 at normal velocity.",
      patternHint: {
        enabled: true,
        note: "Kick on steps 1 and 9 (beats 1 and 3)"
      }
    },
    {
      id: "snare",
      label: "Snare",
      color: "linear-gradient(135deg, #feca57, #ff9f43)",
      targetSteps: [4, 12],
      targetVelocity: [110, 110],
      instructionText: "Backbeat snare on 2 and 4 at HIGH velocity (accent).",
      patternHint: {
        enabled: true,
        note: "LOUD snare on 5 and 13 (beats 2 & 4)"
      }
    },
    {
      id: "snare-ghost",
      label: "Snare Ghost",
      color: "linear-gradient(135deg, rgba(254, 202, 87, 0.5), rgba(255, 159, 67, 0.5))",
      targetSteps: [6, 9],
      targetVelocity: [30, 30],
      instructionText: "Ghost notes at LOW velocity (25-35) on steps 7 and 10.",
      patternHint: {
        enabled: true,
        note: "SOFT snare on steps 7 and 10 (velocity ~25-35)"
      }
    },
    {
      id: "hihat",
      label: "Hi-Hat",
      color: "linear-gradient(135deg, #00d2d3, #01a3a4)",
      targetSteps: [0, 2, 4, 6, 8, 10, 12, 14],
      targetVelocity: [100, 60, 100, 60, 100, 60, 100, 60],
      instructionText: "8th note hi-hats with accented downbeats and softer off-beats.",
      patternHint: {
        enabled: true,
        note: "Accent on 1, 5, 9, 13; softer on &'s"
      }
    }
  ],
  
  // ====================
  // VELOCITY TARGETS
  // ====================
  velocityTargets: {
    snareAccent: { min: 100, max: 127 },
    snareGhost: { min: 15, max: 45 },
    hihatAccent: { min: 85, max: 127 },
    hihatSoft: { min: 45, max: 75 }
  },
  
  // ====================
  // VALIDATION
  // ====================
  validation: {
    checkVelocity: true,
    velocityTolerance: 15, // Allow ±15 velocity variance
    requireGhostNotes: true,
    minimumGhostNotes: 2, // Exactly 2 ghost notes in this pattern
    requireDynamicContrast: true,
    minimumDynamicRange: 60 // At least 60 velocity difference between ghost (30) and accent (110)
  },
  
  // ====================
  // PATTERN HINT
  // ====================
  patternHint: {
    enabled: true,
    note: "Ghost notes on steps 7 and 10. Accents on 5 and 13. Dynamic contrast is key!"
  },
  
  // ====================
  // MESSAGES
  // ====================
  messages: applyMessagePreset("drums", {
    initial: "Add ghost notes and vary your velocity to complete this exercise.",
    success: "Excellent dynamics! Your groove has real human feel now. Proceed to the next lesson!",
    error: "Check your ghost notes—they should be soft (velocity 25-40) and your accents should be loud (100+).",
    alreadyCompleted: "You've mastered ghost notes! Feel free to experiment with different velocity patterns."
  }),
  
  // ====================
  // MODE FLAGS
  // ====================
  mode: {
    sandbox: false,
    showTargetHint: true,
    enablePresets: false,
    enableExport: false,
    showVelocityLane: true,
    enableVelocityEditing: true
  },
  
  // ====================
  // LEARNING OBJECTIVES
  // ====================
  learningObjectives: [
    "Understand what ghost notes are and why they matter",
    "Program ghost notes at appropriate velocity (15-40)",
    "Create dynamic contrast between accents and soft notes",
    "Transform robotic patterns into human-feeling grooves",
    "Use velocity to add expression and texture"
  ],
  
  // ====================
  // CONCEPTS TAUGHT
  // ====================
  conceptsTaught: [
    {
      name: "Ghost Notes",
      description: "Very soft drum hits (velocity 15-40) placed between main beats to add texture and groove.",
      velocityRange: "15-40"
    },
    {
      name: "Accents",
      description: "Emphasized hits (velocity 100-127) on important beats that define the rhythm.",
      velocityRange: "100-127"
    },
    {
      name: "Dynamic Range",
      description: "The difference between the softest and loudest notes, creating expression and life.",
      velocityRange: "Full spectrum"
    }
  ],


  theory: {
    sections: [
      {
        title: "Core Theory: Drums 7",
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
