$(document).ready(function(){

	$("div a.page-scroll").on("click", function(e){
		e.preventDefault();
		$("html body").animate({ scrollTop: $("#about-me").offset().top }, 1000);
	});

});