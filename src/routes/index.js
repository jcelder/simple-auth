const router = require('express').Router()
const users = require('./users')
const authentication = require('./authentication')

router.get('/', (req, res) => {
  res.send('Dashboard goes here')
})

router.use('/', users)
router.use('/', authentication)

module.exports = router
