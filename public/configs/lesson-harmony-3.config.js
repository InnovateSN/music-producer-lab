/**
 * Music Producer Lab - Lesson Configuration
 * Lesson: Harmony 3 - Feel Tension: I to V
 */

import { applyMessagePreset, buildHeroEyebrow, buildLessonQualityPreset } from "./config-presets.js";

const lessonQualityPreset = buildLessonQualityPreset({
  lessonCategory: "Chord Fundamentals",
  lessonNumber: 3
});

export const lessonConfig = {
  // ====================
  // LESSON METADATA
  // ====================
  lessonKey: "mpl-harmony-3-progress",
  lessonNumber: 3,
  lessonCategory: "Chord Fundamentals",

  progression: {
    difficulty: "beginner",
    prerequisites: ["harmony-2"],
    outcomes: ["Completare gli obiettivi pratici di harmony-3","Consolidare competenze beginner nel modulo harmony"]
  },


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
  nextLessonUrl: "lesson-harmony-4.html",
  prevLessonUrl: "lesson-harmony-2.html",
  overviewUrl: "labs.html",

  // ====================
  // HERO SECTION
  // ====================
  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 3, categoryLabel: "Harmony & Melody" }),
    title: "Feel Tension:",
    titleHighlight: "I to V",
    subtitle: "Create a two-chord loop that feels like 'home → pull → home.' You'll build the I (tonic) to V (dominant) progression that drives countless songs. This teaches you how chords don't just sit there - they move with purpose, creating tension and resolution that listeners crave."
  },

  // ====================
  // SEQUENCER SETTINGS
  // ====================
  sequencer: {
    tempo: 90,
    key: "C",
    scale: "Major",
    stepCount: 32,
    bars: 2,
    pitchRange: {
      low: 48,  // C3
      high: 74  // D5 (to accommodate higher G chord voicing)
    }
  },

  // ====================
  // EXERCISE INFO
  // ====================
  exercise: {
    title: "Build I to V (C to G)",
    description: "The <strong>I (tonic)</strong> chord feels stable and complete, while the <strong>V (dominant)</strong> chord creates tension that wants to resolve back to I. Build <strong>C major (I)</strong> in bar 1 and <strong>G major (V)</strong> in bar 2 to hear this fundamental relationship.",
    tip: "When you loop these two chords, the G chord should feel like it's pulling you back to C. If you stop playback on G, it will feel incomplete - that's the tension you're learning to create.",
    steps: [
      { text: "Bar 1 beat 1: Place <strong>C major (I)</strong> - C4, E4, G4" },
      { text: "Make the chord sustain for the full bar (4 beats)" },
      { text: "Bar 2 beat 1: Place <strong>G major (V)</strong> - G4, B4, D5" },
      { text: "Make this chord also sustain for the full bar" },
      { text: "Loop both bars and listen for the <strong>pull</strong> from G back to C" },
      { text: "Try stopping on the G chord - it should feel unresolved" }
    ]
  },

  // ====================
  // VALIDATION CONFIG
  // ====================
  validation: {
    type: "chord_progression",
    requiredChords: [
      {
        name: "C Major (I)",
        pitches: [60, 64, 67],  // C4, E4, G4
        time: 0,  // Bar 1
        function: "tonic"
      },
      {
        name: "G Major (V)",
        pitches: [67, 71, 74],  // G4, B4, D5 (or allow [55, 59, 62] for G3, B3, D4)
        time: 16,  // Bar 2 (assuming 16 steps = 1 bar)
        function: "dominant"
      }
    ],
    allowInversions: false,
    allowExtraNotes: false,
    allowAlternateVoicings: true  // Allow G3-B3-D4 as alternative to G4-B4-D5
  },

  // ====================
  // COMPLETION MESSAGES
  // ====================
  messages: applyMessagePreset("harmony", {
    initial: "Build the I to V progression (C major to G major) to hear tension and resolution.",
    success: "Perfect! You've created your first chord progression. You now understand how chords create tension (V) and resolution (I).",
    error: "Check your chords: Bar 1 should have C-E-G (I), and bar 2 should have G-B-D (V). Make sure they're on beat 1 of each bar."
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
    "Riconoscere all'ascolto il carattere sonoro di Feel Tension: I to V",
    "Verificare timing, simultaneità e registro delle note con una checklist tecnica",
    "Trasporre il pattern in almeno due tonalità mantenendo la stessa funzione armonica",
    "Applicare il materiale della lezione in una progressione di 4-8 battute pronta per il beat"
  ],
  theory: {
    sections: [
      {
        title: "Concetto armonico: Feel Tension: I to V",
        content: `Questa lezione sviluppa un blocco armonico concreto da usare subito in produzione. L'obiettivo non è solo "sapere" la teoria, ma tradurla in una decisione musicale verificabile: note corrette, posizione corretta nel registro e funzione armonica coerente con il contesto del brano.

Quando programmi Feel Tension: I to V, ascolta tre elementi: stabilità della fondamentale, qualità emotiva dell'intervallo caratteristico e bilanciamento tra le voci. Se una voce domina troppo, il voicing perde chiarezza. In pratica, la teoria qui serve a controllare intenzione e risultato: stessa idea armonica, suono più pulito, scelta più consapevole.`
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
