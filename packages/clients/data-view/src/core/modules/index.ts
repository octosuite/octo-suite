import {
  registerTestPostgreSQLConnection,
  registerGetPostgreSQLDatabases,
  registerGetPostgreSQLSchemas,
  registerGetPostgreSQLSchemaTables,
  registerGetPostgreSQLTableColumns,
  registerGetPostgreSQLViews
} from './PostgreSQL/registers'

export function registerModules() {
  registerTestPostgreSQLConnection()
  registerGetPostgreSQLDatabases()
  registerGetPostgreSQLSchemas()
  registerGetPostgreSQLSchemaTables()
  registerGetPostgreSQLTableColumns()
  registerGetPostgreSQLViews()
}
