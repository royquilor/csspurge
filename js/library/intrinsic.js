// count = 0

$('document').ready(function(){

	// Find all YouTube videos
	var $allVideos = $("iframe[src^='http://player.vimeo.com'], iframe[src^='https://player.vimeo.com'], iframe[src^='//player.vimeo.com'], iframe[src^='http://www.youtube.com'], iframe[src^='https://www.youtube.com'], iframe[src^='//www.youtube.com']");

	// The element that is fluid width
	$fluidEl = $("article");

	// Figure out and save aspect ratio for each video
	$allVideos.each(function() {

		$(this)
		.data('aspectRatio', this.height / this.width)
		// and remove the hard coded width/height
		.removeAttr('height')
		.removeAttr('width');

	});

	// When the window is resized
	$(window).resize(function() {

		var newWidth = $fluidEl.width();

		$allVideos.each(function() {

		var $el = $(this);
		$el
			.width(newWidth)
			.height(newWidth * $el.data('aspectRatio'));

		});

	}).resize();
});
