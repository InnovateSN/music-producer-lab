#!/bin/bash

cd /home/user/music-producer-lab/configs

# Lesson Ear 3: Chord Quality
cat > lesson-ear-3.config.js << 'EOF'
import { buildHeroEyebrow } from '../lesson-engine.js';

export const lessonConfig = {
  lessonKey: "mpl-ear-3-progress",
  lessonNumber: 3,
  lessonCategory: "Ear Training",

  nextLessonUrl: "lesson-ear-4.html",
  prevLessonUrl: "lesson-ear-2.html",
  overviewUrl: "labs.html",

  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 3, categoryLabel: "Ear Training" }),
    title: "Chord Quality:",
    titleHighlight: "Major, Minor, Dim, Aug",
    subtitle: "Distinguish between major, minor, diminished, and augmented triads by ear. Build the foundation for advanced chord recognition."
  },

  exercise: {
    title: "Identify Chord Quality by Ear",
    description: "Chord quality refers to the characteristic sound of a chord based on its interval structure. Major chords sound bright and happy. Minor chords sound dark and sad. Diminished chords sound tense and unstable. Augmented chords sound dreamy and unresolved. Training your ear to instantly recognize these qualities is essential for transcription and chord progression analysis.",
    tip: "Major = happy/bright. Minor = sad/dark. Diminished = tense/spooky. Augmented = weird/floating/unresolved.",
    steps: [
      '<strong>Major Triad</strong> — Root + M3 + P5. Bright, happy, stable. Example: C-E-G. Most common in pop music.',
      '<strong>Minor Triad</strong> — Root + m3 + P5. Dark, sad, emotional. Example: C-Eb-G. Very common in ballads.',
      '<strong>Diminished Triad</strong> — Root + m3 + dim5. Tense, spooky, unstable. Example: C-Eb-Gb. Wants to resolve.',
      '<strong>Augmented Triad</strong> — Root + M3 + aug5. Dreamy, floating, mysterious. Example: C-E-G#. Rare, used for color.',
      '<strong>Practice Method</strong> — Play chords randomly, guess the quality before checking. Start slow, increase speed as you improve.'
    ]
  },

  theory: {
    sections: [
      {
        title: 'Understanding Chord Quality',
        content: \`
**The Four Basic Triad Qualities:**

**Major Triad:**
- Structure: Root + Major 3rd (4 semitones) + Perfect 5th (7 semitones from root)
- Interval stack: M3 + m3
- Example: C major = C-E-G
- Sound: Happy, bright, stable, resolved
- Emotional: Joy, triumph, confidence
- Usage: Pop, rock, classical, most common chord type

**Minor Triad:**
- Structure: Root + minor 3rd (3 semitones) + Perfect 5th
- Interval stack: m3 + M3
- Example: C minor = C-Eb-G
- Sound: Sad, dark, melancholic
- Emotional: Sorrow, introspection, mystery
- Usage: Ballads, emotional sections, relative minor in progressions

**Diminished Triad:**
- Structure: Root + minor 3rd + diminished 5th (6 semitones from root)
- Interval stack: m3 + m3
- Example: C diminished = C-Eb-Gb
- Sound: Tense, unstable, spooky, ominous
- Emotional: Suspense, danger, unresolved tension
- Usage: Passing chords, horror scores, jazz (vii° chord)

**Augmented Triad:**
- Structure: Root + Major 3rd + augmented 5th (8 semitones from root)
- Interval stack: M3 + M3
- Example: C augmented = C-E-G#
- Sound: Dreamy, floating, mysterious, unresolved
- Emotional: Surreal, otherworldly, ambiguous
- Usage: Rare, jazz, impressionist music, film scores for weird scenes

**Key Interval Differences:**
- Major vs Minor: 3rd (M3 vs m3) - most obvious difference
- Minor vs Diminished: 5th (P5 vs dim5) - added tension
- Major vs Augmented: 5th (P5 vs aug5) - floating quality

**Recognition Strategy:**
1. First, determine if it sounds stable or unstable (major/minor = stable, dim/aug = unstable)
2. If stable, is it bright (major) or dark (minor)?
3. If unstable, is it tense/ominous (diminished) or dreamy/floating (augmented)?
        \`
      },
      {
        title: 'Practical Chord Quality Training',
        content: \`
**Training Exercises:**

**Exercise 1: Binary Comparison**
- Week 1: Major vs. Minor only
- Play random major/minor chords
- Goal: 95% accuracy before moving on
- This is the most important distinction

**Exercise 2: Add Diminished**
- Week 2: Major vs. Minor vs. Diminished
- Diminished is clearly unstable (helps distinguish it)
- Focus on the dim5 interval sound

**Exercise 3: Full Four-Way**
- Week 3+: All four qualities randomly
- Augmented is rare but important for jazz/film music
- Practice until automatic recognition

**Contextual Training:**
- Hear chords in progressions, not isolation
- Example: I-vi-IV-V in C major: C(maj)-Am(min)-F(maj)-G(maj)
- Example: i-VI-III-VII in A minor: Am(min)-F(maj)-C(maj)-G(maj)

**Advanced: Quality + Inversion**
- Root position: C-E-G (major)
- 1st inversion: E-G-C (major, but different bass)
- 2nd inversion: G-C-E (major, but different bass)
- Same quality, different voicing

**Transcription Application:**
1. Listen to a song
2. Identify root notes (bass line)
3. Determine chord quality (major/minor/dim/aug)
4. Write chord symbols (C, Am, Bdim, Faug)

**Common Mistakes:**
- Confusing inversions with different qualities
- Not listening to the 3rd (it defines major vs minor)
- Ignoring the 5th (it defines dim vs aug)
- Practicing too fast (accuracy > speed initially)

**Song Examples:**
- **Major chords**: Most pop choruses, happy songs
- **Minor chords**: "Stairway to Heaven" intro, "Losing My Religion"
- **Diminished chords**: "Somewhere Over the Rainbow" (F#dim), passing chords in jazz
- **Augmented chords**: Rare, but in "Oh! Darling" (Beatles), certain jazz standards

**DAW Practice:**
- Create 4 MIDI tracks with random triads
- Label them 1, 2, 3, 4
- Play in random order, identify quality
- Check MIDI notes to verify
        \`
      }
    ]
  },

  learningObjectives: [
    "Instantly distinguish major from minor triads by ear",
    "Identify diminished chords by their unstable, tense quality",
    "Recognize augmented chords by their floating, unresolved sound",
    "Apply chord quality recognition to song transcription",
    "Understand the emotional and functional differences between qualities"
  ]
};
EOF

# Lesson Ear 4: Scale & Mode Recognition
cat > lesson-ear-4.config.js << 'EOF'
import { buildHeroEyebrow } from '../lesson-engine.js';

export const lessonConfig = {
  lessonKey: "mpl-ear-4-progress",
  lessonNumber: 4,
  lessonCategory: "Ear Training",

  nextLessonUrl: "lesson-ear-5.html",
  prevLessonUrl: "lesson-ear-3.html",
  overviewUrl: "labs.html",

  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 4, categoryLabel: "Ear Training" }),
    title: "Scale & Mode Recognition:",
    titleHighlight: "Major, Minor, and Modal Sounds",
    subtitle: "Identify scales and modes by their characteristic sound. Recognize major, minor, and modal patterns in music."
  },

  exercise: {
    title: "Identify Scales and Modes by Ear",
    description: "Every scale and mode has a unique sonic fingerprint based on its interval pattern. Major scales sound bright and happy. Natural minor sounds dark and sad. Each of the 7 modes (Ionian, Dorian, Phrygian, Lydian, Mixolydian, Aeolian, Locrian) has characteristic notes that define its color. Training your ear to recognize these patterns helps you identify the key and mood of any song instantly.",
    tip: "Focus on the 'characteristic note' of each mode. Dorian has a raised 6th, Phrygian has a flat 2nd, Lydian has a raised 4th, Mixolydian has a flat 7th.",
    steps: [
      '<strong>Major (Ionian)</strong> — W-W-H-W-W-W-H pattern. Sounds bright, happy, stable. C major: C-D-E-F-G-A-B.',
      '<strong>Natural Minor (Aeolian)</strong> — W-H-W-W-H-W-W pattern. Sounds dark, sad, melancholic. A minor: A-B-C-D-E-F-G.',
      '<strong>Dorian</strong> — Like minor but with raised 6th. Sounds jazzy, funky, bright minor. D Dorian: D-E-F-G-A-B-C.',
      '<strong>Phrygian</strong> — Like minor but with flat 2nd. Sounds Spanish, exotic, dark. E Phrygian: E-F-G-A-B-C-D.',
      '<strong>Lydian</strong> — Like major but with raised 4th (#11). Sounds dreamy, floating, ethereal. F Lydian: F-G-A-B-C-D-E.',
      '<strong>Mixolydian</strong> — Like major but with flat 7th. Sounds bluesy, rocky, dominant. G Mixolydian: G-A-B-C-D-E-F.'
    ]
  },

  theory: {
    sections: [
      {
        title: 'Understanding Scale and Mode Recognition',
        content: \`
**Major vs. Minor: The Foundation**

**Major Scale (Ionian):**
- Formula: W-W-H-W-W-W-H
- Sound: Bright, happy, stable, resolved
- Characteristic: Natural 3rd, natural 7th (leading tone)
- Usage: Most pop, rock, classical, happy music

**Natural Minor (Aeolian):**
- Formula: W-H-W-W-H-W-W
- Sound: Dark, sad, melancholic
- Characteristic: Flat 3rd, flat 6th, flat 7th
- Usage: Ballads, emotional music, metal

**The 7 Modes (from C major parent scale):**

**Bright Modes (Major-ish):**
1. **Ionian (C major)**: C-D-E-F-G-A-B
   - Standard major scale
   - Most stable, brightest

2. **Lydian (F)**: F-G-A-B-C-D-E
   - Major with raised 4th (#11)
   - Characteristic note: B (the #4)
   - Sound: Dreamy, floating, film scores
   - Example: "The Simpsons" theme

3. **Mixolydian (G)**: G-A-B-C-D-E-F
   - Major with flat 7th
   - Characteristic note: F (the b7)
   - Sound: Bluesy, rock, dominant function
   - Example: "Norwegian Wood", "Sweet Home Alabama"

**Dark Modes (Minor-ish):**
4. **Aeolian (A minor)**: A-B-C-D-E-F-G
   - Standard natural minor scale
   - Most stable minor sound

5. **Dorian (D)**: D-E-F-G-A-B-C
   - Minor with raised 6th
   - Characteristic note: B (the natural 6)
   - Sound: Jazzy, funky, brighter minor
   - Example: "So What" (Miles Davis), "Scarborough Fair"

6. **Phrygian (E)**: E-F-G-A-B-C-D
   - Minor with flat 2nd
   - Characteristic note: F (the b2)
   - Sound: Spanish, flamenco, exotic, dark
   - Example: "White Rabbit" (Jefferson Airplane), metal

**Unstable Modes:**
7. **Locrian (B)**: B-C-D-E-F-G-A
   - Diminished sound (b5)
   - Very unstable, rarely used
   - Theoretical more than practical
        \`
      },
      {
        title: 'Practical Scale and Mode Training',
        content: \`
**Training Progression:**

**Phase 1: Major vs. Minor (Weeks 1-2)**
- Only distinguish between major (Ionian) and minor (Aeolian)
- 95% accuracy required before moving on
- Listen to pop songs, identify if major or minor key

**Phase 2: Add Dorian, Mixolydian (Weeks 3-4)**
- Most common modes after Ionian/Aeolian
- Dorian: funky, jazzy minor feel
- Mixolydian: blues-rock major feel
- Listen to: "So What" (Dorian), "Sweet Home Alabama" (Mixolydian)

**Phase 3: Add Phrygian, Lydian (Weeks 5-6)**
- Phrygian: Spanish/exotic feel, metal
- Lydian: dreamy, film score feel
- Listen to: "White Rabbit" (Phrygian), "The Simpsons" theme (Lydian)

**Phase 4: Context and Modulation**
- Identify modes in progressions (not just single scales)
- Detect when songs shift between modes
- Example: verse in minor, chorus in major

**Recognition Strategy:**

**Step 1: Major or Minor Family?**
- Listen to the 3rd scale degree
- If bright/happy → Major family (Ionian, Lydian, Mixolydian)
- If dark/sad → Minor family (Aeolian, Dorian, Phrygian)

**Step 2: Characteristic Note**
- **Lydian**: Raised 4th stands out (dreamy quality)
- **Mixolydian**: Flat 7th creates bluesy sound
- **Dorian**: Raised 6th brightens the minor
- **Phrygian**: Flat 2nd creates exotic flavor

**Step 3: Emotional Context**
- Lydian: Magical, floating, otherworldly
- Mixolydian: Earthy, bluesy, dominant
- Dorian: Sophisticated, jazzy, funky
- Phrygian: Dark, exotic, Spanish

**Common Mistakes:**
- Confusing Dorian with Aeolian (listen for the 6th!)
- Confusing Mixolydian with Ionian (listen for the 7th!)
- Not using reference songs (memorize modal song examples)
- Practicing modes in isolation (they work best in context)

**Song Examples by Mode:**
- **Ionian**: Most pop songs ("Let It Be", "Don't Stop Believin'")
- **Dorian**: "So What", "Scarborough Fair", "Mad World"
- **Phrygian**: "White Rabbit", "Wherever I May Roam", flamenco
- **Lydian**: "Dreams" (Fleetwood Mac), "The Simpsons" theme
- **Mixolydian**: "Sweet Home Alabama", "Norwegian Wood", "Hey Jude" (end)
- **Aeolian**: "Losing My Religion", "Stairway to Heaven" intro

**DAW Practice:**
1. Create a MIDI loop playing a mode
2. Emphasize characteristic notes
3. Randomize modes, identify them
4. Compare two modes side-by-side (e.g., Dorian vs. Aeolian)
        \`
      }
    ]
  },

  learningObjectives: [
    "Instantly distinguish major from minor scales by ear",
    "Identify the characteristic sound of each mode",
    "Recognize Dorian, Mixolydian, Phrygian, and Lydian in music",
    "Use characteristic notes to pinpoint modal identity",
    "Apply modal recognition to song analysis and production"
  ]
};
EOF

# Lesson Ear 5: Rhythm Pattern Recognition
cat > lesson-ear-5.config.js << 'EOF'
import { buildHeroEyebrow } from '../lesson-engine.js';

export const lessonConfig = {
  lessonKey: "mpl-ear-5-progress",
  lessonNumber: 5,
  lessonCategory: "Ear Training",

  nextLessonUrl: "lesson-ear-6.html",
  prevLessonUrl: "lesson-ear-4.html",
  overviewUrl: "labs.html",

  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 5, categoryLabel: "Ear Training" }),
    title: "Rhythm Pattern Recognition:",
    titleHighlight: "Transcribe Grooves & Beats",
    subtitle: "Transcribe and identify rhythm patterns. Train your ear to recognize note values, syncopation, and groove elements."
  },

  exercise: {
    title: "Transcribe Rhythm Patterns by Ear",
    description: "Rhythm recognition is the ability to hear a rhythmic pattern and accurately reproduce or notate it. This involves identifying note values (quarters, eighths, sixteenths), rests, syncopation (off-beat emphasis), and groove feel (swing, shuffle, straight). Strong rhythm ear training is essential for programming drums, understanding groove, and transcribing music accurately.",
    tip: "Count out loud using subdivisions: '1 e & a, 2 e & a, 3 e & a, 4 e & a' for sixteenth notes. Tap the pulse with your foot while clapping the rhythm.",
    steps: [
      '<strong>Quarter Notes</strong> — Steady pulse on each beat. Count: 1, 2, 3, 4. Simplest rhythm, foundation of all groove.',
      '<strong>Eighth Notes</strong> — Two notes per beat. Count: 1 &, 2 &, 3 &, 4 &. Common in rock, pop, house.',
      '<strong>Sixteenth Notes</strong> — Four notes per beat. Count: 1 e & a, 2 e & a. Common in hip-hop, trap, double-time feel.',
      '<strong>Syncopation</strong> — Emphasis on off-beats (the "&" or weak beats). Creates rhythmic tension. Essential in funk, reggae.',
      '<strong>Rests</strong> — Silence is part of rhythm. Quarter rest = 1 beat of silence. Eighth rest = 0.5 beats silence.',
      '<strong>Triplets</strong> — Three notes per beat. Count: 1-trip-let, 2-trip-let. Creates swing feel in jazz, shuffle in blues.'
    ]
  },

  theory: {
    sections: [
      {
        title: 'Understanding Rhythm Pattern Recognition',
        content: \`
**Note Values and Subdivisions:**

**Basic Note Values (in 4/4 time):**
- **Whole note**: 4 beats (rare in modern music)
- **Half note**: 2 beats
- **Quarter note**: 1 beat (the pulse in most music)
- **Eighth note**: 0.5 beats (1 & 2 & 3 & 4 &)
- **Sixteenth note**: 0.25 beats (1 e & a, 2 e & a...)

**Counting Systems:**

**Quarter Note Pulse:**
- Count: 1, 2, 3, 4
- Used for: Slow ballads, half-time feels

**Eighth Note Subdivision:**
- Count: 1 &, 2 &, 3 &, 4 &
- Used for: Rock, pop, house, most common

**Sixteenth Note Subdivision:**
- Count: 1 e & a, 2 e & a, 3 e & a, 4 e & a
- Used for: Hip-hop, trap, funk, fast passages

**Triplet Feel:**
- Count: 1 trip let, 2 trip let, 3 trip let
- Each beat divided into 3 equal parts
- Used for: Jazz, swing, shuffle, blues

**Syncopation:**
Definition: Emphasis on off-beats or weak beats
- **On-beat**: Kick on 1 and 3 (boring, march-like)
- **Off-beat**: Snare on 2 and 4 (standard backbeat)
- **Syncopated**: Emphasis on "&" or "e" or "a" (funk, hip-hop, reggae)

**Example Syncopated Pattern (funk):**
- Kick: 1, &, 3
- Snare: 2, 4
- Hi-hat: Steady 16ths with ghost notes

**Common Rhythm Patterns:**

**Rock/Pop:**
- Kick: 1, 3
- Snare: 2, 4
- Hi-hat: Steady 8ths or 16ths

**Hip-Hop/Trap:**
- Kick: 1, "e" of 2, 3
- Snare: 2, 4
- Hi-hats: Fast triplets or 16ths with rolls

**Reggae:**
- Kick: 3
- Snare/Rimshot: 2, 4
- Off-beat emphasis on "&" (skank rhythm)
        \`
      },
      {
        title: 'Practical Rhythm Ear Training',
        content: \`
**Training Progression:**

**Week 1: Quarter and Eighth Notes**
- Clap or tap simple patterns
- Count out loud: "1 &, 2 &, 3 &, 4 &"
- Transcribe basic melodies (nursery rhymes)

**Week 2: Sixteenth Notes**
- Introduce "1 e & a" counting
- Practice faster subdivisions
- Transcribe hip-hop hi-hat patterns

**Week 3: Rests and Syncopation**
- Identify silence (rests) in patterns
- Clap syncopated rhythms (funk grooves)
- Listen to James Brown, Funkadelic

**Week 4: Triplets and Swing**
- "1 trip let" counting
- Practice swing feel (jazz, blues)
- Listen to swing drummers, shuffle beats

**Exercise 1: Tap and Count**
1. Listen to a drum loop
2. Tap the pulse (quarter note) with your foot
3. Count subdivisions out loud
4. Clap the pattern you hear
5. Write it down (or program in MIDI)

**Exercise 2: Isolation**
- Listen to kick drum only → transcribe
- Listen to snare only → transcribe
- Listen to hi-hat only → transcribe
- Combine all three

**Exercise 3: Layering**
1. Start with kick (usually on strong beats: 1, 3)
2. Add snare (usually on 2, 4)
3. Add hi-hats (usually 8ths or 16ths)
4. Add percussion (often syncopated)

**Exercise 4: Genre Recognition**
Listen and identify:
- **Four-on-the-floor**: House, techno, disco
- **Breakbeat**: Amen break, hip-hop
- **Half-time**: Trap, dubstep
- **Two-step**: UK garage, grime

**Common Mistakes:**
- Not counting out loud (internal counting is harder)
- Guessing instead of systematically analyzing
- Ignoring the pulse (always establish the quarter note first)
- Not tapping along (kinesthetic memory helps)
- Skipping rests (silence is part of rhythm)

**DAW Practice:**
1. Load a drum loop
2. Enable metronome
3. Transcribe by ear into MIDI
4. Check against original (time-stretch and compare)
5. Analyze where you made mistakes

**Advanced: Polyrhythm and Odd Time**
- 3 against 2 (triplets over duple feel)
- 5/4, 7/8 time signatures (odd meters)
- Listen to: Dave Brubeck "Take Five" (5/4), Tool (complex polyrhythms)
        \`
      }
    ]
  },

  learningObjectives: [
    "Identify quarter, eighth, and sixteenth note patterns by ear",
    "Recognize syncopation and off-beat emphasis",
    "Transcribe drum grooves accurately in MIDI",
    "Distinguish between straight and swung rhythms",
    "Apply rhythm recognition to programming and arrangement"
  ]
};
EOF

echo "Created lessons 3-5"
