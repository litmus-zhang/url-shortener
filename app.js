var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose  = require('mongoose');


const connectDB = async () => {
    mongoose.connect('mongodb+srv://main:B7ckNCAsEsYemQsK@cluster0.qcghrgj.mongodb.net/?retryWrites=true&w=majority')
    console.log('MongoDB Connected...')
}


connectDB();
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
