import { buildHeroEyebrow } from '../lesson-engine.js';

export const lessonConfig = {
  lessonKey: "mpl-harmony-21-progress",
  lessonNumber: 21,
  lessonCategory: "Harmony & Melody",

  progression: {
    difficulty: "expert",
    prerequisites: ["harmony-20","harmony-19"],
    outcomes: ["Completare gli obiettivi pratici di harmony-21","Consolidare competenze expert nel modulo harmony"]
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

  nextLessonUrl: "lesson-harmony-22.html",
  prevLessonUrl: "lesson-harmony-20.html",
  overviewUrl: "labs.html",

  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 21, categoryLabel: "Harmony & Melody" }),
    title: "Secondary Dominants:",
    titleHighlight: "Tonicization Techniques",
    subtitle: "Master V/ii, V/iii, V/IV, V/V, and V/vi. Learn how to temporarily tonicize any chord in a progression for harmonic richness."
  },

  exercise: {
    title: "Build Secondary Dominant Progressions",
    description: "Secondary dominants are dominant 7th chords that resolve to diatonic chords other than the tonic. They temporarily 'tonicize' a target chord, making it feel like a temporary I chord. For example, A7 (V/ii) resolves to Dm in C major, treating Dm as a temporary tonic.",
    tip: "To find a secondary dominant: identify the target chord, go up a perfect 5th (or down a perfect 4th), and make that a dominant 7th chord.",
    steps: [
      '<strong>V/ii in C major</strong> — A7 → Dm. A7 is the V chord of D minor, creating temporary tonicization.',
      '<strong>V/iii in C major</strong> — B7 → Em. B7 leads strongly to E minor with chromatic voice leading.',
      '<strong>V/IV in C major</strong> — C7 → F. The tonic chord becomes dominant when targeting the IV!',
      '<strong>V/V in C major</strong> — D7 → G7. Sets up a strong ii-V-I by approaching the dominant.',
      '<strong>V/vi in C major</strong> — E7 → Am. Creates a deceptive resolution feel, jazzy and sophisticated.',
      '<strong>Practice</strong> — Program C - A7 - Dm - G7 - C to hear secondary dominants in action.'
    ]
  },

  theory: {
    sections: [
      {
        title: 'Understanding Secondary Dominants',
        content: `
**What Are Secondary Dominants?**

A secondary dominant is a dominant 7th chord that resolves to a diatonic chord other than the tonic. It temporarily establishes a new key center (tonicization) before returning to the original key.

**Formula:**
1. Identify your target chord (ii, iii, IV, V, or vi in major)
2. Find the chord a perfect 5th above (or perfect 4th below)
3. Make it a dominant 7th chord
4. Resolve it to your target

**Secondary Dominants in C Major:**

**V/ii (A7 → Dm):**
- Tonicizes ii (Dm becomes temporary "i")
- Notes: A-C#-E-G (introduces C#, not in C major)
- Usage: Very common in jazz and classical
- Progression: I-V/ii-ii-V-I (C-A7-Dm-G7-C)

**V/iii (B7 → Em):**
- Tonicizes iii (Em becomes temporary "i")
- Notes: B-D#-F#-A (introduces D# and F#)
- Usage: Less common, adds exotic color
- Progression: I-V/iii-iii-vi (C-B7-Em-Am)

**V/IV (C7 → F):**
- Tonicizes IV (F becomes temporary "I")
- The tonic chord itself becomes dominant!
- Notes: C-E-G-Bb (introduces Bb, creates blues feel)
- Usage: Blues, rock, gospel
- Progression: I-V/IV-IV (C-C7-F) - very common in blues

**V/V (D7 → G7 or G):**
- Tonicizes V (G becomes temporary "I")
- Sets up extended dominant approach
- Notes: D-F#-A-C (introduces F#)
- Usage: Classical, jazz turnarounds
- Progression: I-V/V-V-I (C-D7-G7-C)

**V/vi (E7 → Am):**
- Tonicizes vi (Am becomes temporary "i")
- Creates deceptive, jazzy feel
- Notes: E-G#-B-D (introduces G#)
- Usage: Jazz, sophisticated pop
- Progression: I-V/vi-vi-ii-V-I (C-E7-Am-Dm-G7-C)

**Voice Leading:**
- The 3rd of the secondary dominant (leading tone) resolves up by half step to the root of target
- The 7th of the secondary dominant resolves down by half step to the 3rd of target
- Example in V/ii → ii: C# (3rd of A7) → D (root of Dm), G (7th of A7) → F (3rd of Dm)
        `
      },
      {
        title: 'Practical Application of Secondary Dominants',
        content: `
**Common Progressions Using Secondary Dominants:**

**Jazz Standard Pattern:**
- Imaj7 - V/ii - ii7 - V7 - Imaj7
- Cmaj7 - A7 - Dm7 - G7 - Cmaj7
- The "Sweet Georgia Brown" progression

**Blues Approach:**
- I - V/IV - IV - V/V - V - I
- C - C7 - F - D7 - G7 - C
- Classic blues with chromatic approach to IV

**Deceptive Resolution:**
- I - V/vi - vi - V/ii - ii - V - I
- C - E7 - Am - A7 - Dm - G7 - C
- Extended turnaround with multiple tonicizations

**Circle of Fifths with Secondary Dominants:**
- V/V - V/ii - V/vi - V/iii - V - I
- D7 - A7 - E7 - B7 - G7 - C
- Descending fifths, each as secondary dominant

**Recognizing Secondary Dominants:**

**Accidentals:**
- Look for sharps or flats not in the key
- These often indicate secondary dominants
- C major seeing F# or C# → likely V/V or V/ii

**Quality:**
- Diatonic chords in major: I, ii, iii, IV, V, vi, vii°
- If you see a major or dominant 7th where there should be minor → secondary dominant
- Example: A major or A7 in C major (should be Am) → V/ii

**Resolution:**
- Secondary dominants almost always resolve down a perfect 5th
- A7 → Dm, E7 → Am, etc.
- If it doesn't resolve as expected, it might be borrowed or passing

**Writing with Secondary Dominants:**

**Step 1: Choose Target Chord**
- Pick any diatonic chord except I (ii, iii, IV, V, vi)
- More common targets: ii, IV, V, vi

**Step 2: Build Secondary Dominant**
- Go perfect 5th above target
- Make it dominant 7th quality
- Add chromatic notes as needed

**Step 3: Voice Leading**
- Lead 3rd of secondary dominant up by half step
- Lead 7th down by half step
- Keep other voices smooth (common tones, stepwise)

**Step 4: Context**
- Place secondary dominant before target chord
- Can extend with ii-V approach: V/V/V → V/V → V → I

**Common Mistakes:**
- Forgetting the 7th (using major triad instead of dom7)
- Wrong resolution (secondary dominant should resolve to its target)
- Ignoring voice leading (creates awkward jumps)
- Overusing (too many secondary dominants = weak tonic)

**Genre Applications:**
- **Jazz**: Heavy use of V/ii-ii-V-I, V/vi for color
- **Blues**: V/IV (the tonic becomes dominant 7th)
- **Classical**: V/V for extended dominant approach
- **Pop**: Occasional V/vi or V/IV for interest
- **Gospel**: V/IV very common, bluesy feel

**Pro Tip:**
You can chain secondary dominants in the circle of fifths:
- V/V/V → V/V → V → I
- In C: A7 → D7 → G7 → C
- Creates strong forward motion and harmonic momentum
        `
      }
    ]
  },

  learningObjectives: [
    "Build secondary dominants for any diatonic chord",
    "Recognize V/ii, V/iii, V/IV, V/V, and V/vi by ear and notation",
    "Apply proper voice leading to secondary dominant resolutions",
    "Use secondary dominants to create harmonic interest and tonicization",
    "Understand the difference between diatonic and chromatic harmony"
  ]

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
