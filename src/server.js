const app = require('express')()
const bodyParser = require('body-parser')

const routes = require('./routes/index')

app.set('view engine', 'pug')
app.set('views', __dirname + '/views')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/', routes)
app.listen(3000)
