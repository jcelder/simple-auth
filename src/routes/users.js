const router = require('express').Router()

router.route('/signup')
  .get((req, res) => {
    res.render('users/new.pug')
  })
  .post((req, res) => {
    console.log('Body Params:', req.body)
    res.send('submitted from the form')
  })

module.exports = router
