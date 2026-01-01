/**
 * MIDI Export Module
 * Generates MIDI files from drum patterns
 */

// General MIDI Drum Map (Channel 10)
const DRUM_MAP = {
  kick: 36,     // Bass Drum 1
  snare: 38,    // Acoustic Snare
  hihat: 42,    // Closed Hi-Hat
  hat: 42,      // Closed Hi-Hat (alias)
  clap: 39,     // Hand Clap
  tom: 50,      // High Tom
  rim: 37,      // Side Stick / Rim Shot
  crash: 49,    // Crash Cymbal 1
  openhat: 46   // Open Hi-Hat
};

/**
 * Convert number to variable-length quantity (MIDI format)
 */
function toVarLen(value) {
  const bytes = [];
  bytes.push(value & 0x7F);
  value >>= 7;
  while (value > 0) {
    bytes.unshift((value & 0x7F) | 0x80);
    value >>= 7;
  }
  return bytes;
}

/**
 * Convert string to byte array
 */
function strToBytes(str) {
  return str.split('').map(c => c.charCodeAt(0));
}

/**
 * Generate MIDI file from drum pattern
 */
export async function renderPatternToMIDI(pattern, instruments, tempo, stepCount, velocityState, swing = 0) {
  // MIDI timing constants
  const PPQ = 480; // Pulses Per Quarter note (ticks per beat)
  const beatsPerBar = 4;
  const stepsPerBeat = stepCount / beatsPerBar; // 16 steps / 4 beats = 4 steps per beat
  const ticksPerStep = PPQ / stepsPerBeat; // 480 / 4 = 120 ticks per step

  // Calculate tempo in microseconds per quarter note
  const microsecondsPerQuarter = Math.round(60000000 / tempo);

  // Collect all MIDI events
  const events = [];

  // Add tempo event at the start
  events.push({
    deltaTime: 0,
    type: 'meta',
    metaType: 0x51, // Set Tempo
    data: [
      (microsecondsPerQuarter >> 16) & 0xFF,
      (microsecondsPerQuarter >> 8) & 0xFF,
      microsecondsPerQuarter & 0xFF
    ]
  });

  // Process each step
  instruments.forEach(inst => {
    const noteNumber = DRUM_MAP[inst.id];
    if (!noteNumber) return; // Skip if instrument not in drum map

    for (let step = 0; step < stepCount; step++) {
      if (!pattern[inst.id] || !pattern[inst.id][step]) continue;

      // Calculate step timing with swing
      let stepTicks = Math.round(step * ticksPerStep);

      if (swing > 0 && step % 2 === 1) {
        // Apply swing to offbeat steps (odd steps)
        const swingAmount = (swing / 100) * (ticksPerStep / 2);
        stepTicks += Math.round(swingAmount);
      }

      // Get velocity (0-127)
      let velocity = 100; // Default
      if (velocityState && velocityState[inst.id] && velocityState[inst.id][step]) {
        velocity = velocityState[inst.id][step];
      }
      velocity = Math.max(1, Math.min(127, Math.round(velocity)));

      // Note On event
      events.push({
        deltaTime: stepTicks,
        type: 'noteOn',
        channel: 9, // Channel 10 (0-indexed)
        note: noteNumber,
        velocity: velocity
      });

      // Note Off event (short duration for drums)
      const noteDuration = Math.round(ticksPerStep / 4); // 25% of step duration
      events.push({
        deltaTime: stepTicks + noteDuration,
        type: 'noteOff',
        channel: 9,
        note: noteNumber,
        velocity: 0
      });
    }
  });

  // Add End of Track meta event
  const totalTicks = stepCount * ticksPerStep;
  events.push({
    deltaTime: totalTicks + 100,
    type: 'meta',
    metaType: 0x2F, // End of Track
    data: []
  });

  // Sort events by deltaTime
  events.sort((a, b) => a.deltaTime - b.deltaTime);

  // Convert to delta times (relative to previous event)
  let lastTime = 0;
  const trackEvents = [];
  events.forEach(event => {
    const delta = event.deltaTime - lastTime;
    lastTime = event.deltaTime;

    const deltaBytes = toVarLen(delta);

    if (event.type === 'noteOn') {
      trackEvents.push(...deltaBytes, 0x90 | event.channel, event.note, event.velocity);
    } else if (event.type === 'noteOff') {
      trackEvents.push(...deltaBytes, 0x80 | event.channel, event.note, event.velocity);
    } else if (event.type === 'meta') {
      trackEvents.push(...deltaBytes, 0xFF, event.metaType, event.data.length, ...event.data);
    }
  });

  // Build MIDI file structure

  // Header chunk
  const header = [
    ...strToBytes('MThd'),  // Chunk type
    0, 0, 0, 6,             // Chunk length
    0, 1,                   // Format 1 (multiple tracks, synchronous)
    0, 1,                   // Number of tracks
    (PPQ >> 8) & 0xFF, PPQ & 0xFF  // Ticks per quarter note
  ];

  // Track chunk
  const trackChunk = [
    ...strToBytes('MTrk'),  // Chunk type
    ...[(trackEvents.length >> 24) & 0xFF, (trackEvents.length >> 16) & 0xFF, (trackEvents.length >> 8) & 0xFF, trackEvents.length & 0xFF],  // Chunk length
    ...trackEvents
  ];

  // Combine chunks
  const midiData = new Uint8Array([...header, ...trackChunk]);

  // Create Blob
  const blob = new Blob([midiData], { type: 'audio/midi' });

  return blob;
}
