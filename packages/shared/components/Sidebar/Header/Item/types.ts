import React, { ButtonHTMLAttributes } from 'react'

export type SidebarHeaderItemProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon: string | React.ReactNode
}
