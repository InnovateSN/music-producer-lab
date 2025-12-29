/**
 * Music Producer Lab - Lesson Configuration
 * Lesson: Drums 22 - Understanding Bars, Beats & Subdivisions
 *
 * A comprehensive foundational lesson on rhythm fundamentals:
 * bars, beats, quarter notes, eighth notes, and sixteenth notes.
 */

import { applyMessagePreset, buildHeroEyebrow } from "./config-presets.js";

export const lessonConfig = {
  // ====================
  // LESSON METADATA
  // ====================
  lessonKey: "mpl-drums-22-progress",
  lessonNumber: 22,
  lessonCategory: "Drums & Rhythm",
  depthLevel: 1, // Foundational knowledge

  // ====================
  // NAVIGATION
  // ====================
  nextLessonUrl: "lesson-drums-1.html",
  prevLessonUrl: "lesson-drums-0.html",
  overviewUrl: "labs.html",

  // ====================
  // HERO SECTION
  // ====================
  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 22, categoryLabel: "Rhythm Fundamentals" }),
    title: "Bars, Beats &",
    titleHighlight: "Subdivisions",
    subtitle: "Master the <strong>foundation of rhythm</strong>. Understand how music is organized in time - from bars and beats to eighth notes and sixteenth notes. This knowledge is essential for all drum programming and music production."
  },

  // ====================
  // SEQUENCER SETTINGS
  // ====================
  sequencer: {
    tempo: 120,
    stepCount: 16,
    swing: 0,
    showBeatMarkers: true,
    showStepNumbers: true,
    autoSaveState: true,
    enableVelocity: false,
    requiredTempo: 120
  },

  // ====================
  // EXERCISE INFO
  // ====================
  exercise: {
    title: "Demonstrate Your Understanding of Subdivisions",
    description: "Apply your knowledge of bars and subdivisions by creating a pattern that uses quarter notes (kick), eighth notes (snare), and sixteenth notes (hi-hat) - all the fundamental rhythmic divisions working together.",
    tip: "Count out loud! Quarter notes: '1-2-3-4' | Eighth notes: '1-and-2-and-3-and-4-and' | Sixteenth notes: '1-e-and-a-2-e-and-a-3-e-and-a-4-e-and-a'",
    steps: [
      { text: "<strong>Set the tempo to 120 BPM</strong> using the Tempo slider." },
      { text: "<strong>Kick (Quarter Notes):</strong> Place kicks on steps <strong>1, 5, 9, 13</strong> - the four beats of the bar." },
      { text: "<strong>Snare (Eighth Notes):</strong> Place snares on steps <strong>3, 7, 11, 15</strong> - the offbeats (the 'and' counts)." },
      { text: "<strong>Hi-Hat (Sixteenth Notes):</strong> Place hi-hats on <strong>every step (1-16)</strong> - all sixteenth note positions." },
      { text: "Press <strong>Play</strong> and listen to how different subdivisions layer together!" },
      { text: "Click <strong>Check Exercise</strong> when ready to verify your pattern." }
    ]
  },

  // ====================
  // INSTRUMENTS CONFIG
  // ====================
  instruments: [
    {
      id: "kick",
      label: "Kick",
      color: "linear-gradient(135deg, #e17055, #d63031)",
      targetSteps: [0, 4, 8, 12],
      instructionText: "Kick: Program quarter notes (beats 1, 2, 3, 4) on steps 1, 5, 9, 13. These are the downbeats - the foundation of the rhythm.",
      patternHint: {
        label: "Kick (Quarter Notes)"
      }
    },
    {
      id: "snare",
      label: "Snare",
      color: "linear-gradient(135deg, #ffeaa7, #fdcb6e)",
      targetSteps: [2, 6, 10, 14],
      instructionText: "Snare: Program eighth note offbeats (the 'and' counts) on steps 3, 7, 11, 15. These fall between the beats.",
      patternHint: {
        label: "Snare (Eighth Note Offbeats)"
      }
    },
    {
      id: "hihat",
      label: "Hi-Hat",
      color: "linear-gradient(135deg, #00cec9, #0984e3)",
      targetSteps: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
      instructionText: "Hi-Hat: Program all sixteenth notes - every single step from 1 to 16. This is the finest subdivision in our sequencer.",
      patternHint: {
        label: "Hi-Hat (All Sixteenth Notes)"
      }
    }
  ],

  // ====================
  // PATTERN HINT CONFIG
  // ====================
  patternHint: {
    enabled: true,
    note: "Quarter notes (kick) → Eighth notes (snare) → Sixteenth notes (hi-hat): three subdivisions working together!"
  },

  // ====================
  // COMPLETION MESSAGES
  // ====================
  messages: applyMessagePreset("drums", {
    initial: "Create a pattern showing quarter notes, eighth notes, and sixteenth notes to complete this exercise.",
    success: "🎉 Perfect! You understand how bars and subdivisions work. This knowledge is the foundation of all rhythm programming!",
    error: "Not quite right. Make sure you have the correct subdivision for each instrument.",
    alreadyCompleted: "You've mastered bars and subdivisions! This knowledge will help you in every lesson."
  }),

  // ====================
  // MODE FLAGS
  // ====================
  mode: {
    sandbox: false,
    showTargetHint: true,
    enablePresets: false,
    enableExport: false
  },

  // ====================
  // THEORY CONTENT
  // ====================
  theory: {
    sections: [
      {
        title: "What is a Bar (Measure)?",
        content: `
          <p>A <strong>bar</strong> (also called a <strong>measure</strong>) is a container that holds a fixed number of beats. Think of it like a box that organizes music into repeating sections.</p>

          <p>In <strong>4/4 time</strong> (the most common time signature), one bar contains exactly <strong>four beats</strong>. When you count "one - two - three - four," you've counted one complete bar.</p>

          <div style="margin-top: var(--space-md); padding: var(--space-md); background: rgba(0, 240, 255, 0.05); border-left: 4px solid var(--accent-cyan); border-radius: 6px;">
            <strong style="color: var(--accent-cyan);">In Our 16-Step Sequencer:</strong>
            <ul style="margin-top: var(--space-sm);">
              <li><strong>Steps 1-4:</strong> Beat 1</li>
              <li><strong>Steps 5-8:</strong> Beat 2</li>
              <li><strong>Steps 9-12:</strong> Beat 3</li>
              <li><strong>Steps 13-16:</strong> Beat 4</li>
            </ul>
            <p style="margin-top: var(--space-sm);">All 16 steps together = <strong>one complete bar</strong> in 4/4 time.</p>
          </div>
        `
      },
      {
        title: "What is a Beat?",
        content: `
          <p>A <strong>beat</strong> is the basic pulse of music - the steady rhythm you naturally tap your foot or clap to. In 4/4 time, there are <strong>four beats per bar</strong>.</p>

          <p>Each beat is also called a <strong>quarter note</strong> because it represents one-quarter of the bar (1 out of 4 beats).</p>

          <div style="margin-top: var(--space-md); padding: var(--space-md); background: rgba(255, 193, 7, 0.05); border-left: 4px solid var(--accent-amber); border-radius: 6px;">
            <strong style="color: var(--accent-amber);">Count the Beats:</strong>
            <p style="margin-top: var(--space-sm);">Count: <strong>"ONE - two - three - four - ONE - two - three - four"</strong></p>
            <p style="margin-top: var(--space-xs);">The emphasized "ONE" is called the <strong>downbeat</strong> - the first beat of each bar.</p>
          </div>
        `
      },
      {
        title: "Understanding Subdivisions",
        content: `
          <p><strong>Subdivisions</strong> are created when you split each beat into smaller, equal parts. This gives you more rhythmic precision and options for placing sounds.</p>

          <h4 style="font-size: 1rem; margin-top: var(--space-md); margin-bottom: var(--space-sm); color: var(--accent-cyan);">The Three Main Subdivisions:</h4>

          <div style="margin-top: var(--space-md);">
            <div style="padding: var(--space-md); background: rgba(0, 240, 255, 0.05); border-radius: 8px; margin-bottom: var(--space-sm);">
              <strong style="color: var(--accent-cyan);">1. Quarter Notes (The Beats)</strong>
              <p style="margin-top: var(--space-xs);">• <strong>4 per bar</strong> in 4/4 time</p>
              <p>• Sequencer steps: <strong>1, 5, 9, 13</strong> (the downbeats)</p>
              <p>• Count: <strong>"1 - 2 - 3 - 4"</strong></p>
              <p>• Common use: <strong>Kick drums</strong> to establish the tempo</p>
            </div>

            <div style="padding: var(--space-md); background: rgba(255, 193, 7, 0.05); border-radius: 8px; margin-bottom: var(--space-sm);">
              <strong style="color: var(--accent-amber);">2. Eighth Notes (Split Each Beat in Half)</strong>
              <p style="margin-top: var(--space-xs);">• <strong>8 per bar</strong> in 4/4 time</p>
              <p>• Sequencer steps: <strong>1, 3, 5, 7, 9, 11, 13, 15</strong> (every other step)</p>
              <p>• Count: <strong>"1-and-2-and-3-and-4-and"</strong></p>
              <p>• Common use: <strong>Hi-hats, shakers</strong> for steady rhythm</p>
            </div>

            <div style="padding: var(--space-md); background: rgba(138, 43, 226, 0.05); border-radius: 8px;">
              <strong style="color: var(--accent-purple);">3. Sixteenth Notes (Split Each Beat into Four)</strong>
              <p style="margin-top: var(--space-xs);">• <strong>16 per bar</strong> in 4/4 time</p>
              <p>• Sequencer steps: <strong>1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16</strong> (every step!)</p>
              <p>• Count: <strong>"1-e-and-a, 2-e-and-a, 3-e-and-a, 4-e-and-a"</strong></p>
              <p>• Common use: <strong>Fast hi-hats, rolls, detailed patterns</strong></p>
            </div>
          </div>
        `
      },
      {
        title: "How Our Sequencer Represents Time",
        content: `
          <p>The 16-step sequencer uses <strong>sixteenth note subdivision</strong> as its grid. This means each step represents one sixteenth note, giving you maximum precision for rhythm programming.</p>

          <div style="margin-top: var(--space-md); padding: var(--space-md); background: rgba(0, 240, 255, 0.05); border-radius: 8px;">
            <strong style="color: var(--accent-cyan);">Visual Grid Breakdown:</strong>
            <pre style="font-family: var(--font-mono); font-size: 0.85rem; margin-top: var(--space-sm); line-height: 1.6; color: var(--text-muted);">
Steps:     1  2  3  4  |  5  6  7  8  |  9 10 11 12  | 13 14 15 16
           |-----------|-------------|-------------|-------------|
Beats:     [  Beat 1  ] [  Beat 2  ] [  Beat 3  ] [  Beat 4  ]
Quarter:   ●           | ●           | ●           | ●
Eighth:    ●     ●     | ●     ●     | ●     ●     | ●     ●
Sixteenth: ● ● ● ●     | ● ● ● ●     | ● ● ● ●     | ● ● ● ●
            </pre>
          </div>

          <p style="margin-top: var(--space-md);">Because the grid is based on sixteenth notes, you can easily create:</p>
          <ul style="margin-left: var(--space-md); margin-top: var(--space-sm);">
            <li><strong>Quarter note patterns:</strong> Use every 4th step (1, 5, 9, 13)</li>
            <li><strong>Eighth note patterns:</strong> Use every 2nd step (1, 3, 5, 7, ...)</li>
            <li><strong>Sixteenth note patterns:</strong> Use any or all steps (1-16)</li>
          </ul>
        `
      },
      {
        title: "Why This Matters for Production",
        content: `
          <p>Understanding bars, beats, and subdivisions is <strong>fundamental to all music production</strong>. Here's why:</p>

          <div style="margin-top: var(--space-md);">
            <div style="padding: var(--space-sm); margin-bottom: var(--space-sm);">
              <strong>✓ Precise Rhythm Placement:</strong> You'll know exactly where to place each sound for the groove you want.
            </div>
            <div style="padding: var(--space-sm); margin-bottom: var(--space-sm);">
              <strong>✓ Communication:</strong> When collaborating, you can say "put a snare on beat 2" and everyone knows what you mean.
            </div>
            <div style="padding: var(--space-sm); margin-bottom: var(--space-sm);">
              <strong>✓ Genre Understanding:</strong> Different genres use different subdivision patterns (house uses eighths, trap uses sixteenths).
            </div>
            <div style="padding: var(--space-sm); margin-bottom: var(--space-sm);">
              <strong>✓ Arrangement:</strong> Songs are organized in bars - "8-bar intro," "16-bar verse," etc.
            </div>
            <div style="padding: var(--space-sm);">
              <strong>✓ Problem Solving:</strong> If your pattern feels "off," understanding subdivisions helps you diagnose and fix it.
            </div>
          </div>

          <div style="margin-top: var(--space-lg); padding: var(--space-md); background: rgba(0, 255, 157, 0.05); border-left: 4px solid var(--accent-green); border-radius: 6px;">
            <strong style="color: var(--accent-green);">🎯 Master This Concept:</strong>
            <p style="margin-top: var(--space-sm);">Every rhythm you'll ever program is built from these three building blocks: quarter notes, eighth notes, and sixteenth notes. Master them, and you can create any groove in any genre!</p>
          </div>
        `
      }
    ]
  },

  // ====================
  // LEARNING OBJECTIVES
  // ====================
  learningObjectives: [
    "Understand what a bar (measure) is and how it organizes music",
    "Identify the four beats in a 4/4 bar",
    "Recognize and create quarter note, eighth note, and sixteenth note patterns",
    "Count and feel different subdivisions: '1-2-3-4', '1-and-2-and', '1-e-and-a'",
    "Apply subdivision knowledge to program precise drum patterns"
  ]
};

if (typeof window !== 'undefined') {
  window.LESSON_CONFIG = lessonConfig;
}
