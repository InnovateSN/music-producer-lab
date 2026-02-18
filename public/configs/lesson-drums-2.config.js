/**
 * Music Producer Lab - Lesson Configuration
 * Lesson: Drums 2 - Adding the Snare (Backbeat)
 */

import { applyMessagePreset, buildHeroEyebrow } from "./config-presets.js";

export const lessonConfig = {
  lessonKey: "mpl-lesson2-progress",
  lessonNumber: 2,
  lessonCategory: "Drum pattern",
  
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
