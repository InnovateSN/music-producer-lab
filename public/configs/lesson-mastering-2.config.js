/**
 * Music Producer Lab - Lesson Configuration
 * Lesson: Mastering 2 - Metering & Analysis
 */

import { applyMessagePreset, buildHeroEyebrow, buildLessonQualityPreset } from "./config-presets.js";

const lessonQualityPreset = buildLessonQualityPreset({
  lessonCategory: "Mastering",

  progression: {
    difficulty: "beginner",
    prerequisites: ["mastering-1"],
    outcomes: ["Completare gli obiettivi pratici di mastering-2","Consolidare competenze beginner nel modulo mastering"]
  },
  lessonNumber: 2
});

export const lessonConfig = {
  lessonKey: "mpl-mastering-2-progress",
  lessonNumber: 2,
  lessonCategory: "Mastering",

  reviewMetadata: {
    ...lessonQualityPreset.reviewMetadata
  },

  nextLessonUrl: "lesson-mastering-3.html",
  prevLessonUrl: "lesson-mastering-1.html",
  overviewUrl: "labs.html",

  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 2, categoryLabel: "Mastering" }),
    title: "Metering & Analysis:",
    titleHighlight: "LUFS, Peaks, Spectrum & Phase",
    subtitle: "Master the essential metering tools that guide professional mastering decisions—loudness meters, spectrum analyzers, stereo correlation, and dynamic range measurement"
  },

  exercise: {
    title: "Analyze a Mix Using Professional Metering",
    description: "Set up a complete metering suite and analyze your mix before any processing. Learn to read and interpret each meter type to make informed mastering decisions.",
    tip: "Meters are guides, not goals. A 'perfect' reading means nothing if it sounds wrong. Use meters to confirm what your ears tell you, not to replace critical listening. If the meters say it's right but it sounds wrong, trust your ears.",
    steps: [
      '<strong>Set up loudness meter</strong> — Insert a loudness meter (Youlean, iZotope Insight, or your DAW\'s built-in) at the end of your chain. Ensure it displays: Integrated LUFS, Short-term LUFS, Momentary LUFS, and True Peak.',
      '<strong>Measure integrated LUFS</strong> — Play the entire song from start to finish. Note the <strong>Integrated LUFS</strong> reading at the end. This is the average loudness of the whole track. For streaming, you\'ll target around <strong>-14 LUFS</strong>.',
      '<strong>Measure short-term loudness</strong> — Play the loudest section (usually chorus). Watch <strong>Short-term LUFS</strong> (3-second window). Note the peak short-term value. This shows your loudest moments.',
      '<strong>Check true peak</strong> — Note the <strong>True Peak (dBTP)</strong> reading. For streaming masters, this should not exceed <strong>-1 dBTP</strong>. True peak catches inter-sample peaks that regular peak meters miss.',
      '<strong>Set up spectrum analyzer</strong> — Insert a spectrum analyzer (SPAN, iZotope Insight, or similar). Set to a moderate averaging time (around 1-2 seconds) for readable display.',
      '<strong>Analyze frequency balance</strong> — Play through the song and observe the spectrum. Note: Is there excessive low-end buildup below 60 Hz? Is the midrange even or are there peaks/dips? Is the high end present without harshness?',
      '<strong>Compare to reference spectrum</strong> — Play a level-matched reference track through the same analyzer. Compare the spectral shapes. Note differences in low end, midrange, and high frequency content.',
      '<strong>Set up stereo correlation meter</strong> — Insert a stereo correlation/phase meter. This shows the relationship between left and right channels.',
      '<strong>Check stereo correlation</strong> — Play the track and watch the correlation meter. Values should stay mostly positive (above 0). Values near +1 = mono. Values near 0 = uncorrelated stereo. Values below 0 = phase issues.',
      '<strong>Identify phase problems</strong> — If correlation drops below 0 frequently, investigate. Which sections have phase issues? This may indicate problems in the mix or excessive stereo widening.',
      '<strong>Measure dynamic range</strong> — If you have a dynamic range meter (TT DR Meter, iZotope Insight), measure the DR value. DR8-10 is typical for modern pop/rock. DR6 or below indicates heavy compression.',
      '<strong>Document your findings</strong> — Create a brief analysis: Integrated LUFS, True Peak, frequency observations, stereo correlation notes, dynamic range. This guides your mastering decisions.'
    ]
  },

  theory: {
    sections: [
      {
        title: 'Understanding Loudness Metering: LUFS Explained',
        content: `Loudness metering has revolutionized mastering. LUFS (Loudness Units relative to Full Scale) measures perceived loudness—how loud something sounds to human ears—not just peak or average levels.

**Why LUFS Matters:**
Traditional peak meters only show instantaneous signal peaks. RMS meters show average level. Neither tells you how loud something actually sounds. LUFS incorporates psychoacoustic weighting to match human perception.

**Types of LUFS Measurements:**

**Integrated LUFS:**
- Average loudness over the entire program
- This is what streaming platforms measure for normalization
- Streaming target: approximately -14 LUFS (Spotify, YouTube) or -16 LUFS (Apple)
- Measured by playing the full track, start to finish

**Short-Term LUFS:**
- Average over a 3-second window
- Shows loudness of song sections
- Useful for comparing verse vs chorus
- Typically 2-4 LUFS higher than integrated in the loudest parts

**Momentary LUFS:**
- Average over a 400ms window
- Rapid, nearly real-time response
- Shows momentary peaks and dips
- Less useful for mastering decisions, more for broadcast

**Loudness Range (LRA):**
- Difference between quietest and loudest sections
- Indicates dynamic variation
- High LRA = more dynamic (classical, jazz)
- Low LRA = more consistent (pop, EDM)

**Streaming Normalization Targets:**
| Platform | Target LUFS | Normalization |
|----------|-------------|---------------|
| Spotify | -14 LUFS | Turns loud tracks down |
| Apple Music | -16 LUFS | Sound Check feature |
| YouTube | -14 LUFS | Normalizes all content |
| Tidal | -14 LUFS | MQA may differ |
| Amazon | -14 LUFS | Consistent with others |

**The Key Insight:**
If your master is louder than -14 LUFS, streaming platforms turn it down. Over-limiting for loudness is counterproductive—you lose dynamics and gain nothing.`
      },
      {
        title: 'True Peak Limiting: Why It Matters',
        content: `True Peak (dBTP) measures the actual peak level after digital-to-analog conversion, which can be higher than the measured sample peak. This "inter-sample peak" phenomenon is critical for mastering.

**The Inter-Sample Peak Problem:**
When a DAC converts digital samples to analog waveforms, it reconstructs a continuous signal. If two adjacent samples are both near 0 dBFS, the reconstructed analog signal between them can exceed 0 dBFS—causing distortion.

**Sample Peak vs True Peak:**
- **Sample Peak:** Maximum value of individual samples (what standard meters show)
- **True Peak:** Estimated maximum of the reconstructed analog waveform

A track showing -0.3 dBFS sample peak might have a +0.5 dBTP true peak—causing distortion on playback.

**True Peak Targets:**
| Application | Maximum True Peak |
|-------------|-------------------|
| Streaming | -1.0 dBTP |
| Broadcast | -2.0 dBTP |
| CD | -0.3 dBTP |
| Vinyl | -0.3 dBTP |
| Safe general | -1.0 dBTP |

**Why -1 dBTP for Streaming:**
Streaming services transcode your master (to AAC, Ogg, MP3). Lossy encoding can introduce additional inter-sample peaks. The -1 dBTP headroom prevents distortion after encoding.

**How to Control True Peak:**
1. **Use a true peak limiter:** Most modern limiters have a true peak mode (FabFilter Pro-L2, iZotope Maximizer, Waves L2).
2. **Set ceiling to -1 dBTP:** The limiter will oversample and catch inter-sample peaks.
3. **Verify with true peak meter:** Confirm your final master doesn't exceed your target.

**Common Mistake:**
Using a standard peak limiter set to -0.1 dBFS, then wondering why streaming services report clipping. The limiter wasn't catching true peaks.`
      },
      {
        title: 'Spectrum Analysis: Reading Frequency Balance',
        content: `Spectrum analyzers visualize the frequency content of your audio. In mastering, they help identify tonal imbalances that might not be obvious on your monitors.

**Understanding the Display:**
- **X-axis:** Frequency (20 Hz to 20 kHz, logarithmic scale)
- **Y-axis:** Level (dB)
- **Response:** How quickly the display updates

**Key Frequency Regions:**
| Region | Frequency | What to Listen/Look For |
|--------|-----------|-------------------------|
| Sub bass | 20-60 Hz | Rumble, sub weight, headroom use |
| Bass | 60-200 Hz | Kick/bass body, warmth, mud |
| Low mids | 200-500 Hz | Boxiness, fullness |
| Midrange | 500 Hz-2 kHz | Body, honk, clarity |
| Presence | 2-5 kHz | Vocal clarity, harshness |
| Brilliance | 5-10 kHz | Detail, sibilance |
| Air | 10-20 kHz | Sparkle, sheen |

**What a Balanced Spectrum Looks Like:**
A well-mastered track typically shows a gentle downward slope from low to high frequencies (roughly following a "pink noise" curve). Expect:
- Strong energy 60-200 Hz (kick, bass)
- Gradual reduction through midrange
- Presence peak around 3-5 kHz (vocals, leads)
- Air shelf 10 kHz+
- Roll-off above 16-18 kHz (natural)

**Common Spectrum Issues:**
- **Excessive sub (<40 Hz):** Eating headroom, won't translate
- **Mud (200-400 Hz):** Cloudy, undefined low-mids
- **Hollow scoop (1-3 kHz):** Thin, distant sound
- **Harsh peak (2-5 kHz):** Fatiguing, aggressive
- **Dull roll-off (>8 kHz):** Lifeless, dated sound

**Using References:**
Compare your spectrum to a level-matched reference. Don't try to match exactly—different songs have different tonal centers—but look for obvious differences that indicate problems.

**Spectrum Analysis Limitations:**
- Can't show transient quality (timing, punch)
- Averages hide dynamic variation
- Different songs have legitimately different spectra
- Use as a check, not a target`
      },
      {
        title: 'Stereo Correlation and Phase Metering',
        content: `Stereo correlation meters show the phase relationship between left and right channels. Understanding this helps prevent mono compatibility issues and identifies problems inherited from the mix.

**Reading the Correlation Meter:**
- **+1:** Mono (L and R are identical)
- **0:** Completely uncorrelated (L and R have no relationship)
- **-1:** Out of phase (L and R are inverted)

**Healthy Correlation Values:**
- **Most of the time:** Between +0.5 and +1
- **Wide stereo moments:** May dip toward 0
- **Never:** Sustained negative values

**What Different Values Mean:**

**+0.7 to +1 (Good):**
Strong center, mono-compatible. Kick, bass, snare, lead vocal should live here.

**+0.3 to +0.7 (Normal):**
Good stereo width with solid center. Typical for full mixes.

**0 to +0.3 (Wide):**
Very wide stereo. Check mono compatibility. May be intentional (ambient, effects).

**Below 0 (Problem):**
Phase cancellation. Elements may disappear in mono. Investigate and fix.

**Lissajous Display:**
Some meters show a Lissajous (X-Y) display:
- **Vertical line:** Mono
- **Circle/ellipse:** Stereo with good correlation
- **Horizontal line:** Out of phase (problem)
- **Chaotic blob:** Wide and random (possibly fine, check mono)

**Common Causes of Poor Correlation:**
- Excessive stereo widening plugins
- Phase issues in the mix (mis-aligned drums, problematic stereo effects)
- Haas effect/delay-based widening
- Out-of-phase samples or recordings

**The Mono Check:**
Always verify mono compatibility:
1. Sum your master to mono (use a utility plugin)
2. Listen for: elements that disappear, thinning bass, changed balance
3. If significant changes: the mix needs work, or your stereo processing is too aggressive`
      },
      {
        title: 'Dynamic Range Metering',
        content: `Dynamic range meters measure the difference between the loudest and quietest parts of a track. This helps you understand how much compression/limiting has been applied and guides your processing decisions.

**DR (Dynamic Range) Value:**
The most common standard, measured in dB:
- **DR14+:** Highly dynamic (classical, jazz, audiophile)
- **DR10-14:** Good dynamics (well-mastered pop, rock)
- **DR8-10:** Modern pop/rock/electronic (reasonable)
- **DR6-8:** Heavily compressed (loud but fatiguing)
- **DR4-6:** Over-compressed (loudness war casualties)

**PLR (Peak to Loudness Ratio):**
Another measurement: the difference between peak level and integrated LUFS.
- Higher PLR = more transient punch
- Lower PLR = more squashed/limited

**What Dynamic Range Tells You:**

**Before Mastering:**
Check the mix's DR. If it's already DR6, the mix is heavily compressed—limiting further will cause problems. Request a less compressed mix.

**After Mastering:**
Compare before/after DR. Losing more than 2-3 DR during mastering suggests over-limiting.

**Genre Context Matters:**
| Genre | Typical DR | Notes |
|-------|------------|-------|
| Classical | DR14+ | Huge dynamic range |
| Jazz | DR12-16 | Natural dynamics |
| Folk/Acoustic | DR10-14 | Musical dynamics |
| Rock | DR8-12 | Moderate compression |
| Pop | DR7-10 | Controlled dynamics |
| EDM/Electronic | DR6-9 | Intentionally dense |
| Hip-Hop | DR6-9 | Punchy but compressed |

**The Loudness vs Dynamics Trade-off:**
More limiting = louder integrated LUFS = less dynamic range.
But streaming normalizes loudness, so you lose dynamics for no gain.

**Modern Approach:**
Preserve dynamics (DR8+), let streaming normalization handle loudness matching. Your track will sound more impactful than over-limited competitors that get turned down.`
      },
      {
        title: 'Practical Metering Workflow',
        content: `Knowing how to use meters is different from knowing when to use them. Here's a practical workflow for integrating metering into your mastering process.

**Phase 1: Pre-Processing Analysis**
Before touching any plugins:
1. Play the entire track, measure integrated LUFS
2. Note the true peak maximum
3. Check spectrum for obvious issues
4. Verify stereo correlation
5. Measure dynamic range
6. Compare to reference tracks

**Phase 2: During Processing**
While making adjustments:
- Watch true peak after EQ boosts (may clip)
- Monitor loudness changes after compression
- Check correlation after stereo processing
- Verify spectrum changes match your intent

**Phase 3: Final Verification**
Before export:
1. Measure final integrated LUFS (hit your target?)
2. Confirm true peak is at target (-1 dBTP)
3. Verify spectrum didn't drift too far from intent
4. Confirm correlation is healthy
5. Compare DR before vs after

**Metering Plugin Recommendations:**
| Plugin | Strengths | Use Case |
|--------|-----------|----------|
| Youlean Loudness Meter | Free, accurate LUFS | Primary loudness meter |
| iZotope Insight 2 | Comprehensive suite | Professional metering |
| Voxengo SPAN | Free, excellent spectrum | Frequency analysis |
| mvMeter2 | Free, correlation | Stereo/phase checking |
| TT DR Meter | Free, dynamic range | DR measurement |

**Common Metering Mistakes:**
- **Obsessing over numbers:** Meters guide, they don't decide
- **Ignoring context:** -14 LUFS means different things for different genres
- **Not level-matching:** References must be loudness-matched
- **Forgetting true peak:** Sample peak isn't enough
- **Comparing to bad references:** Over-limited masters are poor targets

**The Final Word:**
Use your ears first, meters second. If your meters say it's right but it sounds wrong, trust your ears. If your ears say it's right but meters show a problem, investigate—you might be missing something.`
      }
    ]
  },

  learningObjectives: [
    "Understand LUFS metering: integrated, short-term, and momentary measurements for streaming-optimized masters",
    "Apply true peak limiting to prevent inter-sample distortion, targeting -1 dBTP for streaming platforms",
    "Use spectrum analyzers to identify frequency balance issues and compare against reference tracks",
    "Interpret stereo correlation and phase meters to ensure mono compatibility and identify mix problems",
    "Measure dynamic range to make informed limiting decisions and preserve musical dynamics"
  ],

  messages: applyMessagePreset("default", {
    initial: "Complete this mastering lesson to master professional metering.",
    success: "Excellent! You can now analyze audio like a professional mastering engineer.",
    error: "Review the metering concepts and try again.",
    alreadyCompleted: "You've mastered Metering & Analysis. Ready for Lesson 3!"
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
