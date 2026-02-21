/**
 * Music Producer Lab - Lesson Configuration
 * Lesson: Harmony 2 - Flip the Emotion: Major vs Minor
 */

import { applyMessagePreset, buildHeroEyebrow } from "./config-presets.js";

export const lessonConfig = {
  // ====================
  // LESSON METADATA
  // ====================
  lessonKey: "mpl-harmony-2-progress",
  lessonNumber: 2,
  lessonCategory: "Chord Fundamentals",

  progression: {
    difficulty: "beginner",
    prerequisites: ["harmony-1"],
    outcomes: ["Completare gli obiettivi pratici di harmony-2","Consolidare competenze beginner nel modulo harmony"]
  },


  reviewMetadata: {
    lastReviewed: "2026-02-19",
    reviewVersion: "didactic-audit-v4",
    reviewedAgainst: ["AES", "Wikipedia", "Ableton"],
    sources: {
      wikipedia: [
        "https://en.wikipedia.org/wiki/Triad_(music)",
        "https://en.wikipedia.org/wiki/Major_and_minor",
      ],
      ableton: [
        "https://www.ableton.com/en/live-manual/",
      ],
      aes: [
        "https://aes2.org/publications/standards/",
      ]
    }
  },

  // ====================
  // NAVIGATION
  // ====================
  nextLessonUrl: "lesson-harmony-3.html",
  prevLessonUrl: "lesson-harmony-1.html",
  overviewUrl: "labs.html",

  // ====================
  // HERO SECTION
  // ====================
  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 2, categoryLabel: "Harmony & Melody" }),
    title: "Flip the Emotion:",
    titleHighlight: "Major vs Minor",
    subtitle: "Change just one note in a chord and completely transform its emotional color. You'll build C major (bright, happy) and C minor (darker, melancholic) side by side, hearing how a single note shift changes everything. This teaches you the most powerful variable in chord construction."
  },

  // ====================
  // SEQUENCER SETTINGS
  // ====================
  sequencer: {
    tempo: 90,
    key: "C",
    scale: "Major",
    stepCount: 16,
    bars: 1,
    pitchRange: {
      low: 48,  // C3
      high: 72  // C5
    }
  },

  // ====================
  // EXERCISE INFO
  // ====================
  exercise: {
    title: "Build C Major and C Minor",
    description: "The difference between major (bright) and minor (dark) is just <strong>one semitone in the third</strong>. C major uses E (major third), C minor uses E♭ (minor third). The root (C) and fifth (G) stay the same. This single-note difference is what separates uplifting pop chords from moody hip-hop progressions.",
    tip: "Create two MIDI clips side by side - one with C major, one with C minor. Play them back-to-back to clearly hear the emotional shift.",
    steps: [
      { text: "Build <strong>C major</strong> first: C4, E4, G4 on the same beat" },
      { text: "Listen and notice the <strong>bright, stable</strong> sound" },
      { text: "Now change E to <strong>E♭</strong> (move it down one semitone/piano key)" },
      { text: "Listen to <strong>C minor</strong> and notice the darker, more introspective sound" },
      { text: "<strong>A/B between them</strong> several times to really hear the difference" },
      { text: "Experiment: Try building G major (G-B-D) then G minor (G-B♭-D)" }
    ]
  },

  // ====================
  // VALIDATION CONFIG
  // ====================
  validation: {
    type: "chord_comparison",
    requiredChords: [
      {
        name: "C Major",
        pitches: [60, 64, 67],  // C4, E4, G4
        time: 0
      },
      {
        name: "C Minor",
        pitches: [60, 63, 67],  // C4, Eb4, G4
        time: 4  // Or in a separate clip
      }
    ],
    allowInversions: false,
    allowExtraNotes: false
  },

  // ====================
  // COMPLETION MESSAGES
  // ====================
  messages: applyMessagePreset("harmony", {
    initial: "Build both C major (C-E-G) and C minor (C-Eb-G) to hear the difference.",
    success: "Perfect! You can now hear and build the difference between major and minor chords. This unlocks all chord construction.",
    error: "Make sure you have C major (C-E-G) and C minor (C-Eb-G). The only difference should be E vs Eb."
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
    "Riconoscere all'ascolto il carattere sonoro di Flip the Emotion: Major vs Minor",
    "Verificare timing, simultaneità e registro delle note con una checklist tecnica",
    "Trasporre il pattern in almeno due tonalità mantenendo la stessa funzione armonica",
    "Applicare il materiale della lezione in una progressione di 4-8 battute pronta per il beat"
  ],
  theory: {
    sections: [
      {
        title: "Concetto armonico: Flip the Emotion: Major vs Minor",
        content: `Questa lezione sviluppa un blocco armonico concreto da usare subito in produzione. L'obiettivo non è solo "sapere" la teoria, ma tradurla in una decisione musicale verificabile: note corrette, posizione corretta nel registro e funzione armonica coerente con il contesto del brano.

Quando programmi Flip the Emotion: Major vs Minor, ascolta tre elementi: stabilità della fondamentale, qualità emotiva dell'intervallo caratteristico e bilanciamento tra le voci. Se una voce domina troppo, il voicing perde chiarezza. In pratica, la teoria qui serve a controllare intenzione e risultato: stessa idea armonica, suono più pulito, scelta più consapevole.`
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
