import styled from 'styled-components'

import { STATUS_BAR_HEIGHT } from '../StatusBar'

export const Wrapper = styled.div`
  grid-area: TBVW;

  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 35px calc(100vh - 35px - ${STATUS_BAR_HEIGHT}px);
  grid-template-areas:
    'TVH'
    '.';
`
