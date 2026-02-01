/**
 * WAV Export Module
 * Renders drum patterns to downloadable WAV files
 */

import { selectedSamples, getMixerState } from './sequencer.js';

/**
 * Render a drum pattern to a WAV file
 * @param {Object} pattern - Pattern data (instrument -> array of booleans)
 * @param {Array} instruments - Array of instrument configs
 * @param {number} tempo - BPM
 * @param {number} stepCount - Number of steps in the pattern
 * @returns {Promise<Blob>} - WAV file as a Blob
 */
export async function renderPatternToWav(pattern, instruments, tempo, stepCount) {
  // Calculate duration
  const stepDuration = (60 / tempo) / 4; // 16th notes in seconds
  const totalDuration = stepCount * stepDuration + 2; // +2 seconds for tail

  // Create offline context (44.1kHz, stereo)
  const sampleRate = 44100;
  const offlineContext = new OfflineAudioContext(2, totalDuration * sampleRate, sampleRate);

  // Load all samples
  const loadedBuffers = {};

  for (const inst of instruments) {
    const samplePath = selectedSamples[inst.id];
    if (!samplePath) continue;

    try {
      const response = await fetch(samplePath);
      const arrayBuffer = await response.arrayBuffer();
      const audioBuffer = await offlineContext.decodeAudioData(arrayBuffer);
      loadedBuffers[inst.id] = audioBuffer;
    } catch (error) {
      console.warn(`Failed to load sample for ${inst.id}:`, error);
    }
  }

  // Create master gain node
  const masterGain = offlineContext.createGain();
  masterGain.gain.value = 1.0;
  masterGain.connect(offlineContext.destination);

  // Schedule all sounds
  for (let step = 0; step < stepCount; step++) {
    const startTime = step * stepDuration;

    for (const inst of instruments) {
      if (!pattern[inst.id] || !pattern[inst.id][step]) continue;
      if (!loadedBuffers[inst.id]) continue;

      // Get mixer state
      const mixerState = getMixerState(inst.id);

      // Create buffer source
      const source = offlineContext.createBufferSource();
      source.buffer = loadedBuffers[inst.id];

      // Create gain node for volume
      const gainNode = offlineContext.createGain();
      gainNode.gain.value = mixerState.volume * 0.8; // 0.8 default velocity

      // Create panner for stereo position
      const panner = offlineContext.createStereoPanner();
      panner.pan.value = mixerState.pan;

      // Connect: source -> gain -> panner -> master -> destination
      source.connect(gainNode);
      gainNode.connect(panner);
      panner.connect(masterGain);

      // Schedule playback
      source.start(startTime);
    }
  }

  // Render the audio
  const renderedBuffer = await offlineContext.startRendering();

  // Convert to WAV
  const wavBlob = audioBufferToWav(renderedBuffer);

  return wavBlob;
}

/**
 * Convert AudioBuffer to WAV Blob
 * @param {AudioBuffer} audioBuffer
 * @returns {Blob}
 */
function audioBufferToWav(audioBuffer) {
  const numberOfChannels = audioBuffer.numberOfChannels;
  const sampleRate = audioBuffer.sampleRate;
  const length = audioBuffer.length * numberOfChannels * 2; // 16-bit samples

  // Create WAV buffer
  const buffer = new ArrayBuffer(44 + length);
  const view = new DataView(buffer);

  // Write WAV header
  writeString(view, 0, 'RIFF');
  view.setUint32(4, 36 + length, true);
  writeString(view, 8, 'WAVE');
  writeString(view, 12, 'fmt ');
  view.setUint32(16, 16, true); // fmt chunk size
  view.setUint16(20, 1, true); // PCM format
  view.setUint16(22, numberOfChannels, true);
  view.setUint32(24, sampleRate, true);
  view.setUint32(28, sampleRate * numberOfChannels * 2, true); // byte rate
  view.setUint16(32, numberOfChannels * 2, true); // block align
  view.setUint16(34, 16, true); // bits per sample
  writeString(view, 36, 'data');
  view.setUint32(40, length, true);

  // Write audio data
  const channels = [];
  for (let i = 0; i < numberOfChannels; i++) {
    channels.push(audioBuffer.getChannelData(i));
  }

  let offset = 44;
  for (let i = 0; i < audioBuffer.length; i++) {
    for (let channel = 0; channel < numberOfChannels; channel++) {
      const sample = Math.max(-1, Math.min(1, channels[channel][i]));
      view.setInt16(offset, sample < 0 ? sample * 0x8000 : sample * 0x7FFF, true);
      offset += 2;
    }
  }

  return new Blob([buffer], { type: 'audio/wav' });
}

/**
 * Write string to DataView
 * @param {DataView} view
 * @param {number} offset
 * @param {string} string
 */
function writeString(view, offset, string) {
  for (let i = 0; i < string.length; i++) {
    view.setUint8(offset + i, string.charCodeAt(i));
  }
}
