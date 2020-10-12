import React from 'react';
import { CodiconProps } from './types';

const Codicon: React.VFC<CodiconProps> = ({ name }) => {
  return <i className={`codicon codicon-${name}`}></i>;
}

export { Codicon };