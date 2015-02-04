#The grid object that is being tossed around :D

###
prerequisists: depends on canvas for calculating tileSize
###

define ['grid-tools'], (gridTools) ->
  moduleName = "grid"
  console.log moduleName

  grid =
    grid: null

  # default value.
  grid.grid = gridTools.getEmptyGrid 10,10

  return grid
