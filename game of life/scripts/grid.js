
/*
prerequisists: depends on canvas for calculating tileSize
 */
define(['grid-tools', 'lodash'], function(gridTools, _) {
  var grid, moduleName;
  moduleName = "grid";
  console.log(moduleName);
  grid = {
    front: null,
    back: null
  };
  grid.front = gridTools.getEmptyGrid(5, 5);
  grid.back = _.cloneDeep(grid.front);
  return grid;
});
