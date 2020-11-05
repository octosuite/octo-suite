import React from 'react'

import { useTabViewItems } from '../context'
import { TabViewHeaderItem } from './Item'
import { Wrapper } from './styles'

const TabViewHeader: React.VFC = () => {
  const tabs = useTabViewItems()

  return (
    <Wrapper
      options={{ useBothWheelAxes: true, wheelSpeed: 0.5 }}
      hasItems={tabs.length !== 0}
    >
      {tabs.map(({ id, header }) => (
        <TabViewHeaderItem key={id} id={id} data={header} />
      ))}
    </Wrapper>
  )
}

export { TabViewHeader }
