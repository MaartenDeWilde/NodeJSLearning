/**
 * Created by JetBrains WebStorm.
 * User: Maarten De Wilde
 * Date: 16/04/12
 * Time: 18:23
 */
$(document).ready(function(){
    jQuery.get('/posts', function(posts){
       $("#articleSection").append(posts);
    });
});