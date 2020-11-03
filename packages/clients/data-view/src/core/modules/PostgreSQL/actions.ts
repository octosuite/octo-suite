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
    const SUCCESS_CHANNEL = PostgreSQLChannels.testConnection.success
    const REJECT_CHANNEL = PostgreSQLChannels.testConnection.reject

    const removeListeners = () => {
      ipcRenderer.removeListener(REJECT_CHANNEL, handleReject)
      ipcRenderer.removeListener(SUCCESS_CHANNEL, handleSuccess)
    }

    const handleSuccess = () => {
      resolve(true)
      removeListeners()
    }

    const handleReject = () => {
      resolve(false)
      removeListeners()
    }

    ipcRenderer.once(SUCCESS_CHANNEL, handleSuccess)
    ipcRenderer.once(REJECT_CHANNEL, handleReject)

    ipcRenderer.send(PostgreSQLChannels.testConnection.name, connectionString)
  })
}

export async function getPostgreSQLDatabases(
  connectionString: string
): Promise<IDatabaseData[]> {
  return new Promise((resolve, reject) => {
    const SUCCESS_CHANNEL = PostgreSQLChannels.getDatabases.success
    const REJECT_CHANNEL = PostgreSQLChannels.getDatabases.reject

    const removeListeners = () => {
      ipcRenderer.removeListener(SUCCESS_CHANNEL, handleSuccess)
      ipcRenderer.removeListener(REJECT_CHANNEL, handleReject)
    }

    const handleSuccess = (_: IpcRendererEvent, databases: IDatabaseData[]) => {
      resolve(databases)
      removeListeners()
    }

    const handleReject = (_: IpcRendererEvent, error: any) => {
      reject(error)
      removeListeners()
    }

    ipcRenderer.once(SUCCESS_CHANNEL, handleSuccess)
    ipcRenderer.once(REJECT_CHANNEL, handleReject)

    ipcRenderer.send(PostgreSQLChannels.getDatabases.name, connectionString)
  })
}

export async function getPostgreSQLSchemas(
  connectionString: string
): Promise<IDatabaseData[]> {
  return new Promise((resolve, reject) => {
    const SUCCESS_CHANNEL = PostgreSQLChannels.getSchemas.success
    const REJECT_CHANNEL = PostgreSQLChannels.getSchemas.reject

    const removeListeners = () => {
      ipcRenderer.removeListener(SUCCESS_CHANNEL, handleSuccess)
      ipcRenderer.removeListener(REJECT_CHANNEL, handleReject)
    }

    const handleSuccess = (_: IpcRendererEvent, databases: ISchemaData[]) => {
      resolve(databases)
      removeListeners()
    }

    const handleReject = (_: IpcRendererEvent, error: any) => {
      reject(error)
      removeListeners()
    }

    ipcRenderer.once(SUCCESS_CHANNEL, handleSuccess)
    ipcRenderer.once(REJECT_CHANNEL, handleReject)

    ipcRenderer.send(PostgreSQLChannels.getSchemas.name, connectionString)
  })
}

export async function getPostgreSQLTables(
  connectionString: string,
  schema: ISchemaData
): Promise<ITableData[]> {
  return new Promise((resolve, reject) => {
    const SUCCESS_CHANNEL = PostgreSQLChannels.getSchemaTables.success
    const REJECT_CHANNEL = PostgreSQLChannels.getSchemaTables.reject

    const removeListeners = () => {
      ipcRenderer.removeListener(SUCCESS_CHANNEL, handleSuccess)
      ipcRenderer.removeListener(REJECT_CHANNEL, handleReject)
    }

    const handleSuccess = (_: IpcRendererEvent, tables: ITableData[]) => {
      resolve(tables)
      removeListeners()
    }

    const handleReject = (_: IpcRendererEvent, error: any) => {
      reject(error)
      removeListeners()
    }

    ipcRenderer.once(SUCCESS_CHANNEL, handleSuccess)
    ipcRenderer.once(REJECT_CHANNEL, handleReject)

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
  return new Promise((resolve, reject) => {
    const SUCCESS_CHANNEL = PostgreSQLChannels.getTableColumns.success
    const REJECT_CHANNEL = PostgreSQLChannels.getTableColumns.reject

    const removeListeners = () => {
      ipcRenderer.removeListener(SUCCESS_CHANNEL, handleSuccess)
      ipcRenderer.removeListener(REJECT_CHANNEL, handleReject)
    }

    const handleSuccess = (
      _: IpcRendererEvent,
      columns: ITableColumnData[]
    ) => {
      resolve(columns)
      removeListeners()
    }

    const handleReject = (_: IpcRendererEvent, error: any) => {
      reject(error)
      removeListeners()
    }

    ipcRenderer.once(SUCCESS_CHANNEL, handleSuccess)
    ipcRenderer.once(REJECT_CHANNEL, handleReject)

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
  return new Promise((resolve, reject) => {
    const SUCCESS_CHANNEL = PostgreSQLChannels.getViews.success
    const REJECT_CHANNEL = PostgreSQLChannels.getViews.reject

    const removeListeners = () => {
      ipcRenderer.removeListener(SUCCESS_CHANNEL, handleSuccess)
      ipcRenderer.removeListener(REJECT_CHANNEL, handleReject)
    }

    const handleSuccess = (_: IpcRendererEvent, views: IViewData[]) => {
      resolve(views)
      removeListeners()
    }

    const handleReject = (_: IpcRendererEvent, error: any) => {
      reject(error)
      removeListeners()
    }

    ipcRenderer.once(SUCCESS_CHANNEL, handleSuccess)
    ipcRenderer.once(REJECT_CHANNEL, handleReject)

    ipcRenderer.send(
      PostgreSQLChannels.getViews.name,
      connectionString,
      schema.name
    )
  })
}
