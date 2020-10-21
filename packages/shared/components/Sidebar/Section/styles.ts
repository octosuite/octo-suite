import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  flex: 1;
  max-height: 100%;

  .actions {
    visibility: hidden;
  }

  :hover {
    .actions {
      visibility: visible;
    }
  }
`

export const Container = styled.div.attrs({
  tabIndex: 0
})`
  border: 1px solid transparent;
  height: 100%;
  max-height: 100%;
  overflow: hidden;

  :focus {
    border-color: #808080;
  }
`
