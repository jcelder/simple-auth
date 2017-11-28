const db = require('./connection')

const createUser = (user) => {
  return db.query('INSERT INTO users (email, password) VALUES(${email}, ${password})', user)
}

module.exports = { createUser }
