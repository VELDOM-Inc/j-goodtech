if (window.matchMedia('(max-width: 767px)').matches) {
	$(function() {
		$('.slider_sp').slick({
			dots: false,
			infinite: false,
			arrows: true,
			speed: 500,
			slidesToShow: 2,
			autoplay: false,
			slidesToScroll: 1
		});
	});
} else if (window.matchMedia('(min-width:768px)').matches) {
}

