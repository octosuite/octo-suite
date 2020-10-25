import { ipcMain, webContents } from 'electron'

import { BaseAction, REDUX_REPLY_ACTION_CHANNEL } from './types'

export const registerReplyActions = () => {
  ipcMain.on(REDUX_REPLY_ACTION_CHANNEL, (_, action: BaseAction) => {
    webContents
      .getAllWebContents()
      .forEach(content => content.send(REDUX_REPLY_ACTION_CHANNEL, action))
  })
}
