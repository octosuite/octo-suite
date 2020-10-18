import styled from 'styled-components'

interface WrapperProps {
  level: number
}

export const Wrapper = styled.button<WrapperProps>`
  display: flex;
  flex-direction: row;
  align-items: center;

  width: 100%;
  background-color: transparent;
  border: 1px solid transparent;
  color: #ccc;
  height: 24px;
  padding-left: ${({ level }) => 21 + 15 * level}px;

  i,
  svg {
    margin-right: 4px;
  }

  :hover {
    background-color: #292929;
  }

  :focus {
    background-color: #062f4a;
  }
`

export const Container = styled.div.attrs({
  className: 'actions'
})`
  display: flex;
  flex-direction: row;
  align-items: center;

  height: 22px;
`

export const Title = styled.span`
  flex: 1;
  font-size: 13px;
  line-height: 16px;
  text-align: left;
`
