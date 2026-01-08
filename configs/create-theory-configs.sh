#!/bin/bash

# Lesson Theory 1: Intervals & Half Steps
cat > lesson-theory-1.config.js << 'EOF'
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
EOF

# Lesson Theory 2: Major & Minor Scales
cat > lesson-theory-2.config.js << 'EOF'
import { buildHeroEyebrow } from '../lesson-engine.js';

export const lessonConfig = {
  lessonKey: "mpl-theory-2-progress",
  lessonNumber: 2,
  lessonCategory: "Music Theory Fundamentals",

  nextLessonUrl: "lesson-theory-3.html",
  prevLessonUrl: "lesson-theory-1.html",
  overviewUrl: "labs.html",

  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 2, categoryLabel: "Music Theory Fundamentals" }),
    title: "Major & Minor Scales:",
    titleHighlight: "Construction from Intervals",
    subtitle: "Build major and minor scales from scratch using interval formulas. Understand the W-W-H-W-W-W-H pattern that creates every major scale."
  },

  exercise: {
    title: "Construct Major and Minor Scales",
    description: "A scale is a collection of notes arranged in ascending or descending order. The major scale is built using a specific pattern of whole steps (W) and half steps (H): W-W-H-W-W-W-H. Natural minor uses: W-H-W-W-H-W-W. These formulas work from any starting note to create all 12 major and minor scales.",
    tip: "The major scale formula W-W-H-W-W-W-H is the most important pattern in Western music. Memorize it completely.",
    steps: [
      '<strong>Start with any note</strong> — Choose your root note (e.g., C, D, F♯). This is scale degree 1.',
      '<strong>Apply the major scale formula</strong> — W-W-H-W-W-W-H. From C: C→(W)→D→(W)→E→(H)→F→(W)→G→(W)→A→(W)→B→(H)→C.',
      '<strong>Result: C Major Scale</strong> — C-D-E-F-G-A-B-C. No sharps or flats!',
      '<strong>Try another key</strong> — Build G major: G→(W)→A→(W)→B→(H)→C→(W)→D→(W)→E→(W)→F♯→(H)→G. One sharp: F♯.',
      '<strong>Natural Minor Formula</strong> — W-H-W-W-H-W-W. From A: A-B-C-D-E-F-G-A. This is A natural minor (relative to C major).'
    ]
  },

  theory: {
    sections: [
      {
        title: 'Major and Minor Scale Construction',
        content: `
**Major Scale Formula: W-W-H-W-W-W-H**

From any note, follow this pattern:
- C major: C-D-E-F-G-A-B-C (no accidentals)
- G major: G-A-B-C-D-E-F♯-G (one sharp: F♯)
- F major: F-G-A-B♭-C-D-E-F (one flat: B♭)

**Natural Minor Formula: W-H-W-W-H-W-W**

- A minor: A-B-C-D-E-F-G-A (relative to C major)
- E minor: E-F♯-G-A-B-C-D-E (relative to G major)
- D minor: D-E-F-G-A-B♭-C-D (relative to F major)

**Scale Degrees:**
1. Tonic (root)
2. Supertonic
3. Mediant
4. Subdominant
5. Dominant
6. Submediant
7. Leading tone (major) / Subtonic (minor)
8. Tonic (octave)

**Relative Major/Minor:**
Every major scale has a relative minor that shares the same notes, starting from the 6th degree:
- C major ↔ A minor (both have no sharps/flats)
- G major ↔ E minor (both have F♯)
        `
      },
      {
        title: 'Practical Scale Building Workflow',
        content: `
**Step-by-Step Construction:**

1. **Choose your root note** — Any of the 12 notes (C, C♯/D♭, D, etc.)
2. **Write out the formula** — W-W-H-W-W-W-H for major
3. **Apply intervals** — Count whole and half steps precisely
4. **Check your work** — Should have 7 different letter names (A-B-C-D-E-F-G)
5. **Add accidentals as needed** — Sharps or flats maintain the formula

**Common Mistakes:**
- Using the same letter name twice (e.g., D and D♯ in same scale)
- Missing a letter name (must use all 7: A through G)
- Forgetting E-F and B-C are natural half steps

**Why Scales Matter:**
- Chords are built from scale degrees (1-3-5, 2-4-6, etc.)
- Melodies use scale notes to stay "in key"
- Key signatures are derived from scale construction
- Modes are built by starting scales on different degrees
        `
      }
    ]
  },

  learningObjectives: [
    "Construct major scales using the W-W-H-W-W-W-H formula",
    "Build natural minor scales using the W-H-W-W-H-W-W formula",
    "Understand scale degrees and their functional names",
    "Identify relative major/minor relationships",
    "Apply scale construction to any root note"
  ]
};
EOF

