/**
 * Music Producer Lab - Lesson Configuration
 * Lesson: Harmony 6 - Melody from Chord Tones
 */

import { applyMessagePreset, buildHeroEyebrow, buildLessonQualityPreset } from "./config-presets.js";

const lessonQualityPreset = buildLessonQualityPreset({
  lessonCategory: "Melody Fundamentals",
  lessonNumber: 6
});

export const lessonConfig = {
  // ====================
  // LESSON METADATA
  // ====================
  lessonKey: "mpl-harmony-6-progress",
  lessonNumber: 6,
  lessonCategory: "Melody Fundamentals",

  progression: {
    difficulty: "beginner",
    prerequisites: ["harmony-5"],
    outcomes: ["Completare gli obiettivi pratici di harmony-6","Consolidare competenze beginner nel modulo harmony"]
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
  nextLessonUrl: "lesson-harmony-7.html",
  prevLessonUrl: "lesson-harmony-5.html",
  overviewUrl: "labs.html",

  // ====================
  // HERO SECTION
  // ====================
  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 6, categoryLabel: "Harmony & Melody" }),
    title: "Melody from",
    titleHighlight: "Chord Tones",
    subtitle: "Write a simple melody that 'fits' perfectly by targeting chord tones. You'll create melodic lines using only the notes from each chord (root, third, fifth), ensuring every note harmonizes beautifully. This teaches you the safest, most effective way to write melodies over any progression."
  },

  // ====================
  // SEQUENCER SETTINGS
  // ====================
  sequencer: {
    tempo: 100,
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
    title: "Write a Chord Tone Melody",
    description: "Create a melody using <strong>only chord tones</strong> (1-3-5 of each chord). Over the I–V–vi–IV progression, you'll write at least 8 melody notes that harmonize perfectly because they're all part of the underlying chords.",
    tip: "Start simple - use quarter notes or 8th notes with a clear rhythm. Aim for chord tones on strong beats (beats 1 and 3) for maximum stability.",
    steps: [
      { text: "Set up your I–V–vi–IV progression from Lesson 5 (C–G–Am–F)" },
      { text: "Bar 1 (C major): Write melody notes using <strong>only C, E, or G</strong>" },
      { text: "Bar 2 (G major): Write melody notes using <strong>only G, B, or D</strong>" },
      { text: "Bar 3 (A minor): Write melody notes using <strong>only A, C, or E</strong>" },
      { text: "Bar 4 (F major): Write melody notes using <strong>only F, A, or C</strong>" },
      { text: "Create at least <strong>8 total melody notes</strong> (2 per bar minimum)" }
    ]
  },

  // ====================
  // VALIDATION CONFIG
  // ====================
  validation: {
    type: "melody_with_harmony",
    chordProgression: [
      { name: "C", pitches: [60, 64, 67], time: 0 },
      { name: "G", pitches: [67, 71, 74], time: 16 },
      { name: "Am", pitches: [69, 72, 76], time: 32 },
      { name: "F", pitches: [65, 69, 72], time: 48 }
    ],
    melodyRules: {
      minNotes: 8,
      mustUseChordTonesOnly: true,
      allowedNotesPerBar: [
        { bar: 1, notes: [60, 64, 67, 72, 76, 79] },  // C, E, G (multiple octaves)
        { bar: 2, notes: [62, 67, 71, 74, 79, 83] },  // D, G, B (multiple octaves)
        { bar: 3, notes: [64, 69, 72, 76, 81, 84] },  // E, A, C (multiple octaves)
        { bar: 4, notes: [60, 65, 69, 72, 77, 81] }   // C, F, A (multiple octaves)
      ],
      strongBeatPreference: "chord_tones"
    }
  },

  // ====================
  // COMPLETION MESSAGES
  // ====================
  messages: applyMessagePreset("harmony", {
    initial: "Write a melody using only chord tones (1-3-5 of each chord) over your progression.",
    success: "Perfect! You've written a melody that harmonizes beautifully. You understand how chord tones create stable, fitting melodies.",
    error: "Check that all your melody notes are chord tones: Bar 1 (C/E/G), Bar 2 (G/B/D), Bar 3 (A/C/E), Bar 4 (F/A/C)."
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
    "Riconoscere all'ascolto il carattere sonoro di Melody from Chord Tones",
    "Verificare timing, simultaneità e registro delle note con una checklist tecnica",
    "Trasporre il pattern in almeno due tonalità mantenendo la stessa funzione armonica",
    "Applicare il materiale della lezione in una progressione di 4-8 battute pronta per il beat"
  ],
  theory: {
    sections: [
      {
        title: "Concetto armonico: Melody from Chord Tones",
        content: `Questa lezione sviluppa un blocco armonico concreto da usare subito in produzione. L'obiettivo non è solo "sapere" la teoria, ma tradurla in una decisione musicale verificabile: note corrette, posizione corretta nel registro e funzione armonica coerente con il contesto del brano.

Quando programmi Melody from Chord Tones, ascolta tre elementi: stabilità della fondamentale, qualità emotiva dell'intervallo caratteristico e bilanciamento tra le voci. Se una voce domina troppo, il voicing perde chiarezza. In pratica, la teoria qui serve a controllare intenzione e risultato: stessa idea armonica, suono più pulito, scelta più consapevole.`
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
