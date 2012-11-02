;(function($) {
	
	$('body').on('click', '.js-3d-flip', function() {
		$(this).closest('.ui-3d-card-container').toggleClass('flipped');
	});
	
})(jQuery);
