/**
 * Created by JetBrains WebStorm.
 * User: Maarten De Wilde
 * Date: 15/04/12
 * Time: 20:18
 */

var mongoose = require("mongoose");

var blogPost = mongoose.model('BlogPost');

exports.getPosts = function(req,res){
    if(req.user){
        blogPost.find({user:req.user.id}).run(function(err,posts){
            posts.sort(function (blogPost1, blogPost2) {
                if (blogPost1.postDate > blogPost2.postDate) return -1;
                if (blogPost1.postDate < blogPost2.postDate) return 1;
                return 0;
            });
            res.partial('partials/posts', {posts: posts});
        });
    }
    else{
        res.partial('partials/posts',{posts: []});
    }
} ;

exports.getCreateForm = function(req,res){
    res.partial('partials/createForm',{});
};

exports.create = function(req, res){

    var post = new blogPost();
    post.title = req.body.title;
    post.content = req.body.content;
    post.postDate = new Date();
    post.user = req.user.id;
    post.save();

    res.send(200);
};