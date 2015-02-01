
/*
The universe of the Game of Life is an infinite two-dimensional orthogonal grid of square cells, each of which is in one of two possible states, alive or dead. Every cell interacts with its eight neighbours, which are the cells that are horizontally, vertically, or diagonally adjacent. At each step in time, the following transitions occur:

Any live cell with fewer than two live neighbours dies, as if caused by under-population.
Any live cell with two or three live neighbours lives on to the next generation.
Any live cell with more than three live neighbours dies, as if by overcrowding.
Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
The initial pattern constitutes the seed of the system. The first generation is created by applying the above rules simultaneously to every cell in the seed—births and deaths occur simultaneously, and the discrete moment at which this happens is sometimes called a tick (in other words, each generation is a pure function of the preceding one). The rules continue to be applied repeatedly to create further generations.
 */

/*
neighbours:
[0][1][2]
[3][c][4]
[5][6][7]
 */
define(['grid-tools'], function(gridTools) {
  var gameOfLife, getCountLivingNeighbours;
  console.log("game-of-life");
  getCountLivingNeighbours = function(neighbours) {
    var count;
    console.log("getting count of living neighbours");
    count = 0;
    neighbours.forEach(function(n) {
      if (n === true) {
        return count = count + 1;
      }
    });
    return count;
  };
  return gameOfLife = {
    doLogic: function(grid) {
      var cell, column, nrNeighbours, x, y, _i, _len, _results;
      console.log("doing logic.");
      _results = [];
      for (x = _i = 0, _len = grid.length; _i < _len; x = ++_i) {
        column = grid[x];
        _results.push((function() {
          var _j, _len1, _results1;
          _results1 = [];
          for (y = _j = 0, _len1 = column.length; _j < _len1; y = ++_j) {
            cell = column[y];
            console.log("logic for x: " + x + " y: " + y);
            nrNeighbours = getCountLivingNeighbours(gridTools.getNeighbours(grid, x, y));
            _results1.push(console.log("live neighbours: " + nrNeighbours));
          }
          return _results1;
        })());
      }
      return _results;
    }
  };
});
