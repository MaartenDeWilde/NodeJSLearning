/**
 * Created by JetBrains WebStorm.
 * User: Maarten De Wilde
 * Date: 15/04/12
 * Time: 20:00
 */


module.exports = function(app){

    var mongoose = require('mongoose');

    var Schema = mongoose.Schema ,
        ObjectId = mongoose.SchemaTypes.ObjectId;

    var BlogPostSchema = new Schema({
        author    : ObjectId,
        title : {type:String, required : true},
        content : {type:String, required:true},
        postDate: {type:Date, required:true},
        user: {type:String, required:false}
    });

    mongoose.model('BlogPost', BlogPostSchema);

    mongoose.connect(app.set('db-uri'));

};