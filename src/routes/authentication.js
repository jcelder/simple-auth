const router = require('express').Router()
const users = require('../models/users')

router.route('/login')
  .get((req, res) => {
    res.render('authentication/login')
  })
  .post((req, res) => {
  // validation to check the email & password
    const email = req.body.email
    const password = req.body.password
    users.findByEmail(email)
      .then((member) => {
        if (!member || member.password !== password) {
          res.redirect('/login')
        } else {
          // create a session for the user
          res.redirect('/')
        }
      })
    res.send('todo')
  })

module.exports = router
