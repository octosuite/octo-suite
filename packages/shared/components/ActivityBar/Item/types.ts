import React, { ButtonHTMLAttributes } from 'react'

export interface ActivityBarItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  name: string
  icon: string | React.ReactNode
  hideIndicator?: boolean
}
