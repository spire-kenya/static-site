$(document).ready(function(){

  $('.navbar-header').data('size','big');

  $(window).scroll(function(){
    if($(document).scrollTop() > 0 && $(document).width() > 768) {
      if($('.navbar-header').data('size') == 'big') {
        $('.navbar-header').data('size','small').removeClass("big");
        $('body').css("paddingTop", 40);
        $('.navbar-brand').css("maxWidth", 100);
        $('.navbar-right').css("top", 7);
        // $('.navbar-header').stop().animate({
        //     height:'60px'
        // }, 600);
      }
    } else {
      if($('.navbar-header').data('size') == 'small') {
        $('.navbar-header').data('size','big').addClass("big");
        $('body').css("paddingTop", 100);
        $('.navbar-brand').css("maxWidth", 180);
        $('.navbar-right').css("top", 25);
        // $('.navbar-header').stop().animate({
        //     height:'100px'
        // }, 600);
      }  
    }
  });

  $(".dropdown").hover(
    function() {
        $('.dropdown-menu', this).stop( true, true ).fadeIn("fast");
        $(this).toggleClass('open');
    },
    function() {
        $('.dropdown-menu', this).stop( true, true ).fadeOut("fast");
        $(this).toggleClass('open');
    }
  );

});
