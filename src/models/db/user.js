const db = require('./connection')

const createUser = (email, password) => {
  return db.query('INSERT INTO users (email, password) VALUES($1, $2)',
    [email, password])
}

module.exports = { createUser }
