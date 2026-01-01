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
      <div style="font-size: 1.3rem; font-weight: 700; margin-bottom: var(--space-sm);">🎉 Loop exported!</div>
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
