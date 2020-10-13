import styled from 'styled-components';

import { STATUS_BAR_HEIGHT } from '../StatusBar'

/*
  HEAD -> SideBar
  CONT -> Content
*/

export const Wrapper = styled.div`
  grid-area: SDBR;

  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 35px calc(100vh - 35px - ${STATUS_BAR_HEIGHT}px);
  grid-template-areas: 
    'HEAD'
    'CONT';

  background: #252526;
  width: 300px;
`;

export const Container = styled.div`
  grid-area: CONT;

  display: flex;
  flex-direction: column;
`;
