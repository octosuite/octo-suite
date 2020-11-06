import React from 'react'

import { Codicon } from '@shared/components'

import { useActiveItem } from '../../context'
import { Container, Label, CloseButton } from './styles'
import { TabViewHeaderItemProps } from './types'

const TabViewHeaderItem: React.VFC<TabViewHeaderItemProps> = ({ id, data }) => {
  const { icon, label } = data
  const [isActive, focusThis, closeThis] = useActiveItem(id)

  return (
    <Container onClick={focusThis} className={isActive ? 'active' : ''}>
      {icon && typeof icon === 'string' ? (
        <Codicon name={icon} size={16} />
      ) : (
        icon
      )}

      <Label>{label}</Label>

      <CloseButton
        onClick={e => {
          e.stopPropagation()
          closeThis()
        }}
      >
        <Codicon name="close" size={16} />
      </CloseButton>
    </Container>
  )
}

export { TabViewHeaderItem }
