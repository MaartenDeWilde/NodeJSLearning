/**
 * Created by JetBrains WebStorm.
 * User: Maarten De Wilde
 * Date: 15/04/12
 * Time: 20:16
 */
var express = require('express');

module.exports = function(app){
    var blogController = require('./../resources/blog.js');

    app.get('/posts', blogController.getPosts);
};