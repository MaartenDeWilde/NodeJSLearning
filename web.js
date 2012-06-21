/**
 * Created by JetBrains WebStorm.
 * User: Maarten De Wilde
 * Date: 8/04/12
 * Time: 12:31
 */

var express = require('express');
var boostrap = require('./init/bootstrap.js');
var security = require('./init/everyauth.js');
var everyauth = require('everyauth');
var usersByGoogleId = {};
var app = express.createServer(express.logger());

security(app);

app.configure(function(){

    app.set('views', __dirname + '/views');
    app.set('view engine', 'jade');
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(require('stylus').middleware({ src: __dirname + '/public' }));
    // app.use(express.favicon());
    app.use(express.static(__dirname + '/public'));
    app.use(express.cookieParser());
    app.use(express.session({ secret: 'lolcatz'}));
    app.use(everyauth.middleware());
    app.use(app.router);
});

app.configure('development', function(){
    app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
    app.set('db-uri', 'mongodb://localhost:27017/blog');
});

app.configure('production', function() {
    app.set('db-uri', process.env.MONGOHQ_URL);
    app.set('port',process.env.PORT);
    app.set('debug',true);
    app.set('host','http://mdwblogapp.herokuapp.com')
});

boostrap(app);

everyauth.helpExpress(app);

var port = process.env.PORT || 3000;
app.listen(port, function() {
    console.log("Listening on " + port);
});