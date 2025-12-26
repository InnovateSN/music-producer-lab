#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { pathToFileURL } = require('url');
const { applyMessagePreset, buildHero } = require('../configs/config-presets.js');

const ROOT_DIR = path.resolve(__dirname, '..');
const LESSON_TEMPLATE_PATH = path.join(ROOT_DIR, 'lesson-template.html');
const CURRICULUM_PATH = path.join(ROOT_DIR, 'curriculum.js');
const LABS_PATH = path.join(ROOT_DIR, 'labs.html');
const DATA_PATHS = [path.join(ROOT_DIR, 'lessons.json'), path.join(ROOT_DIR, 'lessons.csv')];

const COLOR_PALETTE = [
  'linear-gradient(135deg,#ff5a3d,#ffb28a)',
  'linear-gradient(135deg,#5f4dff,#8a9bff)',
  'linear-gradient(135deg,#00c6ff,#0072ff)',
  'linear-gradient(135deg,#00ff9d,#00bcd4)',
  'linear-gradient(135deg,#ff6ec7,#9d50bb)'
];

function titleCase(text = '') {
  return text
    .replace(/[-_]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/\w\S*/g, (w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase());
}

function slugify(text = '') {
  return text
    .toString()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-zA-Z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .toLowerCase();
}

function parseJsonString(value) {
  if (!value) return null;
  if (Array.isArray(value) || typeof value === 'object') return value;
  try {
    return JSON.parse(value);
  } catch (err) {
    try {
      const normalized = value.replace(/'/g, '"');
      return JSON.parse(normalized);
    } catch (err2) {
      return null;
    }
  }
}

function parseCsvValue(row) {
  const pattern = /("([^"]|"")*"|[^,]+)/g;
  const matches = row.match(pattern) || [];
  return matches.map((value) => {
    const trimmed = value.trim();
    if (trimmed.startsWith('"') && trimmed.endsWith('"')) {
      return trimmed.slice(1, -1).replace(/""/g, '"');
    }
    return trimmed;
  });
}

function loadLessonsData() {
  const dataPath = DATA_PATHS.find((p) => fs.existsSync(p));
  if (!dataPath) {
    throw new Error('Missing lessons data file. Provide lessons.json or lessons.csv.');
  }

  if (dataPath.endsWith('.json')) {
    const raw = fs.readFileSync(dataPath, 'utf8');
    const parsed = parseJsonString(raw);
    if (Array.isArray(parsed)) return parsed;
    if (parsed && Array.isArray(parsed.lessons)) return parsed.lessons;
    throw new Error('lessons.json must be an array or an object with a lessons array.');
  }

  const csvContent = fs.readFileSync(dataPath, 'utf8').trim();
  const [headerLine, ...rows] = csvContent.split(/\r?\n/);
  const headers = parseCsvValue(headerLine);
  return rows
    .filter(Boolean)
    .map((row) => parseCsvValue(row))
    .map((values) => headers.reduce((acc, header, index) => {
      acc[header] = values[index];
      return acc;
    }, {}));
}

function normalizeLesson(rawLesson) {
  const instrumentsValue = rawLesson['strumenti/targetSteps'] || rawLesson.strumenti || rawLesson.instruments;
  const messagesValue = rawLesson.messaggi || rawLesson.messages;
  const difficulty = rawLesson['difficolta'] || rawLesson['difficoltà'] || rawLesson.difficulty || rawLesson.level;

  return {
    category: slugify(rawLesson.categoria || rawLesson.category || 'uncategorized'),
    categoryLabel: rawLesson.categoria || rawLesson.category || 'Uncategorized',
    slug: slugify(rawLesson.slug || rawLesson.titolo || rawLesson.title),
    title: rawLesson.titolo || rawLesson.title || 'Untitled Lesson',
    difficulty: difficulty || 'All Levels',
    tempo: Number(rawLesson.tempo) || 120,
    stepCount: Number(rawLesson.stepCount) || 16,
    instruments: parseInstruments(instrumentsValue),
    messages: parseMessages(messagesValue),
    duration: rawLesson.durata || rawLesson.duration,
    description: rawLesson.descrizione || rawLesson.description,
    badge: rawLesson.badge || 'New'
  };
}

function parseInstruments(value) {
  const parsed = parseJsonString(value);
  if (Array.isArray(parsed)) {
    return parsed.map((inst, index) => buildInstrument(inst, index));
  }

  if (typeof value === 'string') {
    const parts = value.split(/\s*\|\s*/).filter(Boolean);
    if (parts.length) {
      return parts.map((part, index) => {
        const [idPart, stepsPart] = part.split(':');
        const targetSteps = (stepsPart || '')
          .split(/\s|,|;/)
          .filter(Boolean)
          .map((n) => Number(n))
          .filter((n) => !Number.isNaN(n));
        return buildInstrument({ id: idPart, targetSteps }, index);
      });
    }
  }

  return [buildInstrument({ id: 'kick', targetSteps: [0, 4, 8, 12] }, 0)];
}

function parseMessages(value) {
  const parsed = parseJsonString(value);
  if (parsed && typeof parsed === 'object') {
    return {
      initial: parsed.initial || parsed.iniziale,
      alreadyCompleted: parsed.alreadyCompleted || parsed.giaCompleto,
      success: parsed.success || parsed.ok,
      error: parsed.error || parsed.errore
    };
  }
  return {};
}

function uniqueNumbers(values = []) {
  return Array.from(new Set(values.map((n) => Number(n)).filter((n) => !Number.isNaN(n)))).sort((a, b) => a - b);
}

function buildInstrument(inst, index) {
  const id = slugify(inst.id || `instrument-${index + 1}`);
  const targetSteps = uniqueNumbers(inst.targetSteps || inst.target || []);
  const label = inst.label || titleCase(id);
  const color = inst.color || COLOR_PALETTE[index % COLOR_PALETTE.length];
  return {
    id,
    label,
    color,
    targetSteps,
    instructionText: inst.instructionText || `${label}: program the pattern using the highlighted steps.`,
    patternHint: inst.patternHint || { label }
  };
}

function buildLessonConfig(lesson, navigation) {
  const instruments = lesson.instruments.length ? lesson.instruments : [buildInstrument({ id: 'kick', targetSteps: [0, 4, 8, 12] }, 0)];
  const lessonNumber = navigation.index + 1;
  const categoryLabel = titleCase(lesson.categoryLabel || lesson.category);
  const patternSummary = instruments
    .map((inst) => `${titleCase(inst.label)} on steps ${inst.targetSteps.map((n) => n + 1).join(', ')}`)
    .join('; ');

  const messageOverrides = {
    initial: lesson.messages?.initial || `Complete ${lesson.title} to unlock the next lab.`
  };

  ['alreadyCompleted', 'success', 'error'].forEach((key) => {
    if (lesson.messages?.[key]) {
      messageOverrides[key] = lesson.messages[key];
    }
  });

  const messages = applyMessagePreset(lesson.category || 'default', messageOverrides);

  const steps = instruments.map((inst) => ({
    text: `<strong>${titleCase(inst.label)}:</strong> Add notes on steps ${inst.targetSteps.map((n) => n + 1).join(', ')}.`
  }));
  steps.push({ text: 'Press <strong>Play</strong> to listen, then <strong>Check Exercise</strong> to validate.' });

  return {
    // LESSON METADATA
    lessonKey: `mpl-${lesson.slug}-progress`,
    lessonNumber,
    lessonCategory: titleCase(lesson.categoryLabel || lesson.category),

    // NAVIGATION
    nextLessonUrl: navigation.next || null,
    prevLessonUrl: navigation.prev || null,
    overviewUrl: navigation.overview,

    // HERO SECTION
    hero: buildHero({
      lessonNumber,
      categoryLabel,
      title: lesson.title,
      titleHighlight: lesson.difficulty,
      subtitle: lesson.description || `Sequencer at ${lesson.tempo} BPM with a ${lesson.stepCount}-step grid.`
    }),

    // SEQUENCER SETTINGS
    sequencer: {
      tempo: lesson.tempo,
      stepCount: lesson.stepCount,
      swing: 0
    },

    // EXERCISE INFO
    exercise: {
      title: `Program ${lesson.title}`,
      description: lesson.description || 'Follow the hint grid and match the target pattern to continue.',
      tip: `Focus on ${titleCase(instruments[0].label)} first, then layer the rest.`,
      steps
    },

    // INSTRUMENTS CONFIG
    instruments,

    // PATTERN HINT CONFIG
    patternHint: {
      enabled: true,
      note: patternSummary
    },

    // COMPLETION MESSAGES
    messages,

    // MODE FLAGS
    mode: {
      sandbox: false,
      showTargetHint: true,
      enablePresets: false,
      enableExport: false
    }
  };
}

function formatJs(value) {
  const json = JSON.stringify(value, null, 2);
  return json.replace(/"([^"\n]+)":/g, '$1:');
}

