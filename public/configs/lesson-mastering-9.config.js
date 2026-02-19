/**
 * Music Producer Lab - Lesson Configuration
 * Lesson: Mastering 9 - Genre-Specific Mastering
 */

import { applyMessagePreset, buildHeroEyebrow } from "./config-presets.js";

export const lessonConfig = {
  lessonKey: "mpl-mastering-9-progress",
  lessonNumber: 9,
  lessonCategory: "Mastering",

  nextLessonUrl: "lesson-mastering-10.html",
  prevLessonUrl: "lesson-mastering-8.html",
  overviewUrl: "labs.html",

  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 9, categoryLabel: "Mastering" }),
    title: "Genre-Specific Mastering:",
    titleHighlight: "Different Approaches for Different Styles",
    subtitle: "Learn how EDM, hip-hop, rock, pop, and acoustic genres have different mastering expectations—and how to adapt your approach to serve each style"
  },

  exercise: {
    title: "Master the Same Mix for Two Different Genres",
    description: "Take a versatile mix and create two genre-specific masters with different loudness targets, tonal approaches, and dynamic ranges to demonstrate how genre expectations shape mastering decisions.",
    tip: "Genre mastering isn't about following rigid rules—it's about understanding listener expectations. An EDM master should feel powerful on a club system. A jazz master should preserve dynamics for the audiophile listener. Study professional releases in your target genre before making decisions.",
    steps: [
      '<strong>Select a versatile mix</strong> — Choose a mix that could work in multiple genres, or use your most recent mastering project.',
      '<strong>Import genre references</strong> — Import 2-3 reference tracks for each target genre. Level-match to your mix. These guide your genre-specific decisions.',
      '<strong>Create two mastering sessions</strong> — Save As: "Song_Master_GenreA" and "Song_Master_GenreB" (e.g., EDM and Acoustic). You\'ll process each differently.',
      '<strong>Master for Genre A: Set loudness target</strong> — Based on genre expectations: EDM/Hip-Hop might target -10 to -8 LUFS (club-ready), while acoustic might target -14 to -12 LUFS (dynamic).',
      '<strong>Master for Genre A: Shape tonal balance</strong> — Apply genre-appropriate EQ: EDM might want boosted sub and air, rock might want midrange presence, pop might want controlled lows and bright highs.',
      '<strong>Master for Genre A: Set dynamics</strong> — Genre-appropriate compression and limiting: EDM might accept more limiting (DR6-8), acoustic might preserve dynamics (DR10-14).',
      '<strong>Master for Genre A: Check against references</strong> — A/B your Genre A master against genre references. Does it fit the genre\'s sonic expectations?',
      '<strong>Master for Genre B: Different loudness target</strong> — Apply the other genre\'s loudness expectations. More or less limiting depending on genre.',
      '<strong>Master for Genre B: Different tonal approach</strong> — Reshape EQ for Genre B expectations. Different genres emphasize different frequencies.',
      '<strong>Master for Genre B: Different dynamics</strong> — Adjust compression/limiting for Genre B\'s dynamic expectations.',
      '<strong>Compare both masters</strong> — A/B your two genre masters. They should sound noticeably different while both being from the same source mix.',
      '<strong>Document the differences</strong> — Write down the specific changes between genres: loudness target, EQ moves, compression settings, limiting amount. This builds your genre-specific knowledge.'
    ]
  },

  theory: {
    sections: [
      {
        title: 'Why Genre Matters in Mastering',
        content: `Mastering serves the listener experience, and listener expectations vary by genre. A hip-hop master and a classical master have fundamentally different goals.

**Genre Expectations Affect:**
- **Loudness:** EDM expects loud, punchy masters; classical expects full dynamic range
- **Tonal balance:** Hip-hop emphasizes sub bass; rock emphasizes midrange guitars
- **Dynamics:** Pop is controlled and consistent; jazz breathes and varies
- **Stereo image:** Electronic is wide; vintage rock may be narrower
- **Translation priority:** Club music must work on massive PAs; acoustic must work on hi-fi

**The Reference Imperative:**
Before mastering any genre, study professional releases:
- What loudness levels are typical?
- What's the tonal balance?
- How much dynamic range is preserved?
- How wide is the stereo image?

**Serving the Genre, Not the Rules:**
These guidelines are starting points, not laws. A lo-fi hip-hop track might want more dynamics than typical hip-hop. An acoustic singer-songwriter might want a brighter, more modern sound. Listen to the music and make decisions that serve it.`
      },
      {
        title: 'EDM & Electronic: Powerful, Wide, and Impactful',
        content: `Electronic dance music prioritizes impact, energy, and translation on club systems. Masters should feel powerful without distortion.

**Loudness:**
- Target: -10 to -8 LUFS for club/DJ use, -14 LUFS for streaming
- Heavier limiting acceptable—genre expects density
- Watch for distortion on drops and buildups
- DR6-9 is typical for the genre

**Tonal Balance:**
- Sub bass (30-60 Hz): Strong, clean, mono
- Bass (60-150 Hz): Punchy kick, tight 808/bass
- Mids (500 Hz-2 kHz): Carved for synths and vocals
- Presence (2-5 kHz): Sharp, detailed
- Air (10 kHz+): Bright, airy, wide

**Typical EQ Moves:**
- HPF at 20-30 Hz (clean sub)
- Boost 50-80 Hz for sub weight
- Cut 200-400 Hz (reduce mud)
- High shelf +1-2 dB at 10 kHz (air)

**Dynamics:**
- Aggressive limiting on drops
- Sidechain pumping may be baked in
- Preserve build/drop dynamics
- Consider multiband limiting for bass control

**Stereo:**
- Wide synths and FX
- Mono sub and kick
- Check mono compatibility—club subs are mono

**Reference Tracks:**
- Flume, ODESZA – balanced and dynamic
- Skrillex – aggressive and loud
- Disclosure – clean and punchy`
      },
      {
        title: 'Hip-Hop: Vocal Forward, Bass Heavy, Punchy',
        content: `Hip-hop mastering centers on the vocal and the low end. The beat should hit hard while the rapper/singer stays clear and present.

**Loudness:**
- Target: -10 to -8 LUFS for club/radio, -14 LUFS for streaming
- Punchy, controlled limiting
- DR6-9 typical
- Vocal should stay clear even when loud

**Tonal Balance:**
- Sub (30-60 Hz): 808/sub bass is often dominant
- Bass (60-150 Hz): Harmonic content for speaker translation
- Mids (500 Hz-2 kHz): Carved for vocal clarity
- Presence (2-5 kHz): Vocal presence, hi-hat detail
- Air (10 kHz+): Crisp, controlled

**Typical EQ Moves:**
- HPF at 25-35 Hz (clean sub)
- Boost 50-80 Hz if 808 needs weight
- Cut 300-500 Hz (reduce mud, clear vocal space)
- Boost 3-5 kHz for vocal presence
- Control 8-12 kHz (hi-hat harshness)

**Dynamics:**
- Punchy transients on snare/clap
- Consistent vocal level
- Controlled limiting—preserve punch
- May need multiband for 808 control

**Stereo:**
- Vocal, kick, 808 centered
- Ad-libs and FX can be wide
- Check mono—phone speakers common

**Reference Tracks:**
- Kendrick Lamar – punchy, clean, vocal-forward
- Drake – polished, modern
- Travis Scott – creative, 808-heavy`
      },
      {
        title: 'Rock: Band Energy, Natural Dynamics',
        content: `Rock mastering should capture the energy of a band playing together. Dynamics, punch, and "realness" matter more than loudness.

**Loudness:**
- Target: -12 to -9 LUFS typical, -14 LUFS for streaming
- Preserve dynamics more than EDM/hip-hop
- DR8-12 typical
- Let quiet sections breathe

**Tonal Balance:**
- Sub (30-60 Hz): Present but not dominant
- Bass (60-150 Hz): Bass guitar body, kick punch
- Low-mids (200-500 Hz): Guitar body, warmth
- Mids (500 Hz-2 kHz): Guitar presence, vocal body
- Presence (2-5 kHz): Snare crack, vocal clarity
- Air (10 kHz+): Cymbal shimmer, natural

**Typical EQ Moves:**
- HPF at 30-40 Hz
- Cut 200-400 Hz if muddy
- Boost 2-4 kHz for presence
- Gentle high shelf for air

**Dynamics:**
- Glue compression for "band" feel
- Preserve drum transients
- Don't over-limit—genre values dynamics
- Parallel compression for density without squashing

**Stereo:**
- Hard-panned guitars typical
- Centered kick, snare, bass, vocal
- Room/ambience for width

**Reference Tracks:**
- Foo Fighters – powerful, dynamic
- Queens of the Stone Age – punchy, controlled
- Arctic Monkeys – modern rock balance`
      },
      {
        title: 'Pop: Polished, Controlled, Radio-Ready',
        content: `Pop mastering aims for a polished, consistent, broadcast-ready sound. Vocals are king, and everything should sound "expensive."

**Loudness:**
- Target: -12 to -10 LUFS for radio, -14 LUFS for streaming
- Controlled, consistent dynamics
- DR7-10 typical
- Should sound good on any speaker

**Tonal Balance:**
- Sub (30-60 Hz): Controlled, clean
- Bass (60-150 Hz): Punchy, tight
- Low-mids (200-500 Hz): Clean, minimal mud
- Mids (500 Hz-2 kHz): Clear, present
- Presence (2-5 kHz): Vocal forward
- Air (10 kHz+): Bright, polished, "expensive"

**Typical EQ Moves:**
- HPF at 30-40 Hz
- Cut 200-400 Hz for clarity
- Boost 3-5 kHz for vocal presence
- High shelf +1-2 dB at 10-12 kHz for air

**Dynamics:**
- Controlled compression—consistent level
- Automation-driven dynamics (baked into mix)
- Smooth limiting—no obvious artifacts
- Verse/chorus lift should be preserved

**Stereo:**
- Wide, impressive image
- Centered vocal, kick, bass
- Synths and production wide
- Check mono for phone speakers

**Reference Tracks:**
- Dua Lipa – wide, punchy, modern
- The Weeknd – 80s-inspired, present vocal
- Taylor Swift – polished, balanced`
      },
      {
        title: 'Acoustic & Jazz: Natural, Dynamic, Audiophile',
        content: `Acoustic and jazz mastering prioritizes natural sound and dynamics. These genres are often listened to on high-quality systems by discerning listeners.

**Loudness:**
- Target: -16 to -12 LUFS typical, preserve dynamics over loudness
- DR12-16 typical—full dynamic range
- Quiet should be quiet, loud should be loud
- Minimal limiting

**Tonal Balance:**
- Sub (30-60 Hz): Natural, not hyped
- Bass (60-150 Hz): Acoustic bass warmth, kick body
- Low-mids (200-500 Hz): Guitar/piano body
- Mids (500 Hz-2 kHz): Natural voice, instrument presence
- Presence (2-5 kHz): Articulation, not harshness
- Air (10 kHz+): Natural, not hyped

**Typical EQ Moves:**
- HPF at 25-35 Hz (subtle)
- Minimal cuts/boosts—±1 dB
- High shelf only if needed
- Preserve natural tonal balance

**Dynamics:**
- Very light or no compression
- Dynamics are the music—preserve them
- Limiting only to prevent clipping
- May not need limiting at all

**Stereo:**
- Natural stereo image
- Reflects recording setup
- Don't artificially widen
- Room ambience matters

**Special Considerations:**
- Audiophile listeners notice artifacts
- Less processing is usually better
- Preserve the performance's dynamics
- Reference high-quality recordings

**Reference Tracks:**
- Diana Krall – audiophile reference
- Norah Jones – warm, natural
- Bill Evans – classic jazz dynamics`
      }
    ]
  },

  learningObjectives: [
    "Understand how genre expectations shape mastering decisions: loudness, tonal balance, dynamics, and stereo width",
    "Apply EDM/electronic mastering: powerful sub, bright air, aggressive limiting, mono bass, wide synths",
    "Apply hip-hop mastering: vocal-forward, 808-dominant, punchy drums, controlled hi-hats",
    "Apply rock mastering: band energy, natural dynamics, guitar presence, glue compression",
    "Apply pop mastering: polished, controlled, radio-ready, vocal prominence, wide production",
    "Apply acoustic/jazz mastering: natural dynamics, minimal processing, audiophile-friendly, preserve performance"
  ],

  messages: applyMessagePreset("default", {
    initial: "Complete this mastering lesson to learn genre-specific techniques.",
    success: "Excellent! You can now adapt your mastering approach to serve any genre's expectations.",
    error: "Review the genre-specific concepts and try again.",
    alreadyCompleted: "You've mastered Genre-Specific Mastering. Ready for the final lesson!"
  }),

  mode: {
    type: "educational",
    sandbox: true,
    showContent: true,
    enableInteractive: false
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
