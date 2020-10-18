import styled from 'styled-components'

import { ACTIVITY_BAR_WIDTH } from '../ActivityBar'
import { STATUS_BAR_HEIGHT } from '../StatusBar'

/*
  ACTB -> ActivityBar
  CONT -> Content
  STTB -> Status Bar
*/

export const Container = styled.div`
  display: grid;
  grid-template-columns: ${ACTIVITY_BAR_WIDTH}px calc(
      100vw - ${ACTIVITY_BAR_WIDTH}px
    );
  grid-template-rows: calc(100vh - ${STATUS_BAR_HEIGHT}px) ${STATUS_BAR_HEIGHT}px;
  grid-template-areas:
    'ACTB CONT'
    'STTB STTB';
`