function writeLessonConfig(config, category, slug) {
  const configDir = path.join(ROOT_DIR, 'configs', category);
  fs.mkdirSync(configDir, { recursive: true });
  const configPath = path.join(configDir, `${slug}.config.js`);

  const content = `/**\n * Auto-generated lesson config for ${slug}\n */\n\nexport const lessonConfig = ${formatJs(config)};\n\nif (typeof window !== 'undefined') {\n  window.LESSON_CONFIG = lessonConfig;\n}\n`;
  fs.writeFileSync(configPath, content, 'utf8');
  return path.posix.relative(ROOT_DIR, configPath);
}

function buildLessonHtml(template, assetBase, configImportPath) {
  const baseTag = `<base href="${assetBase.endsWith('/') ? assetBase : `${assetBase}/`}">`;
  let html = template.includes('<base ') ? template : template.replace('<meta charset="UTF-8" />', `<meta charset="UTF-8" />\n    ${baseTag}`);

  const moduleScript = `  <script type="module">\n        import { lessonConfig } from './${configImportPath}';\n        import { initLessonFromConfig } from './lesson-engine.js';\n        initLessonFromConfig(lessonConfig);\n      </script>`;

  const marker = '<script type="module">';
  const lastModuleIndex = html.lastIndexOf(marker);
  const closingIndex = html.indexOf('</script>', lastModuleIndex);
  if (lastModuleIndex === -1 || closingIndex === -1) {
    throw new Error('lesson-template.html must contain a module script placeholder.');
  }

  const before = html.slice(0, lastModuleIndex);
  const after = html.slice(closingIndex + '</script>'.length);
  html = `${before}${moduleScript}\n    ${after.trimStart()}`;
  return html;
}

