/**
 * Music Producer Lab - Lesson Configuration
 * Lesson: Harmony 14 - Borrow One Chord: Instant Emotion Shift
 */

import { applyMessagePreset, buildHeroEyebrow, buildLessonQualityPreset } from "./config-presets.js";

const lessonQualityPreset = buildLessonQualityPreset({
  lessonCategory: "Modal Interchange",
  lessonNumber: 14
});

export const lessonConfig = {
  lessonKey: "mpl-harmony-14-progress",
  lessonNumber: 14,
  lessonCategory: "Modal Interchange",


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

  nextLessonUrl: "lesson-harmony-15.html",
  prevLessonUrl: "lesson-harmony-13.html",
  overviewUrl: "labs.html",

  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 14, categoryLabel: "Harmony & Melody" }),
    title: "Borrow One Chord:",
    titleHighlight: "Instant Emotion Shift",
    subtitle: "Add a borrowed chord from the parallel minor key to create dramatic color changes. You'll learn modal interchange - borrowing chords from parallel keys (C major/C minor) for instant emotional impact. This is the secret behind cinematic progressions and modern pop hooks."
  },

  sequencer: {
    tempo: 95,
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
    title: "Use a Borrowed Chord for Emotional Color",
    description: "Build a progression in C major, then <strong>borrow one chord from C minor</strong> to add drama. You'll use <strong>Ab major (♭VI)</strong> - a chord not in C major but in C minor. This creates a sudden emotional shift that sounds cinematic and modern.",
    tip: "Modal interchange means borrowing chords from parallel keys. C major and C minor share the same root (C) but have different scales. When you're in C major, you can 'borrow' chords that exist in C minor for instant color. The ♭VI chord (Ab) is the most popular borrowed chord - it sounds epic and cinematic!",
    steps: [
      { text: "Bar 1: <strong>C major</strong> (C-E-G) - home in C major" },
      { text: "Bar 2: <strong>Ab major</strong> (Ab-C-Eb) - BORROWED from C minor!" },
      { text: "Bar 3: <strong>F major</strong> (F-A-C) - back to C major" },
      { text: "Bar 4: <strong>G major</strong> (G-B-D) - resolves to C" },
      { text: "Notice the Eb note in Ab - it's not in C major (should be E natural)" },
      { text: "Listen for the dramatic, emotional shift when Ab appears!" }
    ]
  },

  validation: {
    type: "borrowed_chord_progression",
    requiredChords: [
      { time: 0, pitches: [60, 64, 67], chordName: "C", key: "C major" },
      { time: 16, pitches: [68, 72, 75], chordName: "Ab", key: "C minor", isBorrowed: true },
      { time: 32, pitches: [65, 69, 72], chordName: "F", key: "C major" },
      { time: 48, pitches: [67, 71, 74], chordName: "G", key: "C major" }
    ],
    checkForAccidentals: true,  // Ab chord has Eb (accidental in C major)
    allowExtraNotes: false
  },

  messages: applyMessagePreset("harmony", {
    initial: "Build C → Ab → F → G. The Ab chord (Ab-C-Eb) is borrowed from C minor - notice the Eb creates drama and color!",
    success: "Excellent! You've mastered modal interchange. That Ab chord creates instant cinematic drama - it's used in countless pop, rock, and film scores!",
    error: "Check: C = C-E-G, Ab = Ab-C-Eb (note the Eb!), F = F-A-C, G = G-B-D. The Ab chord contains notes from C minor, creating that dramatic shift."
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
        title: "Concetto armonico: Borrow One Chord: Instant Emotion Shift",
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
