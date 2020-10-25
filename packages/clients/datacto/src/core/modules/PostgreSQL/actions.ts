import { ipcRenderer, IpcRendererEvent } from 'electron'

import { IDatabaseData } from '~/core/domain/DatabaseData'
import { ISchemaData } from '~/core/domain/SchemaData'
import { ITableColumnData } from '~/core/domain/TableColumnData'
import { ITableData } from '~/core/domain/TableData'
import { IViewData } from '~/core/domain/ViewData'

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
): Promise<IDatabaseData[]> {
  return new Promise(resolve => {
    ipcRenderer.once(
      PostgreSQLChannels.getDatabases.response,
      (_: IpcRendererEvent, databases: IDatabaseData[]) => {
        resolve(databases)
      }
    )

    ipcRenderer.send(PostgreSQLChannels.getDatabases.name, connectionString)
  })
}

export async function getPostgreSQLSchemas(
  connectionString: string
): Promise<IDatabaseData[]> {
  return new Promise(resolve => {
    ipcRenderer.once(
      PostgreSQLChannels.getSchemas.response,
      (_: IpcRendererEvent, databases: ISchemaData[]) => {
        resolve(databases)
      }
    )

    ipcRenderer.send(PostgreSQLChannels.getSchemas.name, connectionString)
  })
}

export async function getPostgreSQLTables(
  connectionString: string,
  schema: ISchemaData
): Promise<ITableData[]> {
  return new Promise(resolve => {
    ipcRenderer.once(
      PostgreSQLChannels.getSchemaTables.response,
      (_: IpcRendererEvent, tables: ITableData[]) => {
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
  schema: ISchemaData,
  table: ITableData
): Promise<ITableColumnData[]> {
  return new Promise(resolve => {
    ipcRenderer.once(
      PostgreSQLChannels.getTableColumns.response,
      (_: IpcRendererEvent, tables: ITableColumnData[]) => {
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
  schema: ISchemaData
): Promise<IViewData[]> {
  return new Promise(resolve => {
    ipcRenderer.once(
      PostgreSQLChannels.getViews.response,
      (_: IpcRendererEvent, tables: IViewData[]) => {
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
