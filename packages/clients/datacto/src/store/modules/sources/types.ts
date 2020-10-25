import { BaseAction } from '@shared/redux'

import { ISourceData } from '~/core/domain/SourceData'

export enum Types {
  ADD_SOURCE_REQUEST = '@sources/ADD_SOURCE_REQUEST',
  ADD_SOURCE_FAILURE = '@sources/ADD_SOURCE_FAILURE',
  ADD_SOURCE_SUCCESS = '@sources/ADD_SOURCE_SUCCESS'
}

export interface AddSourceRequestAction extends BaseAction {
  type: typeof Types.ADD_SOURCE_REQUEST
  payload: {
    source: ISourceData
  }
}

export interface AddSourceSuccessAction extends BaseAction {
  type: typeof Types.ADD_SOURCE_SUCCESS
  payload: {
    source: ISourceData
  }
}

export interface AddSourceFailureAction extends BaseAction {
  type: typeof Types.ADD_SOURCE_FAILURE
  payload: {
    message: string
  }
}

export type SourcesActionsTypes =
  | AddSourceRequestAction
  | AddSourceSuccessAction
  | AddSourceFailureAction

export interface ISourcesState {
  sources: ISourceData[]
}
