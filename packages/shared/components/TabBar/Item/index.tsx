import React from 'react'

import { Codicon } from '@shared/components'

import { Container, Label } from './styles'
import { TabBarItemProps } from './types'

const TabBarItem: React.VFC<TabBarItemProps> = ({ icon, label }) => {
  return (
    <Container>
      {icon && typeof icon === 'string' ? (
        <Codicon name={icon} size={16} />
      ) : (
        icon
      )}

      <Label>{label}</Label>
    </Container>
  )
}

export { TabBarItem }
