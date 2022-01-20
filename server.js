const express = require('express');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const passportConfig = require('./config/passport');
const app = express();

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/auth');
mongoose.connection.on('error', (err) => {
  throw err;
  process.exit(1);
})

app.use(session ({
  secret: 'ESTO ES SECRETO',
  resave: true,
  saveUninitialized: true,
  store: MongoStore.create ({
    mongoUrl: 'mongodb://127.0.0.1:27017/auth',
    autoReconnect: true
  })
}))

app.use(passport.initialize());
app.use(passport.session());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const controladorUsuario = require('./controladores/usuario');
app.post('/signup', controladorUsuario.postSignup);
app.post('/login', controladorUsuario.postLogin);
app.get('/logout', passportConfig.estaAutenticado, controladorUsuario.logout);

app.get('/usuarioInfo', passportConfig.estaAutenticado, (req, res) => {
  res.json(req.user);
})

app.listen(3000, () => {
  console.log('Escuchando en el puerto 3000');
})