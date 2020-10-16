import { ipcRenderer } from 'electron'

import { OPEN_NEW_POSTGRESQL_DATA_SOURCE } from './types'

export function openNewPostgreSQLDataSource() {
  ipcRenderer.send(OPEN_NEW_POSTGRESQL_DATA_SOURCE)
}
