import React from 'react';

import { MdSettings } from 'react-icons/md'

import { ActivityBarItem } from './Item'
import { ActivityBarContextProvider } from './context'
import { Wrapper, Container } from './styles';
import { ActivityBarProps } from './types';

const ActivityBar: React.FC<ActivityBarProps> & { 
  Item: typeof ActivityBarItem
} = ({ children, exludeSettings, ...rest }) => {
  return (
    <ActivityBarContextProvider {...rest}>
      <Wrapper>
        <Container>
          {children}
        </Container>

        {!exludeSettings && (
          <ActivityBarItem name="settings" icon={<MdSettings />} />
        )}
      </Wrapper>
    </ActivityBarContextProvider>);
}

ActivityBar.Item = ActivityBarItem

export * from './Item'
export * from './types'

export { ActivityBar }
