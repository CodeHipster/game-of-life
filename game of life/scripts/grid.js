
/*
prerequisists: depends on canvas for calculating tileSize
 */
define(['grid-tools'], function(gridTools) {
  var grid, moduleName;
  moduleName = "grid";
  console.log(moduleName);
  grid = {
    grid: null
  };
  grid.grid = gridTools.getEmptyGrid(10, 10);
  return grid;
});
