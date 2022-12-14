const dotenv = require('dotenv').config();
const DB = process.env.DB;
const cors = require("cors");
const mongoose = require("mongoose");
const cookieParser = require('cookie-parser')
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var logger = require('morgan');

var postRouter = require('./routes/post');

const app = express();

// DB Connection
const connectDB = async () => {
  try {
    await mongoose.connect(DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("Database is connected");
  } catch (err) {
    console.log("Can not connect to the database" + err);
  }
};

connectDB();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/posts', postRouter);

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
