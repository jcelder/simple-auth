const db = require('./db/user.js')

module.exports = {
  create: db.createUser,
  findByEmail: db.findByEmail,
}
