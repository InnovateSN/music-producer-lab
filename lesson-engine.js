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

  // Populate theory section if present
  if (mergedConfig.theory?.sections) {
    populateTheory(mergedConfig);
  }

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

  // Video Embed
  const videoEmbed = document.getElementById('mpl-video-embed');
  const videoTitle = document.getElementById('mpl-video-title');
  const videoIframe = document.getElementById('mpl-video-iframe');
  const videoDesc = document.getElementById('mpl-video-description');

  if (videoEmbed && exercise.videoEmbed?.enabled && exercise.videoEmbed?.url) {
    videoEmbed.style.display = 'block';
    if (videoTitle && exercise.videoEmbed.title) {
      videoTitle.textContent = exercise.videoEmbed.title;
    }
    if (videoIframe) {
      videoIframe.src = exercise.videoEmbed.url;
    }
    if (videoDesc && exercise.videoEmbed.description) {
      videoDesc.textContent = exercise.videoEmbed.description;
    }
  }
}

// ==========================================
// THEORY SECTION
// ==========================================

function populateTheory(config) {
  const { theory } = config;

  if (!theory || !theory.sections) return;

  const theorySection = document.getElementById('mpl-theory-section');
  if (!theorySection) return;

  // Generate HTML for all theory sections
  let html = '';

  theory.sections.forEach((section, index) => {
    html += `
      <div class="exercise-box" style="margin-bottom: var(--space-lg);">
        <h3 style="font-size: var(--font-size-xl); margin-bottom: var(--space-md); color: var(--accent-cyan);">
          ${section.title}
        </h3>
        <div class="section-body">
          ${section.content}
        </div>
      </div>
    `;
  });

  theorySection.innerHTML = html;
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
  const { overviewUrl, nextLessonUrl, prevLessonUrl } = config;

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

  // Previous lesson button
  const prevBtn = document.getElementById('mpl-prev-lesson');
  if (prevBtn) {
    if (prevLessonUrl) {
      prevBtn.onclick = () => window.location.href = prevLessonUrl;
      prevBtn.disabled = false;
      prevBtn.style.display = 'inline-flex';
    } else {
      // Hide previous button if no previous lesson
      const wrapper = document.getElementById('mpl-seq-prev-lesson-wrap');
      if (wrapper) wrapper.style.display = 'none';
      else prevBtn.style.display = 'none';
    }
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

    // Hide next lesson button (unless alwaysShowNextButton is true)
    if (!mode?.alwaysShowNextButton) {
      const nextWrap = document.getElementById('mpl-seq-next-lesson-wrap');
      if (nextWrap) nextWrap.style.display = 'none';
    }

    // Update status message
    const status = document.getElementById('mpl-seq-status');
    if (status) status.textContent = 'Sandbox mode - experiment freely with the sequencer!';
  }

  // Show advanced controls if enabled (sandbox, showTempoControl, or showSwingControl)
  if (mode?.sandbox || mode?.showTempoControl || mode?.showSwingControl || sequencer?.showSwingControl) {
    const advControls = document.getElementById('mpl-advanced-controls');
    if (advControls) advControls.style.display = 'flex';
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
  
  // Convert config instruments to sequencer format (preserving all properties)
  const seqInstruments = instruments.map(inst => ({
    id: inst.id,
    label: inst.label,
    color: inst.color,
    target: mode?.sandbox ? [] : (inst.targetSteps || []),
    instructions: inst.instructionText || '',
    samplePath: inst.samplePath, // Include custom sample path
    defaultVolume: inst.defaultVolume,
    defaultPan: inst.defaultPan
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
      sandbox: mode?.sandbox || false,
      autoSaveState: seqConfig?.autoSaveState ?? true,
      enablePresets: mode?.enablePresets || false,
      enableExport: mode?.enableExport || false,
      enableVelocity: seqConfig?.enableVelocity || false, // Enable velocity lanes
      enableHumanization: seqConfig?.enableHumanization || false, // Enable humanization controls
      enableMixer: mode?.enableMixer || false, // Enable mixer with volume/pan controls
      requiredTempo: seqConfig?.requiredTempo || null, // Required BPM for validation
      requiredSwing: seqConfig?.requiredSwing || null, // Required swing % for validation
      accentedSteps: seqConfig?.accentedSteps || null // Custom accented steps for beat markers
    }
  );

  // Initialize mixer UI if enabled
  if (mode?.enableMixer) {
    initMixerUI(config);
  }

  // Populate mixing theory if present
  if (config.mixingTheory) {
    populateMixingTheory(config);
  }
}

// ==========================================
// ADVANCED CONTROLS (Tempo, Swing)
// ==========================================

function setupAdvancedControls(config) {
  // Create controls container if it doesn't exist
  let advControls = document.getElementById('mpl-advanced-controls');
  if (!advControls) {
    const controlsParent = document.getElementById('mpl-seq-status');
    if (controlsParent && controlsParent.parentElement) {
      advControls = document.createElement('div');
      advControls.id = 'mpl-advanced-controls';
      advControls.style.cssText = 'display:flex;margin-top:1rem;padding:1rem;background:var(--bg-secondary);border-radius:var(--radius-md);gap:1.5rem;flex-wrap:wrap;align-items:center;';

      // Create tempo control
      const tempoDiv = document.createElement('div');
      tempoDiv.style.cssText = 'display:flex;align-items:center;gap:0.5rem;';
      tempoDiv.innerHTML = `
        <label for="mpl-tempo-slider" style="font-size:0.85rem;color:var(--text-muted);">Tempo:</label>
        <input type="range" id="mpl-tempo-slider" min="60" max="180" value="120" style="width:100px;">
        <span id="mpl-tempo-value" style="font-family:var(--font-mono);font-size:0.85rem;min-width:50px;">120 BPM</span>
      `;

      // Create swing control
      const swingDiv = document.createElement('div');
      swingDiv.style.cssText = 'display:flex;align-items:center;gap:0.5rem;';
      swingDiv.innerHTML = `
        <label for="mpl-swing-slider" style="font-size:0.85rem;color:var(--text-muted);">Swing:</label>
        <input type="range" id="mpl-swing-slider" min="0" max="100" value="0" style="width:100px;">
        <span id="mpl-swing-value" style="font-family:var(--font-mono);font-size:0.85rem;min-width:40px;">0%</span>
      `;

      advControls.appendChild(tempoDiv);
      advControls.appendChild(swingDiv);
      controlsParent.parentElement.insertBefore(advControls, controlsParent);
    }
  }

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

// ==========================================
// MIXER UI
// ==========================================

function initMixerUI(config) {
  const container = document.getElementById('mpl-mixer-container');
  if (!container) return;

  const { instruments } = config;

  // Import mixer functions from sequencer
  import('./sequencer.js').then(({ setMixerVolume, setMixerPan, getMixerState }) => {
    // Clear container
    container.innerHTML = '';

    // Create mixer channels container
    const channelsContainer = document.createElement('div');
    channelsContainer.style.cssText = `
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
      gap: var(--space-lg);
      max-width: 1200px;
      margin: 0 auto;
    `;

    instruments.forEach(inst => {
      const channel = document.createElement('div');
      channel.style.cssText = `
        background: var(--bg-tertiary, #0f1419);
        border: 1px solid var(--border-color, #1a1f2e);
        border-radius: 8px;
        padding: var(--space-md);
        display: flex;
        flex-direction: column;
        gap: var(--space-sm);
      `;

      const mixerState = getMixerState(inst.id);

      channel.innerHTML = `
        <div style="text-align: center; margin-bottom: var(--space-xs);">
          <div style="font-weight: 700; color: var(--text-primary); margin-bottom: 4px;">${inst.label}</div>
          <div style="font-size: 0.7rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.05em;">Channel</div>
        </div>

        <!-- Volume Control -->
        <div style="margin-bottom: var(--space-sm);">
          <label style="display: block; font-size: 0.75rem; font-weight: 600; color: var(--text-secondary); margin-bottom: 4px; text-align: center;">
            Volume
          </label>
          <div style="display: flex; align-items: center; gap: 8px;">
            <input
              type="range"
              id="mixer-vol-${inst.id}"
              min="0"
              max="100"
              value="${(mixerState.volume * 100).toFixed(0)}"
              style="flex: 1; cursor: pointer;"
            />
          </div>
          <div style="text-align: center; margin-top: 4px;">
            <span id="mixer-vol-value-${inst.id}" style="font-family: var(--font-mono); font-size: 0.7rem; color: var(--accent-cyan);">
              ${(mixerState.volume * 100).toFixed(0)}%
            </span>
          </div>
        </div>

        <!-- Pan Control -->
        <div>
          <label style="display: block; font-size: 0.75rem; font-weight: 600; color: var(--text-secondary); margin-bottom: 4px; text-align: center;">
            Pan
          </label>
          <div style="display: flex; align-items: center; gap: 8px;">
            <span style="font-size: 0.65rem; color: var(--text-muted);">L</span>
            <input
              type="range"
              id="mixer-pan-${inst.id}"
              min="-100"
              max="100"
              value="${(mixerState.pan * 100).toFixed(0)}"
              style="flex: 1; cursor: pointer;"
            />
            <span style="font-size: 0.65rem; color: var(--text-muted);">R</span>
          </div>
          <div style="text-align: center; margin-top: 4px;">
            <span id="mixer-pan-value-${inst.id}" style="font-family: var(--font-mono); font-size: 0.7rem; color: var(--accent-cyan);">
              ${mixerState.pan === 0 ? 'C' : (mixerState.pan > 0 ? `R${(mixerState.pan * 100).toFixed(0)}` : `L${Math.abs(mixerState.pan * 100).toFixed(0)}`)}
            </span>
          </div>
        </div>
      `;

      // Add event listeners
      const volSlider = channel.querySelector(`#mixer-vol-${inst.id}`);
      const volValue = channel.querySelector(`#mixer-vol-value-${inst.id}`);
      const panSlider = channel.querySelector(`#mixer-pan-${inst.id}`);
      const panValue = channel.querySelector(`#mixer-pan-value-${inst.id}`);

      volSlider.addEventListener('input', (e) => {
        const volume = parseFloat(e.target.value) / 100;
        setMixerVolume(inst.id, volume);
        volValue.textContent = `${(volume * 100).toFixed(0)}%`;
      });

      panSlider.addEventListener('input', (e) => {
        const pan = parseFloat(e.target.value) / 100;
        setMixerPan(inst.id, pan);
        if (pan === 0) {
          panValue.textContent = 'C';
        } else if (pan > 0) {
          panValue.textContent = `R${(pan * 100).toFixed(0)}`;
        } else {
          panValue.textContent = `L${Math.abs(pan * 100).toFixed(0)}`;
        }
      });

      channelsContainer.appendChild(channel);
    });

    container.appendChild(channelsContainer);
  });
}

// ==========================================
// MIXING THEORY
// ==========================================

function populateMixingTheory(config) {
  const container = document.getElementById('mpl-mixing-theory-section');
  if (!container || !config.mixingTheory) return;

  const { title, sections } = config.mixingTheory;

  container.innerHTML = `
    <div class="exercise-box">
      <div class="section-eyebrow">Learn</div>
      <h2 class="section-title">${title}</h2>
      ${sections.map(section => `
        <div style="margin-top: var(--space-lg);">
          <h3 style="font-size: 1.1rem; font-weight: 700; color: var(--accent-primary); margin-bottom: var(--space-sm);">
            ${section.heading}
          </h3>
          <div style="color: var(--text-secondary); line-height: 1.7; white-space: pre-line;">
            ${section.content}
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

// Make available on window for non-module scripts
if (typeof window !== 'undefined') {
  window.initLessonFromConfig = initLessonFromConfig;
  window.loadLessonConfig = loadLessonConfig;
}
