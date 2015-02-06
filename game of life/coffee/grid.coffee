#The grid object that is being tossed around :D

###
prerequisists: depends on canvas for calculating cellSize
###

#TODO: give grid a backbuffer

define ['grid-tools','lodash'], (gridTools, _) ->
  moduleName = "grid"
  console.log moduleName

  grid =
    front: null
    back: null

  # default value.
  grid.front = gridTools.getEmptyGrid 5,5
  grid.back = _.cloneDeep grid.front

  return grid
