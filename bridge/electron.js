const { app, BrowserWindow, Tray, Menu } = require('electron');
const path = require('path');

let mainWindow = null;
let tray = null;

// Quit when all windows are closed
app.on('window-all-closed', () => {
  // On macOS, applications typically stay active until the user quits explicitly
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('ready', () => {
  console.log('Music Producer Lab Bridge starting...');

  // Create main status window (hidden initially)
  createMainWindow();

  // Create system tray
  createTray();

  console.log('Bridge app ready!');
});

function createMainWindow() {
  mainWindow = new BrowserWindow({
    width: 400,
    height: 300,
    show: false,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js')
    }
  });

  mainWindow.loadFile(path.join(__dirname, 'src/renderer/index.html'));

  // Prevent window from being destroyed when closed
  mainWindow.on('close', (event) => {
    if (!app.isQuitting) {
      event.preventDefault();
      mainWindow.hide();
    }
  });
}

function createTray() {
  // Use a placeholder text-based tray for now (user will provide icon later)
  // Note: This will fail on some systems without an icon, but it's OK for MVP
  tray = new Tray(path.join(__dirname, 'assets/icon.png'));

  const contextMenu = Menu.buildFromTemplate([
    {
      label: 'Music Producer Lab Bridge',
      enabled: false
    },
    {
      type: 'separator'
    },
    {
      label: 'Open Status Window',
      click: () => {
        mainWindow.show();
      }
    },
    {
      label: 'Settings',
      enabled: false // Will be implemented later
    },
    {
      type: 'separator'
    },
    {
      label: 'Quit',
      click: () => {
        app.isQuitting = true;
        app.quit();
      }
    }
  ]);

  tray.setContextMenu(contextMenu);
  tray.setToolTip('Music Producer Lab Bridge');
}

// Handle macOS activation
app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createMainWindow();
  }
});
