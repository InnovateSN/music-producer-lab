/**
 * Music Producer Lab - Lesson Configuration
 * Lesson: Drums 1 - 4 on the floor
 */

import { applyMessagePreset, buildHeroEyebrow } from "./config-presets.js";

export const lessonConfig = {
  // ====================
  // LESSON METADATA
  // ====================
  lessonKey: "mpl-lesson1-progress",
  lessonNumber: 1,
  lessonCategory: "Drum pattern",
  
  // ====================
  // NAVIGATION
  // ====================
  nextLessonUrl: "lesson-drums-2.html",
  prevLessonUrl: "lesson-drums-0.html",
  overviewUrl: "labs.html",
  
  // ====================
  // HERO SECTION
  // ====================
  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 1, categoryLabel: "Drum pattern" }),
    title: "4 on the Floor:",
    titleHighlight: "Your First Full Beat",
    subtitle: "Build the most important rhythm pattern in electronic music. You'll create a repeating rhythm that feels stable, danceable, and easy to recognize. This single pattern is the foundation behind house, techno, and most modern dance music. Once you understand this, everything else in drum programming becomes much less mysterious."
  },
  
  // ====================
  // SEQUENCER SETTINGS
  // ====================
  sequencer: {
    tempo: 120,
    stepCount: 16,
    swing: 0,
    requiredTempo: 120 // Students must set tempo to 120 BPM
  },
  
  // ====================
  // EXERCISE INFO
  // ====================
  exercise: {
    title: "Build the 4-on-the-Floor Kick Pattern",
    description: "<strong>\"4 on the floor\"</strong> means a kick drum on every beat of the bar. Since there are four beats in a bar (in 4/4 time), you place four kicks equally spaced. This creates a steady pulse that dancers can lock onto. It might sound \"too simple,\" and that's exactly the point - this simplicity is power. It leaves space for everything else you'll add later: hi-hats, claps, bass, chords, and melodies.",
    tip: "Count \"one-two-three-four\" out loud while the loop plays. The kick should hit exactly when you say each number!",
    steps: [
      { text: "<strong>Set the tempo to 120 BPM</strong> using the Tempo slider below the sequencer. This is the standard house music tempo." },
      { text: "<strong>Click on steps 1, 5, 9, and 13</strong> in the Kick row to place your kicks." },
      { text: "These positions correspond to the <strong>four main beats</strong> of the bar (quarter notes)." },
      { text: "Press <strong>Play</strong> to hear your pattern loop. Does it feel even and steady?" },
      { text: "Listen: Does the loop flow smoothly from end back to start without stumbling?" },
      { text: "When satisfied, click <strong>Check Exercise</strong> to verify your pattern and tempo." }
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
      instructionText: "Exercise — Kick: Create the \"4 on the floor\" pattern by placing one kick on each of the four beats. In the 16-step grid, the four beats are steps 1, 5, 9, and 13. When you count \"one-two-three-four,\" these are where the kicks land. This is the heartbeat of the track.",
      patternHint: {
        label: "Kick"
      }
    }
  ],
  
  // ====================
  // PATTERN HINT CONFIG
  // ====================
  patternHint: {
    enabled: true,
    note: "Kick on every beat: steps 1, 5, 9, and 13"
  },
  
  // ====================
  // COMPLETION MESSAGES
  // ====================
  messages: applyMessagePreset("drums", {
    initial: "Complete the kick exercise to unlock the next lesson.",
    success: "🎉 Correct! Great job! You can now proceed to the next lesson.",
    error: "Not quite right. Make sure you have kicks on steps 1, 5, 9, and 13!"
  }),
  
  // ====================
  // MODE FLAGS
  // ====================
  mode: {
    sandbox: false,
    showTargetHint: true,
    enablePresets: false,
    enableExport: false
  }
};

if (typeof window !== 'undefined') {
  window.LESSON_CONFIG = lessonConfig;
}
