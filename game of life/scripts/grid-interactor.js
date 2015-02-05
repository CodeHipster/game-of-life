
/*
prerequisists: canvas cannot change, as a listener is attached
               grid cannot change as the tilesize is used to calculate which tile is clicked.
 */
define(['grid', 'canvas', 'grid-visualizer'], function(grid, canvas, visualizer) {
  var interactor, moduleName;
  moduleName = "grid-interactor";
  console.log(moduleName);
  interactor = {
    onClick: function(event) {
      var tileSize, x, y;
      console.log(moduleName, "clicked: ", event);
      tileSize = visualizer.tileSize;
      x = Math.floor(event.x / tileSize);
      y = Math.floor(event.y / tileSize);
      return grid.front[x][y] = !grid.front[x][y];
    }
  };
  canvas.addEventListener('click', interactor.onClick, false);
  return interactor;
});
