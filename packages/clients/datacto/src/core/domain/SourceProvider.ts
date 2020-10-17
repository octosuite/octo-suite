import { DatabaseData } from './DatabaseData'
import { Query } from './Query'
import { SchemaData } from './SchemaData'
import { TableColumnData } from './TableColumnData'
import { TableData } from './TableData'
import { ViewData } from './ViewData'

export interface SourceProvider {
  testConnection(): Promise<boolean>
  getDatabases(): Promise<DatabaseData[]>
  getSchemas(database: DatabaseData): Promise<SchemaData[]>
  getTables(database: DatabaseData, schema: SchemaData): Promise<TableData[]>
  getTablesColumns(
    database: DatabaseData,
    schema: SchemaData,
    table: TableData
  ): Promise<TableColumnData[]>
  getViews(database: DatabaseData, schema: SchemaData): Promise<ViewData[]>

  executeQuery<Result>(
    query: string,
    schema: SchemaData
  ): Promise<Query<Result>>
}
