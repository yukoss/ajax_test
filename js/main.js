
//region //=== Ajax ===//
jQuery(function($){

	var downloadEvent = $(".download"),
		successEvent = $(".success"),
		clickEvent = $(".click-btn"),
		errorEvent = $(".error");

	clickEvent.click(function(event){

		event.preventDefault(event);
		clickEvent.animate({top: -80}, 1500);

		$.ajax({
			url: "http://anton.shevchuk.name/book/code/ajax/example.php?callback=?",
			type: "GET",
			dataType: "jsonp",
			crossDomain: true,
			beforeSend: function(){
				$(".download").show("slow");
			},
			success: function(){
				downloadEvent.hide("slow");
				successEvent.fadeIn("slow");
			},
			error: function(){
				downloadEvent.hide("slow");
				errorEvent.fadeIn("slow");
			},
			complete: function(){
				setTimeout(function (){
					successEvent.fadeOut("slow");
					errorEvent.fadeOut("slow");
					clickEvent.animate({top: '50%'}, 1000);
				}, 5000);
			}
		});
	});

});
//endregion


//region //=== Spin Loader ===//
var opts = {
	lines: 12, // The number of lines to draw
	length: 15, // The length of each line
	width: 5, // The line thickness
	radius: 10, // The radius of the inner circle
	corners: 1, // Corner roundness (0..1)
	rotate: 0, // The rotation offset
	direction: 1, // 1: clockwise, -1: counterclockwise
	color: '#000', // #rgb or #rrggbb or array of colors
	speed: 1, // Rounds per second
	trail: 60, // Afterglow percentage
	shadow: false, // Whether to render a shadow
	hwaccel: false, // Whether to use hardware acceleration
	className: 'spinner', // The CSS class to assign to the spinner
	zIndex: 2e9, // The z-index (defaults to 2000000000)
	top: '50%', // Top position relative to parent
	left: '50%' // Left position relative to parent
};
var target = document.getElementsByClassName("download");
var spinner = new Spinner(opts).spin(target[0]);
//endregion

