/**
 * Drum Playground Enhancements
 * - Auto-save/Continue Last Session (localStorage)
 * - Preset Patterns Library
 * - First-time Activation Nudge
 */

// ==========================================
// PRESET PATTERNS LIBRARY
// ==========================================

export const presetPatterns = [
  {
    id: 'four-on-floor',
    name: '4 on the Floor',
    category: 'Foundation',
    learningPrompt: 'Change velocity on steps 5, 9, 13 to add accents',
    bpm: 120,
    swing: 0,
    pattern: {
      kick: [true, false, false, false, true, false, false, false, true, false, false, false, true, false, false, false],
      snare: [false, false, false, false, true, false, false, false, false, false, false, false, true, false, false, false],
      hat: [true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false],
      openhat: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, false],
      clap: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      rim: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      crash: [true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
    },
    velocity: {
      kick: [100, 0, 0, 0, 100, 0, 0, 0, 100, 0, 0, 0, 100, 0, 0, 0],
      snare: [0, 0, 0, 0, 100, 0, 0, 0, 0, 0, 0, 0, 100, 0, 0, 0],
      hat: [80, 0, 60, 0, 80, 0, 60, 0, 80, 0, 60, 0, 80, 0, 60, 0],
      openhat: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 70, 0],
      clap: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      rim: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      crash: [100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    }
  },
  {
    id: 'breakbeat-basic',
    name: 'Breakbeat Basic',
    category: 'Foundation',
    learningPrompt: 'Try adding swing at 55% and hear the difference',
    bpm: 95,
    swing: 0,
    pattern: {
      kick: [true, false, false, false, false, false, true, false, false, false, true, false, false, false, false, false],
      snare: [false, false, false, false, true, false, false, false, false, false, false, false, true, false, false, false],
      hat: [true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false],
      openhat: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      clap: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      rim: [false, false, false, false, false, false, false, true, false, false, false, false, false, false, false, true],
      crash: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
    },
    velocity: {
      kick: [100, 0, 0, 0, 0, 0, 90, 0, 0, 0, 85, 0, 0, 0, 0, 0],
      snare: [0, 0, 0, 0, 100, 0, 0, 0, 0, 0, 0, 0, 100, 0, 0, 0],
      hat: [70, 0, 50, 0, 70, 0, 50, 0, 70, 0, 50, 0, 70, 0, 50, 0],
      openhat: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      clap: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      rim: [0, 0, 0, 0, 0, 0, 0, 60, 0, 0, 0, 0, 0, 0, 0, 60],
      crash: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    }
  },
  {
    id: 'trap-hats',
    name: 'Trap Hi-Hats',
    category: 'Variation',
    learningPrompt: 'Adjust velocity on steps 3, 7, 11, 15 to create rhythm',
    bpm: 140,
    swing: 0,
    pattern: {
      kick: [true, false, false, false, false, false, true, false, false, false, false, false, true, false, false, false],
      snare: [false, false, false, false, true, false, false, false, false, false, false, false, true, false, false, false],
      hat: [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],
      openhat: [false, false, false, false, false, false, false, true, false, false, false, false, false, false, false, false],
      clap: [false, false, false, false, true, false, false, false, false, false, false, false, true, false, false, false],
      rim: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      crash: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
    },
    velocity: {
      kick: [100, 0, 0, 0, 0, 0, 95, 0, 0, 0, 0, 0, 100, 0, 0, 0],
      snare: [0, 0, 0, 0, 100, 0, 0, 0, 0, 0, 0, 0, 100, 0, 0, 0],
      hat: [80, 40, 60, 40, 80, 40, 60, 40, 80, 40, 60, 40, 80, 40, 60, 40],
      openhat: [0, 0, 0, 0, 0, 0, 0, 70, 0, 0, 0, 0, 0, 0, 0, 0],
      clap: [0, 0, 0, 0, 90, 0, 0, 0, 0, 0, 0, 0, 90, 0, 0, 0],
      rim: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      crash: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    }
  },
  {
    id: 'ghost-notes',
    name: 'Ghost Notes',
    category: 'Learning',
    learningPrompt: 'Notice how low-velocity hits add groove without being loud',
    bpm: 100,
    swing: 20,
    pattern: {
      kick: [true, false, false, false, false, false, true, false, false, false, false, false, true, false, false, false],
      snare: [false, false, false, false, true, false, true, false, false, false, false, false, true, false, true, false],
      hat: [true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false],
      openhat: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      clap: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      rim: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      crash: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
    },
    velocity: {
      kick: [100, 0, 0, 0, 0, 0, 95, 0, 0, 0, 0, 0, 100, 0, 0, 0],
      snare: [0, 0, 0, 0, 100, 0, 30, 0, 0, 0, 0, 0, 100, 0, 35, 0], // Ghost notes at low velocity
      hat: [70, 0, 50, 0, 70, 0, 50, 0, 70, 0, 50, 0, 70, 0, 50, 0],
      openhat: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      clap: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      rim: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      crash: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    }
  },
  {
    id: 'swing-ab',
    name: 'Swing A/B Test',
    category: 'Learning',
    learningPrompt: 'Toggle swing between 0% and 55% to hear the groove change',
    bpm: 110,
    swing: 0,
    pattern: {
      kick: [true, false, false, false, true, false, false, false, true, false, false, false, true, false, false, false],
      snare: [false, false, false, false, true, false, false, false, false, false, false, false, true, false, false, false],
      hat: [true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false],
      openhat: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      clap: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      rim: [false, false, true, false, false, false, true, false, false, false, true, false, false, false, true, false],
      crash: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
    },
    velocity: {
      kick: [100, 0, 0, 0, 100, 0, 0, 0, 100, 0, 0, 0, 100, 0, 0, 0],
      snare: [0, 0, 0, 0, 100, 0, 0, 0, 0, 0, 0, 0, 100, 0, 0, 0],
      hat: [75, 0, 55, 0, 75, 0, 55, 0, 75, 0, 55, 0, 75, 0, 55, 0],
      openhat: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      clap: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      rim: [0, 0, 60, 0, 0, 0, 60, 0, 0, 0, 60, 0, 0, 0, 60, 0],
      crash: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    }
  },
  {
    id: 'techno-groove',
    name: 'Techno Groove',
    category: 'Genre',
    learningPrompt: 'Use the mixer to lower hats by 2-3 dB for better balance',
    bpm: 128,
    swing: 0,
    pattern: {
      kick: [true, false, false, false, true, false, false, false, true, false, false, false, true, false, false, false],
      snare: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      hat: [true, false, true, true, true, false, true, true, true, false, true, true, true, false, true, true],
      openhat: [false, false, false, false, true, false, false, false, false, false, false, false, true, false, false, false],
      clap: [false, false, false, false, true, false, false, false, false, false, false, false, true, false, false, false],
      rim: [false, true, false, false, false, true, false, false, false, true, false, false, false, true, false, false],
      crash: [true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
    },
    velocity: {
      kick: [100, 0, 0, 0, 100, 0, 0, 0, 100, 0, 0, 0, 100, 0, 0, 0],
      snare: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      hat: [65, 0, 50, 45, 65, 0, 50, 45, 65, 0, 50, 45, 65, 0, 50, 45],
      openhat: [0, 0, 0, 0, 70, 0, 0, 0, 0, 0, 0, 0, 70, 0, 0, 0],
      clap: [0, 0, 0, 0, 95, 0, 0, 0, 0, 0, 0, 0, 95, 0, 0, 0],
      rim: [0, 50, 0, 0, 0, 50, 0, 0, 0, 50, 0, 0, 0, 50, 0, 0],
      crash: [90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    }
  },
  {
    id: 'shuffle-groove',
    name: 'Shuffle Groove',
    category: 'Genre',
    learningPrompt: 'This pattern needs 65% swing to sound right - adjust and compare',
    bpm: 90,
    swing: 65,
    pattern: {
      kick: [true, false, false, false, false, false, true, false, true, false, false, false, false, false, true, false],
      snare: [false, false, false, false, true, false, false, false, false, false, false, false, true, false, false, false],
      hat: [true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false],
      openhat: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true],
      clap: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      rim: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      crash: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
    },
    velocity: {
      kick: [100, 0, 0, 0, 0, 0, 95, 0, 100, 0, 0, 0, 0, 0, 90, 0],
      snare: [0, 0, 0, 0, 100, 0, 0, 0, 0, 0, 0, 0, 100, 0, 0, 0],
      hat: [80, 0, 50, 0, 80, 0, 50, 0, 80, 0, 50, 0, 80, 0, 50, 0],
      openhat: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 75],
      clap: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      rim: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      crash: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    }
  },
  {
    id: 'velocity-groove',
    name: 'Velocity Dynamics',
    category: 'Learning',
    learningPrompt: 'Change kick velocity on beat 3 from 100 to 75 - hear the pocket shift',
    bpm: 115,
    swing: 25,
    pattern: {
      kick: [true, false, false, false, true, false, false, false, true, false, false, false, true, false, false, false],
      snare: [false, false, false, false, true, false, false, false, false, false, false, false, true, false, false, false],
      hat: [true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false],
      openhat: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, false],
      clap: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      rim: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
      crash: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
    },
    velocity: {
      kick: [100, 0, 0, 0, 95, 0, 0, 0, 100, 0, 0, 0, 85, 0, 0, 0], // Varied kick velocities
      snare: [0, 0, 0, 0, 100, 0, 0, 0, 0, 0, 0, 0, 95, 0, 0, 0],
      hat: [70, 0, 45, 0, 75, 0, 50, 0, 70, 0, 45, 0, 75, 0, 50, 0], // Varied hat velocities
      openhat: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 65, 0],
      clap: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      rim: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      crash: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    }
  }
];

