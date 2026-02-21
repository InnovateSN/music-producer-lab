import { initDrumSequencer } from '../sequencer.js';

function getLessonSlug() {
  const path = window.location.pathname || '';
  const fileName = path.split('/').pop();
  if (!fileName || !fileName.endsWith('.html')) return null;
  return fileName.replace('.html', '');
}

async function loadLessonConfig(lessonSlug) {
  try {
    const module = await import(`../configs/${lessonSlug}.config.js`);
    return module.lessonConfig || module.default || null;
  } catch (error) {
    console.error(`[LessonLoader] Unable to load config for ${lessonSlug}:`, error);
    return null;
  }
}

function renderSequencerShell(root, initialMessage, nextLessonUrl) {
  if (!root) return;

  const section = document.createElement('section');
  section.className = 'sequencer-section';
  section.style.marginTop = 'var(--space-lg)';

  section.innerHTML = `
    <div class="sequencer-controls" style="display:flex;gap:0.75rem;flex-wrap:wrap;align-items:center;">
      <button type="button" class="btn btn-outline" id="mpl-seq-play-all">▶️ Play</button>
      <button type="button" class="btn btn-outline" id="mpl-seq-stop-all">⏹ Stop</button>
      <button type="button" class="btn btn-outline" id="mpl-seq-clear-all">🧹 Clear</button>
      <button type="button" class="btn btn-outline" id="mpl-seq-check-all">✅ Check Pattern</button>
      <div id="mpl-preset-controls" style="display:none;gap:0.5rem;align-items:center;">
        <button type="button" class="btn btn-outline" id="mpl-export-json">💾 Export</button>
      </div>
      <button type="button" class="btn btn-primary" id="mpl-next-lesson" disabled style="opacity:0.6;">Next Lesson →</button>
    </div>
    <div class="sequencer" id="mpl-sequencer-collection" style="margin-top:1rem;"></div>
    <div class="sequencer-status" id="mpl-seq-status" aria-live="polite" style="margin-top:1rem;">${initialMessage}</div>
  `;

  root.replaceChildren(section);

  const nextBtn = section.querySelector('#mpl-next-lesson');
  if (nextBtn) {
    if (nextLessonUrl) {
      nextBtn.setAttribute('aria-label', 'Proceed to next lesson');
    } else {
      nextBtn.style.display = 'none';
    }
  }
}

function renderProgressionMeta(root, config) {
  const progression = config?.progression;
  if (!root || !progression) return;

  const prerequisites = Array.isArray(progression.prerequisites)
    ? progression.prerequisites
    : [];
  const outcomes = Array.isArray(progression.outcomes) ? progression.outcomes : [];

  const lessonPrefix = (config.nextLessonUrl || '')
    .replace('lesson-', '')
    .replace('.html', '')
    .split('-')[0] || 'lesson';

  const recommendation = prerequisites.length
    ? `Consigliato completare prima: ${prerequisites
        .map((slug) => `lesson-${slug}.html`)
        .join(', ')}`
    : `Nessun prerequisito formale. Ti consigliamo comunque di seguire l'ordine del modulo ${lessonPrefix}.`;

  const box = document.createElement('aside');
  box.className = 'lesson-progression-meta';
  box.style.cssText = 'margin-top:1rem;padding:0.75rem 1rem;border:1px solid rgba(255,255,255,0.18);border-radius:0.5rem;background:rgba(255,255,255,0.03);';
  box.innerHTML = `
    <h3 style="margin:0 0 0.5rem 0;font-size:1rem;">Progressione didattica</h3>
    <p style="margin:0 0 0.5rem 0;"><strong>Difficoltà:</strong> ${progression.difficulty || 'n/d'}</p>
    <p style="margin:0 0 0.5rem 0;"><strong>Prerequisiti:</strong> ${prerequisites.length ? prerequisites.join(', ') : 'Nessuno'}</p>
    <p style="margin:0 0 0.5rem 0;"><strong>Raccomandazione:</strong> ${recommendation}</p>
    ${outcomes.length ? `<ul style="margin:0;padding-left:1.25rem;">${outcomes.map((item) => `<li>${item}</li>`).join('')}</ul>` : ''}
  `;

  root.appendChild(box);
}

function normalizeInstruments(configInstruments = []) {
  return configInstruments.map((instrument) => ({
    ...instrument,
    target: instrument.target || instrument.targetSteps || []
  }));
}

function buildSequencerOptions(config) {
  const sequencer = config.sequencer || {};
  const mode = config.mode || {};

  return {
    tempo: sequencer.tempo ?? 120,
    stepCount: sequencer.stepCount ?? 16,
    swing: sequencer.swing ?? 0,
    messages: config.messages || {},
    sandbox: mode.sandbox || false,
    autoSaveState: sequencer.autoSaveState ?? true,
    enablePresets: mode.enablePresets || false,
    enableExport: mode.enableExport || false
  };
}

(async function init() {
  const lessonSlug = getLessonSlug();
  if (!lessonSlug || !lessonSlug.startsWith('lesson-drums')) return;

  const root = document.getElementById('sequencer-root');
  if (!root) return;

  const config = await loadLessonConfig(lessonSlug);
  if (!config || !Array.isArray(config.instruments) || config.instruments.length === 0) {
    console.warn('[LessonLoader] No instruments found for this lesson.');
    return;
  }

  const initialMessage = config.messages?.initial || 'Complete the exercise to unlock the next lesson.';
  renderSequencerShell(root, initialMessage, config.nextLessonUrl);
  renderProgressionMeta(root, config);

  const instruments = normalizeInstruments(config.instruments);
  const options = buildSequencerOptions(config);

  initDrumSequencer(instruments, config.lessonKey || lessonSlug, config.nextLessonUrl || null, options);
})();
