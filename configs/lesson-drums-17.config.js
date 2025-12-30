/**
 * Music Producer Lab - Lesson Configuration
 * Lesson: Drums 17 - Odd Time Signatures
 * 
 * This lesson teaches programming drums in odd time signatures like
 * 5/4, 7/8, 9/8, and how to group beats for accessible grooves.
 */

import { applyMessagePreset, buildHeroEyebrow } from "./config-presets.js";

export const lessonConfig = {
  // ====================
  // LESSON METADATA
  // ====================
  lessonKey: "mpl-drums-17-progress",
  lessonNumber: 17,
  lessonCategory: "Drums & Rhythm",
  depthLevel: 9,
  
  // ====================
  // NAVIGATION
  // ====================
  nextLessonUrl: "lesson-drums-18.html",
  prevLessonUrl: "lesson-drums-14.html",
  overviewUrl: "labs.html",
  
  // ====================
  // HERO SECTION
  // ====================
  hero: {
    eyebrow: buildHeroEyebrow({ lessonSlug: "lesson-drums-17", categoryLabel: "Drums & Rhythm" }),
    title: "Odd Time",
    titleHighlight: "Signatures",
    subtitle: "Step beyond the <strong>familiar 4/4</strong> into the world of odd meters. While most popular music uses 4/4 time (four beats per bar), <strong>odd time signatures</strong> like 5/4, 7/4, 7/8, and 9/8 create distinctive, memorable grooves that instantly set your music apart. Pink Floyd's \"Money\" (7/4), Dave Brubeck's \"Take Five\" (5/4), and Radiohead's \"Paranoid Android\" (mixed meters) prove that odd meters can be <strong>both accessible and artistically powerful</strong>. The secret is <strong>beat grouping</strong>—breaking the bar into smaller chunks of 2s and 3s makes complex meters feel natural and danceable."
  },
  
  // ====================
  // SEQUENCER CONFIG
  // ====================
  sequencer: {
    tempo: 120,
    stepCount: 14,
    swing: 50,
    showBeatMarkers: true,
    showStepNumbers: true,
    autoSaveState: true,
    enableVelocity: true,
    enableHumanization: true,
    humanizationAmount: 10,
    timeSignature: "7/4",
    requiredTempo: 120,
    requiredSwing: 50
  },
  
  // ====================
  // EXERCISE
  // ====================
  exercise: {
    title: "Recreate Pink Floyd's \"Money\" (7/4)",
    description: "One of the most iconic <strong>7/4 grooves in rock history</strong>. Released in 1973 on \"The Dark Side of the Moon,\" Pink Floyd's \"Money\" introduced millions of listeners to odd time signatures. <strong>7/4 means 7 quarter notes per bar</strong>—one extra beat beyond the familiar 4/4. The genius of this groove is its <strong>3+2+2 grouping</strong> (or sometimes felt as 2+2+3): three beats, then two beats, then two more. This creates a lopsided, hypnotic feel that's both strange and groovy. The kick pattern (beats 1, 3, 5, 7) anchors the rhythm, while the snare on beats 2, 4, 6 creates an offset backbeat. When combined with the steady hi-hat eighths and subtle swing, the result is unforgettable. Count along: <strong>ONE-two-THREE-four-FIVE-six-SEVEN</strong>—feel how it wants to resolve but keeps going?",
    tip: "Listen to the original first! The key to making 7/4 groove is confidence—commit to the pattern and let it hypnotize you. Once you internalize the 3+2+2 grouping, it feels as natural as 4/4.",
    steps: [
      { text: "<strong>Set the tempo to 120 BPM</strong> using the Tempo slider." },
      { text: "<strong>Set swing to 50%</strong> for the subtle groove feel." },
      { text: "<strong>Kick:</strong> Beats 1, 3, 5, 7 (steps 1, 5, 9, 13) - the foundation." },
      { text: "<strong>Snare:</strong> Beats 2, 4, 6 (steps 3, 7, 11) - offset backbeat." },
      { text: "<strong>Hi-Hat:</strong> All eighth notes (every step 1-14) for steady pulse." },
      { text: "<strong>Listen:</strong> Count 1-2-3-4-5-6-7 and feel the 3+2+2 grouping emerge." }
    ],
    videoEmbed: {
      enabled: true,
      url: "https://www.youtube.com/embed/JkhX5W7JoWI",
      title: "Pink Floyd - Money (Official Audio)",
      description: "Listen to the iconic 7/4 groove that inspired this lesson. Notice how natural the odd meter feels once you lock into the pattern."
    }
  },
  
  // ====================
  // INSTRUMENTS
  // ====================
  instruments: [
    {
      id: "kick",
      label: "Kick",
      color: "linear-gradient(135deg, #e17055, #d63031)",
      targetSteps: [0, 4, 8, 12],
      instructionText: "Kick on beats 1, 3, 5, 7—the foundation of the 7/4 groove.",
      patternHint: { enabled: true, note: "Beats 1, 3, 5, 7 (steps 1, 5, 9, 13)" }
    },
    {
      id: "snare",
      label: "Snare",
      color: "linear-gradient(135deg, #ffeaa7, #fdcb6e)",
      targetSteps: [2, 6, 10],
      instructionText: "Snare on beats 2, 4, 6—offset backbeat that makes 7/4 distinctive.",
      patternHint: { enabled: true, note: "Beats 2, 4, 6 (steps 3, 7, 11)" }
    },
    {
      id: "hihat",
      label: "Hi-Hat",
      color: "linear-gradient(135deg, #00cec9, #0984e3)",
      targetSteps: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
      instructionText: "Steady eighth notes on all 14 steps—provides consistent pulse.",
      patternHint: { enabled: true, note: "All eighth notes (every step)" }
    }
  ],
  
  // ====================
  // TIME SIGNATURES
  // ====================
  timeSignatures: [
    { sig: "5/4", grouping: "3+2", stepCount: 10, name: "Five-Four", example: "Dave Brubeck - Take Five" },
    { sig: "7/4", grouping: "3+2+2", stepCount: 14, name: "Seven-Four", example: "Pink Floyd - Money" },
    { sig: "7/8", grouping: "2+2+3", stepCount: 14, name: "Seven-Eight", example: "Soundgarden - Outshined" },
    { sig: "9/8", grouping: "3+3+3", stepCount: 18, name: "Nine-Eight", example: "Tool - Schism (sections)" },
    { sig: "11/8", grouping: "3+3+3+2", stepCount: 22, name: "Eleven-Eight", example: "Sting - St. Augustine in Hell" }
  ],

  // ====================
  // GENRE INFO & CONTEXT
  // ====================
  genreInfo: {
    name: "Odd Time Signatures in Music",
    description: "Odd time signatures break away from the standard 4/4 and 3/4 meters that dominate popular music. They create unique rhythmic feels that can range from subtly off-kilter to wildly disorienting, depending on tempo, groove, and instrumentation.",
    whyOddMeters: "Odd meters add <strong>compositional interest</strong>, create <strong>memorable hooks</strong>, and signal <strong>musical sophistication</strong>. They're tools for standing out in a sea of 4/4 beats.",
    applications: [
      {
        genre: "Progressive Rock",
        description: "Prog rock pioneered odd meters in popular music, using them for drama, complexity, and artistic expression.",
        commonSignatures: ["5/4", "7/4", "7/8", "9/8", "11/8", "13/8"],
        iconicExamples: [
          { artist: "Pink Floyd", track: "Money", meter: "7/4", year: "1973", description: "The most famous 7/4 groove ever—introduced millions to odd meters" },
          { artist: "Yes", track: "Roundabout", meter: "Mixed meters", year: "1971", description: "Shifts between 4/4 and other meters seamlessly" },
          { artist: "Genesis", track: "Firth of Fifth", meter: "13/8 sections", year: "1973", description: "Complex meter changes throughout" },
          { artist: "King Crimson", track: "Frame by Frame", meter: "7/8", year: "1981", description: "Interlocking 7/8 guitar patterns" }
        ],
        characteristics: "Long compositions, meter changes, virtuosic playing, theatrical arrangements"
      },
      {
        genre: "Jazz & Fusion",
        description: "Jazz embraced odd meters early, using them for sophisticated harmonic and rhythmic exploration.",
        commonSignatures: ["5/4", "7/4", "9/8", "11/8"],
        iconicExamples: [
          { artist: "Dave Brubeck Quartet", track: "Take Five", meter: "5/4", year: "1959", description: "THE quintessential 5/4 jazz standard—still sounds fresh" },
          { artist: "Dave Brubeck", track: "Blue Rondo à la Turk", meter: "9/8 (2+2+2+3)", year: "1959", description: "Turkish-inspired 9/8 pattern" },
          { artist: "Don Ellis", track: "33 222 1 222", meter: "19/4", year: "1966", description: "Extreme odd meter experimentation" },
          { artist: "Mahavishnu Orchestra", track: "Meeting of the Spirits", meter: "Mixed meters", year: "1971", description: "Fusion's meter-bending masterpiece" }
        ],
        characteristics: "Swing feel in odd meters, sophisticated chord changes, improvisation over complex rhythms"
      },
      {
        genre: "Alternative/Grunge",
        description: "90s alternative rock used odd meters for angst, tension, and standing apart from mainstream rock.",
        commonSignatures: ["7/8", "7/4", "5/4"],
        iconicExamples: [
          { artist: "Soundgarden", track: "Outshined", meter: "7/8", year: "1991", description: "Heavy 7/8 riff that grooves hard" },
          { artist: "Alice in Chains", track: "Them Bones", meter: "7/8", year: "1992", description: "Dark, sludgy 7/8 verses" },
          { artist: "Tool", track: "Schism", meter: "5/8 + 7/8 alternating", year: "2001", description: "Polymetric complexity in metal" },
          { artist: "Radiohead", track: "Paranoid Android", meter: "Mixed meters", year: "1997", description: "Switches between 4/4, 7/8, and others" }
        ],
        characteristics: "Heavy distortion, odd meters create unease and tension, accessibility within complexity"
      },
      {
        genre: "World Music",
        description: "Many traditional music cultures use odd meters as their default rhythmic language.",
        commonSignatures: ["5/8", "7/8", "9/8", "11/8", "13/8"],
        iconicExamples: [
          { region: "Balkans", description: "Bulgarian folk music features complex odd meters like 7/8, 9/8, 11/8", example: "Traditional kopanitsa dance (11/8 = 2+2+3+2+2)" },
          { region: "Turkey", description: "Turkish classical and folk music use aksak (limping) rhythms", example: "9/8 patterns common in Turkish music (2+2+2+3)" },
          { region: "Greece", description: "Greek folk dances in 7/8, 9/8, and other meters", example: "Kalamatianos dance (7/8)" },
          { region: "India", description: "Complex tala (rhythmic cycles) including odd groupings", example: "Jhaptal (10 beats grouped as 2+3+2+3)" }
        ],
        characteristics: "Odd meters are traditional, passed down through dance and song, feel completely natural to native practitioners"
      },
      {
        genre: "Electronic & IDM",
        description: "Electronic producers use odd meters for experimentation and to create alien, hypnotic grooves.",
        commonSignatures: ["5/4", "7/4", "7/8", "9/8", "11/8"],
        iconicExamples: [
          { artist: "Aphex Twin", track: "Various tracks", meter: "Mixed odd meters", description: "Programmed odd meters with inhuman precision" },
          { artist: "Squarepusher", track: "Come On My Selector", meter: "Complex mixed meters", description: "Breakcore with meter chaos" },
          { artist: "Flying Lotus", track: "Various tracks", meter: "7/8, 9/8", description: "Jazz-influenced electronic odd meters" },
          { artist: "Autechre", track: "Various tracks", meter: "Extreme complexity", description: "Algorithmic odd meter generation" }
        ],
        characteristics: "Perfect timing, complex polymeters, meters impossible for human drummers"
      },
      {
        genre: "Math Rock",
        description: "Genre defined by odd meters, complex rhythms, and technical precision.",
        commonSignatures: ["5/4", "7/8", "9/8", "11/8", "Mixed"],
        iconicExamples: [
          { artist: "Don Caballero", track: "Various tracks", meter: "Constantly shifting", description: "Instrumental math rock pioneers" },
          { artist: "Battles", track: "Atlas", meter: "Mixed meters", description: "Accessible math rock with odd meter hooks" },
          { artist: "Hella", track: "Biblical Violence", meter: "Extreme complexity", description: "Two-piece with insane meter changes" },
          { artist: "Toe", track: "Goodbye", meter: "5/4 sections", description: "Japanese math rock with melodic odd meters" }
        ],
        characteristics: "Clean guitar tones, technical precision, often instrumental, meters change frequently"
      }
    ],
    commonGroupingPatterns: {
      "5/4": ["3+2 (most common)", "2+3"],
      "7/4": ["3+2+2 (Money)", "2+2+3", "4+3"],
      "7/8": ["2+2+3 (most common)", "3+2+2", "4+3"],
      "9/8": ["2+2+2+3", "3+3+3 (compound meter)", "4+5"],
      "11/8": ["3+3+3+2", "2+2+2+2+3", "4+4+3"]
    },
    historicalContext: "While odd meters feel exotic in Western popular music, they've been fundamental to Balkan, Turkish, Greek, and Indian music for centuries. Jazz brought them into Western music in the 1950s (Brubeck's \"Time Out\" album), prog rock popularized them in the 70s (Pink Floyd, Yes, Genesis), and they're now standard tools in alternative, metal, and electronic music.",
    practicalTips: [
      "Start with 5/4 or 7/4—they're the most accessible odd meters",
      "Use beat grouping to make odd meters feel natural (break into 2s and 3s)",
      "Count out loud until the pattern is internalized",
      "Listen to the classics: 'Take Five', 'Money', 'Outshined'",
      "Don't write in odd meter just to be different—use it when it serves the music",
      "Slower tempos make odd meters easier to follow",
      "Anchor the listener with one consistent element (usually bass or kick)",
      "Practice dancing or moving to odd meters—physical feel helps",
      "Try writing in 4/4 first, then add a beat to make it 5/4",
      "Search the internet for more artists using odd time signatures—discover your own favorites"
    ],
    nextSteps: {
      title: "Beyond the Basics",
      description: "You've learned the fundamentals of odd time signatures—now it's time to <strong>explore on your own</strong> and dive deeper. Search for artists who push rhythmic boundaries, study tracks in 11/8 or 13/8, and experiment with your own odd meter compositions.",
      futureTopics: [
        "Advanced rhythm lessons coming soon: metric modulation in odd meters, nested polyrhythms, and algorithmic rhythm generation",
        "Combining odd meters with polyrhythms for hypnotic complexity",
        "Live performance techniques for odd meters with loopers and controllers",
        "Orchestrating odd meters across multiple instruments and layers"
      ],
      encouragement: "The journey into advanced rhythm is just beginning. Keep exploring, keep listening, and most importantly—keep creating. The best way to master odd meters is to write music that only <em>you</em> could write."
    }
  },

  // ====================
  // ADVANCED CONCEPTS
  // ====================
  advancedConcepts: {
    mixedMeters: {
      title: "Mixed Meter Composition",
      description: "Combining different time signatures within a single piece. Radiohead's 'Paranoid Android' famously shifts between 4/4, 7/8, and other meters to create emotional dynamics.",
      examples: [
        "Verse in 4/4 → Chorus in 7/8 → creates tension and release",
        "Tool's 'Lateralus' uses Fibonacci sequence for meter changes",
        "Progressive rock often uses mixed meters to avoid repetition"
      ],
      practicalUse: "Use meter changes to mark song sections, build tension, or surprise the listener"
    },
    compoundVsOddMeters: {
      title: "Compound vs Odd Meters",
      description: "Compound meters (6/8, 9/8, 12/8) divide beats into triplets. Odd meters can be simple (7/4 = seven quarter notes) or compound (7/8 = seven eighths). They feel very different!",
      comparison: [
        "7/4 feels like: ONE-two-THREE-four-FIVE-six-SEVEN (heavy quarter note feel)",
        "7/8 feels like: one-two-three-four-five-six-seven (lighter, faster eighth note feel)"
      ]
    },
    additiveMeter: {
      title: "Additive Meter (Beat Grouping)",
      description: "Instead of thinking '7/4 is seven beats', think '7/4 is 3+2+2 or 2+2+3'. This grouping makes odd meters feel natural and danceable.",
      examples: [
        "Pink Floyd's 'Money' = 3+2+2 grouping (ONE-two-three-FOUR-five-SIX-seven)",
        "Bulgarian 11/8 = 2+2+3+2+2 (quick-quick-slow-quick-quick)",
        "Turkish 9/8 = 2+2+2+3 (creates the 'aksak' or limping rhythm)"
      ]
    },
    hemiola: {
      title: "Hemiola & Cross-Rhythm in Odd Meters",
      description: "Hemiola is when you create a 3:2 or 2:3 feel by accenting against the meter. In odd meters, you can create even more complex cross-rhythms.",
      example: "In 7/4, accent as 2+2+3 while bass plays 3+2+2—creates polymetric tension"
    },
    listeningExercise: {
      title: "Essential Odd Meter Listening",
      tracks: [
        { artist: "Pink Floyd", track: "Money", meter: "7/4", skill: "Beginner-friendly 7/4 with clear grouping" },
        { artist: "Dave Brubeck", track: "Take Five", meter: "5/4", skill: "Jazz 5/4 standard—grooves beautifully" },
        { artist: "Soundgarden", track: "Outshined", meter: "7/8", skill: "Heavy 7/8 with grunge attitude" },
        { artist: "Tool", track: "Schism", meter: "5/8 + 7/8", skill: "Advanced polymeter in progressive metal" },
        { artist: "Radiohead", track: "Paranoid Android", meter: "Mixed", skill: "Multiple meter changes in one song" },
        { artist: "Sting", track: "St. Augustine in Hell", meter: "11/8", skill: "Complex 11/8 with world music influence" }
      ]
    }
  },

  // ====================
  // MESSAGES
  // ====================
  messages: applyMessagePreset("drums", {
    initial: "Recreate Pink Floyd's iconic 7/4 groove from \"Money\"!",
    success: "💰 Perfect! You've mastered the most famous 7/4 groove in rock history. Feel that 3+2+2 grouping?",
    error: "Check the pattern—kick on 1,3,5,7 and snare on 2,4,6. Count: ONE-two-THREE-four-FIVE-six-SEVEN.",
    alreadyCompleted: "You've conquered 7/4! Now try 'Take Five' in 5/4, 'Outshined' in 7/8, or write your own odd meter masterpiece."
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
    showTimeSignatureSelector: true,
    showSwingControl: true,
    showHumanizeControls: true
  },

  // ====================
  // LEARNING OBJECTIVES
  // ====================
  learningObjectives: [
    "Recreate Pink Floyd's 'Money' groove in 7/4 time",
    "Understand beat grouping (3+2+2 and other patterns) to make odd meters feel natural",
    "Program patterns in 5/4, 7/4, 7/8, 9/8, and other odd meters",
    "Apply swing and humanization to odd meter grooves",
    "Recognize odd meters across genres (prog rock, jazz, grunge, world music)",
    "Use meter changes for compositional impact and emotional dynamics",
    "Count and internalize odd meters through practice and listening"
  ]
};

if (typeof window !== 'undefined') {
  window.LESSON_CONFIG = lessonConfig;
}
