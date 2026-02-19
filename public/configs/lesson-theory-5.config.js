import { buildHeroEyebrow } from '../lesson-engine.js';

export const lessonConfig = {
  lessonKey: "mpl-theory-5-progress",
  lessonNumber: 5,
  lessonCategory: "Music Theory Fundamentals",

  nextLessonUrl: "lesson-theory-6.html",
  prevLessonUrl: "lesson-theory-4.html",
  overviewUrl: "labs.html",

  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 5, categoryLabel: "Music Theory Fundamentals" }),
    title: "Rhythm Notation:",
    titleHighlight: "Time Signatures & Note Values",
    subtitle: "Learn to read and write rhythms. Master note values, rests, ties, dots, and how time signatures organize music."
  },

  exercise: {
    title: "Read and Program Rhythmic Patterns",
    description: "Rhythm notation tells us when to play notes and for how long. Note values (whole, half, quarter, eighth, sixteenth) divide time into precise durations. Time signatures (4/4, 3/4, 6/8) organize beats into measures. Understanding rhythm notation is essential for reading scores and programming accurate MIDI.",
    tip: "In 4/4 time: 1 whole note = 2 half notes = 4 quarter notes = 8 eighth notes = 16 sixteenth notes.",
    steps: [
      '<strong>Note Values</strong> — Whole note (4 beats), half note (2 beats), quarter note (1 beat), eighth note (0.5 beats), sixteenth note (0.25 beats).',
      '<strong>Rests</strong> — Silence for the same duration as their note counterparts. Whole rest, half rest, quarter rest, eighth rest, sixteenth rest.',
      '<strong>Dots</strong> — Add half the note\'s value. Dotted quarter = 1.5 beats. Dotted half = 3 beats.',
      '<strong>Ties</strong> — Connect two notes into one sustained duration. Quarter tied to quarter = half note.',
      '<strong>Time Signatures</strong> — Top number = beats per measure. Bottom number = note value per beat. 4/4 = 4 beats, quarter note gets the beat.'
    ]
  },

  theory: {
    sections: [
      {
        title: 'Understanding Rhythm Notation',
        content: `
**Note Values (in 4/4 time):**

- **Whole Note** (semibreve): 4 beats, open oval
- **Half Note** (minim): 2 beats, open oval with stem
- **Quarter Note** (crotchet): 1 beat, filled oval with stem
- **Eighth Note** (quaver): 0.5 beats, filled with flag or beam
- **Sixteenth Note** (semiquaver): 0.25 beats, two flags or beams
- **Thirty-second Note**: 0.125 beats, three flags (rare in electronic music)

**Rests (Silence):**
- Whole rest: hangs below line (4 beats)
- Half rest: sits on line (2 beats)
- Quarter rest: squiggle (1 beat)
- Eighth rest: flag shape (0.5 beats)
- Sixteenth rest: two flags (0.25 beats)

**Augmentation:**
- **Dot**: Adds 50% of note value. Quarter (1) + dot = 1.5 beats
- **Double Dot**: Adds 50% + 25% = 75% total
- **Tie**: Connects notes across barlines or for readability
- **Tuplets**: Divide beats irregularly (triplets, quintuplets)

**Time Signatures:**
- **4/4** (Common Time): 4 beats per measure, quarter note = 1 beat
- **3/4** (Waltz): 3 beats per measure
- **6/8**: 6 beats, eighth note = 1 beat (often felt as 2 groups of 3)
- **5/4**: 5 beats (odd meter, Pink Floyd, Dave Brubeck)
- **7/8**: 7 eighth notes (progressive rock, metal)
        `
      },
      {
        title: 'Practical Rhythm Reading and Programming',
        content: `
**Counting Systems:**

**4/4 Time:**
- Quarter notes: 1, 2, 3, 4
- Eighth notes: 1 &, 2 &, 3 &, 4 &
- Sixteenth notes: 1 e & a, 2 e & a, 3 e & a, 4 e & a

**Triplets:**
- Divide beat into 3 equal parts
- Count: 1-trip-let, 2-trip-let, 3-trip-let, 4-trip-let
- Creates "swing" feel in jazz, shuffle in blues

**Syncopation:**
- Emphasis on off-beats (the "&" or weak beats)
- Creates rhythmic tension and groove
- Common in funk, reggae, Latin music

**DAW / MIDI Translation:**
- Most DAWs use PPQ (Pulses Per Quarter note), typically 480 or 960
- Sixteenth notes are 1/16 of a bar in grid view
- Use quantization carefully — over-quantizing kills groove
- Swing/shuffle settings delay every other note slightly

**Common Mistakes:**
- Not counting subdivisions (eighths, sixteenths)
- Ignoring rests (silence is part of rhythm)
- Over-quantizing and losing human feel
- Not understanding compound time signatures (6/8, 9/8, 12/8)

**Practice Tips:**
- Use a metronome and count out loud
- Tap rhythms before playing them
- Transcribe rhythms from your favorite tracks
- Program complex rhythms in MIDI to understand their structure
        `
      }
    ]
  },

  learningObjectives: [
    "Read and write standard note values and rests",
    "Understand dots, ties, and triplets",
    "Count complex rhythms using proper subdivision",
    "Interpret time signatures and their implications",
    "Translate notation to MIDI programming in a DAW"
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
