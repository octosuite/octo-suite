import React from 'react';

import { Container, Label } from './styles';
import { ButtonProps } from './types'

const Button: React.FC<ButtonProps> = ({ children, loading, ...rest }) => {
  return (
    <Container {...rest}>
      <Label>{children}</Label>
    </Container>
  );
}

export { Button };