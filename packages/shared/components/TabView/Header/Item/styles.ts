import styled from 'styled-components'

export const Container = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;

  background: none;
  border: none;
  padding: 0 12px;
  text-align: left;

  i,
  svg {
    color: #7494a3;
    fill: #7494a3;
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

  white-space: nowrap;
  /* overflow: hidden; */
  /* text-overflow: ellipsis; */
`
