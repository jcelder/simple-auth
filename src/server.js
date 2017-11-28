const app = require('express')()
const bodyParser = require('body-parser')
const session = require('express-session')
const middleware = require('./routes/middleware')
const routes = require('./routes/index')

const sess = {
  secret: 'secret word do not tell',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false, maxAge: 60000 },
}

app.set('view engine', 'pug')
app.set('views', __dirname + '/views')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(session(sess))

app.use((req, res, next) => {
  req.session.name = 'Test Name Please Ignore'
  next()
})

app.use(middleware.addUserToRequest)

app.use('/', routes)
app.listen(3000)
