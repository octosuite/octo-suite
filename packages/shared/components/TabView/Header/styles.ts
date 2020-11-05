import ScrollBar from 'react-perfect-scrollbar'

import styled from 'styled-components'

interface WrapperProps {
  hasItems?: boolean
}

export const Wrapper = styled(ScrollBar)<WrapperProps>`
  grid-area: TVH;

  display: ${props => (props.hasItems ? 'flex' : 'none')};
  flex-direction: row;

  background: #252526;
  border-bottom: 1px solid #1c1e1f;

  & > * {
    border-right: 1px solid #1c1e1f;
  }
`
