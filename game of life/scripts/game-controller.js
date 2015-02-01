define(['grid-tools', 'game-of-life'], function(gridTools, GameOfLife) {
  var gameController, moduleName;
  moduleName = "game-controller";
  console.log(moduleName);
  return gameController = {
    setupAndRun: function() {
      var grid;
      console.log(moduleName, "setup and run");
      grid = gridTools.getEmptyGrid(3, 3);
      grid[0][0] = true;
      grid[2][0] = true;
      grid[0][1] = true;
      grid[1][1] = true;
      console.log(moduleName, "grid:", grid);
      grid = GameOfLife.doLogic(grid);
      console.log(moduleName, "grid:", grid);
      grid = GameOfLife.doLogic(grid);
      return console.log(moduleName, "grid:", grid);
    }
  };
});
