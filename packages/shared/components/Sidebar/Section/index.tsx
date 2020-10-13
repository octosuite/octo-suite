import React from 'react';

import { SidebarSectionHeader } from './Header'
import { Wrapper, Container } from './styles';
import { SidebarSectionProps } from './types'

const SidebarSection: React.FC<SidebarSectionProps> & {
  Header: typeof SidebarSectionHeader
} = ({ children, ...rest }) => {
  return (
    <Wrapper>
      <SidebarSectionHeader {...rest} />

      <Container>
        {children}
      </Container>
    </Wrapper>
  );
}

SidebarSection.Header = SidebarSectionHeader

export * from './Header'
export { SidebarSection };