function calculo(){

    valorTicket=200;

    cantidad= document.getElementById(validationDefault03);


    var categorias= document.getElementById(categ);

    var tipo= tipo.options[tipo.selectedIndex].value;

   // var select_activa=select.options[select.selectedIndex].value;//

   result=0;
   // switch(select_activa=parseInt(select_activa))//
   switch(tipo=parseInt(tipo)){
    case 1:
        result= cantidad* valorTicket;
        break;

    case 2:
        result= (valorTicket-(valorTicket*0,8))*cantidad;
        break;
         
    case 3:
        result= (valorTicket-(valorTicket*0,5))*cantidad;
        break;

    case 4:
        result= (valorTicket-(valorTicket*0,15))*cantidad;
        break;

   }
  
   document.getElementById("Pagar").value=result;

}

