import React, { InputHTMLAttributes } from 'react';

import { InputBase, LabeledWrapper, InputLabel } from '../styles';

const TextInput: React.FC<InputHTMLAttributes<HTMLInputElement> & { label?: string }>  = ({ label, ...rest}) => {
  if (label) {
    return (
      <LabeledWrapper>
        <InputLabel htmlFor={label}>{label}</InputLabel>
        <InputBase id={label} type="text" {...rest} />
      </LabeledWrapper>
    )
  }

  return (
    <InputBase type="text" {...rest} />
  );
}

export { TextInput };