$(".switch").click(function(e){e.preventDefault();$("#change").toggleClass("toggled");});

  $("#search-button, #search-icon").click(function(e) {
    e.preventDefault();
    $("#search-button, #search-icon, #search-form").toggle();
  });
$("#add-medication, .invis").click(function(e) {
    e.preventDefault();
    $("#add-medication, .add-medication").toggle();
  });
