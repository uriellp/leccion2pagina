var fillTheItems1, handImage;

fillTheItems1 = function() {
  var html, k, item, itemId, itemList, itemType, items1, _results;
  itemList = [];
  k = 0;
  while (k < 1) {
    itemList.push("resp" + k);
    itemList.push("er" + k);
    itemList.push("err" + k);
    itemList.push("errr" + k);
    k++;
  }
  itemList.sort(function(a, b, c, d) {
    return Math.round(Math.random());
  });
  items1 = $(".ejercicio #items1");
  _results = [];
  for (item in itemList) {
    itemId = itemList[item];
    itemType = itemId.substring(0, itemId.length - 1);
    html = "<img id='" + itemId + "' draggable='true' class='item' alt='" + itemType + "' src='/assets/" + itemId + ".png' />";
    _results.push(items1.append(html));
  }

  return _results;
};
handImage = new Image();

$(document).ready(function() {
	
  var $contador, $puntos;
  $("#Siguiente1").hide();

			$(function(){
			$( "#dialog" ).dialog({
			autoOpen: true,
			show: "blind"
				});
		});
  $puntos = 0;
  $contador = 0;
  fillTheItems1();
  $(".ejercicio #items1 .item").bind("dragstart", function(event) {
    event.originalEvent.dataTransfer.effectAllowed = "move";
    event.originalEvent.dataTransfer.setData("text/plain", event.target.getAttribute("id"));
    return $(event.target).addClass("itemSelected");
  });
  $(".ejercicio #items1 .item").bind("drag", function(event) {});
  $(".ejercicio #items1 .item").bind("dragend", function(event) {
    return $(event.target).removeClass("itemSelected");
  });
  $(".ejercicio #boxes1 .box").bind("dragenter", function(event) {
    $(event.target).addClass("itemOnDropArea");
    return false;
  });
  $(".ejercicio #boxes1 .box").bind("dragleave", function(event) {
    $(event.target).removeClass("itemOnDropArea");
    return false;
  });
  $(".ejercicio #boxes1 .box").bind("dragover", function(event) {
    event.originalEvent.dataTransfer.dropEffect = "move";
    return false;
  });
  return $(".ejercicio #boxes1 .box").bind("drop", function(event) {
    var dropboxType, itemId, itemType;
    itemId = event.originalEvent.dataTransfer.getData("text/plain");
    itemType = $("#" + itemId).attr("alt");
    dropboxType = $(event.target).attr("id");
    if (dropboxType === "Respuesta") {
      $contador = $contador + 1;
      if (itemType === "resp") {
        $("#" + itemId).remove();
        $puntos = $puntos + 1;
        alert("CORRECTO");	
      } else {
        $("#" + itemId).remove();
        alert("INCORRECTO");
      }
    }
    if (dropboxType === "Error1") {
      $contador = $contador + 1;
      if (itemType === "er") {
        $("#" + itemId).remove();
        $puntos = $puntos + 1;
        alert("CORRECTO");
      } else {
        $("#" + itemId).remove();
        alert("INCORRECTO");
      }
    }
    if (dropboxType === "Error2") {
      $contador = $contador + 1;
      if (itemType === "err") {
        $puntos = $puntos + 1;
        alert("CORRECTO");
        $("#" + itemId).remove();
      } else {
        $("#" + itemId).remove();
        alert("INCORRECTO");
      }
    }
    if (dropboxType === "Error3") {
      $contador = $contador + 1;
      if (itemType === "errr") {
        $puntos = $puntos + 1;
        alert("CORRECTO");
        $("#" + itemId).remove();
      } else {
        $("#" + itemId).remove();
        alert("INCORRECTO");
      }
    }
    $(event.target).removeClass("itemOnDropArea");
    if ($contador === 1) {
      alert("Los puntos son:" + $puntos);
      $("#Siguiente").show("slow");
    }
    return false;
  });
});