// ==========================================
// LOCALSTORAGE AUTO-SAVE
// ==========================================

const STORAGE_KEY = 'drumPlaygroundState';
const AUTOSAVE_DEBOUNCE = 1000; // 1 second
let saveTimeout = null;
let lastSaveIndicatorTimeout = null;

export function saveCurrentState(state) {
  clearTimeout(saveTimeout);
  saveTimeout = setTimeout(() => {
    try {
      const dataToSave = {
        pattern: state.pattern,
        velocity: state.velocity,
        tempo: state.tempo,
        swing: state.swing,
        selectedSamples: state.selectedSamples,
        mixerState: state.mixerState,
        humanization: state.humanization,
        timestamp: Date.now()
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(dataToSave));
      showSaveIndicator();
    } catch (e) {
      console.warn('[Playground] Could not save state:', e);
    }
  }, AUTOSAVE_DEBOUNCE);
}

export function loadSavedState() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      return JSON.parse(saved);
    }
  } catch (e) {
    console.warn('[Playground] Could not load saved state:', e);
  }
  return null;
}

export function clearSavedState() {
  localStorage.removeItem(STORAGE_KEY);
}

function showSaveIndicator() {
  let indicator = document.getElementById('save-indicator');
  if (!indicator) {
    indicator = document.createElement('div');
    indicator.id = 'save-indicator';
    indicator.style.cssText = `
      position: fixed;
      bottom: 20px;
      right: 20px;
      padding: 8px 16px;
      background: rgba(0, 240, 255, 0.9);
      color: var(--bg-dark);
      border-radius: 6px;
      font-size: 0.85rem;
      font-weight: 600;
      opacity: 0;
      transition: opacity 0.3s;
      z-index: 1000;
      pointer-events: none;
    `;
    indicator.textContent = 'Saved';
    document.body.appendChild(indicator);
  }

  clearTimeout(lastSaveIndicatorTimeout);
  indicator.style.opacity = '1';
  lastSaveIndicatorTimeout = setTimeout(() => {
    indicator.style.opacity = '0';
  }, 1500);
}

