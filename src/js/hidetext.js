$(document).ready(function(){
	$('.content_toggle').click(function(){
		$('.content_text').toggleClass('hide');	
		if ($('.content_text').hasClass('hide')) {
			$('.content_toggle').html('Скрыть');
		} else {
			$('.content_toggle').html('Подробнее');
		}		
		return false;
	});				
});