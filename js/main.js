//Adaptive functions
$(window).resize(function(event) {
    adaptive_function();
});
function adaptive_header (w,h) {
    var headerMenu=$('.header-menu');
    var headerList=$('.header__list');
    if(w<768) {
        if(!headerList.hasClass('done')){
            headerList.addClass('done').appendTo(headerMenu);
        }
    } else {
        if (headerList.hasClass('done')) {
            headerList.removeClass('done').appendTo($('.header__nav'));
        }
    }
}
function adaptive_function() {
    var w=$(window).outerWidth();
    var h=$(window).outerHeight();
    adaptive_header(w,h);
}

adaptive_function();
//=========================

//Open and hide burger menu
$('.header-menu__icon').click(function(event) {
    $(this).toggleClass('active');
    $('.header-menu').toggleClass('active');
    if ($(this).hasClass('active')) {
        $('body').data('scroll', $(window).scrollTop());
    }
        $('body').toggleClass('lock');
    if (!$(this).hasClass('active')) {
        $('body,html').scrollTop(parseInt($('body').data('scroll')));
    }
});
//=========================
