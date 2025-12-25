/**
 * Music Producer Lab - Lesson Engine
 * Modular lesson system for generating interactive music lessons from config files
 * 
 * This engine handles:
 * - Page population from config
 * - Pattern hint visualization
 * - Sequencer initialization
 * - Progress tracking
 * - Preset management (optional)
 */

import { initDrumSequencer, playSound, drumSounds } from './sequencer.js';
import { curriculum as defaultCurriculum, getLessonNavigation } from './curriculum.js';

// ==========================================
// MAIN INITIALIZATION
// ==========================================

/**
 * Initialize a complete lesson from a configuration object
 * @param {Object} config - Lesson configuration object
 */
export function initLessonFromConfig(config, curriculumData = defaultCurriculum) {
  if (!config) {
    console.error('[LessonEngine] No config provided');
    return;
  }

  const navigation = getLessonNavigation({
    lessonKey: config.lessonKey,
    slug: config.slug || config.lessonSlug,
    curriculumData
  });

  const mergedConfig = {
    ...config,
    overviewUrl: navigation.overviewUrl || config.overviewUrl || 'labs.html',
    prevLessonUrl: navigation.prevLessonUrl ?? config.prevLessonUrl ?? null,
    nextLessonUrl: navigation.nextLessonUrl ?? config.nextLessonUrl ?? null
  };

  // Store config globally for access by other functions
  window._lessonConfig = mergedConfig;
  
  // Set page title and meta
  setPageMeta(mergedConfig);
  
  // Populate hero section
  populateHero(mergedConfig);
  
  // Populate exercise section
  populateExercise(mergedConfig);
  
  // Generate pattern hint if enabled
  if (mergedConfig.patternHint?.enabled !== false && mergedConfig.instruments?.length > 0) {
    generatePatternHint(mergedConfig);
  }

  // Setup navigation
  setupNavigation(mergedConfig);
  
  // Handle mode-specific UI
  setupModeUI(mergedConfig);
  
  // Initialize the sequencer
  initSequencer(mergedConfig);
  
  // Setup advanced controls (tempo, swing)
  setupAdvancedControls(mergedConfig);
  
  // Setup preset controls if enabled
  if (mergedConfig.mode?.enablePresets) {
    setupPresetControls(mergedConfig);
  }

  console.log('[LessonEngine] Lesson initialized:', mergedConfig.lessonKey);
}

// ==========================================
// PAGE META
// ==========================================

function setPageMeta(config) {
  const { hero, lessonNumber, lessonCategory } = config;
  
  // Set page title
  const pageTitle = document.getElementById('mpl-page-title');
  if (pageTitle && hero) {
    const title = `Lesson ${lessonNumber || ''} · ${hero.title || 'Lesson'} · Music Producer Lab`;
    pageTitle.textContent = title.replace(/<[^>]*>/g, ''); // Strip HTML
    document.title = pageTitle.textContent;
  }
  
  // Set meta description
  const metaDesc = document.getElementById('mpl-meta-description');
  if (metaDesc && hero?.subtitle) {
    metaDesc.setAttribute('content', hero.subtitle.replace(/<[^>]*>/g, ''));
  }
}

// ==========================================
// HERO SECTION
// ==========================================

function populateHero(config) {
  const { hero, prevLessonUrl, overviewUrl } = config;
  if (!hero) return;
  
  // Eyebrow
  const eyebrow = document.getElementById('mpl-hero-eyebrow');
  if (eyebrow) eyebrow.textContent = hero.eyebrow || '';
  
  // Title
  const titleMain = document.getElementById('mpl-hero-title-main');
  const titleHighlight = document.getElementById('mpl-hero-title-highlight');
  if (titleMain) titleMain.textContent = hero.title || 'Lesson';
  if (titleHighlight && hero.titleHighlight) {
    titleHighlight.innerHTML = ` <span>${hero.titleHighlight}</span>.`;
  }
  
  // Subtitle
  const subtitle = document.getElementById('mpl-hero-subtitle');
  if (subtitle) subtitle.innerHTML = hero.subtitle || '';
  
  // Navigation buttons in hero
  const navBtns = document.getElementById('mpl-hero-nav-btns');
  if (navBtns) {
    navBtns.innerHTML = '';
    
    if (prevLessonUrl) {
      const prevBtn = createButton('Back to Previous Lesson', prevLessonUrl, 'btn btn-primary');
      navBtns.appendChild(prevBtn);
    }
    
    if (overviewUrl) {
      const overviewBtn = createButton('Back to overview', overviewUrl, 'btn btn-primary');
      overviewBtn.style.marginLeft = '0.6rem';
      navBtns.appendChild(overviewBtn);
    }
  }
}

