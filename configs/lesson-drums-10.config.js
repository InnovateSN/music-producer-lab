/**
 * Music Producer Lab - Lesson Configuration
 * Lesson: Drums 10 - Half Time Patterns
 *
 * This lesson teaches half-time drum programming at 140 BPM, covering
 * trap, dubstep, future bass, and other modern electronic genres that
 * use the half-time feel (140 BPM perceived as 70 BPM).
 */

import { applyMessagePreset, buildHeroEyebrow } from "./config-presets.js";

export const lessonConfig = {
  // ====================
  // LESSON METADATA
  // ====================
  lessonKey: "mpl-drums-10-progress",
  lessonNumber: 10,
  lessonCategory: "Drums & Rhythm",
  depthLevel: 5,
  
  // ====================
  // NAVIGATION
  // ====================
  nextLessonUrl: "lesson-drums-11.html",
  prevLessonUrl: "lesson-drums-9.html",
  overviewUrl: "labs.html",
  
  // ====================
  // HERO SECTION
  // ====================
  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 10, categoryLabel: "Drums & Rhythm" }),
    title: "Half Time",
    titleHighlight: "Patterns",
    subtitle: "Master <strong>half-time drum programming</strong> at 140 BPM. Learn the signature rhythm used in <strong>trap</strong>, <strong>dubstep</strong>, <strong>future bass</strong>, and modern electronic music—where snare on beat 3 creates a 70 BPM feel."
  },
  
  // ====================
  // SEQUENCER CONFIG
  // ====================
  sequencer: {
    tempo: 140,
    stepCount: 16,
    swing: 0,
    showBeatMarkers: true,
    showStepNumbers: true,
    autoSaveState: true,
    halfTime: true, // Trap often feels like half-time
    enableVelocity: true, // Essential for rolling hi-hats and 808 dynamics
    requiredTempo: 140
  },
  
  // ====================
  // EXERCISE
  // ====================
  exercise: {
    title: "Build a Half-Time Pattern",
    description: "Create the signature half-time rhythm where 140 BPM feels like 70 BPM. The snare on beat 3 (step 9) creates the laid-back, powerful groove used in trap, dubstep, and future bass.",
    tip: "Half-time magic: The snare hits on beat 3 instead of beats 2 & 4, making it feel like half the tempo!",
    steps: [
      { text: "<strong>Set the tempo to 140 BPM</strong> using the Tempo slider." },
      { text: "<strong>808:</strong> Heavy on step 1 (the downbeat)." },
      { text: "<strong>Snare/Clap:</strong> Step 9 only—this is the half-time backbeat!" },
      { text: "<strong>Hi-Hat (Closed):</strong> 8th notes on steps 1, 3, 5, 7, 9, 11, 13, 15." },
      { text: "<strong>Hi-Hat (Open):</strong> Rolling accents on steps 14 and 16." }
    ]
  },
  
  // ====================
  // INSTRUMENTS
  // ====================
  instruments: [
    {
      id: "kick",
      label: "808",
      color: "linear-gradient(135deg, #e17055, #d63031)",
      targetSteps: [0],
      instructionText: "808 bass/kick on step 1—the powerful downbeat.",
      patternHint: {
        enabled: true,
        note: "808: step 1 (downbeat)"
      }
    },
    {
      id: "snare",
      label: "Snare/Clap",
      color: "linear-gradient(135deg, #fdcb6e, #f39c12)",
      targetSteps: [8],
      instructionText: "Snare on step 9—the half-time backbeat that defines the groove.",
      patternHint: {
        enabled: true,
        note: "Snare: step 9 (half-time backbeat)"
      }
    },
    {
      id: "hihat",
      label: "Hi-Hat (Closed)",
      color: "linear-gradient(135deg, #00cec9, #0984e3)",
      targetSteps: [0, 2, 4, 6, 8, 10, 12, 14],
      instructionText: "8th note hi-hats (steps 1, 3, 5, 7, 9, 11, 13, 15) for steady pulse.",
      patternHint: {
        enabled: true,
        note: "Closed HH: 8th notes"
      }
    },
    {
      id: "rim",
      label: "Hi-Hat (Open)",
      color: "linear-gradient(135deg, #a29bfe, #6c5ce7)",
      targetSteps: [13, 15],
      instructionText: "Open hi-hat accents on steps 14 and 16 for rolling feel.",
      patternHint: {
        enabled: true,
        note: "Open HH: steps 14, 16 (rolling accents)"
      }
    }
  ],
  
  // ====================
  // PATTERN HINT
  // ====================
  patternHint: {
    enabled: true,
    note: "Half-time = Snare on beat 3 (step 9) makes 140 BPM feel like 70 BPM"
  },

  // ====================
  // MESSAGES
  // ====================
  messages: applyMessagePreset("drums", {
    initial: "Build the half-time pattern. Key: Snare on step 9 creates the half-tempo feel!",
    success: "Perfect! That's the half-time groove. Notice how 140 BPM feels like 70 BPM?",
    error: "Check the snare placement—it should be on step 9 (beat 3) for the half-time feel.",
    alreadyCompleted: "You've mastered half-time! This pattern works for trap, dubstep, and future bass."
  }),
  
  // ====================
  // MODE FLAGS
  // ====================
  mode: {
    sandbox: false,
    showTargetHint: true,
    enablePresets: false,
    enableExport: false,
    showVelocityControl: true
  },
  
  // ====================
  // GENRE INFO
  // ====================
  genreInfo: {
    name: "Half-Time / 140 BPM Styles",
    tempoRange: { min: 135, max: 150 },
    perceivedTempo: { min: 67, max: 75 },
    subgenres: [
      { name: "Trap", tempo: "135-145 BPM", character: "Rolling hi-hats, 808 bass, sparse snare" },
      { name: "Dubstep", tempo: "138-142 BPM", character: "Heavy wobble bass, aggressive snare" },
      { name: "Future Bass", tempo: "140-150 BPM", character: "Melodic, wide synths, chopped vocals" },
      { name: "Half-Time DnB", tempo: "85 BPM (170÷2)", character: "DnB tempo, half-time feel" }
    ],
    keyProducers: ["Skrillex", "RL Grime", "Flume", "Metro Boomin", "Zomboy"],
    characteristics: [
      "Snare on beat 3 creates half-tempo feel",
      "140 BPM feels like 70 BPM",
      "Perfect for builds and drops",
      "16th-note patterns create syncopation"
    ]
  },
  
  // ====================
  // LEARNING OBJECTIVES
  // ====================
  learningObjectives: [
    "Understand half-time rhythm: snare on beat 3 instead of 2 & 4",
    "Program patterns that make 140 BPM feel like 70 BPM",
    "Apply half-time to trap, dubstep, future bass, and more",
    "Use 16th-note subdivisions for syncopation and fills"
  ]
};

if (typeof window !== 'undefined') {
  window.LESSON_CONFIG = lessonConfig;
}
