import { ipcRenderer } from 'electron'

import { BaseAction, REDUX_REPLY_ACTION_CHANNEL } from './types'

interface InternalAction extends BaseAction {
  _alreadyReplyed?: boolean
}

export const propagateActions = () => (next: Function) => (
  action: InternalAction
) => {
  const replyedAction = { ...action, _alreadyReplyed: true }

  if (action._alreadyReplyed || !action.propagate) {
    return next(replyedAction)
  }

  try {
    ipcRenderer.send(REDUX_REPLY_ACTION_CHANNEL, replyedAction)
    // next(action)
  } catch (error) {
    next(action)
  }
}
