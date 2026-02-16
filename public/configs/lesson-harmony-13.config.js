/**
 * Music Producer Lab - Lesson Configuration
 * Lesson: Harmony 13 - Hip-Hop Minor Loop: Dark but Catchy
 */

import { applyMessagePreset, buildHeroEyebrow } from "./config-presets.js";

export const lessonConfig = {
  lessonKey: "mpl-harmony-13-progress",
  lessonNumber: 13,
  lessonCategory: "Genre Application",

  nextLessonUrl: "lesson-harmony-14.html",
  prevLessonUrl: "lesson-harmony-12.html",
  overviewUrl: "labs.html",

  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 13, categoryLabel: "Harmony & Melody" }),
    title: "Hip-Hop Minor Loop:",
    titleHighlight: "Dark but Catchy",
    subtitle: "Build a minor key progression with sparse, emotional melody. You'll learn how to create that moody, introspective sound used in modern trap, R&B, and lo-fi hip-hop. Space and simplicity are your tools - less is more."
  },

  sequencer: {
    tempo: 140,
    key: "A",
    scale: "Minor",
    stepCount: 64,
    bars: 4,
    pitchRange: {
      low: 48,
      high: 84
    }
  },

  exercise: {
    title: "Build a Dark Hip-Hop Loop in A Minor",
    description: "Create a 2 or 4-bar loop using <strong>Am → F → C → G</strong> (i→VI→III→VII in minor). Add a minimal, emotional melody with <strong>space between notes</strong> - hip-hop melodies breathe. Target chord tones but use silence as a tool.",
    tip: "Hip-hop and trap harmony is about mood and space. Use minor chords for darkness, seventh chords for smoothness, and SPACE in your melody. Don't fill every beat - let notes ring out. Think Metro Boomin, Travis Scott, The Weeknd: sparse, emotional, impactful.",
    steps: [
      { text: "Bar 1-2: <strong>Am7</strong> (A-C-E-G) sustained" },
      { text: "Bar 3: <strong>Fmaj7</strong> (F-A-C-E)" },
      { text: "Bar 4: <strong>C → G</strong> (C-E-G → G-B-D)" },
      { text: "Add a minimal melody (6-8 notes total) with <strong>lots of space</strong>" },
      { text: "Use A minor pentatonic notes (A-C-D-E-G) for that dark, modal sound" },
      { text: "Let notes sustain - space creates emotion in hip-hop" }
    ]
  },

  validation: {
    type: "hip_hop_loop",
    requiredChords: [
      { time: 0, pitches: [69, 72, 76, 79], chordName: "Am7", minDuration: 16 },
      { time: 32, pitches: [65, 69, 72, 76], chordName: "Fmaj7" },
      { time: 48, pitches: [60, 64, 67], chordName: "C" },
      { time: 56, pitches: [67, 71, 74], chordName: "G" }
    ],
    melody: {
      minNotes: 6,
      maxNotes: 10,
      allowedScale: [69, 72, 74, 76, 79, 81, 84, 86, 88],  // A minor pentatonic
      requireSpace: true,  // Must have gaps between notes
      preferSustainedNotes: true
    }
  },

  messages: applyMessagePreset("harmony", {
    initial: "Build Am7 → Fmaj7 → C → G in A minor. Add a sparse melody (6-8 notes) using A minor pentatonic. Leave space - less is more!",
    success: "Perfect! You've captured that dark, emotional hip-hop vibe. Notice how space and simplicity create impact - this is the sound of modern trap and R&B!",
    error: "Keep it minimal: Am7 = A-C-E-G, Fmaj7 = F-A-C-E, C = C-E-G, G = G-B-D. Melody should be sparse (6-8 notes) using A-C-D-E-G with lots of space."
  }),

  mode: {
    sandbox: false,
    showTargetHint: true,
    enablePresets: false,
    enableExport: false,
    sequencerType: "piano-roll"
  }
};

if (typeof window !== 'undefined') {
  window.LESSON_CONFIG = lessonConfig;
}
