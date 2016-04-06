var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var fs = require('fs');
var session = require('express-session');
var RedisStore = require('connect-redis')(session);


var app = express();

app.get('/', function (req, res) {
  res.sendfile('app/index.html');
});

app.use(session({
  store: new RedisStore({
    db: 5
  }),
  resave:false,
  saveUninitialized:false,
  secret: '234adfgaeryq34dwf'
}));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'app')));
app.use(express.static(path.join(__dirname, 'public')));

(function loadRoute(){
  var files = fs.readdirSync('routes');
  files.forEach(function (e) {
    if (e.match(/\.js$/i)){
      app.use('/' + path.basename(e, path.extname(e)) //route url
        , require(path.join(path.join(__dirname, 'routes'), e)));
    }
  })
})();

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
