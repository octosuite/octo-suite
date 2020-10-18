import styled from 'styled-components'

export const Container = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;

  background: none;
  border: none;
  padding: 0 12px;
  text-align: left;
  width: 128px;

  svg {
    margin-right: 4px;
    height: 16px;
    width: 16px;
  }
`

export const Label = styled.span`
  color: #ffffff;
  font-size: 13px;
  line-height: 15px;
  opacity: 0.5;
`
