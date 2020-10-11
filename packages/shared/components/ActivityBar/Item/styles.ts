import styled, { css } from 'styled-components';

interface WrapperProps {
  isActive: boolean
  hideIndicator?: boolean
}

export const Wrapper = styled.button<WrapperProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  background: none;
  border: none;

  border-left: 1px solid transparent;
  border-right: 1px solid transparent;

  color: rgba(255, 255, 255, 0.4);
  height: 48px;
  width: 48px;

  svg {
    height: 24px;
    width: 24px;  
  }

  ${({ isActive, hideIndicator }) => isActive && css`
    border-left-color: ${hideIndicator ? 'transparent' : '#fff'} !important;
    color: rgba(255, 255, 255, 1);
  `}

  ${({ hideIndicator }) => css`
    :focus {
      border-left-color: ${hideIndicator ? 'transparent' : '#0E639C'};
      color: rgba(255, 255, 255, 1);
    }
  `}

  :hover {
    color: rgba(255, 255, 255, 1);
  }
`;
