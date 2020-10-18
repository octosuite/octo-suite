import fs from 'fs'
import os from 'os'
import path from 'path'
import { Database } from 'sqlite3'

import { migrations } from './migrations'
import { PendingMigrations } from './types'

export async function getVersion(database: Database): Promise<number> {
  return new Promise<number>((resolve, reject) => {
    database.get('PRAGMA user_version', (err, version: number) => {
      if (err) {
        reject(err)
      } else {
        resolve(version)
      }
    })
  })
}

export function getDatabasePath() {
  const tempPath = path.resolve(os.tmpdir(), 'Datacto')
  const databasePath = path.resolve(tempPath, 'database.sqlite')

  if (!fs.existsSync(tempPath)) {
    fs.mkdirSync(tempPath)
  }

  if (!fs.existsSync(databasePath)) {
    fs.writeFileSync(databasePath, '')
  }

  return databasePath
}

export function updateVersion(database: Database, version: number) {
  database.run(`PRAGMA user_version = ${version}`)
}

export async function getPendingMigrations(
  database: Database
): Promise<PendingMigrations> {
  const currentVersion = await getVersion(database)

  const latestVersion = migrations.reduce((version, migration) => {
    if (migration.number > version) {
      return migration.number
    }

    return version
  }, 0)

  const pendingMigrations = migrations
    .filter(migration => migration.number > currentVersion)
    .sort((current, other) => current.number - other.number)

  return {
    latestVersion,
    pendingMigrations
  }
}
