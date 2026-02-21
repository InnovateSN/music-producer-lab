/**
 * Music Producer Lab - Lesson Configuration
 * Lesson: Mastering 1 - Mastering Fundamentals
 */

import { applyMessagePreset, buildHeroEyebrow } from "./config-presets.js";

export const lessonConfig = {
  lessonKey: "mpl-mastering-1-progress",
  lessonNumber: 1,
  lessonCategory: "Mastering",

  progression: {
    difficulty: "beginner",
    prerequisites: ["mastering-0"],
    outcomes: ["Completare gli obiettivi pratici di mastering-1","Consolidare competenze beginner nel modulo mastering"]
  },

  nextLessonUrl: "lesson-mastering-2.html",
  prevLessonUrl: "lesson-mixing-15.html",
  overviewUrl: "labs.html",

  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 1, categoryLabel: "Mastering" }),
    title: "Mastering Fundamentals:",
    titleHighlight: "Understanding the Final Step",
    subtitle: "Learn what mastering actually is, how it differs from mixing, when you need it, and the complete signal chain that transforms a mix into a release-ready master"
  },

  exercise: {
    title: "Set Up Your First Mastering Session",
    description: "Create a properly configured mastering session from scratch, importing a mix with correct headroom, setting up your signal chain, and establishing a reference-based workflow.",
    tip: "Mastering is about enhancement, not rescue. If you find yourself making drastic moves (+/- 3dB or more), the mix likely needs revision. The best masters come from great mixes that need only subtle polish.",
    steps: [
      '<strong>Create mastering session</strong> — Create a new session at the same sample rate as your mix (44.1 or 48 kHz). Name it clearly: "SongTitle_Mastering_v1".',
      '<strong>Import your mix</strong> — Import your stereo mix file. Verify it has proper headroom: peaks should be between <strong>-6 dBFS and -3 dBFS</strong>. If peaks exceed -1 dBFS, the mix needs revision.',
      '<strong>Check for clipping</strong> — Zoom in on the waveform and look for flat-topped peaks (digital clipping). If present, request a new mix print. Clipped mixes cannot be properly mastered.',
      '<strong>Analyze the mix first</strong> — Before processing, listen through the entire track 2-3 times. Note: overall tonal balance, dynamic range, stereo image, any problem areas. Write down your observations.',
      '<strong>Import reference tracks</strong> — Import 2-3 professional masters in the same genre. Place them on a separate track or bus that bypasses your mastering chain. Level-match to your mix (more in Lesson 2).',
      '<strong>Set up mastering chain order</strong> — Insert plugins in this order: (1) Metering/analysis, (2) EQ, (3) Compression (optional), (4) Stereo processing (optional), (5) Limiter, (6) Final metering. Leave all bypassed initially.',
      '<strong>Establish monitoring level</strong> — Set your monitoring at a consistent, moderate level (around 79-83 dB SPL if you have measurement tools). Mark this position—you\'ll return here for every session.',
      '<strong>A/B with bypass</strong> — Toggle the entire mastering chain bypass frequently. At this stage, the bypassed mix should sound identical (no processing yet). This confirms your signal flow is clean.',
      '<strong>Listen on multiple systems</strong> — Play the unprocessed mix on different playback systems (headphones, phone, car if possible). Note how it translates. This informs your mastering decisions.',
      '<strong>Document your plan</strong> — Based on your analysis, write a brief mastering plan: "Needs slight low-end tightening, 2-3 dB of air at 10kHz, limiting to -14 LUFS." This prevents over-processing.'
    ]
  },

  theory: {
    sections: [
      {
        title: 'What Mastering Actually Is (And Isn\'t)',
        content: `Mastering is the final step of audio post-production—the bridge between mixing and distribution. It's often misunderstood as "making things louder," but that's only a small part of the process.

**What Mastering IS:**
- **Final polish:** Subtle tonal and dynamic adjustments to enhance what's already there
- **Quality control:** Catching issues before release (clipping, phase problems, noise)
- **Translation optimization:** Ensuring the mix sounds good on all playback systems
- **Format preparation:** Creating deliverables for different platforms (streaming, CD, vinyl)
- **Consistency:** Making multiple tracks work together as an album or EP

**What Mastering ISN'T:**
- **Mixing fixes:** Mastering cannot fix a bad mix. If the vocal is buried, you need a remix.
- **Loudness magic:** Modern streaming normalizes loudness—crushed dynamics don't help.
- **Radical transformation:** If mastering changes the song dramatically, something's wrong.
- **A replacement for good mixing:** The better the mix, the easier the master.

**The Mindset Shift:**
Mixing is constructive—building a balance from many elements. Mastering is reductive—making small refinements to a finished whole. Mastering engineers work with what they're given; they enhance, not reinvent.

**When Mastering Matters:**
- Commercial release (streaming, physical media)
- Album/EP consistency across tracks
- Broadcast or sync licensing requirements
- Vinyl or other format-specific needs

**When It Might Not:**
- Demos or rough work-in-progress
- Tracks only for personal use
- When the mix isn't finalized yet`
      },
      {
        title: 'Mixing vs Mastering: Understanding the Difference',
        content: `Mixing and mastering are distinct phases with different goals, tools, and mindsets. Understanding the boundary helps you know when to stop mixing and when to start mastering.

**Mixing:**
- Works with individual tracks (stems, multitrack)
- Balances elements against each other
- Creates the sonic vision of the production
- Uses surgical EQ, heavy compression, creative effects
- The engineer has full control over every element
- Changes can be dramatic (muting tracks, radical EQ)

**Mastering:**
- Works with a stereo mix (or stems)
- Polishes the overall sound
- Optimizes for distribution and playback translation
- Uses gentle, broad processing
- The engineer enhances what's there
- Changes are subtle (typically ±3 dB maximum)

**The Handoff:**
| Aspect | Mix Ready for Mastering | Mix NOT Ready |
|--------|------------------------|---------------|
| Headroom | -6 to -3 dBFS peak | Clipping or 0 dBFS |
| Balance | No element obviously wrong | Buried vocal, harsh guitars |
| Dynamics | Natural, musical | Already brick-walled |
| Master bus | Clean or light processing | Heavy limiting |
| Format | 24-bit WAV or higher | MP3 or 16-bit |

**What to Provide the Mastering Engineer:**
- Stereo mix (24-bit WAV minimum, 32-bit float preferred)
- -6 to -3 dBFS peak headroom
- No limiting on the master bus
- Reference tracks and notes about your goals
- Multiple versions if unsure (with/without master bus processing)

**Self-Mastering Considerations:**
If mastering your own music, take a break between mixing and mastering (at least 24 hours). Fresh ears help you hear the mix objectively rather than defending your mixing decisions.`
      },
      {
        title: 'The Mastering Signal Chain: Order Matters',
        content: `The order of processing in mastering follows a logical flow. Each stage prepares the signal for the next. While not every project needs every stage, understanding the chain helps you make informed decisions.

**Standard Mastering Signal Chain:**

**1. Metering & Analysis (First)**
Purpose: Understand what you're working with before processing.
- Loudness meter (LUFS)
- Spectrum analyzer
- Stereo correlation meter
- Dynamic range meter

**2. Corrective/Tonal EQ**
Purpose: Fix problems and establish tonal balance.
- Linear phase EQ for transparent adjustments
- High-pass filter if needed (20-30 Hz)
- Surgical cuts for problem frequencies
- Broad tonal shaping

**3. Compression (Optional)**
Purpose: Glue and gentle dynamic control.
- Light ratio (1.5:1 to 3:1)
- Slow attack (30-100+ ms)
- Auto or slow release
- 1-3 dB gain reduction maximum

**4. Mid-Side Processing (Optional)**
Purpose: Stereo width and mono compatibility.
- Mid-side EQ adjustments
- Stereo enhancement (subtle)
- Mono bass below 100-150 Hz

**5. Saturation/Color (Optional)**
Purpose: Add warmth and harmonic richness.
- Tape saturation
- Tube coloration
- Very subtle—level-match carefully

**6. Limiting (Last Before Dithering)**
Purpose: Final loudness and peak control.
- True peak limiting (-1 dBTP for streaming)
- Achieve target loudness (LUFS)
- Preserve transients

**7. Dithering (If Bit-Depth Reducing)**
Purpose: Noise-shape quantization artifacts.
- Only when going from 24-bit to 16-bit
- Applied last in chain
- Use appropriate dither type (POW-r, MBIT+, etc.)

**Why This Order:**
- Analyze before processing to understand the source
- EQ before compression prevents boosted frequencies from triggering excess compression
- Compression before limiting provides controlled signal to the limiter
- Limiting last maximizes loudness without affecting earlier processing
- Dithering absolutely last (only for bit-depth reduction)`
      },
      {
        title: 'Gain Staging and Headroom in Mastering',
        content: `Proper gain staging is critical in mastering. Unlike mixing where you have many tracks, mastering works with a stereo file—there's no "remix" option if something clips.

**Input Headroom Requirements:**
- **Ideal:** -6 to -3 dBFS peak on the incoming mix
- **Acceptable:** -3 to -1 dBFS (less room to work)
- **Problem:** 0 dBFS or clipping (request new mix)

**Why Headroom Matters:**
- Plugins need room to process without clipping internally
- EQ boosts can cause peaks to exceed 0 dBFS
- Analog-modeled plugins often sound best with moderate input levels
- Inter-sample peaks can exceed measured peaks

**Gain Staging Through the Chain:**
1. **After EQ:** Check levels—boosts may have raised peaks. Compensate with output gain if needed.
2. **After compression:** Makeup gain should return to similar levels, not louder.
3. **Before limiter:** Signal should still have headroom. Let the limiter do the final loudness work.
4. **After limiter:** True peak should be at your target (typically -1 dBTP).

**The -18 dBFS Calibration (Optional):**
Some engineers calibrate their systems so -18 dBFS RMS = 0 VU. This places analog-modeled plugins in their optimal operating range. For digital-only chains, this is less critical but still good practice.

**Output Targets:**
| Platform | Integrated LUFS | True Peak |
|----------|-----------------|-----------|
| Spotify | -14 LUFS | -1 dBTP |
| Apple Music | -16 LUFS | -1 dBTP |
| YouTube | -14 LUFS | -1 dBTP |
| CD | -9 to -6 LUFS | -0.3 dBTP |
| Club/DJ | -6 to -4 LUFS | -0.3 dBTP |

**True Peak vs Sample Peak:**
Digital-to-analog conversion can create peaks between samples that exceed measured sample peaks. True peak limiters catch these "inter-sample peaks." Always use true peak limiting for streaming masters.`
      },
      {
        title: 'The Reference-Based Mastering Workflow',
        content: `Professional mastering always involves reference tracks. Without references, you're guessing. With them, you have an objective target.

**Choosing Mastering References:**
Same criteria as mixing references (Lesson 14), but specific to mastering:
- Same genre and era
- Excellent commercial masters (not just good mixes)
- Similar instrumentation and density
- Known to translate well across systems

**Level Matching References:**
Critical for fair comparison:
1. Import reference to your session
2. Route to a separate bus that bypasses your mastering chain
3. Use integrated LUFS to match loudness (not peak, not RMS)
4. Match to within ±0.5 LUFS

**What to Compare:**
- **Low end:** Same weight and tightness?
- **Midrange:** Same clarity and presence?
- **High end:** Same air and brightness?
- **Dynamics:** Same transient impact and breathing?
- **Width:** Same stereo spread?
- **Loudness:** (Already matched, but note the original difference)

**The A/B Workflow:**
1. Process your master
2. Match loudness to reference
3. Rapid A/B switch (under 1 second)
4. Note differences
5. Adjust processing
6. Re-match loudness (processing changes level)
7. Repeat until satisfied

**Common Reference Mistakes:**
- Not level-matching (louder sounds better)
- Using references from different genres
- Comparing to over-compressed masters
- Forgetting to bypass your chain on the reference
- Listening to reference too long (ears adapt)

**When Your Master Should Differ:**
References guide you, but your master serves your song. If your track has more sub bass than references, that might be intentional. Use references to catch problems, not to clone someone else's sound.`
      },
      {
        title: 'Common Mastering Mistakes and How to Avoid Them',
        content: `Mastering mistakes are often the result of doing too much. The best mastering is often invisible—the listener doesn't notice it, they just enjoy the music.

**Mistake 1: Over-Limiting**
Symptom: Crushed transients, distortion, fatigue after 30 seconds.
Cause: Pushing limiter too hard to achieve "competitive" loudness.
Fix: Target -14 LUFS for streaming. Louder masters get turned DOWN by platforms anyway. Preserve dynamics.

**Mistake 2: Processing Before Listening**
Symptom: Making moves that don't serve the music.
Cause: Assuming every mix needs "mastering processing."
Fix: Listen 2-3 times before touching anything. Some mixes need very little.

**Mistake 3: Trying to Fix the Mix**
Symptom: Radical EQ moves (±6 dB), surgical multiband compression.
Cause: Mix problems that should have been fixed in mixing.
Fix: Send the mix back for revision. Mastering can't replace re-mixing.

**Mistake 4: Ignoring Mono Compatibility**
Symptom: Mix falls apart on mono playback, phase issues.
Cause: Excessive stereo widening or out-of-phase elements in mix.
Fix: Check mono regularly. Be conservative with stereo enhancement.

**Mistake 5: Not Level-Matching A/B Comparisons**
Symptom: Master sounds "better" but it's just louder.
Cause: Comparing loud master to quiet original.
Fix: Always match loudness before comparing. Use LUFS.

**Mistake 6: Mastering in a Bad Room**
Symptom: Masters don't translate—too much bass, harsh highs.
Cause: Room acoustics deceiving your ears.
Fix: Treat your room, use reference tracks, check on multiple systems.

**Mistake 7: Mastering Immediately After Mixing**
Symptom: Defending mix decisions instead of hearing objectively.
Cause: Ear fatigue and psychological attachment.
Fix: Wait at least 24 hours. Fresh ears hear differently.

**The "Less Is More" Rule:**
If you've touched more than 3-4 plugins, you might be over-processing. A great master often uses: EQ (subtle), compression (optional, light), limiter. That's it.`
      }
    ]
  },

  learningObjectives: [
    "Understand the difference between mixing and mastering: goals, tools, and mindset",
    "Set up a mastering session with proper headroom, signal chain order, and reference tracks",
    "Apply the standard mastering signal chain: metering → EQ → compression → stereo → limiting → dithering",
    "Use reference-based workflow with level-matched A/B comparison for objective decisions",
    "Avoid common mastering mistakes: over-limiting, processing before listening, trying to fix the mix"
  ],

  messages: applyMessagePreset("default", {
    initial: "Complete this mastering lesson to understand the fundamentals.",
    success: "Excellent! You now understand mastering fundamentals and can set up a proper mastering session.",
    error: "Review the mastering concepts and try again.",
    alreadyCompleted: "You've completed Mastering Fundamentals. Ready for Lesson 2!"
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
