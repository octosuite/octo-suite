export interface MigrationData {
  number: number
  sql: string
}

export interface PendingMigrations {
  latestVersion: number
  pendingMigrations: MigrationData[]
}
