var lista = document.getElementsByClassName("ui-widget-header");
var turno = 0;
  $( function() {
    $( "#draggable0" ).draggable({ revert: "invalid" });
    $( "#draggable1" ).draggable({ revert: "invalid" });
    $( "#draggable2" ).draggable({ revert: "invalid" });
    $( "#draggable3" ).draggable({ revert: "invalid" });
    $( "#draggable4" ).draggable({ revert: "invalid" });
    $( "#draggable5" ).draggable({ revert: "invalid" });
    $( "#draggable6" ).draggable({ revert: "invalid" });
    $( "#draggable7" ).draggable({ revert: "invalid" });
    $( "#draggable8" ).draggable({ revert: "invalid" });

    for (var i = 0; i < lista.length; i++) {
      var x = lista[i];
      $("#"+x.id).droppable({
        classes: {
          "ui-droppable-active": "ui-state-active",
          "ui-droppable-hover": "ui-state-hover"
        },
        drop: function( event, ui ) {
          $( this )
            .addClass( "ui-state-highlight" )
        }
      });
    }
  } );
function criar(nub){
		var x = document.getElementById("principal");
		var id = '"draggable'+nub+'">';
		var id2 = "draggable"+nub;
		if (nub%2 === 1) {
			x.innerHTML += '<img src="o.png" class="ui-widget-content" id='+id;
		}else{
			x.innerHTML += '<img src="x.png" class="ui-widget-content" id='+id;
		}
		var y = document.getElementById(id2);
		y.style.display = "none";
}
function reiniciar(){
	location.reload();
}
for (var i = 0; i < 9; i++) {
	criar(i);
}

function exibe(){
	var id = "draggable"+turno;
	var x = document.getElementById(id);
	x.style.display = "block";
	turno++;
	var y = document.getElementById("b1");
	if (y.innerHTML === "Iniciar") {
		y.innerHTML = "Passar turno";
	}
}