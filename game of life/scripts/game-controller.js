define(['grid', 'game-of-life', 'grid-visualizer', 'grid-interactor', 'timer'], function(grid, GameOfLife, gridVisualizer, gridInteractor, timer) {
  var gameController, moduleName;
  moduleName = "game-controller";
  console.log(moduleName);
  return gameController = {
    iterationsPerSecond: 5,
    setupAndRun: function() {
      var logicloop, renderloop;
      console.log(moduleName, "setup and run");
      grid.front[2][0] = true;
      grid.front[0][1] = true;
      grid.front[2][1] = true;
      grid.front[1][2] = true;
      grid.front[2][2] = true;
      console.log(moduleName, "starting grid:", grid.front);
      renderloop = function() {
        return gridVisualizer.render(grid.front, canvas);
      };
      logicloop = function() {
        return GameOfLife.doLogic(grid);
      };
      timer.runAtInterval(200, logicloop);
      return timer.runAtInterval(33, renderloop);
    }
  };
});
