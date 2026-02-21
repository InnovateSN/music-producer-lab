/**
 * Music Producer Lab - Lesson Configuration
 * Lesson: Arrangement 16 - Melodic Development
 *
 * This lesson teaches how to develop melodic ideas across a track.
 * Master theme and variation, motivic development, and melodic callbacks.
 */

import { applyMessagePreset, buildHeroEyebrow, buildLessonQualityPreset } from "./config-presets.js";

const lessonQualityPreset = buildLessonQualityPreset({
  lessonCategory: "Arrangement",
  lessonNumber: 16
});

export const lessonConfig = {
  lessonKey: "mpl-arrangement-16-progress",
  lessonNumber: 16,
  lessonCategory: "Arrangement",

  reviewMetadata: {
    ...lessonQualityPreset.reviewMetadata
  },
  depthLevel: 4,

  nextLessonUrl: "lesson-arrangement-17.html",
  prevLessonUrl: "lesson-arrangement-15.html",
  overviewUrl: "labs.html",

  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 16, categoryLabel: "Arrangement" }),
    title: "Melodic Development:",
    titleHighlight: "Theme and Variation",
    subtitle: "Develop <strong>melodic themes</strong> across your track. Master <strong>motivic development</strong>, <strong>melodic callbacks</strong>, and <strong>thematic unity</strong>. Great songs develop one core idea in multiple ways."
  },

  exercise: {
    title: "Develop a Melodic Theme Across Sections",
    description: "Create a <strong>core melodic motif</strong> (2-4 note pattern) and develop it throughout the track. Use it in different octaves, rhythms, instruments, and harmonizations. This creates <strong>thematic unity</strong>.",
    tip: "Film scores do this masterfully: one theme appears in brass (heroic), strings (sad), piano (intimate). Use your hook melody in the intro (simple), verse (developed), chorus (full), outro (callback).",
    steps: [
      { text: "<strong>Create core motif</strong> - Simple 2-4 note melodic idea" },
      { text: "<strong>Intro: State the theme</strong> - Present it simply, clearly" },
      { text: "<strong>Verse: Develop it</strong> - Add notes, change rhythm, new octave" },
      { text: "<strong>Chorus: Harmonize it</strong> - Add counter-melodies or harmonies" },
      { text: "<strong>Bridge: Transform it</strong> - Major to minor, or rhythmic variation" },
      { text: "<strong>Outro: Callback</strong> - Return to original simple version" }
    ]
  },

  developmentTechniques: [
    { technique: "Octave Displacement", description: "Play the motif in different octaves", example: "Intro: C4-E4-G4 → Chorus: C5-E5-G5" },
    { technique: "Rhythmic Variation", description: "Keep pitches, change rhythm", example: "Quarter notes → Eighth notes → Syncopated" },
    { technique: "Intervallic Expansion", description: "Widen or narrow intervals", example: "C-D-E → C-E-G (wider intervals)" },
    { technique: "Inversion", description: "Flip the melody upside down", example: "Up-Up-Down → Down-Down-Up" },
    { technique: "Augmentation", description: "Play it slower (double note values)", example: "Quarter notes → Half notes" },
    { technique: "Fragmentation", description: "Use only part of the motif", example: "Use first 2 notes only" }
  ],

  messages: applyMessagePreset("arrangement", {
    initial: "Develop a melodic motif across different sections!",
    success: "🎼 Brilliant melodic development! Your theme creates unity while evolving throughout the track.",
    error: "Make sure your motif appears in multiple sections with variations.",
    alreadyCompleted: "You've mastered melodic development!"
  }),

  mode: {
    type: "structure-builder",
    sandbox: false,
    showTimeline: true,
    highlightMotifs: true
  },

  learningObjectives: [
    "Create a memorable melodic motif",
    "Develop themes through six variation techniques",
    "Use melodic callbacks for emotional impact",
    "Create thematic unity across a complete track",
    "Apply classical composition techniques to modern production"
  ],

  // ====================
  // THEORY CONTENT
  // ====================
  theory: {
    sections: [
      {
        title: "Why Great Songs Develop One Idea (Not Ten)",
        content: `
**The Amateur vs Professional Approach:**

**Amateur Producer:**
- Creates 10 different melodies for 10 different sections
- Each section feels disconnected
- Listeners can't remember any melody after the track ends
- **Result:** Forgettable

**Professional Producer:**
- Creates ONE strong melodic motif (2-4 notes)
- Develops it across all sections using variation
- Every section relates back to the core idea
- **Result:** Memorable, cohesive, and emotionally resonant

---

**Thematic Unity: The Secret to Hit Songs**

The biggest hits in music history are built on **one simple melodic idea** that's developed throughout:

**"Happy Birthday":**
- Entire song built on the opening 4-note motif: "Hap-py Birth-day"
- Every phrase is a variation of those four notes
- *Why it works:* One idea, repeated with slight changes = instant memorability

**"Für Elise" by Beethoven:**
- The entire piece develops the opening E-D#-E-D#-E-B-D-C-A motif
- Every section references those notes in different ways
- *Why it works:* 5 minutes of music from 9 notes = perfect thematic unity

**"Shape of You" by Ed Sheeran:**
- The marimba riff (da-da da-da da-da da) appears in:
  - Intro (simple, clear)
  - Verse (background, supporting vocals)
  - Pre-chorus (harmonized version)
  - Chorus (full, loud version)
  - Bridge (stripped, minimal version)
  - Outro (callback to intro)
- *Why it works:* One motif, six variations = listeners hear familiar + fresh simultaneously

---

**The Motif: Your Musical DNA**

A **motif** (or motive) is a short, recognizable musical idea—usually 2-4 notes.

**Characteristics of a Strong Motif:**
1. **Short** — 2-4 notes maximum (any longer = it's a phrase, not a motif)
2. **Memorable** — Simple enough to sing after one listen
3. **Flexible** — Can be transformed in multiple ways
4. **Rhythmically distinct** — Clear rhythm pattern

**Examples of Iconic Motifs:**

**Beethoven's 5th Symphony:**
- Motif: G-G-G-Eb (three short + one long)
- *da da da DAAAA*
- Entire symphony built on this

**"Smoke on the Water" by Deep Purple:**
- Motif: G-Bb-C / G-Bb-Db-C (guitar riff)
- Entire song uses this riff in different contexts

**"Lose Yourself" by Eminem:**
- Motif: Guitar riff in intro (da-DA da-DA da-DA)
- Appears in every section, sometimes foreground, sometimes background

**Your Goal:** Create one motif this strong, then develop it throughout your track.

---

**Why This Approach Works Psychologically:**

**1. Familiarity Breeds Liking**
- Repeated exposure to the same melody (in varied forms) makes listeners like it more
- Called the "mere-exposure effect" in psychology
- **Application:** Repeat your motif 10+ times across the track (in different forms)

**2. Recognition Creates Satisfaction**
- When listeners recognize the motif returning, their brain releases dopamine
- "Oh, I know this part!"—instant emotional connection
- **Application:** Use callbacks to the original motif in the outro

**3. Variation Prevents Boredom**
- Exact repetition = monotony
- Variation = freshness while maintaining identity
- **Application:** Change octave, rhythm, or harmony each time

**The Perfect Balance:**
- **80% familiar** (recognizable motif)
- **20% fresh** (new variation)

---

**The Motivic Development Arc:**

Map out how your motif will evolve across the track:

\`\`\`
INTRO: Statement
  → Present the motif in its simplest form
  → Clear, unadorned, memorable
  → Example: Piano plays C-E-G-A (simple melody)

VERSE: Background Development
  → Motif moves to background (supporting role)
  → Let vocals take focus
  → Example: C-E-G-A as subtle synth pad

PRE-CHORUS: Rhythmic Variation
  → Keep pitches, change rhythm
  → Building energy
  → Example: C-E-G-A but in eighth notes instead of quarters

CHORUS: Full Statement
  → Motif at full power, all instruments
  → Often harmonized or doubled
  → Example: C-E-G-A played by synth + guitar + bass (octave lower)

BRIDGE: Transformation
  → Major change (inversion, mode change, or fragmentation)
  → Creates contrast
  → Example: C-E-G-A becomes C-Ab-F-D (inverted)

FINAL CHORUS: Augmentation
  → Motif in longer note values (slower, more epic)
  → Or full orchestration (maximum impact)
  → Example: C-E-G-A stretched to half notes

OUTRO: Callback
  → Return to the simple intro version
  → Full circle, emotional resolution
  → Example: Bare piano plays C-E-G-A like the intro
\`\`\`

**This creates an emotional journey through a single melodic idea.**

---

**Real-World Examples of Motivic Development:**

**"Let It Be" by The Beatles:**

**Intro (Simple Statement):**
- Piano plays the iconic C-G-Am-F melody
- Clear, simple, recognizable

**Verse (Background):**
- Same melody continues underneath vocals
- Supporting role

**Chorus ("Let it be" melody):**
- New melody but rhythmically relates to intro motif
- Feels connected

**Guitar Solo:**
- Solo built on fragments of the main piano melody
- Recognizable DNA

**Outro:**
- Returns to simple piano motif from intro
- Brings listeners full circle

---

**"Levels" by Avicii:**

**Intro (Statement):**
- Iconic Etta James vocal sample: "Oh, sometimes"
- 4-note melodic motif

**Buildup:**
- Same vocal sample, filtered and repeated
- Creates anticipation

**Drop:**
- Synth lead plays the EXACT melody from vocal sample
- Listeners recognize it instantly = dopamine hit

**Breakdown:**
- Vocal sample returns (callback)
- Familiar = satisfying

**Final Drop:**
- Synth melody again (developed further with harmonies)

**Entire track built on one 4-note vocal sample.**

---

**Film Score Approach (John Williams Technique):**

Film composers are masters of motivic development. Study their techniques:

**Star Wars Main Theme (John Williams):**
- Opening fanfare: Simple ascending motif (3 notes: C-G-C)
- This motif appears in:
  - Heroic moments (loud, brass)
  - Sad moments (strings, minor key)
  - Intimate moments (solo piano)
  - Action scenes (fast, rhythmic version)

**Same motif, different emotion = thematic unity with emotional range**

**Your Application:**
- Intro: Motif on piano (intimate)
- Verse: Motif on guitar (organic)
- Chorus: Motif on synth (powerful)
- Bridge: Motif on strings (emotional)

**Same melody, different instrument/context = different feeling.**
        `
      },
      {
        title: "The Six Classical Development Techniques",
        content: `
**These techniques have been used for 400 years—from Bach to Billie Eilish.**

---

**Technique 1: Octave Displacement**

**Definition:** Play the same melody in a different octave (higher or lower).

**Original Motif (Middle Octave):**
\`\`\`
C4 - E4 - G4 - A4
\`\`\`

**Octave Displacement (Higher):**
\`\`\`
C5 - E5 - G5 - A5
\`\`\`

**Effect:** Same melody, different energy. Higher = brighter/more excited, Lower = darker/more serious.

**When to Use:**
- **Verse → Chorus:** Move motif up one octave for increased energy
- **Chorus → Bridge:** Move motif down one octave for intimate contrast
- **Final Chorus:** Layer multiple octaves simultaneously (massive impact)

**Real Example:**
- **"Clarity" by Zedd:** Main synth melody appears in low octave (verse), high octave (chorus), and both simultaneously (drop)

**Production Tip:** Layering the same melody across 2-3 octaves creates thickness without adding new musical ideas.

---

**Technique 2: Rhythmic Variation**

**Definition:** Keep the pitches the same, but change the rhythm.

**Original Motif (Quarter Notes):**
\`\`\`
C - E - G - A
♩   ♩   ♩   ♩  (steady quarter notes)
\`\`\`

**Rhythmic Variation 1 (Eighth Notes):**
\`\`\`
C - E - G - A
♫   ♫   ♫   ♫  (twice as fast)
\`\`\`

**Rhythmic Variation 2 (Syncopated):**
\`\`\`
C  -  E - G   -   A
♩    ♪  ♪  ♩.     ♪  (offbeat accents)
\`\`\`

**Rhythmic Variation 3 (Triplets):**
\`\`\`
C - E - G - A
♪♪♪ ♪♪♪ ♪♪♪ ♪♪♪  (triplet feel)
\`\`\`

**Effect:** Same notes, completely different vibe.

**When to Use:**
- **Verse 1:** Slow, steady rhythm (quarter notes)
- **Verse 2:** Faster rhythm (eighth notes) — more energy without changing melody
- **Chorus:** Syncopated rhythm — adds groove and excitement
- **Bridge:** Triplet feel — different character entirely

**Real Example:**
- **"Faded" by Alan Walker:** The main piano motif appears in slow rhythm (intro), faster rhythm (drop), and syncopated rhythm (breakdown)

---

**Technique 3: Intervallic Expansion/Contraction**

**Definition:** Make the intervals between notes wider (expansion) or narrower (contraction).

**Original Motif (Step-wise Motion):**
\`\`\`
C - D - E - F  (each note one step apart)
\`\`\`

**Expansion (Wider Intervals):**
\`\`\`
C - E - G - C  (intervals widened to thirds and fifths)
\`\`\`

**Contraction (Narrower Intervals):**
\`\`\`
C - C# - D - D#  (chromatic, half-step motion)
\`\`\`

**Effect:**
- **Expansion** = more dramatic, heroic, powerful
- **Contraction** = more tense, creeping, unsettling

**When to Use:**
- **Intro:** Original step-wise motif (simple)
- **Chorus:** Expanded intervals (epic, powerful)
- **Bridge:** Contracted intervals (tense, building anticipation)

**Real Example:**
- **Hans Zimmer (Inception Soundtrack):** The main BRAAAM sound uses interval expansion—simple motif stretched to massive intervals

---

**Technique 4: Inversion (Flipping the Melody)**

**Definition:** Flip the melody upside down. Where it went up, now it goes down (and vice versa).

**Original Motif:**
\`\`\`
C  →  E  →  G  →  E
(up  up  down)
\`\`\`

**Inversion:**
\`\`\`
C  →  Ab →  F  →  Ab
(down down up)
\`\`\`

**Effect:** Recognizable DNA, but feels fresh and unexpected.

**When to Use:**
- **Bridge:** Create contrast by using inverted version of main motif
- **B-section of verse:** Second half of verse uses inverted motif

**Real Example:**
- **Classical music uses this constantly:** Bach's fugues invert melodies all the time
- **Modern example:** Many EDM tracks invert the main lead melody in the second drop

**Production Tip:** Inversion is subtle—most listeners won't consciously notice, but they'll feel the connection.

---

**Technique 5: Augmentation (Slower) / Diminution (Faster)**

**Definition:**
- **Augmentation:** Play the motif in longer note values (slower, more epic)
- **Diminution:** Play the motif in shorter note values (faster, more intense)

**Original Motif (Quarter Notes):**
\`\`\`
C - E - G - A
♩   ♩   ♩   ♩  (1 beat each)
\`\`\`

**Augmentation (Half Notes):**
\`\`\`
C  -  E  -  G  -  A
𝅗𝅥    𝅗𝅥    𝅗𝅥    𝅗𝅥   (2 beats each = twice as slow)
\`\`\`

**Diminution (Eighth Notes):**
\`\`\`
C - E - G - A
♫   ♫   ♫   ♫  (half beat each = twice as fast)
\`\`\`

**Effect:**
- **Augmentation** = epic, emotional, cinematic (think slow-motion)
- **Diminution** = urgent, intense, exciting

**When to Use:**
- **Final Chorus:** Augmented version (stretched out for maximum emotion)
- **Buildup:** Diminution (faster version creates urgency before drop)

**Real Example:**
- **"Strobe" by Deadmau5:** The main motif appears in slow form (intro/breakdown) and fast form (drop)
- **"Experience" by Ludovico Einaudi:** Piano motif progressively gets faster (diminution builds intensity)

---

**Technique 6: Fragmentation (Using Only Part of the Motif)**

**Definition:** Take only the first 2 notes (or last 2 notes) and develop them independently.

**Original Motif:**
\`\`\`
C - E - G - A
\`\`\`

**Fragmentation (First 2 Notes Only):**
\`\`\`
C - E  (repeat this fragment)
C - E - C - E - C - E
\`\`\`

**Fragmentation (Last 2 Notes Only):**
\`\`\`
G - A  (repeat this fragment)
G - A - G - A - G - A
\`\`\`

**Effect:** Creates variation while maintaining DNA. Sounds fresh but familiar.

**When to Use:**
- **Transition sections:** Fragment the motif during buildups or breakdowns
- **Background layers:** Full motif in foreground, fragment in background
- **Percussive elements:** Use motif rhythm but only first 2 notes

**Real Example:**
- **"Midnight City" by M83:** The sax solo at the end uses fragments of the main synth melody
- **Hip-hop production:** Producers often loop just 2 notes of a sample (fragmentation) instead of the full phrase

---

**Combining Techniques for Maximum Development:**

**Don't use just one technique—combine 2-3 for professional results.**

**Example: Full Track Using All Six Techniques**

**Original Motif:** C - E - G - A (quarter notes, middle octave)

**Intro (Statement):**
- Original motif, simple piano

**Verse (Octave Displacement + Rhythmic Variation):**
- C5 - E5 - G5 - A5 (one octave higher)
- Eighth notes instead of quarters (faster)

**Pre-Chorus (Fragmentation):**
- C - E (just first 2 notes, repeated)
- Creates urgency

**Chorus (Augmentation + Harmonization):**
- C - E - G - A (stretched to half notes = slower, epic)
- Layered across 3 octaves (C3 + C4 + C5 simultaneously)

**Bridge (Inversion + Intervallic Expansion):**
- C → Ab → F → Ab (inverted)
- Intervals widened for drama

**Final Chorus (All Techniques Combined):**
- Original motif (C - E - G - A)
- Played in 3 octaves (octave displacement)
- Half note rhythm (augmentation)
- Harmonized with counter-melody

**Outro (Callback to Intro):**
- Return to simple piano, original motif
- Emotional resolution

**Result:** Six variations of one motif = thematic unity + constant development.

---

**Common Mistakes:**

**❌ Mistake: Creating too many motifs**
Having 5 different melodies = no thematic unity, forgettable.

**✓ Fix:** Pick ONE motif, develop it 6+ ways.

---

**❌ Mistake: Not transforming enough**
Using the exact same melody in every section = boring.

**✓ Fix:** Change octave, rhythm, or harmony each time it appears.

---

**❌ Mistake: Transforming too much**
Listeners can't recognize the motif anymore = loses connection.

**✓ Fix:** Keep at least one aspect the same (rhythm OR pitches OR contour).

---

**❌ Mistake: Forgetting the callback**
Track ends with new material instead of returning to the motif.

**✓ Fix:** Always return to the original motif in the outro for emotional resolution.

---

**Professional Development Checklist:**

Before moving on, verify your motif appears in:

- ✓ Intro (simple statement)
- ✓ Verse (background or variation)
- ✓ Chorus (full power)
- ✓ Bridge (transformation)
- ✓ Final chorus (climax version)
- ✓ Outro (callback to intro)

And you've used at least 3 of the 6 techniques:

- ✓ Octave displacement
- ✓ Rhythmic variation
- ✓ Intervallic expansion/contraction
- ✓ Inversion
- ✓ Augmentation/diminution
- ✓ Fragmentation

**If checked:** You've created professional-level motivic development.
        `
      },
      {
        title: "Practical Melodic Development Workflow",
        content: `
**Step-by-Step Process: From Motif to Full Track**

---

**Step 1: Craft Your Core Motif (2-4 Notes)**

**The most important step.** A weak motif can't be saved by development. A strong motif writes the track for you.

**Characteristics of a Strong Motif:**

✓ **2-4 notes maximum** (any longer = phrase, not motif)
✓ **Memorable after one listen** (can you sing it back?)
✓ **Rhythmically distinct** (not just straight quarter notes)
✓ **Emotionally clear** (happy/sad/mysterious/energetic)

**How to Create a Strong Motif:**

**Method 1: Chord Tones**
- Take a chord: C major (C - E - G)
- Create motif using those notes: C - E - G - E
- **Benefit:** Automatically sounds harmonious

**Method 2: Scale Fragments**
- Take a scale: C major (C D E F G A B C)
- Use 3-4 consecutive notes: E - F - G - A
- **Benefit:** Natural melodic flow

**Method 3: Rhythm First**
- Create interesting rhythm: ♩ ♪♪ ♩ ♪
- Add pitches after: C - E E - G - A
- **Benefit:** Rhythmically memorable

**Method 4: Call-and-Response**
- Question phrase: C - E (up, unresolved)
- Answer phrase: G - E (down, resolved)
- **Benefit:** Natural musical conversation

**Test Your Motif:**
1. Play it once. Close your laptop.
2. Can you sing it back from memory?
3. If **YES** → Proceed. If **NO** → Simplify.

---

**Step 2: Map Your Development Arc**

Before producing, plan how the motif will evolve:

\`\`\`
SECTION          | TECHNIQUE USED           | EMOTION/PURPOSE
-----------------|--------------------------|-----------------
Intro            | Original (simple)        | Establish theme
Verse 1          | Octave down              | Intimate, vocal focus
Pre-Chorus       | Rhythmic variation       | Building energy
Chorus 1         | Octave up + augmentation | Epic, powerful
Verse 2          | Fragmentation            | Variation on V1
Chorus 2         | Layered octaves          | Fuller than C1
Bridge           | Inversion + expansion    | Maximum contrast
Final Chorus     | All octaves + harmonies  | Climax
Outro            | Original (callback)      | Resolution
\`\`\`

**This is your roadmap.** Stick to it during production to maintain focus.

---

**Step 3: Produce the Intro (Simple Statement)**

**Goal:** Present the motif in its clearest, simplest form.

**Best Practices:**
- **One instrument only** (piano, guitar, or lead synth)
- **No effects** (minimal reverb, no delay/distortion)
- **Center panned** (mono, direct)
- **Clean mix** (nothing competing for attention)

**Example:**
\`\`\`
Motif: C - E - G - A (quarter notes)
Instrument: Piano
Bars: 4 bars, loop 2x
\`\`\`

**Why This Works:** Listeners hear the motif CLEARLY. They'll recognize it every time it returns (even transformed).

**Common Mistake:** Adding drums, bass, pads in the intro. **Too cluttered.** Let the motif breathe.

---

**Step 4: Develop for Verse (Background Role)**

**Goal:** Let vocals take focus, motif supports in the background.

**Techniques:**
- **Octave displacement** (move to higher or lower octave to avoid vocal clash)
- **Rhythmic variation** (slower rhythm so it doesn't compete with vocal rhythm)
- **Instrumentation change** (if intro was piano, verse is pad)

**Example:**
\`\`\`
Motif: C5 - E5 - G5 - A5 (one octave higher than intro)
Instrument: Soft pad (not piano)
Rhythm: Half notes (slower than intro)
Volume: -6dB (background, not foreground)
\`\`\`

**Why This Works:** Motif is present (thematic unity) but doesn't fight vocals for attention.

---

**Step 5: Build Pre-Chorus (Rhythmic Urgency)**

**Goal:** Create forward momentum into the chorus.

**Technique:** Rhythmic variation (faster rhythm = building energy)

**Example:**
\`\`\`
Original motif: C - E - G - A (quarter notes)
Pre-chorus: C - E - G - A (eighth notes = twice as fast)
\`\`\`

**Additional Techniques:**
- **Fragmentation:** Repeat just C - E fragment at the end of pre-chorus
- **Rising octave:** Start at C4, end at C5 (rising into chorus)

**Why This Works:** Faster rhythm creates urgency. Listeners feel the chorus approaching.

---

**Step 6: Deliver the Chorus (Full Power)**

**Goal:** Maximum impact. This is where the motif shines.

**Techniques:**
- **Octave layering:** Play motif in 2-3 octaves simultaneously (C3 + C4 + C5)
- **Harmonization:** Add harmony notes (thirds or fifths above main melody)
- **Full instrumentation:** Piano + synth + guitar all playing motif
- **Augmentation (optional):** Stretch to half notes for epic feel

**Example:**
\`\`\`
Motif: C - E - G - A
Octaves: C3 (bass), C4 (mid), C5 (high)
Instruments: Synth lead (C5) + Piano (C4) + Bass (C3 playing root notes)
Rhythm: Half notes (stretched for impact)
Volume: 0dB (full power)
\`\`\`

**Why This Works:** The listener has heard this motif 3 times already (intro, verse, pre-chorus). Now it arrives in FULL FORCE. Recognition + power = dopamine hit.

---

**Step 7: Transform for Bridge (Maximum Contrast)**

**Goal:** Create a moment of surprise and freshness before final chorus.

**Best Techniques for Bridge:**
- **Inversion:** Flip the melody upside down
- **Mode change:** Major to minor (or vice versa)
- **Intervallic expansion:** Widen the intervals dramatically
- **Fragmentation:** Use only 2 notes of the motif

**Example:**
\`\`\`
Original motif: C - E - G - A (ascending)
Bridge inversion: C - Ab - F - D (descending)

Or:
Original motif: C - E - G - A (major)
Bridge mode change: C - Eb - G - Ab (minor = darker)
\`\`\`

**Why This Works:** The bridge feels DIFFERENT (prevents monotony) but still RELATED (thematic unity). Listeners feel refreshed.

---

**Step 8: Climax in Final Chorus (Everything Combined)**

**Goal:** Exceed all previous choruses. Make this the peak.

**Combine Multiple Techniques:**
- **Layered octaves:** 3-4 octaves (C2, C3, C4, C5)
- **Harmonies:** Add thirds, fifths, and counter-melodies
- **Augmentation:** Stretch to longer note values (more epic)
- **Full instrumentation:** Every instrument playing some version of the motif

**Example:**
\`\`\`
Bass: C2 - E2 - G2 - A2 (sub-bass, foundational)
Synth 1: C3 - E3 - G3 - A3 (mid-range power)
Synth 2: C4 - E4 - G4 - A4 (main melody)
Lead: C5 - E5 - G5 - A5 (high, bright)
Harmony: E4 - G4 - B4 - C5 (third above main melody)
Counter-melody: A3 - G3 - E3 - C3 (descending answer to motif)
\`\`\`

**Why This Works:** The final chorus feels MASSIVE because every frequency range has the motif. It's the same melody, but in 6 different voices.

---

**Step 9: Resolve in Outro (Callback to Intro)**

**Goal:** Bring the listener full circle. End where you began.

**Technique:** Return to the EXACT intro version.

**Example:**
\`\`\`
Same as intro:
  - Simple piano (same instrument as intro)
  - Original motif: C - E - G - A
  - Quarter notes (original rhythm)
  - No other instruments
\`\`\`

**Optional Variation:**
- Fade out while looping motif
- Or end on the first note of the motif (C) held as a final chord

**Why This Works:** Listeners hear the familiar intro motif return. "Oh, we're back where we started." Creates emotional closure.

**Film score equivalent:** "Returning home" feeling. The journey is complete.

---

**Step 10: Add Background Development (Optional Pro Move)**

While the main motif develops in the foreground, add **background variations**:

**Example:**

**Chorus (foreground):**
- Main synth plays full motif: C - E - G - A

**Chorus (background):**
- Pad plays fragmented motif: C - E (looping)
- Percussion plays motif rhythm (no pitched notes, just rhythm)
- Bass plays motif in reverse: A - G - E - C

**Why This Works:** Creates depth. Casual listeners hear the main motif, but deep listeners discover hidden variations on repeat listens.

---

**Production Tips for Each Technique:**

**Octave Displacement:**
- Use EQ to prevent frequency masking (high-pass lower octaves, low-pass higher octaves)
- Pan different octaves left/right for width

**Rhythmic Variation:**
- Keep the FIRST note of the motif on the same beat (anchors the rhythm)
- Vary the notes that follow

**Intervallic Expansion:**
- Don't expand TOO much or it becomes unrecognizable
- Keep at least one interval the same

**Inversion:**
- Use MIDI editor to "flip vertically" for perfect inversion
- Test: does it still sound related to the original?

**Augmentation:**
- Works best in final chorus or outro (epic, stretched)
- Combine with reverb for cinematic effect

**Fragmentation:**
- Use in transitions (buildups/breakdowns)
- Layer full motif + fragment simultaneously

---

**Common Production Mistakes (And Fixes):**

**❌ Mistake: "My motif sounds boring when repeated"**

**✓ Fix:**
- You're not transforming it enough
- Apply at least 2 techniques per section (e.g., octave + rhythm change)

---

**❌ Mistake: "Listeners don't recognize my motif across sections"**

**✓ Fix:**
- You're transforming it TOO much
- Keep rhythm OR pitches the same (change one, not both)

---

**❌ Mistake: "My bridge doesn't feel different enough"**

**✓ Fix:**
- Use inversion or mode change (major → minor)
- These create maximum contrast while maintaining DNA

---

**❌ Mistake: "My final chorus doesn't feel climactic"**

**✓ Fix:**
- Layer multiple octaves (3-4 simultaneously)
- Add harmonies and counter-melodies
- Increase instrumentation (every element plays the motif)

---

**Genre-Specific Applications:**

**Pop:**
- Motif in intro (piano or guitar)
- Motif in chorus (full vocals + instruments)
- Callback in outro

**EDM:**
- Motif in breakdown (simple synth)
- Motif in drop (layered synths, multiple octaves)
- Fragmentation in buildup

**Hip-Hop:**
- Motif as sample loop (intro)
- Motif chopped/fragmented (verse)
- Motif in hook (chorus)

**Rock:**
- Motif as guitar riff (intro)
- Motif as vocal melody (chorus)
- Motif in guitar solo (developed)

---

**Final Checklist Before Moving On:**

✓ **Motif is 2-4 notes and memorable**
✓ **Intro states motif clearly (simple, one instrument)**
✓ **Verse has motif in background (different octave or rhythm)**
✓ **Chorus has full motif (loud, layered, powerful)**
✓ **Bridge transforms motif (inversion, mode change, or expansion)**
✓ **Final chorus layers motif across octaves**
✓ **Outro returns to intro version (callback)**
✓ **Used at least 3 development techniques**
✓ **Motif appears 6+ times across track**

**If all checked:** You've created professional thematic unity. Your track will be memorable and cohesive—the hallmark of great songwriting.

---

**What's Next:**

In Lesson 17, you'll learn **advanced transition techniques**—how to move between sections using professional tricks like reverse effects, automation, and creative edits. These transitions will connect your developed motif across sections seamlessly.
        `
      }
    ]
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
