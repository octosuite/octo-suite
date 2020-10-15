import { ipcRenderer } from 'electron'

import { CHANNEL, SUCCESS_CHANNEL, REJECT_CHANNEL } from './types'

export async function testPostgreSQLConnection(
  connectionString: string
): Promise<boolean> {
  return new Promise<boolean>(resolve => {
    ipcRenderer.once(SUCCESS_CHANNEL, () => {
      resolve(true)
    })
    
    ipcRenderer.once(REJECT_CHANNEL, () => {
      resolve(false)
    })

    ipcRenderer.send(CHANNEL, connectionString)
  })
}
