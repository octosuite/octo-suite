import React from 'react'

import { Codicon } from '@shared/components/Codicon'

import { Container } from './styles'
import { SidebarSectionHeaderItemProps } from './types'

const SidebarSectionHeaderItem: React.VFC<SidebarSectionHeaderItemProps> = ({
  icon,
  onClick,
  ...rest
}) => {
  return (
    <Container
      onClick={e => {
        e.stopPropagation()
        onClick && onClick(e)
      }}
      {...rest}
    >
      {typeof icon === 'string' ? <Codicon name={icon} size={16} /> : icon}
    </Container>
  )
}

export { SidebarSectionHeaderItem }
