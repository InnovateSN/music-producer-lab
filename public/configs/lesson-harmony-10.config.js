/**
 * Music Producer Lab - Lesson Configuration
 * Lesson: Harmony 10 - House Loop: Minor to Major Movement
 */

import { applyMessagePreset, buildHeroEyebrow } from "./config-presets.js";

export const lessonConfig = {
  lessonKey: "mpl-harmony-10-progress",
  lessonNumber: 10,
  lessonCategory: "Genre Application",


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

  nextLessonUrl: "lesson-harmony-11.html",
  prevLessonUrl: "lesson-harmony-9.html",
  overviewUrl: "labs.html",

  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 10, categoryLabel: "Harmony & Melody" }),
    title: "House Loop:",
    titleHighlight: "Minor to Major Movement",
    subtitle: "Build a club-ready 4-bar chord loop using seventh chords with smooth voice leading. You'll create the classic house music harmonic pattern - minor to major movement with added melody. This is the signature sound of deep house, tech house, and melodic techno."
  },

  sequencer: {
    tempo: 124,
    key: "A",
    scale: "Minor",
    stepCount: 64,
    bars: 4,
    pitchRange: {
      low: 48,
      high: 84
    }
  },

  exercise: {
    title: "Build a House Chord Loop with Melody",
    description: "Create a 4-bar loop using <strong>Am7 → Fmaj7 → Cmaj7 → Em7</strong> with a simple topline melody. This progression combines minor and major seventh chords for that smooth, hypnotic house vibe. Add a melody that targets chord tones on strong beats.",
    tip: "House music chord loops are all about repetition and groove. Keep chords sustained (2-4 beats each), use seventh chords for smoothness, and add a simple repeating melody that locks with the harmony. The vi→IV→I→iii pattern creates perpetual motion - it loops perfectly!",
    steps: [
      { text: "Bar 1: Build <strong>Am7</strong> (A-C-E-G) sustained for 4 beats" },
      { text: "Bar 2: Build <strong>Fmaj7</strong> (F-A-C-E) sustained for 4 beats" },
      { text: "Bar 3: Build <strong>Cmaj7</strong> (C-E-G-B) sustained for 4 beats" },
      { text: "Bar 4: Build <strong>Em7</strong> (E-G-B-D) sustained for 4 beats" },
      { text: "Add a simple melody (8-12 notes) targeting <strong>chord tones on beats 1 and 3</strong>" },
      { text: "Listen for the smooth, hypnotic loop - perfect for house music!" }
    ]
  },

  validation: {
    type: "chord_progression_with_melody",
    requiredChords: [
      { time: 0, pitches: [69, 72, 76, 79], chordName: "Am7", allowInversions: false },
      { time: 16, pitches: [65, 69, 72, 76], chordName: "Fmaj7", allowInversions: false },
      { time: 32, pitches: [60, 64, 67, 71], chordName: "Cmaj7", allowInversions: false },
      { time: 48, pitches: [64, 67, 71, 74], chordName: "Em7", allowInversions: false }
    ],
    melody: {
      minNotes: 8,
      maxNotes: 16,
      strongBeats: [0, 8, 16, 24, 32, 40, 48, 56],
      strongBeatsMustUseChordTones: true
    }
  },

  messages: applyMessagePreset("harmony", {
    initial: "Build the house loop: Am7 → Fmaj7 → Cmaj7 → Em7. Add a melody targeting chord tones on beats 1 and 3.",
    success: "Perfect! You've created a classic house chord progression. Notice how it loops seamlessly - this pattern is used in thousands of deep house and melodic techno tracks!",
    error: "Check: Am7 = A-C-E-G, Fmaj7 = F-A-C-E, Cmaj7 = C-E-G-B, Em7 = E-G-B-D. Melody should have 8-12 notes with chord tones on strong beats."
  }),

  mode: {
    sandbox: false,
    showTargetHint: true,
    enablePresets: false,
    enableExport: false,
    sequencerType: "piano-roll"
  },
  learningObjectives: [
    "Programmare con precisione il voicing target di questa lezione nel piano roll",
    "Riconoscere all'ascolto il carattere sonoro di Am7",
    "Verificare timing, simultaneità e registro delle note con una checklist tecnica",
    "Trasporre il pattern in almeno due tonalità mantenendo la stessa funzione armonica",
    "Applicare il materiale della lezione in una progressione di 4-8 battute pronta per il beat"
  ],
  theory: {
    sections: [
      {
        title: "Concetto armonico: House Loop: Minor to Major Movement",
        content: `Questa lezione sviluppa un blocco armonico concreto da usare subito in produzione. L'obiettivo non è solo "sapere" la teoria, ma tradurla in una decisione musicale verificabile: note corrette, posizione corretta nel registro e funzione armonica coerente con il contesto del brano.

Quando programmi Am7, ascolta tre elementi: stabilità della fondamentale, qualità emotiva dell'intervallo caratteristico e bilanciamento tra le voci. Se una voce domina troppo, il voicing perde chiarezza. In pratica, la teoria qui serve a controllare intenzione e risultato: stessa idea armonica, suono più pulito, scelta più consapevole.`
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
