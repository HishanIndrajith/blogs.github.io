$(function () {
    'use strict'; (function () { $('#preloader').delay(200).fadeOut('slow'); }()); (function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() >= 50) { $('nav.navbar').addClass('sticky-nav'); }
            else { $('nav.navbar').removeClass('sticky-nav'); }
        });
    }()); (function () { $('a.page-scroll').on('click', function (e) { e.preventDefault(); var $anchor = $(this); $('html, body').stop().animate({ scrollTop: $($anchor.attr('href')).offset().top }, 1500, 'easeInOutExpo'); }); }()); (function () { $('button.navbar-toggle').ucOffCanvasMenu({ documentWrapper: '#main-wrapper', contentWrapper: '.content-wrapper', position: 'uc-offcanvas-left', effect: 'slide-along', closeButton: '#uc-mobile-menu-close-btn', menuWrapper: '.uc-mobile-menu', documentPusher: '.uc-mobile-menu-pusher' }); }()); (function () {
        var offset = 220; var duration = 500; jQuery(window).scroll(function () {
            if (jQuery(this).scrollTop() > offset) { jQuery('.crunchify-top').fadeIn(duration); }
            else { jQuery('.crunchify-top').fadeOut(duration); }
        }); jQuery('.crunchify-top').click(function (event) { event.preventDefault(); jQuery('html, body').animate({ scrollTop: 0 }, duration); return false; });
    }()); $("#search-button, #search-icon").click(function (e) { e.preventDefault(); $("#search-button, #search-form").toggle(); }); $("#feature-news-carousel").owlCarousel({ loop: true, dots: false, items: 1, autoplay: true, singleItem: true });
}); $(document).on('click', '.m-menu .dropdown-menu', function (e) { e.stopPropagation() })