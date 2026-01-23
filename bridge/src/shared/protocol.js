/**
 * WebSocket Protocol Definitions
 *
 * This file documents the WebSocket message protocol between
 * the Bridge app and browser clients.
 */

/**
 * Message Types
 */
const MessageTypes = {
  // Server → Browser
  LINK_STATE: 'link_state',
  CONNECTION_ESTABLISHED: 'connection_established',
  ERROR: 'error',

  // Browser → Server
  SET_TEMPO: 'set_tempo',
  SET_PLAYING: 'set_playing',
  GET_STATE: 'get_state'
};

/**
 * Example Messages
 */
const ExampleMessages = {
  // Server → Browser: Link state update
  linkState: {
    type: 'link_state',
    data: {
      tempo: 120.0,
      beat: 4.5,
      phase: 0.125,
      peers: 3,
      isPlaying: true,
      quantum: 4
    }
  },

  // Browser → Server: Set tempo
  setTempo: {
    type: 'set_tempo',
    tempo: 128.0
  },

  // Browser → Server: Set playing state
  setPlaying: {
    type: 'set_playing',
    playing: true
  },

  // Browser → Server: Request current state
  getState: {
    type: 'get_state'
  },

  // Server → Browser: Connection established
  connectionEstablished: {
    type: 'connection_established',
    data: {
      message: 'Connected to Music Producer Lab Bridge',
      port: 8080,
      timestamp: 1234567890
    }
  },

  // Server → Browser: Error response
  error: {
    type: 'error',
    data: {
      message: 'Error description',
      error: 'Error details'
    }
  }
};

/**
 * Validation helpers
 */
const Validators = {
  isValidTempo(tempo) {
    return typeof tempo === 'number' && tempo >= 20 && tempo <= 999;
  },

  isValidPlaying(playing) {
    return typeof playing === 'boolean';
  },

  isValidQuantum(quantum) {
    return [4, 8, 16].includes(quantum);
  }
};

module.exports = {
  MessageTypes,
  ExampleMessages,
  Validators
};
