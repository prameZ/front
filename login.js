var mysql = require('mysql');
var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var path = require('path');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'accounts'
});

var app = express();

app.use(session({
    name : 'codeil',
    secret : 'something',
    resave :false,
    saveUninitialized: true,
    cookie : {
            maxAge:(1000 * 60 * 100)
    }      
}));

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());



app.post('/auth', function(request, response) {
    var username = request.body.username;
    var password = request.body.password;
    if (username && password) {
    connection.query('SELECT * FROM accounts WHERE username = ? AND password = ?', [username, password], function(error, results, fields){
        if (results.length > 0) {
            request.session.loggedin = true;
            request.session.username = username;
            response.redirect('/home');
        } else {
            response.send('username and password not correct');
        }
    });

    }else{
        response.send('pls enter username and password')
        response.end();
    }

});

app.get('/home', function(request, response) {
	if (request.session.loggedin) {
		response.send('Welcome back, ' + request.session.username + '!');
	} else {
		response.send('Please login to view this page!');
	}
	response.end();
});

app.listen(3000);
