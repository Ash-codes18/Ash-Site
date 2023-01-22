const electron = require('electron');
const { app, BrowserWindow } = electron;

let mainWindow;

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        width: 1080,
        height: 1920
    });

    mainWindow.setTitle('Ashzen');
    mainWindow.loadURL('https://ashzen.pages.dev/');

    mainWindow.on('closed', () => {
        mainWindow = null;
    });
});