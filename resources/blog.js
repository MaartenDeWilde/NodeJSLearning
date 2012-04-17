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
        res.partial('partials/posts', {posts: posts});
    });
} ;

exports.create = function(req, res){
    var post = new blogPost();
    post.title = 'Title';
    post.content = 'Post content';
    post.postDate = new Date();
    post.save();

    res.send(200);
};