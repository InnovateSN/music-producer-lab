/**
 * Music Producer Lab - Lesson Configuration
 * Lesson: Arrangement 7 - Hip-Hop & Urban Structures
 */

import { applyMessagePreset, buildHeroEyebrow } from "./config-presets.js";

export const lessonConfig = {
  lessonKey: "mpl-arrangement-7-progress",
  lessonNumber: 7,
  lessonCategory: "Arrangement",
  depthLevel: 5,
  
  nextLessonUrl: "lesson-arrangement-8.html",
  prevLessonUrl: "lesson-arrangement-6.html",
  overviewUrl: "labs.html",
  
  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 7, categoryLabel: "Arrangement" }),
    title: "Hip-Hop & Urban",
    titleHighlight: "Structures",
    subtitle: "Arrange <strong>hip-hop tracks</strong> with <strong>verses, hooks, and 808s</strong>. Master <strong>beat switches</strong> and <strong>interludes</strong>."
  },

  // ====================
  // EXERCISE INFO
  // ====================
  exercise: {
    title: "Build a Hip-Hop Track Structure",
    description: "Create a hip-hop arrangement using the <strong>Verse-Hook</strong> structure. Hip-hop differs from pop/EDM—verses are the star, hooks are short and punchy, and the beat creates the vibe. Learn to leave space for vocals while maintaining energy.",
    tip: "Verses should be stripped back (2-3 elements) to leave room for rap vocals. Hooks should be fuller (4-5 elements) for impact. Keep it at 16-bar verses and 8-bar hooks for classic hip-hop structure.",
    steps: [
      { text: "<strong>Start with an Intro</strong> (4-8 bars) - Establish the vibe quickly" },
      { text: "<strong>Add Verse 1</strong> (16 bars) - Minimal arrangement, vocals are the focus" },
      { text: "<strong>Add the Hook</strong> (8 bars) - Fuller sound, memorable melody" },
      { text: "<strong>Add Verse 2</strong> (16 bars) - Similar to Verse 1 with slight variation" },
      { text: "<strong>Repeat the Hook</strong> (8 bars) - Keep it consistent for catchiness" },
      { text: "<strong>Optional: Add a Bridge</strong> (8 bars) - Beat switch or breakdown" },
      { text: "<strong>Final Hook and Outro</strong> - End strong or fade on the hook" }
    ]
  },

  // ====================
  // SECTION DEFINITIONS
  // ====================
  sections: [
    { id: "intro", name: "Intro", bars: "4-8", energy: 40 },
    { id: "verse", name: "Verse", bars: "16", energy: 60 },
    { id: "hook", name: "Hook", bars: "8", energy: 85 },
    { id: "bridge", name: "Bridge", bars: "8", energy: 50 }
  ],
  
  messages: applyMessagePreset("arrangement", {
    initial: "Build a hip-hop arrangement with verse-hook structure!",
    success: "🎤 Fire arrangement! The verse-hook flow is perfect.",
    error: "Make sure verses have room for vocals and hooks are fuller."
  }),
  
  mode: { type: "structure-builder", showTimeline: true },
  
  learningObjectives: [
    "Structure verse-hook patterns effectively",
    "Create beat switches for variety",
    "Use interludes and bridges strategically",
    "Build momentum through hip-hop tracks"
  ]
};

if (typeof window !== 'undefined') window.LESSON_CONFIG = lessonConfig;
