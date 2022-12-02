function calcular()
{

valorTicket=200;
cantidad= document.getElementById("cant").value


var tipo= document.getElementById("descuento");
var tipo_elgido=tipo.options[tipo.selectedIndex].value;

result=0;


switch(tipo_elgido=parseInt(tipo_elgido))
{
    case 1:
           result=valorTicket*cantidad;
           break;
    case 2:
           result=(valorTicket-valorTicket*0.8)*cantidad;
           break;
    case 3:
           result=(valorTicket-valorTicket*0.5)*cantidad;
           break;
    case 4:
           result=(valorTicket-valorTicket*0.15)*cantidad;
           break;
}
document.getElementById("valor3").value=result;
}

