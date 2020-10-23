import React from 'react'

import { ActivityIndicator } from '@shared/components/ActivityIndicator'
import { FolderItem, ItemType } from '@shared/components/FolderList'

import { PostgreSQLSourceIcon } from '~/components/SourceIcon/PostgreSQL'

import { PostgreSQLSourceProvider } from '../domain/SourceProvider'

export function generatePostgreSQLView(
  source: PostgreSQLSourceProvider,
  onChange: (item: FolderItem) => void
) {
  const { name } = source.getData()

  const folder: FolderItem = {
    name,
    type: ItemType.FOLDER,
    icon: <ActivityIndicator fill="#fff" size={16} />
  }

  source
    .getSchemas()
    .then(schemas => {
      folder.items = schemas.map<FolderItem>(schema => ({
        type: ItemType.FOLDER,
        name: schema.name,
        icon: 'folder'
      }))

      folder.icon = <PostgreSQLSourceIcon width={16} height={16} />

      onChange(folder)
    })
    .catch()

  onChange(folder)
}