// ==========================================
// FIRST-TIME ACTIVATION NUDGE
// ==========================================

const ACTIVATION_KEY = 'drumPlaygroundActivated';
const EXPORT_COUNT_KEY = 'drumPlaygroundExportCount';

export function shouldShowActivationNudge() {
  return !localStorage.getItem(ACTIVATION_KEY);
}

export function markActivated() {
  localStorage.setItem(ACTIVATION_KEY, 'true');
}

export function incrementExportCount() {
  const current = parseInt(localStorage.getItem(EXPORT_COUNT_KEY) || '0');
  localStorage.setItem(EXPORT_COUNT_KEY, (current + 1).toString());
  return current + 1;
}

export function getExportCount() {
  return parseInt(localStorage.getItem(EXPORT_COUNT_KEY) || '0');
}

export function createActivationNudge() {
  const nudge = document.createElement('div');
  nudge.id = 'activation-nudge';
  nudge.style.cssText = `
    position: sticky;
    top: 70px;
    z-index: 99;
    margin: var(--space-md) 0;
    padding: var(--space-lg);
    background: linear-gradient(135deg, rgba(255, 102, 178, 0.15) 0%, rgba(179, 102, 255, 0.1) 100%);
    border: 2px solid var(--accent-pink);
    border-radius: var(--radius-lg);
    box-shadow: 0 4px 20px rgba(255, 102, 178, 0.2);
  `;

  nudge.innerHTML = `
    <div style="display: flex; align-items: flex-start; gap: var(--space-md); margin-bottom: var(--space-md);">
      <div style="flex-shrink: 0; width: 44px; height: 44px; display: flex; align-items: center; justify-content: center; background: rgba(255, 102, 178, 0.2); border-radius: var(--radius-md);">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color: var(--accent-pink);">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
      </div>
      <div style="flex: 1;">
        <h3 style="margin: 0 0 var(--space-xs); color: var(--text-primary); font-size: 1.1rem;">Export your first loop in 3 steps:</h3>
        <ol style="margin: 0; padding-left: var(--space-lg); color: var(--text-muted); line-height: 1.7;">
          <li><strong>Load a preset</strong> from the dropdown below</li>
          <li><strong>Change one thing</strong> (swing, velocity, or tempo)</li>
          <li><strong>Export WAV</strong> and use it in your DAW</li>
        </ol>
      </div>
      <button id="dismiss-nudge" style="flex-shrink: 0; background: none; border: none; color: var(--text-dim); cursor: pointer; font-size: 1.5rem; line-height: 1; padding: 0; width: 32px; height: 32px;" title="Dismiss">×</button>
    </div>
  `;

  return nudge;
}

