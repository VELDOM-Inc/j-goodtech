$(function () {
	$('.js-modal-open').each(function () {
		$(this).on('click', function () {
			$('body').addClass("show");
			$('.modal__inner').addClass("show2");

			var target = $(this).data('target');
			var modal = document.getElementById(target);
			$(modal).fadeIn("fast");
			return false;
		});
	});
	$('.modal-bar__btn , .modal__bg , .btn-cancel').on('click', function () {
		$('.modal').fadeOut("fast");
		$('body').removeClass("show");
		$('.modal__inner').removeClass("show2");
		return false;
	});
	
	$('.btn-next').on('click', function () {
		$(this).parents('.modal').fadeOut("fast");
		return false;
	});
});