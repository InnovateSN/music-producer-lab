#!/bin/bash

cd /home/user/music-producer-lab/configs

# Lesson Ear 6: Pitch Accuracy Training
cat > lesson-ear-6.config.js << 'EOF'
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
EOF

# Lesson Ear 7: Melodic Dictation
cat > lesson-ear-7.config.js << 'EOF'
import { buildHeroEyebrow } from '../lesson-engine.js';

export const lessonConfig = {
  lessonKey: "mpl-ear-7-progress",
  lessonNumber: 7,
  lessonCategory: "Ear Training",

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
  ]
};
EOF

# Lesson Ear 8: Chord Progression Ear Training
cat > lesson-ear-8.config.js << 'EOF'
import { buildHeroEyebrow } from '../lesson-engine.js';

export const lessonConfig = {
  lessonKey: "mpl-ear-8-progress",
  lessonNumber: 8,
  lessonCategory: "Ear Training",

  nextLessonUrl: "lesson-ear-9.html",
  prevLessonUrl: "lesson-ear-7.html",
  overviewUrl: "labs.html",

  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 8, categoryLabel: "Ear Training" }),
    title: "Chord Progression:",
    titleHighlight: "Identify Harmonic Movement",
    subtitle: "Identify common chord progressions and harmonic movement. Recognize I-IV-V, ii-V-I, and other foundational patterns by ear."
  },

  exercise: {
    title: "Recognize Chord Progressions by Ear",
    description: "Chord progression ear training develops your ability to hear harmonic movement and identify which chords are being played. Instead of hearing individual notes, you hear functional relationships: tonic (home), subdominant (departure), dominant (tension). This skill is essential for learning songs quickly, analyzing harmonic structure, and understanding how chords create emotional movement.",
    tip: "Start by identifying the bass note (root), then determine if the chord is major or minor, then recognize the Roman numeral function (I, IV, V, etc.).",
    steps: [
      '<strong>I-IV-V-I</strong> — The most common progression in Western music. Tonic-Subdominant-Dominant-Tonic. Sounds: home-away-tension-home.',
      '<strong>I-V-vi-IV</strong> — Pop progression ("Axis of Awesome"). Millions of songs use this. C-G-Am-F in C major.',
      '<strong>ii-V-I</strong> — Jazz turnaround. Smooth voice leading, strong resolution. Dm7-G7-Cmaj7 in C major.',
      '<strong>I-vi-IV-V</strong> — 50s progression. Doo-wop, early rock. C-Am-F-G in C major.',
      '<strong>vi-IV-I-V</strong> — Sad pop progression. Starts on minor for emotional impact. Am-F-C-G in C major.'
    ]
  },

  theory: {
    sections: [
      {
        title: 'Understanding Chord Progression Recognition',
        content: `
**Functional Harmony Recap:**

**Three Chord Functions:**
1. **Tonic (T)**: I, vi, iii — Home, stable, resolution
2. **Subdominant (SD)**: IV, ii — Movement away, preparation
3. **Dominant (D)**: V, vii° — Tension, wants to resolve to tonic

**Common Progressions by Genre:**

**Pop/Rock:**
- **I-V-vi-IV**: Most pop songs (thousands of examples)
  - C-G-Am-F: "Let It Be", "Don't Stop Believin'", "With or Without You"
- **I-IV-V**: Classic rock
  - C-F-G: "Twist and Shout", "La Bamba", "Wild Thing"
- **vi-IV-I-V**: Emotional pop
  - Am-F-C-G: "Apologize", "Grenade"

**Jazz:**
- **ii-V-I**: The jazz turnaround
  - Dm7-G7-Cmaj7: Smooth voice leading, strong resolution
- **I-vi-ii-V**: Rhythm changes
  - Cmaj7-Am7-Dm7-G7
- **iii-vi-ii-V-I**: Extended progression
  - Em7-Am7-Dm7-G7-Cmaj7

**Blues:**
- **I-I-I-I-IV-IV-I-I-V-IV-I-V**: 12-bar blues
  - C7-C7-C7-C7-F7-F7-C7-C7-G7-F7-C7-G7
  - Dominant 7th chords throughout

**Folk:**
- **I-IV-I-V**: Simple, campfire songs
  - C-F-C-G: "Blowin' in the Wind"
- **I-V-I-IV-I-V-I**: Extended folk pattern
  - C-G-C-F-C-G-C

**Gospel/R&B:**
- **I-IV-ii-V**: Gospel turnaround
  - C-F-Dm-G
- **I-vi-ii-V**: Doo-wop progression
  - C-Am-Dm-G

**Recognizing by Function:**

**Identify Movement Patterns:**
- **Tonic → Subdominant → Dominant → Tonic**: I-IV-V-I (strongest)
- **Tonic → Pre-dominant → Dominant → Tonic**: I-ii-V-I (smooth)
- **Tonic → Dominant → Tonic**: I-V-I (simple, strong)

**Circle of Fifths Progressions:**
- **Descending 5ths**: vi-ii-V-I (Am-Dm-G-C)
- **Ascending 4ths**: I-IV-vii°-iii-vi-ii-V-I (smooth voice leading)
        `
      },
      {
        title: 'Practical Chord Progression Ear Training',
        content: `
**Training Strategy:**

**Week 1: I, IV, V Only**
- Learn to distinguish the three primary chords
- I sounds like home (stable)
- IV sounds like departure (moves away)
- V sounds like tension (wants to resolve)
- Practice: I-IV-I, I-V-I, I-IV-V-I

**Week 2: Add vi (Relative Minor)**
- Now recognize I, IV, V, vi
- vi sounds minor (sad) but related to I
- Practice: I-V-vi-IV, I-vi-IV-V

**Week 3: Add ii**
- Pre-dominant chord (leads to V)
- ii-V-I is the most important jazz progression
- Practice: I-ii-V-I, vi-ii-V-I

**Week 4: Full Diatonic Palette**
- Add iii and vii° (less common)
- Practice random diatonic progressions
- Start analyzing real songs

**Recognition Process:**

**Step 1: Identify the Bass Note**
- Listen to the lowest note (usually the root)
- Sing it, find it on piano
- This gives you the root of each chord

**Step 2: Determine Chord Quality**
- Major or minor?
- Major = bright, minor = dark
- 7th chord or triad?

**Step 3: Assign Roman Numeral**
- Based on bass note and quality
- C major chord in key of C = I
- A minor chord in key of C = vi
- F major chord in key of C = IV

**Step 4: Analyze Function**
- Tonic, subdominant, or dominant?
- Does it feel stable, departing, or tense?

**Exercise 1: Frozen Progression**
Play one progression 100 times:
- Day 1-7: Only I-IV-V-I in C major
- Day 8-14: Only I-V-vi-IV in C major
- Day 15-21: Only ii-V-I in C major
- Internalize the sound completely

**Exercise 2: Genre Immersion**
- Listen to 10 pop songs, all use I-V-vi-IV
- Identify the progression without instrument
- Sing the bass line (root notes)
- Notice how similar they all sound

**Exercise 3: Progression Detective**
1. Pick a song
2. Find the key (play notes until one sounds like "home")
3. Listen to bass line (identifies roots)
4. Determine chord quality (major/minor)
5. Assign Roman numerals (I, IV, V, vi, ii)

**Exercise 4: Transpose Practice**
- Learn I-IV-V-I in C major
- Play it in G major, D major, F major
- Same progression, different keys
- Reinforces relative, not absolute recognition

**Common Mistakes:**
- Trying to identify chords in isolation (context matters!)
- Not listening to the bass note first (bass is the foundation)
- Ignoring chord quality (major vs minor changes the Roman numeral)
- Not knowing the key (can't assign numerals without a tonic)
- Expecting to hear every chord change (some are quick passing chords)

**DAW Practice:**
1. Create 4 MIDI tracks (I, IV, V, vi)
2. Program triads for each
3. Create random progressions: I-V-vi-IV, ii-V-I, etc.
4. Play them back, identify by ear
5. Check your answers
        `
      }
    ]
  },

  learningObjectives: [
    "Identify I, IV, V, vi, and ii chords by ear in major keys",
    "Recognize common progressions: I-V-vi-IV, ii-V-I, I-IV-V",
    "Use functional hearing (tonic, subdominant, dominant)",
    "Transcribe chord progressions from songs by ear",
    "Apply progression knowledge to composition and analysis"
  ]
};
EOF

