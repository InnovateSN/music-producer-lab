/**
 * Music Producer Lab - Lesson Configuration
 * Lesson: Harmony 1 - Build Your First Chord: Major Triad
 */

import { applyMessagePreset, buildHeroEyebrow, buildLessonQualityPreset } from "./config-presets.js";

const lessonQualityPreset = buildLessonQualityPreset({
  lessonCategory: "Chord Fundamentals",
  lessonNumber: 1
});

export const lessonConfig = {
  // ====================
  // LESSON METADATA
  // ====================
  lessonKey: "mpl-harmony-1-progress",
  lessonNumber: 1,
  lessonCategory: "Chord Fundamentals",

  progression: {
    difficulty: "beginner",
    prerequisites: ["harmony-0"],
    outcomes: ["Completare gli obiettivi pratici di harmony-1","Consolidare competenze beginner nel modulo harmony"]
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
  nextLessonUrl: "lesson-harmony-2.html",
  prevLessonUrl: "labs.html",
  overviewUrl: "labs.html",

  // ====================
  // HERO SECTION
  // ====================
  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 1, categoryLabel: "Harmony & Melody" }),
    title: "Build Your First Chord:",
    titleHighlight: "Major Triad",
    subtitle: "Stack three notes on the same beat and hear a real chord instantly. You'll create a C major triad (C-E-G) and understand the root-third-fifth structure that unlocks all major chords. This single pattern is the foundation of harmony in pop, house, and most modern production."
  },

  // ====================
  // SEQUENCER SETTINGS
  // ====================
  // Note: Interactive piano roll sequencer is not yet implemented
  // This config is prepared for future integration
  sequencer: {
    tempo: 90,
    key: "C",
    scale: "Major",
    stepCount: 16,
    bars: 1,
    // Piano roll specific settings (for future implementation)
    pitchRange: {
      low: 48,  // C3
      high: 72  // C5 (2 octaves)
    }
  },

  // ====================
  // EXERCISE INFO
  // ====================
  exercise: {
    title: "Build a C Major Triad",
    description: "A <strong>triad</strong> is three notes played simultaneously. The C major triad uses <strong>C (root), E (third), and G (fifth)</strong>. When stacked on the same beat, these notes create a bright, stable chord that sounds 'complete.' This is the same chord structure used in thousands of songs across all genres.",
    tip: "In your DAW's piano roll, make sure all three notes (C-E-G) start at exactly the same time position. If they're even slightly offset, it won't sound like a proper chord.",
    steps: [
      { text: "Open a MIDI track in your DAW with a piano or synth instrument" },
      { text: "Find <strong>middle C (C4)</strong> in your piano roll editor" },
      { text: "Place three notes at the <strong>same time position</strong>: C4, E4, and G4" },
      { text: "Make sure they're <strong>stacked vertically</strong> - this means they play simultaneously" },
      { text: "Set each note duration to 1-2 bars so you can hear them sustain" },
      { text: "Press <strong>Play</strong> and listen to your first chord!" }
    ]
  },

  // ====================
  // NOTES/CHORD CONFIG (for future piano roll validation)
  // ====================
  validation: {
    type: "exact_chord",
    requiredNotes: {
      time: 0,  // Beat 1
      pitches: [60, 64, 67],  // C4, E4, G4 (MIDI note numbers)
      simultaneous: true,
      chordName: "C Major"
    },
    allowInversions: false,  // Lesson 1 teaches root position only
    allowExtraNotes: false
  },

  // ====================
  // COMPLETION MESSAGES
  // ====================
  messages: applyMessagePreset("harmony", {
    initial: "Practice building the C major triad (C-E-G) in your DAW.",
    success: "Perfect! You've built your first chord. You now understand the root-third-fifth structure that creates all major triads.",
    error: "Make sure you have exactly C, E, and G playing simultaneously. Check the note positions in your piano roll."
  }),

  // ====================
  // MODE FLAGS
  // ====================
  mode: {
    sandbox: false,
    showTargetHint: true,
    enablePresets: false,
    enableExport: false,
    sequencerType: "piano-roll"  // Use piano roll sequencer for harmony lessons
  },
  learningObjectives: [
    "Programmare con precisione il voicing target di questa lezione nel piano roll",
    "Riconoscere all'ascolto il carattere sonoro di C Major",
    "Verificare timing, simultaneità e registro delle note con una checklist tecnica",
    "Trasporre il pattern in almeno due tonalità mantenendo la stessa funzione armonica",
    "Applicare il materiale della lezione in una progressione di 4-8 battute pronta per il beat"
  ],
  theory: {
    sections: [
      {
        title: "Concetto armonico: Build Your First Chord: Major Triad",
        content: `Questa lezione sviluppa un blocco armonico concreto da usare subito in produzione. L'obiettivo non è solo "sapere" la teoria, ma tradurla in una decisione musicale verificabile: note corrette, posizione corretta nel registro e funzione armonica coerente con il contesto del brano.

Quando programmi C Major, ascolta tre elementi: stabilità della fondamentale, qualità emotiva dell'intervallo caratteristico e bilanciamento tra le voci. Se una voce domina troppo, il voicing perde chiarezza. In pratica, la teoria qui serve a controllare intenzione e risultato: stessa idea armonica, suono più pulito, scelta più consapevole.`
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
