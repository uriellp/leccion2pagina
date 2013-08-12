$(function() {
	
  $('.error').hide();
  $('input.text-input').css({backgroundColor:"#FFFFFF"});
  $('input.text-input').focus(function(){$(this).css({backgroundColor:"#FFDDAA"});});
  $('input.text-input').blur(function(){$(this).css({backgroundColor:"#FFFFFF"}); });
 
  $("#submit_btn").click(function() {
  
    $('.error').hide();
	/** VALIDAR RENGLON 1**/
	var cont1 = $("input#cont1").val();
	if (cont1 == "") { alerI(); }

	var cont2 = $("input#cont2").val();
	if (cont2 == "") { alerI(); }

	var cont3 = $("input#cont3").val();
	if (cont3 == "") { alerI(); }

    var cont4 = $("input#cont4").val();
	if (cont4 == "") { alerI(); }
	 
    /** VALIDAR RENGLON 2**/
    var cont5 = $("input#cont5").val(); 
	if (cont5 == "") { alerI(); }

    var cont6 = $("input#cont6").val();
	if (cont6 == "") { alerI(); }
 
    var cont7 = $("input#cont7").val();
	if (cont7 == "") {	alerI(); }
    
    var cont8 = $("input#cont8").val();
	if (cont8 == "") { alerI(); }
     
    /** VALIDAR RENGLON 3**/
    var cont9 = $("input#cont9").val();
	if (cont9 == "") { alerI(); }
 
    var cont10 = $("input#cont10").val();
	if (cont10 == "") { alerI(); }
    
   	var cont11 = $("input#cont11").val();
	if (cont11 == "") { alerI(); }
	
	var cont12 = $("input#cont12").val();
	if (cont12 == "") { alerI(); }
	 
    /*VALIDAR RENGLON 4*/
    var cont13 = $("input#cont13").val();
	if (cont13 == ""){ alerI(); }
   
    var cont14 = $("input#cont14").val();
	if (cont14 == "") { alerI(); }
   
    var cont15 = $("input#cont15").val();
	if (cont15 == "") { alerI(); }

    var cont16 = $("input#cont16").val();
	if (cont16 == "") { alerI(); }
	// Desactivar los cuadrtos te dexto
	
    $("#cont1").prop('disabled', true);
    $("#cont2").prop('disabled', true);
    $("#cont3").prop('disabled', true);
    $("#cont4").prop('disabled', true);
    $("#cont5").prop('disabled', true);
    $("#cont6").prop('disabled', true);
    $("#cont7").prop('disabled', true);
    $("#cont8").prop('disabled', true);
    $("#cont9").prop('disabled', true);
    $("#cont10").prop('disabled', true);
    $("#cont11").prop('disabled', true);
    $("#cont12").prop('disabled', true);
    $("#cont13").prop('disabled', true);
    $("#cont14").prop('disabled', true);
    $("#cont15").prop('disabled', true);
    $("#cont16").prop('disabled', true);
    /////////////////////////////////////////////
    $("#tarea2").show("slow");
    $("#tar").show("slow");
    $("#validar2").show("slow");

    $( "#validar2" ).click(function()
    {
    	var $puntos =0;
    	/** RENGLON 1**/
    	if (cont1 == "constante")
    	{
    		$puntos=$puntos+1;
    	}
    	else
    	{$("#cont1").focus().after("<span class='error2'>X</span>");}
        
        if (cont2 == '"carlos"' || cont2 == '"Carlos"')
    	{
    		$puntos=$puntos+1;
    	}
    	else
    	{$("#cont2").focus().after("<span class='error3'>X</span>");}
    
        if (cont3 == "tipo")
    	{
    		$puntos=$puntos+1;
    	}
    	else
    	{$("#cont3").focus().after("<span class='error4'>X</span>");}
    	
    	if (cont4 == "cadena")
    	{
    		$puntos=$puntos+1;
    	}
    	else
    	{$("#cont4").focus().after("<span class='error5'>X</span>");}
    	
    	/** RENGLON 2**/
    	if (cont5 == "constante")
    	{
    		$puntos=$puntos+1;
    	}
    	else
    	{$("#cont5").focus().after("<span class='error6'>X</span>");}
        
        if (cont6 == "12345")
    	{
    		$puntos=$puntos+1;
    	}
    	else
    	{$("#cont6").focus().after("<span class='error7'>X</span>");}
    	
        if (cont7 == "tipo")
    	{
    		$puntos=$puntos+1;
    	}
    	else
    	{$("#cont7").focus().after("<span class='error8'>X</span>");}
    	
    	if (cont8== "entero")
    	{
    		$puntos=$puntos+1;
    	}
    	else
    	{$("#cont8").focus().after("<span class='error9'>X</span>");}
    	
        /** RENGLON 3**/
        if (cont9 == "constante")
    	{
    		$puntos=$puntos+1;
    	}
    	else
    	{$("#cont9").focus().after("<span class='error10'>X</span>");}
        
        if (cont10 == '"sistemas"' || cont10 == '"Sistemas"' )
    	{
    		$puntos=$puntos+1;
    	}
    	else
    	{$("#cont10").focus().after("<span class='error11'>X</span>");}
    	
        if (cont11 == "tipo")
    	{
    		$puntos=$puntos+1;
    	}
    	else
    	{$("#cont11").focus().after("<span class='error12'>X</span>");}
    	
    	if (cont12== "cadena")
    	{
    		$puntos=$puntos+1;
    	}
    	else
    	{$("#cont12").focus().after("<span class='error13'>X</span>");}
    	
    	/** RENGLON 4**/
        if (cont13 == "variable")
    	{
    		$puntos=$puntos+1;
    	}
    	else
    	{$("#cont13").focus().after("<span class='error14'>X</span>");}
        
        if (cont14 == 1)
    	{
    		$puntos=$puntos+1;
    	}
    	else
    	{$("#cont14").focus().after("<span class='error15'>X</span>");}
    	
        if (cont15 == "tipo")
    	{
    		$puntos=$puntos+1;
    	}
    	else
    	{$("#cont15").focus().after("<span class='error16'>X</span>");}
    	
    	if (cont16== "entero")
    	{
    		$puntos=$puntos+1;
    	} 
    	else
    	{$("#cont16").focus().after("<span class='error17'>X</span>");}
    	
    	$('.error2').mouseover(function(){$('audio')[0].play();});
    	$('.error2').click(function(){  $( "#e3" ).dialog( "open" );  });
  		$('.error3').click(function(){  $( "#e4" ).dialog( "open" );  });
  		$('.error4').click(function(){  $( "#e5" ).dialog( "open" );  });
  		$('.error5').click(function(){  $( "#e6" ).dialog( "open" );  });
  		$('.error6').click(function(){  $( "#e7" ).dialog( "open" );  });
  		$('.error7').click(function(){  $( "#e8" ).dialog( "open" );  });
  		$('.error8').click(function(){  $( "#e9" ).dialog( "open" );  });
  		$('.error9').click(function(){  $( "#e10" ).dialog( "open" );  });
  		$('.error10').click(function(){  $( "#e11" ).dialog( "open" );  });
  		$('.error11').click(function(){ $( "#e12").dialog( "open" );  });
  		$('.error12').click(function(){ $( "#e13").dialog( "open" );  });
  		$('.error13').click(function(){ $( "#e14").dialog( "open" );  });
  		$('.error14').click(function(){ $( "#e15").dialog( "open" );  });
  		$('.error15').click(function(){ $( "#e16").dialog( "open" );  });
  		$('.error16').click(function(){ $( "#e17").dialog( "open" );  });
  		$('.error17').click(function(){ $( "#e18").dialog( "open" );  });
    	jAlert($puntos);
    });
		var dataString = 'cont1='+ cont1 + 'cont2=' + cont2 + 'cont3=' + cont3;
		//alert (dataString);return false;
		
		$.ajax({
      type: "POST",
      url: "bin/process.php",
      data: dataString,
      success: function() {
        $('#contact_form').html("<div id='message'></div>");
        $('#message').html("<h2>Contact Form Submitted!</h2>")
        .append("<p>We will be in touch soon.</p>")
        .hide()
        .fadeIn(1500, function() {
          $('#message').append("<img id='checkmark' src='images/check.png' />");
        });
      }
     });
    return false;
	});
});