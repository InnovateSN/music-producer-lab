/**
 * Music Producer Lab - Lesson Configuration
 * Lesson: Arrangement 15 - Rhythmic Variation
 *
 * This lesson teaches how to keep rhythm interesting through variation.
 * Master groove changes, beat switches, and rhythmic development.
 */

import { applyMessagePreset, buildHeroEyebrow } from "./config-presets.js";

export const lessonConfig = {
  lessonKey: "mpl-arrangement-15-progress",
  lessonNumber: 15,
  lessonCategory: "Arrangement",
  depthLevel: 4,

  nextLessonUrl: "lesson-arrangement-16.html",
  prevLessonUrl: "lesson-arrangement-14.html",
  overviewUrl: "labs.html",

  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 15, categoryLabel: "Arrangement" }),
    title: "Rhythmic Variation:",
    titleHighlight: "Groove Evolution",
    subtitle: "Keep rhythm <strong>interesting</strong> while maintaining the <strong>core groove</strong>. Master <strong>beat switches</strong>, <strong>fill patterns</strong>, and <strong>rhythmic development</strong> across sections."
  },

  exercise: {
    title: "Create Rhythmic Variation Across Sections",
    description: "Build an arrangement where the <strong>rhythm evolves</strong> while keeping recognizable patterns. Vary hi-hat patterns, add percussion, change kick patterns, but maintain the core groove identity.",
    tip: "Keep the core kick pattern the same (listeners lock onto this), but vary everything else: hi-hat rhythm, snare placement, percussion layers. Second chorus: switch from straight to swung hi-hats for freshness.",
    steps: [
      { text: "<strong>Establish core groove</strong> - Create your main kick/snare pattern" },
      { text: "<strong>Vary hi-hats</strong> - Change from 8ths to 16ths to triplets" },
      { text: "<strong>Add percussion layers</strong> - Shakers, claps, tambourine" },
      { text: "<strong>Change the feel</strong> - Straight to swung, or double-time feel" },
      { text: "<strong>Beat switch</strong> - Completely different pattern for bridge" },
      { text: "<strong>Return to core</strong> - Final chorus brings back original groove" }
    ]
  },

  variationTechniques: [
    { technique: "Hi-Hat Variation", description: "8ths → 16ths → Triplets → Shuffle", impact: "Subtle" },
    { technique: "Percussion Layering", description: "Add shakers, claps, tambourine progressively", impact: "Medium" },
    { technique: "Snare Movement", description: "Move snare hits by 16th notes for variation", impact: "Medium" },
    { technique: "Beat Switch", description: "Completely change drum pattern for bridge", impact: "High" },
    { technique: "Half-Time/Double-Time", description: "Change perceived tempo (same BPM)", impact: "High" },
    { technique: "Swing Amount", description: "Vary from straight (0%) to heavily swung (70%)", impact: "Medium" }
  ],

  messages: applyMessagePreset("arrangement", {
    initial: "Create rhythmic variation while maintaining the core groove!",
    success: "🥁 Excellent groove evolution! Your rhythmic variations keep it fresh without losing the vibe.",
    error: "Keep the core groove recognizable while varying the details.",
    alreadyCompleted: "You've mastered rhythmic variation!"
  }),

  mode: {
    type: "structure-builder",
    sandbox: false,
    showTimeline: true,
    showRhythmGrid: true
  },

  learningObjectives: [
    "Vary rhythm while maintaining core groove identity",
    "Apply six rhythmic variation techniques",
    "Use beat switches effectively for contrast",
    "Layer percussion progressively across sections",
    "Understand half-time and double-time feels"
  ]
};

if (typeof window !== 'undefined') window.LESSON_CONFIG = lessonConfig;
