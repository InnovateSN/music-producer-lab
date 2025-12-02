const FEATURE_FLAG_KEY = "mpl_feature_persist_state";
const GLOBAL_STATE_KEY = "mpl_user_state";
const STORAGE_VERSION = 1;

const LESSON_URLS = {
  1: "lesson-drums-1.html",
  2: "lesson-drums-2.html",
  3: "lesson-drums-3.html",
  4: "lesson-drums-4.html",
  5: "lesson-drums-5.html",
  6: "lesson-drums-6.html",
};

function getDefaultState() {
  return {
    version: STORAGE_VERSION,
    lessons: {},
    currentLessonIndex: null,
  };
}

export function isPersistenceEnabled() {
  try {
    const flag = localStorage.getItem(FEATURE_FLAG_KEY);
    if (flag === "false" || flag === "off") return false;
    return true;
  } catch (err) {
    console.warn("Persistence disabled due to storage error", err);
    return false;
  }
}

function migrateState(state) {
  const base = getDefaultState();
  if (!state || typeof state !== "object") return base;

  const migrated = {
    ...base,
    ...state,
    lessons: state.lessons || {},
    currentLessonIndex: state.currentLessonIndex ?? base.currentLessonIndex,
  };

  if (!state.version) {
    migrated.version = STORAGE_VERSION;
  }

  return migrated;
}

function loadGlobalState() {
  if (!isPersistenceEnabled()) return getDefaultState();

  try {
    const raw = localStorage.getItem(GLOBAL_STATE_KEY);
    if (!raw) return getDefaultState();
    const parsed = JSON.parse(raw);
    return migrateState(parsed);
  } catch (err) {
    console.warn("Unable to parse persisted state; using defaults", err);
    return getDefaultState();
  }
}

function saveGlobalState(state) {
  if (!isPersistenceEnabled()) return;
  try {
    const toPersist = migrateState(state);
    localStorage.setItem(GLOBAL_STATE_KEY, JSON.stringify(toPersist));
  } catch (err) {
    console.warn("Failed to persist state", err);
  }
}

export function loadLessonState(lessonKey) {
  const state = loadGlobalState();
  let lessonState = state.lessons?.[lessonKey];

  if (!lessonState && isPersistenceEnabled()) {
    try {
      const legacy = localStorage.getItem(lessonKey);
      if (legacy) {
        lessonState = { progress: JSON.parse(legacy), completed: false };
      }
    } catch (err) {
      console.warn("Unable to read legacy lesson state", err);
    }
  }

  const safeLesson = lessonState || { progress: {}, completed: false };
  const clonedProgress = JSON.parse(JSON.stringify(safeLesson.progress || {}));

  return {
    progress: clonedProgress,
    completed: !!safeLesson.completed,
    currentLessonIndex: state.currentLessonIndex,
  };
}

export function persistLessonProgress(lessonKey, progress, opts = {}) {
  if (!isPersistenceEnabled()) return;
  const state = loadGlobalState();
  const lessonState = state.lessons[lessonKey] || { progress: {}, completed: false };

  lessonState.progress = progress || {};
  if (typeof opts.completed === "boolean") {
    lessonState.completed = opts.completed;
  }

  state.lessons[lessonKey] = lessonState;

  if (opts.lessonIndex) {
    state.currentLessonIndex = opts.lessonIndex;
  }

  saveGlobalState(state);
}

export function persistLessonCompletion(lessonKey, completed, opts = {}) {
  const progress = opts.progress || loadLessonState(lessonKey).progress;
  persistLessonProgress(lessonKey, progress, {
    ...opts,
    completed,
  });
}

export function getCurrentLessonIndex() {
  return loadGlobalState().currentLessonIndex;
}

export function getLessonUrlFromIndex(idx) {
  if (!idx) return null;
  return LESSON_URLS[idx] || null;
}

export function persistCurrentLessonIndex(lessonIndex) {
  if (!lessonIndex || !isPersistenceEnabled()) return;
  const state = loadGlobalState();
  state.currentLessonIndex = lessonIndex;
  saveGlobalState(state);
}
