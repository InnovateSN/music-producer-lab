/**
 * Music Producer Lab - Lesson Configuration
 * Lesson: Drums 8 - House & Techno Drums
 * 
 * This lesson teaches electronic dance music drum patterns including
 * four-on-the-floor, off-beat hi-hats, and minimal techno rhythms.
 */

import { applyMessagePreset, buildHeroEyebrow } from "./config-presets.js";

export const lessonConfig = {
  // ====================
  // LESSON METADATA
  // ====================
  lessonKey: "mpl-drums-8-progress",
  lessonNumber: 8,
  lessonCategory: "Drums & Rhythm",
  depthLevel: 4,
  
  // ====================
  // NAVIGATION
  // ====================
  nextLessonUrl: "lesson-drums-9.html",
  prevLessonUrl: "lesson-drums-7.html",
  overviewUrl: "labs.html",
  
  // ====================
  // HERO SECTION
  // ====================
  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 8, categoryLabel: "Drums & Rhythm" }),
    title: "House & Techno",
    titleHighlight: "Drums",
    subtitle: "Master the <strong>driving 4/4 patterns</strong> that power dance floors worldwide. Learn <strong>off-beat hi-hats</strong> and <strong>minimal techno rhythms</strong>."
  },
  
  // ====================
  // SEQUENCER CONFIG
  // ====================
  sequencer: {
    tempo: 125,
    stepCount: 16,
    swing: 0,
    showBeatMarkers: true,
    showStepNumbers: true,
    autoSaveState: true
  },
  
  // ====================
  // EXERCISE
  // ====================
  exercise: {
    title: "Build a Classic House Beat",
    description: "Create the essential house drum pattern with four-on-the-floor kick, off-beat hi-hats, and clap backbeat.",
    tip: "The off-beat hi-hat is what gives house its 'pump'—it should land on the '&' counts (steps 3, 7, 11, 15).",
    steps: [
      { text: "<strong>Kick:</strong> Four-on-the-floor on steps 1, 5, 9, 13." },
      { text: "<strong>Clap:</strong> Backbeat on steps 5 and 13 (beats 2 and 4)." },
      { text: "<strong>Closed Hi-Hat:</strong> Off-beats on steps 3, 7, 11, 15." },
      { text: "<strong>Open Hi-Hat:</strong> Accent on step 15 for tension." }
    ]
  },
  
  // ====================
  // INSTRUMENTS
  // ====================
  instruments: [
    {
      id: "kick",
      label: "Kick",
      color: "linear-gradient(135deg, #ff6b6b, #ee5a24)",
      targetSteps: [0, 4, 8, 12],
      instructionText: "Four-on-the-floor: kick on every quarter note (1, 5, 9, 13).",
      patternHint: {
        enabled: true,
        note: "Kick: 1, 5, 9, 13 (every beat)"
      }
    },
    {
      id: "clap",
      label: "Clap",
      color: "linear-gradient(135deg, #feca57, #ff9f43)",
      targetSteps: [4, 12],
      instructionText: "Clap on beats 2 and 4 (steps 5 and 13).",
      patternHint: {
        enabled: true,
        note: "Clap: 5, 13 (backbeat)"
      }
    },
    {
      id: "hihat-closed",
      label: "Hi-Hat (Closed)",
      color: "linear-gradient(135deg, #00d2d3, #01a3a4)",
      targetSteps: [2, 6, 10, 14],
      instructionText: "Off-beat hi-hats on the '&' counts (steps 3, 7, 11, 15).",
      patternHint: {
        enabled: true,
        note: "Closed HH: 3, 7, 11, 15 (off-beats)"
      }
    },
    {
      id: "hihat-open",
      label: "Hi-Hat (Open)",
      color: "linear-gradient(135deg, #54a0ff, #2e86de)",
      targetSteps: [14],
      instructionText: "Open hi-hat on step 15 for accent before loop restart.",
      patternHint: {
        enabled: true,
        note: "Open HH: 15 (tension before repeat)"
      }
    }
  ],
  
  // ====================
  // PATTERN HINT
  // ====================
  patternHint: {
    enabled: true,
    note: "Classic house: Kick every beat, off-beat hi-hats, clap on 2 & 4"
  },
  
  // ====================
  // MESSAGES
  // ====================
  messages: applyMessagePreset("drums", {
    initial: "Build the classic house beat pattern to complete this exercise.",
    success: "🎉 Perfect! That's the authentic house groove! The off-beat hi-hats give it that pumping feel.",
    error: "Check your pattern—make sure hi-hats are on the OFF-beats (3, 7, 11, 15), not the downbeats.",
    alreadyCompleted: "You've mastered house drums! Try experimenting with tempo and variations."
  }),
  
  // ====================
  // MODE FLAGS
  // ====================
  mode: {
    sandbox: false,
    showTargetHint: true,
    enablePresets: false,
    enableExport: false
  },
  
  // ====================
  // GENRE INFO
  // ====================
  genreInfo: {
    name: "House / Techno",
    tempoRange: { min: 118, max: 140 },
    subgenres: [
      { name: "Deep House", tempo: "118-124 BPM", character: "Groovy, soulful, organic" },
      { name: "Classic House", tempo: "120-128 BPM", character: "Driving, uplifting, energetic" },
      { name: "Tech House", tempo: "124-130 BPM", character: "Minimal, hypnotic, groovy" },
      { name: "Techno", tempo: "125-140 BPM", character: "Industrial, relentless, dark" }
    ]
  },
  
  // ====================
  // LEARNING OBJECTIVES
  // ====================
  learningObjectives: [
    "Understand the four-on-the-floor kick pattern",
    "Program off-beat hi-hats for the house 'pump'",
    "Create classic house and techno patterns",
    "Know tempo ranges for different electronic subgenres"
  ]
};

if (typeof window !== 'undefined') {
  window.LESSON_CONFIG = lessonConfig;
}
