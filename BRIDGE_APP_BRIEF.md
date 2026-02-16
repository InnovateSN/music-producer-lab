# Music Producer Lab Bridge - Desktop App Agent Brief

## Role: Bridge App Development Implementor (Act Mode)

You are the implementation agent responsible for developing **Music Producer Lab Bridge** - a premium desktop application that enables Ableton Link synchronization between the Music Producer Lab website and DAWs/hardware.

---

## Project Context

### The Problem
Web browsers cannot access Ableton Link directly because:
- Ableton Link uses UDP multicast (224.76.78.75:20808)
- Browsers have no UDP/multicast API for security reasons
- Web Audio API handles audio processing only, not networking
- WebAssembly/RNBO cannot bypass browser networking restrictions

### The Solution
**Music Producer Lab Bridge** is an Electron desktop app that acts as a network bridge:

```
DAW/Hardware (Ableton Link)
    ↕ (UDP Multicast)
Bridge App (Node.js + abletonlink)
    ↕ (WebSocket localhost:8080)
Browser (Music Producer Lab website)
```

---

## Technical Architecture

### Core Components

1. **Electron App Shell**
   - Cross-platform desktop application (Windows, macOS, Linux)
   - System tray integration
   - Auto-start on boot option
   - Minimal UI (status window + settings)

2. **Ableton Link Integration**
   - Node.js `abletonlink` package
   - Joins Link network as peer
   - Syncs tempo, beat, and quantum
   - Reports connected peers

3. **WebSocket Server**
   - Runs on `localhost:8080`
   - Accepts connections from browser
   - Broadcasts Link state updates
   - Receives tempo change requests

4. **License Validation**
   - Premium feature gating
   - License key verification
   - Online activation (optional)
   - Grace period for offline use

---

## Technical Stack

### Primary Technologies
- **Electron**: Desktop app framework
- **Node.js**: Backend runtime
- **abletonlink** (npm): Link protocol implementation
- **ws** (npm): WebSocket server
- **electron-store**: Settings persistence

### Development Tools
- **electron-builder**: App packaging
- **webpack**: Module bundling (if needed)
- **eslint**: Code linting
- **Jest**: Unit testing

---

## Feature Requirements

### MVP (Minimum Viable Product)

#### 1. Link Synchronization
- ✅ Join Ableton Link network
- ✅ Sync tempo bidirectionally
- ✅ Sync beat phase/position
- ✅ Report number of connected peers
- ✅ Handle Link start/stop state

#### 2. WebSocket Server
- ✅ Start server on app launch
- ✅ Handle multiple browser connections
- ✅ Broadcast Link updates to all clients
- ✅ Accept tempo change requests from browser
- ✅ Graceful error handling

#### 3. System Tray Integration
- ✅ System tray icon with status indicator
- ✅ Show connected peers count
- ✅ Show browser connection status
- ✅ Quick actions menu (start/stop, settings, quit)

#### 4. Basic UI
- ✅ Status window showing:
  - Link network status
  - Connected peers
  - Current tempo
  - Browser connections
  - WebSocket server status
- ✅ Settings panel:
  - Auto-start on boot
  - WebSocket port configuration
  - Link quantum setting

#### 5. License Validation
- ✅ License key input
- ✅ Online validation
- ✅ Offline grace period (7 days)
- ✅ Display activation status

### Future Enhancements (Post-MVP)
- Advanced tempo mapping
- MIDI clock output
- Link session history
- Multiple Link sessions
- Cloud sync preferences

---

## WebSocket Protocol

### Server → Browser (State Updates)

```javascript
{
  "type": "link_state",
  "data": {
    "tempo": 120.0,
    "beat": 4.5,
    "phase": 0.125,
    "peers": 3,
    "isPlaying": true,
    "quantum": 4
  }
}
```

### Browser → Server (Commands)

