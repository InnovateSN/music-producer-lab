import { buildHeroEyebrow } from '../lesson-engine.js';

export const lessonConfig = {
  lessonKey: "mpl-harmony-28-progress",
  lessonNumber: 28,
  lessonCategory: "Harmony & Melody",

  nextLessonUrl: "labs.html",
  prevLessonUrl: "lesson-harmony-27.html",
  overviewUrl: "labs.html",

  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 28, categoryLabel: "Harmony & Melody" }),
    title: "Modal Interchange:",
    titleHighlight: "Borrowed Chords & Polytonality",
    subtitle: "Borrow chords from parallel modes and combine multiple keys simultaneously. Master advanced modern harmony techniques."
  },

  exercise: {
    title: "Use Modal Interchange and Bitonality",
    description: "Modal interchange (borrowed chords) takes chords from the parallel minor/major key and uses them in the current key for color. In C major, you can borrow chords from C minor (Fm, Ab, Bb, Eb). Polytonality layers two or more keys simultaneously, creating dense, modern harmony used in jazz and contemporary classical music.",
    tip: "The most common borrowed chord in major keys is iv (minor four) from parallel minor. In C major, borrow Fm from C minor for emotional impact.",
    steps: [
      '<strong>Borrowed chord: iv (minor four)</strong> — In C major, use Fm instead of F. Borrowed from C minor. Dark, emotional.',
      '<strong>Borrowed chord: bVII (flat seven)</strong> — In C major, use Bb instead of Bdim. Mixolydian sound, rock.',
      '<strong>Borrowed chord: bVI (flat six)</strong> — In C major, use Ab. Epic, cinematic (think film scores).',
      '<strong>Modal interchange progression</strong> — C-Fm-Ab-Bb-C. All borrowed from C minor except tonic.',
      '<strong>Bitonality</strong> — Play C major triad in left hand, F# major triad in right hand simultaneously. Polytonality!'
    ]
  },

  theory: {
    sections: [
      {
        title: 'Modal Interchange (Borrowed Chords)',
        content: `
**What Is Modal Interchange?**

Modal interchange (also called modal mixture or borrowed chords) is the technique of borrowing chords from parallel modes/keys. Most commonly: borrowing from parallel minor when in major, and vice versa.

**Parallel Keys:**
- **C major**: C-D-E-F-G-A-B
- **C minor**: C-D-Eb-F-G-Ab-Bb

**Chords Available in C Minor (to borrow):**
- i: Cm
- ii°: Ddim
- bIII: Eb major
- iv: Fm
- v: Gm (or V: G major)
- bVI: Ab major
- bVII: Bb major

**Common Borrowed Chords in Major:**

**iv (minor four):**
- In C major: Fm
- Borrowed from: C minor
- Sound: Sad, nostalgic, powerful
- Usage: Pre-dominant function
- Example: "Creep" (Radiohead) - C-E-F-Fm

**bVII (flat seven):**
- In C major: Bb major
- Borrowed from: C Mixolydian or C minor
- Sound: Rock, bluesy, modal
- Usage: Pre-dominant, or direct to I
- Example: "Hey Jude" (Beatles) - F-C-Bb

**bVI (flat six):**
- In C major: Ab major
- Borrowed from: C minor
- Sound: Epic, cinematic, dramatic
- Usage: Often resolves to V or I
- Example: Film scores, "Bohemian Rhapsody"

**bIII (flat three):**
- In C major: Eb major
- Borrowed from: C minor
- Sound: Bright major chord, unexpected
- Usage: Chromatic mediant, dramatic shift
- Example: "Space Oddity" (Bowie)

**Common Borrowed Chords in Minor:**

**IV (major four):**
- In C minor: F major (instead of Fm)
- Borrowed from: C major
- Sound: Bright, hopeful, Dorian
- Usage: Brightens minor key
- Example: "Scarborough Fair"

**I (major one / Picardy third):**
- In C minor: C major (final chord)
- Borrowed from: C major
- Sound: Resolved, bright ending
- Usage: Final cadence
- Example: Baroque music endings

**V (major five):**
- In C minor: G major (instead of Gm)
- Borrowed from: C harmonic minor
- Sound: Strong dominant pull
- Usage: Standard in classical minor

**Modal Interchange Progressions:**

**Major Key Progressions:**
- **I-bVI-bVII-I**: C-Ab-Bb-C (epic, cinematic)
- **I-IV-iv-I**: C-F-Fm-C (major to minor plagal cadence)
- **I-bIII-bVI-bVII**: C-Eb-Ab-Bb (all borrowed, dramatic)
- **I-V-vi-bVI**: C-G-Am-Ab (deceptive resolution twist)

**Minor Key Progressions:**
- **i-bVI-bVII-i**: Cm-Ab-Bb-Cm (Aeolian vamp)
- **i-IV-V-i**: Cm-F-G-Cm (Dorian, brighter minor)
- **i-bIII-bVI-V**: Cm-Eb-Ab-G (classical minor)
        `
      },
      {
        title: 'Polytonality and Advanced Techniques',
        content: `
**Polytonality (Bitonality):**

**Definition:**
Simultaneous use of two or more keys. Creates harmonic density, dissonance, and modern sound.

**Bitonality Examples:**

**C major + F# major:**
- Left hand: C-E-G
- Right hand: F#-A#-C# (Gb-Bb-Db enharmonic)
- Result: Maximum dissonance (tritone apart)
- Sound: Stravinsky, Bartók, modern classical

**C major + Db major:**
- Left hand: C-E-G
- Right hand: Db-F-Ab
- Result: Chromatic clash (half step apart)
- Sound: Cluster harmony, impressionist

**Polytonal Techniques:**

**Polyrhythm + Polytonality:**
- One hand in C major (3/4 time)
- Other hand in G major (4/4 time)
- Creates rhythmic AND harmonic complexity

**Polytonal Chords:**
- Stack triads: C major + E major = C-E-G + E-G#-B
- Creates augmented/extended sound
- Example: "Petrushka chord" (Stravinsky)

**Upper Structure Triads (Jazz Polytonality):**
- G7 chord (G-B-F) + Db major triad (Db-F-Ab)
- Creates G7(b9, #9, b13) - altered dominant
- Polytonal thinking applied to jazz

**Genre Applications:**

**Classical Modern (1900-1950):**
- Stravinsky: "Petrushka", "Rite of Spring"
- Bartók: Piano Concertos
- Ives: "The Unanswered Question"

**Jazz (Modern):**
- McCoy Tyner: Polytonal piano voicings
- Ornette Coleman: Harmolodics (free polytonality)
- Brad Mehldau: Superimposed keys

**Progressive Rock:**
- King Crimson: Bitonal guitar/keyboard
- Frank Zappa: Complex polytonal passages
- Tool: Polyrhythmic and polytonal

**Film Music:**
- John Williams: Bitonal brass clusters
- Hans Zimmer: Layered keys for tension
- Thomas Newman: Polytonal ambience

**Electronic:**
- Aphex Twin: Polytonal layering
- Autechre: Algorithmic polytonality

**Combining Modal Interchange + Polytonality:**

**Advanced Technique:**
1. Establish key (C major)
2. Borrow chord from parallel minor (Fm)
3. Layer polytonal element (Fm + B major = polytonal)
4. Resolve back to C major

**Example:**
- Bar 1-2: C major (tonic)
- Bar 3: Fm (borrowed iv) + B major (tritone polytonal layer)
- Bar 4: C major (resolution)

**Voice Leading in Modal Interchange:**

**Smooth Transitions:**
- C major (C-E-G) → Fm (F-Ab-C)
- Common tone: C stays
- E→F (half step), G→Ab (half step)
- Very smooth despite chromatic notes

**Chromatic Lines:**
- C-Cm-F-Fm-C (chromatic inner voices)
- Creates "line cliché" effect
- Example: "My Funny Valentine"

**Common Mistakes:**
- Overusing borrowed chords (loses tonal center)
- Not preparing ear for chromatic shift (jarring)
- Using polytonal

ity without purpose (sounds random)
- Forgetting to resolve borrowed chords
- Ignoring voice leading (awkward jumps)

**Practice Exercises:**
1. In C major, substitute IV with iv (F→Fm)
2. Create progression using bVII and bVI borrowed chords
3. Layer C major and F# major triads (bitonality)
4. Analyze Beatles songs for borrowed chords
5. Write 8-bar progression mixing diatonic and borrowed chords

**Pro Tip:**
Modal interchange adds color WITHOUT leaving the key. You're not modulating, just borrowing. The tonic remains C, you're just using chords from C minor temporarily. This creates emotional depth while maintaining tonal stability - perfect for songwriting!

Polytonality is advanced - use sparingly. Even Stravinsky used it for specific dramatic moments, not constantly.
        `
      }
    ]
  },

  learningObjectives: [
    "Borrow chords from parallel minor/major keys (modal interchange)",
    "Use common borrowed chords: iv, bVII, bVI in major keys",
    "Understand the difference between modulation and borrowing",
    "Experiment with polytonality and bitonality for modern sounds",
    "Apply modal interchange to create emotional depth in progressions"
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
