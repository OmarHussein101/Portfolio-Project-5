/* globale $, console, alert */

$(function () {
    
    'use strict';
    
    $('body').niceScroll({
        
        cursorcolor: "#70CBCE",
        cursorwidth: '5px'
    });
    
    // Smooth Scroll To Section
    
    $('.header .header-head ul a').click(function () {
       
        $('html, body').animate({
            
            scrollTop: $("#" + $(this).data('scroll')).offset().top
            
        }, 1000);
        
    });
    
});