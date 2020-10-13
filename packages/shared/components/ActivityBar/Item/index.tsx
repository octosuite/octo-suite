import React from 'react';

import { Codicon } from '@shared/components/Codicon'

import { useActiveItem } from '../context'
import { Wrapper } from './styles';
import { ActivityBarItemProps } from './types';

const ActivityBarItem: React.VFC<ActivityBarItemProps> = ({ name, icon, onClick, ...rest }) => {
  const [isActive, setAsActive] = useActiveItem(name)

  return (
    <Wrapper onClick={onClick || setAsActive} isActive={isActive} {...rest}>
      {typeof icon === 'string' ? <Codicon name={icon} size={24} /> : icon}
    </Wrapper>
  );
}

export { ActivityBarItem }