import { buildHeroEyebrow } from '../lesson-engine.js';

export const lessonConfig = {
  lessonKey: "mpl-ear-10-progress",
  lessonNumber: 10,
  lessonCategory: "Ear Training",


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

  nextLessonUrl: "labs.html",
  prevLessonUrl: "lesson-ear-9.html",
  overviewUrl: "labs.html",

  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 10, categoryLabel: "Ear Training" }),
    title: "Advanced Harmonic Dictation:",
    titleHighlight: "Extensions, Alterations, Voice Leading",
    subtitle: "Transcribe complex chord progressions with extensions, alterations, and voice leading. Master professional-level harmonic ear training."
  },

  exercise: {
    title: "Transcribe Complex Harmony by Ear",
    description: "Advanced harmonic dictation involves hearing and transcribing complex chord progressions with 7th chords, extensions (9ths, 11ths, 13ths), alterations (b9, #9, #11, b13), secondary dominants, modal interchange, and sophisticated voice leading. This is the pinnacle of ear training—essential for jazz musicians, film composers, and advanced producers who work with rich harmonic palettes.",
    tip: "Start with the bass note, add the chord quality (maj7, min7, dom7), then listen for extensions 'on top.' Extensions add color but the foundation is always root-3rd-7th.",
    steps: [
      '<strong>Identify Chord Type</strong> — Major 7th, minor 7th, dominant 7th, half-diminished, or diminished 7th. This is the foundation.',
      '<strong>Listen for Extensions</strong> — 9th, 11th, 13th. These add color on top of the basic 7th chord structure.',
      '<strong>Detect Alterations</strong> — b9, #9, #11, b13. These create tension and jazz color.',
      '<strong>Analyze Voice Leading</strong> — How do voices move between chords? Stepwise, parallel, contrary motion?',
      '<strong>Identify Non-Diatonic Chords</strong> — Secondary dominants (V/ii, V/V), modal interchange (borrowed chords), chromatic mediants.'
    ]
  },

  theory: {
    sections: [
      {
        title: 'Understanding Advanced Harmonic Structures',
        content: `
**Extended Chord Types:**

**Major 7th Chords:**
- **Cmaj7**: C-E-G-B (1-3-5-7)
- **Cmaj9**: C-E-G-B-D (add 9th)
- **Cmaj13**: C-E-G-B-D-F-A (full stack, often voiced selectively)
- Sound: Lush, jazzy, sophisticated
- Usage: Tonic function in jazz, R&B, neo-soul

**Minor 7th Chords:**
- **Cm7**: C-Eb-G-Bb (1-b3-5-b7)
- **Cm9**: C-Eb-G-Bb-D
- **Cm11**: C-Eb-G-Bb-D-F
- Sound: Smooth, melancholic, mellow
- Usage: Pre-dominant function (ii chord), minor tonic

**Dominant 7th Chords:**
- **C7**: C-E-G-Bb (1-3-5-b7)
- **C9**: C-E-G-Bb-D
- **C13**: C-E-G-Bb-D-F-A
- Sound: Bluesy, tense, wants to resolve
- Usage: V chord, creates tension → resolution

**Half-Diminished (m7b5):**
- **Cm7b5**: C-Eb-Gb-Bb (1-b3-b5-b7)
- Sound: Tense, unstable, jazzy
- Usage: ii chord in minor keys, passing chord

**Diminished 7th:**
- **Cdim7**: C-Eb-Gb-Bbb/A (1-b3-b5-bb7)
- Sound: Very tense, symmetrical, transitional
- Usage: Passing chords, tonicization, voice leading

**Altered Chords:**

**Dominant Alterations (Most Common):**
- **C7b9**: C-E-G-Bb-Db (adds b9 for tension)
- **C7#9**: C-E-G-Bb-D# ("Hendrix chord")
- **C7#11**: C-E-G-Bb-D-F# (Lydian dominant)
- **C7b13**: C-E-G-Bb-Ab
- **C7alt**: C-E-G-Bb with b9, #9, #11, b13 (maximum tension)

**Why Alter Dominant Chords?**
- Increases tension before resolution
- Creates voice leading to target chord
- Adds jazz color and sophistication
- Common in bebop, modern jazz, R&B

**Non-Diatonic Harmony:**

**Secondary Dominants:**
- **V/ii**: Dominant chord that resolves to ii
- Example in C major: A7 → Dm (tonicizes Dm temporarily)
- **V/V**: Dominant of the dominant
- Example: D7 → G7 → C

**Modal Interchange (Borrowed Chords):**
- Borrow chords from parallel minor/major
- Example in C major: Use Fm (from C minor), Ab (from C minor)
- Creates color, emotional contrast
- Common in modern pop, film scores

**Chromatic Mediants:**
- Chords a major/minor 3rd away
- C major → E major (distant, cinematic)
- C major → Ab major (dramatic shift)
- Common in film music, progressive rock
        `
      },
      {
        title: 'Advanced Harmonic Dictation Strategy',
        content: `
**Systematic Approach to Complex Harmony:**

**Step 1: Bass Line First**
- Transcribe root movement (often quarter notes or half notes)
- This gives you the foundation

**Step 2: Chord Quality (7th Chords)**
- Major 7th: Lush, bright, stable
- Minor 7th: Smooth, dark
- Dominant 7th: Bluesy, tense
- Half-diminished: Tense minor sound
- Diminished 7th: Very unstable

**Step 3: Listen for Extensions**
- **9th**: Adds shimmer on top (higher register)
- **11th**: Can clash with 3rd (often omit 3rd if present)
- **13th**: Adds brightness, upper color

**Step 4: Detect Alterations**
- **b9**: Crunchy, tense (listen for semitone clash)
- **#9**: "Purple Haze" sound, Hendrix chord
- **#11**: Lydian color, bright augmented sound
- **b13**: Dark, descending tension

**Step 5: Analyze Voice Leading**
- How does each voice (soprano, alto, tenor, bass) move?
- Stepwise motion (smooth)
- Leaps (dramatic)
- Common tones (stay on same note)

**Common Jazz Progressions:**

**ii-V-I with Extensions:**
- Dm9 - G13 - Cmaj9
- Dm11 - G7#11 - Cmaj13
- Dm7b5 - G7b9 - Cm(maj7) (in minor)

**Rhythm Changes (I Got Rhythm):**
- Imaj7 - VI7 - ii7 - V7
- Cmaj7 - A7 - Dm7 - G7 (in C major)

**Coltrane Changes (Giant Steps):**
- Fast moving, distant key centers
- Bmaj7 - D7 - Gmaj7 - Bb7 - Ebmaj7
- Requires advanced ear to track

**Recognition Exercises:**

**Exercise 1: Extension Isolation**
1. Play Cmaj7 (C-E-G-B)
2. Add 9th (D) → Cmaj9
3. Hear the added shimmer
4. Remove it, add it back
5. Repeat until you can instantly hear 9ths

**Exercise 2: Alteration Practice**
1. Play C7 (C-E-G-Bb)
2. Play C7b9 (C-E-G-Bb-Db)
3. Compare side-by-side
4. Hear the increased tension from b9
5. Repeat with #9, #11, b13

**Exercise 3: Voice Leading Analysis**
1. Play progression: Cmaj7 - Dm7 - G7 - Cmaj7
2. Isolate top voice: E - F - F - E
3. Isolate second voice: C - D - D - C
4. Notice stepwise motion (smooth)
5. Transcribe all four voices

**Exercise 4: Modal Interchange**
1. Play diatonic progression: C - F - G - C
2. Borrow Fm from parallel minor: C - Fm - G - C
3. Hear the dramatic shift (Fm feels darker)
4. Practice identifying borrowed chords by ear

**Advanced Techniques:**

**Quartal Harmony:**
- Chords built in 4ths instead of 3rds
- C-F-Bb (no clear major/minor, modern sound)
- Common in modern jazz, film scores

**Upper Structure Triads:**
- Major/minor triad on top of dominant 7th bass
- Example: G7 with Db major triad on top (G7#9#5)
- Creates complex altered sounds

**Polychords:**
- Two triads stacked (C major over F# major)
- Very dissonant, modern classical, avant-garde

**Common Mistakes:**
- Trying to hear all extensions at once (isolate them!)
- Not starting with the bass and basic quality
- Ignoring voice leading (critical for understanding movement)
- Practicing too fast (complex harmony needs slow analysis)
- Not using a piano to check answers

**Practice Plan:**

**Month 1: 7th Chords Only**
- Maj7, m7, dom7, m7b5, dim7
- 95% accuracy before moving on

**Month 2: Add 9ths**
- maj9, m9, dom9
- Compare with basic 7th chords

**Month 3: Add 11ths and 13ths**
- Understand when 11th clashes with 3rd
- Hear 13th as bright top note

**Month 4: Alterations**
- b9, #9, #11, b13 on dominant chords
- Practice altered dominants in ii-V-I

**Month 5: Non-Diatonic Harmony**
- Secondary dominants
- Modal interchange
- Chromatic mediants

**Month 6: Full Transcriptions**
- Transcribe jazz standards (lead sheet)
- Analyze film score harmonies
- Study R&B/neo-soul chord progressions
        `
      }
    ]
  },

  learningObjectives: [
    "Identify 7th chords, extensions, and alterations by ear",
    "Transcribe complex jazz and R&B chord progressions",
    "Analyze voice leading between chords",
    "Recognize secondary dominants and modal interchange",
    "Apply advanced harmonic knowledge to composition and arrangement"
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
