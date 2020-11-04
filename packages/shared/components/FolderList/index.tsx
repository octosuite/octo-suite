import React from 'react'

import { FolderListContextProvider } from './context'
import { Folder } from './Folder'
import { Wrapper } from './styles'
import { FolderItem, FolderListProps } from './types'

function folderComparer(item: FolderItem, other: FolderItem): number {
  return item.name > other.name ? 1 : -1
}

const FolderList: React.VFC<FolderListProps> = ({
  items = [],
  onItemClick
}) => {
  return (
    <FolderListContextProvider onItemClick={onItemClick}>
      <Wrapper>
        {items.sort(folderComparer).map(item => (
          <Folder key={item.name} {...item} />
        ))}
      </Wrapper>
    </FolderListContextProvider>
  )
}

export * from './types'
export { FolderList }
