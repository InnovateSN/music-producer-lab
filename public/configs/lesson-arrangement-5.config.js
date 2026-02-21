/**
 * Music Producer Lab - Lesson Configuration
 * Lesson: Arrangement 5 - Pop & Rock Song Structures
 * 
 * This lesson teaches classic ABABCB structures, verse-chorus dynamics,
 * pre-chorus techniques, and bridge placement.
 */

import { applyMessagePreset, buildHeroEyebrow, buildLessonQualityPreset } from "./config-presets.js";

const lessonQualityPreset = buildLessonQualityPreset({
  lessonCategory: "Arrangement",
  lessonNumber: 5
});

export const lessonConfig = {
  // ====================
  // LESSON METADATA
  // ====================
  lessonKey: "mpl-arrangement-5-progress",
  lessonNumber: 5,
  lessonCategory: "Arrangement",

  reviewMetadata: {
    ...lessonQualityPreset.reviewMetadata
  },
  depthLevel: 4,
  
  // ====================
  // NAVIGATION
  // ====================
  nextLessonUrl: "lesson-arrangement-6.html",
  prevLessonUrl: "lesson-arrangement-4.html",
  overviewUrl: "labs.html",
  
  // ====================
  // HERO SECTION
  // ====================
  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 5, categoryLabel: "Arrangement" }),
    title: "Pop & Rock",
    titleHighlight: "Song Structures",
    subtitle: "Master the <strong>classic ABABCB structure</strong> used in countless hits. Learn <strong>verse-chorus dynamics</strong>, <strong>pre-chorus techniques</strong>, and strategic <strong>bridge placement</strong>."
  },
  
  // ====================
  // EXERCISE
  // ====================
  exercise: {
    title: "Build a Classic Pop Structure",
    description: "Arrange sections in the correct ABABCB order to create a radio-ready song structure.",
    tip: "The pre-chorus builds anticipation before the chorus—use it to create lift!",
    steps: [
      { text: "<strong>Intro:</strong> 4-8 bars to hook the listener immediately." },
      { text: "<strong>Verse 1:</strong> 16 bars to establish the story/theme." },
      { text: "<strong>Pre-Chorus:</strong> 4-8 bars of rising energy." },
      { text: "<strong>Chorus:</strong> 8-16 bars—the hook and emotional peak." },
      { text: "<strong>Bridge:</strong> 8 bars of contrast before final chorus." }
    ]
  },
  
  // ====================
  // STRUCTURE FORMULAS
  // ====================
  structures: [
    {
      id: "ababcb",
      name: "ABABCB (Classic)",
      formula: "I - V - C - V - C - B - C",
      description: "The most common pop/rock structure. Perfect balance of repetition and variety.",
      examples: ["Let It Be - Beatles", "Someone Like You - Adele", "Don't Stop Believin' - Journey"]
    },
    {
      id: "aaba",
      name: "AABA (32-bar)",
      formula: "V - V - B - V",
      description: "Classic jazz and older pop form. Simple and elegant.",
      examples: ["Over the Rainbow", "Yesterday - Beatles"]
    },
    {
      id: "verse-chorus",
      name: "Verse-Chorus",
      formula: "V - C - V - C - C",
      description: "Stripped down for impact. Great for high-energy songs.",
      examples: ["Smells Like Teen Spirit - Nirvana", "Seven Nation Army - White Stripes"]
    },
    {
      id: "verse-prechorus-chorus",
      name: "Verse-PreC-Chorus",
      formula: "V - PC - C - V - PC - C - B - C",
      description: "Modern pop standard. Pre-chorus adds buildup.",
      examples: ["Firework - Katy Perry", "Rolling in the Deep - Adele"]
    }
  ],
  
  // ====================
  // SECTION DEFINITIONS
  // ====================
  sections: [
    {
      id: "intro",
      name: "Intro",
      color: "#636e72",
      bars: "4-8",
      purpose: "Hook the listener, set the mood",
      tips: ["Start with the hook melody", "Use signature sound/riff", "Keep it under 15 seconds"]
    },
    {
      id: "verse",
      name: "Verse",
      color: "#00cec9",
      bars: "8-16",
      purpose: "Tell the story, lower energy than chorus",
      tips: ["Establish the theme/story", "Leave room for vocals", "Build toward pre-chorus"]
    },
    {
      id: "prechorus",
      name: "Pre-Chorus",
      color: "#fdcb6e",
      bars: "4-8",
      purpose: "Build anticipation before the chorus",
      tips: ["Rise in energy and pitch", "Change the chord progression", "Create harmonic tension"]
    },
    {
      id: "chorus",
      name: "Chorus",
      color: "#e17055",
      bars: "8-16",
      purpose: "The hook—emotional peak and memorable part",
      tips: ["Highest energy level", "Memorable melody/hook", "Full arrangement"]
    },
    {
      id: "bridge",
      name: "Bridge",
      color: "#a29bfe",
      bars: "8",
      purpose: "Contrast and surprise before final chorus",
      tips: ["Change key or chord progression", "Different melody", "Creates last-minute interest"]
    },
    {
      id: "outro",
      name: "Outro",
      color: "#636e72",
      bars: "4-8",
      purpose: "Bring the song to a satisfying close",
      tips: ["Fade out or hard ending", "Callback to intro", "Leave impression"]
    }
  ],
  
  // ====================
  // VALIDATION
  // ====================
  validation: {
    type: "structure-builder",
    requiredSections: ["intro", "verse", "chorus"],
    minSections: 5,
    correctOrder: ["intro", "verse", "prechorus", "chorus", "verse", "prechorus", "chorus", "bridge", "chorus", "outro"]
  },
  
  // ====================
  // MESSAGES
  // ====================
  messages: applyMessagePreset("arrangement", {
    initial: "Arrange the sections to create a classic pop song structure!",
    success: "🎵 Perfect structure! This arrangement will keep listeners engaged from start to finish.",
    error: "Check your section order—remember: build tension before the chorus!",
    alreadyCompleted: "You've mastered pop structures! Try experimenting with variations."
  }),
  
  // ====================
  // MODE FLAGS
  // ====================
  mode: {
    type: "structure-builder",
    sandbox: false,
    showTimeline: true,
    showBarCounts: true,
    enableDragDrop: true
  },

  // ====================
  // THEORY CONTENT
  // ====================
  theory: {
    sections: [
      {
        title: "Understanding Pop & Rock Song Structures",
        content: `
**Why Pop/Rock Structures Dominate:**
Pop and rock song structures have evolved over 70+ years to maximize emotional impact and commercial appeal. The verse-chorus format isn't arbitrary—it's been refined through decades of radio play, chart performance, and listener psychology research. These structures work because they balance repetition (memorability) with variation (sustained interest).

**The Verse-Chorus Paradigm:**
At its core, pop/rock structure alternates between two contrasting sections:
- **Verses** deliver narrative and context (lower energy, more detailed lyrics)
- **Choruses** deliver emotional payoff and hooks (higher energy, simpler/repetitive lyrics)

This alternation creates a question-and-answer dynamic that keeps listeners engaged. Verses set up expectations; choruses fulfill them. The best pop songs are essentially conversations between verses and choruses.

**The ABABCB Structure (Most Common):**
This is the industry-standard pop structure:
- **A** = Verse 1
- **B** = Chorus 1
- **A** = Verse 2
- **B** = Chorus 2
- **C** = Bridge
- **B** = Final Chorus (often repeated)

Why it works:
1. Quick hook (chorus at 0:45-1:00)
2. Enough verse content to tell a story
3. Bridge provides contrast exactly when repetition becomes predictable
4. Final chorus feels earned and satisfying

**Real-World Examples:**
- "Shape of You" by Ed Sheeran: Classic ABABCB
- "Rolling in the Deep" by Adele: ABABCB with extended final chorus
- "Mr. Brightside" by The Killers: ABABAB (no bridge, pure verse-chorus)
- "Someone Like You" by Adele: ABABCB with piano-only bridge

**Why This Structure Sells:**
Radio programmers and streaming algorithms favor 3:00-3:30 songs that hook listeners quickly. ABABCB delivers the first chorus around 0:45, keeps energy high with minimal "dead time," and wraps up before listener attention wanes. It's commercially optimized.
        `
      },
      {
        title: "Essential Pop/Rock Sections Explained",
        content: `
**Verse (16-24 bars typically)**
Purpose: Tell the story, deliver information, set emotional context

Characteristics:
- Lower energy than chorus
- More complex/varied lyrics (verses 1 and 2 usually have different words)
- Sparser arrangement (fewer instruments/elements)
- Melodically less repetitive than chorus
- "Setup" energy—building toward the chorus

*Best Practices:*
- Keep verses 16 bars (2x 8-bar phrases) or 24 bars (3x 8-bar phrases)
- Second verse should add new musical elements (extra percussion, background vocals)
- Avoid making verses too long—listeners wait for the chorus

*Common Mistake:* Verses that are louder/fuller than choruses. This inverts the energy dynamic and makes choruses feel anticlimactic.

**Chorus (8-16 bars typically)**
Purpose: Deliver the hook, emotional peak, memorable moment

Characteristics:
- Highest energy section
- Simplest, most repetitive lyrics (often just the song title repeated)
- Fullest arrangement (all elements playing)
- Melodically hooky and singable
- "Payoff" energy—the release after verse tension

*Best Practices:*
- Keep choruses concise (8-16 bars max)—short choruses avoid outstaying their welcome
- Make the chorus LOUDER and FULLER than verses (add harmonies, double tracking, extra instruments)
- The title/hook should appear in the chorus, ideally at the start or end

*Common Mistake:* Choruses that are too long (24+ bars) or too complicated lyrically. Choruses should be instantly memorable.

**Pre-Chorus (4-8 bars optional but powerful)**
Purpose: Bridge between verse and chorus, build anticipation

Characteristics:
- Medium energy (between verse and chorus)
- Transitional section that signals "chorus is coming!"
- Often uses rising melody or chord progression
- Creates extra anticipation before chorus payoff

*Best Practices:*
- Keep it short (4-8 bars)
- Use rising harmonic motion (subdominant to dominant chords)
- Change drum pattern or add energy-building elements (risers, increasing hi-hats)
- Make the lyrics create anticipation ("And I can't wait to...", "Here it comes...")

*When to Use:* If your verse-to-chorus transition feels abrupt, add a pre-chorus. Not every song needs one, but it's powerful when the chorus needs extra setup.

**Bridge (8-16 bars, usually appears 2/3 through the song)**
Purpose: Provide contrast, break repetition, refresh listener attention

Characteristics:
- Different melody than verse or chorus
- Different chord progression (or at least variation)
- Often includes a key change, tempo shift, or stripped-down section
- Lyrical perspective shift or new information
- Medium energy or deliberately contrasting energy

*Best Practices:*
- Position the bridge after Chorus 2 (around 2:00-2:30 into the track)
- Make it sound noticeably different—new chords, new rhythm, new vibe
- Use it to build into the final chorus (stripped-down bridge → explosive final chorus is a classic move)
- Keep it 8-16 bars—long enough for contrast, short enough not to derail the song

*Common Mistake:* Bridges that sound like just another verse. Bridges must provide real contrast or they're pointless.

**Instrumental Break (4-8 bars optional)**
Purpose: Give vocals a rest, showcase instrumental skills, create variety

Characteristics:
- No vocals (or minimal background vocals)
- Features instrumental solo or riff
- Same chord progression as verse or chorus typically
- Medium-to-high energy

*When to Use:*
- Guitar solos in rock songs (classic 8-16 bar solo after Chorus 2)
- Synth/saxophone solos in pop (think "Careless Whisper" or "Baker Street")
- Drop sections in pop-EDM hybrids (Chorus → Instrumental drop → Verse 2)

**Outro/Coda (4-8 bars)**
Purpose: Bring the song to a satisfying close

Characteristics:
- Often repeats the chorus hook or title
- Gradually reduces energy and elements
- Can fade out or end definitively

*Best Practices:*
- Reference the intro for symmetry (many songs end how they began)
- Fade outs work but feel dated—modern productions often end definitely
- Keep it short—don't add 30 seconds of noodling
        `
      },
      {
        title: "Building Pop/Rock Structures in Your DAW",
        content: `
**The Practical Workflow for ABABCB Structure:**

**Step 1: Create Your Core Sections (Verse and Chorus)**
Before arranging, build your verse and chorus as complete 16-bar and 8-bar loops:
- **Verse Loop (16 bars)**: Intro hook, kick, bass, light percussion, vocals
- **Chorus Loop (8-16 bars)**: Full drums, bass, lead guitar/synth, doubled vocals, all elements

Color-code these: Verse = Blue, Chorus = Red

**Step 2: Map Out the Structure with Markers**
Before dragging anything, mark your timeline:
- Bars 1-8: Intro
- Bars 9-24: Verse 1 (16 bars)
- Bars 25-32: Chorus 1 (8 bars)
- Bars 33-48: Verse 2 (16 bars)
- Bars 49-56: Chorus 2 (8 bars)
- Bars 57-72: Bridge (16 bars)
- Bars 73-88: Chorus 3 (16 bars—extended final chorus)
- Bars 89-96: Outro (8 bars)

Total: 96 bars = ~3:00 at 120 BPM

**Step 3: Populate Each Section**
Now drag your pre-built loops into the marked sections:
- Intro: Use verse instrumental (no vocals)
- Verse 1: Full verse loop
- Chorus 1: Full chorus loop
- Verse 2: Verse loop + add ONE new element (shaker, background vocals, extra synth)
- Chorus 2: Chorus loop (can be identical to Chorus 1)
- Bridge: Create new 16-bar section with different chords/energy
- Chorus 3: Chorus loop + add extra elements (harmonies, strings, rises in energy)
- Outro: Chorus hook + gradual removal of elements

**Step 4: Add Pre-Choruses (Optional Refinement)**
If verse-to-chorus feels abrupt, add a 4-8 bar pre-chorus:
- Bars 21-24: Pre-Chorus 1 (4 bars before Chorus 1)
- Bars 45-48: Pre-Chorus 2 (4 bars before Chorus 2)

Pre-chorus template:
- Use rising chord progression (IV → V or vi → V)
- Add building elements (riser, increasing drums)
- Create anticipation lyrically ("And I know that...", "Here it comes...")

**Step 5: Variation for Second Verse and Choruses**
Avoid copy-pasting sections identically:

*Verse 2 variations:*
- Add background vocals
- Add extra percussion (shaker, tambourine)
- Vary the drum pattern slightly
- Add a counter-melody

*Chorus 2 variations:*
- Can be identical to Chorus 1 (repetition works here)
- Or add subtle harmonies

*Final Chorus variations:*
- Add ALL the extras: harmonies, strings, extra percussion
- Extend it (16 bars instead of 8)
- Add a key change (classic pop move—raise everything by 1-2 semitones)
- Build to the loudest, fullest moment of the song

**Step 6: Check Total Length and Energy Flow**
- **Total length**: Aim for 2:30-3:30 (80-110 bars at 120 BPM)
- **Energy check**: Verses should be noticeably quieter than choruses
- **Section timing**: First chorus should hit around 0:45-1:00

Zoom out, look at the waveform—you should see:
- Intro/Verses = smaller waveforms
- Choruses = larger, fuller waveforms
- Bridge = varied (can be small or large depending on approach)

If the waveform is flat throughout, you lack dynamic range.

**Common Structural Variations:**

**ABAB (Verse-Chorus Only, No Bridge):**
- Simple, direct
- Works for shorter songs (2:30-2:45)
- Example: "Mr. Brightside" by The Killers

**AABA (Classic Tin Pan Alley / Jazz Standard):**
- Two verses, contrasting section, return to verse
- Less common in modern pop but still used
- Example: "Somewhere Over the Rainbow"

**ABABCBB (Extended Final Section):**
- Standard ABABCB + repeat final chorus twice
- Creates a longer outro/fade
- Example: "Don't Stop Believin'" (repeats "Don't stop..." for extended outro)

**Pop/Rock + EDM Hybrid:**
- Use pop verse-chorus structure but add buildups and drops
- Verse → Buildup → Drop (instead of traditional chorus)
- Example: "Closer" by The Chainsmokers

**Pro Tip - The "Template Shortcut":**
Once you've built an ABABCB structure that works, save it as a DAW template. Next song? Load the template, delete all the audio/MIDI, keep the markers and structure, fill with new material. Professional pop producers reuse proven structures constantly. There's no creativity prize for reinventing song structure—save your creativity for melodies, lyrics, and sound design. Use proven structures that work.

The goal is to deliver a satisfying listening experience that hooks quickly, maintains interest, and ends on a high note. Master ABABCB, and you've mastered the blueprint for 80% of hit songs.
        `
      }
    ]
  },

  // ====================
  // LEARNING OBJECTIVES
  // ====================
  learningObjectives: [
    "Build ABABCB and other classic song structures",
    "Create effective pre-choruses that build anticipation",
    "Position bridges for maximum impact",
    "Use instrumental breaks strategically"
  ],
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
