/**
 * Music Producer Lab - Lesson Configuration
 * Lesson: Arrangement 5 - Pop & Rock Song Structures
 * 
 * This lesson teaches classic ABABCB structures, verse-chorus dynamics,
 * pre-chorus techniques, and bridge placement.
 */

import { applyMessagePreset, buildHeroEyebrow } from "./config-presets.js";

export const lessonConfig = {
  // ====================
  // LESSON METADATA
  // ====================
  lessonKey: "mpl-arrangement-5-progress",
  lessonNumber: 5,
  lessonCategory: "Arrangement",
  depthLevel: 4,
  
  // ====================
  // NAVIGATION
  // ====================
  nextLessonUrl: "lesson-arrangement-6.html",
  prevLessonUrl: "lesson-arrangement-4.html",
  overviewUrl: "labs.html",
  
  // ====================
  // HERO SECTION
  // ====================
  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 5, categoryLabel: "Arrangement" }),
    title: "Pop & Rock",
    titleHighlight: "Song Structures",
    subtitle: "Master the <strong>classic ABABCB structure</strong> used in countless hits. Learn <strong>verse-chorus dynamics</strong>, <strong>pre-chorus techniques</strong>, and strategic <strong>bridge placement</strong>."
  },
  
  // ====================
  // EXERCISE
  // ====================
  exercise: {
    title: "Build a Classic Pop Structure",
    description: "Arrange sections in the correct ABABCB order to create a radio-ready song structure.",
    tip: "The pre-chorus builds anticipation before the chorus—use it to create lift!",
    steps: [
      { text: "<strong>Intro:</strong> 4-8 bars to hook the listener immediately." },
      { text: "<strong>Verse 1:</strong> 16 bars to establish the story/theme." },
      { text: "<strong>Pre-Chorus:</strong> 4-8 bars of rising energy." },
      { text: "<strong>Chorus:</strong> 8-16 bars—the hook and emotional peak." },
      { text: "<strong>Bridge:</strong> 8 bars of contrast before final chorus." }
    ]
  },
  
  // ====================
  // STRUCTURE FORMULAS
  // ====================
  structures: [
    {
      id: "ababcb",
      name: "ABABCB (Classic)",
      formula: "I - V - C - V - C - B - C",
      description: "The most common pop/rock structure. Perfect balance of repetition and variety.",
      examples: ["Let It Be - Beatles", "Someone Like You - Adele", "Don't Stop Believin' - Journey"]
    },
    {
      id: "aaba",
      name: "AABA (32-bar)",
      formula: "V - V - B - V",
      description: "Classic jazz and older pop form. Simple and elegant.",
      examples: ["Over the Rainbow", "Yesterday - Beatles"]
    },
    {
      id: "verse-chorus",
      name: "Verse-Chorus",
      formula: "V - C - V - C - C",
      description: "Stripped down for impact. Great for high-energy songs.",
      examples: ["Smells Like Teen Spirit - Nirvana", "Seven Nation Army - White Stripes"]
    },
    {
      id: "verse-prechorus-chorus",
      name: "Verse-PreC-Chorus",
      formula: "V - PC - C - V - PC - C - B - C",
      description: "Modern pop standard. Pre-chorus adds buildup.",
      examples: ["Firework - Katy Perry", "Rolling in the Deep - Adele"]
    }
  ],
  
  // ====================
  // SECTION DEFINITIONS
  // ====================
  sections: [
    {
      id: "intro",
      name: "Intro",
      color: "#636e72",
      bars: "4-8",
      purpose: "Hook the listener, set the mood",
      tips: ["Start with the hook melody", "Use signature sound/riff", "Keep it under 15 seconds"]
    },
    {
      id: "verse",
      name: "Verse",
      color: "#00cec9",
      bars: "8-16",
      purpose: "Tell the story, lower energy than chorus",
      tips: ["Establish the theme/story", "Leave room for vocals", "Build toward pre-chorus"]
    },
    {
      id: "prechorus",
      name: "Pre-Chorus",
      color: "#fdcb6e",
      bars: "4-8",
      purpose: "Build anticipation before the chorus",
      tips: ["Rise in energy and pitch", "Change the chord progression", "Create harmonic tension"]
    },
    {
      id: "chorus",
      name: "Chorus",
      color: "#e17055",
      bars: "8-16",
      purpose: "The hook—emotional peak and memorable part",
      tips: ["Highest energy level", "Memorable melody/hook", "Full arrangement"]
    },
    {
      id: "bridge",
      name: "Bridge",
      color: "#a29bfe",
      bars: "8",
      purpose: "Contrast and surprise before final chorus",
      tips: ["Change key or chord progression", "Different melody", "Creates last-minute interest"]
    },
    {
      id: "outro",
      name: "Outro",
      color: "#636e72",
      bars: "4-8",
      purpose: "Bring the song to a satisfying close",
      tips: ["Fade out or hard ending", "Callback to intro", "Leave impression"]
    }
  ],
  
  // ====================
  // VALIDATION
  // ====================
  validation: {
    type: "structure-builder",
    requiredSections: ["intro", "verse", "chorus"],
    minSections: 5,
    correctOrder: ["intro", "verse", "prechorus", "chorus", "verse", "prechorus", "chorus", "bridge", "chorus", "outro"]
  },
  
  // ====================
  // MESSAGES
  // ====================
  messages: applyMessagePreset("arrangement", {
    initial: "Arrange the sections to create a classic pop song structure!",
    success: "🎵 Perfect structure! This arrangement will keep listeners engaged from start to finish.",
    error: "Check your section order—remember: build tension before the chorus!",
    alreadyCompleted: "You've mastered pop structures! Try experimenting with variations."
  }),
  
  // ====================
  // MODE FLAGS
  // ====================
  mode: {
    type: "structure-builder",
    sandbox: false,
    showTimeline: true,
    showBarCounts: true,
    enableDragDrop: true
  },
  
  // ====================
  // LEARNING OBJECTIVES
  // ====================
  learningObjectives: [
    "Build ABABCB and other classic song structures",
    "Create effective pre-choruses that build anticipation",
    "Position bridges for maximum impact",
    "Use instrumental breaks strategically"
  ]
};

if (typeof window !== 'undefined') {
  window.LESSON_CONFIG = lessonConfig;
}