export function createPostExportMessage() {
  const message = document.createElement('div');
  message.id = 'post-export-message';
  message.style.cssText = `
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    max-width: 500px;
    padding: var(--space-lg) var(--space-xl);
    background: linear-gradient(135deg, rgba(0, 240, 255, 0.95) 0%, rgba(179, 102, 255, 0.95) 100%);
    color: var(--bg-dark);
    border-radius: var(--radius-lg);
    box-shadow: 0 8px 32px rgba(0, 240, 255, 0.4);
    z-index: 1000;
    animation: slideUp 0.4s ease-out;
  `;

  message.innerHTML = `
    <div style="text-align: center;">
      <div style="font-size: 1.3rem; font-weight: 700; margin-bottom: var(--space-sm);">Loop exported successfully!</div>
      <p style="margin: 0 0 var(--space-md); font-size: 0.95rem; opacity: 0.95;">Want to level up? Take the matching lesson →</p>
      <div style="display: flex; gap: var(--space-md); justify-content: center;">
        <a href="labs.html#drums" style="padding: var(--space-sm) var(--space-lg); background: var(--bg-dark); color: var(--accent-cyan); font-weight: 600; border-radius: var(--radius-md); text-decoration: none; font-size: 0.9rem;">Go to Drums Module</a>
        <button id="dismiss-export-message" style="padding: var(--space-sm) var(--space-lg); background: rgba(255, 255, 255, 0.2); color: var(--bg-dark); font-weight: 600; border: none; border-radius: var(--radius-md); cursor: pointer; font-size: 0.9rem;">Not Now</button>
      </div>
    </div>
  `;

  // Add CSS animation
  if (!document.getElementById('post-export-animation')) {
    const style = document.createElement('style');
    style.id = 'post-export-animation';
    style.textContent = `
      @keyframes slideUp {
        from {
          transform: translateX(-50%) translateY(100px);
          opacity: 0;
        }
        to {
          transform: translateX(-50%) translateY(0);
          opacity: 1;
        }
      }
    `;
    document.head.appendChild(style);
  }

  return message;
}

// ==========================================
// SHAREABLE PATTERN LINKS
// ==========================================

/**
 * Serialize pattern state to URL-safe compressed string
 */
export function serializePattern(state) {
  try {
    // Compact format:
    // {t: tempo, s: swing, p: {inst: [bools]}, v: {inst: [nums]}}
    const compact = {
      t: state.tempo || 120,
      s: state.swing || 0,
      p: {},
      v: {}
    };

    // Only include instruments with active steps
    Object.keys(state.pattern).forEach(inst => {
      const hasActiveSteps = state.pattern[inst].some(step => step);
      if (hasActiveSteps) {
        compact.p[inst] = state.pattern[inst];
        compact.v[inst] = state.velocity[inst];
      }
    });

    // Convert to JSON, then base64
    const json = JSON.stringify(compact);
    const base64 = btoa(json);

    // Make URL-safe
    return base64.replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');
  } catch (e) {
    console.error('[Playground] Serialization error:', e);
    return null;
  }
}

/**
 * Deserialize pattern from URL-safe string
 */
