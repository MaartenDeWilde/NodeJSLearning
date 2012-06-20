/**
 * Created by JetBrains WebStorm.
 * User: Maarten De Wilde
 * Date: 20/06/12
 * Time: 21:35
 */
$(document).ready(function(){
    var loadItems = function(){
        jQuery.get('/createForm', function(form){
            $("#articleSection").append(form);

            $('#btnSave').click(function(){
                jQuery.post('/create', {title: $('#title').val(), content: $('#contentField').val()}, function(){
                  window.location.href = "index.html";
                }) ;
            });
        });
    };
    loadItems();
});
