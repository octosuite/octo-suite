import { SourceData } from '~/core/domain/SourceData'

import {
  AddSourceRequestAction,
  AddSourceSuccessAction,
  AddSourceFailureAction,
  Types
} from './types'

export function addSourceRequest(source: SourceData): AddSourceRequestAction {
  return {
    type: Types.ADD_SOURCE_REQUEST,
    payload: { source }
  }
}

export function addSourceSuccess(source: SourceData): AddSourceSuccessAction {
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
