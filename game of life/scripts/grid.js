
/*
prerequisists: depends on canvas for calculating cellSize
 */
define(['grid-tools', 'lodash'], function(gridTools, _) {
  var grid, moduleName;
  moduleName = "grid";
  console.log(moduleName);
  grid = {
    front: null,
    back: null
  };
  grid.front = gridTools.getEmptyGrid(50, 50);
  grid.back = _.cloneDeep(grid.front);
  return grid;
});
