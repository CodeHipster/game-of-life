
/*
prerequists:  grid cannot be 0 sized.
        grid is rectangular.
 */
define(['grid-tools', 'jquery', 'canvas', 'grid'], function(gridTools, jquery, canvas, grid) {
  var canvasRatio, cellSize, ctx, gridRatio, moduleName, visualizer;
  moduleName = "grid-visualizer";
  console.log(moduleName);
  visualizer = {
    cellSize: null,
    context: null,
    hoverOverCell: null,
    getCellFromPixels: function(x, y) {
      var tx, ty;
      tx = Math.floor(x / cellSize);
      ty = Math.floor(y / cellSize);
      return {
        x: tx,
        y: ty
      };
    },
    render: function(grid) {
      var cell, column, hover, x, y, _i, _j, _len, _len1;
      this.context.clearRect(0, 0, canvas.width, canvas.height);
      this.context.strokeStyle = "#000000";
      this.context.fillStyle = "#ff0000";
      this.context.lineWidth = "2";
      this.context.beginPath();
      for (x = _i = 0, _len = grid.length; _i < _len; x = ++_i) {
        column = grid[x];
        for (y = _j = 0, _len1 = column.length; _j < _len1; y = ++_j) {
          cell = column[y];
          this.context.rect(x * this.cellSize, y * this.cellSize, this.cellSize, this.cellSize);
          if (cell) {
            this.context.fillRect(x * this.cellSize, y * this.cellSize, this.cellSize, this.cellSize);
          }
        }
      }
      hover = this.hoverOverCell;
      if (hover && gridTools.isWithinGrid(grid, hover.x, hover.y)) {
        if (grid[hover.x][hover.y]) {
          this.context.fillStyle = "#FFE0E0";
        } else {
          this.context.fillStyle = "#D10000";
        }
        this.context.fillRect(hover.x * this.cellSize, hover.y * this.cellSize, this.cellSize, this.cellSize);
      }
      return this.context.stroke();
    }
  };
  ctx = canvas.getContext("2d");
  visualizer.context = ctx;
  gridRatio = grid.front.length / grid.front[0].length;
  canvasRatio = canvas.width / canvas.height;
  if (canvasRatio > gridRatio) {
    cellSize = canvas.height / grid.front[0].length;
  } else {
    cellSize = canvas.width / grid.front.length;
  }
  console.log(cellSize, canvas.width, canvas.height);
  visualizer.cellSize = cellSize;
  return visualizer;
});
