import styled from 'styled-components';

/*
  ACTB -> ActivityBar
  CONT -> Content
  STTB -> Status Bar
*/

export const Container = styled.div`
  display: grid;
  grid-template-columns: 48px calc(100vw - 48px);
  grid-template-rows: calc(100vh - 22px) 22px;
  grid-template-areas: 
    'ACTB CONT'
    'STTB STTB';
`;
