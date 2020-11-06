import ScrollBarComponent from 'react-perfect-scrollbar'

import styled from 'styled-components'

export const Wrapper = styled.div`
  grid-area: TVH;

  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 1fr auto;
  grid-template-areas: 'TABS ACTIONS';

  background: #252526;
  border-bottom: 1px solid #1c1e1f;
`

export const ScrollBar = styled(ScrollBarComponent)`
  grid-area: TABS;
`

export const Container = styled.div`
  display: flex;
  flex-direction: row;

  height: 100%;

  & > * {
    border-right: 1px solid #1c1e1f;
  }
`
