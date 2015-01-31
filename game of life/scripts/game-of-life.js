define(['grid/grid'], function(Grid) {
  var module;
  console.log("game-of-life");
  module = {
    setupAndRun: function() {
      var grid;
      console.log("setup and run");
      grid = new Grid(10, 10);
      return console.log("tiles: ", grid.tiles);
    }
  };
  return module;
});
