import { ipcMain, IpcMainEvent } from 'electron'
import { Client } from 'pg'

import { DatabaseData } from '~/core/domain/DatabaseData'
import { SchemaData } from '~/core/domain/SchemaData'
import { TableColumnData } from '~/core/domain/TableColumnData'
import { TableData } from '~/core/domain/TableData'
import { ViewData } from '~/core/domain/ViewData'

import { PostgreSQLChannels } from './types'

export function registerTestPostgreSQLConnection() {
  ipcMain.on(
    PostgreSQLChannels.testConnection.name,
    async (event: IpcMainEvent, connectionString: string) => {
      const client = new Client({ connectionString })

      try {
        await client.connect()

        event.sender.send(PostgreSQLChannels.testConnection.success)
      } catch (error) {
        event.sender.send(PostgreSQLChannels.testConnection.reject)
      } finally {
        await client.end()
      }
    }
  )
}

export function registerGetPostgreSQLDatabases() {
  ipcMain.on(
    PostgreSQLChannels.getDatabases.name,
    async (event: IpcMainEvent, connectionString: string) => {
      const client = new Client({ connectionString })

      try {
        await client.connect()

        const databases = await client.query<DatabaseData[]>(`
          SELECT datname AS name
          FROM pg_database
          WHERE datistemplate = FALSE
          ORDER BY datname
        `)

        event.sender.send(
          PostgreSQLChannels.getDatabases.response,
          databases.rows
        )
      } catch (error) {
        console.error(error)

        event.sender.send(PostgreSQLChannels.getDatabases.response, [])
      } finally {
        await client.end()
      }
    }
  )
}

export function registerGetPostgreSQLSchemas() {
  ipcMain.on(
    PostgreSQLChannels.getSchemas.name,
    async (event: IpcMainEvent, connectionString: string) => {
      const client = new Client({ connectionString })

      try {
        await client.connect()

        const schemas = await client.query<SchemaData[]>(`
          SELECT schema_name AS name
          FROM information_schema.schemata
          ORDER BY schema_name
        `)

        event.sender.send(PostgreSQLChannels.getSchemas.response, schemas.rows)
      } catch (error) {
        event.sender.send(PostgreSQLChannels.getSchemas.response, [])
      } finally {
        await client.end()
      }
    }
  )
}

export function registerGetPostgreSQLSchemaTables() {
  ipcMain.on(
    PostgreSQLChannels.getSchemaTables.name,
    async (
      event: IpcMainEvent,
      connectionString: string,
      schemaName: string
    ) => {
      const client = new Client({ connectionString })

      try {
        await client.connect()

        const tables = await client.query<TableData[]>(`
          SELECT table_name as name
          FROM information_schema.tables
          WHERE table_type NOT LIKE '%VIEW%'
            AND table_schema = '${schemaName}'
          ORDER BY table_name
        `)

        event.sender.send(
          PostgreSQLChannels.getSchemaTables.response,
          tables.rows
        )
      } catch (error) {
        event.sender.send(PostgreSQLChannels.getSchemaTables.response, [])
      } finally {
        await client.end()
      }
    }
  )
}

export function registerGetPostgreSQLTableColumns() {
  ipcMain.on(
    PostgreSQLChannels.getTableColumns.name,
    async (
      event: IpcMainEvent,
      connectionString: string,
      schemaName: string,
      tableName: string
    ) => {
      const client = new Client({ connectionString })

      try {
        await client.connect()

        const columns = await client.query<TableColumnData[]>(`
          SELECT column_name              AS name,
                 data_type                AS type,
                 udt_name                 AS typeName,
                 character_maximum_length AS length
          FROM information_schema.columns
          WHERE table_schema = '${schemaName}'
            AND table_name = '${tableName}'
          ORDER BY ordinal_position
        `)

        event.sender.send(
          PostgreSQLChannels.getTableColumns.response,
          columns.rows
        )
      } catch (error) {
        event.sender.send(PostgreSQLChannels.getTableColumns.response, [])
      } finally {
        await client.end()
      }
    }
  )
}

export function registerGetPostgreSQLViews() {
  ipcMain.on(
    PostgreSQLChannels.getViews.name,
    async (
      event: IpcMainEvent,
      connectionString: string,
      schemaName: string
    ) => {
      const client = new Client({ connectionString })

      try {
        await client.connect()

        const views = await client.query<ViewData[]>(`
          SELECT table_name as name
          FROM information_schema.views
          WHERE table_schema = '${schemaName}'
          ORDER BY table_schema, table_name
        `)

        event.sender.send(PostgreSQLChannels.getViews.response, views.rows)
      } catch (error) {
        event.sender.send(PostgreSQLChannels.getViews.response, [])
      } finally {
        await client.end()
      }
    }
  )
}
