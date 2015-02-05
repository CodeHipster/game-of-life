# this file contains code for interacting with the grid.
###
prerequisists: canvas cannot change, as a listener is attached
               grid cannot change as the tilesize is used to calculate which tile is clicked.
###

# todo: draw the tile we are hovering above with a slight red color.
define ['grid','canvas','grid-visualizer'], (grid,canvas,visualizer) ->
  moduleName = "grid-interactor"
  console.log moduleName

  interactor =
    onClick: (event) ->
      console.log moduleName, "clicked: ", event
      # Calculate where the mouse click happened
      tileSize = visualizer.tileSize
      x = Math.floor(event.x / tileSize)
      y = Math.floor(event.y / tileSize)
      #TODO: check if x and y are within grid :)
      grid.front[x][y] = !grid.front[x][y]

  canvas.addEventListener 'click', interactor.onClick, false

  return interactor
