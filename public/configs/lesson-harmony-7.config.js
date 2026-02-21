/**
 * Music Producer Lab - Lesson Configuration
 * Lesson: Harmony 7 - Stepwise Melody: Use the Scale
 */

import { applyMessagePreset, buildHeroEyebrow, buildLessonQualityPreset } from "./config-presets.js";

const lessonQualityPreset = buildLessonQualityPreset({
  lessonCategory: "Melody Fundamentals",
  lessonNumber: 7
});

export const lessonConfig = {
  // ====================
  // LESSON METADATA
  // ====================
  lessonKey: "mpl-harmony-7-progress",
  lessonNumber: 7,
  lessonCategory: "Melody Fundamentals",


  reviewMetadata: {
    lastReviewed: "2026-02-19",
    reviewVersion: "didactic-audit-v4-rollout-phase-2",
    reviewedAgainst: ["AES", "Wikipedia", "Ableton"],
    sources: {
      wikipedia: [
        "https://en.wikipedia.org/wiki/Music_theory",
        "https://en.wikipedia.org/wiki/Ear_training",
      ],
      ableton: [
        "https://www.ableton.com/en/live-manual/",
        "https://help.ableton.com/",
      ],
      aes: [
        "https://aes2.org/publications/standards/",
      ]
    }
  },

  // ====================
  // NAVIGATION
  // ====================
  nextLessonUrl: "lesson-harmony-8.html",
  prevLessonUrl: "lesson-harmony-6.html",
  overviewUrl: "labs.html",

  // ====================
  // HERO SECTION
  // ====================
  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 7, categoryLabel: "Harmony & Melody" }),
    title: "Stepwise Melody:",
    titleHighlight: "Use the Scale",
    subtitle: "Expand beyond chord tones using the C major scale safely. You'll add 'passing tones' between chord tones to create smooth, flowing melodies with professional stepwise motion. This teaches you how to use scale notes as travel notes between your stable anchor points."
  },

  // ====================
  // SEQUENCER SETTINGS
  // ====================
  sequencer: {
    tempo: 110,
    key: "C",
    scale: "Major",
    stepCount: 64,
    bars: 4,
    pitchRange: {
      low: 60,  // C4
      high: 84  // C6 (for melody range)
    }
  },

  // ====================
  // EXERCISE INFO
  // ====================
  exercise: {
    title: "Add Passing Tones for Smooth Melody",
    description: "Create a melody that uses <strong>chord tones on strong beats (1 and 3)</strong> for stability, and <strong>any C major scale note on weak beats</strong> for smooth motion. Passing tones connect chord tones with stepwise movement, creating professional-sounding phrases.",
    tip: "The key is balance: chord tones anchor the melody on important beats, while passing tones create flowing motion between them. This is how pros write singable, memorable melodies.",
    steps: [
      { text: "Set up your I–V–vi–IV progression (C–G–Am–F)" },
      { text: "Rule: <strong>Beats 1 and 3 must use chord tones</strong> for stability" },
      { text: "Rule: <strong>Beats 2, 4, and off-beats can use any C major scale note</strong> (C-D-E-F-G-A-B)" },
      { text: "Create a melody with at least <strong>4 passing tones</strong> total" },
      { text: "Use passing tones to create <strong>stepwise motion</strong> between chord tones" },
      { text: "Listen for smooth, flowing phrases that feel natural and singable" }
    ]
  },

  // ====================
  // VALIDATION CONFIG
  // ====================
  validation: {
    type: "melody_with_passing_tones",
    chordProgression: [
      { name: "C", pitches: [60, 64, 67], time: 0 },
      { name: "G", pitches: [67, 71, 74], time: 16 },
      { name: "Am", pitches: [69, 72, 76], time: 32 },
      { name: "F", pitches: [65, 69, 72], time: 48 }
    ],
    scale: {
      key: "C",
      type: "Major",
      notes: [60, 62, 64, 65, 67, 69, 71, 72, 74, 76, 77, 79, 81, 83, 84]  // C-D-E-F-G-A-B (multiple octaves)
    },
    melodyRules: {
      minNotes: 12,
      minPassingTones: 4,
      strongBeats: [0, 8, 16, 24, 32, 40, 48, 56],  // Beats 1 and 3 of each bar
      strongBeatsMustUseChordTones: true,
      weakBeatsAllowAnyScaleNote: true,
      preferStepwiseMotion: true,
      maxConsecutiveLeaps: 2
    }
  },

  // ====================
  // COMPLETION MESSAGES
  // ====================
  messages: applyMessagePreset("harmony", {
    initial: "Write a melody using chord tones on strong beats (1 and 3) and any scale note on weak beats. Include at least 4 passing tones.",
    success: "Congratulations! You've completed the beginner harmony and melody lessons. You can now write chord progressions and melodies with professional techniques!",
    error: "Check: Strong beats (1 and 3) should use chord tones. All notes should be from C major scale (C-D-E-F-G-A-B). Include at least 4 passing tones."
  }),

  // ====================
  // MODE FLAGS
  // ====================
  mode: {
    sandbox: false,
    showTargetHint: true,
    enablePresets: false,
    enableExport: false,
    sequencerType: "piano-roll"
  },
  learningObjectives: [
    "Programmare con precisione il voicing target di questa lezione nel piano roll",
    "Riconoscere all'ascolto il carattere sonoro di Stepwise Melody: Use the Scale",
    "Verificare timing, simultaneità e registro delle note con una checklist tecnica",
    "Trasporre il pattern in almeno due tonalità mantenendo la stessa funzione armonica",
    "Applicare il materiale della lezione in una progressione di 4-8 battute pronta per il beat"
  ],
  theory: {
    sections: [
      {
        title: "Concetto armonico: Stepwise Melody: Use the Scale",
        content: `Questa lezione sviluppa un blocco armonico concreto da usare subito in produzione. L'obiettivo non è solo "sapere" la teoria, ma tradurla in una decisione musicale verificabile: note corrette, posizione corretta nel registro e funzione armonica coerente con il contesto del brano.

Quando programmi Stepwise Melody: Use the Scale, ascolta tre elementi: stabilità della fondamentale, qualità emotiva dell'intervallo caratteristico e bilanciamento tra le voci. Se una voce domina troppo, il voicing perde chiarezza. In pratica, la teoria qui serve a controllare intenzione e risultato: stessa idea armonica, suono più pulito, scelta più consapevole.`
      },
      {
        title: "Workflow in DAW e controlli di qualità",
        content: `Usa un workflow in 4 passaggi: (1) inserisci il pattern richiesto dalla lezione, (2) controlla che le note partano insieme o con lo spacing previsto, (3) confronta root position e inversioni per scegliere il voicing più leggibile nel mix, (4) trasponi il pattern in due tonalità per confermare che hai capito la logica e non solo memorizzato le note.

Checklist di verifica rapida: nessuna nota fuori scala rispetto al contesto, nessun overlap ritmico involontario, dinamica omogenea tra le voci, e ascolto A/B dentro una mini progressione di 4-8 battute. Se questi controlli passano, la lezione è realmente acquisita e pronta per essere riutilizzata nel tuo progetto.`
      }
    ]
  },

  assessmentRubric: {
    accuracy: {
      target: ">= 80%",
      evidence: "Quiz answers and concept checks inside the lesson"
    },
    timing: {
      target: "<= ±25 ms on guided rhythmic tasks",
      evidence: "Metronome-aligned exercise submissions"
    },
    mixClarity: {
      target: "No uncontrolled clipping and clear element separation",
      evidence: "A/B playback checks with level-matched references"
    },
    arrangementFlow: {
      target: "Transitions preserve groove and perceived energy",
      evidence: "Section-to-section transition checklist"
    }
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
