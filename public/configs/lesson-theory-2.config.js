import { buildHeroEyebrow } from '../lesson-engine.js';

export const lessonConfig = {
  lessonKey: "mpl-theory-2-progress",
  lessonNumber: 2,
  lessonCategory: "Music Theory Fundamentals",

  progression: {
    difficulty: "beginner",
    prerequisites: ["theory-1"],
    outcomes: ["Completare gli obiettivi pratici di theory-2","Consolidare competenze beginner nel modulo theory"]
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

  nextLessonUrl: "lesson-theory-3.html",
  prevLessonUrl: "lesson-theory-1.html",
  overviewUrl: "labs.html",

  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 2, categoryLabel: "Music Theory Fundamentals" }),
    title: "Major & Minor Scales:",
    titleHighlight: "Construction from Intervals",
    subtitle: "Build major and minor scales from scratch using interval formulas. Understand the W-W-H-W-W-W-H pattern that creates every major scale."
  },

  exercise: {
    title: "Construct Major and Minor Scales",
    description: "A scale is a collection of notes arranged in ascending or descending order. The major scale is built using a specific pattern of whole steps (W) and half steps (H): W-W-H-W-W-W-H. Natural minor uses: W-H-W-W-H-W-W. These formulas work from any starting note to create all 12 major and minor scales.",
    tip: "The major scale formula W-W-H-W-W-W-H is the most important pattern in Western music. Memorize it completely.",
    steps: [
      '<strong>Start with any note</strong> — Choose your root note (e.g., C, D, F♯). This is scale degree 1.',
      '<strong>Apply the major scale formula</strong> — W-W-H-W-W-W-H. From C: C→(W)→D→(W)→E→(H)→F→(W)→G→(W)→A→(W)→B→(H)→C.',
      '<strong>Result: C Major Scale</strong> — C-D-E-F-G-A-B-C. No sharps or flats!',
      '<strong>Try another key</strong> — Build G major: G→(W)→A→(W)→B→(H)→C→(W)→D→(W)→E→(W)→F♯→(H)→G. One sharp: F♯.',
      '<strong>Natural Minor Formula</strong> — W-H-W-W-H-W-W. From A: A-B-C-D-E-F-G-A. This is A natural minor (relative to C major).'
    ]
  },

  theory: {
    sections: [
      {
        title: 'Major and Minor Scale Construction',
        content: `
**Major Scale Formula: W-W-H-W-W-W-H**

From any note, follow this pattern:
- C major: C-D-E-F-G-A-B-C (no accidentals)
- G major: G-A-B-C-D-E-F♯-G (one sharp: F♯)
- F major: F-G-A-B♭-C-D-E-F (one flat: B♭)

**Natural Minor Formula: W-H-W-W-H-W-W**

- A minor: A-B-C-D-E-F-G-A (relative to C major)
- E minor: E-F♯-G-A-B-C-D-E (relative to G major)
- D minor: D-E-F-G-A-B♭-C-D (relative to F major)

**Scale Degrees:**
1. Tonic (root)
2. Supertonic
3. Mediant
4. Subdominant
5. Dominant
6. Submediant
7. Leading tone (major) / Subtonic (minor)
8. Tonic (octave)

**Relative Major/Minor:**
Every major scale has a relative minor that shares the same notes, starting from the 6th degree:
- C major ↔ A minor (both have no sharps/flats)
- G major ↔ E minor (both have F♯)
        `
      },
      {
        title: 'Practical Scale Building Workflow',
        content: `
**Step-by-Step Construction:**

1. **Choose your root note** — Any of the 12 notes (C, C♯/D♭, D, etc.)
2. **Write out the formula** — W-W-H-W-W-W-H for major
3. **Apply intervals** — Count whole and half steps precisely
4. **Check your work** — Should have 7 different letter names (A-B-C-D-E-F-G)
5. **Add accidentals as needed** — Sharps or flats maintain the formula

**Common Mistakes:**
- Using the same letter name twice (e.g., D and D♯ in same scale)
- Missing a letter name (must use all 7: A through G)
- Forgetting E-F and B-C are natural half steps

**Why Scales Matter:**
- Chords are built from scale degrees (1-3-5, 2-4-6, etc.)
- Melodies use scale notes to stay "in key"
- Key signatures are derived from scale construction
- Modes are built by starting scales on different degrees
        `
      }
    ]
  },

  learningObjectives: [
    "Construct major scales using the W-W-H-W-W-W-H formula",
    "Build natural minor scales using the W-H-W-W-H-W-W formula",
    "Understand scale degrees and their functional names",
    "Identify relative major/minor relationships",
    "Apply scale construction to any root note"
  ],

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
