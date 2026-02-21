import { buildHeroEyebrow } from '../lesson-engine.js';

export const lessonConfig = {
  lessonKey: "mpl-harmony-24-progress",
  lessonNumber: 24,
  lessonCategory: "Harmony & Melody",

  progression: {
    difficulty: "expert",
    prerequisites: ["harmony-23","harmony-22"],
    outcomes: ["Completare gli obiettivi pratici di harmony-24","Consolidare competenze expert nel modulo harmony"]
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

  nextLessonUrl: "lesson-harmony-25.html",
  prevLessonUrl: "lesson-harmony-23.html",
  overviewUrl: "labs.html",

  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 24, categoryLabel: "Harmony & Melody" }),
    title: "Jazz Harmony:",
    titleHighlight: "Complex Extensions & Alterations",
    subtitle: "Master 9ths, 11ths, 13ths, alterations (b9, #9, #11, b13), and upper structure triads. Build professional jazz voicings."
  },

  exercise: {
    title: "Voice Complex Jazz Chords",
    description: "Jazz harmony extends basic triads and seventh chords with upper extensions (9, 11, 13) and alterations (b9, #9, #11, b13). These add color, tension, and sophistication. A Cmaj13 contains C-E-G-B-D-F-A (1-3-5-7-9-11-13), but voicings selectively omit notes for clarity.",
    tip: "Extensions stack in thirds: root-3rd-5th-7th-9th-11th-13th. Alterations modify these extensions for added tension.",
    steps: [
      '<strong>Cmaj9</strong> — C-E-G-B-D. Major 7th + major 9th. Lush, sophisticated tonic sound.',
      '<strong>Dm11</strong> — D-F-A-C-E-G. Minor 7th + 11th. Often omit 3rd (F) to avoid dissonance with 11th.',
      '<strong>G13</strong> — G-B-D-F-A-C-E. Dominant with all extensions. Typically voice as G-B-F-A-E (omit 5th, 11th).',
      '<strong>G7b9</strong> — G-B-D-F-Ab. Dominant with flat 9. Tense, bebop sound. Resolves strongly to Cmaj7.',
      '<strong>G7#11</strong> — G-B-D-F-A-C#. Lydian dominant. Bright, modern jazz sound.',
      '<strong>Practice</strong> — Play Dm11-G13b9-Cmaj9 to hear extended ii-V-I progression.'
    ]
  },

  theory: {
    sections: [
      {
        title: 'Jazz Extensions and Alterations',
        content: `
**Extended Chord Theory:**

**9th Chords:**
Add the 9th (2nd octave up) above the 7th:
- **Cmaj9**: C-E-G-B-D (major 7th + major 9th)
- **Cm9**: C-Eb-G-Bb-D (minor 7th + major 9th)
- **C9** (dominant): C-E-G-Bb-D (minor 7th + major 9th)

**11th Chords:**
Add the 11th (4th octave up) above the 9th:
- **Cmaj11**: C-E-G-B-D-F (often omit 3rd or 5th)
- **Cm11**: C-Eb-G-Bb-D-F (very common in jazz)
- **C11** (dominant): C-(E)-G-Bb-D-F (usually omit 3rd)

**Why omit the 3rd in 11th chords?**
The major 3rd (E) and perfect 11th (F) clash (minor 9th interval). Sounds dissonant. Either omit the 3rd or sharp the 11th (#11).

**13th Chords:**
Add the 13th (6th octave up) above the 11th:
- **Cmaj13**: C-E-G-B-D-F-A (full stack)
- **Cm13**: C-Eb-G-Bb-D-F-A (rare in practice)
- **C13** (dominant): C-E-G-Bb-D-(F)-A (common, often omit 11th)

**Practical Voicing:**
Full 13th chord = 7 notes. Piano/guitar can't play all comfortably. Typical voicing omits 5th and sometimes 11th:
- C13: C-E-Bb-D-A (root-3-7-9-13)

**Altered Dominant Chords:**

**b9 (Flat Nine):**
- Lowers the 9th by a half step
- C7b9: C-E-G-Bb-Db
- Sound: Tense, bebop, strong resolution
- Use: V7 in minor keys, bebop jazz

**#9 (Sharp Nine / "Hendrix Chord"):**
- Raises the 9th by a half step
- C7#9: C-E-G-Bb-D#
- Sound: Blues-rock, funky, Purple Haze
- Use: Blues, funk, R&B, Hendrix!

**#11 (Sharp Eleven / Lydian Dominant):**
- Raises the 11th by a half step (avoids 3rd clash)
- C7#11: C-E-G-Bb-D-F#
- Sound: Bright, modern jazz, lydian mode over dominant
- Use: Jazz standards, modern jazz, V7 substitute

**b13 (Flat Thirteen):**
- Lowers the 13th by a half step
- C7b13: C-E-G-Bb-D-F-Ab
- Sound: Dark, descending tension
- Use: Jazz, resolving to minor chords

**Altered Chord (alt):**
Contains BOTH b9 and #9, OR #9 and b13, etc.
- C7alt: C-E-G-Bb + any combo of b9, #9, #11, b13
- Maximum tension dominant
- Resolves powerfully to tonic

**Common Alterations:**
- **Dominant chords**: Can take ANY alteration
- **Major 7th chords**: Usually only #11 (Lydian)
- **Minor 7th chords**: Usually natural extensions, occasionally b13
        `
      },
      {
        title: 'Practical Jazz Voicing Techniques',
        content: `
**Voicing Principles:**

**1. Omit Strategically:**
- **5th**: Almost always safe to omit (doesn't define quality)
- **Root**: Bass player covers it, piano can omit
- **11th**: Omit on major/dominant chords (clashes with 3rd)

**2. Essential Tones:**
- **3rd**: Defines major vs minor
- **7th**: Defines chord quality (maj7, dom7, min7)
- **Alterations**: Define color (#9, b9, #11, etc.)

**3. Rootless Voicings:**
Piano/guitar often omit root, assume bass plays it:
- Cmaj9 voiced as E-B-D-G (3-7-9-5)
- Dm11 voiced as F-C-E-A (3-7-9-11, no root or 5th)

**4. Drop Voicings:**
- **Drop 2**: Lower 2nd highest note by octave
- **Drop 3**: Lower 3rd highest note by octave
- Creates spread-out, guitar-friendly voicings

**Upper Structure Triads:**

**Concept:**
Stack a major or minor triad on top of a 7th chord shell (root-3-7).

**Examples:**
- **G7 with D major triad on top**: G-B-F + D-F#-A = G7(9, #11, 13) - modern jazz sound
- **G7 with Eb major triad on top**: G-B-F + Eb-G-Bb = G7(b9, #9, b13) - altered sound
- **G7 with Ab major triad on top**: G-B-F + Ab-C-Eb = G7(b9, 11, b13)

**Benefit:**
- Easy to visualize (just play a triad in right hand)
- Creates instant extended/altered sound
- Common in modern jazz piano

**Standard Jazz Voicings:**

**ii-V-I in Cmaj:**

**Diatonic (Natural Extensions):**
- Dm11 - G13 - Cmaj9
- Voiced: D-F-A-C-E-G | G-B-F-A-E | C-E-B-D

**Altered:**
- Dm11 - G7alt - Cmaj9
- Voiced: D-F-A-C-E-G | G-B-F-Ab-Db | C-E-B-D-G

**With Upper Structures:**
- Dm11 - G7(with Ab triad) - Cmaj9
- Right hand plays Ab-C-Eb over G-B-F bass = G7b9, 11, b13

**So What Voicing (Quartal):**
Bill Evans popularized stacking 4ths instead of 3rds:
- Dm11: D-G-C-F-A-E (4ths stacked)
- Sound: Modern, modal, spacious
- Use: Modal jazz, modern jazz

**Genre Applications:**

**Bebop:**
- Heavy use of b9 on V7 chords
- Fast ii-V-I with extensions
- Example: Dm7 - G7b9 - Cmaj7

**Cool Jazz:**
- Natural extensions (9ths, 13ths)
- Maj7#11 chords (Lydian)
- Less altered, more consonant

**Hard Bop:**
- Mix of natural and altered extensions
- Blues influence (#9 on dominants)
- Example: Dm7 - G7#9 - Cmaj7

**Modern Jazz:**
- Heavy alterations (alt chords)
- Upper structure triads
- Quartal voicings

**R&B/Neo-Soul:**
- Extended major and minor chords (maj9, min9, min11)
- Occasional altered dominants
- Lush, rich harmony

**Common Mistakes:**
- Using maj7 instead of dominant 7 for extensions (Cmaj9 ≠ C9)
- Forgetting to omit the 5th or root (too many notes)
- Clash between 3rd and 11th (must omit one or sharp the 11th)
- Overusing alterations (loses tonal clarity)
- Not resolving altered dominants properly

**Practice Plan:**
1. Build all extension types on each chord quality (maj7, min7, dom7)
2. Voice ii-V-I with natural extensions, then with alterations
3. Learn upper structure triads over dominant 7ths
4. Transcribe voicings from Bill Evans, McCoy Tyner, Herbie Hancock
5. Apply extensions to standards ("Autumn Leaves", "All The Things You Are")

**Pro Tip:**
When improvising or composing, think in layers:
1. **Foundation**: Root-3-7 (defines chord)
2. **Color**: 9th (adds shimmer)
3. **Tension**: Alterations (b9, #9, #11, b13)
4. **Release**: Resolution to tonic (maj7, maj9)

Extensions are spices - use tastefully!
        `
      }
    ]
  },

  learningObjectives: [
    "Build 9th, 11th, and 13th chords on all qualities (maj7, min7, dom7)",
    "Apply alterations (b9, #9, #11, b13) to dominant chords",
    "Voice extended chords efficiently by omitting unnecessary notes",
    "Use upper structure triads for modern jazz sounds",
    "Understand the difference between natural extensions and alterations"
  ]

  mode: {
    sandbox: false,
    sequencerType: 'none'  // Theory-only lesson, no sequencer
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
