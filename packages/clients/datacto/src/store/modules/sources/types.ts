import { SourceData } from '~/core/domain/SourceData'

export enum Types {
  ADD_SOURCE_REQUEST = '@sources/ADD_SOURCE_REQUEST',
  ADD_SOURCE_FAILURE = '@sources/ADD_SOURCE_FAILURE',
  ADD_SOURCE_SUCCESS = '@sources/ADD_SOURCE_SUCCESS'
}

export interface AddSourceRequestAction {
  type: typeof Types.ADD_SOURCE_REQUEST
  payload: {
    source: SourceData
  }
}

export interface AddSourceSuccessAction {
  type: typeof Types.ADD_SOURCE_SUCCESS
  payload: {
    source: SourceData
  }
}

export interface AddSourceFailureAction {
  type: typeof Types.ADD_SOURCE_FAILURE
  payload: {
    message: string
  }
}

export type SourcesActionsTypes =
  | AddSourceRequestAction
  | AddSourceSuccessAction
  | AddSourceFailureAction

export interface SourcesState {
  sources: SourceData[]
}
