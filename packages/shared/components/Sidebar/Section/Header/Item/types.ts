import { HTMLAttributes, ReactNode } from "react";

export type SidebarSectionHeaderItemProps = HTMLAttributes<HTMLDivElement> & {
  icon: string | ReactNode
}