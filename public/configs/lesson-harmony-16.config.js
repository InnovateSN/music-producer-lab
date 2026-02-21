/**
 * Music Producer Lab - Lesson Configuration
 * Lesson: Harmony 16 - Neo-Soul Moves: Sus → Resolve
 */

import { applyMessagePreset, buildHeroEyebrow, buildLessonQualityPreset } from "./config-presets.js";

const lessonQualityPreset = buildLessonQualityPreset({
  lessonCategory: "Advanced Harmony",
  lessonNumber: 16
});

export const lessonConfig = {
  lessonKey: "mpl-harmony-16-progress",
  lessonNumber: 16,
  lessonCategory: "Advanced Harmony",

  progression: {
    difficulty: "advanced",
    prerequisites: ["harmony-15","harmony-14"],
    outcomes: ["Completare gli obiettivi pratici di harmony-16","Consolidare competenze advanced nel modulo harmony"]
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

  nextLessonUrl: "lesson-harmony-17.html",
  prevLessonUrl: "lesson-harmony-15.html",
  overviewUrl: "labs.html",

  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 16, categoryLabel: "Harmony & Melody" }),
    title: "Neo-Soul Moves:",
    titleHighlight: "Sus → Resolve",
    subtitle: "Build lush progressions using suspended chords that resolve to major or minor. You'll learn sus2 and sus4 chords - the ambiguous, floating quality that defines Robert Glasper, Hiatus Kaiyote, and modern R&B. Master smooth voice leading with suspension and resolution."
  },

  sequencer: {
    tempo: 88,
    key: "E",
    scale: "Major",
    stepCount: 64,
    bars: 4,
    pitchRange: {
      low: 48,
      high: 84
    }
  },

  exercise: {
    title: "Build Sus Chords with Resolution",
    description: "Create suspended chords that resolve: <strong>Esus2 → E</strong> and <strong>Asus4 → A</strong>. Suspended chords replace the third with either the 2nd (sus2) or 4th (sus4), creating tension that wants to resolve when the third returns.",
    tip: "Sus chords are 'suspended' - they float without major/minor identity because they have no third. Esus2 = E-F#-B (2nd replaces 3rd). Esus4 = E-A-B (4th replaces 3rd). They create gentle tension that resolves beautifully when the third appears. This is the DNA of neo-soul and R&B keys!",
    steps: [
      { text: "Bar 1: <strong>Esus2</strong> (E-F#-B) sustained" },
      { text: "Bar 2: <strong>E major</strong> (E-G#-B) - resolution!" },
      { text: "Bar 3: <strong>Asus4</strong> (A-D-E) suspended" },
      { text: "Bar 4: <strong>Amaj7</strong> (A-C#-E-G#) - full resolution with 7th" },
      { text: "Listen for the floating quality of sus and satisfaction of resolution" },
      { text: "Use smooth voice leading - keep common tones between chords" }
    ]
  },

  validation: {
    type: "sus_resolution",
    requiredChords: [
      { time: 0, pitches: [64, 66, 71], chordName: "Esus2", suspended: true },
      { time: 16, pitches: [64, 68, 71], chordName: "E", resolvedFrom: "Esus2" },
      { time: 32, pitches: [69, 74, 76], chordName: "Asus4", suspended: true },
      { time: 48, pitches: [69, 73, 76, 80], chordName: "Amaj7", resolvedFrom: "Asus4" }
    ],
    checkVoiceLeading: true,
    allowInversions: false
  },

  messages: applyMessagePreset("harmony", {
    initial: "Build Esus2 → E and Asus4 → Amaj7. Sus chords float (no third), then resolve when the third appears.",
    success: "Perfect! You've mastered suspension and resolution - the secret to neo-soul and R&B harmony. Notice how sus chords create gentle tension that melts into the third!",
    error: "Check: Esus2 = E-F#-B (no G#), E = E-G#-B, Asus4 = A-D-E (no C#), Amaj7 = A-C#-E-G#. Sus chords have no third!"
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
    "Riconoscere all'ascolto il carattere sonoro di Esus2",
    "Verificare timing, simultaneità e registro delle note con una checklist tecnica",
    "Trasporre il pattern in almeno due tonalità mantenendo la stessa funzione armonica",
    "Applicare il materiale della lezione in una progressione di 4-8 battute pronta per il beat"
  ],
  theory: {
    sections: [
      {
        title: "Concetto armonico: Neo-Soul Moves: Sus → Resolve",
        content: `Questa lezione sviluppa un blocco armonico concreto da usare subito in produzione. L'obiettivo non è solo "sapere" la teoria, ma tradurla in una decisione musicale verificabile: note corrette, posizione corretta nel registro e funzione armonica coerente con il contesto del brano.

Quando programmi Esus2, ascolta tre elementi: stabilità della fondamentale, qualità emotiva dell'intervallo caratteristico e bilanciamento tra le voci. Se una voce domina troppo, il voicing perde chiarezza. In pratica, la teoria qui serve a controllare intenzione e risultato: stessa idea armonica, suono più pulito, scelta più consapevole.`
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
