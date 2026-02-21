import { buildHeroEyebrow } from '../lesson-engine.js';

export const lessonConfig = {
  lessonKey: "mpl-ear-8-progress",
  lessonNumber: 8,
  lessonCategory: "Ear Training",

  progression: {
    difficulty: "intermediate",
    prerequisites: ["ear-7"],
    outcomes: ["Completare gli obiettivi pratici di ear-8","Consolidare competenze intermediate nel modulo ear"]
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

  nextLessonUrl: "lesson-ear-9.html",
  prevLessonUrl: "lesson-ear-7.html",
  overviewUrl: "labs.html",

  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 8, categoryLabel: "Ear Training" }),
    title: "Chord Progression:",
    titleHighlight: "Identify Harmonic Movement",
    subtitle: "Identify common chord progressions and harmonic movement. Recognize I-IV-V, ii-V-I, and other foundational patterns by ear."
  },

  exercise: {
    title: "Recognize Chord Progressions by Ear",
    description: "Chord progression ear training develops your ability to hear harmonic movement and identify which chords are being played. Instead of hearing individual notes, you hear functional relationships: tonic (home), subdominant (departure), dominant (tension). This skill is essential for learning songs quickly, analyzing harmonic structure, and understanding how chords create emotional movement.",
    tip: "Start by identifying the bass note (root), then determine if the chord is major or minor, then recognize the Roman numeral function (I, IV, V, etc.).",
    steps: [
      '<strong>I-IV-V-I</strong> — The most common progression in Western music. Tonic-Subdominant-Dominant-Tonic. Sounds: home-away-tension-home.',
      '<strong>I-V-vi-IV</strong> — Pop progression ("Axis of Awesome"). Millions of songs use this. C-G-Am-F in C major.',
      '<strong>ii-V-I</strong> — Jazz turnaround. Smooth voice leading, strong resolution. Dm7-G7-Cmaj7 in C major.',
      '<strong>I-vi-IV-V</strong> — 50s progression. Doo-wop, early rock. C-Am-F-G in C major.',
      '<strong>vi-IV-I-V</strong> — Sad pop progression. Starts on minor for emotional impact. Am-F-C-G in C major.'
    ]
  },

  theory: {
    sections: [
      {
        title: 'Understanding Chord Progression Recognition',
        content: `
**Functional Harmony Recap:**

**Three Chord Functions:**
1. **Tonic (T)**: I, vi, iii — Home, stable, resolution
2. **Subdominant (SD)**: IV, ii — Movement away, preparation
3. **Dominant (D)**: V, vii° — Tension, wants to resolve to tonic

**Common Progressions by Genre:**

**Pop/Rock:**
- **I-V-vi-IV**: Most pop songs (thousands of examples)
  - C-G-Am-F: "Let It Be", "Don't Stop Believin'", "With or Without You"
- **I-IV-V**: Classic rock
  - C-F-G: "Twist and Shout", "La Bamba", "Wild Thing"
- **vi-IV-I-V**: Emotional pop
  - Am-F-C-G: "Apologize", "Grenade"

**Jazz:**
- **ii-V-I**: The jazz turnaround
  - Dm7-G7-Cmaj7: Smooth voice leading, strong resolution
- **I-vi-ii-V**: Rhythm changes
  - Cmaj7-Am7-Dm7-G7
- **iii-vi-ii-V-I**: Extended progression
  - Em7-Am7-Dm7-G7-Cmaj7

**Blues:**
- **I-I-I-I-IV-IV-I-I-V-IV-I-V**: 12-bar blues
  - C7-C7-C7-C7-F7-F7-C7-C7-G7-F7-C7-G7
  - Dominant 7th chords throughout

**Folk:**
- **I-IV-I-V**: Simple, campfire songs
  - C-F-C-G: "Blowin' in the Wind"
- **I-V-I-IV-I-V-I**: Extended folk pattern
  - C-G-C-F-C-G-C

**Gospel/R&B:**
- **I-IV-ii-V**: Gospel turnaround
  - C-F-Dm-G
- **I-vi-ii-V**: Doo-wop progression
  - C-Am-Dm-G

**Recognizing by Function:**

**Identify Movement Patterns:**
- **Tonic → Subdominant → Dominant → Tonic**: I-IV-V-I (strongest)
- **Tonic → Pre-dominant → Dominant → Tonic**: I-ii-V-I (smooth)
- **Tonic → Dominant → Tonic**: I-V-I (simple, strong)

**Circle of Fifths Progressions:**
- **Descending 5ths**: vi-ii-V-I (Am-Dm-G-C)
- **Ascending 4ths**: I-IV-vii°-iii-vi-ii-V-I (smooth voice leading)
        `
      },
      {
        title: 'Practical Chord Progression Ear Training',
        content: `
**Training Strategy:**

**Week 1: I, IV, V Only**
- Learn to distinguish the three primary chords
- I sounds like home (stable)
- IV sounds like departure (moves away)
- V sounds like tension (wants to resolve)
- Practice: I-IV-I, I-V-I, I-IV-V-I

**Week 2: Add vi (Relative Minor)**
- Now recognize I, IV, V, vi
- vi sounds minor (sad) but related to I
- Practice: I-V-vi-IV, I-vi-IV-V

**Week 3: Add ii**
- Pre-dominant chord (leads to V)
- ii-V-I is the most important jazz progression
- Practice: I-ii-V-I, vi-ii-V-I

**Week 4: Full Diatonic Palette**
- Add iii and vii° (less common)
- Practice random diatonic progressions
- Start analyzing real songs

**Recognition Process:**

**Step 1: Identify the Bass Note**
- Listen to the lowest note (usually the root)
- Sing it, find it on piano
- This gives you the root of each chord

**Step 2: Determine Chord Quality**
- Major or minor?
- Major = bright, minor = dark
- 7th chord or triad?

**Step 3: Assign Roman Numeral**
- Based on bass note and quality
- C major chord in key of C = I
- A minor chord in key of C = vi
- F major chord in key of C = IV

**Step 4: Analyze Function**
- Tonic, subdominant, or dominant?
- Does it feel stable, departing, or tense?

**Exercise 1: Frozen Progression**
Play one progression 100 times:
- Day 1-7: Only I-IV-V-I in C major
- Day 8-14: Only I-V-vi-IV in C major
- Day 15-21: Only ii-V-I in C major
- Internalize the sound completely

**Exercise 2: Genre Immersion**
- Listen to 10 pop songs, all use I-V-vi-IV
- Identify the progression without instrument
- Sing the bass line (root notes)
- Notice how similar they all sound

**Exercise 3: Progression Detective**
1. Pick a song
2. Find the key (play notes until one sounds like "home")
3. Listen to bass line (identifies roots)
4. Determine chord quality (major/minor)
5. Assign Roman numerals (I, IV, V, vi, ii)

**Exercise 4: Transpose Practice**
- Learn I-IV-V-I in C major
- Play it in G major, D major, F major
- Same progression, different keys
- Reinforces relative, not absolute recognition

**Common Mistakes:**
- Trying to identify chords in isolation (context matters!)
- Not listening to the bass note first (bass is the foundation)
- Ignoring chord quality (major vs minor changes the Roman numeral)
- Not knowing the key (can't assign numerals without a tonic)
- Expecting to hear every chord change (some are quick passing chords)

**DAW Practice:**
1. Create 4 MIDI tracks (I, IV, V, vi)
2. Program triads for each
3. Create random progressions: I-V-vi-IV, ii-V-I, etc.
4. Play them back, identify by ear
5. Check your answers
        `
      }
    ]
  },

  learningObjectives: [
    "Identify I, IV, V, vi, and ii chords by ear in major keys",
    "Recognize common progressions: I-V-vi-IV, ii-V-I, I-IV-V",
    "Use functional hearing (tonic, subdominant, dominant)",
    "Transcribe chord progressions from songs by ear",
    "Apply progression knowledge to composition and analysis"
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
