import { buildHeroEyebrow } from '../lesson-engine.js';

export const lessonConfig = {
  lessonKey: "mpl-theory-4-progress",
  lessonNumber: 4,
  lessonCategory: "Music Theory Fundamentals",

  nextLessonUrl: "lesson-theory-5.html",
  prevLessonUrl: "lesson-theory-3.html",
  overviewUrl: "labs.html",

  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 4, categoryLabel: "Music Theory Fundamentals" }),
    title: "The 7 Modes:",
    titleHighlight: "Complete Modal System",
    subtitle: "Master all 7 modes derived from the major scale: Ionian, Dorian, Phrygian, Lydian, Mixolydian, Aeolian, and Locrian. Understand their unique characteristics and applications."
  },

  exercise: {
    title: "Explore All 7 Modes from C",
    description: "Modes are scales created by starting on different degrees of the major scale. Each mode has a unique flavor and emotional character. From C major (C-D-E-F-G-A-B), we can derive 7 modes by starting on each note: C Ionian, D Dorian, E Phrygian, F Lydian, G Mixolydian, A Aeolian, B Locrian.",
    tip: "Think of modes as different 'moods' of the major scale. Lydian is bright, Phrygian is dark and exotic.",
    steps: [
      '<strong>C Ionian (Major)</strong> — C-D-E-F-G-A-B. The standard major scale. Bright and happy.',
      '<strong>D Dorian</strong> — D-E-F-G-A-B-C. Minor sound with raised 6th. Jazz and funk favorite.',
      '<strong>E Phrygian</strong> — E-F-G-A-B-C-D. Minor with flat 2nd. Spanish, flamenco, metal.',
      '<strong>F Lydian</strong> — F-G-A-B-C-D-E. Major with raised 4th. Dreamy, ethereal, film scores.',
      '<strong>G Mixolydian</strong> — G-A-B-C-D-E-F. Major with flat 7th. Blues, rock, pop.',
      '<strong>A Aeolian (Natural Minor)</strong> — A-B-C-D-E-F-G. Standard minor scale. Sad, melancholic.',
      '<strong>B Locrian</strong> — B-C-D-E-F-G-A. Diminished sound. Rare, unstable, theoretical.'
    ]
  },

  theory: {
    sections: [
      {
        title: 'Understanding the Modal System',
        content: `
**The 7 Modes (from C major):**

**1. Ionian (C-D-E-F-G-A-B)**
- Formula: W-W-H-W-W-W-H
- Character: Bright, stable, happy
- Same as major scale
- Use: Pop, classical, happy melodies

**2. Dorian (D-E-F-G-A-B-C)**
- Formula: W-H-W-W-W-H-W
- Character: Minor with brightness
- Raised 6th compared to natural minor
- Use: Jazz, funk, hip-hop

**3. Phrygian (E-F-G-A-B-C-D)**
- Formula: H-W-W-W-H-W-W
- Character: Dark, exotic, Spanish
- Flat 2nd is signature interval
- Use: Flamenco, metal, Middle Eastern

**4. Lydian (F-G-A-B-C-D-E)**
- Formula: W-W-W-H-W-W-H
- Character: Dreamy, floating, magical
- Raised 4th (#11) is signature
- Use: Film scores, prog rock, jazz

**5. Mixolydian (G-A-B-C-D-E-F)**
- Formula: W-W-H-W-W-H-W
- Character: Major with edge
- Flat 7th creates bluesy sound
- Use: Rock, blues, country

**6. Aeolian (A-B-C-D-E-F-G)**
- Formula: W-H-W-W-H-W-W
- Character: Sad, melancholic, minor
- Same as natural minor scale
- Use: Ballads, emotional music

**7. Locrian (B-C-D-E-F-G-A)**
- Formula: H-W-W-H-W-W-W
- Character: Unstable, diminished
- Flat 2nd and flat 5th
- Use: Theoretical, rare in practice
        `
      },
      {
        title: 'Practical Modal Application',
        content: `
**How to Use Modes:**

**Parallel Modes:**
Start all modes from the same root note (e.g., all from C):
- C Ionian: C-D-E-F-G-A-B
- C Dorian: C-D-E♭-F-G-A-B♭
- C Phrygian: C-D♭-E♭-F-G-A♭-B♭
- C Lydian: C-D-E-F♯-G-A-B
- C Mixolydian: C-D-E-F-G-A-B♭
- C Aeolian: C-D-E♭-F-G-A♭-B♭
- C Locrian: C-D♭-E♭-F-G♭-A♭-B♭

**Modal Interchange:**
- Borrow chords from parallel modes
- E.g., use iv minor chord in major key (borrowed from Aeolian)
- Creates color and emotional contrast

**Characteristic Notes:**
- Each mode has notes that define its sound
- Lydian: raised 4th (#11)
- Mixolydian: flat 7th
- Dorian: raised 6th
- Phrygian: flat 2nd

**Common Mistakes:**
- Confusing relative and parallel modes
- Not emphasizing characteristic notes
- Treating modes as just scales (they're harmonic contexts too)

**Genre Applications:**
- Jazz: Dorian, Mixolydian, Lydian
- Rock/Blues: Mixolydian, Dorian
- Metal: Phrygian, Locrian
- Film: Lydian, Phrygian
        `
      }
    ]
  },

  learningObjectives: [
    "Identify all 7 modes and their interval formulas",
    "Build parallel modes from any root note",
    "Recognize the characteristic note of each mode",
    "Apply modes to melody and chord progressions",
    "Understand modal interchange in composition"
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
