$(document).ready(function(){

  $("header nav a").hover(function(){
    $(this).css("background-color", "orange");
    $(this).css("color", "#000000");
    }, function(){
    $(this).css("background-color", "");
    $(this).css("color", "#ffffff");
  });

  $("article.kaliedo a").hover(function(){
    //TODO
  });

  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if (scroll > 300) {
	    $("header").css("background" , "#121212");
      $("article.kaliedo").css("clip-path", "polygon(100% 0, 100% 91%, 60% 100%, 0 92%, 0 0)");
	  }

	  else{
		  $("header").css("background" , "none");
      $("article.kaliedo").css("clip-path", "polygon(100% 0, 100% 100%, 30% 100%, 0 100%, 0 0)");
	  }
  })
});
