import { all } from 'redux-saga/effects'

import sources from './sources/sagas'

export default function* rootSaga() {
  return yield all([sources])
}
