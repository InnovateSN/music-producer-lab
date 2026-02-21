/**
 * Music Producer Lab - Lesson Configuration
 * Lesson: Arrangement 14 - Arrangement by Frequency
 *
 * This lesson teaches arranging by frequency spectrum rather than by instrument.
 * Think vertically: low, mid, and high frequency content per section.
 */

import { applyMessagePreset, buildHeroEyebrow, buildLessonQualityPreset } from "./config-presets.js";

const lessonQualityPreset = buildLessonQualityPreset({
  lessonCategory: "Arrangement",

  progression: {
    difficulty: "advanced",
    prerequisites: ["arrangement-13","arrangement-12"],
    outcomes: ["Completare gli obiettivi pratici di arrangement-14","Consolidare competenze advanced nel modulo arrangement"]
  },
  lessonNumber: 14
});

export const lessonConfig = {
  lessonKey: "mpl-arrangement-14-progress",
  lessonNumber: 14,
  lessonCategory: "Arrangement",

  reviewMetadata: {
    ...lessonQualityPreset.reviewMetadata
  },
  depthLevel: 4,

  nextLessonUrl: "lesson-arrangement-15.html",
  prevLessonUrl: "lesson-arrangement-13.html",
  overviewUrl: "labs.html",

  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 14, categoryLabel: "Arrangement" }),
    title: "Frequency-Based",
    titleHighlight: "Arrangement",
    subtitle: "Think <strong>vertically</strong>, not horizontally. Arrange by <strong>frequency content</strong>—low, mid, high. Master the art of <strong>frequency movement</strong> across sections for maximum clarity and impact."
  },

  exercise: {
    title: "Arrange by Frequency Spectrum Movement",
    description: "Create an arrangement by thinking about <strong>which frequencies are active</strong> in each section. Move frequency content strategically: verse might be mid-focused, chorus adds lows and highs for fullness.",
    tip: "Verse: Strong mids (vocals), light lows, minimal highs. Chorus: Full spectrum (lows, mids, highs all present). This creates massive perceived impact without adding many elements.",
    steps: [
      { text: "<strong>Intro: Mid-range only</strong> - Piano or guitar, no bass/highs" },
      { text: "<strong>Verse: Mids + light lows</strong> - Add bass but keep it simple" },
      { text: "<strong>Pre-chorus: Add highs</strong> - Introduce hi-hats or bright synth" },
      { text: "<strong>Chorus: Full spectrum</strong> - Lows (bass), mids (vocals), highs (cymbals)" },
      { text: "<strong>Breakdown: Remove lows</strong> - Keep mids/highs only" },
      { text: "<strong>Final chorus: Maximum spectrum</strong> - Sub-bass + air frequencies" }
    ]
  },

  frequencyStrategy: {
    lows: {
      range: "20-250Hz",
      purpose: "Power, weight, foundation",
      addWhen: "Chorus, drop, final section",
      removeWhen: "Verse, breakdown, intimacy"
    },
    mids: {
      range: "250Hz-4kHz",
      purpose: "Melody, vocals, clarity",
      addWhen: "Always present (core of song)",
      removeWhen: "Never completely—this is where the song lives"
    },
    highs: {
      range: "4kHz-20kHz",
      purpose: "Brightness, energy, excitement",
      addWhen: "Chorus, buildup, energy sections",
      removeWhen: "Intimate verse, warm breakdown"
    }
  },

  messages: applyMessagePreset("arrangement", {
    initial: "Arrange by moving frequency content between sections!",
    success: "🎛️ Brilliant frequency arrangement! Your vertical thinking creates clarity and impact.",
    error: "Think about which frequency ranges are active in each section.",
    alreadyCompleted: "You've mastered frequency-based arrangement!"
  }),

  mode: {
    type: "structure-builder",
    sandbox: false,
    showTimeline: true,
    showFrequencySpectrum: true
  },

  learningObjectives: [
    "Think vertically about arrangement (frequency ranges)",
    "Control low, mid, and high frequency content per section",
    "Use frequency movement to create impact",
    "Understand which frequencies to add/remove per section type",
    "Create fullness through frequency spectrum filling"
  ],

  // ====================
  // THEORY CONTENT
  // ====================
  theory: {
    sections: [
      {
        title: "Why Frequency-Based Arrangement Creates Clarity",
        content: `
**The Horizontal vs Vertical Mindset:**

Most beginners think about arrangement **horizontally** (in time):
- "Add drums at bar 8"
- "Bring in the lead at bar 16"
- "Chorus starts at bar 32"

Professional arrangers think **vertically** (in frequency):
- "Verse has only mids (250Hz-4kHz), no sub-bass or air"
- "Chorus adds sub-bass (20-80Hz) and highs (8kHz+) for fullness"
- "Bridge removes lows entirely, keeping only mids and highs"

**The Frequency Spectrum as a Canvas:**

Think of the frequency spectrum (20Hz-20kHz) as vertical space you can fill or leave empty:

\`\`\`
20kHz  |─────| AIR BAND (brightness, sparkle)
12kHz  |─────| HIGH BAND (cymbals, hi-hats)
 4kHz  |─────| UPPER-MID BAND (presence, clarity)
 1kHz  |─────| MID BAND (vocals, melody)
250Hz  |─────| LOW-MID BAND (warmth, body)
 80Hz  |─────| BASS BAND (power, foundation)
 20Hz  |─────| SUB-BASS BAND (weight, rumble)
\`\`\`

**Each section of your track can strategically fill or empty different frequency zones.**

---

**Why This Approach Works:**

**1. Perceived Fullness ≠ Element Count**

You don't need 10 instruments to make a section feel "full"—you need **full frequency spectrum coverage**.

**Example A (Feels Thin Despite 4 Elements):**
- Piano (200Hz-2kHz)
- Guitar (200Hz-3kHz)
- Vocals (200Hz-3kHz)
- Pad (150Hz-2kHz)
- **Result:** All elements in the same mid-range—sounds cluttered yet thin (no lows, no highs)

**Example B (Feels Full With 3 Elements):**
- Sub-bass (40Hz-80Hz) ← LOW
- Vocals (200Hz-3kHz) ← MID
- Hi-hats (8kHz-16kHz) ← HIGH
- **Result:** Full spectrum covered—sounds rich and spacious

**The secret: Vertical coverage matters more than horizontal element count.**

---

**2. Frequency Movement = Perceived Energy Change**

When you move from verse to chorus, you don't necessarily need to add MORE elements—you can just add MORE FREQUENCY SPECTRUM.

**Verse (Mid-Focused):**
- Frequencies: 200Hz-4kHz only (mids)
- Perceived energy: 50%

**Chorus (Full Spectrum):**
- Frequencies: 40Hz-16kHz (sub, mids, highs)
- Perceived energy: 100%

**Impact:** The chorus feels TWICE as powerful not because you doubled the element count, but because you filled the empty low and high ranges.

---

**3. Frequency = Emotion**

Different frequency ranges create different emotional responses:

**Low Frequencies (20-250Hz):**
- **Feeling:** Power, weight, aggression, warmth, foundation
- **Genres:** Hip-hop (808 sub-bass), EDM (massive drops), rock (distorted bass)
- **When to Use:** Choruses, drops, climax moments

**Mid Frequencies (250Hz-4kHz):**
- **Feeling:** Intimacy, clarity, presence, vocal focus
- **Genres:** ALL genres (this is where vocals and melody live)
- **When to Use:** Always present—this is the core of music

**High Frequencies (4kHz-20kHz):**
- **Feeling:** Brightness, energy, excitement, airiness, sparkle
- **Genres:** Pop (bright vocals), EDM (hi-hats, cymbals), electronic (air frequencies)
- **When to Use:** Energetic sections, choruses, builds

**By controlling which frequencies are active in each section, you control the emotional response.**

---

**Real-World Examples:**

**"Bad Guy" by Billie Eilish:**
- **Verse:** Only sub-bass (40-80Hz) + whispered vocals (low mids)—dark, intimate
- **Chorus:** Same sub + vocals BUT adds mid-range stabs—slightly fuller but still minimal
- *Impact:* The entire song lives in the LOW and MID frequencies—no cymbals, no brightness. This creates the dark, claustrophobic vibe.

**"Titanium" by David Guetta:**
- **Verse:** Vocals (mids) + light synth pad (mids/highs)—bright but not powerful
- **Buildup:** + Rising filter sweep (gradually adding highs)
- **Drop:** FULL SPECTRUM—sub-bass (40Hz) + mid-bass (80-200Hz) + lead (1-4kHz) + cymbals (8-16kHz)
- *Impact:* The drop feels MASSIVE because it's the first moment where the entire frequency spectrum is filled.

**"Everlong" by Foo Fighters:**
- **Verse (Quiet):** Clean guitar (200Hz-3kHz only)—mid-focused, no bass weight
- **Chorus (Loud):** Distorted guitar (80Hz-8kHz) + heavy drums + bass—FULL SPECTRUM
- *Impact:* The quiet-loud dynamic is achieved through frequency expansion, not just volume.

---

**The Frequency Arc:**

Just like you plan a density arc (sparse → full) or energy arc (low → high), plan a **frequency arc**:

\`\`\`
Intro:     Mids only (establish melody)
Verse 1:   Mids + Light lows (add foundation)
Pre-Chorus: Mids + Lows + Some highs (building)
Chorus 1:  FULL SPECTRUM (sub + mids + highs)
Verse 2:   Return to mids + lows (contrast)
Bridge:    Mids only (strip back to intimacy)
Final Chorus: FULL SPECTRUM + (add air/sub extensions)
\`\`\`

**This creates an emotional journey through frequency movement.**
        `
      },
      {
        title: "Frequency Zone Management—The Seven Ranges",
        content: `
**The Frequency Spectrum Breakdown:**

Here's how to think about each frequency zone and when to activate them:

---

**1. SUB-BASS (20-60Hz): The Foundation Rumble**

**What Lives Here:**
- 808 kicks
- Sub-bass synths
- Kick drum fundamentals
- Low-end weight

**Feeling:** Physical impact, chest-hitting power, club energy

**When to Use:**
- Choruses and drops (maximum power)
- Final chorus (ultimate climax)
- Hip-hop verses (808 foundation)

**When to Remove:**
- Verses (sparse, intimate sections)
- Breakdowns (stripped-back moments)
- Acoustic/organic sections

**Pro Tip:** Only ONE element should occupy sub-bass at a time (usually kick OR bass, not both). If both are present, use sidechaining to duck bass when kick hits.

---

**2. BASS (60-250Hz): The Power Zone**

**What Lives Here:**
- Bass guitar
- Bass synth mid-range
- Kick drum body
- Low tom drums
- Male vocal fundamentals

**Feeling:** Warmth, power, groove, foundation

**When to Use:**
- All full sections (verses, choruses)
- Anytime you need rhythmic foundation
- Groovy sections (funk, disco, house)

**When to Remove:**
- Intimate breakdowns (vocals + piano only)
- High-energy builds (remove before drop for contrast)
- Sparse intros (delay bass entrance for impact)

**Pro Tip:** This is where "muddiness" lives. If your mix sounds muddy, high-pass filter elements below 80-100Hz (except bass/kick).

---

**3. LOW-MIDS (250Hz-500Hz): The Mud Zone**

**What Lives Here:**
- Guitar low strings
- Piano low notes
- Male vocal chest voice
- Snare drum body

**Feeling:** Warmth, body, thickness

**When to Use:**
- Warm, full sections
- Rock/organic arrangements
- Supporting low-end

**When to Remove (Often):**
- This is the "mud zone"—too much here = cloudy mix
- Cut this range slightly in most elements
- Only bass and kick should have significant energy here

**Pro Tip:** Professional mixes often have a "scoop" in this range—cutting 2-4dB around 300-400Hz to clean up mud.

---

**4. MIDS (500Hz-2kHz): The Core Zone**

**What Lives Here:**
- Vocals (main presence)
- Lead melodies
- Snare snap
- Guitar/piano main body

**Feeling:** Presence, clarity, forward energy

**When to Use:**
- ALWAYS—this is where music lives
- This is where vocals shine
- Never completely remove this range

**When to Emphasize:**
- Verses (vocal clarity)
- Intimate sections
- Solos and lead instruments

**Pro Tip:** The mids should NEVER be empty. Even in sparse sections, mids carry the melody/vocal. This is the most important frequency range.

---

**5. UPPER-MIDS (2kHz-6kHz): The Clarity Zone**

**What Lives Here:**
- Vocal consonants (S, T, K sounds)
- Snare crack
- Guitar pick attack
- Piano hammer attack

**Feeling:** Definition, clarity, presence, "in your face"

**When to Use:**
- When you want elements to "cut through"
- Aggressive sections (rock, metal)
- Bright pop productions

**When to Reduce:**
- Warm, dark vibes (lo-fi, R&B)
- Harsh/sibilant vocals (de-ess this range)

**Pro Tip:** Boost 3-5kHz slightly for vocal presence, but be careful—too much causes harshness and listener fatigue.

---

**6. HIGHS (6kHz-12kHz): The Brightness Zone**

**What Lives Here:**
- Cymbals
- Hi-hats
- Vocal breathiness
- String section shimmer
- Synth brightness

**Feeling:** Energy, excitement, brightness, airiness

**When to Use:**
- Choruses (add energy)
- Builds (rising brightness = rising energy)
- Energetic sections

**When to Remove:**
- Dark, moody sections
- Intimate verses
- Lo-fi/vintage productions

**Pro Tip:** Adding highs AFTER a section without them creates instant perceived energy increase, even if volume doesn't change.

---

**7. AIR (12kHz-20kHz): The Sparkle Zone**

**What Lives Here:**
- Cymbal overtones
- Reverb tails
- "Air" and "sparkle"
- String harmonics

**Feeling:** Space, openness, luxury, pro sound

**When to Use:**
- Polished pop/EDM productions
- Creating "expensive" sound
- Spacious, atmospheric sections

**When to Remove:**
- Lo-fi, vintage, gritty productions
- Aggressive, raw sounds (punk, trap)
- When going for "underground" aesthetic

**Pro Tip:** Many amateur mixes lack air frequencies. A subtle high-shelf boost at 12kHz+ (1-2dB) adds professional polish.

---

**Strategic Frequency Activation by Section:**

**Intro (Establish):**
- Active: Mids (melody)
- Inactive: Sub-bass, highs
- *Goal:* Introduce the core idea without overwhelming

**Verse (Intimacy):**
- Active: Low-mids, mids (vocals + rhythm)
- Inactive: Sub-bass, air
- *Goal:* Clarity for lyrics, leave room for chorus

**Pre-Chorus (Building):**
- Active: Bass, mids, some highs
- Inactive: Sub-bass (save for chorus)
- *Goal:* Add energy progressively

**Chorus (Fullness):**
- Active: ALL RANGES (sub, bass, mids, highs, air)
- Inactive: Nothing
- *Goal:* Maximum fullness and impact

**Bridge (Contrast):**
- Active: Mids only OR highs only
- Inactive: Lows (create contrast with previous fullness)
- *Goal:* Reset attention, create space

**Final Chorus (Climax):**
- Active: ALL RANGES + emphasized sub and air
- Inactive: Nothing
- *Goal:* Exceed all previous sections

**Outro (Resolution):**
- Active: Mids, progressively remove others
- Inactive: Gradually mute lows and highs
- *Goal:* Wind down gracefully
        `
      },
      {
        title: "Practical Frequency Arrangement Techniques",
        content: `
**Technique 1: Frequency Stacking (Vertical Layering)**

Instead of adding more of the same frequency, **stack elements across different frequency zones**.

**Example (Verse → Chorus Transition):**

**Verse:**
- Vocals: 200Hz-3kHz (mids)
- Acoustic guitar: 150Hz-2kHz (low-mids/mids)
- *Active Zones:* Mids only

**Chorus:**
- Vocals: 200Hz-3kHz (mids) ← Same as verse
- Bass: 40Hz-200Hz (sub + bass) ← NEW LOW ZONE
- Hi-hats: 8kHz-16kHz (highs) ← NEW HIGH ZONE
- *Active Zones:* Sub + Mids + Highs = FULL

**Impact:** The chorus feels twice as full despite only adding 2 elements, because those elements fill previously empty zones.

---

**Technique 2: Frequency Removal for Contrast**

**Subtractive frequency arrangement** creates dramatic contrast.

**Example (Chorus → Breakdown):**

**Chorus:**
- Full frequency spectrum (20Hz-20kHz)
- Perceived fullness: 100%

**Breakdown:**
- **Remove** sub-bass and bass (20Hz-250Hz)
- **Remove** air frequencies (12kHz+)
- **Keep** only mids (250Hz-6kHz)
- Perceived fullness: 40%

**Impact:** Sudden frequency reduction feels like an emotional drop, even if element count is the same. The breakdown feels intimate and small.

---

**Technique 3: Frequency Sweeping (Filter Automation)**

**Gradually opening or closing frequencies** creates smooth energy transitions.

**Buildup Example (Opening Filter):**
\`\`\`
Bar 1-4:   Low-pass filter at 500Hz (only low-mids)
Bar 5-8:   Filter opens to 2kHz (adding upper-mids)
Bar 9-12:  Filter opens to 8kHz (adding highs)
Bar 13-16: Filter fully open 20kHz (full spectrum)
Bar 17:    DROP (full frequency impact)
\`\`\`

**Result:** Progressive frequency addition = building energy without adding elements.

**Breakdown Example (Closing Filter):**
\`\`\`
Bar 1:  Full spectrum (20Hz-20kHz)
Bar 2:  Filter closes to 10kHz (removing air)
Bar 3:  Filter closes to 4kHz (removing highs)
Bar 4:  Filter closes to 1kHz (only mids remain)
\`\`\`

**Result:** Progressive frequency removal = winding down energy smoothly.

---

**Technique 4: Mono-to-Stereo Frequency Expansion**

**Low frequencies should be mono (centered), high frequencies can be stereo (wide).**

**Verse (Narrow):**
- All elements panned center or narrow
- Frequency content: Mids mostly mono
- *Feel:* Focused, intimate, direct

**Chorus (Wide):**
- Sub-bass: Mono (centered)
- Mids: Slight stereo spread
- Highs: Wide stereo (cymbals panned L/R)
- *Feel:* Expansive, big, cinematic

**Why It Works:** Stereo width in highs = perceived "bigness" without losing low-end punch (which needs to stay mono for club/streaming compatibility).

---

**Technique 5: Genre-Specific Frequency Templates**

Different genres prioritize different frequency ranges:

**Hip-Hop (Sub-Bass Dominant):**
- Emphasis: 40-80Hz (808 sub)
- Support: 200-2kHz (vocals)
- Minimal: 6kHz+ (dark, heavy vibe)

**Pop (Bright, Full Spectrum):**
- Emphasis: 1-4kHz (vocal presence)
- Support: 40-200Hz (bass foundation)
- Support: 8kHz+ (bright, radio-friendly)

**Rock (Mid-Focused, Crunchy):**
- Emphasis: 200Hz-2kHz (guitar distortion)
- Support: 60-200Hz (bass)
- Support: 2-6kHz (guitar harmonics)

**EDM (Maximum Spectrum Utilization):**
- Emphasis: 40-80Hz (massive sub)
- Emphasis: 1-4kHz (lead synths)
- Emphasis: 8-16kHz (cymbals, FX)
- *Goal:* Use ENTIRE spectrum for maximum impact

**Lo-Fi (Limited Spectrum, Vintage Feel):**
- Emphasis: 200Hz-4kHz (vintage warmth)
- Cut: Below 80Hz (no deep sub)
- Cut: Above 10kHz (no air/sparkle)
- *Goal:* Narrow bandwidth = vintage character

---

**Common Frequency Mistakes:**

**❌ Everything in the Mids:**
All elements occupying 200Hz-2kHz—sounds cluttered, thin, and muddy simultaneously.

**✓ Fix:** Spread elements vertically. Assign some to lows (bass), some to mids (vocals), some to highs (hi-hats).

---

**❌ No Sub-Bass in Choruses:**
Chorus feels weak despite being "full" because there's no low-end weight.

**✓ Fix:** Add sub-bass (40-80Hz) or boost kick fundamental in choruses.

---

**❌ Too Much Low-Mid Mud (250-500Hz):**
Mix sounds cloudy, indistinct, lacks clarity.

**✓ Fix:** Cut 2-4dB around 300-400Hz in most elements. Only bass/kick should have significant energy here.

---

**❌ No Brightness in Energetic Sections:**
High-energy sections (drops, choruses) lack excitement because there's no high-frequency content.

**✓ Fix:** Add cymbals, hi-hats, or high-shelf boost to add brightness and energy.

---

**❌ Constant Full Spectrum:**
Every section uses the full frequency range—no contrast, listener fatigue.

**✓ Fix:** Reserve full spectrum for choruses/drops only. Strip frequencies in verses/bridges for contrast.

---

**Frequency Arrangement Workflow:**

**Step 1: Plan Your Frequency Arc**
- Map which sections should be full-spectrum vs limited-spectrum
- Example: Verse (mids), Pre-chorus (mids + lows), Chorus (full), Bridge (highs only)

**Step 2: Assign Elements to Frequency Zones**
- Sub-bass: 808, sub synth
- Bass: Bass guitar, kick body
- Mids: Vocals, melody, chords
- Highs: Hi-hats, cymbals, brightness

**Step 3: EQ for Separation**
- High-pass non-bass elements (80-100Hz)
- Cut mud zone in most elements (300-400Hz)
- Boost presence in vocals (3-5kHz)
- Add air to mix bus (12kHz+ shelf)

**Step 4: Verify in Spectrum Analyzer**
- Check verse: Are mids dominant? ✓
- Check chorus: Is full spectrum active? ✓
- Check bridge: Is it frequency-distinct from verse? ✓

---

**Why This Matters:**

Frequency-based arrangement is one of the most powerful yet underutilized techniques. Most producers think horizontally (time) but forget to think vertically (frequency). By strategically activating and deactivating frequency zones across sections, you create:
- **Clarity:** Less frequency masking
- **Impact:** Contrast through frequency movement
- **Emotion:** Different frequencies = different feelings
- **Professional Sound:** Intentional frequency management separates pro from amateur

**What's Next:**
In Lesson 15, you'll learn **rhythmic variation**—how to evolve grooves while maintaining the core pattern. This pairs perfectly with frequency arrangement to create multi-dimensional arrangement development.
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
