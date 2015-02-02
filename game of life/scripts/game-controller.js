define(['grid-tools', 'game-of-life', 'grid-visualizer', 'jquery'], function(gridTools, GameOfLife, gridVisualizer, jquery) {
  var gameController, moduleName;
  moduleName = "game-controller";
  console.log(moduleName);
  return gameController = {
    setupAndRun: function() {
      var canvas, grid, lifeloop;
      console.log(moduleName, "setup and run");
      grid = gridTools.getEmptyGrid(3, 3);
      canvas = jquery('#canvas');
      console.log(moduleName, canvas);
      grid[0][0] = true;
      grid[2][0] = true;
      grid[0][1] = true;
      grid[1][1] = true;
      console.log(moduleName, "starting grid:", grid);
      return lifeloop = function(timeStamp) {
        grid = GameOfLife.doLogic(grid);
        console.log(moduleName, "grid:", grid);
        return gridVisualizer.render(grid, canvas);
      };
    }
  };
});
