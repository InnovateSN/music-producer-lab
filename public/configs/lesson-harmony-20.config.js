/**
 * Music Producer Lab - Lesson Configuration
 * Lesson: Harmony 20 - Pro Voicing Pack: Spread, Stack, and Control
 */

import { applyMessagePreset, buildHeroEyebrow, buildLessonQualityPreset } from "./config-presets.js";

const lessonQualityPreset = buildLessonQualityPreset({
  lessonCategory: "Expert Techniques",
  lessonNumber: 20
});

export const lessonConfig = {
  lessonKey: "mpl-harmony-20-progress",
  lessonNumber: 20,
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

  nextLessonUrl: "harmony-playground.html",
  prevLessonUrl: "lesson-harmony-19.html",
  overviewUrl: "labs.html",

  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 20, categoryLabel: "Harmony & Melody" }),
    title: "Pro Voicing Pack:",
    titleHighlight: "Spread, Stack, and Control",
    subtitle: "Build professional chord voicings with controlled top notes and counter-melodies. You'll learn how to voice chords across multiple octaves, create smooth top-line motion, and layer harmony like a pro. This final lesson brings together everything for record-ready harmony."
  },

  sequencer: {
    tempo: 92,
    key: "F",
    scale: "Major",
    stepCount: 64,
    bars: 4,
    pitchRange: {
      low: 36,
      high: 84
    }
  },

  exercise: {
    title: "Voice a Progression with Top-Note Control",
    description: "Create a <strong>Fmaj9 → Gm7 → Cmaj9 → Am7</strong> progression with professional voicing: bass in low register, chord tones in mid register, and a <strong>controlled top note melody</strong> (9th and 7th) that moves smoothly. This is how session players and arrangers voice chords.",
    tip: "Pro voicing separates registers: bass (root), body (3rd, 5th, 7th in middle octaves), and top voice (melody/color tone like 9th). The top note creates a counter-melody while lower notes provide harmonic support. Spread chords wide - low bass, mid harmony, high melody. This creates clarity, space, and professional sound!",
    steps: [
      { text: "Bar 1: <strong>Fmaj9</strong> - Bass F2, Body A3-C4-E4, Top G4 (9th)" },
      { text: "Bar 2: <strong>Gm7</strong> - Bass G2, Body Bb3-D4-F4, Top F4 (7th)" },
      { text: "Bar 3: <strong>Cmaj9</strong> - Bass C2, Body E3-G3-B3, Top D4 (9th)" },
      { text: "Bar 4: <strong>Am7</strong> - Bass A1, Body C3-E3-G3, Top C4 (3rd)" },
      { text: "Notice: Top notes (G-F-D-C) create a descending melody!" },
      { text: "This is professional voicing - separation, space, and top-line control" }
    ]
  },

  validation: {
    type: "professional_voicing",
    requiredChords: [
      {
        time: 0,
        chordName: "Fmaj9",
        voicing: {
          bass: [41],  // F2
          body: [57, 60, 64],  // A3, C4, E4
          top: [67]  // G4 (9th)
        }
      },
      {
        time: 16,
        chordName: "Gm7",
        voicing: {
          bass: [43],  // G2
          body: [58, 62, 65],  // Bb3, D4, F4
          top: [65]  // F4 (7th)
        }
      },
      {
        time: 32,
        chordName: "Cmaj9",
        voicing: {
          bass: [48],  // C3
          body: [52, 55, 59],  // E3, G3, B3
          top: [62]  // D4 (9th)
        }
      },
      {
        time: 48,
        chordName: "Am7",
        voicing: {
          bass: [45],  // A2
          body: [48, 52, 55],  // C3, E3, G3
          top: [60]  // C4 (3rd)
        }
      }
    ],
    topNoteMotion: {
      pitches: [67, 65, 62, 60],  // G-F-D-C descending
      mustMoveSmooth: true
    }
  },

  messages: applyMessagePreset("harmony", {
    initial: "Voice Fmaj9 → Gm7 → Cmaj9 → Am7 with separated registers: low bass, mid body, high melody. Top notes should move smoothly: G→F→D→C.",
    success: "Congratulations! You've completed the Harmony & Melody curriculum and mastered professional voicing! You now have the harmonic skills of a professional producer and arranger. Ready to explore the Harmony Playground!",
    error: "Separate registers: Bass in low octave (roots), body in middle (3rd/5th/7th), top voice high (9th or color tone). Top notes create melody: G→F→D→C."
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
    "Riconoscere all'ascolto il carattere sonoro di Fmaj9",
    "Verificare timing, simultaneità e registro delle note con una checklist tecnica",
    "Trasporre il pattern in almeno due tonalità mantenendo la stessa funzione armonica",
    "Applicare il materiale della lezione in una progressione di 4-8 battute pronta per il beat"
  ],
  theory: {
    sections: [
      {
        title: "Concetto armonico: Pro Voicing Pack: Spread, Stack, and Control",
        content: `Questa lezione sviluppa un blocco armonico concreto da usare subito in produzione. L'obiettivo non è solo "sapere" la teoria, ma tradurla in una decisione musicale verificabile: note corrette, posizione corretta nel registro e funzione armonica coerente con il contesto del brano.

Quando programmi Fmaj9, ascolta tre elementi: stabilità della fondamentale, qualità emotiva dell'intervallo caratteristico e bilanciamento tra le voci. Se una voce domina troppo, il voicing perde chiarezza. In pratica, la teoria qui serve a controllare intenzione e risultato: stessa idea armonica, suono più pulito, scelta più consapevole.`
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
