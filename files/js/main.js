$(".switch").click(function(e){e.preventDefault();$("#change").toggleClass("toggled");});
$(function() {
  $("#search-button, #search-icon").click(function(e) {
    e.preventDefault();

    $("#search-button, #search-icon, #search-form").toggle();
  });
});