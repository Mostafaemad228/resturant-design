
// /////////////////////////////////////////
$(document).ready(function() {
  $('select').niceSelect();
});
// /////////////////////////////////////////
window.addEventListener("scroll" , function () {
        
  var navbar =  document.querySelector("nav");
  navbar.classList.toggle("sticky",window.scrollY >20);
})
// /////////////////////////////////////////////////////////////
$('.book_date').datepicker({
  'format': 'm/d/yyyy',
  'autoclose': true
});
$('.book_time').timepicker();


(function ($)
  { "use strict"
  
  /* 1. Proloder */
      $(window).on('load', function () {
        $('#preloader-active').delay(450).fadeOut('slow');
        $('body').delay(850).css({
          'overflow': 'visible'
        });
      });
  
  /* 2. sticky And Scroll UP */
      $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll < 100) {
          $("#ftco-navbar").removeClass("sticky-bar");
          $('#back-top').fadeOut(500);
        } else {
          $("#ftco-navbar").addClass("sticky-bar");
          $('#back-top').fadeIn(500);
        }
      });
  
    // Scroll Up
      $('#back-top a').on("click", function () {
        $('body,html').animate({
          scrollTop: 0
        }, 800);
        return false;
      });
    

      $(function () {
        $("#carsour-teste").owlCarousel({
            dots:true,
            responsiveBaseElement:window,
            items:1,
            autoplay:true,
            smartSpeed:700,
            loop:true,
            autoPlayHoverPause:true
        });
        
    });

  	
  
  })(jQuery);
  

  
  $(function () {
    $('#datetimepicker2').datetimepicker({
        locale: 'ru'
    });
});

















































































