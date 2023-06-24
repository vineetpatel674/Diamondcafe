
/*
var post = document.getElementById("post");
post.addEventListener("click", function () {
    var commentBoxValue = document.getElementById("comment-box").value;

    var li = document.createElement("li");
    var text = document.createTextNode(commentBoxValue);
    li.appendChild(text);
    document.getElementById("unordered").appendChild(li);



});
*/

$(document).ready(function(){
   
    $('#comment').click(function(){
        var input = $('#input').val();
        $('.bo').append(input + '<br>');
        $('#input').val('');
        $('.box-container').slideDown();
    });

    $('#cancel').click(function(){
        $('#input').val('');
    });

    $('#delete').click(function(){
        $('.bo').text('');
        $('.box-container').slideUp();

    });
});

