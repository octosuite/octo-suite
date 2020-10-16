import { registerTestPostgreSQLConnection } from './PostgreSQL/registers'

export function registerModules() {
  registerTestPostgreSQLConnection()
}
