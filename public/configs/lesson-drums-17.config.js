import { applyMessagePreset, buildHeroEyebrow } from "./config-presets.js";

export const lessonConfig = {
  lessonKey: "mpl-drums-17-progress",
  lessonNumber: 17,
  lessonCategory: "Drums & Rhythm",
  depthLevel: 8,
  nextLessonUrl: "lesson-drums-18.html",
  prevLessonUrl: "lesson-drums-16.html",
  overviewUrl: "labs.html",
  hero: {
    eyebrow: buildHeroEyebrow({ lessonSlug: "lesson-drums-17", categoryLabel: "Drums & Rhythm" }),
    title: "Drum Layering &",
    titleHighlight: "Parallel Processing",
    subtitle: "Stack <strong>multiple drum sounds</strong> and process layers independently to create <strong>massive, professional drum tones</strong>. Learn kick layering (sub + punch), snare stacking (body + crack + clap), and parallel processing techniques used in modern pop, hip-hop, and EDM."
  },
  sequencer: { tempo: 95, stepCount: 16, swing: 0, showBeatMarkers: true, showStepNumbers: true, autoSaveState: true, enableVelocity: true, requiredTempo: 95 },
  exercise: {
    title: "Layer Kick Sounds",
    description: "Create a <strong>massive kick</strong> by layering <strong>sub kick (low freq)</strong> and <strong>punch kick (mid/high freq)</strong> on the same steps. This is the secret to modern drum production.",
    tip: "Layer sounds with different frequency ranges: Sub (20-80Hz), Body (80-250Hz), Punch (2-8kHz). Each layer fills a different part of the spectrum!",
    steps: [
      { text: "<strong>Set tempo to 95 BPM</strong>." },
      { text: "<strong>Sub Kick:</strong> Steps 1, 5, 9, 13, velocity 127 (pure low end)." },
      { text: "<strong>Punch Kick:</strong> Same steps 1, 5, 9, 13, velocity 100 (mid/high click)." },
      { text: "<strong>Listen:</strong> Together they create a full-spectrum kick." }
    ]
  },
  instruments: [
    { id: "kick_sub", label: "Sub Kick", color: "linear-gradient(135deg, #2d3436, #636e72)", targetSteps: [0, 4, 8, 12], targetVelocities: { 0: 127, 4: 127, 8: 127, 12: 127 }, instructionText: "Sub kick layer.", patternHint: { enabled: true } },
    { id: "kick_punch", label: "Punch Kick", color: "linear-gradient(135deg, #e17055, #d63031)", targetSteps: [0, 4, 8, 12], targetVelocities: { 0: 100, 4: 100, 8: 100, 12: 100 }, instructionText: "Punch kick layer.", patternHint: { enabled: true } }
  ],
  theory: { sections: [{ title: "Layering Strategy", content: "**Kick Layering:** Sub (808) + Punch (acoustic) = full kick. **Snare Layering:** Body + Crack + Clap = massive snare. **Processing:** EQ each layer differently, compress separately, then mix together." }] },
  learningObjectives: ["Layer multiple drum sounds on same steps", "Understand frequency spectrum separation", "Apply parallel processing concepts", "Create professional drum tones", "Use layering for genre-specific sounds"],
  validation: applyMessagePreset("drumSequencer", "correct-placement-and-velocity")
};
