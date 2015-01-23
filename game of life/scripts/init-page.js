define(['jquery'], function(jquery) {
  var reloadScrollBars, unloadScrollBars;
  reloadScrollBars = function() {
    document.documentElement.style.overflow = "auto";
    return document.body.scroll = "yes";
  };
  unloadScrollBars = function() {
    document.documentElement.style.overflow = "hidden";
    return document.body.scroll = "no";
  };
  return {
    setupPage: function() {
      var canvas, context;
      console.log("Setting up page.");
      jquery("body").css("margin", 0);
      canvas = document.getElementById("canvas");
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      unloadScrollBars();
      if (canvas.getContext) {
        context = canvas.getContext('2d');
        context.fillStyle = '#00ff00';
        context.strokeStyle = '#ff0000';
        context.lineWidth = 1;
        return context.font = "16px Arial";
      } else {
        throw new Error("canvas context unavailable");
      }
    }
  };
});
