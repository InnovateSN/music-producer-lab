/**
 * Shared Constants
 *
 * Configuration values used across the Bridge application
 */

module.exports = {
  // WebSocket Server
  WS_DEFAULT_PORT: 8080,
  WS_HOST: 'localhost',

  // Ableton Link
  LINK_DEFAULT_TEMPO: 120,
  LINK_UPDATE_INTERVAL: 500, // milliseconds
  LINK_MIN_TEMPO: 20,
  LINK_MAX_TEMPO: 999,
  LINK_DEFAULT_QUANTUM: 4,

  // Application
  APP_NAME: 'Music Producer Lab Bridge',
  APP_VERSION: '1.0.0',
  APP_DESCRIPTION: 'Ableton Link synchronization bridge',

  // UI
  STATUS_WINDOW_WIDTH: 400,
  STATUS_WINDOW_HEIGHT: 300,

  // Logging
  LOG_BROADCAST_SAMPLE_RATE: 0.05 // Log 5% of broadcasts to avoid spam
};
