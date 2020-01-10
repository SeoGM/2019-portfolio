$(function(){
	var welcomSection = $('#intro')
  setTimeout(function(){
  	welcomSection.addClass('content-hidden').fadeOut(1500);
  },800);

	$('.nav').on("click",function(){
		var section;
		if($(this).closest('section').attr('id') == 'profile') {
			$('div.cover').addClass('switch');
			setTimeout(function(){
				$('#profile').hide();
				$('div.cover').removeClass('profile').addClass('works').removeClass('switch');
				$('#works').show();
			},1000);
		} else {
			$('div.cover').addClass('switch');
			setTimeout(function(){
				$('#works').hide();
				$('div.cover').removeClass('works').addClass('profile').removeClass('switch');
				$('#profile').show();
			},1000);
		}

	})
})
