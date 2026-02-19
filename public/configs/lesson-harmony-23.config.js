import { buildHeroEyebrow } from '../lesson-engine.js';

export const lessonConfig = {
  lessonKey: "mpl-harmony-23-progress",
  lessonNumber: 23,
  lessonCategory: "Harmony & Melody",

  nextLessonUrl: "lesson-harmony-24.html",
  prevLessonUrl: "lesson-harmony-22.html",
  overviewUrl: "labs.html",

  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 23, categoryLabel: "Harmony & Melody" }),
    title: "Chromatic Reharmonization:",
    titleHighlight: "Passing Chords & Mediants",
    subtitle: "Add chromatic passing chords, chromatic mediants, and augmented sixth chords. Create sophisticated harmonic movement."
  },

  exercise: {
    title: "Build Chromatic Chord Progressions",
    description: "Chromatic reharmonization adds chords outside the diatonic scale for color, tension, and smooth voice leading. Techniques include chromatic passing chords (chords that connect two diatonic chords), chromatic mediants (chords a third away), and augmented sixth chords (leading powerfully to dominants).",
    tip: "Chromatic passing chords often move by half step in the bass. Example: C-C#dim-Dm creates smooth chromatic ascent.",
    steps: [
      '<strong>Chromatic Passing Chord</strong> — Insert diminished or dominant chords between diatonic chords. C-C#dim7-Dm7 (I-#Idim7-ii7).',
      '<strong>Chromatic Mediant</strong> — Move to a major/minor chord a third away. C major to Ab major (bVI) or E major (III). Dramatic shift.',
      '<strong>Augmented Sixth Chord</strong> — Italian/French/German sixth chords that resolve to V. Ab-C-D-F# (Ger+6) resolves to G7 in C major.',
      '<strong>Chromatic Approach</strong> — Approach any chord from a half step above or below. Db7-C, B7-C, Ebm-Dm.',
      '<strong>Full progression</strong> — Try C-Ab-F-Db7-C for chromatic mediant journey with tritone sub.'
    ]
  },

  theory: {
    sections: [
      {
        title: 'Chromatic Reharmonization Techniques',
        content: `
**Chromatic Passing Chords:**

**Diminished Passing Chords:**
- Connect two diatonic chords a whole step apart
- Usually diminished 7th quality
- Example: C - C#dim7 - Dm (I - #Idim7 - ii)
- Bass moves chromatically: C → C# → D

**Common Uses:**
- I - #Idim7 - ii (C-C#dim7-Dm)
- ii - bIIIdim7 - iii (Dm-Ebdim7-Em)
- IV - #IVdim7 - V (F-F#dim7-G)
- V - bVIdim7 - vi (G-Abdim7-Am)

**Dominant Passing Chords:**
- Insert dominant 7th between diatonic chords
- Often creates secondary dominant effect
- Example: Dm7 - Eb7 - Em7 (chromatic approach)

**Chromatic Mediants:**

**Definition:**
Chords whose roots are a third apart but NOT diatonic to the key. Creates dramatic harmonic shift.

**Types:**
1. **Lower chromatic mediant**: Chord a minor 3rd below (C to Ab)
2. **Upper chromatic mediant**: Chord a major 3rd above (C to E major)
3. **Parallel chromatic mediant**: Same quality, third away (C major to A major)

**Examples in C Major:**
- **C to Ab major (bVI)**: Common in film music, epic feel
- **C to E major (III)**: Bright, surprising, used in prog rock
- **C to Eb major (bIII)**: Common borrowed chord from C minor
- **C to A major (VI)**: Dramatic shift, less common

**Voice Leading:**
- Often parallel motion (all voices move same direction)
- Creates sudden tonal shift, less smooth than diatonic
- Use for dramatic effect, not functional resolution

**Augmented Sixth Chords:**

**Three Types:**

**Italian Augmented Sixth (It+6):**
- In C major: Ab-C-F#
- Resolves to G (dominant)
- Interval: Augmented 6th (Ab to F#)

**French Augmented Sixth (Fr+6):**
- In C major: Ab-C-D-F#
- Adds a major 2nd above root
- Resolves to G7 (or I64 then V)

**German Augmented Sixth (Ger+6):**
- In C major: Ab-C-Eb-F#
- Most common type
- Resolves to G7 (via I64 to avoid parallel 5ths)

**Function:**
- Pre-dominant function (like IV or ii)
- Strong pull to V
- Contains augmented 6th interval (Ab-F#) that expands outward to octave (G-G)

**Usage:**
- Classical music: very common
- Jazz: less common, but used for color
- Film music: dramatic, tense moments
        `
      },
      {
        title: 'Advanced Chromatic Techniques',
        content: `
**Chromatic Voice Leading:**

**Linear Motion:**
- Each voice moves chromatically or by step
- Creates smooth but chromatic harmonies
- Example: C-B7-Bb7-Am (chromatic bass: C-B-Bb-A)

**Parallel Motion:**
- All voices move in same direction
- Creates thick, powerful sound
- Example: C major - Db major - D major (planing)
- Common in impressionist music (Debussy)

**Contrary Motion:**
- Bass moves opposite to upper voices
- Smoother than parallel motion
- Example: C (bass C) to Ab (bass Ab, upper voices descend)

**Common Chromatic Progressions:**

**Backdoor Progression:**
- iv-bVII7-I (in C: Fm-Bb7-C)
- Chromatic alternative to ii-V-I
- Jazz standard technique

**Coltrane Changes:**
- Rapid key changes by major thirds
- Example: C - Eb7 - Ab - B7 - E - G7 - C
- Very advanced, requires strong voice leading

**Line Cliché:**
- Chromatically moving inner voice while outer voices stay constant
- Example: C-Cmaj7-C7-C6 (inner voice: C-B-Bb-A)
- Common in jazz and standards ("My Funny Valentine")

**Tri-Tone Cycle:**
- Move by tritones (C-F#-C or C-Gb-C)
- Symmetrical, no clear tonal center
- Modern, experimental sound

**When to Use Chromatic Reharmonization:**

**Jazz:**
- Passing chords in standards
- Tritone subs and chromatic approaches
- Line clichés in ballads

**Classical:**
- Augmented sixth chords approaching cadences
- Chromatic passing tones and chords
- Modulation preparation

**Film Scores:**
- Chromatic mediants for scene changes
- Dramatic shifts (major to major a third away)
- Building tension with chromatic motion

**Prog Rock:**
- Chromatic mediants for epic feel
- Parallel major chord motion (planing)
- Unpredictable harmonic journeys

**Pop (Rare):**
- Occasional chromatic passing chord
- bVI borrowed from parallel minor
- Usually kept simple

**Common Mistakes:**
- Overusing chromatic chords (loses tonal center)
- Poor voice leading (awkward jumps between chromatic chords)
- No resolution (chromatic tension needs release)
- Using chromatic chords without understanding their function

**Practice Exercises:**
1. Add diminished passing chords between diatonic chords
2. Experiment with chromatic mediants (C to Ab, C to E major)
3. Build augmented sixth chords resolving to V
4. Create line clichés with chromatic inner voices
5. Reharmonize a standard with chromatic passing chords

**Pro Tip:**
Chromatic reharmonization works best when:
- Voice leading is smooth (half steps, common tones)
- There's a clear resolution point (return to diatonic harmony)
- Used sparingly for maximum impact
- Serves the melody (doesn't clash with melodic notes)

Think of chromatic harmony as "spice" - a little goes a long way!
        `
      }
    ]
  },

  learningObjectives: [
    "Add chromatic passing chords to smooth harmonic motion",
    "Use chromatic mediants for dramatic tonal shifts",
    "Build and resolve augmented sixth chords",
    "Apply chromatic voice leading techniques",
    "Balance chromatic and diatonic harmony effectively"
  ]

  mode: {
    sandbox: false,
    sequencerType: 'none'  // Theory-only lesson, no sequencer
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
