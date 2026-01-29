/**
 * Music Producer Lab - Lesson Configuration
 * Lesson: Harmony 15 - Add9 Color: Make Chords Glow
 */

import { applyMessagePreset, buildHeroEyebrow } from "./config-presets.js";

export const lessonConfig = {
  lessonKey: "mpl-harmony-15-progress",
  lessonNumber: 15,
  lessonCategory: "Advanced Harmony",

  nextLessonUrl: "lesson-harmony-16.html",
  prevLessonUrl: "lesson-harmony-14.html",
  overviewUrl: "labs.html",

  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 15, categoryLabel: "Harmony & Melody" }),
    title: "Add9 Color:",
    titleHighlight: "Make Chords Glow",
    subtitle: "Turn plain chords into modern, airy harmonies by adding the ninth (2nd scale degree up an octave). You'll create add9 and 9th chords that add shimmer and space without losing stability. This is the signature sound of Bon Iver, ODESZA, and ambient producers."
  },

  sequencer: {
    tempo: 85,
    key: "D",
    scale: "Major",
    stepCount: 64,
    bars: 4,
    pitchRange: {
      low: 48,
      high: 84
    }
  },

  exercise: {
    title: "Build Add9 and 9th Chords",
    description: "Create chords with added ninths: <strong>Dadd9 (D-F#-A-E)</strong> and <strong>Gmaj9 (G-B-D-F#-A)</strong>. The ninth is the 2nd scale degree played an octave higher - it adds color and air without changing the chord's basic function.",
    tip: "The 9th is just the 2nd scale degree up an octave. In D major: D-E-F#... so E is the 2nd, and E an octave up is the 9th. Add it to any major or minor chord for instant shimmer. Use add9 (no 7th) for open, folky sounds. Use maj9 (with 7th) for jazzy sophistication.",
    steps: [
      { text: "Bar 1: <strong>Dadd9</strong> (D-F#-A-E) - triad + 9th, no 7th" },
      { text: "Bar 2: <strong>Gmaj9</strong> (G-B-D-F#-A) - full maj7 chord + 9th" },
      { text: "Bar 3: <strong>Bm7add11</strong> (B-D-F#-A-E) - minor with extensions" },
      { text: "Bar 4: <strong>Aadd9</strong> (A-C#-E-B)" },
      { text: "Listen for the airy, modern quality - perfect for pads and atmosphere" },
      { text: "Keep voicing in mid-to-high register for clarity" }
    ]
  },

  validation: {
    type: "extended_chords",
    requiredChords: [
      { time: 0, pitches: [62, 66, 69, 76], chordName: "Dadd9" },
      { time: 16, pitches: [67, 71, 74, 78, 81], chordName: "Gmaj9" },
      { time: 32, pitches: [71, 74, 78, 81, 88], chordName: "Bm7(11)" },
      { time: 48, pitches: [69, 73, 76, 83], chordName: "Aadd9" }
    ],
    allowInversions: false,
    allowExtraNotes: false
  },

  messages: applyMessagePreset("harmony", {
    initial: "Build Dadd9, Gmaj9, Bm7(11), Aadd9. The 9th (2nd scale degree up an octave) adds shimmer and space.",
    success: "Beautiful! You've mastered extended harmony. These add9 and 9th chords create that modern, airy sound used in indie, ambient, and electronic music!",
    error: "Check: Dadd9 = D-F#-A-E, Gmaj9 = G-B-D-F#-A, Bm7(11) = B-D-F#-A-E, Aadd9 = A-C#-E-B. The 9th adds color without tension."
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
