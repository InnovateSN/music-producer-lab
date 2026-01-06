/**
 * Music Producer Lab - Lesson Configuration
 * Lesson: Arrangement 9 - Layering Without Mud
 *
 * This lesson teaches how to layer multiple sounds without creating frequency
 * clashes, muddiness, or overcrowding. Master the art of sonic space.
 */

import { applyMessagePreset, buildHeroEyebrow } from "./config-presets.js";

export const lessonConfig = {
  // ====================
  // LESSON METADATA
  // ====================
  lessonKey: "mpl-arrangement-9-progress",
  lessonNumber: 9,
  lessonCategory: "Arrangement",
  depthLevel: 3,

  // ====================
  // NAVIGATION
  // ====================
  nextLessonUrl: "lesson-arrangement-10.html",
  prevLessonUrl: "lesson-arrangement-8.html",
  overviewUrl: "labs.html",

  // ====================
  // HERO SECTION
  // ====================
  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 9, categoryLabel: "Arrangement" }),
    title: "Layering Sounds:",
    titleHighlight: "Without Creating Mud",
    subtitle: "Learn to <strong>layer multiple instruments</strong> without frequency clashes. Master <strong>frequency spacing</strong>, <strong>stereo separation</strong>, and the golden rule: <strong>one element per frequency range</strong>."
  },

  // ====================
  // EXERCISE INFO
  // ====================
  exercise: {
    title: "Build a Layered Arrangement with Clear Frequency Separation",
    description: "Create an arrangement that layers multiple instruments while maintaining clarity. Each element should occupy its own <strong>frequency space</strong> and <strong>stereo position</strong>. The goal is fullness without muddiness.",
    tip: "The frequency spectrum is like a bookshelf: you can't fit two books in the same spot. Place bass in the lows, pads in the mids, leads in the highs. When elements overlap frequencies, separate them in stereo space (left/right) or time (rhythm).",
    steps: [
      { text: "<strong>Foundation layer</strong> - Place bass and kick in the low end (20-200Hz)" },
      { text: "<strong>Mid layer</strong> - Add pads or rhythm elements in mids (200Hz-2kHz)" },
      { text: "<strong>High layer</strong> - Add lead melody or hi-hats in highs (2kHz-8kHz)" },
      { text: "<strong>Air layer</strong> - Add presence or shimmer in ultra-highs (8kHz+)" },
      { text: "<strong>Check for conflicts</strong> - No more than 2 elements in the same frequency range" },
      { text: "<strong>Use stereo separation</strong> - Pan conflicting elements left/right" }
    ]
  },

  // ====================
  // FREQUENCY ZONES
  // ====================
  frequencyZones: [
    {
      name: "Sub Bass",
      range: "20-60Hz",
      icon: "🔊",
      color: "#e74c3c",
      allowedElements: 1,
      typical: ["808", "Sub bass", "Kick fundamental"],
      rule: "ONLY ONE element here—usually the kick or bass, never both at full power"
    },
    {
      name: "Bass",
      range: "60-250Hz",
      icon: "🎸",
      color: "#e67e22",
      allowedElements: 2,
      typical: ["Bass guitar", "Synth bass", "Kick body", "Tom drums"],
      rule: "Maximum 2 elements. If bass and kick both live here, use sidechain compression"
    },
    {
      name: "Low Mids",
      range: "250Hz-500Hz",
      icon: "🎹",
      color: "#f39c12",
      allowedElements: 2,
      typical: ["Guitar", "Piano", "Synth pads", "Snare body"],
      rule: "Watch for muddiness. This range makes or breaks your mix clarity"
    },
    {
      name: "Mids",
      range: "500Hz-2kHz",
      icon: "🎤",
      color: "#27ae60",
      allowedElements: 3,
      typical: ["Vocals", "Lead synth", "Guitar", "Snare", "Claps"],
      rule: "The most important range. Lead vocals/melody should dominate here"
    },
    {
      name: "High Mids",
      range: "2kHz-6kHz",
      icon: "✨",
      color: "#3498db",
      allowedElements: 2,
      typical: ["Vocal presence", "Synth leads", "Hi-hats", "Cymbals"],
      rule: "Adds clarity and definition. Too much = harshness"
    },
    {
      name: "Highs/Air",
      range: "6kHz-20kHz",
      icon: "💫",
      color: "#9b59b6",
      allowedElements: 2,
      typical: ["Cymbals", "Hi-hats", "Vocal air", "Synth shimmer"],
      rule: "Adds brightness and space. Use sparingly for that 'expensive' sound"
    }
  ],

  // ====================
  // LAYERING TECHNIQUES
  // ====================
  layeringTechniques: [
    {
      name: "Frequency Separation",
      description: "Place each layer in a different frequency range using EQ.",
      example: "Bass at 80Hz, pad at 500Hz, lead at 2kHz, hi-hats at 8kHz"
    },
    {
      name: "Stereo Separation",
      description: "If two elements share frequencies, pan one left and one right.",
      example: "Rhythm guitar left, piano right—both in mids but separated spatially"
    },
    {
      name: "Rhythmic Separation",
      description: "Layer elements that play at different times or have different rhythms.",
      example: "Bass on beats 1 and 3, synth stabs on 2 and 4"
    },
    {
      name: "Dynamic Separation",
      description: "Use volume automation so elements take turns being prominent.",
      example: "Lead melody loud during chorus, pad loud during verse"
    }
  ],

  // ====================
  // VALIDATION
  // ====================
  validation: {
    type: "layering",
    maxElementsPerFrequencyZone: {
      subBass: 1,
      bass: 2,
      lowMids: 2,
      mids: 3,
      highMids: 2,
      highs: 2
    },
    requireStereoSeparation: true,
    minFrequencyZonesUsed: 4
  },

  // ====================
  // MESSAGES
  // ====================
  messages: applyMessagePreset("arrangement", {
    initial: "Layer instruments across different frequency zones for a full, clear sound!",
    success: "🎚️ Excellent layering! Your arrangement is full but not muddy. This is professional frequency management.",
    error: "Check frequency conflicts—you may have too many elements in the same range.",
    alreadyCompleted: "You've mastered layering! Try creating even more complex layers while maintaining clarity."
  }),

  // ====================
  // MODE FLAGS
  // ====================
  mode: {
    type: "structure-builder",
    sandbox: false,
    showTimeline: true,
    showFrequencyAnalyzer: true,
    showStereoMeter: true
  },

  // ====================
  // LEARNING OBJECTIVES
  // ====================
  learningObjectives: [
    "Understand the six frequency zones and their purposes",
    "Apply the rule: one primary element per frequency range",
    "Use stereo separation to prevent frequency clashing",
    "Layer instruments for fullness without muddiness",
    "Identify and resolve frequency conflicts in arrangements"
  ]
};

if (typeof window !== 'undefined') window.LESSON_CONFIG = lessonConfig;
