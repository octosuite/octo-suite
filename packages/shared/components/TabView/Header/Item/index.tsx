import React from 'react'

import { Codicon } from '@shared/components'

import { useActiveItem } from '../../context'
import { Container, Label } from './styles'
import { TabViewHeaderItemProps } from './types'

const TabViewHeaderItem: React.VFC<TabViewHeaderItemProps> = ({ id, data }) => {
  const { icon, label } = data
  const [isActive, setThisAsActive] = useActiveItem(id)

  return (
    <Container onClick={setThisAsActive} className={isActive ? 'active' : ''}>
      {icon && typeof icon === 'string' ? (
        <Codicon name={icon} size={16} />
      ) : (
        icon
      )}

      <Label>{label}</Label>
    </Container>
  )
}

export { TabViewHeaderItem }
