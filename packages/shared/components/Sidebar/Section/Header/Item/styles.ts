import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background: none;
  border: 1px solid transparent;

  height: 20px;
  width: 28px;

  i,
  svg {
    color: #ccc;
    height: 16px;
    width: 16px;
    transition: all 0.1s;
  }

  :active {
    i,
    svg {
      transform: scale(1.2);
    }
  }
`
