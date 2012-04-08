/**
 * Created by JetBrains WebStorm.
 * User: Maarten De Wilde
 * Date: 8/04/12
 * Time: 12:31
 */

var express = require('express');

var app = express.createServer(express.logger());

app.configure(function(){
    app.set('views', __dirname + '/views');
    app.set('view engine', 'jade');
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
    app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});


app.get('/', function(request, response) {
    response.send('Hello World!');
});

var port = process.env.PORT || 3000;
app.listen(port, function() {
    console.log("Listening on " + port);
});