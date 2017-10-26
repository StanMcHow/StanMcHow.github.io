$(document).ready(function() {  
    	$('#myCarousel, #2017Carousel').hammer().on('swipeleft', function(){
  			$(this).carousel('next'); 
  		})
  		$('#myCarousel, #2017Carousel').hammer().on('swiperight', function(){
  			$(this).carousel('prev'); 
  		})
 }); 