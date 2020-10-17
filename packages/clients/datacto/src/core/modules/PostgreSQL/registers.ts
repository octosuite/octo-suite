import { ipcMain, IpcMainEvent } from 'electron'
import { Client } from 'pg'

import { DatabaseData } from '~/core/domain/DatabaseData'

import {
  TEST_POSTGRESQL_CHANNEL,
  TEST_POSTGRESQL_SUCCESS_CHANNEL,
  TEST_POSTGRESQL_REJECT_CHANNEL,
  GET_DATABASES_POSTGRESQL_CHANNEL,
  GET_DATABASES_POSTGRESQL_RESPONSE_CHANNEL
} from './types'

export function registerTestPostgreSQLConnection() {
  ipcMain.on(
    TEST_POSTGRESQL_CHANNEL,
    async (event: IpcMainEvent, connectionString: string) => {
      const client = new Client({ connectionString })

      try {
        await client.connect()

        event.sender.send(TEST_POSTGRESQL_SUCCESS_CHANNEL)
      } catch (error) {
        event.sender.send(TEST_POSTGRESQL_REJECT_CHANNEL)
      } finally {
        await client.end()
      }
    }
  )
}

export function registerGetPostgreSQLDatabases() {
  ipcMain.on(
    GET_DATABASES_POSTGRESQL_CHANNEL,
    async (event: IpcMainEvent, connectionString: string) => {
      const client = new Client({ connectionString })

      try {
        await client.connect()

        const databases = await client.query<DatabaseData[]>(`
          SELECT datname AS name
          FROM pg_database
          WHERE datistemplate = FALSE
          ORDER BY datname
        `)

        event.sender.send(GET_DATABASES_POSTGRESQL_RESPONSE_CHANNEL, databases)
      } catch (error) {
        event.sender.send(GET_DATABASES_POSTGRESQL_RESPONSE_CHANNEL, [])
      } finally {
        await client.end()
      }
    }
  )
}
