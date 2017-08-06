var win = $(window);

var height = win.height();

$(".full-screen-index").css("height", height)
$(".intro-container").css("height", 0.7 * height)

$(window).on('resize', function() {
  var height = win.height();
	$(".full-screen-index").css("height", height)
	$(".intro-container").css("height", 0.7 * height)
});
