import React from 'react'

import { Folder } from './Folder'
import { Wrapper } from './styles'
import { FolderListProps } from './types'

const FolderList: React.VFC<FolderListProps> = ({ items = [] }) => {
  return (
    <Wrapper>
      {items.map(item => (
        <Folder key={item.name} {...item} />
      ))}
    </Wrapper>
  )
}

export * from './types'
export { FolderList }
