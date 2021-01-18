//function testWebP(callback) {

//   var webP = new Image();
//   webP.onload = webP.onerror = function () {
//      callback(webP.height == 2);
//   };
//   webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
//}

let $slider = $("#slider");
let $fill = $(".bar .fill");

function setBar() {
   $fill.css("width", $slider.val() + "%");
}

$slider.on("input", setBar);

setBar();