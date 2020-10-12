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

  const x = (mainBounds.x + (mainBounds.width / 2)) - 200
  const y = (mainBounds.y + (mainBounds.height / 2)) - 200

  const sourceCreatorWindow = createWindow('sourceCreator', {
    x,
    y,
    width: 400,
    minWidth: 370,
    height: 480,
    minHeight: 460,
    parent: mainWindow,
    modal: true,
    maximizable: false,
    minimizable: false,
    show: false,
    backgroundColor: '#1c1e1f'
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
