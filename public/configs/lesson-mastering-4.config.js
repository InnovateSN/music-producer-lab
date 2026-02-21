/**
 * Music Producer Lab - Lesson Configuration
 * Lesson: Mastering 4 - Mastering Compression & Dynamics
 */

import { applyMessagePreset, buildHeroEyebrow, buildLessonQualityPreset } from "./config-presets.js";

const lessonQualityPreset = buildLessonQualityPreset({
  lessonCategory: "Mastering",

  progression: {
    difficulty: "beginner",
    prerequisites: ["mastering-3"],
    outcomes: ["Completare gli obiettivi pratici di mastering-4","Consolidare competenze beginner nel modulo mastering"]
  },
  lessonNumber: 4
});

export const lessonConfig = {
  lessonKey: "mpl-mastering-4-progress",
  lessonNumber: 4,
  lessonCategory: "Mastering",

  reviewMetadata: {
    ...lessonQualityPreset.reviewMetadata
  },

  nextLessonUrl: "lesson-mastering-5.html",
  prevLessonUrl: "lesson-mastering-3.html",
  overviewUrl: "labs.html",

  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 4, categoryLabel: "Mastering" }),
    title: "Mastering Compression & Dynamics:",
    titleHighlight: "Control Without Crushing",
    subtitle: "Learn to apply gentle glue compression and multiband dynamics that enhance cohesion and punch while preserving the mix's natural dynamics"
  },

  exercise: {
    title: "Apply Mastering Compression for Glue and Punch",
    description: "Set up mastering compression that adds cohesion and subtle punch without over-compressing. Learn the difference between mix compression and mastering compression through hands-on application.",
    tip: "In mastering, compression should be felt, not heard. If you can obviously hear the compressor working (pumping, breathing, squashing), you're doing too much. The goal is subtle 'glue' that makes the mix feel more cohesive—not dynamic reshaping.",
    steps: [
      '<strong>Insert mastering compressor</strong> — Add a high-quality compressor after your EQ in the mastering chain (FabFilter Pro-C, iZotope Dynamics, Waves SSL, or similar). Choose a model known for transparency.',
      '<strong>Set conservative starting point</strong> — Start with: <strong>Ratio 1.5:1 to 2:1</strong>, <strong>Attack 30-50 ms</strong>, <strong>Release auto or 100-200 ms</strong>, <strong>Threshold high (minimal compression)</strong>.',
      '<strong>Lower threshold gradually</strong> — Play the loudest section (chorus). Slowly lower threshold until you see <strong>1-2 dB of gain reduction</strong> on peaks. Watch the meter—compression should be gentle and intermittent.',
      '<strong>Adjust attack time</strong> — If transients feel dulled, <strong>increase attack (slower, 50-100 ms)</strong> to let transients through. If the mix feels loose and unfocused, <strong>decrease attack (faster, 10-30 ms)</strong> to catch more transients.',
      '<strong>Adjust release time</strong> — Listen for pumping (release too fast) or sluggishness (release too slow). <strong>Auto release</strong> often works well. Manual release of <strong>100-300 ms</strong> is typical for mastering.',
      '<strong>Apply makeup gain</strong> — Match the output level to the input (bypassed) level. Compression reduces peaks, so you need makeup gain. Level-match before A/B comparison.',
      '<strong>A/B test compression</strong> — Bypass the compressor and compare. The compressed version should feel slightly more "together" and cohesive—not obviously squashed or pumping.',
      '<strong>Try parallel compression (optional)</strong> — Set compressor mix/blend to <strong>30-50%</strong> (if available). This blends compressed and dry signal for transparent glue.',
      '<strong>Consider multiband (optional)</strong> — If only one frequency range needs control (e.g., boomy low-mids), insert a multiband compressor. Compress only the problem band—leave others untouched.',
      '<strong>Set multiband conservatively</strong> — If using multiband, target <strong>1-3 dB gain reduction</strong> on the problem band only. Don\'t compress all bands—this defeats the purpose.',
      '<strong>Check dynamic range</strong> — Compare DR (dynamic range) before and after compression. Losing more than 1-2 DR from compression suggests over-processing.',
      '<strong>Final A/B and reference check</strong> — Compare compressed master to uncompressed, and to your reference. Does compression add cohesion without sacrificing dynamics? If yes, you\'re done.'
    ]
  },

  theory: {
    sections: [
      {
        title: 'Mastering Compression vs Mixing Compression',
        content: `Compression in mastering serves a fundamentally different purpose than compression in mixing. Understanding this difference prevents over-processing.

**Mixing Compression:**
- Controls individual element dynamics (vocal, drums, bass)
- Can be aggressive (6-10+ dB gain reduction)
- Shapes attack and sustain of individual sounds
- Part of creative sound design

**Mastering Compression:**
- Glues the entire mix together
- Very gentle (1-3 dB gain reduction typical)
- Preserves the mix's existing dynamics
- Enhancement, not reshaping

**The "Glue" Effect:**
When you compress a full mix gently, the elements move together dynamically. Loud moments bring everything down slightly; quiet moments let everything breathe. This creates cohesion—the sense that all elements belong together.

**Why Mastering Compression is Optional:**
Not every mix needs mastering compression. Well-mixed tracks with good bus compression may need nothing. Heavily compressed mixes definitely need nothing more. The test: does adding compression make it sound better? If not, don't use it.

**The Danger of Over-Compression:**
- Kills transients (kick, snare lose punch)
- Creates pumping artifacts
- Reduces dynamic range
- Causes listener fatigue
- Can't be undone in mastering

**A Good Rule:**
If you can hear the compressor obviously working, it's probably doing too much. Mastering compression should be subtle enough that you might wonder if it's even on.`
      },
      {
        title: 'Setting Attack and Release for Mastering',
        content: `Attack and release times in mastering require a different approach than mixing. The goal is transparency—affecting the overall envelope without obviously reshaping transients.

**Attack Time in Mastering:**

**Slow Attack (30-100+ ms):**
- Lets transients through untouched
- Preserves kick and snare punch
- Compresses only the sustained body of sounds
- Standard choice for most mastering

**Fast Attack (5-20 ms):**
- Catches transients, reducing peak levels
- Can dull the mix if overdone
- Occasionally useful for overly peaky mixes
- Use sparingly—you're fighting the mix balance

**Recommended Starting Point:** 30-50 ms

**Release Time in Mastering:**

**Fast Release (<100 ms):**
- Compressor recovers quickly
- Can cause audible pumping on bass-heavy material
- Creates more obvious compression effect
- Generally avoid for transparent mastering

**Medium Release (100-300 ms):**
- Natural recovery between notes
- Works for most tempos and genres
- Less audible compression artifacts

**Slow Release (300+ ms):**
- Very smooth, gentle compression
- May not recover between beats
- Can cause "sluggish" feel

**Auto Release:**
- Adjusts release based on program material
- Often the best choice for mastering
- Adapts to both fast and slow sections

**Recommended Starting Point:** Auto release, or 150-200 ms manual

**The "Musical Timing" Concept:**
At 120 BPM, a beat is 500 ms. Setting release so the compressor recovers between beats (around 400-500 ms or faster) prevents sluggishness. Slower tempos allow slower release; faster tempos need faster release.`
      },
      {
        title: 'Ratio and Threshold: The Gentle Approach',
        content: `In mastering, ratio and threshold work together to create gentle, transparent compression. The key is restraint.

**Ratio in Mastering:**

| Ratio | Character | Use Case |
|-------|-----------|----------|
| 1.5:1 | Very gentle, almost invisible | Most mastering situations |
| 2:1 | Gentle, standard mastering | Default starting point |
| 3:1 | Moderate, noticeable | More aggressive glue |
| 4:1+ | Significant compression | Rarely appropriate for mastering |

**Recommended:** Start at 1.5:1 or 2:1. Only increase if you need more control.

**Threshold Setting:**

**The Gain Reduction Target:**
- **1-2 dB GR:** Very subtle, transparent glue
- **2-3 dB GR:** Noticeable cohesion, still natural
- **3-4 dB GR:** Aggressive for mastering
- **4+ dB GR:** Too much for most mastering

**How to Set Threshold:**
1. Start with threshold high (no compression)
2. Play the loudest section
3. Lower threshold until you see 1-2 dB GR on peaks
4. Verify compression is intermittent, not constant
5. If GR is constant, threshold is too low

**Knee Setting:**
- **Hard knee:** Compression engages abruptly at threshold
- **Soft knee:** Compression engages gradually around threshold
- **For mastering:** Soft knee almost always (smoother, more transparent)

**The "Barely Touching" Test:**
Your compressor should be barely touching the signal—reducing peaks by 1-2 dB, then recovering. If it's constantly compressing, you're over-threshold. Pull back.`
      },
      {
        title: 'Parallel and Mix Compression',
        content: `Parallel compression (also called New York compression) blends compressed and uncompressed signal. This technique is powerful in mastering because it adds density and glue while preserving dynamics.

**How Parallel Compression Works:**
- Dry signal retains original transients and dynamics
- Compressed signal adds density and sustain
- Blending them together gives you the best of both

**Setting Up Parallel Compression:**

**Method 1: Mix/Blend Knob**
If your compressor has a mix/blend control:
1. Set compression more aggressively than normal (3-6 dB GR)
2. Set mix to 30-50%
3. Result: Aggressive compression blended with dry signal

**Method 2: Parallel Bus**
If your compressor lacks a mix knob:
1. Duplicate signal to a parallel bus
2. Compress the parallel bus aggressively
3. Blend parallel bus under the main signal
4. More complex but offers more control

**Parallel Compression Settings:**
Because you're blending, you can compress more aggressively:
- Ratio: 4:1 to 8:1
- Attack: 20-50 ms
- Release: 100-200 ms or auto
- Gain reduction: 4-8 dB
- Mix: 20-50%

**When Parallel Compression Helps:**
- Mix feels thin or lacking density
- You want more punch without obvious compression
- Standard compression sounds too obvious
- You need to add weight to quiet elements

**The Key Advantage:**
Parallel compression lets you add intensity and density while retaining the original transients and dynamics. It's more forgiving than standard compression.`
      },
      {
        title: 'Multiband Compression: Surgical Dynamic Control',
        content: `Multiband compression lets you compress different frequency ranges independently. It's powerful but dangerous—easy to over-process and create unnatural sound.

**When Multiband is Appropriate:**
- One frequency range has dynamic problems others don't
- Low end is boomy/uncontrolled but mids and highs are fine
- High end is harsh on loud passages but OK otherwise
- You need to tame one element without affecting others

**When Multiband is NOT Appropriate:**
- As a "default" mastering tool—it rarely is
- To "improve" a well-balanced mix
- When the whole mix needs compression (use wideband)
- When the problem is in the mix (request revision)

**Common Multiband Applications:**

**Low-End Control (Most Common):**
- Band: 0-150 Hz
- Issue: Boomy, uncontrolled bass
- Settings: Ratio 2:1-3:1, slow attack, medium release
- Target: 2-3 dB GR on boomy moments only

**Low-Mid Mud:**
- Band: 150-400 Hz
- Issue: Muddy buildup on loud passages
- Settings: Ratio 2:1, medium attack/release
- Target: 1-2 dB GR

**Harsh High-Mids:**
- Band: 2-6 kHz
- Issue: Harsh presence on loud vocals/guitars
- Settings: Ratio 2:1-3:1, fast attack, medium release
- Target: 1-3 dB GR on harsh moments

**Multiband Dangers:**
- Processing all bands equally (defeats the purpose)
- Too many bands (3-4 maximum, often 2 is enough)
- Too much gain reduction (1-3 dB per band max)
- Creating unnatural "robotic" sound

**The Rule:**
If you're using multiband compression, you should be compressing only 1-2 bands, and only by 1-3 dB. If you're compressing everything, use a wideband compressor instead.`
      },
      {
        title: 'Compression Workflow and Decision Making',
        content: `A structured approach to mastering compression prevents over-processing and ensures your decisions serve the music.

**Step 1: Decide if Compression is Needed**
Listen to the mix without compression:
- Does it already feel cohesive? (May not need compression)
- Is it already heavily compressed? (Definitely don't add more)
- Does it feel loose or disconnected? (May benefit from glue)

**Step 2: Start Ultra-Conservative**
Initial settings:
- Ratio: 1.5:1
- Attack: 30-50 ms
- Release: Auto
- Threshold: High (no compression yet)

**Step 3: Find the Threshold**
1. Play the loudest section
2. Lower threshold until you see 1-2 dB GR on peaks
3. GR should be intermittent, not constant

**Step 4: Refine Attack/Release**
- If transients are dulled: slower attack
- If mix feels loose: faster attack
- If pumping: slower release
- If sluggish: faster release

**Step 5: Level-Match and A/B**
1. Set makeup gain to match bypassed level
2. A/B rapidly
3. Compressed version should feel slightly more cohesive
4. If it just sounds different (not better), reconsider

**Step 6: Check Dynamic Range**
Compare DR before and after:
- Lost 1 DR: Normal
- Lost 2 DR: On the edge
- Lost 3+ DR: Probably too much

**Decision Framework:**
| Observation | Action |
|-------------|--------|
| Mix already sounds cohesive | Skip compression |
| Mix is already squashed | Skip compression |
| Mix feels loose/disconnected | Apply light glue compression |
| Only one frequency range is problematic | Consider multiband |
| Compression sounds obvious | Use parallel, or use less |

**The Ultimate Test:**
Play for someone who doesn't know you added compression. If they notice compression artifacts, you did too much. If they say it sounds "polished" or "professional," you got it right.`
      }
    ]
  },

  learningObjectives: [
    "Understand the difference between mixing and mastering compression: glue vs dynamic shaping",
    "Set appropriate mastering compression parameters: ratio 1.5-2:1, attack 30-50 ms, release auto, 1-3 dB GR",
    "Apply parallel compression using mix/blend controls (30-50%) for transparent density and punch",
    "Use multiband compression surgically to address frequency-specific dynamic issues without over-processing",
    "Follow a structured compression workflow: evaluate need, start conservative, level-match A/B, check DR"
  ],

  messages: applyMessagePreset("default", {
    initial: "Complete this mastering lesson to master compression techniques.",
    success: "Excellent! You can now apply mastering compression with subtlety and purpose.",
    error: "Review the compression concepts and try again.",
    alreadyCompleted: "You've mastered Mastering Compression. Ready for Lesson 5!"
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
