const app = require('express')()

app.get('/', (req, res) => {
  res.send('Dashboard goes here')
})

app.listen(3000)
