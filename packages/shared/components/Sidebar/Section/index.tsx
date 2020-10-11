import React from 'react';

import { SidebarSectionHeader } from './Header'
import { Container } from './styles';

const SidebarSection: React.FC & {
  Header: typeof SidebarSectionHeader
} = () => {
  return (
    <Container>
      <SidebarSectionHeader />
    </Container>
  );
}

SidebarSection.Header = SidebarSectionHeader

export * from './Header'
export { SidebarSection };