function writeLessonHtml(htmlContent, category, slug) {
  const lessonDir = path.join(ROOT_DIR, 'lessons', category);
  fs.mkdirSync(lessonDir, { recursive: true });
  const lessonPath = path.join(lessonDir, `${slug}.html`);
  fs.writeFileSync(lessonPath, htmlContent, 'utf8');
  return path.posix.relative(ROOT_DIR, lessonPath);
}

function getRelativeUrl(from, to) {
  const relative = path.posix.relative(path.posix.dirname(from), to);
  return relative || './';
}

async function loadExistingCurriculum() {
  if (!fs.existsSync(CURRICULUM_PATH)) return [];
  const module = await import(pathToFileURL(CURRICULUM_PATH));
  return Array.isArray(module.curriculum) ? module.curriculum : [];
}

function updateCurriculum(existingCurriculum, lessonsData) {
  const categoryMap = new Map();

  existingCurriculum.forEach((category) => {
    categoryMap.set(category.slug, {
      ...category,
      lessons: Array.isArray(category.lessons) ? [...category.lessons] : []
    });
  });

  lessonsData.forEach((lesson) => {
    const catSlug = lesson.category;
    const category = categoryMap.get(catSlug) || {
      slug: catSlug,
      title: titleCase(lesson.categoryLabel || catSlug),
      description: `Explore ${titleCase(lesson.categoryLabel || catSlug)} labs.`,
      lessons: []
    };

    const pagePath = `lessons/${catSlug}/${lesson.slug}.html`;
    const configPath = `./configs/${catSlug}/${lesson.slug}.config.js`;

    const lessonEntry = {
      slug: lesson.slug,
      lessonKey: `mpl-${lesson.slug}-progress`,
      title: lesson.title,
      description: lesson.description || `Interactive lab for ${lesson.title}.`,
      duration: lesson.duration || `${lesson.stepCount}-step grid`,
      level: lesson.difficulty,
      badge: lesson.badge,
      pagePath,
      configPath
    };

    const existingIndex = category.lessons.findIndex((l) => l.slug === lessonEntry.slug);
    if (existingIndex >= 0) {
      category.lessons[existingIndex] = { ...category.lessons[existingIndex], ...lessonEntry };
    } else {
      category.lessons.push(lessonEntry);
    }

    categoryMap.set(catSlug, category);
  });

  return Array.from(categoryMap.values());
}

