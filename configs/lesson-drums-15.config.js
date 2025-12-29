/**
 * Music Producer Lab - Lesson Configuration
 * Lesson: Drums 15 - Percussion Layering & World Rhythms
 * 
 * This lesson teaches percussion layering, clave patterns, and world rhythm
 * traditions from Latin, African, Brazilian, and other cultures.
 */

import { applyMessagePreset, buildHeroEyebrow } from "./config-presets.js";

export const lessonConfig = {
  // ====================
  // LESSON METADATA
  // ====================
  lessonKey: "mpl-drums-15-progress",
  lessonNumber: 15,
  lessonCategory: "Drums & Rhythm",
  depthLevel: 8,
  
  // ====================
  // NAVIGATION
  // ====================
  nextLessonUrl: "lesson-drums-16.html",
  prevLessonUrl: "lesson-drums-14.html",
  overviewUrl: "labs.html",
  
  // ====================
  // HERO SECTION
  // ====================
  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 15, categoryLabel: "Drums & Rhythm" }),
    title: "Percussion Layering &",
    titleHighlight: "World Rhythms",
    subtitle: "Add <strong>percussion layers</strong> from global traditions. Master <strong>clave patterns</strong>, <strong>Afrobeat rhythms</strong>, and <strong>Latin percussion</strong>."
  },
  
  // ====================
  // SEQUENCER CONFIG
  // ====================
  sequencer: {
    tempo: 100,
    stepCount: 16,
    swing: 0,
    showBeatMarkers: true,
    showStepNumbers: true,
    autoSaveState: true,
    enableVelocity: true,
    requiredTempo: 100
  },
  
  // ====================
  // EXERCISE
  // ====================
  exercise: {
    title: "Layer a Latin Groove",
    description: "Build a layered percussion groove using clave, congas, shaker, and cowbell.",
    tip: "The clave is your guide—every other part should respect its pattern.",
    steps: [
      { text: "<strong>Set the tempo to 100 BPM</strong> using the Tempo slider." },
      { text: "<strong>Clave:</strong> 3-2 son clave (steps 1, 4, 7, 12, 16)." },
      { text: "<strong>Congas:</strong> Tumbao pattern—slaps on 2 and 4." },
      { text: "<strong>Shaker:</strong> 16th notes for pulse and movement." },
      { text: "<strong>Cowbell:</strong> Offbeat hits (2, 6, 10, 14)." }
    ]
  },
  
  // ====================
  // INSTRUMENTS
  // ====================
  instruments: [
    {
      id: "clave",
      label: "Clave",
      color: "linear-gradient(135deg, #ffeaa7, #fdcb6e)",
      targetSteps: [0, 3, 6, 11, 15],
      instructionText: "The 3-2 son clave pattern.",
      patternHint: { enabled: true, note: "3-2: steps 1,4,7 | 12,16" }
    },
    {
      id: "congas",
      label: "Congas",
      color: "linear-gradient(135deg, #e17055, #d63031)",
      targetSteps: [3, 7, 11, 15],
      instructionText: "Tumbao—slaps and open tones.",
      patternHint: { enabled: true, note: "Slaps on backbeats" }
    },
    {
      id: "shaker",
      label: "Shaker",
      color: "linear-gradient(135deg, #00cec9, #0984e3)",
      targetSteps: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
      instructionText: "Continuous 16th note pulse.",
      patternHint: { enabled: true, note: "All 16th notes" }
    },
    {
      id: "cowbell",
      label: "Cowbell",
      color: "linear-gradient(135deg, #fdcb6e, #f39c12)",
      targetSteps: [1, 5, 9, 13],
      instructionText: "Offbeat cowbell pattern.",
      patternHint: { enabled: true, note: "Offbeats: &'s" }
    }
  ],
  
  // ====================
  // CLAVE PATTERNS
  // ====================
  clavePatterns: [
    {
      id: "son-32",
      name: "3-2 Son Clave",
      pattern: [0, 3, 6, 11, 15],
      description: "Most common. 3 hits bar 1, 2 hits bar 2."
    },
    {
      id: "son-23",
      name: "2-3 Son Clave",
      pattern: [3, 7, 8, 11, 14],
      description: "Reversed—starts with 2 notes."
    },
    {
      id: "rumba-32",
      name: "3-2 Rumba Clave",
      pattern: [0, 3, 7, 11, 15],
      description: "3rd note moved late. More syncopated."
    },
    {
      id: "bossa",
      name: "Bossa Nova Clave",
      pattern: [0, 3, 6, 10, 12],
      description: "Brazilian variation for bossa nova."
    }
  ],
  
  // ====================
  // WORLD RHYTHMS
  // ====================
  worldRhythms: [
    { id: "afro-cuban", name: "Afro-Cuban", instruments: ["Clave", "Congas", "Bongos", "Timbales"] },
    { id: "brazilian", name: "Brazilian", instruments: ["Surdo", "Pandeiro", "Tamborim", "Agogô"] },
    { id: "west-african", name: "West African", instruments: ["Djembe", "Talking Drum", "Shekere"] },
    { id: "caribbean", name: "Caribbean", instruments: ["Steel Drum", "Nyabinghi Drums", "Shaker"] }
  ],
  
  // ====================
  // MESSAGES
  // ====================
  messages: applyMessagePreset("drums", {
    initial: "Build a Latin groove with clave, congas, shaker, and cowbell!",
    success: "🌍 Beautiful layering! The percussion parts interlock perfectly with the clave.",
    error: "Check your clave placement—it's the foundation for everything else.",
    alreadyCompleted: "You've mastered world percussion! Try exploring other regional styles."
  }),
  
  // ====================
  // MODE FLAGS
  // ====================
  mode: {
    sandbox: false,
    showTargetHint: true,
    enablePresets: true,
    enableExport: false,
    showVelocityLane: true,
    showClaveGuide: true
  },
  
  // ====================
  // LEARNING OBJECTIVES
  // ====================
  learningObjectives: [
    "Layer congas, bongos, and shakers effectively",
    "Understand and apply clave patterns",
    "Program Afrobeat and world rhythms",
    "Create Latin percussion grooves with proper interlocking"
  ]
};

if (typeof window !== 'undefined') {
  window.LESSON_CONFIG = lessonConfig;
}
