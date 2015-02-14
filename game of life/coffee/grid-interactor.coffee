# this file contains code for interacting with the grid.
###
prerequisists: canvas cannot change, as a listener is attached
               grid cannot change as the cellSize is used to calculate which tile is clicked.
###

# todo: draw the tile we are hovering above with a slight red color.
define ['grid','jq-canvas','grid-visualizer','grid-tools','game-controller','jquery']
, (grid,jqCanvas,visualizer,gridTools,gameController,jquery) ->
  moduleName = "grid-interactor"
  console.log moduleName

  console.log "gamecontroller (interactor):", gameController
  ### Interactor object ###
  interactor =
    onClick: (event) ->
      console.log moduleName, "clicked: ", event
      cell = visualizer.getCellFromPixels event.offsetX, event.offsetY
      # check if cell falls within the grid.
      if gridTools.isWithinGrid grid.front, cell.x, cell.y
        grid.front[cell.x][cell.y] = !grid.front[cell.x][cell.y]

    onMouseMove: (event) ->
      #NOTE, cell could be outside of the grid.
      #console.log moduleName, "moved: ", event
      cell = visualizer.getCellFromPixels event.offsetX, event.offsetY
      visualizer.hoverOverCell = cell

    onPauseClick: (event) ->
      gameController.paused = !gameController.paused
      console.log "after:", gameController.paused

  jqCanvas.click interactor.onClick
  jqCanvas.mousemove interactor.onMouseMove
  jquery "#pauseBtn" #TODO: make an interface, we don't want to use the frontend in here.
  .click interactor.onPauseClick

  return interactor
