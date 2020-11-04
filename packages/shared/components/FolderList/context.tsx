import React, { createContext, useContext } from 'react'

import { FolderListContextProps, FolderListContextHandlesProps } from './types'

const FolderListContext = createContext<FolderListContextHandlesProps>(null)

export const FolderListContextProvider: React.FC<FolderListContextProps> = ({
  children,
  onItemClick
}) => {
  return (
    <FolderListContext.Provider value={{ onItemClick }}>
      {children}
    </FolderListContext.Provider>
  )
}

export function useItemClick() {
  const { onItemClick } = useContext(FolderListContext)

  return onItemClick
}
