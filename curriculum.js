/**
 * Music Producer Lab - Complete Curriculum
 *
 * This file contains 175 lessons across 10 categories:
 * - Drums & Rhythm (23 lessons) ✨ EXPANDED
 * - Harmony & Melody (28 lessons) ✨ EXPANDED
 * - Music Theory Fundamentals (8 lessons)
 * - Ear Training (10 lessons)
 * - Bass & Low End (20 lessons)
 * - Arrangement & Songwriting (20 lessons)
 * - Sound Design (20 lessons) ✨ EXPANDED
 * - Mixing (20 lessons) ✨ EXPANDED
 * - Vocals (15 lessons) ✨ EXPANDED
 * - Mastering (10 lessons) ✨ EXPANDED
 *
 * Lesson keys match exactly what each HTML file uses for progress tracking.
 *
 * Progression Levels:
 * - Levels 1-3: Beginner (Fundamentals)
 * - Levels 4-6: Intermediate (Genre Application)
 * - Levels 7-8: Advanced (Professional Techniques)
 * - Levels 9-10: Expert (Industry-Ready Skills)
 */

export const curriculumOverviewUrl = 'labs.html';

/**
 * Process curriculum and add automatic display numbers
 * This allows lessons to be added/removed without manual renumbering
 */
function processCurriculumWithDisplayNumbers(curriculumData) {
  const processed = [];

  for (const category of curriculumData) {
    const processedCategory = {
      ...category,
      lessons: []
    };

    let displayNumber = 0;
    for (const lesson of category.lessons) {
      processedCategory.lessons.push({
        ...lesson,
        displayNumber: displayNumber++
      });
    }

    processed.push(processedCategory);
  }

  return processed;
}

