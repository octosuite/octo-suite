import React from 'react'

import { Codicon } from '@shared/components/Codicon'

import { Container } from './styles'
import { TabViewHeaderActionItemProps } from './types'

const TabViewHeaderActionItem: React.VFC<TabViewHeaderActionItemProps> = ({
  icon,
  ...rest
}) => {
  return (
    <Container {...rest}>
      {typeof icon === 'string' ? <Codicon name={icon} size={16} /> : icon}
    </Container>
  )
}

export { TabViewHeaderActionItem }
