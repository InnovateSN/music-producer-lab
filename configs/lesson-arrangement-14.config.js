/**
 * Music Producer Lab - Lesson Configuration
 * Lesson: Arrangement 14 - Arrangement by Frequency
 *
 * This lesson teaches arranging by frequency spectrum rather than by instrument.
 * Think vertically: low, mid, and high frequency content per section.
 */

import { applyMessagePreset, buildHeroEyebrow } from "./config-presets.js";

export const lessonConfig = {
  lessonKey: "mpl-arrangement-14-progress",
  lessonNumber: 14,
  lessonCategory: "Arrangement",
  depthLevel: 4,

  nextLessonUrl: "lesson-arrangement-15.html",
  prevLessonUrl: "lesson-arrangement-13.html",
  overviewUrl: "labs.html",

  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 14, categoryLabel: "Arrangement" }),
    title: "Frequency-Based",
    titleHighlight: "Arrangement",
    subtitle: "Think <strong>vertically</strong>, not horizontally. Arrange by <strong>frequency content</strong>—low, mid, high. Master the art of <strong>frequency movement</strong> across sections for maximum clarity and impact."
  },

  exercise: {
    title: "Arrange by Frequency Spectrum Movement",
    description: "Create an arrangement by thinking about <strong>which frequencies are active</strong> in each section. Move frequency content strategically: verse might be mid-focused, chorus adds lows and highs for fullness.",
    tip: "Verse: Strong mids (vocals), light lows, minimal highs. Chorus: Full spectrum (lows, mids, highs all present). This creates massive perceived impact without adding many elements.",
    steps: [
      { text: "<strong>Intro: Mid-range only</strong> - Piano or guitar, no bass/highs" },
      { text: "<strong>Verse: Mids + light lows</strong> - Add bass but keep it simple" },
      { text: "<strong>Pre-chorus: Add highs</strong> - Introduce hi-hats or bright synth" },
      { text: "<strong>Chorus: Full spectrum</strong> - Lows (bass), mids (vocals), highs (cymbals)" },
      { text: "<strong>Breakdown: Remove lows</strong> - Keep mids/highs only" },
      { text: "<strong>Final chorus: Maximum spectrum</strong> - Sub-bass + air frequencies" }
    ]
  },

  frequencyStrategy: {
    lows: {
      range: "20-250Hz",
      purpose: "Power, weight, foundation",
      addWhen: "Chorus, drop, final section",
      removeWhen: "Verse, breakdown, intimacy"
    },
    mids: {
      range: "250Hz-4kHz",
      purpose: "Melody, vocals, clarity",
      addWhen: "Always present (core of song)",
      removeWhen: "Never completely—this is where the song lives"
    },
    highs: {
      range: "4kHz-20kHz",
      purpose: "Brightness, energy, excitement",
      addWhen: "Chorus, buildup, energy sections",
      removeWhen: "Intimate verse, warm breakdown"
    }
  },

  messages: applyMessagePreset("arrangement", {
    initial: "Arrange by moving frequency content between sections!",
    success: "🎛️ Brilliant frequency arrangement! Your vertical thinking creates clarity and impact.",
    error: "Think about which frequency ranges are active in each section.",
    alreadyCompleted: "You've mastered frequency-based arrangement!"
  }),

  mode: {
    type: "structure-builder",
    sandbox: false,
    showTimeline: true,
    showFrequencySpectrum: true
  },

  learningObjectives: [
    "Think vertically about arrangement (frequency ranges)",
    "Control low, mid, and high frequency content per section",
    "Use frequency movement to create impact",
    "Understand which frequencies to add/remove per section type",
    "Create fullness through frequency spectrum filling"
  ]
};

if (typeof window !== 'undefined') window.LESSON_CONFIG = lessonConfig;
