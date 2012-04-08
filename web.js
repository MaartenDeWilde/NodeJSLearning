/**
 * Created by JetBrains WebStorm.
 * User: Maarten De Wilde
 * Date: 8/04/12
 * Time: 12:31
 */

var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    response.send('Hello World!');
});

var port = process.env.PORT || 3000;
app.listen(port, function() {
    console.log("Listening on " + port);
});