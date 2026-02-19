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
    subtitle: "Master the <strong>driving 4/4 patterns</strong> that power dance floors worldwide. Learn <strong>techno hi-hats</strong> and <strong>percussive rimshot accents</strong>."
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
    autoSaveState: true,
    enableVelocity: true, // Essential for hi-hat dynamics and rimshot accents
    requiredTempo: 125
  },
  
  // ====================
  // EXERCISE
  // ====================
  exercise: {
    title: "Build a Classic Techno Beat",
    description: "Create a techno drum pattern with four-on-the-floor kick, hi-hats, clap backbeat, and rimshot accents.",
    tip: "The rimshot adds percussive texture to the pattern—it hits on steps 7, 9, and 16 to create rhythmic interest.",
    steps: [
      { text: "<strong>Set the tempo to 125 BPM</strong> using the Tempo slider." },
      { text: "<strong>Kick:</strong> Four-on-the-floor on steps 1, 5, 9, 13." },
      { text: "<strong>Clap:</strong> Backbeat on steps 5 and 13 (beats 2 and 4)." },
      { text: "<strong>Closed Hi-Hat:</strong> Off-beat steps 3, 7, 11, 15." },
      { text: "<strong>Rimshot:</strong> Accents on steps 7, 9, and 16." }
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
      id: "hihat",
      label: "Hi-Hat (Closed)",
      color: "linear-gradient(135deg, #00d2d3, #01a3a4)",
      targetSteps: [2, 6, 10, 14],
      instructionText: "Hi-hats on steps 3, 7, 11, 15.",
      patternHint: {
        enabled: true,
        note: "Closed HH: 3, 7, 11, 15"
      }
    },
    {
      id: "rim",
      label: "Rimshot",
      color: "linear-gradient(135deg, #54a0ff, #2e86de)",
      targetSteps: [6, 8, 15],
      instructionText: "Rimshot on steps 7, 9, and 16 for rhythmic accents.",
      patternHint: {
        enabled: true,
        note: "Rimshot: 7, 9, 16 (rhythmic accents)"
      }
    }
  ],
  
  // ====================
  // PATTERN HINT
  // ====================
  patternHint: {
    enabled: true,
    note: "Classic techno: Kick every beat, hi-hats, clap on 2 & 4, rimshot accents"
  },
  
  // ====================
  // MESSAGES
  // ====================
  messages: applyMessagePreset("drums", {
    initial: "Build the classic techno beat pattern to complete this exercise.",
    success: "Perfect! That's the authentic techno groove! The rimshot accents add great rhythmic texture.",
    error: "Check your pattern—make sure all instruments match the target steps shown above.",
    alreadyCompleted: "You've mastered techno drums! Try experimenting with tempo and variations."
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
  ],

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
