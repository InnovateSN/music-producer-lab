/**
 * Music Producer Lab - Lesson Configuration
 * Lesson: Mixing 14 - Reference Tracks & Critical Listening
 */

import { applyMessagePreset, buildHeroEyebrow } from "./config-presets.js";

export const lessonConfig = {
  lessonKey: "mpl-mixing-14-progress",
  lessonNumber: 14,
  lessonCategory: "Mixing",

  progression: {
    difficulty: "advanced",
    prerequisites: ["mixing-13","mixing-12"],
    outcomes: ["Completare gli obiettivi pratici di mixing-14","Consolidare competenze advanced nel modulo mixing"]
  },

  nextLessonUrl: "lesson-mixing-15.html",
  prevLessonUrl: "lesson-mixing-13.html",
  overviewUrl: "labs.html",

  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 14, categoryLabel: "Mixing" }),
    title: "Reference Tracks & Critical Listening:",
    titleHighlight: "Calibrate Your Ears to Professional Standards",
    subtitle: "Learn to use reference tracks systematically, match loudness accurately, analyze frequency balance, and develop the critical listening skills that separate amateur from professional mixing"
  },

  exercise: {
    title: "Build a Reference Panel and Calibrate Your Mix",
    description: "Create a permanent reference system in your session that allows instant, level-matched A/B comparison between your mix and professional references. Develop a repeatable workflow for critical listening that you'll use on every future mix.",
    tip: "The single most common amateur mistake is comparing your mix to a reference without level matching. Louder sounds better—always. Even 0.5 dB difference biases your judgment. Use integrated LUFS (not peak, not RMS) for matching, and switch rapidly (under 2 seconds) to catch real differences before your ears adapt.",
    steps: [
      '<strong>Load and save session</strong> — Open "Mixing-13_GenreVariants" and Save As: "Mixing-14_ReferenceTracking". This becomes your reference workflow template.',
      '<strong>Select appropriate references</strong> — Choose 2–3 reference tracks that match: (1) Same genre as your mix, (2) Similar tempo and energy, (3) Released in the last 3–5 years (production standards evolve), (4) Commercially successful (proven to translate). Avoid heavily limited "loudness war" masters if possible.',
      '<strong>Import references into session</strong> — Create a bus labeled "REFERENCE" at the end of your mixer. Import reference tracks onto dedicated tracks routed ONLY to the Reference bus. Do NOT route to your Mix Bus—references should bypass all your processing.',
      '<strong>Set up level matching</strong> — Insert a loudness meter on your Mix Bus and on the Reference bus (or use a plugin like ADPTR MetricAB). Measure both at the same playback section. Match the reference to your mix level (not the other way around)—turn the reference DOWN to match your mix.',
      '<strong>Match loudness using integrated LUFS</strong> — Play 20–30 seconds of your mix\'s loudest section. Note the integrated LUFS reading. Play the same timeframe of your reference. Adjust reference track gain until both read within <strong>±0.5 LUFS integrated</strong>. Short-term LUFS fluctuates; integrated is more stable for matching.',
      '<strong>Set up rapid A/B switching</strong> — Create a switching system: (1) Use a plugin like MetricAB with built-in switching, OR (2) Set up key commands to solo/unsolo Reference bus, OR (3) Use a utility plugin to toggle polarity for instant mute. Goal: switch in under 1 second.',
      '<strong>Practice rapid switching</strong> — Play your mix, switch to reference, switch back—all within 5 seconds total. Your ears should catch broad differences (low end, vocal level, brightness) before they adapt. If you listen to the reference for more than 3–5 seconds, you start adapting to it and lose objectivity.',
      '<strong>Analyze low-end balance</strong> — A/B focus: How does your low end compare? Is your kick as punchy? Is your bass as present or too boomy? Does your sub extend as low, or is it weaker/stronger? Note specific observations.',
      '<strong>Analyze midrange clarity</strong> — A/B focus: Is your vocal as clear and forward? Do your mids feel muddy or hollow compared to the reference? Is there congestion in 200–500 Hz, or harshness in 2–4 kHz?',
      '<strong>Analyze high-end texture</strong> — A/B focus: Is your top end as bright and airy? Do your cymbals/hi-hats have the same presence? Is there harshness, or is the reference smoother? Check 8–12 kHz range specifically.',
      '<strong>Analyze stereo width and depth</strong> — A/B focus: Is your mix as wide? Is the center as focused? Does the reference have more depth (front-to-back dimension), or does your mix feel flat? Note width automation differences between verse and chorus.',
      '<strong>Analyze dynamics</strong> — A/B focus: Does your mix breathe like the reference, or is it more squashed/limited? Do transients (kick, snare) hit as hard? Does the reference have more or less dynamic range? Use a dynamic range meter if available.',
      '<strong>Document observations</strong> — Create a text note or comment track in your session. Write down: (1) What\'s working well in your mix, (2) What needs adjustment, (3) Specific frequencies or elements to address. Be specific: "kick needs more 80 Hz" not "low end is off."',
      '<strong>Make targeted adjustments</strong> — Based on your observations, make 2–3 specific adjustments. Re-match levels after each adjustment (processing can change loudness). A/B again to verify improvement.',
      '<strong>Export and self-evaluate</strong> — Export your improved mix. Re-import alongside the reference (on a new track, routed to Reference bus, level-matched). Listen back without looking at the screen. Can you tell which is which? Where do differences remain?'
    ]
  },

  theory: {
    sections: [
      {
        title: 'Why Reference Tracks Are Non-Negotiable',
        content: `Reference tracks are your calibration standard. Without them, you're mixing in a vacuum—your room acoustics, monitoring system, and personal biases all color your perception. References ground you in objective reality: what does a professional, commercially successful mix actually sound like?

**The Problem They Solve:**
- **Room acoustics:** Your room may emphasize or hide certain frequencies. References reveal what's really there.
- **Speaker bias:** Every monitoring system has a characteristic sound. References help you compensate.
- **Ear fatigue:** After hours of mixing, your perception drifts. References reset your ears.
- **Style calibration:** What sounds "right" varies by genre and era. References define the target.

**When to Reference:**
- **At the start:** Before mixing, listen to 2–3 references to calibrate your ears to the genre
- **During mixing:** Every 15–30 minutes, briefly A/B to check you're on track
- **Before export:** Final reference check to catch drift
- **After a break:** When returning to a session, reference before resuming

**The Golden Rule:**
If your mix sounds obviously different from professional references in the same genre, something is wrong—with your mix, your monitoring, or your room. References don't lie; your ears can be fooled.`
      },
      {
        title: 'Choosing the Right References',
        content: `Not all references are equally useful. The best reference tracks share sonic DNA with your target while being of unquestionable professional quality.

**Selection Criteria:**
1. **Same genre:** A pop reference won't help you mix metal. Match the genre closely.
2. **Similar tempo/energy:** A ballad reference doesn't help with an uptempo track. Match the vibe.
3. **Recent release (last 3–5 years):** Production standards evolve. Older tracks may not reflect current expectations.
4. **Commercial success:** Tracks that charted, got radio play, or critical acclaim have proven translation.
5. **Good mastering:** Avoid "loudness war" victims (crushed dynamics). Look for tracks with clear transients and some dynamic range.

**What to Avoid:**
- **Mismatched genres:** Comparing your EDM track to a rock reference confuses the analysis
- **Poorly mastered tracks:** Some releases are over-limited or EQ'd strangely
- **Re-masters or remixes:** May have different sonic character than original
- **Your own old mixes:** They carry your same biases

**How Many References?**
Use 2–3 references maximum. Too many creates confusion. Choose:
- **One "aspirational" reference:** The absolute best example of the sound you want
- **One "realistic" reference:** A good example that's achievable with your resources
- **One "contrast" reference (optional):** A slightly different take on the genre for perspective

**Building a Reference Library:**
Create a folder of genre-sorted reference tracks. Keep them organized, properly labeled, and in high-quality format (WAV or high-bitrate lossy). Having references ready means you'll actually use them.`
      },
      {
        title: 'Level Matching: The Most Critical Step',
        content: `Level matching is the foundation of valid A/B comparison. Louder sounds better—it's psychoacoustic fact. Even a 0.5 dB difference biases your perception. If your reference is louder than your mix, you'll think the reference is "better" even if the tonal balance is identical.

**Why Integrated LUFS (Not Peak or RMS):**
- **Peak:** Measures momentary transient peaks. Doesn't reflect perceived loudness.
- **RMS:** Measures average level. Better than peak, but doesn't account for frequency perception.
- **LUFS (Loudness Units Full Scale):** Measures perceived loudness using a weighting curve that models human hearing. This is what you need.

**Integrated vs Short-Term vs Momentary:**
- **Momentary LUFS:** Updates every 400ms. Fluctuates rapidly. Not useful for matching.
- **Short-Term LUFS:** Averages over 3 seconds. Useful for checking sections.
- **Integrated LUFS:** Averages from start to reset. Use this for level matching—it gives a stable number.

**Level Matching Procedure:**
1. Insert a loudness meter on your Mix Bus (or use your DAW's built-in metering)
2. Play a representative section of your mix (20–30 seconds of the loudest part, typically chorus)
3. Note the integrated LUFS reading (e.g., -12 LUFS)
4. Reset the meter
5. Play the same timeframe of your reference track
6. Adjust reference track gain (clip gain or trim plugin) until it reads within ±0.5 LUFS of your mix
7. Verify by switching back and forth—they should feel equally loud

**Match the Reference DOWN to Your Mix:**
Don't turn your mix up to match a loud reference. Turn the reference down. Your mix has headroom requirements (Lesson 2); the reference is already mastered. Match the reference to your mixing level.

**Recommended Tools:**
- **Youlean Loudness Meter (free):** Excellent LUFS metering, visual history
- **ADPTR MetricAB:** Reference plugin with built-in level matching and A/B switching
- **Reference (Mastering The Mix):** Similar to MetricAB, good visualization
- **iZotope Insight 2:** Professional metering suite`
      },
      {
        title: 'A/B Technique: Rapid Switching and Focus Areas',
        content: `How you A/B matters as much as what you compare. Slow, casual switching allows your ears to adapt and loses critical detail. Rapid, focused switching reveals real differences.

**Rapid Switching Protocol:**
1. **Switch fast:** Under 1 second between mix and reference. Don't let your ears adapt.
2. **Listen short:** 2–3 seconds per comparison. Quick impressions catch broad issues.
3. **Loop a section:** Compare the same section (verse, chorus) each time. Don't jump around randomly.
4. **Focus on one thing:** Each A/B pass, focus on ONE aspect (low end, vocal level, width). Trying to hear everything at once catches nothing.

**What to Listen For (One at a Time):**

**Pass 1: Overall Tonal Balance**
- Does your mix feel darker or brighter than the reference?
- Is there an obvious frequency range that's missing or excessive?
- First impression: what jumps out as "wrong"?

**Pass 2: Low End (20–200 Hz)**
- Kick punch and weight
- Bass presence and definition
- Sub extension (do you feel it in your chest?)
- Low-mid clarity or mud (200–400 Hz)

**Pass 3: Midrange (200 Hz–5 kHz)**
- Vocal presence and clarity
- Snare body and crack
- Guitar/synth presence
- Congestion or hollowness

**Pass 4: High End (5–20 kHz)**
- Cymbal/hi-hat presence
- Air and sparkle (10–16 kHz)
- Harshness or smoothness (6–10 kHz)
- Overall brightness level

**Pass 5: Stereo Image**
- Width: Is your mix as wide?
- Center focus: Is your center as solid?
- Depth: Does the reference have more front-to-back dimension?

**Pass 6: Dynamics**
- Transient impact (kick, snare, vocal consonants)
- Dynamic range (verse-to-chorus contrast)
- Overall "life" vs "squashed" feel

**Avoiding Adaptation:**
After 5–6 switches, take a 30-second break (silence or conversation). Your ears reset. Then resume. Extended A/B sessions cause ear fatigue and diminishing returns.`
      },
      {
        title: 'Frequency Analysis: Using Visual Tools Wisely',
        content: `Spectrum analyzers and frequency displays can supplement critical listening, but they cannot replace it. Visual tools show you what's there; your ears tell you if it sounds right.

**What Analyzers CAN Tell You:**
- **Frequency distribution:** Where does the energy live in the reference vs your mix?
- **Low-end slope:** Professional mixes often have a consistent low-end roll-off
- **Spectral balance:** Broad trends across the frequency range
- **Problem areas:** Obvious peaks or nulls that you might miss

**What Analyzers CANNOT Tell You:**
- **If it sounds good:** A "correct" frequency curve can sound terrible if dynamics are wrong
- **Transient quality:** Static analyzers miss timing and attack
- **Stereo information:** Standard analyzers show combined spectrum, not L/R or M/S
- **Context:** A 3 dB boost at 3 kHz might be perfect for one song and wrong for another

**How to Use Spectrum Comparison:**
1. Insert an analyzer on your Mix Bus (SPAN, iZotope Insight, Voxengo Span Plus)
2. Play your mix and note the spectral shape
3. Play the reference (level-matched) and note differences
4. Look for: Low-end slope, midrange presence, high-end shelf, obvious peaks/nulls

**Common Observations:**
- **Reference has more sub:** Your low end may be weak, or you're over-cutting
- **Reference has less 200–400 Hz:** Common "mud" area—many professionals cut here
- **Reference has more 3–5 kHz:** Presence range—your vocal/leads may be buried
- **Reference has more 10–16 kHz:** "Air" shelf—modern production often boosts here

**Pink Noise Reference (Advanced):**
Some engineers compare their mix to a pink noise slope (-3 dB/octave). A balanced mix roughly follows this slope. It's a sanity check, not a target—musical context matters more than matching a curve.

**Recommended Analyzers:**
- **Voxengo SPAN (free):** Excellent FFT analyzer with multiple modes
- **iZotope Insight 2:** Professional suite with spectrogram, loudness, and stereo analysis
- **FabFilter Pro-Q 3:** Built-in analyzer with EQ match function
- **Plugin Alliance ADPTR Streamliner:** Optimizes for streaming with visual feedback`
      },
      {
        title: 'Critical Listening: Training Your Ears',
        content: `Critical listening is a skill that develops with practice. The more you actively analyze professional mixes, the faster you'll identify issues in your own work.

**Structured Listening Drill (Daily Practice):**
1. Choose a professional track you admire (not in a session, just playback)
2. Listen through once for enjoyment
3. Listen again, focusing ONLY on the low end. How does the kick hit? How does the bass move?
4. Listen again, focusing ONLY on the vocal. Where is it placed? How is it processed?
5. Listen again, focusing ONLY on the effects. How much reverb? What type of delay?
6. Listen again, focusing ONLY on the stereo image. What's panned where? How wide is it?
7. Take notes. What specific techniques can you identify?

**The Genre Immersion Exercise:**
When mixing a specific genre, spend 30 minutes listening to 5–10 tracks in that genre before opening your session. Don't analyze deeply—just absorb the sound. Your ears will calibrate to genre expectations naturally.

**Logging Observations:**
Keep a listening journal (physical or digital):
- Track name, artist, genre
- Low end: (your observations)
- Mids: (your observations)
- Highs: (your observations)
- Width: (your observations)
- Effects: (your observations)
- Standout techniques: (what makes this mix special?)

Over time, patterns emerge. You'll notice what consistently separates pro mixes from amateur ones.

**Critical Listening Checklist (Reusable):**
When referencing your own mix, run through this checklist:

✅ **Low End:** Kick punch, bass presence, sub weight, low-mid clarity
✅ **Midrange:** Vocal clarity, snare body, instrument definition, congestion
✅ **High End:** Cymbal presence, air, harshness, brightness level
✅ **Width:** Stereo spread, center focus, mono compatibility
✅ **Depth:** Front-to-back dimension, reverb/delay quality
✅ **Dynamics:** Transient impact, dynamic range, verse/chorus contrast
✅ **Overall:** Does this sound like it belongs on a playlist with the references?

If any box can't be checked confidently, that's your next mix adjustment.`
      }
    ]
  },

  learningObjectives: [
    "Select appropriate reference tracks based on genre, tempo, era, and production quality",
    "Level-match references to your mix using integrated LUFS measurement (±0.5 LUFS accuracy)",
    "Apply rapid A/B switching technique with focused listening passes (low end, mids, highs, width, dynamics)",
    "Use spectrum analyzers as supplementary tools while prioritizing critical listening",
    "Develop structured critical listening habits through daily practice and observation logging"
  ],

  messages: applyMessagePreset("default", {
    initial: "Complete this mixing lesson to advance your skills.",
    success: "Excellent! You've mastered Reference Tracks & Critical Listening. Your ears are now calibrated to professional standards!",
    error: "Review the mixing concepts and try again.",
    alreadyCompleted: "You've completed this mixing technique. Keep practicing!"
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
