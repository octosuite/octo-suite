import { DatabaseData } from './DatabaseData'
import { SchemaData } from './SchemaData'
import { TableColumnData } from './TableColumnData'
import { TableData } from './TableData'
import { ViewData } from './ViewData'

export interface SourceProvider {
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

  // executeQuery<Result>(
  //   query: string,
  //   schema: SchemaData
  // ): Promise<Query<Result>>
}
