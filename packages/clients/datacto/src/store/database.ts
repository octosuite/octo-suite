import fs from 'fs'
import os from 'os'
import path from 'path'
import { Database } from 'sqlite3'

export function createDatabase() {
  const tempPath = path.resolve(os.tmpdir(), 'Datacto')

  if (!fs.existsSync(tempPath)) {
    fs.mkdirSync(tempPath)
  }

  const databasePath = path.resolve(tempPath, 'database.sqlite')

  if (!fs.existsSync(databasePath)) {
    fs.writeFileSync(databasePath, '')
  }

  const database = new Database(databasePath)

  database.serialize(function () {
    database.run('CREATE TABLE IF NOT EXISTS lorem (info TEXT)')

    const stmt = database.prepare('INSERT INTO lorem VALUES (?)')
    for (let i = 0; i < 10; i++) {
      stmt.run('Ipsum ' + i)
    }
    stmt.finalize()

    database.each('SELECT rowid AS id, info FROM lorem', function (err, row) {
      if (err) {
        console.log(err)
      }

      console.log(row.id + ': ' + row.info)
    })
  })

  database.close()
}
