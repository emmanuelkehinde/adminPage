$( document ).ready(function() {

	$('#sidebar_hamburger').click(function(e){
		e.preventDefault();
		$('.main-wrapper').toggleClass("sidebarDisplayed");
	});
	
});