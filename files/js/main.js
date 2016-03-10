$(function(){
	$('.switch').on('click', function(){
		$('.sidebar').Toggle();
	});
});
$("#menu-toggle").click(function(e){e.preventDefault();$("#sidebar").toggleClass("toggled");});