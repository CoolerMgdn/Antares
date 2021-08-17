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

	//Blur
	$(".content_text_help_body1").hover(function () {
		$('.content_text_help_img1').toggleClass("blur");
	});
	$(".content_text_help_body2").hover(function () {
		$('.content_text_help_img2').toggleClass("blur");
	});
	$(".content_text_help_body3").hover(function () {
		$('.content_text_help_img3').toggleClass("blur");
	});
	$(".content_text_help_body4").hover(function () {
		$('.content_text_help_img4').toggleClass("blur");
	});
	$(".content_text_help_body5").hover(function () {
		$('.content_text_help_img5').toggleClass("blur");
	});
});