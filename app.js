var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

Web3 = require("web3");

var MyContractJSON =require(path.join(__dirname, 'build/contracts/certi.json'))

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

const web3 = new Web3('http://localhost:8545');

accountAddress = "0xC523EF54fdACe1038a5C475C3bAe2e9d8492B445";
contractAddress = MyContractJSON.networks['5777'].address;
var contractAbi = MyContractJSON.abi;

MyContract = new web3.eth.Contract(contractAbi, contractAddress);

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

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
