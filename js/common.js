$(function(){
	var welcomSection = $('#intro')
  setTimeout(function(){
  	welcomSection.addClass('content-hidden').fadeOut(1500);
  },100);

	$('.nav').on("click",function(){
		if($(this).closest('section').attr('id') == 'profile') {
			$('#profile').css({'z-index':9998}).fadeOut(1500);
			$('#works').css({'z-index':9997}).fadeIn(1500);
		} else {
			$('#works').css({'z-index':9998}).fadeOut(1500);
			$('#profile').css({'z-index':9997}).fadeIn(1500);
		}
	})
})
