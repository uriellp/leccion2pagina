var $puntos =0;
	    var $arlen =0;
		var $arlen2 =0;
		var $arlen3 =0;
		var $arlen4 =0;
		var $arlen5 =0;
		var $arlen6 =0;
		var $arlen7 =0;
		var $arlen8 =0;
			
	    $(document).ready(function() {

			$("#tarea3").hide();
			$('.error18').hide();
			
			$.fx.speeds._default = 1000;
			$(function(){ $( "#e19" ).dialog({autoOpen: false,show: "blind",hide: "explode", width: 10});});
			$(function(){ $( "#e20" ).dialog({autoOpen: false,show: "blind",hide: "explode", width: 10});});
			$(function(){ $( "#e21" ).dialog({autoOpen: false,show: "blind",hide: "explode", width: 10});});
			$(function(){ $( "#e22" ).dialog({autoOpen: false,show: "blind",hide: "explode", width: 10});});
			$(function(){ $( "#e23" ).dialog({autoOpen: false,show: "blind",hide: "explode", width: 10});});
			$(function(){ $( "#e24" ).dialog({autoOpen: false,show: "blind",hide: "explode", width: 10});});
			$(function(){ $( "#e25" ).dialog({autoOpen: false,show: "blind",hide: "explode", width: 10});});
			$(function(){ $( "#e26" ).dialog({autoOpen: false,show: "blind",hide: "explode", width: 10});});
			//elementos que se pueden arrastrar 
		    $(".arrastrable").draggable();
			$(".arrastrable").data("soltado", false);
			
			//variable para contar los elementos soltados CARACTERÍSTICAS
			$(".suelta3").data("numsoltar", 0);
			//elementos donde se puede soltar
			$(".suelta3").droppable({
				drop: function( event, ui ) {
					if (!ui.draggable.data("soltado")){
						ui.draggable.data("soltado", true);
						var elem1 = $(this);
						elem1.data("numsoltar", elem1.data("numsoltar") + 1)
						//elem1.html("Llevo " + elem1.data("numsoltar") + " elementos soltados");
						$arlen = elem1.data("numsoltar");
					}
				},
				out: function( event, ui ) {
					if (ui.draggable.data("soltado")){
						ui.draggable.data("soltado", false);
						var elem1 = $(this);
						elem1.data("numsoltar", elem1.data("numsoltar") - 1);
						//elem1.html("Llevo " + elem1.data("numsoltar") + " elementos soltados");
						$arlen = elem1.data("numsoltar");
					}
				}
				});
				
				//variable para contar los elementos soltados COMPORTAMIENTOS
			$(".suelta4").data("numsoltar", 0);
			//elementos donde se puede soltar
			$(".suelta4").droppable({
				drop: function( event, ui ) {
					if (!ui.draggable.data("soltado")){
						ui.draggable.data("soltado", true);
						var elem2 = $(this);
						elem2.data("numsoltar", elem2.data("numsoltar") + 1)
						//elem2.html("Llevo " + elem2.data("numsoltar") + " elementos soltados");
						$arlen2 = elem2.data("numsoltar");
					}
				},
				out: function( event, ui ) {
					if (ui.draggable.data("soltado")){
						ui.draggable.data("soltado", false);
						var elem2 = $(this);
						elem2.data("numsoltar", elem2.data("numsoltar") - 1);
						//elem2.html("Llevo " + elem2.data("numsoltar") + " elementos soltados");
						$arlen2 = elem2.data("numsoltar");
					}
				}
				
			});
			//variable para contar los elementos soltados COMPORTAMIENTOS
			$(".suelta5").data("numsoltar", 0);
			//elementos donde se puede soltar
			$(".suelta5").droppable({
				drop: function( event, ui ) {
					if (!ui.draggable.data("soltado")){
						ui.draggable.data("soltado", true);
						var elem3 = $(this);
						elem3.data("numsoltar", elem3.data("numsoltar") + 1)
						//elem2.html("Llevo " + elem2.data("numsoltar") + " elementos soltados");
						$arlen3 = elem3.data("numsoltar");
					}
				},
				out: function( event, ui ) {
					if (ui.draggable.data("soltado")){
						ui.draggable.data("soltado", false);
						var elem3 = $(this);
						elem3.data("numsoltar", elem3.data("numsoltar") - 1);
						//elem2.html("Llevo " + elem2.data("numsoltar") + " elementos soltados");
						$arlen3 = elem3.data("numsoltar");
					}
				}
				
			});
			//variable para contar los elementos soltados COMPORTAMIENTOS
			$(".suelta6").data("numsoltar", 0);
			//elementos donde se puede soltar
			$(".suelta6").droppable({
				drop: function( event, ui ) {
					if (!ui.draggable.data("soltado")){
						ui.draggable.data("soltado", true);
						var elem4 = $(this);
						elem4.data("numsoltar", elem4.data("numsoltar") + 1)
						//elem2.html("Llevo " + elem2.data("numsoltar") + " elementos soltados");
						$arlen4 = elem4.data("numsoltar");
					}
				},
				out: function( event, ui ) {
					if (ui.draggable.data("soltado")){
						ui.draggable.data("soltado", false);
						var elem4 = $(this);
						elem4.data("numsoltar", elem4.data("numsoltar") - 1);
						//elem2.html("Llevo " + elem2.data("numsoltar") + " elementos soltados");
						$arlen4 = elem4.data("numsoltar");
					}
				}
				
			});
		
			//variable para contar los elementos soltados COMPORTAMIENTOS
			$(".suelta7").data("numsoltar", 0);
			//elementos donde se puede soltar
			$(".suelta7").droppable({
				drop: function( event, ui ) {
					if (!ui.draggable.data("soltado")){
						ui.draggable.data("soltado", true);
						var elem5 = $(this);
						elem5.data("numsoltar", elem5.data("numsoltar") + 1)
						//elem2.html("Llevo " + elem2.data("numsoltar") + " elementos soltados");
						$arlen5 = elem5.data("numsoltar");
					}
				},
				out: function( event, ui ) {
					if (ui.draggable.data("soltado")){
						ui.draggable.data("soltado", false);
						var elem5 = $(this);
						elem5.data("numsoltar", elem5.data("numsoltar") - 1);
						//elem2.html("Llevo " + elem2.data("numsoltar") + " elementos soltados");
						$arlen5 = elem5.data("numsoltar");
					}
				}
			});
			//variable para contar los elementos soltados COMPORTAMIENTOS
			$(".suelta8").data("numsoltar", 0);
			//elementos donde se puede soltar
			$(".suelta8").droppable({
				drop: function( event, ui ) {
					if (!ui.draggable.data("soltado")){
						ui.draggable.data("soltado", true);
						var elem6 = $(this);
						elem6.data("numsoltar", elem6.data("numsoltar") + 1)
						//elem2.html("Llevo " + elem2.data("numsoltar") + " elementos soltados");
						$arlen6 = elem6.data("numsoltar");
					}
				},
				out: function( event, ui ) {
					if (ui.draggable.data("soltado")){
						ui.draggable.data("soltado", false);
						var elem6 = $(this);
						elem6.data("numsoltar", elem6.data("numsoltar") - 1);
						//elem2.html("Llevo " + elem2.data("numsoltar") + " elementos soltados");
						$arlen6 = elem6.data("numsoltar");
					}
				}
			});
			//variable para contar los elementos soltados COMPORTAMIENTOS
			$(".suelta9").data("numsoltar", 0);
			//elementos donde se puede soltar
			$(".suelta9").droppable({
				drop: function( event, ui ) {
					if (!ui.draggable.data("soltado")){
						ui.draggable.data("soltado", true);
						var elem7 = $(this);
						elem7.data("numsoltar", elem7.data("numsoltar") + 1)
						//elem2.html("Llevo " + elem2.data("numsoltar") + " elementos soltados");
						$arlen7 = elem7.data("numsoltar");
					}
				},
				out: function( event, ui ) {
					if (ui.draggable.data("soltado")){
						ui.draggable.data("soltado", false);
						var elem7 = $(this);
						elem7.data("numsoltar", elem7.data("numsoltar") - 1);
						//elem2.html("Llevo " + elem2.data("numsoltar") + " elementos soltados");
						$arlen7 = elem7.data("numsoltar");
					}
				}
			});
			//variable para contar los elementos soltados COMPORTAMIENTOS
			$(".suelta10").data("numsoltar", 0);
			//elementos donde se puede soltar
			$(".suelta10").droppable({
				drop: function( event, ui ) {
					if (!ui.draggable.data("soltado")){
						ui.draggable.data("soltado", true);
						var elem8 = $(this);
						elem8.data("numsoltar", elem8.data("numsoltar") + 1)
						//elem2.html("Llevo " + elem2.data("numsoltar") + " elementos soltados");
						$arlen8 = elem8.data("numsoltar");
					}
				},
				out: function( event, ui ) {
					if (ui.draggable.data("soltado")){
						ui.draggable.data("soltado", false);
						var elem8 = $(this);
						elem8.data("numsoltar", elem8.data("numsoltar") - 1);
						//elem2.html("Llevo " + elem2.data("numsoltar") + " elementos soltados");
						$arlen8 = elem8.data("numsoltar");
					}
				}
			});
				
				//soltar solo elementos rojos
			$("#p1").droppable("option", "accept", ".nombre"); 
			$("#p1").droppable("option", "accept", ".nombre"); 
			$("#p2").droppable("option", "accept", ".estados");
			$("#p3").droppable("option", "accept", ".llamada");
			$("#p4").droppable("option", "accept", ".mp");
			$("#p5").droppable("option", "accept", ".el_nom");
			$("#p6").droppable("option", "accept", ".la_clase");
			$("#p7").droppable("option", "accept", ".metodo");
			$("#p8").droppable("option", "accept", ".cuerpo");
			//soltar solo elementos azules		
			
			});
	
			//Efecto para el cuadro de diálogo
			$.fx.speeds._default = 1000;
			$(function() {
				$( "#dialog" ).dialog({
					autoOpen: false,
					show: "blind",
					hide: "explode"
				});
		
			});
				
			$.fx.speeds._default = 1000;
			$(function() {
				$( "#dialog2" ).dialog({
					autoOpen: false,
					show: "blind",
					hide: "explode"
				});
				
		  		$('#validar3').click(function(){
		  		
		  			$(".arrastrable").draggable({ disabled: true });
		  			$("#tarea3").show("slow");
		  		
		  			var $puntos = $arlen+$arlen2+$arlen3+$arlen4+$arlen5+$arlen6+$arlen7+$arlen8; //++++++++++++++++++++++++ VARIABLE ALMACENAR EN BASE DE DATOS +++++++++++++++++
					
		  			jAlert($puntos);
		  			if($puntos <9)
					{
						
						$('.error18').show("slow");
						
					}	
		  			
		  		});
		  		
		    	$('.error18').click(function()
		    	{  
		    		$( "#e19" ).dialog( "open" );
		    		$( "#e20" ).dialog( "open" );
		    		$( "#e21" ).dialog( "open" );
		    		$( "#e22" ).dialog( "open" );
		    		$( "#e23" ).dialog( "open" );
		    		$( "#e24" ).dialog( "open" );
		    		$( "#e25" ).dialog( "open" );
		    		$( "#e26" ).dialog( "open" );
		    	});
		
			});


	
				$(window).load(function() {
	      	      		
	      			$('#startTour3').click(function(){
	      			  
	      		  		$('#joyRideTipContent').joyride({
	           
	  				'scrollSpeed': 3000,              
	  				'timer': 6000,                   
	  				'startTimerOnClick': true,       
	   				'nextButton': true,              
		
	              		});
	      			});
	      		});
	    