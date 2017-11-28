const router = require('express').Router()
const users = require('../models/users')

router.route('/signup')
  .get((req, res) => {
    res.render('users/signup')
  })
  .post((req, res) => {
    const user = req.body
    console.log(user)
    users.create(user)
      .then((DBUser) => {
        res.redirect('/login')
      })
      .catch((error) => {
        next(error)
      })
  })

module.exports = router
