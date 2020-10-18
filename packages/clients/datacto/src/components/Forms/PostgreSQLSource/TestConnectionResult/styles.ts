import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  background-color: #292929;
  padding: 6px 8px;
`

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  &.success {
    color: #40c8ae;
  }

  &.failure {
    color: #c74e39;
  }
`

export const Message = styled.span`
  color: #cccccc;
  font-size: 13px;
  line-height: 16px;
  margin-left: 8px;
`
