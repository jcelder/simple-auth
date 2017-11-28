const router = require('express').Router()
const users = require('./users')

router.get('/', (req, res) => {
  res.send('Dashboard goes here')
})

router.use('/', users)

module.exports = router