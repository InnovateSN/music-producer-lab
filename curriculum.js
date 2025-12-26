export const curriculumOverviewUrl = 'labs.html';

export const curriculum = [
  {
    slug: 'drums',
    title: 'Drums & Rhythm',
    description: 'Build solid grooves with foundational kick, snare, and hi-hat patterns plus creative fills.',
    lessons: [
      {
        slug: 'lesson-drums-1',
        lessonKey: 'mpl-lesson1-progress',
        title: '4 on the Floor: Kick Foundation',
        description: 'Start with the essential 4-on-the-floor kick pattern and learn basic song counting.',
        duration: '8-10 min',
        level: 'Beginner',
        badge: 'Free',
        pagePath: 'lesson-drums-1.html',
        configPath: './configs/lesson-drums-1.config.js'
      },
      {
        slug: 'lesson-drums-2',
        lessonKey: 'mpl-lesson2-progress',
        title: 'Add the Snare: Backbeat Basics',
        description: 'Layer the backbeat on beats 2 and 4 to create momentum with your kick.',
        duration: '8-10 min',
        level: 'Beginner',
        badge: 'Free',
        pagePath: 'lesson-drums-2.html',
        configPath: './configs/lesson-drums-2.config.js'
      },
      {
        slug: 'lesson-drums-3',
        lessonKey: 'mpl-lesson3-progress',
        title: 'Hi-hats in 1/8: Feel Subdivisions',
        description: 'Program hi-hats on every eighth note to hear the & subdivisions (1 & 2 & 3 & 4 &).',
        duration: '10-12 min',
        level: 'Beginner',
        badge: 'Free',
        pagePath: 'lesson-drums-3.html',
        configPath: './configs/lesson-drums-3.config.js'
      },
      {
        slug: 'lesson-drums-4',
        lessonKey: 'mpl-lesson4-progress',
        title: '16th-Note Groove: More Movement',
        description: 'Add 16th-note hi-hats or selective ghost notes to create movement and variation inside the bar.',
        duration: '10-12 min',
        level: 'Beginner',
        badge: 'Free',
        pagePath: 'lesson-drums-4.html',
        configPath: './configs/lesson-drums-4.config.js'
      },
      {
        slug: 'lesson-drums-5',
        lessonKey: 'mpl-lesson5-progress',
        title: 'Variation & Fills',
        description: 'Create drum fills and end-of-loop variation to keep your groove breathing.',
        duration: '12-15 min',
        level: 'Intermediate',
        badge: 'Free',
        pagePath: 'lesson-drums-5-modular.html',
        configPath: './configs/lesson-drums-5.config.js'
      },
      {
        slug: 'lesson-drums-6',
        lessonKey: 'mpl-lesson6-progress',
        title: 'Syncopated Kick: Break from 4/4',
        description: 'Use syncopated kick patterns to add extra push and groove beyond the standard 4-on-the-floor.',
        duration: '12-15 min',
        level: 'Intermediate',
        badge: 'Premium',
        pagePath: 'lesson-drums-6.html',
        configPath: './configs/lesson-drums-6.config.js'
      }
    ]
  },
  {
    slug: 'arrangement',
    title: 'Arrangement & Songwriting',
    description: 'Structure your loops into full songs with transitions, hooks, and energy flow.',
    lessons: [
      {
        slug: 'lesson-arrangement-1',
        lessonKey: 'mpl-arrangement-1-progress',
        title: 'From Loop to Song: Understanding Structure',
        description: 'Learn how to organize musical ideas into sections—intro, verse, chorus, bridge—to create complete songs.',
        duration: '15-20 min',
        level: 'Beginner',
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
        level: 'Intermediate',
        badge: 'Free',
        pagePath: 'lesson-arrangement-3.html',
        configPath: './configs/lesson-arrangement-3.config.js'
      }
    ]
  },
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
        badge: 'Free',
        pagePath: 'lesson-sound-design.html',
        configPath: null
      }
    ]
  },
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
        badge: 'Free',
        pagePath: 'lesson-mixing.html',
        configPath: null
      }
    ]
  },
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
        badge: 'Free',
        pagePath: 'lesson-vocals.html',
        configPath: null
      }
    ]
  },
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
        badge: 'Free',
        pagePath: 'lesson-mastering.html',
        configPath: null
      }
    ]
  }
];

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
