import { ipcMain, IpcMainEvent } from 'electron'
import { Client } from 'pg'

import { TEST_POSTGRESQL_CHANNEL, TEST_POSTGRESQL_SUCCESS_CHANNEL, TEST_POSTGRESQL_REJECT_CHANNEL } from './types'

export function registerTestPostgreSQLConnection() {
  ipcMain.on(TEST_POSTGRESQL_CHANNEL, async (event: IpcMainEvent, connectionString: string) => {
    const client = new Client({ connectionString })

    try {
      await client.connect()

      event.sender.send(TEST_POSTGRESQL_SUCCESS_CHANNEL)
    } catch (error) {
      event.sender.send(TEST_POSTGRESQL_REJECT_CHANNEL)
    } finally {
      await client.end()
    }
  })
}