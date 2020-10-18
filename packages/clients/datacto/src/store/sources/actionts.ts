import { ipcRenderer, IpcRendererEvent } from 'electron'

import { SourceData } from '~/core/domain/SourceData'

import { SourcesChannel } from './types'

export async function saveSource(data: SourceData): Promise<void> {
  return new Promise<void>((resolve, reject) => {
    ipcRenderer.once(SourcesChannel.save.success, () => {
      resolve()
    })

    ipcRenderer.once(
      SourcesChannel.save.failure,
      (_: IpcRendererEvent, message: string) => {
        reject(new Error(message))
      }
    )

    ipcRenderer.send(SourcesChannel.save.name, data)
  })
}

export function watchSources(callback: (sources: SourceData[]) => void) {
  ipcRenderer.on(
    SourcesChannel.watch.change,
    (_: IpcRendererEvent, sources: SourceData[]) => {
      callback(sources)
    }
  )

  ipcRenderer.send(SourcesChannel.watch.name)
}
