import React, { useState } from 'react'

import { File } from '../File'
import { ItemType, Item } from '../types'
import { FolderHeader } from './Header'
import { Wrapper, Container } from './styles'
import { FolderProps } from './types'

function folderComparer(item: Item, other: Item): number {
  if (item.type === other.type) {
    return item.name > other.name ? 1 : -1
  }

  if (item.type === ItemType.FOLDER) {
    return -1
  }

  return 1
}

const Folder: React.VFC<FolderProps> = ({
  name,
  icon,
  items = [],
  level = 0
}) => {
  const [expanded, setExpanded] = useState(false)

  return (
    <Wrapper>
      <FolderHeader
        title={name}
        icon={icon}
        level={level}
        expanded={expanded}
        onClick={() => setExpanded(old => !old)}
      />

      <Container hidden={!expanded}>
        {items
          .sort(folderComparer)
          .map(item =>
            item.type === ItemType.FOLDER ? (
              <Folder key={item.name} {...item} level={level + 1} />
            ) : (
              <File key={item.name} {...item} level={level + 1} />
            )
          )}
      </Container>
    </Wrapper>
  )
}

export { Folder }
