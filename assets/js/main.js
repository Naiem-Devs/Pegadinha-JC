(function($) {
  "use strict";
  
 // menu 
  $('.siteBar-btn').click( function (events){ 
    event.preventDefault();
    $('.mobile-menu').toggleClass('siteBar');   
  }); 


  // owlCarousel
  $(".PARCEIROS_slider").owlCarousel({
    loop: true,
    margin: 30,
    stagePadding: 150,
    items: 6,
    autoplay:true,
    autoplayTimeout:3000,
    smartSpeed: 1000,
    nav: false,
    responsive: {
      0: {
        margin: 20,
        stagePadding: 60,
        items: 2
      },
      390: {
        margin: 20,
        stagePadding: 60,
        items: 3
      },
      500: {
        margin: 20,
        stagePadding: 60,
        items: 4
      },
      767: {
        items: 1
      },
      992: {
        items: 3
      },
      1200: {
        stagePadding: 130,
        items: 3
      },
      1500: {
        items: 5
      }
    }
  });

  AOS.init({
    mirror: true,
    duration: 1500,
    initClassName: 'aos-init',
    once: true,
});

    $('#video').magnificPopup({
      type: 'iframe'
  });


})(jQuery);
