
/*
prerequists:  grid cannot be 0 sized.
              grid is rectangular.
 */
define(['grid-tools', 'jquery'], function(gridTools, jquery) {
  var moduleName, visualizer;
  moduleName = "grid-visualizer";
  console.log(moduleName);
  visualizer = {
    render: function(grid, canvas) {
      var canvasRatio, cell, column, ctx, gridRatio, tileSize, x, y, _i, _j, _len, _len1;
      console.log(moduleName, canvas);
      ctx = canvas.getContext("2d");
      ctx.strokeStyle = "#000000";
      ctx.fillStyle = "#ff0000";
      ctx.lineWidth = "2";
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      gridRatio = grid.length / grid[0].length;
      canvasRatio = canvas.width / canvas.height;
      if (canvasRatio > gridRatio) {
        console.log(moduleName, "canvas relative width is greater than grid relative width");
        tileSize = canvas.height / grid[0].length;
      } else {
        console.log(moduleName, "canvas relative width is smaller than grid relative width");
        tileSize = canvas.width / grid.length;
      }
      ctx.beginPath();
      console.log(moduleName, "tile size: " + tileSize);
      for (x = _i = 0, _len = grid.length; _i < _len; x = ++_i) {
        column = grid[x];
        for (y = _j = 0, _len1 = column.length; _j < _len1; y = ++_j) {
          cell = column[y];
          console.log(moduleName, "drawing cell x:" + x + ", y:" + y);
          ctx.rect(x * tileSize, y * tileSize, tileSize, tileSize);
          if (cell) {
            ctx.fillRect(x * tileSize, y * tileSize, tileSize, tileSize);
          }
        }
      }
      return ctx.stroke();
    }
  };
  return visualizer;
});
