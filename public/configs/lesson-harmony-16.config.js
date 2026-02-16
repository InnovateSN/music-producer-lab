/**
 * Music Producer Lab - Lesson Configuration
 * Lesson: Harmony 16 - Neo-Soul Moves: Sus → Resolve
 */

import { applyMessagePreset, buildHeroEyebrow } from "./config-presets.js";

export const lessonConfig = {
  lessonKey: "mpl-harmony-16-progress",
  lessonNumber: 16,
  lessonCategory: "Advanced Harmony",

  nextLessonUrl: "lesson-harmony-17.html",
  prevLessonUrl: "lesson-harmony-15.html",
  overviewUrl: "labs.html",

  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 16, categoryLabel: "Harmony & Melody" }),
    title: "Neo-Soul Moves:",
    titleHighlight: "Sus → Resolve",
    subtitle: "Build lush progressions using suspended chords that resolve to major or minor. You'll learn sus2 and sus4 chords - the ambiguous, floating quality that defines Robert Glasper, Hiatus Kaiyote, and modern R&B. Master smooth voice leading with suspension and resolution."
  },

  sequencer: {
    tempo: 88,
    key: "E",
    scale: "Major",
    stepCount: 64,
    bars: 4,
    pitchRange: {
      low: 48,
      high: 84
    }
  },

  exercise: {
    title: "Build Sus Chords with Resolution",
    description: "Create suspended chords that resolve: <strong>Esus2 → E</strong> and <strong>Asus4 → A</strong>. Suspended chords replace the third with either the 2nd (sus2) or 4th (sus4), creating tension that wants to resolve when the third returns.",
    tip: "Sus chords are 'suspended' - they float without major/minor identity because they have no third. Esus2 = E-F#-B (2nd replaces 3rd). Esus4 = E-A-B (4th replaces 3rd). They create gentle tension that resolves beautifully when the third appears. This is the DNA of neo-soul and R&B keys!",
    steps: [
      { text: "Bar 1: <strong>Esus2</strong> (E-F#-B) sustained" },
      { text: "Bar 2: <strong>E major</strong> (E-G#-B) - resolution!" },
      { text: "Bar 3: <strong>Asus4</strong> (A-D-E) suspended" },
      { text: "Bar 4: <strong>Amaj7</strong> (A-C#-E-G#) - full resolution with 7th" },
      { text: "Listen for the floating quality of sus and satisfaction of resolution" },
      { text: "Use smooth voice leading - keep common tones between chords" }
    ]
  },

  validation: {
    type: "sus_resolution",
    requiredChords: [
      { time: 0, pitches: [64, 66, 71], chordName: "Esus2", suspended: true },
      { time: 16, pitches: [64, 68, 71], chordName: "E", resolvedFrom: "Esus2" },
      { time: 32, pitches: [69, 74, 76], chordName: "Asus4", suspended: true },
      { time: 48, pitches: [69, 73, 76, 80], chordName: "Amaj7", resolvedFrom: "Asus4" }
    ],
    checkVoiceLeading: true,
    allowInversions: false
  },

  messages: applyMessagePreset("harmony", {
    initial: "Build Esus2 → E and Asus4 → Amaj7. Sus chords float (no third), then resolve when the third appears.",
    success: "Perfect! You've mastered suspension and resolution - the secret to neo-soul and R&B harmony. Notice how sus chords create gentle tension that melts into the third!",
    error: "Check: Esus2 = E-F#-B (no G#), E = E-G#-B, Asus4 = A-D-E (no C#), Amaj7 = A-C#-E-G#. Sus chords have no third!"
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
