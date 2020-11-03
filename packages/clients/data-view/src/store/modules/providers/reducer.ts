import produce from 'immer'

import { ISchemaData } from '~/core/domain/SchemaData'
import { ISourceData } from '~/core/domain/SourceData'

import {
  IProvidersState,
  IProviderViewState,
  ISchemaViewState,
  ProvidersActionsTypes,
  Types
} from './types'

const INITIAL_STATE: IProvidersState = {
  providers: []
}

function findSourceIndex(
  providers: IProviderViewState[],
  source: ISourceData
): number {
  return providers.findIndex(current => current.source.name === source.name)
}

function findSchemaIndex(
  schemas: ISchemaViewState[],
  schema: ISchemaData
): number {
  return schemas.findIndex(current => current.name === schema.name)
}

export default function (state = INITIAL_STATE, action: ProvidersActionsTypes) {
  return produce(state, draft => {
    const providers = draft.providers

    switch (action.type) {
      case Types.LOAD_SOURCE_REQUEST: {
        const { source } = action.payload
        const sourceIndex = findSourceIndex(providers, source)

        const provider: IProviderViewState = {
          source,
          connectionState: 'TRYING',
          schemas: []
        }

        if (sourceIndex !== -1) {
          providers[sourceIndex] = provider
        } else {
          providers.push(provider)
        }

        break
      }

      case Types.LOAD_SOURCE_SUCCESS: {
        const { source } = action.payload
        const sourceIndex = findSourceIndex(providers, source)

        providers[sourceIndex].connectionState = 'SUCCESS'

        break
      }

      case Types.LOAD_SOURCE_FAILURE:
      case Types.LOAD_PROVIDER_SCHEMAS_FAILURE: {
        const { source } = action.payload
        const sourceIndex = findSourceIndex(providers, source)

        providers[sourceIndex].connectionState = 'FAILURE'

        break
      }

      case Types.LOAD_PROVIDER_SCHEMAS_SUCCESS: {
        const { source, schemas } = action.payload
        const sourceIndex = findSourceIndex(providers, source)

        providers[sourceIndex].schemas = schemas.map(schema => ({
          ...schema,

          tables: [],
          loadingTablesState: 'TRYING',

          views: [],
          loadingViewsState: 'TRYING'
        }))

        break
      }

      case Types.LOAD_PROVIDER_SCHEMA_TABLES_SUCCESS: {
        const { source, schema, tables } = action.payload
        const sourceIndex = findSourceIndex(providers, source)

        const schemas = draft.providers[sourceIndex].schemas

        const schemaIndex = findSchemaIndex(schemas, schema)

        schemas[schemaIndex].tables = tables
        schemas[schemaIndex].loadingTablesState = 'SUCCESS'

        break
      }

      case Types.LOAD_PROVIDER_SCHEMA_TABLES_FAILURE: {
        const { source, schema } = action.payload
        const sourceIndex = findSourceIndex(providers, source)

        const schemas = draft.providers[sourceIndex].schemas

        const schemaIndex = findSchemaIndex(schemas, schema)

        schemas[schemaIndex].loadingTablesState = 'FAILURE'

        break
      }

      case Types.LOAD_PROVIDER_SCHEMA_VIEWS_SUCCESS: {
        const { source, schema, views } = action.payload
        const sourceIndex = findSourceIndex(providers, source)

        const schemas = draft.providers[sourceIndex].schemas

        const schemaIndex = findSchemaIndex(schemas, schema)

        schemas[schemaIndex].views = views
        schemas[schemaIndex].loadingViewsState = 'SUCCESS'

        break
      }

      case Types.LOAD_PROVIDER_SCHEMA_VIEWS_FAILURE: {
        const { source, schema } = action.payload
        const sourceIndex = findSourceIndex(providers, source)

        const schemas = draft.providers[sourceIndex].schemas

        const schemaIndex = findSchemaIndex(schemas, schema)

        schemas[schemaIndex].loadingViewsState = 'FAILURE'

        break
      }
    }
  })
}
