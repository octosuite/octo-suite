import React, { ButtonHTMLAttributes } from 'react';

import { Container, Label } from './styles';

const Button: React.FC<ButtonHTMLAttributes<HTMLButtonElement> & { secondary?: boolean }> = ({children, ...rest}) => {
  return (
    <Container {...rest}>
      <Label>{children}</Label>
    </Container>
  );
}

export { Button };