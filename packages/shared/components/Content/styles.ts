import styled, { css } from 'styled-components'

import { STATUS_BAR_HEIGHT } from '../StatusBar'
import { ContentProps } from './types'

/*
  SDBR -> Sidebar
  TBBR -> TabBar
*/

const WithSidebarStyle = css`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: 35px calc(100vh - 35px - ${STATUS_BAR_HEIGHT}px);
  grid-template-areas:
    'SDBR TBBR'
    'SDBR .';
`

const WithoutSidebarStyle = css``

export const Container = styled.div<Pick<ContentProps, 'hasSidebar'>>`
  grid-area: CONT;

  height: 100%;
  width: 100%;

  ${({ hasSidebar }) => (hasSidebar ? WithSidebarStyle : WithoutSidebarStyle)}
`
