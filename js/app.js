/*esconde el mensaje
jQuery(".advertencia").hide();
//mostrar el mensaje lentamente usamos atajo$
$(".advertencia").show("slow");*/

/*function enviarAdvertencia()
{
	jQuery(".advertencia").hide().show("slow");	
}

le pasamos al handler la funcion sin parentesis
$(document).ready(enviarAdvertencia);*/

//1. esconder spiler
$(".Spoiler span").hide();

//2. agregar boton
$(".Spoiler").append("<button> Mostrar Spoiler! </button>");


//3. cuando se presiona el boton
//agregar un handler al evento click
$(".Spoiler button").click(function(){
	//3.1 Mostrar spoiler
	$(".Spoiler span").show();
	//3.2 Deshacerse del boton
	$(this).remove();
})
function enviarAdvertencia()
{
	jQuery(".Spoiler").hide().show("slow");
}
//le pasamos al handler la funcion sin parentesis
$(document).ready(enviarAdvertencia);