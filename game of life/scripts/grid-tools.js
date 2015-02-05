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
    getEmptyGrid: function(width, height) {
      var tiles, x, y, _i, _ref, _results;
      console.log(moduleName, "constructing grid");
      tiles = [];
      _results = [];
      for (x = _i = 0, _ref = width - 1; 0 <= _ref ? _i <= _ref : _i >= _ref; x = 0 <= _ref ? ++_i : --_i) {
        tiles[x] = [];
        _results.push((function() {
          var _j, _ref1, _results1;
          _results1 = [];
          for (y = _j = 0, _ref1 = height - 1; 0 <= _ref1 ? _j <= _ref1 : _j >= _ref1; y = 0 <= _ref1 ? ++_j : --_j) {
            _results1.push(tiles[x][y] = false);
          }
          return _results1;
        })());
      }
      return _results;
    },

    /*return all 8 neighbours.
    		neighbours:
    		[0][1][2]
    		[3][c][4]
    		[5][6][7]
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
      return neighbours;
    },
    setNeighbours: function(grid, neighbours, x, y) {
      var gridNeighbours;
      if (isEdgeOfGrid(grid, x, y)) {
        gridNeighbours = getNeighbours(grid, x, y);
        gridNeighbours.forEach(function(nb, index) {
          if (nb === void 0) {
            return neighbours[index] = nb;
          }
        });
      }
      grid[x - 1][y - 1] = neighbours[0];
      grid[x][y - 1] = neighbours[1];
      grid[x + 1][y - 1] = neighbours[2];
      grid[x - 1][y] = neighbours[3];
      grid[x + 1][y] = neighbours[4];
      grid[x - 1][y + 1] = neighbours[5];
      grid[x][y + 1] = neighbours[6];
      return grid[x + 1][y + 1] = neighbours[7];
    }
  };
  return gridTools;
});
