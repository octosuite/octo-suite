import React from 'react';

import { TabBarItem } from './Item'
import { Wrapper } from './styles';

const TabBar: React.FC = () => {
  return (
    <Wrapper>
      <TabBarItem />
      <TabBarItem />
      <TabBarItem />
    </Wrapper>
  );
}

export { TabBar }