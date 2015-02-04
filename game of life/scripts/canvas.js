define(['jquery'], function(jquery) {
  var canvas, context, moduleName;
  moduleName = "canvas";
  console.log(moduleName);
  canvas = document.getElementById("canvas");
  if (canvas.getContext) {
    context = canvas.getContext('2d');
  } else {
    throw new Error("canvas context unavailable");
  }
  return canvas;
});
