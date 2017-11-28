const app = require('express')()
const bodyParser = require('body-parser')
const session = require('express-session')

const routes = require('./routes/index')

const sess = {
  secret: 'secret word do not tell',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true },
}

app.set('view engine', 'pug')
app.set('views', __dirname + '/views')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(session(sess))

app.use('/', routes)
app.listen(3000)
