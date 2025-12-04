// Sequencer dependencies and global state definitions

const BPM = 120;
const STEPS_PER_BAR = 16;
const SCHEDULE_AHEAD_TIME = 0.1;
const SCHEDULE_INTERVAL_MS = 25;
const SECONDS_PER_STEP = 60.0 / BPM / 4; 

let audioCtx = null;
function ensureAudio() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
}

let nextNoteTime = 0.0;
let currentStep = 0;
let lookaheadTimer = null;
let isPlayingGlobally = false;
let sequencers = []; // Holds sequencer instances

// Utility for array comparison
function arraysEqual(a, b) {
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) if (a[i] !== b[i]) return false;
  return true;
}

const USE_PERSISTENT_STORAGE = false; // Assuming all current users are guests

// ---------------- WebAudio Sound Functions ----------------

function makeKick(time) {
  const ctx = audioCtx;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = "sine";
  osc.frequency.setValueAtTime(140, time);
  osc.frequency.exponentialRampToValueAtTime(50, time + 0.12);
  gain.gain.setValueAtTime(0.9, time);
  gain.gain.exponentialRampToValueAtTime(0.001, time + 0.13);
  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.start(time);
  osc.stop(time + 0.15);
}

function makeSnare(time) {
  const ctx = audioCtx;
  // White Noise Generator
  const noise = ctx.createBufferSource();
  const bufferSize = ctx.sampleRate * 0.5;
  const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
  const output = buffer.getChannelData(0);
  for (let i = 0; i < bufferSize; i++) {
    output[i] = Math.random() * 2 - 1;
  }
  noise.buffer = buffer;

  const noiseGain = ctx.createGain();
  noiseGain.gain.setValueAtTime(0.5, time);
  noiseGain.gain.exponentialRampToValueAtTime(0.001, time + 0.1);

  noise.connect(noiseGain);
  noiseGain.connect(ctx.destination);

  noise.start(time);
  noise.stop(time + 0.15);

  // Transient Tone Component (for 'pop')
  const osc = ctx.createOscillator();
  const oscGain = ctx.createGain();
  osc.type = 'triangle';

  osc.frequency.setValueAtTime(400, time);
  osc.frequency.exponentialRampToValueAtTime(100, time + 0.08);

  oscGain.gain.setValueAtTime(1.0, time);
  oscGain.gain.exponentialRampToValueAtTime(0.001, time + 0.08);

  osc.connect(oscGain);
  oscGain.connect(ctx.destination);

  osc.start(time);
  osc.stop(time + 0.1);
}

function makeHiHat(time) {
  const ctx = audioCtx;
  // High-pass filtered noise for metallic sound
  const bufferSize = ctx.sampleRate * 0.2;
  const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
  const output = buffer.getChannelData(0);
  for (let i = 0; i < bufferSize; i++) {
    output[i] = Math.random() * 2 - 1;
  }
  const noise = ctx.createBufferSource();
  noise.buffer = buffer;

  const filter = ctx.createBiquadFilter();
  filter.type = 'highpass';
  filter.frequency.setValueAtTime(7000, time);

  const gain = ctx.createGain();
  // Very short decay for closed hi-hat sound
  gain.gain.setValueAtTime(0.6, time);
  gain.gain.exponentialRampToValueAtTime(0.001, time + 0.06);

  noise.connect(filter);
  filter.connect(gain);
  gain.connect(ctx.destination);

  noise.start(time);
  noise.stop(time + 0.1);
}

const soundMap = {
  'kick': makeKick,
  'snare': makeSnare,
  'hihat': makeHiHat
};

// --- Scheduling Logic ---