export function deserializePattern(encoded) {
  try {
    // Reverse URL-safe encoding
    let base64 = encoded.replace(/-/g, '+').replace(/_/g, '/');

    // Add padding if needed
    while (base64.length % 4) {
      base64 += '=';
    }

    const json = atob(base64);
    const compact = JSON.parse(json);

    // Expand to full state
    return {
      tempo: compact.t || 120,
      swing: compact.s || 0,
      pattern: compact.p || {},
      velocity: compact.v || {}
    };
  } catch (e) {
    console.error('[Playground] Deserialization error:', e);
    return null;
  }
}

/**
 * Generate shareable link for current pattern
 */
export function generateShareLink(state) {
  const encoded = serializePattern(state);
  if (!encoded) return null;

  const baseUrl = window.location.origin + window.location.pathname;
  return `${baseUrl}?pattern=${encoded}`;
}

/**
 * Load pattern from URL if present
 */
export function loadPatternFromURL() {
  const params = new URLSearchParams(window.location.search);
  const encoded = params.get('pattern');

  if (!encoded) return null;

  return deserializePattern(encoded);
}

/**
 * Copy text to clipboard
 */
export async function copyToClipboard(text) {
  try {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(text);
      return true;
    } else {
      // Fallback for older browsers
      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      const success = document.execCommand('copy');
      document.body.removeChild(textarea);
      return success;
    }
  } catch (e) {
    console.error('[Playground] Clipboard error:', e);
    return false;
  }
}

/**
 * Create share modal/toast
 */
