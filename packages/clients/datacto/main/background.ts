import { app, BrowserWindow, ipcMain } from 'electron';
import serve from 'electron-serve';
import { createWindow } from './helpers';

const isProd: boolean = process.env.NODE_ENV === 'production';

if (isProd) {
  serve({ directory: 'app' });
} else {
  app.setPath('userData', `${app.getPath('userData')} (development)`);
}

let mainWindow: BrowserWindow

(async () => {
  await app.whenReady();

  mainWindow = createWindow('main', {
    title: 'Datacto',
    width: 1000,
    height: 600,
    backgroundColor: '#1c1e1f'
  });

  mainWindow.removeMenu()

  if (isProd) {
    await mainWindow.loadURL('app://./home.html');
  } else {
    const port = process.argv[2];
    await mainWindow.loadURL(`http://localhost:${port}/home`);
    mainWindow.webContents.openDevTools();
  }
})();

ipcMain.on('openSourceCreator', async () => {
  const mainBounds = mainWindow.getBounds()

  const x = (mainBounds.x + (mainBounds.width / 2)) - 250
  const y = (mainBounds.y + (mainBounds.height / 2)) - 250

  const sourceCreatorWindow = createWindow('sourceCreator', {
    height: 500,
    width: 500,
    x,
    y,
    parent: mainWindow,
    modal: true,
    maximizable: false,
    minimizable: false,
    resizable: false,
    show: false,
  })
  
  sourceCreatorWindow.removeMenu()

  sourceCreatorWindow.once('ready-to-show', () => sourceCreatorWindow.show())

  if (isProd) {
    await sourceCreatorWindow.loadURL('app://./sources/create.html');
  } else {
    const port = process.argv[2];
    await sourceCreatorWindow.loadURL(`http://localhost:${port}/sources/create`);
    sourceCreatorWindow.webContents.openDevTools();
  }
})

app.on('window-all-closed', () => {
  app.quit();
});

// import knex from 'knex'

// const conn = knex({
//   client: 'pg',
//   connection: {
//     host: '127.0.0.1',
//     port: 5432,
//     user: 'postgres',
//     password: 'root',
//     database: 'postgres'
//   }
// })

// conn.select('*').from('pg_config').then(res => {
//   console.log({ res })
// })
