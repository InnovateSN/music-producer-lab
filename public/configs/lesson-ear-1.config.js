import { buildHeroEyebrow } from '../lesson-engine.js';

export const lessonConfig = {
  lessonKey: "mpl-ear-1-progress",
  lessonNumber: 1,
  lessonCategory: "Ear Training",

  nextLessonUrl: "lesson-ear-2.html",
  prevLessonUrl: "labs.html",
  overviewUrl: "labs.html",

  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 1, categoryLabel: "Ear Training" }),
    title: "Interval Recognition:",
    titleHighlight: "Melodic Intervals",
    subtitle: "Train your ear to recognize intervals played one note at a time. Master the foundational skill for transcription and melody writing."
  },

  exercise: {
    title: "Identify Melodic Intervals by Ear",
    description: "Melodic intervals are two notes played in sequence (one after the other). Training your ear to recognize these intervals is the foundation of music transcription, melody writing, and understanding harmonic relationships. Start by learning to distinguish between small intervals (2nds, 3rds) and large intervals (5ths, octaves).",
    tip: "Associate each interval with a familiar song. For example, a perfect 5th ascending sounds like the beginning of 'Star Wars' theme or 'Twinkle Twinkle Little Star'.",
    steps: [
      '<strong>Minor 2nd (1 semitone)</strong> — The "Jaws" theme. Sounds tense, like a half step. Example: E to F.',
      '<strong>Major 2nd (2 semitones)</strong> — "Happy Birthday" or "Frère Jacques". Sounds like a whole step. Example: C to D.',
      '<strong>Minor 3rd (3 semitones)</strong> — "Greensleeves" or smoke alarm beep. Sounds sad. Example: A to C.',
      '<strong>Major 3rd (4 semitones)</strong> — "When the Saints Go Marching In". Sounds bright and happy. Example: C to E.',
      '<strong>Perfect 4th (5 semitones)</strong> — "Here Comes the Bride" or "Amazing Grace". Stable and open. Example: C to F.',
      '<strong>Perfect 5th (7 semitones)</strong> — "Star Wars" or "Twinkle Twinkle". Powerful and strong. Example: C to G.'
    ]
  },

  theory: {
    sections: [
      {
        title: 'Understanding Melodic Interval Recognition',
        content: \`
**What Are Melodic Intervals?**

Melodic intervals are two pitches played sequentially (one after the other), as opposed to harmonic intervals which are played simultaneously. Your ear needs to:
1. Remember the first pitch
2. Hear the second pitch
3. Calculate the distance between them

**Common Melodic Intervals:**

**Small Intervals (Foundation):**
- **Minor 2nd**: 1 semitone. Jaws theme, tense, chromatic.
- **Major 2nd**: 2 semitones. Happy Birthday, stepwise motion.
- **Minor 3rd**: 3 semitones. Greensleeves, smoke alarm, melancholic.
- **Major 3rd**: 4 semitones. When the Saints, bright, major triad.

**Medium Intervals:**
- **Perfect 4th**: 5 semitones. Here Comes the Bride, wedding march, stable.
- **Tritone (Aug 4th/Dim 5th)**: 6 semitones. The Simpsons, West Side Story "Maria", tense, diabolical.
- **Perfect 5th**: 7 semitones. Star Wars, Twinkle Twinkle, strong, power chord.

**Large Intervals:**
- **Minor 6th**: 8 semitones. Love Story theme, bittersweet.
- **Major 6th**: 9 semitones. My Bonnie Lies Over the Ocean, NBC chimes.
- **Octave**: 12 semitones. Somewhere Over the Rainbow, same note higher.

**Ascending vs. Descending:**
Intervals sound different going up vs. going down. Train both directions separately:
- Ascending M3: Happy, bright (When the Saints)
- Descending M3: Softer, resolved (Beethoven's 5th - last 2 notes of main motif)
        \`
      },
      {
        title: 'Practical Interval Training Strategy',
        content: \`
**Daily Training Routine:**

**Week 1-2: Small Intervals**
- Focus on m2, M2, m3, M3
- Use apps: Teoria.com, Perfect Ear, EarMaster
- 10-15 minutes daily
- Goal: 80% accuracy

**Week 3-4: Add P4 and P5**
- Most common intervals in melodies
- Practice in both directions (ascending/descending)
- Sing intervals out loud (reinforces muscle memory)

**Week 5-6: Large Intervals**
- M6, m6, M7, m7, Octave
- These are less common but critical for advanced transcription
- Mix with smaller intervals in random drills

**Song Association Method:**
- **m2 up**: Jaws, White Christmas "Sleep in heavenly"
- **M2 up**: Happy Birthday, Silent Night
- **m3 up**: Greensleeves, Smoke on the Water riff
- **M3 up**: When the Saints, Oh When the
- **P4 up**: Here Comes the Bride, Amazing Grace
- **Tritone**: The Simpsons theme, Maria (WSS)
- **P5 up**: Star Wars, Twinkle Twinkle
- **m6 up**: Love Story theme, The Entertainer (start)
- **M6 up**: My Bonnie, NBC chimes
- **Octave up**: Somewhere Over the Rainbow

**Common Mistakes:**
- Trying to learn all intervals at once (overwhelming)
- Not practicing descending intervals (they sound different)
- Ignoring context (intervals sound different in different keys)
- Not singing intervals (passive listening isn't enough)

**Pro Tips:**
- Use a piano or MIDI keyboard to check your answers
- Record yourself playing random intervals, then identify them later
- Transcribe simple melodies (nursery rhymes, pop hooks)
- Practice with different timbres (piano, synth, guitar, voice)
        \`
      }
    ]
  },

  learningObjectives: [
    "Identify all common melodic intervals (m2 through octave) by ear",
    "Distinguish between ascending and descending intervals",
    "Associate intervals with familiar song references",
    "Apply interval recognition to simple melody transcription",
    "Develop systematic approach to ear training practice"
  ]
};
