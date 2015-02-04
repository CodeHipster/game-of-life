define(['grid', 'grid-tools', 'game-of-life', 'grid-visualizer', 'grid-interactor', 'jquery'], function(grid, gridTools, GameOfLife, gridVisualizer, gridInteractor, jquery) {
  var gameController, moduleName;
  moduleName = "game-controller";
  console.log(moduleName);
  return gameController = {
    setupAndRun: function() {
      var lifeloop;
      console.log(moduleName, "setup and run");
      grid.grid[2][0] = true;
      grid.grid[0][1] = true;
      grid.grid[2][1] = true;
      grid.grid[1][2] = true;
      grid.grid[2][2] = true;
      console.log(moduleName, "starting grid:", grid);
      lifeloop = function() {
        grid.grid = GameOfLife.doLogic(grid.grid);
        gridVisualizer.render(grid.grid, canvas);
        return requestAnimationFrame(lifeloop);
      };
      return requestAnimationFrame(lifeloop);
    }
  };
});
