import { buildHeroEyebrow } from '../lesson-engine.js';

export const lessonConfig = {
  lessonKey: "mpl-theory-8-progress",
  lessonNumber: 8,
  lessonCategory: "Music Theory Fundamentals",


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

  nextLessonUrl: "labs.html",
  prevLessonUrl: "lesson-theory-7.html",
  overviewUrl: "labs.html",

  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 8, categoryLabel: "Music Theory Fundamentals" }),
    title: "Functional Harmony:",
    titleHighlight: "Roman Numerals & Chord Function",
    subtitle: "Understand chord function: tonic, subdominant, dominant. Learn Roman numeral analysis and how chords create tension and resolution."
  },

  exercise: {
    title: "Analyze Chord Progressions with Roman Numerals",
    description: "Functional harmony describes how chords relate to the tonic (home chord). Chords have roles: tonic (stable, home), subdominant (moves away), dominant (creates tension, wants to resolve back to tonic). Roman numerals (I, ii, iii, IV, V, vi, vii°) show chord function independent of key.",
    tip: "The most important progression in Western music: I-IV-V-I. In C major: C-F-G-C. This is the foundation of pop, rock, blues, and classical music.",
    steps: [
      '<strong>Tonic Function (I, vi)</strong> — Home, stable, resolution. C major (I) or A minor (vi) in key of C.',
      '<strong>Subdominant Function (IV, ii)</strong> — Moves away from home, prepares tension. F major (IV) or D minor (ii) in key of C.',
      '<strong>Dominant Function (V, vii°)</strong> — Maximum tension, wants to resolve to I. G major (V) or B diminished (vii°) in key of C.',
      '<strong>Diatonic Chords in Major</strong> — I (major), ii (minor), iii (minor), IV (major), V (major), vi (minor), vii° (diminished).',
      '<strong>Common Progressions</strong> — I-V-vi-IV (pop), I-IV-V (blues), ii-V-I (jazz), I-vi-IV-V (50s progression).'
    ]
  },

  theory: {
    sections: [
      {
        title: 'Understanding Functional Harmony',
        content: `
**Chord Functions:**

**Tonic (T) — Home:**
- Chords: I, vi (iii less common)
- Function: Stability, resolution, "home base"
- Feeling: Rest, completion
- Usage: Start and end progressions here

**Subdominant (SD) — Departure:**
- Chords: IV, ii (vi can substitute)
- Function: Move away from tonic, prepare dominant
- Feeling: Gentle tension, movement
- Usage: Bridge between tonic and dominant

**Dominant (D) — Tension:**
- Chords: V, vii° (iii can substitute)
- Function: Strong pull back to tonic
- Feeling: Urgency, needs resolution
- Usage: Creates the most powerful cadences

**Diatonic Chords in C Major:**
- **I** - C major (tonic)
- **ii** - D minor (subdominant)
- **iii** - E minor (tonic substitute)
- **IV** - F major (subdominant)
- **V** - G major (dominant)
- **vi** - A minor (tonic substitute)
- **vii°** - B diminished (dominant function)

**Diatonic Chords in A Minor (Natural):**
- **i** - A minor (tonic)
- **ii°** - B diminished (subdominant)
- **III** - C major (tonic substitute)
- **iv** - D minor (subdominant)
- **v** - E minor (dominant — weak)
- **VI** - F major (subdominant substitute)
- **VII** - G major (subtonic)

*Note: Harmonic minor raises the 7th, making V major for stronger resolution*
        `
      },
      {
        title: 'Roman Numeral Analysis and Progressions',
        content: `
**Roman Numeral System:**

**Uppercase = Major chord:**
- I, IV, V in major keys
- III, VI, VII in minor keys

**Lowercase = Minor chord:**
- ii, iii, vi in major keys
- i, iv, v in minor keys

**° = Diminished:**
- vii° in major keys
- ii° in minor keys

**+ = Augmented:**
- Rare, usually altered chords

**Common Progressions:**

**I-IV-V-I** (Tonic-Subdominant-Dominant-Tonic)
- The "perfect authentic cadence"
- Foundation of blues, rock, country, pop
- C-F-G-C in key of C major

**I-V-vi-IV** ("Axis progression")
- Pop/rock standard (thousands of songs)
- C-G-Am-F in C major
- Creates loop that never fully resolves

**ii-V-I** (Jazz turnaround)
- Most important jazz progression
- Dm7-G7-Cmaj7 in C major
- Smooth voice leading, strong resolution

**I-vi-IV-V** (50s progression)
- Doo-wop, early rock
- C-Am-F-G in C major

**vi-IV-I-V** ("Sad pop progression")
- Am-F-C-G in C major
- Starts on relative minor for emotional impact

**Cadences:**
- **Perfect Authentic**: V → I (strongest)
- **Plagal**: IV → I ("Amen" cadence)
- **Half Cadence**: ends on V (open-ended)
- **Deceptive**: V → vi (unexpected resolution)

**Voice Leading Rules:**
- Move chord tones by smallest intervals possible
- Avoid parallel 5ths and octaves (classical)
- Resolve tendency tones (7th → 1, 4th → 3rd)
- Keep common tones between chords

**Modulation:**
- **Pivot chord**: Shared chord between two keys
- **Direct/Abrupt**: Jump to new key
- **Sequential**: Pattern moves through keys

**Common Mistakes:**
- Not understanding why progressions work (function)
- Ignoring voice leading (jumpy, disconnected)
- Overusing I-V-vi-IV without variation
- Forgetting that minor keys need harmonic minor for strong V
        `
      }
    ]
  },

  learningObjectives: [
    "Identify tonic, subdominant, and dominant function chords",
    "Use Roman numeral analysis on any progression",
    "Build strong cadences using functional harmony",
    "Apply common progressions to your compositions",
    "Understand voice leading between chords"
  ],

  mode: {
    type: "educational",
    sandbox: false,
    showContent: true,
    enableInteractive: true
  },

  practicalActivity: {
    minimumPracticeRequirement: "Capitolo Music Theory Fundamentals: almeno il 60% delle lezioni deve includere pratica guidata o challenge verificabile.",
    task: "Armonizza una progressione di 8 battute con funzioni T-S-D e numeri romani in una tonalità a scelta.",
    checklist: [
      "Completato il task pratico nel DAW/strumento o su notazione.",
      "Verificato il risultato con regole teoriche del capitolo.",
      "Annotati errori e correzioni in 2-3 righe."
    ],
    verificationChallenge: "Giustifica 3 sostituzioni funzionali mantenendo cadenza credibile e risoluzione coerente.",
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
