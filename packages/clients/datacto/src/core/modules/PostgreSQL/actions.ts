import { ipcRenderer, IpcRendererEvent } from 'electron'

import { DatabaseData } from '~/core/domain/DatabaseData'
import { SchemaData } from '~/core/domain/SchemaData'
import { TableColumnData } from '~/core/domain/TableColumnData'
import { TableData } from '~/core/domain/TableData'
import { ViewData } from '~/core/domain/ViewData'

import { PostgreSQLChannels } from './types'

export async function testPostgreSQLConnection(
  connectionString: string
): Promise<boolean> {
  return new Promise<boolean>(resolve => {
    ipcRenderer.once(PostgreSQLChannels.testConnection.success, () => {
      resolve(true)
    })

    ipcRenderer.once(PostgreSQLChannels.testConnection.reject, () => {
      resolve(false)
    })

    ipcRenderer.send(PostgreSQLChannels.testConnection.name, connectionString)
  })
}

export async function getPostgreSQLDatabases(
  connectionString: string
): Promise<DatabaseData[]> {
  return new Promise(resolve => {
    ipcRenderer.once(
      PostgreSQLChannels.getDatabases.response,
      (_: IpcRendererEvent, databases: DatabaseData[]) => {
        resolve(databases)
      }
    )

    ipcRenderer.send(PostgreSQLChannels.getDatabases.name, connectionString)
  })
}

export async function getPostgreSQLSchemas(
  connectionString: string
): Promise<DatabaseData[]> {
  return new Promise(resolve => {
    ipcRenderer.once(
      PostgreSQLChannels.getSchemas.response,
      (_: IpcRendererEvent, databases: SchemaData[]) => {
        resolve(databases)
      }
    )

    ipcRenderer.send(PostgreSQLChannels.getSchemas.name, connectionString)
  })
}

export async function getPostgreSQLTables(
  connectionString: string,
  schema: SchemaData
): Promise<TableData[]> {
  return new Promise(resolve => {
    ipcRenderer.once(
      PostgreSQLChannels.getSchemaTables.response,
      (_: IpcRendererEvent, tables: TableData[]) => {
        resolve(tables)
      }
    )

    ipcRenderer.send(
      PostgreSQLChannels.getSchemaTables.name,
      connectionString,
      schema.name
    )
  })
}

export async function getPostgreSQLColumns(
  connectionString: string,
  schema: SchemaData,
  table: TableData
): Promise<TableColumnData[]> {
  return new Promise(resolve => {
    ipcRenderer.once(
      PostgreSQLChannels.getTableColumns.response,
      (_: IpcRendererEvent, tables: TableColumnData[]) => {
        resolve(tables)
      }
    )

    ipcRenderer.send(
      PostgreSQLChannels.getTableColumns.name,
      connectionString,
      schema.name,
      table.name
    )
  })
}

export async function getPostgreSQLViews(
  connectionString: string,
  schema: SchemaData
): Promise<ViewData[]> {
  return new Promise(resolve => {
    ipcRenderer.once(
      PostgreSQLChannels.getViews.response,
      (_: IpcRendererEvent, tables: ViewData[]) => {
        resolve(tables)
      }
    )

    ipcRenderer.send(
      PostgreSQLChannels.getViews.name,
      connectionString,
      schema.name
    )
  })
}
