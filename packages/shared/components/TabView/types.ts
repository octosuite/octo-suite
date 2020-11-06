import { ReactNode } from 'react'

import { TabViewHeaderActionItemProps } from './Header/Actions/Item/types'
import { TabViewHeaderItemData } from './Header/Item/types'

export interface TabViewItemData {
  id: string
  header: TabViewHeaderItemData
  options?: TabViewHeaderActionItemProps[]
  render(): ReactNode
}

export interface TabViewProps {
  onTabChange?(item: TabViewItemData | undefined): void
}

export interface TabViewHandles {
  addItem(item: TabViewItemData): void
  getItems(): TabViewItemData[]
  getFocusedItem(): TabViewItemData | undefined
  focusItem(item: TabViewItemData): void
}

export interface TabViewContextHandles {
  items: TabViewItemData[]
  activeItem: TabViewItemData | undefined
  setActiveItem(item: TabViewItemData): void
  removeItem(item: TabViewItemData): void
}
