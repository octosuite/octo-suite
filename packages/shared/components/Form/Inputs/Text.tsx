import React from 'react'

import { InputBase, LabeledWrapper, InputLabel } from '../styles'
import { InputProps } from '../types'

const TextInput: React.VFC<InputProps> = ({
  label,
  hasError,
  hasWarnings,
  ...rest
}) => {
  if (label) {
    return (
      <LabeledWrapper>
        <InputLabel htmlFor={label}>{label}</InputLabel>
        <InputBase
          id={label}
          type="text"
          {...rest}
          className={hasError ? 'error' : hasWarnings ? 'warning' : ''}
        />
      </LabeledWrapper>
    )
  }

  return <InputBase type="text" {...rest} />
}

export { TextInput }
