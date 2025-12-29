/**
 * Music Producer Lab - Interactive Drum Sequencer
 * A modular 16/8/32-step sequencer for the interactive lessons
 * Full-width horizontal layout with step numbers
 * 
 * Features:
 * - Variable step count (8, 16, 32)
 * - Swing support
 * - Tempo control
 * - Sandbox mode (no target validation)
 * - Preset save/load
 * - Responsive design
 */

// Audio Context (Web Audio API)
let audioContext = null;

// Get or create audio context
function getAudioContext() {
  if (!audioContext) {
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
  }
  return audioContext;
}

// Simple drum sounds using Web Audio API oscillators/noise
const drumSounds = {
  kick: (velocity = 1.0) => {
    const ctx = getAudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(150, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.5);

    // Apply velocity to gain
    gain.gain.setValueAtTime(1 * velocity, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.5);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.5);
  },
  
  snare: (velocity = 1.0) => {
    const ctx = getAudioContext();

    // Noise component
    const bufferSize = ctx.sampleRate * 0.2;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }

    const noise = ctx.createBufferSource();
    noise.buffer = buffer;

    const noiseFilter = ctx.createBiquadFilter();
    noiseFilter.type = 'highpass';
    noiseFilter.frequency.value = 1000;

    const noiseGain = ctx.createGain();
    // Apply velocity to noise component
    noiseGain.gain.setValueAtTime(0.3 * velocity, ctx.currentTime);
    noiseGain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.2);

    noise.connect(noiseFilter);
    noiseFilter.connect(noiseGain);
    noiseGain.connect(ctx.destination);

    // Tone component
    const osc = ctx.createOscillator();
    const oscGain = ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(180, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.1);

    // Apply velocity to oscillator component
    oscGain.gain.setValueAtTime(0.7 * velocity, ctx.currentTime);
    oscGain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.1);

    osc.connect(oscGain);
    oscGain.connect(ctx.destination);

    noise.start(ctx.currentTime);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.1);
  },
  
  hihat: (velocity = 1.0) => {
    const ctx = getAudioContext();

    const bufferSize = ctx.sampleRate * 0.05;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }

    const noise = ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = ctx.createBiquadFilter();
    filter.type = 'highpass';
    filter.frequency.value = 5000;

    const gain = ctx.createGain();
    // Apply velocity
    gain.gain.setValueAtTime(0.3 * velocity, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.05);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);

    noise.start(ctx.currentTime);
  },

  clap: (velocity = 1.0) => {
    const ctx = getAudioContext();

    const bufferSize = ctx.sampleRate * 0.15;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }

    const noise = ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.value = 2000;
    filter.Q.value = 0.5;

    const gain = ctx.createGain();
    // Apply velocity
    gain.gain.setValueAtTime(0.4 * velocity, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.15);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);

    noise.start(ctx.currentTime);
  },

  tom: (velocity = 1.0) => {
    const ctx = getAudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(200, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(80, ctx.currentTime + 0.3);

    // Apply velocity
    gain.gain.setValueAtTime(0.8 * velocity, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.3);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.3);
  },

  rim: (velocity = 1.0) => {
    const ctx = getAudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'square';
    osc.frequency.setValueAtTime(500, ctx.currentTime);

    // Apply velocity
    gain.gain.setValueAtTime(0.3 * velocity, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.05);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.05);
  }

};

// Play a drum sound with velocity
// @param {string} type - The drum sound type (kick, snare, hihat, etc)
// @param {number} velocity - MIDI velocity (0-127), defaults to 100
function playSound(type, velocity = 100) {
  const sound = drumSounds[type] || drumSounds.kick;
  try {
    // Normalize velocity to 0-1 range for gain
    const normalizedVelocity = Math.max(0, Math.min(127, velocity)) / 127;
    sound(normalizedVelocity);
  } catch (e) {
    console.warn('Audio playback failed:', e);
  }
}