# Lesson Ear 9: Genre & Style Identification
cat > lesson-ear-9.config.js << 'EOF'
import { buildHeroEyebrow } from '../lesson-engine.js';

export const lessonConfig = {
  lessonKey: "mpl-ear-9-progress",
  lessonNumber: 9,
  lessonCategory: "Ear Training",

  nextLessonUrl: "lesson-ear-10.html",
  prevLessonUrl: "lesson-ear-8.html",
  overviewUrl: "labs.html",

  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 9, categoryLabel: "Ear Training" }),
    title: "Genre & Style:",
    titleHighlight: "Identify Production Techniques",
    subtitle: "Recognize musical genres and production styles by their sonic characteristics. Analyze arrangement, instrumentation, and mixing approach."
  },

  exercise: {
    title: "Identify Genres and Production Styles by Ear",
    description: "Genre identification goes beyond recognizing instruments—it's about hearing the complete sonic fingerprint: BPM, drum patterns, harmonic language, arrangement structure, mixing approach, and production techniques. Developing this skill allows you to reverse-engineer professional productions, understand genre conventions, and apply them to your own music.",
    tip: "Every genre has characteristic elements: tempo range, drum pattern, bass style, harmonic complexity, and mixing signature. Learn the 'tells' for each genre.",
    steps: [
      '<strong>Tempo (BPM)</strong> — House: 120-130 BPM. Trap: 140-150 (half-time). Drum & Bass: 160-180. Tempo is often the first clue.',
      '<strong>Drum Pattern</strong> — Four-on-the-floor = house/disco. Breakbeat = hip-hop. Half-time snare on 3 = trap. Swing = jazz.',
      '<strong>Bass Character</strong> — Sub-bass = trap/dubstep. Funk bass = funk/disco. Walking bass = jazz. Distorted bass = rock.',
      '<strong>Harmonic Language</strong> — 3-chord progressions = punk. Extended jazz chords = R&B. Modal = EDM. Chromatic = metal.',
      '<strong>Mix Signature</strong> — Compressed/loud = modern pop. Dynamic range = jazz/classical. Heavy sidechain = EDM. Vinyl crackle = lo-fi.'
    ]
  },

  theory: {
    sections: [
      {
        title: 'Genre Identification Framework',
        content: `
**The Five Elements of Genre:**

**1. Tempo & Groove:**
- **House/Techno**: 120-130 BPM, four-on-the-floor
- **Trap/Hip-Hop**: 70-90 BPM (140-180 half-time), heavy 808s
- **Drum & Bass**: 160-180 BPM, breakbeat patterns
- **Dubstep**: 70 BPM (140 half-time), wobble bass
- **Jazz**: 120-200+ BPM, swing feel
- **Rock**: 110-140 BPM, live drum feel
- **Reggae**: 60-90 BPM, off-beat skank
- **Lo-Fi Hip-Hop**: 70-90 BPM, laid-back, swing

**2. Drum Characteristics:**
- **House**: Kick on every beat, claps on 2&4, open hi-hats on off-beats
- **Trap**: Heavy 808 kick, rapid hi-hat rolls, snare on 3
- **Rock**: Live acoustic kit, heavy snare on 2&4, crash accents
- **Jazz**: Swing ride pattern, brush snare, sparse kick
- **UK Garage**: Syncopated kick pattern, shuffled hi-hats
- **Breakbeat**: Sampled breaks (Amen, Apache, Funky Drummer)

**3. Bass & Low End:**
- **Trap/Dubstep**: Sub-bass (808s, sine waves below 60Hz)
- **Funk/Disco**: Slap bass, syncopated, percussive
- **Rock**: Distorted bass guitar, root notes, powerful
- **Jazz**: Walking bass (quarter notes, chord tones)
- **House**: Synth bass, pumping (sidechained to kick)
- **Reggae**: Dub bass, minimal, sub-heavy

**4. Harmonic Language:**
- **Pop**: Simple (I-V-vi-IV), major keys, catchy
- **Jazz**: Complex (ii-V-I, extensions, alterations)
- **EDM**: Modal (Aeolian, Dorian), often single key center
- **Rock**: Power chords (I-IV-V), pentatonic
- **R&B/Neo-Soul**: Extended chords (9ths, 11ths, 13ths), chromatic
- **Metal**: Chromatic, diminished, power chords, palm muting

**5. Mix Signature:**
- **Modern Pop**: Loud (LUFS -6 to -8), compressed, bright
- **Lo-Fi**: Vinyl crackle, tape saturation, muffled highs
- **Jazz**: Wide dynamic range, room ambience, natural
- **EDM**: Heavy sidechain, bright hi-hats, pounding kick
- **Rock**: Mid-focused, guitar-centric, live room sound
- **Classical**: Minimal processing, wide stereo, natural reverb
        `
      },
      {
        title: 'Genre Analysis and Production Techniques',
        content: `
**Deep Dive: Major Genres**

**House Music:**
- **Tempo**: 120-130 BPM
- **Drums**: Four-on-the-floor kick, claps/snare on 2&4, open hats on off-beats
- **Bass**: Synth bass, sidechained to kick (pumping effect)
- **Chords**: Simple progressions (often 2-4 chords), piano or synth pads
- **Arrangement**: 8-bar phrases, build-drop structure
- **Mix**: Bright, punchy kick, sidechain everything to kick

**Trap:**
- **Tempo**: 140-150 BPM (feels like 70-75 half-time)
- **Drums**: Heavy 808 kick/bass, snare on 3, rapid hi-hat rolls
- **Bass**: 808 sub-bass, gliding/sliding notes
- **Melody**: Dark, minor keys, eerie synths or strings
- **Arrangement**: Sparse verses, heavy drops
- **Mix**: Sub-heavy, compressed, distorted 808s

**Lo-Fi Hip-Hop:**
- **Tempo**: 70-90 BPM
- **Drums**: Swing feel, dusty samples, vinyl crackle
- **Bass**: Simple, warm, sub-focused
- **Chords**: Jazz chords (7ths, 9ths), Rhodes, piano
- **Texture**: Tape saturation, bit-crushing, low-pass filter
- **Mix**: Muffled highs, warm mids, chill vibe

**Drum & Bass:**
- **Tempo**: 160-180 BPM
- **Drums**: Fast breakbeats (Amen break), heavy sub-bass
- **Bass**: Reese bass, aggressive, distorted
- **Melody**: Dark pads, sparse
- **Arrangement**: Energy throughout, no half-time sections
- **Mix**: Compressed, loud, bass-focused

**Jazz:**
- **Tempo**: Variable (ballads 60-90, swing 120-200+)
- **Drums**: Swing ride, brush snare, sparse kick
- **Bass**: Walking bass (chord tones, quarter notes)
- **Harmony**: Complex (ii-V-I, alterations, substitutions)
- **Arrangement**: Head-solos-head (AABA form)
- **Mix**: Natural, wide stereo, minimal compression

**Recognition Exercise:**

**Listen for 3 Key Tells:**
1. **Drum pattern** (four-on-the-floor? breakbeat? swing?)
2. **BPM** (slow? medium? fast? half-time?)
3. **Bass character** (sub-bass? funk bass? distorted?)

**Genre Flowchart:**
1. Is it four-on-the-floor? → House/Techno/Disco
2. Is there heavy 808 sub? → Trap/Dubstep/Future Bass
3. Is the BPM 160+? → Drum & Bass/Jungle
4. Does it swing? → Jazz/Swing/Blues
5. Live drums + distorted bass? → Rock/Metal
6. Off-beat skank rhythm? → Reggae/Dub

**Production Techniques by Genre:**

**Modern Pop Production:**
- Loud mastering (LUFS -7 to -8)
- Autotune vocals (often obvious)
- Layered synths and vocals
- Sidechain compression on everything
- Bright, polished mix

**Lo-Fi Production:**
- Vinyl crackle/noise
- Tape saturation/warmth
- Low-pass filtering (muffled highs)
- Bit-crushing
- Sample-based (dusty jazz/soul samples)

**EDM Production:**
- Heavy sidechain (pumping)
- Bright, synthetic sounds
- Build-up/drop structure
- Riser effects (white noise sweeps)
- Wide stereo, mono bass

**Common Mistakes:**
- Relying on instrumentation alone (synths don't always mean EDM)
- Ignoring tempo (critical genre identifier)
- Not listening to the mix signature (lo-fi vs. modern pop)
- Confusing subgenres (trap vs. dubstep, house vs. techno)

**Practice Plan:**
- Week 1: House vs. Trap vs. Rock (3 genres, obvious differences)
- Week 2: Add Jazz, Reggae, Lo-Fi (6 genres total)
- Week 3: Subgenres (Deep House vs. Tech House, etc.)
- Week 4: Production era (80s vs. 90s vs. 2020s)
        `
      }
    ]
  },

  learningObjectives: [
    "Identify major genres by tempo, drum pattern, and bass character",
    "Recognize production techniques and mix signatures",
    "Analyze arrangement structures across genres",
    "Distinguish between subgenres and production eras",
    "Apply genre conventions to your own productions"
  ]
};
EOF

# Lesson Ear 10: Advanced Harmonic Dictation
cat > lesson-ear-10.config.js << 'EOF'
import { buildHeroEyebrow } from '../lesson-engine.js';

export const lessonConfig = {
  lessonKey: "mpl-ear-10-progress",
  lessonNumber: 10,
  lessonCategory: "Ear Training",

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
  ]
};
EOF

echo "All 10 Ear Training config files created successfully!"
