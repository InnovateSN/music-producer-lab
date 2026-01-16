#!/bin/bash

cd /home/user/music-producer-lab/configs

# Lesson Ear 1: Interval Recognition Melodic
cat > lesson-ear-1.config.js << 'EOF'
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
EOF

# Lesson Ear 2: Interval Recognition Harmonic
cat > lesson-ear-2.config.js << 'EOF'
import { buildHeroEyebrow } from '../lesson-engine.js';

export const lessonConfig = {
  lessonKey: "mpl-ear-2-progress",
  lessonNumber: 2,
  lessonCategory: "Ear Training",

  nextLessonUrl: "lesson-ear-3.html",
  prevLessonUrl: "lesson-ear-1.html",
  overviewUrl: "labs.html",

  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 2, categoryLabel: "Ear Training" }),
    title: "Interval Recognition:",
    titleHighlight: "Harmonic Intervals",
    subtitle: "Identify intervals played simultaneously. Essential for understanding chord voicings and harmonic structure."
  },

  exercise: {
    title: "Identify Harmonic Intervals by Ear",
    description: "Harmonic intervals are two notes played at the same time (simultaneously). Unlike melodic intervals where you hear notes in sequence, harmonic intervals create a single blended sound that can be consonant (pleasant) or dissonant (tense). This skill is critical for understanding chord voicings, mixing harmonies, and analyzing chord progressions.",
    tip: "Consonant intervals (3rds, 5ths, 6ths, octaves) sound stable and pleasant. Dissonant intervals (2nds, 7ths, tritones) sound tense and want to resolve.",
    steps: [
      '<strong>Perfect Unison & Octave</strong> — Same note or 12 semitones apart. Sounds like a single, reinforced pitch. Very consonant.',
      '<strong>Perfect 5th</strong> — Empty, open, hollow sound. Used in power chords (rock, metal). Very consonant.',
      '<strong>Major 3rd</strong> — Bright, happy, full. Foundation of major chords. Consonant.',
      '<strong>Minor 3rd</strong> — Dark, sad, rich. Foundation of minor chords. Consonant.',
      '<strong>Major 2nd</strong> — Slightly tense, needs resolution. Cluster sound. Mildly dissonant.',
      '<strong>Minor 2nd</strong> — Very tense, harsh, crunchy. Maximum dissonance. Wants to resolve immediately.',
      '<strong>Tritone</strong> — "Devil\'s interval". Ambiguous, unsettling. Very dissonant.'
    ]
  },

  theory: {
    sections: [
      {
        title: 'Understanding Harmonic Interval Recognition',
        content: \`
**Consonance vs. Dissonance:**

**Perfect Consonances (Most Stable):**
- **Unison**: Same pitch. No tension.
- **Octave (P8)**: Same note, different register. Reinforces fundamental.
- **Perfect 5th (P5)**: Power chord sound. Open, hollow, strong. C-G.

**Imperfect Consonances (Pleasant, Stable):**
- **Major 3rd (M3)**: Bright, happy. C-E. Major chord basis.
- **Minor 3rd (m3)**: Sad, rich. C-Eb. Minor chord basis.
- **Major 6th (M6)**: Sweet, open. C-A.
- **Minor 6th (m6)**: Melancholic but stable. C-Ab.

**Dissonances (Tense, Unstable):**
- **Major 2nd (M2)**: Cluster sound. C-D. Needs resolution.
- **Minor 2nd (m2)**: Very harsh. C-Db. Maximum tension.
- **Major 7th (M7)**: Jazzy tension. C-B. Wants to resolve to octave.
- **Minor 7th (m7)**: Blues/jazz color. C-Bb. Mild tension.
- **Tritone (Aug4/Dim5)**: Devil's interval. C-F#. Ambiguous, unstable.

**Perfect 4th (P4):**
- Depends on context
- Consonant in melodic use
- Can sound dissonant harmonically (wants to resolve)
- C-F sounds more stable than F-C (inverted)

**How Harmonic Intervals Differ from Melodic:**
- Melodic: You remember first note, compare to second
- Harmonic: Both notes fuse into a single timbre
- Harmonic intervals have a "color" or "texture"
- Beating/roughness occurs when frequencies clash (m2, M2, tritone)
        \`
      },
      {
        title: 'Practical Harmonic Interval Training',
        content: \`
**Training Strategy:**

**Phase 1: Consonance Categories**
1. Learn to distinguish perfect consonances (unison, 5th, octave)
2. Add imperfect consonances (3rds, 6ths)
3. Recognize dissonances (2nds, 7ths, tritone)

**Phase 2: Quality Distinction**
- Major vs. Minor 3rds (bright vs. dark)
- Major vs. Minor 6ths (open vs. closed)
- Major vs. Minor 2nds/7ths (extremely harsh vs. harsh)

**Phase 3: Context Application**
- Identify intervals within chord voicings
- Analyze double-stops (guitar, strings)
- Recognize intervals in vocal harmonies

**Listening Exercises:**

**Exercise 1: Consonance Spectrum**
Play intervals in this order and rate them from most to least consonant:
- Octave → P5 → M3 → M6 → m3 → m6 → P4 → M2 → m7 → M7 → m2 → Tritone

**Exercise 2: Chord Deconstruction**
1. Play a major chord (C-E-G)
2. Isolate each interval: C-E (M3), E-G (m3), C-G (P5)
3. Repeat with minor chords, 7th chords

**Exercise 3: Interval Mixing**
Use your DAW to layer two notes:
- P5: Clean, open, no beating
- m2: Harsh, beating, frequency clash
- M3: Warm, full, stable

**Common Mistakes:**
- Confusing harmonic with melodic intervals (different skill)
- Not paying attention to register (intervals sound different in bass vs. treble)
- Ignoring timbre (intervals sound different on piano vs. synth vs. guitar)
- Forgetting inversions (P5 up vs. P4 down)

**Pro Applications:**
- **Mixing**: Identify harsh intervals causing frequency masking
- **Chord Voicing**: Choose intervals that blend well
- **Sound Design**: Layer oscillators at consonant intervals (P5, octave)
- **Harmony Writing**: Avoid parallel dissonances, use consonant voice leading
        \`
      }
    ]
  },

  learningObjectives: [
    "Distinguish between consonant and dissonant harmonic intervals",
    "Identify all common harmonic intervals by their blend/color",
    "Understand how intervals create tension and resolution",
    "Apply interval recognition to chord voicing analysis",
    "Use harmonic interval knowledge in mixing and arrangement"
  ]
};
EOF

echo "Created lessons 1-2"
