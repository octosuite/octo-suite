import { FileItem } from '../types'

export interface FileProps extends Omit<FileItem, 'type'> {
  level: number
}
