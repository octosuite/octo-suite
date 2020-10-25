import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

export default (reducers: any) => {
  const persistedReducer = persistReducer(
    {
      storage,
      key: 'datacto',
      whitelist: ['sources']
    },
    reducers
  )

  return persistedReducer
}
