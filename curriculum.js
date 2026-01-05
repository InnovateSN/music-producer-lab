/**
 * Music Producer Lab - Complete Curriculum
 *
 * This file contains 75+ lessons across 8 categories:
 * - Drums & Rhythm (21 lessons)
 * - Harmony & Melody (20 lessons)
 * - Bass & Low End (10 lessons) ✨ NEW
 * - Arrangement & Songwriting (20 lessons)
 * - Sound Design
 * - Mixing
 * - Vocals
 * - Mastering
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
      }
    ]
  },

  // ============================================================
  // ============================================================
  // BASS & LOW END MODULE (10 Lessons)
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
  // SOUND DESIGN MODULE (Placeholder)
  // ============================================================
  {
    slug: 'sound-design',
    title: 'Sound Design',
    description: 'Craft your own patches with synthesis and sampling techniques.',
    lessons: [
      {
        slug: 'lesson-sound-design',
        lessonKey: 'mpl-sound-design-1',
        title: 'Subtractive Synthesis Basics',
        description: 'Oscillators, filters, and envelopes for punchy basses and leads.',
        duration: '12-15 min',
        level: 'Beginner',
        depthLevel: 1,
        badge: 'Free',
        pagePath: 'lesson-sound-design.html',
        configPath: null
      }
    ]
  },

  // ============================================================
  // MIXING MODULE (Placeholder)
  // ============================================================
  {
    slug: 'mixing',
    title: 'Mixing',
    description: 'Balance levels, carve space with EQ, and use dynamics to glue your track.',
    lessons: [
      {
        slug: 'lesson-mixing',
        lessonKey: 'mpl-mixing-1',
        title: 'Gain Staging & Levels',
        description: 'Set healthy headroom and balance before diving into processing.',
        duration: '12-15 min',
        level: 'Beginner',
        depthLevel: 1,
        badge: 'Free',
        pagePath: 'lesson-mixing.html',
        configPath: null
      }
    ]
  },

  // ============================================================
  // VOCALS MODULE (Placeholder)
  // ============================================================
  {
    slug: 'vocals',
    title: 'Vocals',
    description: 'Capture, edit, and process vocals so they sit naturally in your mix.',
    lessons: [
      {
        slug: 'lesson-vocals',
        lessonKey: 'mpl-vocals-1',
        title: 'Vocal Chain Essentials',
        description: 'EQ, compression, and time-based effects for a reliable go-to vocal chain.',
        duration: '12-15 min',
        level: 'Beginner',
        depthLevel: 1,
        badge: 'Free',
        pagePath: 'lesson-vocals.html',
        configPath: null
      }
    ]
  },

  // ============================================================
  // MASTERING MODULE (Placeholder)
  // ============================================================
  {
    slug: 'mastering',
    title: 'Mastering',
    description: 'Apply the final polish with limiting, stereo shaping, and loudness targets.',
    lessons: [
      {
        slug: 'lesson-mastering',
        lessonKey: 'mpl-mastering-1',
        title: 'Mastering Essentials',
        description: 'Learn core mastering moves to prep your track for streaming.',
        duration: '15-20 min',
        level: 'Beginner',
        depthLevel: 1,
        badge: 'Free',
        pagePath: 'lesson-mastering.html',
        configPath: null
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
