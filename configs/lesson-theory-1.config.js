import { buildHeroEyebrow } from '../lesson-engine.js';

export const lessonConfig = {
  lessonKey: "mpl-theory-1-progress",
  lessonNumber: 1,
  lessonCategory: "Music Theory Fundamentals",

  nextLessonUrl: "lesson-theory-2.html",
  prevLessonUrl: "labs.html",
  overviewUrl: "labs.html",

  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 1, categoryLabel: "Music Theory Fundamentals" }),
    title: "Intervals & Half Steps:",
    titleHighlight: "The Building Blocks of Music",
    subtitle: "Learn the building blocks of all music: intervals. Understand half steps, whole steps, and how to measure distance between notes."
  },

  exercise: {
    title: "Identify Intervals by Ear and Theory",
    description: "An interval is the distance between two notes. The smallest interval in Western music is a half step (semitone) — the distance from one piano key to the very next key (black or white). Two half steps equal a whole step (tone). Understanding intervals is essential for building scales, chords, and melodies.",
    tip: "On a piano, a half step is always the very next key — whether white to black, black to white, or in rare cases (E-F and B-C), white to white.",
    steps: [
      '<strong>Half Step (Semitone)</strong> — The smallest interval. Examples: C to C♯, E to F, B to C.',
      '<strong>Whole Step (Tone)</strong> — Two half steps. Examples: C to D, F to G, A to B.',
      '<strong>Interval Names</strong> — Intervals are numbered by counting letter names: C to D is a 2nd, C to E is a 3rd, C to G is a 5th.',
      '<strong>Interval Quality</strong> — Intervals can be major, minor, perfect, augmented, or diminished. Example: C to E (4 half steps) is a major 3rd; C to E♭ (3 half steps) is a minor 3rd.',
      '<strong>Practice</strong> — Play intervals on your MIDI keyboard and count the half steps. Train your ear to recognize the sound of each interval.'
    ]
  },

  theory: {
    sections: [
      {
        title: 'Understanding Intervals and Half Steps',
        content: `
**Key Concepts:**

**Half Steps (Semitones):**
- The smallest building block in Western music
- One piano key to the very next (including black keys)
- Examples: C→C♯, E→F, B→C
- 12 half steps = 1 octave

**Whole Steps (Tones):**
- Two half steps combined
- Skip one key on the piano
- Examples: C→D, F→G, A→B

**Interval Naming:**
- Count the letter names (inclusive): C-D-E = 3rd
- Add quality: major, minor, perfect, augmented, diminished
- Perfect intervals: unison, 4th, 5th, octave
- Major/minor intervals: 2nd, 3rd, 6th, 7th

**Common Intervals:**
- Minor 2nd: 1 half step (C-D♭)
- Major 2nd: 2 half steps (C-D)
- Minor 3rd: 3 half steps (C-E♭)
- Major 3rd: 4 half steps (C-E)
- Perfect 4th: 5 half steps (C-F)
- Perfect 5th: 7 half steps (C-G)
- Octave: 12 half steps (C-C)
        `
      },
      {
        title: 'Practical Application and Ear Training',
        content: `
**How to Practice:**

1. **Visual Recognition** — Use a piano keyboard (real or virtual) to see the distance between notes
2. **Counting Method** — Count half steps between any two notes to identify the interval
3. **Ear Training** — Play intervals and memorize their characteristic sound
4. **Song References** — Many songs start with recognizable intervals (e.g., "Here Comes the Bride" = Perfect 4th)

**Common Mistakes:**
- Forgetting that E-F and B-C are natural half steps (no black key between)
- Confusing interval number (distance) with interval quality (major/minor/perfect)
- Not accounting for accidentals (sharps/flats) when counting half steps

**Why This Matters:**
- Scales are built from specific interval patterns
- Chords are stacks of intervals (usually 3rds)
- Melody writing uses intervals to create movement and emotion
- Transposition requires understanding interval relationships
        `
      }
    ]
  },

  learningObjectives: [
    "Define half steps and whole steps",
    "Identify intervals by counting half steps",
    "Name intervals using both number and quality",
    "Recognize common intervals by ear",
    "Apply interval knowledge to scales and chords"
  ]
};
