/* eslint no-multi-spaces: ["error", { exceptions: { "VariableDeclarator": true } }] */
require('dotenv').config({ silent: true });
const express         = require('express');
const morgan          = require('morgan');
const path            = require('path');
const bodyParser      = require('body-parser');
const session         = require('express-session');
const cookieParser    = require('cookie-parser');
const methodOverride  = require('method-override');
const indexRouter     = require('./routes/index.js');
const authRouter      = require('./routes/auth');
const usersRouter     = require('./routes/users');
const showRouter      = require('./routes/show');

const app             = express();
const port            = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', 'views');

// log requests to STDOUT
app.use(morgan('dev'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

// middleware for method override
app.use(methodOverride('_method'));

// This is how we read the cookies sent over from the browser
app.use(cookieParser());

app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: 'DebikaSarkar',
}));

// Set static file root folder
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/auth', authRouter);
app.use('/users', usersRouter);
app.use('/show', showRouter);

// Listen on port for connections
// process.env.PORT is needed for when we deploy to Heroku

app.listen(port, () => {console.log(`server is listening on port debika`, 3000);
});
