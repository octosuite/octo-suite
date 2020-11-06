import React, { ButtonHTMLAttributes } from 'react'

export type TabViewHeaderActionItemProps = ButtonHTMLAttributes<
  HTMLButtonElement
> & {
  icon: string | React.ReactNode
}