function scheduleNextSteps() {
  const lookahead = audioCtx.currentTime + SCHEDULE_AHEAD_TIME;

  while (nextNoteTime < lookahead) {
    const scheduledTime = nextNoteTime;

    // Trigger sounds and schedule visual updates
    sequencers.forEach(seq => {
      const stepActive = seq.getActiveState()[currentStep];
      if (stepActive) {
        seq.makeSound(scheduledTime);
      }
      if (seq.updatePlayhead) {
        seq.updatePlayhead(currentStep, scheduledTime);
      }
    });

    // Advance time and step
    nextNoteTime += SECONDS_PER_STEP;
    currentStep = (currentStep + 1) % STEPS_PER_BAR;
  }
}

function startScheduling() {
  if (isPlayingGlobally) return;
  isPlayingGlobally = true;
  ensureAudio();

  nextNoteTime = audioCtx.currentTime + 0.05;
  currentStep = 0;

  sequencers.forEach(s => s.updatePlayhead(-1));

  lookaheadTimer = setInterval(scheduleNextSteps, SCHEDULE_INTERVAL_MS);
  scheduleNextSteps();
}

function stopScheduling() {
  isPlayingGlobally = false;
  if (lookaheadTimer) {
    clearInterval(lookaheadTimer);
    lookaheadTimer = null;
  }
  sequencers.forEach(s => s.updatePlayhead(-1));
}

// --- Sequencer Factory Function ---

