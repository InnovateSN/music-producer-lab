/**
 * Music Producer Lab - Lesson Configuration
 * Lesson: Harmony 19 - Reharmonize a Melody: 3 Different Backings
 */

import { applyMessagePreset, buildHeroEyebrow } from "./config-presets.js";

export const lessonConfig = {
  lessonKey: "mpl-harmony-19-progress",
  lessonNumber: 19,
  lessonCategory: "Expert Techniques",

  nextLessonUrl: "lesson-harmony-20.html",
  prevLessonUrl: "lesson-harmony-18.html",
  overviewUrl: "labs.html",

  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 19, categoryLabel: "Harmony & Melody" }),
    title: "Reharmonize a Melody:",
    titleHighlight: "3 Different Backings",
    subtitle: "Take one melody and support it with three different chord progressions. You'll learn reharmonization - the art of changing the chords under a melody to create different moods. This is how producers create remixes, bridge sections, and harmonic variations."
  },

  sequencer: {
    tempo: 100,
    key: "C",
    scale: "Major",
    stepCount: 96,
    bars: 6,
    pitchRange: {
      low: 48,
      high: 84
    }
  },

  exercise: {
    title: "Reharmonize the Same Melody Three Ways",
    description: "You'll be given a simple melody: <strong>C-D-E-D-C-G-E-C</strong>. Harmonize it three different ways: (1) Simple major chords, (2) Modal minor approach, (3) Jazz reharmonization. Same melody, completely different emotional impact based on chord choices.",
    tip: "Reharmonization is choosing different chords that fit the same melody notes. A melody note can be supported by multiple chords - C works over C major, F major, Am, Dm, etc. By changing chords, you change the emotional color without changing the melody. This is how jazz musicians take standards and make them their own!",
    steps: [
      { text: "Bars 1-2: Melody <strong>C-D-E-D-C-G-E-C</strong> over <strong>C → G</strong> (simple, bright)" },
      { text: "Bars 3-4: SAME melody over <strong>Am → Em</strong> (darker, minor feel)" },
      { text: "Bars 5-6: SAME melody over <strong>Fmaj7 → Em7 → Dm7 → G7</strong> (jazz movement)" },
      { text: "Keep the melody identical - only chords change!" },
      { text: "Listen how the same notes feel completely different with different harmony" },
      { text: "This is reharmonization - harmonic transformation" }
    ]
  },

  validation: {
    type: "reharmonization_exercise",
    fixedMelody: {
      notes: [60, 62, 64, 62, 60, 67, 64, 60],  // C-D-E-D-C-G-E-C
      positions: [0, 4, 8, 12, 16, 20, 24, 28]
    },
    harmonizations: [
      {
        bars: [0, 1],
        chords: [
          { time: 0, pitches: [48, 52, 55], chordName: "C" },
          { time: 16, pitches: [55, 59, 62], chordName: "G" }
        ]
      },
      {
        bars: [2, 3],
        chords: [
          { time: 32, pitches: [57, 60, 64], chordName: "Am" },
          { time: 48, pitches: [52, 55, 59], chordName: "Em" }
        ]
      },
      {
        bars: [4, 5],
        chords: [
          { time: 64, pitches: [53, 57, 60, 64], chordName: "Fmaj7" },
          { time: 72, pitches: [52, 55, 59, 62], chordName: "Em7" },
          { time: 80, pitches: [50, 53, 57, 60], chordName: "Dm7" },
          { time: 88, pitches: [55, 59, 62, 65], chordName: "G7" }
        ]
      }
    ],
    mustPreserveMelody: true
  },

  messages: applyMessagePreset("harmony", {
    initial: "Melody: C-D-E-D-C-G-E-C (repeated 3 times). Bars 1-2: C→G. Bars 3-4: Am→Em. Bars 5-6: Fmaj7→Em7→Dm7→G7. Same melody, different chords!",
    success: "Brilliant! You've mastered reharmonization - the art of harmonic transformation. Notice how the same melody feels completely different with different chord choices!",
    error: "Keep the melody IDENTICAL in all 3 sections: C-D-E-D-C-G-E-C. Only change the chords underneath. Section 1: C→G, Section 2: Am→Em, Section 3: Fmaj7→Em7→Dm7→G7."
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
