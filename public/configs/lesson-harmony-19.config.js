/**
 * Music Producer Lab - Lesson Configuration
 * Lesson: Harmony 19 - Reharmonize a Melody: 3 Different Backings
 */

import { applyMessagePreset, buildHeroEyebrow, buildLessonQualityPreset } from "./config-presets.js";

const lessonQualityPreset = buildLessonQualityPreset({
  lessonCategory: "Expert Techniques",
  lessonNumber: 19
});

export const lessonConfig = {
  lessonKey: "mpl-harmony-19-progress",
  lessonNumber: 19,
  lessonCategory: "Expert Techniques",


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

  nextLessonUrl: "lesson-harmony-20.html",
  prevLessonUrl: "lesson-harmony-18.html",
  overviewUrl: "labs.html",

  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 19, categoryLabel: "Harmony & Melody" }),
    title: "Reharmonize a Melody:",
    titleHighlight: "3 Different Backings",
    subtitle: "Take one melody and support it with three different chord progressions. You'll learn reharmonization - the art of changing the chords under a melody to create different moods. This is how producers create remixes, bridge sections, and harmonic variations."
  },

  sequencer: {
    tempo: 100,
    key: "C",
    scale: "Major",
    stepCount: 96,
    bars: 6,
    pitchRange: {
      low: 48,
      high: 84
    }
  },

  exercise: {
    title: "Reharmonize the Same Melody Three Ways",
    description: "You'll be given a simple melody: <strong>C-D-E-D-C-G-E-C</strong>. Harmonize it three different ways: (1) Simple major chords, (2) Modal minor approach, (3) Jazz reharmonization. Same melody, completely different emotional impact based on chord choices.",
    tip: "Reharmonization is choosing different chords that fit the same melody notes. A melody note can be supported by multiple chords - C works over C major, F major, Am, Dm, etc. By changing chords, you change the emotional color without changing the melody. This is how jazz musicians take standards and make them their own!",
    steps: [
      { text: "Bars 1-2: Melody <strong>C-D-E-D-C-G-E-C</strong> over <strong>C → G</strong> (simple, bright)" },
      { text: "Bars 3-4: SAME melody over <strong>Am → Em</strong> (darker, minor feel)" },
      { text: "Bars 5-6: SAME melody over <strong>Fmaj7 → Em7 → Dm7 → G7</strong> (jazz movement)" },
      { text: "Keep the melody identical - only chords change!" },
      { text: "Listen how the same notes feel completely different with different harmony" },
      { text: "This is reharmonization - harmonic transformation" }
    ]
  },

  validation: {
    type: "reharmonization_exercise",
    fixedMelody: {
      notes: [60, 62, 64, 62, 60, 67, 64, 60],  // C-D-E-D-C-G-E-C
      positions: [0, 4, 8, 12, 16, 20, 24, 28]
    },
    harmonizations: [
      {
        bars: [0, 1],
        chords: [
          { time: 0, pitches: [48, 52, 55], chordName: "C" },
          { time: 16, pitches: [55, 59, 62], chordName: "G" }
        ]
      },
      {
        bars: [2, 3],
        chords: [
          { time: 32, pitches: [57, 60, 64], chordName: "Am" },
          { time: 48, pitches: [52, 55, 59], chordName: "Em" }
        ]
      },
      {
        bars: [4, 5],
        chords: [
          { time: 64, pitches: [53, 57, 60, 64], chordName: "Fmaj7" },
          { time: 72, pitches: [52, 55, 59, 62], chordName: "Em7" },
          { time: 80, pitches: [50, 53, 57, 60], chordName: "Dm7" },
          { time: 88, pitches: [55, 59, 62, 65], chordName: "G7" }
        ]
      }
    ],
    mustPreserveMelody: true
  },

  messages: applyMessagePreset("harmony", {
    initial: "Melody: C-D-E-D-C-G-E-C (repeated 3 times). Bars 1-2: C→G. Bars 3-4: Am→Em. Bars 5-6: Fmaj7→Em7→Dm7→G7. Same melody, different chords!",
    success: "Brilliant! You've mastered reharmonization - the art of harmonic transformation. Notice how the same melody feels completely different with different chord choices!",
    error: "Keep the melody IDENTICAL in all 3 sections: C-D-E-D-C-G-E-C. Only change the chords underneath. Section 1: C→G, Section 2: Am→Em, Section 3: Fmaj7→Em7→Dm7→G7."
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
        title: "Concetto armonico: Reharmonize a Melody: 3 Different Backings",
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
