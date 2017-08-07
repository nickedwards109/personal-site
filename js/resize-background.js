$(window).on('load', function() {
	set_image_container_size();
});

$(window).on('resize', function() {
	set_image_container_size();
});

var set_image_container_size = function() {
  var window_height = $(window).height();
	$(".background-image").css("height", window_height);
}
