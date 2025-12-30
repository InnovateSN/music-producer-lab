/**
 * Music Producer Lab - Complete Curriculum
 *
 * This file contains all 45 lessons across 6 categories.
 * Lesson keys match exactly what each HTML file uses for progress tracking.
 *
 * Progression Levels:
 * - Levels 1-3: Beginner (Fundamentals)
 * - Levels 4-6: Intermediate (Genre Application)
 * - Levels 7-8: Advanced (Professional Techniques)
 * - Levels 9-10: Expert (Industry-Ready Skills)
 */

export const curriculumOverviewUrl = 'labs.html';

export const curriculum = [
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
        slug: 'lesson-drums-17',
        lessonKey: 'mpl-drums-17-progress',
        title: 'Odd Time Signatures',
        description: 'Break from 4/4 with 5/4, 7/8, and other odd meters. Create unique grooves that stand out.',
        duration: '25-30 min',
        level: 'Expert',
        depthLevel: 9,
        badge: 'Premium',
        pagePath: 'lesson-drums-17.html',
        configPath: './configs/lesson-drums-17.config.js'
      },
      {
        slug: 'lesson-drums-18',
        lessonKey: 'mpl-drums-18-progress',
        title: 'Genre Fusion & Hybrid Drums',
        description: 'Combine genre elements for unique sounds. Fuse electronic and acoustic, blend cultural rhythms.',
        duration: '25-30 min',
        level: 'Expert',
        depthLevel: 9,
        badge: 'Premium',
        pagePath: 'lesson-drums-18.html',
        configPath: './configs/lesson-drums-18.config.js'
      },
      {
        slug: 'lesson-drums-19',
        lessonKey: 'mpl-drums-19-progress',
        title: 'Professional Drum Mixing',
        description: 'Mix drums to professional standards. EQ, compression, parallel processing, and bus techniques.',
        duration: '25-30 min',
        level: 'Expert',
        depthLevel: 10,
        badge: 'Premium',
        pagePath: 'lesson-drums-19.html',
        configPath: './configs/lesson-drums-19.config.js'
      },
      {
        slug: 'lesson-drums-20',
        lessonKey: 'mpl-drums-20-progress',
        title: 'Masterclass: Complete Drum Production',
        description: 'Final project: produce a complete multi-genre drum arrangement with all techniques learned.',
        duration: '30-40 min',
        level: 'Expert',
        depthLevel: 10,
        badge: 'Premium',
        pagePath: 'lesson-drums-20.html',
        configPath: './configs/lesson-drums-20.config.js'
      },
      {
        slug: 'lesson-drums-21',
        lessonKey: 'mpl-drums-21-practice',
        title: 'Velocity Practice Playground',
        description: 'Interactive practice lab with visual examples demonstrating velocity control, dynamics, and practical pattern exercises.',
        duration: '15-20 min',
        level: 'Beginner-Intermediate',
        depthLevel: 3,
        badge: 'Practice',
        pagePath: 'lesson-drums-21.html',
        configPath: './configs/lesson-drums-21.config.js'
      }
    ]
  },

  // ============================================================
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
];

// ============================================================
// HELPER FUNCTIONS
// ============================================================

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
