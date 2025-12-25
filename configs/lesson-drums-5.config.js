/**
 * Music Producer Lab - Lesson Configuration
 * Lesson: Drums 5 - Variation & Fills
 * 
 * This config file defines all lesson parameters that can be used
 * by the lesson template to generate a fully functional lesson page.
 */

export const lessonConfig = {
  // ====================
  // LESSON METADATA
  // ====================
  lessonKey: "mpl-lesson5-progress",
  lessonNumber: 5,
  lessonCategory: "Drum pattern",
  
  // ====================
  // NAVIGATION
  // ====================
  nextLessonUrl: "explanation.html",
  prevLessonUrl: "lesson-drums-4.html",
  overviewUrl: "labs.html",
  
  // ====================
  // HERO SECTION
  // ====================
  hero: {
    eyebrow: "Lesson 5 · Drum pattern",
    title: "Variation & fills:",
    titleHighlight: "end of loop",
    subtitle: "Create a small fill in the last bar to make the loop feel like it breathes before repeating."
  },
  
  // ====================
  // SEQUENCER SETTINGS
  // ====================
  sequencer: {
    tempo: 120,
    stepCount: 16,        // Options: 8, 16, 32
    swing: 0,             // 0-100, 0 = no swing
    showBeatMarkers: true,
    showStepNumbers: true,
    autoSaveState: true   // Save to localStorage on every change
  },
  
  // ====================
  // EXERCISE INFO
  // ====================
  exercise: {
    title: "Create a Fill at the End of the Bar",
    description: "Drum fills add excitement and signal transitions in music. In this exercise, you'll create a <strong>fill pattern</strong> in the last beat (beat 4) while keeping the groove in beats 1-3.",
    tip: "Fills 'break' the pattern to signal something new is coming. The silence in the hi-hats makes the kick/snare fill pop!",
    steps: [
      { text: "<strong>Kick row:</strong> Steps <strong>1, 5, 9, 13, 15</strong> - normal pattern plus extra kicks in beat 4." },
      { text: "<strong>Snare row:</strong> Steps <strong>5, 13, 16</strong> - backbeat plus a final hit on step 16." },
      { text: "<strong>Hi-Hat row:</strong> Steps <strong>1, 3, 5, 7, 9, 11</strong> only - stop the hi-hats before the fill." },
      { text: "The fill creates tension before the loop restarts!" }
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
      targetSteps: [0, 4, 8, 12, 14],
      instructionText: "Kick: Program 4/4 (steps 1, 5, 9) and create a fill with steps 13-16. Suggested target: 1, 5, 9, 13, 15.",
      // For pattern hint display
      patternHint: {
        label: "Kick",
        highlightSteps: [14]  // Steps to highlight as "special" (0-indexed)
      }
    },
    {
      id: "snare",
      label: "Snare",
      color: "linear-gradient(135deg,#5f4dff,#8a9bff)",
      targetSteps: [4, 12, 15],
      instructionText: "Snare: Program the backbeat (steps 5, 13) and add a final hit on step 16. Suggested target: 5, 13, 16.",
      patternHint: {
        label: "Snare",
        highlightSteps: [15]
      }
    },
    {
      id: "hihat",
      label: "Hi-Hat",
      color: "linear-gradient(135deg,#00d4ff,#b8ffdd)",
      targetSteps: [0, 2, 4, 6, 8, 10],
      instructionText: "Hi-Hat: Program straight eighths for the first 3 beats (steps 1-12), leaving space for the fill.",
      patternHint: {
        label: "Hi-Hat",
        fillZoneSteps: [11, 12, 13, 14, 15]  // Steps to show as "fill zone"
      }
    }
  ],
  
  // ====================
  // PATTERN HINT CONFIG (optional)
  // ====================
  patternHint: {
    enabled: true,
    note: "Steps 12-16 are the \"fill zone\" - hi-hats stop to let kick/snare shine!"
  },
  
  // ====================
  // COMPLETION MESSAGES
  // ====================
  messages: {
    initial: "Complete the exercise to unlock the next lesson.",
    alreadyCompleted: "You've already completed this exercise. Feel free to practice or move to the next lesson!",
    success: "Correct! Great job! You can now proceed to the next lesson.",
    error: "Not quite right. Check the pattern and try again!"
  },
  
  // ====================
  // MODE FLAGS
  // ====================
  mode: {
    sandbox: false,        // If true, no target pattern required
    showTargetHint: true,  // Show visual pattern hint
    enablePresets: false,  // Allow saving/loading presets
    enableExport: false    // Allow exporting pattern as JSON/MIDI
  }
};

// For non-module scripts
if (typeof window !== 'undefined') {
  window.LESSON_CONFIG = lessonConfig;
}
