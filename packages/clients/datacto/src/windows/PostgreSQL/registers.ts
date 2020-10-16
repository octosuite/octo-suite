import { ipcMain, BrowserWindow } from 'electron'

import { resolvePath, getCenterOfWindow } from '~/windows'

import { OPEN_NEW_POSTGRESQL_DATA_SOURCE } from './types'

export function registerOpenNewPostgreSQLDataSource(parent: BrowserWindow) {
  ipcMain.on(OPEN_NEW_POSTGRESQL_DATA_SOURCE, async () => {
    const { x, y } = getCenterOfWindow(parent)

    const window = new BrowserWindow({
      x: x - 200,
      y: y - 240,
      width: 400,
      minWidth: 370,
      height: 480,
      minHeight: 460,
      parent,
      modal: true,
      maximizable: false,
      minimizable: false,
      center: false,
      backgroundColor: '#1c1e1f',
      webPreferences: {
        nodeIntegration: true,
        enableRemoteModule: true
      }
    })

    window.removeMenu()

    window.loadURL(resolvePath('sources/create/postgresql'))
  })
}