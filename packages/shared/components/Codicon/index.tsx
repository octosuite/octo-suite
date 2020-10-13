import React from 'react';
import { CodiconProps } from './types';

const Codicon: React.VFC<CodiconProps> = ({ name, size = 16 }) => {
  return <i className={`codicon codicon-${name}`} style={{ fontSize: size }}></i>;
}

export { Codicon };