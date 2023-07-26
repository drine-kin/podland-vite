function adjustWidth() {
	var parentwidth = $("main").width();
	console.log(parentwidth);
	$(".child").width(parentwidth);
}

$(function () {
	$(window).resize(function () {
		adjustWidth();
	});
});
