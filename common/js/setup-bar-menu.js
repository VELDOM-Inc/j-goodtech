$(function(){
	$('.setup-bar-btn').on('click', function(){
		$('.setup-bar__menu').toggleClass('is-active');
	});

	$('.btn-menu-close').on('click', function () {
		$('.setup-bar__menu').removeClass("is-active");
		return false;
	});
}());
	