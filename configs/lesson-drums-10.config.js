/**
 * Music Producer Lab - Lesson Configuration
 * Lesson: Drums 10 - Trap & 808 Patterns
 * 
 * This lesson teaches modern trap production including rolling hi-hats,
 * 808 bass programming, and signature trap rhythms.
 */

import { applyMessagePreset, buildHeroEyebrow } from "./config-presets.js";

export const lessonConfig = {
  // ====================
  // LESSON METADATA
  // ====================
  lessonKey: "mpl-drums-10-progress",
  lessonNumber: 10,
  lessonCategory: "Drums & Rhythm",
  depthLevel: 5,
  
  // ====================
  // NAVIGATION
  // ====================
  nextLessonUrl: "lesson-drums-11.html",
  prevLessonUrl: "lesson-drums-9.html",
  overviewUrl: "labs.html",
  
  // ====================
  // HERO SECTION
  // ====================
  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 10, categoryLabel: "Drums & Rhythm" }),
    title: "Trap &",
    titleHighlight: "808 Patterns",
    subtitle: "Master <strong>modern trap production</strong>. Program <strong>rolling hi-hats</strong>, <strong>808 bass patterns</strong>, and the signature rhythms that define contemporary music."
  },
  
  // ====================
  // SEQUENCER CONFIG
  // ====================
  sequencer: {
    tempo: 140,
    stepCount: 16,
    swing: 0,
    showBeatMarkers: true,
    showStepNumbers: true,
    autoSaveState: true,
    halfTime: true // Trap often feels like half-time
  },
  
  // ====================
  // EXERCISE
  // ====================
  exercise: {
    title: "Build a Trap Beat",
    description: "Create a modern trap pattern with rolling hi-hats, sparse snare placement, and strategic 808s.",
    tip: "In trap, less is more for the low end. Let the 808s breathe and fill the space between with hi-hat rolls.",
    steps: [
      { text: "<strong>808:</strong> Sparse placement on steps 1 and 9 (powerful but not constant)." },
      { text: "<strong>Snare:</strong> Backbeat on steps 5 and 13 (clap + snare layered)." },
      { text: "<strong>Hi-Hat (Closed):</strong> Rolling 16ths on every step for energy." },
      { text: "<strong>Hi-Hat (Open):</strong> Accent hits on steps 3 and 11 for variation." }
    ]
  },
  
  // ====================
  // INSTRUMENTS
  // ====================
  instruments: [
    {
      id: "808",
      label: "808",
      color: "linear-gradient(135deg, #e17055, #d63031)",
      targetSteps: [0, 8],
      instructionText: "808 bass/kick on 1 and 9—sparse but powerful.",
      patternHint: {
        enabled: true,
        note: "808: 1, 9 (let it breathe)"
      }
    },
    {
      id: "snare",
      label: "Snare/Clap",
      color: "linear-gradient(135deg, #fdcb6e, #f39c12)",
      targetSteps: [4, 12],
      instructionText: "Snare + clap layered on beats 2 and 4.",
      patternHint: {
        enabled: true,
        note: "Snare: 5, 13 (backbeat)"
      }
    },
    {
      id: "hihat-closed",
      label: "Hi-Hat (Closed)",
      color: "linear-gradient(135deg, #00cec9, #0984e3)",
      targetSteps: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
      instructionText: "Rolling 16th notes—the signature trap hi-hat pattern.",
      patternHint: {
        enabled: true,
        note: "Closed HH: every step (rolling)"
      }
    },
    {
      id: "hihat-open",
      label: "Hi-Hat (Open)",
      color: "linear-gradient(135deg, #a29bfe, #6c5ce7)",
      targetSteps: [2, 10],
      instructionText: "Open hi-hat accents on steps 3 and 11.",
      patternHint: {
        enabled: true,
        note: "Open HH: 3, 11 (accents)"
      }
    }
  ],
  
  // ====================
  // PATTERN HINT
  // ====================
  patternHint: {
    enabled: true,
    note: "Trap = Rolling hi-hats + sparse 808 + layered snare/clap"
  },
  
  // ====================
  // MESSAGES
  // ====================
  messages: applyMessagePreset("drums", {
    initial: "Build the trap pattern. Remember: rolling hi-hats and sparse 808!",
    success: "🎉 That's fire! You've got the trap sound down. Rolling hats + 808 = modern classic.",
    error: "Check your pattern—trap needs rolling hi-hats (every step) and sparse 808 placement.",
    alreadyCompleted: "You've mastered trap drums! Try adding triplet rolls and velocity variation."
  }),
  
  // ====================
  // MODE FLAGS
  // ====================
  mode: {
    sandbox: false,
    showTargetHint: true,
    enablePresets: false,
    enableExport: false,
    showVelocityControl: true
  },
  
  // ====================
  // GENRE INFO
  // ====================
  genreInfo: {
    name: "Trap",
    tempoRange: { min: 130, max: 160 },
    halfTime: { min: 65, max: 80 },
    origins: "Atlanta, early 2000s",
    keyArtists: ["Lex Luger", "Metro Boomin", "Southside", "TM88", "Pi'erre Bourne"],
    characteristics: [
      "Rolling hi-hats with triplet rolls",
      "808 as combined kick/bass",
      "Sparse, impactful snare/clap",
      "Heavy use of ad-libs and vocal chops",
      "Dark, minor key melodies"
    ]
  },
  
  // ====================
  // LEARNING OBJECTIVES
  // ====================
  learningObjectives: [
    "Program rolling hi-hat patterns (16ths + triplets)",
    "Use 808 as combined kick and bass instrument",
    "Create sparse but impactful snare/clap placement",
    "Understand the half-time feel in trap production"
  ],
  
  // ====================
  // 808 CONFIGURATION
  // ====================
  bass808Config: {
    pitchGlide: true,
    glideTime: "16th",
    decay: "long",
    distortion: "subtle",
    tuning: "Key of track"
  }
};

if (typeof window !== 'undefined') {
  window.LESSON_CONFIG = lessonConfig;
}
