/**
 * Music Producer Lab - Interactive Drum Sequencer
 * A simple 16-step sequencer for the interactive lessons
 * Full-width horizontal layout with step numbers
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
  kick: () => {
    const ctx = getAudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    
    osc.type = 'sine';
    osc.frequency.setValueAtTime(150, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.5);
    
    gain.gain.setValueAtTime(1, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.5);
    
    osc.connect(gain);
    gain.connect(ctx.destination);
    
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.5);
  },
  
  snare: () => {
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
    noiseGain.gain.setValueAtTime(0.3, ctx.currentTime);
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
    
    oscGain.gain.setValueAtTime(0.7, ctx.currentTime);
    oscGain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.1);
    
    osc.connect(oscGain);
    oscGain.connect(ctx.destination);
    
    noise.start(ctx.currentTime);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.1);
  },
  
  hihat: () => {
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
    gain.gain.setValueAtTime(0.3, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.05);
    
    noise.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);
    
    noise.start(ctx.currentTime);
  },
  
  clap: () => {
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
    gain.gain.setValueAtTime(0.4, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.15);
    
    noise.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);
    
    noise.start(ctx.currentTime);
  }
};

// Play a drum sound
function playSound(type) {
  const sound = drumSounds[type] || drumSounds.kick;
  try {
    sound();
  } catch (e) {
    console.warn('Audio playback failed:', e);
  }
}

// Sequencer state
let isPlaying = false;
let currentStep = 0;
let intervalId = null;
let tempo = 120;

// Initialize drum sequencer
export function initDrumSequencer(instruments, lessonKey, nextLessonUrl) {
  const container = document.getElementById('mpl-sequencer-collection');
  if (!container) return;
  
  // Track state for each instrument
  const state = {};
  instruments.forEach(inst => {
    state[inst.id] = new Array(16).fill(false);
  });
  
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
  
  for (let i = 0; i < 16; i++) {
    const stepNum = document.createElement('div');
    stepNum.className = 'sequencer-step-number';
    const beatStart = i % 4 === 0;
    stepNum.style.cssText = `
      flex: 1;
      min-width: 36px;
      text-align: center;
      font-family: var(--font-mono, monospace);
      font-size: 0.7rem;
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
    
    for (let sub = 0; sub < 4; sub++) {
      const marker = document.createElement('div');
      marker.style.cssText = `
        flex: 1;
        min-width: 36px;
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
    
    for (let i = 0; i < 16; i++) {
      const step = document.createElement('button');
      step.type = 'button';
      step.className = 'sequencer-step';
      step.dataset.instrument = inst.id;
      step.dataset.step = i;
      step.setAttribute('aria-label', `${inst.label} step ${i + 1}`);
      
      const beatStart = i % 4 === 0;
      step.style.cssText = `
        flex: 1;
        min-width: 36px;
        height: 44px;
        border: 1px solid ${beatStart ? 'rgba(0, 240, 255, 0.2)' : 'rgba(255,255,255,0.1)'};
        border-radius: 6px;
        background: ${beatStart ? 'rgba(0, 240, 255, 0.08)' : 'rgba(255,255,255,0.03)'};
        cursor: pointer;
        transition: all 0.15s ease;
        padding: 0;
      `;
      
      step.addEventListener('click', () => {
        state[inst.id][i] = !state[inst.id][i];
        const beatStart = i % 4 === 0;
        step.style.background = state[inst.id][i] 
          ? inst.color 
          : (beatStart ? 'rgba(0, 240, 255, 0.08)' : 'rgba(255,255,255,0.03)');
        step.style.borderColor = state[inst.id][i]
          ? 'transparent'
          : (beatStart ? 'rgba(0, 240, 255, 0.2)' : 'rgba(255,255,255,0.1)');
        
        if (state[inst.id][i]) {
          playSound(inst.id);
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
          const beatStart = i % 4 === 0;
          step.style.background = beatStart ? 'rgba(0, 240, 255, 0.08)' : 'rgba(255,255,255,0.03)';
        }
      });
      
      stepsContainer.appendChild(step);
    }
    
    row.appendChild(stepsContainer);
    grid.appendChild(row);
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
  
  // Play button
  const playBtn = document.getElementById('mpl-seq-play-all');
  const stopBtn = document.getElementById('mpl-seq-stop-all');
  const checkBtn = document.getElementById('mpl-seq-check-all');
  const statusEl = document.getElementById('mpl-seq-status');
  const nextBtn = document.getElementById('mpl-next-lesson');
  
  if (playBtn) {
    playBtn.addEventListener('click', () => {
      if (isPlaying) return;
      isPlaying = true;
      currentStep = 0;
      
      const stepTime = (60 / tempo) * 1000 / 4; // 16th note duration
      
      intervalId = setInterval(() => {
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
            const beatStart = i % 4 === 0;
            el.style.color = beatStart ? 'var(--accent-cyan, #00f0ff)' : 'var(--text-dim, #4a5a78)';
            el.style.fontWeight = beatStart ? '700' : '400';
          }
        });
        
        // Play sounds for active steps
        instruments.forEach(inst => {
          if (state[inst.id][currentStep]) {
            playSound(inst.id);
          }
        });
        
        currentStep = (currentStep + 1) % 16;
      }, stepTime);
    });
  }
  
  if (stopBtn) {
    stopBtn.addEventListener('click', () => {
      isPlaying = false;
      if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
      }
      currentStep = 0;
      
      // Remove highlights
      document.querySelectorAll('.sequencer-step').forEach(el => {
        el.style.boxShadow = 'none';
        el.style.transform = 'scale(1)';
      });
      
      // Reset step number colors
      document.querySelectorAll('.sequencer-step-number').forEach((el, i) => {
        const beatStart = i % 4 === 0;
        el.style.color = beatStart ? 'var(--accent-cyan, #00f0ff)' : 'var(--text-dim, #4a5a78)';
        el.style.fontWeight = beatStart ? '700' : '400';
      });
    });
  }
  
  if (checkBtn) {
    checkBtn.addEventListener('click', () => {
      let allCorrect = true;
      
      instruments.forEach(inst => {
        const target = inst.target || [];
        const current = state[inst.id];
        
        // Check if pattern matches
        for (let i = 0; i < 16; i++) {
          const shouldBeActive = target.includes(i);
          if (current[i] !== shouldBeActive) {
            allCorrect = false;
            break;
          }
        }
      });
      
      if (allCorrect) {
        if (statusEl) {
          statusEl.textContent = '🎉 Correct! Great job! You can now proceed to the next lesson.';
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
          statusEl.textContent = 'Not quite right. Check the pattern and try again!';
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
          statusEl.textContent = 'You\'ve already completed this exercise. Feel free to practice or move to the next lesson!';
        }
      }
    } catch (e) {}
  }
}

// Export for use in lesson pages
export { playSound, drumSounds };
