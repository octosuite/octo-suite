import { ISchemaData } from '~/core/domain/SchemaData'
import { ISourceData } from '~/core/domain/SourceData'
import {
  IPostgreSQLSourceProvider,
  SourceProviderList
} from '~/core/domain/SourceProvider'
import { ITableData } from '~/core/domain/TableData'
import {
  testPostgreSQLConnection,
  getPostgreSQLDatabases,
  getPostgreSQLSchemas,
  getPostgreSQLTables,
  getPostgreSQLColumns,
  getPostgreSQLViews
} from '~/core/modules/PostgreSQL/actions'

export function createPostgreSQLSource(
  data: Omit<ISourceData, 'type'>
): IPostgreSQLSourceProvider {
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

    getTables: async (schema: ISchemaData) => {
      return getPostgreSQLTables(data.connectionURL, schema)
    },

    getTablesColumns: async (schema: ISchemaData, table: ITableData) => {
      return getPostgreSQLColumns(data.connectionURL, schema, table)
    },

    getViews: async (schema: ISchemaData) => {
      return getPostgreSQLViews(data.connectionURL, schema)
    },

    type: SourceProviderList.POSTGRESQL
  }
}
