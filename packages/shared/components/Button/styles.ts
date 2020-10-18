import styled, { css } from 'styled-components'

interface Props {
  secondary?: boolean
}

const PrimaryStyle = css`
  & > div {
    background: rgba(14, 99, 156, 0.8);
  }

  :hover {
    & > div {
      background: #0e639c;
    }
  }

  :focus {
    & > div {
      background: #0e639c;
    }

    border-color: #0e639c;
  }
`

const SecondaryStyle = css`
  & > div {
    background: rgba(58, 61, 65, 0.8);
  }

  :hover {
    & > div {
      background: #3a3d41;
    }
  }

  :focus {
    & > div {
      background: #3a3d41;
    }

    border-color: #0e639c;
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

  ${({ secondary }) => (secondary ? SecondaryStyle : PrimaryStyle)}
`

interface LabelProps {
  loading?: boolean
}

export const Label = styled.div<LabelProps>`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  color: #fff;
  fill: #fff;
  font-size: 13px;
  line-height: 15px;
  padding: 0 11px;
  height: 100%;

  svg {
    position: absolute;
  }

  ${({ loading }) =>
    loading &&
    css`
      span {
        opacity: 0;
      }
    `}
`
