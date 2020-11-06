import React, { useContext } from 'react'

import { TabViewContext } from '@shared/components/TabView/context'

import { TabViewHeaderActionItem } from './Item'
import { Container } from './styles'

const TabViewHeaderActions: React.VFC = () => {
  const { activeItem } = useContext(TabViewContext)

  if (!activeItem || !activeItem.options || activeItem.options.length === 0) {
    return <></>
  }

  return (
    <Container>
      {activeItem.options.map((action, index) => (
        <TabViewHeaderActionItem key={index} {...action} />
      ))}
    </Container>
  )
}

export { TabViewHeaderActions }
