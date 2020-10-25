import { BaseAction } from '@shared/redux'

import { ISchemaData } from '~/core/domain/SchemaData'
import { ISourceData } from '~/core/domain/SourceData'
import { ITableData } from '~/core/domain/TableData'
import { IViewData } from '~/core/domain/ViewData'

export enum Types {
  LOAD_SOURCE_REQUEST = '@sources/LOAD_SOURCE_REQUEST',
  LOAD_SOURCE_SUCCESS = '@sources/LOAD_SOURCE_SUCCESS',
  LOAD_SOURCE_FAILURE = '@sources/LOAD_SOURCE_FAILURE',

  LOAD_PROVIDER_SCHEMAS_SUCCESS = '@sources/LOAD_PROVIDER_SCHEMAS_SUCCESS',
  LOAD_PROVIDER_SCHEMAS_FAILURE = '@sources/LOAD_PROVIDER_SCHEMAS_FAILURE',

  LOAD_PROVIDER_SCHEMA_TABLES_SUCCESS = '@sources/LOAD_PROVIDER_SCHEMA_TABLES_SUCCESS',
  LOAD_PROVIDER_SCHEMA_TABLES_FAILURE = '@sources/LOAD_PROVIDER_SCHEMA_TABLES_FAILURE',

  LOAD_PROVIDER_SCHEMA_VIEWS_SUCCESS = '@sources/LOAD_PROVIDER_SCHEMA_VIEWS_SUCCESS',
  LOAD_PROVIDER_SCHEMA_VIEWS_FAILURE = '@sources/LOAD_PROVIDER_SCHEMA_VIEWS_FAILURE'
}

export interface LoadProviderRequestAction extends BaseAction {
  type: typeof Types.LOAD_SOURCE_REQUEST
  payload: {
    source: ISourceData
  }
}

export interface LoadProviderSuccessAction extends BaseAction {
  type: typeof Types.LOAD_SOURCE_SUCCESS
  payload: {
    source: ISourceData
  }
}

export interface LoadProviderFailureAction extends BaseAction {
  type: typeof Types.LOAD_SOURCE_FAILURE
  payload: {
    source: ISourceData
  }
}

export interface LoadProviderSchemasSuccessAction extends BaseAction {
  type: typeof Types.LOAD_PROVIDER_SCHEMAS_SUCCESS
  payload: {
    source: ISourceData
    schemas: ISchemaData[]
  }
}

export interface LoadProviderSchemasFailureAction extends BaseAction {
  type: typeof Types.LOAD_PROVIDER_SCHEMAS_FAILURE
  payload: {
    source: ISourceData
    message: string
  }
}

export interface LoadProviderSchemaTablesSuccessAction extends BaseAction {
  type: typeof Types.LOAD_PROVIDER_SCHEMA_TABLES_SUCCESS
  payload: {
    source: ISourceData
    schema: ISchemaData
    tables: ITableData[]
  }
}

export interface LoadProviderSchemaTablesFailureAction extends BaseAction {
  type: typeof Types.LOAD_PROVIDER_SCHEMA_TABLES_FAILURE
  payload: {
    source: ISourceData
    schema: ISchemaData
    message: string
  }
}

export interface LoadProviderSchemaViewsSuccessAction extends BaseAction {
  type: typeof Types.LOAD_PROVIDER_SCHEMA_VIEWS_SUCCESS
  payload: {
    source: ISourceData
    schema: ISchemaData
    views: IViewData[]
  }
}

export interface LoadProviderSchemaViewsFailureAction extends BaseAction {
  type: typeof Types.LOAD_PROVIDER_SCHEMA_VIEWS_FAILURE
  payload: {
    source: ISourceData
    schema: ISchemaData
    message: string
  }
}

export type ProvidersActionsTypes =
  | LoadProviderRequestAction
  | LoadProviderSuccessAction
  | LoadProviderFailureAction
  | LoadProviderSchemasSuccessAction
  | LoadProviderSchemasFailureAction
  | LoadProviderSchemaTablesSuccessAction
  | LoadProviderSchemaTablesFailureAction
  | LoadProviderSchemaViewsSuccessAction
  | LoadProviderSchemaViewsFailureAction

export interface IProvidersState {
  providers: IProviderViewState[]
}

export interface IProviderViewState {
  source: ISourceData
  connectionState: WorkState

  schemas: ISchemaViewState[]
}

export interface ISchemaViewState extends ISchemaData {
  tables: ITableData[]
  loadingTablesState: WorkState

  views: ITableData[]
  loadingViewsState: WorkState
}

export type WorkState = 'SUCCESS' | 'FAILURE' | 'TRYING'
