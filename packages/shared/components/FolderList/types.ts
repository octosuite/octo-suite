import { ReactNode } from 'react'

export interface FolderListProps {
  items?: FolderItem[]
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
}

export interface FileItem extends BaseItem {
  type: typeof ItemType.FILE
}

export type Item = FolderItem | FileItem
