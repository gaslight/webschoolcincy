window.CodeSchool = {
  
  start: function(){
    var screenHeight = $(window).height();
    var screenWidth = $(window).width();
    
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
      return false;
    
    } else if ($.browser.msie){
      return false;
      $('.moon').append().css({"left" : "5%", "top" : "50%"});

    } else {
      CodeSchool.moveCheck();
      CodeSchool.setOrigin();
    }      
  },

  styleHeader: function(){
    // Set size of star container
    $('.stars').append().css({'height' : 500 + "px"});
    
    //Set star size
    $('.stars img').each(function(){
      $(this).css({'margin-left': Math.round(Math.random() * 20 + 1)  + "%" }); 
      $(this).css({'margin-top': Math.round(Math.random() * 20 + 1)  + "%" });
      var y = Math.floor(Math.random()*5+1);
      $(this).append().css({"height" : y + "%"});
    });
  },
  
  setOrigin: function(){
    headerheight = $('.header').height();
    windowwidth = $(window).width();

    $('.moon, .sun').append().css({
      "transform-origin-y" : (headerheight/4) - 50 + "px",
      "-webkit-transform-origin-y" : (headerheight/4) - 50 + "px",
      "transform-origin-x" : windowwidth/3 + "px",
      "-webkit-transform-origin-x" : windowwidth/3 + "px"
    });
  },

  moveCheck: function(){
    $('.moon_move, .sun_move').on("webkitAnimationEnd oanimationend msAnimationEnd animationend", function() {
      if($(this).hasClass("moon_move")){
        
       // CodeSchool.hideStars();
        
        $('.moon').toggleClass('moon_move');
        $('.sun').toggleClass('sun_move');
        CodeSchool.moveCheck();
      } else if ($(this).hasClass("sun_move")){
        
       // CodeSchool.fadeStars();
        
        $('.sun').toggleClass('sun_move');
        $('.moon').toggleClass('moon_move');
        CodeSchool.moveCheck();
      }
    });
  }
}
  
$(document).ready(function() {
  CodeSchool.start();
  CodeSchool.styleHeader();
});

