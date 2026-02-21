/**
 * Music Producer Lab - Lesson Configuration
 * Lesson: Bass 8 - Sub Bass Layering
 */

import { applyMessagePreset, buildHeroEyebrow, buildLessonQualityPreset } from "./config-presets.js";

const lessonQualityPreset = buildLessonQualityPreset({
  lessonCategory: "Bass & Low End",
  lessonNumber: 8
});

export const lessonConfig = {
  // ====================
  // LESSON METADATA
  // ====================
  lessonKey: "mpl-bass-8-progress",
  lessonNumber: 8,
  lessonCategory: "Bass & Low End",


  reviewMetadata: {
    lastReviewed: "2026-02-19",
    reviewVersion: "didactic-audit-v4-rollout-phase-1",
    reviewedAgainst: ["AES", "Wikipedia", "Ableton"],
    sources: {
      wikipedia: [
        "https://en.wikipedia.org/wiki/Digital_audio_workstation",
        "https://en.wikipedia.org/wiki/Bass_(sound)",
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

  // ====================
  // NAVIGATION
  // ====================
  nextLessonUrl: "lesson-bass-9.html",
  prevLessonUrl: "lesson-bass-7.html",
  overviewUrl: "labs.html",

  // ====================
  // HERO SECTION
  // ====================
  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 8, categoryLabel: "Bass & Low End" }),
    title: "Sub Bass Layering",
    titleHighlight: "",
    subtitle: "Layer sub bass (pure sine wave) with mid bass for clarity and weight. Master the two-layer bass technique used in professional EDM, dubstep, and bass music production."
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
    title: "Create a Layered Bass",
    description: "Professional bass sounds often use two layers: a pure sub (felt) and a mid bass (heard). This separation creates weight without mud.",
    tip: "Sub bass (C1-C2) is felt in your chest. Mid bass (C2-C4) is heard with clarity. Together they're powerful.",
    steps: ['Place <strong>C2 on step 1</strong> (low sub bass, duration 4).', 'Add <strong>C3 on step 1</strong> (mid bass, same timing, duration 2).', 'The C2 provides weight, C3 provides definition.', 'Play and feel the layered bass punch.']
  },

  // ====================
  // THEORY SECTIONS
  // ====================
  theory: {
    sections: [{'title': 'Why Layer Bass?', 'content': '**Problem:** Single bass note can be muddy (too low) or thin (too high)\n\n**Solution:** Two layers:\n1. **Sub bass (C1-C2):** Pure sine wave, felt not heard, provides weight\n2. **Mid bass (C2-C4):** Richer waveform (saw/square), heard clearly, provides character\n\n**Result:** Powerful low end (sub) + clear definition (mid) = Professional bass'}, {'title': 'Production Technique', 'content': "In a DAW, you'd use:\n- **Sub:** Sine wave synth, no effects, C1-C2 range\n- **Mid:** Sawtooth/square synth, distortion/filter, C2-C4 range\n\nBoth play same notes, different octaves. Sub provides club-system rumble, mid provides home-speaker clarity."}]
  },

  // ====================
  // PIANO ROLL CONFIG
  // ====================
  pianoRoll: {
    targetNotes: [{'pitch': 36, 'step': 0, 'duration': 4}, {'pitch': 48, 'step': 0, 'duration': 2}],
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
  },


  learningObjectives: [
    "Understand core concepts in bass 8",
    "Program the target pattern with timing accuracy",
    "Apply this pattern in a full track context"
  ],


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
