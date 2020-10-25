import { ISourceData } from '~/core/domain/SourceData'

import {
  AddSourceRequestAction,
  AddSourceSuccessAction,
  AddSourceFailureAction,
  Types
} from './types'

export function addSourceRequest(source: ISourceData): AddSourceRequestAction {
  return {
    type: Types.ADD_SOURCE_REQUEST,
    payload: { source }
  }
}

export function addSourceSuccess(source: ISourceData): AddSourceSuccessAction {
  return {
    propagate: true,
    type: Types.ADD_SOURCE_SUCCESS,
    payload: { source }
  }
}

export function addSourceFailure(message: string): AddSourceFailureAction {
  return {
    type: Types.ADD_SOURCE_FAILURE,
    payload: { message }
  }
}
