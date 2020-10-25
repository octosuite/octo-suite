import React, { memo } from 'react'

import { Codicon } from '../../Codicon'
import { Wrapper, Title } from './styles'
import { FileProps } from './types'

const FileComponent: React.VFC<FileProps> = ({ name, icon, level }) => {
  return (
    <Wrapper level={level}>
      {icon && typeof icon === 'string' ? (
        <Codicon name={icon} size={16} />
      ) : (
        icon
      )}

      <Title>{name}</Title>
    </Wrapper>
  )
}

const File = memo(FileComponent)

export { File }
