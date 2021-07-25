//credits https://css-tricks.com/snippets/jquery/move-cursor-to-end-of-textarea-or-input/
jQuery.fn.putCursorAtEnd = function() {
	return this.each(function() {
    	// If this function exists...
    	if (this.setSelectionRange) {
      		// ... then use it (Doesn't work in IE)
      		// Double the length because Opera is inconsistent about whether a carriage return is one character or two. Sigh.
      		var len = $(this).val().length * 2;
      		this.setSelectionRange(len, len);
    	} else {
    		// ... otherwise replace the contents with itself
    		// (Doesn't work in Google Chrome)
      		$(this).val($(this).val());
    	}
	});
};    

$( () => {

	//Уменьшение шапки при скролле
	let vh = window.innerHeight * 0.01;
	$(window).scroll( () => {
		var windowTop = $(window).scrollTop();
		windowTop > 85*vh ? $('nav').addClass('navShadow') : $('nav').removeClass('navShadow');
		windowTop > 85*vh ? $('ul').css('top','70px') : $('ul').css('top','90px');
	});
	
	//Клик на лого - скролл до верха
	$('.img').on('click', () => {
		$('html,body').animate({
			scrollTop: 0
		},500);
	});
	
	//Плавная прокрутка
	$('a[href*="#"]').on('click', function(e){
		$('html,body').animate({
			scrollTop: $($(this).attr('href')).offset().top - 100
		},500);
		e.preventDefault();
	});
	
	//Toggle Menu
	$('#menu-toggle').on('click', () => {
		$('#menu-toggle').toggleClass('closeMenu');
		$('ul').toggleClass('showMenu');
		
		$('li').on('click', () => {
			$('ul').removeClass('showMenu');
			$('#menu-toggle').removeClass('closeMenu');
		});
	});
});