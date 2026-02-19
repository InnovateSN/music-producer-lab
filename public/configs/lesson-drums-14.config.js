/**
 * Music Producer Lab - Lesson Configuration
 * Lesson: Drums 14 - Polyrhythms & Metric Modulation
 * 
 * This lesson teaches polyrhythmic concepts, common ratios (3:4, 5:4, etc.),
 * and metric modulation techniques for advanced rhythm programming.
 */

import { applyMessagePreset, buildHeroEyebrow } from "./config-presets.js";

export const lessonConfig = {
  // ====================
  // LESSON METADATA
  // ====================
  lessonKey: "mpl-drums-14-progress",
  lessonNumber: 14,
  lessonCategory: "Drums & Rhythm",
  depthLevel: 7,
  
  // ====================
  // NAVIGATION
  // ====================
  nextLessonUrl: "lesson-drums-19.html",
  prevLessonUrl: "lesson-drums-13.html",
  overviewUrl: "labs.html",
  
  // ====================
  // HERO SECTION
  // ====================
  hero: {
    eyebrow: buildHeroEyebrow({ lessonSlug: "lesson-drums-14", categoryLabel: "Drums & Rhythm" }),
    title: "Polyrhythms &",
    titleHighlight: "Metric Modulation",
    subtitle: "Discover the <strong>mathematical beauty of layered rhythms</strong>. Polyrhythms occur when two or more contrasting rhythmic patterns play simultaneously—the '3' in 3:4 means a pattern dividing time into thirds, while the '4' divides into quarters. This creates <strong>rhythmic tension and hypnotic complexity</strong> used everywhere from West African drumming and prog rock to modern electronic music. Master <strong>3-over-4</strong>, <strong>5-over-4</strong>, and <strong>metric modulation</strong> to add sophisticated movement to your productions."
  },
  
  // ====================
  // SEQUENCER CONFIG
  // ====================
  sequencer: {
    tempo: 100,
    stepCount: 12,
    swing: 0,
    showBeatMarkers: true,
    showStepNumbers: true,
    autoSaveState: true,
    enableVelocity: true,
    requiredTempo: 100
  },
  
  // ====================
  // EXERCISE
  // ====================
  exercise: {
    title: "Create a 3:4 Polyrhythm",
    description: "A <strong>3:4 polyrhythm</strong> is the most common and accessible polyrhythm in music. It layers a pattern repeating every <strong>3 pulses</strong> against a pattern repeating every <strong>4 pulses</strong>. To fit together, we need a grid of 12 steps (the lowest common multiple of 3 and 4). The kick divides this into 4 equal parts (12÷4=3, so every 3 steps), while the hi-hat divides it into 3 equal parts (12÷3=4, so every 4 steps). This mathematical relationship creates a <strong>cyclical tension</strong> that repeats every 12 steps—both patterns align on step 1, then drift apart and realign. This is the rhythmic DNA found in Radiohead's \"15 Step,\" Aphex Twin's IDM, and countless African drumming traditions.",
    tip: "Mnemonic: Say 'Nice cup of tea' in rhythm—that's the 3:4 pattern! The hi-hats should feel like they're 'floating' against the kick. That's the polyrhythmic tension!",
    steps: [
      { text: "<strong>Set the tempo to 100 BPM</strong> using the Tempo slider." },
      { text: "<strong>Kick:</strong> Steps 1, 4, 7, 10 (four evenly spaced = the '4' in 3:4)." },
      { text: "<strong>Hi-Hat:</strong> Steps 1, 5, 9 (three evenly spaced = the '3' in 3:4)." },
      { text: "<strong>Snare:</strong> Steps 4 and 10 for backbeat (helps anchor the rhythm)." },
      { text: "<strong>Listen:</strong> Notice how kick and hi-hat only align on step 1, creating cyclical tension." }
    ]
  },
  
  // ====================
  // INSTRUMENTS
  // ====================
  instruments: [
    {
      id: "kick",
      label: "Kick",
      color: "linear-gradient(135deg, #e17055, #d63031)",
      targetSteps: [0, 3, 6, 9],
      instructionText: "Four evenly spaced kicks.",
      patternHint: { enabled: true, note: "Kick: 1, 4, 7, 10" }
    },
    {
      id: "snare",
      label: "Snare",
      color: "linear-gradient(135deg, #ffeaa7, #fdcb6e)",
      targetSteps: [3, 9],
      instructionText: "Backbeat on steps 4 and 10.",
      patternHint: { enabled: true, note: "Snare: 4, 10 (backbeat)" }
    },
    {
      id: "hihat",
      label: "Hi-Hat",
      color: "linear-gradient(135deg, #00cec9, #0984e3)",
      targetSteps: [0, 4, 8],
      instructionText: "Three evenly spaced hi-hats (the '3' in 3:4).",
      patternHint: { enabled: true, note: "Hi-Hat: 1, 5, 9 (3-pulse)" }
    }
  ],
  
  // ====================
  // POLYRHYTHM PRESETS
  // ====================
  polyrhythms: [
    {
      id: "3:4",
      name: "Three over Four",
      gridSize: 12,
      description: "Most common polyrhythm. Creates subtle tension.",
      mnemonic: "Nice cup of tea"
    },
    {
      id: "2:3",
      name: "Two over Three",
      gridSize: 6,
      description: "Foundation of triplet feel and shuffle.",
      mnemonic: "Hot dog"
    },
    {
      id: "5:4",
      name: "Five over Four",
      gridSize: 20,
      description: "Complex and hypnotic, African influence.",
      mnemonic: "I am eating popcorn"
    },
    {
      id: "7:4",
      name: "Seven over Four",
      gridSize: 28,
      description: "Very complex, disorienting. Use sparingly.",
      mnemonic: "I need to call my lawyer"
    }
  ],
  
  // ====================
  // GENRE INFO & CONTEXT
  // ====================
  genreInfo: {
    name: "Polyrhythmic Music",
    origins: "West African drumming, Indian classical music (talas), Cuban son",
    description: "Polyrhythms are the simultaneous use of two or more conflicting rhythms that are not readily perceived as deriving from one another. They create tension, complexity, and hypnotic grooves.",
    applications: [
      {
        genre: "West African Drumming",
        example: "Ewe, Yoruba, and Mandinka traditions",
        commonRatios: ["3:2", "3:4", "5:4"],
        description: "Foundation of all modern polyrhythmic music—layers of djembes, dununs, and bells creating interlocking patterns."
      },
      {
        genre: "Progressive Rock/Metal",
        artists: ["Tool", "Meshuggah", "Dream Theater", "King Crimson"],
        commonRatios: ["3:4", "5:4", "7:4", "9:8"],
        example: "Tool's 'Schism' (5/8 and 6/8 layering), Meshuggah's polymetric riffs",
        description: "Complex time signatures and polyrhythms create disorienting, powerful grooves."
      },
      {
        genre: "Jazz & Fusion",
        artists: ["Dave Brubeck", "Herbie Hancock", "Tigran Hamasyan"],
        commonRatios: ["3:2", "3:4", "5:4"],
        example: "Brubeck's 'Take Five' (5/4 time), Hancock's 'Actual Proof'",
        description: "Polyrhythms add sophistication and swing to improvisation."
      },
      {
        genre: "Electronic & IDM",
        artists: ["Aphex Twin", "Flying Lotus", "Autechre", "Four Tet"],
        commonRatios: ["3:4", "5:4", "7:8", "11:8"],
        example: "Aphex Twin's 'Bucephalus Bouncing Ball', Flying Lotus' 'Zodiac Shit'",
        description: "Programmed polyrhythms create alien, hypnotic textures impossible for human drummers."
      },
      {
        genre: "Hip-Hop & Experimental Beats",
        artists: ["J Dilla", "Madlib", "Knxwledge", "The Alchemist"],
        commonRatios: ["3:4", "5:4"],
        example: "J Dilla's micro-timing and polyrhythmic layering",
        description: "Subtle polyrhythmic elements in hi-hats and percussion create unique swing."
      },
      {
        genre: "Pop/Alternative",
        artists: ["Radiohead", "Björk", "The Police"],
        commonRatios: ["3:4", "5:4"],
        example: "Radiohead's '15 Step' (5/4 time with 4/4 feel), The Police's 'Murder by Numbers'",
        description: "Polyrhythms add sophistication to accessible song structures."
      }
    ],
    technicalNotes: [
      "LCM (Lowest Common Multiple) determines grid size: 3:4 needs 12 steps, 5:4 needs 20 steps",
      "Start with 3:2 and 3:4—they're the most musical and easiest to hear",
      "Use mnemonics: '3:4 = Nice cup of tea', '5:4 = I am eating popcorn'",
      "Anchor one rhythm (usually kick) to help listeners orient",
      "Polyrhythms ≠ polymeter (different time signatures playing together)"
    ],
    historicalContext: "Polyrhythms are ancient—found in 13th-century African drumming, Indian talas dating back 2000+ years, and European medieval music. They represent humanity's innate understanding of mathematical relationships in sound.",
    productionTips: [
      "Start simple: Program one rhythm, then add the contrasting pattern",
      "Use velocity automation to emphasize the alignment points",
      "Layer timbres: different drum sounds make polyrhythms clearer",
      "Don't overdo it: Even a 2-bar polyrhythmic section can transform a track",
      "Try recording in slow motion, then speed up to performance tempo",
      "Explore polyrhythmic artists on your own—search for tracks that challenge your rhythmic perception"
    ],
    nextSteps: {
      title: "Beyond the Basics",
      description: "You've mastered the fundamentals of polyrhythms—but this is just the beginning. <strong>Advanced rhythm lessons are coming</strong> that will explore nested polyrhythms, metric modulation, and algorithmic rhythm generation. In the meantime, <strong>search the internet</strong> for artists pushing polyrhythmic boundaries and experiment with your own complex ratios.",
      futureTopics: [
        "Advanced polyrhythm lessons coming soon: nested ratios (3:4:5), metric modulation, and polymetric composition",
        "Combining polyrhythms with odd time signatures for extreme complexity",
        "Micro-timing and groove manipulation techniques",
        "Generative and algorithmic approaches to polyrhythmic patterns"
      ],
      encouragement: "The deeper you go into rhythm, the more musical possibilities open up. Keep exploring, keep experimenting, and trust your ears. The best rhythms are the ones that surprise even you."
    }
  },

  // ====================
  // MESSAGES
  // ====================
  messages: applyMessagePreset("drums", {
    initial: "Create a 3:4 polyrhythm with hi-hats against kick!",
    success: "🔄 Perfect polyrhythm! You can hear the 3 and 4 working together.",
    error: "Check your hi-hat placement—they should divide the bar into thirds.",
    alreadyCompleted: "You've mastered 3:4! Try programming 5:4 or 7:4 next."
  }),
  
  // ====================
  // MODE FLAGS
  // ====================
  mode: {
    sandbox: false,
    showTargetHint: true,
    enablePresets: true,
    enableExport: false,
    showVelocityLane: true,
    showPolyrhythmGuide: true
  },
  
  // ====================
  // LEARNING OBJECTIVES
  // ====================
  learningObjectives: [
    "Understand polyrhythmic theory and notation (ratios, LCM, alignment)",
    "Create 3-over-4 and other polyrhythmic patterns (3:2, 5:4, 7:4)",
    "Apply metric modulation for tempo feel changes",
    "Build complex rhythmic textures with layered patterns",
    "Recognize polyrhythms in various musical genres and traditions",
    "Use mnemonics and visualization to internalize complex rhythms"
  ],

  // ====================
  // ADVANCED CONCEPTS
  // ====================
  advancedConcepts: {
    metricModulation: {
      title: "Metric Modulation",
      description: "Changing tempo by treating one subdivision as a new beat. Example: If eighth notes at 120 BPM become quarter notes, the new tempo is 240 BPM. Used by composers like Elliott Carter and in modern prog/math rock.",
      examples: [
        "120 BPM → eighth note becomes quarter note → 240 BPM",
        "90 BPM triplets → triplet becomes new beat → 135 BPM (3:2 ratio)",
        "Tool's 'Lateralus' transitions between time signatures via metric modulation"
      ],
      practicalUse: "Create seamless tempo changes in drops, breakdowns, or transitions without jarring jumps."
    },
    complexPolyrhythms: {
      title: "Complex Ratios (5:4, 7:4, 11:8)",
      description: "Higher-order polyrhythms create more disorienting, hypnotic effects. They require larger grids and more careful programming but reward with unique grooves.",
      gridSizes: {
        "2:3": 6,
        "3:4": 12,
        "5:4": 20,
        "7:4": 28,
        "11:8": 88
      },
      tips: [
        "5:4 is common in African music—sounds exotic but remains musical",
        "7:4 and beyond can feel chaotic—use sparingly for effect",
        "Layer only 2-3 polyrhythms max to avoid rhythmic mud",
        "Try playing one rhythm with your hands, the other with your feet to internalize it"
      ]
    },
    crossRhythms: {
      title: "Cross-Rhythms vs Polyrhythms",
      description: "Cross-rhythms emphasize beats that go against the main pulse (e.g., 3 against 4 in the same tempo). Polyrhythms create independent tempos that happen to align mathematically.",
      example: "In Cuban son clave, the 3-side and 2-side create a cross-rhythm against the 4/4 pulse—all in the same tempo, but emphasizing different beats."
    },
    polymetersVsPolyrhythms: {
      title: "Polymeter vs Polyrhythm",
      description: "Don't confuse them! Polymeter = different time signatures playing simultaneously (e.g., 3/4 bass + 4/4 drums). Polyrhythm = different subdivisions of the same pulse.",
      example: "Pink Floyd's 'Money' uses 7/4 time (polymeter). A 3:4 polyrhythm uses 4/4 time with triplet feel layered against straight eighths."
    },
    listening: {
      title: "Polyrhythm Listening Examples",
      essentialTracks: [
        { artist: "Tool", track: "Schism", ratio: "5/8 + 6/8 layering", timestamp: "0:00-4:00" },
        { artist: "Radiohead", track: "15 Step", ratio: "5/4 with 4/4 feel", timestamp: "0:00-1:00" },
        { artist: "Aphex Twin", track: "Bucephalus Bouncing Ball", ratio: "Multiple complex ratios", timestamp: "entire track" },
        { artist: "Flying Lotus", track: "Zodiac Shit", ratio: "3:4, 5:4 polyrhythms", timestamp: "0:30-2:00" },
        { artist: "Dave Brubeck", track: "Take Five", ratio: "5/4 time signature", timestamp: "0:00-0:30" },
        { artist: "Meshuggah", track: "Bleed", ratio: "Polymetric riffing", timestamp: "entire track" },
        { artist: "J Dilla", track: "Workinonit", ratio: "Subtle 3:4 hi-hat layers", timestamp: "0:00-1:00" },
        { artist: "The Police", track: "Murder by Numbers", ratio: "3:2 rhythmic tension", timestamp: "verses" }
      ]
    }
  },


  theory: {
    sections: [
      {
        title: "Core Theory: Drums 14",
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