function writeCurriculumFile(curriculumData) {
  const formattedArray = formatJs(curriculumData);
  const existingContent = fs.existsSync(CURRICULUM_PATH) ? fs.readFileSync(CURRICULUM_PATH, 'utf8') : '';
  const match = existingContent.match(/export const curriculum = [\s\S]*?];/);
  let newContent;

  if (match) {
    newContent = existingContent.replace(/export const curriculum = [\s\S]*?];/, `export const curriculum = ${formattedArray};`);
  } else {
    newContent = `export const curriculumOverviewUrl = 'labs.html';\n\nexport const curriculum = ${formattedArray};\n`;
  }

  if (!newContent.includes('function findLessonIndex')) {
    newContent += `\nfunction findLessonIndex({ lessonKey, slug, curriculumData }) {\n  for (let catIndex = 0; catIndex < curriculumData.length; catIndex++) {\n    const category = curriculumData[catIndex];\n    for (let lessonIndex = 0; lessonIndex < category.lessons.length; lessonIndex++) {\n      const lesson = category.lessons[lessonIndex];\n      if ((lessonKey && lesson.lessonKey === lessonKey) || (slug && lesson.slug === slug)) {\n        return { category, lesson, lessonIndex, catIndex };\n      }\n    }\n  }\n  return null;\n}\n\nexport function getLessonNavigation({ lessonKey, slug, curriculumData = curriculum, overviewUrl = curriculumOverviewUrl }) {\n  const result = findLessonIndex({ lessonKey, slug, curriculumData });\n  if (!result) {\n    return { overviewUrl };\n  }\n\n  const { category, lessonIndex } = result;\n  const prevLesson = category.lessons[lessonIndex - 1];\n  const nextLesson = category.lessons[lessonIndex + 1];\n\n  return {\n    overviewUrl,\n    prevLessonUrl: prevLesson?.pagePath ?? null,\n    nextLessonUrl: nextLesson?.pagePath ?? null\n  };\n}\n\nexport function getLessonByKeyOrSlug(identifier) {\n  const { lessonKey, slug } = typeof identifier === 'string' ? { slug: identifier } : identifier;\n  return findLessonIndex({ lessonKey, slug, curriculumData: curriculum })?.lesson || null;\n}\n`;
  }

  fs.writeFileSync(CURRICULUM_PATH, newContent.trimEnd() + '\n', 'utf8');
}

function buildQuickNavHtml(curriculumData) {
  return curriculumData
    .map((category) => `          <a class="quick-nav-link" href="#${category.slug}">${category.title}</a>`)
    .join('\n');
}

function getCategoryIcon(slug) {
  switch (slug) {
    case 'drums':
      return '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>';
    case 'arrangement':
      return '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>';
    case 'sound-design':
      return '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 9h2l2 6 2-12 2 12 2-6h2"/></svg>';
    case 'mixing':
      return '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 21v-7M12 21V3M20 21v-9"/></svg>';
    case 'vocals':
      return '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 9l3 3-3 3M13 9l3 3-3 3"/></svg>';
    case 'mastering':
      return '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 22h14M5 2h14M5 8h14M5 16h14"/></svg>';
    default:
      return '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/></svg>';
  }
}

function buildLessonCardHtml(lesson, index) {
  const isComingSoon = lesson.status === 'coming-soon';
  return `          <article class="lesson-card${isComingSoon ? ' coming-soon' : ''}">
            <div class="lesson-card-header">
              <span class="lesson-number">${String(index + 1).padStart(2, '0')}</span>
              ${lesson.badge ? `<span class="lesson-badge ${lesson.badge === 'Free' ? 'lesson-badge-free' : 'lesson-badge-new'}">${lesson.badge}</span>` : ''}
            </div>
            <h3 class="lesson-title">${lesson.title}</h3>
            ${lesson.description ? `<p class="lesson-description">${lesson.description}</p>` : ''}
            <div class="lesson-meta">
              ${lesson.duration ? `<div class="lesson-meta-item">${metaIcons('time')}<span>${lesson.duration}</span></div>` : ''}
              ${lesson.level ? `<div class="lesson-meta-item">${metaIcons('level')}<span>${lesson.level}</span></div>` : ''}
            </div>
            ${isComingSoon || !lesson.pagePath ? `<span class="lesson-cta">Coming Soon</span>` : `<a class="lesson-cta" href="${lesson.pagePath}">Start Lab${arrowIcon()}</a>`}
          </article>`;
}

