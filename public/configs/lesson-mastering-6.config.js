/**
 * Music Producer Lab - Lesson Configuration
 * Lesson: Mastering 6 - Limiting & Loudness Maximization
 */

import { applyMessagePreset, buildHeroEyebrow } from "./config-presets.js";

export const lessonConfig = {
  lessonKey: "mpl-mastering-6-progress",
  lessonNumber: 6,
  lessonCategory: "Mastering",

  progression: {
    difficulty: "beginner",
    prerequisites: ["mastering-5"],
    outcomes: ["Completare gli obiettivi pratici di mastering-6","Consolidare competenze beginner nel modulo mastering"]
  },

  nextLessonUrl: "lesson-mastering-7.html",
  prevLessonUrl: "lesson-mastering-5.html",
  overviewUrl: "labs.html",

  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 6, categoryLabel: "Mastering" }),
    title: "Limiting & Loudness Maximization:",
    titleHighlight: "Achieve Competitive Loudness",
    subtitle: "Master the art of limiting—achieving competitive loudness while preserving transients, dynamics, and musicality without distortion or pumping"
  },

  exercise: {
    title: "Set Up Professional Limiting for Streaming",
    description: "Apply a limiter to achieve streaming-optimized loudness (-14 LUFS integrated) while maintaining transient punch and dynamic range. Learn to recognize when you've gone too far.",
    tip: "The loudness war is over—streaming normalization won. A master at -14 LUFS with great dynamics will sound better than one crushed to -6 LUFS that gets turned down by 8 dB. Focus on quality, not loudness. Let the limiter control peaks; don't use it to destroy dynamics.",
    steps: [
      '<strong>Insert limiter last in chain</strong> — Add a true peak limiter at the end of your mastering chain (after EQ, compression, stereo). Use a quality limiter: FabFilter Pro-L2, iZotope Maximizer, Waves L2, or similar.',
      '<strong>Set true peak ceiling</strong> — Set the output ceiling to <strong>-1.0 dBTP</strong> (true peak). This is the standard for streaming. Some limiters show this as "ceiling" or "out ceiling."',
      '<strong>Check your input level</strong> — Play the loudest section. Note the peak level hitting the limiter. If it\'s already at -3 to -6 dBFS, you have typical headroom. If it\'s at 0 dBFS, EQ/compression may have raised levels too high.',
      '<strong>Set threshold conservatively</strong> — Start with threshold at 0 dB (no limiting). Play the track and slowly lower threshold until you see <strong>1-2 dB of gain reduction</strong> on loud peaks.',
      '<strong>Measure integrated LUFS</strong> — Play the entire track while monitoring your loudness meter. Note the integrated LUFS at the end. For streaming, target approximately <strong>-14 LUFS</strong>.',
      '<strong>Adjust for target loudness</strong> — If you need more loudness, lower the threshold (more limiting). If too loud, raise threshold. Each 1 dB of threshold change roughly equals 1 LUFS. Stop when you hit your target.',
      '<strong>Check gain reduction meter</strong> — Watch the limiter\'s GR meter during the loudest sections. <strong>3-6 dB GR</strong> is typical for streaming masters. <strong>8+ dB GR</strong> suggests over-limiting.',
      '<strong>Listen for distortion</strong> — Lower the threshold further until you hear distortion, pumping, or dulled transients. Note where this happens. Back off 1-2 dB from this point.',
      '<strong>Adjust attack/release (if available)</strong> — <strong>Faster attack</strong> catches transients but can dull the mix. <strong>Slower attack</strong> preserves punch but may miss peaks. <strong>Auto release</strong> often works best.',
      '<strong>A/B with bypass</strong> — Bypass the limiter entirely (note: it will be quieter). Adjust comparison level mentally or use a gain plugin. Does the limited version maintain punch and clarity?',
      '<strong>Check dynamic range</strong> — Compare DR before and after limiting. Losing 2-3 DR from limiting is typical. Losing 5+ DR suggests over-limiting.',
      '<strong>Final verification</strong> — Confirm: True peak at or below <strong>-1 dBTP</strong>, integrated LUFS at target (approximately <strong>-14 LUFS</strong> for streaming), no audible distortion or pumping.'
    ]
  },

  theory: {
    sections: [
      {
        title: 'Understanding Limiting in Mastering',
        content: `A limiter is a compressor with a very high ratio (∞:1 or near-infinite). It prevents signal from exceeding a set ceiling, allowing you to raise overall loudness without clipping.

**How Limiting Works:**
1. Signal approaches the threshold/ceiling
2. Limiter engages, preventing signal from exceeding ceiling
3. Peaks are "limited" (reduced)
4. Overall level can be raised because peaks are controlled

**Limiting vs Compression:**
| Aspect | Compression | Limiting |
|--------|-------------|----------|
| Ratio | 2:1 to 10:1 | ∞:1 or 20:1+ |
| Purpose | Dynamic control | Peak control |
| Gain reduction | 2-10 dB typical | 1-6 dB typical |
| Transparency | Character varies | Should be transparent |
| Position in chain | Before limiter | Last in chain |

**The True Peak Limiter:**
Standard limiters measure sample peaks. True peak limiters oversample to catch inter-sample peaks that occur during D/A conversion. For streaming masters, always use a true peak limiter.

**Why Limiting is Necessary:**
- Raises perceived loudness without clipping
- Achieves competitive loudness for the platform
- Controls peaks that would cause distortion
- Ensures compliance with platform requirements (-1 dBTP)

**Why Over-Limiting is Harmful:**
- Destroys transients (kick, snare lose punch)
- Creates distortion and artifacts
- Causes listener fatigue
- Reduces dynamic range
- Streaming platforms turn it down anyway`
      },
      {
        title: 'Loudness Standards and Streaming Normalization',
        content: `Streaming platforms normalize loudness—they turn loud tracks down and quiet tracks up. Understanding this changes how you approach limiting.

**How Streaming Normalization Works:**
1. Platform measures integrated LUFS of your master
2. Compares to platform's target (e.g., -14 LUFS for Spotify)
3. If louder than target: turns your track DOWN
4. If quieter than target: may turn up (varies by platform)

**Platform Targets:**
| Platform | Target LUFS | Loud Track Behavior |
|----------|-------------|---------------------|
| Spotify | -14 LUFS | Turned down |
| Apple Music | -16 LUFS | Turned down (Sound Check) |
| YouTube | -14 LUFS | Turned down |
| Tidal | -14 LUFS | Turned down |
| Amazon | -14 LUFS | Turned down |

**The Loudness War Outcome:**
If you master to -8 LUFS (very loud, heavily limited):
- Spotify turns it down 6 dB
- Your track now has crushed dynamics AND is no louder than -14 LUFS tracks
- You lost dynamics for nothing

If you master to -14 LUFS with preserved dynamics:
- Spotify plays it at unity (no change)
- Your track has punchy transients and dynamic range
- It sounds better than the over-limited version

**The Modern Approach:**
Target -14 LUFS integrated for streaming. This:
- Avoids being turned down
- Preserves dynamics and punch
- Sounds better on normalized platforms
- Is the professional standard for 2020s releases

**When to Go Louder:**
- Club/DJ masters (-8 to -6 LUFS): DJs need loudness for mixing
- CD masters (-10 to -8 LUFS): No normalization on CD
- Special requests: Client specifically wants loud master`
      },
      {
        title: 'Limiter Settings: Threshold, Ceiling, Attack, Release',
        content: `Understanding limiter parameters helps you achieve loudness without destroying your master.

**Threshold (or Input Gain):**
How much signal you're pushing into the limiter.
- Higher input = more limiting = louder
- Lower input = less limiting = more dynamics

**Setting Threshold:**
1. Set ceiling to -1 dBTP
2. Lower threshold (or raise input) until you hit target LUFS
3. Watch GR meter—3-6 dB is typical for streaming
4. Listen for artifacts—back off if you hear distortion

**Ceiling (Output):**
The maximum level the signal can reach.
- For streaming: -1.0 dBTP (true peak)
- For CD: -0.3 dBTP (tighter tolerance)
- For broadcast: -2.0 dBTP (strictest)

**Attack Time:**
How quickly the limiter engages.

| Attack | Effect | Use Case |
|--------|--------|----------|
| Fast (0.1-1 ms) | Catches all transients, can dull punch | When peaks are problematic |
| Medium (1-5 ms) | Balanced transient preservation | Default for most |
| Slow (5-20 ms) | Preserves punch, may miss peaks | When punch is paramount |
| Lookahead | Perfect peak control without attack delay | Most modern limiters |

**Release Time:**
How quickly the limiter recovers.

| Release | Effect | Use Case |
|---------|--------|----------|
| Fast (<50 ms) | Quick recovery, can pump | Dense, fast material |
| Medium (50-200 ms) | Natural recovery | General use |
| Slow (>200 ms) | Smooth, gentle | Sparse, dynamic material |
| Auto | Adapts to material | Usually best choice |

**Recommended Starting Point:**
- Ceiling: -1.0 dBTP
- Attack: Lookahead or medium (1-5 ms)
- Release: Auto
- Threshold: Adjust for target LUFS (aim for 3-6 dB GR)`
      },
      {
        title: 'Recognizing Over-Limiting',
        content: `Learning to hear over-limiting is crucial. Once you push too far, the damage is obvious—but it's easy to miss if you're not listening for it.

**Signs of Over-Limiting:**

**1. Pumping:**
The volume noticeably dips and recovers rhythmically, often timed with the kick drum. Sounds like the track is "breathing" or "pumping."
Cause: Too much gain reduction, release too fast or too slow.

**2. Distortion:**
Harsh, crunchy quality, especially on transients. Snare sounds "broken," vocals sound "gritty."
Cause: Limiter pushed past its transparent range, or poor limiter quality.

**3. Dulled Transients:**
Kick and snare lose impact. Everything sounds "soft" or "rounded." The mix lacks punch.
Cause: Too much gain reduction, attack too fast.

**4. Listener Fatigue:**
The track becomes tiring to listen to after 30 seconds. You want to turn it down.
Cause: Excessive limiting removes the dynamic "breathing" that makes music pleasant.

**5. "Wall of Sound":**
No dynamic variation—verse and chorus at the same level. Everything feels flat and monotonous.
Cause: Crushing dynamics to achieve loudness.

**The A/B Test for Over-Limiting:**
1. Bypass the limiter
2. Listen to the unlimited version (adjust playback level to compensate)
3. Re-enable the limiter
4. Compare: Does the limited version still have life and punch?
5. If the unlimited version sounds dramatically better, you're over-limiting

**The DR Check:**
- Mix before limiting: typically DR10-14
- Master after limiting: typically DR8-10 for streaming
- If you've lost 4+ DR from limiting alone, you've probably gone too far

**The Golden Rule:**
If in doubt, limit less. A slightly quieter master with dynamics always beats a loud, crushed master that gets turned down anyway.`
      },
      {
        title: 'Limiter Modes and Algorithms',
        content: `Modern limiters offer multiple modes or algorithms optimized for different material. Understanding these helps you choose the right tool.

**Common Limiter Modes:**

**Transparent/Clean:**
- Minimal coloration
- Preserves transients
- Best for dynamic material
- May struggle with very dense material

**Aggressive/Loud:**
- Optimized for maximum loudness
- May sacrifice some transient detail
- Good for already-compressed material
- Can sound harsh if pushed too far

**Warm/Analog:**
- Adds subtle saturation/coloration
- Can help "glue" overly clinical mixes
- Masks limiting artifacts with pleasant harmonics
- Not truly transparent, but often sounds good

**Multi-Band:**
- Limits different frequency ranges independently
- Prevents bass from triggering limiting on whole mix
- More transparent at high levels
- Can sound "robotic" if overdone

**Mode Selection Guidelines:**
| Material Type | Recommended Mode |
|---------------|------------------|
| Dynamic, acoustic | Transparent |
| Dense, electronic | Aggressive or Multi-Band |
| Already compressed | Transparent or Warm |
| Needs glue/warmth | Warm/Analog |

**Limiter Quality Matters:**
Cheap or stock limiters often produce artifacts earlier than quality limiters. Professional limiters (FabFilter Pro-L2, iZotope Ozone Maximizer, Sonnox Oxford Limiter) are more transparent at high gain reduction.

**Plugin Recommendations:**
- **FabFilter Pro-L2:** Multiple algorithms, excellent metering, very transparent
- **iZotope Ozone Maximizer:** IRC modes for different material, integrated with Ozone
- **Waves L2/L3:** Classic limiters, good for moderate limiting
- **Sonnox Oxford Limiter:** Very transparent, excellent for classical/acoustic`
      },
      {
        title: 'Practical Limiting Workflow',
        content: `A structured limiting workflow ensures you achieve target loudness without damaging your master.

**Step 1: Set Your Target**
Before limiting, decide on your loudness target:
- Streaming master: -14 LUFS integrated
- CD master: -10 to -8 LUFS integrated
- Club master: -8 to -6 LUFS integrated

**Step 2: Set Ceiling**
- For streaming: -1.0 dBTP
- For CD: -0.3 dBTP
- For broadcast: -2.0 dBTP

**Step 3: Measure Baseline**
- Play the entire track
- Note integrated LUFS before limiting
- Note true peak before limiting
- Calculate how much gain is needed to hit target

**Step 4: Apply Limiting Gradually**
1. Start with threshold at 0 (no limiting)
2. Lower threshold in 1 dB increments
3. After each adjustment, measure LUFS
4. Stop when you hit target

**Step 5: Listen Critically**
- A/B bypass (accounting for level difference)
- Listen for pumping, distortion, dulled transients
- If artifacts appear, back off threshold

**Step 6: Check Metrics**
✅ Integrated LUFS at target (±0.5 LUFS)
✅ True peak at or below ceiling (-1 dBTP)
✅ Gain reduction reasonable (3-6 dB typical)
✅ Dynamic range preserved (lost ≤3 DR from limiting)

**Step 7: Final Verification**
- Play entire track start to finish
- Listen on multiple systems if possible
- Confirm no artifacts in quiet sections or transitions

**Common Mistakes to Avoid:**
- Setting target before analyzing source material
- Limiting to a specific GR number instead of listening
- Ignoring true peak (using sample peak instead)
- Not A/B comparing to catch artifacts
- Pushing for loudness beyond what the material supports`
      }
    ]
  },

  learningObjectives: [
    "Understand limiting fundamentals: true peak limiting, ceiling, threshold, and the relationship between limiting and loudness",
    "Apply streaming normalization knowledge: target -14 LUFS integrated for Spotify/YouTube, -1 dBTP true peak ceiling",
    "Set appropriate limiter parameters: threshold for 3-6 dB GR, lookahead or medium attack, auto release",
    "Recognize over-limiting artifacts: pumping, distortion, dulled transients, listener fatigue",
    "Execute a structured limiting workflow: set target → set ceiling → measure baseline → limit gradually → verify metrics"
  ],

  messages: applyMessagePreset("default", {
    initial: "Complete this mastering lesson to master limiting techniques.",
    success: "Excellent! You can now achieve competitive loudness while preserving dynamics and punch.",
    error: "Review the limiting concepts and try again.",
    alreadyCompleted: "You've mastered Limiting & Loudness. Ready for Lesson 7!"
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
