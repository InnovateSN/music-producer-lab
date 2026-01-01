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

  // Inject Drum Playground banner for drum lessons
  injectDrumPlaygroundBanner();

  console.log('[LessonEngine] Lesson initialized:', mergedConfig.lessonKey);
}

// ==========================================
// DRUM PLAYGROUND BANNER
// ==========================================

function injectDrumPlaygroundBanner() {
  // Only show on drum lessons
  const isDrumLesson = window.location.pathname.includes('lesson-drums');
  if (!isDrumLesson) return;

  // Check if banner already exists
  if (document.getElementById('drum-playground-banner')) return;

  // Extract lesson number from URL (e.g., lesson-drums-5.html -> 5)
  const lessonMatch = window.location.pathname.match(/lesson-drums-(\d+)/);
  const lessonNumber = lessonMatch ? parseInt(lessonMatch[1]) : 0;

  // Contextual messages based on lesson progression
  let message = "Try this pattern in Drum Playground";

  if (lessonNumber >= 1 && lessonNumber <= 3) {
    message = "Ready to practice this? Build your first loop in the Playground";
  } else if (lessonNumber >= 4 && lessonNumber <= 7) {
    message = "Try this kick and snare pattern in the Playground";
  } else if (lessonNumber >= 8 && lessonNumber <= 12) {
    message = "Hear swing and velocity changes instantly in the Playground";
  } else if (lessonNumber >= 13 && lessonNumber <= 18) {
    message = "Make 3 variations of this pattern and export them";
  } else if (lessonNumber >= 19 && lessonNumber <= 22) {
    message = "Use the mixer to balance your drums, then export WAV";
  }

  // Create banner HTML
  const banner = document.createElement('div');
  banner.id = 'drum-playground-banner';
  banner.style.cssText = `
    position: sticky;
    top: 80px;
    z-index: 100;
    margin: var(--space-lg) 0;
    padding: var(--space-md) var(--space-lg);
    background: linear-gradient(135deg, rgba(0, 240, 255, 0.1) 0%, rgba(179, 102, 255, 0.05) 100%);
    border: 1px solid var(--accent-cyan);
    border-radius: var(--radius-md);
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--space-md);
    box-shadow: 0 4px 12px rgba(0, 240, 255, 0.1);
    flex-wrap: wrap;
  `;

  banner.innerHTML = `
    <div style="display: flex; align-items: center; gap: var(--space-md); flex: 1; min-width: 200px;">
      <div style="display: flex; align-items: center; justify-content: center; width: 40px; height: 40px; background: rgba(0, 240, 255, 0.2); border-radius: var(--radius-md); flex-shrink: 0;">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color: var(--accent-cyan);">
          <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
        </svg>
      </div>
      <div>
        <div style="font-weight: 600; color: var(--text-primary); margin-bottom: 2px;">Practice Tool</div>
        <div style="font-size: 0.85rem; color: var(--text-muted);">${message}</div>
      </div>
    </div>
    <a href="drum-playground.html" style="
      display: inline-flex;
      align-items: center;
      gap: var(--space-xs);
      padding: var(--space-sm) var(--space-lg);
      background: var(--accent-cyan);
      color: var(--bg-dark);
      font-weight: 600;
      font-size: 0.9rem;
      border-radius: var(--radius-md);
      text-decoration: none;
      transition: all var(--transition-base);
      white-space: nowrap;
    " onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 4px 16px rgba(0,240,255,0.4)';" onmouseout="this.style.transform=''; this.style.boxShadow='';">
      <span>Open Playground</span>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M5 12h14M12 5l7 7-7 7"/>
      </svg>
    </a>
  `;

  // Insert banner after hero section
  const heroSection = document.getElementById('mpl-hero');
  if (heroSection && heroSection.nextSibling) {
    heroSection.parentNode.insertBefore(banner, heroSection.nextSibling);
  } else {
    // Fallback: insert at top of main content
    const mainContent = document.querySelector('main.main-content') || document.querySelector('main');
    if (mainContent) {
      mainContent.insertBefore(banner, mainContent.firstChild);
    }
  }
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

  // Color palette for different instruments
  const instrumentColors = {
    'kick': '#ff5a3d',
    'snare': '#5f4dff',
    'hihat': '#00d4ff',
    'hat': '#00d4ff',
    'bass': '#a855f7',
    'clap': '#f59e0b',
    'perc': '#10b981'
  };

  // Import mixer functions from sequencer
  import('./sequencer.js').then(({ setMixerVolume, setMixerPan, getMixerState, setMeterUpdateCallback }) => {
    // Clear container
    container.innerHTML = '';

    // Create mixer channels container with professional styling
    const channelsContainer = document.createElement('div');
    channelsContainer.className = 'mixer-channels';

    // Meter animation state
    const meterLevels = {};
    const meterPeaks = {};
    const meterDecayIntervals = {};

    // Register callback for real-time meter updates
    setMeterUpdateCallback((instrument, level) => {
      // Update meter level
      meterLevels[instrument] = level * 100; // Convert to percentage

      // Update peak if higher
      if (!meterPeaks[instrument] || level * 100 > meterPeaks[instrument]) {
        meterPeaks[instrument] = level * 100;
      }

      // Update visual elements
      const meterFill = document.getElementById(`meter-${instrument}`);
      const meterPeak = document.getElementById(`peak-${instrument}`);

      if (meterFill) {
        meterFill.style.height = `${level * 100}%`;
      }
      if (meterPeak && meterPeaks[instrument]) {
        meterPeak.style.bottom = `${meterPeaks[instrument]}%`;
      }

      // Start decay animation
      if (meterDecayIntervals[instrument]) {
        clearInterval(meterDecayIntervals[instrument]);
      }

      meterDecayIntervals[instrument] = setInterval(() => {
        // Decay meter level
        if (meterLevels[instrument] > 0) {
          meterLevels[instrument] = Math.max(0, meterLevels[instrument] - 5); // Decay by 5% per frame
          if (meterFill) {
            meterFill.style.height = `${meterLevels[instrument]}%`;
          }
        }

        // Decay peak level (slower)
        if (meterPeaks[instrument] > 0) {
          meterPeaks[instrument] = Math.max(0, meterPeaks[instrument] - 1.5); // Decay by 1.5% per frame
          if (meterPeak) {
            meterPeak.style.bottom = `${meterPeaks[instrument]}%`;
          }
        }

        // Stop animation when both are at 0
        if (meterLevels[instrument] <= 0 && meterPeaks[instrument] <= 0) {
          clearInterval(meterDecayIntervals[instrument]);
          meterDecayIntervals[instrument] = null;
        }
      }, 50); // Update every 50ms for smooth animation

      // UPDATE MASTER METER: Accumulate all active levels
      const masterLevel = Math.min(100, level * 100); // Cap at 100%

      if (!meterLevels['master']) meterLevels['master'] = 0;
      if (!meterPeaks['master']) meterPeaks['master'] = 0;

      // Add to master (simulating mix bus)
      meterLevels['master'] = Math.min(100, meterLevels['master'] + masterLevel * 0.3); // Scale down to prevent clipping

      // Update master peak
      if (meterLevels['master'] > meterPeaks['master']) {
        meterPeaks['master'] = meterLevels['master'];
      }

      // Update master visual elements
      const masterMeterFill = document.getElementById('meter-master');
      const masterMeterPeak = document.getElementById('peak-master');

      if (masterMeterFill) {
        masterMeterFill.style.height = `${meterLevels['master']}%`;
      }
      if (masterMeterPeak) {
        masterMeterPeak.style.bottom = `${meterPeaks['master']}%`;
      }

      // Start master decay animation
      if (meterDecayIntervals['master']) {
        clearInterval(meterDecayIntervals['master']);
      }

      meterDecayIntervals['master'] = setInterval(() => {
        if (meterLevels['master'] > 0) {
          meterLevels['master'] = Math.max(0, meterLevels['master'] - 5);
          if (masterMeterFill) {
            masterMeterFill.style.height = `${meterLevels['master']}%`;
          }
        }

        if (meterPeaks['master'] > 0) {
          meterPeaks['master'] = Math.max(0, meterPeaks['master'] - 1.5);
          if (masterMeterPeak) {
            masterMeterPeak.style.bottom = `${meterPeaks['master']}%`;
          }
        }

        if (meterLevels['master'] <= 0 && meterPeaks['master'] <= 0) {
          clearInterval(meterDecayIntervals['master']);
          meterDecayIntervals['master'] = null;
        }
      }, 50);
    });

    instruments.forEach(inst => {
      const mixerState = getMixerState(inst.id);

      // Determine color based on instrument name
      let color = '#00d4ff'; // default cyan
      for (const [key, value] of Object.entries(instrumentColors)) {
        if (inst.id.toLowerCase().includes(key) || inst.label.toLowerCase().includes(key)) {
          color = value;
          break;
        }
      }

      const channel = document.createElement('div');
      channel.className = 'channel-strip';
      channel.dataset.channel = inst.id;

      channel.innerHTML = `
        <div class="channel-name" style="background: linear-gradient(180deg, ${color}40 0%, ${color}10 100%); border-bottom: 2px solid ${color};">
          ${inst.label}
        </div>

        <div class="channel-meter">
          <div class="meter-fill" id="meter-${inst.id}" style="height: 0%"></div>
          <div class="meter-peak" id="peak-${inst.id}" style="bottom: 0%"></div>
        </div>

        <div class="channel-fader-container">
          <input type="range" class="vertical-slider" id="mixer-vol-${inst.id}"
                 min="0" max="100" value="${(mixerState.volume * 100).toFixed(0)}"
                 orient="vertical" style="height: 140px;">
          <span class="fader-value" id="mixer-vol-value-${inst.id}">
            ${volumeToDb(mixerState.volume)}
          </span>
        </div>

        <div class="channel-pan">
          <span class="pan-label">PAN</span>
          <input type="range" id="mixer-pan-${inst.id}"
                 min="-100" max="100" value="${(mixerState.pan * 100).toFixed(0)}"
                 style="width: 70px;">
          <span class="pan-label" id="mixer-pan-value-${inst.id}">
            ${panToText(mixerState.pan)}
          </span>
        </div>

        <div class="channel-controls">
          <button class="channel-btn mute" id="mixer-mute-${inst.id}" title="Mute">M</button>
          <button class="channel-btn solo" id="mixer-solo-${inst.id}" title="Solo">S</button>
        </div>
      `;

      // Add event listeners
      const volSlider = channel.querySelector(`#mixer-vol-${inst.id}`);
      const volValue = channel.querySelector(`#mixer-vol-value-${inst.id}`);
      const panSlider = channel.querySelector(`#mixer-pan-${inst.id}`);
      const panValue = channel.querySelector(`#mixer-pan-value-${inst.id}`);
      const muteBtn = channel.querySelector(`#mixer-mute-${inst.id}`);
      const soloBtn = channel.querySelector(`#mixer-solo-${inst.id}`);

      volSlider.addEventListener('input', (e) => {
        const volume = parseFloat(e.target.value) / 100;
        setMixerVolume(inst.id, volume);
        volValue.textContent = volumeToDb(volume);
      });

      panSlider.addEventListener('input', (e) => {
        const pan = parseFloat(e.target.value) / 100;
        setMixerPan(inst.id, pan);
        panValue.textContent = panToText(pan);
      });

      // Mute/Solo functionality (basic implementation)
      muteBtn.addEventListener('click', () => {
        muteBtn.classList.toggle('active');
        const isMuted = muteBtn.classList.contains('active');
        setMixerVolume(inst.id, isMuted ? 0 : parseFloat(volSlider.value) / 100);
      });

      soloBtn.addEventListener('click', () => {
        soloBtn.classList.toggle('active');
        // Solo functionality would need more complex implementation
      });

      channelsContainer.appendChild(channel);
    });

    // Add MASTER channel strip
    const masterChannel = document.createElement('div');
    masterChannel.className = 'channel-strip master-channel';
    masterChannel.style.cssText = 'min-width: 130px; max-width: 130px; border: 2px solid #fbbf24;';

    const masterColor = '#fbbf24'; // Gold color for master
    masterChannel.innerHTML = `
      <div class="channel-name" style="background: linear-gradient(180deg, ${masterColor}60 0%, ${masterColor}20 100%); border-bottom: 3px solid ${masterColor}; font-size: 0.85rem; font-weight: 800; letter-spacing: 0.05em;">
        MASTER
      </div>

      <div class="channel-meter" style="height: 200px;">
        <div class="meter-fill" id="meter-master" style="height: 0%"></div>
        <div class="meter-peak" id="peak-master" style="bottom: 0%"></div>
      </div>

      <div class="channel-fader-container">
        <div class="fader-value" style="font-size: 1rem; font-weight: 700; color: ${masterColor}; text-shadow: 0 0 8px ${masterColor};">
          0.0 dB
        </div>
      </div>

      <div style="height: 80px; display: flex; align-items: center; justify-content: center;">
        <div style="font-size: 0.65rem; color: #64748b; text-align: center;">
          Mix Output
        </div>
      </div>
    `;

    channelsContainer.appendChild(masterChannel);

    container.appendChild(channelsContainer);
  });
}

// Helper functions for mixer display
function volumeToDb(volume) {
  if (volume === 0) return '-∞ dB';
  const db = 20 * Math.log10(volume);
  return db.toFixed(1) + ' dB';
}

function panToText(pan) {
  if (pan === 0) return 'C';
  if (pan < 0) return 'L' + Math.abs(Math.round(pan * 100));
  return 'R' + Math.round(pan * 100);
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
