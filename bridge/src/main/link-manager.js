const abletonlink = require('abletonlink');

/**
 * LinkManager - Manages Ableton Link network integration
 *
 * Responsibilities:
 * - Initialize and manage Ableton Link instance
 * - Sync tempo, beat, phase across Link network
 * - Report connected peers
 * - Handle Link enable/disable
 */
class LinkManager {
  constructor() {
    this.link = new abletonlink(120); // Default 120 BPM
    this.onStateChange = null;
    this.updateInterval = null;
    this.isEnabled = false;

    console.log('LinkManager initialized with default tempo: 120 BPM');
  }

  /**
   * Start Link state update loop
   * @param {number} intervalMs - Update interval in milliseconds (default: 500ms)
   */
  startUpdate(intervalMs = 500) {
    if (this.updateInterval) {
      console.warn('Link updates already running');
      return;
    }

    console.log(`Starting Link updates every ${intervalMs}ms`);

    this.link.startUpdate(intervalMs, (tempo, beat, phase, peers) => {
      const state = {
        tempo: tempo,
        beat: beat,
        phase: phase,
        peers: peers,
        enabled: this.isEnabled
      };

      // Log state changes (for debugging)
      console.log(`Link State - Tempo: ${tempo.toFixed(1)} BPM, Beat: ${beat.toFixed(2)}, Phase: ${phase.toFixed(3)}, Peers: ${peers}`);

      // Notify listeners
      if (this.onStateChange) {
        this.onStateChange(state);
      }
    });

    this.updateInterval = true; // Mark as running
  }

  /**
   * Stop Link state updates
   */
  stopUpdate() {
    if (this.link && this.link.stopUpdate) {
      this.link.stopUpdate();
      this.updateInterval = null;
      console.log('Link updates stopped');
    }
  }

  /**
   * Set tempo on Link network
   * @param {number} tempo - Tempo in BPM
   */
  setTempo(tempo) {
    if (tempo < 20 || tempo > 999) {
      console.error(`Invalid tempo: ${tempo}. Must be between 20 and 999 BPM`);
      return;
    }

    this.link.setTempo(tempo);
    console.log(`Tempo set to ${tempo} BPM`);
  }

  /**
   * Get current tempo from Link network
   * @returns {number} Current tempo in BPM
   */
  getTempo() {
    return this.link.getTempo();
  }

  /**
   * Get number of connected peers on Link network
   * @returns {number} Number of peers
   */
  getNumPeers() {
    return this.link.numPeers();
  }

  /**
   * Enable Link network participation
   */
  enable() {
    this.link.enable();
    this.isEnabled = true;
    console.log('Link enabled - joining network');
  }

  /**
   * Disable Link network participation
   */
  disable() {
    this.link.disable();
    this.isEnabled = false;
    console.log('Link disabled - leaving network');
  }

  /**
   * Check if Link is enabled
   * @returns {boolean} True if enabled
   */
  isLinkEnabled() {
    return this.isEnabled;
  }

  /**
   * Get full Link state
   * @returns {object} Current Link state
   */
  getState() {
    return {
      tempo: this.getTempo(),
      beat: 0, // Will be updated by next update callback
      phase: 0, // Will be updated by next update callback
      peers: this.getNumPeers(),
      enabled: this.isEnabled
    };
  }

  /**
   * Cleanup and shutdown Link
   */
  destroy() {
    this.stopUpdate();
    this.disable();
    console.log('LinkManager destroyed');
  }
}

module.exports = LinkManager;
