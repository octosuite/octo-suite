import React, {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useState
} from 'react'

import { TabViewContext } from './context'
import { TabViewHeader } from './Header'
import { Wrapper } from './styles'
import { TabViewHandles, TabViewItemData, TabViewProps } from './types'

const TabViewComponent: React.ForwardRefRenderFunction<
  TabViewHandles,
  TabViewProps
> = ({ onTabChange }, ref) => {
  const [items, setItems] = useState<TabViewItemData[]>([])
  const [activeItem, setActiveItem] = useState<TabViewItemData>()

  const focusItem = useCallback((item: TabViewItemData) => {
    // TODO: scroll to item when focused
    setActiveItem(item)
  }, [])

  const getItems = useCallback(() => items, [items])

  const getFocusedItem = useCallback(() => activeItem, [activeItem])

  const addItem = useCallback(
    (item: TabViewItemData) => {
      setItems(currentItems => [...currentItems, item])
      focusItem(item)
    },
    [focusItem]
  )

  useEffect(() => onTabChange && onTabChange(activeItem), [
    activeItem,
    onTabChange
  ])

  useImperativeHandle<{}, TabViewHandles>(
    ref,
    () => ({ addItem, getItems, getFocusedItem, focusItem }),
    [addItem, getItems, getFocusedItem, focusItem]
  )

  return (
    <TabViewContext.Provider value={{ items, activeItem, setActiveItem }}>
      <Wrapper>
        <TabViewHeader />
      </Wrapper>
    </TabViewContext.Provider>
  )
}

const TabView = forwardRef(TabViewComponent)

export * from './Header'
export * from './types'
export { TabView }
