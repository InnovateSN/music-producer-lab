/**
 * Music Producer Lab - Lesson Configuration
 * Lesson: Arrangement 4 - The 5 Elements of Arrangement
 * 
 * This lesson teaches Bobby Owsinski's arrangement framework:
 * Foundation, Pad, Rhythm, Lead, and Fills.
 */

import { applyMessagePreset, buildHeroEyebrow } from "./config-presets.js";

export const lessonConfig = {
  // ====================
  // LESSON METADATA
  // ====================
  lessonKey: "mpl-arrangement-4-progress",
  lessonNumber: 4,
  lessonCategory: "Arrangement",
  depthLevel: 3,
  
  // ====================
  // NAVIGATION
  // ====================
  nextLessonUrl: "lesson-arrangement-5.html",
  prevLessonUrl: "lesson-arrangement-3.html",
  overviewUrl: "labs.html",
  
  // ====================
  // HERO SECTION
  // ====================
  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 4, categoryLabel: "Arrangement" }),
    title: "The 5 Elements of",
    titleHighlight: "Arrangement",
    subtitle: "Learn <strong>Bobby Owsinski's legendary framework</strong> for professional arrangements. Master the <strong>5 essential elements</strong>—Foundation, Pad, Rhythm, Lead, and Fills."
  },
  
  // ====================
  // THE 5 ELEMENTS
  // ====================
  elements: [
    {
      name: "Foundation",
      icon: '<img src="images/speakerwave.png" alt="🔊" style="width: 1.5em;">',
      color: "#e17055",
      description: "The low-end elements that ground your song. Usually bass and drums working together.",
      examples: ["Kick + Bass", "808", "Drums + Synth Bass", "Upright Bass + Drums"],
      purpose: "Anchor the track harmonically and rhythmically",
      frequencyRange: "Sub-bass to low-mids (20Hz-300Hz)"
    },
    {
      name: "Pad",
      icon: "☁️",
      color: "#a29bfe",
      description: "Sustained elements that provide harmonic context and fill the mid-range.",
      examples: ["Synth Pad", "Strings", "Organ", "Electric Piano", "Choir"],
      purpose: "Create warmth and harmonic bed for other elements",
      frequencyRange: "Low-mids to high-mids (200Hz-4kHz)"
    },
    {
      name: "Rhythm",
      icon: "🎸",
      color: "#fdcb6e",
      description: "Elements that add rhythmic interest and forward motion.",
      examples: ["Rhythm Guitar", "Synth Arpeggios", "Percussion", "Piano Comping"],
      purpose: "Add motion and groove beyond the drums",
      frequencyRange: "Mids (300Hz-5kHz)"
    },
    {
      name: "Lead",
      icon: "🎤",
      color: "#00cec9",
      description: "The main melodic element that listeners focus on.",
      examples: ["Vocals", "Lead Synth", "Guitar Solo", "Saxophone", "Whistle"],
      purpose: "Carry the melody and focal point of the track",
      frequencyRange: "Mids to highs (300Hz-8kHz)"
    },
    {
      name: "Fills",
      icon: "✨",
      color: "#fd79a8",
      description: "Short, attention-grabbing elements in gaps or transitions.",
      examples: ["Drum Fills", "Vocal Ad-libs", "FX Sweeps", "Guitar Licks", "One-shots"],
      purpose: "Add interest and ear candy without competing with lead",
      frequencyRange: "Variable (based on fill type)"
    }
  ],
  
  // ====================
  // THE GOLDEN RULE
  // ====================
  goldenRule: {
    maxElements: 5,
    recommendedElements: 4,
    reasoning: "More than 4-5 simultaneous elements creates frequency clashing and muddiness. Professional producers know: less is more."
  },
  
  // ====================
  // SECTION EXAMPLES
  // ====================
  sectionExamples: [
    { section: "Intro", elements: ["Foundation (light)", "Pad"], count: 2 },
    { section: "Verse", elements: ["Foundation", "Pad", "Lead (Vocals)"], count: 3 },
    { section: "Chorus", elements: ["Foundation", "Pad", "Rhythm", "Lead"], count: 4 },
    { section: "Drop", elements: ["Foundation (heavy)", "Rhythm", "Lead", "Fills"], count: 4 }
  ],
  
  // ====================
  // EXERCISE
  // ====================
  exercise: {
    title: "Build an Arrangement with the 5 Elements",
    description: "Use the interactive builder to understand how elements combine. Keep under 5 elements for clarity!",
    tip: "Start with Foundation, add elements one by one, and notice how the 'fullness' changes.",
    validation: {
      minElementsCombined: 3, // User must try at least 3 elements together
      maxBeforeWarning: 5
    }
  },
  
  // ====================
  // MESSAGES
  // ====================
  messages: applyMessagePreset("default", {
    initial: "Experiment with the 5 elements to understand how they combine.",
    success: "🎉 You understand the 5 elements! Now you can build clear, professional arrangements.",
    error: "Try combining more elements to see how they interact.",
    alreadyCompleted: "You've mastered the 5 elements framework!"
  }),
  
  // ====================
  // MODE FLAGS
  // ====================
  mode: {
    type: "interactive",
    sandbox: true,
    showTargetHint: false,
    enablePresets: false,
    enableExport: false
  },

  // ====================
  // THEORY CONTENT
  // ====================
  theory: {
    sections: [
      {
        title: "Bobby Owsinski's 5-Element Framework",
        content: `
**The Professional Arrangement Secret:**
Legendary mixing engineer Bobby Owsinski analyzed thousands of hit records and discovered a pattern: the best arrangements consistently use 4-5 distinct sonic elements working together. More than 5 elements creates mud and confusion. Fewer than 4 feels empty and amateur. This isn't coincidence—it's based on how human hearing processes layered sounds.

**Why This Framework Matters:**
Amateur producers add sounds randomly: "This synth sounds cool, let's add it." Professional producers think in elements: "I need a pad to fill the mids, a lead for focus, and a rhythm element for movement." The difference is intentionality. When you understand elements, you stop cluttering tracks with redundant layers and start building clear, powerful arrangements.

**The Frequency and Role Relationship:**
Each element occupies a specific frequency range AND serves a specific musical purpose. This dual organization (frequency + role) prevents elements from fighting for the same sonic space while ensuring each part of the arrangement has a clear job.

**The Human Hearing Limitation:**
Your ears can consciously focus on about 3-4 distinct elements simultaneously. Anything beyond that blurs into texture. Great arrangements respect this limitation—they ensure no more than 4-5 clear elements are playing at once, allowing listeners to perceive each layer without cognitive overload.

**Real-World Application:**
Pull up any professional pop, EDM, or rock track. Solo each instrument and categorize it: Foundation (kick + bass), Pad (synth pad or strings), Rhythm (guitar or arpeggio), Lead (vocals or lead synth), Fills (effects, risers, hits). You'll rarely find more than 5 elements playing simultaneously, even in dense productions. When choruses feel "full," it's not because of 20 layers—it's because 4-5 well-chosen elements fill the complete frequency spectrum perfectly.
        `
      },
      {
        title: "The 5 Elements Explained in Detail",
        content: `
**1. Foundation (20Hz-300Hz - Sub-bass to Low-mids)**
The foundation is your low-end anchor—typically kick drum and bass working together. These elements provide:
- **Physical impact**: You feel foundation elements in your chest
- **Harmonic root**: Bass defines the chord progression's root notes
- **Rhythmic pulse**: Kick creates the primary rhythmic anchor

*Examples:* Kick + 808 (trap), Kick + synth bass (EDM), Kick + electric bass (rock), Drum kit + upright bass (jazz)

*Common Mistake:* Overcrowding the low-end with multiple bass sounds. You can only have ONE dominant bass element—choose kick OR bass to lead, then support with the other.

**2. Pad (200Hz-4kHz - Low-mids to High-mids)**
Pads provide sustained harmonic context—the "bed" other elements sit on. They:
- **Fill frequency gaps**: Pads occupy mids without cluttering them
- **Create atmosphere**: Emotional tone often comes from pad choice
- **Support harmony**: Pads typically play full chords, not melodies

*Examples:* Synth pads (EDM), string sections (pop), electric piano (R&B), organ (gospel), choir vocals (cinematic)

*Common Mistake:* Using pads that are too loud or too bright. Pads should be felt more than noticed—they support, not dominate.

**3. Rhythm (300Hz-5kHz - Mids)**
Rhythm elements add motion and groove beyond the basic drum pattern. They:
- **Create forward momentum**: Repeated patterns drive the track forward
- **Add texture**: Rhythmic patterns create interest and complexity
- **Support harmony rhythmically**: Chords played rhythmically, not sustained

*Examples:* Rhythm guitar (rock), synth arpeggios (EDM), piano comping (jazz), marimba patterns (world), hi-hats and shakers (all genres)

*Common Mistake:* Confusing rhythm elements with lead melodies. Rhythm elements repeat consistently; leads vary and evolve.

**4. Lead (300Hz-8kHz - Mids to Highs)**
The lead is what listeners consciously focus on—the main melody or vocal. Leads:
- **Carry the main melody**: The part people sing along to
- **Command attention**: Leads should be the loudest, clearest element
- **Vary throughout sections**: Unlike rhythm elements, leads change frequently

*Examples:* Lead vocals (pop), lead guitar (rock), saxophone solo (jazz), synth lead (EDM), rap vocals (hip-hop)

*Common Mistake:* Having multiple competing leads. Only ONE lead at a time—solos and vocals should trade off, never fight for attention.

**5. Fills (Full Spectrum - 50Hz-15kHz)**
Fills are transitional elements that add excitement and signal changes. They:
- **Prevent monotony**: Break up repetitive patterns
- **Signal transitions**: Announce upcoming section changes
- **Add ear candy**: Small details that reward repeated listening

*Examples:* Riser sweeps (EDM), snare rolls (all genres), vocal ad-libs (R&B), guitar licks (rock), reverse cymbals (pop)

*Common Mistake:* Overusing fills. They're called "fills" because they fill gaps—use sparingly or they lose impact.
        `
      },
      {
        title: "Applying the 5 Elements in Your DAW",
        content: `
**The Element Organization Workflow:**

**Step 1: Create Separate Element Folders**
In your DAW, create 5 color-coded track folders:
- 🔴 Foundation (Red) - Kick, bass, sub
- 🔵 Pad (Blue) - Synth pads, strings, atmospheres
- 🟡 Rhythm (Yellow) - Guitars, arpeggios, percussion
- 🟢 Lead (Green) - Vocals, lead synths, solos
- 🟣 Fills (Purple) - Risers, effects, transitions

**Step 2: Assign Every Sound to an Element**
Before adding any sound, ask: "Which element is this?" If you can't answer, you probably don't need it. This prevents the common mistake of adding sounds just because they're cool.

**Step 3: The 4-5 Element Rule Per Section**
In any given section (verse, chorus, etc.), use 4-5 elements maximum:

*Example Verse:*
- Foundation: Kick + Bass ✅
- Pad: Subtle synth pad ✅
- Rhythm: Hi-hats ✅
- Lead: Vocals ✅
- Fills: None (verses are typically sparse)
= 4 elements

*Example Chorus:*
- Foundation: Kick + Bass ✅
- Pad: Lush string section ✅
- Rhythm: Strummed guitar ✅
- Lead: Doubled vocals ✅
- Fills: Occasional risers ✅
= 5 elements

Notice how the chorus feels "bigger" than the verse not because it has 10 more layers, but because it uses one additional element (fills) plus slightly fuller versions of existing elements.

**Step 4: Build Sections by Adding Elements**
Start minimal, then add elements progressively:

*Intro:* Foundation only (kick + bass)
*Verse 1:* Foundation + Rhythm + Lead (3 elements)
*Chorus 1:* Foundation + Pad + Rhythm + Lead (4 elements)
*Verse 2:* Foundation + Pad + Rhythm + Lead (same as chorus but different arrangement)
*Chorus 2:* Foundation + Pad + Rhythm + Lead + Fills (5 elements - biggest section)

**Step 5: The Solo Check**
Solo each element individually and ask:
- Does it serve a clear purpose?
- Does it occupy a unique frequency range?
- Would the song lose something important without it?

If you answer "no" to any question, consider removing that element.

**Common DAW Mistakes:**

**Mistake 1: Too Many Foundation Elements**
Don't run kick + bass + sub-bass + 808 simultaneously. Choose ONE primary low-end element.

**Mistake 2: Pad vs Rhythm Confusion**
Sustained chords = Pad. Repeated rhythmic chords = Rhythm. Don't put both if they occupy the same frequency range.

**Mistake 3: Multiple Leads Fighting**
Vocals + lead synth + guitar solo all at once = chaos. Leads take turns, they don't share the spotlight.

**Mistake 4: Fills as Constant Elements**
Fills should appear 10-20% of the time, not constantly. Overuse destroys their impact.

**Pro Tip - The Subtraction Exercise:**
Take a dense arrangement you're working on. Mute tracks until you're down to exactly 5 elements. Play it. Often, the "stripped down" version sounds clearer and more professional than the 20-layer version. This is Bobby Owsinski's framework proving itself—less is more, when each element has a clear purpose.

**Genre Variations:**
- **EDM:** Heavy focus on Foundation (massive bass) + Lead (catchy synth hook)
- **Pop:** Lead vocals dominate, everything else supports
- **Rock:** Rhythm elements (guitars) often take priority over pads
- **Hip-Hop:** Foundation (808 bass + drums) and Lead (vocals) are essential, other elements come and go

But regardless of genre, the principle holds: 4-5 clear elements, each with a distinct purpose and frequency range. Master this, and your arrangements will instantly sound more professional and polished.
        `
      }
    ]
  },

  // ====================
  // LEARNING OBJECTIVES
  // ====================
  learningObjectives: [
    "Identify the 5 arrangement elements: Foundation, Pad, Rhythm, Lead, Fills",
    "Understand the purpose of each element in a mix",
    "Apply the 4-5 element rule for clear arrangements",
    "Know which elements to use in different sections"
  ],
  
  // ====================
  // SOURCE ATTRIBUTION
  // ====================
  source: {
    author: "Bobby Owsinski",
    reference: "The Mixing Engineer's Handbook",
    concept: "5 Elements of a Great Arrangement"
  }
};

if (typeof window !== 'undefined') {
  window.LESSON_CONFIG = lessonConfig;
}
