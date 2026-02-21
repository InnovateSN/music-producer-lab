import { buildHeroEyebrow } from '../lesson-engine.js';

export const lessonConfig = {
  lessonKey: "mpl-harmony-26-progress",
  lessonNumber: 26,
  lessonCategory: "Harmony & Melody",

  progression: {
    difficulty: "expert",
    prerequisites: ["harmony-25","harmony-24"],
    outcomes: ["Completare gli obiettivi pratici di harmony-26","Consolidare competenze expert nel modulo harmony"]
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

  nextLessonUrl: "lesson-harmony-27.html",
  prevLessonUrl: "lesson-harmony-25.html",
  overviewUrl: "labs.html",

  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 26, categoryLabel: "Harmony & Melody" }),
    title: "Funk & Soul Harmony:",
    titleHighlight: "Groovy Sophisticated Chords",
    subtitle: "Master funk chord voicings, slash chords, sus chords, and R&B progressions. Create groovy, sophisticated harmony."
  },

  exercise: {
    title: "Build Funk/Soul Chord Progressions",
    description: "Funk and soul use extended chords (9ths, 11ths), sus chords, and slash chords to create rhythmic, groove-oriented harmony. Emphasis is on 16th-note stabs, syncopation, and rich voicings. Common progressions use ii-V-I with extensions, modal vamps, and chromatic movement.",
    tip: "Funk chords are rhythmic instruments. Play them on the AND of beats for maximum groove. Sus chords create tension without major/minor commitment.",
    steps: [
      '<strong>Dm9 voicing</strong> — D-F-A-C-E. Stack 9th on top for lush minor sound. Funk staple.',
      '<strong>G7sus4</strong> — G-C-D-F. Replace 3rd (B) with 4th (C). Creates unresolved tension, groovy.',
      '<strong>C/E (slash chord)</strong> — C major triad with E in bass. Creates smooth bass line, modern sound.',
      '<strong>Funk progression</strong> — Dm9-G7sus4-G7-Cmaj9. Play on 16th notes with ghost note rhythm.',
      '<strong>Modal vamp</strong> — Repeat Dm11 for 8 bars (Dorian mode). Let groove breathe, add melody on top.'
    ]
  },

  theory: {
    sections: [
      {
        title: 'Funk & Soul Chord Theory',
        content: `
**Key Chord Types:**

**Extended Minor Chords:**
- **Dm9**: D-F-A-C-E (1-b3-5-b7-9)
- **Dm11**: D-F-A-C-E-G (adds 11th)
- Usage: Tonic or ii chords in funk
- Sound: Rich, sophisticated, mellow

**Sus Chords:**
- **Gsus4**: G-C-D (1-4-5, no 3rd)
- **G7sus4**: G-C-D-F (adds b7)
- **G9sus4**: G-C-D-F-A (adds 9th)
- Function: Replaces 3rd with 4th, unresolved
- Sound: Open, floating, tense
- Resolution: Usually resolves to major/minor (sus4 → 3)

**Slash Chords:**
- **C/E**: C major triad, E in bass
- **Dm7/G**: Dm7 chord, G in bass (creates G9sus sound)
- **F/G**: F major over G (Gsus9 sound)
- Function: Smooth bass lines, modern harmony
- Sound: Contemporary, polychord feel

**Dominant Chords with Extensions:**
- **G13**: G-B-F-A-E (omit 5th, 11th)
- **G7#9** ("Hendrix chord"): G-B-F-D# (Purple Haze)
- **G7b9**: G-B-F-Ab (bebop, tense)
- Function: V7 with color
- Sound: Funky, bluesy, sophisticated

**Modal Harmony:**
**Dorian Vamps:**
- Repeat Dm7 or Dm9 for extended sections
- Use D Dorian scale (D-E-F-G-A-B-C)
- Example: "So What" (Miles Davis)

**Mixolydian Grooves:**
- Repeat G7 or G9
- Use G Mixolydian scale (G-A-B-C-D-E-F)
- Example: "Superstition" (Stevie Wonder)
        `
      },
      {
        title: 'Funk & Soul Progressions and Techniques',
        content: `
**Common Funk Progressions:**

**ii-V-I Funk:**
- Dm9 - G13 - Cmaj9
- Play with 16th-note rhythm, ghost notes
- Example: Tower of Power style

**Modal Funk (One-Chord):**
- Dm11 (vamp for 8-16 bars)
- Em11 (Phrygian funk)
- Minimal harmony, maximum groove
- Example: "Chameleon" (Herbie Hancock)

**Chromatic Funk:**
- Dm9 - Ebm9 - Em9 - F#m9
- Chromatic chord slides
- Example: "Pick Up the Pieces" (AWB)

**Soul Progression (I-vi-ii-V):**
- Cmaj9 - Am9 - Dm9 - G13
- Extended version of doo-wop changes
- Example: Motown, Stax Records

**Gospel Changes:**
- I - IV/vi - ii - V (C - F/A - Dm7 - G7)
- Heavy use of slash chords
- Example: Kirk Franklin, Aretha Franklin

**Rhythm and Voicing Techniques:**

**16th-Note Stabs:**
- Play chords on AND of beats
- Creates syncopated, funky feel
- Example: "Brick House", "Le Freak"

**Ghost Notes:**
- Muted chords between main hits
- Adds percussive element
- Essential for funk guitar

**Chord Hits on "One":**
- Accent beat 1 heavily, then ghost notes
- Creates rhythmic anchor
- Example: James Brown, Parliament

**Open Voicings:**
- Spread chord across 2+ octaves
- Use slash chords for smooth bass
- Example: C/E - F/A - G/B (triads over bass)

**Right-Hand Voicings (Piano/Keys):**
- Play 3-7-9 in right hand, root in left
- Or 7-9-3 (So What voicing)
- Rootless, modern sound

**Guitar Voicings:**
- Omit root (bass plays it)
- Favor 9ths, 13ths on top strings
- Muted strings create percussive groove

**Genre Applications:**

**Classic Funk (70s):**
- Extended minor chords, sus chords
- Chromatic movement
- Example: Earth Wind & Fire, Kool & the Gang

**Neo-Soul (2000s):**
- Heavy use of maj9, min11, 13ths
- Slash chords for smooth bass lines
- Example: D'Angelo, Erykah Badu, H.E.R.

**Modern R&B:**
- Extended chords, chromatic passing
- Trap-influenced rhythm (slower, spacious)
- Example: The Weeknd, SZA

**Gospel:**
- Slash chords, suspensions
- Rhythmically dense, call-and-response
- Example: Kirk Franklin, Tye Tribbett

**Jazz-Funk:**
- Modal vamps, complex extensions
- Virtuosic solos over simple harmony
- Example: Herbie Hancock, Tower of Power

**Common Mistakes:**
- Playing full chords (too dense, muddy)
- Not syncopating rhythm (loses funk feel)
- Ignoring ghost notes (sounds stiff)
- Over-complicating harmony (groove > chords)
- Playing on downbeats only (not funky!)

**Practice Exercises:**
1. Play Dm9 on 16th notes with ghost notes
2. Build sus4 chords resolving to major/minor
3. Create slash chord bass lines (C/E - F/A - G/B - C)
4. Vamp on Dm11 for 8 bars, solo over it
5. Analyze Tower of Power, James Brown, Stevie Wonder chord progressions

**Pro Tip:**
In funk, RHYTHM is more important than harmony. A simple Dm9 with perfect 16th-note groove beats complex jazz chords with stiff rhythm every time. Lock with the bass and drums first, add harmonic complexity second!
        `
      }
    ]
  },

  learningObjectives: [
    "Build extended chords (9ths, 11ths, 13ths) for funk/soul",
    "Use sus chords and slash chords effectively",
    "Apply 16th-note rhythmic techniques to chord playing",
    "Create modal vamps and groove-oriented progressions",
    "Understand the relationship between rhythm and harmony in funk"
  ],

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
