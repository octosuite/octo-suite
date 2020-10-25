import React from 'react'

import { useForwardReduxActionFromMain } from '@shared/redux'

const ForwardReduxActionFromMain: React.FC = ({ children }) => {
  useForwardReduxActionFromMain()

  return <>{children}</>
}

export { ForwardReduxActionFromMain }
