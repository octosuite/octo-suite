import styled from 'styled-components'

export const Container = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;

  background: none;
  border: none;
  padding: 0 12px;
  text-align: left;
  height: 100%;

  i,
  svg {
    color: #7494a3;
    fill: #7494a3;
    margin-right: 4px;
    height: 16px;
    width: 16px;
  }

  .close-button > * {
    visibility: hidden;
  }

  &:hover {
    .close-button > * {
      visibility: visible;
    }
  }

  &.active {
    background-color: #1c1e1f;
  }
`

export const CloseButton = styled.div.attrs({
  className: 'close-button'
})`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  width: 20px;
  height: 100%;

  i {
    color: #cccccc;
    fill: #cccccc;
    margin-right: 0px !important;
    transition: all 0.1s;
  }

  :active {
    i,
    svg {
      transform: scale(1.2);
    }
  }
`

export const Label = styled.span`
  color: #ffffff;
  font-size: 13px;
  line-height: 16px;
  opacity: 0.5;

  white-space: nowrap;
  /* overflow: hidden; */
  /* text-overflow: ellipsis; */
`
