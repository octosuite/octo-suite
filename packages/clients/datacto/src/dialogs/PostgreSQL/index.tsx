import React from 'react';

import { TextInput, Button } from '@shared/components'

import { Container, HostContainer, CredentialsContainer, ActionsContainer, Flex } from './styles';

const PostgreSQLDialog: React.FC = () => {
  return (
    <Container>
      <TextInput label="Source Name" defaultValue="New PostgreSQL Source" />
      
      <HostContainer>
        <TextInput label="Host" defaultValue="localhost" autoFocus />
        <TextInput label="Port" defaultValue="5432" />
      </HostContainer>

      <CredentialsContainer>
        <TextInput label="Username" defaultValue="postgres" />
        <TextInput label="Password" />
      </CredentialsContainer>
      
      <TextInput label="Connection URL" defaultValue="postgresql://localhost:5432/postgres" />

      <ActionsContainer>
        <Button secondary>Test Connection</Button>
        
        <Flex />

        <Button secondary>Cancel</Button>
        <Button>Create Source</Button>
      </ActionsContainer>
    </Container>
  );
}

export { PostgreSQLDialog };