$(function(){

    //Smooth scrolling
$(function() {
    $('a[href*="#"]:not([href="#"]):not([href="#fade-quote-carousel"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                var targetOffset = target.offset().top - 100
                $('html, body').animate({
                    scrollTop: targetOffset
                }, 1000);
                return false;
            }
        }
    });
});

// Animations
    
//$(window).resize(function() {
//if ($(window).width() > 768) {
//    $('#features').waypoint(function(direction) {
//        $('.wp-left-1').addClass(' animated fadeInLeft');
//        $('.wp-right-1').addClass(' animated fadeInRight');
//        $('.wp-up-2').addClass(' animated fadeInUp');
//    }, {
//        offset:'10%'
//    });
//
//} 
//    });
 
$('#about').waypoint(function(direction) {
    $('.wp-up-1').addClass(' animated fadeInUp');
}, {
            offset:'20%'
});
    
$('#features').waypoint(function(direction) {
    $('.wp-left-1').addClass(' animated fadeInLeft');
    $('.wp-right-1').addClass(' animated fadeInRight');
    $('.wp-up-2').addClass(' animated fadeInUp');
}, {
        offset:'20%'
});

$('#services').waypoint(function(direction) {
    $('.wp-up-3').addClass(' animated fadeInUp');

}, {
            offset:'30%'
});

$('#pricing').waypoint(function(direction) {
    $('.wp-up-4').addClass(' animated fadeInUp');

}, {
            offset:'70%'
});
    
$('#download').waypoint(function(direction) {
    $('.wp-up-5').addClass(' animated fadeInUp');

}, {
            offset:'80%'
});
    
$('#faq').waypoint(function(direction) {
    $('.wp-left-2').addClass(' animated fadeInLeft');
    $('.wp-right-2').addClass(' animated fadeInRight');

}, {
            offset:'80%'
});
    
//Carousel

  $(".owl-carousel").owlCarousel({        
    loop:true,
    autoplay:true,
    center:true,
    autoplayHoverPause:true,
    autoplaySpeed: 2000,
    autoHeight:true,
    nav:true,
      navText: [
        "<i class='arrow_carrot-left_alt2'></i>",
        "<i class='arrow_carrot-right_alt2'></i>"
      ],
    margin:10,
    responsiveClass:true,
    responsiveRefreshRate: 100,
    responsive:{
        0:{
            items:1
//                nav:false
        },
        480:{
            items:2
//                nav:false
        },
        600:{
            items:3
//                nav:false
        },
        800:{
            items:4
//                nav:true
        },
        1000:{
            items:5,
            nav:true,
            loop:true
        }
    }
}
);
  
});