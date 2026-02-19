import { buildHeroEyebrow } from '../lesson-engine.js';

export const lessonConfig = {
  lessonKey: "mpl-harmony-27-progress",
  lessonNumber: 27,
  lessonCategory: "Harmony & Melody",

  nextLessonUrl: "lesson-harmony-28.html",
  prevLessonUrl: "lesson-harmony-26.html",
  overviewUrl: "labs.html",

  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 27, categoryLabel: "Harmony & Melody" }),
    title: "Counterpoint Basics:",
    titleHighlight: "Two-Voice Writing",
    subtitle: "Learn species counterpoint, voice leading rules, and how to write independent melodic lines that work together harmonically."
  },

  exercise: {
    title: "Write Two-Voice Counterpoint",
    description: "Counterpoint is the art of combining independent melodic lines that sound good together. Unlike chord-based harmony (vertical), counterpoint is linear (horizontal). Each voice has its own melodic integrity while creating pleasing harmony with other voices. Species counterpoint provides systematic rules for learning this craft.",
    tip: "Counterpoint rule #1: Contrary or oblique motion is preferred over parallel motion. Avoid parallel 5ths and octaves at all costs!",
    steps: [
      '<strong>Cantus Firmus</strong> — Fixed melody in whole notes: C-D-E-F-E-D-C. This is the foundation voice.',
      '<strong>First Species (1:1)</strong> — Add second voice, one note against each cantus note. Use contrary motion.',
      '<strong>Avoid parallel 5ths</strong> — If cantus goes C→D, and counterpoint goes G→A, that\'s parallel 5ths (forbidden!).',
      '<strong>Good intervals</strong> — Consonances: unison, 3rd, 5th, 6th, octave. Avoid 2nds, 7ths, 4ths (except as passing).',
      '<strong>Start and end on octave/unison</strong> — C-C at beginning, C-C at end. Creates stability.'
    ]
  },

  theory: {
    sections: [
      {
        title: 'Counterpoint Fundamentals',
        content: `
**What Is Counterpoint?**

Counterpoint ("point against point" or "note against note") is the technique of writing multiple independent melodic lines that create harmony together. Unlike vertical chord-based thinking, counterpoint emphasizes horizontal melodic motion.

**Key Principles:**

**1. Independence of Voices:**
- Each line should be melodically interesting on its own
- Avoid voices moving in same rhythm constantly
- Create contour: one rises while other falls

**2. Consonance vs. Dissonance:**
**Perfect Consonances:**
- Unison (C-C), Octave (C-C'), Perfect 5th (C-G)
- Very stable, but can sound empty if overused
- Must not approach/leave in parallel motion

**Imperfect Consonances:**
- Major/Minor 3rd (C-E, C-Eb)
- Major/Minor 6th (C-A, C-Ab)
- Pleasant, can move freely

**Dissonances:**
- 2nd (C-D), 7th (C-B)
- 4th (C-F) - treated as dissonance in two-voice counterpoint
- Tritone (C-F#)
- Require preparation and resolution

**3. Motion Types:**

**Contrary Motion (Best):**
- Voices move in opposite directions
- One ascends, other descends
- Creates independence, smooth voice leading

**Oblique Motion (Good):**
- One voice stays, other moves
- Creates stability with motion

**Parallel Motion (Restricted):**
- Voices move same direction, same interval
- Parallel 3rds/6ths: OK
- Parallel 5ths/octaves: FORBIDDEN

**Similar Motion (Use Carefully):**
- Same direction, different intervals
- Can lead to hidden 5ths/octaves (avoid)

**Species Counterpoint:**

**First Species (1:1):**
- One note against each cantus firmus note
- Only consonances allowed
- Must start/end on unison or octave
- Example:
  CF: C  - D  - E  - F  - E  - D  - C
  CP: E  - F  - G  - A  - G  - F  - E
  Int: 3rd-3rd-3rd-3rd-3rd-3rd-3rd

**Second Species (2:1):**
- Two notes against each cantus note
- First note (downbeat) = consonance
- Second note (upbeat) = can be dissonance (passing tone)
- Introduces rhythmic variety

**Third Species (4:1):**
- Four notes against each cantus note
- Allows more dissonances as passing/neighbor tones
- Creates flowing, ornamental line

**Fourth Species (Syncopation):**
- Tied notes creating suspensions
- Dissonance on strong beat (tied), resolves down on weak beat
- Creates expressive tension

**Fifth Species (Florid):**
- Combines all species freely
- Renaissance polyphony style
- Most expressive, most complex

**The "Rules" (First Species):**

**DO:**
- Start on unison or octave
- End on unison or octave
- Use contrary or oblique motion primarily
- Prefer imperfect consonances (3rds, 6ths)
- Create smooth melodic lines (mostly stepwise)

**DON'T:**
- Use parallel 5ths or octaves
- Use parallel 4ths
- Use direct/hidden 5ths or octaves
- Have voices cross
- Leap more than an octave
- Use augmented or diminished intervals
        `
      },
      {
        title: 'Practical Counterpoint Application',
        content: `
**Writing Two-Voice Counterpoint:**

**Step 1: Choose Cantus Firmus**
- Usually 8-12 notes, whole notes
- Stepwise motion mostly, few leaps
- Starts and ends on tonic
- Example: C-D-F-E-D-C-D-E-F-G-F-E-D-C

**Step 2: Sketch Outer Framework**
- First note: Unison or octave
- Last note: Unison or octave
- Penultimate: Leading tone relationship
- Example: Start C-C, End C-C

**Step 3: Fill Middle**
- Use contrary motion when possible
- Mix 3rds and 6ths (avoid too many same intervals)
- Avoid parallel 5ths/octaves
- Create smooth melodic line in counterpoint

**Step 4: Check Voice Leading**
- No parallel 5ths or octaves
- No direct 5ths or octaves
- Smooth melodic contour
- No voice crossing

**Common Contrapuntal Devices:**

**Imitation:**
- Second voice imitates first voice's melody
- Can be exact (canon) or free (fugue)
- Example: "Row Row Row Your Boat"

**Sequence:**
- Repeat melodic pattern at different pitch level
- Creates coherent melodic development
- Example: Bach sequences

**Inversion:**
- Flip the intervals (up becomes down)
- Melodic inversion: mirror image
- Harmonic inversion: swap voices

**Retrograde:**
- Play melody backwards
- Used in canons, serial music
- Example: crab canon

**Augmentation/Diminution:**
- Augmentation: slower (double note values)
- Diminution: faster (half note values)
- Creates rhythmic variation

**Genre Applications:**

**Baroque (Bach, Handel):**
- Strict species counterpoint
- Fugues, inventions, chorales
- Very rule-based, mathematical

**Classical (Mozart, Haydn):**
- Looser counterpoint
- Often in development sections
- Balance with homophonic texture

**Jazz (Modern):**
- Contrapuntal improvisation (multiple horn lines)
- Walking bass as countermelody
- Example: Contrapunctus by Vijay Iyer

**Film Music:**
- Leitmotif counterpoint (combine themes)
- Example: "Duel of the Fates" (John Williams)

**Electronic Music:**
- Layered synthesizer lines
- Arpeggios as counterpoint
- Example: Aphex Twin, Autechre

**Practical Exercises:**

**1. First Species:**
- Given CF: C-D-E-D-C
- Write counterpoint using only 3rds and 6ths
- Check for parallel 5ths/octaves

**2. Add Bass Line:**
- Given melody: E-F-G-F-E
- Write bass line in contrary motion
- Use roots and chord tones

**3. Two-Part Invention:**
- Write 8-bar piece with two independent voices
- Use imitation in first 2 bars
- Maintain good voice leading throughout

**4. Analyze Bach:**
- Transcribe Bach Two-Part Invention No. 1
- Identify motion types (contrary, oblique, parallel)
- Study how he avoids parallel 5ths

**Common Mistakes:**
- Parallel 5ths or octaves (most common error!)
- Too much parallel motion (sounds like chords, not counterpoint)
- Voice crossing (confusing, avoid)
- Unmelodic lines (too many leaps, awkward intervals)
- Ignoring rhythmic independence

**Pro Tip:**
Modern producers often ignore strict counterpoint rules, but the PRINCIPLES remain valuable:
- Independent melodic lines create interest
- Contrary motion prevents muddiness
- Smooth voice leading sounds professional

Apply loosely: Drums + bass + melody = three-voice counterpoint in modern production!
        `
      }
    ]
  },

  learningObjectives: [
    "Understand the principles of counterpoint (horizontal vs. vertical thinking)",
    "Write first species (1:1) counterpoint following strict rules",
    "Avoid parallel 5ths, octaves, and voice crossing",
    "Use contrary and oblique motion for independent voice leading",
    "Apply contrapuntal thinking to modern music production"
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
