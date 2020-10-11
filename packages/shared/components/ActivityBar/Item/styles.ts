import styled, { css } from 'styled-components';

interface WrapperProps {
  isActive: boolean
}

export const Wrapper = styled.div<WrapperProps>`
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  border-left: 2px solid transparent;
  border-right: 2px solid transparent;

  color: rgba(255, 255, 255, 0.4);
  height: 48px;
  width: 48px;

  svg {
    height: 24px;
    width: 24px;  
  }

  ${({ isActive }) => isActive && css`
    border-left-color: #fff;
    color: rgba(255, 255, 255, 1);
  `}

  :focus {
    border-left-color: #0E639C;
    color: rgba(255, 255, 255, 1);
  }

  :hover {
    color: rgba(255, 255, 255, 1);
  }
`;