// Sequencer state
let isPlaying = false;
let currentStep = 0;
let intervalId = null;
let tempo = 120;
let swing = 0;
let stepCount = 16;

// Store references for external control
let sequencerState = null;
let sequencerInstruments = null;

/**
 * Initialize drum sequencer
 * @param {Array} instruments - Array of instrument objects
 * @param {string} lessonKey - LocalStorage key for progress
 * @param {string} nextLessonUrl - URL for next lesson
 * @param {Object} options - Additional options (tempo, stepCount, swing, messages, sandbox)
 */
export function initDrumSequencer(instruments, lessonKey, nextLessonUrl, options = {}) {
  const container = document.getElementById('mpl-sequencer-collection');
  if (!container) return;

  // Apply options
  const {
    tempo: tempoOption = 120,
    stepCount: stepCountOption = 16,
    swing: swingOption = 0,
    messages = {},
    sandbox: isSandbox = false,
    autoSaveState = true,
    enablePresets = false,
    enableExport = false,
    enableVelocity = false // Enable velocity lanes UI
  } = options;

  tempo = tempoOption;
  stepCount = stepCountOption;
  swing = swingOption;

  // Track state for each instrument
  const state = {};
  const velocityState = {}; // Track velocity for each step (0-127)
  instruments.forEach(inst => {
    state[inst.id] = new Array(stepCount).fill(false);
    velocityState[inst.id] = new Array(stepCount).fill(100); // Default velocity 100
  });

  // Store for external access
  sequencerState = state;
  sequencerInstruments = instruments;
  
  // Build UI - Full width horizontal layout
  container.innerHTML = '';
  
  // Create wrapper with CSS
  const wrapper = document.createElement('div');
  wrapper.className = 'sequencer-wrapper';
  wrapper.style.cssText = `
    width: 100%;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  `;
  
  // Main grid container
  const grid = document.createElement('div');
  grid.className = 'sequencer-grid';
  grid.style.cssText = `
    display: flex;
    flex-direction: column;
    gap: 8px;
    min-width: fit-content;
  `;
  
  // Step numbers header row
  const headerRow = document.createElement('div');
  headerRow.className = 'sequencer-header-row';
  headerRow.style.cssText = `
    display: flex;
    align-items: center;
    gap: 0;
    margin-bottom: 4px;
  `;
  
  // Empty space for label column
  const headerLabel = document.createElement('div');
  headerLabel.style.cssText = `
    width: 70px;
    flex-shrink: 0;
  `;
  headerRow.appendChild(headerLabel);
  
  // Step numbers container
  const stepNumbersContainer = document.createElement('div');
  stepNumbersContainer.style.cssText = `
    display: flex;
    flex: 1;
    gap: 2px;
  `;
  
  const stepsPerBeat = stepCount / 4; // For 16 steps = 4 per beat
  
  for (let i = 0; i < stepCount; i++) {
    const stepNum = document.createElement('div');
    stepNum.className = 'sequencer-step-number';
    const beatStart = i % stepsPerBeat === 0;
    stepNum.style.cssText = `
      flex: 1;
      min-width: ${stepCount > 16 ? '28px' : '36px'};
      text-align: center;
      font-family: var(--font-mono, monospace);
      font-size: ${stepCount > 16 ? '0.6rem' : '0.7rem'};
      font-weight: ${beatStart ? '700' : '400'};
      color: ${beatStart ? 'var(--accent-cyan, #00f0ff)' : 'var(--text-dim, #4a5a78)'};
      padding: 4px 0;
    `;
    stepNum.textContent = i + 1;
    stepNumbersContainer.appendChild(stepNum);
  }
  
  headerRow.appendChild(stepNumbersContainer);
  grid.appendChild(headerRow);
  
  // Beat markers row (1, 2, 3, 4)
  const beatRow = document.createElement('div');
  beatRow.className = 'sequencer-beat-row';
  beatRow.style.cssText = `
    display: flex;
    align-items: center;
    gap: 0;
    margin-bottom: 8px;
  `;
  
  const beatLabel = document.createElement('div');
  beatLabel.style.cssText = `
    width: 70px;
    flex-shrink: 0;
    font-size: 0.75rem;
    color: var(--text-muted, #7a8ba8);
  `;
  beatLabel.textContent = 'Beat';
  beatRow.appendChild(beatLabel);
  
  const beatMarkersContainer = document.createElement('div');
  beatMarkersContainer.style.cssText = `
    display: flex;
    flex: 1;
    gap: 2px;
  `;
  
  for (let beat = 1; beat <= 4; beat++) {
    const beatGroup = document.createElement('div');
    beatGroup.style.cssText = `
      flex: 1;
      display: flex;
      gap: 2px;
    `;
    
    for (let sub = 0; sub < stepsPerBeat; sub++) {
      const marker = document.createElement('div');
      marker.style.cssText = `
        flex: 1;
        min-width: ${stepCount > 16 ? '28px' : '36px'};
        height: 4px;
        background: ${sub === 0 ? 'var(--accent-cyan, #00f0ff)' : 'var(--border-subtle, rgba(255,255,255,0.06))'};
        border-radius: 2px;
      `;
      beatGroup.appendChild(marker);
    }
    
    beatMarkersContainer.appendChild(beatGroup);
  }
  
  beatRow.appendChild(beatMarkersContainer);
  grid.appendChild(beatRow);
  
  // Instrument rows
  instruments.forEach(inst => {
    const row = document.createElement('div');
    row.className = 'sequencer-row';
    row.style.cssText = `
      display: flex;
      align-items: center;
      gap: 0;
    `;
    
    // Label
    const label = document.createElement('div');
    label.className = 'sequencer-label';
    label.textContent = inst.label;
    label.style.cssText = `
      width: 70px;
      flex-shrink: 0;
      font-weight: 600;
      font-size: 0.85rem;
      color: var(--text-secondary, #b8c4e0);
      padding-right: 8px;
    `;
    row.appendChild(label);
    
    // Steps container - full width, no wrap
    const stepsContainer = document.createElement('div');
    stepsContainer.className = 'sequencer-steps';
    stepsContainer.style.cssText = `
      display: flex;
      flex: 1;
      gap: 2px;
    `;
    
    for (let i = 0; i < stepCount; i++) {
      const step = document.createElement('button');
      step.type = 'button';
      step.className = 'sequencer-step';
      step.dataset.instrument = inst.id;
      step.dataset.step = i;
      step.setAttribute('aria-label', `${inst.label} step ${i + 1}`);
      
      const beatStart = i % stepsPerBeat === 0;
      step.style.cssText = `
        flex: 1;
        min-width: ${stepCount > 16 ? '28px' : '36px'};
        height: ${stepCount > 16 ? '38px' : '44px'};
        border: 1px solid ${beatStart ? 'rgba(0, 240, 255, 0.2)' : 'rgba(255,255,255,0.1)'};
        border-radius: 6px;
        background: ${beatStart ? 'rgba(0, 240, 255, 0.08)' : 'rgba(255,255,255,0.03)'};
        cursor: pointer;
        transition: all 0.15s ease;
        padding: 0;
      `;
      
      step.addEventListener('click', () => {
        state[inst.id][i] = !state[inst.id][i];
        const beatStart = i % stepsPerBeat === 0;
        step.style.background = state[inst.id][i]
          ? inst.color
          : (beatStart ? 'rgba(0, 240, 255, 0.08)' : 'rgba(255,255,255,0.03)');
        step.style.borderColor = state[inst.id][i]
          ? 'transparent'
          : (beatStart ? 'rgba(0, 240, 255, 0.2)' : 'rgba(255,255,255,0.1)');

        if (state[inst.id][i]) {
          // Play sound with current velocity for this step
          playSound(inst.id, velocityState[inst.id][i]);
        }

        // Auto-save if enabled
        if (autoSaveState) {
          savePatternState(lessonKey + '-pattern', { state, velocityState });
        }
      });
      
      // Hover effect
      step.addEventListener('mouseenter', () => {
        if (!state[inst.id][i]) {
          step.style.background = 'rgba(255,255,255,0.1)';
        }
      });
      
      step.addEventListener('mouseleave', () => {
        if (!state[inst.id][i]) {
          const beatStart = i % stepsPerBeat === 0;
          step.style.background = beatStart ? 'rgba(0, 240, 255, 0.08)' : 'rgba(255,255,255,0.03)';
        }
      });
      
      stepsContainer.appendChild(step);
    }
    
    row.appendChild(stepsContainer);
    grid.appendChild(row);

    // Add velocity lane if enabled
    if (enableVelocity) {
      const velocityRow = document.createElement('div');
      velocityRow.className = 'sequencer-velocity-row';
      velocityRow.style.cssText = `
        display: flex;
        align-items: flex-end;
        gap: 0;
        margin-bottom: 16px;
        opacity: 0.8;
      `;

      // Label
      const velLabel = document.createElement('div');
      velLabel.className = 'sequencer-velocity-label';
      velLabel.textContent = 'Velocity';
      velLabel.style.cssText = `
        width: 70px;
        flex-shrink: 0;
        font-weight: 500;
        font-size: 0.7rem;
        color: var(--text-muted, #7a8ba8);
        padding-right: 8px;
        align-self: center;
      `;
      velocityRow.appendChild(velLabel);

      // Velocity sliders container
      const velocityContainer = document.createElement('div');
      velocityContainer.className = 'sequencer-velocity-sliders';
      velocityContainer.style.cssText = `
        display: flex;
        flex: 1;
        gap: 2px;
        align-items: flex-end;
      `;

      for (let i = 0; i < stepCount; i++) {
        const sliderWrapper = document.createElement('div');
        sliderWrapper.style.cssText = `
          flex: 1;
          min-width: ${stepCount > 16 ? '28px' : '36px'};
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2px;
        `;

        // Velocity bar visual (shows current velocity)
        const velocityBar = document.createElement('div');
        velocityBar.className = 'velocity-bar';
        velocityBar.style.cssText = `
          width: 100%;
          height: 40px;
          background: rgba(255,255,255,0.05);
          border-radius: 3px;
          position: relative;
          overflow: hidden;
        `;

        const velocityFill = document.createElement('div');
        velocityFill.className = 'velocity-fill';
        const velocityPercent = (velocityState[inst.id][i] / 127) * 100;
        velocityFill.style.cssText = `
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: ${velocityPercent}%;
          background: ${inst.color};
          opacity: 0.6;
          transition: height 0.1s ease;
        `;
        velocityBar.appendChild(velocityFill);

        // Range slider (vertical)
        const slider = document.createElement('input');
        slider.type = 'range';
        slider.min = '0';
        slider.max = '127';
        slider.value = velocityState[inst.id][i];
        slider.dataset.instrument = inst.id;
        slider.dataset.step = i;
        slider.style.cssText = `
          width: 100%;
          height: 8px;
          -webkit-appearance: none;
          background: transparent;
          cursor: pointer;
        `;

        // Update velocity on slider change
        slider.addEventListener('input', (e) => {
          const newVelocity = parseInt(e.target.value);
          velocityState[inst.id][i] = newVelocity;

          // Update visual bar
          const percent = (newVelocity / 127) * 100;
          velocityFill.style.height = `${percent}%`;

          // Auto-save if enabled
          if (autoSaveState) {
            savePatternState(lessonKey + '-pattern', { state, velocityState });
          }
        });

        sliderWrapper.appendChild(velocityBar);
        sliderWrapper.appendChild(slider);
        velocityContainer.appendChild(sliderWrapper);
      }

      velocityRow.appendChild(velocityContainer);
      grid.appendChild(velocityRow);
    }
  });

  wrapper.appendChild(grid);
  container.appendChild(wrapper);
  
  // Instructions
  if (instruments.length > 0 && instruments[0].instructions) {
    const instructionsDiv = document.createElement('p');
    instructionsDiv.style.cssText = `
      margin-top: 16px;
      font-size: 0.9rem;
      color: var(--text-muted, #7a8ba8);
      line-height: 1.6;
    `;
    instructionsDiv.textContent = instruments[0].instructions;
    container.appendChild(instructionsDiv);
  }
  
  // Legend
  const legend = document.createElement('div');
  legend.className = 'sequencer-legend';
  legend.style.cssText = `
    margin-top: 12px;
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    font-size: 0.8rem;
    color: var(--text-muted, #7a8ba8);
  `;
  legend.innerHTML = `
    <div style="display: flex; align-items: center; gap: 6px;">
      <div style="width: 16px; height: 16px; background: rgba(0, 240, 255, 0.08); border: 1px solid rgba(0, 240, 255, 0.2); border-radius: 3px;"></div>
      <span>Beat start (downbeat)</span>
    </div>
    <div style="display: flex; align-items: center; gap: 6px;">
      <div style="width: 16px; height: 16px; background: ${instruments[0]?.color || 'linear-gradient(135deg,#ff5a3d,#ffb28a)'}; border-radius: 3px;"></div>
      <span>Active step</span>
    </div>
  `;
  container.appendChild(legend);
  
  // Get control elements
  const playBtn = document.getElementById('mpl-seq-play-all');
  const stopBtn = document.getElementById('mpl-seq-stop-all');
  const clearBtn = document.getElementById('mpl-seq-clear-all');
  const checkBtn = document.getElementById('mpl-seq-check-all');
  const statusEl = document.getElementById('mpl-seq-status');
  const nextBtn = document.getElementById('mpl-next-lesson');
  const presetControls = document.getElementById('mpl-preset-controls');
  const exportBtn = document.getElementById('mpl-export-json');

  if (presetControls) {
    presetControls.style.display = enablePresets ? 'flex' : 'none';
  }

  if (exportBtn) {
    exportBtn.style.display = enableExport ? 'inline-flex' : 'none';
  }
  
  // Play button
  if (playBtn) {
    playBtn.addEventListener('click', () => {
      if (isPlaying) return;
      isPlaying = true;
      currentStep = 0;
      
      const baseStepTime = (60 / tempo) * 1000 / (stepCount / 4); // Step duration in ms
      
      const playStep = () => {
        // Calculate swing delay for off-beat steps
        let stepDelay = baseStepTime;
        if (swing > 0 && currentStep % 2 === 1) {
          // Apply swing to off-beat notes
          stepDelay = baseStepTime * (1 + (swing / 100) * 0.5);
        }
        
        // Highlight current step
        document.querySelectorAll('.sequencer-step').forEach((el) => {
          const stepIdx = parseInt(el.dataset.step);
          if (stepIdx === currentStep) {
            el.style.boxShadow = '0 0 12px rgba(0, 240, 255, 0.6), inset 0 0 8px rgba(0, 240, 255, 0.3)';
            el.style.transform = 'scale(1.05)';
          } else {
            el.style.boxShadow = 'none';
            el.style.transform = 'scale(1)';
          }
        });
        
        // Update step numbers highlight
        document.querySelectorAll('.sequencer-step-number').forEach((el, i) => {
          if (i === currentStep) {
            el.style.color = 'var(--accent-cyan, #00f0ff)';
            el.style.fontWeight = '700';
          } else {
            const beatStart = i % (stepCount / 4) === 0;
            el.style.color = beatStart ? 'var(--accent-cyan, #00f0ff)' : 'var(--text-dim, #4a5a78)';
            el.style.fontWeight = beatStart ? '700' : '400';
          }
        });
        
        // Play sounds for active steps with their velocity
        instruments.forEach(inst => {
          if (state[inst.id][currentStep]) {
            playSound(inst.id, velocityState[inst.id][currentStep]);
          }
        });
        
        currentStep = (currentStep + 1) % stepCount;
        
        if (isPlaying) {
          intervalId = setTimeout(playStep, stepDelay);
        }
      };
      
      playStep();
    });
  }
  
  // Stop button
  if (stopBtn) {
    stopBtn.addEventListener('click', stopSequencer);
  }
  
  // Clear button (sandbox mode)
  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      instruments.forEach(inst => {
        for (let i = 0; i < stepCount; i++) {
          state[inst.id][i] = false;
        }
      });
      
      // Reset UI
      document.querySelectorAll('.sequencer-step').forEach((el) => {
        const stepIdx = parseInt(el.dataset.step);
        const beatStart = stepIdx % (stepCount / 4) === 0;
        el.style.background = beatStart ? 'rgba(0, 240, 255, 0.08)' : 'rgba(255,255,255,0.03)';
        el.style.borderColor = beatStart ? 'rgba(0, 240, 255, 0.2)' : 'rgba(255,255,255,0.1)';
      });
    });
  }
  
  // Check button
  if (checkBtn && !isSandbox) {
    checkBtn.addEventListener('click', () => {
      let allCorrect = true;
      
      instruments.forEach(inst => {
        const target = inst.target || [];
        const current = state[inst.id];
        
        // Check if pattern matches
        for (let i = 0; i < stepCount; i++) {
          const shouldBeActive = target.includes(i);
          if (current[i] !== shouldBeActive) {
            allCorrect = false;
            break;
          }
        }
      });
      
      if (allCorrect) {
        if (statusEl) {
          statusEl.textContent = messages.success || '🎉 Correct! Great job! You can now proceed to the next lesson.';
          statusEl.style.color = 'var(--accent-green, #00ff9d)';
        }
        if (nextBtn) {
          nextBtn.disabled = false;
          nextBtn.style.opacity = '1';
        }
        
        // Save progress
        try {
          localStorage.setItem(lessonKey, 'completed');
        } catch (e) {}
      } else {
        if (statusEl) {
          statusEl.textContent = messages.error || 'Not quite right. Check the pattern and try again!';
          statusEl.style.color = 'var(--accent-amber, #ffcc00)';
        }
        
        // Show correct pattern briefly
        instruments.forEach(inst => {
          const target = inst.target || [];
          document.querySelectorAll(`.sequencer-step[data-instrument="${inst.id}"]`).forEach((el, i) => {
            if (target.includes(i) && !state[inst.id][i]) {
              el.style.outline = '2px solid rgba(0, 240, 255, 0.7)';
              el.style.outlineOffset = '2px';
              setTimeout(() => {
                el.style.outline = 'none';
                el.style.outlineOffset = '0';
              }, 2000);
            }
          });
        });
      }
    });
  }
  
  // Next lesson button
  if (nextBtn && nextLessonUrl) {
    nextBtn.addEventListener('click', () => {
      window.location.href = nextLessonUrl;
    });
    
    // Check if already completed
    try {
      if (localStorage.getItem(lessonKey) === 'completed') {
        nextBtn.disabled = false;
        nextBtn.style.opacity = '1';
        if (statusEl) {
          statusEl.textContent = messages.alreadyCompleted || 'You\'ve already completed this exercise. Feel free to practice or move to the next lesson!';
        }
      }
    } catch (e) {}
  }
  
  // Listen for tempo changes
  window.addEventListener('mpl-tempo-change', (e) => {
    tempo = e.detail.tempo;
    // If playing, restart with new tempo
    if (isPlaying) {
      stopSequencer();
      playBtn?.click();
    }
  });
  
  // Listen for swing changes
  window.addEventListener('mpl-swing-change', (e) => {
    swing = e.detail.swing;
  });
  
  // Listen for preset save
  window.addEventListener('mpl-preset-save', () => {
    const presetData = {
      state: state,
      tempo: tempo,
      swing: swing,
      stepCount: stepCount
    };
    const presetJson = JSON.stringify(presetData);
    const presetName = prompt('Enter preset name:', 'My Pattern');
    if (presetName) {
      try {
        const presets = JSON.parse(localStorage.getItem('mpl-presets') || '{}');
        presets[presetName] = presetData;
        localStorage.setItem('mpl-presets', JSON.stringify(presets));
        alert(`Preset "${presetName}" saved!`);
      } catch (e) {
        console.error('Failed to save preset:', e);
      }
    }
  });
  
  // Listen for preset load
  window.addEventListener('mpl-preset-load', () => {
    try {
      const presets = JSON.parse(localStorage.getItem('mpl-presets') || '{}');
      const presetNames = Object.keys(presets);
      if (presetNames.length === 0) {
        alert('No presets saved yet!');
        return;
      }
      const presetName = prompt(`Available presets:\n${presetNames.join('\n')}\n\nEnter preset name to load:`);
      if (presetName && presets[presetName]) {
        const preset = presets[presetName];
        // Apply preset state
        Object.keys(preset.state).forEach(instId => {
          if (state[instId]) {
            preset.state[instId].forEach((val, i) => {
              state[instId][i] = val;
            });
          }
        });
        // Update UI
        updateSequencerUI(state, instruments, stepCount);
        alert(`Preset "${presetName}" loaded!`);
      }
    } catch (e) {
      console.error('Failed to load preset:', e);
    }
  });
  
  // Load saved pattern state if exists
  try {
    const savedPattern = localStorage.getItem(lessonKey + '-pattern');
    if (savedPattern) {
      const parsed = JSON.parse(savedPattern);
      Object.keys(parsed).forEach(instId => {
        if (state[instId]) {
          parsed[instId].forEach((val, i) => {
            if (i < stepCount) state[instId][i] = val;
          });
        }
      });
      updateSequencerUI(state, instruments, stepCount);
    }
  } catch (e) {}
}

