/**
 * Music Producer Lab - Lesson Configuration
 * Lesson: Drums 21 - Velocity Practice Playground
 *
 * Interactive practice lesson with visual examples demonstrating
 * velocity control, dynamics, and how the velocity slider affects sound.
 */

import { applyMessagePreset, buildHeroEyebrow } from "./config-presets.js";

export const lessonConfig = {
  // ====================
  // LESSON METADATA
  // ====================
  lessonKey: "mpl-drums-21-practice",
  lessonNumber: 21,
  lessonCategory: "Drums & Rhythm",
  depthLevel: 3,

  // ====================
  // NAVIGATION
  // ====================
  nextLessonUrl: "labs.html",
  prevLessonUrl: "lesson-drums-20.html",
  overviewUrl: "labs.html",

  // ====================
  // HERO SECTION
  // ====================
  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 21, categoryLabel: "Practice Lab" }),
    title: "Velocity",
    titleHighlight: "Practice Playground",
    subtitle: "Esplora il controllo della <strong>velocity</strong> (intensità delle note 0-127) con esempi pratici e visivi. Impara come la velocity trasforma pattern robotici in groove naturali e dinamici."
  },

  // ====================
  // SEQUENCER CONFIG
  // ====================
  sequencer: {
    tempo: 100,
    stepCount: 16,
    swing: 0,
    showBeatMarkers: true,
    showStepNumbers: true,
    autoSaveState: true,
    enableVelocity: true // ENABLE VELOCITY LANES UI
  },

  // ====================
  // EXERCISE
  // ====================
  exercise: {
    title: "Esercizi Pratici di Velocity",
    description: "Prova questi pattern di esempio per capire come funziona il controllo della velocity. Ascolta le differenze e sperimenta liberamente!",
    tip: "💡 Trascina su/giù su ogni step per cambiare la velocity. Nota come cambia il volume del suono!",
    steps: [
      { text: "<strong>Esempio 1 - Kick:</strong> Ascolta 3 kick con velocity diverse: Bassa (30), Media (80), Alta (127). Nota la differenza di volume!" },
      { text: "<strong>Esempio 2 - Snare:</strong> Confronta snare forte (120) sul backbeat con ghost note morbide (25) tra i beat." },
      { text: "<strong>Esempio 3 - Hi-Hat:</strong> Pattern con accenti (110) sui downbeat e note morbide (50) sugli off-beat." },
      { text: "<strong>Sperimenta:</strong> Prova a creare i tuoi pattern con diverse velocity. Usa il tooltip (numero che appare) per vedere i valori esatti!" }
    ]
  },

  // ====================
  // INSTRUMENTS (Pre-loaded examples)
  // ====================
  instruments: [
    {
      id: "kick",
      label: "Kick Demo",
      color: "linear-gradient(135deg, #ff6b6b, #ee5a24)",
      initialPattern: {
        steps: [0, 4, 8],
        velocities: [30, 80, 127]
      },
      instructionText: "🎯 ESEMPIO: 3 kick con velocity Bassa→Media→Alta. Ascolta la differenza!",
      patternHint: {
        enabled: true,
        note: "Step 1 (vel 30) → Step 5 (vel 80) → Step 9 (vel 127)"
      }
    },
    {
      id: "snare",
      label: "Snare Dynamics",
      color: "linear-gradient(135deg, #feca57, #ff9f43)",
      initialPattern: {
        steps: [4, 6, 12, 14],
        velocities: [120, 25, 120, 25]
      },
      instructionText: "🎯 ESEMPIO: Snare forti (120) sui beat principali + ghost notes (25) tra i beat.",
      patternHint: {
        enabled: true,
        note: "Beat 2&4 FORTE (120) + ghost notes MORBIDE (25)"
      }
    },
    {
      id: "hihat",
      label: "Hi-Hat Accents",
      color: "linear-gradient(135deg, #00d2d3, #01a3a4)",
      initialPattern: {
        steps: [0, 2, 4, 6, 8, 10, 12, 14],
        velocities: [110, 50, 110, 50, 110, 50, 110, 50]
      },
      instructionText: "🎯 ESEMPIO: Hi-hat 8th notes con accenti (110) sui downbeat e morbidi (50) sugli off-beat.",
      patternHint: {
        enabled: true,
        note: "Downbeats FORTI (110) + off-beats MORBIDI (50)"
      }
    },
    {
      id: "clap",
      label: "Clap Crescendo",
      color: "linear-gradient(135deg, #a29bfe, #6c5ce7)",
      initialPattern: {
        steps: [0, 4, 8, 12],
        velocities: [40, 70, 100, 127]
      },
      instructionText: "🎯 ESEMPIO: Crescendo graduale da morbido (40) a fortissimo (127).",
      patternHint: {
        enabled: true,
        note: "Crescendo: 40 → 70 → 100 → 127"
      }
    }
  ],

  // ====================
  // VALIDATION (Disabled for playground)
  // ====================
  validation: {
    checkVelocity: false,
    velocityTolerance: 999,
    requireGhostNotes: false
  },

  // ====================
  // PATTERN HINT
  // ====================
  patternHint: {
    enabled: true,
    note: "📚 Questi sono esempi pre-caricati. Premi PLAY per ascoltare, poi modifica le velocity per sperimentare!"
  },

  // ====================
  // MESSAGES
  // ====================
  messages: applyMessagePreset("drums", {
    initial: "🎨 Benvenuto nel Velocity Playground! Premi PLAY per ascoltare gli esempi, poi sperimenta modificando le velocity. Non ci sono errori qui—solo sperimentazione!",
    success: "🎵 Ottimo lavoro! Continua a sperimentare con le velocity per capire come influenzano il suono.",
    error: "",
    alreadyCompleted: "Continua a sperimentare! Ogni modifica ti aiuta a capire meglio la velocity."
  }),

  // ====================
  // MODE FLAGS
  // ====================
  mode: {
    sandbox: true, // Sandbox mode - no validation, pure experimentation
    showTargetHint: true,
    enablePresets: false,
    enableExport: true,
    showVelocityLane: true,
    enableVelocityEditing: true
  },

  // ====================
  // LEARNING OBJECTIVES
  // ====================
  learningObjectives: [
    "Capire come la velocity (0-127) controlla il volume delle note",
    "Ascoltare la differenza tra velocity basse (ghost notes) e alte (accents)",
    "Imparare a usare il velocity slider trascinando su/giù",
    "Sperimentare con dinamiche e contrasti per creare groove naturali",
    "Vedere visivamente la velocity tramite la barra blu nei button"
  ],

  // ====================
  // VELOCITY VISUAL GUIDE
  // ====================
  velocityGuide: {
    enabled: true,
    examples: [
      {
        range: "0-40",
        label: "Ghost Notes",
        description: "Note molto morbide, quasi sussurrate. Aggiungono texture senza dominare.",
        color: "rgba(0,240,255,0.2)",
        audioExample: "kick-soft"
      },
      {
        range: "41-80",
        label: "Normale",
        description: "Velocity standard per la maggior parte delle note. Ben udibile ma non aggressivo.",
        color: "rgba(0,240,255,0.5)",
        audioExample: "kick-medium"
      },
      {
        range: "81-120",
        label: "Accenti",
        description: "Note enfatizzate che definiscono il ritmo principale. Forte e chiaro.",
        color: "rgba(0,240,255,0.7)",
        audioExample: "kick-loud"
      },
      {
        range: "121-127",
        label: "Massimo",
        description: "Volume massimo per momenti di impatto. Usa con moderazione!",
        color: "rgba(0,240,255,0.9)",
        audioExample: "kick-max"
      }
    ]
  },

  // ====================
  // PRACTICAL TIPS
  // ====================
  practicalTips: [
    {
      title: "Come usare il Velocity Slider",
      steps: [
        "Click su uno step per attivarlo/disattivarlo",
        "Trascina verticalmente SU per aumentare la velocity (più forte)",
        "Trascina verticalmente GIÙ per diminuire la velocity (più morbido)",
        "Il numero che appare mostra la velocity esatta (0-127)",
        "La barra BLU dentro lo step mostra visivamente l'intensità"
      ]
    },
    {
      title: "Velocity nella Musica Reale",
      steps: [
        "I batteristi veri non colpiscono ogni nota alla stessa forza",
        "Ghost notes (25-40) aggiungono groove e texture",
        "Accenti (100+) sui beat principali danno struttura",
        "Variazioni di velocity creano dinamica e interesse",
        "La differenza tra morbido e forte è ciò che rende umana la musica"
      ]
    },
    {
      title: "Esercizi Suggeriti",
      steps: [
        "Prova a ricreare il pattern del kick con tutte le note alla stessa velocity",
        "Poi varia le velocity—nota come diventa più interessante!",
        "Sperimenta con crescendo (aumentare gradualmente) e diminuendo",
        "Crea un pattern con forte contrasto: ghost notes + accents",
        "Ascolta musica vera e cerca di identificare le velocity diverse"
      ]
    }
  ]
};

if (typeof window !== 'undefined') {
  window.LESSON_CONFIG = lessonConfig;
}
