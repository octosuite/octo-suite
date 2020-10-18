import React, { useState } from 'react'

import { Codicon } from '@shared/components'

import { Wrapper, Title } from './styles'
import { FolderHeaderProps } from './types'

const FolderHeader: React.VFC<FolderHeaderProps> = ({
  expanded,
  onClick,
  title,
  icon,
  level
}) => {
  return (
    <Wrapper level={level} onClick={onClick}>
      <Codicon name={expanded ? 'chevron-down' : 'chevron-right'} size={16} />

      {icon && typeof icon === 'string' ? (
        <Codicon name={icon} size={16} />
      ) : (
        icon
      )}

      <Title>{title}</Title>
    </Wrapper>
  )
}

export { FolderHeader }
