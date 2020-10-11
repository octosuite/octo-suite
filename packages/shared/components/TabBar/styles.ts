import styled from 'styled-components';

export const Wrapper = styled.div`
  grid-area: TBBR;

  display: flex;
  flex-direction: row;
  
  background: #252526;
  border-bottom: 1px solid #1c1e1f;

  & > * {
    border-right: 1px solid #1c1e1f;
  }
`;
