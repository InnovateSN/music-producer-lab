// Renderer process script for status window

// DOM elements
const linkEnabledEl = document.getElementById('link-enabled');
const tempoEl = document.getElementById('tempo');
const peersEl = document.getElementById('peers');
const beatEl = document.getElementById('beat');
const wsStatusEl = document.getElementById('ws-status');
const browserConnectionsEl = document.getElementById('browser-connections');
const wsPortEl = document.getElementById('ws-port');

// Initialize UI
function init() {
  console.log('Status window initialized');

  // Set initial states
  updateLinkStatus(false);
  updateWSStatus(false);

  // Listen for updates from main process (will be implemented in later tasks)
  if (window.bridge && window.bridge.onLinkStateUpdate) {
    window.bridge.onLinkStateUpdate((event, data) => {
      updateLinkState(data);
    });
  }
}

// Update Link status
function updateLinkStatus(enabled) {
  const indicator = linkEnabledEl.querySelector('.status-indicator');
  if (enabled) {
    indicator.classList.remove('status-inactive');
    indicator.classList.add('status-active');
    linkEnabledEl.innerHTML = '<span class="status-indicator status-active"></span> Active';
  } else {
    indicator.classList.remove('status-active');
    indicator.classList.add('status-inactive');
    linkEnabledEl.innerHTML = '<span class="status-indicator status-inactive"></span> Inactive';
  }
}

// Update WebSocket server status
function updateWSStatus(running) {
  const indicator = wsStatusEl.querySelector('.status-indicator');
  if (running) {
    indicator.classList.remove('status-inactive');
    indicator.classList.add('status-active');
    wsStatusEl.innerHTML = '<span class="status-indicator status-active"></span> Running';
  } else {
    indicator.classList.remove('status-active');
    indicator.classList.add('status-inactive');
    wsStatusEl.innerHTML = '<span class="status-indicator status-inactive"></span> Stopped';
  }
}

// Update Link state from main process
function updateLinkState(data) {
  if (data.tempo !== undefined) {
    tempoEl.textContent = `${data.tempo.toFixed(1)} BPM`;
  }
  if (data.beat !== undefined) {
    beatEl.textContent = data.beat.toFixed(2);
  }
  if (data.peers !== undefined) {
    peersEl.textContent = data.peers;
  }

  updateLinkStatus(data.enabled || false);
}

// Update WebSocket state
function updateWSState(data) {
  if (data.connections !== undefined) {
    browserConnectionsEl.textContent = data.connections;
  }
  if (data.port !== undefined) {
    wsPortEl.textContent = data.port;
  }

  updateWSStatus(data.running || false);
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', init);

// Expose update functions globally for main process
window.updateLinkState = updateLinkState;
window.updateWSState = updateWSState;
