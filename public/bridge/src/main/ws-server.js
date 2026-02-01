const WebSocket = require('ws');

/**
 * WSServer - WebSocket server for browser communication
 *
 * Responsibilities:
 * - Accept WebSocket connections from browsers on localhost:8080
 * - Broadcast Link state updates to all connected clients
 * - Handle commands from browsers (set_tempo, set_playing, get_state)
 * - Manage client connections (add/remove)
 */
class WSServer {
  constructor(port = 8080) {
    this.port = port;
    this.wss = null;
    this.clients = new Set();
    this.onCommand = null; // Callback for handling commands from browsers

    console.log(`WSServer initialized for port ${port}`);
  }

  /**
   * Start WebSocket server
   */
  start() {
    try {
      this.wss = new WebSocket.Server({ port: this.port });

      this.wss.on('connection', (ws) => {
        this.handleConnection(ws);
      });

      this.wss.on('error', (error) => {
        console.error('WebSocket Server error:', error);
      });

      console.log(`WebSocket server started on localhost:${this.port}`);
    } catch (error) {
      console.error('Failed to start WebSocket server:', error);
      throw error;
    }
  }

  /**
   * Handle new client connection
   * @param {WebSocket} ws - WebSocket client
   */
  handleConnection(ws) {
    this.clients.add(ws);
    console.log(`Browser connected. Total clients: ${this.clients.size}`);

    // Send welcome message
    this.sendToClient(ws, {
      type: 'connection_established',
      data: {
        message: 'Connected to Music Producer Lab Bridge',
        port: this.port,
        timestamp: Date.now()
      }
    });

    // Handle incoming messages
    ws.on('message', (message) => {
      try {
        const data = JSON.parse(message);
        this.handleMessage(ws, data);
      } catch (err) {
        console.error('Invalid message format:', err);
        this.sendToClient(ws, {
          type: 'error',
          data: {
            message: 'Invalid JSON format',
            error: err.message
          }
        });
      }
    });

    // Handle client disconnect
    ws.on('close', () => {
      this.clients.delete(ws);
      console.log(`Browser disconnected. Total clients: ${this.clients.size}`);
    });

    // Handle client errors
    ws.on('error', (error) => {
      console.error('Client WebSocket error:', error);
      this.clients.delete(ws);
    });
  }

  /**
   * Handle incoming message from browser
   * @param {WebSocket} ws - WebSocket client
   * @param {object} message - Parsed message object
   */
  handleMessage(ws, message) {
    console.log('Received command:', message.type, message);

    switch (message.type) {
      case 'set_tempo':
        if (message.tempo !== undefined) {
          console.log(`Set tempo command: ${message.tempo} BPM`);
          if (this.onCommand) {
            this.onCommand('set_tempo', message.tempo);
          }
        } else {
          this.sendToClient(ws, {
            type: 'error',
            data: { message: 'Missing tempo parameter' }
          });
        }
        break;

      case 'set_playing':
        if (message.playing !== undefined) {
          console.log(`Set playing command: ${message.playing}`);
          if (this.onCommand) {
            this.onCommand('set_playing', message.playing);
          }
        } else {
          this.sendToClient(ws, {
            type: 'error',
            data: { message: 'Missing playing parameter' }
          });
        }
        break;

      case 'get_state':
        console.log('Get state command');
        if (this.onCommand) {
          this.onCommand('get_state', null, (state) => {
            this.sendToClient(ws, {
              type: 'link_state',
              data: state
            });
          });
        }
        break;

      default:
        console.warn('Unknown command type:', message.type);
        this.sendToClient(ws, {
          type: 'error',
          data: { message: `Unknown command type: ${message.type}` }
        });
    }
  }

  /**
   * Broadcast Link state to all connected clients
   * @param {object} state - Link state object
   */
  broadcast(state) {
    const message = JSON.stringify({
      type: 'link_state',
      data: {
        tempo: state.tempo || 120.0,
        beat: state.beat || 0.0,
        phase: state.phase || 0.0,
        peers: state.peers || 0,
        isPlaying: state.isPlaying !== undefined ? state.isPlaying : true,
        quantum: state.quantum || 4
      }
    });

    let sentCount = 0;
    this.clients.forEach(client => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(message);
        sentCount++;
      }
    });

    // Log only occasionally to avoid spam
    if (sentCount > 0 && Math.random() < 0.05) { // 5% of the time
      console.log(`Broadcast state to ${sentCount} client(s)`);
    }
  }

  /**
   * Send message to specific client
   * @param {WebSocket} ws - WebSocket client
   * @param {object} message - Message object to send
   */
  sendToClient(ws, message) {
    if (ws.readyState === WebSocket.OPEN) {
      ws.send(JSON.stringify(message));
    }
  }

  /**
   * Get number of connected clients
   * @returns {number} Number of connected clients
   */
  getClientCount() {
    return this.clients.size;
  }

  /**
   * Stop WebSocket server and close all connections
   */
  stop() {
    if (this.wss) {
      console.log('Stopping WebSocket server...');

      // Close all client connections
      this.clients.forEach(client => {
        client.close();
      });
      this.clients.clear();

      // Close server
      this.wss.close(() => {
        console.log('WebSocket server stopped');
      });

      this.wss = null;
    }
  }

  /**
   * Check if server is running
   * @returns {boolean} True if server is running
   */
  isRunning() {
    return this.wss !== null;
  }
}

module.exports = WSServer;