function createSequencer(instr, index, progress, LESSON_KEY, statusEl, nextLessonBtn) {
  const wrapper = document.createElement("div");
  wrapper.className = "sequencer enhanced";
  wrapper.style.marginTop = index === 0 ? "0.8rem" : "0.6rem";

  // Determine if this track is locked for the current lesson context
  // K/S are fixed patterns in L3/L4, interactive in L1/L2 (until solved) and L5 (for fill programming)
  let lockedExplicitly = false;
  if (LESSON_KEY === "mpl-lesson3-progress" || LESSON_KEY === "mpl-lesson4-progress") {
      if (instr.id === 'kick' || instr.id === 'snare') {
          lockedExplicitly = true; // K/S are fixed patterns in L3/L4
      }
  }

  const isInteractiveLocked = lockedExplicitly || (instr.requiredPrev && !progress[instr.requiredPrev]?.solved);

  // --- Header Construction ---
  const header = document.createElement("div");
  header.style.display = "flex";
  header.style.alignItems = "center";
  header.style.justifyContent = "space-between";
  header.style.gap = "0.6rem";

  const left = document.createElement("div");
  left.style.display = "flex";
  left.style.alignItems = "center";
  left.style.gap = "0.6rem";

  const pill = document.createElement("div");
  pill.textContent = instr.label;
  pill.className = "hero-visual-pill";
  pill.style.padding = "0.3rem 0.8rem";
  pill.style.borderRadius = "14px";
  pill.style.border = "1.5px solid rgba(62,242,255,0.8)";
  pill.style.background = `linear-gradient(135deg, ${instr.color}, rgba(62,242,255,0.24))`;
  pill.style.color = "#040611";
  pill.style.boxShadow = "0 0 0 1px rgba(62,242,255,0.18), 0 0 18px rgba(62,242,255,0.24)";
  pill.style.fontWeight = 700;
  pill.style.minWidth = "86px";
  left.appendChild(pill);

  const info = document.createElement("div");
  info.style.fontSize = "0.86rem";
  info.style.color = "rgba(245,245,245,0.85)";

  if (isInteractiveLocked) {
      info.textContent = `Pattern corretto (bloccato)`;
  } else {
       info.textContent = `Target: ${instr.target.map(i=>i+1).join(', ')}`;
  }
  left.appendChild(info);

  header.appendChild(left);

  const controls = document.createElement("div");
  controls.style.display = "flex";
  controls.style.gap = "0.5rem";
  controls.style.alignItems = "center";

  const bpmValue = document.createElement("span");
  bpmValue.textContent = `${BPM} BPM`;
  bpmValue.style.fontSize = "0.86rem";
  bpmValue.style.color = "rgba(245,245,245,0.75)";
  controls.appendChild(bpmValue);

  header.appendChild(controls);
  wrapper.appendChild(header);

  const instrBlock = document.createElement("div");
  instrBlock.style.marginTop = "0.6rem";
  instrBlock.style.padding = "0.6rem";
  instrBlock.style.borderRadius = "10px";
  instrBlock.style.background = "rgba(255,255,255,0.02)";
  instrBlock.style.border = "1px solid rgba(255,255,255,0.04)";
  instrBlock.style.color = "rgba(245,245,245,0.86)";
  instrBlock.style.fontSize = "0.92rem";
  instrBlock.textContent = instr.instructions || "";
  wrapper.appendChild(instrBlock);
  // --- END Header Construction ---

  const grid = document.createElement("div");
  grid.className = "sequencer-grid enhanced-grid";
  grid.setAttribute("role", "group");
  grid.setAttribute("aria-label", `${instr.label} 16-step sequencer`);

  // Beat ruler: only on top sequencer
  if (index === 0) {
    const beatRow = document.createElement("div");
    beatRow.className = "sequencer-beats";
    for (let i = 0; i < 16; i++) {
      const beatCell = document.createElement("div");
      beatCell.className = "beat-marker";

      let beatText = '';
      let isMain = false;
      let colorOpacity = 0.6; // Default opacity for secondary markers

      if (i % 4 === 0) {
        beatText = String(i / 4 + 1);
        isMain = true;
      } else if (LESSON_KEY === "mpl-lesson3-progress" && i % 2 !== 0) {
        beatText = "&";
      } else if (LESSON_KEY === "mpl-lesson4-progress" || LESSON_KEY === "mpl-lesson5-progress") {
        // Show 1/16 markers (1 e & a)
        const subdivision = i % 4;
        if (subdivision === 1) beatText = 'e';
        else if (subdivision === 2) beatText = '&';
        else if (subdivision === 3) beatText = 'a';
        colorOpacity = 0.4;
      }

      if (beatText) {
          beatCell.textContent = beatText;
          beatCell.setAttribute("data-beat", isMain ? "main" : "sub");
          if (!isMain) {
              beatCell.style.fontSize = "0.6rem";
              beatCell.style.color = `rgba(255, 74, 61, ${colorOpacity})`; 
          }
          beatCell.setAttribute("aria-hidden", "false");
      } else {
        beatCell.setAttribute("aria-hidden", "true");
      }

      beatRow.appendChild(beatCell);
    }
    wrapper.appendChild(beatRow);
  }


  const steps = [];
  let currentActive;

  if (isInteractiveLocked) {
    // If locked, force target pattern
    currentActive = new Array(16).fill(false);
    instr.target.forEach(idx => currentActive[idx] = true);
  } else {
    // If interactive, load from storage or initialize empty
    currentActive = 
      (USE_PERSISTENT_STORAGE && progress[instr.id]?.pattern) 
      ? progress[instr.id].pattern
      : new Array(16).fill(false);
  }

  // If solved previously, ensure the visual state reflects that on load (applies to non-locked tracks only)
  if (!isInteractiveLocked && USE_PERSISTENT_STORAGE && progress[instr.id]?.solved) {
      currentActive.fill(false);
      instr.target.forEach(idx => currentActive[idx] = true);
  }


  for (let i = 0; i < 16; i++) {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "seq-step";
    btn.dataset.index = i;
    const label = document.createElement("span");
    label.textContent = i + 1;
    btn.appendChild(label);

    if (currentActive[i]) {
      btn.classList.add("seq-step-active");
    }

    // Apply visual target class only to the interactive steps
    const shouldShowTarget = !isInteractiveLocked;

    if (shouldShowTarget && instr.target && instr.target.indexOf(i) !== -1) {
      btn.classList.add("correct-step");
      // Improve titles based on lesson context
      let titleSuffix = '';
      if (i % 4 === 0) titleSuffix = ' (Beat)';
      if (instr.id === 'snare' && (i === 4 || i === 12)) titleSuffix = ' (Backbeat)';
      if (instr.id === 'hihat' && i % 2 !== 0) titleSuffix = ' (Off-beat 8th)';

      btn.setAttribute("aria-label", `Step ${i + 1}${titleSuffix}`);
      btn.setAttribute("title", `Target position (step ${i + 1})`);
    } else {
      btn.setAttribute("aria-label", `Step ${i + 1}`);
    }


    if (isInteractiveLocked) {
      btn.classList.add("locked");
      if (currentActive[i]) {
        btn.classList.add("seq-step-active");
      }
    }

    btn.addEventListener("click", () => {
      if (isInteractiveLocked) return;
      currentActive[i] = !currentActive[i];
      btn.classList.toggle("seq-step-active", currentActive[i]);

      // Clear solved state if pattern changes
      if (progress[instr.id]?.solved) {
          progress[instr.id].solved = false;
          if (USE_PERSISTENT_STORAGE) {
            localStorage.setItem(LESSON_KEY, JSON.stringify(progress));
          }
          wrapper.classList.remove("completed");
          if (nextLessonBtn) {
             nextLessonBtn.disabled = true;
             nextLessonBtn.title = "Complete exercise to unlock";
          }
      }
    });

    grid.appendChild(btn);
    steps.push(btn);
  }

  wrapper.appendChild(grid);

  // Visual playhead update mechanism
  let playheadTimeout = null;

  function visualUpdatePlayhead(idx, scheduledTime) {
    if (!isPlayingGlobally) return;

    if (playheadTimeout) clearTimeout(playheadTimeout);

    if (idx === -1) {
      steps.forEach((b) => b.classList.remove("seq-step-playhead"));
      return;
    }

    const delayMs = Math.max(0, scheduledTime - audioCtx.currentTime) * 1000;

    playheadTimeout = setTimeout(() => {
      steps.forEach((b, i) => b.classList.toggle("seq-step-playhead", i === idx));
    }, delayMs);
  }

  function doCheck() {
    if (isInteractiveLocked) {
      return true; // Already correct/locked
    }

    const userIndices = currentActive.map((v, i) => v ? i : -1).filter(i => i !== -1);

    const userIndicesSorted = userIndices.sort((a, b) => a - b);
    const targetIndicesSorted = instr.target.sort((a, b) => a - b);

    const isCorrect = arraysEqual(userIndicesSorted, targetIndicesSorted);

    // Save state
    progress[instr.id] = { solved: isCorrect, pattern: currentActive };
    if (USE_PERSISTENT_STORAGE) {
        localStorage.setItem(LESSON_KEY, JSON.stringify(progress));
    }

    if (isCorrect) {
      wrapper.classList.add("completed");
      // Visually ensure steps match target pattern after solving
      steps.forEach((b, i) => {
        b.classList.remove("locked");
        b.classList.toggle("seq-step-active", instr.target.includes(i));
      });
      return true;
    } else {
      wrapper.classList.remove("completed");
      return false;
    }
  }

  // Check status on load for non-locked tracks
  if (!isInteractiveLocked && progress[instr.id]?.solved) {
      wrapper.classList.add("completed");
  }


  return {
    el: wrapper,
    getId: () => instr.id,
    check: doCheck,
    isSolved: () => isInteractiveLocked || progress[instr.id]?.solved,
    getActiveState: () => currentActive,
    makeSound: (time) => soundMap[instr.id](time),
    updatePlayhead: visualUpdatePlayhead,
  };
}


