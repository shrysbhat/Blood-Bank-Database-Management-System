var express = require('express');
var http = require('http');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var session= require('express-session');
var bodyParser = require('body-parser');
var mysql =  require('mysql');
var routes = require('./routes/index');
var admin = require('./routes/admin');
var home = require('./routes/home');
var users = require('./routes/users');
var createUser= require('./routes/createUser');
var organize= require('./routes/organize');

var app = express();

// view engine setup
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
	secret:'mynameiskhan',
		 resave: true,
		    saveUninitialized: true
}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);


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


app.post('/admin/addOplus', admin.addOplus);
app.post('/admin/minusOplus', admin.minusOplus);
app.post('/admin/addOminus', admin.addOminus);
app.post('/admin/minusOminus', admin.minusOminus);
app.post('/admin/addAplus', admin.addAplus);
app.post('/admin/minusAplus', admin.minusAplus);
app.post('/admin/addAminus', admin.addAminus);
app.post('/admin/minusAminus', admin.minusAminus);
app.post('/admin/addBplus', admin.addBplus);
app.post('/admin/minusBplus', admin.minusBplus);
app.post('/admin/addBminus', admin.addBminus);
app.post('/admin/minusBminus', admin.minusBminus);
app.post('/admin/addABplus', admin.addABplus);
app.post('/admin/minusABplus', admin.minusABplus);
app.post('/admin/addABminus', admin.addABminus);
app.post('/admin/minusABminus', admin.minusABminus);
app.get('/admin/getBankInfo', admin.getBankInfo);
app.post('/home/getBloodInfo', home.getBloodInfo);
app.get('/home/getSignup', home.getSignup);
app.get('/successSignup', home.successSignup);
app.get('/home/getSignin', home.getSignin);
app.get('/successLoginPage', home.successLoginPage);
app.post('/createUser/signUp', createUser.signUp);
app.get('/Signedup', createUser.Signedup);
app.post('/createUser/signIn', createUser.signIn);
app.post('/organize/organizeEvent', organize.organizeEvent );
app.get('/organize/getOrganizePage', organize.getOrganizePage);
app.get('/OrganizeEventspage', organize.OrganizeEventspage);
app.get('/organize/getViewEvents', organize.getViewEvents);
app.get('/getEventspage', organize.getEventspage);



http.createServer(app).listen(app.get('port'), function(){
	  console.log('This is calculator and Express server listening on port ' + app.get('port'));
	});

module.exports = app;