export const curriculum = processCurriculumWithDisplayNumbers([
  // ============================================================
  // DRUMS & RHYTHM MODULE (21 Lessons)
  // ============================================================
  {
    slug: 'drums',
    title: 'Drums & Rhythm',
    description: 'Master drum programming from basic patterns to genre-specific professional grooves. Learn humanization, polyrhythms, and industry-standard techniques.',
    lessons: [
      // --- LEVEL 1-3: BEGINNER ---
      {
        slug: 'lesson-drums-0',
        lessonKey: 'mpl-lesson0-progress',
        title: 'Music Production Fundamentals',
        description: 'Essential concepts for absolute beginners: DAWs, loops, tempo, bars, beats, and how music is organized in time. No prior knowledge required.',
        duration: '15-20 min',
        level: 'Beginner',
        depthLevel: 1,
        badge: 'Free',
        pagePath: 'lesson-drums-0.html',
        configPath: './configs/lesson-drums-0.config.js'
      },
      {
        slug: 'lesson-drums-1',
        lessonKey: 'mpl-lesson1-progress', // Matches HTML file
        title: '4 on the Floor: Kick Foundation',
        description: 'Build the most important rhythm pattern in electronic music. Create a repeating rhythm that feels stable, danceable, and easy to recognize.',
        duration: '8-10 min',
        level: 'Beginner',
        depthLevel: 1,
        badge: 'Free',
        pagePath: 'lesson-drums-1.html',
        configPath: './configs/lesson-drums-1.config.js'
      },
      {
        slug: 'lesson-drums-2',
        lessonKey: 'mpl-lesson2-progress', // Matches HTML file
        title: 'Add the Snare: Backbeat Basics',
        description: 'Layer the backbeat on beats 2 and 4 to create momentum. Understand the call-and-response between kick and snare.',
        duration: '8-10 min',
        level: 'Beginner',
        depthLevel: 1,
        badge: 'Free',
        pagePath: 'lesson-drums-2.html',
        configPath: './configs/lesson-drums-2.config.js'
      },
      {
        slug: 'lesson-drums-3',
        lessonKey: 'mpl-lesson3-progress', // Matches HTML file
        title: 'Hi-hats in 1/8: Feel Subdivisions',
        description: 'Program hi-hats on every eighth note to hear subdivisions (1 & 2 & 3 & 4 &). Create your first complete drum pattern.',
        duration: '10-12 min',
        level: 'Beginner',
        depthLevel: 2,
        badge: 'Free',
        pagePath: 'lesson-drums-3.html',
        configPath: './configs/lesson-drums-3.config.js'
      },
      {
        slug: 'lesson-drums-4',
        lessonKey: 'mpl-lesson4-progress', // Matches HTML file
        title: '16th-Note Groove: More Movement',
        description: 'Add 16th-note hi-hats to create movement and energy. Learn selective note placement for groove variation.',
        duration: '10-12 min',
        level: 'Beginner',
        depthLevel: 2,
        badge: 'Free',
        pagePath: 'lesson-drums-4.html',
        configPath: './configs/lesson-drums-4.config.js'
      },
      {
        slug: 'lesson-drums-5',
        lessonKey: 'mpl-lesson5-progress', // Matches HTML file
        title: 'Variation & Fills',
        description: 'Create drum fills and end-of-loop variations. Learn when and how to break the pattern to keep grooves interesting.',
        duration: '12-15 min',
        level: 'Beginner',
        depthLevel: 3,
        badge: 'Free',
        pagePath: 'lesson-drums-5.html',
        configPath: './configs/lesson-drums-5.config.js'
      },
      {
        slug: 'lesson-drums-6',
        lessonKey: 'mpl-lesson6-progress', // Matches HTML file
        title: 'Syncopated Kick: Break from 4/4',
        description: 'Use syncopated kick patterns to add groove and push beyond the standard 4-on-the-floor. Introduction to off-beat placement.',
        duration: '12-15 min',
        level: 'Beginner',
        depthLevel: 3,
        badge: 'Free',
        pagePath: 'lesson-drums-6.html',
        configPath: './configs/lesson-drums-6.config.js'
      },

      // --- LEVEL 4-6: INTERMEDIATE ---
      {
        slug: 'lesson-drums-7',
        lessonKey: 'mpl-drums-7-progress', // Matches HTML file (new format)
        title: 'Ghost Notes & Dynamics',
        description: 'Add ghost notes (soft snare hits) between main hits for groove and texture. Master velocity control for human feel.',
        duration: '15-18 min',
        level: 'Intermediate',
        depthLevel: 4,
        badge: 'Premium',
        pagePath: 'lesson-drums-7.html',
        configPath: './configs/lesson-drums-7.config.js'
      },
      {
        slug: 'lesson-drums-8',
        lessonKey: 'mpl-drums-8-progress',
        title: 'House & Techno Drums',
        description: 'Master electronic dance music drum patterns. Learn the driving 4/4 patterns, off-beat hi-hats, and minimal techno rhythms.',
        duration: '15-18 min',
        level: 'Intermediate',
        depthLevel: 4,
        badge: 'Premium',
        pagePath: 'lesson-drums-8.html',
        configPath: './configs/lesson-drums-8.config.js'
      },
      {
        slug: 'lesson-drums-9',
        lessonKey: 'mpl-drums-9-progress',
        title: 'Hip-Hop & Boom Bap Drums',
        description: 'Program classic hip-hop beats from boom bap to modern trap. Learn the swing, velocity variation, and layering techniques.',
        duration: '15-18 min',
        level: 'Intermediate',
        depthLevel: 5,
        badge: 'Premium',
        pagePath: 'lesson-drums-9.html',
        configPath: './configs/lesson-drums-9.config.js'
      },
      {
        slug: 'lesson-drums-10',
        lessonKey: 'mpl-drums-10-progress',
        title: 'Trap & 808 Patterns',
        description: 'Master modern trap production drums. Program rolling hi-hats, 808 bass patterns, and signature trap rhythms.',
        duration: '15-18 min',
        level: 'Intermediate',
        depthLevel: 5,
        badge: 'Premium',
        pagePath: 'lesson-drums-10.html',
        configPath: './configs/lesson-drums-10.config.js'
      },
      {
        slug: 'lesson-drums-11',
        lessonKey: 'mpl-drums-11-progress',
        title: 'DnB & Breakbeat Patterns',
        description: 'Create high-energy drum and bass patterns. Learn the Amen break, two-step rhythms, and half-time variations.',
        duration: '18-20 min',
        level: 'Intermediate',
        depthLevel: 6,
        badge: 'Premium',
        pagePath: 'lesson-drums-11.html',
        configPath: './configs/lesson-drums-11.config.js'
      },
      {
        slug: 'lesson-drums-12',
        lessonKey: 'mpl-drums-12-progress',
        title: 'Rock & Live Drum Simulation',
        description: 'Program realistic rock drums. Simulate live drummer techniques, cymbal work, and dynamic fills.',
        duration: '18-20 min',
        level: 'Intermediate',
        depthLevel: 6,
        badge: 'Premium',
        pagePath: 'lesson-drums-12.html',
        configPath: './configs/lesson-drums-12.config.js'
      },

      // --- LEVEL 7-8: ADVANCED ---
      {
        slug: 'lesson-drums-13',
        lessonKey: 'mpl-drums-13-progress',
        title: 'Humanization & Groove Templates',
        description: 'Make programmed drums feel human. Learn timing shifts, velocity curves, and groove template application.',
        duration: '20-25 min',
        level: 'Advanced',
        depthLevel: 7,
        badge: 'Premium',
        pagePath: 'lesson-drums-13.html',
        configPath: './configs/lesson-drums-13.config.js'
      },
      {
        slug: 'lesson-drums-14',
        lessonKey: 'mpl-drums-14-progress',
        title: 'Polyrhythms & Metric Modulation',
        description: 'Layer contrasting rhythms for complexity. Create 3-over-4, 5-over-4, and other polyrhythmic patterns.',
        duration: '20-25 min',
        level: 'Advanced',
        depthLevel: 7,
        badge: 'Premium',
        pagePath: 'lesson-drums-14.html',
        configPath: './configs/lesson-drums-14.config.js'
      },
      {
        slug: 'lesson-drums-15',
        lessonKey: 'mpl-drums-15-progress',
        title: 'Advanced Hi-Hat Techniques',
        description: 'Master open/closed hi-hat patterns, rolls, crescendos, and pedal hi-hat techniques for dynamic grooves.',
        duration: '18-22 min',
        level: 'Advanced',
        depthLevel: 7,
        badge: 'Premium',
        pagePath: 'lesson-drums-15.html',
        configPath: './configs/lesson-drums-15.config.js'
      },
      {
        slug: 'lesson-drums-16',
        lessonKey: 'mpl-drums-16-progress',
        title: 'Advanced Fills & Transitions',
        description: 'Build dramatic fills that bridge sections smoothly. Learn tom rolls, crash patterns, and fill placement strategies.',
        duration: '20-24 min',
        level: 'Advanced',
        depthLevel: 8,
        badge: 'Premium',
        pagePath: 'lesson-drums-16.html',
        configPath: './configs/lesson-drums-16.config.js'
      },
      {
        slug: 'lesson-drums-17',
        lessonKey: 'mpl-drums-17-progress',
        title: 'Drum Layering & Parallel Processing',
        description: 'Stack multiple drum sounds and process layers independently. Create massive, professional drum tones.',
        duration: '22-26 min',
        level: 'Advanced',
        depthLevel: 8,
        badge: 'Premium',
        pagePath: 'lesson-drums-17.html',
        configPath: './configs/lesson-drums-17.config.js'
      },
      {
        slug: 'lesson-drums-18',
        lessonKey: 'mpl-drums-18-progress',
        title: 'Swing & Shuffle Variations',
        description: 'Go beyond basic swing. Learn triplet-based shuffles, half-time shuffle, and swing percentages for different genres.',
        duration: '18-22 min',
        level: 'Advanced',
        depthLevel: 8,
        badge: 'Premium',
        pagePath: 'lesson-drums-18.html',
        configPath: './configs/lesson-drums-18.config.js'
      },

      // --- LEVEL 9-10: EXPERT ---
      {
        slug: 'lesson-drums-19',
        lessonKey: 'mpl-drums-19-progress',
        title: 'Drum Mixing Basics: Balance & Panning',
        description: 'Learn mixing fundamentals: volume balance and stereo panning. Get your levels right before processing.',
        duration: '20-25 min',
        level: 'Expert',
        depthLevel: 10,
        badge: 'Premium',
        pagePath: 'lesson-drums-19.html',
        configPath: './configs/lesson-drums-19.config.js'
      },
      {
        slug: 'lesson-drums-20',
        lessonKey: 'mpl-drums-20-progress',
        title: 'Live Drum Recording Simulation',
        description: 'Program drums that sound like a real drummer playing. Master room ambience, overhead mic bleed, and natural dynamics.',
        duration: '24-28 min',
        level: 'Expert',
        depthLevel: 9,
        badge: 'Premium',
        pagePath: 'lesson-drums-20.html',
        configPath: './configs/lesson-drums-20.config.js'
      },
      {
        slug: 'lesson-drums-21',
        lessonKey: 'mpl-drums-21-progress',
        title: 'Advanced Polyrhythms & Cross-Rhythms',
        description: 'Layer complex independent rhythms across drums. Create 5/4 over 4/4, metric displacement, and phase shifting patterns.',
        duration: '22-26 min',
        level: 'Expert',
        depthLevel: 9,
        badge: 'Premium',
        pagePath: 'lesson-drums-21.html',
        configPath: './configs/lesson-drums-21.config.js'
      },
      {
        slug: 'lesson-drums-22',
        lessonKey: 'mpl-drums-22-progress',
        title: 'Mixing Drums for Loudness & Punch',
        description: 'Achieve competitive loudness without losing dynamics. Learn compression, saturation, and limiting techniques for modern drums.',
        duration: '25-30 min',
        level: 'Expert',
        depthLevel: 10,
        badge: 'Premium',
        pagePath: 'lesson-drums-22.html',
        configPath: './configs/lesson-drums-22.config.js'
      },
      {
        slug: 'drum-playground',
        lessonKey: 'mpl-drum-playground',
        title: '🥁 Drum Playground',
        description: 'Full-featured drum lab with sample selection, professional mixer, and WAV export. Create custom drum loops and download them!',
        duration: 'Unlimited',
        level: 'All Levels',
        depthLevel: 10,
        badge: 'Free',
        pagePath: 'drum-playground.html',
        configPath: null
      }
    ]
  },

  // ============================================================
  // HARMONY & MELODY MODULE (20 Lessons)
  // ============================================================
  {
    slug: 'harmony',
    title: 'Harmony & Melody',
    description: 'Build chord progressions and write melodies by placing notes and hearing results instantly. Master triads, seventh chords, voice leading, and genre-specific harmony from house to neo-soul.',
    lessons: [
      // --- LEVEL 1-3: BEGINNER ---
      {
        slug: 'lesson-harmony-1',
        lessonKey: 'mpl-harmony-1-progress',
        title: 'Build Your First Chord: Major Triad',
        description: 'Stack three notes on the same beat to create your first real chord. Understand root, third, and fifth intervals through hands-on practice.',
        duration: '8-10 min',
        level: 'Beginner',
        depthLevel: 1,
        badge: 'Free',
        pagePath: 'lesson-harmony-1.html',
        configPath: './configs/lesson-harmony-1.config.js'
      },
      {
        slug: 'lesson-harmony-2',
        lessonKey: 'mpl-harmony-2-progress',
        title: 'Flip the Emotion: Major vs Minor',
        description: 'Change one note to turn a bright major chord into a darker minor chord. Feel how the third controls the emotional color.',
        duration: '8-10 min',
        level: 'Beginner',
        depthLevel: 1,
        badge: 'Free',
        pagePath: 'lesson-harmony-2.html',
        configPath: './configs/lesson-harmony-2.config.js'
      },
      {
        slug: 'lesson-harmony-3',
        lessonKey: 'mpl-harmony-3-progress',
        title: 'Feel Tension: I to V',
        description: 'Create a two-chord loop that moves from home to tension. Experience the dominant pull that drives most Western music.',
        duration: '10-12 min',
        level: 'Beginner',
        depthLevel: 2,
        badge: 'Free',
        pagePath: 'lesson-harmony-3.html',
        configPath: './configs/lesson-harmony-3.config.js'
      },
      {
        slug: 'lesson-harmony-4',
        lessonKey: 'mpl-harmony-4-progress',
        title: 'Build a Classic: I–IV–V',
        description: 'Program the most common song backbone progression. Understand how stable and tense chords work together.',
        duration: '12-14 min',
        level: 'Beginner',
        depthLevel: 2,
        badge: 'Free',
        pagePath: 'lesson-harmony-4.html',
        configPath: './configs/lesson-harmony-4.config.js'
      },
      {
        slug: 'lesson-harmony-5',
        lessonKey: 'mpl-harmony-5-progress',
        title: 'Write the Pop Loop: I–V–vi–IV',
        description: 'Build the modern hit progression used in thousands of songs. Create an endless, satisfying loop that feels complete.',
        duration: '12-15 min',
        level: 'Beginner',
        depthLevel: 3,
        badge: 'Free',
        pagePath: 'lesson-harmony-5.html',
        configPath: './configs/lesson-harmony-5.config.js'
      },
      {
        slug: 'lesson-harmony-6',
        lessonKey: 'mpl-harmony-6-progress',
        title: 'Melody from Chord Tones',
        description: 'Write your first melody by targeting chord tones on strong beats. Learn safe anchor points that always fit.',
        duration: '12-16 min',
        level: 'Beginner',
        depthLevel: 3,
        badge: 'Free',
        pagePath: 'lesson-harmony-6.html',
        configPath: './configs/lesson-harmony-6.config.js'
      },
      {
        slug: 'lesson-harmony-7',
        lessonKey: 'mpl-harmony-7-progress',
        title: 'Stepwise Melody: Use the Scale',
        description: 'Expand beyond chord tones using passing tones from the major scale. Create melodies that move and breathe.',
        duration: '12-18 min',
        level: 'Beginner',
        depthLevel: 3,
        badge: 'Free',
        pagePath: 'lesson-harmony-7.html',
        configPath: './configs/lesson-harmony-7.config.js'
      },

      // --- LEVEL 4-6: INTERMEDIATE ---
      {
        slug: 'lesson-harmony-8',
        lessonKey: 'mpl-harmony-8-progress',
        title: 'Upgrade to 7ths: Maj7 & Min7',
        description: 'Turn basic triads into lush four-note chords. Add the seventh for that smooth, modern sound used in house and R&B.',
        duration: '12-15 min',
        level: 'Intermediate',
        depthLevel: 4,
        badge: 'Free',
        pagePath: 'lesson-harmony-8.html',
        configPath: './configs/lesson-harmony-8.config.js'
      },
      {
        slug: 'lesson-harmony-9',
        lessonKey: 'mpl-harmony-9-progress',
        title: 'Create Pull: Dominant 7',
        description: 'Use G7 to create strong tension that resolves to home. Master the most powerful resolution tool in harmony.',
        duration: '12-16 min',
        level: 'Intermediate',
        depthLevel: 4,
        badge: 'Free',
        pagePath: 'lesson-harmony-9.html',
        configPath: './configs/lesson-harmony-9.config.js'
      },
      {
        slug: 'lesson-harmony-10',
        lessonKey: 'mpl-harmony-10-progress',
        title: 'House Loop: Minor to Major Movement',
        description: 'Build a club-ready 4-bar loop with seventh chords and add a simple topline. Learn house harmonic rhythm.',
        duration: '15-20 min',
        level: 'Intermediate',
        depthLevel: 5,
        badge: 'Free',
        pagePath: 'lesson-harmony-10.html',
        configPath: './configs/lesson-harmony-10.config.js'
      },
      {
        slug: 'lesson-harmony-11',
        lessonKey: 'mpl-harmony-11-progress',
        title: 'Smooth the Jumps: Chord Inversions',
        description: 'Re-voice chords so notes move by small steps instead of leaps. Make your progressions sound instantly more professional.',
        duration: '15-18 min',
        level: 'Intermediate',
        depthLevel: 5,
        badge: 'Free',
        pagePath: 'lesson-harmony-11.html',
        configPath: './configs/lesson-harmony-11.config.js'
      },
      {
        slug: 'lesson-harmony-12',
        lessonKey: 'mpl-harmony-12-progress',
        title: 'Motif Magic: Repeat with Variation',
        description: 'Write memorable melodies by repeating a short phrase and varying one element. Master the foundation of hooks and riffs.',
        duration: '14-18 min',
        level: 'Intermediate',
        depthLevel: 5,
        badge: 'Free',
        pagePath: 'lesson-harmony-12.html',
        configPath: './configs/lesson-harmony-12.config.js'
      },
      {
        slug: 'lesson-harmony-13',
        lessonKey: 'mpl-harmony-13-progress',
        title: 'Hip-Hop Minor Loop: Dark but Catchy',
        description: 'Build a minor progression with sparse, emotional melody. Learn how space creates impact in modern hip-hop and R&B.',
        duration: '14-18 min',
        level: 'Intermediate',
        depthLevel: 6,
        badge: 'Free',
        pagePath: 'lesson-harmony-13.html',
        configPath: './configs/lesson-harmony-13.config.js'
      },
      {
        slug: 'lesson-harmony-14',
        lessonKey: 'mpl-harmony-14-progress',
        title: 'Borrow One Chord: Instant Emotion Shift',
        description: 'Add a borrowed chord to create dramatic color changes. Master modal interchange for pop and cinematic production.',
        duration: '15-18 min',
        level: 'Intermediate',
        depthLevel: 6,
        badge: 'Free',
        pagePath: 'lesson-harmony-14.html',
        configPath: './configs/lesson-harmony-14.config.js'
      },

      // --- LEVEL 7-8: ADVANCED ---
      {
        slug: 'lesson-harmony-15',
        lessonKey: 'mpl-harmony-15-progress',
        title: 'Add9 Color: Make Chords Glow',
        description: 'Turn plain chords into modern, airy harmonies by adding the ninth. Create shimmer without losing stability.',
        duration: '14-18 min',
        level: 'Advanced',
        depthLevel: 7,
        badge: 'Free',
        pagePath: 'lesson-harmony-15.html',
        configPath: './configs/lesson-harmony-15.config.js'
      },
      {
        slug: 'lesson-harmony-16',
        lessonKey: 'mpl-harmony-16-progress',
        title: 'Neo-Soul Moves: Sus → Resolve',
        description: 'Build lush progressions with suspended chords and smooth voice leading. Master the DNA of R&B and neo-soul keys.',
        duration: '16-20 min',
        level: 'Advanced',
        depthLevel: 8,
        badge: 'Free',
        pagePath: 'lesson-harmony-16.html',
        configPath: './configs/lesson-harmony-16.config.js'
      },
      {
        slug: 'lesson-harmony-17',
        lessonKey: 'mpl-harmony-17-progress',
        title: 'Dorian Mode: The Cool Minor Sound',
        description: 'Write groove progressions using Dorian for modern funk, house, and R&B. Escape basic major/minor clichés.',
        duration: '15-18 min',
        level: 'Advanced',
        depthLevel: 8,
        badge: 'Free',
        pagePath: 'lesson-harmony-17.html',
        configPath: './configs/lesson-harmony-17.config.js'
      },
      {
        slug: 'lesson-harmony-18',
        lessonKey: 'mpl-harmony-18-progress',
        title: 'Cinematic Lift: Pedal Tone + Chord Changes',
        description: 'Create film-style emotion by holding one note while chords shift above it. Master tension in ambient and scoring.',
        duration: '16-20 min',
        level: 'Advanced',
        depthLevel: 8,
        badge: 'Free',
        pagePath: 'lesson-harmony-18.html',
        configPath: './configs/lesson-harmony-18.config.js'
      },

      // --- LEVEL 9-10: EXPERT ---
      {
        slug: 'lesson-harmony-19',
        lessonKey: 'mpl-harmony-19-progress',
        title: 'Reharmonize a Melody: 3 Different Backings',
        description: 'Take one melody and support it with three different chord progressions. Learn reharmonization for remixes and bridges.',
        duration: '18-20 min',
        level: 'Expert',
        depthLevel: 9,
        badge: 'Free',
        pagePath: 'lesson-harmony-19.html',
        configPath: './configs/lesson-harmony-19.config.js'
      },
      {
        slug: 'lesson-harmony-20',
        lessonKey: 'mpl-harmony-20-progress',
        title: 'Pro Voicing Pack: Spread, Stack, and Control',
        description: 'Build professional chord voicings with controlled top notes and counter-melodies. Master record-ready harmony movement.',
        duration: '18-20 min',
        level: 'Expert',
        depthLevel: 10,
        badge: 'Free',
        pagePath: 'lesson-harmony-20.html',
        configPath: './configs/lesson-harmony-20.config.js'
      },

      // --- ADVANCED HARMONY (Levels 10-12) ---
      {
        slug: 'lesson-harmony-21',
        lessonKey: 'mpl-harmony-21-progress',
        title: 'Secondary Dominants: Tonicization',
        description: 'Master V/ii, V/iii, V/IV, V/V, and V/vi. Learn how to temporarily tonicize any chord in a progression for harmonic richness.',
        duration: '20-25 min',
        level: 'Expert',
        depthLevel: 10,
        badge: 'Premium',
        pagePath: 'lesson-harmony-21.html',
        configPath: './configs/lesson-harmony-21.config.js'
      },
      {
        slug: 'lesson-harmony-22',
        lessonKey: 'mpl-harmony-22-progress',
        title: 'Tritone Substitution: Jazz Reharmonization',
        description: 'Replace dominant chords with their tritone substitutes. Master the most powerful reharmonization technique in jazz.',
        duration: '20-25 min',
        level: 'Expert',
        depthLevel: 10,
        badge: 'Premium',
        pagePath: 'lesson-harmony-22.html',
        configPath: './configs/lesson-harmony-22.config.js'
      },
      {
        slug: 'lesson-harmony-23',
        lessonKey: 'mpl-harmony-23-progress',
        title: 'Chromatic Reharmonization Techniques',
        description: 'Add chromatic passing chords, chromatic mediants, and augmented sixth chords. Create sophisticated harmonic movement.',
        duration: '22-25 min',
        level: 'Expert',
        depthLevel: 11,
        badge: 'Premium',
        pagePath: 'lesson-harmony-23.html',
        configPath: './configs/lesson-harmony-23.config.js'
      },
      {
        slug: 'lesson-harmony-24',
        lessonKey: 'mpl-harmony-24-progress',
        title: 'Jazz Harmony: Complex Extensions',
        description: 'Master 9ths, 11ths, 13ths, alterations (b9, #9, #11, b13), and upper structure triads. Build professional jazz voicings.',
        duration: '22-28 min',
        level: 'Expert',
        depthLevel: 11,
        badge: 'Premium',
        pagePath: 'lesson-harmony-24.html',
        configPath: './configs/lesson-harmony-24.config.js'
      },
      {
        slug: 'lesson-harmony-25',
        lessonKey: 'mpl-harmony-25-progress',
        title: 'Blues Harmony: 12-Bar & Turnarounds',
        description: 'Master blues progressions, quick-change patterns, turnarounds, and substitutions. From Delta blues to bebop blues.',
        duration: '20-25 min',
        level: 'Expert',
        depthLevel: 11,
        badge: 'Premium',
        pagePath: 'lesson-harmony-25.html',
        configPath: './configs/lesson-harmony-25.config.js'
      },
      {
        slug: 'lesson-harmony-26',
        lessonKey: 'mpl-harmony-26-progress',
        title: 'Funk & Soul Harmony',
        description: 'Master funk chord voicings, slash chords, sus chords, and R&B progressions. Create groovy, sophisticated harmony.',
        duration: '20-25 min',
        level: 'Expert',
        depthLevel: 12,
        badge: 'Premium',
        pagePath: 'lesson-harmony-26.html',
        configPath: './configs/lesson-harmony-26.config.js'
      },
      {
        slug: 'lesson-harmony-27',
        lessonKey: 'mpl-harmony-27-progress',
        title: 'Counterpoint Basics: Two-Voice Writing',
        description: 'Learn species counterpoint, voice leading rules, and how to write independent melodic lines that work together harmonically.',
        duration: '25-30 min',
        level: 'Expert',
        depthLevel: 12,
        badge: 'Premium',
        pagePath: 'lesson-harmony-27.html',
        configPath: './configs/lesson-harmony-27.config.js'
      },
      {
        slug: 'lesson-harmony-28',
        lessonKey: 'mpl-harmony-28-progress',
        title: 'Modal Interchange & Polytonality',
        description: 'Borrow chords from parallel modes and combine multiple keys simultaneously. Master advanced modern harmony techniques.',
        duration: '25-30 min',
        level: 'Expert',
        depthLevel: 12,
        badge: 'Premium',
        pagePath: 'lesson-harmony-28.html',
        configPath: './configs/lesson-harmony-28.config.js'
      }
    ]
  },

  // ============================================================
  // MUSIC THEORY FUNDAMENTALS MODULE (8 Lessons)
  // ============================================================
  {
    slug: 'music-theory',
    title: 'Music Theory Fundamentals',
    description: 'Master the foundational concepts of music theory: intervals, scales, modes, rhythm notation, key signatures, and chord construction. Build a solid theoretical foundation for all music production.',
    lessons: [
      // --- LEVEL 1-2: BEGINNER ---
      {
        slug: 'lesson-theory-1',
        lessonKey: 'mpl-theory-1-progress',
        title: 'Intervals & Half Steps',
        description: 'Learn the building blocks of all music: intervals. Understand half steps, whole steps, and how to measure distance between notes.',
        duration: '15-18 min',
        level: 'Beginner',
        depthLevel: 1,
        badge: 'Free',
        pagePath: 'lesson-theory-1.html',
        configPath: './configs/lesson-theory-1.config.js'
      },
      {
        slug: 'lesson-theory-2',
        lessonKey: 'mpl-theory-2-progress',
        title: 'Major & Minor Scales Construction',
        description: 'Build major and minor scales from scratch using interval formulas. Understand the W-W-H-W-W-W-H pattern that creates every major scale.',
        duration: '15-18 min',
        level: 'Beginner',
        depthLevel: 2,
        badge: 'Free',
        pagePath: 'lesson-theory-2.html',
        configPath: './configs/lesson-theory-2.config.js'
      },
      {
        slug: 'lesson-theory-3',
        lessonKey: 'mpl-theory-3-progress',
        title: 'Note Names & Staff Reading',
        description: 'Master note names on the treble and bass clef. Learn how to read and write music notation efficiently.',
        duration: '15-18 min',
        level: 'Beginner',
        depthLevel: 2,
        badge: 'Free',
        pagePath: 'lesson-theory-3.html',
        configPath: './configs/lesson-theory-3.config.js'
      },

      // --- LEVEL 3-4: INTERMEDIATE ---
      {
        slug: 'lesson-theory-4',
        lessonKey: 'mpl-theory-4-progress',
        title: 'The 7 Modes: Complete Guide',
        description: 'Master all 7 modes derived from the major scale: Ionian, Dorian, Phrygian, Lydian, Mixolydian, Aeolian, and Locrian. Understand their unique characteristics and applications.',
        duration: '20-25 min',
        level: 'Intermediate',
        depthLevel: 4,
        badge: 'Premium',
        pagePath: 'lesson-theory-4.html',
        configPath: './configs/lesson-theory-4.config.js'
      },
      {
        slug: 'lesson-theory-5',
        lessonKey: 'mpl-theory-5-progress',
        title: 'Rhythm Notation & Time Signatures',
        description: 'Learn to read and write rhythms. Master note values, rests, ties, dots, and how time signatures organize music.',
        duration: '18-20 min',
        level: 'Intermediate',
        depthLevel: 4,
        badge: 'Premium',
        pagePath: 'lesson-theory-5.html',
        configPath: './configs/lesson-theory-5.config.js'
      },
      {
        slug: 'lesson-theory-6',
        lessonKey: 'mpl-theory-6-progress',
        title: 'Key Signatures & Circle of Fifths',
        description: 'Understand key signatures and how the circle of fifths organizes all 12 keys. Learn sharps, flats, and relative major/minor relationships.',
        duration: '18-20 min',
        level: 'Intermediate',
        depthLevel: 5,
        badge: 'Premium',
        pagePath: 'lesson-theory-6.html',
        configPath: './configs/lesson-theory-6.config.js'
      },

      // --- LEVEL 5-6: ADVANCED ---
      {
        slug: 'lesson-theory-7',
        lessonKey: 'mpl-theory-7-progress',
        title: 'Chord Construction Theory',
        description: 'Build chords from intervals: triads, seventh chords, extensions (9ths, 11ths, 13ths), and alterations. Master the theoretical foundation of harmony.',
        duration: '20-22 min',
        level: 'Advanced',
        depthLevel: 6,
        badge: 'Premium',
        pagePath: 'lesson-theory-7.html',
        configPath: './configs/lesson-theory-7.config.js'
      },
      {
        slug: 'lesson-theory-8',
        lessonKey: 'mpl-theory-8-progress',
        title: 'Functional Harmony & Roman Numerals',
        description: 'Understand chord function: tonic, subdominant, dominant. Learn Roman numeral analysis and how chords create tension and resolution.',
        duration: '20-22 min',
        level: 'Advanced',
        depthLevel: 7,
        badge: 'Premium',
        pagePath: 'lesson-theory-8.html',
        configPath: './configs/lesson-theory-8.config.js'
      }
    ]
  },

  // ============================================================
  // EAR TRAINING MODULE (10 Lessons)
  // ============================================================
  {
    slug: 'ear-training',
    title: 'Ear Training',
    description: 'Develop critical listening skills: interval recognition, chord identification, rhythm dictation, and genre analysis. Train your ears to hear like a professional producer.',
    lessons: [
      // --- LEVEL 1-3: BEGINNER ---
      {
        slug: 'lesson-ear-1',
        lessonKey: 'mpl-ear-1-progress',
        title: 'Interval Recognition: Melodic',
        description: 'Train your ear to recognize intervals played one note at a time. Master the foundational skill for transcription and melody writing.',
        duration: '15-18 min',
        level: 'Beginner',
        depthLevel: 2,
        badge: 'Free',
        pagePath: 'lesson-ear-1.html',
        configPath: './configs/lesson-ear-1.config.js'
      },
      {
        slug: 'lesson-ear-2',
        lessonKey: 'mpl-ear-2-progress',
        title: 'Interval Recognition: Harmonic',
        description: 'Identify intervals played simultaneously. Essential for understanding chord voicings and harmonic structure.',
        duration: '15-18 min',
        level: 'Beginner',
        depthLevel: 3,
        badge: 'Free',
        pagePath: 'lesson-ear-2.html',
        configPath: './configs/lesson-ear-2.config.js'
      },
      {
        slug: 'lesson-ear-3',
        lessonKey: 'mpl-ear-3-progress',
        title: 'Chord Quality Identification',
        description: 'Distinguish between major, minor, diminished, and augmented triads by ear. Build the foundation for advanced chord recognition.',
        duration: '15-18 min',
        level: 'Beginner',
        depthLevel: 3,
        badge: 'Premium',
        pagePath: 'lesson-ear-3.html',
        configPath: './configs/lesson-ear-3.config.js'
      },

      // --- LEVEL 4-6: INTERMEDIATE ---
      {
        slug: 'lesson-ear-4',
        lessonKey: 'mpl-ear-4-progress',
        title: 'Scale & Mode Recognition',
        description: 'Identify scales and modes by their characteristic sound. Recognize major, minor, and modal patterns in music.',
        duration: '18-20 min',
        level: 'Intermediate',
        depthLevel: 4,
        badge: 'Premium',
        pagePath: 'lesson-ear-4.html',
        configPath: './configs/lesson-ear-4.config.js'
      },
      {
        slug: 'lesson-ear-5',
        lessonKey: 'mpl-ear-5-progress',
        title: 'Rhythm Pattern Recognition',
        description: 'Transcribe and identify rhythm patterns. Train your ear to recognize note values, syncopation, and groove elements.',
        duration: '18-20 min',
        level: 'Intermediate',
        depthLevel: 5,
        badge: 'Premium',
        pagePath: 'lesson-ear-5.html',
        configPath: './configs/lesson-ear-5.config.js'
      },
      {
        slug: 'lesson-ear-6',
        lessonKey: 'mpl-ear-6-progress',
        title: 'Pitch Accuracy Training',
        description: 'Develop perfect pitch awareness and relative pitch skills. Improve your ability to sing and identify specific pitches.',
        duration: '18-20 min',
        level: 'Intermediate',
        depthLevel: 5,
        badge: 'Premium',
        pagePath: 'lesson-ear-6.html',
        configPath: './configs/lesson-ear-6.config.js'
      },
      {
        slug: 'lesson-ear-7',
        lessonKey: 'mpl-ear-7-progress',
        title: 'Melodic Dictation Basics',
        description: 'Transcribe simple melodies by ear. Combine interval recognition, rhythm, and pitch to write what you hear.',
        duration: '20-22 min',
        level: 'Intermediate',
        depthLevel: 6,
        badge: 'Premium',
        pagePath: 'lesson-ear-7.html',
        configPath: './configs/lesson-ear-7.config.js'
      },

      // --- LEVEL 7-9: ADVANCED ---
      {
        slug: 'lesson-ear-8',
        lessonKey: 'mpl-ear-8-progress',
        title: 'Chord Progression Ear Training',
        description: 'Identify common chord progressions and harmonic movement. Recognize I-IV-V, ii-V-I, and other foundational patterns by ear.',
        duration: '20-22 min',
        level: 'Advanced',
        depthLevel: 7,
        badge: 'Premium',
        pagePath: 'lesson-ear-8.html',
        configPath: './configs/lesson-ear-8.config.js'
      },
      {
        slug: 'lesson-ear-9',
        lessonKey: 'mpl-ear-9-progress',
        title: 'Genre & Style Identification',
        description: 'Recognize musical genres and production styles by their sonic characteristics. Analyze arrangement, instrumentation, and mixing approach.',
        duration: '20-25 min',
        level: 'Advanced',
        depthLevel: 8,
        badge: 'Premium',
        pagePath: 'lesson-ear-9.html',
        configPath: './configs/lesson-ear-9.config.js'
      },
      {
        slug: 'lesson-ear-10',
        lessonKey: 'mpl-ear-10-progress',
        title: 'Advanced Harmonic Dictation',
        description: 'Transcribe complex chord progressions with extensions, alterations, and voice leading. Master professional-level harmonic ear training.',
        duration: '25-30 min',
        level: 'Expert',
        depthLevel: 9,
        badge: 'Premium',
        pagePath: 'lesson-ear-10.html',
        configPath: './configs/lesson-ear-10.config.js'
      }
    ]
  },

  // ============================================================
  // BASS & LOW END MODULE (20 Lessons)
  // ============================================================
  {
    slug: 'bass',
    title: 'Bass & Low End',
    description: 'Master bass fundamentals from root notes to advanced layering. Learn how bass and kick work together, program genre-specific patterns, and create professional low-end foundation.',
    lessons: [
      // --- LEVEL 1-2: BEGINNER ---
      {
        slug: 'lesson-bass-1',
        lessonKey: 'mpl-bass-1-progress',
        title: 'Bass Fundamentals: Root Notes',
        description: 'Learn what bass does in music. Place root notes that lock with your kick drum to create a solid low-end foundation.',
        duration: '10-12 min',
        level: 'Beginner',
        depthLevel: 1,
        badge: 'Free',
        pagePath: 'lesson-bass-1.html',
        configPath: './configs/lesson-bass-1.config.js'
      },
      {
        slug: 'lesson-bass-2',
        lessonKey: 'mpl-bass-2-progress',
        title: 'Bass & Kick Relationship',
        description: 'Understand how bass and kick work together in the low end. Program bass notes that complement, not compete with, your kick pattern.',
        duration: '10-12 min',
        level: 'Beginner',
        depthLevel: 2,
        badge: 'Free',
        pagePath: 'lesson-bass-2.html',
        configPath: './configs/lesson-bass-2.config.js'
      },
      {
        slug: 'lesson-bass-3',
        lessonKey: 'mpl-bass-3-progress',
        title: 'Simple Bassline: Stepwise Motion',
        description: 'Create your first moving bassline. Use stepwise motion (neighboring notes) to build smooth, musical bass patterns.',
        duration: '12-14 min',
        level: 'Beginner',
        depthLevel: 2,
        pagePath: 'lesson-bass-3.html',
        configPath: './configs/lesson-bass-3.config.js'
      },

      // --- LEVEL 4-5: INTERMEDIATE ---
      {
        slug: 'lesson-bass-4',
        lessonKey: 'mpl-bass-4-progress',
        title: 'House Bass: Repetitive Grooves',
        description: 'Program the classic house bass pattern: repetitive root notes with rhythmic variation. Master the hypnotic, driving bassline.',
        duration: '12-14 min',
        level: 'Intermediate',
        depthLevel: 4,
        pagePath: 'lesson-bass-4.html',
        configPath: './configs/lesson-bass-4.config.js'
      },
      {
        slug: 'lesson-bass-5',
        lessonKey: 'mpl-bass-5-progress',
        title: '808 Bass Basics',
        description: 'Create 808-style bass: sustained low notes with pitch decay. The foundation of trap, hip-hop, and modern bass music.',
        duration: '12-14 min',
        level: 'Intermediate',
        depthLevel: 4,
        pagePath: 'lesson-bass-5.html',
        configPath: './configs/lesson-bass-5.config.js'
      },
      {
        slug: 'lesson-bass-6',
        lessonKey: 'mpl-bass-6-progress',
        title: 'Walking Basslines',
        description: 'Build smooth, walking basslines that move through chord changes. Use passing tones to connect chords musically.',
        duration: '14-16 min',
        level: 'Intermediate',
        depthLevel: 5,
        pagePath: 'lesson-bass-6.html',
        configPath: './configs/lesson-bass-6.config.js'
      },
      {
        slug: 'lesson-bass-7',
        lessonKey: 'mpl-bass-7-progress',
        title: 'Sidechain Compression Basics',
        description: 'Learn why bass "ducks" when the kick hits. Program patterns designed for sidechain compression to avoid mud.',
        duration: '12-14 min',
        level: 'Intermediate',
        depthLevel: 5,
        pagePath: 'lesson-bass-7.html',
        configPath: './configs/lesson-bass-7.config.js'
      },

      // --- LEVEL 7-8: ADVANCED ---
      {
        slug: 'lesson-bass-8',
        lessonKey: 'mpl-bass-8-progress',
        title: 'Sub Bass Layering',
        description: 'Layer sub bass (pure sine wave) with mid bass for clarity and weight. Master the two-layer bass technique.',
        duration: '14-16 min',
        level: 'Advanced',
        depthLevel: 7,
        pagePath: 'lesson-bass-8.html',
        configPath: './configs/lesson-bass-8.config.js'
      },
      {
        slug: 'lesson-bass-9',
        lessonKey: 'mpl-bass-9-progress',
        title: 'Bass Fills & Transitions',
        description: 'Add movement between song sections. Create fill patterns that build tension and guide listeners through changes.',
        duration: '14-16 min',
        level: 'Advanced',
        depthLevel: 7,
        pagePath: 'lesson-bass-9.html',
        configPath: './configs/lesson-bass-9.config.js'
      },
      {
        slug: 'lesson-bass-10',
        lessonKey: 'mpl-bass-10-progress',
        title: 'Genre Bass: Techno vs Hip-Hop',
        description: 'Compare and contrast techno (driving, hypnotic) vs hip-hop (rhythmic, syncopated) bass approaches. Apply genre-specific techniques.',
        duration: '16-18 min',
        level: 'Advanced',
        depthLevel: 8,
        pagePath: 'lesson-bass-10.html',
        configPath: './configs/lesson-bass-10.config.js'
      },

      // --- NEW ADVANCED LESSONS (11-15) ---
      {
        slug: 'lesson-bass-11',
        lessonKey: 'mpl-bass-11-progress',
        title: 'Funk Bass: Slap, Pop & Groove',
        description: 'Master funk bass patterns with syncopated rhythms, ghost notes, and percussive techniques. Create that classic P-Funk bounce.',
        duration: '18-22 min',
        level: 'Advanced',
        depthLevel: 8,
        badge: 'Premium',
        pagePath: 'lesson-bass-11.html',
        configPath: './configs/lesson-bass-11.config.js'
      },
      {
        slug: 'lesson-bass-12',
        lessonKey: 'mpl-bass-12-progress',
        title: 'Jazz Walking Bass: Advanced Techniques',
        description: 'Build sophisticated walking basslines with chromatic approaches, chord tone targets, and rhythmic displacement.',
        duration: '20-25 min',
        level: 'Advanced',
        depthLevel: 8,
        badge: 'Premium',
        pagePath: 'lesson-bass-12.html',
        configPath: './configs/lesson-bass-12.config.js'
      },
      {
        slug: 'lesson-bass-13',
        lessonKey: 'mpl-bass-13-progress',
        title: 'Blues Bass: Turnarounds & Patterns',
        description: 'Learn the 12-bar blues bass foundation with turnarounds, walking patterns, and classic blues vocabulary.',
        duration: '18-22 min',
        level: 'Advanced',
        depthLevel: 8,
        badge: 'Premium',
        pagePath: 'lesson-bass-13.html',
        configPath: './configs/lesson-bass-13.config.js'
      },
      {
        slug: 'lesson-bass-14',
        lessonKey: 'mpl-bass-14-progress',
        title: 'R&B Bass: Smooth & Syncopated',
        description: 'Create sultry R&B basslines with smooth movement, syncopation, and space. Master the art of saying more with less.',
        duration: '18-22 min',
        level: 'Advanced',
        depthLevel: 9,
        badge: 'Premium',
        pagePath: 'lesson-bass-14.html',
        configPath: './configs/lesson-bass-14.config.js'
      },
      {
        slug: 'lesson-bass-15',
        lessonKey: 'mpl-bass-15-progress',
        title: 'Reggae & Dub Bass: Heavy Low End',
        description: 'Program massive reggae basslines with emphasis on the one and three. Master dub bass with delay and space.',
        duration: '18-22 min',
        level: 'Advanced',
        depthLevel: 9,
        badge: 'Premium',
        pagePath: 'lesson-bass-15.html',
        configPath: './configs/lesson-bass-15.config.js'
      },

      // --- EXPERT LESSONS (16-20) ---
      {
        slug: 'lesson-bass-16',
        lessonKey: 'mpl-bass-16-progress',
        title: 'UK Garage & Grime Bass',
        description: 'Create skippy UK Garage bass and dark Grime sub-bass patterns. Master the UK bass sound with 2-step rhythms.',
        duration: '20-25 min',
        level: 'Expert',
        depthLevel: 9,
        badge: 'Premium',
        pagePath: 'lesson-bass-16.html',
        configPath: './configs/lesson-bass-16.config.js'
      },
      {
        slug: 'lesson-bass-17',
        lessonKey: 'mpl-bass-17-progress',
        title: 'Bass Synthesis & Sound Design',
        description: 'Design bass sounds from scratch using synthesis. Master filters, envelopes, oscillators, and modulation for massive bass tones.',
        duration: '25-30 min',
        level: 'Expert',
        depthLevel: 9,
        badge: 'Premium',
        pagePath: 'lesson-bass-17.html',
        configPath: './configs/lesson-bass-17.config.js'
      },
      {
        slug: 'lesson-bass-18',
        lessonKey: 'mpl-bass-18-progress',
        title: 'Bass EQ & Frequency Management',
        description: 'Carve perfect bass frequencies with EQ. Remove mud, boost clarity, and manage the sub-to-mid relationship professionally.',
        duration: '22-28 min',
        level: 'Expert',
        depthLevel: 9,
        badge: 'Premium',
        pagePath: 'lesson-bass-18.html',
        configPath: './configs/lesson-bass-18.config.js'
      },
      {
        slug: 'lesson-bass-19',
        lessonKey: 'mpl-bass-19-progress',
        title: 'Bass Expression & Automation',
        description: 'Bring bass to life with automation, pitch glides, portamento, and expression control. Add movement and emotion.',
        duration: '22-28 min',
        level: 'Expert',
        depthLevel: 10,
        badge: 'Premium',
        pagePath: 'lesson-bass-19.html',
        configPath: './configs/lesson-bass-19.config.js'
      },
      {
        slug: 'lesson-bass-20',
        lessonKey: 'mpl-bass-20-progress',
        title: 'Masterclass: Complete Bass Production',
        description: 'Final project: create a professional multi-genre bass production from synthesis to mixing. Showcase all techniques learned.',
        duration: '35-45 min',
        level: 'Expert',
        depthLevel: 10,
        badge: 'Premium',
        pagePath: 'lesson-bass-20.html',
        configPath: './configs/lesson-bass-20.config.js'
      }
    ]
  },

  // ARRANGEMENT & SONGWRITING MODULE (20 Lessons)
  // ============================================================
  {
    slug: 'arrangement',
    title: 'Arrangement & Songwriting',
    description: 'Structure your loops into full songs with transitions, hooks, and energy flow. Master tension, release, and professional arrangement techniques.',
    lessons: [
      // --- LEVEL 1-3: BEGINNER ---
      {
        slug: 'lesson-arrangement-1',
        lessonKey: 'mpl-arrangement-1-progress',
        title: 'From Loop to Song: Understanding Structure',
        description: 'Learn how to organize musical ideas into sections—intro, verse, chorus, bridge—to create complete songs.',
        duration: '15-20 min',
        level: 'Beginner',
        depthLevel: 1,
        badge: 'Free',
        pagePath: 'lesson-arrangement-1.html',
        configPath: './configs/lesson-arrangement-1.config.js'
      },
      {
        slug: 'lesson-arrangement-2',
        lessonKey: 'mpl-arrangement-2-progress',
        title: 'Transitions & Energy Flow',
        description: 'Master risers, falls, filter sweeps, and drum fills to create smooth transitions between sections.',
        duration: '15-20 min',
        level: 'Beginner',
        depthLevel: 2,
        badge: 'Free',
        pagePath: 'lesson-arrangement-2.html',
        configPath: './configs/lesson-arrangement-2.config.js'
      },
      {
        slug: 'lesson-arrangement-3',
        lessonKey: 'mpl-arrangement-3-progress',
        title: 'Arranging a Complete Track',
        description: 'Put it all together: arrange a full song from start to finish using everything you have learned.',
        duration: '20-25 min',
        level: 'Beginner',
        depthLevel: 3,
        badge: 'Free',
        pagePath: 'lesson-arrangement-3.html',
        configPath: './configs/lesson-arrangement-3.config.js'
      },
      {
        slug: 'lesson-arrangement-4',
        lessonKey: 'mpl-arrangement-4-progress',
        title: 'The 5 Elements of Arrangement',
        description: 'Learn Bobby Owsinski\'s 5 arrangement elements: Foundation, Pad, Rhythm, Lead, and Fills.',
        duration: '15-20 min',
        level: 'Beginner',
        depthLevel: 3,
        badge: 'Free',
        pagePath: 'lesson-arrangement-4.html',
        configPath: './configs/lesson-arrangement-4.config.js'
      },

      // --- LEVEL 4-6: INTERMEDIATE ---
      {
        slug: 'lesson-arrangement-5',
        lessonKey: 'mpl-arrangement-5-progress',
        title: 'Pop & Rock Song Structures',
        description: 'Master the classic ABABCB structure. Learn verse-chorus dynamics and bridge placement.',
        duration: '18-22 min',
        level: 'Intermediate',
        depthLevel: 4,
        badge: 'Premium',
        pagePath: 'lesson-arrangement-5.html',
        configPath: './configs/lesson-arrangement-5.config.js'
      },
      {
        slug: 'lesson-arrangement-6',
        lessonKey: 'mpl-arrangement-6-progress',
        title: 'EDM & Electronic Structures',
        description: 'Master build-drop-breakdown cycles. Learn tension building and impact moments.',
        duration: '18-22 min',
        level: 'Intermediate',
        depthLevel: 4,
        badge: 'Premium',
        pagePath: 'lesson-arrangement-6.html',
        configPath: './configs/lesson-arrangement-6.config.js'
      },
      {
        slug: 'lesson-arrangement-7',
        lessonKey: 'mpl-arrangement-7-progress',
        title: 'Hip-Hop & Urban Structures',
        description: 'Arrange hip-hop tracks with verses, hooks, and 808 patterns. Learn beat switches and interludes.',
        duration: '18-22 min',
        level: 'Intermediate',
        depthLevel: 5,
        badge: 'Premium',
        pagePath: 'lesson-arrangement-7.html',
        configPath: './configs/lesson-arrangement-7.config.js'
      },
      {
        slug: 'lesson-arrangement-8',
        lessonKey: 'mpl-arrangement-8-progress',
        title: 'Intro & Outro Mastery',
        description: 'Craft compelling introductions and satisfying endings. Hook listeners and leave lasting impressions.',
        duration: '15-20 min',
        level: 'Intermediate',
        depthLevel: 5,
        badge: 'Premium',
        pagePath: 'lesson-arrangement-8.html',
        configPath: './configs/lesson-arrangement-8.config.js'
      },
      {
        slug: 'lesson-arrangement-9',
        lessonKey: 'mpl-arrangement-9-progress',
        title: 'Tension & Release Fundamentals',
        description: 'Master the psychological art of tension and release. Create anticipation and satisfaction.',
        duration: '20-25 min',
        level: 'Intermediate',
        depthLevel: 6,
        badge: 'Premium',
        pagePath: 'lesson-arrangement-9.html',
        configPath: './configs/lesson-arrangement-9.config.js'
      },
      {
        slug: 'lesson-arrangement-10',
        lessonKey: 'mpl-arrangement-10-progress',
        title: 'Automation for Arrangement',
        description: 'Use automation to evolve your arrangement. Volume, filter, and effect automation techniques.',
        duration: '20-25 min',
        level: 'Intermediate',
        depthLevel: 6,
        badge: 'Premium',
        pagePath: 'lesson-arrangement-10.html',
        configPath: './configs/lesson-arrangement-10.config.js'
      },

      // --- LEVEL 7-8: ADVANCED ---
      {
        slug: 'lesson-arrangement-11',
        lessonKey: 'mpl-arrangement-11-progress',
        title: 'Key Changes & Modulation',
        description: 'Add excitement with key changes. Learn smooth modulation techniques and dramatic shifts.',
        duration: '22-28 min',
        level: 'Advanced',
        depthLevel: 7,
        badge: 'Premium',
        pagePath: 'lesson-arrangement-11.html',
        configPath: './configs/lesson-arrangement-11.config.js'
      },
      {
        slug: 'lesson-arrangement-12',
        lessonKey: 'mpl-arrangement-12-progress',
        title: 'Dynamic Arrangement Arcs',
        description: 'Plan macro-level dynamics across your entire track. Create compelling energy journeys.',
        duration: '22-28 min',
        level: 'Advanced',
        depthLevel: 7,
        badge: 'Premium',
        pagePath: 'lesson-arrangement-12.html',
        configPath: './configs/lesson-arrangement-12.config.js'
      },
      {
        slug: 'lesson-arrangement-13',
        lessonKey: 'mpl-arrangement-13-progress',
        title: 'Instrumental Arrangement',
        description: 'Layer instruments effectively. Know when to add/remove elements for maximum impact.',
        duration: '22-28 min',
        level: 'Advanced',
        depthLevel: 8,
        badge: 'Premium',
        pagePath: 'lesson-arrangement-13.html',
        configPath: './configs/lesson-arrangement-13.config.js'
      },
      {
        slug: 'lesson-arrangement-14',
        lessonKey: 'mpl-arrangement-14-progress',
        title: 'Countermelody & Harmonic Layers',
        description: 'Add depth with countermelodies and harmonic support layers. Create rich musical textures.',
        duration: '22-28 min',
        level: 'Advanced',
        depthLevel: 8,
        badge: 'Premium',
        pagePath: 'lesson-arrangement-14.html',
        configPath: './configs/lesson-arrangement-14.config.js'
      },

      // --- LEVEL 9-10: EXPERT ---
      {
        slug: 'lesson-arrangement-15',
        lessonKey: 'mpl-arrangement-15-progress',
        title: 'Reference Track Analysis',
        description: 'Learn to analyze professional arrangements. Extract structure, timing, and techniques from hits.',
        duration: '25-30 min',
        level: 'Expert',
        depthLevel: 9,
        badge: 'Premium',
        pagePath: 'lesson-arrangement-15.html',
        configPath: './configs/lesson-arrangement-15.config.js'
      },
      {
        slug: 'lesson-arrangement-16',
        lessonKey: 'mpl-arrangement-16-progress',
        title: 'Extended & Unconventional Forms',
        description: 'Break from standard structures. Create progressive, through-composed, and experimental arrangements.',
        duration: '25-30 min',
        level: 'Expert',
        depthLevel: 9,
        badge: 'Premium',
        pagePath: 'lesson-arrangement-16.html',
        configPath: './configs/lesson-arrangement-16.config.js'
      },
      {
        slug: 'lesson-arrangement-17',
        lessonKey: 'mpl-arrangement-17-progress',
        title: 'Arrangement for Sync & Media',
        description: 'Arrange music for film, TV, games, and advertising. Create versions and stems for licensing.',
        duration: '25-30 min',
        level: 'Expert',
        depthLevel: 10,
        badge: 'Premium',
        pagePath: 'lesson-arrangement-17.html',
        configPath: './configs/lesson-arrangement-17.config.js'
      },
      {
        slug: 'lesson-arrangement-18',
        lessonKey: 'mpl-arrangement-18-progress',
        title: 'Live Performance Arrangement',
        description: 'Arrange tracks for live performance. Create DJ-friendly edits and performance-ready versions.',
        duration: '25-30 min',
        level: 'Expert',
        depthLevel: 10,
        badge: 'Premium',
        pagePath: 'lesson-arrangement-18.html',
        configPath: './configs/lesson-arrangement-18.config.js'
      },
      {
        slug: 'lesson-arrangement-19',
        lessonKey: 'mpl-arrangement-19-progress',
        title: 'Remixing & Rearrangement',
        description: 'Transform existing tracks through rearrangement. Learn remix techniques and creative transformation.',
        duration: '28-35 min',
        level: 'Expert',
        depthLevel: 10,
        badge: 'Premium',
        pagePath: 'lesson-arrangement-19.html',
        configPath: './configs/lesson-arrangement-19.config.js'
      },
      {
        slug: 'lesson-arrangement-20',
        lessonKey: 'mpl-arrangement-20-progress',
        title: 'Masterclass: Complete Song Production',
        description: 'Final project: produce a complete, release-ready song applying all arrangement techniques.',
        duration: '35-45 min',
        level: 'Expert',
        depthLevel: 10,
        badge: 'Premium',
        pagePath: 'lesson-arrangement-20.html',
        configPath: './configs/lesson-arrangement-20.config.js'
      }
    ]
  },

  // ============================================================
  // SOUND DESIGN MODULE (15 Lessons)
  // ============================================================
  {
    slug: 'sound-design',
    title: 'Sound Design',
    description: 'Craft your own patches with synthesis and sampling techniques. Learn subtractive, FM, and wavetable synthesis, create sampler instruments, and design professional sample packs.',
    lessons: [
      // BEGINNER (1-4)
      {
        slug: 'lesson-sound-design-1',
        lessonKey: 'mpl-sound-design-1-progress',
        title: 'Subtractive Synthesis Basics',
        description: 'Master oscillators, filters, and envelopes - the foundation of analog-style synthesis.',
        duration: '15-18 min',
        level: 'Beginner',
        depthLevel: 1,
        badge: 'Free',
        pagePath: 'lesson-sound-design-1.html',
        configPath: './configs/lesson-sound-design-1.config.js'
      },
      {
        slug: 'lesson-sound-design-2',
        lessonKey: 'mpl-sound-design-2-progress',
        title: 'LFOs & Modulation',
        description: 'Add movement and life to your sounds with low-frequency oscillators and modulation routing.',
        duration: '12-15 min',
        level: 'Beginner',
        depthLevel: 2,
        badge: 'Free',
        pagePath: 'lesson-sound-design-2.html',
        configPath: './configs/lesson-sound-design-2.config.js'
      },
      {
        slug: 'lesson-sound-design-3',
        lessonKey: 'mpl-sound-design-3-progress',
        title: 'FM Synthesis Fundamentals',
        description: 'Explore frequency modulation to create complex, evolving timbres.',
        duration: '15-18 min',
        level: 'Beginner',
        depthLevel: 2,
        badge: 'Free',
        pagePath: 'lesson-sound-design-3.html',
        configPath: './configs/lesson-sound-design-3.config.js'
      },
      {
        slug: 'lesson-sound-design-4',
        lessonKey: 'mpl-sound-design-4-progress',
        title: 'Wavetable Synthesis',
        description: 'Navigate through wavetables to create modern, digital textures.',
        duration: '15-18 min',
        level: 'Beginner',
        depthLevel: 3,
        badge: 'Premium',
        pagePath: 'lesson-sound-design-4.html',
        configPath: './configs/lesson-sound-design-4.config.js'
      },

      // INTERMEDIATE (5-9)
      {
        slug: 'lesson-sound-design-5',
        lessonKey: 'mpl-sound-design-5-progress',
        title: 'Sampling Fundamentals',
        description: 'Record, edit, and process samples for use in your productions.',
        duration: '18-22 min',
        level: 'Intermediate',
        depthLevel: 4,
        badge: 'Premium',
        pagePath: 'lesson-sound-design-5.html',
        configPath: './configs/lesson-sound-design-5.config.js'
      },
      {
        slug: 'lesson-sound-design-6',
        lessonKey: 'mpl-sound-design-6-progress',
        title: 'Sound Layering Techniques',
        description: 'Combine multiple sounds to create rich, complex textures.',
        duration: '15-20 min',
        level: 'Intermediate',
        depthLevel: 4,
        badge: 'Premium',
        pagePath: 'lesson-sound-design-6.html',
        configPath: './configs/lesson-sound-design-6.config.js'
      },
      {
        slug: 'lesson-sound-design-7',
        lessonKey: 'mpl-sound-design-7-progress',
        title: 'Sample Pack Creation',
        description: 'Design and organize professional sample packs for distribution or sale.',
        duration: '20-25 min',
        level: 'Intermediate',
        depthLevel: 5,
        badge: 'Premium',
        pagePath: 'lesson-sound-design-7.html',
        configPath: './configs/lesson-sound-design-7.config.js'
      },
      {
        slug: 'lesson-sound-design-8',
        lessonKey: 'mpl-sound-design-8-progress',
        title: 'Granular Synthesis',
        description: 'Manipulate tiny grains of sound to create atmospheric textures and effects.',
        duration: '18-22 min',
        level: 'Intermediate',
        depthLevel: 5,
        badge: 'Premium',
        pagePath: 'lesson-sound-design-8.html',
        configPath: './configs/lesson-sound-design-8.config.js'
      },
      {
        slug: 'lesson-sound-design-9',
        lessonKey: 'mpl-sound-design-9-progress',
        title: 'FX Sound Design',
        description: 'Create impacts, risers, sweeps, and transitions for electronic music.',
        duration: '18-22 min',
        level: 'Intermediate',
        depthLevel: 6,
        badge: 'Premium',
        pagePath: 'lesson-sound-design-9.html',
        configPath: './configs/lesson-sound-design-9.config.js'
      },

      // ADVANCED (10-13)
      {
        slug: 'lesson-sound-design-10',
        lessonKey: 'mpl-sound-design-10-progress',
        title: 'Multi-Sampled Instruments',
        description: 'Build professional sampler instruments with velocity layers and round robins.',
        duration: '25-30 min',
        level: 'Advanced',
        depthLevel: 7,
        badge: 'Premium',
        pagePath: 'lesson-sound-design-10.html',
        configPath: './configs/lesson-sound-design-10.config.js'
      },
      {
        slug: 'lesson-sound-design-11',
        lessonKey: 'mpl-sound-design-11-progress',
        title: 'Foley & Sound Effects',
        description: 'Record and design realistic sound effects for film, games, and media.',
        duration: '22-28 min',
        level: 'Advanced',
        depthLevel: 7,
        badge: 'Premium',
        pagePath: 'lesson-sound-design-11.html',
        configPath: './configs/lesson-sound-design-11.config.js'
      },
      {
        slug: 'lesson-sound-design-12',
        lessonKey: 'mpl-sound-design-12-progress',
        title: 'Audio for Video Games',
        description: 'Create interactive, non-linear audio that responds to gameplay.',
        duration: '25-30 min',
        level: 'Advanced',
        depthLevel: 8,
        badge: 'Premium',
        pagePath: 'lesson-sound-design-12.html',
        configPath: './configs/lesson-sound-design-12.config.js'
      },
      {
        slug: 'lesson-sound-design-13',
        lessonKey: 'mpl-sound-design-13-progress',
        title: 'Cinematic Sound Design',
        description: 'Design dramatic sounds for film, trailers, and visual media.',
        duration: '25-30 min',
        level: 'Advanced',
        depthLevel: 8,
        badge: 'Premium',
        pagePath: 'lesson-sound-design-13.html',
        configPath: './configs/lesson-sound-design-13.config.js'
      },

      // EXPERT (14-15)
      {
        slug: 'lesson-sound-design-14',
        lessonKey: 'mpl-sound-design-14-progress',
        title: 'Advanced Synthesis Techniques',
        description: 'Combine multiple synthesis methods to create signature sounds.',
        duration: '30-35 min',
        level: 'Expert',
        depthLevel: 9,
        badge: 'Premium',
        pagePath: 'lesson-sound-design-14.html',
        configPath: './configs/lesson-sound-design-14.config.js'
      },
      {
        slug: 'lesson-sound-design-15',
        lessonKey: 'mpl-sound-design-15-progress',
        title: 'Masterclass: Complete Sound Library',
        description: 'Final project: create a complete, professional sound library from scratch.',
        duration: '45-60 min',
        level: 'Expert',
        depthLevel: 10,
        badge: 'Premium',
        pagePath: 'lesson-sound-design-15.html',
        configPath: './configs/lesson-sound-design-15.config.js'
      }
    ]
  },

  // ============================================================
  // MIXING MODULE (20 Lessons) ✨ EXPANDED
  // ============================================================
  {
    slug: 'mixing',
    title: 'Mixing',
    description: 'Master professional mixing techniques: gain staging, EQ, compression, reverb, automation, and genre-specific workflows. Balance levels, carve space, and glue your tracks together.',
    lessons: [
      // BEGINNER (1-4)
      {
        slug: 'lesson-mixing-1',
        lessonKey: 'mpl-mixing-1-progress',
        title: 'Gain Staging & Levels',
        description: 'Set healthy headroom and balance before diving into processing. Master proper gain structure.',
        duration: '15-18 min',
        level: 'Beginner',
        depthLevel: 1,
        badge: 'Free',
        pagePath: 'lesson-mixing-1.html',
        configPath: './configs/lesson-mixing-1.config.js'
      },
      {
        slug: 'lesson-mixing-2',
        lessonKey: 'mpl-mixing-2-progress',
        title: 'EQ Fundamentals',
        description: 'Learn frequency ranges, filtering, and how to carve space in your mix with equalization.',
        duration: '18-22 min',
        level: 'Beginner',
        depthLevel: 2,
        badge: 'Free',
        pagePath: 'lesson-mixing-2.html',
        configPath: './configs/lesson-mixing-2.config.js'
      },
      {
        slug: 'lesson-mixing-3',
        lessonKey: 'mpl-mixing-3-progress',
        title: 'Compression Basics',
        description: 'Control dynamics with compression: threshold, ratio, attack, release, and makeup gain.',
        duration: '18-22 min',
        level: 'Beginner',
        depthLevel: 2,
        badge: 'Free',
        pagePath: 'lesson-mixing-3.html',
        configPath: './configs/lesson-mixing-3.config.js'
      },
      {
        slug: 'lesson-mixing-4',
        lessonKey: 'mpl-mixing-4-progress',
        title: 'Reverb & Space',
        description: 'Create depth and dimension with reverb. Learn room types, pre-delay, and reverb techniques.',
        duration: '15-18 min',
        level: 'Beginner',
        depthLevel: 3,
        badge: 'Premium',
        pagePath: 'lesson-mixing-4.html',
        configPath: './configs/lesson-mixing-4.config.js'
      },

      // INTERMEDIATE (5-9)
      {
        slug: 'lesson-mixing-5',
        lessonKey: 'mpl-mixing-5-progress',
        title: 'Delay & Time-Based Effects',
        description: 'Master delay, echo, chorus, and flanger for rhythmic and spatial enhancement.',
        duration: '15-18 min',
        level: 'Intermediate',
        depthLevel: 4,
        badge: 'Premium',
        pagePath: 'lesson-mixing-5.html',
        configPath: './configs/lesson-mixing-5.config.js'
      },
      {
        slug: 'lesson-mixing-6',
        lessonKey: 'mpl-mixing-6-progress',
        title: 'Panning & Stereo Width',
        description: 'Create a wide, immersive mix with strategic panning and stereo imaging techniques.',
        duration: '15-18 min',
        level: 'Intermediate',
        depthLevel: 4,
        badge: 'Premium',
        pagePath: 'lesson-mixing-6.html',
        configPath: './configs/lesson-mixing-6.config.js'
      },
      {
        slug: 'lesson-mixing-7',
        lessonKey: 'mpl-mixing-7-progress',
        title: 'Sidechain & Ducking',
        description: 'Use sidechain compression to create space, pumping effects, and rhythmic movement.',
        duration: '18-22 min',
        level: 'Intermediate',
        depthLevel: 5,
        badge: 'Premium',
        pagePath: 'lesson-mixing-7.html',
        configPath: './configs/lesson-mixing-7.config.js'
      },
      {
        slug: 'lesson-mixing-8',
        lessonKey: 'mpl-mixing-8-progress',
        title: 'Automation in Mixing',
        description: 'Bring your mix to life with volume, pan, and effect automation throughout the arrangement.',
        duration: '18-22 min',
        level: 'Intermediate',
        depthLevel: 5,
        badge: 'Premium',
        pagePath: 'lesson-mixing-8.html',
        configPath: './configs/lesson-mixing-8.config.js'
      },
      {
        slug: 'lesson-mixing-9',
        lessonKey: 'mpl-mixing-9-progress',
        title: 'Parallel Processing',
        description: 'Blend wet and dry signals with parallel compression, reverb, and distortion for depth.',
        duration: '20-25 min',
        level: 'Intermediate',
        depthLevel: 6,
        badge: 'Premium',
        pagePath: 'lesson-mixing-9.html',
        configPath: './configs/lesson-mixing-9.config.js'
      },

      // ADVANCED (10-13)
      {
        slug: 'lesson-mixing-10',
        lessonKey: 'mpl-mixing-10-progress',
        title: 'Mixing Drums',
        description: 'Professional drum mixing: kick-bass relationship, drum bus processing, and punch.',
        duration: '22-28 min',
        level: 'Advanced',
        depthLevel: 7,
        badge: 'Premium',
        pagePath: 'lesson-mixing-10.html',
        configPath: './configs/lesson-mixing-10.config.js'
      },
      {
        slug: 'lesson-mixing-11',
        lessonKey: 'mpl-mixing-11-progress',
        title: 'Mixing Bass & Low End',
        description: 'Control your low frequencies: sub bass management, kick-bass separation, and clarity.',
        duration: '22-28 min',
        level: 'Advanced',
        depthLevel: 7,
        badge: 'Premium',
        pagePath: 'lesson-mixing-11.html',
        configPath: './configs/lesson-mixing-11.config.js'
      },
      {
        slug: 'lesson-mixing-12',
        lessonKey: 'mpl-mixing-12-progress',
        title: 'Mixing Vocals & Leads',
        description: 'Make vocals sit perfectly in the mix with de-essing, dynamic EQ, and spatial effects.',
        duration: '25-30 min',
        level: 'Advanced',
        depthLevel: 8,
        badge: 'Premium',
        pagePath: 'lesson-mixing-12.html',
        configPath: './configs/lesson-mixing-12.config.js'
      },
      {
        slug: 'lesson-mixing-13',
        lessonKey: 'mpl-mixing-13-progress',
        title: 'Genre-Specific Mixing',
        description: 'Learn mixing approaches for different genres: EDM, hip-hop, rock, pop, and electronic.',
        duration: '25-30 min',
        level: 'Advanced',
        depthLevel: 8,
        badge: 'Premium',
        pagePath: 'lesson-mixing-13.html',
        configPath: './configs/lesson-mixing-13.config.js'
      },

      // EXPERT (14-15)
      {
        slug: 'lesson-mixing-14',
        lessonKey: 'mpl-mixing-14-progress',
        title: 'Reference Tracks & Critical Listening',
        description: 'Develop your ears: A/B comparison, frequency analysis, and mixing to professional standards.',
        duration: '25-30 min',
        level: 'Expert',
        depthLevel: 9,
        badge: 'Premium',
        pagePath: 'lesson-mixing-14.html',
        configPath: './configs/lesson-mixing-14.config.js'
      },
      {
        slug: 'lesson-mixing-15',
        lessonKey: 'mpl-mixing-15-progress',
        title: 'Masterclass: Complete Mix Project',
        description: 'Final project: mix a complete multi-track project from raw stems to final stereo mix.',
        duration: '45-60 min',
        level: 'Expert',
        depthLevel: 10,
        badge: 'Premium',
        pagePath: 'lesson-mixing-15.html',
        configPath: './configs/lesson-mixing-15.config.js'
      },

      // ADVANCED EXPERT (16-20)
      {
        slug: 'lesson-mixing-16',
        lessonKey: 'mpl-mixing-16-progress',
        title: 'Advanced Parallel Processing',
        description: 'Master parallel compression, saturation, and distortion to add power and character without losing dynamics.',
        duration: '25-30 min',
        level: 'Expert',
        depthLevel: 9,
        badge: 'Premium',
        pagePath: 'lesson-mixing-16.html',
        configPath: './configs/lesson-mixing-16.config.js'
      },
      {
        slug: 'lesson-mixing-17',
        lessonKey: 'mpl-mixing-17-progress',
        title: 'Mid-Side Processing & Stereo Imaging',
        description: 'Control stereo width with mid-side EQ, compression, and enhancement for professional spatial mixing.',
        duration: '28-32 min',
        level: 'Expert',
        depthLevel: 9,
        badge: 'Premium',
        pagePath: 'lesson-mixing-17.html',
        configPath: './configs/lesson-mixing-17.config.js'
      },
      {
        slug: 'lesson-mixing-18',
        lessonKey: 'mpl-mixing-18-progress',
        title: 'Mixing for Streaming Platforms',
        description: 'Optimize your mixes for Spotify, Apple Music, YouTube with loudness normalization and format-specific techniques.',
        duration: '22-28 min',
        level: 'Expert',
        depthLevel: 9,
        badge: 'Premium',
        pagePath: 'lesson-mixing-18.html',
        configPath: './configs/lesson-mixing-18.config.js'
      },
      {
        slug: 'lesson-mixing-19',
        lessonKey: 'mpl-mixing-19-progress',
        title: 'Stem Mixing & Bus Processing',
        description: 'Organize complex mixes with stem groups, bus compression, and group processing for cohesive sound.',
        duration: '25-30 min',
        level: 'Expert',
        depthLevel: 10,
        badge: 'Premium',
        pagePath: 'lesson-mixing-19.html',
        configPath: './configs/lesson-mixing-19.config.js'
      },
      {
        slug: 'lesson-mixing-20',
        lessonKey: 'mpl-mixing-20-progress',
        title: 'Advanced Automation Techniques',
        description: 'Master dynamic mixing with volume rides, effect automation, and movement for engaging, professional mixes.',
        duration: '28-35 min',
        level: 'Expert',
        depthLevel: 10,
        badge: 'Premium',
        pagePath: 'lesson-mixing-20.html',
        configPath: './configs/lesson-mixing-20.config.js'
      }
    ]
  },

  // ============================================================
  // VOCALS MODULE (12 Lessons)
  // ============================================================
  {
    slug: 'vocals',
    title: 'Vocals',
    description: 'Capture, edit, tune, and process vocals to perfection. Learn recording techniques, vocal editing, pitch correction, effects chains, and layering for professional vocal production.',
    lessons: [
      // BEGINNER (1-3)
      {
        slug: 'lesson-vocals-1',
        lessonKey: 'mpl-vocals-1-progress',
        title: 'Vocal Recording Setup',
        description: 'Choose the right microphone, set up your recording space, and capture clean vocal takes.',
        duration: '18-22 min',
        level: 'Beginner',
        depthLevel: 1,
        badge: 'Free',
        pagePath: 'lesson-vocals-1.html',
        configPath: './configs/lesson-vocals-1.config.js'
      },
      {
        slug: 'lesson-vocals-2',
        lessonKey: 'mpl-vocals-2-progress',
        title: 'Vocal Recording Techniques',
        description: 'Master mic technique, gain staging, and capturing multiple takes for comping.',
        duration: '18-22 min',
        level: 'Beginner',
        depthLevel: 2,
        badge: 'Free',
        pagePath: 'lesson-vocals-2.html',
        configPath: './configs/lesson-vocals-2.config.js'
      },
      {
        slug: 'lesson-vocals-3',
        lessonKey: 'mpl-vocals-3-progress',
        title: 'Vocal Editing Fundamentals',
        description: 'Clean up recordings: remove breaths, pops, and noise. Learn comping and timing adjustments.',
        duration: '20-25 min',
        level: 'Beginner',
        depthLevel: 2,
        badge: 'Free',
        pagePath: 'lesson-vocals-3.html',
        configPath: './configs/lesson-vocals-3.config.js'
      },

      // INTERMEDIATE (4-7)
      {
        slug: 'lesson-vocals-4',
        lessonKey: 'mpl-vocals-4-progress',
        title: 'Pitch Correction & Tuning',
        description: 'Use Auto-Tune, Melodyne, and manual pitch correction for natural or creative effects.',
        duration: '22-28 min',
        level: 'Intermediate',
        depthLevel: 4,
        badge: 'Premium',
        pagePath: 'lesson-vocals-4.html',
        configPath: './configs/lesson-vocals-4.config.js'
      },
      {
        slug: 'lesson-vocals-5',
        lessonKey: 'mpl-vocals-5-progress',
        title: 'Vocal Chain Essentials',
        description: 'Build a professional vocal chain: EQ, compression, de-essing, and saturation.',
        duration: '22-28 min',
        level: 'Intermediate',
        depthLevel: 4,
        badge: 'Premium',
        pagePath: 'lesson-vocals-5.html',
        configPath: './configs/lesson-vocals-5.config.js'
      },
      {
        slug: 'lesson-vocals-6',
        lessonKey: 'mpl-vocals-6-progress',
        title: 'Vocal Effects & Processing',
        description: 'Add reverb, delay, chorus, and modulation for depth, space, and character.',
        duration: '20-25 min',
        level: 'Intermediate',
        depthLevel: 5,
        badge: 'Premium',
        pagePath: 'lesson-vocals-6.html',
        configPath: './configs/lesson-vocals-6.config.js'
      },
      {
        slug: 'lesson-vocals-7',
        lessonKey: 'mpl-vocals-7-progress',
        title: 'Vocal Doubling & Layering',
        description: 'Create thick, wide vocals with doubling, harmonies, and layering techniques.',
        duration: '20-25 min',
        level: 'Intermediate',
        depthLevel: 5,
        badge: 'Premium',
        pagePath: 'lesson-vocals-7.html',
        configPath: './configs/lesson-vocals-7.config.js'
      },

      // ADVANCED (8-10)
      {
        slug: 'lesson-vocals-8',
        lessonKey: 'mpl-vocals-8-progress',
        title: 'Harmony & Backing Vocals',
        description: 'Arrange and produce harmony vocals, ad-libs, and background vocal stacks.',
        duration: '25-30 min',
        level: 'Advanced',
        depthLevel: 7,
        badge: 'Premium',
        pagePath: 'lesson-vocals-8.html',
        configPath: './configs/lesson-vocals-8.config.js'
      },
      {
        slug: 'lesson-vocals-9',
        lessonKey: 'mpl-vocals-9-progress',
        title: 'Creative Vocal Production',
        description: 'Vocal chopping, sampling, vocoding, and experimental vocal processing techniques.',
        duration: '25-30 min',
        level: 'Advanced',
        depthLevel: 7,
        badge: 'Premium',
        pagePath: 'lesson-vocals-9.html',
        configPath: './configs/lesson-vocals-9.config.js'
      },
      {
        slug: 'lesson-vocals-10',
        lessonKey: 'mpl-vocals-10-progress',
        title: 'Genre-Specific Vocal Production',
        description: 'Learn vocal production approaches for hip-hop, pop, R&B, electronic, and rock.',
        duration: '28-35 min',
        level: 'Advanced',
        depthLevel: 8,
        badge: 'Premium',
        pagePath: 'lesson-vocals-10.html',
        configPath: './configs/lesson-vocals-10.config.js'
      },

      // EXPERT (11-12)
      {
        slug: 'lesson-vocals-11',
        lessonKey: 'mpl-vocals-11-progress',
        title: 'Advanced Vocal Mixing',
        description: 'Master automation, parallel processing, and advanced techniques for radio-ready vocals.',
        duration: '30-35 min',
        level: 'Expert',
        depthLevel: 9,
        badge: 'Premium',
        pagePath: 'lesson-vocals-11.html',
        configPath: './configs/lesson-vocals-11.config.js'
      },
      {
        slug: 'lesson-vocals-12',
        lessonKey: 'mpl-vocals-12-progress',
        title: 'Masterclass: Complete Vocal Production',
        description: 'Final project: record, edit, tune, and mix a complete vocal production from scratch.',
        duration: '45-60 min',
        level: 'Expert',
        depthLevel: 10,
        badge: 'Premium',
        pagePath: 'lesson-vocals-12.html',
        configPath: './configs/lesson-vocals-12.config.js'
      },
      {
        slug: 'lesson-vocals-13',
        lessonKey: 'mpl-vocals-13-progress',
        title: 'Vocal Effects & Creative Processing',
        description: 'Master delay, reverb, distortion, and modulation effects for creative vocal treatments. Build vocal soundscapes and character.',
        duration: '22-26 min',
        level: 'Expert',
        depthLevel: 9,
        badge: 'Premium',
        pagePath: 'lesson-vocals-13.html',
        configPath: './configs/lesson-vocals-13.config.js'
      },
      {
        slug: 'lesson-vocals-14',
        lessonKey: 'mpl-vocals-14-progress',
        title: 'Vocal Layering & Stacking Techniques',
        description: 'Stack vocals for massive choruses and thick textures. Learn octave doubling, stereo widening, and blend techniques.',
        duration: '20-24 min',
        level: 'Expert',
        depthLevel: 9,
        badge: 'Premium',
        pagePath: 'lesson-vocals-14.html',
        configPath: './configs/lesson-vocals-14.config.js'
      },
      {
        slug: 'lesson-vocals-15',
        lessonKey: 'mpl-vocals-15-progress',
        title: 'Advanced Vocal Editing & Timing',
        description: 'Precision vocal editing for professional results. Master timing correction, breath control, and seamless comp editing.',
        duration: '24-28 min',
        level: 'Expert',
        depthLevel: 10,
        badge: 'Premium',
        pagePath: 'lesson-vocals-15.html',
        configPath: './configs/lesson-vocals-15.config.js'
      }
    ]
  },

  // ============================================================
  // MASTERING MODULE (10 Lessons)
  // ============================================================
  {
    slug: 'mastering',
    title: 'Mastering',
    description: 'Apply the final polish with limiting, stereo shaping, and loudness targets. Learn professional mastering workflows, metering, and optimization for streaming platforms.',
    lessons: [
      // BEGINNER (1-3)
      {
        slug: 'lesson-mastering-1',
        lessonKey: 'mpl-mastering-1-progress',
        title: 'Mastering Fundamentals',
        description: 'Understand the mastering process, signal chain, and how mastering differs from mixing.',
        duration: '18-22 min',
        level: 'Beginner',
        depthLevel: 1,
        badge: 'Free',
        pagePath: 'lesson-mastering-1.html',
        configPath: './configs/lesson-mastering-1.config.js'
      },
      {
        slug: 'lesson-mastering-2',
        lessonKey: 'mpl-mastering-2-progress',
        title: 'Metering & Analysis',
        description: 'Master LUFS, peak meters, spectrum analyzers, and phase correlation tools.',
        duration: '18-22 min',
        level: 'Beginner',
        depthLevel: 2,
        badge: 'Free',
        pagePath: 'lesson-mastering-2.html',
        configPath: './configs/lesson-mastering-2.config.js'
      },
      {
        slug: 'lesson-mastering-3',
        lessonKey: 'mpl-mastering-3-progress',
        title: 'Mastering EQ',
        description: 'Use linear phase and mid-side EQ to shape the final tonal balance.',
        duration: '20-25 min',
        level: 'Beginner',
        depthLevel: 2,
        badge: 'Free',
        pagePath: 'lesson-mastering-3.html',
        configPath: './configs/lesson-mastering-3.config.js'
      },

      // INTERMEDIATE (4-6)
      {
        slug: 'lesson-mastering-4',
        lessonKey: 'mpl-mastering-4-progress',
        title: 'Mastering Compression & Dynamics',
        description: 'Control dynamics with multiband compression and gentle mastering compression.',
        duration: '22-28 min',
        level: 'Intermediate',
        depthLevel: 4,
        badge: 'Premium',
        pagePath: 'lesson-mastering-4.html',
        configPath: './configs/lesson-mastering-4.config.js'
      },
      {
        slug: 'lesson-mastering-5',
        lessonKey: 'mpl-mastering-5-progress',
        title: 'Stereo Enhancement & Width',
        description: 'Widen your mix with mid-side processing and stereo imaging tools.',
        duration: '18-22 min',
        level: 'Intermediate',
        depthLevel: 4,
        badge: 'Premium',
        pagePath: 'lesson-mastering-5.html',
        configPath: './configs/lesson-mastering-5.config.js'
      },
      {
        slug: 'lesson-mastering-6',
        lessonKey: 'mpl-mastering-6-progress',
        title: 'Limiting & Loudness Maximization',
        description: 'Achieve competitive loudness without distortion using professional limiters.',
        duration: '22-28 min',
        level: 'Intermediate',
        depthLevel: 5,
        badge: 'Premium',
        pagePath: 'lesson-mastering-6.html',
        configPath: './configs/lesson-mastering-6.config.js'
      },

      // ADVANCED (7-9)
      {
        slug: 'lesson-mastering-7',
        lessonKey: 'mpl-mastering-7-progress',
        title: 'Mastering for Streaming Platforms',
        description: 'Optimize your masters for Spotify, Apple Music, YouTube, and other streaming services.',
        duration: '22-28 min',
        level: 'Advanced',
        depthLevel: 7,
        badge: 'Premium',
        pagePath: 'lesson-mastering-7.html',
        configPath: './configs/lesson-mastering-7.config.js'
      },
      {
        slug: 'lesson-mastering-8',
        lessonKey: 'mpl-mastering-8-progress',
        title: 'Stem Mastering',
        description: 'Master using grouped stems for more control and flexibility in the mastering stage.',
        duration: '25-30 min',
        level: 'Advanced',
        depthLevel: 8,
        badge: 'Premium',
        pagePath: 'lesson-mastering-8.html',
        configPath: './configs/lesson-mastering-8.config.js'
      },
      {
        slug: 'lesson-mastering-9',
        lessonKey: 'mpl-mastering-9-progress',
        title: 'Genre-Specific Mastering',
        description: 'Learn mastering approaches for EDM, hip-hop, rock, pop, and electronic music.',
        duration: '28-35 min',
        level: 'Advanced',
        depthLevel: 8,
        badge: 'Premium',
        pagePath: 'lesson-mastering-9.html',
        configPath: './configs/lesson-mastering-9.config.js'
      },

      // EXPERT (10)
      {
        slug: 'lesson-mastering-10',
        lessonKey: 'mpl-mastering-10-progress',
        title: 'Masterclass: Professional Mastering Project',
        description: 'Final project: master a complete album or EP with consistent sonic character across all tracks.',
        duration: '45-60 min',
        level: 'Expert',
        depthLevel: 10,
        badge: 'Premium',
        pagePath: 'lesson-mastering-10.html',
        configPath: './configs/lesson-mastering-10.config.js'
      }
    ]
  }
]);

