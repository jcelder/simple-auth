const router = require('express').Router()
const users = require('../models/users')

router.route('/login')
  .get((req, res) => {
    res.render('authentication/login')
  })
  .post((req, res) => {
    const user = req.body
    // validation to check the username & password
    res.send('todo')
  })