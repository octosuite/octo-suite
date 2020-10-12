import styled, { css } from 'styled-components';

interface Props {
  secondary?: boolean
}

const PrimaryStyle = css`
  & > div {
    background: rgba(14, 99, 156, 0.8);
  }
  
  :hover {
    & > div {
      background: #0E639C;
    }
  }

  :focus {
    & > div {
      background: #0E639C;
    }

    border-color: #0E639C;
  }
`

const SecondaryStyle = css`
  & > div {
    background: rgba(58, 61, 65, 0.8);
  }

  :hover {
    & > div {
      background: #3A3D41;
    }
  }

  :focus {
    & > div {
      background: #3A3D41;
    }

    border-color: #0E639C;
  }
`

export const Container = styled.button<Props>`
  background: none;
  border: 1px solid transparent;
  height: 30px;
  padding: 1px;

  :disabled {
    opacity: 0.4;
  }

  ${({ secondary }) => secondary ? SecondaryStyle : PrimaryStyle}
`;

export const Label = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;

  color: #fff;
  font-size: 13px;
  line-height: 15px;
  padding: 0 11px;
  height: 100%;
`;