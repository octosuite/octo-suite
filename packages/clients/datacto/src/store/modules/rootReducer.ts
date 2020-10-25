import { combineReducers } from 'redux'

import providers from './providers/reducer'
import sources from './sources/reducer'

export default combineReducers({
  providers,
  sources
})
