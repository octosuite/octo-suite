import React, { memo, useCallback } from 'react'

import { Codicon } from '../../Codicon'
import { useItemClick } from '../context'
import { ItemType } from '../types'
import { Wrapper, Title } from './styles'
import { FileProps } from './types'

const FileComponent: React.VFC<FileProps> = props => {
  const { name, icon, level } = props

  const itemClick = useItemClick()

  const handleClick = useCallback(() => {
    itemClick({ name, icon, type: ItemType.FILE })
  }, [itemClick, name, icon])

  return (
    <Wrapper level={level} onClick={handleClick}>
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