# Lesson Theory 3: Note Names & Staff Reading
cat > lesson-theory-3.config.js << 'EOF'
import { buildHeroEyebrow } from '../lesson-engine.js';

export const lessonConfig = {
  lessonKey: "mpl-theory-3-progress",
  lessonNumber: 3,
  lessonCategory: "Music Theory Fundamentals",

  nextLessonUrl: "lesson-theory-4.html",
  prevLessonUrl: "lesson-theory-2.html",
  overviewUrl: "labs.html",

  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 3, categoryLabel: "Music Theory Fundamentals" }),
    title: "Note Names & Staff Reading:",
    titleHighlight: "Master Music Notation",
    subtitle: "Master note names on the treble and bass clef. Learn how to read and write music notation efficiently."
  },

  exercise: {
    title: "Read Notes on the Grand Staff",
    description: "The grand staff combines treble clef (right hand, higher notes) and bass clef (left hand, lower notes). Each line and space represents a specific pitch. Learning to read notation quickly is essential for communicating musical ideas and understanding written music.",
    tip: "Use mnemonics: Treble spaces spell FACE. Treble lines are Every Good Boy Does Fine (EGBDF).",
    steps: [
      '<strong>Treble Clef Lines</strong> — From bottom to top: E-G-B-D-F. Mnemonic: "Every Good Boy Does Fine."',
      '<strong>Treble Clef Spaces</strong> — From bottom to top: F-A-C-E. They spell "FACE"!',
      '<strong>Bass Clef Lines</strong> — From bottom to top: G-B-D-F-A. Mnemonic: "Good Boys Do Fine Always."',
      '<strong>Bass Clef Spaces</strong> — From bottom to top: A-C-E-G. Mnemonic: "All Cows Eat Grass."',
      '<strong>Ledger Lines</strong> — Notes above or below the staff use small extra lines. Middle C sits on a ledger line between both clefs.'
    ]
  },

  theory: {
    sections: [
      {
        title: 'Understanding Music Notation Basics',
        content: `
**The Grand Staff:**

**Treble Clef (G Clef):**
- Used for higher-pitched instruments (piano right hand, guitar, flute, violin)
- The curl wraps around the G line (second line from bottom)
- Lines: E-G-B-D-F
- Spaces: F-A-C-E

**Bass Clef (F Clef):**
- Used for lower-pitched instruments (piano left hand, bass guitar, trombone)
- The two dots surround the F line (second line from top)
- Lines: G-B-D-F-A
- Spaces: A-C-E-G

**Middle C:**
- The note between both clefs
- Sits on a ledger line
- MIDI note 60 / C4 in scientific pitch notation

**Ledger Lines:**
- Short lines above or below the staff for extended range
- Each line/space continues the alphabet pattern
- Can extend indefinitely in both directions

**Accidentals:**
- ♯ (Sharp) — Raises pitch by one half step
- ♭ (Flat) — Lowers pitch by one half step
- ♮ (Natural) — Cancels previous sharp or flat
- ♯♯ (Double sharp) / ♭♭ (Double flat) — Rare, but exist
        `
      },
      {
        title: 'Practical Staff Reading Strategy',
        content: `
**Learning Strategy:**

1. **Memorize landmark notes** — Middle C, treble G, bass F
2. **Use mnemonics** — FACE, EGBDF, All Cows Eat Grass
3. **Practice daily** — Flashcards or sight-reading apps
4. **Read intervals, not just notes** — Recognize patterns (steps, skips, leaps)
5. **Connect to your instrument** — Play notes as you read them

**Reading Tips:**
- Look ahead while playing (don't stare at one note)
- Recognize repeated patterns and sequences
- Group notes into chords and shapes
- Use finger numbers for efficient hand positioning

**Common Mistakes:**
- Confusing treble and bass clef note names
- Forgetting to apply accidentals throughout the measure
- Not counting ledger lines accurately
- Reading too slowly (not recognizing patterns)

**Why Notation Matters:**
- Universal language across instruments and cultures
- Preserves music for future generations
- Enables collaboration between musicians
- Required for formal music education and professional work
        `
      }
    ]
  },

  learningObjectives: [
    "Identify notes on treble and bass clef instantly",
    "Use ledger lines to read extended range notes",
    "Apply accidentals correctly within measures",
    "Read intervals and patterns, not just individual notes",
    "Connect notation to your instrument or DAW piano roll"
  ]
};
EOF

