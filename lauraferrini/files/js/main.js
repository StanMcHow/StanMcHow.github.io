$(document).ready(function() {  
    	$('#myCarousel').hammer().on('swipeleft', function(){
  			$(this).carousel('next'); 
  		})
  		$('#myCarousel').hammer().on('swiperight', function(){
  			$(this).carousel('prev'); 
  		})
 }); 
