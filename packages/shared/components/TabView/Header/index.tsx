import React from 'react'

import { useTabViewItems } from '../context'
import { TabViewHeaderActions } from './Actions'
import { TabViewHeaderItem } from './Item'
import { Wrapper, ScrollBar, Container } from './styles'

const TabViewHeader: React.VFC = () => {
  const tabs = useTabViewItems()

  return (
    <Wrapper>
      <ScrollBar options={{ useBothWheelAxes: true, wheelSpeed: 0.5 }}>
        <Container>
          {tabs.map(({ id, header }) => (
            <TabViewHeaderItem key={id} id={id} data={header} />
          ))}
        </Container>
      </ScrollBar>

      <TabViewHeaderActions />
    </Wrapper>
  )
}

export { TabViewHeader }
