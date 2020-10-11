import React from 'react';

import { useActiveItem } from '../context'
import { Wrapper } from './styles';
import { ActivityBarItemProps } from './types';

const ActivityBarItem: React.VFC<ActivityBarItemProps> = ({ name, icon }) => {
  const [isActive, setAsActive] = useActiveItem(name)

  return (
    <Wrapper onClick={setAsActive} isActive={isActive}>
      {icon}
    </Wrapper>
  );
}

export { ActivityBarItem }