// ============================================================
// HELPER FUNCTIONS
// ============================================================

/**
 * Get display number for a lesson by its slug
 * Returns the automatically calculated sequential number
 */
export function getDisplayNumber(lessonSlug) {
  for (const category of curriculum) {
    for (const lesson of category.lessons) {
      if (lesson.slug === lessonSlug) {
        return lesson.displayNumber;
      }
    }
  }
  return null;
}

function findLessonIndex({ lessonKey, slug, curriculumData }) {
  for (let catIndex = 0; catIndex < curriculumData.length; catIndex++) {
    const category = curriculumData[catIndex];
    for (let lessonIndex = 0; lessonIndex < category.lessons.length; lessonIndex++) {
      const lesson = category.lessons[lessonIndex];
      if ((lessonKey && lesson.lessonKey === lessonKey) || (slug && lesson.slug === slug)) {
        return { category, lesson, lessonIndex, catIndex };
      }
    }
  }
  return null;
}

export function getLessonNavigation({ lessonKey, slug, curriculumData = curriculum, overviewUrl = curriculumOverviewUrl }) {
  const result = findLessonIndex({ lessonKey, slug, curriculumData });
  if (!result) {
    return { overviewUrl };
  }

  const { category, lessonIndex } = result;
  const prevLesson = category.lessons[lessonIndex - 1];
  const nextLesson = category.lessons[lessonIndex + 1];

  return {
    overviewUrl,
    prevLessonUrl: prevLesson?.pagePath ?? null,
    nextLessonUrl: nextLesson?.pagePath ?? null
  };
}

