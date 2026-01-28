/**
 * Music Producer Lab - Lesson Configuration
 * Lesson: Harmony 14 - Borrow One Chord: Instant Emotion Shift
 */

import { applyMessagePreset, buildHeroEyebrow } from "./config-presets.js";

export const lessonConfig = {
  lessonKey: "mpl-harmony-14-progress",
  lessonNumber: 14,
  lessonCategory: "Modal Interchange",

  nextLessonUrl: "lesson-harmony-15.html",
  prevLessonUrl: "lesson-harmony-13.html",
  overviewUrl: "labs.html",

  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 14, categoryLabel: "Harmony & Melody" }),
    title: "Borrow One Chord:",
    titleHighlight: "Instant Emotion Shift",
    subtitle: "Add a borrowed chord from the parallel minor key to create dramatic color changes. You'll learn modal interchange - borrowing chords from parallel keys (C major/C minor) for instant emotional impact. This is the secret behind cinematic progressions and modern pop hooks."
  },

  sequencer: {
    tempo: 95,
    key: "C",
    scale: "Major",
    stepCount: 64,
    bars: 4,
    pitchRange: {
      low: 48,
      high: 84
    }
  },

  exercise: {
    title: "Use a Borrowed Chord for Emotional Color",
    description: "Build a progression in C major, then <strong>borrow one chord from C minor</strong> to add drama. You'll use <strong>Ab major (♭VI)</strong> - a chord not in C major but in C minor. This creates a sudden emotional shift that sounds cinematic and modern.",
    tip: "Modal interchange means borrowing chords from parallel keys. C major and C minor share the same root (C) but have different scales. When you're in C major, you can 'borrow' chords that exist in C minor for instant color. The ♭VI chord (Ab) is the most popular borrowed chord - it sounds epic and cinematic!",
    steps: [
      { text: "Bar 1: <strong>C major</strong> (C-E-G) - home in C major" },
      { text: "Bar 2: <strong>Ab major</strong> (Ab-C-Eb) - BORROWED from C minor!" },
      { text: "Bar 3: <strong>F major</strong> (F-A-C) - back to C major" },
      { text: "Bar 4: <strong>G major</strong> (G-B-D) - resolves to C" },
      { text: "Notice the Eb note in Ab - it's not in C major (should be E natural)" },
      { text: "Listen for the dramatic, emotional shift when Ab appears!" }
    ]
  },

  validation: {
    type: "borrowed_chord_progression",
    requiredChords: [
      { time: 0, pitches: [60, 64, 67], chordName: "C", key: "C major" },
      { time: 16, pitches: [68, 72, 75], chordName: "Ab", key: "C minor", isBorrowed: true },
      { time: 32, pitches: [65, 69, 72], chordName: "F", key: "C major" },
      { time: 48, pitches: [67, 71, 74], chordName: "G", key: "C major" }
    ],
    checkForAccidentals: true,  // Ab chord has Eb (accidental in C major)
    allowExtraNotes: false
  },

  messages: applyMessagePreset("harmony", {
    initial: "Build C → Ab → F → G. The Ab chord (Ab-C-Eb) is borrowed from C minor - notice the Eb creates drama and color!",
    success: "Excellent! You've mastered modal interchange. That Ab chord creates instant cinematic drama - it's used in countless pop, rock, and film scores!",
    error: "Check: C = C-E-G, Ab = Ab-C-Eb (note the Eb!), F = F-A-C, G = G-B-D. The Ab chord contains notes from C minor, creating that dramatic shift."
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
