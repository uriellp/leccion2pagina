
var fillTheitems2, handImage;

fillTheitems2 = function() {
  var html, p, item, itemId, itemList, itemType, items2, _results;
  itemList = [];
  p = 0;
  while (p < 1) {
    itemList.push("a" + p);
    itemList.push("s" + p);
    itemList.push("d" + p);
    itemList.push("f" + p);
    itemList.push("g" + p);
    itemList.push("h" + p);
    itemList.push("j" + p);
    p++;
  }
  itemList.sort(function(a,b,c,d,e,f,g) {
    return Math.round(Math.random());
  });
  items2 = $(".ejercicio #items2");
  _results = [];
  for (item in itemList) {
    itemId = itemList[item];
    itemType = itemId.substring(0, itemId.length - 1);
    html = "<img id='" + itemId + "' draggable='true' class='item' alt='" + itemType + "' src='/assets/" + itemId + ".png' />";
    _results.push(items2.append(html));
  }
  return _results;
};
handImage = new Image();

$(document).ready(function() {
  var $contador, $puntos;
  $("#Siguiente1").hide();

  $puntos = 0;
  $contador = 0;
  fillTheitems2();
  $(".ejercicio #items2 .item").bind("dragstart", function(event) {
    event.originalEvent.dataTransfer.effectAllowed = "move";
    event.originalEvent.dataTransfer.setData("text/plain", event.target.getAttribute("id"));
    return $(event.target).addClass("itemSelected");
  });
  $(".ejercicio #items2 .item").bind("drag", function(event) {});
  $(".ejercicio #items2 .item").bind("dragend", function(event) {
    return $(event.target).removeClass("itemSelected");
  });
  $(".ejercicio #boxes2 .box").bind("dragenter", function(event) {
    $(event.target).addClass("itemOnDropArea");
    return false;
  });
  $(".ejercicio #boxes2 .box").bind("dragleave", function(event) {
    $(event.target).removeClass("itemOnDropArea");
    return false;
  });
  $(".ejercicio #boxes2 .box").bind("dragover", function(event) {
    event.originalEvent.dataTransfer.dropEffect = "move";
    return false;
  });
  return $(".ejercicio #boxes2 .box").bind("drop", function(event) {
    var dropboxType, itemId, itemType;
    itemId = event.originalEvent.dataTransfer.getData("text/plain");
    itemType = $("#" + itemId).attr("alt");
    dropboxType = $(event.target).attr("id");
    if (dropboxType === "Pregunta1") {
      $contador = $contador + 1;
      if (itemType === "a") {
        $("#" + itemId).remove();
        $puntos = $puntos + 1;
        alert("CORRECTO");	
      } else {
        $("#" + itemId).remove();
        alert("INCORRECTO");
      }
    }
    if (dropboxType === "Pregunta2") {
      $contador = $contador + 1;
      if (itemType === "s") {
        $("#" + itemId).remove();
        $puntos = $puntos + 1;
        alert("CORRECTO");
      } else {
        $("#" + itemId).remove();
        alert("INCORRECTO");
      }
    }
    if (dropboxType === "Pregunta3") {
      $contador = $contador + 1;
      if (itemType === "d") {
        $puntos = $puntos + 1;
        alert("CORRECTO");
        $("#" + itemId).remove();
      } else {
        $("#" + itemId).remove();
        alert("INCORRECTO");
      }
    }
    if (dropboxType === "Pregunta4") {
      $contador = $contador + 1;
      if (itemType === "f") {
        $puntos = $puntos + 1;
        alert("CORRECTO");
        $("#" + itemId).remove();
      } else {
        $("#" + itemId).remove();
        alert("INCORRECTO");
      }
    }
    if (dropboxType === "Pregunta5") {
      $contador = $contador + 1;
      if (itemType === "g") {
        $puntos = $puntos + 1;
        alert("CORRECTO");
        $("#" + itemId).remove();
      } else {
        $("#" + itemId).remove();
        alert("INCORRECTO");
      }
    }
    if (dropboxType === "Pregunta6") {
      $contador = $contador + 1;
      if (itemType === "h") {
        $puntos = $puntos + 1;
        alert("CORRECTO");
        $("#" + itemId).remove();
      } else {
        $("#" + itemId).remove();
        alert("INCORRECTO");
      }
    }
    if (dropboxType === "Pregunta7") {
      $contador = $contador + 1;
      if (itemType === "j") {
        $puntos = $puntos + 1;
        alert("CORRECTO");
        $("#" + itemId).remove();
      } else {
        $("#" + itemId).remove();
        alert("INCORRECTO");
      }
    }
    $(event.target).removeClass("itemOnDropArea");
    if ($contador === 7) {
      alert("Los puntos son:" + $puntos);
      $("#Siguiente1").show("slow");
    }
    return false;
  });
});
