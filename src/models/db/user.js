const db = require('./connection')

const createUser = (user) => {
  return db.query('INSERT INTO users (email, password) VALUES(${email}, ${password})', user)
}

const findByEmail = (email) => {
  return db.query('SELECT * FROM users where email=$1', email)
}

module.exports = { createUser }
