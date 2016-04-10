/*esconde el mensaje
jQuery(".advertencia").hide();
//mostrar el mensaje lentamente usamos atajo$
$(".advertencia").show("slow");*/

function enviarAdvertencia()
{
	jQuery(".advertencia").hide().show("slow");	
}

//le pasamos al handler la funcion sin parentesis
$(document).ready(enviarAdvertencia);
