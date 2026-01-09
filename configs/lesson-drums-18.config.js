import { applyMessagePreset, buildHeroEyebrow } from "./config-presets.js";

export const lessonConfig = {
  lessonKey: "mpl-drums-18-progress",
  lessonNumber: 18,
  lessonCategory: "Drums & Rhythm",
  depthLevel: 8,
  nextLessonUrl: "lesson-drums-19.html",
  prevLessonUrl: "lesson-drums-17.html",
  overviewUrl: "labs.html",
  hero: {
    eyebrow: buildHeroEyebrow({ lessonSlug: "lesson-drums-18", categoryLabel: "Drums & Rhythm" }),
    title: "Swing & Shuffle",
    titleHighlight: "Variations",
    subtitle: "Go beyond basic swing. Master <strong>triplet-based shuffles</strong>, <strong>half-time shuffle</strong>, and <strong>swing percentages</strong> for different genres. Understand the difference between <strong>binary (straight)</strong> and <strong>ternary (triplet)</strong> groove feels."
  },
  sequencer: { tempo: 88, stepCount: 12, swing: 0, showBeatMarkers: true, showStepNumbers: true, autoSaveState: true, enableVelocity: true, requiredTempo: 88 },
  exercise: {
    title: "Build Triplet Shuffle Pattern",
    description: "Create a <strong>12-step triplet shuffle</strong> using 12 steps (4 beats × 3 = 12 triplets). This is the foundation of blues, jazz, and shuffle rock.",
    tip: "In 12-step mode, each beat has 3 subdivisions. Play on beats 1 and 3 of each triplet to get the classic shuffle 'long-short' feel!",
    steps: [
      { text: "<strong>Set tempo to 88 BPM</strong>." },
      { text: "<strong>Kick:</strong> Steps 1, 7 (downbeats)." },
      { text: "<strong>Snare:</strong> Steps 4, 10 (backbeats)." },
      { text: "<strong>Hi-Hat:</strong> Steps 1, 3, 4, 6, 7, 9, 10, 12 (shuffle pattern: long-short-long-short)." },
      { text: "<strong>Listen:</strong> The uneven spacing creates the shuffle groove." }
    ]
  },
  instruments: [
    { id: "kick", label: "Kick", color: "linear-gradient(135deg, #e17055, #d63031)", targetSteps: [0, 6], instructionText: "Kick on 1 and 7.", patternHint: { enabled: true } },
    { id: "snare", label: "Snare", color: "linear-gradient(135deg, #ffeaa7, #fdcb6e)", targetSteps: [3, 9], instructionText: "Snare backbeat.", patternHint: { enabled: true } },
    { id: "hihat", label: "Hi-Hat", color: "linear-gradient(135deg, #00cec9, #0984e3)", targetSteps: [0, 2, 3, 5, 6, 8, 9, 11], instructionText: "Shuffle hi-hat pattern.", patternHint: { enabled: true } }
  ],
  theory: { sections: [{ title: "Swing vs Shuffle", content: "**Swing:** Delays 8th notes slightly (50-75% triplet feel). **Shuffle:** Full triplet-based rhythm (100% triplet). **Half-time shuffle:** Shuffle pattern at half tempo (Rosanna, Fool in the Rain). **Percentage:** 0% = straight, 50% = full triplet, 25% = subtle swing." }] },
  learningObjectives: ["Program triplet-based shuffle patterns", "Understand swing percentages", "Create half-time shuffle grooves", "Differentiate binary vs ternary feels", "Apply swing to different genres"],
  validation: applyMessagePreset("drumSequencer", "correct-placement")
};