function metaIcons(type) {
  if (type === 'time') {
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>';
  }
  return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20V10M6 20V4M18 20v-6"/></svg>';
}

function arrowIcon() {
  return '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>';
}

function buildSectionsHtml(curriculumData) {
  return curriculumData
    .map((category) => {
      const lessonsGrid = (category.lessons || [])
        .map((lesson, index) => buildLessonCardHtml(lesson, index))
        .join('\n');
      return `    <section class="lab-section" id="${category.slug}">
      <div class="container">
        <div class="lab-section-header">
          <div class="lab-section-icon">${getCategoryIcon(category.slug)}</div>
          <div class="lab-section-info">
            <h2 class="lab-section-title">${category.title}</h2>
            <p class="lab-section-description">${category.description || ''}</p>
          </div>
        </div>
        <div class="lessons-grid">
${lessonsGrid}
        </div>
      </div>
    </section>`;
    })
    .join('\n');
}

function buildFooterLinksHtml(curriculumData) {
  return curriculumData
    .map((category) => `              <li><a class="footer-link" href="#${category.slug}">${category.title}</a></li>`)
    .join('\n');
}

function replaceContainer(html, containerId, newContent) {
  const pattern = new RegExp(`(<[^>]*id=\\"${containerId}\\"[^>]*>)([\\s\\S]*?)(<\\/${containerId.startsWith('labs-footer') ? 'ul' : 'div'}>)`);
  return html.replace(pattern, (_, start, _oldContent, end) => `${start}\n${newContent}\n    ${end}`);
}

function updateLabsHtml(curriculumData) {
  if (!fs.existsSync(LABS_PATH)) return;
  let html = fs.readFileSync(LABS_PATH, 'utf8');
  const quickNav = buildQuickNavHtml(curriculumData);
  const sections = buildSectionsHtml(curriculumData);
  const footer = buildFooterLinksHtml(curriculumData);

  html = replaceContainer(html, 'labs-quick-nav', quickNav);
  html = replaceContainer(html, 'labs-sections-root', sections);
  html = replaceContainer(html, 'labs-footer-links', footer);

  fs.writeFileSync(LABS_PATH, html, 'utf8');
}

async function main() {
  const lessonsRaw = loadLessonsData();
  const normalizedLessons = lessonsRaw.map(normalizeLesson);
  const template = fs.readFileSync(LESSON_TEMPLATE_PATH, 'utf8');
  const existingCurriculum = await loadExistingCurriculum();

  const updatedCurriculum = updateCurriculum(existingCurriculum, normalizedLessons);
  writeCurriculumFile(updatedCurriculum);

  normalizedLessons.forEach((lesson) => {
    const categoryLessons = updatedCurriculum.find((cat) => cat.slug === lesson.category)?.lessons || [];
    const currentIndex = categoryLessons.findIndex((l) => l.slug === lesson.slug);
    const prevLesson = categoryLessons[currentIndex - 1];
    const nextLesson = categoryLessons[currentIndex + 1];

    const pagePath = `lessons/${lesson.category}/${lesson.slug}.html`;
    const navigation = {
      index: currentIndex >= 0 ? currentIndex : 0,
      prev: prevLesson ? getRelativeUrl(pagePath, prevLesson.pagePath) : null,
      next: nextLesson ? getRelativeUrl(pagePath, nextLesson.pagePath) : null,
      overview: getRelativeUrl(pagePath, 'labs.html')
    };

    const config = buildLessonConfig(lesson, navigation);
    writeLessonConfig(config, lesson.category, lesson.slug);

    const assetBase = path.posix.relative(path.posix.dirname(pagePath), '.') || '.';
    const configImportPath = path.posix.join('configs', lesson.category, `${lesson.slug}.config.js`);
    const htmlContent = buildLessonHtml(template, assetBase, configImportPath);
    writeLessonHtml(htmlContent, lesson.category, lesson.slug);
  });

  updateLabsHtml(updatedCurriculum);
}

main().catch((err) => {
  console.error('[generate-lessons] Error:', err.message);
  process.exit(1);
});
