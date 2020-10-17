/* eslint-disable @typescript-eslint/no-unused-vars */
import { DatabaseData } from '~/core/domain/DatabaseData'
import { Query } from '~/core/domain/Query'
import { SchemaData } from '~/core/domain/SchemaData'
import { SourceData } from '~/core/domain/SourceData'
import { SourceProvider } from '~/core/domain/SourceProvider'
import { TableColumnData } from '~/core/domain/TableColumnData'
import { TableData } from '~/core/domain/TableData'
import { ViewData } from '~/core/domain/ViewData'
import {
  testPostgreSQLConnection,
  getPostgreSQLDatabases
} from '~/core/modules/PostgreSQL/actions'

export class PostgreSQLSource implements SourceProvider {
  constructor(private data: SourceData) {}

  async testConnection(): Promise<boolean> {
    return testPostgreSQLConnection(this.data.connectionURL)
  }

  async getDatabases(): Promise<DatabaseData[]> {
    return getPostgreSQLDatabases(this.data.connectionURL)
  }

  getSchemas(database: DatabaseData): Promise<SchemaData[]> {
    throw new Error('Method not implemented.')
  }

  getTables(database: DatabaseData, schema: SchemaData): Promise<TableData[]> {
    throw new Error('Method not implemented.')
  }

  getTablesColumns(
    database: DatabaseData,
    schema: SchemaData,
    table: TableData
  ): Promise<TableColumnData[]> {
    throw new Error('Method not implemented.')
  }

  getViews(database: DatabaseData, schema: SchemaData): Promise<ViewData[]> {
    throw new Error('Method not implemented.')
  }

  executeQuery<Result>(
    query: string,
    schema: SchemaData
  ): Promise<Query<Result>> {
    throw new Error('Method not implemented.')
  }
}
