$(document).ready(function(){
  $("header nav a").hover(function(){
    $(this).css("background-color", "orange");
    }, function(){
    $(this).css("background-color", "");
  });
});
