import styled from 'styled-components'

export const InputBase = styled.input`
  background: #3c3c3c;
  border: 1px solid transparent;
  height: 26px;
  padding: 0 5px;
  font-size: 13px;
  line-height: 15px;
  color: #cccccc;

  &.error {
    border-color: #a31515;
  }

  &.warning {
    border-color: #cca700;
  }

  :focus {
    border-color: #0e639c;
  }

  ::placeholder {
    font-size: 13px;
    line-height: 15px;
    color: #cccccc;
    opacity: 0.4;
  }
`

export const InputLabel = styled.label`
  color: #fff;
  opacity: 0.5;
  font-size: 13px;
  line-height: 15px;
  margin-bottom: 6px;
`

export const LabeledWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
