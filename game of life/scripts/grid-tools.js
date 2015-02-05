define(['jquery'], function(jquery) {
  var gridTools, isEdgeOfGrid, moduleName;
  moduleName = "grid-tools";
  console.log(moduleName);
  isEdgeOfGrid = function(grid, x, y) {
    if (x <= 1 || x >= grid.length - 2 || y <= 1 || y >= grid[0].length - 2) {
      return true;
    }
  };
  gridTools = {
    clean: function(grid) {
      grid.forEach(function(column) {
        return column.forEach(function(cell, i) {
          return column[i] = false;
        });
      });
      return grid;
    },
    swap: function(grid) {
      var temp;
      temp = grid.front;
      grid.front = grid.back;
      return grid.back = temp;
    },
    getEmptyGrid: function(width, height) {
      var grid, x, y, _i, _j, _ref, _ref1;
      grid = [];
      for (x = _i = 0, _ref = width - 1; 0 <= _ref ? _i <= _ref : _i >= _ref; x = 0 <= _ref ? ++_i : --_i) {
        grid[x] = [];
        for (y = _j = 0, _ref1 = height - 1; 0 <= _ref1 ? _j <= _ref1 : _j >= _ref1; y = 0 <= _ref1 ? ++_j : --_j) {
          grid[x][y] = false;
        }
      }
      return grid;
    },

    /*return count of alive neighbours.
    		neighbours:
    		[0][1][2]
    		[3][c][4]
    		[5][6][7]
    		neighbours that fall outside the grid are undefined.
     */
    getNrOfNeighbours: function(grid, x, y) {
      var count, index, n, neighbours, _i, _len, _ref, _ref1, _ref2, _ref3, _ref4, _ref5, _ref6, _ref7;
      neighbours = [(_ref = grid[x - 1]) != null ? _ref[y - 1] : void 0, (_ref1 = grid[x]) != null ? _ref1[y - 1] : void 0, (_ref2 = grid[x + 1]) != null ? _ref2[y - 1] : void 0, (_ref3 = grid[x - 1]) != null ? _ref3[y] : void 0, (_ref4 = grid[x + 1]) != null ? _ref4[y] : void 0, (_ref5 = grid[x - 1]) != null ? _ref5[y + 1] : void 0, (_ref6 = grid[x]) != null ? _ref6[y + 1] : void 0, (_ref7 = grid[x + 1]) != null ? _ref7[y + 1] : void 0];
      count = 0;
      for (index = _i = 0, _len = neighbours.length; _i < _len; index = ++_i) {
        n = neighbours[index];
        if (n === true) {
          count = count + 1;
        }
      }
      return count;
    }
  };
  return gridTools;
});
