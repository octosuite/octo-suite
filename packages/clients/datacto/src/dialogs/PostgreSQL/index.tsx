import React, { useState, useMemo, useEffect, useCallback } from 'react';
import { HostType, ConnectionString } from 'connection-string'

import { PostgreSQLSource } from '~/core/sources/PostgreSQL'

import { TextInput, Button } from '@shared/components'

import { Container, HostContainer, CredentialsContainer, ActionsContainer, Flex, Observation } from './styles';

const PostgreSQLDialog: React.FC = () => {
  const [name, setName] = useState('New PostgreSQL Source')
  const [host, setHost] = useState('localhost')
  const [port, setPort] = useState('5432')
  const [user, setUser] = useState('postgres')
  const [pass, setPass] = useState('root')
  const [database, setDatabase] = useState('postgres')
  const [connectionURL, setConnectionURL] = useState('postgres://postgres:root@localhost:5432/postgres')

  const handleTestConnection = useCallback(async () => {
    const source = new PostgreSQLSource()

    setName(await source.testConnection(connectionURL) ? 'success' : 'failure')
  }, [connectionURL])

  useEffect(() => {
    const connection = new ConnectionString(connectionURL)

    setHost(connection.hostname)
    setPort(`${connection.port || ''}`)
    setUser(connection.user)
    setPass(connection.password)
    setDatabase(connection.path && connection.path[0] || '')
  }, [connectionURL])
  
  useEffect(() => {
    const connection = new ConnectionString()
    connection.protocol = 'postgres'

    connection.hosts = [{ name: host, port: parseInt(port), type: HostType.domain  }]
    connection.user = user
    connection.password = pass
    connection.path = [database || '']

    setConnectionURL(connection.toString())
  }, [host, port, user, pass, database])

  return (
    <Container>
      <TextInput label="Source Name" value={name} onChange={e => setName(e.target.value)} />
      
      <HostContainer>
        <TextInput label="Host" value={host} onChange={e => setHost(e.target.value)} autoFocus />

        <TextInput label="Port" value={port} onChange={e => setPort(e.target.value)} />
      </HostContainer>

      <CredentialsContainer>
        <TextInput label="Username" value={user} onChange={e => setUser(e.target.value)}  />

        <TextInput label="Password" value={pass} onChange={e => setPass(e.target.value)} />
      </CredentialsContainer>
      
      <TextInput label="Database" value={database} onChange={e => setDatabase(e.target.value)}  />

      <TextInput label="Connection URL" value={connectionURL} onChange={e => setConnectionURL(e.target.value)} />

      <Observation>* The password and remaining data has gonna saved as plain text</Observation>

      <Flex />

      <ActionsContainer>
        <Button onClick={handleTestConnection} secondary>Test Connection</Button>
        
        <Flex />

        <Button secondary>Cancel</Button>
        <Button>Create Source</Button>
      </ActionsContainer>
    </Container>
  );
}

export { PostgreSQLDialog };