/**
 * Music Producer Lab - Lesson Configuration
 * Lesson: Bass 1 - Bass Fundamentals: Root Notes
 */

import { applyMessagePreset, buildHeroEyebrow } from "./config-presets.js";

export const lessonConfig = {
  // ====================
  // LESSON METADATA
  // ====================
  lessonKey: "mpl-bass-1-progress",
  lessonNumber: 1,
  lessonCategory: "Bass & Low End",

  // ====================
  // NAVIGATION
  // ====================
  nextLessonUrl: "lesson-bass-2.html",
  prevLessonUrl: null,
  overviewUrl: "labs.html",

  // ====================
  // HERO SECTION
  // ====================
  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 1, categoryLabel: "Bass & Low End" }),
    title: "Bass Fundamentals:",
    titleHighlight: "Root Notes & Foundation",
    subtitle: "Learn what bass does in music. Place root notes that lock with your kick drum to create a solid low-end foundation. Bass provides the harmonic root and rhythmic anchor that holds the track together."
  },

  // ====================
  // SEQUENCER SETTINGS
  // ====================
  sequencer: {
    tempo: 120,
    stepCount: 16,
    bars: 1,
    noteRange: { min: 36, max: 60 }, // C2 to C4 (bass range)
  },

  // ====================
  // EXERCISE INFO
  // ====================
  exercise: {
    title: "Place Root Notes on the 1",
    description: "In this exercise, you'll place a bass note on beat 1 (step 1) of each bar. This is the most fundamental bass pattern: the root note landing with the kick drum creates a powerful foundation. When kick and bass hit together on beat 1, you create a unified low-end that listeners feel in their chest.",
    tip: "Listen to how the bass and kick sound when they hit together. They should feel like one unified 'thump' in the low end, not two separate sounds fighting each other.",
    steps: [
      { text: "<strong>Click on step 1</strong> at pitch <strong>C3</strong> (the middle C in the bass range)." },
      { text: "Press <strong>Play</strong> and listen to how the bass locks with the kick on beat 1." },
      { text: "Try placing notes at different pitches and hear how lower notes feel 'heavier' and higher notes feel 'lighter'." },
      { text: "Return to <strong>C3 on step 1</strong> and click <strong>Check Exercise</strong> when ready." }
    ]
  },

  // ====================
  // THEORY SECTIONS
  // ====================
  theory: {
    sections: [
      {
        title: "What Is Bass?",
        content: `Bass is the low-frequency foundation of most music. It serves two critical roles:

1. **Harmonic Foundation**: Bass defines the root note of the chord, telling listeners what key/chord the music is in.
2. **Rhythmic Anchor**: Bass locks with the drums (especially kick) to create a unified rhythmic pulse.

In electronic music, bass typically sits between 40-200 Hz (roughly C1 to G3). This is where you feel sound as much as hear it.`
      },
      {
        title: "Why Bass on Beat 1?",
        content: `Beat 1 is the "downbeat"—the strongest beat in a bar. Placing bass here:

- **Creates stability**: Listeners immediately know where the groove is
- **Locks with kick**: Kick + bass on beat 1 = powerful unified low end
- **Defines harmony**: The root note tells us what chord we're in

This is why almost every genre from house to hip-hop starts bass patterns on beat 1. It's the anchor point everything else builds from.`
      },
      {
        title: "Bass vs Kick: Working Together",
        content: `Bass and kick occupy similar frequency ranges (both are low), so they must complement each other:

**When they hit together** (like on beat 1):
- They should feel like one unified "thump"
- The kick provides the transient attack
- The bass provides the sustained body/tone

**Common mistake**: If bass and kick sound muddy or unclear together, they're either:
- Too close in pitch (kick needs space below the bass)
- Too loud (they're fighting for headroom)

In later lessons, we'll learn sidechain compression to make them work perfectly together.`
      }
    ]
  },

  // ====================
  // PIANO ROLL CONFIG
  // ====================
  pianoRoll: {
    targetNotes: [
      { pitch: 48, step: 0, duration: 1 } // C3 on step 1, 1 beat duration
    ],
    highlightScale: [48, 50, 52, 53, 55, 57, 59, 60], // C major scale in bass range
    showChordDetection: false, // Not needed for single bass notes
    allowPolyphony: false, // Bass is monophonic
    bassMode: true, // Use bass-optimized synthesis
    waveform: 'sawtooth' // Classic bass waveform
  },

  // ====================
  // COMPLETION MESSAGES
  // ====================
  messages: applyMessagePreset("default", {
    initial: "Place a C3 note on step 1 to complete the exercise.",
    success: "Perfect! You've created your first bass note. This is the foundation all bass patterns build from.",
    error: "Not quite. Make sure you have a C3 note on step 1 (beat 1)."
  }),

  // ====================
  // MODE FLAGS
  // ====================
  mode: {
    sandbox: false,
    sequencerType: 'piano-roll', // Use piano roll for bass
    showTargetHint: true,
    enablePresets: false,
    enableExport: false
  }
};

if (typeof window !== 'undefined') {
  window.LESSON_CONFIG = lessonConfig;
}
