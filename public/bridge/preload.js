const { contextBridge, ipcRenderer } = require('electron');

// Expose protected methods that allow the renderer process to use
// ipcRenderer without exposing the entire object
contextBridge.exposeInMainWorld('bridge', {
  // Placeholder for future API methods
  getVersion: () => {
    return process.versions.electron;
  },

  // Future: Link state updates
  onLinkStateUpdate: (callback) => {
    ipcRenderer.on('link-state-update', callback);
  },

  // Future: Set tempo from renderer
  setTempo: (tempo) => {
    ipcRenderer.send('set-tempo', tempo);
  }
});
