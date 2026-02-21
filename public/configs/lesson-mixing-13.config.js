/**
 * Music Producer Lab - Lesson Configuration
 * Lesson: Mixing 13 - Genre-Specific Mixing
 */

import { applyMessagePreset, buildHeroEyebrow, buildLessonQualityPreset } from "./config-presets.js";

const lessonQualityPreset = buildLessonQualityPreset({
  lessonCategory: "Mixing",
  lessonNumber: 13
});

export const lessonConfig = {
  lessonKey: "mpl-mixing-13-progress",
  lessonNumber: 13,
  lessonCategory: "Mixing",

  reviewMetadata: {
    ...lessonQualityPreset.reviewMetadata
  },

  nextLessonUrl: "lesson-mixing-14.html",
  prevLessonUrl: "lesson-mixing-12.html",
  overviewUrl: "labs.html",

  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 13, categoryLabel: "Mixing" }),
    title: "Genre-Specific Mixing:",
    titleHighlight: "Different Approaches for Different Styles",
    subtitle: "Learn how EDM, Hip-Hop, Rock, and Pop require fundamentally different mixing strategies—and how to adapt your skills to serve each genre's sonic expectations"
  },

  exercise: {
    title: "Create Two Genre Variants from One Session",
    description: "Starting from your Mixing-12_VocalMixing session, create two distinct genre-focused mix variants using bus-level processing changes and automation. This demonstrates how the same material can serve different genre expectations.",
    tip: "Genre mixing isn't about right or wrong—it's about expectations. A 'good' rock mix would be 'wrong' for modern pop. Before mixing, identify 2–3 reference tracks in your target genre and study their balance, dynamics, and width. Genre expectations evolve; what worked in 2015 may sound dated today.",
    steps: [
      '<strong>Load and save session</strong> — Open "Mixing-12_VocalMixing" and Save As: "Mixing-13_GenreVariants". You\'ll create two alternate mix buses from this session.',
      '<strong>Identify your source material</strong> — Assess your session: What genre does it naturally lean toward? Note the tempo, instrumentation, and vocal style. This determines which two genre approaches make sense (e.g., Pop vs Rock, or EDM vs Hip-Hop).',
      '<strong>Import reference tracks</strong> — Import 2 reference tracks (one per target genre) into your session on a dedicated "Reference" bus. Level-match them to your mix using LUFS metering (Lesson 14 preview). Mute during mixing but A/B frequently.',
      '<strong>Create Genre A bus structure</strong> — Duplicate your Mix Bus chain to create "Mix Bus - Genre A". Apply processing appropriate to your first genre (see theory for specific settings). Label clearly.',
      '<strong>Apply Genre A low-end strategy</strong> — Following the genre comparison table: adjust sub/kick relationship, bass presence, and low-mid management. EDM: tight sub, punchy kick. Hip-Hop: dominant 808, warm low-mids. Rock: round kick, present bass guitar. Pop: controlled sub, clean separation.',
      '<strong>Apply Genre A vocal position</strong> — Adjust vocal level and processing for genre: Pop/Hip-Hop: vocal forward (+1 to +2 dB relative). Rock: vocal sits in the band (level with guitars). EDM: vocal as another instrument, may be heavily effected.',
      '<strong>Apply Genre A dynamics approach</strong> — Adjust bus compression: EDM: punchy, aggressive limiting. Hip-Hop: punchy drums, smooth vocals. Rock: glue compression, natural dynamics. Pop: controlled, consistent, polished.',
      '<strong>Apply Genre A stereo width</strong> — Adjust width strategy: EDM: wide synths, mono bass/kick. Hip-Hop: wide ad-libs, centered vocal/808. Rock: hard-panned guitars, centered drums/bass/vocal. Pop: controlled width, balanced image.',
      '<strong>Create Genre B bus structure</strong> — Duplicate your original Mix Bus chain to create "Mix Bus - Genre B". Route session to Genre B bus for comparison.',
      '<strong>Apply Genre B processing</strong> — Repeat steps 5–8 with your second genre\'s approach. Make deliberate, contrasting choices based on genre expectations.',
      '<strong>A/B between Genre A and Genre B</strong> — Toggle between Mix Bus A and Mix Bus B. Listen for: Does each version feel "right" for its genre? Does the vocal sit appropriately? Does the low end match expectations?',
      '<strong>Reference check both versions</strong> — Unmute reference tracks. A/B your Genre A mix against its reference, then Genre B against its reference. Note: Are you in the ballpark for EQ balance, dynamics, and width?',
      '<strong>Mono check both versions</strong> — Fold each version to mono (Lesson 9). Verify that genre-specific width choices don\'t cause mono collapse. Rock with hard-panned guitars should still have centered energy. EDM with wide synths should retain punch.',
      '<strong>Export both genre variants</strong> — Export full-length bounces of both Genre A and Genre B mixes. Name clearly: "Song_GenreA_Mix.wav" and "Song_GenreB_Mix.wav".',
      '<strong>Critical comparison</strong> — Re-import both exports. Listen back-to-back without processing. Document: Which feels more appropriate for the source material? What specific choices made each version work (or not work) for its genre?'
    ]
  },

  theory: {
    sections: [
      {
        title: 'Why Genre Matters: Expectations Shape "Good" Mixing',
        content: `A mix isn't good or bad in absolute terms—it's good or bad relative to listener expectations. Every genre has evolved sonic conventions that audiences recognize as "correct." Breaking these conventions can sound amateurish or intentionally artistic, but either way, it's a choice you should make deliberately.

**Genre expectations affect every decision:**
- **Low-end balance:** Hip-hop expects dominant 808s; rock expects balanced kick and bass guitar
- **Vocal position:** Pop demands vocals front and center; rock integrates vocals with the band
- **Dynamics:** EDM uses aggressive limiting for sustained energy; jazz preserves natural dynamics
- **Width:** Electronic music exploits wide stereo; vintage rock often sits narrower
- **Effects:** Modern pop uses pristine, controlled space; indie rock may embrace room ambience

**The goal of this lesson:** Understand that mixing techniques from Lessons 1–12 are tools, not rules. The "right" settings depend on what genre you're serving. A compressor attack that's perfect for rock drums would destroy EDM transients. An EQ curve that makes pop vocals shine would bury them in metal.

**Before mixing any track:** Identify the genre, gather 2–3 references, and study their balance. This is covered in depth in Lesson 14, but start the habit now.`
      },
      {
        title: 'EDM / Electronic: Punchy, Wide, and Loud',
        content: `Electronic music prioritizes impact, energy, and stereo spectacle. The mix should feel powerful on club systems and engaging on headphones.

**Low-End Strategy:**
- **Kick and sub relationship:** Kick provides transient punch (50–80 Hz click, 100–150 Hz body); sub provides sustained low-end (30–60 Hz). They should NOT fight—use sidechain ducking (Lesson 12) so sub ducks when kick hits.
- **Mono below 100–150 Hz:** Bass and sub must be mono for club translation. Use mid/side EQ or a bass mono plugin.
- **Tight low-mids:** Cut 200–400 Hz on bass elements to prevent mud. EDM low end should be clean and punchy, not boomy.

**Transient & Dynamics:**
- **Preserve transients:** Use slower compressor attack (20–40 ms) on drums and synths to keep punch.
- **Aggressive limiting on mix bus:** EDM often targets -6 to -8 LUFS integrated (loud but not crushed). Use limiting strategically on the mix bus or during mastering.
- **Sidechain pumping:** Intentional gain ducking on pads/chords from kick creates the "breathing" effect central to many EDM styles.

**Width & Space:**
- **Wide synths and FX:** Stereo spread, chorus, and panning create the "wall of sound" feel. Automate width to open up on drops.
- **Centered kick, bass, lead vocal:** Core elements stay mono/center for focus and mono compatibility.
- **Bright, airy top end:** Shelf boost 10–16 kHz on mix bus or mastering chain (+1 to +3 dB). EDM should sparkle.

**Reference Tracks:**
- Flume – "Never Be Like You" (dynamic, wide, punchy)
- ODESZA – "A Moment Apart" (lush, balanced, impactful)
- Skrillex – "Bangarang" (aggressive, transient-heavy, loud)`
      },
      {
        title: 'Hip-Hop: Vocal Forward, 808-Dominant, Punchy',
        content: `Hip-hop mixing centers on the vocal and the 808/bass. Everything else supports these two elements. Modern hip-hop tends toward clean, polished production with punchy drums and intimate, present vocals.

**Low-End Strategy:**
- **808 dominance:** The 808 (or sub bass) is often the loudest element in the low end. It should sustain and "hit" with harmonics in the 80–150 Hz range for smaller speakers.
- **808 processing:** Saturation or harmonic enhancement makes 808s translate on small speakers. Keep fundamental strong (40–60 Hz) but add harmonics (100–200 Hz).
- **Kick/808 relationship:** Two approaches: (1) Kick plays when 808 doesn't (producer arrangement), or (2) Kick provides click/attack while 808 provides sustain (use sidechain ducking).
- **Clean separation:** High-pass everything except 808/kick at 80–150 Hz. Hip-hop low end should be powerful but not muddy.

**Vocal Position (Critical):**
- **Vocal forward:** Lead vocal sits 2–4 dB louder relative to the beat than in rock. The rapper/singer is the star.
- **Modern vocal chain:** De-esser, compression (2–4 dB GR for consistency), EQ (presence boost 3–5 kHz, air 10–12 kHz), saturation, light reverb/delay (kept tight).
- **Doubles and ad-libs:** Pan ad-libs wide (L30–L60, R30–R60). Stack doubles slightly behind lead in level (-3 to -6 dB).

**Dynamics & Width:**
- **Punchy drums:** Fast attack compression on snare/clap for snap. Hi-hats often bright and present (10–14 kHz energy).
- **Hi-hat harshness control:** De-ess or dynamic EQ hi-hats to control 8–12 kHz harshness that causes ear fatigue.
- **Width from ad-libs and FX:** Keep lead vocal, 808, kick centered. Use panning and stereo effects on supporting elements.

**Reference Tracks:**
- Kendrick Lamar – "HUMBLE." (punchy, clean, vocal-forward)
- Travis Scott – "SICKO MODE" (dynamic, 808-heavy, production variety)
- Drake – "God's Plan" (polished, balanced, modern radio sound)`
      },
      {
        title: 'Rock: Band Balance, Room Energy, Natural Dynamics',
        content: `Rock mixing aims to capture the energy of a band playing together. Unlike electronic genres, rock embraces natural dynamics, room sound, and the interplay between instruments. The mix should feel "real" and powerful without excessive processing.

**Low-End Strategy:**
- **Kick and bass guitar balance:** Neither dominates—they work together. Kick provides punch (60–80 Hz fundamental, 2–4 kHz beater click). Bass provides sustain and harmonic content (80–200 Hz body, 700 Hz–1 kHz growl).
- **Round, warm low end:** Rock often has more energy in the 80–200 Hz range than EDM or hip-hop. Don't over-cut—some "warmth" is expected.
- **Less sub content:** Rock typically has less extreme sub (below 50 Hz) than electronic genres. High-pass kick at 40–50 Hz, bass at 50–60 Hz.

**Vocal Position:**
- **Vocal sits IN the band:** Lead vocal is prominent but not isolated. It should feel like part of the arrangement, not floating above it.
- **Level relative to guitars:** In heavy sections, vocal may be only 1–2 dB above rhythm guitars. In verses, vocal can be more exposed.
- **Natural reverb:** Room reverb or plate, longer pre-delay (40–80 ms) to keep vocal present but add depth.

**Dynamics & Compression:**
- **Glue compression:** Bus compression on drum bus and mix bus (2–4 dB GR, slow attack, auto release). This creates the "band playing together" feel.
- **Natural dynamics:** Rock preserves more dynamic range than EDM/pop. Don't over-limit—let verses breathe and choruses hit harder.
- **Parallel compression on drums:** Add punch and sustain without killing transients (Lesson 6).

**Width & Imaging:**
- **Hard-panned guitars:** Double-tracked rhythm guitars panned L100/R100 create width.
- **Centered core:** Kick, snare, bass, lead vocal stay centered for focus.
- **Room mics and overheads:** Provide natural width and ambience.

**Reference Tracks:**
- Foo Fighters – "Everlong" (powerful, dynamic, guitar-driven)
- Queens of the Stone Age – "No One Knows" (punchy drums, huge guitars)
- Arctic Monkeys – "Do I Wanna Know?" (modern rock, clean but energetic)`
      },
      {
        title: 'Pop: Vocal Forward, Wide, Polished, and Controlled',
        content: `Pop mixing prioritizes the vocal above all else. The production should be polished, wide, and radio-ready—clean, controlled, and impactful without harshness. Modern pop (2020s) tends toward a "big" sound with wide stereo and present sub bass, while remaining controlled and consistent.

**Low-End Strategy:**
- **Controlled sub and bass:** Sub bass provides foundation (40–80 Hz) but doesn't dominate like hip-hop 808s. Bass should be tight and punchy.
- **Clean separation:** High-pass aggressively on non-bass elements. Pop low end is clean and defined, never muddy.
- **Kick clarity:** Kick has click (2–5 kHz) and punch (80–120 Hz) but stays controlled. Often layered samples for impact.

**Vocal Position (Absolutely Critical):**
- **Vocal is king:** Lead vocal sits clearly above everything else. It should be the first thing you hear.
- **Extensive processing:** Multiple stages of compression (gain riding → leveling → peak catching), de-essing, EQ (presence 3–5 kHz, air 10–14 kHz), saturation, and effects.
- **Doubles and harmonies:** Stacked vocals on choruses, panned backing vocals for width, often heavily processed for effect.
- **Effect automation:** Delay throws, reverb swells, filter effects—automated for ear candy (Lesson 11).

**Dynamics & Consistency:**
- **Consistent levels:** Pop is typically more compressed and limited than rock. Vocals and core elements stay in a narrow dynamic range.
- **Automation-driven dynamics:** Dynamic changes come from arrangement and automation rather than natural performance dynamics.
- **Loudness:** Pop masters are typically -8 to -10 LUFS integrated. Mixes should leave headroom for mastering but have controlled dynamics.

**Width & Stereo Image:**
- **Wide production:** Synths, pads, and production elements spread wide. Chorus should feel "bigger" than verse (automate width).
- **Centered focus:** Vocal, kick, bass, snare stay centered.
- **Glossy effects:** Bright reverbs, clean delays, stereo enhancement. The overall feel should be "polished" and "expensive."

**Reference Tracks:**
- Dua Lipa – "Levitating" (wide, punchy, vocal-forward, modern pop)
- The Weeknd – "Blinding Lights" (80s-inspired, wide synths, present vocal)
- Billie Eilish – "bad guy" (minimal, bass-heavy, but still controlled)`
      },
      {
        title: 'Genre Comparison Table & Practical Application',
        content: `Use this table as a quick reference when starting a mix. Identify your genre, then apply the appropriate strategy for each element.

| Element | EDM | Hip-Hop | Rock | Pop |
|---------|-----|---------|------|-----|
| **Low-End Focus** | Tight sub + punchy kick | Dominant 808, harmonic saturation | Balanced kick/bass guitar | Clean, controlled sub and kick |
| **Vocal Position** | Instrument/effect (variable) | Forward (+2–4 dB above beat) | In the band (+1–2 dB above guitars) | King (clearly above everything) |
| **Dynamics** | Aggressive limiting, pumping sidechain | Punchy drums, consistent vocal | Natural dynamics, glue compression | Controlled, automated dynamics |
| **Width** | Wide synths, mono bass/kick | Wide ad-libs, centered vocal/808 | Hard-panned guitars, centered core | Wide production, centered focus |
| **Compression Style** | Fast attack on synths, slow on drums | Fast on snare, medium on vocal | Slow attack for glue, parallel drums | Multi-stage on vocals, bus glue |
| **Reverb/Delay** | Creative, filtered, automated | Tight, subtle on vocals | Room/plate, natural feel | Polished, glossy, automated |
| **Brightness** | Bright, airy (+2–3 dB shelf 10 kHz+) | Controlled highs, de-essed hats | Warm, natural | Bright and clean, not harsh |

**Applying This Knowledge:**
1. **Before mixing:** Identify genre, gather references
2. **During rough balance:** Set vocal level per genre expectation
3. **During EQ/compression:** Apply genre-appropriate settings
4. **During stereo work:** Set width per genre conventions
5. **Before export:** Reference check against genre-appropriate tracks

**Remember:** These are starting points, not rules. The best mixes serve the song first—genre conventions guide you, but creativity can bend them.`
      }
    ]
  },

  learningObjectives: [
    "Identify the key sonic differences between EDM, Hip-Hop, Rock, and Pop mixing approaches",
    "Apply genre-appropriate low-end strategies: kick/bass balance, sub management, and low-mid control",
    "Set vocal level and processing chain based on genre expectations (forward in pop/hip-hop, integrated in rock)",
    "Choose compression and dynamics strategies that serve each genre: aggressive limiting (EDM) vs natural dynamics (rock) vs controlled consistency (pop)",
    "Implement genre-appropriate stereo width: wide production (EDM/pop), hard-panned guitars (rock), centered focus with wide ad-libs (hip-hop)"
  ],

  messages: applyMessagePreset("default", {
    initial: "Complete this mixing lesson to advance your skills.",
    success: "Excellent! You've mastered Genre-Specific Mixing. You can now adapt your approach to serve any style!",
    error: "Review the mixing concepts and try again.",
    alreadyCompleted: "You've completed this mixing technique. Keep practicing!"
  }),

  mode: {
    type: "educational",
    sandbox: true,
    showContent: true,
    enableInteractive: false
  },
  assessmentRubric: {
    ...lessonQualityPreset.assessmentRubric
  },
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
