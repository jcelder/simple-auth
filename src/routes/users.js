const router = require('express').Router()

router.route('/signup')
  .get((req, res) => {
    res.send('Sign up page goes here')
  })
