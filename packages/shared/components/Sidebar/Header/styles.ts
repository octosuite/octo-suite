import styled from 'styled-components';

export const Wrapper = styled.div`
  grid-area: HEAD;

  display: flex;
  flex-direction: row;
  align-items: center;

  height: 35px;
  padding-left: 20px;
  padding-right: 8px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;

  & > * + * {
    margin-left: 2px;
  }
`;

export const Title = styled.div`
  color: #fff;
  flex: 1;
  font-size: 11px;
  font-weight: 300;
  text-transform: uppercase;
`;
