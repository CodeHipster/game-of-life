# this file contains code for interacting with the grid.
###
prerequisists: canvas cannot change, as a listener is attached
               grid cannot change as the cellSize is used to calculate which tile is clicked.
###

# todo: draw the tile we are hovering above with a slight red color.
define ['grid','canvas','grid-visualizer', 'grid-tools'], (grid,canvas,visualizer,gridTools) ->
  moduleName = "grid-interactor"
  console.log moduleName

  ### Interactor object ###
  interactor =
    onClick: (event) ->
      console.log moduleName, "clicked: ", event
      cell = visualizer.getCellFromPixels event.x, event.y
      # check if cell falls within the grid.
      if gridTools.isWithinGrid grid.front, cell.x, cell.y
        grid.front[cell.x][cell.y] = !grid.front[cell.x][cell.y]

    onMouseMove: (event) ->
      # check if tile(x,y) is equal to hoverOverTile
      # if not set focus to other tile.

  canvas.addEventListener 'click', interactor.onClick, false
  canvas.addEventListener 'mousemove', interactor.onMouseMove, false

  return interactor
