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
  ],

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
