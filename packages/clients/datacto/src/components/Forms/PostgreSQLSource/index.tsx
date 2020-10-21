import React, { useState, useEffect, useCallback } from 'react'

import { HostType, ConnectionString } from 'connection-string'

import { TextInput, Button } from '@shared/components'

import { createPostgreSQLSource } from '~/core/sources/PostgreSQL'
import { closeCurrentWindow } from '~/utils/close-current-window'

import { defaultData } from './data'
import {
  Container,
  HostContainer,
  CredentialsContainer,
  ActionsContainer,
  FillSpace,
  Observation
} from './styles'
import { TestConnectionResult } from './TestConnectionResult'
import { PostgreSQLSourceFormProps } from './types'

const PostgreSQLSourceForm: React.VFC<PostgreSQLSourceFormProps> = ({
  data = defaultData
}) => {
  const [name, setName] = useState(data.name)
  const [host, setHost] = useState(data.host)
  const [port, setPort] = useState(data.port)
  const [user, setUser] = useState(data.user)
  const [pass, setPass] = useState(data.pass)
  const [database, setDatabase] = useState(data.database)
  const [connectionURL, setConnectionURL] = useState(data.connectionURL)

  const [hasNameError, setHasNameError] = useState(false)
  const [isTestingConnection, setTestingConnection] = useState(false)
  const [testConnectionResult, setTestConnectionResult] = useState<
    boolean | undefined
  >(undefined)

  const handleTestConnection = useCallback(async () => {
    const source = createPostgreSQLSource({ connectionURL, name })

    setTestingConnection(true)
    setTestConnectionResult(undefined)

    const result = await source.testConnection()

    setTestConnectionResult(result)

    setTestingConnection(false)
  }, [connectionURL, name])

  const handleSaveConnection = useCallback(async () => {
    // TODO: const source = createPostgreSQLSource({ connectionURL, name })

    try {
      // await saveSource(source.getData())
      closeCurrentWindow()
    } catch (error) {
      console.error(error)

      setHasNameError(true)
    }
  }, [connectionURL, name])

  useEffect(() => {
    const connection = new ConnectionString(connectionURL)

    setHost(connection.hostname)
    setPort(`${connection.port || ''}`)
    setUser(connection.user)
    setPass(connection.password)
    setDatabase((connection.path && connection.path[0]) || '')
  }, [connectionURL])

  useEffect(() => {
    const connection = new ConnectionString()
    connection.protocol = 'postgres'

    connection.hosts = [
      { name: host, port: parseInt(port), type: HostType.domain }
    ]
    connection.user = user
    connection.password = pass
    connection.path = [database || '']

    setConnectionURL(connection.toString())
  }, [host, port, user, pass, database])

  return (
    <Container>
      <TextInput
        label="Source Name"
        value={name}
        hasError={hasNameError}
        onChange={e => setName(e.target.value)}
        onFocus={() => setHasNameError(false)}
      />

      <HostContainer>
        <TextInput
          autoFocus
          label="Host"
          value={host}
          onChange={e => setHost(e.target.value)}
        />

        <TextInput
          label="Port"
          value={port}
          onChange={e => setPort(e.target.value)}
        />
      </HostContainer>

      <CredentialsContainer>
        <TextInput
          label="Username"
          value={user}
          onChange={e => setUser(e.target.value)}
        />

        <TextInput
          label="Password"
          value={pass}
          onChange={e => setPass(e.target.value)}
        />
      </CredentialsContainer>

      <TextInput
        label="Database"
        value={database}
        onChange={e => setDatabase(e.target.value)}
      />

      <TextInput
        label="Connection URL"
        value={connectionURL}
        onChange={e => setConnectionURL(e.target.value)}
      />

      <Observation>
        * The password and remaining data has gonna saved as plain text
      </Observation>

      <FillSpace />

      {testConnectionResult !== undefined && (
        <TestConnectionResult success={testConnectionResult} />
      )}

      <ActionsContainer>
        <Button
          secondary
          onClick={handleTestConnection}
          loading={isTestingConnection}
        >
          Test Connection
        </Button>

        <FillSpace />

        <Button onClick={closeCurrentWindow} secondary>
          Cancel
        </Button>

        <Button onClick={handleSaveConnection}>Create Source</Button>
      </ActionsContainer>
    </Container>
  )
}

export { PostgreSQLSourceForm }
