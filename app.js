var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var mongoose = require('mongoose');
require('dotenv/config');
var bodyParser = require('body-parser');

var app = express();



//! ===================Import Routes===================

// -------------------Default Router---------------
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

// todo-------------------API Router-------------------
var routerColor = require('./routes/routerColor');
var routerHeader = require('./routes/routerHeader');
var routerImg = require('./routes/routerImg');
var routerAbout = require('./routes/routerAbout');
var routerSkill = require('./routes/routerSkill');
var routerExp = require('./routes/routerExp');
var routerEdu = require('./routes/routerEdu');

//! ==================View engine setup================
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(cors());




//! ==================Connect to mongodb================
mongoose.connect(
  process.env.DB_CONNECTION, () => {
  console.log("Connected to MongoDB Atlas")
})




//! ==================Using routes======================

//  =========Using Default Router============
app.use('/', indexRouter);
app.use('/users', usersRouter);

// todo =========Using API Router================
app.use('/api', routerColor);
app.use('/api', routerHeader);
app.use('/api', routerImg);
app.use('/api', routerAbout);
app.use('/api', routerSkill);
app.use('/api', routerExp);
app.use('/api', routerEdu);

//! ===============CRUD Test=========================
app.get('/default', (req,res) => {
  res.send("Hello world")
}) 

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});



module.exports = app;
