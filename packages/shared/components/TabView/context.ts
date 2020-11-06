import { createContext, useContext, useMemo } from 'react'

import { TabViewContextHandles } from './types'

export const TabViewContext = createContext<TabViewContextHandles>(null)

export function useTabViewItems() {
  const { items } = useContext(TabViewContext)

  return items
}

export function useActiveItem(id: string): [boolean, () => void, () => void] {
  const { activeItem, setActiveItem, removeItem, items } = useContext(
    TabViewContext
  )

  return useMemo(() => {
    const item = items.find(currentItem => currentItem.id === id)

    return [
      id === activeItem?.id,
      () => setActiveItem(item),
      () => removeItem(item)
    ]
  }, [id, items, activeItem, setActiveItem])
}
