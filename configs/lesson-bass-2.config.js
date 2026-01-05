/**
 * Music Producer Lab - Lesson Configuration
 * Lesson: Bass 2 - Bass & Kick Relationship
 */

import { applyMessagePreset, buildHeroEyebrow } from "./config-presets.js";

export const lessonConfig = {
  // ====================
  // LESSON METADATA
  // ====================
  lessonKey: "mpl-bass-2-progress",
  lessonNumber: 2,
  lessonCategory: "Bass & Low End",

  // ====================
  // NAVIGATION
  // ====================
  nextLessonUrl: "lesson-bass-3.html",
  prevLessonUrl: "lesson-bass-1.html",
  overviewUrl: "labs.html",

  // ====================
  // HERO SECTION
  // ====================
  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 2, categoryLabel: "Bass & Low End" }),
    title: "Bass & Kick Relationship",
    titleHighlight: "Locking the Low End",
    subtitle: "Understand how bass and kick work together in the low end. Program bass notes that complement, not compete with, your kick pattern. When bass and kick are aligned, they create a powerful, unified foundation."
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
    title: "Lock Bass with Kick Pattern",
    description: "In this exercise, you'll place bass notes that align with your kick drum pattern. This creates a unified low end where bass and kick feel like one cohesive element rather than two competing sounds.",
    tip: "Play with the pattern and notice how bass notes that land WITH the kick feel stronger than bass notes that land BETWEEN kicks.",
    steps: ['Place a <strong>C3 note on step 1</strong> (aligns with kick).', 'Add another <strong>C3 on step 9</strong> (beat 3, also aligns with kick).', 'Press <strong>Play</strong> and listen to how bass and kick unify on beats 1 and 3.', 'Click <strong>Check Exercise</strong> when ready.']
  },

  // ====================
  // THEORY SECTIONS
  // ====================
  theory: {
    sections: [{'title': 'Why Bass and Kick Must Work Together', 'content': 'Bass and kick both occupy low frequencies (40-200 Hz). If they clash, you get:\n\n- **Muddiness**: Both sounds blur together, losing clarity\n- **Phase cancellation**: Waveforms interfere, reducing punch\n- **Weak low end**: Instead of combining power, they subtract from each other\n\nWhen properly aligned (same timing, complementary pitches), they create a unified "thump" that\'s powerful and clear.'}, {'title': 'The Lock Technique', 'content': '"Locking" means placing bass notes at the same time as kick hits:\n\n**Benefits:**\n- Bass and kick reinforce each other (additive)\n- Clearer attack (kick transient + bass body)\n- Less frequency masking\n- Easier to mix (one unified low-end event)\n\n**Rule of thumb:** Start with bass locked to kick, then add movement between kicks once the foundation is solid.'}]
  },

  // ====================
  // PIANO ROLL CONFIG
  // ====================
  pianoRoll: {
    targetNotes: [{'pitch': 48, 'step': 0, 'duration': 1}, {'pitch': 48, 'step': 8, 'duration': 1}],
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
    success: "🎉 Excellent! You've mastered this bass technique.",
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