# Lesson Theory 4: The 7 Modes
cat > lesson-theory-4.config.js << 'EOF'
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
  ]
};
EOF

# Lesson Theory 5: Rhythm Notation
cat > lesson-theory-5.config.js << 'EOF'
import { buildHeroEyebrow } from '../lesson-engine.js';

export const lessonConfig = {
  lessonKey: "mpl-theory-5-progress",
  lessonNumber: 5,
  lessonCategory: "Music Theory Fundamentals",

  nextLessonUrl: "lesson-theory-6.html",
  prevLessonUrl: "lesson-theory-4.html",
  overviewUrl: "labs.html",

  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 5, categoryLabel: "Music Theory Fundamentals" }),
    title: "Rhythm Notation:",
    titleHighlight: "Time Signatures & Note Values",
    subtitle: "Learn to read and write rhythms. Master note values, rests, ties, dots, and how time signatures organize music."
  },

  exercise: {
    title: "Read and Program Rhythmic Patterns",
    description: "Rhythm notation tells us when to play notes and for how long. Note values (whole, half, quarter, eighth, sixteenth) divide time into precise durations. Time signatures (4/4, 3/4, 6/8) organize beats into measures. Understanding rhythm notation is essential for reading scores and programming accurate MIDI.",
    tip: "In 4/4 time: 1 whole note = 2 half notes = 4 quarter notes = 8 eighth notes = 16 sixteenth notes.",
    steps: [
      '<strong>Note Values</strong> — Whole note (4 beats), half note (2 beats), quarter note (1 beat), eighth note (0.5 beats), sixteenth note (0.25 beats).',
      '<strong>Rests</strong> — Silence for the same duration as their note counterparts. Whole rest, half rest, quarter rest, eighth rest, sixteenth rest.',
      '<strong>Dots</strong> — Add half the note\'s value. Dotted quarter = 1.5 beats. Dotted half = 3 beats.',
      '<strong>Ties</strong> — Connect two notes into one sustained duration. Quarter tied to quarter = half note.',
      '<strong>Time Signatures</strong> — Top number = beats per measure. Bottom number = note value per beat. 4/4 = 4 beats, quarter note gets the beat.'
    ]
  },

  theory: {
    sections: [
      {
        title: 'Understanding Rhythm Notation',
        content: `
**Note Values (in 4/4 time):**

- **Whole Note** (semibreve): 4 beats, open oval
- **Half Note** (minim): 2 beats, open oval with stem
- **Quarter Note** (crotchet): 1 beat, filled oval with stem
- **Eighth Note** (quaver): 0.5 beats, filled with flag or beam
- **Sixteenth Note** (semiquaver): 0.25 beats, two flags or beams
- **Thirty-second Note**: 0.125 beats, three flags (rare in electronic music)

**Rests (Silence):**
- Whole rest: hangs below line (4 beats)
- Half rest: sits on line (2 beats)
- Quarter rest: squiggle (1 beat)
- Eighth rest: flag shape (0.5 beats)
- Sixteenth rest: two flags (0.25 beats)

**Augmentation:**
- **Dot**: Adds 50% of note value. Quarter (1) + dot = 1.5 beats
- **Double Dot**: Adds 50% + 25% = 75% total
- **Tie**: Connects notes across barlines or for readability
- **Tuplets**: Divide beats irregularly (triplets, quintuplets)

**Time Signatures:**
- **4/4** (Common Time): 4 beats per measure, quarter note = 1 beat
- **3/4** (Waltz): 3 beats per measure
- **6/8**: 6 beats, eighth note = 1 beat (often felt as 2 groups of 3)
- **5/4**: 5 beats (odd meter, Pink Floyd, Dave Brubeck)
- **7/8**: 7 eighth notes (progressive rock, metal)
        `
      },
      {
        title: 'Practical Rhythm Reading and Programming',
        content: `
**Counting Systems:**

**4/4 Time:**
- Quarter notes: 1, 2, 3, 4
- Eighth notes: 1 &, 2 &, 3 &, 4 &
- Sixteenth notes: 1 e & a, 2 e & a, 3 e & a, 4 e & a

**Triplets:**
- Divide beat into 3 equal parts
- Count: 1-trip-let, 2-trip-let, 3-trip-let, 4-trip-let
- Creates "swing" feel in jazz, shuffle in blues

**Syncopation:**
- Emphasis on off-beats (the "&" or weak beats)
- Creates rhythmic tension and groove
- Common in funk, reggae, Latin music

**DAW / MIDI Translation:**
- Most DAWs use PPQ (Pulses Per Quarter note), typically 480 or 960
- Sixteenth notes are 1/16 of a bar in grid view
- Use quantization carefully — over-quantizing kills groove
- Swing/shuffle settings delay every other note slightly

**Common Mistakes:**
- Not counting subdivisions (eighths, sixteenths)
- Ignoring rests (silence is part of rhythm)
- Over-quantizing and losing human feel
- Not understanding compound time signatures (6/8, 9/8, 12/8)

**Practice Tips:**
- Use a metronome and count out loud
- Tap rhythms before playing them
- Transcribe rhythms from your favorite tracks
- Program complex rhythms in MIDI to understand their structure
        `
      }
    ]
  },

  learningObjectives: [
    "Read and write standard note values and rests",
    "Understand dots, ties, and triplets",
    "Count complex rhythms using proper subdivision",
    "Interpret time signatures and their implications",
    "Translate notation to MIDI programming in a DAW"
  ]
};
EOF

