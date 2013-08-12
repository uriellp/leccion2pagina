
var fillTheitems3, handImage;

fillTheitems3 = function() {
  var html, o, item, itemId, itemList, itemType, items3, _results;
  itemList = [];
  o = 0;
  while (o < 4) {
    itemList.push("operelac" + o);
    itemList.push("operlog" + o);
    itemList.push("opermat" + o);
  
    o++;
  }
  itemList.sort(function(a,b,c) {
    return Math.round(Math.random());
  });
  items3 = $(".ejercicio #items3");
  _results = [];
  for (item in itemList) {
    itemId = itemList[item];
    itemType = itemId.substring(0, itemId.length - 1);
    html = "<img id='" + itemId + "' draggable='true' class='item' alt='" + itemType + "' src='/assets/" + itemId + ".png' />";
    _results.push(items3.append(html));
  }
  return _results;
};
handImage = new Image();

$(document).ready(function() {
  var $contador, $puntos;
  $("#Siguiente1").hide();

  $puntos = 0;
  $contador = 0;
  fillTheitems3();
  $(".ejercicio #items3 .item").bind("dragstart", function(event) {
    event.originalEvent.dataTransfer.effectAllowed = "move";
    event.originalEvent.dataTransfer.setData("text/plain", event.target.getAttribute("id"));
    return $(event.target).addClass("itemSelected");
  });
  $(".ejercicio #items3 .item").bind("drag", function(event) {});
  $(".ejercicio #items3 .item").bind("dragend", function(event) {
    return $(event.target).removeClass("itemSelected");
  });
  $(".ejercicio #boxes3 .box").bind("dragenter", function(event) {
    $(event.target).addClass("itemOnDropArea");
    return false;
  });
  $(".ejercicio #boxes3 .box").bind("dragleave", function(event) {
    $(event.target).removeClass("itemOnDropArea");
    return false;
  });
  $(".ejercicio #boxes3 .box").bind("dragover", function(event) {
    event.originalEvent.dataTransfer.dropEffect = "move";
    return false;
  });
  return $(".ejercicio #boxes3 .box").bind("drop", function(event) {
    var dropboxType, itemId, itemType;
    itemId = event.originalEvent.dataTransfer.getData("text/plain");
    itemType = $("#" + itemId).attr("alt");
    dropboxType = $(event.target).attr("id");
    if (dropboxType === "Preg1") {
      $contador = $contador + 1;
      if (itemType === "opermat") {
        $("#" + itemId).remove();
        $puntos = $puntos + 1;
        alert("CORRECTO");	
      } else {
        $("#" + itemId).remove();
        alert("INCORRECTO");
      }
    }
    if (dropboxType === "Preg2") {
      $contador = $contador + 1;
      if (itemType === "operelac") {
        $("#" + itemId).remove();
        $puntos = $puntos + 1;
        alert("CORRECTO");
      } else {
        $("#" + itemId).remove();
        alert("INCORRECTO");
      }
    }
    if (dropboxType === "Preg3") {
      $contador = $contador + 1;
      if (itemType === "operlog") {
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
      $("#Siguiente1").show("slow");
    }
    return false;
  });
});
