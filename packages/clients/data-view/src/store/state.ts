import { IProvidersState } from './modules/providers/types'
import { ISourcesState } from './modules/sources/types'

export interface RootState {
  providers: IProvidersState
  sources: ISourcesState
}
