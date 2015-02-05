
/*
prerequists:  grid cannot be 0 sized.
              grid is rectangular.
 */
define(['grid-tools', 'jquery', 'canvas', 'grid'], function(gridTools, jquery, canvas, grid) {
  var canvasRatio, ctx, gridRatio, moduleName, tileSize, visualizer;
  moduleName = "grid-visualizer";
  console.log(moduleName);
  visualizer = {
    tileSize: null,
    context: null,
    render: function(grid) {
      var cell, column, x, y, _i, _j, _len, _len1;
      this.context.clearRect(0, 0, canvas.width, canvas.height);
      this.context.strokeStyle = "#000000";
      this.context.fillStyle = "#ff0000";
      this.context.lineWidth = "2";
      this.context.beginPath();
      for (x = _i = 0, _len = grid.length; _i < _len; x = ++_i) {
        column = grid[x];
        for (y = _j = 0, _len1 = column.length; _j < _len1; y = ++_j) {
          cell = column[y];
          this.context.rect(x * this.tileSize, y * this.tileSize, this.tileSize, this.tileSize);
          if (cell) {
            this.context.fillRect(x * this.tileSize, y * this.tileSize, this.tileSize, this.tileSize);
          }
        }
      }
      return this.context.stroke();
    }
  };
  ctx = canvas.getContext("2d");
  visualizer.context = ctx;
  gridRatio = grid.grid.length / grid.grid[0].length;
  canvasRatio = canvas.width / canvas.height;
  if (canvasRatio > gridRatio) {
    tileSize = canvas.height / grid.grid[0].length;
  } else {
    tileSize = canvas.width / grid.grid.length;
  }
  console.log(tileSize, canvas.width, canvas.height);
  visualizer.tileSize = tileSize;
  return visualizer;
});
