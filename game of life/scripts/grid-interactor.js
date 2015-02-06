
/*
prerequisists: canvas cannot change, as a listener is attached
               grid cannot change as the cellSize is used to calculate which tile is clicked.
 */
define(['grid', 'canvas', 'grid-visualizer', 'grid-tools'], function(grid, canvas, visualizer, gridTools) {
  var interactor, moduleName;
  moduleName = "grid-interactor";
  console.log(moduleName);

  /* Interactor object */
  interactor = {
    onClick: function(event) {
      var cell;
      console.log(moduleName, "clicked: ", event);
      cell = visualizer.getCellFromPixels(event.x, event.y);
      if (gridTools.isWithinGrid(grid.front, cell.x, cell.y)) {
        return grid.front[cell.x][cell.y] = !grid.front[cell.x][cell.y];
      }
    },
    onMouseMove: function(event) {}
  };
  canvas.addEventListener('click', interactor.onClick, false);
  canvas.addEventListener('mousemove', interactor.onMouseMove, false);
  return interactor;
});
