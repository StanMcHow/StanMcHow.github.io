/*$(".switch").click(function() {
    $(".sidebar").toggle();
});*/
$(".switch").click(function(e){e.preventDefault();$("#change").toggleClass("toggled");});
