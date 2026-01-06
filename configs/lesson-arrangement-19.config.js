/**
 * Music Producer Lab - Lesson Configuration
 * Lesson: Arrangement 19 - Arranging for the Mix
 *
 * This lesson teaches how to arrange with mixing in mind.
 * Master frequency space, dynamic range, and mix-ready arrangements.
 */

import { applyMessagePreset, buildHeroEyebrow } from "./config-presets.js";

export const lessonConfig = {
  lessonKey: "mpl-arrangement-19-progress",
  lessonNumber: 19,
  lessonCategory: "Arrangement",
  depthLevel: 5,

  nextLessonUrl: "lesson-arrangement-20.html",
  prevLessonUrl: "lesson-arrangement-18.html",
  overviewUrl: "labs.html",

  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 19, categoryLabel: "Arrangement" }),
    title: "Arranging for the Mix:",
    titleHighlight: "Mix-Ready Production",
    subtitle: "Arrange with <strong>mixing in mind</strong>. Leave <strong>frequency space</strong>, manage <strong>dynamic range</strong>, and create <strong>mix-ready arrangements</strong>. Good arrangement = 80% of a great mix."
  },

  exercise: {
    title: "Create a Mix-Ready Arrangement",
    description: "Build an arrangement designed for easy mixing. Leave frequency space, avoid element clashing, manage dynamics, and create natural separation. <strong>A great arrangement needs minimal mixing.</strong>",
    tip: "Mix engineers say: \"A great arrangement mixes itself.\" If you can't hear every element clearly in the arrangement, you won't be able to mix it later. Fix it in the arrangement phase.",
    steps: [
      { text: "<strong>Assign frequency zones</strong> - One element per frequency range" },
      { text: "<strong>Use stereo space</strong> - Pan elements left/right to avoid center pile-up" },
      { text: "<strong>Leave dynamic range</strong> - Don't max out levels, leave headroom" },
      { text: "<strong>Create natural separation</strong> - Elements separated by frequency, stereo, or time" },
      { text: "<strong>Limit simultaneous elements</strong> - Maximum 4-5 at once" },
      { text: "<strong>Test in mono</strong> - Should still sound clear with no panning" }
    ]
  },

  mixFriendlyPrinciples: [
    {
      principle: "Frequency Separation",
      description: "No two elements fight for the same frequency range",
      howTo: "Bass: 60-250Hz, Pads: 250Hz-1kHz, Vocals: 1kHz-4kHz, Hi-hats: 8kHz+",
      benefit: "Each element has sonic space to live"
    },
    {
      principle: "Stereo Separation",
      description: "Use the full stereo field, not just center",
      howTo: "Lead vocal: Center, Rhythm guitar: Left, Piano: Right, Pad: Wide",
      benefit: "Prevents center frequency pile-up"
    },
    {
      principle: "Dynamic Range",
      description: "Leave 6-12dB headroom on the master",
      howTo: "Keep peaks around -6dB to -12dB, not hitting 0dB",
      benefit: "Room for mixing, mastering, and transient punch"
    },
    {
      principle: "Element Limit",
      description: "Maximum 4-5 elements playing simultaneously",
      howTo: "Foundation + Pad + Rhythm + Lead + Fills = 5 max",
      benefit: "Clarity, separation, and professional sound"
    },
    {
      principle: "Mono Compatibility",
      description: "Arrangement works in mono (no phase cancellation)",
      howTo: "Test mix in mono—everything should still be audible",
      benefit: "Works on phones, clubs, and radio"
    }
  ],

  commonMistakes: [
    { mistake: "Center pile-up", fix: "Pan instruments left/right" },
    { mistake: "Frequency clashing", fix: "Assign each element its own frequency zone" },
    { mistake: "Too many elements", fix: "Remove 1-2 elements, arrangement will sound bigger" },
    { mistake: "No headroom", fix: "Lower all faders, leave 6-12dB headroom" },
    { mistake: "Phase cancellation", fix: "Check in mono, adjust stereo width" }
  ],

  messages: applyMessagePreset("arrangement", {
    initial: "Create a mix-ready arrangement with proper separation!",
    success: "🎚️ Perfect mix-ready arrangement! This will be incredibly easy to mix.",
    error: "Check for frequency clashing, center pile-up, or too many simultaneous elements.",
    alreadyCompleted: "You've mastered mix-ready arranging!"
  }),

  mode: {
    type: "structure-builder",
    sandbox: false,
    showTimeline: true,
    showFrequencyAnalyzer: true,
    showStereoMeter: true,
    showHeadroomMeter: true
  },

  learningObjectives: [
    "Arrange with mixing in mind from the start",
    "Apply five mix-friendly principles",
    "Create natural frequency and stereo separation",
    "Leave appropriate headroom for mixing",
    "Ensure mono compatibility",
    "Avoid common arrangement mistakes that cause mix problems"
  ]
};

if (typeof window !== 'undefined') window.LESSON_CONFIG = lessonConfig;
