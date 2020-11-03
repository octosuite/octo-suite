import { IDatabaseData } from './DatabaseData'
import { ISchemaData } from './SchemaData'
import { ISourceData } from './SourceData'
import { ITableColumnData } from './TableColumnData'
import { ITableData } from './TableData'
import { IViewData } from './ViewData'

interface IBaseSourceProvider {
  getData(): ISourceData
  testConnection(): Promise<boolean>
  getDatabases(): Promise<IDatabaseData[]>
  getSchemas(): Promise<ISchemaData[]>
  getTables(schema: ISchemaData): Promise<ITableData[]>
  getTablesColumns(
    database: IDatabaseData,
    schema: ISchemaData,
    table: ITableData
  ): Promise<ITableColumnData[]>
  getViews(schema: ISchemaData): Promise<IViewData[]>
}

export enum SourceProviderList {
  POSTGRESQL = 'SourceProviderList.POSTGRESQL'
}

export interface IPostgreSQLSourceProvider extends IBaseSourceProvider {
  readonly type: typeof SourceProviderList.POSTGRESQL
}

export type SourceProvider = IPostgreSQLSourceProvider
