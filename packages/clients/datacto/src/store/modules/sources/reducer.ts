import produce from 'immer'

import { SourcesState, SourcesActionsTypes, Types } from './types'

const INITIAL_STATE: SourcesState = {
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
