/**
 * Music Producer Lab - Lesson Configuration
 * Lesson: Arrangement 12 - Tension and Release
 *
 * This lesson teaches how to build and release musical tension.
 * Master suspense, anticipation, and satisfying resolution.
 */

import { applyMessagePreset, buildHeroEyebrow } from "./config-presets.js";

export const lessonConfig = {
  lessonKey: "mpl-arrangement-12-progress",
  lessonNumber: 12,
  lessonCategory: "Arrangement",
  depthLevel: 3,

  nextLessonUrl: "lesson-arrangement-13.html",
  prevLessonUrl: "lesson-arrangement-11.html",
  overviewUrl: "labs.html",

  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 12, categoryLabel: "Arrangement" }),
    title: "Tension and Release:",
    titleHighlight: "Musical Suspense",
    subtitle: "Master <strong>building tension</strong> and <strong>releasing it</strong>. Learn how to create <strong>anticipation</strong>, <strong>suspense</strong>, and <strong>satisfying resolution</strong>. This is the heartbeat of emotional arrangement."
  },

  exercise: {
    title: "Build Tension and Release Cycles",
    description: "Create an arrangement with clear <strong>tension-building sections</strong> that resolve into <strong>release moments</strong>. Tension comes from buildup, suspense, and unfulfilled expectations. Release comes from drops, resolution, and payoff.",
    tip: "Tension is like inhaling—it can't last forever. You MUST release. Build for 8-16 bars, then release. The longer the tension, the bigger the release needs to be. Use risers, filter sweeps, and drum fills to build tension.",
    steps: [
      { text: "<strong>Establish stability</strong> - Start with a stable, grounded section" },
      { text: "<strong>Introduce tension</strong> - Add risers, increase tempo feel, or unresolved chords" },
      { text: "<strong>Build progressively</strong> - Layer more tension techniques" },
      { text: "<strong>Peak tension moment</strong> - The moment before release (often silence)" },
      { text: "<strong>Release explosively</strong> - Drop/chorus with full energy and resolution" },
      { text: "<strong>Stabilize again</strong> - Return to grounded state, ready for next cycle" }
    ]
  },

  tensionTechniques: [
    { name: "Risers", icon: "📈", description: "Sound that rises in pitch/volume", tension: "High", examples: ["White noise sweep", "Synth riser"] },
    { name: "Drum Fills", icon: "🥁", description: "Rhythmic pattern building to section change", tension: "Medium", examples: ["Snare rolls", "Tom fills"] },
    { name: "Filter Sweep", icon: "🎛️", description: "High-pass filter opening gradually", tension: "Medium", examples: ["Opening filter", "Building brightness"] },
    { name: "Harmonic Tension", icon: "🎹", description: "Unresolved chords or suspended notes", tension: "High", examples: ["V chord waiting for I", "Sus4 chord"] },
    { name: "Silence/Gap", icon: "⏸️", description: "Brief pause before drop", tension: "Maximum", examples: ["1-beat silence", "Half-bar gap"] },
    { name: "Density Increase", icon: "📊", description: "Adding more elements progressively", tension: "Medium", examples: ["Layering sounds", "Faster rhythms"] }
  ],

  releaseTechniques: [
    { name: "The Drop", description: "Full-energy section after buildup", impact: "Maximum" },
    { name: "Harmonic Resolution", description: "Chord progression resolves (V → I)", impact: "High" },
    { name: "Rhythmic Resolution", description: "Return to steady groove after fills", impact: "Medium" },
    { name: "Breakdown", description: "Strip back to minimal after fullness", impact: "High" }
  ],

  messages: applyMessagePreset("arrangement", {
    initial: "Create tension-release cycles with builds and drops!",
    success: "🎢 Masterful tension and release! Your arrangement creates emotional peaks and valleys.",
    error: "Make sure you have clear tension-building sections followed by satisfying releases.",
    alreadyCompleted: "You've mastered tension and release! Try creating multiple cycles with varying intensities."
  }),

  mode: {
    type: "structure-builder",
    sandbox: false,
    showTimeline: true,
    showEnergyGraph: true,
    showTensionMeter: true
  },

  learningObjectives: [
    "Understand tension and release as the foundation of emotional arrangement",
    "Apply six tension-building techniques effectively",
    "Create satisfying release moments after tension",
    "Build multiple tension-release cycles in one track",
    "Use silence as the ultimate tension tool"
  ]
};

if (typeof window !== 'undefined') window.LESSON_CONFIG = lessonConfig;
