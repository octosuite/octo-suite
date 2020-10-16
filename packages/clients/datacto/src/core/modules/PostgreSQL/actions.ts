import { ipcRenderer } from 'electron'

import {
  TEST_POSTGRESQL_CHANNEL,
  TEST_POSTGRESQL_SUCCESS_CHANNEL,
  TEST_POSTGRESQL_REJECT_CHANNEL
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
