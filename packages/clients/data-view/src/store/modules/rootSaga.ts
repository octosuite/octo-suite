import { all } from 'redux-saga/effects'

import providers from './providers/sagas'
import sources from './sources/sagas'

export default function* rootSaga() {
  return yield all([providers, sources])
}
