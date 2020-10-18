import { Database } from 'sqlite3'

import { getPendingMigrations, getDatabasePath, updateVersion } from './helpers'

export async function createDatabase() {
  const path = getDatabasePath()
  const database = new Database(path)

  const { pendingMigrations, latestVersion } = await getPendingMigrations(
    database
  )

  database.serialize(() => {
    pendingMigrations.forEach(migration => database.run(migration.sql))

    updateVersion(database, latestVersion)
  })

  return database
}
