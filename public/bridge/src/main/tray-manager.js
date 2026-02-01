const { Tray, Menu, nativeImage } = require('electron');
const path = require('path');

/**
 * TrayManager - Manages system tray integration
 *
 * Responsibilities:
 * - Create and manage system tray icon
 * - Update tray icon based on connection status
 * - Provide tray menu with quick actions
 * - Update tray tooltip with status information
 */
class TrayManager {
  constructor(mainWindow) {
    this.mainWindow = mainWindow;
    this.tray = null;
    this.linkStatus = {
      enabled: false,
      peers: 0,
      tempo: 120
    };
    this.wsStatus = {
      running: false,
      connections: 0
    };

    console.log('TrayManager initialized');
  }

  /**
   * Create system tray
   * @param {string} iconPath - Path to tray icon (optional)
   */
  create(iconPath) {
    try {
      // Try to load icon if provided
      if (iconPath) {
        this.tray = new Tray(iconPath);
      } else {
        // Create a simple native image as placeholder
        // This won't work perfectly but allows app to run without icon file
        console.warn('No tray icon provided - tray may not display correctly');
        const placeholderIcon = nativeImage.createEmpty();
        this.tray = new Tray(placeholderIcon);
      }

      this.tray.setToolTip('Music Producer Lab Bridge');
      this.updateMenu();

      console.log('System tray created');
    } catch (error) {
      console.error('Failed to create system tray:', error);
      console.warn('App will continue without system tray');
    }
  }

  /**
   * Update tray menu
   */
  updateMenu() {
    if (!this.tray) return;

    const contextMenu = Menu.buildFromTemplate([
      {
        label: 'Music Producer Lab Bridge',
        enabled: false,
        icon: null
      },
      {
        type: 'separator'
      },
      {
        label: `Link: ${this.linkStatus.enabled ? 'Active' : 'Inactive'}`,
        enabled: false
      },
      {
        label: `Tempo: ${this.linkStatus.tempo.toFixed(1)} BPM`,
        enabled: false
      },
      {
        label: `Peers: ${this.linkStatus.peers}`,
        enabled: false
      },
      {
        type: 'separator'
      },
      {
        label: `WebSocket: ${this.wsStatus.running ? 'Running' : 'Stopped'}`,
        enabled: false
      },
      {
        label: `Browser Connections: ${this.wsStatus.connections}`,
        enabled: false
      },
      {
        type: 'separator'
      },
      {
        label: 'Open Status Window',
        click: () => {
          if (this.mainWindow) {
            this.mainWindow.show();
            this.mainWindow.focus();
          }
        }
      },
      {
        label: 'Settings',
        enabled: false, // Will be implemented in future
        click: () => {
          console.log('Settings clicked (not yet implemented)');
        }
      },
      {
        type: 'separator'
      },
      {
        label: 'Quit',
        click: () => {
          const { app } = require('electron');
          app.isQuitting = true;
          app.quit();
        }
      }
    ]);

    this.tray.setContextMenu(contextMenu);
  }

  /**
   * Update Link status in tray
   * @param {object} status - Link status object
   */
  updateLinkStatus(status) {
    this.linkStatus = {
      enabled: status.enabled || false,
      peers: status.peers || 0,
      tempo: status.tempo || 120
    };

    this.updateMenu();
    this.updateTooltip();
  }

  /**
   * Update WebSocket status in tray
   * @param {object} status - WebSocket status object
   */
  updateWSStatus(status) {
    this.wsStatus = {
      running: status.running || false,
      connections: status.connections || 0
    };

    this.updateMenu();
    this.updateTooltip();
  }

  /**
   * Update tray tooltip with current status
   */
  updateTooltip() {
    if (!this.tray) return;

    const linkInfo = this.linkStatus.enabled
      ? `Link Active (${this.linkStatus.peers} peers, ${this.linkStatus.tempo.toFixed(1)} BPM)`
      : 'Link Inactive';

    const wsInfo = this.wsStatus.running
      ? `WS Running (${this.wsStatus.connections} browser connections)`
      : 'WebSocket Stopped';

    const tooltip = `Music Producer Lab Bridge\n${linkInfo}\n${wsInfo}`;
    this.tray.setToolTip(tooltip);
  }

  /**
   * Show balloon notification (Windows) or notification (macOS/Linux)
   * @param {string} title - Notification title
   * @param {string} content - Notification content
   */
  showNotification(title, content) {
    if (!this.tray) return;

    try {
      this.tray.displayBalloon({
        title: title,
        content: content
      });
    } catch (error) {
      // displayBalloon is Windows-only
      console.log(`Notification: ${title} - ${content}`);
    }
  }

  /**
   * Destroy tray
   */
  destroy() {
    if (this.tray) {
      this.tray.destroy();
      this.tray = null;
      console.log('System tray destroyed');
    }
  }
}

module.exports = TrayManager;
