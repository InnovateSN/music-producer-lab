/**
 * Music Producer Lab - Lesson Configuration
 * Lesson: Vocals 9 - Creative Vocal Production
 */

import { applyMessagePreset, buildHeroEyebrow } from "./config-presets.js";

export const lessonConfig = {
  lessonKey: "mpl-vocals-9-progress",
  lessonNumber: 9,
  lessonCategory: "Vocals",
  
  nextLessonUrl: "lesson-vocals-10.html",
  prevLessonUrl: "lesson-vocals-8.html",
  overviewUrl: "labs.html",
  
  hero: {
    eyebrow: buildHeroEyebrow({ lessonNumber: 9, categoryLabel: "Vocals" }),
    title: "Creative Vocal Production:",
    titleHighlight: "Chopping, Sampling & Vocoding",
    subtitle: "Explore vocal chopping, sampling, vocoding, and experimental vocal processing. Master professional vocal production techniques for commercial-quality results."
  },
  
  exercise: {
    title: "Master Creative Vocal Production",
    description: "Explore vocal chopping, sampling, vocoding, and experimental vocal processing. This lesson covers the essential vocal production techniques used in professional recordings.",
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
        title: 'Vocal Chopping, Sampling, and Creative Vocal Design',
        content: `
**Vocal Chopping**
Vocal chopping is the rhythmic slicing and rearranging of vocal recordings to create new rhythmic and melodic patterns. Common in:
- **Electronic/EDM:** Slice a sung phrase into individual phonemes and trigger them rhythmically
- **Hip-hop:** Chop a vocal sample from a classic record, pitch it, and build a new melody
- **Future bass / bass music:** Choppy, stuttered synth-like vocal textures

**Chopping Workflow in a DAW**
1. Record or import a vocal phrase
2. Slice at transients (every syllable or phoneme)
3. Assign slices to MIDI notes (Ableton Simpler/Sampler, Logic Ultrabeat, FL Studio Slicex)
4. Play the slices in a new rhythmic/melodic order via MIDI
5. Add pitch shifting per slice for melodic variation

**Pitch-Shifting Vocal Samples**
Pitching voice samples creates new melodic content from a single recording:
- Small shifts (±2–6 semitones): Voice character preserved, sounds like a different singer
- Large shifts (octave+): Character warps heavily, becomes a new texture (chipmunk/monster effect)
- Use formant correction to maintain natural vowel quality when shifting more than ±4 semitones

**Vocal Resampling**
Record your own vocals and resample them:
1. Sing sustained vowels ("aah," "ooh," "eeh") at various pitches
2. Sample into a sampler instrument
3. Map each recording across the keyboard
4. You now have a custom vocal pad instrument

**Acapella Sampling and Clearance**
Using commercial acapellas requires:
- **Licensing:** Contact the rights holder (publisher + master rights)
- **Acapella packs:** Royalty-free vocal samples (Splice, LANDR, Loopmasters)
- **Own recordings:** No clearance issues, most creatively free
        `
      },
      {
        title: 'Vocoder, Talkbox, and Formant-Based Effects',
        content: `
**What Is a Vocoder?**
A vocoder (voice encoder) analyzes the spectral envelope (formants) of a carrier signal (voice) and applies that shape to a modulator signal (synthesizer). The synthesizer's harmonic richness is "voiced" by the human mouth shape.

**Classic Vocoder Sound**
- Carrier: Voice (sung into microphone or spoken)
- Modulator: Pad synthesizer (chords held on a keyboard)
- Result: Robotic, synthesized voice that follows the harmonic content of the synth

Famous examples: Daft Punk's "Around the World," Kraftwerk's "The Robots," Imogen Heap's "Hide and Seek" (vocoders built into Eventide harmonizers).

**Hardware vs. Software Vocoders**
- **Hardware:** Roland VP-330, EMS Vocoder 2000 (vintage, expensive, distinctive)
- **Software:** Ableton's Vocoder, iZotope VocalSynth, Roland's VC-1 plugin, Waves Morphoder

**Talkbox**
Different from vocoder: a talkbox sends the synth or guitar signal through a plastic tube into the performer's mouth. The mouth physically shapes the sound. Output is captured by a microphone placed at the lips.

Famous examples: Peter Frampton, Roger (Zapp & Roger), Bon Jovi's "Livin' on a Prayer" guitar.

**Formant Shifting**
Formants are the resonant frequency peaks that distinguish vowel sounds. Formant shifters change the vowel character without changing pitch:
- Shift up: Voice sounds smaller, younger, "chipmunk"
- Shift down: Voice sounds larger, more masculine, "giant"
- Used creatively for character transformations, or subtly for tone shaping

**VocalSynth 2 (iZotope)**
All-in-one vocal synthesis plugin offering:
- Polyvocoder (chord voicing from vocal input)
- Compuvox (robotic vocoder)
- Biovox (formant shaping)
- Punch (exciter)
Mix and match in any combination for custom vocal textures.
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
    success: "Excellent! You've mastered Creative Vocal Production. Your vocal productions are pro-level!",
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
