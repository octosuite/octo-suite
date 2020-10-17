import { ipcRenderer, IpcRendererEvent } from 'electron'

import { DatabaseData } from '~/core/domain/DatabaseData'

import {
  TEST_POSTGRESQL_CHANNEL,
  TEST_POSTGRESQL_SUCCESS_CHANNEL,
  TEST_POSTGRESQL_REJECT_CHANNEL,
  GET_DATABASES_POSTGRESQL_CHANNEL,
  GET_DATABASES_POSTGRESQL_RESPONSE_CHANNEL
} from './types'

export async function testPostgreSQLConnection(
  connectionString: string
): Promise<boolean> {
  return new Promise<boolean>(resolve => {
    ipcRenderer.once(TEST_POSTGRESQL_SUCCESS_CHANNEL, () => {
      resolve(true)
    })

    ipcRenderer.once(TEST_POSTGRESQL_REJECT_CHANNEL, () => {
      resolve(false)
    })

    ipcRenderer.send(TEST_POSTGRESQL_CHANNEL, connectionString)
  })
}

export async function getPostgreSQLDatabases(
  connectionString: string
): Promise<DatabaseData[]> {
  return new Promise(resolve => {
    ipcRenderer.once(
      GET_DATABASES_POSTGRESQL_RESPONSE_CHANNEL,
      (_: IpcRendererEvent, databases: DatabaseData[]) => {
        resolve(databases)
      }
    )

    ipcRenderer.send(GET_DATABASES_POSTGRESQL_CHANNEL, connectionString)
  })
}
