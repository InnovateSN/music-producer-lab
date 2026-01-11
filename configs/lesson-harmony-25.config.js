import { buildHeroEyebrow } from '../lesson-engine.js';

export const lessonConfig = {
  lessonKey: "mpl-harmony-25-progress",
  lessonNumber: 25,
  lessonCategory: "Harmony & Melody",

  nextLessonUrl: "lesson-harmony-26.html",
  prevLessonUrl: "lesson-harmony-24.html",
  overviewUrl: "labs.html",

  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 25, categoryLabel: "Harmony & Melody" }),
    title: "Blues Harmony:",
    titleHighlight: "12-Bar & Turnarounds",
    subtitle: "Master blues progressions, quick-change patterns, turnarounds, and substitutions. From Delta blues to bebop blues."
  },

  exercise: {
    title: "Program Blues Progressions",
    description: "The 12-bar blues is the foundation of blues, rock, jazz, and R&B. It follows a specific harmonic pattern: I7-I7-I7-I7-IV7-IV7-I7-I7-V7-IV7-I7-V7 (turnaround). Variations include quick-change blues, jazz blues with ii-V substitutions, and minor blues. Master this and you master a century of American music.",
    tip: "Blues uses dominant 7th chords on ALL chords (I7, IV7, V7), not just V7. This creates the characteristic bluesy sound.",
    steps: [
      '<strong>Basic 12-bar blues in C</strong> — C7(4 bars)-F7(2 bars)-C7(2 bars)-G7(1 bar)-F7(1 bar)-C7-G7(turnaround).',
      '<strong>Quick-change blues</strong> — Goes to IV7 in bar 2, then back to I7. C7-F7-C7-C7-F7-F7-C7-C7-G7-F7-C7-G7.',
      '<strong>Jazz blues</strong> — Add ii-V substitutions. C7-F7-C7-Gm7 C7-F7-Bb7-C7-Em7 A7-Dm7 G7-C7 A7-Dm7 G7.',
      '<strong>Turnaround</strong> — Last 2 bars: I7-VI7-ii7-V7 or I7-V7. Sets up repeat. C7-A7-Dm7-G7.',
      '<strong>Minor blues</strong> — Use minor chords: Cm7(4)-Fm7(2)-Cm7(2)-G7(1)-Fm7(1)-Cm7-G7.'
    ]
  },

  theory: {
    sections: [
      {
        title: 'Blues Harmony Structure',
        content: `
**12-Bar Blues Form (Basic):**

Bars 1-4: I7 (tonic)
Bars 5-6: IV7 (subdominant)
Bars 7-8: I7 (back to tonic)
Bar 9: V7 (dominant)
Bar 10: IV7 (subdominant)
Bar 11-12: I7 - V7 (tonic - turnaround)

**In C Major:**
C7 | C7 | C7 | C7 |
F7 | F7 | C7 | C7 |
G7 | F7 | C7 | G7 ||

**Why Dominant 7ths Throughout?**
- Creates bluesy, unresolved tension
- All chords "want" to resolve but don't
- Comes from blues scale (flat 3, flat 7)
- Standard in Delta blues, Chicago blues, rock

**Variations:**

**Quick-Change Blues:**
Bar 2 changes to IV7, then back to I7 in bar 3:
C7 | F7 | C7 | C7 |
F7 | F7 | C7 | C7 |
G7 | F7 | C7 | G7 ||

More harmonic movement, common in modern blues.

**Jazz Blues:**
Add ii-V substitutions and passing chords:
Cmaj7 | F7 | Cmaj7 | Cm7 F7 |
F7 | Fm7 Bb7 | Cmaj7 | Em7 A7 |
Dm7 | G7 | Cmaj7 A7 | Dm7 G7 ||

More sophisticated, used in bebop ("Blues for Alice").

**Minor Blues:**
Uses minor chords instead of dominant 7ths:
Cm7 | Cm7 | Cm7 | Cm7 |
Fm7 | Fm7 | Cm7 | Cm7 |
G7 | Fm7 | Cm7 | G7 ||

Darker, more melancholic. Common in jazz blues.

**Turnarounds:**

**Function:**
Last 2 bars (bars 11-12) set up the repeat. Creates harmonic motion back to bar 1.

**Common Turnarounds:**

**I-VI-ii-V:**
C7-A7-Dm7-G7 (most common)
Chromatically descending bass: C-A-D-G

**I-V7/ii-ii-V:**
C7-A7-Dm7-G7 (same as above, analyzed differently)

**I-bIII7-bVI7-bII7:**
C7-Eb7-Ab7-Db7 (chromatic descent)
Bebop style, very jazzy

**I-Idim-ii-V:**
C7-Cdim7-Dm7-G7
Chromatic passing chord

**Rhythm Changes Turnaround:**
I-vi-ii-V: Cmaj7-Am7-Dm7-G7
From "I Got Rhythm", lighter feel
        `
      },
      {
        title: 'Blues Substitutions and Advanced Techniques',
        content: `
**Blues Substitutions:**

**Bars 9-10 (V7-IV7):**
**Original**: G7-F7
**Substitute**: Dm7-G7 (ii-V to I)
**Substitute**: Db7-C7 (tritone subs)
**Substitute**: D7-Ab7 (tritone sub chain)

**Bar 8 (I7 before V7):**
**Original**: C7
**Substitute**: Em7-A7 (ii-V/ii, sets up next section)
**Substitute**: Gm7-C7 (ii-V/IV, prepares IV7)

**Bars 5-6 (IV7):**
**Original**: F7-F7
**Substitute**: F7-Fm7 (IV to iv, modal interchange)
**Substitute**: F7-Bb7 (IV7 to bVII7)

**Bird Blues (Charlie Parker Style):**
Very sophisticated bebop blues changes:
| Cmaj7 F7 | Bb7 A7 | Dm7 G7 | Em7 A7 |
| Dm7 | G7 | Cmaj7 | Em7 A7 |
| Dm7 | G7 | Cmaj7 A7 | Dm7 G7 ||

Rapid harmonic rhythm, ii-V substitutions everywhere.

**Walking Bass Blues:**
Play root-3-5-6 or root-5-6-b7 on each chord:
- C7: C-E-G-Bb
- F7: F-A-C-Eb
- G7: G-B-D-F

Creates classic blues walking bass feel.

**Blues Scale Integration:**
Blues scale: C-Eb-F-F#-G-Bb-C (1-b3-4-#4-5-b7-1)
Works over ALL chords in blues progression.

**Melodic Considerations:**

**Blue Notes:**
- Flat 3rd (Eb in C): Tension against major 3rd (E) in C7 chord
- Flat 7th (Bb in C): Reinforces dominant 7th quality
- Sharp 4th/Flat 5th (F# in C): Maximum tension, "blues note"

**Call and Response:**
- 2-bar phrases: Call (bars 1-2), Response (bars 3-4)
- Leave space for answering licks
- Traditional in blues vocals and guitar

**Riff-Based:**
- Repeat short melodic/harmonic riff
- Example: "Crossroads", "Sweet Home Chicago"
- Riff defines the song

**Genre Applications:**

**Delta Blues:**
- Basic 12-bar, simple I-IV-V
- Acoustic, slide guitar
- Example: Robert Johnson

**Chicago Blues:**
- Electric guitar, walking bass
- Quick-change blues common
- Example: Muddy Waters, Howlin' Wolf

**Jazz Blues:**
- Complex substitutions, ii-V's
- Walking bass, swing feel
- Example: "Blues for Alice", "Billie's Bounce"

**Rock Blues:**
- Simplified 12-bar, power chords
- Example: "Red House" (Hendrix), ZZ Top

**R&B/Soul:**
- Extended chords (9ths, 13ths)
- Slower tempos, emotional
- Example: Ray Charles, B.B. King ballads

**Common Mistakes:**
- Using major/minor triads instead of dominant 7ths
- Forgetting the turnaround (bars 11-12)
- Playing melody that doesn't work over IV7 chord (bar 5)
- Not swinging or shuffling (blues = triplet feel usually)
- Ignoring the form (12 bars must be exact)

**Practice Exercises:**
1. Program basic 12-bar blues in 12 keys
2. Add quick-change to bar 2
3. Substitute bars 9-10 with ii-V
4. Create turnarounds using I-VI-ii-V
5. Play blues scale over entire progression
6. Transcribe blues solos to understand phrasing

**Pro Tip:**
Blues is about FEEL more than exact notes. The shuffle/swing rhythm, dynamics, and phrasing matter more than complex harmony. Start simple, add sophistication gradually. Even Clapton and Hendrix played basic 12-bar blues - it's all about the delivery!
        `
      }
    ]
  },

  learningObjectives: [
    "Program 12-bar blues progressions in any key",
    "Understand quick-change blues and jazz blues variations",
    "Create turnarounds using I-VI-ii-V and substitutions",
    "Apply blues scale over blues progressions",
    "Recognize blues form in different genres (Delta, Chicago, jazz, rock)"
  ]

  mode: {
    sandbox: false,
    sequencerType: 'none'  // Theory-only lesson, no sequencer
  }
};
