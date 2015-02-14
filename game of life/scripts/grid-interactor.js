
/*
prerequisists: canvas cannot change, as a listener is attached
               grid cannot change as the cellSize is used to calculate which tile is clicked.
 */
define(['grid', 'jq-canvas', 'grid-visualizer', 'grid-tools', 'game-controller', 'jquery'], function(grid, jqCanvas, visualizer, gridTools, gameController, jquery) {
  var interactor, moduleName;
  moduleName = "grid-interactor";
  console.log(moduleName);
  console.log("gamecontroller (interactor):", gameController);

  /* Interactor object */
  interactor = {
    onClick: function(event) {
      var cell;
      console.log(moduleName, "clicked: ", event);
      cell = visualizer.getCellFromPixels(event.offsetX, event.offsetY);
      if (gridTools.isWithinGrid(grid.front, cell.x, cell.y)) {
        return grid.front[cell.x][cell.y] = !grid.front[cell.x][cell.y];
      }
    },
    onMouseMove: function(event) {
      var cell;
      cell = visualizer.getCellFromPixels(event.offsetX, event.offsetY);
      return visualizer.hoverOverCell = cell;
    },
    onPauseClick: function(event) {
      gameController.paused = !gameController.paused;
      return console.log("after:", gameController.paused);
    }
  };
  jqCanvas.click(interactor.onClick);
  jqCanvas.mousemove(interactor.onMouseMove);
  jquery("#pauseBtn").click(interactor.onPauseClick);
  return interactor;
});
