import React from 'react';

import { Container } from './styles';
import { SidebarHeaderItemProps } from './types'

const SidebarHeaderItem: React.VFC<SidebarHeaderItemProps> = ({
  icon, ...rest
}) => {
  return (
    <Container {...rest}>
      {icon}
    </Container>
  )
}

export { SidebarHeaderItem }