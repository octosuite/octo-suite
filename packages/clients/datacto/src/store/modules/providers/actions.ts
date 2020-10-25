import { ISchemaData } from '~/core/domain/SchemaData'
import { ISourceData } from '~/core/domain/SourceData'
import { ITableData } from '~/core/domain/TableData'
import { IViewData } from '~/core/domain/ViewData'

import {
  LoadProviderRequestAction,
  LoadProviderSuccessAction,
  LoadProviderFailureAction,
  Types,
  LoadProviderSchemasSuccessAction,
  LoadProviderSchemasFailureAction,
  LoadProviderSchemaTablesSuccessAction,
  LoadProviderSchemaTablesFailureAction,
  LoadProviderSchemaViewsSuccessAction,
  LoadProviderSchemaViewsFailureAction
} from './types'

export function loadProviderRequest(
  source: ISourceData
): LoadProviderRequestAction {
  return {
    type: Types.LOAD_SOURCE_REQUEST,
    payload: { source }
  }
}

export function loadProviderSuccess(
  source: ISourceData
): LoadProviderSuccessAction {
  return {
    type: Types.LOAD_SOURCE_SUCCESS,
    payload: { source }
  }
}

export function loadProviderFailure(
  source: ISourceData
): LoadProviderFailureAction {
  return {
    type: Types.LOAD_SOURCE_FAILURE,
    payload: { source }
  }
}

export function loadProviderSchemasSuccess(
  source: ISourceData,
  schemas: ISchemaData[]
): LoadProviderSchemasSuccessAction {
  return {
    type: Types.LOAD_PROVIDER_SCHEMAS_SUCCESS,
    payload: { source, schemas }
  }
}

export function loadProviderSchemasFailure(
  source: ISourceData,
  message: string
): LoadProviderSchemasFailureAction {
  return {
    type: Types.LOAD_PROVIDER_SCHEMAS_FAILURE,
    payload: { source, message }
  }
}

export function loadProviderSchemaTablesSuccess(
  source: ISourceData,
  schema: ISchemaData,
  tables: ITableData[]
): LoadProviderSchemaTablesSuccessAction {
  return {
    type: Types.LOAD_PROVIDER_SCHEMA_TABLES_SUCCESS,
    payload: { source, schema, tables }
  }
}

export function loadProviderSchemaTablesFailure(
  source: ISourceData,
  schema: ISchemaData,
  message: string
): LoadProviderSchemaTablesFailureAction {
  return {
    type: Types.LOAD_PROVIDER_SCHEMA_TABLES_FAILURE,
    payload: { source, schema, message }
  }
}

export function loadProviderSchemaViewsSuccess(
  source: ISourceData,
  schema: ISchemaData,
  views: IViewData[]
): LoadProviderSchemaViewsSuccessAction {
  return {
    type: Types.LOAD_PROVIDER_SCHEMA_VIEWS_SUCCESS,
    payload: { source, schema, views }
  }
}

export function loadProviderSchemaViewsFailure(
  source: ISourceData,
  schema: ISchemaData,
  message: string
): LoadProviderSchemaViewsFailureAction {
  return {
    type: Types.LOAD_PROVIDER_SCHEMA_VIEWS_FAILURE,
    payload: { source, schema, message }
  }
}
