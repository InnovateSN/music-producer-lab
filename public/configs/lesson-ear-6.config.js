import { buildHeroEyebrow } from '../lesson-engine.js';

export const lessonConfig = {
  lessonKey: "mpl-ear-6-progress",
  lessonNumber: 6,
  lessonCategory: "Ear Training",

  nextLessonUrl: "lesson-ear-7.html",
  prevLessonUrl: "lesson-ear-5.html",
  overviewUrl: "labs.html",

  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 6, categoryLabel: "Ear Training" }),
    title: "Pitch Accuracy Training:",
    titleHighlight: "Relative & Perfect Pitch",
    subtitle: "Develop perfect pitch awareness and relative pitch skills. Improve your ability to sing and identify specific pitches."
  },

  exercise: {
    title: "Develop Pitch Accuracy and Recognition",
    description: "Pitch accuracy training develops your ability to identify and reproduce specific pitches. Relative pitch (hearing relationships between notes) can be learned by anyone. Perfect pitch (identifying absolute note names without reference) is rare but can be improved with training. Both skills dramatically improve your musicianship, transcription ability, and vocal performance.",
    tip: "Relative pitch is more important and practical than perfect pitch. Focus on hearing intervals and scale degrees rather than trying to memorize absolute pitches.",
    steps: [
      '<strong>Relative Pitch</strong> — Identify notes by their relationship to a reference pitch. Example: hear C, then identify E as "major 3rd up."',
      '<strong>Scale Degree Recognition</strong> — Identify notes by their position in a key. Example: in C major, G is the 5th, F is the 4th.',
      '<strong>Vocal Matching</strong> — Sing pitches accurately. Use a piano or tuner app to check your accuracy.',
      '<strong>Perfect Pitch Awareness</strong> — Associate specific pitches with timbres, colors, or feelings. C might feel "bright," E might feel "warm."',
      '<strong>Daily Practice</strong> — 10 minutes daily: play random notes, identify them (relative pitch), then sing them back.'
    ]
  },

  theory: {
    sections: [
      {
        title: 'Understanding Pitch Accuracy and Recognition',
        content: `
**Relative Pitch vs. Perfect Pitch:**

**Relative Pitch (Learnable by Everyone):**
- Ability to identify notes based on their relationship to a reference
- Example: Given an A, identify D as "perfect 4th up"
- Most professional musicians use relative pitch
- Can be trained systematically
- More practical than perfect pitch for most music tasks

**Perfect Pitch (Rare, Partially Genetic):**
- Ability to identify or produce a note without reference
- Example: Hear a G# and say "that's G sharp" instantly
- Only ~1 in 10,000 people have true perfect pitch
- Often develops in early childhood (critical period: 2-5 years old)
- Can be improved with training but rarely fully acquired as adult

**Pseudo-Absolute Pitch (Trainable):**
- Strong relative pitch + memorized reference tones
- Example: Memorize what A440 sounds like, derive others from it
- Many "perfect pitch" claims are actually this
- Good enough for practical music production

**Scale Degree Hearing:**
The most practical skill for musicians:
- **Tonic (1)**: Home, stable, resolved
- **Supertonic (2)**: Wants to move to 1 or 3
- **Mediant (3)**: Defines major/minor quality
- **Subdominant (4)**: Pulls upward or outward
- **Dominant (5)**: Strong, wants to resolve to 1
- **Submediant (6)**: Emotional pivot point
- **Leading Tone (7)**: Pulls strongly up to 1

**Training Benefits:**
- Faster transcription (hear melodies, write them down)
- Better vocal performance (sing in tune)
- Improved improvisation (know where you are in the key)
- Easier composition (hear ideas in your head, reproduce them)
        `
      },
      {
        title: 'Practical Pitch Training Strategy',
        content: `
**12-Week Pitch Training Program:**

**Weeks 1-4: Scale Degree Recognition**
1. Play a major scale (C major: C-D-E-F-G-A-B-C)
2. Play root note (C) as reference
3. Play random notes from scale
4. Identify by number (1, 2, 3, 4, 5, 6, 7)
5. Goal: Instant recognition of scale degrees

**Weeks 5-8: Interval Reinforcement**
1. Combine scale degrees with interval training
2. Example: "5 to 1" = perfect 4th down
3. Example: "1 to 3" = major 3rd up
4. Strengthens relative pitch foundation

**Weeks 9-12: Vocal Matching**
1. Play a note on piano
2. Sing it back (use tuner app to verify)
3. Increase difficulty: arpeggios, melodies
4. Record yourself, analyze pitch drift

**Advanced: Reference Tone Method**
- Memorize A440 (concert A, tuning fork pitch)
- Practice recalling A440 throughout the day
- Derive other notes from this reference
- Eventually memorize all 12 chromatic notes

**Exercise 1: Sing the Scale**
1. Play C major scale ascending
2. Sing along with it
3. Play scale again, pause on random notes
4. Sing that note, check with piano

**Exercise 2: Scale Degree Dictation**
1. Establish tonic (play root note)
2. Play random scale degrees: 5, 3, 1, 6, 4
3. Sing them back
4. Write them down (using numbers)

**Exercise 3: Melodic Dictation**
1. Play a simple melody (4-8 notes)
2. Identify each note by scale degree
3. Write it down: 1-3-5-5-6-5-4-3-1
4. Verify by playing it back

**Exercise 4: Perfect Pitch Training (Advanced)**
1. Play C note every day at same time
2. Try to recall it 1 hour later (sing or hum)
3. Check accuracy
4. Gradually add other notes (C, E, G, etc.)
5. This builds pitch memory anchors

**Common Mistakes:**
- Trying to develop perfect pitch instead of relative pitch (wrong priority)
- Not using a reference tone (always establish tonic first)
- Practicing pitch without rhythm (rhythm + pitch = melody)
- Not singing (passive listening doesn't build muscle memory)
- Expecting overnight results (pitch training takes months)

**Tools and Apps:**
- **Perfect Ear** (Android/iOS) - scale degree training
- **EarMaster** - comprehensive ear training
- **Functional Ear Trainer** - scale degree focus
- **Tuner apps** - verify vocal accuracy (Pitched Tuner, Tunable)

**DAW Practice:**
1. Create a simple melody in MIDI
2. Play it once
3. Try to recreate it by ear (don't look at MIDI)
4. Compare your version to original
5. Analyze mistakes (wrong scale degree? wrong rhythm?)
        `
      }
    ]
  },

  learningObjectives: [
    "Develop strong relative pitch skills for interval recognition",
    "Identify scale degrees (1-7) instantly within a key",
    "Sing pitches accurately using vocal matching techniques",
    "Build pitch memory anchors for reference tones",
    "Apply pitch accuracy to transcription and vocal performance"
  ]
};
