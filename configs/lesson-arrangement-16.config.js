/**
 * Music Producer Lab - Lesson Configuration
 * Lesson: Arrangement 16 - Melodic Development
 *
 * This lesson teaches how to develop melodic ideas across a track.
 * Master theme and variation, motivic development, and melodic callbacks.
 */

import { applyMessagePreset, buildHeroEyebrow } from "./config-presets.js";

export const lessonConfig = {
  lessonKey: "mpl-arrangement-16-progress",
  lessonNumber: 16,
  lessonCategory: "Arrangement",
  depthLevel: 4,

  nextLessonUrl: "lesson-arrangement-17.html",
  prevLessonUrl: "lesson-arrangement-15.html",
  overviewUrl: "labs.html",

  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 16, categoryLabel: "Arrangement" }),
    title: "Melodic Development:",
    titleHighlight: "Theme and Variation",
    subtitle: "Develop <strong>melodic themes</strong> across your track. Master <strong>motivic development</strong>, <strong>melodic callbacks</strong>, and <strong>thematic unity</strong>. Great songs develop one core idea in multiple ways."
  },

  exercise: {
    title: "Develop a Melodic Theme Across Sections",
    description: "Create a <strong>core melodic motif</strong> (2-4 note pattern) and develop it throughout the track. Use it in different octaves, rhythms, instruments, and harmonizations. This creates <strong>thematic unity</strong>.",
    tip: "Film scores do this masterfully: one theme appears in brass (heroic), strings (sad), piano (intimate). Use your hook melody in the intro (simple), verse (developed), chorus (full), outro (callback).",
    steps: [
      { text: "<strong>Create core motif</strong> - Simple 2-4 note melodic idea" },
      { text: "<strong>Intro: State the theme</strong> - Present it simply, clearly" },
      { text: "<strong>Verse: Develop it</strong> - Add notes, change rhythm, new octave" },
      { text: "<strong>Chorus: Harmonize it</strong> - Add counter-melodies or harmonies" },
      { text: "<strong>Bridge: Transform it</strong> - Major to minor, or rhythmic variation" },
      { text: "<strong>Outro: Callback</strong> - Return to original simple version" }
    ]
  },

  developmentTechniques: [
    { technique: "Octave Displacement", description: "Play the motif in different octaves", example: "Intro: C4-E4-G4 → Chorus: C5-E5-G5" },
    { technique: "Rhythmic Variation", description: "Keep pitches, change rhythm", example: "Quarter notes → Eighth notes → Syncopated" },
    { technique: "Intervallic Expansion", description: "Widen or narrow intervals", example: "C-D-E → C-E-G (wider intervals)" },
    { technique: "Inversion", description: "Flip the melody upside down", example: "Up-Up-Down → Down-Down-Up" },
    { technique: "Augmentation", description: "Play it slower (double note values)", example: "Quarter notes → Half notes" },
    { technique: "Fragmentation", description: "Use only part of the motif", example: "Use first 2 notes only" }
  ],

  messages: applyMessagePreset("arrangement", {
    initial: "Develop a melodic motif across different sections!",
    success: "🎼 Brilliant melodic development! Your theme creates unity while evolving throughout the track.",
    error: "Make sure your motif appears in multiple sections with variations.",
    alreadyCompleted: "You've mastered melodic development!"
  }),

  mode: {
    type: "structure-builder",
    sandbox: false,
    showTimeline: true,
    highlightMotifs: true
  },

  learningObjectives: [
    "Create a memorable melodic motif",
    "Develop themes through six variation techniques",
    "Use melodic callbacks for emotional impact",
    "Create thematic unity across a complete track",
    "Apply classical composition techniques to modern production"
  ]
};

if (typeof window !== 'undefined') window.LESSON_CONFIG = lessonConfig;
