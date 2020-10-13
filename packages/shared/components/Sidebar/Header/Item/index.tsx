import React from 'react';

import { Codicon } from '@shared/components/Codicon'

import { Container } from './styles';
import { SidebarHeaderItemProps } from './types'

const SidebarHeaderItem: React.VFC<SidebarHeaderItemProps> = ({
  icon, ...rest
}) => {
  return (
    <Container {...rest}>
      {typeof icon === 'string' ? <Codicon name={icon} size={16} /> : icon}
    </Container>
  )
}

export { SidebarHeaderItem }