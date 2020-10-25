import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { ipcRenderer, IpcRendererEvent } from 'electron'

import { REDUX_REPLY_ACTION_CHANNEL } from './types'

const useForwardReduxActionFromMain = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const handleReplyAction = (_: IpcRendererEvent, action: any) => {
      dispatch(action)
    }

    ipcRenderer.on(REDUX_REPLY_ACTION_CHANNEL, handleReplyAction)
    return () => {
      ipcRenderer.removeListener(REDUX_REPLY_ACTION_CHANNEL, handleReplyAction)
    }
  }, [dispatch])
}

export { useForwardReduxActionFromMain }
