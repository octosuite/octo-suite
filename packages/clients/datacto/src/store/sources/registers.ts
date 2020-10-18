import { ipcMain, IpcMainEvent } from 'electron'
import Store from 'electron-store'

import { SourceData } from '~/core/domain/SourceData'

import { SourcesChannel } from './types'

const sourcesStore = new Store<Record<'sources', SourceData[]>>({ watch: true })

export function registerSaveSource() {
  ipcMain.on(
    SourcesChannel.save.name,
    (event: IpcMainEvent, data: SourceData) => {
      const sources = sourcesStore.get('sources', [])

      const source = sources.find(source => source.name === data.name)

      if (source) {
        event.sender.send(SourcesChannel.save.failure, 'Name already exists')
      } else {
        sources.push(data)

        sourcesStore.set('sources', sources)

        event.sender.send(SourcesChannel.save.success)
      }
    }
  )
}

export function registerWatchSources() {
  ipcMain.on(SourcesChannel.watch.name, (event: IpcMainEvent) => {
    function notify() {
      const sources = sourcesStore.get('sources')

      event.sender.send(SourcesChannel.watch.change, sources)
    }

    sourcesStore.onDidAnyChange(() => notify())

    notify()
  })
}
