import React, { createContext, useCallback, useContext, useMemo, useState } from 'react'

import { ActivityBarContextHandles, ActivityBarContextProps } from './types'

const ActivityBarContext = createContext<ActivityBarContextHandles>(null)

export const ActivityBarContextProvider: React.FC<ActivityBarContextProps> = ({
  children,
  initialItem,
  onActiveItemChange
}) => {
  const [activeItem, setActive] = useState<string>(initialItem)

  const setActiveItem = useCallback((item: string) => {
    setActive(item)

    if (onActiveItemChange) {
      onActiveItemChange(item)
    }
  }, [onActiveItemChange])

  return (
    <ActivityBarContext.Provider value={{ activeItem, setActiveItem }}>
      {children}
    </ActivityBarContext.Provider>
  )
}

export const useActiveItem = (item: string): [boolean, () => void] => {
  const { activeItem, setActiveItem } = useContext(ActivityBarContext)

  const isActive = useMemo(() => activeItem === item, [activeItem, item])
  const setAsActive = useCallback(() => setActiveItem(item), [item])

  return [isActive, setAsActive]
}