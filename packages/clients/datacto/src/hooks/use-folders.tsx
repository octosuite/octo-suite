import React, { useMemo } from 'react'

import { ActivityIndicator } from '@shared/components'
import {
  FileItem,
  FolderItem,
  Item,
  ItemType
} from '@shared/components/FolderList'

import { PostgreSQLSourceIcon } from '~/components/SourceIcon/PostgreSQL'
import { useTypedSelector } from '~/store'
import { ISchemaViewState, WorkState } from '~/store/modules/providers/types'

function resolveIcon(
  state: WorkState,
  results: {
    trying?: string | JSX.Element
    success?: string | JSX.Element
    failure?: string | JSX.Element
  } = {}
): string | JSX.Element {
  const {
    trying = <ActivityIndicator fill="#fff" size={16} />,
    success = <PostgreSQLSourceIcon width={16} height={16} />,
    failure = 'error'
  } = results

  switch (state) {
    case 'TRYING':
      return trying
    case 'SUCCESS':
      return success
    case 'FAILURE':
      return failure
  }
}

function resolveSchemas(schemas: ISchemaViewState[]): FolderItem[] {
  return schemas.map<FolderItem>(schema => {
    const items: Item[] = []

    if (schema.tables.length !== 0) {
      items.push({
        type: ItemType.FOLDER,
        name: 'tables',
        icon: 'folder',
        startsCollapsed: true,
        items: schema.tables.map<FileItem>(table => ({
          name: table.name,
          type: ItemType.FILE,
          icon: 'file'
        }))
      })
    }

    if (schema.views.length !== 0) {
      items.push({
        type: ItemType.FOLDER,
        name: 'views',
        icon: 'folder',
        startsCollapsed: true,
        items: schema.views.map<FileItem>(view => ({
          name: view.name,
          type: ItemType.FILE,
          icon: 'file'
        }))
      })
    }

    return {
      items,
      name: schema.name,
      type: ItemType.FOLDER,
      startsCollapsed: true,
      icon: resolveIcon(schema.loadingTablesState, { success: 'folder' })
    }
  })
}

export function useFolders() {
  const { providers } = useTypedSelector(state => state.providers)

  return useMemo(() => {
    return providers.map<FolderItem>(provider => {
      const { source, connectionState, schemas } = provider
      const { name } = source

      return {
        name,
        type: ItemType.FOLDER,
        items: resolveSchemas(schemas),
        icon: resolveIcon(connectionState)
      }
    })
  }, [providers])
}
