$(function() {
	$('.slider').slick({
		dots: true,
		infinite: false,
		arrows: false,
		speed: 500,
		slidesToShow: 3,
		autoplay: true,
		slidesToScroll: 3,
		responsive: [
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});
});

if (window.matchMedia('(max-width: 767px)').matches) {
	$(function() {
		$('.slider-sp').slick({
			dots: true,
			infinite: false,
			arrows: false,
			speed: 500,
			slidesToShow: 1,
			autoplay: false,
			slidesToScroll: 1
		});
	});
} else if (window.matchMedia('(min-width:768px)').matches) {
}