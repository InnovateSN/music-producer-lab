/**
 * Music Producer Lab - Lesson Configuration
 * Lesson: Arrangement 10 - Call and Response
 *
 * This lesson teaches the call-and-response technique—a fundamental musical
 * conversation where one element "asks" and another "answers."
 */

import { applyMessagePreset, buildHeroEyebrow, buildLessonQualityPreset } from "./config-presets.js";

const lessonQualityPreset = buildLessonQualityPreset({
  lessonCategory: "Arrangement",

  progression: {
    difficulty: "intermediate",
    prerequisites: ["arrangement-9","arrangement-8"],
    outcomes: ["Completare gli obiettivi pratici di arrangement-10","Consolidare competenze intermediate nel modulo arrangement"]
  },
  lessonNumber: 10
});

export const lessonConfig = {
  // ====================
  // LESSON METADATA
  // ====================
  lessonKey: "mpl-arrangement-10-progress",
  lessonNumber: 10,
  lessonCategory: "Arrangement",

  reviewMetadata: {
    ...lessonQualityPreset.reviewMetadata
  },
  depthLevel: 3,

  // ====================
  // NAVIGATION
  // ====================
  nextLessonUrl: "lesson-arrangement-11.html",
  prevLessonUrl: "lesson-arrangement-9.html",
  overviewUrl: "labs.html",

  // ====================
  // HERO SECTION
  // ====================
  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 10, categoryLabel: "Arrangement" }),
    title: "Call and Response:",
    titleHighlight: "Musical Conversation",
    subtitle: "Master the <strong>call-and-response</strong> technique. Learn how elements <strong>talk to each other</strong>, creating engaging musical dialogues. This ancient technique appears in blues, jazz, gospel, hip-hop, and EDM."
  },

  // ====================
  // EXERCISE INFO
  // ====================
  exercise: {
    title: "Create a Call-and-Response Arrangement",
    description: "Build an arrangement where instruments <strong>answer each other</strong>. One element plays a phrase (the call), then another responds (the response). This creates <strong>musical conversation</strong> and keeps the listener engaged.",
    tip: "Think of it like a conversation: Person A asks a question, Person B answers. In music: Lead plays 2 bars, response element plays 2 bars. The response should complement or answer the call, not just copy it.",
    steps: [
      { text: "<strong>Create the call</strong> - Lead melody or vocal phrase (2-4 bars)" },
      { text: "<strong>Create the response</strong> - Different instrument answers (2-4 bars)" },
      { text: "<strong>Alternate between call and response</strong> - Create a dialogue" },
      { text: "<strong>Vary the intensity</strong> - Responses can agree, argue, or build" },
      { text: "<strong>Use in different sections</strong> - Verse, chorus, or breakdown" },
      { text: "<strong>Try overlapping</strong> - Advanced: response starts before call finishes" }
    ]
  },

  // ====================
  // CALL-AND-RESPONSE PATTERNS
  // ====================
  patterns: [
    {
      name: "2-Bar Exchange",
      icon: "💬",
      structure: "A-A | B-B",
      description: "Classic pattern: call for 2 bars, response for 2 bars.",
      examples: ["Blues guitar licks", "Gospel vocals", "Jazz horns"],
      usage: "Most common, easy to follow"
    },
    {
      name: "4-Bar Exchange",
      icon: "🗣️",
      structure: "A-A-A-A | B-B-B-B",
      description: "Longer phrases for more development.",
      examples: ["Verse-chorus vocals", "EDM build/drop", "Hip-hop verse/ad-lib"],
      usage: "Builds more tension"
    },
    {
      name: "Question-Answer",
      icon: "❓",
      structure: "A-up? | B-down.",
      description: "Call ends on high note (question), response resolves down (answer).",
      examples: ["Gospel call-response", "Classical antecedent-consequent"],
      usage: "Creates strong resolution"
    },
    {
      name: "Overlapping",
      icon: "🔗",
      structure: "A-A-AB | B-B-BA",
      description: "Response begins before call finishes, creating continuous dialogue.",
      examples: ["Jazz improvisation", "Gospel choir", "EDM vocal chops"],
      usage: "Advanced, creates urgency"
    }
  ],

  // ====================
  // INSTRUMENT PAIRINGS
  // ====================
  instrumentPairings: [
    { call: "Vocals", response: "Guitar licks", genre: "Blues, Rock" },
    { call: "Lead synth", response: "Vocal chops", genre: "EDM, House" },
    { call: "Rapper", response: "Hype man ad-libs", genre: "Hip-Hop" },
    { call: "Main vocal", response: "Backing vocals", genre: "Gospel, Pop" },
    { call: "Horn section", response: "Piano", genre: "Jazz, Funk" },
    { call: "Melody", response: "Bass line", genre: "Funk, Disco" }
  ],

  // ====================
  // VALIDATION
  // ====================
  validation: {
    type: "call-and-response",
    minExchanges: 2, // At least 2 call-response pairs
    requireDistinctElements: true, // Call and response must be different instruments
    maxGapBetween: 2, // Max 2 beats of silence between call and response
    recommendedLength: { call: "2-4 bars", response: "2-4 bars" }
  },

  // ====================
  // MESSAGES
  // ====================
  messages: applyMessagePreset("arrangement", {
    initial: "Create a call-and-response dialogue between two musical elements!",
    success: "🎭 Beautiful musical conversation! Your call-and-response creates engaging flow.",
    error: "Make sure you have clear call and response sections with different elements.",
    alreadyCompleted: "You've mastered call-and-response! Try more complex overlapping patterns."
  }),

  // ====================
  // MODE FLAGS
  // ====================
  mode: {
    type: "structure-builder",
    sandbox: false,
    showTimeline: true,
    highlightPhrases: true,
    showCallResponseIndicator: true
  },

  // ====================
  // LEARNING OBJECTIVES
  // ====================
  learningObjectives: [
    "Understand the call-and-response technique and its musical origins",
    "Create effective musical dialogues between instruments",
    "Apply 2-bar and 4-bar exchange patterns",
    "Use question-answer phrasing for strong resolution",
    "Implement call-and-response in different genres and contexts"
  ],

  // ====================
  // HISTORICAL CONTEXT
  // ====================
  context: {
    origins: "African musical traditions, gospel, blues",
    modernUse: "Hip-hop ad-libs, EDM vocal chops, pop backing vocals",
    examples: ["Ray Charles - What'd I Say", "Kanye West - All of the Lights", "Daft Punk - Around the World"]
  },

  // ====================
  // THEORY CONTENT
  // ====================
  theory: {
    sections: [
      {
        title: "Why Call-and-Response Creates Engaging Arrangements",
        content: `
**The Problem with Static Arrangements:**
Many amateur tracks feel flat because every element plays continuously without interaction. It's like a room full of people talking at once—nobody's actually having a conversation. Call-and-response solves this by creating **musical dialogue**, where elements "speak" to each other, creating engagement and forward momentum.

**The Ancient Technique That Never Gets Old:**
Call-and-response is one of the oldest musical techniques, originating in African music and work songs, where a leader would "call" and the group would "respond." This pattern is hardwired into human communication—we naturally expect responses after statements. When you apply this to arrangement, your music feels instinctively natural and compelling.

**Why It Works Across Every Genre:**
- **Blues:** Guitar lick → Vocal response → Guitar lick → Vocal response
- **Gospel:** Lead vocal line → Choir response → Lead → Choir
- **Jazz:** Trumpet solo phrase → Piano response → Trumpet → Piano
- **Hip-Hop:** Main rapper verse → Hype man ad-libs → Rapper → Ad-libs
- **EDM:** Lead synth phrase → Vocal chop response → Lead → Chops
- **Pop:** Lead vocal line → Backing vocal harmonies → Lead → Harmonies

**Musical Conversation Creates Space:**
Instead of crowding the arrangement with constant sound, call-and-response creates natural breathing room. The "call" element plays for 2-4 bars, then rests while the "response" element answers. This back-and-forth keeps the listener engaged without overwhelming them.

**Real-World Impact:**
Listen to Ray Charles' "What'd I Say"—the entire song is built on call-and-response between Ray and the backing vocalists. Or Kanye West's "All of the Lights"—the vocal chops respond to the main vocal lines throughout. Daft Punk's "Around the World"—the bassline calls, the vocoder responds, constantly trading phrases.
        `
      },
      {
        title: "The Four Call-and-Response Patterns",
        content: `
**1. The 2-Bar Exchange (Most Common):**
The classic pattern: one element plays for 2 bars, another responds for 2 bars, creating a 4-bar cycle.

\`\`\`
Bars:     | 1-2 (Call)  | 3-4 (Response) | 5-6 (Call)  | 7-8 (Response) |
Guitar:   | ■ ■ ■ ■     |                | ■ ■ ■ ■     |                |
Vocal:    |             | ■ ■ ■ ■        |             | ■ ■ ■ ■        |
\`\`\`

**When to Use:** Blues, gospel, pop verses, funk grooves
**Why It Works:** Long enough to develop a complete musical idea, short enough to maintain dialogue momentum
**Example:** Classic blues structure—guitar plays riff, vocalist sings response, repeat

---

**2. The 4-Bar Exchange (Extended Conversation):**
Longer phrases allow for more development and build more tension before the response.

\`\`\`
Bars:     | 1-4 (Call)      | 5-8 (Response)  | 9-12 (Call)     | 13-16 (Response) |
Lead:     | ■ ■ ■ ■ ■ ■ ■ ■ |                 | ■ ■ ■ ■ ■ ■ ■ ■ |                  |
Response: |                 | ■ ■ ■ ■ ■ ■ ■ ■ |                 | ■ ■ ■ ■ ■ ■ ■ ■  |
\`\`\`

**When to Use:** Verse-chorus transitions, EDM build-drop, hip-hop verse-hook
**Why It Works:** Creates stronger anticipation for the response, allows full musical statements
**Example:** Hip-hop verse (4 bars rapper) → ad-libs/backing vocal response (4 bars) → repeat

---

**3. The Question-Answer Pattern (Tension-Resolution):**
The "call" ends on an unresolved note (question), the "response" resolves down (answer). This creates harmonic tension and release.

\`\`\`
Call (Question):    C - D - E - F - G↑  (ends high, unresolved)
Response (Answer):  G - F - E - D - C↓  (resolves low, home)
\`\`\`

**When to Use:** Classical music (antecedent-consequent), gospel, jazz ballads, pop hooks
**Why It Works:** The unresolved call creates tension, the resolved response provides satisfaction
**Example:** Gospel lead vocal sings phrase ending high → choir responds resolving down to tonic

---

**4. The Overlapping Pattern (Advanced/Urgent):**
The response begins before the call finishes, creating continuous, urgent dialogue. More complex but incredibly engaging.

\`\`\`
Bars:     | 1   | 2   | 3   | 4   | 5   | 6   | 7   | 8   |
Call:     | ■ ■ | ■ ■ | ■   |     |     | ■ ■ | ■ ■ | ■   |
Response: |     |     | ■ ■ | ■ ■ | ■   |     |     | ■ ■ |
\`\`\`

**When to Use:** Jazz improvisation, gospel choir overlaps, EDM vocal chops, energetic sections
**Why It Works:** Creates urgency, complexity, and continuous forward motion
**Example:** Gospel choir where lead and choir overlap, answering each other mid-phrase

---

**Choosing Your Pattern:**

- **Slow, intimate song?** → 4-bar exchanges for development
- **High-energy track?** → 2-bar exchanges or overlapping for momentum
- **Need emotional resolution?** → Question-answer pattern
- **Complex, sophisticated vibe?** → Overlapping with 3+ elements in conversation
        `
      },
      {
        title: "Applying Call-and-Response in Modern Production",
        content: `
**Instrument Pairing by Genre:**

**Blues/Rock:**
- **Call:** Lead vocal line
- **Response:** Guitar lick or organ riff
- *Why:* Creates space for both vocals and lead instruments to shine

**Gospel/Soul:**
- **Call:** Lead vocalist
- **Response:** Backing vocals or choir
- *Why:* Emphasizes community and collective participation

**Hip-Hop:**
- **Call:** Main rapper verse
- **Response:** Hype man ad-libs ("Yeah!", "Uh!", "Let's go!")
- *Why:* Adds energy, fills space, creates call-back moment for crowd

**EDM/House:**
- **Call:** Lead synth melody (2-4 bar phrase)
- **Response:** Vocal chops or stabs
- *Why:* Adds rhythmic interest, prevents melodic monotony

**Jazz:**
- **Call:** Horn section riff
- **Response:** Piano or guitar comping
- *Why:* Creates conversational improvisation, showcases soloists

**Funk/Disco:**
- **Call:** Main melody or vocal hook
- **Response:** Bass line or rhythm guitar stabs
- *Why:* Locks in the groove, creates rhythmic dialogue

---

**Practical Production Tips:**

**1. Leave Space for the Response:**
Don't fill every bar. If your call is 2 bars, leave the next 2 bars mostly empty for the response element. Resist the urge to layer everything simultaneously.

**2. Pan Call and Response for Separation:**
- **Call:** Center or 30% left
- **Response:** Center or 30% right
- *Result:* Clear stereo distinction makes the dialogue obvious

**3. Use Contrasting Timbres:**
Pair elements with different sonic character:
- Smooth vocal call → Sharp synth response
- Deep bass call → Bright hi-hat response
- Soft pad call → Punchy drum response

**4. Volume Balance Creates Hierarchy:**
- **Call:** -3dB to -6dB (slightly quieter or equal)
- **Response:** 0dB (equal or slightly louder)
- *Why:* The response should feel like an "answer" not an echo

**5. Automate to Emphasize the Conversation:**
Use automation to "duck" the call element when the response plays, and vice versa. This creates clear separation even when elements overlap slightly.

---

**Common Mistakes to Avoid:**

**❌ Both Elements Playing Constantly:**
If both the "call" and "response" play at the same time throughout, you've lost the conversation. You just have two simultaneous melodies competing.

**❌ Identical Call and Response:**
If the response is just a copy of the call, it's not a conversation—it's an echo. The response should complement or contrast, not duplicate.

**❌ Unbalanced Length:**
If your call is 4 bars and response is 1 bar, the conversation feels lopsided. Keep them roughly equal (or use 4→2 if intentional for surprise).

**❌ Too Many Conversers:**
Having 3-4 elements all "responding" to each other simultaneously creates chaos, not dialogue. Stick to 2-3 maximum.

**❌ Ignoring Frequency Separation:**
If your call and response live in the same frequency range (both mid-range pads), they'll mask each other. Use frequency separation (call in mids, response in highs).

---

**Why This Matters for Your Arrangements:**

Call-and-response prevents "wall of sound" syndrome where everything plays all the time. It creates:
- **Space:** Natural breathing room in the arrangement
- **Interest:** Active listening as the brain follows the conversation
- **Structure:** Clear sectional organization (verse call-response, chorus call-response)
- **Memorability:** The dialogue pattern makes hooks catchier
- **Professional Sound:** Amateur tracks layer everything; pro tracks create interaction

**What's Next:**
In Lesson 11, you'll learn how to balance **repetition** (for catchiness) with **variation** (for interest), using the 80/20 rule to keep your call-and-response patterns familiar yet evolving.
        `
      }
    ]
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
