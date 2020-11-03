import { createStore, applyMiddleware, compose } from 'redux'

import { actionWatcherEnhancer } from '@shared/redux'

export default (reducers: any, middlewares: any[]) => {
  const applyedMiddlewares = compose(
    actionWatcherEnhancer,
    applyMiddleware(...middlewares)
  )

  return createStore(reducers, applyedMiddlewares)
}
