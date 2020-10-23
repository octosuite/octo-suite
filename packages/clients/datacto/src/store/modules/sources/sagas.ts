import { all, takeLatest, put, select } from 'redux-saga/effects'

import { SourceData } from '~/core/domain/SourceData'
import { RootState } from '~/store/state'

import { addSourceFailure, addSourceSuccess } from './actions'
import { Types, AddSourceRequestAction } from './types'

export function* addSource({ payload }: AddSourceRequestAction) {
  const sources: SourceData[] = yield select(
    (state: RootState) => state.sources.sources
  )

  const { source } = payload

  const nameAlreadyAdded = sources.find(s => s.name === source.name)

  if (nameAlreadyAdded) {
    yield put(addSourceFailure('Source name already exists'))
  } else {
    yield put(addSourceSuccess(source))
  }
}

export default all([takeLatest(Types.ADD_SOURCE_REQUEST, addSource)])
