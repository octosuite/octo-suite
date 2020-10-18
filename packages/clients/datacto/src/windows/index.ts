import { app, BrowserWindow } from 'electron'
import isDevelopment from 'electron-is-dev'

import { createDatabase } from '~/store/database'

import { registerOpenNewPostgreSQLDataSource } from './PostgreSQL/registers'

export function resolvePath(path: string) {
  if (isDevelopment) {
    const port = process.argv[2] || 8888

    return `http://localhost:${port}/${path}`
  }

  return `app://./${path}.html`
}

export function getCenterOfWindow(window: BrowserWindow) {
  const { x, y, width, height } = window.getBounds()

  return {
    x: x + width / 2,
    y: y + height / 2
  }
}

export async function registerWindows() {
  await app.whenReady()
  const database = await createDatabase()

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

  mainWindow.on('close', () => {
    database.close()
  })

  registerOpenNewPostgreSQLDataSource(mainWindow)
}
