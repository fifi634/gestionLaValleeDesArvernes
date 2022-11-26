const {contextBridge, ipcRenderer} = require('electron');

contextBridge.exposeInMainWorld('electron', {
  client: {
    client: () => ipcRenderer.invoke('client'),
  },
});
