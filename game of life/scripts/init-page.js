define(['jquery', 'canvas'], function(jquery, canvas) {
  var moduleName, reloadScrollBars, unloadScrollBars;
  moduleName = "init-page";
  console.log(moduleName);
  reloadScrollBars = function() {
    document.documentElement.style.overflow = "auto";
    return document.body.scroll = "yes";
  };
  unloadScrollBars = function() {
    document.documentElement.style.overflow = "hidden";
    return document.body.scroll = "no";
  };
  console.log(moduleName, "Setting up page.");
  jquery("body").css("margin", 0);
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  unloadScrollBars();
  return void 0;
});
