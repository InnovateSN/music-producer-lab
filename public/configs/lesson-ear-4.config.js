import { buildHeroEyebrow } from '../lesson-engine.js';

export const lessonConfig = {
  lessonKey: "mpl-ear-4-progress",
  lessonNumber: 4,
  lessonCategory: "Ear Training",

  nextLessonUrl: "lesson-ear-5.html",
  prevLessonUrl: "lesson-ear-3.html",
  overviewUrl: "labs.html",

  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 4, categoryLabel: "Ear Training" }),
    title: "Scale & Mode Recognition:",
    titleHighlight: "Major, Minor, and Modal Sounds",
    subtitle: "Identify scales and modes by their characteristic sound. Recognize major, minor, and modal patterns in music."
  },

  exercise: {
    title: "Identify Scales and Modes by Ear",
    description: "Every scale and mode has a unique sonic fingerprint based on its interval pattern. Major scales sound bright and happy. Natural minor sounds dark and sad. Each of the 7 modes (Ionian, Dorian, Phrygian, Lydian, Mixolydian, Aeolian, Locrian) has characteristic notes that define its color. Training your ear to recognize these patterns helps you identify the key and mood of any song instantly.",
    tip: "Focus on the 'characteristic note' of each mode. Dorian has a raised 6th, Phrygian has a flat 2nd, Lydian has a raised 4th, Mixolydian has a flat 7th.",
    steps: [
      '<strong>Major (Ionian)</strong> — W-W-H-W-W-W-H pattern. Sounds bright, happy, stable. C major: C-D-E-F-G-A-B.',
      '<strong>Natural Minor (Aeolian)</strong> — W-H-W-W-H-W-W pattern. Sounds dark, sad, melancholic. A minor: A-B-C-D-E-F-G.',
      '<strong>Dorian</strong> — Like minor but with raised 6th. Sounds jazzy, funky, bright minor. D Dorian: D-E-F-G-A-B-C.',
      '<strong>Phrygian</strong> — Like minor but with flat 2nd. Sounds Spanish, exotic, dark. E Phrygian: E-F-G-A-B-C-D.',
      '<strong>Lydian</strong> — Like major but with raised 4th (#11). Sounds dreamy, floating, ethereal. F Lydian: F-G-A-B-C-D-E.',
      '<strong>Mixolydian</strong> — Like major but with flat 7th. Sounds bluesy, rocky, dominant. G Mixolydian: G-A-B-C-D-E-F.'
    ]
  },

  theory: {
    sections: [
      {
        title: 'Understanding Scale and Mode Recognition',
        content: \`
**Major vs. Minor: The Foundation**

**Major Scale (Ionian):**
- Formula: W-W-H-W-W-W-H
- Sound: Bright, happy, stable, resolved
- Characteristic: Natural 3rd, natural 7th (leading tone)
- Usage: Most pop, rock, classical, happy music

**Natural Minor (Aeolian):**
- Formula: W-H-W-W-H-W-W
- Sound: Dark, sad, melancholic
- Characteristic: Flat 3rd, flat 6th, flat 7th
- Usage: Ballads, emotional music, metal

**The 7 Modes (from C major parent scale):**

**Bright Modes (Major-ish):**
1. **Ionian (C major)**: C-D-E-F-G-A-B
   - Standard major scale
   - Most stable, brightest

2. **Lydian (F)**: F-G-A-B-C-D-E
   - Major with raised 4th (#11)
   - Characteristic note: B (the #4)
   - Sound: Dreamy, floating, film scores
   - Example: "The Simpsons" theme

3. **Mixolydian (G)**: G-A-B-C-D-E-F
   - Major with flat 7th
   - Characteristic note: F (the b7)
   - Sound: Bluesy, rock, dominant function
   - Example: "Norwegian Wood", "Sweet Home Alabama"

**Dark Modes (Minor-ish):**
4. **Aeolian (A minor)**: A-B-C-D-E-F-G
   - Standard natural minor scale
   - Most stable minor sound

5. **Dorian (D)**: D-E-F-G-A-B-C
   - Minor with raised 6th
   - Characteristic note: B (the natural 6)
   - Sound: Jazzy, funky, brighter minor
   - Example: "So What" (Miles Davis), "Scarborough Fair"

6. **Phrygian (E)**: E-F-G-A-B-C-D
   - Minor with flat 2nd
   - Characteristic note: F (the b2)
   - Sound: Spanish, flamenco, exotic, dark
   - Example: "White Rabbit" (Jefferson Airplane), metal

**Unstable Modes:**
7. **Locrian (B)**: B-C-D-E-F-G-A
   - Diminished sound (b5)
   - Very unstable, rarely used
   - Theoretical more than practical
        \`
      },
      {
        title: 'Practical Scale and Mode Training',
        content: \`
**Training Progression:**

**Phase 1: Major vs. Minor (Weeks 1-2)**
- Only distinguish between major (Ionian) and minor (Aeolian)
- 95% accuracy required before moving on
- Listen to pop songs, identify if major or minor key

**Phase 2: Add Dorian, Mixolydian (Weeks 3-4)**
- Most common modes after Ionian/Aeolian
- Dorian: funky, jazzy minor feel
- Mixolydian: blues-rock major feel
- Listen to: "So What" (Dorian), "Sweet Home Alabama" (Mixolydian)

**Phase 3: Add Phrygian, Lydian (Weeks 5-6)**
- Phrygian: Spanish/exotic feel, metal
- Lydian: dreamy, film score feel
- Listen to: "White Rabbit" (Phrygian), "The Simpsons" theme (Lydian)

**Phase 4: Context and Modulation**
- Identify modes in progressions (not just single scales)
- Detect when songs shift between modes
- Example: verse in minor, chorus in major

**Recognition Strategy:**

**Step 1: Major or Minor Family?**
- Listen to the 3rd scale degree
- If bright/happy → Major family (Ionian, Lydian, Mixolydian)
- If dark/sad → Minor family (Aeolian, Dorian, Phrygian)

**Step 2: Characteristic Note**
- **Lydian**: Raised 4th stands out (dreamy quality)
- **Mixolydian**: Flat 7th creates bluesy sound
- **Dorian**: Raised 6th brightens the minor
- **Phrygian**: Flat 2nd creates exotic flavor

**Step 3: Emotional Context**
- Lydian: Magical, floating, otherworldly
- Mixolydian: Earthy, bluesy, dominant
- Dorian: Sophisticated, jazzy, funky
- Phrygian: Dark, exotic, Spanish

**Common Mistakes:**
- Confusing Dorian with Aeolian (listen for the 6th!)
- Confusing Mixolydian with Ionian (listen for the 7th!)
- Not using reference songs (memorize modal song examples)
- Practicing modes in isolation (they work best in context)

**Song Examples by Mode:**
- **Ionian**: Most pop songs ("Let It Be", "Don't Stop Believin'")
- **Dorian**: "So What", "Scarborough Fair", "Mad World"
- **Phrygian**: "White Rabbit", "Wherever I May Roam", flamenco
- **Lydian**: "Dreams" (Fleetwood Mac), "The Simpsons" theme
- **Mixolydian**: "Sweet Home Alabama", "Norwegian Wood", "Hey Jude" (end)
- **Aeolian**: "Losing My Religion", "Stairway to Heaven" intro

**DAW Practice:**
1. Create a MIDI loop playing a mode
2. Emphasize characteristic notes
3. Randomize modes, identify them
4. Compare two modes side-by-side (e.g., Dorian vs. Aeolian)
        \`
      }
    ]
  },

  learningObjectives: [
    "Instantly distinguish major from minor scales by ear",
    "Identify the characteristic sound of each mode",
    "Recognize Dorian, Mixolydian, Phrygian, and Lydian in music",
    "Use characteristic notes to pinpoint modal identity",
    "Apply modal recognition to song analysis and production"
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
