import styled from 'styled-components';

export const Wrapper = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;

  background-color: rgba(128, 128, 128, 0.2);
  border: 1px solid transparent;
  color: #ccc;
  height: 22px;

  .actions {
    visibility: hidden;
  }

  & > svg {
    margin-left: 1px;
    margin-right: 2px;
    height: 16px;
    width: 16px;
  }

  :focus {
    border-color: #808080;
  }

  :hover {
    & > .actions {
      visibility: visible;
    }
  }
`;

export const Container = styled.div.attrs({
  className: 'actions'
})`
  display: flex;
  flex-direction: row;
`

export const Title = styled.strong`
  flex: 1;
  font-size: 11px;
  line-height: 13px;
  text-align: left;
  text-transform: uppercase;
`