// ==========================================
// EXERCISE SECTION
// ==========================================

function populateExercise(config) {
  const { exercise, mode } = config;
  
  // Hide exercise section in sandbox mode
  if (mode?.sandbox) {
    const exerciseSection = document.getElementById('mpl-exercise-section');
    if (exerciseSection) exerciseSection.style.display = 'none';
    return;
  }
  
  if (!exercise) return;
  
  // Title
  const title = document.getElementById('mpl-exercise-title');
  if (title) title.textContent = exercise.title || 'Exercise';
  
  // Description
  const desc = document.getElementById('mpl-exercise-description');
  if (desc) desc.innerHTML = exercise.description || '';
  
  // Steps
  const stepsList = document.getElementById('mpl-exercise-steps');
  if (stepsList && exercise.steps?.length > 0) {
    stepsList.innerHTML = exercise.steps.map(step => 
      `<li>${step.text || step}</li>`
    ).join('');
  }
  
  // Tip
  const tipEl = document.getElementById('mpl-exercise-tip');
  const tipText = document.getElementById('mpl-exercise-tip-text');
  if (tipEl && tipText && exercise.tip) {
    tipEl.style.display = 'block';
    tipText.innerHTML = exercise.tip;
  }
}

// ==========================================
// PATTERN HINT VISUALIZATION
// ==========================================

function generatePatternHint(config) {
  const { instruments, sequencer, patternHint } = config;
  const stepCount = sequencer?.stepCount || 16;
  
  const hintContainer = document.getElementById('mpl-pattern-hint');
  const hintGrid = document.getElementById('mpl-pattern-hint-grid');
  const hintNote = document.getElementById('mpl-pattern-hint-note');
  
  if (!hintContainer || !hintGrid) return;
  
  // Show the container
  hintContainer.style.display = 'block';
  
  // Generate pattern rows for each instrument
  let html = '';
  instruments.forEach(inst => {
    const targetSteps = inst.targetSteps || [];
    const highlightSteps = inst.patternHint?.highlightSteps || [];
    const fillZoneSteps = inst.patternHint?.fillZoneSteps || [];
    
    html += `<div class="pattern-row-visual">`;
    html += `<span class="instrument-label">${inst.label}:</span>`;
    
    for (let i = 0; i < stepCount; i++) {
      const isOn = targetSteps.includes(i);
      const isHighlight = highlightSteps.includes(i);
      const isFillZone = fillZoneSteps.includes(i);
      
      let classes = isOn ? 'step-on' : 'step-off';
      if (isOn && isHighlight) classes += ' highlight';
      if (!isOn && isFillZone) classes += ' fill-zone';
      
      html += `<span class="${classes}">${i + 1}</span>`;
    }
    
    html += `</div>`;
  });
  
  hintGrid.innerHTML = html;
  
  // Add note if provided
  if (hintNote && patternHint?.note) {
    hintNote.textContent = patternHint.note;
    hintNote.style.display = 'block';
  }
}

// ==========================================
// NAVIGATION
// ==========================================

function setupNavigation(config) {
  const { overviewUrl, nextLessonUrl } = config;
  
  // Back button in header
  const backBtn = document.getElementById('mpl-back-btn');
  if (backBtn && overviewUrl) {
    backBtn.onclick = () => window.location.href = overviewUrl;
  }
  
  // Footer link
  const footerLink = document.getElementById('mpl-footer-overview-link');
  if (footerLink && overviewUrl) {
    footerLink.href = overviewUrl;
  }
  
  // Next lesson button (handled by sequencer)
  const nextBtn = document.getElementById('mpl-next-lesson');
  if (nextBtn) {
    if (!nextLessonUrl) {
      // Hide next button if no next lesson
      const wrapper = document.getElementById('mpl-seq-next-lesson-wrap');
      if (wrapper) wrapper.style.display = 'none';
    }
  }
}

// ==========================================
// MODE-SPECIFIC UI
// ==========================================

function setupModeUI(config) {
  const { mode, sequencer } = config;
  
  // Sandbox mode
  if (mode?.sandbox) {
    // Show clear button
    const clearBtn = document.getElementById('mpl-seq-clear-all');
    if (clearBtn) clearBtn.style.display = 'inline-flex';
    
    // Hide check button
    const checkBtn = document.getElementById('mpl-seq-check-all');
    if (checkBtn) checkBtn.style.display = 'none';
    
    // Hide next lesson button
    const nextWrap = document.getElementById('mpl-seq-next-lesson-wrap');
    if (nextWrap) nextWrap.style.display = 'none';
    
    // Show advanced controls
    const advControls = document.getElementById('mpl-advanced-controls');
    if (advControls) advControls.style.display = 'flex';
    
    // Update status message
    const status = document.getElementById('mpl-seq-status');
    if (status) status.textContent = 'Sandbox mode - experiment freely with the sequencer!';
  }
  
  // Update step count label
  const stepLabel = document.getElementById('mpl-step-count-label');
  if (stepLabel) stepLabel.textContent = sequencer?.stepCount || 16;
}

