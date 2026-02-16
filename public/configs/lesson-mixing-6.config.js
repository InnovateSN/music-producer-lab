/**
 * Music Producer Lab - Lesson Configuration
 * Lesson: Mixing 6 - Compression Techniques - Attack & Release
 */

import { applyMessagePreset, buildHeroEyebrow } from "./config-presets.js";

export const lessonConfig = {
  lessonKey: "mpl-mixing-6-progress",
  lessonNumber: 6,
  lessonCategory: "Mixing",

  nextLessonUrl: "lesson-mixing-7.html",
  prevLessonUrl: "lesson-mixing-5.html",
  overviewUrl: "labs.html",

  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 6, categoryLabel: "Mixing" }),
    title: "Compression Techniques:",
    titleHighlight: "Attack & Release",
    subtitle: "Envelope shaping, groove timing, and parallel compression workflows"
  },

  exercise: {
    title: "Attack & Release Envelope Shaping",
    description: "Use extreme and musical attack/release settings to hear envelope shaping clearly, then apply controlled timing choices to vocal, kick, snare, and a drum parallel chain while maintaining headroom and level-matched comparisons.",
    tip: "When you feel stuck, stop changing threshold/ratio and only move attack and release while watching the GR meter. Try to make the GR 'dance' with the groove: returning too quickly often sounds like pumping; returning too slowly often sounds like the compressor never lets go.",
    steps: [
      '<strong>Load session</strong> — Open your previous session "Mixing-5_CompressionFundamentals" and immediately save a new version named "Mixing-6_AttackRelease".',
      '<strong>Note tempo</strong> — Choose a representative 20–30 second loop (commonly the chorus/drop). Note the project tempo (BPM) displayed in your DAW, because you will use it later for release-time sanity checks.',
      '<strong>Visibility check</strong> — Confirm no track, bus, or master is clipping. Keep a peak meter visible on the master and aim to keep mix peaks comfortably below full scale (a practical mixing target is to remain under about -6 dBFS peak while working).',
      '<strong>Select focus channels</strong> — Pick the three focus channels: Lead Vocal, Kick, Snare. Also keep the Drum Bus visible (you will do release experiments on the bus as well).',
      '<strong>Snare compressor setup</strong> — On the Snare channel, insert a standard compressor (stock is fine). Set ratio to about 6:1, knee medium/soft if available, and set release to 120 ms. Adjust threshold until the gain reduction meter shows about 6 dB GR on strong hits. Set output/makeup so bypass on/off is roughly level-matched.',
      '<strong>Snare attack extreme test</strong> — Set attack to 1 ms and listen for transient dulling and "thickness". Then set attack to 20 ms and listen for restored crack/punch. Then set attack to 80 ms and listen for increased transient emphasis with more body control. Keep threshold fixed. Write down which attack best supports the groove in the full mix.',
      '<strong>Kick attack extreme test</strong> — Repeat the attack extreme test on Kick with release still around 80–120 ms. Try attack at 1 ms, 15–25 ms, and 50–80 ms. Choose a "musical" kick attack that preserves beater definition without letting peaks dominate the mix, and note the chosen value.',
      '<strong>Vocal compressor setup</strong> — On the Lead Vocal, insert a compressor in the serial position (after subtractive EQ, before musical EQ). Set ratio to about 3:1, attack 15–25 ms, release 80–150 ms. Adjust threshold for about 2–4 dB GR on louder phrases. Level-match output.',
      '<strong>Vocal attack comparison</strong> — Without changing threshold, test attack at ~3 ms (fast), ~15–25 ms (medium), and ~60 ms (slow). Confirm how consonant clarity and "front" change. Keep only the setting that improves intelligibility in context when level-matched.',
      '<strong>Drum bus compressor setup</strong> — On the Drum Bus, insert a bus compressor (or any compressor). Set ratio to 2:1 and attack to 30 ms. Adjust threshold for 1–3 dB GR on the loudest section so the effect is subtle but visible on the GR meter.',
      '<strong>Release extreme test</strong> — Set release to 20 ms (fast) and listen for pumping/breathing; then set to 150 ms (medium) and listen for smoother control; then set to 600 ms (slow) and listen for "stuck" GR flattening the groove. Watch the GR meter: verify whether it returns toward 0 dB before the next backbeat or stays engaged across beats.',
      '<strong>Tempo sanity check</strong> — Estimate note durations using your BPM. Quarter-note (ms) ≈ 60,000 ÷ BPM; eighth ≈ 30,000 ÷ BPM; sixteenth ≈ 15,000 ÷ BPM. Set the Drum Bus release close to one rhythmic value (often a sixteenth or eighth) and compare it to a release about 2× longer. Choose the one where the GR meter returns in a way that supports the groove.',
      '<strong>Auto-release comparison</strong> — If your compressor offers Auto Release (or a log/programme-dependent release mode), enable it and compare against your best manual release. Choose the mode that produces fewer pumping artefacts while preserving groove, and confirm with a level-matched A/B.',
      '<strong>Parallel compression setup</strong> — Create a return/aux track named "Drum Parallel". Send the Drum Bus to this aux (start the send at -∞ and raise gradually). Insert a compressor on the aux with aggressive settings: ratio 8:1 or higher, attack 1–5 ms, release 50–150 ms, threshold for approximately 10–20 dB GR. Blend the aux return fader under the dry drums until you hear added density and sustain while the dry transients remain present.',
      '<strong>Final verification</strong> — Check that no channel, bus, or master clips after adding parallel return. Export two loop bounces: (A) "Mixing-6_PreAR" with timing changes bypassed, and (B) "Mixing-6_PostAR" with timing changes enabled. Re-import both, level-match, and A/B. Confirm that improvements (punch, consistency, groove support) remain when loudness is matched.'
    ]
  },

  theory: {
    sections: [
      {
        title: 'Attack Time in Depth: Controlling Transient Pass-Through',
        content: `Attack time determines how quickly the compressor reaches its full gain reduction after the signal crosses the threshold. During the attack phase, some of the transient passes through relatively uncompressed—this is why attack is the primary "punch" control.

**Attack Time Ranges:**
- **Fast attack (< 5 ms)**: Catches transients quickly. Can dull punch and introduce a "thick" or even "buzzy" quality on percussive sources. Useful when you want to tame aggressive peaks.
- **Medium attack (10–30 ms)**: A common starting zone that balances control with transient preservation. Often works well on vocals, drums, and bass.
- **Slow attack (> 50 ms)**: Lets the transient through largely untouched while controlling the body/sustain that follows. Can increase perceived punch because the initial hit is louder relative to the compressed tail.

**Source-Dependent Choices:**
- **Drums**: Often benefit from medium-to-slow attack (15–50 ms) to preserve the crack/beater while controlling ring and sustain
- **Vocals**: Medium attack (10–30 ms) typically preserves consonant articulation while smoothing level
- **Bass**: Medium attack helps maintain note definition; too fast can cause low-frequency distortion

Ableton's documentation notes that 10–50 ms attack can preserve peaks while still controlling dynamics, and warns that extremely short attack times can introduce unwanted artifacts.`
      },
      {
        title: 'Release Time in Depth: Recovery and Groove Interaction',
        content: `Release time determines how quickly the compressor returns toward unity gain once the signal falls back below threshold. This parameter has a profound effect on how compression feels rhythmically.

**Release Time Ranges:**
- **Fast release (< 50 ms)**: The compressor recovers quickly, but this can cause audible "pumping" or "breathing" as the background noise or sustain surges up between hits. On low-frequency material, very fast release can introduce distortion.
- **Medium release (100–300 ms)**: Musical for most sources. Allows natural-sounding recovery without obvious artifacts.
- **Slow release (> 500 ms)**: Gentle, gradual leveling effect. However, on rhythmic material the compressor may stay "stuck" in gain reduction across multiple beats, flattening dynamic contrast and groove.

**Auto/Programme-Dependent Release:**
Many compressors offer an Auto Release mode where the release time adapts to the incoming signal—faster for transients, slower for sustained material. This can be a useful "set and forget" option, though manual timing often provides more precise control for specific groove needs.

**Watching the Meter:**
The GR meter is your best friend when setting release. Watch whether it returns toward 0 dB before the next significant hit. If it stays pinned, try a faster release or less gain reduction.`
      },
      {
        title: 'Attack/Release Interaction: Shaping the Envelope',
        content: `Attack and release work together to reshape the amplitude envelope of your audio. Understanding their interaction is key to intentional compression.

**The Envelope Dance:**
- **Fast attack + fast release**: Maximum control but can sound aggressive, pumping, or "squashed"
- **Fast attack + slow release**: Clamps down quickly and holds—can sound very controlled but potentially lifeless
- **Slow attack + fast release**: Lets transients through, then quickly recovers—can sound punchy but may pump
- **Slow attack + slow release**: Gentle overall leveling with minimal transient impact—transparent but less "exciting"

**Breathing and Pumping Artifacts:**
- **Pumping**: Audible surging when release is too fast relative to the material
- **Breathing**: Background noise or room tone rising and falling with gain reduction
- **Stuck/flat**: When release is too slow, the compressor never recovers and the groove feels compressed out

**Timing to Tempo:**
AES research describes an engineer-style approach where release is tuned to relate to the rhythm of the song. A useful starting point: calculate note durations (quarter = 60,000 ÷ BPM in ms) and try release times near a sixteenth or eighth note. This helps the compressor "breathe" with the groove rather than against it.`
      },
      {
        title: 'Relating Release Time to Tempo',
        content: `Tying release time to musical subdivisions can help compression feel rhythmically coherent rather than arbitrary.

**Note Duration Formulas:**
<pre style="background: #1a1a2e; padding: 12px; border-radius: 4px; margin: 1em 0;">
Quarter note (ms) = 60,000 ÷ BPM
Eighth note (ms) = 30,000 ÷ BPM
Sixteenth note (ms) = 15,000 ÷ BPM
</pre>

**Example at 120 BPM:**
- Quarter note = 500 ms
- Eighth note = 250 ms
- Sixteenth note = 125 ms

**Practical Application:**
On a drum bus at 120 BPM, you might try release around 125 ms (sixteenth) for tight, punchy control, or 250 ms (eighth) for smoother, more relaxed recovery. The "right" choice depends on genre and feel—faster release for aggressive EDM, slower for laid-back grooves.

**It's a Starting Point, Not a Rule:**
These calculations give you a musically informed starting point, but always verify by ear. The GR meter should "dance" with the rhythm—returning to near-zero before the next significant hit in most cases. Trust your ears over the math.`
      },
      {
        title: 'Introduction to Parallel Compression',
        content: `Parallel compression (also called "New York compression") blends a heavily compressed signal with the original dry signal. This lets you add density and sustain while preserving natural transients.

**Why Parallel Works:**
- The dry signal maintains punch and dynamics
- The compressed signal adds body, sustain, and loudness
- Blending them gives you the benefits of heavy compression without the drawbacks

**Two Setup Methods:**

**1. Aux/Send Method (DAW-Agnostic):**
- Create a return/aux track
- Send your source (e.g., Drum Bus) to this aux
- Insert a compressor on the aux with aggressive settings (high ratio, fast attack, heavy GR)
- Blend the aux fader under the dry signal to taste

**2. Dry/Wet (Mix) Knob:**
- Many modern compressors include a Mix or Dry/Wet control
- Set up aggressive compression, then dial back the Mix knob (e.g., 30–50% wet)
- Simpler routing but less flexible than aux method

**Typical Parallel Settings:**
- Ratio: 8:1 to 20:1 (or limiting)
- Attack: 1–5 ms (catch everything)
- Release: 50–150 ms (fast recovery)
- GR: 10–20 dB (heavy)
- Blend: Start low, raise until you hear added density without losing transient clarity`
      },
      {
        title: 'Verification and Level-Matching After Timing Changes',
        content: `Every timing change can affect perceived loudness, which makes honest comparison difficult without discipline.

**The Level-Matching Habit:**
After adjusting attack or release, re-check your bypass comparison:
- Toggle the compressor on/off
- Adjust makeup/output gain until both states sound equally loud
- Only then judge whether the compression is actually improving the sound

**Common Pitfalls:**
- Faster attack often reduces peak level → you may add makeup gain → track gets louder → "sounds better" (but it's just louder)
- Slower release may allow more peaks through → less makeup needed → track sounds quieter → you think "it's not working"

**Headroom Check (Lesson 2):**
After all timing adjustments and especially after adding parallel compression:
- Check that no channel, bus, or master is clipping
- Parallel returns add level—reduce the return fader or individual compressor outputs to maintain headroom
- Keep master peaks comfortably below 0 dBFS (around -6 dBFS is a practical mixing target)

**Serial Chain Integrity (Lesson 4):**
Remember where compression sits in your chain. If you change attack dramatically, the compressor may react differently to resonances that your upstream EQ was handling. Re-verify the full chain sounds coherent.`
      }
    ]
  },

  learningObjectives: [
    "Manipulate attack time to control transient-to-body balance on drums, vocals, and bass without losing the intent of the performance",
    "Compare fast, medium, and slow release settings and identify pumping/breathing versus 'stuck' gain reduction using meter behaviour and context listening",
    "Identify how attack and release interact to shape the envelope, and relate release time to tempo using note-duration estimates when appropriate",
    "Implement parallel compression on drums using both DAW-agnostic routing (aux/return) and in-plugin Dry/Wet (Mix) blending when available",
    "Verify headroom and level-matched A/B comparisons after timing changes, reinforcing Lesson 2 gain staging discipline and Lesson 4 serial chain thinking"
  ],

  messages: applyMessagePreset("default", {
    initial: "Complete this mixing lesson to advance your skills.",
    success: "Excellent! You've mastered Attack & Release compression techniques. Your mixes are improving!",
    error: "Review the mixing concepts and try again.",
    alreadyCompleted: "You've completed this mixing technique. Keep practicing!"
  }),

  mode: {
    type: "educational",
    sandbox: true,
    showContent: true,
    enableInteractive: false
  }
};

if (typeof window !== 'undefined') {
  window.LESSON_CONFIG = lessonConfig;
}
