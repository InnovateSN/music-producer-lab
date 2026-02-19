import { buildHeroEyebrow } from '../lesson-engine.js';

export const lessonConfig = {
  lessonKey: "mpl-ear-2-progress",
  lessonNumber: 2,
  lessonCategory: "Ear Training",


  reviewMetadata: {
    lastReviewed: "2026-02-19",
    reviewVersion: "didactic-audit-v4",
    reviewedAgainst: ["AES", "Wikipedia", "Ableton"],
    sources: {
      wikipedia: [
        "https://en.wikipedia.org/wiki/Consonance_and_dissonance",
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

  nextLessonUrl: "lesson-ear-3.html",
  prevLessonUrl: "lesson-ear-1.html",
  overviewUrl: "labs.html",

  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 2, categoryLabel: "Ear Training" }),
    title: "Interval Recognition:",
    titleHighlight: "Harmonic Intervals",
    subtitle: "Identify intervals played simultaneously. Essential for understanding chord voicings and harmonic structure."
  },

  exercise: {
    title: "Identify Harmonic Intervals by Ear",
    description: "Harmonic intervals are two notes played at the same time (simultaneously). Unlike melodic intervals where you hear notes in sequence, harmonic intervals create a single blended sound that can be consonant (pleasant) or dissonant (tense). This skill is critical for understanding chord voicings, mixing harmonies, and analyzing chord progressions.",
    tip: "Consonant intervals (3rds, 5ths, 6ths, octaves) sound stable and pleasant. Dissonant intervals (2nds, 7ths, tritones) sound tense and want to resolve.",
    steps: [
      '<strong>Perfect Unison & Octave</strong> — Same note or 12 semitones apart. Sounds like a single, reinforced pitch. Very consonant.',
      '<strong>Perfect 5th</strong> — Empty, open, hollow sound. Used in power chords (rock, metal). Very consonant.',
      '<strong>Major 3rd</strong> — Bright, happy, full. Foundation of major chords. Consonant.',
      '<strong>Minor 3rd</strong> — Dark, sad, rich. Foundation of minor chords. Consonant.',
      '<strong>Major 2nd</strong> — Slightly tense, needs resolution. Cluster sound. Mildly dissonant.',
      '<strong>Minor 2nd</strong> — Very tense, harsh, crunchy. Maximum dissonance. Wants to resolve immediately.',
      '<strong>Tritone</strong> — "Devil\'s interval". Ambiguous, unsettling. Very dissonant.'
    ]
  },

  theory: {
    sections: [
      {
        title: 'Understanding Harmonic Interval Recognition',
        content: \`
**Consonance vs. Dissonance:**

**Perfect Consonances (Most Stable):**
- **Unison**: Same pitch. No tension.
- **Octave (P8)**: Same note, different register. Reinforces fundamental.
- **Perfect 5th (P5)**: Power chord sound. Open, hollow, strong. C-G.

**Imperfect Consonances (Pleasant, Stable):**
- **Major 3rd (M3)**: Bright, happy. C-E. Major chord basis.
- **Minor 3rd (m3)**: Sad, rich. C-Eb. Minor chord basis.
- **Major 6th (M6)**: Sweet, open. C-A.
- **Minor 6th (m6)**: Melancholic but stable. C-Ab.

**Dissonances (Tense, Unstable):**
- **Major 2nd (M2)**: Cluster sound. C-D. Needs resolution.
- **Minor 2nd (m2)**: Very harsh. C-Db. Maximum tension.
- **Major 7th (M7)**: Jazzy tension. C-B. Wants to resolve to octave.
- **Minor 7th (m7)**: Blues/jazz color. C-Bb. Mild tension.
- **Tritone (Aug4/Dim5)**: Devil's interval. C-F#. Ambiguous, unstable.

**Perfect 4th (P4):**
- Depends on context
- Consonant in melodic use
- Can sound dissonant harmonically (wants to resolve)
- C-F sounds more stable than F-C (inverted)

**How Harmonic Intervals Differ from Melodic:**
- Melodic: You remember first note, compare to second
- Harmonic: Both notes fuse into a single timbre
- Harmonic intervals have a "color" or "texture"
- Beating/roughness occurs when frequencies clash (m2, M2, tritone)
        \`
      },
      {
        title: 'Practical Harmonic Interval Training',
        content: \`
**Training Strategy:**

**Phase 1: Consonance Categories**
1. Learn to distinguish perfect consonances (unison, 5th, octave)
2. Add imperfect consonances (3rds, 6ths)
3. Recognize dissonances (2nds, 7ths, tritone)

**Phase 2: Quality Distinction**
- Major vs. Minor 3rds (bright vs. dark)
- Major vs. Minor 6ths (open vs. closed)
- Major vs. Minor 2nds/7ths (extremely harsh vs. harsh)

**Phase 3: Context Application**
- Identify intervals within chord voicings
- Analyze double-stops (guitar, strings)
- Recognize intervals in vocal harmonies

**Listening Exercises:**

**Exercise 1: Consonance Spectrum**
Play intervals in this order and rate them from most to least consonant:
- Octave → P5 → M3 → M6 → m3 → m6 → P4 → M2 → m7 → M7 → m2 → Tritone

**Exercise 2: Chord Deconstruction**
1. Play a major chord (C-E-G)
2. Isolate each interval: C-E (M3), E-G (m3), C-G (P5)
3. Repeat with minor chords, 7th chords

**Exercise 3: Interval Mixing**
Use your DAW to layer two notes:
- P5: Clean, open, no beating
- m2: Harsh, beating, frequency clash
- M3: Warm, full, stable

**Common Mistakes:**
- Confusing harmonic with melodic intervals (different skill)
- Not paying attention to register (intervals sound different in bass vs. treble)
- Ignoring timbre (intervals sound different on piano vs. synth vs. guitar)
- Forgetting inversions (P5 up vs. P4 down)

**Pro Applications:**
- **Mixing**: Identify harsh intervals causing frequency masking
- **Chord Voicing**: Choose intervals that blend well
- **Sound Design**: Layer oscillators at consonant intervals (P5, octave)
- **Harmony Writing**: Avoid parallel dissonances, use consonant voice leading
        \`
      }
    ]
  },

  learningObjectives: [
    "Distinguish between consonant and dissonant harmonic intervals",
    "Identify all common harmonic intervals by their blend/color",
    "Understand how intervals create tension and resolution",
    "Apply interval recognition to chord voicing analysis",
    "Use harmonic interval knowledge in mixing and arrangement"
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
