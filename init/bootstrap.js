/**
 * Created by JetBrains WebStorm.
 * User: Maarten De Wilde
 * Date: 15/04/12
 * Time: 20:04
 */

var mongoose = require('./mongoose.js');

module.exports = function(app){
  mongoose(app);
};