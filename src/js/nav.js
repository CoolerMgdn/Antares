//Уменьшение шапки при скролле
let vh = window.innerHeight * 0.01;
$(window).scroll( () => {
    var windowTop = $(window).scrollTop();
    windowTop > 85*vh ? $('nav').addClass('navShadow') : $('nav').removeClass('navShadow');
    windowTop > 85*vh ? $('ul').css('top','60px') : $('ul').css('top','60px');
});