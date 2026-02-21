/**
 * Music Producer Lab - Lesson Configuration
 * Lesson: Mixing 15 - Masterclass: Complete Mix Project
 */

import { applyMessagePreset, buildHeroEyebrow, buildLessonQualityPreset } from "./config-presets.js";

const lessonQualityPreset = buildLessonQualityPreset({
  lessonCategory: "Mixing",
  lessonNumber: 15
});

export const lessonConfig = {
  lessonKey: "mpl-mixing-15-progress",
  lessonNumber: 15,
  lessonCategory: "Mixing",

  reviewMetadata: {
    ...lessonQualityPreset.reviewMetadata
  },

  nextLessonUrl: "lesson-mastering-1.html",
  prevLessonUrl: "lesson-mixing-14.html",
  overviewUrl: "labs.html",

  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 15, categoryLabel: "Mixing" }),
    title: "Masterclass: Complete Mix Project",
    titleHighlight: "From Raw Stems to Polished Mix",
    subtitle: "Apply everything from Lessons 1–14 in a complete, professional mixing workflow. Walk through session prep, processing order, quality control, and delivery—producing a release-ready mix with stems and documentation."
  },

  exercise: {
    title: "Complete a Full Mix from Start to Finish",
    description: "Execute a complete professional mixing workflow on your session, applying every technique from this course. You'll produce a final mix print, instrumental, acapella, and stems ready for mastering—with full documentation.",
    tip: "This is a marathon, not a sprint. Professional mixes take hours, sometimes days. Don't rush through this exercise—take breaks, reference frequently, and trust the process. The goal isn't speed; it's a finished mix you're proud of.",
    steps: [
      '<strong>Session prep: Load and organize</strong> — Start fresh or use "Mixing-14_ReferenceTracking". Save As: "Mixing-15_FinalMix". Review track naming (Lesson 10 conventions), color coding, and bus routing (Drums/Music/Vocals → Mix Bus → Master).',
      '<strong>Session prep: Gain staging check</strong> — Verify all tracks hit approximately <strong>-18 dBFS RMS</strong> (Lesson 2). Use clip gain or trim plugins to correct. Confirm no tracks are clipping before processing. Check that your Mix Bus peaks below <strong>-6 dBFS</strong> with all faders at unity.',
      '<strong>Session prep: Import references</strong> — Import 2–3 genre-appropriate references (Lesson 14) onto a dedicated Reference bus. Level-match using integrated LUFS. Set up rapid A/B switching. These will guide your entire mix.',
      '<strong>Phase 1: Static balance</strong> — Mute all processing. Set faders only. Create a rough balance where every element is audible and the vocal sits correctly for your genre (Lesson 13). This is your foundation—spend time here.',
      '<strong>Phase 2: Corrective EQ (subtractive)</strong> — Work through each track with surgical EQ: HPF on non-bass elements, cut mud (200–400 Hz), boxiness, harshness. Lesson 3 techniques. Goal: clean up problems before adding compression.',
      '<strong>Phase 3: Compression (control dynamics)</strong> — Apply compression to control dynamics: leveling compression on vocals (Lesson 12), transient shaping on drums (Lesson 6), consistency on bass. Don\'t over-compress—2–6 dB GR typical.',
      '<strong>Phase 4: Tone shaping EQ (additive)</strong> — Now add character: presence boosts on vocals (3–5 kHz), air (10–12 kHz), warmth on bass (80–120 Hz). Lesson 4 techniques. These are broad, musical moves.',
      '<strong>Phase 5: Effects (space and depth)</strong> — Set up reverb and delay returns (Lesson 7, 8). Apply to vocals, drums, melodic elements. Filter returns (HPF 200–400 Hz, LPF 6–10 kHz). Automate sends for throws (Lesson 11).',
      '<strong>Phase 6: Bus processing</strong> — Apply glue compression to buses (Lesson 10): Drum Bus (3–4 dB GR), Music Bus (2–3 dB GR), Vocal Bus (2–4 dB GR). Subtle EQ on buses for overall tone. Mix Bus compression: very gentle (1–2 dB GR max).',
      '<strong>Phase 7: Stereo and panning</strong> — Verify stereo placement: kick/bass/vocal centered, guitars/keys/pads spread (Lesson 9). Check mono compatibility—fold to mono and confirm nothing disappears. Adjust width for genre (Lesson 13).',
      '<strong>Phase 8: Automation pass</strong> — Automation brings the mix to life (Lesson 11): vocal rides for consistency, section lifts for energy (chorus +0.5–1 dB), FX throws for ear candy, mutes for cleanup. Smooth all curves.',
      '<strong>Phase 9: Reference check</strong> — A/B against your references (Lesson 14). Compare: low end, mids, highs, width, dynamics. Make targeted adjustments. Re-match levels after changes. Document what you adjusted and why.',
      '<strong>Quality control: Mono check</strong> — Fold to mono. Listen for: elements that disappear (phase issues), center elements that remain strong, overall balance shift. Fix any mono problems before proceeding.',
      '<strong>Quality control: Translation test</strong> — Export a rough bounce. Listen on headphones, phone speaker, car system (if possible), laptop speakers. Note issues: too much bass? Harsh highs? Vocal buried? Return to session and address.',
      '<strong>Quality control: Fresh ears check</strong> — Take a 15–30 minute break. Return with fresh ears and listen through without touching anything. Make notes. Then make final adjustments based on fresh perspective.',
      '<strong>Final export: Full mix print</strong> — Export full mix: <strong>24-bit WAV</strong>, session sample rate, Mix Bus output. Confirm peaks below <strong>-3 dBFS</strong> (headroom for mastering). Name: "SongTitle_FullMix_v1.wav".',
      '<strong>Final export: Instrumental</strong> — Mute all vocal tracks/buses. Export: "SongTitle_Instrumental_v1.wav". Same specs as full mix.',
      '<strong>Final export: Acapella</strong> — Solo vocal bus only (dry vocals, no effects returns unless you want them). Export: "SongTitle_Acapella_v1.wav".',
      '<strong>Final export: Stems</strong> — Export individual stems: Drums stem (Drum Bus output), Bass stem (Bass Bus output), Music stem (Music Bus output), Vocal stem (Vocal Bus output), FX stem (FX returns). Each stem: 24-bit WAV, same length, same start point.',
      '<strong>Documentation</strong> — Create a text file or notes document: session BPM, key, reference tracks used, any notes for mastering engineer (problem frequencies, intended loudness, genre context). Save alongside exports.'
    ]
  },

  theory: {
    sections: [
      {
        title: 'Session Preparation: The Foundation of Professional Mixing',
        content: `A professional mix starts before you touch any processing. Session preparation sets you up for efficiency and prevents problems later.

**Organization (Lesson 10 Review):**
- **Naming:** Use consistent prefixes (DRM-, BASS-, SYN-, VOX-, FX-)
- **Color coding:** Drums red, bass purple, synths blue, vocals green, FX yellow
- **Track order:** Group related tracks together (all drums, all vocals, etc.)
- **Bus routing:** Individual tracks → Group Buses → Mix Bus → Master

**Gain Staging (Lesson 2 Review):**
- **Individual tracks:** Peak around -18 dBFS RMS, never clipping
- **Buses:** Peak around -6 to -10 dBFS before processing
- **Mix Bus:** Peak below -6 dBFS during mixing (headroom for mastering)
- **Why it matters:** Proper gain staging ensures plugins operate in their sweet spot and prevents digital clipping

**Reference Import (Lesson 14 Review):**
- Import 2–3 references on a dedicated bus
- Level-match to your mix using integrated LUFS
- References bypass your Mix Bus—they're for comparison only
- A/B frequently throughout the entire mixing process

**Before You Start Processing:**
✅ All tracks named and color-coded
✅ Bus routing confirmed (Drums/Music/Vocals → Mix Bus)
✅ Gain staging verified (-18 dBFS RMS, no clipping)
✅ References imported and level-matched
✅ Session saved with descriptive name`
      },
      {
        title: 'Processing Order: Why Sequence Matters',
        content: `The order of operations in mixing isn't arbitrary. Each phase builds on the previous one. Skipping steps or doing them out of order creates problems that compound.

**The Professional Mixing Sequence:**

**1. Static Balance (Faders Only)**
- No processing yet—just faders and pans
- Goal: Every element audible, rough balance established
- Vocal position set for genre (forward for pop, integrated for rock)
- This reveals what actually needs processing

**2. Corrective EQ (Subtractive)**
- HPF on everything except bass/kick (Lesson 3)
- Cut problem frequencies: mud (200–400 Hz), boxiness, harshness
- Subtractive EQ before compression prevents boosted frequencies from triggering compressors excessively

**3. Compression (Dynamic Control)**
- Leveling compression on vocals (3:1–4:1, 4–8 dB GR)
- Transient shaping on drums (attack/release for punch or sustain)
- Consistency on bass
- Goal: Control dynamics so elements sit consistently

**4. Tone Shaping EQ (Additive)**
- Now add character: presence, air, warmth
- Additive EQ after compression shapes the controlled signal
- Broad, musical boosts—not surgical

**5. Effects (Space and Depth)**
- Reverb and delay on aux sends
- Filter effect returns (remove lows, tame highs)
- Automate sends for musical moments

**6. Bus Processing (Glue)**
- Light compression on group buses
- Subtle EQ for overall tone
- Mix Bus compression: very gentle (1–2 dB GR)

**7. Automation (Life and Movement)**
- Vocal rides, section energy, FX throws
- Automation makes the mix breathe and evolve

**Why This Order Works:**
Each step prepares the signal for the next. Corrective EQ cleans up before compression. Compression controls before additive EQ. Effects come after the dry signal is polished. Automation refines the processed mix. Skipping steps or reversing order creates compounding problems.`
      },
      {
        title: 'Phase-by-Phase Mixing Checklist',
        content: `Use this checklist during your mix. Work through each section systematically.

**DRUMS Checklist:**
✅ Kick: Punchy (80–100 Hz), click (2–5 kHz), no mud
✅ Snare: Body (200 Hz), crack (2–4 kHz), controlled ring
✅ Hi-hats: Present but not harsh, de-essed if needed
✅ Overheads/room: Supporting width, not overpowering
✅ Drum Bus: Glue compression (3–4 dB GR), punchy but not squashed
✅ Drum Bus to Mix Bus: Balanced against other elements

**BASS Checklist:**
✅ Sub frequencies present (40–80 Hz) but controlled
✅ Mid-bass clarity (80–200 Hz), no mud
✅ High-frequency content for speaker translation (if needed)
✅ Kick/bass relationship: Clear separation, sidechain if needed
✅ Mono below 100–150 Hz confirmed

**VOCALS Checklist:**
✅ HPF applied (80–120 Hz depending on voice)
✅ Corrective EQ: Mud, boxiness, harshness cut
✅ Compression: Leveling (3:1–4:1, 4–8 dB GR) + optional peak catcher
✅ De-esser: Sibilance controlled without lisping
✅ Tone EQ: Presence (3–5 kHz), air (10–12 kHz)
✅ Saturation: Subtle warmth, level-matched
✅ Effects: Reverb (short + long), delay (tempo-synced)
✅ Ducking on effects: Effects clear when vocal present
✅ Vocal level: Appropriate for genre
✅ Automation: Rides for consistency, throws for ear candy

**FX RETURNS Checklist:**
✅ All reverbs HPF'd (200–400 Hz)
✅ All delays filtered (HPF 400 Hz, LPF 4–6 kHz)
✅ Effect levels appropriate (supportive, not washing out dry signal)
✅ Automation on sends for musical moments

**MIX BUS Checklist:**
✅ Gentle compression (2:1, slow attack, 1–2 dB GR max)
✅ Subtle EQ if needed (±1–2 dB maximum)
✅ No brickwall limiting (leave that for mastering)
✅ Peaks below -6 dBFS (headroom for mastering)
✅ Level-matched A/B against references confirms balance`
      },
      {
        title: 'Quality Control: Testing Before Delivery',
        content: `Before calling a mix "done," run it through quality control. These tests catch problems before the client or mastering engineer does.

**Mono Compatibility Test (Lesson 9 Review):**
1. Insert a utility plugin on your Mix Bus set to mono
2. Play through the entire song (or key sections)
3. Listen for:
   - Elements that disappear (phase cancellation from stereo widening)
   - Elements that become too loud (out-of-phase content summing)
   - Overall balance shift
4. Fix any mono problems (reduce stereo widening, check phase, adjust levels)

**Translation Test (Multiple Systems):**
Export a quick bounce and listen on:
- **Headphones:** Detail check, effects, stereo image
- **Phone speaker:** Vocal clarity, bass representation (harmonics matter)
- **Car system:** Low end, overall balance, vocal presence
- **Laptop speakers:** Midrange balance, harshness check

Note issues and return to session to address. A great mix translates across all systems.

**Fresh Ears Test:**
1. Take a 15–30 minute break (completely away from audio)
2. Return and listen through without touching anything
3. First impressions are valuable—what jumps out as wrong?
4. Make notes, then address issues
5. Repeat if necessary

**Reference Check (Lesson 14 Review):**
Final A/B against your references:
- Does your mix sound like it belongs in the same genre?
- Is the low end in the same ballpark?
- Is the vocal position appropriate?
- Is the overall brightness/darkness similar?
- Do the dynamics feel right?

If you can answer "yes" to all of these, your mix is ready.

**Common Last-Minute Issues:**
- **Vocal too loud/quiet:** Re-check against references
- **Low end muddy:** Revisit 200–400 Hz cuts
- **Harsh highs:** Check 2–4 kHz, 6–8 kHz
- **Mix too wide/narrow:** Check mono compatibility, adjust width
- **Dynamics squashed:** Reduce bus/mix compression`
      },
      {
        title: 'Knowing When to Stop: Diminishing Returns and Decision Fatigue',
        content: `One of the hardest skills in mixing is knowing when a mix is "done." There's always something you could tweak—but at some point, changes become lateral moves rather than improvements.

**Signs Your Mix Is Done:**
- It sounds good on multiple playback systems
- It compares favorably to professional references
- Changes you make are tiny (under 0.5 dB, fractions of Q)
- You're changing things back to what they were before
- Fresh ears confirm it sounds right

**Signs You're Overworking:**
- You've been at it for hours without a break
- You can't remember why you made certain changes
- Everything sounds the same and you've lost perspective
- You're making changes because you feel you "should," not because you hear problems
- You've undone the same change 3+ times

**The "Fix vs Improve" Test:**
Ask yourself: "Am I fixing a problem, or am I just improving something that's already fine?"
- **Fixing:** There's a clear issue (vocal buried, kick muddy, harshness)
- **Improving:** It's fine, but maybe it could be slightly better?

If you're improving rather than fixing, you might be done. Move to quality control and export.

**Managing Ear Fatigue:**
- Take breaks every 45–60 minutes
- Mix at moderate volumes (conversation level)
- Reference frequently to reset your ears
- If you've been mixing for 4+ hours, consider stopping for the day

**The 90% Rule:**
Getting a mix to 90% takes most of the work. Getting from 90% to 100% takes as long again—with diminishing returns. Know when 90% is good enough for a draft, and when you need that last 10%.

**Version Control:**
Save versions regularly: _v1, _v2, _v3. If you've been tweaking for hours, compare against an earlier version. Sometimes v2 was better than v5.`
      },
      {
        title: 'Delivery: Export Specifications and Documentation',
        content: `Professional delivery means providing the mastering engineer (or client) with everything they need. This includes properly formatted files and clear documentation.

**Export Specifications:**

| Deliverable | Format | Bit Depth | Sample Rate | Peak Level |
|-------------|--------|-----------|-------------|------------|
| Full Mix | WAV | 24-bit | Session rate | ≤ -3 dBFS |
| Instrumental | WAV | 24-bit | Session rate | ≤ -3 dBFS |
| Acapella | WAV | 24-bit | Session rate | ≤ -6 dBFS |
| Stems | WAV | 24-bit | Session rate | ≤ -6 dBFS |

**Stem Export Guidelines:**
- All stems must be the same length and start at the same point
- Include processing (EQ, compression, saturation) on stems
- Do NOT include Mix Bus processing on individual stems
- Standard stems: Drums, Bass, Music/Synths, Vocals, FX
- Label clearly: "SongTitle_Drums_Stem.wav"

**Headroom for Mastering:**
Leave -3 to -6 dBFS peak headroom on your mix. The mastering engineer needs room to work. Don't slam a limiter on the Mix Bus—that's their job.

**Documentation to Include:**
Create a text file or PDF with:
- **Song title, artist, version number**
- **Session info:** BPM, key, sample rate
- **Reference tracks used:** What you compared against
- **Notes for mastering:** Any problem areas, intended loudness, genre context
- **Stem list:** What's included and what's in each stem
- **Contact info:** How to reach you with questions

**File Organization:**
```
/SongTitle_MixDelivery/
├── SongTitle_FullMix_v1.wav
├── SongTitle_Instrumental_v1.wav
├── SongTitle_Acapella_v1.wav
├── /Stems/
│   ├── SongTitle_Drums_Stem.wav
│   ├── SongTitle_Bass_Stem.wav
│   ├── SongTitle_Music_Stem.wav
│   ├── SongTitle_Vocals_Stem.wav
│   └── SongTitle_FX_Stem.wav
└── SongTitle_MixNotes.txt
```

**Final Checklist Before Delivery:**
✅ All files exported at correct specs (24-bit WAV)
✅ Headroom verified (peaks ≤ -3 dBFS on full mix)
✅ Stems same length and aligned
✅ Documentation complete
✅ Files organized and clearly named
✅ One final listen-through to confirm no export glitches`
      }
    ]
  },

  learningObjectives: [
    "Execute complete session preparation: organization, gain staging, reference import, and bus routing",
    "Apply the professional processing order: static balance → corrective EQ → compression → tone EQ → effects → bus processing → automation",
    "Use phase-by-phase checklists for drums, bass, vocals, effects, and mix bus to ensure thorough, consistent mixing",
    "Perform quality control: mono compatibility, translation tests, fresh ears check, and reference validation",
    "Deliver professional exports: full mix, instrumental, acapella, and stems with proper specifications and documentation"
  ],

  messages: applyMessagePreset("default", {
    initial: "This is the final mixing lesson. Apply everything you've learned to complete a professional mix.",
    success: "Congratulations! You've completed the Mixing Masterclass and produced a professional-quality mix with stems and documentation!",
    error: "Review the mixing workflow and try again.",
    alreadyCompleted: "You've completed the Mixing Masterclass. Your mixing skills are now at a professional level!"
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
