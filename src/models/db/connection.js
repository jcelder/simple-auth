const pgp = require('pg-promise')()

const connection = {
  database: 'simple_auth_development',
  host: 'localhost',
  port: 5432
}


const db = pgp(connection)

module.exports = db