# Lesson Theory 6: Key Signatures & Circle of Fifths
cat > lesson-theory-6.config.js << 'EOF'
import { buildHeroEyebrow } from '../lesson-engine.js';

export const lessonConfig = {
  lessonKey: "mpl-theory-6-progress",
  lessonNumber: 6,
  lessonCategory: "Music Theory Fundamentals",

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
  ]
};
EOF

# Lesson Theory 7: Chord Construction
cat > lesson-theory-7.config.js << 'EOF'
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
  ]
};
EOF

# Lesson Theory 8: Functional Harmony
cat > lesson-theory-8.config.js << 'EOF'
import { buildHeroEyebrow } from '../lesson-engine.js';

export const lessonConfig = {
  lessonKey: "mpl-theory-8-progress",
  lessonNumber: 8,
  lessonCategory: "Music Theory Fundamentals",

  nextLessonUrl: "labs.html",
  prevLessonUrl: "lesson-theory-7.html",
  overviewUrl: "labs.html",

  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 8, categoryLabel: "Music Theory Fundamentals" }),
    title: "Functional Harmony:",
    titleHighlight: "Roman Numerals & Chord Function",
    subtitle: "Understand chord function: tonic, subdominant, dominant. Learn Roman numeral analysis and how chords create tension and resolution."
  },

  exercise: {
    title: "Analyze Chord Progressions with Roman Numerals",
    description: "Functional harmony describes how chords relate to the tonic (home chord). Chords have roles: tonic (stable, home), subdominant (moves away), dominant (creates tension, wants to resolve back to tonic). Roman numerals (I, ii, iii, IV, V, vi, vii°) show chord function independent of key.",
    tip: "The most important progression in Western music: I-IV-V-I. In C major: C-F-G-C. This is the foundation of pop, rock, blues, and classical music.",
    steps: [
      '<strong>Tonic Function (I, vi)</strong> — Home, stable, resolution. C major (I) or A minor (vi) in key of C.',
      '<strong>Subdominant Function (IV, ii)</strong> — Moves away from home, prepares tension. F major (IV) or D minor (ii) in key of C.',
      '<strong>Dominant Function (V, vii°)</strong> — Maximum tension, wants to resolve to I. G major (V) or B diminished (vii°) in key of C.',
      '<strong>Diatonic Chords in Major</strong> — I (major), ii (minor), iii (minor), IV (major), V (major), vi (minor), vii° (diminished).',
      '<strong>Common Progressions</strong> — I-V-vi-IV (pop), I-IV-V (blues), ii-V-I (jazz), I-vi-IV-V (50s progression).'
    ]
  },

  theory: {
    sections: [
      {
        title: 'Understanding Functional Harmony',
        content: `
**Chord Functions:**

**Tonic (T) — Home:**
- Chords: I, vi (iii less common)
- Function: Stability, resolution, "home base"
- Feeling: Rest, completion
- Usage: Start and end progressions here

**Subdominant (SD) — Departure:**
- Chords: IV, ii (vi can substitute)
- Function: Move away from tonic, prepare dominant
- Feeling: Gentle tension, movement
- Usage: Bridge between tonic and dominant

**Dominant (D) — Tension:**
- Chords: V, vii° (iii can substitute)
- Function: Strong pull back to tonic
- Feeling: Urgency, needs resolution
- Usage: Creates the most powerful cadences

**Diatonic Chords in C Major:**
- **I** - C major (tonic)
- **ii** - D minor (subdominant)
- **iii** - E minor (tonic substitute)
- **IV** - F major (subdominant)
- **V** - G major (dominant)
- **vi** - A minor (tonic substitute)
- **vii°** - B diminished (dominant function)

**Diatonic Chords in A Minor (Natural):**
- **i** - A minor (tonic)
- **ii°** - B diminished (subdominant)
- **III** - C major (tonic substitute)
- **iv** - D minor (subdominant)
- **v** - E minor (dominant — weak)
- **VI** - F major (subdominant substitute)
- **VII** - G major (subtonic)

*Note: Harmonic minor raises the 7th, making V major for stronger resolution*
        `
      },
      {
        title: 'Roman Numeral Analysis and Progressions',
        content: `
**Roman Numeral System:**

**Uppercase = Major chord:**
- I, IV, V in major keys
- III, VI, VII in minor keys

**Lowercase = Minor chord:**
- ii, iii, vi in major keys
- i, iv, v in minor keys

**° = Diminished:**
- vii° in major keys
- ii° in minor keys

**+ = Augmented:**
- Rare, usually altered chords

**Common Progressions:**

**I-IV-V-I** (Tonic-Subdominant-Dominant-Tonic)
- The "perfect authentic cadence"
- Foundation of blues, rock, country, pop
- C-F-G-C in key of C major

**I-V-vi-IV** ("Axis progression")
- Pop/rock standard (thousands of songs)
- C-G-Am-F in C major
- Creates loop that never fully resolves

**ii-V-I** (Jazz turnaround)
- Most important jazz progression
- Dm7-G7-Cmaj7 in C major
- Smooth voice leading, strong resolution

**I-vi-IV-V** (50s progression)
- Doo-wop, early rock
- C-Am-F-G in C major

**vi-IV-I-V** ("Sad pop progression")
- Am-F-C-G in C major
- Starts on relative minor for emotional impact

**Cadences:**
- **Perfect Authentic**: V → I (strongest)
- **Plagal**: IV → I ("Amen" cadence)
- **Half Cadence**: ends on V (open-ended)
- **Deceptive**: V → vi (unexpected resolution)

**Voice Leading Rules:**
- Move chord tones by smallest intervals possible
- Avoid parallel 5ths and octaves (classical)
- Resolve tendency tones (7th → 1, 4th → 3rd)
- Keep common tones between chords

**Modulation:**
- **Pivot chord**: Shared chord between two keys
- **Direct/Abrupt**: Jump to new key
- **Sequential**: Pattern moves through keys

**Common Mistakes:**
- Not understanding why progressions work (function)
- Ignoring voice leading (jumpy, disconnected)
- Overusing I-V-vi-IV without variation
- Forgetting that minor keys need harmonic minor for strong V
        `
      }
    ]
  },

  learningObjectives: [
    "Identify tonic, subdominant, and dominant function chords",
    "Use Roman numeral analysis on any progression",
    "Build strong cadences using functional harmony",
    "Apply common progressions to your compositions",
    "Understand voice leading between chords"
  ]
};
EOF

echo "All 8 Music Theory config files created successfully!"
