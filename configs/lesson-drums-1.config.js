/**
 * Music Producer Lab - Lesson Configuration
 * Lesson: Drums 1 - 4 on the floor
 */

import { applyMessagePreset, buildHeroEyebrow } from "./config-presets.js";

export const lessonConfig = {
  // ====================
  // LESSON METADATA
  // ====================
  lessonKey: "mpl-lesson1-progress",
  lessonNumber: 1,
  lessonCategory: "Drum pattern",
  
  // ====================
  // NAVIGATION
  // ====================
  nextLessonUrl: "lesson-drums-2.html",
  prevLessonUrl: "lesson-drums-0.html",
  overviewUrl: "labs.html",
  
  // ====================
  // HERO SECTION
  // ====================
  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 1, categoryLabel: "Drum pattern" }),
    title: "4 on the Floor:",
    titleHighlight: "Your First Full Beat",
    subtitle: "Build the most important rhythm pattern in electronic music. You'll create a repeating rhythm that feels stable, danceable, and easy to recognize. This single pattern is the foundation behind house, techno, and most modern dance music. Once you understand this, everything else in drum programming becomes much less mysterious."
  },
  
  // ====================
  // SEQUENCER SETTINGS
  // ====================
  sequencer: {
    tempo: 120,
    stepCount: 16,
    swing: 0,
    requiredTempo: 120 // Students must set tempo to 120 BPM
  },
  
  // ====================
  // EXERCISE INFO
  // ====================
  exercise: {
    title: "Build the 4-on-the-Floor Kick Pattern",
    description: "<strong>\"4 on the floor\"</strong> means a kick drum on every beat of the bar. Since there are four beats in a bar (in 4/4 time), you place four kicks equally spaced. This creates a steady pulse that dancers can lock onto. It might sound \"too simple,\" and that's exactly the point - this simplicity is power. It leaves space for everything else you'll add later: hi-hats, claps, bass, chords, and melodies.",
    tip: "Count \"one-two-three-four\" out loud while the loop plays. The kick should hit exactly when you say each number!",
    steps: [
      { text: "<strong>Set the tempo to 120 BPM</strong> using the Tempo slider below the sequencer. This is the standard house music tempo." },
      { text: "<strong>Click on steps 1, 5, 9, and 13</strong> in the Kick row to place your kicks." },
      { text: "These positions correspond to the <strong>four main beats</strong> of the bar (quarter notes)." },
      { text: "Press <strong>Play</strong> to hear your pattern loop. Does it feel even and steady?" },
      { text: "Listen: Does the loop flow smoothly from end back to start without stumbling?" },
      { text: "When satisfied, click <strong>Check Exercise</strong> to verify your pattern and tempo." }
    ]
  },
  
  // ====================
  // INSTRUMENTS CONFIG
  // ====================
  instruments: [
    {
      id: "kick",
      label: "Kick",
      color: "linear-gradient(135deg,#ff5a3d,#ffb28a)",
      targetSteps: [0, 4, 8, 12],
      instructionText: "Exercise — Kick: Create the \"4 on the floor\" pattern by placing one kick on each of the four beats. In the 16-step grid, the four beats are steps 1, 5, 9, and 13. When you count \"one-two-three-four,\" these are where the kicks land. This is the heartbeat of the track.",
      patternHint: {
        label: "Kick"
      }
    }
  ],
  
  // ====================
  // PATTERN HINT CONFIG
  // ====================
  patternHint: {
    enabled: true,
    note: "Kick on every beat: steps 1, 5, 9, and 13"
  },
  
  // ====================
  // COMPLETION MESSAGES
  // ====================
  messages: applyMessagePreset("drums", {
    initial: "Complete the kick exercise to unlock the next lesson.",
    success: "🎉 Correct! Great job! You can now proceed to the next lesson.",
    error: "Not quite right. Make sure you have kicks on steps 1, 5, 9, and 13!"
  }),
  
  // ====================
  // VALIDATION RULES
  // ====================
  validation: {
    type: "drum_pattern",
    requiredInstruments: [
      {
        id: "kick",
        targetSteps: [0, 4, 8, 12], // Steps 1, 5, 9, 13
        tolerance: 0, // Exact match required
        minHitsRequired: 4
      }
    ],
    requiredTempo: 120,
    tempoTolerance: 0 // Must be exactly 120 BPM
  },

  // ====================
  // THEORY CONTENT
  // ====================
  theory: {
    sections: [
      {
        title: "What is \"4 on the Floor\"?",
        content: `
**Definition:**
"4 on the floor" is a drum pattern where the kick (bass drum) hits on every beat of a 4/4 measure. The term comes from the kick drum literally hitting "on the floor" - meaning the downbeats.

**Why It Works:**
- **Simplicity**: The pattern is predictable and easy to follow
- **Physical Response**: Your body naturally moves to steady quarter note pulses
- **Universal**: Works across genres - house, techno, disco, pop, EDM
- **Space**: Leaves room for other elements like hi-hats, snares, and melodies

**Musical Context:**
In 4/4 time (the most common time signature), each bar has four quarter note beats. When you count "1-2-3-4", you're counting quarter notes. Placing a kick on each count creates the "4 on the floor" pattern.

**The Grid:**
In a 16-step sequencer, each bar is divided into 16 sixteenth notes. The four quarter note beats fall on steps 1, 5, 9, and 13. This is why these positions are highlighted - they mark the main beats.

**Historical Note:**
This pattern became the foundation of disco in the 1970s (think Donna Summer, Bee Gees), then dominated house music in the 1980s-90s (Frankie Knuckles, Daft Punk), and continues in modern EDM (Calvin Harris, deadmau5). It's the most-used kick pattern in electronic music history.
        `
      },
      {
        title: "How to Apply This in Your DAW",
        content: `
**Step 1: Set Your Grid**
- Open your DAW (Ableton, FL Studio, Logic, etc.)
- Set the grid to quarter notes (1/4)
- Or use a step sequencer if your DAW has one

**Step 2: Place Kick Drums**
- Load a kick drum sample
- Place one kick hit on beat 1, 2, 3, and 4 of your bar
- The kick should align with the grid lines

**Step 3: Listen and Adjust**
- Play the loop
- Ensure kicks are evenly spaced
- Adjust volume if needed (kicks should be prominent but not distorting)

**Common Mistakes to Avoid:**
- **Too Quiet**: Kick should be the loudest element initially
- **Uneven Spacing**: Make sure kicks are exactly on the beat
- **Wrong BPM**: House music typically uses 120-130 BPM
- **Overcomplicating**: Resist adding fills or variations at this stage

**Next Steps:**
Once you have a solid 4-on-the-floor kick, you'll add:
1. Hi-hats on the offbeats (lesson 2)
2. Snare or clap on beats 2 and 4 (lesson 3)
3. Additional percussion layers (lessons 4-5)
        `
      }
    ]
  },

  // ====================
  // LEARNING OBJECTIVES
  // ====================
  learningObjectives: [
    "Understand what \"4 on the floor\" means and why it's foundational to electronic music",
    "Place kick drums on the four main beats (steps 1, 5, 9, 13) in a 16-step sequencer",
    "Set and maintain proper tempo (120 BPM) for house music",
    "Recognize the relationship between quarter notes and a 16-step grid",
    "Apply the 4-on-the-floor pattern in any DAW using a quarter note grid"
  ],

  // ====================
  // MODE FLAGS
  // ====================
  mode: {
    sandbox: false,
    showTargetHint: true,
    enablePresets: false,
    enableExport: false,
    sequencerType: 'drums'
  }
};

if (typeof window !== 'undefined') {
  window.LESSON_CONFIG = lessonConfig;
}
