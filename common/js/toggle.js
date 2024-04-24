if (window.matchMedia('(max-width: 767px)').matches) {
	$(function(){
		$('.toggle__title').on('click',function() {
			$(this).toggleClass('selected');
			$(this).next().slideToggle();
			$('.toggle__title').not($(this)).next().slideUp();
			$('.toggle__title').not($(this)).removeClass('selected');
		});
	});
} else if (window.matchMedia('(min-width:768px)').matches) {
}