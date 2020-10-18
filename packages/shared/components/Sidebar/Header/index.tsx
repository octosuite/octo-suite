import React from 'react'

import { SidebarHeaderItem } from './Item'
import { Wrapper, Container, Title } from './styles'
import { SidebarHeaderProps } from './types'

const SidebarHeader: React.VFC<SidebarHeaderProps> = ({
  title,
  actions = []
}) => {
  return (
    <Wrapper>
      <Title>{title}</Title>

      <Container>
        {actions.map((action, index) => (
          <SidebarHeaderItem key={index} {...action} />
        ))}
      </Container>
    </Wrapper>
  )
}

export * from './types'
export { SidebarHeader }
