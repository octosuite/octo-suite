import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background: none;
  border: 1px solid transparent;

  height: 22px;
  width: 28px;

  svg {
    color: #ccc;
    height: 16px;
    width: 16px;
    transition: all 0.2s;
  }

  :active {
    svg {
      height: 20px;
      width: 20px;
    }
  }
`;