// Stop the sequencer
function stopSequencer() {
  isPlaying = false;
  if (intervalId) {
    clearTimeout(intervalId);
    intervalId = null;
  }
  currentStep = 0;
  
  // Remove highlights
  document.querySelectorAll('.sequencer-step').forEach(el => {
    el.style.boxShadow = 'none';
    el.style.transform = 'scale(1)';
  });
  
  // Reset step number colors
  const stepsPerBeat = stepCount / 4;
  document.querySelectorAll('.sequencer-step-number').forEach((el, i) => {
    const beatStart = i % stepsPerBeat === 0;
    el.style.color = beatStart ? 'var(--accent-cyan, #00f0ff)' : 'var(--text-dim, #4a5a78)';
    el.style.fontWeight = beatStart ? '700' : '400';
  });
}

// Update sequencer UI from state
function updateSequencerUI(state, instruments, stepCount) {
  const stepsPerBeat = stepCount / 4;
  instruments.forEach(inst => {
    document.querySelectorAll(`.sequencer-step[data-instrument="${inst.id}"]`).forEach((el, i) => {
      const beatStart = i % stepsPerBeat === 0;
      el.style.background = state[inst.id][i] 
        ? inst.color 
        : (beatStart ? 'rgba(0, 240, 255, 0.08)' : 'rgba(255,255,255,0.03)');
      el.style.borderColor = state[inst.id][i]
        ? 'transparent'
        : (beatStart ? 'rgba(0, 240, 255, 0.2)' : 'rgba(255,255,255,0.1)');
    });
  });
}

// Save pattern state to localStorage
function savePatternState(key, state) {
  try {
    localStorage.setItem(key, JSON.stringify(state));
  } catch (e) {}
}

// Export for use in lesson pages
export { playSound, drumSounds };
