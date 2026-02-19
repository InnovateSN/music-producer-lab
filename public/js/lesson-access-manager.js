import { curriculum } from '../curriculum.js';

function safeGetLocalStorageItem(key) {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

function safeSetLocalStorageItem(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch {
    // noop
  }
}

function normalizePath(pathname) {
  return pathname.replace(/^\//, '');
}

function isLessonCompleted(lessonKey) {
  return Boolean(lessonKey) && safeGetLocalStorageItem(lessonKey) === 'completed';
}

function findLessonByLessonKey(lessonKey) {
  for (const category of curriculum) {
    const lessonIndex = category.lessons.findIndex((lesson) => lesson.lessonKey === lessonKey);
    if (lessonIndex >= 0) {
      return {
        category,
        lesson: category.lessons[lessonIndex],
        lessonIndex,
        previousLesson: lessonIndex > 0 ? category.lessons[lessonIndex - 1] : null,
      };
    }
  }

  return null;
}

function findLessonByPath(pathname) {
  const normalizedPath = normalizePath(pathname);

  for (const category of curriculum) {
    const lessonIndex = category.lessons.findIndex((lesson) => lesson.pagePath === normalizedPath);
    if (lessonIndex >= 0) {
      return {
        category,
        lesson: category.lessons[lessonIndex],
        lessonIndex,
        previousLesson: lessonIndex > 0 ? category.lessons[lessonIndex - 1] : null,
      };
    }
  }

  return null;
}

function getLessonState(lesson, previousLesson) {
  const completed = isLessonCompleted(lesson.lessonKey);
  const locked = Boolean(previousLesson?.lessonKey) && !isLessonCompleted(previousLesson.lessonKey);

  return {
    completed,
    locked,
    available: !locked,
  };
}

export async function syncProgressFromApi() {
  if (!window.MplAuth?.isSignedIn || !window.MplApi?.progress?.getAll) {
    return;
  }

  try {
    const payload = await window.MplApi.progress.getAll();
    const progressEntries = payload?.progress || [];

    for (const entry of progressEntries) {
      if (entry.lesson_key && entry.status === 'completed') {
        safeSetLocalStorageItem(entry.lesson_key, 'completed');
      }
    }
  } catch (error) {
    console.warn('[LessonAccess] Failed to sync progress from API:', error);
  }
}

export function getLessonStateByKey(lessonKey) {
  const lessonInfo = findLessonByLessonKey(lessonKey);
  if (!lessonInfo) {
    return { completed: false, locked: false, available: true };
  }

  return getLessonState(lessonInfo.lesson, lessonInfo.previousLesson);
}

export function isLessonAccessibleByKey(lessonKey) {
  return getLessonStateByKey(lessonKey).available;
}

export function getLessonStateByPath(pathname) {
  const lessonInfo = findLessonByPath(pathname);
  if (!lessonInfo) {
    return null;
  }

  return {
    ...getLessonState(lessonInfo.lesson, lessonInfo.previousLesson),
    lesson: lessonInfo.lesson,
    previousLesson: lessonInfo.previousLesson,
  };
}

export function enforceCurrentLessonAccess(options = {}) {
  const state = getLessonStateByPath(window.location.pathname);
  if (!state || !state.locked) {
    return true;
  }

  const redirectUrl = options.redirectUrl || '/labs.html?locked=1';
  window.location.href = redirectUrl;
  return false;
}
