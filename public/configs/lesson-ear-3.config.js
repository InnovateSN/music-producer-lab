import { buildHeroEyebrow } from '../lesson-engine.js';

export const lessonConfig = {
  lessonKey: "mpl-ear-3-progress",
  lessonNumber: 3,
  lessonCategory: "Ear Training",


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

  nextLessonUrl: "lesson-ear-4.html",
  prevLessonUrl: "lesson-ear-2.html",
  overviewUrl: "labs.html",

  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 3, categoryLabel: "Ear Training" }),
    title: "Chord Quality:",
    titleHighlight: "Major, Minor, Dim, Aug",
    subtitle: "Distinguish between major, minor, diminished, and augmented triads by ear. Build the foundation for advanced chord recognition."
  },

  exercise: {
    title: "Identify Chord Quality by Ear",
    description: "Chord quality refers to the characteristic sound of a chord based on its interval structure. Major chords sound bright and happy. Minor chords sound dark and sad. Diminished chords sound tense and unstable. Augmented chords sound dreamy and unresolved. Training your ear to instantly recognize these qualities is essential for transcription and chord progression analysis.",
    tip: "Major = happy/bright. Minor = sad/dark. Diminished = tense/spooky. Augmented = weird/floating/unresolved.",
    steps: [
      '<strong>Major Triad</strong> — Root + M3 + P5. Bright, happy, stable. Example: C-E-G. Most common in pop music.',
      '<strong>Minor Triad</strong> — Root + m3 + P5. Dark, sad, emotional. Example: C-Eb-G. Very common in ballads.',
      '<strong>Diminished Triad</strong> — Root + m3 + dim5. Tense, spooky, unstable. Example: C-Eb-Gb. Wants to resolve.',
      '<strong>Augmented Triad</strong> — Root + M3 + aug5. Dreamy, floating, mysterious. Example: C-E-G#. Rare, used for color.',
      '<strong>Practice Method</strong> — Play chords randomly, guess the quality before checking. Start slow, increase speed as you improve.'
    ]
  },

  theory: {
    sections: [
      {
        title: 'Understanding Chord Quality',
        content: \`
**The Four Basic Triad Qualities:**

**Major Triad:**
- Structure: Root + Major 3rd (4 semitones) + Perfect 5th (7 semitones from root)
- Interval stack: M3 + m3
- Example: C major = C-E-G
- Sound: Happy, bright, stable, resolved
- Emotional: Joy, triumph, confidence
- Usage: Pop, rock, classical, most common chord type

**Minor Triad:**
- Structure: Root + minor 3rd (3 semitones) + Perfect 5th
- Interval stack: m3 + M3
- Example: C minor = C-Eb-G
- Sound: Sad, dark, melancholic
- Emotional: Sorrow, introspection, mystery
- Usage: Ballads, emotional sections, relative minor in progressions

**Diminished Triad:**
- Structure: Root + minor 3rd + diminished 5th (6 semitones from root)
- Interval stack: m3 + m3
- Example: C diminished = C-Eb-Gb
- Sound: Tense, unstable, spooky, ominous
- Emotional: Suspense, danger, unresolved tension
- Usage: Passing chords, horror scores, jazz (vii° chord)

**Augmented Triad:**
- Structure: Root + Major 3rd + augmented 5th (8 semitones from root)
- Interval stack: M3 + M3
- Example: C augmented = C-E-G#
- Sound: Dreamy, floating, mysterious, unresolved
- Emotional: Surreal, otherworldly, ambiguous
- Usage: Rare, jazz, impressionist music, film scores for weird scenes

**Key Interval Differences:**
- Major vs Minor: 3rd (M3 vs m3) - most obvious difference
- Minor vs Diminished: 5th (P5 vs dim5) - added tension
- Major vs Augmented: 5th (P5 vs aug5) - floating quality

**Recognition Strategy:**
1. First, determine if it sounds stable or unstable (major/minor = stable, dim/aug = unstable)
2. If stable, is it bright (major) or dark (minor)?
3. If unstable, is it tense/ominous (diminished) or dreamy/floating (augmented)?
        \`
      },
      {
        title: 'Practical Chord Quality Training',
        content: \`
**Training Exercises:**

**Exercise 1: Binary Comparison**
- Week 1: Major vs. Minor only
- Play random major/minor chords
- Goal: 95% accuracy before moving on
- This is the most important distinction

**Exercise 2: Add Diminished**
- Week 2: Major vs. Minor vs. Diminished
- Diminished is clearly unstable (helps distinguish it)
- Focus on the dim5 interval sound

**Exercise 3: Full Four-Way**
- Week 3+: All four qualities randomly
- Augmented is rare but important for jazz/film music
- Practice until automatic recognition

**Contextual Training:**
- Hear chords in progressions, not isolation
- Example: I-vi-IV-V in C major: C(maj)-Am(min)-F(maj)-G(maj)
- Example: i-VI-III-VII in A minor: Am(min)-F(maj)-C(maj)-G(maj)

**Advanced: Quality + Inversion**
- Root position: C-E-G (major)
- 1st inversion: E-G-C (major, but different bass)
- 2nd inversion: G-C-E (major, but different bass)
- Same quality, different voicing

**Transcription Application:**
1. Listen to a song
2. Identify root notes (bass line)
3. Determine chord quality (major/minor/dim/aug)
4. Write chord symbols (C, Am, Bdim, Faug)

**Common Mistakes:**
- Confusing inversions with different qualities
- Not listening to the 3rd (it defines major vs minor)
- Ignoring the 5th (it defines dim vs aug)
- Practicing too fast (accuracy > speed initially)

**Song Examples:**
- **Major chords**: Most pop choruses, happy songs
- **Minor chords**: "Stairway to Heaven" intro, "Losing My Religion"
- **Diminished chords**: "Somewhere Over the Rainbow" (F#dim), passing chords in jazz
- **Augmented chords**: Rare, but in "Oh! Darling" (Beatles), certain jazz standards

**DAW Practice:**
- Create 4 MIDI tracks with random triads
- Label them 1, 2, 3, 4
- Play in random order, identify quality
- Check MIDI notes to verify
        \`
      }
    ]
  },

  learningObjectives: [
    "Instantly distinguish major from minor triads by ear",
    "Identify diminished chords by their unstable, tense quality",
    "Recognize augmented chords by their floating, unresolved sound",
    "Apply chord quality recognition to song transcription",
    "Understand the emotional and functional differences between qualities"
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
