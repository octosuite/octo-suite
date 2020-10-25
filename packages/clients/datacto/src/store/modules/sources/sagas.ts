import { all, takeLatest, put, select } from 'redux-saga/effects'

import { ISourceData } from '~/core/domain/SourceData'
import { RootState } from '~/store/state'

import { loadProviderRequest } from '../providers/actions'
import { addSourceFailure, addSourceSuccess } from './actions'
import { Types, AddSourceRequestAction } from './types'

function* addSource({ payload }: AddSourceRequestAction) {
  const sources: ISourceData[] = yield select(
    (state: RootState) => state.sources.sources
  )

  const { source } = payload

  const nameAlreadyAdded = sources.find(s => s.name === source.name)

  if (nameAlreadyAdded) {
    yield put(addSourceFailure('Source name already exists'))
  } else {
    yield put(addSourceSuccess(source))
    yield put(loadProviderRequest(source))
  }
}
export default all([takeLatest(Types.ADD_SOURCE_REQUEST, addSource)])
