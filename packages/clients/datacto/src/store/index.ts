import { registerSaveSource, registerWatchSources } from './sources/registers'

export function registerStores() {
  registerSaveSource()
  registerWatchSources()
}
