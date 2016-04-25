$(".switch").click(function(e){e.preventDefault();$("#change").toggleClass("toggled");});

  $("#search-button, #search-icon").click(function(e) {
    e.preventDefault();
    $("#search-button, #search-icon, #search-form").toggle();
  });
$("#add-medication, .invis").click(function(e) {
    e.preventDefault();
    $("#add-medication, .add-medication").toggle();
  });
$(".edit").click(function(e) {
    e.preventDefault();
    $("#add-medication, .add-medication").toggle();
  });


function admSelectCheck(nameSelect)
{
    if(nameSelect){
        labtypeValue = document.getElementById("labtype").value;
        if(labtypeValue == nameSelect.value){
            document.getElementById("labst").style.display = "block";
            document.getElementById("labsource").style.display = "block";
            document.getElementById("nonlabs").style.display = "none";
        }
        else{
            document.getElementById("labst").style.display = "none";
            document.getElementById("labsource").style.display = "none";
            document.getElementById("nonlabs").style.display = "block";
        }
    }
    else{
        document.getElementById("labst").style.display = "none";
        document.getElementById("labsource").style.display = "none";
        document.getElementById("nonlabs").style.display = "block";
    }
}