export function createShareModal(shareLink) {
  const modal = document.createElement('div');
  modal.id = 'share-modal';
  modal.style.cssText = `
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 500px;
    width: 90%;
    padding: var(--space-xl);
    background: var(--bg-secondary);
    border: 1px solid var(--border-color);
    border-radius: var(--radius-lg);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
    z-index: 10000;
    animation: fadeIn 0.2s ease-out;
  `;

  modal.innerHTML = `
    <div style="margin-bottom: var(--space-lg);">
      <h3 style="margin: 0 0 var(--space-sm); color: var(--text-primary); font-size: 1.3rem;"><img src="images/arrowright.png" alt="Share" style="width: 1.2em; height: 1.2em; vertical-align: middle;"> Share this pattern</h3>
      <p style="margin: 0; color: var(--text-secondary); font-size: 0.9rem;">Anyone with this link can load your pattern instantly</p>
    </div>

    <div style="position: relative; margin-bottom: var(--space-lg);">
      <input
        type="text"
        id="share-link-input"
        value="${shareLink}"
        readonly
        style="width: 100%; padding: var(--space-md); background: var(--bg-tertiary); border: 1px solid var(--border-color); border-radius: var(--radius-md); color: var(--text-primary); font-family: var(--font-mono, monospace); font-size: 0.85rem;"
      >
    </div>

    <div style="display: flex; gap: var(--space-md); justify-content: flex-end;">
      <button id="share-close-btn" class="btn btn-outline" style="padding: var(--space-sm) var(--space-lg);">
        Close
      </button>
      <button id="share-copy-btn" class="btn btn-primary" style="padding: var(--space-sm) var(--space-lg);">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-right: 4px;">
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
        </svg>
        Copy Link
      </button>
    </div>
  `;

  // Add backdrop
  const backdrop = document.createElement('div');
  backdrop.id = 'share-backdrop';
  backdrop.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.7);
    z-index: 9999;
    animation: fadeIn 0.2s ease-out;
  `;

  // Add animation
  if (!document.getElementById('share-modal-animation')) {
    const style = document.createElement('style');
    style.id = 'share-modal-animation';
    style.textContent = `
      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }
    `;
    document.head.appendChild(style);
  }

  document.body.appendChild(backdrop);
  document.body.appendChild(modal);

  // Event handlers
  const closeModal = () => {
    modal.remove();
    backdrop.remove();
  };

  document.getElementById('share-close-btn').addEventListener('click', closeModal);
  backdrop.addEventListener('click', closeModal);

  document.getElementById('share-copy-btn').addEventListener('click', async () => {
    const success = await copyToClipboard(shareLink);
    const btn = document.getElementById('share-copy-btn');

    if (success) {
      btn.innerHTML = `
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-right: 4px;">
          <polyline points="20 6 9 17 4 12"/>
        </svg>
        Copied!
      `;
      btn.style.background = 'linear-gradient(135deg, #10b981 0%, #059669 100%)';

      setTimeout(() => {
        btn.innerHTML = `
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-right: 4px;">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
          </svg>
          Copy Link
        `;
        btn.style.background = '';
      }, 2000);
    }
  });

  // Auto-select input text
  document.getElementById('share-link-input').select();

  return modal;
}

// ==========================================
// MICRO-PROGRESS TRACKER
// ==========================================

const STATS_KEY = 'drumPlaygroundStats';

/**
 * Get current stats
 */
export function getStats() {
  try {
    const saved = localStorage.getItem(STATS_KEY);
    if (saved) {
      return JSON.parse(saved);
    }
  } catch (e) {
    console.warn('[Playground] Could not load stats:', e);
  }

  // Default stats
  return {
    exportsTotal: 0,
    presetsUsed: new Set(),
    practiceDays: new Set(),
    skillsUsed: {
      swing: 0,
      velocity: 0,
      mixer: 0,
      humanization: 0
    },
    firstActivity: Date.now(),
    lastActivity: Date.now()
  };
}

/**
 * Save stats
 */
function saveStats(stats) {
  try {
    // Convert Sets to Arrays for JSON serialization
    const toSave = {
      ...stats,
      presetsUsed: Array.from(stats.presetsUsed),
      practiceDays: Array.from(stats.practiceDays)
    };
    localStorage.setItem(STATS_KEY, JSON.stringify(toSave));
  } catch (e) {
    console.warn('[Playground] Could not save stats:', e);
  }
}

/**
 * Track export
 */
export function trackExport() {
  const stats = getStats();
  stats.exportsTotal++;
  stats.lastActivity = Date.now();

  // Track practice day (date only, not time)
  const today = new Date().toISOString().split('T')[0];
  stats.practiceDays.add(today);

  saveStats(stats);
  return stats.exportsTotal;
}

/**
 * Track preset usage
 */
export function trackPresetUsed(presetId) {
  const stats = getStats();
  stats.presetsUsed.add(presetId);
  stats.lastActivity = Date.now();

  const today = new Date().toISOString().split('T')[0];
  stats.practiceDays.add(today);

  saveStats(stats);
  return stats.presetsUsed.size;
}

/**
 * Track skill usage
 */
export function trackSkillUsed(skillName) {
  const stats = getStats();
  if (stats.skillsUsed[skillName] !== undefined) {
    stats.skillsUsed[skillName]++;
  }
  stats.lastActivity = Date.now();

  saveStats(stats);
  return stats.skillsUsed[skillName];
}

/**
 * Create progress stats widget
 */
export function createProgressWidget() {
  const stats = getStats();

  // Reconstruct Sets from Arrays
  const presetsUsed = new Set(stats.presetsUsed);
  const practiceDays = new Set(stats.practiceDays);

  const widget = document.createElement('div');
  widget.id = 'progress-widget';
  widget.style.cssText = `
    position: fixed;
    bottom: 20px;
    left: 20px;
    padding: var(--space-md);
    background: rgba(15, 23, 42, 0.95);
    border: 1px solid rgba(0, 212, 255, 0.3);
    border-radius: var(--radius-md);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
    z-index: 999;
    min-width: 200px;
    transition: transform 0.3s ease;
  `;

  widget.innerHTML = `
    <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: var(--space-sm);">
      <h4 style="margin: 0; font-size: 0.85rem; color: var(--text-secondary); text-transform: uppercase; letter-spacing: 0.05em;">
        Practice Stats
      </h4>
      <div style="display: flex; align-items: center; gap: 6px;">
        <span id="toggle-label" style="font-size: 0.7rem; color: var(--text-dim); text-transform: uppercase;">Hide</span>
        <button id="toggle-stats" style="background: none; border: none; color: var(--text-dim); cursor: pointer; padding: 4px; font-size: 1rem;" title="Toggle stats">−</button>
      </div>
    </div>
    <div id="stats-content">
      <div style="display: grid; gap: var(--space-sm);">
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <span style="font-size: 0.8rem; color: var(--text-muted);"><img src="images/mpldownload.png" alt="Download" style="width: 1em; vertical-align: middle;"> Exports</span>
          <span style="font-size: 1rem; font-weight: 700; color: #00d4ff;">${stats.exportsTotal}</span>
        </div>
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <span style="font-size: 0.8rem; color: var(--text-muted);"><img src="images/notamusicale.png" alt="Music" style="width: 1em; vertical-align: middle;"> Presets Tried</span>
          <span style="font-size: 1rem; font-weight: 700; color: #b366ff;">${presetsUsed.size}</span>
        </div>
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <span style="font-size: 0.8rem; color: var(--text-muted);"><img src="images/mplstellinacalendario.png" alt="Calendar" style="width: 1em; vertical-align: middle;"> Practice Days</span>
          <span style="font-size: 1rem; font-weight: 700; color: #10b981;">${practiceDays.size}</span>
        </div>
      </div>

      <div style="margin-top: var(--space-md); padding-top: var(--space-sm); border-top: 1px solid rgba(255, 255, 255, 0.1);">
        <div style="font-size: 0.75rem; color: var(--text-dim); margin-bottom: var(--space-xs);">Skills Used</div>
        <div style="display: flex; gap: var(--space-xs); flex-wrap: wrap;">
          ${stats.skillsUsed.swing > 0 ? `<span style="font-size: 0.7rem; padding: 2px 6px; background: rgba(0, 212, 255, 0.2); border: 1px solid rgba(0, 212, 255, 0.3); border-radius: 3px; color: #00d4ff;">Swing</span>` : ''}
          ${stats.skillsUsed.velocity > 0 ? `<span style="font-size: 0.7rem; padding: 2px 6px; background: rgba(179, 102, 255, 0.2); border: 1px solid rgba(179, 102, 255, 0.3); border-radius: 3px; color: #b366ff;">Velocity</span>` : ''}
          ${stats.skillsUsed.mixer > 0 ? `<span style="font-size: 0.7rem; padding: 2px 6px; background: rgba(16, 185, 129, 0.2); border: 1px solid rgba(16, 185, 129, 0.3); border-radius: 3px; color: #10b981;">Mixer</span>` : ''}
          ${stats.skillsUsed.humanization > 0 ? `<span style="font-size: 0.7rem; padding: 2px 6px; background: rgba(245, 158, 11, 0.2); border: 1px solid rgba(245, 158, 11, 0.3); border-radius: 3px; color: #f59e0b;">Humanize</span>` : ''}
        </div>
      </div>
    </div>
  `;

  document.body.appendChild(widget);

  // Toggle functionality
  const toggleBtn = document.getElementById('toggle-stats');
  const toggleLabel = document.getElementById('toggle-label');
  const statsContent = document.getElementById('stats-content');
  let isCollapsed = false;

  toggleBtn.addEventListener('click', () => {
    isCollapsed = !isCollapsed;
    if (isCollapsed) {
      statsContent.style.display = 'none';
      toggleBtn.textContent = '+';
      toggleLabel.textContent = 'Show';
      widget.style.transform = 'scale(0.95)';
    } else {
      statsContent.style.display = 'block';
      toggleBtn.textContent = '−';
      toggleLabel.textContent = 'Hide';
      widget.style.transform = 'scale(1)';
    }
  });

  return widget;
}

/**
 * Update progress widget (if visible)
 */
export function updateProgressWidget() {
  const existing = document.getElementById('progress-widget');
  if (existing) {
    existing.remove();
    createProgressWidget();
  }
}

// ==========================================
// TWO-WAY DEEP LINKING (Lessons ↔ Playground)
// ==========================================

/**
 * Get lesson origin from URL (if opened from lesson page)
 * Validates the format to prevent XSS attacks
 */
export function getLessonOrigin() {
  const params = new URLSearchParams(window.location.search);
  const from = params.get('from');

  // Validate lessonId format to prevent XSS (e.g., "lesson-drums-3")
  // Only allow alphanumeric characters, hyphens, and underscores
  if (from && /^[a-zA-Z0-9_-]+$/.test(from)) {
    return from;
  }
  return null;
}

/**
 * Generate playground link from lesson page
 * Call this from lesson pages to create "Open in Playground" links
 *
 * Example usage in lesson page:
 * const link = generatePlaygroundLink(currentPattern, 'lesson-drums-3');
 */
export function generatePlaygroundLink(state, lessonId) {
  const encoded = serializePattern(state);
  if (!encoded) return null;

  const baseUrl = window.location.origin + '/drum-playground.html';
  return `${baseUrl}?pattern=${encoded}&from=${lessonId}`;
}

/**
 * Create lesson origin banner (shown when opened from lesson)
 * Uses safe DOM manipulation to prevent XSS
 */
export function createLessonOriginBanner(lessonId) {
  // Validate lessonId format again for defense in depth
  if (!lessonId || !/^[a-zA-Z0-9_-]+$/.test(lessonId)) {
    return null;
  }

  // Parse lesson number from ID (e.g., "lesson-drums-3" -> 3)
  const lessonMatch = lessonId.match(/lesson-drums-(\d+)/);
  const lessonNumber = lessonMatch ? parseInt(lessonMatch[1]) : null;

  const banner = document.createElement('div');
  banner.id = 'lesson-origin-banner';
  banner.style.cssText = `
    position: sticky;
    top: 70px;
    z-index: 98;
    margin: var(--space-md) 0;
    padding: var(--space-md) var(--space-lg);
    background: linear-gradient(135deg, rgba(16, 185, 129, 0.15) 0%, rgba(0, 212, 255, 0.1) 100%);
    border: 2px solid rgba(16, 185, 129, 0.4);
    border-radius: var(--radius-md);
    box-shadow: 0 4px 16px rgba(16, 185, 129, 0.2);
  `;

  // Use safe string values (lessonNumber is parsed integer, lessonId is validated)
  const lessonTitle = lessonNumber ? `Lesson ${lessonNumber}` : 'Drum Lesson';
  const lessonUrl = `${lessonId}.html`;

  // Build DOM safely using createElement and textContent instead of innerHTML
  const container = document.createElement('div');
  container.style.cssText = 'display: flex; align-items: center; justify-content: space-between; gap: var(--space-md);';

  const leftSection = document.createElement('div');
  leftSection.style.cssText = 'display: flex; align-items: center; gap: var(--space-md);';

  const iconWrapper = document.createElement('div');
  iconWrapper.style.cssText = 'width: 36px; height: 36px; display: flex; align-items: center; justify-content: center; background: rgba(16, 185, 129, 0.2); border-radius: var(--radius-md);';
  iconWrapper.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color: #10b981;"><path d="M9 18l6-6-6-6"/></svg>';

  const textWrapper = document.createElement('div');
  const subtitleEl = document.createElement('div');
  subtitleEl.style.cssText = 'font-size: 0.8rem; color: var(--text-secondary); margin-bottom: 2px;';
  subtitleEl.textContent = 'Opened from';
  const titleEl = document.createElement('div');
  titleEl.style.cssText = 'font-size: 1rem; font-weight: 700; color: var(--text-primary);';
  titleEl.textContent = lessonTitle;
  textWrapper.appendChild(subtitleEl);
  textWrapper.appendChild(titleEl);

  leftSection.appendChild(iconWrapper);
  leftSection.appendChild(textWrapper);

  const rightSection = document.createElement('div');
  rightSection.style.cssText = 'display: flex; gap: var(--space-sm);';

  const backLink = document.createElement('a');
  backLink.href = lessonUrl;
  backLink.className = 'btn btn-sm btn-outline';
  backLink.style.cssText = 'padding: var(--space-xs) var(--space-md); font-size: 0.85rem; text-decoration: none;';
  backLink.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-right: 4px;"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>';
  backLink.appendChild(document.createTextNode('Back to Lesson'));

  const dismissBtn = document.createElement('button');
  dismissBtn.id = 'dismiss-lesson-banner';
  dismissBtn.style.cssText = 'background: none; border: none; color: var(--text-dim); cursor: pointer; padding: 4px 8px;';
  dismissBtn.title = 'Dismiss';
  dismissBtn.textContent = '×';

  rightSection.appendChild(backLink);
  rightSection.appendChild(dismissBtn);

  container.appendChild(leftSection);
  container.appendChild(rightSection);
  banner.appendChild(container);

  document.body.appendChild(banner);

  // Dismiss handler
  document.getElementById('dismiss-lesson-banner').addEventListener('click', () => {
    banner.remove();
  });

  return banner;
}

/**
 * Helper: Insert "Open in Playground" button in lesson pages
 * This function can be called from lesson-engine.js or individual lesson pages
 */
export function insertPlaygroundButton(containerId, getCurrentPattern) {
  const container = document.getElementById(containerId);
  if (!container) return null;

  const button = document.createElement('button');
  button.className = 'btn btn-primary';
  button.style.cssText = 'margin-top: var(--space-md);';
  button.innerHTML = `
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-right: 4px;">
      <path d="M9 18l6-6-6-6"/>
    </svg>
    Try in Playground
  `;

  button.addEventListener('click', () => {
    const pattern = getCurrentPattern();
    const lessonId = document.body.dataset.lessonId || 'lesson-drums';
    const link = generatePlaygroundLink(pattern, lessonId);

    if (link) {
      window.location.href = link;
    }
  });

  container.appendChild(button);
  return button;
}
