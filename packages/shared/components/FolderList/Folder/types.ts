import { FolderItem } from '../types'

export interface FolderProps extends Omit<FolderItem, 'type'> {
  level?: number
}