```javascript
// Set tempo
{
  "type": "set_tempo",
  "tempo": 128.0
}

// Request start/stop
{
  "type": "set_playing",
  "playing": true
}

// Request current state
{
  "type": "get_state"
}
```

---

## File Structure

```
music-producer-lab-bridge/
├── package.json
├── electron.js              # Main Electron process
├── preload.js              # Electron preload script
├── src/
│   ├── main/
│   │   ├── link-manager.js     # Ableton Link integration
│   │   ├── ws-server.js        # WebSocket server
│   │   ├── license-manager.js  # License validation
│   │   └── tray-manager.js     # System tray integration
│   ├── renderer/
│   │   ├── index.html          # Main window UI
│   │   ├── settings.html       # Settings panel
│   │   ├── app.js              # Renderer process logic
│   │   └── styles.css          # UI styles
│   └── shared/
│       ├── constants.js        # Shared constants
│       └── protocol.js         # WebSocket protocol definitions
├── assets/
│   ├── icon.png               # App icon
│   ├── tray-icon.png          # System tray icon
│   └── tray-icon-active.png   # Active state tray icon
└── build/                     # Electron-builder config
    ├── icon.icns              # macOS icon
    ├── icon.ico               # Windows icon
    └── icon.png               # Linux icon
```

---

## Development Workflow

### Initial Setup
```bash
mkdir music-producer-lab-bridge
cd music-producer-lab-bridge
npm init -y
npm install electron abletonlink ws electron-store
npm install --save-dev electron-builder
```

### Development Commands
```bash
npm run dev        # Start in development mode
npm run build      # Build production app
npm run pack       # Package without installer
npm run dist       # Create installer
```

### Git Workflow
- Branch naming: `claude/<description>-<session-id>`
- Separate repository from main site
- Standard commit conventions
- Push to `origin` with `-u` flag

---

## Ableton Link Implementation

### Basic Link Manager Example

```javascript
const abletonlink = require('abletonlink');

class LinkManager {
  constructor() {
    this.link = new abletonlink(120); // Default tempo
    this.link.startUpdate(500, (tempo, beat, phase, peers) => {
      this.onStateChange({ tempo, beat, phase, peers });
    });
  }

  setTempo(tempo) {
    this.link.setTempo(tempo);
  }

  getTempo() {
    return this.link.getTempo();
  }

  getNumPeers() {
    return this.link.numPeers();
  }

  enable() {
    this.link.enable();
  }

  disable() {
    this.link.disable();
  }
}
```

---

## WebSocket Server Implementation

### Basic Server Example

```javascript
const WebSocket = require('ws');

class WSServer {
  constructor(port = 8080) {
    this.wss = new WebSocket.Server({ port });
    this.clients = new Set();

    this.wss.on('connection', (ws) => {
      this.clients.add(ws);

      ws.on('message', (message) => {
        this.handleMessage(ws, JSON.parse(message));
      });

      ws.on('close', () => {
        this.clients.delete(ws);
      });
    });
  }

  broadcast(data) {
    const message = JSON.stringify(data);
    this.clients.forEach(client => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  }

  handleMessage(ws, message) {
    // Handle incoming commands from browser
  }
}
```

---

## License Validation Strategy

### License Key Format
```
MPL-XXXX-XXXX-XXXX-XXXX
```

### Validation Flow
1. User enters license key
2. App sends validation request to API
3. API checks database, returns status
4. App stores encrypted validation token locally
5. Grace period: 7 days offline before re-validation required

### License Storage
```javascript
const Store = require('electron-store');
const store = new Store({
  encryptionKey: 'your-encryption-key',
  schema: {
    licenseKey: { type: 'string' },
    activatedAt: { type: 'number' },
    lastValidated: { type: 'number' },
    isValid: { type: 'boolean' }
  }
});
```

---

## Browser Integration (Website Side)

The Music Producer Lab website will need a new module:

```javascript
// link-client.js
class LinkClient {
  constructor() {
    this.ws = null;
    this.connected = false;
  }

  connect() {
    this.ws = new WebSocket('ws://localhost:8080');

    this.ws.onopen = () => {
      this.connected = true;
      this.onConnect();
    };

    this.ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      this.handleLinkState(data);
    };

    this.ws.onclose = () => {
      this.connected = false;
      this.onDisconnect();
    };
  }

  setTempo(tempo) {
    if (this.connected) {
      this.ws.send(JSON.stringify({
        type: 'set_tempo',
        tempo: tempo
      }));
    }
  }
}
```

---

## UI/UX Requirements

### System Tray Menu
```
🟢 Music Producer Lab Bridge
   Connected: 3 peers
   Browser: Connected
   ────────────────
   Open Status Window
   Settings
   ────────────────
   Quit
```

### Status Window
- **Compact window** (400x300px)
- **Real-time status indicators**:
  - Link enabled (on/off)
  - Current tempo with BPM display
  - Connected peers count
  - Browser connections count
  - WebSocket server status
- **Visual feedback**: Green = active, Red = inactive

### Settings Panel
- License key input with validation button
- Auto-start toggle
- WebSocket port input (default: 8080)
- Link quantum selector (4, 8, 16 beats)
- About section (version, credits)

---

## Testing Requirements

### Unit Tests
- Link manager state changes
- WebSocket message handling
- License validation logic
- Settings persistence

### Integration Tests
- Link network joining
- Browser communication via WebSocket
- Tempo sync accuracy
- Multi-client handling

### Manual Testing
- Install and launch app
- Connect to Ableton Live
- Open website and verify sync
- Change tempo from both sides
- Test with multiple DAW instances
- Verify offline license grace period

---

## Packaging & Distribution

### Electron Builder Config

```javascript
// electron-builder.json
{
  "appId": "com.musicproducerlab.bridge",
  "productName": "Music Producer Lab Bridge",
  "files": [
    "dist/**/*",
    "node_modules/**/*",
    "package.json"
  ],
  "mac": {
    "category": "public.app-category.music",
    "target": ["dmg", "zip"]
  },
  "win": {
    "target": ["nsis", "portable"]
  },
  "linux": {
    "target": ["AppImage", "deb"]
  }
}
```

### Release Channels
- **Stable**: Production releases
- **Beta**: Testing releases for premium users
- **Dev**: Internal development builds

---

## Current Priorities

1. **MVP Development**: Get basic Link sync working
2. **WebSocket Reliability**: Handle connection drops gracefully
3. **License System**: Implement validation and gating
4. **System Tray**: Minimal, always-accessible interface
5. **Cross-Platform**: Test on Windows, macOS, Linux

---

## Important Notes

- **Act Mode**: You implement and execute, not plan strategy
- **Premium Feature**: This is a paid add-on, not free
- **Reliability First**: Connection drops must not crash anything
- **Cross-Platform**: Must work on all major OSes
- **User is Product Owner**: Final decisions on features and UX
- **Security**: License keys and tokens must be encrypted

---

## When to Ask User

Ask the user when:
- UI/UX design choices (icon placement, colors, layout)
- License validation API endpoint details
- Feature prioritization beyond MVP
- Pricing or licensing model questions
- Branding and naming decisions
- Need graphic assets (icons, logos)

**Do NOT ask** for:
- Standard Electron patterns
- WebSocket implementation details
- Link protocol integration
- Code architecture decisions
- Testing strategies

---

## Success Criteria

Your work is successful when:
- Bridge app connects to Link network reliably
- Browser sequencers sync perfectly with DAWs
- License validation works online and offline
- App runs silently in system tray
- Cross-platform installation works smoothly
- Users can start syncing within 2 minutes of install

---

**Remember**: This is a premium feature that solves a real technical limitation. Focus on reliability, ease of use, and seamless integration with the website.
