import React from 'react';

import { Container } from './styles';
import { ContentProps } from './types'

const Content: React.FC<ContentProps> = ({ children, hasSidebar }) => {
  return (
    <Container hasSidebar={hasSidebar}>
      {children}
    </Container>
  );
}

export { Content }