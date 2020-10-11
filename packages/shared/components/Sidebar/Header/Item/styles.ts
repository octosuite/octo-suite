import styled from 'styled-components';

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  background: none;
  border: 1px solid transparent;

  color: #fff;
  height: 35px;
  width: 28px;

  svg {
    height: 16px;
    width: 16px;
  }

  :focus {
    border-color: #0E639C;
  }

  :disabled {
    cursor: default;
    color: #999;
  }
`;
