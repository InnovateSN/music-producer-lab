import { buildHeroEyebrow } from '../lesson-engine.js';

export const lessonConfig = {
  lessonKey: "mpl-theory-7-progress",
  lessonNumber: 7,
  lessonCategory: "Music Theory Fundamentals",

  nextLessonUrl: "lesson-theory-8.html",
  prevLessonUrl: "lesson-theory-6.html",
  overviewUrl: "labs.html",

  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 7, categoryLabel: "Music Theory Fundamentals" }),
    title: "Chord Construction:",
    titleHighlight: "Triads to Extensions",
    subtitle: "Build chords from intervals: triads, seventh chords, extensions (9ths, 11ths, 13ths), and alterations. Master the theoretical foundation of harmony."
  },

  exercise: {
    title: "Build Chords from Intervals",
    description: "Chords are built by stacking intervals, usually thirds. A triad has 3 notes (root-3rd-5th). Seventh chords add another 3rd. Extensions (9, 11, 13) continue the stack. Understanding chord construction allows you to build any chord from scratch and analyze harmonic progressions.",
    tip: "Major triad = root + major 3rd (4 semitones) + perfect 5th (7 semitones from root). C major = C-E-G.",
    steps: [
      '<strong>Major Triad</strong> — Root + major 3rd + perfect 5th. Example: C-E-G (C major).',
      '<strong>Minor Triad</strong> — Root + minor 3rd + perfect 5th. Example: C-E♭-G (C minor).',
      '<strong>Diminished Triad</strong> — Root + minor 3rd + diminished 5th. Example: C-E♭-G♭ (C dim).',
      '<strong>Augmented Triad</strong> — Root + major 3rd + augmented 5th. Example: C-E-G♯ (C aug).',
      '<strong>Seventh Chords</strong> — Add another 3rd above the 5th. Cmaj7: C-E-G-B. C7 (dominant): C-E-G-B♭. Cm7: C-E♭-G-B♭. Cm7♭5 (half-diminished): C-E♭-G♭-B♭.',
      '<strong>Extensions</strong> — 9th (D), 11th (F), 13th (A) in C. Example: Cmaj9 = C-E-G-B-D.'
    ]
  },

  theory: {
    sections: [
      {
        title: 'Chord Construction from Intervals',
        content: `
**Triads (3-Note Chords):**

**Major Triad:**
- Formula: Root + M3 (4 semitones) + P5 (7 semitones)
- Intervals: major 3rd + minor 3rd
- Example: C-E-G
- Sound: Happy, stable, consonant

**Minor Triad:**
- Formula: Root + m3 (3 semitones) + P5
- Intervals: minor 3rd + major 3rd
- Example: C-E♭-G
- Sound: Sad, melancholic

**Diminished Triad:**
- Formula: Root + m3 + dim5 (6 semitones)
- Intervals: minor 3rd + minor 3rd
- Example: C-E♭-G♭
- Sound: Tense, unstable, leads to resolution

**Augmented Triad:**
- Formula: Root + M3 + aug5 (8 semitones)
- Intervals: major 3rd + major 3rd
- Example: C-E-G♯
- Sound: Dreamy, floating, unresolved

**Seventh Chords (4-Note Chords):**

**Major 7th (Maj7):**
- Major triad + major 7th (11 semitones)
- Example: Cmaj7 = C-E-G-B
- Sound: Lush, jazzy, sophisticated

**Dominant 7th (7):**
- Major triad + minor 7th (10 semitones)
- Example: C7 = C-E-G-B♭
- Sound: Blues, tension, wants to resolve

**Minor 7th (m7):**
- Minor triad + minor 7th
- Example: Cm7 = C-E♭-G-B♭
- Sound: Smooth, jazzy, mellow

**Half-Diminished (m7♭5):**
- Diminished triad + minor 7th
- Example: Cm7♭5 = C-E♭-G♭-B♭
- Sound: Jazz, ii chord in minor keys

**Diminished 7th (dim7):**
- Diminished triad + diminished 7th (9 semitones)
- Example: Cdim7 = C-E♭-G♭-B♭♭(A)
- Sound: Maximum tension, symmetrical
        `
      },
      {
        title: 'Extensions and Alterations',
        content: `
**Extended Chords:**

**9th Chords:**
- Add the 9th (2nd octave up) above the 7th
- Cmaj9: C-E-G-B-D
- C9 (dominant): C-E-G-B♭-D
- Cm9: C-E♭-G-B♭-D

**11th Chords:**
- Add 11th (4th octave up): F in C
- Often omit the 3rd to avoid dissonance
- Cm11: C-E♭-G-B♭-D-F
- C11: C-(E)-G-B♭-D-F

**13th Chords:**
- Add 13th (6th octave up): A in C
- Full stack: 1-3-5-7-9-11-13
- Often voiced selectively (omit 5th and 11th)
- Cmaj13: C-E-G-B-D-(F)-A

**Alterations:**
- **♭9**: Adds tension (C7♭9: C-E-G-B♭-D♭)
- **♯9**: "Hendrix chord" (C7♯9: C-E-G-B♭-D♯)
- **♭5 or ♯11**: Lydian sound (Cmaj7♯11: C-E-G-B-F♯)
- **♯5**: Augmented quality (C7♯5: C-E-G♯-B♭)

**Voicing Principles:**
- **Close voicing**: Notes within an octave
- **Open voicing**: Spread across multiple octaves
- **Drop 2/Drop 3**: Lower specific chord tones for smoother voice leading
- **Rootless voicings**: Omit root (bass plays it)

**Common Mistakes:**
- Stacking all notes literally (sounds muddy)
- Not understanding interval quality (major vs minor 3rd)
- Forgetting the 7th when building extended chords
- Ignoring voice leading when moving between chords

**Practical Applications:**
- Jazz: Heavy use of 7ths, 9ths, 11ths, 13ths
- Pop: Mostly triads with occasional 7ths
- R&B/Neo-Soul: Extended and altered chords
- Rock: Power chords (root-5th), triads, occasional 7ths
        `
      }
    ]
  },

  learningObjectives: [
    "Build all triad types from interval formulas",
    "Construct seventh chords by adding thirds",
    "Add extensions (9th, 11th, 13th) correctly",
    "Apply alterations (♭9, ♯9, ♯11, ♭5) for color",
    "Voice chords efficiently for different instruments"
  ],

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
