import { buildHeroEyebrow } from '../lesson-engine.js';

export const lessonConfig = {
  lessonKey: "mpl-theory-6-progress",
  lessonNumber: 6,
  lessonCategory: "Music Theory Fundamentals",

  progression: {
    difficulty: "beginner",
    prerequisites: ["theory-5"],
    outcomes: ["Completare gli obiettivi pratici di theory-6","Consolidare competenze beginner nel modulo theory"]
  },


  reviewMetadata: {
    lastReviewed: "2026-02-19",
    reviewVersion: "didactic-audit-v4",
    reviewedAgainst: ["AES", "Wikipedia", "Ableton"],
    sources: {
      wikipedia: [
        "https://en.wikipedia.org/wiki/Circle_of_fifths",
        "https://en.wikipedia.org/wiki/Key_signature",
      ],
      ableton: [
        "https://www.ableton.com/en/live-manual/",
      ],
      aes: [
        "https://aes2.org/publications/standards/",
      ]
    }
  },

  nextLessonUrl: "lesson-theory-7.html",
  prevLessonUrl: "lesson-theory-5.html",
  overviewUrl: "labs.html",

  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 6, categoryLabel: "Music Theory Fundamentals" }),
    title: "Key Signatures:",
    titleHighlight: "Circle of Fifths Mastery",
    subtitle: "Understand key signatures and how the circle of fifths organizes all 12 keys. Learn sharps, flats, and relative major/minor relationships."
  },

  exercise: {
    title: "Navigate the Circle of Fifths",
    description: "The circle of fifths is a visual map of all 12 keys arranged by their relationship of perfect fifths. Moving clockwise adds sharps; counterclockwise adds flats. Each major key has a relative minor (starting on the 6th degree) that shares the same key signature. This tool helps with transposition, chord progressions, and understanding key relationships.",
    tip: "The circle pattern: C → G → D → A → E → B → F♯/G♭ → D♭ → A♭ → E♭ → B♭ → F → C. Each step is a perfect fifth (7 semitones).",
    steps: [
      '<strong>Sharps Order</strong> — F♯, C♯, G♯, D♯, A♯, E♯, B♯. Mnemonic: "Father Charles Goes Down And Ends Battle."',
      '<strong>Flats Order</strong> — B♭, E♭, A♭, D♭, G♭, C♭, F♭. Reverse: "Battle Ends And Down Goes Charles\' Father."',
      '<strong>Major Keys with Sharps</strong> — G(1♯), D(2♯), A(3♯), E(4♯), B(5♯), F♯(6♯), C♯(7♯).',
      '<strong>Major Keys with Flats</strong> — F(1♭), B♭(2♭), E♭(3♭), A♭(4♭), D♭(5♭), G♭(6♭), C♭(7♭).',
      '<strong>Relative Minors</strong> — Each major key has a relative minor 3 semitones below. C major ↔ A minor, G major ↔ E minor, etc.'
    ]
  },

  theory: {
    sections: [
      {
        title: 'Understanding Key Signatures and the Circle of Fifths',
        content: `
**The Circle of Fifths:**

**Clockwise (Adding Sharps):**
C → G → D → A → E → B → F♯ (→ C♯)
- Each step is a perfect 5th interval up
- Adds one sharp each time
- Order of sharps: F♯-C♯-G♯-D♯-A♯-E♯-B♯

**Counterclockwise (Adding Flats):**
C → F → B♭ → E♭ → A♭ → D♭ → G♭ (→ C♭)
- Each step is a perfect 4th up (or 5th down)
- Adds one flat each time
- Order of flats: B♭-E♭-A♭-D♭-G♭-C♭-F♭

**Key Signatures:**
- **C Major / A minor**: No sharps or flats
- **G Major / E minor**: 1 sharp (F♯)
- **D Major / B minor**: 2 sharps (F♯, C♯)
- **A Major / F♯ minor**: 3 sharps
- **E Major / C♯ minor**: 4 sharps
- **F Major / D minor**: 1 flat (B♭)
- **B♭ Major / G minor**: 2 flats (B♭, E♭)
- **E♭ Major / C minor**: 3 flats

**Relative Major/Minor:**
Every major key has a relative minor that shares identical notes:
- Start on the 6th degree of the major scale
- C major → count up 6 notes → A minor
- Both have no sharps/flats

**Parallel Major/Minor:**
Same root note, different quality:
- C major vs C minor (different notes)
- C minor has 3 flats (B♭, E♭, A♭)
        `
      },
      {
        title: 'Practical Application of Key Signatures',
        content: `
**Why Key Signatures Matter:**

1. **Transposition** — Change key while maintaining relationships
2. **Chord Progressions** — Diatonic chords come from key signature
3. **Modulation** — Moving between related keys smoothly
4. **Instrument Compatibility** — Singers, guitarists, horn players have preferred keys

**How to Find Key from Signature:**

**Sharp Keys:**
- Last sharp in the signature is the 7th degree
- Go up one semitone = major key
- Example: 2 sharps (F♯, C♯) → last sharp is C♯ → up one = D major

**Flat Keys:**
- Second-to-last flat is the major key name
- Example: 3 flats (B♭, E♭, A♭) → second-to-last = E♭ major
- Exception: F major (only 1 flat, must memorize)

**Common Progressions:**
- I-IV-V-I moves through the circle: C-F-G-C (in C major)
- Jazz "Cycle of 5ths": Dm7-G7-CM7-FM7-Bb7-etc.
- Modulation to dominant (up a 5th) is smooth: C major → G major

**DAW Applications:**
- Most DAWs have key signature settings
- Scale highlighting in piano roll
- Transposition tools use circle of fifths logic
- Chord generators follow diatonic rules

**Common Mistakes:**
- Confusing relative and parallel major/minor
- Not learning sharp/flat order (leads to wrong key identification)
- Forgetting enharmonic equivalents (F♯ = G♭, C♯ = D♭)
- Ignoring circle of fifths when writing progressions
        `
      }
    ]
  },

  learningObjectives: [
    "Memorize the circle of fifths and its pattern",
    "Identify key signatures by counting sharps or flats",
    "Find relative minor/major keys instantly",
    "Use the circle for transposition and modulation",
    "Apply key signature knowledge to chord progressions"
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
