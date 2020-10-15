import { DatabaseData } from "./DatabaseData";
import { Query } from "./Query";
import { SchemaData } from "./SchemaData";
import { TableData } from "./TableData";
import { TableColumnData } from "./TableColumnData";
import { ViewData } from "./ViewData";

export interface SourceProvider {
  testConnection(connectionURL: string): Promise<boolean>
  disconnect(): Promise<void>
  getDatabases(): Promise<DatabaseData[]>
  getSchemas(database: DatabaseData): Promise<SchemaData[]>
  getTables(database: DatabaseData, schema: SchemaData): Promise<TableData[]>
  getTablesColumns(database: DatabaseData, schema: SchemaData, table: TableData): Promise<TableColumnData[]>
  getViews(database: DatabaseData, schema: SchemaData): Promise<ViewData[]>

  executeQuery<Result>(query: string, schema: SchemaData): Promise<Query<Result>>
}

// SOURCES