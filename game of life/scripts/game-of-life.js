
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
  var gameOfLife, getCountLivingNeighbours, moduleName;
  moduleName = "game-of-life";
  console.log(moduleName);
  getCountLivingNeighbours = function(neighbours) {
    var count;
    console.log(moduleName, "getting count of living neighbours");
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
      var cell, column, newGrid, nrNeighbours, x, y, _i, _j, _len, _len1;
      console.log(moduleName, "doing logic. on grid:", grid);
      newGrid = gridTools.getEmptyGrid(grid.length, grid[0].length);
      for (x = _i = 0, _len = grid.length; _i < _len; x = ++_i) {
        column = grid[x];
        for (y = _j = 0, _len1 = column.length; _j < _len1; y = ++_j) {
          cell = column[y];
          console.log(moduleName, "logic for x: " + x + " y: " + y);
          nrNeighbours = getCountLivingNeighbours(gridTools.getNeighbours(grid, x, y));
          console.log(moduleName, "live neighbours: " + nrNeighbours);
          if (grid[x][y]) {
            if (nrNeighbours < 2) {
              newGrid[x][y] = false;
              console.log(moduleName, "cell dies");
            } else if (nrNeighbours > 3) {
              newGrid[x][y] = false;
              console.log(moduleName, "cell dies");
            } else {
              newGrid[x][y] = true;
              console.log(moduleName, "cell stays alive");
            }
          } else {
            if (nrNeighbours === 3) {
              newGrid[x][y] = true;
              console.log(moduleName, "cell revives");
            }
          }
        }
      }
      return newGrid;
    }
  };
});
