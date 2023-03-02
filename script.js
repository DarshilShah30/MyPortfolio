// Smooth scrolling effect for anchor links
$('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }
});

// Toggle mobile menu
$('.menu-toggle').on('click', function() {
    $('nav').toggleClass('show');
});

// Scroll to top button
$(window).on('scroll', function() {
    if ($(this).scrollTop() > 100) {
        $('.scroll-to-top').fadeIn();
    } else {
        $('.scroll-to-top').fadeOut();
    }
});

$('.scroll-to-top').on('click', function() {
    $('html, body').animate({scrollTop : 0},800);
    return false;
});
