var fillTheItems, handImage;

fillTheItems = function() {
  var html, i, item, itemId, itemList, itemType, items, _results;
  itemList = [];
  i = 0;
  while (i < 3) {
    itemList.push("cad" + i);
    itemList.push("ent" + i);
    itemList.push("car" + i);
    itemList.push("float" + i);
    i++;
  }
  itemList.sort(function(a, b, c, d) {
    return Math.round(Math.random());
  });
  items = $(".ejercicio #items");
  _results = [];
  for (item in itemList) {
    itemId = itemList[item];
    itemType = itemId.substring(0, itemId.length - 1);
    html = "<img id='" + itemId + "' draggable='true' class='item' alt='" + itemType + "' src='/assets/" + itemId + ".png' />";
    _results.push(items.append(html));
  }
  return _results;
};

handImage = new Image();

$(document).ready(function() {
$(function(){ $( "#f1" ).dialog({autoOpen: false,show: "blind",  width: 90, height:55 });              });
  var $contador, $puntos;
  $("#Siguiente").hide();
  
  $puntos = 0;
  $contador = 0;
  fillTheItems();
  $(".ejercicio #items .item").bind("dragstart", function(event) {
    event.originalEvent.dataTransfer.effectAllowed = "move";
    event.originalEvent.dataTransfer.setData("text/plain", event.target.getAttribute("id"));
    return $(event.target).addClass("itemSelected");
  });
  $(".ejercicio #items .item").bind("drag", function(event) {});
  $(".ejercicio #items .item").bind("dragend", function(event) {
    return $(event.target).removeClass("itemSelected");
  });
  $(".ejercicio #boxes .box").bind("dragenter", function(event) {
    $(event.target).addClass("itemOnDropArea");
    return false;
  });
  $(".ejercicio #boxes .box").bind("dragleave", function(event) {
    $(event.target).removeClass("itemOnDropArea");
    return false;
  });
  $(".ejercicio #boxes .box").bind("dragover", function(event) {
    event.originalEvent.dataTransfer.dropEffect = "move";
    return false;
  });
  return $(".ejercicio #boxes .box").bind("drop", function(event) {
    var dropboxType, itemId, itemType;
    itemId = event.originalEvent.dataTransfer.getData("text/plain");
    itemType = $("#" + itemId).attr("alt");
    dropboxType = $(event.target).attr("id");
    if (dropboxType === "Caracter") {
      $contador = $contador + 1;
      if (itemType === "Car") {
        $("#" + itemId).remove();
        $puntos = $puntos + 1;
        alert("CORRECTO");
      } else {
        $("#" + itemId).remove();
        alert("INCORRECTO");
      }
    }
    if (dropboxType === "Entero") {
      $contador = $contador + 1;
      if (itemType === "ent") {
        $("#" + itemId).remove();
        $puntos = $puntos + 1;
       alert("CORRECTO");
      } else {
        $("#" + itemId).remove();
       alert("INCORRECTO");
      }
    }
    if (dropboxType === "Cadena") {
      $contador = $contador + 1;
      if (itemType === "cad") {
        $puntos = $puntos + 1;
        alert("CORRECTO");
        $("#" + itemId).remove();
      } else {
        $("#" + itemId).remove();
        alert("INCORRECTO");
      }
    }
    if (dropboxType === "Flotante") {
      $contador = $contador + 1;
      if (itemType === "float") {
        $puntos = $puntos + 1;
        alert("CORRECTO");
        $("#" + itemId).remove();
      } else {
        $("#" + itemId).remove();
        alert("INCORRECTO");
      }
    }
    $(event.target).removeClass("itemOnDropArea");
    if ($contador === 12) {
      alert("Los puntos son:" + $puntos);
      $("#Siguiente").show("slow");
    }
    return false;
  });
});
