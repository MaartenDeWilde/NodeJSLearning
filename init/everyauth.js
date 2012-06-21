/**
 * Created with JetBrains WebStorm.
 * User: Maarten De Wilde
 * Date: 3/05/12
 * Time: 18:51
 */
module.exports = function(app){

    var everyauth = require('everyauth');
    var usersByGoogleId = {};



    var usersById = {};
    var nextUserId = 0;

    function addUser (source, sourceUser) {
        var user;
        if (arguments.length === 1) { // password-based
            user = sourceUser = source;
            user.id = ++nextUserId;
            return usersById[nextUserId] = user;
        } else { // non-password-based
            user = usersById[++nextUserId] = {id: nextUserId};
            user[source] = sourceUser;
        }
        return user;
    }

    everyauth.everymodule
        .findUserById( function (id, callback) {
            callback(null, usersById[id]);
        });


    everyauth.google
        .appId('id')
        .appSecret('secret')
        .scope('https://www.googleapis.com/auth/userinfo.profile https://www.google.com/m8/feeds/')
        .findOrCreateUser( function (sess, accessToken, extra, googleUser) {
            googleUser.refreshToken = extra.refresh_token;
            googleUser.expiresIn = extra.expires_in;
            return usersByGoogleId[googleUser.id] || (usersByGoogleId[googleUser.id] = addUser('google', googleUser));
        })
        .redirectPath('/index.html');

} ;