/**
 * Music Producer Lab - Lesson Configuration
 * Lesson: Vocals 4 - Pitch Correction & Tuning
 */

import { applyMessagePreset, buildHeroEyebrow } from "./config-presets.js";

export const lessonConfig = {
  lessonKey: "mpl-vocals-4-progress",
  lessonNumber: 4,
  lessonCategory: "Vocals",
  
  nextLessonUrl: "lesson-vocals-5.html",
  prevLessonUrl: "lesson-vocals-3.html",
  overviewUrl: "labs.html",
  
  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 4, categoryLabel: "Vocals" }),
    title: "Pitch Correction & Tuning:",
    titleHighlight: "Auto-Tune, Melodyne & Natural Tuning",
    subtitle: "Use pitch correction tools for both natural and creative vocal effects. Master professional vocal production techniques for commercial-quality results."
  },
  
  exercise: {
    title: "Master Pitch Correction & Tuning",
    description: "Use pitch correction tools for both natural and creative vocal effects. This lesson covers the essential vocal production techniques used in professional recordings.",
    tip: "Vocals are usually the focal point of a track. Spend extra time getting them right - they make or break the production.",
    steps: [
      '<strong>Study vocal production theory</strong> — Understand the concepts and workflow.',
      '<strong>Analyze reference vocals</strong> — Listen to professional vocal productions in your genre.',
      '<strong>Apply the techniques</strong> — Practice the specific vocal processing methods.',
      '<strong>Critical listening</strong> — Compare your results to professional standards.',
      '<strong>Iterate and refine</strong> — Make adjustments based on what you hear.',
      'Complete when you understand the practical application.'
    ]
  },
  
  theory: {
    sections: [
      {
        title: 'Pitch Correction Technology: Auto-Tune, Melodyne, and Manual Tuning',
        content: `
**Why Pitch Correction?**
Even professional singers produce slightly out-of-tune notes due to:
- Performance anxiety
- Fatigue
- Complex melodic leaps
- Stylistic vibrato or bends that drift

Pitch correction makes the decision: fix to accurate pitch (corrective) OR exaggerate to musical effect (creative/robotic).

**Auto-Tune (Antares)**
Real-time pitch correction—corrects pitch as the signal passes through, before it reaches the output:
- **Retune Speed:** 0 = instant (robotic "T-Pain" effect). 50–100ms = natural-sounding correction.
- **Key and Scale:** Set to song key to avoid correcting to wrong notes.
- **Humanize:** Reduces correction on longer sustained notes to preserve natural vibrato.
- **Flex-Tune:** Only corrects notes that are measurably wrong, leaves intentional bends alone.

**Melodyne (Celemony)**
Non-destructive offline pitch editor—works on recordings after capture:
- View every note as a "blob" in a piano roll-like interface
- **DNA (Direct Note Access):** Edit individual notes in chords without affecting others
- Move notes up/down by cents or semitones
- Adjust pitch modulation (vibrato), formants independently of pitch
- Non-destructive: original audio is always preserved

**Auto-Tune vs. Melodyne**
| Feature | Auto-Tune | Melodyne |
|---------|-----------|----------|
| Mode | Real-time or manual | Offline (audio transferred in) |
| Speed | Faster workflow | More control |
| Best for | Light correction or creative effect | Surgical, transparent correction |
| Polyphonic | Limited | Full DNA technology |
| Creative use | Robot vocals, heavy correction | Natural transparent tuning |

**Natural Tuning Approach**
Before reaching for plugins, try:
1. **Re-record:** Sometimes the best "fix" is another take with fresh ears
2. **Piano reference:** Have singer practice the melody against piano before tracking
3. **Comping:** Combine multiple takes—the best pitch often comes from different takes
4. **Melody simplification:** Arrange the melody to avoid problem intervals for the specific singer
        `
      },
      {
        title: 'Workflow: When and How Much Pitch Correction to Use',
        content: `
**Corrective vs. Creative Pitch Correction**
- **Corrective:** Fix actual pitch errors. Listener should not hear correction—it should be invisible. Target: sounds like a better take, not like a robot.
- **Creative:** Deliberately audible correction as an effect. T-Pain, Kanye (808s & Heartbreak), Bon Iver (Woods), Cher (Believe). This is an artistic choice, not a mistake.

**Setting Retune Speed for Different Styles**
- **Very fast (0–10ms):** Robotic, EDM vocals, creative effect
- **Fast (10–30ms):** Pop, country, R&B — barely noticeable on sustained notes
- **Medium (30–80ms):** Most natural. Good for rock and jazz where slight human variation is desired
- **Slow (100+ms):** Only catches large pitch errors; leaves vibrato and expression intact

**Formant Correction**
Shifting pitch without formant correction creates the "chipmunk" (pitch up) or "monster" (pitch down) artifact. Modern tools (Melodyne, Celemony, Auto-Tune Pro) handle formants automatically. When manually shifting in a non-vocal-aware tool, use formant correction at the same ratio as pitch shift.

**Transparency Checklist**
After applying pitch correction:
- [ ] Solo the vocal — does it sound natural or processed?
- [ ] Listen to transitions between corrected and uncorrected notes (no jumps in tone?)
- [ ] Check vibrato — is it preserved or flattened to a drone?
- [ ] Listen to the final mix — correction sounds less obvious in context
- [ ] Compare A/B (bypass) — is the correction actually improving or just changing?

**Genre Norms**
- **Pop:** Heavy correction standard. Autotune almost always on.
- **Country:** Moderate. Natural imperfection valued; heavy correction sounds out-of-genre.
- **R&B/Hip-Hop:** Wide range—from transparent to deliberately robotic.
- **Rock/Metal:** Minimal or none. Slight imperfection = authenticity.
- **Jazz:** Rarely used. Pitch inflection is the artistry.
        `
      }
    ]
  },
  
  learningObjectives: [
    "Master professional vocal production techniques",
    "Understand the complete vocal workflow from recording to mixing",
    "Apply genre-specific vocal processing approaches",
    "Develop critical listening skills for vocal production",
    "Create commercial-quality vocal recordings"
  ],
  
  messages: applyMessagePreset("default", {
    initial: "Complete this vocal production lesson to advance.",
    success: "Excellent! You've mastered Pitch Correction & Tuning. Your vocal productions are pro-level!",
    error: "Review the vocal production concepts and try again.",
    alreadyCompleted: "You've completed this vocal technique. Keep refining your skills!"
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
