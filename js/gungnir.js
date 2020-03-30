/*!
 * Clean Blog v1.0.0 (http://startbootstrap.com)
 * Copyright 2015 Start Bootstrap
 * Licensed under Apache 2.0 (https://github.com/IronSummitMedia/startbootstrap/blob/gh-pages/LICENSE)
 */

 /*!
 * Hux Blog v1.6.0 (http://startbootstrap.com)
 * Copyright 2016 @huxpro
 * Licensed under Apache 2.0 
 */

// Tooltip Init
// Unuse by Hux since V1.6: Titles now display by default so there is no need for tooltip
// $(function() {
//     $("[data-toggle='tooltip']").tooltip();
// });


// make all images responsive
/* 
 * Unuse by Hux
 * actually only Portfolio-Pages can't use it and only post-img need it.
 * so I modify the _layout/post and CSS to make post-img responsive!
 */
// $(function() {
//  $("img").addClass("img-responsive");
// });

// responsive tables
$(document).ready(function() {
    $("table").wrap("<div class='table-responsive'></div>");
    $("table").addClass("table");
});

// responsive embed videos
$(document).ready(function() {
    $('iframe[src*="youtube.com"]').wrap('<div class="embed-responsive embed-responsive-16by9"></div>');
    $('iframe[src*="youtube.com"]').addClass('embed-responsive-item');
    $('iframe[src*="vimeo.com"]').wrap('<div class="embed-responsive embed-responsive-16by9"></div>');
    $('iframe[src*="vimeo.com"]').addClass('embed-responsive-item');
});

// Navigation Scripts to Show Header on Scroll-Up
jQuery(document).ready(function($) {
    var MQL = 1170;

    //primary navigation slide-in effect
    if ($(window).width() > MQL) {
        var headerHeight = $('.navbar-custom').height(),
            bannerHeight  = $('.intro-header .container').height();    

        $(window).on('scroll', {
                previousTop: 0
            },
            function() {
                var currentTop = $(window).scrollTop(),
                    $catalog = $('.side-catalog');

                //check if user is scrolling up by mouse or keyborad
                if (currentTop < this.previousTop) {
                    //if scrolling up...
                    if (currentTop > 0 && $('.navbar-custom').hasClass('is-fixed')) {
                        $('.navbar-custom').addClass('is-visible');
                    } else {
                        $('.navbar-custom').removeClass('is-visible is-fixed');
                    }
                } else {
                    //if scrolling down...
                    $('.navbar-custom').removeClass('is-visible');
                    if (currentTop > headerHeight && !$('.navbar-custom').hasClass('is-fixed')) $('.navbar-custom').addClass('is-fixed');
                }
                this.previousTop = currentTop;


                //adjust the appearance of side-catalog
                $catalog.show()
                if (currentTop > (bannerHeight + 41)) {
                    $catalog.addClass('fixed')
                } else {
                    $catalog.removeClass('fixed')
                }
            });
    }
});

// Renovamen: add following things

// smooth scroll to top or bottom
function smoothTo(target) {
    var coverOffset;
    if (target == 'top') coverOffset = 0;
    else if (target == 'bottom') coverOffset = $('html').height();
    else coverOffset = $(target).offset().top;
    $('body, html').animate({
        scrollTop: coverOffset,
    }, 500);
}

// open or close navbar on mobile
function mobileNavToggle(bgColor) {
    // $('body').toggleClass('navOpen')
    // $('.navbar-toggle').toggleClass('navOpen')

    // close navbar
    if ($('.main-container').hasClass('navOpen')) {
        $('.main-container').removeClass('navOpen')
        $('.main-container').addClass('navClose')
        // when transition end
        setTimeout(function (){
            $('body').css("background-color", "#fff")
            $('.main-container').css({
                "position": "relative",
                "border-radius": "0",
            })
            /*
                It is hard to explain why I add 'navClose' and then remove it ...
                but it really can solve the conflicts between navbar and catalog,
                and avoid some bad animations when the blog is displayed on mobile ...
            */
            $('.main-container').removeClass('navClose')
        }, 550)
    }
    // open navbar
    else {
        $('body').css("background-color", bgColor)
        $('.main-container').css({
            "position": "fixed",
            "border-radius": "10px",
        })
        $('.main-container').addClass('navOpen')
        // $('.main-container').removeClass('navClose')
    }
}

// progress showing on menu
function menuListener() {
    // scroll percent
    var percent = $(this).scrollTop() / ($(document).height() - $(this).height()) * 100;
    if (percent > 100) percent = 100;
  
    $menuText = $('.menu-text');
    $menuBtn = $('.menu-btn-icon');
    if (!percent) {
        percent = 0;
        $menuText.css('display','none');
        $menuBtn.css('display','block');
    } 
    else {
        $menuText.css('display','block');
        $menuText.text(Math.round(percent) + '%');
        $menuBtn.css('display','none');
    }
  
    // update strokeDasharray
    $('.menu-border').css('stroke-dasharray', 3.1415926 * (percent || 0) + '% 314.15926%')
};
  
$(document).ready(function () {
    $(window).scroll(function(){
        menuListener();
    });
});