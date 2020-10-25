import React from 'react'

import { Folder } from './Folder'
import { Wrapper } from './styles'
import { FolderItem, FolderListProps } from './types'

function folderComparer(item: FolderItem, other: FolderItem): number {
  return item.name > other.name ? 1 : -1
}

const FolderList: React.VFC<FolderListProps> = ({ items = [] }) => {
  return (
    <Wrapper>
      {items.sort(folderComparer).map(item => (
        <Folder key={item.name} {...item} />
      ))}
    </Wrapper>
  )
}

export * from './types'
export { FolderList }
