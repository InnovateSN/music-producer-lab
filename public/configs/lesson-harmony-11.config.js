/**
 * Music Producer Lab - Lesson Configuration
 * Lesson: Harmony 11 - Smooth the Jumps: Chord Inversions
 */

import { applyMessagePreset, buildHeroEyebrow } from "./config-presets.js";

export const lessonConfig = {
  lessonKey: "mpl-harmony-11-progress",
  lessonNumber: 11,
  lessonCategory: "Voice Leading",


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

  nextLessonUrl: "lesson-harmony-12.html",
  prevLessonUrl: "lesson-harmony-10.html",
  overviewUrl: "labs.html",

  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 11, categoryLabel: "Harmony & Melody" }),
    title: "Smooth the Jumps:",
    titleHighlight: "Chord Inversions",
    subtitle: "Re-voice chords so notes move by small steps instead of leaps. You'll learn inversions - playing the same chord with different notes on bottom. This creates smooth voice leading that makes progressions sound instantly more professional and connected."
  },

  sequencer: {
    tempo: 90,
    key: "C",
    scale: "Major",
    stepCount: 64,
    bars: 4,
    pitchRange: {
      low: 48,
      high: 84
    }
  },

  exercise: {
    title: "Use Inversions for Smooth Voice Leading",
    description: "Play the progression <strong>C → Am → F → G</strong> using inversions to minimize movement between chords. Instead of jumping around, keep notes as close together as possible. This teaches smooth voice leading - the secret to professional-sounding chord progressions.",
    tip: "Chord inversions mean playing the same notes but with a different note on the bottom. C major can be C-E-G (root position), E-G-C (1st inversion), or G-C-E (2nd inversion) - same notes, different order. Use inversions to keep the top note moving smoothly by step or staying the same.",
    steps: [
      { text: "Bar 1: <strong>C major</strong> root position (C-E-G) " },
      { text: "Bar 2: <strong>Am</strong> first inversion (C-E-A) - notice C and E stay!" },
      { text: "Bar 3: <strong>F major</strong> (C-F-A) - C stays, E moves to F" },
      { text: "Bar 4: <strong>G major</strong> first inversion (B-D-G)" },
      { text: "Compare to root position version - inversions sound much smoother!" },
      { text: "Keep chord tones in middle register (C4-C5) for best voice leading" }
    ]
  },

  validation: {
    type: "voice_leading_exercise",
    requiredChords: [
      { time: 0, pitches: [60, 64, 67], chordName: "C", allowInversions: true },
      { time: 16, pitches: [60, 64, 69], chordName: "Am", allowInversions: true },
      { time: 32, pitches: [60, 65, 69], chordName: "F", allowInversions: true },
      { time: 48, pitches: [59, 62, 67], chordName: "G", allowInversions: true }
    ],
    voiceLeading: {
      maxTotalMovement: 12,  // Maximum semitones of total voice movement
      preferSmallSteps: true
    }
  },

  messages: applyMessagePreset("harmony", {
    initial: "Build C → Am → F → G using inversions. Keep notes close together - minimize jumping between chords.",
    success: "Excellent! Notice how smooth the chord changes feel when notes move by small steps. This is voice leading - the foundation of professional harmony writing!",
    error: "Try to keep common tones between chords. Use inversions (different notes on bottom) to reduce large jumps. Goal is smooth, stepwise motion between chords."
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
    "Riconoscere all'ascolto il carattere sonoro di C",
    "Verificare timing, simultaneità e registro delle note con una checklist tecnica",
    "Trasporre il pattern in almeno due tonalità mantenendo la stessa funzione armonica",
    "Applicare il materiale della lezione in una progressione di 4-8 battute pronta per il beat"
  ],
  theory: {
    sections: [
      {
        title: "Concetto armonico: Smooth the Jumps: Chord Inversions",
        content: `Questa lezione sviluppa un blocco armonico concreto da usare subito in produzione. L'obiettivo non è solo "sapere" la teoria, ma tradurla in una decisione musicale verificabile: note corrette, posizione corretta nel registro e funzione armonica coerente con il contesto del brano.

Quando programmi C, ascolta tre elementi: stabilità della fondamentale, qualità emotiva dell'intervallo caratteristico e bilanciamento tra le voci. Se una voce domina troppo, il voicing perde chiarezza. In pratica, la teoria qui serve a controllare intenzione e risultato: stessa idea armonica, suono più pulito, scelta più consapevole.`
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
