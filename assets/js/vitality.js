
// Smooth Scrolling: Smooth scrolls to an ID on the current page. Must have Class = Scroll-link to work.
// Otherwise, Services section will scroll up on each click event to open up magnific popup.
$(document).ready(function() {
    // navigation click actions 
    $('.scroll-link').on('click', function(event){
        event.preventDefault();
        var sectionID = $(this).attr("data-id");
        scrollToID('#' + sectionID, 750);
    });
    // scroll to top action
    $('.scroll-top').on('click', function(event) {
        event.preventDefault();
        $('html, body').animate({scrollTop:0}, 'slow');         
    });
    // mobile nav toggle
    $('#nav-toggle').on('click', function (event) {
        event.preventDefault();
        $('#main-nav').toggleClass("open");
    });
});
// scroll function
function scrollToID(id, speed){
    var offSet = 50;
    var targetOffset = $(id).offset().top;
    var mainNav = $('#main-nav');
    $('html,body').animate({scrollTop:targetOffset}, speed);
    if (mainNav.hasClass("open")) {
        mainNav.css("height", "1px").removeClass("in").addClass("collapse");
        mainNav.removeClass("open");
    }
}
if (typeof console === "undefined") {
    console = {
        log: function() { }
    };
}



// Activates floating label headings for the contact form.
$(function() {
    $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !! $(e.target).val());
    }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
    });
});


// Owl Carousel Settings
$(".about-carousel").owlCarousel({
    items: 3,
    navigation: true,
    pagination: true,
    navigationText: [
        "<i class='fa fa-angle-left'></i>",
        "<i class='fa fa-angle-right'></i>"
    ],
    scrollPerPage: true,
    slideSped: 300,
    rewindSpeed: 100,
    paginationSpeed: 300,
});

$(".portfolio-carousel").owlCarousel({
    singleItem: true,
    navigation: true,
    pagination: true,
    navigationText: [
        "<i class='fa fa-angle-left'></i>",
        "<i class='fa fa-angle-right'></i>"
    ],
    autoHeight: true,
    mouseDrag: true,
    touchDrag: false,
    transitionStyle: "fadeUp",
    autoPlay: 15000,   
    slideSped: 300,
    paginationSpeed: 300,
    rewindSpeed: 100,

});

$(".testimonials-carousel").owlCarousel({
    singleItem: true,
    navigation: true,
    pagination: true,
    autoHeight: true,
    navigationText: [
        "<i class='fa fa-angle-left'></i>",
        "<i class='fa fa-angle-right'></i>"
    ],
    transitionStyle: "backSlide"
});

$(".portfolio-gallery").owlCarousel({
    items: 3,
});


// Magnific Popup jQuery Lightbox Gallery Settings
$('.gallery-link').magnificPopup({
    type: 'image',
    gallery: {
        enabled: true
    },
    image: {
        titleSrc: 'title'
    }
});


// Formstone Wallpaper - Video Background Settings
$("header.video").wallpaper({
    source: {
        poster: "assets/img/bg-mobile-fallback.jpg",
        mp4: "assets/mp4/camera.mp4"
    }
});


// Fix for Bootstrap Modal Shifting Page Contents
$(window).on("load resize",function(e){
    (function(e) {
        var $winWidth = e(window).width();
        e(document).on('show.bs.modal', function() {
            if ($winWidth < e(window).width()) {
                e('body.modal-open,.navbar-fixed-top,.navbar-fixed-bottom').css('marginRight', e(window).width() - $winWidth)
            }
        });
        e(document).on('hidden.bs.modal', function() {
            e('body,.navbar-fixed-top,.navbar-fixed-bottom').css('marginRight', 0)
        });
    })(jQuery);
});


// Scrollspy: Highlights the navigation menu items while scrolling.
$('body').scrollspy({
    target: '.navbar-fixed-top'
})


// Services section popup //
$('.open-popup-link').magnificPopup({
  type:'inline',
  midClick: true, // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
  gallery: {
    enabled: true
  },
});


// Team section popup. Not required - using Lightbox instead//
// $('.team-popup-link').magnificPopup({
//   type:'inline',
//   midClick: true, // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
//   gallery: {
//     enabled: true
//   },
// });


// hides the collapsed menu when click on a menu item //
$(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') ) {
        $(this).collapse('hide');
    }
});
