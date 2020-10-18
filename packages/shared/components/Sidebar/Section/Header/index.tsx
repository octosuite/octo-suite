import React, { useState } from 'react'

import { Codicon } from '@shared/components/Codicon'

import { SidebarSectionHeaderItem } from './Item'
import { Wrapper, Container, Title } from './styles'
import { SidebarSectionHeaderProps } from './types'

const SidebarSectionHeader: React.FC<SidebarSectionHeaderProps> = ({
  title,
  actions = []
}) => {
  const [expanded, setExpanded] = useState(true)

  return (
    <Wrapper onClick={() => setExpanded(old => !old)}>
      <Codicon name={expanded ? 'chevron-down' : 'chevron-right'} size={16} />

      <Title>{title}</Title>

      <Container>
        {expanded &&
          actions.map((action, index) => (
            <SidebarSectionHeaderItem key={index} {...action} />
          ))}
      </Container>
    </Wrapper>
  )
}

export { SidebarSectionHeader }
