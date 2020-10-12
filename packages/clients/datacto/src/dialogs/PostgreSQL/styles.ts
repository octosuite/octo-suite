import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding: 16px;

  & > * + * {
    margin-top: 12px;
  }
`;

export const HostContainer = styled.div`
  display: flex;

  & > * {
    flex: 1;
  }

  & > * + * {
    margin-left: 12px;
    width: 80px;
    flex: 0;
  }
`

export const CredentialsContainer = styled.div`
  display: flex;

  & > * {
    flex: 1;
  }

  & > * + * {
    margin-left: 12px;
  }
`

export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-left: -2px;
  margin-right: -2px;

  & > * + * {
    margin-left: 8px;
  }
`;

export const Flex = styled.div`
  flex: 1;
`