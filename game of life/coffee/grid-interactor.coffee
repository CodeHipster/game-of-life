# this file contains code for interacting with the grid.
###
prerequisists: canvas cannot change, as a listener is attached
               grid cannot change as the tilesize is used to calculate which tile is clicked.
###
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
      grid.grid[x][y] = !grid.grid[x][y]

  canvas.addEventListener 'click', interactor.onClick, false

  return interactor
