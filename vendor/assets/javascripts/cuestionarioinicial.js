function validarFormulario() {
  var s =0;
  for ( var i = 0; i < 4; i++ ) {
    if ( document.forms['evaluacion']['radio1'][i].checked ) {
    s++;
    break;
    }
  }
  for ( var i = 0; i < 4; i++ ) {
    if ( document.forms['evaluacion']['radio2'][i].checked ) {
     s++;
    break;
    }
  }
  for ( var i = 0; i < 4; i++ ) {
    if ( document.forms['evaluacion']['radio3'][i].checked ) {
     s++;
    break;
    }
  }
  for ( var i = 0; i < 4; i++ ) {
    if ( document.forms['evaluacion']['radio4'][i].checked ) {
    s++;
    break;
    }
  }
  for ( var i = 0; i < 4; i++ ) {
    if ( document.forms['evaluacion']['radio5'][i].checked ) {
     s++;
    break;
    }
  }
  for ( var i = 0; i < 4; i++ ) {
    if ( document.forms['evaluacion']['radio6'][i].checked ) {
     s++;
    break;
    }
  }
  for ( var i = 0; i < 4; i++ ) {
    if ( document.forms['evaluacion']['radio7'][i].checked ) {
     s++;
    break;
    }
  }
  for ( var i = 0; i < 4; i++ ) {
    if ( document.forms['evaluacion']['radio8'][i].checked ) {
     s++;
    break;
    }
  }
  for ( var i = 0; i < 4; i++ ) {
    if ( document.forms['evaluacion']['radio9'][i].checked ) {
    s++;
    break;
    }
  }
  for ( var i = 0; i < 4; i++ ) {
    if ( document.forms['evaluacion']['radio10'][i].checked ) {
     s++;
    break;
    }
  }  
  if ( s < 10 ){
  	
	alert( "Falta responder una o más preguntas, favor de revisar." ) ;
  }
   if ( s == 10 ){
  	
  	var c=0;
    if (document.forms['evaluacion']['radio1'][0].checked)
        {
        c++;
        }
    if (document.forms['evaluacion']['radio2'][0].checked)
        {
        c++;
        }
    if (document.forms['evaluacion']['radio3'][0].checked)
        {
     	c++;
        }
    if (document.forms['evaluacion']['radio4'][0].checked)
        {
        c++;
        }
    if (document.forms['evaluacion']['radio5'][0].checked)
        {
        c++;
        }
    if (document.forms['evaluacion']['radio6'][0].checked)
        {
        c++;
        }
    if (document.forms['evaluacion']['radio7'][0].checked)
        {
        c++;
        }
    if (document.forms['evaluacion']['radio8'][0].checked)
        {
        c++;
        }
    if (document.forms['evaluacion']['radio9'][0].checked)
        {
        c++;
        }
    if (document.forms['evaluacion']['radio10'][0].checked)
        {
        c++;
        }
       alert('Tu calificacion es ' + c );
       //alert("Falta responder una o mas preguntas, favor de revisar.");
  }  
}
function pasarVariables(pagina, nombres) {
pagina +="?";
nomVec = nombres.split(",");
for (i=0; i<nomVec.length; i++)
pagina += nomVec[i] + "=" + escape(eval(nomVec[i]))+"&";
pagina = pagina.substring(0,pagina.length-1);
location.href=pagina;
}


