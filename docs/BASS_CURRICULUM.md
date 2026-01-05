/**
 * Music Producer Lab - Bass & Low End Curriculum (10 Lessons)
 *
 * Progressive bass fundamentals from root notes to advanced techniques.
 * Uses piano-roll sequencer with bass-optimized synthesis.
 *
 * Progression:
 * - Beginner (1-3): Root notes, octaves, kick relationship
 * - Intermediate (4-7): Patterns, genres, sidechain
 * - Advanced (8-10): Layering, fills, mixing
 */

export const bassCurriculum = [
  // ============================================================
  // BEGINNER (Lessons 1-3)
  // ============================================================
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

  // ============================================================
  // INTERMEDIATE (Lessons 4-7)
  // ============================================================
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

  // ============================================================
  // ADVANCED (Lessons 8-10)
  // ============================================================
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
];

// Export for curriculum.js integration
export default bassCurriculum;
