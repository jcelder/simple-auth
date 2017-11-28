
const addUserToRequest = (req, res, next) => {
  req.user = req.session.user
  next()
}

module.exports = { addUserToRequest }