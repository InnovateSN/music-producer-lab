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
