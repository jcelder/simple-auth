const app = require('express')()

const routes = require('./routes/index')

app.set('view engine', 'pug')
app.set('views', __dirname + '/views')

app.use('/', routes)
app.listen(3000)