// ==========================================
// SEQUENCER INITIALIZATION
// ==========================================

function initSequencer(config) {
  const { instruments, lessonKey, nextLessonUrl, sequencer: seqConfig, messages, mode } = config;
  
  if (!instruments || instruments.length === 0) {
    console.error('[LessonEngine] No instruments defined in config');
    return;
  }
  
  // Convert config instruments to sequencer format
  const seqInstruments = instruments.map(inst => ({
    id: inst.id,
    label: inst.label,
    color: inst.color,
    target: mode?.sandbox ? [] : (inst.targetSteps || []),
    instructions: inst.instructionText || ''
  }));
  
  // Initialize the drum sequencer
  initDrumSequencer(
    seqInstruments, 
    lessonKey, 
    nextLessonUrl,
    {
      tempo: seqConfig?.tempo || 120,
      stepCount: seqConfig?.stepCount || 16,
      swing: seqConfig?.swing || 0,
      messages: messages,
      sandbox: mode?.sandbox || false
    }
  );
}

// ==========================================
// ADVANCED CONTROLS (Tempo, Swing)
// ==========================================

function setupAdvancedControls(config) {
  const tempoSlider = document.getElementById('mpl-tempo-slider');
  const tempoValue = document.getElementById('mpl-tempo-value');
  const swingSlider = document.getElementById('mpl-swing-slider');
  const swingValue = document.getElementById('mpl-swing-value');
  
  if (tempoSlider && tempoValue) {
    tempoSlider.value = config.sequencer?.tempo || 120;
    tempoValue.textContent = `${tempoSlider.value} BPM`;
    
    tempoSlider.addEventListener('input', () => {
      const tempo = parseInt(tempoSlider.value);
      tempoValue.textContent = `${tempo} BPM`;
      // Dispatch custom event for sequencer to pick up
      window.dispatchEvent(new CustomEvent('mpl-tempo-change', { detail: { tempo } }));
    });
  }
  
  if (swingSlider && swingValue) {
    swingSlider.value = config.sequencer?.swing || 0;
    swingValue.textContent = `${swingSlider.value}%`;
    
    swingSlider.addEventListener('input', () => {
      const swing = parseInt(swingSlider.value);
      swingValue.textContent = `${swing}%`;
      window.dispatchEvent(new CustomEvent('mpl-swing-change', { detail: { swing } }));
    });
  }
}

// ==========================================
// PRESET CONTROLS
// ==========================================

function setupPresetControls(config) {
  const controlsWrap = document.getElementById('mpl-preset-controls');
  if (!controlsWrap) return;
  
  controlsWrap.style.display = 'flex';
  
  const saveBtn = document.getElementById('mpl-preset-save');
  const loadBtn = document.getElementById('mpl-preset-load');
  
  if (saveBtn) {
    saveBtn.addEventListener('click', () => {
      window.dispatchEvent(new CustomEvent('mpl-preset-save'));
    });
  }
  
  if (loadBtn) {
    loadBtn.addEventListener('click', () => {
      window.dispatchEvent(new CustomEvent('mpl-preset-load'));
    });
  }
}

// ==========================================
// UTILITY FUNCTIONS
// ==========================================

function createButton(text, href, className) {
  const btn = document.createElement('a');
  btn.className = className;
  btn.href = href;
  btn.innerHTML = `<span>${text}</span>`;
  return btn;
}

// ==========================================
// EXPORTS FOR EXTERNAL USE
// ==========================================

export {
  populateHero,
  populateExercise,
  generatePatternHint,
  setupNavigation
};

// ==========================================
// QUICK CONFIG LOADER (for HTML script tags)
// ==========================================

/**
 * Load a lesson config from a JSON file and initialize
 * Usage: loadLessonConfig('./configs/lesson-drums-5.json')
 */
export async function loadLessonConfig(configUrl, curriculumData = defaultCurriculum) {
  try {
    const response = await fetch(configUrl);
    if (!response.ok) throw new Error(`Failed to load config: ${response.status}`);
    const config = await response.json();
    initLessonFromConfig(config, curriculumData);
  } catch (error) {
    console.error('[LessonEngine] Error loading config:', error);
  }
}

// Make available on window for non-module scripts
if (typeof window !== 'undefined') {
  window.initLessonFromConfig = initLessonFromConfig;
  window.loadLessonConfig = loadLessonConfig;
}
