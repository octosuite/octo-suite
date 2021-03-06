import { ipcMain, IpcMainEvent } from 'electron'
import { Client } from 'pg'

import { IDatabaseData } from '~/core/domain/DatabaseData'
import { ISchemaData } from '~/core/domain/SchemaData'
import { ITableColumnData } from '~/core/domain/TableColumnData'
import { ITableData } from '~/core/domain/TableData'
import { IViewData } from '~/core/domain/ViewData'

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

        const databases = await client.query<IDatabaseData[]>(`
          SELECT datname AS name
          FROM pg_database
          WHERE datistemplate = FALSE
          ORDER BY datname
        `)

        event.sender.send(
          PostgreSQLChannels.getDatabases.success,
          databases.rows
        )
      } catch (error) {
        event.sender.send(PostgreSQLChannels.getDatabases.reject, error)
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

        const schemas = await client.query<ISchemaData[]>(`
          SELECT schema_name AS name
          FROM information_schema.schemata
          WHERE schema_name NOT LIKE '%pg_toast%' AND schema_name NOT LIKE '%pg%_temp_%'
          ORDER BY schema_name
        `)

        event.sender.send(PostgreSQLChannels.getSchemas.success, schemas.rows)
      } catch (error) {
        event.sender.send(PostgreSQLChannels.getSchemas.reject, error)
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

        const tables = await client.query<ITableData[]>(`
          SELECT table_name as name
          FROM information_schema.tables
          WHERE table_type NOT LIKE '%VIEW%'
            AND table_schema = '${schemaName}'
          ORDER BY table_name
        `)

        event.sender.send(
          PostgreSQLChannels.getSchemaTables.success,
          tables.rows
        )
      } catch (error) {
        event.sender.send(PostgreSQLChannels.getSchemaTables.reject, error)
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

        const columns = await client.query<ITableColumnData[]>(`
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
          PostgreSQLChannels.getTableColumns.success,
          columns.rows
        )
      } catch (error) {
        event.sender.send(PostgreSQLChannels.getTableColumns.reject, error)
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

        const views = await client.query<IViewData[]>(`
          SELECT table_name as name
          FROM information_schema.views
          WHERE table_schema = '${schemaName}'
          ORDER BY table_schema, table_name
        `)

        event.sender.send(PostgreSQLChannels.getViews.success, views.rows)
      } catch (error) {
        event.sender.send(PostgreSQLChannels.getViews.reject, error)
      } finally {
        await client.end()
      }
    }
  )
}
