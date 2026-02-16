/**
 * Music Producer Lab - Lesson Configuration
 * Lesson: Bass 15 - Reggae & Dub Bass: Heavy Low End
 */

import { applyMessagePreset, buildHeroEyebrow } from "./config-presets.js";

export const lessonConfig = {
  // ====================
  // LESSON METADATA
  // ====================
  lessonKey: "mpl-bass-15-progress",
  lessonNumber: 15,
  lessonCategory: "Bass & Low End",

  // ====================
  // NAVIGATION
  // ====================
  nextLessonUrl: "lesson-bass-16.html",
  prevLessonUrl: "lesson-bass-14.html",
  overviewUrl: "labs.html",

  // ====================
  // HERO SECTION
  // ====================
  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 15, categoryLabel: "Bass & Low End" }),
    title: "Reggae & Dub Bass:",
    titleHighlight: "Heavy Low End",
    subtitle: "Program massive reggae basslines with emphasis on the one and three. Master dub bass with delay and space. Learn professional techniques used in industry-standard productions."
  },

  // ====================
  // SEQUENCER SETTINGS
  // ====================
  sequencer: {
    tempo: 120,
    stepCount: 16,
    bars: 2,
    noteRange: { min: 36, max: 60 },
  },

  // ====================
  // EXERCISE INFO
  // ====================
  exercise: {
    title: "Complete the Bass Exercise",
    description: "Program massive reggae basslines with emphasis on the one and three. Master dub bass with delay and space. This lesson covers professional techniques for Reggae & Dub Bass: Heavy Low End.",
    tip: "Focus on the foundational elements and build complexity gradually. Listen critically to how each technique affects the overall bass sound.",
    steps: [
      '<strong>Step 1</strong> — Study the theory sections to understand the concepts.',
      '<strong>Step 2</strong> — Analyze the target pattern and identify key characteristics.',
      '<strong>Step 3</strong> — Program the bass pattern following the guidelines.',
      '<strong>Step 4</strong> — Listen critically and compare to reference tracks.',
      '<strong>Step 5</strong> — Experiment with variations while maintaining the core technique.',
      'Check when ready to validate your work.'
    ]
  },

  // ====================
  // THEORY SECTIONS
  // ====================
  theory: {
    sections: [
      {
        title: 'Core Concepts',
        content: `This lesson explores Reggae & Dub Bass: Heavy Low End with focus on professional production techniques.

**Key Learning Points:**
- Understanding the characteristic sound and feel
- Rhythm and timing considerations
- Frequency management and sonic characteristics
- Genre-specific applications
- Professional mixing and processing techniques

Master these concepts to create bass that sits perfectly in any mix and serves the song effectively.`
      },
      {
        title: 'Professional Application',
        content: `Apply Reggae & Dub Bass: Heavy Low End techniques in your productions:

**Production Workflow:**
1. Start with a clear sonic goal
2. Choose appropriate synthesis or sample method
3. Program the rhythm with intention
4. Process for clarity and power
5. Mix in context with other elements

**Common Use Cases:**
- Genre-specific productions
- Creative sound design
- Professional mixing scenarios
- Live performance considerations

Study reference tracks to hear these techniques in action.`
      }
    ]
  },

  // ====================
  // PIANO ROLL CONFIG
  // ====================
  pianoRoll: {
    targetNotes: [
      { pitch: 40, step: 0, duration: 2, velocity: 100 },
      { pitch: 47, step: 2, duration: 2, velocity: 90 },
      { pitch: 40, step: 4, duration: 2, velocity: 95 },
      { pitch: 43, step: 6, duration: 2, velocity: 85 }
    ],
    highlightScale: [40, 42, 43, 45, 47, 48, 50, 52],
    showChordDetection: false,
    allowPolyphony: false,
    bassMode: true,
    waveform: 'sawtooth'
  },

  // ====================
  // LEARNING OBJECTIVES
  // ====================
  learningObjectives: [
    "Master Reggae & Dub Bass: Heavy Low End techniques and concepts",
    "Apply professional production workflows",
    "Understand genre-specific bass characteristics",
    "Develop critical listening skills for bass",
    "Create industry-standard bass productions"
  ],

  // ====================
  // COMPLETION MESSAGES
  // ====================
  messages: applyMessagePreset("default", {
    initial: "Complete the bass exercise to master this technique.",
    success: "Excellent! You've mastered Reggae & Dub Bass: Heavy Low End. Professional-level skills!",
    error: "Review the theory and target pattern. Pay attention to the key characteristics.",
    alreadyCompleted: "You've completed this lesson. Keep practicing these professional techniques!"
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
  }
};

if (typeof window !== 'undefined') {
  window.LESSON_CONFIG = lessonConfig;
}
