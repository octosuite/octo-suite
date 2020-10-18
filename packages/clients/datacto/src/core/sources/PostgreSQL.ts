import { SchemaData } from '~/core/domain/SchemaData'
import { SourceData } from '~/core/domain/SourceData'
import {
  PostgreSQLSourceProvider,
  SourceProviderList
} from '~/core/domain/SourceProvider'
import { TableData } from '~/core/domain/TableData'
import {
  testPostgreSQLConnection,
  getPostgreSQLDatabases,
  getPostgreSQLSchemas,
  getPostgreSQLTables,
  getPostgreSQLColumns,
  getPostgreSQLViews
} from '~/core/modules/PostgreSQL/actions'

export function createPostgreSQLSource(
  data: Omit<SourceData, 'type'>
): PostgreSQLSourceProvider {
  return {
    getData: () => ({ ...data, type: SourceProviderList.POSTGRESQL }),

    testConnection: async () => {
      return testPostgreSQLConnection(data.connectionURL)
    },

    getDatabases: async () => {
      return getPostgreSQLDatabases(data.connectionURL)
    },

    getSchemas: async () => {
      return getPostgreSQLSchemas(data.connectionURL)
    },

    getTables: async (schema: SchemaData) => {
      return getPostgreSQLTables(data.connectionURL, schema)
    },

    getTablesColumns: async (schema: SchemaData, table: TableData) => {
      return getPostgreSQLColumns(data.connectionURL, schema, table)
    },

    getViews: async (schema: SchemaData) => {
      return getPostgreSQLViews(data.connectionURL, schema)
    },

    type: SourceProviderList.POSTGRESQL
  }
}
