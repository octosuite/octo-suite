import {
  all,
  call,
  put,
  select,
  takeEvery,
  takeLatest
} from 'redux-saga/effects'

import { ISchemaData } from '~/core/domain/SchemaData'
import { ISourceData } from '~/core/domain/SourceData'
import { ITableData } from '~/core/domain/TableData'
import { IViewData } from '~/core/domain/ViewData'
import { createPostgreSQLSource } from '~/core/sources/PostgreSQL'
import { Types as PersistTypes } from '~/store/modules/persist/types'
import { RootState } from '~/store/state'

import {
  loadProviderRequest,
  loadProviderSuccess,
  loadProviderFailure,
  loadProviderSchemasSuccess,
  loadProviderSchemasFailure,
  loadProviderSchemaTablesSuccess,
  loadProviderSchemaTablesFailure,
  loadProviderSchemaViewsSuccess,
  loadProviderSchemaViewsFailure
} from './actions'
import { LoadProviderRequestAction, Types } from './types'

function* loadSource({ payload }: LoadProviderRequestAction) {
  const { source } = payload

  const provider = createPostgreSQLSource(source)

  const connectionEstablished: boolean = yield call(provider.testConnection)

  if (connectionEstablished) {
    yield put(loadProviderSuccess(source))
  } else {
    yield put(loadProviderFailure(source))
    return
  }

  let schemas: ISchemaData[]

  try {
    schemas = yield call(provider.getSchemas)

    yield put(loadProviderSchemasSuccess(source, schemas))
  } catch (error) {
    const message =
      error.message || `failed to load schemas from ${source.name}`

    yield put(loadProviderSchemasFailure(source, message))

    return
  }

  for (let index = 0; index < schemas.length; index++) {
    const schema = schemas[index]

    try {
      const tables: ITableData[] = yield call(provider.getTables, schema)

      yield put(loadProviderSchemaTablesSuccess(source, schema, tables))
    } catch (error) {
      const message =
        error.message ||
        `failed to load tables from ${source.name} in schema ${schema.name}`

      yield put(loadProviderSchemaTablesFailure(source, schema, message))
    }

    try {
      const views: IViewData[] = yield call(provider.getViews, schema)

      yield put(loadProviderSchemaViewsSuccess(source, schema, views))
    } catch (error) {
      const message =
        error.message ||
        `failed to load views from ${source.name} in schema ${schema.name}`

      yield put(loadProviderSchemaViewsFailure(source, schema, message))
    }
  }
}

function* loadAllSources() {
  const sources: ISourceData[] = yield select(
    (state: RootState) => state.sources.sources
  )

  for (let i = 0; i < sources.length; i++) {
    const source = sources[i]

    yield put(loadProviderRequest(source))
  }
}

export default all([
  takeEvery(Types.LOAD_SOURCE_REQUEST, loadSource),
  takeLatest(PersistTypes.REHYDRATE, loadAllSources)
])