/** 
 * Initializes the drum sequencer UI and playback logic.
 * @param {Array<Object>} instruments - Configuration for tracks.
 * @param {string} lessonKey - Local storage key.
 * @param {string} nextLessonUrl - URL for the next lesson.
 */
export function initDrumSequencer(instruments, lessonKey, nextLessonUrl) {
    const seqContainer = document.getElementById("mpl-sequencer-collection");
    if (!seqContainer) return;

    const statusEl = document.getElementById("mpl-seq-status");
    const playAllBtn = document.getElementById("mpl-seq-play-all");
    const stopAllBtn = document.getElementById("mpl-seq-stop-all");
    const checkAllBtn = document.getElementById("mpl-seq-check-all");
    const nextLessonBtn = document.getElementById("mpl-next-lesson");

    let progress = {};
    if (USE_PERSISTENT_STORAGE) {
        progress = JSON.parse(localStorage.getItem(lessonKey) || "{}");
    }

    // Clear previous sequencer instances
    sequencers = [];
    seqContainer.innerHTML = '';

    // Create sequencers 
    sequencers = instruments.map((instr, i) => {
        const seq = createSequencer(instr, i, progress, lessonKey, statusEl, nextLessonBtn);
        seqContainer.appendChild(seq.el);
        return seq;
    });

    // Identify which tracks require interaction/checking for this lesson
    const interactiveTrackIds = instruments.filter(i => {
        // A track requires interaction if it's not explicitly locked in L3/L4
        let lockedExplicitly = false;
        if (lessonKey === "mpl-lesson3-progress" || lessonKey === "mpl-lesson4-progress") {
            if (i.id === 'kick' || i.id === 'snare') {
                lockedExplicitly = true;
            }
        }
        return !lockedExplicitly;
    }).map(i => i.id);

    // If no tracks are explicitly interactive (L3/L4 only check hihat), we default to checking the user-editable ones.
    const tracksToCheck = sequencers.filter(s => interactiveTrackIds.includes(s.getId()));

    // If tracksToCheck is empty (shouldn't happen in the current curriculum structure but for safety), check all.
    const finalTracksToCheck = tracksToCheck.length > 0 ? tracksToCheck : sequencers;

    function checkCompletionState() {
        const allSolved = finalTracksToCheck.every(s => s.isSolved());

        const solvedCount = finalTracksToCheck.filter(s => s.isSolved()).length;
        const totalChecks = finalTracksToCheck.length;

        if (allSolved) {
            statusEl.textContent = `Congrats! All patterns are correct. You can proceed to the next lesson.`;
            nextLessonBtn.disabled = false;
            nextLessonBtn.title = nextLessonUrl && nextLessonUrl !== 'explanation.html' ? "Go to next lesson" : "Back to overview";
        } else {
             statusEl.textContent = `Progress: ${solvedCount}/${totalChecks} patterns correct. Keep going.`;
             nextLessonBtn.disabled = true;
             nextLessonBtn.title = "Complete the exercise to unlock";
        }

        // Handle Lesson 5 nav explicitly as it links back to overview
        if (lessonKey === "mpl-lesson5-progress") {
            const nextSpan = nextLessonBtn.querySelector('span');
            if (nextSpan) nextSpan.textContent = 'Overview →';
            if (allSolved) {
                 nextLessonBtn.title = "Back to overview";
            }
        }

        return allSolved;
    }

    function stopAll() {
        stopScheduling();
        document.querySelectorAll(".seq-step-playhead").forEach(el => el.classList.remove("seq-step-playhead"));
    }

    // Attach top-level controls
    stopAllBtn.addEventListener("click", () => {
        stopAll();
        checkCompletionState();
        statusEl.textContent = "Playback stopped.";
    });

    playAllBtn.addEventListener("click", () => {
        startScheduling();
        const playingTracks = instruments.map(i => i.label).join(', ');
        statusEl.textContent = `Playing ${playingTracks} in sync.`;
    });

    checkAllBtn.addEventListener("click", () => {
        stopAll();

        finalTracksToCheck.forEach((s) => {
            s.check && s.check();
        });

        checkCompletionState(); // Updates statusEl based on new progress state
    });

    if (nextLessonBtn) {
        nextLessonBtn.addEventListener("click", () => {
            if (nextLessonBtn.disabled) return;
            window.location.href = nextLessonUrl || "explanation.html";
        });
    }

    // Initial state check
    checkCompletionState();
}