import { ipcMain, IpcMainEvent } from 'electron'
import Store from 'electron-store'

import { SourceData } from '~/core/domain/SourceData'

import { SourcesChannel } from './types'

const sourcesStore = new Store<Record<string, SourceData>>()

export function registerSaveSource() {
  ipcMain.on(
    SourcesChannel.save.name,
    (event: IpcMainEvent, data: SourceData) => {
      if (sourcesStore.has(data.name)) {
        event.sender.send(
          SourcesChannel.save.failure,
          'Source name already exists'
        )
      } else {
        sourcesStore.set(data.name, data)

        event.sender.send(SourcesChannel.save.success)
      }
    }
  )
}
