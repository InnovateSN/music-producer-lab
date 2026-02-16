/**
 * Music Producer Lab - Lesson Configuration
 * Lesson: Mastering 8 - Stem Mastering
 */

import { applyMessagePreset, buildHeroEyebrow } from "./config-presets.js";

export const lessonConfig = {
  lessonKey: "mpl-mastering-8-progress",
  lessonNumber: 8,
  lessonCategory: "Mastering",

  nextLessonUrl: "lesson-mastering-9.html",
  prevLessonUrl: "lesson-mastering-7.html",
  overviewUrl: "labs.html",

  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 8, categoryLabel: "Mastering" }),
    title: "Stem Mastering:",
    titleHighlight: "Control with Grouped Stems",
    subtitle: "Master with more flexibility and control using grouped stems—fix mix issues that stereo mastering can't address while preserving the mix engineer's vision"
  },

  exercise: {
    title: "Master Using Grouped Stems",
    description: "Set up a stem mastering session with drums, bass, music, and vocals stems, then apply targeted processing to achieve a polished master with control you don't have in stereo mastering.",
    tip: "Stem mastering sits between mixing and stereo mastering. You have more control than stereo, but you're still working with pre-mixed groups. Respect the mixer's work—use your control to enhance, not rebuild. If you're making dramatic changes, the mix needs revision, not stem mastering.",
    steps: [
      '<strong>Request proper stems</strong> — Ask for stems at session sample rate, same length, same start point. Standard stems: Drums, Bass, Music/Synths, Vocals, FX. All processing printed except master bus.',
      '<strong>Import and verify alignment</strong> — Import all stems. Verify they start at the same point and are the same length. Sum all stems—should sound identical to the original stereo mix.',
      '<strong>Set up bus routing</strong> — Route all stems to a Master Bus. Insert your mastering chain on the Master Bus (EQ, compression, limiter). This is your global processing.',
      '<strong>Listen to the summed mix</strong> — Play all stems at unity. This is your starting point. Note any issues: Is the vocal buried? Bass too loud? Drums lacking punch?',
      '<strong>Make stem-level balance adjustments</strong> — Before any processing, adjust stem levels if needed. ±1-2 dB to correct balance issues the mix engineer might have missed or that mastering perspective reveals.',
      '<strong>Apply stem-specific EQ (if needed)</strong> — If one stem has an issue, address it on that stem only. Example: Drums need more low-end punch—boost 60-100 Hz on drums stem only.',
      '<strong>Apply stem-specific compression (if needed)</strong> — If one stem needs dynamic control, apply to that stem. Example: Vocals inconsistent—apply gentle compression to vocals stem only.',
      '<strong>Apply master bus EQ</strong> — After stem-level corrections, apply global EQ on the master bus. This should be more subtle now that stem issues are addressed.',
      '<strong>Apply master bus compression</strong> — Gentle glue compression on the master bus. The stems are already processed, so this should be light (1-2 dB GR max).',
      '<strong>Apply limiting</strong> — Apply limiting on master bus to hit target loudness (-14 LUFS). Same process as stereo mastering.',
      '<strong>A/B against original mix</strong> — Compare your stem master to the original stereo mix (level-matched). Your master should sound better, but still faithful to the mix.',
      '<strong>Export and verify</strong> — Export the stem master. Verify loudness, true peak, and mono compatibility. Listen through for any issues introduced by stem processing.'
    ]
  },

  theory: {
    sections: [
      {
        title: 'What is Stem Mastering?',
        content: `Stem mastering is the process of mastering using grouped submixes (stems) rather than a single stereo mix. It provides more control than stereo mastering while maintaining the mix engineer's overall vision.

**Standard Stems:**
- **Drums:** Kick, snare, hats, percussion, overheads—all bounced together
- **Bass:** Bass guitar, synth bass, 808s
- **Music/Synths:** Guitars, keys, pads, synths—melodic and harmonic elements
- **Vocals:** Lead vocal, backing vocals, vocal effects
- **FX (optional):** Reverb returns, delay returns, sound design

**When Stem Mastering is Appropriate:**
- Mix has specific issues that stereo mastering can't address
- Client wants more control over final result
- Working on your own productions (self-mastering with flexibility)
- Album consistency requires matching levels across stems

**When Stereo Mastering is Better:**
- Mix is well-balanced and needs only polish
- Faster turnaround required
- Budget constraints
- Established mix engineer's work you don't want to alter

**The Hybrid Role:**
Stem mastering sits between mixing and stereo mastering:
- More control than stereo mastering
- Less control than full mixing
- Access to grouped elements, not individual tracks
- Respects the mixer's work while allowing targeted corrections`
      },
      {
        title: 'Receiving and Verifying Stems',
        content: `Proper stem delivery is critical for successful stem mastering. Verify everything before starting.

**Stem Delivery Requirements:**
| Requirement | Specification |
|-------------|---------------|
| Format | WAV (24-bit preferred) |
| Sample rate | Session native (44.1, 48, 96 kHz) |
| Length | All stems same length |
| Start point | All stems start at same point |
| Processing | All processing printed except master bus |
| Headroom | Each stem peaks around -6 to -3 dBFS |

**Verification Checklist:**
1. **All stems same length?** Line up in DAW, check end points
2. **Same start point?** Zoom in on first transient—should align perfectly
3. **Sum to original?** Play all stems at unity—should match stereo mix exactly
4. **Correct sample rate?** All stems match session rate
5. **Proper headroom?** No stem clipping, reasonable levels

**Common Stem Problems:**
- **Different lengths:** Stems won't align—request re-export
- **Missing processing:** If stems sound very different from stereo, processing wasn't printed
- **Clipped stems:** If individual stems clip, mix needs revision
- **Wrong sample rate:** Conversion artifacts—request correct rate

**If Sum Doesn't Match:**
If stems at unity don't sum to match the stereo mix:
- Master bus processing wasn't printed (fine—that's normal)
- Different levels on stems (common—needs verification)
- Missing stem (check all elements are covered)
- Phase issue (rare—check alignment)`
      },
      {
        title: 'Stem-Level Processing: When and How',
        content: `The power of stem mastering is targeted processing on specific groups without affecting others. But this power should be used sparingly.

**When to Process Stems:**
- Specific group has an issue stereo mastering can't fix
- One element needs level adjustment
- Surgical EQ on one group without affecting others
- Dynamic control on one group (e.g., vocals)

**When NOT to Process Stems:**
- No clear problem—don't process for the sake of it
- Issue affects entire mix—use master bus instead
- Dramatic changes needed—mix needs revision

**Common Stem Corrections:**

**Drums:**
- Add low-end punch: boost 60-100 Hz
- Reduce cymbal harshness: cut 3-5 kHz or high shelf
- Increase snap: boost 2-4 kHz on snare
- Glue compression if drums feel disconnected

**Bass:**
- Tighten low end: HPF at 30-40 Hz, slight compression
- Add harmonic content for translation: subtle saturation
- Reduce mud: cut 200-300 Hz

**Music/Synths:**
- Create space for vocals: cut 2-4 kHz
- Add width: subtle M/S boost on sides
- Reduce harshness: cut 3-5 kHz

**Vocals:**
- Increase presence: boost 3-5 kHz
- Add air: high shelf at 10 kHz
- Level consistency: gentle compression
- De-essing: if sibilance wasn't controlled in mix

**The Restraint Principle:**
Just because you can process each stem doesn't mean you should. Process stems only when there's a clear problem that global processing can't solve. If you find yourself processing every stem, you're re-mixing, not mastering.`
      },
      {
        title: 'Master Bus Processing in Stem Mastering',
        content: `After any stem-level corrections, master bus processing glues everything together and achieves final loudness.

**Stem Mastering Chain Order:**
1. **Individual stem processing** (if needed)
2. **Stems sum to master bus**
3. **Master bus EQ** (global tonal shaping)
4. **Master bus compression** (glue)
5. **Master bus limiting** (loudness)

**Master Bus EQ:**
Same principles as stereo mastering, but often more subtle:
- Stem corrections may have addressed major issues
- Focus on overall tonal balance
- HPF at 20-30 Hz (always)
- Subtle high shelf for air if needed
- Broad adjustments only (±1-2 dB)

**Master Bus Compression:**
Even more subtle than stereo mastering:
- Stems may already be compressed
- Very light glue (1-2 dB GR maximum)
- Slow attack, auto release
- Ratio 1.5:1 or 2:1

**Master Bus Limiting:**
Same as stereo mastering:
- True peak ceiling at -1.0 dBTP
- Limit to target LUFS (-14 for streaming)
- Watch for artifacts from stem-level processing compounding

**The Compounding Problem:**
If you compress individual stems AND the master bus aggressively, dynamics compound:
- Stems with 3 dB GR + Master with 3 dB GR = heavily compressed
- Solution: Go lighter on stem compression if using master bus compression
- Or: Skip master bus compression if stems are already compressed`
      },
      {
        title: 'Stem Mastering Workflow',
        content: `A structured workflow ensures consistent results and prevents over-processing.

**Phase 1: Setup and Verification**
1. Import all stems
2. Verify alignment and length
3. Sum to master bus—should match original mix
4. Note any issues from initial listen

**Phase 2: Stem Corrections (if needed)**
1. Identify specific stem issues
2. Apply targeted processing (EQ, compression)
3. Keep changes subtle (±1-2 dB)
4. A/B each change—better or just different?

**Phase 3: Master Bus Processing**
1. Apply master bus EQ (subtle)
2. Apply master bus compression (subtle)
3. Apply limiting to target loudness

**Phase 4: Quality Control**
1. A/B against original stereo mix (level-matched)
2. Check mono compatibility
3. Verify loudness and true peak
4. Listen on multiple systems

**Phase 5: Export and Document**
1. Export final master (24-bit WAV)
2. Export stem bounces if requested
3. Document any changes for client

**The A/B Rule:**
At every stage, compare to the original mix:
- Stem corrections: Does this improve on the mix?
- Master bus: Does this enhance the corrected sum?
- Final: Is the stem master clearly better than stereo mastering would be?

If the answer is no at any stage, reconsider the process.`
      },
      {
        title: 'When Stem Mastering Isn\'t the Answer',
        content: `Stem mastering provides more control, but it's not always the right choice. Recognizing when to use it—and when not to—is important.

**Stem Mastering is Appropriate When:**
- One element needs targeted adjustment
- Mix is good but has a specific fixable issue
- Album consistency requires matching stem levels
- Client specifically requests stem control

**Stem Mastering is NOT Appropriate When:**

**The Mix Needs Revision:**
If you find yourself making major changes to multiple stems (±4 dB, heavy EQ, aggressive compression), the mix needs work. Request a remix rather than trying to fix it in stem mastering.

**Stereo Mastering Would Suffice:**
If the mix is well-balanced and only needs typical mastering (EQ, compression, limiting), stem mastering adds complexity without benefit.

**Budget or Timeline Constraints:**
Stem mastering takes longer than stereo mastering. If time/budget is limited, stereo may be more appropriate.

**The Slippery Slope:**
Stem mastering can become re-mixing:
- "I'll just adjust the vocal level"
- "Maybe a bit of EQ on the drums"
- "The synths could use some compression"
- "Actually, let me completely rebalance everything"

Before you know it, you've re-mixed the track. This isn't mastering—it's second-guessing the mixer. If changes are that dramatic, have the conversation about revision.

**The Professional Approach:**
When in doubt, ask: "Would this change be better made in the mix?" If yes, communicate with the mixer/client. Stem mastering fixes issues that became apparent in mastering context, not issues that should have been addressed earlier.`
      }
    ]
  },

  learningObjectives: [
    "Understand stem mastering: when to use it vs stereo mastering, standard stem configuration",
    "Verify stem delivery: alignment, length, sum verification, proper headroom",
    "Apply stem-level processing: targeted EQ and compression only when needed",
    "Balance stem corrections with master bus processing: avoid compounding dynamics",
    "Recognize when stem mastering isn't appropriate: mix revision vs mastering correction"
  ],

  messages: applyMessagePreset("default", {
    initial: "Complete this mastering lesson to master stem mastering techniques.",
    success: "Excellent! You can now master with grouped stems for enhanced control.",
    error: "Review the stem mastering concepts and try again.",
    alreadyCompleted: "You've mastered Stem Mastering. Ready for Lesson 9!"
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
