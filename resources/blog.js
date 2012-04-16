/**
 * Created by JetBrains WebStorm.
 * User: Maarten De Wilde
 * Date: 15/04/12
 * Time: 20:18
 */

var mongoose = require("mongoose");

var blogPost = mongoose.model('BlogPost');

exports.getPosts = function(req,res){
    blogPost.find({}).run(function(err,posts){
        res.partial('partials/games', {posts: posts});
    });
} ;