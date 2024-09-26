const { app, BrowserWindow } = require('electron');
const path = require('path');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 912,
    height: 920,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  // Load your HTML file
  mainWindow.loadFile(path.join(__dirname, '/SRC/index.html'));

  // Optional: Open DevTools by default
  // mainWindow.webContents.openDevTools();

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});
