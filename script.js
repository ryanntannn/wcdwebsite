//p1829105 Ryan Tan Rui Ann
$(document).ready(function(){

  $("header nav a").hover(function(){
    $(this).css("background-color", "orange");
    $(this).css("color", "#000000");
    }, function(){
    $(this).css("background-color", "");
    $(this).css("color", "#ffffff");
  });

  $("article.kaliedo a").hover(function(){
    $("article.kaliedo img").css("top", "37%");
    $("article.kaliedo").css("background-position", "bottom");
    }, function(){
    $("article.kaliedo img").css("top", "40%");
    $("article.kaliedo").css("background-position", "center");
  });

  $("article.kaliedo a").hover(function(){
    //TODO
  });

  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();

	  if (scroll > 30) { //scrolled down from the top
	    $("header").css("background" , "#121212");
      $("article.kaliedo").css("clip-path", "polygon(100% 0, 100% 91%, 60% 100%, 0 92%, 0 0)");
      $("article.firstcrank").css("top", "100%");
	  }

	  else{ //still at the top
		  $("header").css("background" , "none");
      $("article.kaliedo").css("clip-path", "polygon(100% 0, 100% 100%, 30% 100%, 0 100%, 0 0)");
      $("article.firstcrank").css("top", "20%");
	  }

    var scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();
    if(scrollBottom < 60){
      $("footer").css("bottom", "0");
    }

    else {
      $("footer").css("bottom", "calc(-50% - 5px)");
    }

  })
});
