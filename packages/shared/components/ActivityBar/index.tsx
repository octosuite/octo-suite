import React from 'react'

import { ActivityBarContextProvider } from './context'
import { ActivityBarItem } from './Item'
import { Wrapper, Container } from './styles'
import { ActivityBarProps } from './types'

const ActivityBar: React.FC<ActivityBarProps> & {
  Item: typeof ActivityBarItem
} = ({ children, exludeSettings, ...rest }) => {
  return (
    <ActivityBarContextProvider {...rest}>
      <Wrapper>
        <Container>{children}</Container>

        {!exludeSettings && (
          <ActivityBarItem name="settings" icon="settings-gear" hideIndicator />
        )}
      </Wrapper>
    </ActivityBarContextProvider>
  )
}

ActivityBar.Item = ActivityBarItem

export const ACTIVITY_BAR_WIDTH = 48

export * from './Item'
export * from './types'

export { ActivityBar }
