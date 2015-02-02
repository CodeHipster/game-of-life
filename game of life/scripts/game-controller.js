define(['grid-tools', 'game-of-life', 'grid-visualizer', 'jquery'], function(gridTools, GameOfLife, gridVisualizer, jquery) {
  var gameController, moduleName;
  moduleName = "game-controller";
  console.log(moduleName);
  return gameController = {
    setupAndRun: function() {
      var canvas, grid, lifeloop;
      console.log(moduleName, "setup and run");
      grid = gridTools.getEmptyGrid(50, 50);
      canvas = jquery('#canvas')[0];
      console.log(moduleName, canvas);
      grid[2][0] = true;
      grid[0][1] = true;
      grid[2][1] = true;
      grid[1][2] = true;
      grid[2][2] = true;
      console.log(moduleName, "starting grid:", grid);
      lifeloop = function() {
        grid = GameOfLife.doLogic(grid);
        console.log(moduleName, "grid:", grid);
        gridVisualizer.render(grid, canvas);
        return requestAnimationFrame(lifeloop);
      };
      return requestAnimationFrame(lifeloop);
    }
  };
});
