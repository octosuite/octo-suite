import produce from 'immer'

import { ISourcesState, SourcesActionsTypes, Types } from './types'

const INITIAL_STATE: ISourcesState = {
  sources: []
}

export default function (state = INITIAL_STATE, action: SourcesActionsTypes) {
  return produce(state, draft => {
    switch (action.type) {
      case Types.ADD_SOURCE_SUCCESS:
        draft.sources.push(action.payload.source)
        break
    }
  })
}
