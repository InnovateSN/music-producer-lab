/**
 * Music Producer Lab - Lesson Configuration
 * Lesson: Drums 19 - Professional Drum Mixing
 */

import { applyMessagePreset, buildHeroEyebrow } from "./config-presets.js";

export const lessonConfig = {
  lessonKey: "mpl-drums-19-progress",
  lessonNumber: 19,
  lessonCategory: "Drums & Rhythm",
  depthLevel: 10,

  nextLessonUrl: "lesson-drums-20.html",
  prevLessonUrl: "lesson-drums-14.html",
  overviewUrl: "labs.html",
  
  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 19, categoryLabel: "Drums & Rhythm" }),
    title: "Drum Mixing Basics:",
    titleHighlight: "Balance & Panning",
    subtitle: "Learn the <strong>fundamentals of drum mixing</strong>. Understand what <strong>volume</strong> and <strong>pan</strong> do, and how to <strong>balance drum elements</strong> for a cohesive, stereophonic sound. This is about getting your levels right before adding any processing—the foundation of a great mix."
  },
  
  sequencer: {
    tempo: 110,
    stepCount: 16,
    swing: 0,
    showBeatMarkers: true,
    enableVelocity: true,
    requiredTempo: 110
  },

  exercise: {
    title: "Balance Your Drum Mix",
    description: "In this exercise, you'll learn to <strong>balance drum elements using volume and panning</strong>. Before adding EQ, compression, or effects, the single most important step in mixing is getting your relative levels right and placing sounds in the stereo field. A well-balanced mix with good panning will sound clear and powerful even without processing.",
    tip: "Start with all faders at 0 dB. Bring up the kick first (usually loudest), then add the snare, then layer in the rest. Use panning to create width and separation!",
    steps: [
      { text: "<strong>Set the tempo to 110 BPM</strong> using the Tempo slider." },
      { text: "<strong>Program a basic drum pattern</strong> using the step sequencer (kick on beats 1, 5, 9, 13; snare on beats 5, 13; hi-hats every other step)." },
      { text: "<strong>Adjust volume faders</strong> in the mixer below to balance your drums (kick and snare usually loudest, hi-hats and percussion quieter)." },
      { text: "<strong>Pan your drums</strong> to create stereo width (kick/snare center, hi-hats and toms slightly left/right)." },
      { text: "<strong>Listen critically</strong> and refine until you have a balanced, cohesive drum mix with good stereo imaging." }
    ]
  },
  
  // Instruments with specific samples from different folders
  instruments: [
    {
      id: "kick",
      label: "Kick",
      color: "linear-gradient(135deg, #e17055, #d63031)",
      samplePath: "samples/drums/kick/Ghosthack-AC23_Kick_Clean.wav",
      targetSteps: [0, 4, 8, 12],
      defaultVolume: 0.9,  // 0.0 to 1.0
      defaultPan: 0,       // -1 (left) to 1 (right), 0 = center
      instructionText: "Kick drum - the foundation. Keep it centered and loud."
    },
    {
      id: "snare",
      label: "Snare",
      color: "linear-gradient(135deg, #ffeaa7, #fdcb6e)",
      samplePath: "samples/drums/snare/Ghosthack-AC23_Cobra Snare.wav",
      targetSteps: [4, 12],
      defaultVolume: 0.85,
      defaultPan: 0,
      instructionText: "Snare - the backbeat. Usually center, almost as loud as kick."
    },
    {
      id: "hihat",
      label: "Hi-Hat",
      color: "linear-gradient(135deg, #00cec9, #0984e3)",
      samplePath: "samples/drums/hihat/Ghosthack-AC23_Central Hihat.wav",
      targetSteps: [2, 6, 10, 14],
      defaultVolume: 0.6,
      defaultPan: 0.3,  // Slightly right
      instructionText: "Hi-hats - add rhythm. Pan slightly for width, keep quieter than kick/snare."
    },
    {
      id: "clap",
      label: "Clap",
      color: "linear-gradient(135deg, #fd79a8, #e84393)",
      samplePath: "samples/drums/clap/Ghosthack-AC23_Lo_Fi Clap.wav",
      targetSteps: [],
      defaultVolume: 0.7,
      defaultPan: -0.2,  // Slightly left
      instructionText: "Clap/rimshot - adds texture. Can layer with snare or use independently."
    },
    {
      id: "tom",
      label: "Tom",
      color: "linear-gradient(135deg, #a29bfe, #6c5ce7)",
      samplePath: "samples/drums/tom/Ghosthack-AC23_Tom_Dreamy.wav",
      targetSteps: [],
      defaultVolume: 0.75,
      defaultPan: -0.5,  // Left
      instructionText: "Tom - for fills and transitions. Pan left or right for stereo interest."
    },
    {
      id: "rim",
      label: "Rim",
      color: "linear-gradient(135deg, #74b9ff, #0984e3)",
      samplePath: "samples/drums/rim/Rimshot LM1 18.wav",
      targetSteps: [],
      defaultVolume: 0.65,
      defaultPan: 0.4,  // Right
      instructionText: "Rimshot - percussive accent. Great for adding rhythmic detail."
    },
    {
      id: "crash",
      label: "Crash",
      color: "linear-gradient(135deg, #fab1a0, #ff7675)",
      samplePath: "samples/drums/crash/crash.wav",
      targetSteps: [],
      defaultVolume: 0.7,
      defaultPan: -0.6,  // Far left
      instructionText: "Crash cymbal - for emphasis and transitions. Pan wide for impact."
    }
  ],
  
  messages: applyMessagePreset("drums", {
    initial: "Program a drum pattern and use the mixer to balance your drums!",
    success: "🎛️ Excellent balance! Your drums have clarity and stereo width.",
    error: "Try adjusting your volume levels and panning for better balance."
  }),

  mode: {
    sandbox: true,
    showVelocityLane: true,
    enableMixer: true  // Enable the mixer component
  },

  learningObjectives: [
    "Understand what volume (gain) does and how to set relative levels",
    "Learn what panning is and how it creates stereo width",
    "Balance drum elements for clarity and power",
    "Create stereophonic drum mixes using panning techniques",
    "Develop critical listening skills for mixing"
  ],

  // Educational content about mixing
  mixingTheory: {
    title: "Mixing Fundamentals: Volume & Pan",
    sections: [
      {
        heading: "What is Volume (Gain)?",
        content: `<strong>Volume</strong> (also called <strong>gain</strong> or <strong>level</strong>) controls how loud a sound is. In mixing, it's not just about "loudness"—it's about <strong>relative balance</strong>.

The most important element should be loudest, supporting elements should be quieter. In drums:
• <strong>Kick & Snare:</strong> Usually loudest (foundation + backbeat)
• <strong>Hi-hats:</strong> Quieter, providing rhythm without overpowering
• <strong>Percussion:</strong> Even quieter, adding texture and detail

Think of volume like layers in a painting—some elements are foreground (loud), others are background (quiet). Getting this balance right is 80% of a good mix.`
      },
      {
        heading: "What is Panning?",
        content: `<strong>Panning</strong> controls where a sound sits in the <strong>stereo field</strong>—from left speaker to right speaker. Your ears hear slightly different signals from each speaker, creating a sense of width and space.

• <strong>Center (0):</strong> Equal in both speakers—powerful, focused
• <strong>Left (-1) / Right (+1):</strong> More in one speaker—creates width
• <strong>Slight pan (±0.2 to ±0.4):</strong> Subtle width without losing focus

<strong>Why pan?</strong> When all drums are centered, they fight for the same space. Panning separates them, making each element clearer and creating a more engaging, "3D" listening experience.`
      },
      {
        heading: "Basic Drum Panning Strategy",
        content: `Here's a classic approach to panning drums for a balanced stereo mix:

<strong>Center (0):</strong>
• Kick drum (foundation—needs power)
• Snare (backbeat—needs focus)
• Bass (sub frequencies work best in center)

<strong>Slightly Off-Center (±0.2 to ±0.4):</strong>
• Hi-hats (add width without losing focus)
• Rim shots / snaps
• Shakers and light percussion

<strong>Wide (±0.5 to ±0.8):</strong>
• Toms (left to right like a drum kit)
• Crashes and cymbals (dramatic width)
• Ambient percussion

<strong>Tip:</strong> Imagine you're sitting in front of a drummer. Kick and snare are center, hi-hat is to one side, toms spread left to right. This creates a natural, realistic stereo image.`
      },
      {
        heading: "Mixing Tips for Drums",
        content: `<strong>1. Start with the foundation:</strong> Bring up the kick first, then add snare, then layer everything else on top.

<strong>2. Leave headroom:</strong> Don't make everything loud! Quieter elements add depth and let the important sounds breathe.

<strong>3. Check in mono:</strong> A mix that sounds good in mono (one speaker) will sound amazing in stereo. If it's muddy in mono, adjust volumes.

<strong>4. Use panning for separation:</strong> If two sounds clash (e.g., hi-hat and shaker), pan them apart slightly.

<strong>5. Trust your ears:</strong> Numbers are guides, but your ears are the final judge. If it sounds good, it is good.

<strong>Remember:</strong> Great mixes start with great balance. Before reaching for EQ or compression, get your levels and panning right. Processing can't fix a poorly balanced mix!`
      }
    ]
  },


  theory: {
    sections: [
      {
        title: "Core Theory: Drums 19",
        content: `
This lesson focuses on practical workflow and musical intent.
Use the target pattern as a repeatable building block, then adapt it to your genre and arrangement needs.

When practicing, prioritize timing consistency first, then refine tone, dynamics, and variation.
        `
      }
    ]
  },

  // ====================
  // REFERENCE SOURCES
  // ====================
  sourceReferences: [
    {
      name: 'AES (Audio Engineering Society)',
      url: 'https://www.aes.org/',
      usage: 'Audio engineering standards, terminology, and critical-listening best practices'
    },
    {
      name: 'Ableton Live Documentation',
      url: 'https://www.ableton.com/en/manual/',
      usage: 'DAW workflows, production techniques, and practical implementation steps'
    },
    {
      name: 'Wikipedia',
      url: 'https://www.wikipedia.org/',
      usage: 'Historical context, genre evolution, and foundational music theory references'
    }
  ],

};
