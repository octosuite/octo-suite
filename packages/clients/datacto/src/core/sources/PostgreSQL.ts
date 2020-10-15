import { testPostgreSQLConnection } from '~/core/modules/PostgreSQL/action'

import { SourceProvider } from '~/core/domain/SourceProvider'
import { DatabaseData } from '~/core/domain/DatabaseData';
import { Query } from '~/core/domain/Query';
import { SchemaData } from '~/core/domain/SchemaData';
import { TableColumnData } from '~/core/domain/TableColumnData';
import { TableData } from '~/core/domain/TableData';
import { ViewData } from '~/core/domain/ViewData';

export class PostgreSQLSource implements SourceProvider {
  async testConnection(connectionURL: string): Promise<boolean> {
    return testPostgreSQLConnection(connectionURL)
  }

  disconnect(): Promise<void> {
    throw new Error('Method not implemented.');
  }
  
  getDatabases(): Promise<DatabaseData[]> {
    throw new Error('Method not implemented.');
  }
  
  getSchemas(database: DatabaseData): Promise<SchemaData[]> {
    throw new Error('Method not implemented.');
  }
  
  getTables(database: DatabaseData, schema: SchemaData): Promise<TableData[]> {
    throw new Error('Method not implemented.');
  }
  
  getTablesColumns(database: DatabaseData, schema: SchemaData, table: TableData): Promise<TableColumnData[]> {
    throw new Error('Method not implemented.');
  }
  
  getViews(database: DatabaseData, schema: SchemaData): Promise<ViewData[]> {
    throw new Error('Method not implemented.');
  }
  
  executeQuery<Result>(query: string, schema: SchemaData): Promise<Query<Result>> {
    throw new Error('Method not implemented.');
  }
}