import React, {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useState
} from 'react'

import { TabBarItem } from './Item'
import { TabBarItemProps } from './Item/types'
import { Wrapper } from './styles'
import { TabBarHandles } from './types'

const TabBarComponent: React.ForwardRefRenderFunction<TabBarHandles> = (
  _,
  ref
) => {
  const [tabs, setTabs] = useState<TabBarItemProps[]>([])

  const addTab = useCallback((tab: TabBarItemProps) => {
    setTabs(current => [...current, tab])
  }, [])

  useImperativeHandle<{}, TabBarHandles>(ref, () => ({ addTab }), [addTab])

  return (
    <Wrapper>
      {tabs.map((tab, index) => (
        <TabBarItem key={index} {...tab} />
      ))}
    </Wrapper>
  )
}

const TabBar = forwardRef(TabBarComponent)

export * from './types'
export { TabBar }
