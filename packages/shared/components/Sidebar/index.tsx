import React from 'react'

import { SidebarHeader } from './Header'
import { SidebarSection } from './Section'
import { Wrapper, Container } from './styles'
import { SidebarProps } from './types'

const Sidebar: React.VFC<SidebarProps> & {
  Header: typeof SidebarHeader
  Section: typeof SidebarSection
} = ({ ...rest }) => {
  return (
    <Wrapper>
      <SidebarHeader {...rest} />

      <Container>
        <SidebarSection />
        <SidebarSection />
      </Container>
    </Wrapper>
  )
}

Sidebar.Header = SidebarHeader
Sidebar.Section = SidebarSection

export * from './Header'
export * from './Section'
export * from './types'
export { Sidebar }