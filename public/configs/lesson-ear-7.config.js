import { buildHeroEyebrow } from '../lesson-engine.js';

export const lessonConfig = {
  lessonKey: "mpl-ear-7-progress",
  lessonNumber: 7,
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

  nextLessonUrl: "lesson-ear-8.html",
  prevLessonUrl: "lesson-ear-6.html",
  overviewUrl: "labs.html",

  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 7, categoryLabel: "Ear Training" }),
    title: "Melodic Dictation:",
    titleHighlight: "Transcribe Melodies by Ear",
    subtitle: "Transcribe simple melodies by ear. Combine interval recognition, rhythm, and pitch to write what you hear."
  },

  exercise: {
    title: "Transcribe Melodies Accurately",
    description: "Melodic dictation is the process of hearing a melody and writing it down (either in notation or MIDI). This combines all ear training skills: pitch recognition, interval hearing, rhythm transcription, and scale degree awareness. It's the ultimate test of musical listening and essential for learning songs, creating covers, and developing your musical memory.",
    tip: "Listen multiple times. First pass: get the rhythm. Second pass: get the pitches (scale degrees). Third pass: refine details. Don't try to get everything in one listening.",
    steps: [
      '<strong>First Listen</strong> — Focus only on rhythm. How many notes? What are the note values? Ignore pitch completely.',
      '<strong>Second Listen</strong> — Identify the starting pitch and ending pitch. These are your anchors.',
      '<strong>Third Listen</strong> — Fill in the middle notes by scale degree (1, 2, 3, 4, 5, 6, 7) or interval (up a 3rd, down a 2nd).',
      '<strong>Fourth Listen</strong> — Check for details: grace notes, slides, ornaments, dynamics.',
      '<strong>Verify</strong> — Play back what you transcribed. Does it match the original? Fix mistakes and repeat.'
    ]
  },

  theory: {
    sections: [
      {
        title: 'Understanding Melodic Dictation',
        content: `
**What is Melodic Dictation?**

Melodic dictation is transcribing a melody by ear using:
1. **Pitch** (which notes: C, D, E, F, etc.)
2. **Rhythm** (when and how long: quarters, eighths, etc.)
3. **Phrasing** (how it's shaped: legato, staccato, accents)

**Why It's Important:**
- Learn songs without sheet music or tabs
- Create accurate covers and remixes
- Develop musical memory
- Train your ear comprehensively (all skills combined)
- Professional skill for session musicians, arrangers

**Three Approaches to Melodic Dictation:**

**1. Scale Degree Method (Recommended):**
- Establish the key/tonic first
- Identify each note by its scale degree (1-7)
- Example in C major: melody goes 1-3-5-5-6-5-4-3-1
- Advantage: Works in any key, builds strong relative pitch

**2. Interval Method:**
- Identify the interval between consecutive notes
- Example: M3 up, m2 down, P4 up, etc.
- Advantage: Doesn't require knowing the key
- Disadvantage: Can get lost if you make one mistake

**3. Absolute Pitch Method:**
- Directly identify note names (C, D#, F, etc.)
- Only works if you have perfect pitch or pseudo-absolute pitch
- Rare, but fastest when available

**Melodic Contour:**
Understanding the shape helps transcription:
- **Ascending**: Melody goes up (1-2-3-4-5)
- **Descending**: Melody goes down (5-4-3-2-1)
- **Arch**: Up then down (1-3-5-3-1)
- **Valley**: Down then up (5-3-1-3-5)
- **Static**: Repeating notes (3-3-3-3)
        `
      },
      {
        title: 'Practical Melodic Dictation Strategy',
        content: `
**Step-by-Step Dictation Process:**

**Preparation:**
1. Listen to the entire melody once (don't write anything)
2. Identify the key (major or minor?)
3. Identify the time signature (4/4, 3/4, 6/8?)
4. Find the starting note (scale degree 1, 3, or 5 usually)

**Pass 1: Rhythm Only**
1. Ignore pitch completely
2. Tap or clap the rhythm
3. Write rhythm notation: ♩ ♩ ♪♪ ♩ 𝅗𝅥
4. Count: "1 & 2 & 3 & 4 &"
5. Verify rhythm is correct before moving on

**Pass 2: Contour and Range**
1. Does melody go up, down, or stay the same?
2. What's the highest note? Lowest note?
3. Sketch the general shape (helps with later passes)

**Pass 3: Scale Degrees**
1. Play the tonic note as reference
2. Listen for first note (identify scale degree)
3. Listen for last note (melodies often end on 1 or 5)
4. Fill in the middle notes one by one
5. Use scale degree numbers: 1-3-5-5-6-5-4-3-1

**Pass 4: Verification**
1. Sing or play back what you transcribed
2. Compare to original (does it match?)
3. Fix wrong notes
4. Check rhythm accuracy again

**Pass 5: Details**
1. Listen for articulation (staccato, legato)
2. Listen for ornaments (trills, grace notes)
3. Listen for dynamics (loud, soft, crescendo)
4. Add expression markings if notating

**Difficulty Progression:**

**Level 1: Nursery Rhymes (Start Here)**
- "Mary Had a Little Lamb"
- "Twinkle Twinkle Little Star"
- "Happy Birthday"
- 4-8 notes, mostly stepwise motion, simple rhythm

**Level 2: Folk Melodies**
- "Greensleeves"
- "Scarborough Fair"
- "Auld Lang Syne"
- 8-16 notes, some leaps, slightly complex rhythm

**Level 3: Pop Hooks**
- "Yesterday" (Beatles) verse
- "Let It Be" chorus
- "Someone Like You" (Adele) verse
- 16-32 notes, varied rhythm, occasional chromatic notes

**Level 4: Jazz Standards**
- "Autumn Leaves"
- "All the Things You Are"
- "Fly Me to the Moon"
- Complex harmony, chromatic passing tones, syncopation

**Level 5: Classical Themes**
- Beethoven Symphony themes
- Mozart melodies
- Bach inventions
- Fast runs, ornaments, complex phrasing

**Common Mistakes:**
- Trying to get everything in one listen (use multiple passes!)
- Not establishing the key first (you'll get lost)
- Mixing up rhythm and pitch (separate them!)
- Starting too difficult (use nursery rhymes first)
- Not singing it back to verify (singing reveals errors)

**DAW Practice:**
1. Find a simple melody on YouTube
2. Load blank MIDI track in your DAW
3. Transcribe by ear (follow the 5-pass system)
4. Slow down the audio if needed (50% speed)
5. Compare to original MIDI if available

**Advanced Techniques:**
- **Chunking**: Transcribe in small phrases (2-4 measures at a time)
- **Loop Section**: Repeat difficult sections 10-20 times
- **Slow Down**: Use time-stretch to hear fast passages clearly
- **Octave Shifting**: Sing melody in comfortable range, then transpose
        `
      }
    ]
  },

  learningObjectives: [
    "Transcribe simple melodies accurately using scale degrees",
    "Separate rhythm and pitch in the dictation process",
    "Apply the 5-pass system for systematic transcription",
    "Verify transcriptions by playing them back",
    "Progress from nursery rhymes to complex melodies"
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
