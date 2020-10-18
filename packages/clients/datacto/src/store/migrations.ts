import { MigrationData } from './types'

export const migrations: MigrationData[] = [
  {
    number: 1,
    sql: `
      CREATE TABLE sources
      (
        name          TEXT NOT NULL PRIMARY KEY,
        connectionURL TEXT NOT NULL
      );
    `
  }
]
