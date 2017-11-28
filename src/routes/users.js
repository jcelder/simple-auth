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
      .then(() => {
        res.redirect('/login')
      })
      .catch((error) => {
        if (error.message.includes('duplicate key value')) {
          const message = 'Email already exists'
          res.render('users/signup', { message })
        }
      })
  })

module.exports = router
