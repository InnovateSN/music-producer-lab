/**
 * Music Producer Lab - Lesson Configuration
 * Lesson: Bass 16 - UK Garage & Grime Bass
 */

import { applyMessagePreset, buildHeroEyebrow } from "./config-presets.js";

export const lessonConfig = {
  // ====================
  // LESSON METADATA
  // ====================
  lessonKey: "mpl-bass-16-progress",
  lessonNumber: 16,
  lessonCategory: "Bass & Low End",

  // ====================
  // NAVIGATION
  // ====================
  nextLessonUrl: "lesson-bass-17.html",
  prevLessonUrl: "lesson-bass-15.html",
  overviewUrl: "labs.html",

  // ====================
  // HERO SECTION
  // ====================
  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 16, categoryLabel: "Bass & Low End" }),
    title: "UK Garage & Grime Bass:",
    titleHighlight: "UK Garage & Grime Bass",
    subtitle: "Create skippy UK Garage bass and dark Grime sub-bass patterns. Master the UK bass sound with 2-step rhythms. Learn professional techniques used in industry-standard productions."
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
    description: "Create skippy UK Garage bass and dark Grime sub-bass patterns. Master the UK bass sound with 2-step rhythms. This lesson covers professional techniques for UK Garage & Grime Bass.",
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
        content: `This lesson explores UK Garage & Grime Bass with focus on professional production techniques.

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
        content: `Apply UK Garage & Grime Bass techniques in your productions:

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
    "Master UK Garage & Grime Bass techniques and concepts",
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
    success: "Excellent! You've mastered UK Garage & Grime Bass. Professional-level skills!",
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
