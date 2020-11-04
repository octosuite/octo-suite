import { ReactNode } from 'react'

export interface FolderListProps {
  items?: FolderItem[]
  onItemClick?: (item: FileItem) => void
}

export interface FolderListContextProps {
  onItemClick?: (item: FileItem) => void
}

export interface FolderListContextHandlesProps {
  onItemClick?: (item: FileItem) => void
}

export enum ItemType {
  FOLDER = 'FOLDER',
  FILE = 'FILE'
}

interface BaseItem {
  name: string
  icon?: string | ReactNode
}

export interface FolderItem extends BaseItem {
  type: typeof ItemType.FOLDER
  items?: Item[]
  startsCollapsed?: boolean
}

export interface FileItem extends BaseItem {
  type: typeof ItemType.FILE
}

export type Item = FolderItem | FileItem
