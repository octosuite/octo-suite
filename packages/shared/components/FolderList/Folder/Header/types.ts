import { ReactNode } from 'react'

export interface FolderHeaderProps {
  expanded: boolean
  onClick(): void
  title: string
  icon?: string | ReactNode
  level: number
}
