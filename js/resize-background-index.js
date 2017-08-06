$(window).on('load', function() {
	set_container_size();
});

$(window).on('resize', function() {
	set_container_size();
});

var set_container_size = function() {
  var height = $(window).height();
	$(".full-screen-index").css("height", height)
	$(".intro-container").css("height", 0.7 * height)
}
