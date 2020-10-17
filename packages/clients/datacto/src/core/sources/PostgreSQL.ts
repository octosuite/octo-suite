import { DatabaseData } from '~/core/domain/DatabaseData'
import { SchemaData } from '~/core/domain/SchemaData'
import { SourceData } from '~/core/domain/SourceData'
import { SourceProvider } from '~/core/domain/SourceProvider'
import { TableColumnData } from '~/core/domain/TableColumnData'
import { TableData } from '~/core/domain/TableData'
import { ViewData } from '~/core/domain/ViewData'
import {
  testPostgreSQLConnection,
  getPostgreSQLDatabases,
  getPostgreSQLSchemas,
  getPostgreSQLTables,
  getPostgreSQLColumns,
  getPostgreSQLViews
} from '~/core/modules/PostgreSQL/actions'

export class PostgreSQLSource implements SourceProvider {
  constructor(private data: SourceData) {}

  async testConnection(): Promise<boolean> {
    return testPostgreSQLConnection(this.data.connectionURL)
  }

  async getDatabases(): Promise<DatabaseData[]> {
    return getPostgreSQLDatabases(this.data.connectionURL)
  }

  async getSchemas(): Promise<SchemaData[]> {
    return getPostgreSQLSchemas(this.data.connectionURL)
  }

  async getTables(schema: SchemaData): Promise<TableData[]> {
    return getPostgreSQLTables(this.data.connectionURL, schema)
  }

  async getTablesColumns(
    schema: SchemaData,
    table: TableData
  ): Promise<TableColumnData[]> {
    return getPostgreSQLColumns(this.data.connectionURL, schema, table)
  }

  async getViews(schema: SchemaData): Promise<ViewData[]> {
    return getPostgreSQLViews(this.data.connectionURL, schema)
  }
}
