import React from 'react'

import { ActivityIndicator } from '@shared/components/ActivityIndicator'

import { Container, Label } from './styles'
import { ButtonProps } from './types'

const Button: React.FC<ButtonProps> = ({
  children,
  disabled,
  loading = false,
  ...rest
}) => {
  return (
    <Container {...rest} disabled={disabled || loading || undefined}>
      <Label loading={loading || undefined}>
        <span>{children}</span>

        {loading && <ActivityIndicator size={16} />}
      </Label>
    </Container>
  )
}

export { Button }
