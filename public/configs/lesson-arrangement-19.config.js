/**
 * Music Producer Lab - Lesson Configuration
 * Lesson: Arrangement 19 - Arranging for the Mix
 *
 * This lesson teaches how to arrange with mixing in mind.
 * Master frequency space, dynamic range, and mix-ready arrangements.
 */

import { applyMessagePreset, buildHeroEyebrow, buildLessonQualityPreset } from "./config-presets.js";

const lessonQualityPreset = buildLessonQualityPreset({
  lessonCategory: "Arrangement",
  lessonNumber: 19
});

export const lessonConfig = {
  lessonKey: "mpl-arrangement-19-progress",
  lessonNumber: 19,
  lessonCategory: "Arrangement",

  reviewMetadata: {
    ...lessonQualityPreset.reviewMetadata
  },
  depthLevel: 5,

  nextLessonUrl: "lesson-arrangement-20.html",
  prevLessonUrl: "lesson-arrangement-18.html",
  overviewUrl: "labs.html",

  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 19, categoryLabel: "Arrangement" }),
    title: "Arranging for the Mix:",
    titleHighlight: "Mix-Ready Production",
    subtitle: "Arrange with <strong>mixing in mind</strong>. Leave <strong>frequency space</strong>, manage <strong>dynamic range</strong>, and create <strong>mix-ready arrangements</strong>. Good arrangement = 80% of a great mix."
  },

  exercise: {
    title: "Create a Mix-Ready Arrangement",
    description: "Build an arrangement designed for easy mixing. Leave frequency space, avoid element clashing, manage dynamics, and create natural separation. <strong>A great arrangement needs minimal mixing.</strong>",
    tip: "Mix engineers say: \"A great arrangement mixes itself.\" If you can't hear every element clearly in the arrangement, you won't be able to mix it later. Fix it in the arrangement phase.",
    steps: [
      { text: "<strong>Assign frequency zones</strong> - One element per frequency range" },
      { text: "<strong>Use stereo space</strong> - Pan elements left/right to avoid center pile-up" },
      { text: "<strong>Leave dynamic range</strong> - Don't max out levels, leave headroom" },
      { text: "<strong>Create natural separation</strong> - Elements separated by frequency, stereo, or time" },
      { text: "<strong>Limit simultaneous elements</strong> - Maximum 4-5 at once" },
      { text: "<strong>Test in mono</strong> - Should still sound clear with no panning" }
    ]
  },

  mixFriendlyPrinciples: [
    {
      principle: "Frequency Separation",
      description: "No two elements fight for the same frequency range",
      howTo: "Bass: 60-250Hz, Pads: 250Hz-1kHz, Vocals: 1kHz-4kHz, Hi-hats: 8kHz+",
      benefit: "Each element has sonic space to live"
    },
    {
      principle: "Stereo Separation",
      description: "Use the full stereo field, not just center",
      howTo: "Lead vocal: Center, Rhythm guitar: Left, Piano: Right, Pad: Wide",
      benefit: "Prevents center frequency pile-up"
    },
    {
      principle: "Dynamic Range",
      description: "Leave 6-12dB headroom on the master",
      howTo: "Keep peaks around -6dB to -12dB, not hitting 0dB",
      benefit: "Room for mixing, mastering, and transient punch"
    },
    {
      principle: "Element Limit",
      description: "Maximum 4-5 elements playing simultaneously",
      howTo: "Foundation + Pad + Rhythm + Lead + Fills = 5 max",
      benefit: "Clarity, separation, and professional sound"
    },
    {
      principle: "Mono Compatibility",
      description: "Arrangement works in mono (no phase cancellation)",
      howTo: "Test mix in mono—everything should still be audible",
      benefit: "Works on phones, clubs, and radio"
    }
  ],

  commonMistakes: [
    { mistake: "Center pile-up", fix: "Pan instruments left/right" },
    { mistake: "Frequency clashing", fix: "Assign each element its own frequency zone" },
    { mistake: "Too many elements", fix: "Remove 1-2 elements, arrangement will sound bigger" },
    { mistake: "No headroom", fix: "Lower all faders, leave 6-12dB headroom" },
    { mistake: "Phase cancellation", fix: "Check in mono, adjust stereo width" }
  ],

  messages: applyMessagePreset("arrangement", {
    initial: "Create a mix-ready arrangement with proper separation!",
    success: "🎚️ Perfect mix-ready arrangement! This will be incredibly easy to mix.",
    error: "Check for frequency clashing, center pile-up, or too many simultaneous elements.",
    alreadyCompleted: "You've mastered mix-ready arranging!"
  }),

  mode: {
    type: "structure-builder",
    sandbox: false,
    showTimeline: true,
    showFrequencyAnalyzer: true,
    showStereoMeter: true,
    showHeadroomMeter: true
  },

  learningObjectives: [
    "Arrange with mixing in mind from the start",
    "Apply five mix-friendly principles",
    "Create natural frequency and stereo separation",
    "Leave appropriate headroom for mixing",
    "Ensure mono compatibility",
    "Avoid common arrangement mistakes that cause mix problems"
  ],

  // ====================
  // THEORY CONTENT
  // ====================
  theory: {
    sections: [
      {
        title: "Why Great Arrangements Mix Themselves",
        content: `
**The Producer's Secret:**

**"A great arrangement needs minimal mixing. A bad arrangement can't be fixed in the mix."**

This is the #1 truth professional producers know but amateurs ignore.

---

**The 80/20 Mix Rule:**

**80% of a professional mix comes from arrangement decisions**
**20% comes from actual mixing (EQ, compression, effects)**

**What This Means:**
- If your arrangement has frequency clashing, no amount of EQ will fix it
- If your arrangement has too many elements, compression won't create space
- If your arrangement lacks dynamic range, limiters will make it worse

**Solution:** Design mix-ready arrangements from the start.

---

**Amateur vs Professional Approach:**

**Amateur Workflow:**
1. Produce track with 30 elements playing simultaneously
2. Everything panned center
3. No frequency planning
4. Master bus hitting 0dB (no headroom)
5. Try to "fix it in the mix"
6. Spend 20 hours mixing, still sounds muddy

**Professional Workflow:**
1. Produce track with 5 elements playing simultaneously (max)
2. Each element in separate frequency zone
3. Elements panned intentionally (stereo separation)
4. Master bus peaking at -12dB (headroom for mixing)
5. Arrangement already sounds clean
6. Spend 2 hours mixing, sounds professional

**The difference:** Professionals solve problems during ARRANGEMENT, not mixing.

---

**The "Arrangement = 80% of the Mix" Principle:**

**What Arrangement Handles:**

✓ **Frequency separation** — Each element occupies a distinct frequency range
✓ **Stereo placement** — Elements spread across the stereo field
✓ **Element density** — Maximum 4-5 simultaneous elements
✓ **Dynamic range** — Natural loud/quiet contrast built in
✓ **Clarity** — Each element audible and distinct

**What Mixing Handles:**

✓ **Tonal balance** — Final EQ adjustments (fine-tuning)
✓ **Dynamics control** — Compression to even out performances
✓ **Space and depth** — Reverb and delay for dimension
✓ **Polish** — Final loudness, saturation, mastering

**If arrangement handles the 80%, mixing is easy. If arrangement is a mess, mixing is impossible.**

---

**Real-World Example:**

**Track A (Bad Arrangement):**
- 15 elements playing in chorus
- All elements in mid-range (200Hz-2kHz)
- Everything panned center
- Master bus hitting 0dB

**Mixing Track A:**
- EQ can't create separation (too much mid-range content)
- Panning won't help (already bounced/printed)
- Compression makes it worse (accentuates the mud)
- **Result:** 20 hours of work, still sounds amateur

**Track B (Good Arrangement):**
- 5 elements playing in chorus
- Each element in separate frequency zone:
  - Sub-bass (40-80Hz)
  - Bass (80-250Hz)
  - Vocals (500Hz-3kHz)
  - Guitar (1-4kHz)
  - Hi-hats (8-12kHz)
- Panned: Vocal center, guitar left, piano right, hi-hats wide
- Master bus peaking at -12dB

**Mixing Track B:**
- Minor EQ tweaks (already clean)
- Light compression (already dynamic)
- Reverb for space (already has depth)
- **Result:** 2 hours of work, sounds professional

**The lesson:** Spend time on arrangement, save time on mixing.

---

**The Five Mix-Friendly Principles:**

These principles should guide EVERY arrangement decision:

**1. Frequency Separation**
- **Rule:** No two elements occupy the same frequency range simultaneously
- **Why:** Prevents masking, mud, and frequency clashing

**2. Stereo Separation**
- **Rule:** Spread elements across the stereo field (not all center)
- **Why:** Prevents "center pile-up," creates width and space

**3. Dynamic Range**
- **Rule:** Leave 6-12dB headroom on master bus
- **Why:** Room for mixing, mastering, and transient punch

**4. Element Limit**
- **Rule:** Maximum 4-5 elements playing simultaneously
- **Why:** Clarity, separation, professional sound

**5. Mono Compatibility**
- **Rule:** Arrangement must sound good in mono (no phase cancellation)
- **Why:** Works on phones, clubs, radio, streaming services

**If your arrangement follows these five principles, mixing will be effortless.**

---

**Why Mix Engineers Reject Poorly Arranged Tracks:**

Professional mix engineers can identify a bad arrangement instantly:

**Red Flags:**

❌ **"There are 20 tracks all fighting for the mids"**
- Engineer: "I can't separate these with EQ. You need to remove elements."

❌ **"Everything is panned center"**
- Engineer: "I can't create width. You need to pan things during production."

❌ **"The master is clipping"**
- Engineer: "I can't add processing. You need to lower your levels."

❌ **"There's no dynamic range"**
- Engineer: "It's already squashed. Compression will make it worse."

❌ **"It sounds terrible in mono"**
- Engineer: "Phase cancellation. You need to fix stereo imaging."

**The pattern:** All of these are ARRANGEMENT problems, not mixing problems.

**Professional producers don't give mix engineers these problems—they solve them during arrangement.**

---

**The Headroom Principle:**

**Amateur tracks:** Master bus hitting 0dB, peaks clipping
**Professional tracks:** Master bus peaking at -6dB to -12dB

**Why Headroom Matters:**

**1. Room for Mixing:**
- Mix engineer needs to add EQ, compression, effects
- Each process adds gain
- If you're already at 0dB, there's nowhere to go (limiters = distortion)

**2. Transient Preservation:**
- Drums, percussion, plucks need transient punch
- If levels are maxed, transients get clipped (sounds dull)
- Headroom preserves punch and attack

**3. Analog Emulation:**
- Tape saturation, console emulation, tube warmth
- These add harmonics (increase loudness)
- If you're at 0dB, they clip instead of saturate

**4. Mastering Flexibility:**
- Mastering engineer needs 3-6dB to work with
- If you deliver a track at 0dB, they have to reduce gain first (degradation)

**How to Leave Headroom:**

**During Arrangement:**
1. Lower all faders by 6-12dB
2. Check master peak levels (-12dB max)
3. If peaking higher, lower individual tracks (not master fader)

**Why Not Just Lower Master Fader?**
- Lowering master = you're still clipping internally (bad)
- Lowering individual tracks = proper gain staging (good)

**Result:** Clean signal path, no internal clipping, maximum headroom.

---

**The Mono Compatibility Test:**

**Modern music is consumed in mono more than you think:**

- Phones (single speaker, mono output)
- Bluetooth speakers (many are mono)
- Clubs (often sum to mono for consistency)
- Radio (broadcast in mono or collapsed stereo)
- Streaming services (sometimes downsample to mono)

**If your track sounds terrible in mono, it will sound terrible on these platforms = millions of lost listens.**

---

**What Causes Mono Issues?**

**Phase Cancellation:**
- Two identical signals panned left/right
- When summed to mono, they cancel out (disappear)

**Example:**
- Vocal panned center (mono)
- Vocal double panned hard left and hard right (stereo)
- In stereo: Sounds wide and rich
- In mono: Doubled vocals cancel out, only center vocal remains (thin)

**How to Test:**

1. **Export your track in stereo**
2. **Import into DAW and collapse to mono** (sum L+R)
3. **Listen carefully:**
   - Do any elements disappear?
   - Does the low end vanish?
   - Does it sound thin or hollow?

**If YES to any:** You have phase cancellation. Fix it in arrangement.

---

**How to Ensure Mono Compatibility:**

**Rule 1: Keep Low Frequencies Mono**
- Bass, kick, sub-bass = always center (mono)
- Why: Low frequencies need focus and power (stereo = weak)

**Rule 2: Use Haas Effect Carefully**
- Haas effect: Delay one side 10-30ms (creates stereo width)
- Risk: Can cause phase issues in mono
- Test: Always check in mono after applying

**Rule 3: Avoid Identical Doubled Signals Panned L/R**
- Bad: Same vocal take panned hard L + hard R (phase issues)
- Good: Two different vocal takes panned L + R (no phase issues)

**Rule 4: Use Mid/Side Processing**
- Mid = center (mono content)
- Side = stereo width
- Ensure mid has strong content (doesn't disappear in mono)

**Rule 5: Test Every Stereo Effect**
- After adding stereo widener, chorus, or stereo delay:
- Collapse to mono and listen
- If something disappears or sounds thin, adjust

---

**The "Less is More" Philosophy:**

**Counterintuitive Truth: Removing elements makes your track sound BIGGER.**

**Why?**

**1. Masking Reduction**
- Fewer elements = less frequency masking
- Each element has space to breathe
- Result: Clearer, more impactful

**2. Perceived Loudness**
- Mixing 5 elements to -6dB each = -6dB master (loud)
- Mixing 20 elements to -20dB each = -6dB master (quiet)
- Same master level, but 5 elements SOUND louder (less competition)

**3. Dynamic Range**
- Fewer elements = more dynamic contrast
- Verse: 2 elements (quiet)
- Chorus: 5 elements (LOUD)
- Contrast = impact

**Test This Yourself:**

1. Mute 3-5 elements in your arrangement
2. Does the track sound BETTER?
3. If YES: Those elements were clutter. Keep them muted.

**Professional producers ruthlessly remove elements. Amateurs keep adding.**

---

**Real-World Examples:**

**"Bad Guy" by Billie Eilish:**
- Verse: 3 elements (sub-bass, vocals, finger snaps)
- Chorus: 4 elements (sub-bass, vocals, mid-bass stabs, snap)
- **Why it works:** Minimalism = massive clarity. Each element has space.

**"Shallow" by Lady Gaga & Bradley Cooper:**
- Verse: 2 elements (acoustic guitar, vocal)
- Chorus: 5 elements (guitar, vocal, bass, drums, strings)
- **Why it works:** Contrast. Verse is sparse, chorus feels HUGE.

**"Blinding Lights" by The Weeknd:**
- Entire track: 5-6 elements max at any time
- Synth bass, drum machine, synth lead, vocal, pad, arpeggio
- **Why it works:** Each element is distinct, no frequency clashing

**Notice:** These are GLOBAL HITS. None have 20 elements playing simultaneously. They're minimal, clean, mix-ready.
        `
      },
      {
        title: "The Five Mix-Friendly Principles (Deep Dive)",
        content: `
**Principle 1: Frequency Separation (The Vertical Mixing Approach)**

**Goal:** Each element occupies a distinct frequency zone. No overlapping.

---

**The Frequency Assignment Map:**

Assign each element to ONE primary frequency zone:

\`\`\`
20Hz-60Hz:   SUB-BASS (808, sub synth)
60Hz-250Hz:  BASS (bass guitar, kick body, bass synth)
250Hz-500Hz: LOW-MIDS (piano low notes, rhythm guitar low)
500Hz-2kHz:  MIDS (vocals, lead melody, snare)
2kHz-6kHz:   UPPER-MIDS (vocal clarity, guitar attack)
6kHz-12kHz:  HIGHS (hi-hats, cymbals, brightness)
12kHz-20kHz: AIR (reverb, sparkle, harmonics)
\`\`\`

**Rule:** Only ONE element should dominate each zone at a time.

---

**Example: Chorus Arrangement**

**Good Frequency Separation:**
\`\`\`
Sub-bass (40-80Hz):    808 kick ← DOMINANT
Bass (80-250Hz):       Bass guitar ← DOMINANT
Mids (500Hz-2kHz):     Lead vocal ← DOMINANT
Upper-Mids (2-6kHz):   Acoustic guitar ← DOMINANT
Highs (8-12kHz):       Hi-hats ← DOMINANT
\`\`\`

**Each zone has ONE dominant element. Clear, separated, professional.**

---

**Bad Frequency Separation:**
\`\`\`
Mids (500Hz-2kHz):
  - Lead vocal
  - Rhythm guitar
  - Piano
  - Pad
  - Synth lead

All fighting for the same frequency range = MUD
\`\`\`

---

**How to Implement Frequency Separation:**

**Step 1: List All Elements in Your Arrangement**

Example:
- Kick
- 808 bass
- Snare
- Hi-hats
- Lead vocal
- Harmony vocal
- Piano
- Synth pad
- Guitar

**Step 2: Assign Each to a Frequency Zone**

\`\`\`
Kick:           60-200Hz (bass zone)
808 bass:       40-80Hz (sub-bass zone)
Snare:          200Hz-4kHz (mids + upper-mids)
Hi-hats:        8kHz+ (highs)
Lead vocal:     500Hz-3kHz (mids, dominant)
Harmony vocal:  1kHz-5kHz (upper-mids, support)
Piano:          200Hz-4kHz (overlaps with vocal—PROBLEM)
Synth pad:      250Hz-2kHz (overlaps with vocal—PROBLEM)
Guitar:         500Hz-4kHz (overlaps with vocal—PROBLEM)
\`\`\`

**Identified Problems:**
- Piano, pad, guitar all compete with lead vocal in mids

**Step 3: Fix Frequency Conflicts**

**Option A: EQ to Create Separation**
- Piano: Cut 500Hz-1kHz (make room for vocal)
- Pad: Cut 1kHz-3kHz (make room for vocal)
- Guitar: High-pass at 500Hz (remove low-mid overlap)

**Option B: Remove Elements**
- Choose ONE mid-range element to support vocal
- Remove or mute the others
- Example: Keep piano, mute pad and guitar

**Option C: Change Instrumentation**
- Replace piano with bass guitar (occupies bass zone instead)
- Replace pad with hi-hat layer (occupies high zone instead)
- Keep guitar but move it up one octave (upper-mids instead of mids)

**Result:** Each frequency zone has clear ownership. No masking.

---

**Advanced: The "Frequency Gap" Technique**

**Leave intentional gaps in the frequency spectrum.**

**Example:**

**Verse (Frequency Gap Strategy):**
\`\`\`
Active:   Mids (vocals), Low-mids (acoustic guitar)
Inactive: Sub-bass, Highs, Air
\`\`\`

**Chorus (Fill the Gaps):**
\`\`\`
Active:   Sub-bass (808), Mids (vocals), Highs (hi-hats), Air (reverb)
Inactive: None
\`\`\`

**Why It Works:**
- Verse feels SMALL (frequency gaps)
- Chorus feels HUGE (full spectrum)
- Contrast = impact

---

**Principle 2: Stereo Separation (The Horizontal Mixing Approach)**

**Goal:** Spread elements across the stereo field. Avoid "center pile-up."

---

**The Stereo Field Map:**

\`\`\`
Hard Left (-100): Secondary elements (rhythm guitar, perc)
Left (-50 to -70): Supporting elements (harmony vocal, piano)
Center (0):        Primary elements (lead vocal, kick, snare, bass)
Right (+50 to +70): Supporting elements (synth pad, keys)
Hard Right (+100): Secondary elements (shaker, FX)
\`\`\`

**Rule:** Only 2-3 elements should be panned center. Everything else spread L/R.

---

**What Should ALWAYS Be Center (Mono):**

✓ **Lead vocal** — Main focus, needs to be centered
✓ **Kick drum** — Low-end power, must be mono for punch
✓ **Snare** — Backbeat anchor, centered for impact
✓ **Bass** — Sub frequencies need mono for club/streaming compatibility

**Everything else can (and should) be panned.**

---

**Example: Stereo Arrangement**

**Bad (Center Pile-Up):**
\`\`\`
Center (0): Lead vocal, kick, snare, bass, piano, guitar, pad, synth
Left/Right: Nothing
\`\`\`

**Result:** Narrow, congested, amateur sound

---

**Good (Stereo Separation):**
\`\`\`
Hard Left (-100):  Shaker
Left (-60):        Rhythm guitar
Left (-40):        Harmony vocal (low)
Center (0):        Lead vocal, kick, snare, bass
Right (+40):       Harmony vocal (high)
Right (+60):       Piano
Hard Right (+100): Hi-hat (alternate with left-panned perc)
\`\`\`

**Result:** Wide, spacious, professional sound

---

**How to Implement Stereo Separation:**

**Step 1: Identify Center Elements (Mandatory Mono)**
- Lead vocal
- Kick
- Snare
- Bass

**Step 2: Pan Supporting Elements L/R**

**Panning Strategy A: Complementary Pairs**
- Harmony vocal (low) → Left (-40)
- Harmony vocal (high) → Right (+40)
- Creates balanced width

**Panning Strategy B: Frequency-Based**
- Lower frequencies → Closer to center (-20 to +20)
- Higher frequencies → Wider panning (-60 to +60)
- Why: Low frequencies need focus, highs can spread

**Panning Strategy C: Call-and-Response**
- Guitar phrase → Left
- Piano response → Right
- Creates stereo dialogue

**Step 3: Test in Mono**
- Collapse to mono
- Do elements disappear?
- If yes, adjust panning or fix phase

---

**Advanced: LCR Panning (Classic Technique)**

**LCR = Left, Center, Right (only 3 positions)**

\`\`\`
Hard Left (-100): All left-panned elements
Center (0):       Lead vocal, kick, snare, bass
Hard Right (+100): All right-panned elements
NO positions in between (-50, +20, etc.)
\`\`\`

**Why It Works:**
- Maximum separation (no in-between clutter)
- Clean, retro, focused sound
- Used by classic rock, Beatles-style production

**Modern Variation:**
- Most producers use full stereo field (-100 to +100)
- LCR is a stylistic choice (old-school vibe)

---

**Principle 3: Dynamic Range (Leave Headroom)**

**Goal:** Master bus should peak at -6dB to -12dB (not 0dB).

---

**Why Headroom is Critical:**

**1. Mixing Needs Gain**
- EQ boosts add +3 to +6dB
- Compression makeup gain adds +2 to +6dB
- Saturation adds harmonics (perceived loudness)
- If you start at 0dB, all of these clip

**2. Mastering Needs Gain**
- Mastering engineer adds +6 to +12dB (final loudness)
- If you deliver at 0dB, they must lower gain first (degradation)

**3. Transients Get Preserved**
- Drum hits, plucks, attacks need headroom to punch through
- Clipping = lost transients = dull sound

---

**How to Leave Headroom:**

**Method 1: Lower All Faders**

1. After arranging, select all tracks
2. Lower by -6dB to -12dB (use trim/gain plugin or fader)
3. Check master peak level (should be -12dB max)

**Method 2: Gain Staging**

1. Set each track to peak at -18dB to -12dB
2. Master bus will naturally peak at -12dB to -6dB
3. No clipping, clean signal path

**Method 3: Reference Track Matching**

1. Import professional track (same genre)
2. Match your peak levels to theirs (-12dB to -6dB typically)
3. This ensures your levels are in professional range

---

**Common Mistake: "My track is too quiet!"**

**Amateur Response:**
- Turn up master fader (clips)
- Add limiter to master (squashes dynamics)
- **Result:** Loud but lifeless

**Professional Response:**
- Leave track quiet during arrangement/mixing
- Mastering handles final loudness
- **Result:** Dynamic range preserved, professional loudness

**Remember:** Quiet during mixing = room for mastering to make it LOUD properly.

---

**Principle 4: Element Limit (Maximum 4-5 Simultaneous)**

**Goal:** Never have more than 4-5 elements playing at the same time.

---

**Why This Rule Exists:**

**Human Attention Limits:**
- Brain can focus on 3-5 distinct sounds simultaneously
- More than 5 = cognitive overload (sounds chaotic)

**Frequency Masking:**
- Each element occupies frequency space
- 10 elements = 10x more masking = mud

**Mixing Complexity:**
- 5 elements = easy to balance
- 20 elements = impossible to balance (something always gets buried)

---

**The Element Count Framework:**

**Sparse Section (Verse, Breakdown):**
- 2-3 elements max
- Example: Vocal + guitar + light percussion

**Medium Section (Pre-Chorus, Bridge):**
- 3-4 elements
- Example: Vocal + guitar + bass + drums

**Full Section (Chorus, Drop):**
- 4-5 elements max
- Example: Vocal + guitar + bass + drums + synth

**Maximum (Final Chorus, Climax):**
- 6 elements (only in the biggest moment)
- Example: Vocal + harmony + guitar + bass + drums + synth + strings

**Never Exceed:** 6 elements (even in final chorus)

---

**How to Count Elements:**

**Element = Distinct Musical Voice**

Count as ONE element:
- Lead vocal (even with doubles/harmonies, still one voice)
- Drum kit (kick + snare + hi-hat = one "drums" element)
- Guitar layers (rhythm + lead = one "guitar" element if same part)

Count as SEPARATE elements:
- Lead vocal + harmony vocal = 2 elements (different melodies)
- Drums + percussion = 2 elements (different roles)
- Rhythm guitar + lead guitar = 2 elements (different parts)

---

**Example: Element Count Audit**

**Your Chorus:**
1. Lead vocal
2. Harmony vocal
3. Kick
4. Snare
5. Hi-hat
6. 808 bass
7. Bass guitar
8. Piano
9. Synth pad
10. Synth lead
11. Strings
12. Shaker

**Total:** 12 elements (TOO MANY)

**How to Reduce:**

**Option A: Combine Drums**
- Kick + Snare + Hi-hat = "Drums" (1 element)
- **New count:** 10 elements (still too many)

**Option B: Remove Redundant Elements**
- Remove bass guitar (808 covers bass)
- Remove synth pad (piano covers harmony)
- **New count:** 8 elements (better, but still high)

**Option C: Aggressive Cutting**
- Keep: Lead vocal, harmony vocal, drums (kick+snare+hi-hat), 808 bass, synth lead
- Remove: Piano, synth pad, strings, shaker, bass guitar
- **New count:** 5 elements (PERFECT)

**Result:** Clearer, punchier, more professional

---

**The "Mute Test":**

1. Mute one element
2. Does the track sound BETTER or WORSE?
3. If BETTER: Keep it muted (it was clutter)
4. If WORSE: Unmute (it's essential)

**Repeat for every element. Be ruthless.**

---

**Principle 5: Mono Compatibility (No Phase Cancellation)**

**Goal:** Track sounds great in both stereo AND mono.

---

**The Mono Compatibility Checklist:**

✓ **Bass/sub-bass is mono** (centered, no stereo widening)
✓ **Kick and snare are mono** (centered)
✓ **No identical signals panned L/R** (causes phase cancellation)
✓ **Mid/side balance** (strong mid content, not just sides)
✓ **Tested in mono** (collapsed and listened)

---

**How to Test Mono Compatibility:**

**Method 1: DAW Utility Plugin**
- Most DAWs have "Mono" or "Utility" plugin
- Place on master bus
- Toggle stereo ↔ mono
- Listen for:
  - Elements disappearing
  - Thin/hollow sound
  - Loss of low-end

**Method 2: Export and Collapse**
- Export stereo mix
- Import into new DAW session
- Use mono track or collapse L+R
- Compare to stereo version

**Method 3: Phone Speaker Test**
- Play on phone (most are mono)
- Does it sound as good as on speakers?
- If not, fix stereo imaging

---

**Common Mono Compatibility Issues:**

**Issue 1: Stereo Bass Disappears in Mono**

**Cause:** Bass was widened with stereo processing
**Fix:** Keep bass mono (centered, no stereo widening)

---

**Issue 2: Vocals Sound Thin in Mono**

**Cause:** Vocal doubles panned L/R with identical phase
**Fix:** Use two different takes (not copies) OR delay one side by 10-20ms

---

**Issue 3: Mix Sounds Hollow in Mono**

**Cause:** Too much side content, not enough mid
**Fix:** Use mid/side EQ to boost mid content (center information)

---

**The Mid/Side Balance Rule:**

**Mid (Center):** Should contain 60-70% of the mix energy
**Side (Stereo Width):** Should contain 30-40% of the mix energy

**If reversed (70% side, 30% mid):**
- Sounds wide in stereo (good)
- Sounds thin in mono (bad)

**How to Check:**
- Use mid/side analyzer plugin
- Verify mid is stronger than side
- Adjust stereo width plugins if needed
        `
      },
      {
        title: "Practical Mix-Ready Arrangement Workflow",
        content: `
**Step-by-Step: Arranging with Mixing in Mind**

---

**Step 1: Start with Element Limit (5 Max)**

**Before producing anything, decide your element palette:**

**Example: Pop-Trap Track**

\`\`\`
Foundation Elements (Always Present):
1. Lead vocal
2. Drums (kick + snare + hi-hat as one element)

Variable Elements (Added per section):
3. Bass (808 or bass guitar)
4. Harmony/melody (piano OR guitar OR synth, pick ONE)
5. Texture/FX (pad OR strings OR atmosphere, pick ONE)
\`\`\`

**That's 5 elements maximum. Lock this in before producing.**

**Why This Works:**
- Forces you to choose the BEST element for each role
- Prevents clutter before it starts
- Every element has purpose

---

**Step 2: Assign Frequency Zones (Before Production)**

**Create a frequency assignment map:**

\`\`\`
Element          | Primary Frequency Zone | EQ Strategy
-----------------|------------------------|-------------
808 Bass         | 40-80Hz (sub)          | High-pass at 30Hz
Kick             | 60-200Hz (bass)        | High-pass at 50Hz, cut at 300Hz
Lead Vocal       | 500Hz-3kHz (mids)      | Boost at 3kHz (presence)
Piano            | 200Hz-6kHz (wide)      | Cut at 500-800Hz (vocal space)
Hi-Hats          | 8kHz+ (highs)          | High-pass at 8kHz, boost at 12kHz
\`\`\`

**Notice:** Each element has a PRIMARY zone. Some overlap is OK, but each should dominate ONE zone.

---

**Step 3: Plan Stereo Field (Before Production)**

**Create a panning map:**

\`\`\`
Element          | Pan Position | Reasoning
-----------------|--------------|----------
Lead Vocal       | Center (0)   | Main focus, must be centered
Kick             | Center (0)   | Low-end power, mono
Snare            | Center (0)   | Backbeat anchor
808 Bass         | Center (0)   | Sub frequencies, mono
Piano            | Left (-40)   | Supporting harmony
Synth Pad        | Right (+40)  | Balance piano
Hi-Hats (main)   | Right (+20)  | Off-center for width
Shaker           | Left (-60)   | Balance hi-hats
Harmony Vocal    | Wide (±70)   | Stereo chorus effect
\`\`\`

**During production, stick to this plan. Don't pan randomly—be intentional.**

---

**Step 4: Set Gain Staging (During Production)**

**As you produce each element, set levels properly:**

**Individual Track Levels:**
- Peak at -18dB to -12dB (RMS around -24dB to -18dB)
- Use gain/trim plugin before any processing
- Never let individual tracks clip (0dB)

**Master Bus Level:**
- After all tracks playing: Peak at -12dB to -6dB
- If peaking higher: Lower individual tracks, NOT master fader

**Why This Matters:**
- Gives you 6-12dB headroom for mixing
- Prevents clipping throughout signal chain
- Leaves room for mastering to add final loudness

---

**Step 5: Produce with Frequency Separation in Mind**

**As you produce each element, think vertically (frequency):**

**Example: Adding Piano**

**Before adding:**
- Check: What frequency zones are already occupied?
- Answer: Vocals (500Hz-3kHz), 808 bass (40-80Hz), kick (60-200Hz)

**Piano frequency zone:**
- Natural range: 80Hz-4kHz (wide)
- **Problem:** Overlaps with vocals (500Hz-3kHz)

**Solution: EQ Piano DURING production:**
- High-pass at 200Hz (remove low-end clash with kick)
- Cut at 500-1kHz (make room for vocals)
- Result: Piano occupies 200Hz-500Hz and 3kHz-6kHz (no vocal clash)

**This is "arrangement by frequency"—you're EQing WHILE arranging, not after.**

---

**Step 6: Build Sections with Dynamic Contrast**

**Use element count to create dynamic range:**

**Intro: 1-2 Elements**
- Piano only (sparse, intimate)
- Peak level: -18dB

**Verse: 2-3 Elements**
- Piano + vocal + light hi-hat
- Peak level: -15dB

**Pre-Chorus: 3-4 Elements**
- Piano + vocal + hi-hat + 808 bass
- Peak level: -12dB

**Chorus: 4-5 Elements**
- Piano + vocal + full drums + 808 bass + synth pad
- Peak level: -9dB

**Bridge: 2 Elements**
- Vocal + synth pad only (stripped back)
- Peak level: -18dB

**Final Chorus: 5-6 Elements**
- Everything + harmony vocals
- Peak level: -6dB

**Notice the peak level progression:**
- Intro: -18dB → Final Chorus: -6dB
- That's 12dB of dynamic range (professional standard)

**This dynamic arc is built into the ARRANGEMENT, not added in mixing.**

---

**Step 7: Test in Mono (Every 30 Minutes)**

**Don't wait until the end to test mono—test constantly:**

**Workflow:**

1. **Produce for 30 minutes** (add elements, arrange sections)
2. **Collapse to mono** (use utility plugin or mono button)
3. **Listen critically:**
   - Do any elements disappear?
   - Does low-end vanish?
   - Does it sound thin?
4. **Fix issues immediately:**
   - Adjust panning
   - Check phase on stereo elements
   - Re-record doubled vocals if needed
5. **Return to stereo and continue producing**

**Why This Workflow Works:**
- Catches mono issues EARLY (easy to fix)
- Prevents building entire track on flawed stereo imaging
- Ensures final mix works on all playback systems

---

**Step 8: Apply the "Mute Test" to Every Element**

**After producing a section, audit every element:**

**Chorus Audit:**

\`\`\`
Element          | Mute Test Result | Keep or Remove?
-----------------|------------------|----------------
Lead Vocal       | WORSE without    | KEEP (essential)
Harmony Vocal    | Better without   | REMOVE (clutter)
Kick             | WORSE without    | KEEP (essential)
Snare            | WORSE without    | KEEP (essential)
Hi-Hat           | WORSE without    | KEEP (essential)
808 Bass         | WORSE without    | KEEP (essential)
Piano            | Same with/without| REMOVE (not adding value)
Synth Pad        | Better without   | REMOVE (muddying the mix)
Shaker           | Slightly worse   | KEEP (adds subtle texture)
\`\`\`

**Result:** Removed harmony vocal, piano, and synth pad. Chorus now has 5 elements (down from 8).

**Track sounds CLEARER and PUNCHIER after removing elements.**

---

**Step 9: Check Frequency Spectrum Visually**

**Use spectrum analyzer to verify frequency separation:**

**Good Spectrum (Chorus):**
\`\`\`
20-60Hz:   Strong peak (808 bass)
60-200Hz:  Strong peak (kick body)
200-500Hz: Moderate energy (piano low notes)
500Hz-2kHz: Strong peak (vocals dominant)
2-6kHz:    Moderate energy (vocal clarity, piano highs)
6-12kHz:   Strong peak (hi-hats)
12-20kHz:  Light energy (air, reverb)
\`\`\`

**Each frequency band has distinct activity. Balanced, separated.**

---

**Bad Spectrum (Muddy Chorus):**
\`\`\`
20-60Hz:   Weak (no sub-bass)
60-500Hz:  MASSIVE PEAK (everything piled up)
500Hz-2kHz: MASSIVE PEAK (everything piled up)
2-12kHz:   Weak (no highs)
12-20kHz:  Nothing (no air)
\`\`\`

**All energy concentrated in low-mids/mids. This will sound muddy no matter how much you mix.**

**Fix:** Remove elements from 60Hz-2kHz, spread them vertically.

---

**Step 10: Reference Against Professional Track**

**Import a professional track in your genre:**

**A/B Comparison:**

1. **Your Track:**
   - Frequency balance (spectrum analyzer)
   - Stereo width (stereo analyzer)
   - Peak level (-12dB to -6dB)
   - Element count (5 max)

2. **Professional Reference:**
   - Frequency balance (note: probably similar to yours if done right)
   - Stereo width (note: vocals centered, sides filled)
   - Peak level (probably -12dB to -6dB)
   - Element count (count audible elements—usually 4-6)

3. **Adjust Your Track to Match:**
   - If your mids are too loud: Remove mid-heavy elements
   - If your stereo width is too narrow: Pan more elements L/R
   - If your levels are too hot: Lower all faders

**Goal:** Your arrangement should have similar frequency balance, stereo width, and element density as the professional reference.

---

**Common Mix-Ready Arrangement Mistakes (And Fixes):**

**❌ Mistake: "My mix sounds muddy no matter what I do"**

**✓ Fix:**
- Too many elements in the mid-range (200Hz-2kHz)
- Remove 2-3 mid-heavy elements (piano, rhythm guitar, pad)
- High-pass non-bass elements at 100-200Hz
- Result: Instant clarity

---

**❌ Mistake: "My track has no low-end punch"**

**✓ Fix:**
- Bass/kick are stereo (should be mono)
- Low frequencies panned L/R (should be center)
- Collapse bass/kick to mono, center-pan them
- Result: Focused, powerful low-end

---

**❌ Mistake: "Everything sounds squashed and lifeless"**

**✓ Fix:**
- No dynamic range in arrangement (everything loud)
- Master bus hitting 0dB (no headroom)
- Lower all faders by 6-12dB
- Create dynamic contrast (sparse verse, full chorus)
- Result: Breathing room, dynamic impact

---

**❌ Mistake: "My mix sounds great in stereo but terrible in mono"**

**✓ Fix:**
- Phase cancellation (identical doubled signals panned L/R)
- Re-record doubles (two different takes, not copies)
- OR: Delay one side by 10-20ms (Haas effect)
- Test in mono after every stereo processing
- Result: Mono-compatible, works on all playback systems

---

**❌ Mistake: "I can't hear the lead vocal clearly"**

**✓ Fix:**
- Too many elements competing in the mid-range (500Hz-3kHz)
- EQ competing elements: Cut at 1-3kHz (make room for vocal)
- OR: Remove elements entirely (piano, rhythm guitar)
- Result: Vocal clarity

---

**❌ Mistake: "My arrangement sounds narrow and small"**

**✓ Fix:**
- Everything panned center (no stereo width)
- Pan supporting elements L/R (guitars, keys, harmonies)
- Keep only lead vocal, kick, snare, bass centered
- Result: Wide, spacious, professional

---

**Final Mix-Ready Arrangement Checklist:**

Before moving to mixing, verify:

✓ **Element count: 4-5 max per section** (never more than 6)
✓ **Frequency zones assigned** (each element has primary zone)
✓ **Stereo field planned** (not everything centered)
✓ **Headroom: -12dB to -6dB peak** (room for mixing/mastering)
✓ **Mono compatible** (tested, no phase cancellation)
✓ **Dynamic range: 10-15dB** (quietest section to loudest section)
✓ **Mute test passed** (every element adds value)
✓ **Spectrum balanced** (no massive peaks in one frequency range)
✓ **Reference-matched** (similar to professional track)

**If all boxes checked:** Your arrangement is mix-ready. Mixing will be fast and effortless.

---

**What's Next:**

In Lesson 20 (Final Capstone), you'll apply ALL arrangement techniques (lessons 1-19) to create a complete, professional, radio-ready track from scratch. Mix-ready arrangement principles will be essential for your capstone project.
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
