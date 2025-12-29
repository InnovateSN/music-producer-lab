/**
 * Music Producer Lab - Lesson Configuration
 * Lesson: Drums 21 - Velocity Practice Playground
 *
 * Interactive practice lesson with visual examples demonstrating
 * velocity control, dynamics, and how the velocity slider affects sound.
 */

import { applyMessagePreset, buildHeroEyebrow } from "./config-presets.js";

export const lessonConfig = {
  // ====================
  // LESSON METADATA
  // ====================
  lessonKey: "mpl-drums-21-practice",
  lessonNumber: 21,
  lessonCategory: "Drums & Rhythm",
  depthLevel: 3,

  // ====================
  // NAVIGATION
  // ====================
  nextLessonUrl: "labs.html",
  prevLessonUrl: "lesson-drums-20.html",
  overviewUrl: "labs.html",

  // ====================
  // HERO SECTION
  // ====================
  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 21, categoryLabel: "Practice Lab" }),
    title: "Velocity",
    titleHighlight: "Practice Playground",
    subtitle: "Explore <strong>velocity</strong> control (note intensity 0-127) with practical and visual examples. Learn how velocity transforms robotic patterns into natural and dynamic grooves."
  },

  // ====================
  // SEQUENCER CONFIG
  // ====================
  sequencer: {
    tempo: 100,
    stepCount: 16,
    swing: 0,
    showBeatMarkers: true,
    showStepNumbers: true,
    autoSaveState: true,
    enableVelocity: true // ENABLE VELOCITY LANES UI
  },

  // ====================
  // EXERCISE
  // ====================
  exercise: {
    title: "Velocity Practice Exercises",
    description: "Try these example patterns to understand how velocity control works. Listen to the differences and experiment freely!",
    tip: "💡 Drag up/down on each step to change velocity. Notice how the sound volume changes!",
    steps: [
      { text: "<strong>Example 1 - Kick:</strong> Listen to 3 kicks with different velocities: Low (30), Medium (80), High (127). Notice the volume difference!" },
      { text: "<strong>Example 2 - Snare:</strong> Compare loud snare (120) on the backbeat with soft ghost notes (25) between beats." },
      { text: "<strong>Example 3 - Hi-Hat:</strong> Pattern with accents (110) on downbeats and soft notes (50) on off-beats." },
      { text: "<strong>Experiment:</strong> Try creating your own patterns with different velocities. Use the tooltip (number that appears) to see exact values!" }
    ]
  },

  // ====================
  // INSTRUMENTS (Pre-loaded examples)
  // ====================
  instruments: [
    {
      id: "kick",
      label: "Kick Demo",
      color: "linear-gradient(135deg, #ff6b6b, #ee5a24)",
      initialPattern: {
        steps: [0, 4, 8],
        velocities: [30, 80, 127]
      },
      instructionText: "🎯 EXAMPLE: 3 kicks with Low→Medium→High velocity. Listen to the difference!",
      patternHint: {
        enabled: true,
        note: "Step 1 (vel 30) → Step 5 (vel 80) → Step 9 (vel 127)"
      }
    },
    {
      id: "snare",
      label: "Snare Dynamics",
      color: "linear-gradient(135deg, #feca57, #ff9f43)",
      initialPattern: {
        steps: [4, 6, 12, 14],
        velocities: [120, 25, 120, 25]
      },
      instructionText: "🎯 EXAMPLE: Loud snares (120) on main beats + ghost notes (25) between beats.",
      patternHint: {
        enabled: true,
        note: "Beat 2&4 LOUD (120) + SOFT ghost notes (25)"
      }
    },
    {
      id: "hihat",
      label: "Hi-Hat Accents",
      color: "linear-gradient(135deg, #00d2d3, #01a3a4)",
      initialPattern: {
        steps: [0, 2, 4, 6, 8, 10, 12, 14],
        velocities: [110, 50, 110, 50, 110, 50, 110, 50]
      },
      instructionText: "🎯 EXAMPLE: Hi-hat 8th notes with accents (110) on downbeats and soft (50) on off-beats.",
      patternHint: {
        enabled: true,
        note: "Downbeats LOUD (110) + off-beats SOFT (50)"
      }
    },
    {
      id: "clap",
      label: "Clap Crescendo",
      color: "linear-gradient(135deg, #a29bfe, #6c5ce7)",
      initialPattern: {
        steps: [0, 4, 8, 12],
        velocities: [40, 70, 100, 127]
      },
      instructionText: "🎯 EXAMPLE: Gradual crescendo from soft (40) to very loud (127).",
      patternHint: {
        enabled: true,
        note: "Crescendo: 40 → 70 → 100 → 127"
      }
    }
  ],

  // ====================
  // VALIDATION (Disabled for playground)
  // ====================
  validation: {
    checkVelocity: false,
    velocityTolerance: 999,
    requireGhostNotes: false
  },

  // ====================
  // PATTERN HINT
  // ====================
  patternHint: {
    enabled: true,
    note: "📚 These are pre-loaded examples. Press PLAY to listen, then modify the velocities to experiment!"
  },

  // ====================
  // MESSAGES
  // ====================
  messages: applyMessagePreset("drums", {
    initial: "🎨 Welcome to the Velocity Playground! Press PLAY to hear the examples, then experiment by modifying velocities. There are no mistakes here—just experimentation!",
    success: "🎵 Great work! Keep experimenting with velocities to understand how they affect the sound.",
    error: "",
    alreadyCompleted: "Keep experimenting! Every change helps you better understand velocity."
  }),

  // ====================
  // MODE FLAGS
  // ====================
  mode: {
    sandbox: true, // Sandbox mode - no validation, pure experimentation
    showTargetHint: true,
    enablePresets: false,
    enableExport: true,
    showVelocityLane: true,
    enableVelocityEditing: true
  },

  // ====================
  // LEARNING OBJECTIVES
  // ====================
  learningObjectives: [
    "Understand how velocity (0-127) controls note volume",
    "Hear the difference between low velocities (ghost notes) and high velocities (accents)",
    "Learn to use the velocity slider by dragging up/down",
    "Experiment with dynamics and contrasts to create natural grooves",
    "See velocity visually through the blue bar in buttons"
  ],

  // ====================
  // VELOCITY VISUAL GUIDE
  // ====================
  velocityGuide: {
    enabled: true,
    examples: [
      {
        range: "0-40",
        label: "Ghost Notes",
        description: "Very soft notes, almost whispered. Add texture without dominating.",
        color: "rgba(0,240,255,0.2)",
        audioExample: "kick-soft"
      },
      {
        range: "41-80",
        label: "Normal",
        description: "Standard velocity for most notes. Clearly audible but not aggressive.",
        color: "rgba(0,240,255,0.5)",
        audioExample: "kick-medium"
      },
      {
        range: "81-120",
        label: "Accents",
        description: "Emphasized notes that define the main rhythm. Loud and clear.",
        color: "rgba(0,240,255,0.7)",
        audioExample: "kick-loud"
      },
      {
        range: "121-127",
        label: "Maximum",
        description: "Maximum volume for moments of impact. Use sparingly!",
        color: "rgba(0,240,255,0.9)",
        audioExample: "kick-max"
      }
    ]
  },

  // ====================
  // PRACTICAL TIPS
  // ====================
  practicalTips: [
    {
      title: "How to Use the Velocity Slider",
      steps: [
        "Click on a step to activate/deactivate it",
        "Drag vertically UP to increase velocity (louder)",
        "Drag vertically DOWN to decrease velocity (softer)",
        "The number that appears shows exact velocity (0-127)",
        "The BLUE bar inside the step visually shows intensity"
      ]
    },
    {
      title: "Velocity in Real Music",
      steps: [
        "Real drummers don't hit every note with the same force",
        "Ghost notes (25-40) add groove and texture",
        "Accents (100+) on main beats provide structure",
        "Velocity variations create dynamics and interest",
        "The difference between soft and loud is what makes music human"
      ]
    },
    {
      title: "Suggested Exercises",
      steps: [
        "Try recreating the kick pattern with all notes at the same velocity",
        "Then vary the velocities—notice how it becomes more interesting!",
        "Experiment with crescendo (gradually increasing) and diminuendo",
        "Create a pattern with strong contrast: ghost notes + accents",
        "Listen to real music and try to identify different velocities"
      ]
    }
  ]
};

if (typeof window !== 'undefined') {
  window.LESSON_CONFIG = lessonConfig;
}
