import { buildHeroEyebrow } from '../lesson-engine.js';

export const lessonConfig = {
  lessonKey: "mpl-theory-3-progress",
  lessonNumber: 3,
  lessonCategory: "Music Theory Fundamentals",

  progression: {
    difficulty: "beginner",
    prerequisites: ["theory-2"],
    outcomes: ["Completare gli obiettivi pratici di theory-3","Consolidare competenze beginner nel modulo theory"]
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

  nextLessonUrl: "lesson-theory-4.html",
  prevLessonUrl: "lesson-theory-2.html",
  overviewUrl: "labs.html",

  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 3, categoryLabel: "Music Theory Fundamentals" }),
    title: "Note Names & Staff Reading:",
    titleHighlight: "Master Music Notation",
    subtitle: "Master note names on the treble and bass clef. Learn how to read and write music notation efficiently."
  },

  exercise: {
    title: "Read Notes on the Grand Staff",
    description: "The grand staff combines treble clef (right hand, higher notes) and bass clef (left hand, lower notes). Each line and space represents a specific pitch. Learning to read notation quickly is essential for communicating musical ideas and understanding written music.",
    tip: "Use mnemonics: Treble spaces spell FACE. Treble lines are Every Good Boy Does Fine (EGBDF).",
    steps: [
      '<strong>Treble Clef Lines</strong> — From bottom to top: E-G-B-D-F. Mnemonic: "Every Good Boy Does Fine."',
      '<strong>Treble Clef Spaces</strong> — From bottom to top: F-A-C-E. They spell "FACE"!',
      '<strong>Bass Clef Lines</strong> — From bottom to top: G-B-D-F-A. Mnemonic: "Good Boys Do Fine Always."',
      '<strong>Bass Clef Spaces</strong> — From bottom to top: A-C-E-G. Mnemonic: "All Cows Eat Grass."',
      '<strong>Ledger Lines</strong> — Notes above or below the staff use small extra lines. Middle C sits on a ledger line between both clefs.'
    ]
  },

  theory: {
    sections: [
      {
        title: 'Understanding Music Notation Basics',
        content: `
**The Grand Staff:**

**Treble Clef (G Clef):**
- Used for higher-pitched instruments (piano right hand, guitar, flute, violin)
- The curl wraps around the G line (second line from bottom)
- Lines: E-G-B-D-F
- Spaces: F-A-C-E

**Bass Clef (F Clef):**
- Used for lower-pitched instruments (piano left hand, bass guitar, trombone)
- The two dots surround the F line (second line from top)
- Lines: G-B-D-F-A
- Spaces: A-C-E-G

**Middle C:**
- The note between both clefs
- Sits on a ledger line
- MIDI note 60 / C4 in scientific pitch notation

**Ledger Lines:**
- Short lines above or below the staff for extended range
- Each line/space continues the alphabet pattern
- Can extend indefinitely in both directions

**Accidentals:**
- ♯ (Sharp) — Raises pitch by one half step
- ♭ (Flat) — Lowers pitch by one half step
- ♮ (Natural) — Cancels previous sharp or flat
- ♯♯ (Double sharp) / ♭♭ (Double flat) — Rare, but exist
        `
      },
      {
        title: 'Practical Staff Reading Strategy',
        content: `
**Learning Strategy:**

1. **Memorize landmark notes** — Middle C, treble G, bass F
2. **Use mnemonics** — FACE, EGBDF, All Cows Eat Grass
3. **Practice daily** — Flashcards or sight-reading apps
4. **Read intervals, not just notes** — Recognize patterns (steps, skips, leaps)
5. **Connect to your instrument** — Play notes as you read them

**Reading Tips:**
- Look ahead while playing (don't stare at one note)
- Recognize repeated patterns and sequences
- Group notes into chords and shapes
- Use finger numbers for efficient hand positioning

**Common Mistakes:**
- Confusing treble and bass clef note names
- Forgetting to apply accidentals throughout the measure
- Not counting ledger lines accurately
- Reading too slowly (not recognizing patterns)

**Why Notation Matters:**
- Universal language across instruments and cultures
- Preserves music for future generations
- Enables collaboration between musicians
- Required for formal music education and professional work
        `
      }
    ]
  },

  learningObjectives: [
    "Identify notes on treble and bass clef instantly",
    "Use ledger lines to read extended range notes",
    "Apply accidentals correctly within measures",
    "Read intervals and patterns, not just individual notes",
    "Connect notation to your instrument or DAW piano roll"
  ],

  mode: {
    type: "educational",
    sandbox: false,
    showContent: true,
    enableInteractive: true
  },

  practicalActivity: {
    minimumPracticeRequirement: "Capitolo Music Theory Fundamentals: almeno il 60% delle lezioni deve includere pratica guidata o challenge verificabile.",
    task: "Trascrivi in pentagramma una melodia di 2 battute in chiave di violino e leggila ad alta voce (note + ritmo).",
    checklist: [
      "Completato il task pratico nel DAW/strumento o su notazione.",
      "Verificato il risultato con regole teoriche del capitolo.",
      "Annotati errori e correzioni in 2-3 righe."
    ],
    verificationChallenge: "Leggi a prima vista 12 note consecutive senza errori di nome o posizione sul pentagramma.",
    completionFeedback: {
      pass: "Ottimo: hai soddisfatto il target minimo pratico del capitolo.",
      retry: "Riprova il challenge: completa checklist e correzioni prima di proseguire."
    }
  },

  assessmentRubric: {
    theoryAccuracy: {
      target: ">= 80%",
      evidence: "Risposte corrette su nomenclatura, formule e analisi teorica"
    },
    practicalExecution: {
      target: "Checklist pratica completata al 100%",
      evidence: "Task svolto con consegna verificabile (audio, notazione o screenshot progetto)"
    },
    challengeVerification: {
      target: ">= 70% di esiti positivi nel challenge",
      evidence: "Tentativo registrato con auto-valutazione errori/correzioni"
    },
    reflectionQuality: {
      target: "Almeno 2 miglioramenti concreti identificati",
      evidence: "Note di retrospettiva su cosa mantenere/correggere nel prossimo esercizio"
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
