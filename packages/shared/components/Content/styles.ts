import styled, { css } from 'styled-components'

import { ACTIVITY_BAR_WIDTH } from '../ActivityBar'
import { STATUS_BAR_HEIGHT } from '../StatusBar'
import { ContentProps } from './types'

/*
  SDBR -> Sidebar
  TBVW -> TabView
*/

const WithSidebarStyle = css`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: calc(100vh - ${STATUS_BAR_HEIGHT}px);
  grid-template-areas: 'SDBR TBVW';
  max-width: calc(100vw - ${ACTIVITY_BAR_WIDTH}px);
`

const WithoutSidebarStyle = css``

export const Container = styled.div<Pick<ContentProps, 'hasSidebar'>>`
  grid-area: CONT;

  height: 100%;
  max-height: 100%;
  width: 100%;

  ${({ hasSidebar }) => (hasSidebar ? WithSidebarStyle : WithoutSidebarStyle)}
`