export function getLessonByKeyOrSlug(identifier) {
  const { lessonKey, slug } = typeof identifier === 'string' ? { slug: identifier } : identifier;
  return findLessonIndex({ lessonKey, slug, curriculumData: curriculum })?.lesson || null;
}

export function getLessonsByLevel(level) {
  const lessons = [];
  for (const category of curriculum) {
    for (const lesson of category.lessons) {
      if (lesson.level === level) {
        lessons.push({ ...lesson, category: category.title });
      }
    }
  }
  return lessons;
}

export function getLessonsByDepthLevel(depthLevel) {
  const lessons = [];
  for (const category of curriculum) {
    for (const lesson of category.lessons) {
      if (lesson.depthLevel === depthLevel) {
        lessons.push({ ...lesson, category: category.title });
      }
    }
  }
  return lessons;
}

export function getCurriculumStats() {
  const stats = {
    totalLessons: 0,
    byCategory: {},
    byLevel: { Beginner: 0, Intermediate: 0, Advanced: 0, Expert: 0 },
    byDepthLevel: {}
  };

  for (const category of curriculum) {
    stats.byCategory[category.title] = category.lessons.length;
    stats.totalLessons += category.lessons.length;

    for (const lesson of category.lessons) {
      if (lesson.level) stats.byLevel[lesson.level]++;
      if (lesson.depthLevel) {
        stats.byDepthLevel[lesson.depthLevel] = (stats.byDepthLevel[lesson.depthLevel] || 0) + 1;
      }
    }
  }

  return stats;
}
