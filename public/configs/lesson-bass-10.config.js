/**
 * Music Producer Lab - Lesson Configuration
 * Lesson: Bass 10 - Genre Bass:
 */

import { applyMessagePreset, buildHeroEyebrow } from "./config-presets.js";

export const lessonConfig = {
  // ====================
  // LESSON METADATA
  // ====================
  lessonKey: "mpl-bass-10-progress",
  lessonNumber: 10,
  lessonCategory: "Bass & Low End",

  // ====================
  // NAVIGATION
  // ====================
  nextLessonUrl: "null",
  prevLessonUrl: "lesson-bass-9.html",
  overviewUrl: "labs.html",

  // ====================
  // HERO SECTION
  // ====================
  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 10, categoryLabel: "Bass & Low End" }),
    title: "Genre Bass:",
    titleHighlight: "Techno vs Hip-Hop",
    subtitle: "Compare and contrast techno (driving, hypnotic) vs hip-hop (rhythmic, syncopated) bass approaches. Apply genre-specific techniques to match the style and energy of your track."
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
    title: "Create Two Genre Bass Patterns",
    description: "You'll program both a techno bass (repetitive, on-beat) and a hip-hop bass (syncopated, rhythmic) to understand how genre shapes bass programming.",
    tip: "Techno bass locks to the grid. Hip-hop bass plays around the grid. Same notes, different feel.",
    steps: ['<strong>Techno pattern:</strong> C3 on every beat (1, 5, 9, 13).', '<strong>Hip-hop pattern:</strong> C3 on beats 1 and 3, plus syncopated hits on steps 7 and 15.', 'Compare how each pattern creates different energy.', 'Check exercise to validate your understanding.']
  },

  // ====================
  // THEORY SECTIONS
  // ====================
  theory: {
    sections: [{'title': 'Techno Bass Characteristics', 'content': '**Techno bass:**\n- Repetitive (same note, same rhythm)\n- On-beat (hits with kick on 1, 5, 9, 13)\n- Driving, hypnotic, mechanical\n- Creates forward momentum\n- Minimal variation (intentional)\n\n**Goal:** Become part of the rhythm machine, not a melodic voice'}, {'title': 'Hip-Hop Bass Characteristics', 'content': "**Hip-hop bass:**\n- Syncopated (offbeat hits)\n- Rhythmic patterns (varies each bar)\n- Grooves with drums, doesn't just lock\n- Often uses 808-style sustained notes\n- More melodic freedom\n\n**Goal:** Create a rhythmic conversation with drums, support the flow"}]
  },

  // ====================
  // PIANO ROLL CONFIG
  // ====================
  pianoRoll: {
    targetNotes: [{'pitch': 48, 'step': 0, 'duration': 1}, {'pitch': 48, 'step': 4, 'duration': 1}, {'pitch': 48, 'step': 6, 'duration': 1}, {'pitch': 48, 'step': 8, 'duration': 1}, {'pitch': 48, 'step': 12, 'duration': 1}, {'pitch': 48, 'step': 14, 'duration': 1}],
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
  }
};

if (typeof window !== 'undefined') {
  window.LESSON_CONFIG = lessonConfig;
}
