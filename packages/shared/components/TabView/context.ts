import { createContext, useContext, useMemo } from 'react'

import { TabViewContextHandles } from './types'

export const TabViewContext = createContext<TabViewContextHandles>(null)

export function useTabViewItems() {
  const { items } = useContext(TabViewContext)

  return items
}

export function useActiveItem(id: string): [boolean, () => void] {
  const { activeItem, setActiveItem, items } = useContext(TabViewContext)

  return useMemo(() => {
    return [
      id === activeItem?.id,
      () => {
        const item = items.find(currentItem => currentItem.id === id)
        setActiveItem(item)
      }
    ]
  }, [id, items, activeItem, setActiveItem])
}
