$(window).on('load', function() {
	set_container_size();
});

$(window).on('resize', function() {
	set_container_size();
});

var set_container_size = function() {
  var window_height = $(window).height();
	$(".full-screen-index").css("height", window_height)
	$(".intro-container").css("height", 0.7 * window_height)
}
