import { buildHeroEyebrow } from '../lesson-engine.js';

export const lessonConfig = {
  lessonKey: "mpl-harmony-22-progress",
  lessonNumber: 22,
  lessonCategory: "Harmony & Melody",

  progression: {
    difficulty: "expert",
    prerequisites: ["harmony-21","harmony-20"],
    outcomes: ["Completare gli obiettivi pratici di harmony-22","Consolidare competenze expert nel modulo harmony"]
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

  nextLessonUrl: "lesson-harmony-23.html",
  prevLessonUrl: "lesson-harmony-21.html",
  overviewUrl: "labs.html",

  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 22, categoryLabel: "Harmony & Melody" }),
    title: "Tritone Substitution:",
    titleHighlight: "Jazz Reharmonization",
    subtitle: "Replace dominant chords with their tritone substitutes. Master the most powerful reharmonization technique in jazz."
  },

  exercise: {
    title: "Apply Tritone Substitution",
    description: "Tritone substitution replaces a dominant 7th chord with another dominant 7th chord a tritone (6 semitones) away. Both chords share the same 3rd and 7th (enharmonically), creating smooth voice leading while adding chromatic bass movement. G7 can be replaced by Db7, both resolving to C.",
    tip: "The tritone sub shares the critical tension notes (3rd and 7th) with the original dominant. G7 (B-F) = Db7 (F-Cb/B).",
    steps: [
      '<strong>Original: ii-V-I</strong> — Dm7-G7-Cmaj7. Standard jazz progression.',
      '<strong>Substitute V with tritone</strong> — Replace G7 with Db7 (tritone away). Result: Dm7-Db7-Cmaj7.',
      '<strong>Why it works</strong> — G7 = G-B-D-F. Db7 = Db-F-Ab-Cb(B). They share F and B, the tension notes!',
      '<strong>Bass movement</strong> — Instead of G→C (up P4), you get Db→C (down half step). Smooth chromatic descent.',
      '<strong>Extended sub</strong> — You can also sub secondary dominants: V/ii becomes bII7/ii (Eb7 instead of A7).',
      '<strong>Full progression</strong> — Try: Dm7-Db7-Cmaj7-E7(or Bb7)-Am7-A7(or Eb7)-Dm7-Db7-Cmaj7'
    ]
  },

  theory: {
    sections: [
      {
        title: 'Understanding Tritone Substitution',
        content: `
**What Is Tritone Substitution?**

Tritone substitution replaces a dominant 7th chord with another dominant 7th chord located a tritone (augmented 4th / diminished 5th) away. Both chords share the same 3rd and 7th (enharmonically), making the substitution harmonically valid.

**The Math:**
- **Original**: G7 = G-B-D-F
  - 3rd: B
  - 7th: F
  - Tritone: B-F (defines dominant quality)

- **Substitute**: Db7 = Db-F-Ab-Cb (enharmonic: Db-F-Ab-B)
  - 3rd: F
  - 7th: Cb (=B)
  - Tritone: F-B (same interval, flipped!)

**Why It Works:**
1. **Shared tension notes**: The 3rd and 7th create the dominant sound
2. **Smooth voice leading**: 3rd and 7th are already in place, just switch roles
3. **Chromatic bass motion**: Instead of G→C (perfect 4th), Db→C (half step down)
4. **Adds color**: Introduces chromatic notes (Db, Ab) not in the key

**Tritone Substitution Formula:**
1. Identify the dominant 7th chord (e.g., G7)
2. Go up/down a tritone (6 semitones or 3 whole steps)
3. Build a dominant 7th chord there (Db7)
4. Substitute freely!

**Common Applications:**

**ii-V-I Progression:**
- **Original**: Dm7 - G7 - Cmaj7
- **Tritone Sub**: Dm7 - Db7 - Cmaj7
- **Result**: Smooth chromatic bass line (D-Db-C)

**V7 in Blues:**
- **Original**: C7 - F7 - C7 (I-IV-I)
- **Tritone Sub**: C7 - B7 - C7 or C7 - Cb7 - C7
- **Result**: Bebop blues feel

**Turnarounds:**
- **Original**: Cmaj7 - A7 - Dm7 - G7
- **Tritone Sub**: Cmaj7 - Eb7 - Dm7 - Db7
- **Result**: Chromatic descent (C-Eb-D-Db-C)

**Extended Subs (Secondary Dominants):**
- V/ii = A7 can become Eb7 (bII7/ii)
- V/iii = B7 can become F7 (bII7/iii)
- V/V = D7 can become Ab7 (bII7/V)

**Notation:**
- Tritone sub of V7 is often written as bII7
- In C major: Db7 is the bII7 (flat-two-seven)
- Symbol: G7 → Db7 or V7 → bII7
        `
      },
      {
        title: 'Practical Tritone Substitution Techniques',
        content: `
**Voice Leading with Tritone Subs:**

**Smooth Resolution:**
- Original G7 → Cmaj7:
  - G (root) → C (root) - up P4
  - B (3rd) → C (root) or E (3rd) - resolves up or common tone
  - F (7th) → E (3rd) - down by half step

- Tritone Sub Db7 → Cmaj7:
  - Db (root) → C (root) - down by half step (chromatic!)
  - F (3rd) → E (3rd) - down by half step
  - Cb/B (7th) → C (root) or E (3rd) - smooth resolution

**Key Difference:**
- Bass moves chromatically (Db→C) instead of by 5th (G→C)
- Adds forward momentum and jazz sophistication
- 3rd and 7th resolve the same way!

**When to Use Tritone Subs:**

**Jazz Standards:**
- Replace any V7 in a ii-V-I with bII7
- Creates smooth chromatic bass lines
- Adds harmonic sophistication

**Bebop:**
- Frequent tritone subs in fast tempos
- Creates linear chromatic movement
- Example: "Tune Up" uses tritone subs extensively

**Modal Jazz:**
- Less common (modes avoid strong V-I)
- Use sparingly for color, not resolution

**Blues:**
- Substitute IV7 or V7 with tritone subs
- Creates bebop blues feel
- Example: Bb7 instead of F7 in C blues

**Funk/R&B:**
- Occasional tritone sub for chromatic fills
- Usually kept simple (straight dominants)

**Pop:**
- Rare, but can add sophistication
- Use on turnarounds or pre-chorus

**Advanced Techniques:**

**Tritone Sub with Extensions:**
- Db7(#11) instead of plain Db7
- Adds Lydian color (G natural over Db)
- Very jazzy, modern sound

**Tritone Sub with Alterations:**
- Db7(b9, #9) for maximum tension
- Resolves powerfully to Cmaj7
- Common in bebop

**Double Tritone Sub:**
- Chain tritone subs in sequence
- Example: Dm7 - Db7 - Cmaj7 - B7 (sub for F7) - Bbmaj7
- Creates continuous chromatic descent

**Tritone Sub of Secondary Dominants:**
- V/ii = A7 becomes Eb7 (bII7/ii)
- Full progression: C - Eb7 - Dm7 - Db7 - C
- Advanced reharmonization technique

**Recognizing Tritone Subs:**

**Look for:**
- Dominant 7th chord not in the key
- Bass moving down by half step to next chord
- bII7 symbols in jazz charts

**Example in C Major:**
- See Db7 → likely tritone sub for G7
- See Ab7 → likely tritone sub for D7 (V/V)
- See Eb7 → likely tritone sub for A7 (V/ii)

**Common Mistakes:**
- Using tritone sub on chords other than dominants (doesn't work!)
- Forgetting the 7th (must be dominant 7th, not major 7th)
- Overusing (loses impact, sounds cliché)
- Wrong resolution (tritone sub should still resolve like a dominant)

**Practice Exercises:**
1. Take any ii-V-I and substitute V with bII7
2. Find all V7 chords in a jazz standard and try tritone subs
3. Create chromatic bass lines using tritone subs
4. Combine tritone subs with secondary dominants

**Pro Tip:**
You can think of tritone sub as a "lazy dominant" - it wants to resolve down by half step to the tonic instead of up by 4th. This creates smoother, more linear bass motion perfect for walking bass lines in jazz!
        `
      }
    ]
  },

  learningObjectives: [
    "Understand the theory behind tritone substitution",
    "Replace any V7 chord with its tritone substitute (bII7)",
    "Apply tritone subs to ii-V-I progressions for chromatic bass lines",
    "Use tritone substitution on secondary dominants",
    "Recognize tritone subs in jazz standards and lead sheets"
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
