/* Version 0.1 17th January 2014 */

/* 
 * Menu-Slider is a light-weight off-canvas navigation menu 
 * made of CSS & jQuery
 */

/* Created by Vignesh DV */

var state = true;

$('.menu-button').click(function(e) {
			state = false;
       		$('.nav-canvas-wrap').animate({left:'0'},500,'swing');
			setTimeout(function() {
					state = true;
					$('.nav-canvas-wrap').animate({left:'-210'},500,'swing');
			}, 10000);
});

$('.nav-canvas-wrap').click(function(e) {
    if(!state) {
		$('.nav-canvas-wrap').animate({left:'-210'},500,'swing');
	}
});


	
	
	
	