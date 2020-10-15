import { ipcMain, IpcMainEvent } from 'electron'
import { Client } from 'pg'

import { CHANNEL, SUCCESS_CHANNEL, REJECT_CHANNEL } from './types'

export function registerTestPostgreSQLConnection() {
  console.log('registered')

  ipcMain.on(CHANNEL, async (event: IpcMainEvent, connectionString: string) => {
    const client = new Client({ connectionString })

    try {
      await client.connect()

      event.sender.send(SUCCESS_CHANNEL)
    } catch (error) {
      event.sender.send(REJECT_CHANNEL)
    } finally {
      await client.end()
    }
  })
}