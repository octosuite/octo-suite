import React from 'react';

import { Container } from './styles';
import { SidebarSectionHeaderItemProps } from './types'

const SidebarSectionHeaderItem: React.VFC<SidebarSectionHeaderItemProps> = ({
  icon
}) => {
  return <Container onClick={e => e.stopPropagation()}>{icon}</Container>;
}

export { SidebarSectionHeaderItem }