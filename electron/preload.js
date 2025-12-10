const { contextBridge, ipcRenderer } = require('electron');

// Expone APIs seguras al renderer process
contextBridge.exposeInMainWorld('electronAPI', {
  // Ejemplo: enviar mensaje al proceso principal
  send: (channel, data) => {
    const validChannels = ['toMain'];
    if (validChannels.includes(channel)) {
      ipcRenderer.send(channel, data);
    }
  },
  // Ejemplo: recibir mensaje del proceso principal
  receive: (channel, func) => {
    const validChannels = ['fromMain'];
    if (validChannels.includes(channel)) {
      ipcRenderer.on(channel, (event, ...args) => func(...args));
    }
  }
});