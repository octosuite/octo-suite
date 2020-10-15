import { app, BrowserWindow } from 'electron'
import isDevelopment from 'electron-is-dev'

import { registerOpenNewPostgreSQLDataSource } from './PostgreSQL/registers'

export function resolvePath(path: string) {
  if (isDevelopment) {
    const port = process.argv[2] || 8888;
    
    return `http://localhost:${port}/${path}`
  }

  return `app://./${path}.html`
}

export async function registerWindows() {
  await app.whenReady();

  const mainWindow = new BrowserWindow({
    title: 'Datacto',
    width: 1000,
    height: 600,
    backgroundColor: '#1c1e1f',
    webPreferences: {
      nodeIntegration: true
    }
  })
  
  mainWindow.removeMenu()

  mainWindow.loadURL(resolvePath('home'))

  registerOpenNewPostgreSQLDataSource(mainWindow)
}
