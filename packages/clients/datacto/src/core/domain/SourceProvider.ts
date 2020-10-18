import { DatabaseData } from './DatabaseData'
import { SchemaData } from './SchemaData'
import { SourceData } from './SourceData'
import { TableColumnData } from './TableColumnData'
import { TableData } from './TableData'
import { ViewData } from './ViewData'

interface BaseSourceProvider {
  getData(): SourceData
  testConnection(): Promise<boolean>
  getDatabases(): Promise<DatabaseData[]>
  getSchemas(): Promise<SchemaData[]>
  getTables(schema: SchemaData): Promise<TableData[]>
  getTablesColumns(
    database: DatabaseData,
    schema: SchemaData,
    table: TableData
  ): Promise<TableColumnData[]>
  getViews(database: DatabaseData, schema: SchemaData): Promise<ViewData[]>
}

export enum SourceProviderList {
  POSTGRESQL = 'SourceProviderList.POSTGRESQL'
}

export interface PostgreSQLSourceProvider extends BaseSourceProvider {
  readonly type: typeof SourceProviderList.POSTGRESQL
}

export type SourceProvider = PostgreSQLSourceProvider
