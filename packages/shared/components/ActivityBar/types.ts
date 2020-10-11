export interface ActivityBarContextProps {
  initialItem?: string
  onActiveItemChange(item: string): void
}

export interface ActivityBarContextHandles {
  activeItem: string | undefined
  setActiveItem(item: string): void
}

export interface ActivityBarProps extends ActivityBarContextProps {
  exludeSettings?: boolean
}
