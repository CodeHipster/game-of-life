define(['jquery', 'jq-canvas'], function(jquery, jqCanvas) {
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
  jqCanvas[0].width = window.innerWidth;
  jqCanvas[0].height = window.innerHeight - 50;
  unloadScrollBars();
  return true;
});
